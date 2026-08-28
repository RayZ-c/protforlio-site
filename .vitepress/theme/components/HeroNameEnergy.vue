<script setup>
/**
 * HERO ENERGY FIELD
 * ---------------------------------------------------------------------------
 * Canvas layer covering the whole hero, sitting above the scrim and below the
 * copy:
 *
 *   · Glowing dot field — a sparse drift of small dots, slightly varied in
 *                         size and tint, rising slowly across the full hero,
 *                         masked out above the chapter deck.
 *                         Count scales with viewport area so the density stays
 *                         even from phone to desktop instead of the field
 *                         thinning out on large screens.
 *   · Cursor swirl      — moving the pointer near the field applies a
 *                         tangential (curl) force plus a light inward pull, so
 *                         the flames eddy around the cursor. Nearby particles
 *                         also link with faint filaments. Adapted from the
 *                         21st.dev "aether flow" idea (React + canvas) and
 *                         rebuilt in plain Vue + canvas.
 *   · Click shockwave   — a pointerdown spawns an expanding ring that shoves
 *                         the dots outward. Purely a canvas effect; it does
 *                         not touch the headline's chromatic ghosts, which
 *                         run on their own independent loop in ShowreelHero.
 *
 * The canvas never receives pointer events; it listens on its host section so
 * every button and link underneath keeps working normally.
 *
 * Everything tuneable lives in ENERGY_CONFIG. Under prefers-reduced-motion the
 * component renders nothing at all and attaches no listeners.
 */
import { onBeforeUnmount, onMounted, ref } from 'vue'

const ENERGY_CONFIG = {
  // Which ancestor to size against and track the pointer on.
  hostSelector: '.sr-hero',

  // ---- glowing dot field ----
  // Small, sparse, slow. Raising particleCount much past ~20 starts to read as
  // noise over the footage rather than as atmosphere.
  // Reference count at 1440x900; scaled by actual area, then clamped.
  particleCount: 42,
  particleCountMin: 14,
  particleCountMax: 72,
  riseSpeedMin: 0.08,
  riseSpeedMax: 0.22,
  dotMin: 1.6, // core radius in px
  dotMax: 4.4,
  glowScale: 5, // halo radius = core radius * this
  swayAmplitude: 0.18,
  swaySpeed: 0.009,
  lifeMin: 320,
  lifeMax: 700,
  edgeMargin: 60, // px of slack beyond each edge before a dot is recycled

  // Dots are faded out above this element so they never sit over the chapter
  // selector. The lead is how far above it (as a % of hero height) the fade
  // begins, so it dissolves rather than cutting off on a hard line.
  fadeAboveSelector: '.sr-deck',
  fadeLeadPercent: 14,

  // Slight colour variation. Mostly warm; the pale and cool entries are the
  // occasional accent so the field is not a flat single hue.
  tints: [
    [255, 186, 104],
    [255, 214, 158],
    [255, 158, 62],
    [255, 226, 190],
    [176, 205, 255]
  ],
  coolTintChance: 0.14, // odds of picking the last (cool) tint

  // ---- cursor swirl (hover) ----
  swirlRadius: 200,
  swirlStrength: 0.5,
  swirlPull: 0.05,
  pointerEase: 0.16,

  // ---- filaments ---- (off: too sparse a field to read as a weave)
  linkEnabled: false,
  linkDistance: 94,
  linkAlpha: 0.15,

  // ---- click shockwave ----
  shockSpeed: 9,
  shockMaxRadius: 540,
  shockThickness: 46,
  shockPush: 6
}

const canvas = ref(null)
const reducedMotion = ref(false)
let cleanup = () => {}

