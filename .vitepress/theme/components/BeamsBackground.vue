<script setup>
/**
 * BEAMS BACKGROUND — homepage only
 * ---------------------------------------------------------------------------
 * Soft diagonal light beams drifting upward behind the homepage sections.
 *
 * Adapted from KokonutUI's "Beams Background" (MIT, kokonutui.com — see
 * /THIRD_PARTY_NOTICES.md). Their recipe is kept: ~30 beams on a shared
 * diagonal, each a long rounded bar filled with a soft gradient, drifting up,
 * pulsing on its own phase, and recycled into one of three columns when it
 * leaves the top. Changed here:
 *
 * 1. PALETTE. The original runs hues 190–260, i.e. cyan through violet. This
 *    site uses a near-black navy foundation with ember orange and cobalt blue,
 *    so beams alternate between the exact brand colours. Keeping the canvas
 *    colours exact (rather than lightening and jittering their HSL hues) stops
 *    the background from drifting into tan and powder-blue washes.
 *
 * 2. COST — the important one. The original blurs with `ctx.filter =
 *    'blur(35px)'`, which applies a full gaussian to EVERY beam draw: ~30
 *    large blurred fills per frame across the whole viewport. That is the most
 *    expensive thing that could be running behind a portfolio homepage.
 *
 *    Instead the beams are rendered into a backing store at roughly a third of
 *    the display resolution with a correspondingly small blur, and the browser
 *    scales that up. Upscaling a soft image is a cheap GPU blit and adds
 *    smoothing of its own, so it looks the same. The pixel count drops by
 *    about 9x before the blur is even applied.
 *
 * 3. It is off behind the hero for free. The showreel section is opaque and
 *    exactly one viewport tall, so a fixed canvas at z-index 0 is covered
 *    while the hero is on screen and revealed as it scrolls away. No scroll
 *    listener, no measurement.
 *
 * The route-driven lifecycle lives in canvas-background.js, which documents
 * why it cannot be `onMounted`.
 */
import { onBeforeUnmount, ref, computed, watch } from 'vue'
import { useData } from 'vitepress'
import { mountCanvas } from '../canvas-background.js'

const { page } = useData()

/** Homepage only. Interior pages get the signal dot field instead. */
const enabled = computed(() => page.value.relativePath === 'index.md')

const canvas = ref(null)
let teardown = null

const BEAM_COUNT = 26
const BASE_ANGLE = -35        // degrees; the shared diagonal
const RENDER_SCALE = 0.45     // see note 2
const BLUR_PX = 12            // at render scale, so ~27px on screen
// The former scroll-boosted pace is now the baseline: roughly 150–240px/s at
// the capped 30fps, so the drift is unmistakable even without user input.
const IDLE_SPEED_MIN = 5
const IDLE_SPEED_MAX = 8
// Scrolling still adds another clear gear, but no longer multiplies the new
// fast baseline by the old 3.8–7x range (which would turn the field into cuts).
const SCROLL_MIN_BOOST = 1.6
const SCROLL_MAX_BOOST = 2.8
const SCROLL_RELEASE_MS = 110

/** Exact RGB values of --hx-orange and --hx-blue from tokens.css. */
const BEAM_COLORS = [
  [255, 140, 26],
  [46, 98, 217]
]

const rand = (min, max) => min + Math.random() * (max - min)

let beams = []
let viewW = 0
let viewH = 0
let motionBoost = 1
let targetMotionBoost = 1
let lastScrollAt = -Infinity
let lastScrollY = 0
let lastScrollSampleAt = 0

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

function resetScrollMotion() {
  motionBoost = 1
  targetMotionBoost = 1
  lastScrollAt = -Infinity
  lastScrollY = window.scrollY
  lastScrollSampleAt = performance.now()
}

function onScroll() {
  const now = performance.now()
  const y = window.scrollY
  const distance = Math.abs(y - lastScrollY)
  const elapsed = Math.max(16, now - lastScrollSampleAt)
  const velocity = distance / elapsed

  // Even slow trackpad movement gets a clear response; a fast wheel flick can
  // push the already-fast field to 2.8x without snapping to it instantly.
  targetMotionBoost = clamp(
    Math.max(SCROLL_MIN_BOOST, 1 + velocity * 0.9),
    SCROLL_MIN_BOOST,
    SCROLL_MAX_BOOST
  )
  lastScrollAt = now
  lastScrollY = y
  lastScrollSampleAt = now
}

