<script setup>
/**
 * SHOWREEL CHAPTER DECK — the homepage hero.
 * ---------------------------------------------------------------------------
 * public/videos/banner.mp4 is a 53-second reel covering five real projects.
 * Instead of playing it as wallpaper, this hero turns it into a navigable
 * index: each chapter seeks the reel to that project's segment and swaps the
 * caption + case-study link with it.
 *
 * Behaviour
 *   - Auto-advances through the chapters while nothing is pinned.
 *   - Hovering a chapter previews it; clicking pins it and loops that segment.
 *   - Chapters are real <button>s: tab to the rail, arrow-key between them.
 *   - prefers-reduced-motion: nothing auto-plays or auto-advances. The reel
 *     holds a still frame and selecting a chapter seeks to that project's
 *     frame, so the deck still works as a picker.
 *   - Pauses entirely when the hero scrolls out of view.
 *
 * Every timestamp and tuneable lives in SHOWREEL_CONFIG below. The `start`
 * values were read off the actual footage; if banner.mp4 is ever re-cut, this
 * object is the only thing that needs updating.
 */
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'

const SHOWREEL_CONFIG = {
  video: '/videos/banner.mp4',
  poster: '/banner-cover.jpg',

  // Seconds of a chapter to play before auto-advancing to the next one.
  chapterPlaySeconds: 12.9,
  // Seconds to wait after a manual pick before auto-advance may resume.
  // 0 = never resume until the visitor unpins.
  resumeAfterPickSeconds: 0,
  // How far into a chapter a hover-preview jumps.
  previewOffsetSeconds: 0.4,
  // Max px the button labels drift toward the pointer (0 disables the effect).
  magnetStrength: 5,

  // Rotating specialism in the role line. Pattern adapted from the 21st.dev /
  // twblocks "animated hero" (React + framer-motion) and rebuilt in plain
  // Vue + CSS. Words cycle every rotateIntervalMs; the job title beside them
  // stays static so it remains scannable.
  rotateIntervalMs: 2200,
  // Tech stack shown as interactive chips under the role line. The chips also
  // run an idle "attract" sweep: each one plays its own hover state in order,
  // engineCycleMs apart, wrapping straight back to the first with no pause.
  engines: ['Unity', 'Unreal Engine 5', 'Roblox', 'C#', 'C++', 'Lua'],
  engineCycleMs: 1000,

  rotatingWords: [
    'combat systems',
    'boss encounters',
    'movement & game feel',
    'gameplay frameworks',
    'VFX & SFX'
  ],

  chapters: [
    {
      id: 'path-to-power',
      label: 'Path to Power',
      start: 0,
      title: 'Path to Power',
      kind: '2D action platformer',
      stack: 'Unity · C# · Combat & game feel',
      href: '/projects/path-to-power'
    },
    {
      id: 'pixel-adventure',
      label: 'Pixel Adventure',
      start: 15,
      title: 'Pixel Adventure',
      kind: 'Top-down boss RPG',
      stack: 'Unity · C# · Enemy AI',
      href: '/projects/pixel-adventure'
    },
    {
      id: 'ue5-fps',
      label: 'FPS Framework',
      start: 18.4,
      title: '1st Person Shooter Framework',
      kind: 'Modular FPS systems',
      stack: 'Unreal Engine 5 · C++ · AI',
      href: '/projects/ue5-fps'
    },
    {
      id: 'elder-escape',
      label: 'Endless Runner',
      start: 24.75,
      title: 'Cyborg Monkey Endless Runner',
      kind: '4-day game jam build',
      stack: 'Unreal Engine 5 · Blueprints',
      href: '/projects/elder-escape'
    },
    {
      id: 'roblox-luffy',
      label: 'Roblox Movesets',
      start: 29.19,
      title: 'Roblox RPG Movesets',
      kind: 'Commissioned combat framework',
      stack: 'Roblox Studio · Lua · VFX/SFX',
      href: '/projects/roblox-luffy'
    }
  ]
}

const chapters = SHOWREEL_CONFIG.chapters
const hero = ref(null)
const video = ref(null)
const rail = ref(null)
const railRefs = ref([])

const activeIndex = ref(0)
const pinnedIndex = ref(null)
const progress = ref(0)
const reducedMotion = ref(false)

