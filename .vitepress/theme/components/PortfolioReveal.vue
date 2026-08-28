<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'

// ─────────────────────────────────────────────────────────────────────────────
// REVEAL EFFECT TUNING
// Every tuneable value for the cursor/touch brush lives here. Edit these
// instead of the draw code below.
//
// LAYER ORDER (do not change):
//   0  <video>  real HTML video element — the banner gameplay footage
//   1  ::after  dark cinematic overlay
//   2  <canvas> the brush-revealed still image (front layer)
//   3  copy     headings, buttons, hint
//
// The video is NEVER drawn into the canvas — doing so previously produced a
// black screen. The canvas only ever composites the still reveal image.
// ─────────────────────────────────────────────────────────────────────────────
const REVEAL_CONFIG = {
  // Which still image is painted in front of the video.
  revealImage: '/images/PixelAdventure/pa-6.png',

  // Brush size = the larger of minimumRadius or the viewport ratio calculation.
  minimumRadius: 64,
  viewportRadiusRatio: 0.13,

  // Trail behaviour. Higher length = a longer tail; higher smoothing = snappier.
  trailLength: 42,
  pointerSmoothing: 0.16,
  tailMinimumScale: 0.18,
  tailOpacityPower: 1.65,

  // Appearance of the revealed front image and the cursor glow.
  revealedImageOverlay: 'rgba(2, 6, 14, .30)',
  glowSizeMultiplier: 1.3,
  glowInnerColor: 'rgba(255, 176, 74, .18)',
  glowMiddleColor: 'rgba(120, 168, 255, .09)',

  // Before the visitor moves, the brush drifts on its own so the interaction
  // is discoverable (and so touch users see the effect at all).
  autoDriftEnabled: true,
  autoDriftSpeed: 0.00042,
  autoDriftWidth: 0.3, // fraction of hero width
  autoDriftHeight: 0.16 // fraction of hero height
}

const hero = ref(null)
const canvas = ref(null)
const backVideo = ref(null)
const hintHidden = ref(false)
const reducedMotion = ref(false)

let cleanup = () => {}

