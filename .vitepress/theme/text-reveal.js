/**
 * CHROMATIC TITLE ASSEMBLE
 * ---------------------------------------------------------------------------
 * Big titles assemble from scattered characters, each arriving with a colour
 * fringe that collapses as it lands.
 *
 * Adapted from ThreeUI's `threeui-intro` wordmark scene (MIT, MengTo/threeui —
 * see /THIRD_PARTY_NOTICES.md). That source is a 30-second, 21-scene branded
 * keynote for their own logo; only its opening beat is a reusable heading
 * treatment, and that is what this is. Their per-character recipe — seeded
 * jitter, staggered ease-out, an RGB text-shadow split that shrinks to zero,
 * and a blur that collapses with it — is kept. Changed here:
 *
 *   - The split is orange/blue rather than red/green/blue. Green is not in
 *     this site's palette, and a two-way split on the brand accents reads as
 *     deliberate rather than as a broken screen.
 *   - The motion runs from CSS keyframes driven by a per-character `--i`,
 *     rather than from a JS timeline ticking every frame. There is no
 *     per-frame work at all: the browser owns the animation.
 *
 * ACCESSIBILITY — the part that is easy to get wrong.
 * Splitting a heading into per-character spans destroys it for a screen
 * reader, which would announce "R… a… y…", and it breaks text selection and
 * find-in-page. So the container keeps the original string as `aria-label`,
 * the generated spans are `aria-hidden`, and the split only ever happens on
 * the client — the server still renders one clean text node, which is what
 * search engines and no-JS visitors get.
 *
 * LAYOUT.
 * Characters are wrapped per WORD, and each word is `inline-block` with
 * `white-space: nowrap`, so a title still wraps between words and never mid
 * word. Without that, per-character spans let a line break fall anywhere.
 */

const SELECTOR = [
  '.vp-doc h1.page-title-center', // case-study titles
  '.vp-doc h1',                   // the projects index title
  '.hx-title',                    // homepage section titles
  '.sr-name'                      // the hero name, "Raymond Cheng"
].join(', ')

/** Deterministic PRNG so a title scatters the same way on every visit. */
const seeded = (seed) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296
  return seed / 4294967296
}

/** Marks elements already processed, without writing to the DOM. */
const done = new WeakSet()

/**
 * Turns one string into word wrappers of per-character spans, appended to
 * `into`. `state.i` carries the character index ACROSS calls so the stagger
 * flows continuously through a heading made of several lines.
 */
function buildWords(text, into, rand, state) {
  for (const word of text.split(/(\s+)/)) {
    if (!word) continue

    if (/^\s+$/.test(word)) {
      into.appendChild(document.createTextNode(' '))
      continue
    }

    const wordEl = document.createElement('span')
    wordEl.className = 'hx-word'
    wordEl.setAttribute('aria-hidden', 'true')

    for (const ch of word) {
      const span = document.createElement('span')
      span.className = 'hx-char'
      span.textContent = ch
      // The hero's chromatic ghosts are pseudo-elements drawing `attr(data-t)`.
      // They used to sit on the whole line; once the line is split they have to
      // sit on each character instead, or the ghost of the entire word would
      // hang in place while the letters flew in around it.
      span.setAttribute('data-t', ch)
      // Jitter and stagger are handed to CSS as custom properties, so the
      // keyframes stay one shared rule rather than one per character.
      span.style.setProperty('--i', state.i++)
      span.style.setProperty('--dx', `${(rand() * 2 - 1).toFixed(3)}`)
      span.style.setProperty('--dy', `${(rand() * 2 - 1).toFixed(3)}`)
      wordEl.appendChild(span)
    }

    into.appendChild(wordEl)
  }
}

/**
 * VitePress appends `<a class="header-anchor">​</a>` — a link whose only
 * content is a zero-width space — inside every generated heading. It has to be
 * left completely alone: it is the "#" permalink, and it must not be split,
 * counted in the stagger, or included in the accessible name. Treating it as
 * content produced an `aria-label` of exactly one invisible character.
 */
const ANCHOR = '.header-anchor'

/** Zero-width characters that must never reach a label or a character span. */
const INVISIBLE = /[​‌‍﻿]/g

