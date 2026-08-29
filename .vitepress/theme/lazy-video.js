/**
 * LAZY VIDEO
 * ---------------------------------------------------------------------------
 * Project pages carry ~40 gameplay clips. Left alone, every one of them starts
 * buffering the moment the page parses, in parallel, competing for the same
 * connection pool — one page measured 1.3 GB transferred across 93 media
 * requests.
 *
 * The markup half of the fix lives in the project markdown: no `autoplay`,
 * `preload="none"`, and a poster frame. That means nothing is fetched until
 * something asks for it. This module is the "something": it plays a clip when
 * it scrolls into view and pauses it when it leaves, so a visitor only ever
 * downloads the clips they actually look at.
 *
 * Two behaviours worth knowing:
 *   - Carousel slides that are not showing are `display: none`, which never
 *     produce an intersection, so hidden slides stay unloaded for free. They
 *     load on their own when the radio flips them to `display: block`.
 *   - Under prefers-reduced-motion nothing plays by itself; the clips get
 *     native controls instead so they are still reachable, just deliberate.
 */

const SELECTOR = 'video[data-lazy-video]'

// Start fetching slightly before the clip is actually on screen so it is
// playing by the time it arrives, without loading the whole page's worth.
const ROOT_MARGIN = '200px 0px'

let observer = null
let reduceMotion = false

const play = (video) => {
  // preload="none" means play() is also what triggers the download.
  const attempt = video.play()
  if (attempt && typeof attempt.catch === 'function') {
    // Autoplay can still be refused (power saving, unmuted, background tab).
    // Falling back to controls keeps the clip reachable instead of dead.
    attempt.catch(() => {
      video.setAttribute('controls', '')
    })
  }
}

const onIntersect = (entries) => {
  entries.forEach((entry) => {
    const video = entry.target
    if (entry.isIntersecting) {
      play(video)
    } else if (!video.paused) {
      video.pause()
    }
  })
}

const scan = () => {
  if (!observer) return
  document.querySelectorAll(SELECTOR).forEach((video) => {
    if (video.dataset.lazyBound === '1') return
    video.dataset.lazyBound = '1'

    if (reduceMotion) {
      video.setAttribute('controls', '')
      return // observed by nobody: it plays only if the visitor asks
    }
    observer.observe(video)
  })
}

export function setupLazyVideo(router) {
  if (typeof window === 'undefined') return

  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!('IntersectionObserver' in window)) {
    // No observer: fall back to controls rather than autoplaying everything,
    // which is the behaviour this module exists to prevent.
    document.querySelectorAll(SELECTOR).forEach((v) => v.setAttribute('controls', ''))
    return
  }

  observer = new IntersectionObserver(onIntersect, {
    rootMargin: ROOT_MARGIN,
    threshold: 0.01
  })

  const rescan = () => requestAnimationFrame(() => requestAnimationFrame(scan))

  rescan()

  // VitePress is a SPA: new pages mount without a reload, so re-scan after
  // each navigation. Elements from the old route are garbage collected along
  // with their observer entries.
  if (router) {
    const previous = router.onAfterRouteChanged
    router.onAfterRouteChanged = (to) => {
      previous?.(to)
      rescan()
    }
  }
}
