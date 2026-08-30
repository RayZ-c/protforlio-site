<script setup>
/**
 * SIGNAL FIELD BACKGROUND
 * ---------------------------------------------------------------------------
 * An interference-pattern dot field behind every page except the homepage,
 * which already has its showreel video.
 *
 * Adapted from ThreeUI's "Signal Particles" (MIT, MengTo/threeui — see
 * /THIRD_PARTY_NOTICES.md). The maths is theirs: two crossed sine waves make a
 * moving interference pattern, and a deterministic per-cell hash picks which
 * dots get an accent colour. Everything below is a change made for this site.
 *
 * Worth knowing: the original is plain Canvas 2D. Despite the library's name
 * there is no three.js and no WebGL in this effect, so it costs no dependency.
 *
 * WHAT CHANGED, AND WHY
 *
 * 1. Palette. The original alternates blue #3b82f6 with purple #8b5cf6. This
 *    site is orange + cool blue only, so purple became the orange accent and
 *    the greys were retinted to the ink token.
 *
 * 2. Cost. The original does one beginPath/arc/fill PER DOT, every frame,
 *    unthrottled — roughly 3,000 fill calls at 60fps behind a whole page.
 *    Here brightness is quantised into a handful of buckets so every dot of a
 *    given shade joins ONE Path2D and is filled once, taking fill calls from
 *    ~3,000 to 11. The loop is capped at 45fps and stops when the tab is
 *    hidden. Quantising is also what makes the flicker affordable: without it,
 *    a per-dot alpha would mean a per-dot fill.
 *
 * 3. Life. The original is a single interference ripple at a constant
 *    brightness, which reads as a flat grid once you have looked at it for a
 *    few seconds. Three things were added on top:
 *      - a slow, broad diagonal wave that swells and fades whole REGIONS,
 *      - a fast per-dot shimmer,
 *      - a sparse sharp term that briefly drops individual dots out.
 *    The speed also went from 0.02 to 0.055 per frame.
 *
 * 4. Legibility. This sits behind body copy, not behind a hero headline, so
 *    the dots are sparser (22px vs 16px) and dimmer (0.34 vs 0.6 peak alpha).
 *
 * 5. Device pixel ratio. The original sizes its bitmap from offsetWidth, so it
 *    renders soft on any high-DPI screen. DPR is applied here, capped at 2 —
 *    beyond that the fill cost quadruples for no visible gain on 3px dots.
 *
 * 6. Lifecycle. Driven by a watcher on `enabled`, never by `onMounted` — see
 *    canvas-background.js, which owns that logic and documents the bug behind
 *    it. It is shared with the homepage beams.
 */
import { onBeforeUnmount, ref, computed, watch } from 'vue'
import { useData } from 'vitepress'
import { mountCanvas } from '../canvas-background.js'

const { page } = useData()

/** The homepage's background is its showreel video; don't stack a field on it. */
const enabled = computed(() => page.value.relativePath !== 'index.md')

const canvas = ref(null)

/** Teardown for the current run, or null when nothing is running. */
let teardown = null

const SPACING = 22        // px between dots; the original uses 16
const RADIUS = 1.4
const BUCKETS = 5         // grey alpha levels — see note 2 above
const ACCENT_BUCKETS = 3  // the accents flicker, so they need levels too
const MAX_ALPHA = 0.34    // the original's 0.6 is too loud behind prose
const SPEED = 0.055       // per frame; the original crawls at 0.02