/**
 * Beams are recycled into one of three columns so the field keeps an even
 * spread instead of clumping wherever the random numbers happened to fall.
 */
function resetBeam(beam, index) {
  const column = index % 3
  const spacing = viewW / 3

  beam.x = column * spacing + spacing / 2 + rand(-spacing * 0.4, spacing * 0.4)
  beam.y = viewH + rand(80, 420)
  beam.width = rand(140, 320)
  // Clearly visible at rest; scroll input temporarily multiplies this below.
  beam.speed = rand(IDLE_SPEED_MIN, IDLE_SPEED_MAX)
  beam.color = BEAM_COLORS[index % BEAM_COLORS.length]
  // Background light should support the content, not compete with the bright
  // foreground accents. The old 0.45–0.85 range washed the navy surface out.
  beam.opacity = rand(0.14, 0.32)
  return beam
}

function createBeams(count) {
  return Array.from({ length: count }, (_, i) => {
    const beam = resetBeam(
      {
        length: viewH * 2.4,
        angle: BASE_ANGLE + rand(-10, 10),
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: rand(0.012, 0.028)
      },
      i
    )
    // Scatter the starting positions, or every beam enters together on load.
    beam.y = rand(-viewH * 0.4, viewH * 1.4)
    return beam
  })
}

function drawBeam(ctx, beam) {
  ctx.save()
  ctx.translate(beam.x, beam.y)
  ctx.rotate((beam.angle * Math.PI) / 180)

  // Pulsing keeps beams from sitting at a constant brightness, which is what
  // makes a static gradient read as a flat overlay rather than as light.
  const pulse = beam.opacity * (0.72 + 0.28 * Math.sin(beam.pulse))
  const [r, g, b] = beam.color
  const color = alpha => `rgba(${r}, ${g}, ${b}, ${alpha})`

  // Six stops rather than three: the extra pair at the quarter points keeps
  // the falloff soft instead of showing a visible band where it ends.
  const gradient = ctx.createLinearGradient(0, 0, 0, beam.length)
  gradient.addColorStop(0, color(0))
  gradient.addColorStop(0.1, color(pulse * 0.5))
  gradient.addColorStop(0.4, color(pulse))
  gradient.addColorStop(0.6, color(pulse))
  gradient.addColorStop(0.9, color(pulse * 0.5))
  gradient.addColorStop(1, color(0))

  ctx.fillStyle = gradient
  ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length)
  ctx.restore()
}

function layout(w, h) {
  viewW = w
  viewH = h
  beams = createBeams(BEAM_COUNT)
}

function draw(ctx, w, h) {
  ctx.clearRect(0, 0, w, h)

  if (performance.now() - lastScrollAt > SCROLL_RELEASE_MS) {
    targetMotionBoost = 1
  }

  // Respond quickly to input, then glide back to the idle speed over roughly
  // one second. Separate easing rates avoid a jerky start or an abrupt stop.
  const easing = targetMotionBoost > motionBoost ? 0.34 : 0.08
  motionBoost += (targetMotionBoost - motionBoost) * easing

  // One blur setting for the whole frame. At render scale this is equivalent
  // to roughly 35px on screen, which is what the original uses.
  ctx.filter = `blur(${BLUR_PX}px)`

  for (let i = 0; i < beams.length; i++) {
    const beam = beams[i]
    beam.y -= beam.speed * motionBoost
    beam.pulse += beam.pulseSpeed * (1 + (motionBoost - 1) * 0.12)

    if (beam.y + beam.length < -120) resetBeam(beam, i)

    drawBeam(ctx, beam)
  }

  ctx.filter = 'none'
}

watch(
  [enabled, canvas],
  ([on, el]) => {
    if (teardown) teardown()
    teardown = null
    if (on && el) {
      resetScrollMotion()
      const teardownCanvas = mountCanvas(el, {
        draw,
        layout,
        fps: 30,
        scale: RENDER_SCALE
      })
      window.addEventListener('scroll', onScroll, { passive: true })
      teardown = () => {
        teardownCanvas()
        window.removeEventListener('scroll', onScroll)
        resetScrollMotion()
      }
    }
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
    class="hx-beams"
    aria-hidden="true"
  />
</template>
