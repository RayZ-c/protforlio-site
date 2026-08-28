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

const showControls = ref(false)
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

  const onScroll = () => {
    showControls.value = window.scrollY > window.innerHeight * 0.6
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  cleanup = () => {
    document.documentElement.classList.remove(ROOT_CLASS)
    root.value?.removeEventListener('pointermove', onSpotMove)
    window.removeEventListener('scroll', onScroll)
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
      <button class="hx-scroll-btn" type="button" aria-label="Scroll to top" @click="toTop">↑</button>
      <button class="hx-scroll-btn" type="button" aria-label="Scroll to bottom" @click="toBottom">↓</button>
    </div>
  </div>
</template>