const words = SHOWREEL_CONFIG.rotatingWords
const wordIndex = ref(0)
// Sizes the rotator to its longest word so the line never reflows mid-cycle.
const longestWord = words.reduce((a, w) => (w.length > a.length ? w : a), '')
let wordTimer = null

const startWords = () => {
  if (wordTimer || reducedMotion.value || words.length < 2) return
  wordTimer = setInterval(() => {
    wordIndex.value = (wordIndex.value + 1) % words.length
  }, SHOWREEL_CONFIG.rotateIntervalMs)
}

const stopWords = () => {
  clearInterval(wordTimer)
  wordTimer = null
}

// --- engine chip attract mode ------------------------------------------------
// Highlights one chip at a time. A real pointer always wins: entering the row
// cancels the pass so the auto highlight never fights the chip you are on.
const engines = SHOWREEL_CONFIG.engines
const engineAutoIndex = ref(-1) // chip currently lit by the sweep, -1 = none
const hoveredEngines = ref(0) // how many chips the pointer is inside right now
let engineCursor = -1 // sweep position, kept across pauses so it resumes in place
let engineTimer = null

const stopEngines = () => {
  clearTimeout(engineTimer)
  engineTimer = null
  engineAutoIndex.value = -1
}

const startEngines = () => {
  if (engineTimer || reducedMotion.value || hoveredEngines.value > 0 || engines.length < 2) return
  const step = () => {
    // Wraps straight to 0 — no idle gap between passes.
    engineCursor = (engineCursor + 1) % engines.length
    engineAutoIndex.value = engineCursor
    engineTimer = setTimeout(step, SHOWREEL_CONFIG.engineCycleMs)
  }
  engineTimer = setTimeout(step, SHOWREEL_CONFIG.engineCycleMs)
}

// Enter/leave are bound per chip, not to the <ul>: the list box spans the whole
// hero column, so pointing anywhere near the row used to pause the sweep. The
// counter absorbs the leave/enter pair fired when moving between two adjacent
// chips, which would otherwise restart the timer on every crossing.
const onEngineEnter = () => {
  hoveredEngines.value += 1
  stopEngines()
}

const onEngineLeave = () => {
  hoveredEngines.value = Math.max(hoveredEngines.value - 1, 0)
  if (hoveredEngines.value === 0) startEngines()
}

let cleanup = () => {}

const chapterEnd = (index) => {
  const next = chapters[index + 1]
  const cap = chapters[index].start + SHOWREEL_CONFIG.chapterPlaySeconds
  // Never run past the start of the following chapter.
  return next ? Math.min(cap, next.start) : cap
}

// On narrow screens the rail scrolls horizontally, so an auto-advanced chapter
// can end up off-screen. Keep the active one in view without scrolling the page.
const revealChapter = (index) => {
  const railEl = rail.value
  const button = railRefs.value[index]
  const item = button?.parentElement
  if (!railEl || !item) return
  const pad = 16
  const left = item.offsetLeft
  const right = left + item.offsetWidth
  const behavior = reducedMotion.value ? 'auto' : 'smooth'
  if (left < railEl.scrollLeft) {
    railEl.scrollTo({ left: Math.max(left - pad, 0), behavior })
  } else if (right > railEl.scrollLeft + railEl.clientWidth) {
    railEl.scrollTo({ left: right - railEl.clientWidth + pad, behavior })
  }
}

const seekTo = (index, offset = 0) => {
  const el = video.value
  activeIndex.value = index
  progress.value = 0
  nextTick(() => revealChapter(index))
  if (!el) return
  const go = () => {
    try {
      el.currentTime = chapters[index].start + offset
    } catch {
      /* metadata not ready yet — the loadedmetadata handler retries */
    }
  }
  if (el.readyState >= 1) go()
  else el.addEventListener('loadedmetadata', go, { once: true })
}

const pick = (index) => {
  pinnedIndex.value = index
  seekTo(index)
  if (!reducedMotion.value) video.value?.play?.().catch(() => {})
}

const preview = (index) => {
  if (reducedMotion.value || pinnedIndex.value !== null) return
  seekTo(index, SHOWREEL_CONFIG.previewOffsetSeconds)
}

const unpin = () => {
  pinnedIndex.value = null
}

