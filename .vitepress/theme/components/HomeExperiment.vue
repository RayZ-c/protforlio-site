<script setup>
/**
 * EXPERIMENTAL HOMEPAGE SHELL
 * ---------------------------------------------------------------------------
 * Wraps the whole experimental homepage. Responsibilities:
 *   1. Flags <html> with `hx-home` so home-experiment.css can restyle the
 *      VitePress navbar/content chrome WITHOUT affecting any other route.
 *   2. Runs the shared scroll-reveal observer for every [data-hx-reveal].
 *   3. Renders the floating scroll controls.
 *
 * Removing <HomeExperiment> from index.md removes all of the above.
 */
import { onBeforeUnmount, onMounted, ref } from 'vue'

const ROOT_CLASS = 'hx-home'

/**
 * Scroll-reactive drift for the floating arrows.
 *
 * A classic damped spring (the model behind Framer Motion's useSpring):
 *   v += (-stiffness * x - damping * v) * dt
 *   x += v * dt
 * Each scroll event injects velocity; the spring pulls back to 0 and overshoots
 * slightly on the way, which is what reads as weight. The sign is inverted so
 * the glyph LAGS the scroll — page moves down, arrow trails up — the same way a
 * hanging object swings backward when its container accelerates forward.
 *
 * dampingRatio = damping / (2 * sqrt(stiffness)) ≈ 0.61 → underdamped, so it
 * settles with one soft bounce instead of a dead stop.
 */
const DRIFT_CONFIG = {
  stiffness: 170,
  damping: 16,
  impulse: 2.2, // px of spring velocity per px of scroll delta
  maxOffset: 12, // safety clamp on position
  // The real limiter. For this spring the peak of a free swing is v / sqrt(k),
  // so capping velocity at maxOffset * sqrt(stiffness) makes a hard flick reach
  // roughly maxOffset and stop there naturally, instead of slamming into the
  // position clamp and snapping back.
  maxVelocity: 12 * Math.sqrt(170),
  restEpsilon: 0.05 // below this the loop parks itself until the next scroll
}

// Always on for the homepage: the two controls are the only jump affordance on a
// long single page, and hiding them near the top made them feel unreliable.
const showControls = ref(true)
const root = ref(null)
let cleanup = () => {}

onMounted(() => {
  document.documentElement.classList.add(ROOT_CLASS)

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let observer = null

  if (!reduceMotion && 'IntersectionObserver' in window) {
    // Only now is it safe to hide things: we can guarantee we can show them again.
    root.value?.classList.add('hx-reveal-on')
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    )
    root.value?.querySelectorAll('[data-hx-reveal]').forEach((node) => observer.observe(node))
  }

  // One delegated listener feeds the pointer position to every card that has a
  // spotlight, instead of each card component wiring up its own handler.
  const SPOT_SELECTOR = '.hx-glow, .hx-card'
  const onSpotMove = (event) => {
    const target = event.target instanceof Element ? event.target : null
    const host = target?.closest(SPOT_SELECTOR)
    if (!host) return
    const r = host.getBoundingClientRect()
    host.style.setProperty('--spot-x', `${event.clientX - r.left}px`)
    host.style.setProperty('--spot-y', `${event.clientY - r.top}px`)
  }
  root.value?.addEventListener('pointermove', onSpotMove)

  // --- scroll-driven arrow drift --------------------------------------------
  let driftX = 0 // current offset, px
  let driftV = 0 // current velocity, px/s
  let lastY = window.scrollY
  let lastT = 0
  let frame = null

  const controls = root.value?.querySelector('.hx-scroll-controls')

  const tick = (now) => {
    const dt = Math.min((now - lastT) / 1000, 0.032) // clamp so a stalled tab cannot explode the spring
    lastT = now

    driftV += (-DRIFT_CONFIG.stiffness * driftX - DRIFT_CONFIG.damping * driftV) * dt
    driftX += driftV * dt
    driftX = Math.max(-DRIFT_CONFIG.maxOffset, Math.min(DRIFT_CONFIG.maxOffset, driftX))

    controls?.style.setProperty('--hx-drift', `${driftX.toFixed(2)}px`)

    if (Math.abs(driftX) < DRIFT_CONFIG.restEpsilon && Math.abs(driftV) < DRIFT_CONFIG.restEpsilon) {
      // settled: park the loop rather than burn a frame every 16ms forever
      controls?.style.setProperty('--hx-drift', '0px')
      frame = null
      return
    }
    frame = requestAnimationFrame(tick)
  }

  const onScroll = () => {
    const y = window.scrollY
    const delta = y - lastY
    lastY = y
    // negative: the glyph trails the direction of travel
    driftV -= delta * DRIFT_CONFIG.impulse
    driftV = Math.max(-DRIFT_CONFIG.maxVelocity, Math.min(DRIFT_CONFIG.maxVelocity, driftV))
    if (frame === null) {
      lastT = performance.now()
      frame = requestAnimationFrame(tick)
    }
  }

  if (!reduceMotion) window.addEventListener('scroll', onScroll, { passive: true })

  cleanup = () => {
    document.documentElement.classList.remove(ROOT_CLASS)
    root.value?.removeEventListener('pointermove', onSpotMove)
    window.removeEventListener('scroll', onScroll)
    if (frame !== null) cancelAnimationFrame(frame)
    observer?.disconnect()
  }
})

onBeforeUnmount(() => cleanup())

const toTop = () => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
}

const toBottom = () => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: reduce ? 'auto' : 'smooth'
  })
}
</script>

<template>
  <div ref="root" class="hx-root">
    <slot />

    <div class="hx-scroll-controls" :class="{ 'is-visible': showControls }">
      <!-- The spring drives the container (one transform for the whole block) and
           each button carries its own bob, so the two never fight over transform. -->
      <button class="hx-scroll-btn" type="button" data-label="Back to top" @click="toTop">
        <span class="hx-scroll-arrow" aria-hidden="true">↑</span>
        <span class="hx-sr-only">Back to top</span>
      </button>
      <button class="hx-scroll-btn" type="button" data-label="Jump to end" @click="toBottom">
        <span class="hx-scroll-arrow" aria-hidden="true">↓</span>
        <span class="hx-sr-only">Jump to end</span>
      </button>
    </div>
  </div>
</template>