onMounted(() => {
  reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion.value) return

  const cv = canvas.value
  const ctx = cv.getContext('2d')
  const host = cv.closest(ENERGY_CONFIG.hostSelector) || cv.parentElement
  const dpr = Math.min(window.devicePixelRatio || 1, 2)

  const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false }
  const particles = []
  const shocks = []
  let field = { w: 0, h: 0 }
  let frame = null
  let running = false

  const rand = (a, b) => a + Math.random() * (b - a)

  const targetCount = () => {
    const scaled = Math.round(
      (ENERGY_CONFIG.particleCount * field.w * field.h) / (1440 * 900)
    )
    return Math.max(
      ENERGY_CONFIG.particleCountMin,
      Math.min(ENERGY_CONFIG.particleCountMax, scaled)
    )
  }

  const measure = () => {
    const rect = host.getBoundingClientRect()
    field = { w: rect.width, h: rect.height }
    cv.width = Math.max(1, Math.round(rect.width * dpr))
    cv.height = Math.max(1, Math.round(rect.height * dpr))
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    // Fade the field out just above the chapter deck.
    const fadeEl = host.querySelector(ENERGY_CONFIG.fadeAboveSelector)
    if (fadeEl && field.h) {
      const end = ((fadeEl.getBoundingClientRect().top - rect.top) / field.h) * 100
      const start = Math.max(0, end - ENERGY_CONFIG.fadeLeadPercent)
      const mask = `linear-gradient(180deg, #000 ${start.toFixed(2)}%, transparent ${end.toFixed(2)}%)`
      cv.style.webkitMaskImage = mask
      cv.style.maskImage = mask
    }

    // keep the population matched to the new area
    const want = targetCount()
    while (particles.length > want) particles.pop()
    while (particles.length < want) particles.push(spawn({}, true))
  }

  const spawn = (p, seed = false) => {
    // This is an ambient field, not smoke from a source: every dot — first
    // generation or recycled — reappears anywhere on screen and fades in on
    // the spot, so the spread stays even for as long as the page is open.
    p.x = Math.random() * field.w
    p.y = Math.random() * field.h
    p.vx = 0
    p.vy = 0
    p.r = rand(ENERGY_CONFIG.dotMin, ENERGY_CONFIG.dotMax)
    const warm = ENERGY_CONFIG.tints.length - 1
    p.tint =
      Math.random() < ENERGY_CONFIG.coolTintChance
        ? ENERGY_CONFIG.tints[warm]
        : ENERGY_CONFIG.tints[Math.floor(Math.random() * warm)]
    p.rise = rand(ENERGY_CONFIG.riseSpeedMin, ENERGY_CONFIG.riseSpeedMax)
    p.phase = Math.random() * Math.PI * 2
    p.maxLife = rand(ENERGY_CONFIG.lifeMin, ENERGY_CONFIG.lifeMax)
    // maxLife must be set first: seeded dots start at a random point in their
    // own lifetime so the opening generation does not fade out in unison and
    // leave the screen briefly empty.
    p.life = seed ? Math.random() * p.maxLife : 0
    return p
  }


  const onPointerMove = (event) => {
    const rect = host.getBoundingClientRect()
    pointer.tx = event.clientX - rect.left
    pointer.ty = event.clientY - rect.top
    if (!pointer.active) {
      pointer.x = pointer.tx
      pointer.y = pointer.ty
      pointer.active = true
    }
  }

  const onPointerLeave = () => {
    pointer.active = false
    pointer.tx = -9999
    pointer.ty = -9999
  }

  const onPointerDown = (event) => {
    const rect = host.getBoundingClientRect()
    shocks.push({ x: event.clientX - rect.left, y: event.clientY - rect.top, r: 0 })
  }

  const step = () => {
    const w = cv.width / dpr
    const h = cv.height / dpr
    ctx.clearRect(0, 0, w, h)

    pointer.x += (pointer.tx - pointer.x) * ENERGY_CONFIG.pointerEase
    pointer.y += (pointer.ty - pointer.y) * ENERGY_CONFIG.pointerEase

    // advance shockwave rings
    for (let i = shocks.length - 1; i >= 0; i -= 1) {
      shocks[i].r += ENERGY_CONFIG.shockSpeed
      if (shocks[i].r > ENERGY_CONFIG.shockMaxRadius) shocks.splice(i, 1)
    }

    ctx.globalCompositeOperation = 'lighter'

    for (const p of particles) {
      p.life += 1
      p.phase += ENERGY_CONFIG.swaySpeed

      p.vx *= 0.94
      p.vy *= 0.94

      // hover swirl: tangential curl + gentle pull toward the cursor
      if (pointer.active) {
        const dx = p.x - pointer.x
        const dy = p.y - pointer.y
        const d = Math.hypot(dx, dy)
        if (d < ENERGY_CONFIG.swirlRadius && d > 0.5) {
          const falloff = 1 - d / ENERGY_CONFIG.swirlRadius
          const s = (ENERGY_CONFIG.swirlStrength * falloff) / d
          p.vx += -dy * s
          p.vy += dx * s
          p.vx -= dx * ENERGY_CONFIG.swirlPull * falloff * 0.05
          p.vy -= dy * ENERGY_CONFIG.swirlPull * falloff * 0.05
        }
      }

      // click shockwave push
      for (const s of shocks) {
        const dx = p.x - s.x
        const dy = p.y - s.y
        const d = Math.hypot(dx, dy) || 1
        if (Math.abs(d - s.r) < ENERGY_CONFIG.shockThickness) {
          const k = (ENERGY_CONFIG.shockPush * (1 - s.r / ENERGY_CONFIG.shockMaxRadius)) / d
          p.vx += dx * k
          p.vy += dy * k
        }
      }

      p.x += p.vx + Math.sin(p.phase) * ENERGY_CONFIG.swayAmplitude
      p.y += p.vy - p.rise

      const t = p.life / p.maxLife
      // Recycle when spent, once risen off the top, or when a swirl or
      // shockwave has pushed it out past an edge.
      const m = ENERGY_CONFIG.edgeMargin
      const gone = p.y < -m || p.x < -m || p.x > field.w + m
      if (t >= 1 || gone) {
        spawn(p)
        continue
      }

      // fade in over the first 18%, out over the last 45%
      const alpha = Math.min(t / 0.18, 1) * Math.min((1 - t) / 0.45, 1)
      const [cr, cg, cb] = p.tint
      const glow = p.r * ENERGY_CONFIG.glowScale

      // soft halo
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glow)
      g.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${(alpha * 0.5).toFixed(3)})`)
      g.addColorStop(0.45, `rgba(${cr}, ${cg}, ${cb}, ${(alpha * 0.14).toFixed(3)})`)
      g.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`)
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(p.x, p.y, glow, 0, Math.PI * 2)
      ctx.fill()

      // bright core dot
      ctx.fillStyle = `rgba(255, 244, 226, ${(alpha * 0.9).toFixed(3)})`
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r * 0.5, 0, Math.PI * 2)
      ctx.fill()
    }

    // filaments — the "aether" weave between neighbouring flames
    if (ENERGY_CONFIG.linkEnabled) {
      const max = ENERGY_CONFIG.linkDistance
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i]
          const b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d > max) continue
          ctx.strokeStyle = `rgba(255, 176, 90, ${(ENERGY_CONFIG.linkAlpha * (1 - d / max)).toFixed(3)})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }
    }

    // shockwave rings
    for (const s of shocks) {
      const fade = 1 - s.r / ENERGY_CONFIG.shockMaxRadius
      ctx.lineWidth = 2 + 5 * fade
      ctx.strokeStyle = `rgba(255, 170, 70, ${(0.5 * fade * fade).toFixed(3)})`
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.stroke()
      ctx.lineWidth = 1
      ctx.strokeStyle = `rgba(150, 195, 255, ${(0.3 * fade * fade).toFixed(3)})`
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r * 0.86, 0, Math.PI * 2)
      ctx.stroke()
    }

    ctx.globalCompositeOperation = 'source-over'
    frame = requestAnimationFrame(step)
  }

  const start = () => {
    if (running) return
    running = true
    frame = requestAnimationFrame(step)
  }

  const stop = () => {
    running = false
    if (frame) cancelAnimationFrame(frame)
    frame = null
  }

  measure()
  const onResize = () => measure()
  window.addEventListener('resize', onResize)
  host.addEventListener('pointermove', onPointerMove)
  host.addEventListener('pointerleave', onPointerLeave)
  host.addEventListener('pointerdown', onPointerDown)

  let observer = null
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.02 }
    )
    observer.observe(host)
  } else {
    start()
  }

  cleanup = () => {
    stop()
    observer?.disconnect()
    window.removeEventListener('resize', onResize)
    host.removeEventListener('pointermove', onPointerMove)
    host.removeEventListener('pointerleave', onPointerLeave)
    host.removeEventListener('pointerdown', onPointerDown)
  }
})

onBeforeUnmount(() => cleanup())
</script>

<template>
  <canvas v-if="!reducedMotion" ref="canvas" class="hero-name-energy" aria-hidden="true" />
</template>

<style scoped>
.hero-name-energy {
  position: absolute;
  inset: 0;
  /* Hero stack: video (0) -> scrim (1) -> dots (2) -> copy & deck (3).
     Sitting above the scrim keeps the dots at full brightness. They still never
     touch the copy or the rule lines, which are a layer higher again, and a
     mask (set in JS) fades them out over the chapter deck so the footage there
     stays clean without needing an opaque panel. */
  z-index: 2;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