// Magnetic labels: the text drifts a few px toward the pointer, then settles.
// Applied to an inner <span> so it never fights the button's own :active
// transform, and skipped entirely under reduced motion.
const onMagnet = (event) => {
  if (reducedMotion.value || !SHOWREEL_CONFIG.magnetStrength) return
  const el = event.currentTarget
  const r = el.getBoundingClientRect()
  const k = SHOWREEL_CONFIG.magnetStrength
  el.style.setProperty('--mag-x', `${((event.clientX - r.left) / r.width - 0.5) * 2 * k}px`)
  el.style.setProperty('--mag-y', `${((event.clientY - r.top) / r.height - 0.5) * 2 * k * 0.5}px`)
}

const clearMagnet = (event) => {
  event.currentTarget.style.setProperty('--mag-x', '0px')
  event.currentTarget.style.setProperty('--mag-y', '0px')
}

// Roving arrow-key navigation across the chapter rail.
const onRailKey = (event, index) => {
  const last = chapters.length - 1
  let next = null
  if (event.key === 'ArrowRight') next = index === last ? 0 : index + 1
  else if (event.key === 'ArrowLeft') next = index === 0 ? last : index - 1
  else if (event.key === 'Home') next = 0
  else if (event.key === 'End') next = last
  if (next === null) return
  event.preventDefault()
  pick(next)
  railRefs.value[next]?.focus()
}

onMounted(() => {
  const el = video.value
  const host = hero.value
  reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  seekTo(0)

  const onTimeUpdate = () => {
    const index = activeIndex.value
    const { start } = chapters[index]
    const end = chapterEnd(index)
    const span = Math.max(end - start, 0.001)
    progress.value = Math.min(Math.max((el.currentTime - start) / span, 0), 1)

    if (el.currentTime < start - 0.5 || el.currentTime >= end) {
      if (pinnedIndex.value !== null) {
        seekTo(index) // pinned: loop this chapter
      } else {
        seekTo((index + 1) % chapters.length) // otherwise advance
      }
    }
  }

  if (!reducedMotion.value) {
    el.addEventListener('timeupdate', onTimeUpdate)
  }

  let observer = null
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !reducedMotion.value) {
          el.play?.().catch(() => {})
          startWords()
          startEngines()
        } else {
          el.pause?.()
          stopWords()
          stopEngines()
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(host)
  } else if (!reducedMotion.value) {
    el.play?.().catch(() => {})
    startWords()
    startEngines()
  }

  cleanup = () => {
    stopWords()
    stopEngines()
    el?.removeEventListener('timeupdate', onTimeUpdate)
    el?.pause?.()
    observer?.disconnect()
  }
})

onBeforeUnmount(() => cleanup())
</script>

