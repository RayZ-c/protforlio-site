<script setup>
/**
 * MEDIA CAROUSEL
 * ---------------------------------------------------------------------------
 * Replaces 21 hand-built carousels. Each of those needed its OWN generated
 * stylesheet — blocks of `#fm-hero-1:checked ~ .media-slides figure:nth-child(1)`
 * rules — because every instance used unique element ids. That is the single
 * biggest source of the ~700 lines of CSS that lived inside the markdown.
 *
 * The fix is to select by POSITION rather than by id:
 *
 *     .hx-carousel-radio:nth-of-type(N):checked ~ .hx-carousel-stage > :nth-child(N)
 *
 * Those rules are written once, globally, in components.css and work for every
 * carousel on the site. Nothing per-instance is needed.
 *
 * Deliberately still radio inputs rather than JS state:
 *   - works with JavaScript disabled, exactly as the hand-written ones did
 *   - a radio group is natively arrow-key navigable, so keyboard support is
 *     free and correct rather than reimplemented
 *   - it is genuinely a radio group semantically: one of N, exactly one active
 *
 * `id` is a required prop rather than auto-generated: a module-level counter
 * would drift between the SSR pass (which renders many pages in one process)
 * and the client (which starts from zero), producing hydration mismatches.
 */
import { ref } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  /** Unique on the page. Becomes the radio group name. */
  id: { type: String, required: true },
  /**
   * [{ src, caption?, poster?, alt?, type? }]
   * type: 'image' -> <img>, 'embed' -> <iframe> (YouTube), default -> <video>.
   * Paths are authored WITHOUT the site base — see withBase note below.
   */
  slides: { type: Array, required: true },
  label: { type: String, default: 'Media gallery' }
})

const activeSlide = ref(0)

const selectSlide = (index) => {
  const count = props.slides.length
  if (count < 2) return
  activeSlide.value = (index + count) % count
}

const selectPrevious = () => selectSlide(activeSlide.value - 1)
const selectNext = () => selectSlide(activeSlide.value + 1)

/**
 * Strings inside a `:slides="[…]"` array are plain JS literals, so VitePress's
 * asset transform — which rewrites real src attributes in templates — never
 * sees them. Without this, every path would 404 on GitHub Pages, where the site
 * is served from /protforlio-site/. Authored paths stay base-free; the base is
 * applied here, once.
 */
const url = (p) =>
  !p ? undefined : /^(https?:)?\/\//.test(p) ? p : withBase(p)

/** Poster frames mirror the video tree, so they can be derived not repeated. */
const posterFor = (s) => {
  if (s.poster) return url(s.poster)
  if (s.type === 'image' || !s.src) return undefined
  if (!s.src.startsWith('/videos/') || !s.src.endsWith('.mp4')) return undefined
  return url(s.src.replace('/videos/', '/posters/').replace(/\.mp4$/, '.jpg'))
}
</script>

<template>
  <div class="hx-carousel" :class="`hx-carousel--n${slides.length}`" role="group" :aria-label="label">
    <!-- The radios drive everything via CSS. Visually hidden but focusable, so
         the arrow-key behaviour of a native radio group still applies. -->
    <input
      v-for="(s, i) in slides"
      :key="`r-${i}`"
      class="hx-carousel-radio"
      type="radio"
      :name="id"
      :id="`${id}-${i + 1}`"
      :checked="activeSlide === i"
      :aria-label="s.caption || `Slide ${i + 1} of ${slides.length}`"
      @change="activeSlide = i"
    >

    <div class="hx-carousel-stage">
      <figure v-for="(s, i) in slides" :key="`s-${i}`" class="hx-carousel-slide">
        <iframe
          v-if="s.type === 'embed'"
          class="hx-carousel-embed"
          :src="s.src"
          :title="s.caption || 'Embedded video'"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <img
          v-else-if="s.type === 'image'"
          :src="url(s.src)"
          :alt="s.alt || s.caption || ''"
          loading="lazy"
          decoding="async"
        >
        <video
          v-else
          muted
          loop
          playsinline
          controls
          preload="none"
          :poster="posterFor(s)"
          data-lazy-video
        >
          <source :src="url(s.src)" type="video/mp4">
        </video>
      </figure>

      <button
        v-if="slides.length > 1"
        class="hx-carousel-arrow hx-carousel-arrow--previous"
        type="button"
        :aria-label="`Previous media in ${label}`"
        @click="selectPrevious"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="m14.5 5-7 7 7 7" />
        </svg>
      </button>

      <button
        v-if="slides.length > 1"
        class="hx-carousel-arrow hx-carousel-arrow--next"
        type="button"
        :aria-label="`Next media in ${label}`"
        @click="selectNext"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="m9.5 5 7 7-7 7" />
        </svg>
      </button>
    </div>

    <div v-if="slides.length > 1" class="hx-carousel-tabs">
      <label
        v-for="(s, i) in slides"
        :key="`t-${i}`"
        class="hx-carousel-tab"
        :for="`${id}-${i + 1}`"
        role="radio"
        tabindex="0"
        :aria-checked="activeSlide === i"
        @click.prevent="selectSlide(i)"
        @keydown.enter.prevent="selectSlide(i)"
        @keydown.space.prevent="selectSlide(i)"
      >
        <span class="hx-carousel-tab-num">{{ String(i + 1).padStart(2, '0') }}</span>
      </label>
    </div>

    <div v-if="slides.some(s => s.caption)" class="hx-carousel-captions">
      <p v-for="(s, i) in slides" :key="`c-${i}`" class="hx-carousel-caption">
        {{ s.caption }}
      </p>
    </div>
  </div>
</template>
