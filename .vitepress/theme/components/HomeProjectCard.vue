<script setup>
/**
 * Featured project card.
 *
 * Media behaviour: the clip never blocks the page. `preload="none"` means
 * nothing downloads until the card scrolls into view, and playback is paused
 * again when it leaves. Under prefers-reduced-motion the clip never
 * auto-plays; the poster (or the fallback gradient) is shown instead and
 * playback only starts on hover/focus.
 */
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  href: { type: String, required: true },
  title: { type: String, required: true },
  blurb: { type: String, required: true },
  video: { type: String, default: '' },
  poster: { type: String, default: '' },
  date: { type: String, default: '' },
  context: { type: String, default: '' },
  flag: { type: String, default: '' },
  tags: { type: Array, default: () => [] },
  cta: { type: String, default: 'Read case study' }
})

const media = ref(null)
let cleanup = () => {}

// The spotlight's --spot-x/--spot-y are set by the delegated pointer listener
// in HomeExperiment.vue, which serves every card on the page.

const isExternal = /^https?:\/\//.test(props.href)

// VitePress emits `projects/foo.html` (cleanUrls is off), so an extensionless
// route only resolves via client-side navigation. Adding .html keeps the card
// working on a hard load, a middle-click / "open in new tab", and for crawlers.
const withHtml = (path) =>
  /\.[a-z0-9]+$/i.test(path) || path.endsWith('/') ? path : `${path}.html`

const resolvedHref = isExternal ? props.href : withBase(withHtml(props.href))

const play = () => media.value?.play?.().catch(() => {})
const pause = () => media.value?.pause?.()

onMounted(() => {
  const el = media.value
  if (!el) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion || !('IntersectionObserver' in window)) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => (entry.isIntersecting ? play() : pause()))
    },
    { threshold: 0.25 }
  )
  observer.observe(el)
  cleanup = () => observer.disconnect()
})

onBeforeUnmount(() => cleanup())
</script>

<template>
  <a
    class="hx-card"
    :href="resolvedHref"
    :target="isExternal ? '_blank' : null"
    :rel="isExternal ? 'noopener noreferrer' : null"
    data-hx-reveal
    @mouseenter="play"
    @focusin="play"
  >
    <span class="hx-card-spot" aria-hidden="true" />
    <div class="hx-card-media">
      <video
        v-if="video"
        ref="media"
        muted
        loop
        playsinline
        preload="none"
        disablepictureinpicture
        :poster="poster ? withBase(poster) : undefined"
        aria-hidden="true"
        tabindex="-1"
      >
        <source :src="withBase(video)" type="video/mp4">
      </video>
      <img v-else-if="poster" :src="withBase(poster)" :alt="''" loading="lazy" decoding="async">

      <div class="hx-card-meta">
        <span v-if="date" class="hx-tag">{{ date }}</span>
        <span v-if="context" class="hx-tag">{{ context }}</span>
        <span v-if="flag" class="hx-tag hx-tag--warm hx-flag">{{ flag }}</span>
      </div>
    </div>

    <div class="hx-card-body">
      <h3 class="hx-card-title">{{ title }}</h3>
      <p class="hx-card-text">{{ blurb }}</p>

      <div v-if="tags.length" class="hx-tags">
        <span v-for="tag in tags" :key="tag" class="hx-tag hx-tag--cool">{{ tag }}</span>
      </div>

      <div class="hx-card-foot">
        <span class="hx-card-cta">{{ cta }}</span>
        <span class="hx-link"><span class="hx-arrow" aria-hidden="true">→</span></span>
      </div>
    </div>
  </a>
</template>