<template>
  <section ref="hero" class="sr-hero" aria-labelledby="sr-hero-title">
    <video
      ref="video"
      class="sr-video"
      muted
      playsinline
      preload="metadata"
      disablepictureinpicture
      :poster="withBase(SHOWREEL_CONFIG.poster)"
      aria-hidden="true"
      tabindex="-1"
    >
      <source :src="withBase(SHOWREEL_CONFIG.video)" type="video/mp4">
    </video>

    <HeroNameEnergy />

    <p class="sr-status">
      <span class="hx-dot" aria-hidden="true" />
      Open to roles &amp; internships
    </p>

    <div class="sr-copy hx-shell">
      <h1 id="sr-hero-title" class="sr-name">
        <span class="sr-line" data-t="Raymond">Raymond</span>
        <span class="sr-line" data-t="Cheng">Cheng</span>
      </h1>
      <p class="sr-role">
        <span class="sr-role-title">Gameplay Programmer</span>
        <span class="sr-role-sep" aria-hidden="true"></span>
        <span class="sr-rotator">
          <!-- invisible sizer keeps the line from reflowing as words swap -->
          <span class="sr-rotator-sizer" aria-hidden="true">{{ longestWord }}</span>
          <span
            v-for="(word, i) in words"
            :key="word"
            class="sr-rotator-word"
            :class="{ 'is-current': i === wordIndex }"
            :aria-hidden="i !== wordIndex"
          >{{ word }}</span>
        </span>
      </p>
      <ul class="sr-engines">
        <li
          v-for="(engine, i) in SHOWREEL_CONFIG.engines"
          :key="engine"
          class="sr-engine"
          :class="{ 'is-auto': engineAutoIndex === i }"
          @pointerenter="onEngineEnter"
          @pointerleave="onEngineLeave"
        >
          <span class="sr-engine-face">{{ engine }}</span>
        </li>
      </ul>
      <div class="sr-actions">
        <a
          class="hx-btn sr-magnet"
          :href="withBase('/projects/')"
          @pointermove="onMagnet"
          @pointerleave="clearMagnet"
        ><span class="sr-magnet-label">View projects</span></a>
        <a
          class="hx-btn hx-btn--ghost sr-magnet"
          :href="withBase('/cv_v2.pdf')"
          target="_blank"
          rel="noopener"
          @pointermove="onMagnet"
          @pointerleave="clearMagnet"
        ><span class="sr-magnet-label">Read my CV</span></a>
      </div>
    </div>

    <!-- The reel as a navigable index. The active chapter widens to reveal its
         own detail, so no separate "now playing" caption block is needed. -->
    <div class="sr-deck hx-shell">
      <div
        ref="rail"
        class="sr-rail"
        role="radiogroup"
        aria-label="Showreel chapter"
        @mouseleave="preview(pinnedIndex ?? activeIndex)"
      >
        <div
          v-for="(chapter, index) in chapters"
          :key="chapter.id"
          class="sr-chapter"
          :class="{ 'is-active': index === activeIndex, 'is-pinned': index === pinnedIndex }"
        >
          <button
            :ref="(el) => (railRefs[index] = el)"
            class="sr-chapter-head"
            type="button"
            role="radio"
            :aria-checked="index === activeIndex"
            :aria-label="`${chapter.title} — ${chapter.kind}`"
            :tabindex="index === activeIndex ? 0 : -1"
            @click="index === pinnedIndex ? unpin() : pick(index)"
            @mouseenter="preview(index)"
            @focus="preview(index)"
            @keydown="onRailKey($event, index)"
          >
            <span class="sr-chapter-index" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="sr-chapter-label">{{ chapter.label }}</span>
          </button>

          <div v-if="index === activeIndex" class="sr-chapter-detail">
            <span class="sr-chapter-stack">{{ chapter.stack }}</span>
            <a class="sr-chapter-link" :href="withBase(`${chapter.href}.html`)">
              Open case study <span class="hx-arrow" aria-hidden="true">→</span>
            </a>
          </div>

          <span class="sr-chapter-bar" aria-hidden="true">
            <span
              class="sr-chapter-fill"
              :style="{ transform: `scaleX(${index === activeIndex ? progress : 0})` }"
            />
          </span>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.sr-hero {
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: calc(100svh - var(--vp-nav-height));
  min-height: 660px;
  overflow: hidden;
  background: #04060c;
  color: #fff;
  font-family: var(--hx-font-body, "Inter", system-ui, sans-serif);
}

@media (min-width: 960px) {
  .sr-hero {
    height: 100svh;
    padding-top: var(--vp-nav-height);
  }
}

.sr-hero::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 3px;
  z-index: 5;
  background: var(--hx-rule, linear-gradient(90deg, transparent, #ff8c1a, #2e62d9, #c9d6e8, transparent));
}

/* Cinematic tint: a left scrim for the copy, a bottom scrim for the deck. */
.sr-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    linear-gradient(100deg, rgba(2, 6, 14, 0.78) 0%, rgba(2, 6, 14, 0.2) 54%, rgba(2, 6, 14, 0) 80%),
    linear-gradient(180deg, rgba(2, 6, 14, 0.66) 0%, rgba(2, 6, 14, 0.06) 30%, rgba(5, 7, 13, 0.97) 100%),
    rgba(2, 6, 14, 0.36);
}

.sr-video {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sr-copy,
.sr-deck {
  position: relative;
  z-index: 3;
}

/* ---- copy ----
   A single clean ladder: availability -> name -> role -> stack -> actions.
   The positioning sentence and the separate "now playing" caption block were
   cut; the chapter rail now carries that information itself. */
.sr-copy {
  /* Clears the absolutely-positioned status chip so it gets its own band at
     the top instead of sitting level with the headline. */
  padding-top: clamp(70px, 11vh, 112px);
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.72);
  max-width: min(1200px, 100%);
}