onMounted(() => {
  const host = hero.value
  const cv = canvas.value
  const video = backVideo.value
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  reducedMotion.value = motionQuery.matches

  // Reduced motion: no animation loop, no autoplaying footage. The poster
  // frame stays visible and the hero is a still cinematic frame.
  if (reducedMotion.value) {
    hintHidden.value = true
    cleanup = () => {}
    return
  }

  const ctx = cv.getContext('2d')
  const offscreen = document.createElement('canvas')
  const offCtx = offscreen.getContext('2d')
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const pointer = { x: -2000, y: -2000 }
  const smooth = { x: -2000, y: -2000 }
  const trail = []
  const reveal = new Image()

  let radius = 240
  let frame = null
  let running = false
  let hasPointer = false
  let ready = false

  const cover = (image, width, height) => {
    const imageRatio = image.width / image.height
    const canvasRatio = width / height
    if (imageRatio > canvasRatio) {
      const drawWidth = height * imageRatio
      return [(width - drawWidth) / 2, 0, drawWidth, height]
    }
    const drawHeight = width / imageRatio
    return [0, (height - drawHeight) / 2, width, drawHeight]
  }

  const resize = () => {
    const width = host.clientWidth
    const height = host.clientHeight
    if (!width || !height) return
    cv.width = width * dpr
    cv.height = height * dpr
    offscreen.width = width * dpr
    offscreen.height = height * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    offCtx.setTransform(dpr, 0, 0, dpr, 0, 0)
    radius = Math.max(
      REVEAL_CONFIG.minimumRadius,
      Math.min(width, height) * REVEAL_CONFIG.viewportRadiusRatio
    )
  }

  const updatePointer = (clientX, clientY) => {
    const bounds = host.getBoundingClientRect()
    pointer.x = clientX - bounds.left
    pointer.y = clientY - bounds.top
    if (!hasPointer) {
      hasPointer = true
      trail.length = 0
      Object.assign(smooth, pointer)
    }
    hintHidden.value = true
  }

  const onMouseMove = (event) => updatePointer(event.clientX, event.clientY)
  const onTouch = (event) => {
    const touch = event.touches[0]
    if (touch) updatePointer(touch.clientX, touch.clientY)
  }
  const onLeave = () => {
    hasPointer = false
  }

  const drift = (time) => {
    const width = host.clientWidth
    const height = host.clientHeight
    const t = time * REVEAL_CONFIG.autoDriftSpeed
    pointer.x = width * (0.5 + REVEAL_CONFIG.autoDriftWidth * Math.sin(t))
    pointer.y = height * (0.54 + REVEAL_CONFIG.autoDriftHeight * Math.sin(t * 1.7))
    if (smooth.x < -1000) Object.assign(smooth, pointer)
  }

  const draw = (time) => {
    frame = requestAnimationFrame(draw)
    const width = host.clientWidth
    const height = host.clientHeight
    if (!width || !height) return

    if (!hasPointer && REVEAL_CONFIG.autoDriftEnabled) drift(time || 0)

    smooth.x += (pointer.x - smooth.x) * REVEAL_CONFIG.pointerSmoothing
    smooth.y += (pointer.y - smooth.y) * REVEAL_CONFIG.pointerSmoothing
    trail.unshift({ x: smooth.x, y: smooth.y })
    if (trail.length > REVEAL_CONFIG.trailLength) trail.length = REVEAL_CONFIG.trailLength

    ctx.clearRect(0, 0, width, height)
    offCtx.clearRect(0, 0, width, height)

    // 1. Paint the brush stroke as an alpha mask.
    offCtx.globalCompositeOperation = 'source-over'
    for (let i = 0; i < trail.length; i += 1) {
      const point = trail[i]
      const progress = 1 - i / trail.length
      const scale =
        REVEAL_CONFIG.tailMinimumScale + (1 - REVEAL_CONFIG.tailMinimumScale) * progress
      offCtx.beginPath()
      offCtx.arc(point.x, point.y, radius * scale, 0, Math.PI * 2)
      offCtx.fillStyle = `rgba(0, 0, 0, ${Math.pow(progress, REVEAL_CONFIG.tailOpacityPower)})`
      offCtx.fill()
    }

    // 2. Clip the still image into that mask, then tint it to match the hero.
    offCtx.globalCompositeOperation = 'source-in'
    offCtx.drawImage(reveal, ...cover(reveal, width, height))
    offCtx.globalCompositeOperation = 'source-atop'
    offCtx.fillStyle = REVEAL_CONFIG.revealedImageOverlay
    offCtx.fillRect(0, 0, width, height)

    // 3. Composite onto the visible canvas and add the brush-head glow.
    ctx.drawImage(offscreen, 0, 0, width, height)

    if (trail.length) {
      const head = trail[0]
      const glowRadius = radius * REVEAL_CONFIG.glowSizeMultiplier
      const glow = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, glowRadius)
      glow.addColorStop(0, REVEAL_CONFIG.glowInnerColor)
      glow.addColorStop(0.5, REVEAL_CONFIG.glowMiddleColor)
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = glow
      ctx.fillRect(head.x - glowRadius, head.y - glowRadius, glowRadius * 2, glowRadius * 2)
    }
  }

  const start = () => {
    if (running || !ready) return
    running = true
    frame = requestAnimationFrame(draw)
  }

  const stop = () => {
    running = false
    if (frame) cancelAnimationFrame(frame)
    frame = null
  }

  reveal.onload = () => {
    ready = true
    resize()
    start()
  }
  reveal.src = withBase(REVEAL_CONFIG.revealImage)

  // Only run the loop and the footage while the hero is actually on screen.
  let observer = null
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video?.play?.().catch(() => {})
          start()
        } else {
          video?.pause?.()
          stop()
        }
      },
      { threshold: 0.01 }
    )
    observer.observe(host)
  } else {
    video?.play?.().catch(() => {})
  }

  resize()
  window.addEventListener('resize', resize)
  host.addEventListener('mousemove', onMouseMove)
  host.addEventListener('mouseleave', onLeave)
  host.addEventListener('touchstart', onTouch, { passive: true })
  host.addEventListener('touchmove', onTouch, { passive: true })
  host.addEventListener('touchend', onLeave, { passive: true })

  cleanup = () => {
    stop()
    observer?.disconnect()
    video?.pause?.()
    window.removeEventListener('resize', resize)
    host.removeEventListener('mousemove', onMouseMove)
    host.removeEventListener('mouseleave', onLeave)
    host.removeEventListener('touchstart', onTouch)
    host.removeEventListener('touchmove', onTouch)
    host.removeEventListener('touchend', onLeave)
  }
})

onBeforeUnmount(() => cleanup())
</script>

