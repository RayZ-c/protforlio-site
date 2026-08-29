/**
 * SITE-WIDE INTERACTIONS
 * ---------------------------------------------------------------------------
 * The homepage's two ambient behaviours, lifted out of HomeExperiment.vue so
 * every page gets them.
 *
 *   1. Cursor spotlight — feeds pointer position to any element carrying
 *      .hx-glow / .hx-card / .project-card, which its ::after uses to place a
 *      radial highlight.
 *   2. Scroll reveal — fades and lifts [data-hx-reveal] elements as they enter
 *      the viewport.
 *
 * Both previously lived inside the homepage wrapper, so project pages had the
 * classes but nothing driving them: .hx-panel carried .hx-glow and its
 * --spot-x was never set, leaving the effect permanently invisible.
 *
 * Two safety properties worth keeping:
 *   - Reveal only hides things AFTER confirming it can show them again. Without
 *     JS or without IntersectionObserver, content stays visible.
 *   - Everything is skipped under prefers-reduced-motion.
 */

const SPOT_SELECTOR = '.hx-glow, .hx-card, .project-card, .hx-carousel-tab'
const REVEAL_SELECTOR = '[data-hx-reveal]'

let cleanup = () => {}

function start() {
  cleanup()

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // ---- 1. cursor spotlight -------------------------------------------------
  // One delegated listener for the whole document rather than one per card.
  const onMove = (event) => {
    const target = event.target instanceof Element ? event.target : null
    const host = target?.closest(SPOT_SELECTOR)
    if (!host) return
    const r = host.getBoundingClientRect()
    host.style.setProperty('--spot-x', `${event.clientX - r.left}px`)
    host.style.setProperty('--spot-y', `${event.clientY - r.top}px`)
  }
  document.addEventListener('pointermove', onMove, { passive: true })

  // ---- 2. scroll reveal ----------------------------------------------------
  let observer = null
  let mutations = null
  if (!reduce && 'IntersectionObserver' in window) {
    // Only now is it safe to hide anything: we can guarantee we can show it again.
    document.documentElement.classList.add('hx-reveal-on')
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
    )
    // Tracked in a WeakSet owned by THIS observer, not a data attribute on the
    // element. start() can run more than once (init, then the router's first
    // route-changed), and each run disconnects the previous observer. With a
    // persistent attribute the second run skipped every element as "already
    // bound" while its observer watched nothing — so the grid never revealed.
    const seen = new WeakSet()
    const observe = (n) => {
      if (seen.has(n)) return
      seen.add(n)
      observer.observe(n)
    }
    document.querySelectorAll(REVEAL_SELECTOR).forEach(observe)

    // Content that appears AFTER init must be observed too. The projects grid
    // is a v-for over a filtered list: changing the filter destroys the cards
    // and builds new ones. Those replacements were never observed, so they kept
    // the pre-reveal opacity: 0 and the grid looked empty until a page reload.
    mutations = new MutationObserver((records) => {
      for (const rec of records) {
        for (const node of rec.addedNodes) {
          if (node.nodeType !== 1) continue
          if (node.matches?.(REVEAL_SELECTOR)) observe(node)
          node.querySelectorAll?.(REVEAL_SELECTOR).forEach(observe)
        }
      }
    })
    mutations.observe(document.body, { childList: true, subtree: true })
  }

  cleanup = () => {
    document.removeEventListener('pointermove', onMove)
    observer?.disconnect()
    mutations?.disconnect()
    cleanup = () => {}
  }
}

export function setupInteractions(router) {
  if (typeof window === 'undefined') return

  const run = () => requestAnimationFrame(() => requestAnimationFrame(start))
  run()

  // VitePress is a SPA: re-scan after each navigation so newly mounted content
  // is observed too.
  if (router) {
    const previous = router.onAfterRouteChanged
    router.onAfterRouteChanged = (to) => {
      previous?.(to)
      run()
    }
  }
}