.sr-status {
  /* Centred at the top of the hero. The offset clears the fixed navbar on
     desktop; below 960px VitePress keeps the navbar in flow, so no offset. */
  position: absolute;
  z-index: 4;
  top: clamp(14px, 2.6vh, 26px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  max-width: calc(100% - 32px);
  align-items: center;
  gap: 9px;
  margin: 0;
  padding: 6px 15px;
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
  white-space: nowrap;
}

/* Must come after the base rule: on desktop the navbar is fixed and overlays
   the hero, so the chip has to start below it. */
@media (min-width: 960px) {
  .sr-status {
    top: calc(var(--vp-nav-height) + clamp(16px, 3vh, 30px));
  }
}

.hx-dot {
  flex: none;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ff8c1a;
  animation: sr-pulse 2.4s ease-in-out infinite;
}

@keyframes sr-pulse {
  0% { box-shadow: 0 0 0 0 rgba(255, 140, 26, 0.55); }
  70% { box-shadow: 0 0 0 8px rgba(255, 140, 26, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 140, 26, 0); }
}

.sr-name {
  position: relative;
  /* Shrink-wraps the text so HeroNameEnergy measures the actual headline box
     and keeps the flame field around the name, not across the whole hero. */
  width: fit-content;
  margin: 0;
  border: 0;
  padding: 0;
  /* Archivo Black is much wider than Bebas, so the scale is pulled back. */
  font-family: var(--hx-font-name, "Archivo Black", Impact, sans-serif);
  font-size: clamp(2.55rem, 5.4vw, 5.1rem);
  font-weight: 400;
  line-height: 1.02;
  letter-spacing: -0.012em;
  text-transform: uppercase;
  color: #fff;
}

.sr-line {
  display: block;
  position: relative;
  /* Ki aura: hot core, orange body, cool outer halo. The hard offset stays so
     the letterforms keep a defined edge over bright footage. */
  text-shadow:
    0 0 5px rgba(255, 205, 150, 0.95),
    0 0 18px rgba(255, 150, 40, 0.8),
    0 0 42px rgba(255, 110, 0, 0.6),
    0 0 86px rgba(90, 150, 255, 0.34),
    3px 3px 0 rgba(179, 58, 0, 0.85);
  animation: sr-ki 2.6s ease-in-out infinite;
}

@keyframes sr-ki {
  50% {
    text-shadow:
      0 0 7px #fff,
      0 0 26px rgba(255, 170, 60, 0.95),
      0 0 62px rgba(255, 120, 10, 0.8),
      0 0 120px rgba(90, 150, 255, 0.5),
      3px 3px 0 rgba(179, 58, 0, 0.85);
  }
}

/* Chromatic ghosts. These run on their own continuous loop: they sit at a
   small resting offset, then punch outward once per cycle. Independent of the
   canvas field — clicking the hero does not drive them. */
.sr-line::before,
.sr-line::after {
  content: attr(data-t);
  position: absolute;
  inset: 0;
  z-index: -1;
  text-shadow: none;
}

/* NOTE: the matching rules for the per-character ghosts are NOT here. This
   block is `<style scoped>`, which Vue compiles to `[data-v-hash]` selectors,
   and the character spans are created by text-reveal.js at runtime so they
   never carry that attribute. They live in home-experiment.css instead. */

/* Once text-reveal.js splits the name, the ghosts move DOWN to the individual
   characters, which each carry their own `data-t`. Without this the ghost of
   the whole word would hang in place while the letters flew in around it.
   The line-level pair is switched off in the same breath — leaving both on
   would paint the word twice. */
.sr-name.hx-split .sr-line::before,
.sr-name.hx-split .sr-line::after {
  content: none;
}

.sr-line::before {
  color: #ff8c1a;
  animation: sr-jolt-a 3.6s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
}

.sr-line::after {
  color: #5797ff;
  animation: sr-jolt-b 3.6s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
}

/* --------------------------------------------------------------------------
   Banner entrance
   --------------------------------------------------------------------------
   The name assembles per character (text-reveal.js). Everything else in the
   banner rises in behind it on one staggered beat, so the section arrives as a
   single composition rather than a headline plus a static block.

   These elements are deliberately NOT split per character: the role line owns
   an absolutely-positioned word rotator, the chips run their own attract
   cycle, and the buttons carry the magnet labels. Splitting any of them would
   break an effect that already works.
   -------------------------------------------------------------------------- */

/* Uses the standalone `translate` property, NOT `transform`.
   `.sr-status` is centred with `transform: translateX(-50%)`, and a keyframe
   that sets `transform` REPLACES that — the pill sat half its own width
   off-centre for the whole entrance and then snapped back into place when the
   animation ended and the base transform returned.
   `translate` composes with `transform` instead of overwriting it, so the
   centring survives. Same reason it is used for the other three: none of them
   needs a base transform today, but one added later would break silently. */
@keyframes sr-banner-in {
  from { opacity: 0; translate: 0 14px; }
  to   { opacity: 1; translate: 0 0; }
}

.sr-status,
.sr-role,
.sr-engines,
.sr-actions {
  animation: sr-banner-in 0.62s cubic-bezier(0.16, 0.84, 0.32, 1) backwards;
}

.sr-status  { animation-delay: 0.05s; }
.sr-role    { animation-delay: 0.62s; }
.sr-engines { animation-delay: 0.76s; }
.sr-actions { animation-delay: 0.9s; }

@keyframes sr-jolt-a {
  0%, 70%, 100% { transform: translate(-3px, 2px); opacity: 0.6; }
  78% { transform: translate(-15px, 7px); opacity: 1; }
  86% { transform: translate(-5px, 3px); opacity: 0.78; }
}

@keyframes sr-jolt-b {
  0%, 70%, 100% { transform: translate(3px, -2px); opacity: 0.55; }
  78% { transform: translate(15px, -7px); opacity: 0.95; }
  86% { transform: translate(5px, -3px); opacity: 0.72; }
}

.sr-role {
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 10px;
  margin: clamp(16px, 2.4vh, 24px) 0 0;
  font-family: var(--hx-font-ui, "Barlow Condensed", sans-serif);
  font-size: clamp(0.9375rem, 1.5vw, 1.125rem);
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #ff9e2c;
}

.sr-role::before {
  content: "";
  flex: none;
  width: 26px;
  height: 2px;
  background: currentColor;
}

.sr-role-title { white-space: nowrap; }

/* Was an em-dash character, which read as generic AI copy. Now a small
   diamond, echoing the timeline node marker used elsewhere on the page. */
.sr-role-sep {
  width: 6px;
  height: 6px;
  flex: none;
  background: currentColor;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  opacity: 0.75;
}

/* Rotating specialism. The sizer span reserves the width of the longest word,
   so the words can be absolutely positioned and swapped without reflow. */
.sr-rotator {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  color: #fff;
}

.sr-rotator-sizer {
  display: block;
  visibility: hidden;
  white-space: nowrap;
}

.sr-rotator-word {
  position: absolute;
  inset: 0;
  display: block;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(105%);
  transition: opacity 0.45s var(--hx-ease, cubic-bezier(0.22, 0.61, 0.36, 1)),
    transform 0.45s var(--hx-ease, cubic-bezier(0.22, 0.61, 0.36, 1));
}

/* Outgoing words leave upward, incoming words rise from below. */
.sr-rotator-word.is-current {
  opacity: 1;
  transform: translateY(0);
}

.sr-rotator-word:not(.is-current) {
  transform: translateY(-105%);
}

.sr-rotator-word.is-current ~ .sr-rotator-word {
  transform: translateY(105%);
}

/* Engine chips. The "loud-bird-67" mask treatment was dropped here: its bevel is
   hidden by two painted rectangles, so it cannot sit over video without an opaque
   face. These are transparent at rest instead — hairline outline, dimmed label —
   and on hover they ignite: corner brackets snap out, the frame turns orange and
   the chip scales up. Scale (not padding) does the growing so nothing reflows. */
.sr-engines {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
}

.sr-engine {
  position: relative;
  isolation: isolate;
}

.sr-engine-face {
  position: relative;
  display: block;
  padding: 5px 11px;
  border: 1px solid rgba(220, 230, 248, 0.18);
  background: transparent;
  font-family: var(--hx-font-ui, "Barlow Condensed", sans-serif);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: rgba(220, 230, 248, 0.62);
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.85);
  white-space: nowrap;
  cursor: default;
  transform-origin: center;
  transition:
    transform 0.32s var(--hx-ease),
    color 0.32s var(--hx-ease),
    border-color 0.32s var(--hx-ease),
    background-color 0.32s var(--hx-ease),
    box-shadow 0.32s var(--hx-ease);
}