<template>
  <section ref="hero" class="hx-hero" aria-labelledby="hx-hero-title">
    <!-- LAYER 0 — the original banner video, a real <video> element. -->
    <video
      ref="backVideo"
      class="hx-hero-video"
      :autoplay="!reducedMotion"
      muted
      loop
      playsinline
      preload="metadata"
      disablepictureinpicture
      :poster="withBase('/banner-cover.jpg')"
      aria-hidden="true"
      tabindex="-1"
    >
      <source :src="withBase('/videos/banner.mp4')" type="video/mp4">
    </video>

    <!-- LAYER 2 — the brush-revealed still image (layer 1 is the ::after tint). -->
    <canvas v-if="!reducedMotion" ref="canvas" class="hx-hero-canvas" aria-hidden="true" />

    <!-- LAYER 3 — copy -->
    <div class="hx-hero-grid hx-shell">
      <div class="hx-hero-main">
        <p class="hx-hero-status">
          <span class="hx-dot" aria-hidden="true" />
          Open to gameplay programming roles &amp; internships
        </p>
        <p class="hx-hero-eyebrow">Gameplay &amp; Systems Programmer</p>
        <h1 id="hx-hero-title" class="hx-hero-name">Raymond<br>Cheng</h1>
        <p class="hx-hero-lead">
          I build responsive combat, scalable gameplay systems, and the moment-to-moment
          polish that makes a game feel alive.
        </p>
        <p class="hx-hero-stack">
          Unity <span aria-hidden="true">·</span> Unreal Engine 5 <span aria-hidden="true">·</span>
          Roblox <span aria-hidden="true">·</span> C# <span aria-hidden="true">·</span>
          C++ <span aria-hidden="true">·</span> Lua
        </p>
        <div class="hx-hero-actions">
          <a class="hx-btn" :href="withBase('/projects/')">View projects</a>
          <a class="hx-btn hx-btn--ghost" :href="withBase('/cv_v2.pdf')" target="_blank" rel="noopener">
            Read my CV
          </a>
          <a class="hx-link" href="#contact">
            Get in touch <span class="hx-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div class="hx-hero-aside">
        <p class="hx-hero-eyebrow hx-hero-eyebrow--cool">How I work</p>
        <p class="hx-hero-verbs">Build.<br>Polish.<br>Ship.</p>
        <p class="hx-hero-aside-text">
          From combat frameworks to boss encounters, I turn technical foundations into
          clear, high-impact player experiences.
        </p>
      </div>
    </div>

    <p v-if="!reducedMotion" class="hx-hero-hint" :class="{ 'is-hidden': hintHidden }">
      Move across the hero to reveal
    </p>

    <a class="hx-hero-scroll" href="#featured-work">
      <span class="hx-hero-scroll-label">Scroll</span>
      <span aria-hidden="true">↓</span>
    </a>
  </section>
</template>

<style scoped>
/* All colour/type values below intentionally mirror the tokens defined in
   home-experiment.css so the hero and the page share one visual language. */
.hx-hero {
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: calc(100svh - var(--vp-nav-height));
  min-height: 620px;
  overflow: hidden;
  background: #04060c;
  color: #fff;
  font-family: var(--hx-font-body, "Inter", system-ui, sans-serif);
}

@media (min-width: 960px) {
  .hx-hero {
    height: 100svh;
    padding-top: var(--vp-nav-height);
  }
}

/* Signature energy rule, echoed by every band on the page below. */
.hx-hero::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 3px;
  z-index: 5;
  background: var(--hx-rule, linear-gradient(90deg, transparent, #ff8c1a, #2e62d9, #c9d6e8, transparent));
}

/* LAYER 1 — cinematic tint + a bottom fade that hands over to the page. */
.hx-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    /* keeps the left-hand copy legible over bright showreel frames */
    linear-gradient(100deg, rgba(2, 6, 14, 0.72) 0%, rgba(2, 6, 14, 0.18) 52%, rgba(2, 6, 14, 0) 78%),
    linear-gradient(180deg, rgba(2, 6, 14, 0.7) 0%, rgba(2, 6, 14, 0.08) 32%, rgba(5, 7, 13, 0.96) 100%),
    rgba(2, 6, 14, 0.4);
}

.hx-hero-video {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hx-hero-canvas {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* ---- copy ---- */
.hx-hero-status {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  align-self: flex-start;
  margin: 0 0 18px;
  max-width: 100%;
  padding: 7px 16px;
  border: 1px solid rgba(255, 140, 26, 0.45);
  background: rgba(5, 7, 13, 0.6);
  backdrop-filter: blur(6px);
  clip-path: polygon(7px 0, 100% 0, calc(100% - 7px) 100%, 0 100%);
  font-family: var(--hx-font-ui, "Barlow Condensed", sans-serif);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #ffb45e;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.hx-dot {
  flex: none;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ff8c1a;
  animation: hx-hero-pulse 2.4s ease-in-out infinite;
}

@keyframes hx-hero-pulse {
  0% { box-shadow: 0 0 0 0 rgba(255, 140, 26, 0.55); }
  70% { box-shadow: 0 0 0 8px rgba(255, 140, 26, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 140, 26, 0); }
}

.hx-hero-grid {
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  align-items: end;
  gap: clamp(24px, 5vw, 72px);
  padding-bottom: clamp(72px, 12vh, 132px);
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.72);
}

.hx-hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 14px;
  font-family: var(--hx-font-ui, "Barlow Condensed", sans-serif);
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ff9e2c;
}

