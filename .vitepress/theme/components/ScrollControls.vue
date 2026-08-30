<script setup>
/**
 * FLOATING SCROLL CONTROLS
 * ---------------------------------------------------------------------------
 * Shared by the homepage and the projects index. Both pages previously had
 * their own copy — the projects index used inline `onclick` handlers with an
 * indigo gradient and no reduced-motion handling. This is the single version.
 *
 * Two behaviours worth knowing:
 *
 *  1. Idle bob. Each button drifts +/-2.5px on opposite phases (the second runs
 *     at animation-delay: -1.7s) so they never move as one rigid block.
 *     Hover HOLDS the button still rather than pausing the animation: pausing
 *     shifts that button's timeline, permanently breaking the phase offset
 *     against its neighbour.
 *
 *  2. Scroll drift. A damped spring — the model behind Framer Motion's
 *     useSpring. Each scroll event injects velocity; the spring pulls back to
 *     zero, overshooting slightly, which is what reads as weight. The sign is
 *     inverted so the block LAGS the scroll, the way a hanging object swings
 *     backward when its container accelerates forward.
 */
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from '../i18n.js'

const { t } = useI18n()

const props = defineProps({
  // The homepage shows these always; other pages may prefer to reveal on scroll.
  revealAfter: { type: Number, default: 0 }
})

const DRIFT = {
  stiffness: 170,
  damping: 16,
  impulse: 2.2, // px of spring velocity per px of scroll delta
  maxOffset: 12,
  // The real limiter. Peak of a free swing is v / sqrt(k), so capping velocity
  // here makes a hard flick reach ~maxOffset and stop naturally, instead of
  // slamming into the position clamp and snapping back.
  maxVelocity: 12 * Math.sqrt(170),
  restEpsilon: 0.05
}

const root = ref(null)
const visible = ref(true)
let cleanup = () => {}

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const toTop = () =>
  window.scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' })

const toBottom = () =>
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: reduced() ? 'auto' : 'smooth'
  })

onMounted(() => {
  const reduce = reduced()
  let x = 0 // current offset, px
  let v = 0 // velocity, px/s
  let lastY = window.scrollY
  let lastT = 0
  let frame = null

  const tick = (now) => {
    // Clamped so a stalled tab cannot explode the spring on its first frame.
    const dt = Math.min((now - lastT) / 1000, 0.032)
    lastT = now

    v += (-DRIFT.stiffness * x - DRIFT.damping * v) * dt
    x += v * dt
    x = Math.max(-DRIFT.maxOffset, Math.min(DRIFT.maxOffset, x))

    root.value?.style.setProperty('--hx-drift', `${x.toFixed(2)}px`)

    if (Math.abs(x) < DRIFT.restEpsilon && Math.abs(v) < DRIFT.restEpsilon) {
      // Settled: park the loop rather than burn a frame every 16ms forever.
      root.value?.style.setProperty('--hx-drift', '0px')
      frame = null
      return
    }
    frame = requestAnimationFrame(tick)
  }

  const onScroll = () => {
    const y = window.scrollY
    if (props.revealAfter > 0) visible.value = y > props.revealAfter
    if (reduce) return

    const delta = y - lastY
    lastY = y
    v -= delta * DRIFT.impulse // negative: the block trails the direction of travel
    v = Math.max(-DRIFT.maxVelocity, Math.min(DRIFT.maxVelocity, v))
    if (frame === null) {
      lastT = performance.now()
      frame = requestAnimationFrame(tick)
    }
  }

  if (props.revealAfter > 0) visible.value = window.scrollY > props.revealAfter
  window.addEventListener('scroll', onScroll, { passive: true })

  cleanup = () => {
    window.removeEventListener('scroll', onScroll)
    if (frame !== null) cancelAnimationFrame(frame)
  }
})

onBeforeUnmount(() => cleanup())
</script>

<template>
  <div ref="root" class="hx-scroll-controls" :class="{ 'is-visible': visible }">
    <button class="hx-scroll-btn" type="button" :data-label="t('Back to top')" @click="toTop">
      <span class="hx-scroll-arrow" aria-hidden="true">↑</span>
      <span class="hx-sr-only">{{ t('Back to top') }}</span>
    </button>
    <button class="hx-scroll-btn" type="button" :data-label="t('Jump to end')" @click="toBottom">
      <span class="hx-scroll-arrow" aria-hidden="true">↓</span>
      <span class="hx-sr-only">{{ t('Jump to end') }}</span>
    </button>
  </div>
</template>