/* Corner brackets: tucked inside and invisible at rest, they push outward and
   fade in on hover so the chip reads like a targeting reticle. */
.sr-engine-face::before,
.sr-engine-face::after {
  content: "";
  position: absolute;
  width: 9px;
  height: 9px;
  opacity: 0;
  border: 2px solid var(--hx-orange, #ff8c1a);
  transition: opacity 0.32s var(--hx-ease), inset 0.32s var(--hx-ease);
}

.sr-engine-face::before {
  top: 3px;
  left: 3px;
  border-right: 0;
  border-bottom: 0;
}

.sr-engine-face::after {
  right: 3px;
  bottom: 3px;
  border-left: 0;
  border-top: 0;
}

.sr-engine:hover .sr-engine-face,
.sr-engine:focus-within .sr-engine-face,
.sr-engine.is-auto .sr-engine-face {
  transform: scale(1.12);
  color: #fff;
  border-color: rgba(255, 140, 26, 0.75);
  background-color: rgba(5, 7, 13, 0.42);
  box-shadow: inset 0 0 18px rgba(255, 140, 26, 0.22), 0 0 16px rgba(255, 140, 26, 0.28);
}

.sr-engine:hover .sr-engine-face::before,
.sr-engine:focus-within .sr-engine-face::before,
.sr-engine.is-auto .sr-engine-face::before {
  opacity: 1;
  top: -3px;
  left: -3px;
}

.sr-engine:hover .sr-engine-face::after,
.sr-engine:focus-within .sr-engine-face::after,
.sr-engine.is-auto .sr-engine-face::after {
  opacity: 1;
  right: -3px;
  bottom: -3px;
}

@media (prefers-reduced-motion: reduce) {
  .sr-engine:hover .sr-engine-face,
  .sr-engine:focus-within .sr-engine-face,
  .sr-engine.is-auto .sr-engine-face { transform: none; }
}

.sr-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px 18px;
  margin-top: clamp(24px, 3.5vh, 36px);
}