.hx-hero-eyebrow::before {
  content: "";
  width: 26px;
  height: 2px;
  background: currentColor;
}

.hx-hero-eyebrow--cool { color: #9fc2ff; }

.hx-hero-name {
  margin: 0;
  border: 0;
  padding: 0;
  font-family: var(--hx-font-display, "Bebas Neue", Impact, sans-serif);
  font-size: clamp(3.6rem, 9vw, 8rem);
  font-weight: 400;
  line-height: 0.86;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 4px 4px 0 rgba(179, 58, 0, 0.9), 0 0 44px rgba(255, 140, 26, 0.4);
}

.hx-hero-lead {
  margin: 20px 0 0;
  max-width: 44ch;
  font-size: clamp(1rem, 1.15vw, 1.125rem);
  line-height: 1.62;
  color: rgba(255, 255, 255, 0.88);
}

.hx-hero-stack {
  margin: 14px 0 0;
  font-family: var(--hx-font-ui, "Barlow Condensed", sans-serif);
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #9fc2ff;
}

.hx-hero-stack span { color: rgba(159, 194, 255, 0.5); }

.hx-hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 22px;
  margin-top: 28px;
}

.hx-hero-aside {
  text-align: right;
  justify-self: end;
  max-width: 34ch;
}

.hx-hero-aside .hx-hero-eyebrow {
  flex-direction: row-reverse;
}

.hx-hero-verbs {
  margin: 0;
  font-family: var(--hx-font-display, "Bebas Neue", Impact, sans-serif);
  font-size: clamp(2.4rem, 4.4vw, 4rem);
  line-height: 0.92;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 3px 3px 0 rgba(46, 98, 217, 0.85), 0 0 38px rgba(160, 200, 255, 0.35);
}

.hx-hero-aside-text {
  margin: 16px 0 0;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.82);
}

.hx-hero-hint {
  position: absolute;
  z-index: 4;
  left: 50%;
  bottom: 26px;
  transform: translateX(-50%);
  margin: 0;
  max-width: calc(100% - 140px);
  padding: 7px 18px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  background: rgba(5, 7, 13, 0.55);
  backdrop-filter: blur(6px);
  font-family: var(--hx-font-ui, "Barlow Condensed", sans-serif);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: opacity 0.5s ease;
}

.hx-hero-hint.is-hidden { opacity: 0; }

.hx-hero-scroll {
  position: absolute;
  z-index: 4;
  right: clamp(20px, 5vw, 64px);
  bottom: 26px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--hx-font-ui, "Barlow Condensed", sans-serif);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.78) !important;
  text-decoration: none !important;
  transition: color 0.2s ease;
}

.hx-hero-scroll:hover,
.hx-hero-scroll:focus-visible {
  color: #ffb45e !important;
}

.hx-hero-scroll span:last-child {
  animation: hx-hero-bob 2.2s ease-in-out infinite;
}

@keyframes hx-hero-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}

.hx-hero :focus-visible {
  outline: 2px solid #ffb45e;
  outline-offset: 3px;
}

/* ---- responsive ---- */
@media (max-width: 900px) {
  .hx-hero-grid {
    grid-template-columns: 1fr;
    align-items: end;
    gap: 28px;
    padding-bottom: clamp(84px, 14vh, 120px);
  }

  /* The secondary "Build. Polish. Ship." panel is decorative; on narrow
     screens the primary block gets the full width instead. */
  .hx-hero-aside { display: none; }

  .hx-hero-scroll { display: none; }

  .hx-hero-hint {
    max-width: calc(100% - 32px);
  }
}

@media (max-width: 640px) {
  .hx-hero {
    min-height: 640px;
    justify-content: flex-end;
  }

  .hx-hero-status {
    font-size: 0.6875rem;
    letter-spacing: 0.09em;
    white-space: normal;
    line-height: 1.4;
    text-align: left;
    margin-bottom: 14px;
  }

  .hx-hero-eyebrow {
    font-size: 0.8125rem;
    letter-spacing: 0.18em;
    gap: 9px;
  }

  .hx-hero-eyebrow::before { width: 18px; }

  .hx-hero-name { font-size: clamp(3rem, 15vw, 4.4rem); }
  .hx-hero-lead { font-size: 0.9688rem; margin-top: 16px; }
  .hx-hero-stack { font-size: 0.8125rem; letter-spacing: 0.14em; }

  .hx-hero-actions {
    gap: 12px;
    margin-top: 22px;
    width: 100%;
  }

  .hx-hero-actions .hx-btn { flex: 1 1 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .hx-dot,
  .hx-hero-scroll span:last-child {
    animation: none;
  }
}
</style>