function split(el) {
  if (done.has(el) || el.querySelector('.hx-char')) return false

  const anchor = el.querySelector(ANCHOR)
  const nodes = [...el.childNodes].filter(
    (n) => !(n.nodeType === 1 && n.matches(ANCHOR))
  )

  // Text sitting directly in the heading, ignoring the anchor.
  const directText = nodes
    .filter((n) => n.nodeType === 3)
    .map((n) => n.textContent)
    .join('')
    .replace(INVISIBLE, '')

  // Element children that each hold one line of the heading and carry their
  // own styling — the hero name's two `.sr-line` spans. They have to SURVIVE
  // the split; replacing them would drop the line breaks and every rule
  // attached to them.
  const lineEls = nodes.filter(
    (n) => n.nodeType === 1 && n.childNodes.length && [...n.childNodes].every((c) => c.nodeType === 3)
  )

  const useLines = !directText.trim() && lineEls.length > 0
  const label = (useLines
    ? lineEls.map((l) => l.textContent.replace(INVISIBLE, '').trim()).filter(Boolean).join(' ')
    : directText
  ).trim()

  if (!label || label.length > 120) return false

  const rand = seeded(label.length * 7919 + label.charCodeAt(0) * 31)
  const state = { i: 0 }

  // Set before anything is emptied, or the accessible name is computed from
  // an element that no longer has content.
  if (!el.hasAttribute('aria-label')) el.setAttribute('aria-label', label)

  if (useLines) {
    for (const line of lineEls) {
      const frag = document.createDocumentFragment()
      buildWords(line.textContent.replace(INVISIBLE, ''), frag, rand, state)
      line.replaceChildren(frag)
    }
  } else {
    const frag = document.createDocumentFragment()
    buildWords(directText, frag, rand, state)
    el.replaceChildren(frag)
    // Put the permalink back exactly as VitePress left it.
    if (anchor) el.appendChild(anchor)
  }

  el.classList.add('hx-split')
  done.add(el)
  return true
}

export function setupTextReveal(router) {
  if (typeof window === 'undefined') return

  // The whole effect is entrance motion, so there is nothing meaningful to
  // keep for someone who has asked for less of it. Leaving the heading as a
  // plain text node is also the better outcome for them.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const reveal = (el) => {
    el.classList.add('hx-split-in')
    observer.unobserve(el)
  }

  /**
   * Fires the instant ANY part of the heading enters the viewport.
   *
   * The margin used to be `0px 0px -10% 0px`, which put the trigger line 10%
   * of the viewport up from the bottom. Combined with characters that rested
   * in their finished state, that meant a heading was fully painted while it
   * sat in the bottom tenth of the screen and only animated once it crossed
   * the line — reading as the text arriving, then arriving again.
   *
   * With characters now hidden until revealed, the margin has to be zero for
   * the opposite reason: any delay would leave a visible blank gap where the
   * heading should be.
   */
  /**
   * IntersectionObserver delivers its first callback from the layout as it
   * stood when observation began. On the homepage that is before the hero
   * video, fonts and sections have settled, so every heading — including ones
   * thousands of pixels down the page — was reported as intersecting and
   * revealed itself immediately, off screen, where nobody saw it.
   *
   * Re-checking the geometry at callback time makes the decision independent
   * of when layout settles. An element that is not actually on screen stays
   * observed and gets another callback later.
   */
  const onScreen = (el) => {
    const r = el.getBoundingClientRect()
    if (!r.height && !r.width) return false
    return r.top < window.innerHeight && r.bottom > 0
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && onScreen(entry.target)) reveal(entry.target)
      }
    },
    { rootMargin: '0px', threshold: 0 }
  )

  /**
   * Insurance. Hidden-until-revealed means a missed observer callback would
   * leave a heading permanently invisible, which is far worse than a missed
   * animation. Anything still unrevealed after a moment is simply shown.
   */
  const failSafe = (elements) => {
    setTimeout(() => {
      for (const el of elements) {
        if (!el.classList.contains('hx-split-in') && onScreen(el)) reveal(el)
      }
    }, 2500)
  }

  const scan = () => {
    const fresh = []
    for (const el of document.querySelectorAll(SELECTOR)) {
      if (split(el)) {
        observer.observe(el)
        fresh.push(el)
      }
    }
    if (fresh.length) failSafe(fresh)
  }

  const schedule = () => requestAnimationFrame(() => requestAnimationFrame(scan))

  // Printing does not scroll, so anything still hidden would print blank.
  window.addEventListener('beforeprint', () => {
    for (const el of document.querySelectorAll('.hx-split:not(.hx-split-in)')) {
      el.classList.add('hx-split-in')
    }
  })

  schedule()

  // VitePress swaps page content without a reload, so each route needs a pass.
  const previous = router.onAfterRouteChanged
  router.onAfterRouteChanged = (to) => {
    previous?.(to)
    schedule()
  }
}
