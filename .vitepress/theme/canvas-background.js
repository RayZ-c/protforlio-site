/**
 * CANVAS BACKGROUND RUNTIME
 * ---------------------------------------------------------------------------
 * The shared lifecycle behind the two full-page canvas backgrounds: the signal
 * dot field on interior pages and the beams on the homepage.
 *
 * It exists because that lifecycle has one genuinely subtle bug in it, and it
 * should only have to be solved once:
 *
 *   A background component is mounted ONCE by the layout and stays mounted for
 *   the whole session; only its canvas comes and goes as the route changes. So
 *   `onMounted` fires on whichever page the visitor happened to land on. Doing
 *   setup there means someone who arrives at the homepage and then clicks
 *   through gets a canvas that was never initialised — 300x150 and blank. That
 *   is the common path, and it is invisible on a hard reload, which is exactly
 *   how it survived the first round of testing. Setup must be driven by the
 *   route, not by mount.
 *
 * It also owns the parts every canvas background needs and nobody remembers:
 * DPR handling, a frame cap, stopping when the tab is hidden, honouring
 * reduced motion, and removing its listeners.
 */

/**
 * @param {HTMLCanvasElement} el
 * @param {object} options
 * @param {(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => void} options.draw
 *   Paints one frame. `t` is seconds since start.
 * @param {(w: number, h: number) => void} [options.layout]
 *   Called on resize, before the first draw at the new size — for anything
 *   that has to be rebuilt when the viewport changes.
 * @param {number} [options.fps=45]
 * @param {number|(() => number)} [options.scale]
 *   Backing-store pixels per CSS pixel. Defaults to the device ratio capped at
 *   2. Pass a value below 1 for content that is blurred anyway: rendering a
 *   soft image at a third of the resolution and letting the browser scale it
 *   up is far cheaper and looks identical.
 * @param {boolean} [options.staticWhenReduced=true]
 *   Under reduced motion, draw a single frame and never start the loop.
 * @returns {() => void} teardown
 */
export function mountCanvas(el, options) {
  const ctx = el.getContext('2d', { alpha: true })
  if (!ctx) return () => {}

  const {
    draw,
    layout,
    fps = 45,
    scale = () => Math.min(window.devicePixelRatio || 1, 2),
    staticWhenReduced = true
  } = options

  const frameMs = 1000 / fps
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let width = 0
  let height = 0
  let frame = 0
  let last = 0
  let started = 0
  let seconds = 0

  const resolveScale = () => (typeof scale === 'function' ? scale() : scale)

  const resize = () => {
    width = el.clientWidth
    height = el.clientHeight
    if (!width || !height) return

    const s = resolveScale()
    el.width = Math.max(1, Math.round(width * s))
    el.height = Math.max(1, Math.round(height * s))
    // Draw in CSS pixels regardless of the backing-store scale, so the paint
    // code never has to think about resolution.
    ctx.setTransform(s, 0, 0, s, 0, 0)

    layout?.(width, height)
    draw(ctx, width, height, seconds)
  }

  const loop = (now) => {
    frame = requestAnimationFrame(loop)
    if (now - last < frameMs) return
    last = now
    seconds = (now - started) / 1000
    draw(ctx, width, height, seconds)
  }

  const start = () => {
    if (frame || (reduced && staticWhenReduced)) return
    // Rebase the clock so a paused tab does not resume with a huge jump.
    started = performance.now() - seconds * 1000
    last = 0
    frame = requestAnimationFrame(loop)
  }

  const pause = () => {
    if (!frame) return
    cancelAnimationFrame(frame)
    frame = 0
  }

  const onVisibility = () => (document.hidden ? pause() : start())

  resize()
  start()

  window.addEventListener('resize', resize, { passive: true })
  document.addEventListener('visibilitychange', onVisibility)

  return () => {
    pause()
    window.removeEventListener('resize', resize)
    document.removeEventListener('visibilitychange', onVisibility)
  }
}