function draw(ctx, w, h, t) {
  // The wave maths was written against a per-frame increment; `t` is seconds,
  // so it is converted back to that cadence. Doing it this way means the field
  // now advances by wall-clock time rather than by frame count, so it looks
  // the same whether the browser is hitting the frame cap or not.
  const time = t * SPEED * 45

  ctx.clearRect(0, 0, w, h)

  const cols = Math.floor(w / SPACING)
  const rows = Math.floor(h / SPACING)
  const offsetX = (w - cols * SPACING) / 2
  const offsetY = (h - rows * SPACING) / 2

  // One Path2D per shade: every dot of a given brightness is added to its
  // path, and the whole path is filled once.
  const buckets = Array.from({ length: BUCKETS }, () => new Path2D())
  const warmB = Array.from({ length: ACCENT_BUCKETS }, () => new Path2D())
  const coolB = Array.from({ length: ACCENT_BUCKETS }, () => new Path2D())

  for (let i = 0; i <= cols; i++) {
    for (let j = 0; j <= rows; j++) {
      const nx = i * 0.1
      const ny = j * 0.1

      // Two crossed waves. Their interference is what makes the field read as
      // a signal sweeping through, rather than a grid blinking.
      const wave1 = Math.sin(nx + time * 0.5) * Math.cos(ny - time * 0.3)
      const wave2 = Math.sin(nx * 0.5 - ny * 0.5 + time * 0.8)
      const value = wave1 + wave2

      if (value <= 0.1) continue

      // A third, much slower and much broader wave on the diagonal. It does
      // not decide whether a dot is drawn, only how strongly — so whole
      // REGIONS swell and fade instead of every dot pulsing on one beat.
      const drift = 0.34 + 0.66 * (0.5 + 0.5 * Math.sin(nx * 0.32 + ny * 0.22 - time * 0.19))

      // Per-dot flicker. The terms are deliberately not harmonically related,
      // so neighbouring dots never fall into a visible pattern: a fast
      // shimmer, plus a sparse sharp term that briefly drops a dot out.
      const shimmer = 0.82 + 0.18 * Math.sin(time * 7.3 + i * 3.7 + j * 1.9)
      const blink = Math.sin(time * 2.1 + i * 8.6 - j * 5.3) > 0.985 ? 0.25 : 1

      const x = offsetX + i * SPACING
      const y = offsetY + j * SPACING

      // Deterministic per-cell hash: the same cells are always the accents, so
      // they read as fixed markers in a moving field rather than as noise.
      const accent = Math.sin(i * 12.34) * Math.cos(j * 56.78)

      const base = Math.min(1, ((value - 0.1) * 0.8) / MAX_ALPHA)
      const lit = base * drift * shimmer * blink

      if (lit <= 0.02) continue

      let path
      if (accent > 0.98) {
        path = coolB[Math.min(ACCENT_BUCKETS - 1, Math.floor(lit * ACCENT_BUCKETS))]
      } else if (accent < -0.98) {
        path = warmB[Math.min(ACCENT_BUCKETS - 1, Math.floor(lit * ACCENT_BUCKETS))]
      } else {
        path = buckets[Math.min(BUCKETS - 1, Math.floor(lit * BUCKETS))]
      }

      // moveTo before arc, or each arc is joined to the previous one by a line
      // — they share a single path now.
      path.moveTo(x + RADIUS, y)
      path.arc(x, y, RADIUS, 0, Math.PI * 2)
    }
  }

  for (let b = 0; b < BUCKETS; b++) {
    ctx.fillStyle = `rgba(125, 138, 161, ${(MAX_ALPHA * (b + 1)) / BUCKETS})`
    ctx.fill(buckets[b])
  }
  // Accents sit brighter than the grey field so they stay legible as markers
  // even at their dimmest flicker step.
  for (let b = 0; b < ACCENT_BUCKETS; b++) {
    const a = (0.62 * (b + 1)) / ACCENT_BUCKETS
    ctx.fillStyle = `rgba(46, 98, 217, ${a})`    // --hx-blue
    ctx.fill(coolB[b])
    ctx.fillStyle = `rgba(255, 140, 26, ${a})`   // --hx-orange, replacing purple
    ctx.fill(warmB[b])
  }
}

watch(
  [enabled, canvas],
  ([on, el]) => {
    if (teardown) teardown()
    teardown = null
    if (on && el) teardown = mountCanvas(el, { draw, fps: 45 })
  },
  { immediate: true, flush: 'post' }
)

onBeforeUnmount(() => {
  if (teardown) teardown()
  teardown = null
})
</script>

<template>
  <canvas
    v-if="enabled"
    ref="canvas"
    class="hx-field"
    aria-hidden="true"
  />
</template>