/* Magnetic label: the text drifts toward the pointer, the button itself does
   not move, so nothing collides with .hx-btn's own :active transform. */
.sr-magnet-label {
  display: inline-block;
  transform: translate(var(--mag-x, 0px), var(--mag-y, 0px));
  transition: transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1);
  will-change: transform;
}

/* ---- chapter deck ---- */
.sr-deck {
  margin-top: auto;
  padding-top: clamp(24px, 4vh, 44px);
  padding-bottom: clamp(22px, 3.5vh, 36px);
}

.sr-rail {
  display: flex;
  gap: 2px;
  /* Fixed height: the active chapter expands sideways, never vertically, so
     nothing above it shifts as the reel advances. */
  min-height: 104px;
}

.sr-chapter {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1 1 0;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  transition: flex-grow 0.5s var(--hx-ease, cubic-bezier(0.22, 0.61, 0.36, 1)),
    border-color 0.3s ease, background 0.3s ease;
}

.sr-chapter:hover { background: rgba(255, 255, 255, 0.045); }

.sr-chapter.is-active {
  /* The signature move: the playing chapter opens to show its own detail. */
  flex-grow: 2.6;
  border-top-color: #ff8c1a;
  background: linear-gradient(180deg, rgba(255, 140, 26, 0.09), transparent 70%);
}

.sr-chapter-head {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 14px 0;
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.62);
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: color 0.25s ease;
}

.sr-chapter:hover .sr-chapter-head,
.sr-chapter.is-active .sr-chapter-head { color: #fff; }

.sr-chapter-index {
  font-family: var(--hx-font-ui, "Barlow Condensed", sans-serif);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  font-variant-numeric: tabular-nums;
  /* Was rgba(255,255,255,.4) -> 3.72:1 over the hero scrim, under the 4.5
     needed for small text. .62 measures 4.9:1 and still reads as secondary
     next to the active chapter. */
  color: rgba(255, 255, 255, 0.62);
  transition: color 0.25s ease;
}

.sr-chapter.is-active .sr-chapter-index { color: #ff8c1a; }

.sr-chapter.is-pinned .sr-chapter-index::after {
  content: " ■";
  font-size: 0.6em;
  vertical-align: 2px;
}

.sr-chapter-label {
  font-family: var(--hx-font-ui, "Barlow Condensed", sans-serif);
  font-size: clamp(0.875rem, 1.1vw, 1rem);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1.15;
}

.sr-chapter-detail {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 7px 14px 0;
  animation: sr-detail-in 0.45s var(--hx-ease, cubic-bezier(0.22, 0.61, 0.36, 1)) both;
}

@keyframes sr-detail-in {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: none; }
}

.sr-chapter-stack {
  font-family: var(--hx-font-ui, "Barlow Condensed", sans-serif);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #9fc2ff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sr-chapter-link {
  font-family: var(--hx-font-ui, "Barlow Condensed", sans-serif);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75) !important;
  text-decoration: none !important;
  white-space: nowrap;
  transition: color 0.2s ease;
}

.sr-chapter-link .hx-arrow {
  display: inline-block;
  transition: transform 0.25s ease;
}

.sr-chapter-link:hover,
.sr-chapter-link:focus-visible { color: #ffb45e !important; }
.sr-chapter-link:hover .hx-arrow { transform: translateX(5px); }

.sr-chapter-bar {
  display: block;
  height: 2px;
  margin: auto 14px 0;
  background: rgba(255, 255, 255, 0.12);
  overflow: hidden;
}

.sr-chapter-fill {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #ff8c1a, #ffb45e);
  transform-origin: left;
  transform: scaleX(0);
}

.sr-hero :focus-visible {
  outline: 2px solid #ffb45e;
  outline-offset: 3px;
}

/* ---- responsive ---- */
@media (max-width: 1100px) {
  .sr-rail {
    /* Too narrow to hold five columns: the rail scrolls instead, the active
       chapter still opens, and revealChapter() keeps it in view. The
       right-edge fade signals that more chapters exist off-screen. */
    overflow-x: auto;
    scrollbar-width: none;
    margin-inline: calc(var(--hx-gutter) * -1);
    padding-inline: var(--hx-gutter);
    -webkit-mask-image: linear-gradient(90deg, #000 0, #000 calc(100% - 44px), transparent 100%);
    mask-image: linear-gradient(90deg, #000 0, #000 calc(100% - 44px), transparent 100%);
  }

  .sr-rail::-webkit-scrollbar { display: none; }

  .sr-chapter {
    flex: 0 0 auto;
    width: 138px;
  }

  .sr-chapter.is-active { width: 268px; }
}

@media (max-width: 640px) {
  .sr-hero { min-height: 660px; }


  .sr-name { font-size: clamp(2rem, 10.5vw, 3.1rem); letter-spacing: -0.02em; }

  .sr-role {
    flex-wrap: wrap;
    font-size: 0.8125rem;
    letter-spacing: 0.14em;
    gap: 6px 8px;
  }

  .sr-role::before { width: 18px; }

  .sr-status {
    font-size: 0.625rem;
    letter-spacing: 0.08em;
    line-height: 1.4;
    padding: 5px 12px;
    white-space: nowrap;
  }

  .sr-engines { gap: 6px; margin-top: 12px; }
  .sr-engine-face { padding: 4px 9px; font-size: 0.75rem; letter-spacing: 0.1em; }

  .sr-actions { gap: 10px; width: 100%; }
  .sr-actions .hx-btn { flex: 1 1 100%; }

  .sr-chapter { width: 124px; }
  .sr-chapter.is-active { width: 244px; }
  .sr-chapter-label { font-size: 0.875rem; }
}

@media (prefers-reduced-motion: reduce) {
  .hx-dot { animation: none; }

  /* No word cycling: the first specialism is shown statically. */
  .sr-rotator-word { transition: none; }

  /* No aura pulse and no chromatic ghosts; the name stays a clean solid. */
  .sr-line {
    animation: none;
    text-shadow: 3px 3px 0 rgba(179, 58, 0, 0.9), 0 0 34px rgba(255, 140, 26, 0.35);
  }

  .sr-line::before,
  .sr-line::after { display: none; }

  .sr-status,
  .sr-role,
  .sr-engines,
  .sr-actions { animation: none; }

  .sr-chapter,
  .sr-chapter-head,
  .sr-magnet-label,
  .sr-chapter-link,
  .sr-chapter-link .hx-arrow { transition: none; }

  .sr-chapter-detail { animation: none; }
}
</style>
