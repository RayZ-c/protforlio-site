<script setup>
/**
 * PAGE TRANSITION
 * ---------------------------------------------------------------------------
 * A short anime-inspired slash wipe between VitePress routes. VitePress handles
 * hash links entirely inside the current page and does not call its route
 * hooks for them, so section navigation never triggers this overlay.
 *
 * The hooks are chained rather than replaced: lazy-video.js and interactions.js
 * already use onAfterRouteChanged and must continue to run after navigation.
 */
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useData, useRouter } from 'vitepress'
import { useI18n } from '../i18n.js'

const router = useRouter()
const { site } = useData()
const { t } = useI18n()
const visible = ref(false)
const phase = ref('idle')
const destination = ref('')

let currentPage = ''
let transitionId = 0
let closeTimer = 0

const pageKey = (href) => {
  const url = new URL(href, window.location.href)
  return `${url.pathname}${url.search}`
}

/**
 * The destination label shown during a route change.
 *
 * The locale directory is stripped BEFORE the label is resolved, so
 * `/zh-Hant/projects/ue5-fps` and `/projects/ue5-fps` map to the same key and
 * get the same translation. Without that every Chinese route fell through to
 * the slug and the overlay flashed English at a Chinese reader.
 *
 * Slugs that have no translation degrade to the humanised slug, which is
 * correct English rather than a missing-key placeholder.
 */
const pageName = (href) => {
  const url = new URL(href, window.location.href)
  const base = site.value.base
  let path = decodeURIComponent(url.pathname)
    .replace(base, '/')
    .replace(/(?:index)?\.html$/, '')
    .replace(/\/$/, '')

  for (const dir of ['/zh-Hant', '/zh']) {
    if (path === dir || path.startsWith(`${dir}/`)) {
      path = path.slice(dir.length)
      break
    }
  }

  if (!path) return t('HOME')
  if (path === '/projects') return t('PROJECTS')

  const slug = path.split('/').filter(Boolean).at(-1) || 'PORTFOLIO'
  const translated = t(`route:${slug}`)
  if (translated !== `route:${slug}`) return translated

  return slug.replace(/[-_]+/g, ' ').toUpperCase()
}

const wait = (duration) => new Promise(resolve => window.setTimeout(resolve, duration))
const frame = () => new Promise(resolve => requestAnimationFrame(resolve))

const cover = async (to) => {
  if (pageKey(to) === currentPage || visible.value) return

  window.clearTimeout(closeTimer)
  const id = ++transitionId
  destination.value = pageName(to)
  visible.value = true
  phase.value = 'ready'

  await nextTick()
  await frame()
  phase.value = 'entering'

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  await wait(reduced ? 60 : 430)
  if (id !== transitionId) return
  phase.value = 'covered'
}

const uncover = async (to) => {
  currentPage = pageKey(to)
  if (!visible.value) return

  const id = transitionId
  await nextTick()
  await frame()
  await frame()
  phase.value = 'leaving'

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  closeTimer = window.setTimeout(() => {
    if (id !== transitionId) return
    visible.value = false
    phase.value = 'idle'
  }, reduced ? 100 : 520)
}

let restoreHooks = () => {}

onMounted(() => {
  currentPage = pageKey(window.location.href)

  const previousBeforeRoute = router.onBeforeRouteChange
  const previousBeforeLoad = router.onBeforePageLoad
  const previousAfterRoute = router.onAfterRouteChanged

  router.onBeforeRouteChange = async (to) => {
    const result = await previousBeforeRoute?.(to)
    if (result === false) return false
    await cover(to)
  }

  // popstate bypasses onBeforeRouteChange, but always enters onBeforePageLoad.
  router.onBeforePageLoad = async (to) => {
    const result = await previousBeforeLoad?.(to)
    if (result === false) return false
    await cover(to)
  }

  router.onAfterRouteChanged = async (to) => {
    await previousAfterRoute?.(to)
    await uncover(to)
  }

  restoreHooks = () => {
    router.onBeforeRouteChange = previousBeforeRoute
    router.onBeforePageLoad = previousBeforeLoad
    router.onAfterRouteChanged = previousAfterRoute
  }
})

onBeforeUnmount(() => {
  window.clearTimeout(closeTimer)
  restoreHooks()
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="hx-route-transition"
      :class="`is-${phase}`"
      aria-hidden="true"
    >
      <div class="hx-route-transition__field">
        <div class="uiverse-midnight-sky">
          <div class="sky-canvas">
            <div class="stars stars-1"></div>
            <div class="stars stars-2"></div>
            <div class="stars stars-3"></div>

            <div class="meteor m1"></div>
            <div class="meteor m2"></div>
            <div class="meteor m3"></div>

            <div class="moon"></div>
          </div>
        </div>
      </div>
      <div class="hx-route-transition__label">
        <span class="hx-route-transition__destination">{{ destination }}</span>
      </div>

      <div class="hx-uiverse-loader">
        <div
          v-for="orb in 4"
          :key="orb"
          class="hx-uiverse-loader__circle"
        >
          <div class="hx-uiverse-loader__dot"></div>
          <div class="hx-uiverse-loader__outline"></div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.hx-route-transition {
  position: fixed;
  z-index: 9999;
  inset: 0;
  display: grid;
  place-items: center;
  overflow: hidden;
  pointer-events: auto;
  isolation: isolate;
  color: var(--hx-ink);
}

.hx-route-transition__field {
  position: absolute;
  z-index: -3;
  inset: 0;
  clip-path: polygon(0 0, 0 0, -12% 100%, 0 100%);
}

.is-entering .hx-route-transition__field,
.is-covered .hx-route-transition__field {
  animation: hx-route-cover 0.43s cubic-bezier(0.77, 0, 0.18, 1) forwards;
}

.is-leaving .hx-route-transition__field {
  clip-path: polygon(0 0, 112% 0, 100% 100%, -12% 100%);
  animation: hx-route-uncover 0.52s cubic-bezier(0.77, 0, 0.18, 1) forwards;
}

/*
 * Midnight sky pattern by Kiranmayee Abbireddy, copied from Uiverse.
 * Source: https://uiverse.io/kiranmayee-abbireddy/average-insect-70
 * MIT License — Copyright (c) 2026 kiranmayee-abbireddy.
 * Full license notice: /THIRD_PARTY_NOTICES.md
 */
.uiverse-midnight-sky {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 500px;
  overflow: hidden;
  background-color: #050505;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Base Sky Layer */
.uiverse-midnight-sky .sky-canvas {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  background: #050505;
}

/* Generic star layer style */
.uiverse-midnight-sky .stars {
  position: absolute;
  inset: 0;
  background-repeat: repeat;
  pointer-events: none;
}

/* Layer 1: Small fast twinkling stars - High density */
.uiverse-midnight-sky .stars-1 {
  background-image: radial-gradient(1px 1px at 10% 10%, #fff, transparent),
    radial-gradient(1px 1px at 30% 20%, #fff, transparent),
    radial-gradient(1px 1px at 50% 50%, #fff, transparent),
    radial-gradient(1px 1px at 70% 30%, #fff, transparent),
    radial-gradient(1px 1px at 90% 10%, #fff, transparent);
  background-size: 200px 200px;
  animation: twinkle 3s ease-in-out infinite;
}

/* Layer 2: Medium slower twinkling stars */
.uiverse-midnight-sky .stars-2 {
  background-image: radial-gradient(1.5px 1.5px at 20% 40%, #fff, transparent),
    radial-gradient(1.5px 1.5px at 60% 85%, #fff, transparent),
    radial-gradient(1.5px 1.5px at 85% 65%, #fff, transparent);
  background-size: 300px 300px;
  animation: twinkle 5s ease-in-out infinite 1s;
}

/* Layer 3: Larger, very slow twinkling stars */
.uiverse-midnight-sky .stars-3 {
  background-image: radial-gradient(2px 2px at 40% 70%, #fff, transparent),
    radial-gradient(2px 2px at 10% 80%, #fff, transparent),
    radial-gradient(2px 2px at 80% 40%, #fff, transparent);
  background-size: 400px 400px;
  animation: twinkle 7s ease-in-out infinite 2s;
}

/* Meteor / Shooting Star Layer */
.uiverse-midnight-sky .meteor {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.5);
  opacity: 0;
  pointer-events: none;
}

/* Meteor Tail */
.uiverse-midnight-sky .meteor::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 80px;
  height: 1px;
  background: linear-gradient(90deg, #fff, transparent);
}

/* Meteor Instances with staggered starts */
.uiverse-midnight-sky .m1 {
  top: 10%;
  left: 110%;
  animation: shoot 8s linear infinite;
}

.uiverse-midnight-sky .m2 {
  top: 30%;
  left: 110%;
  animation: shoot 12s linear infinite 4s;
}

.uiverse-midnight-sky .m3 {
  top: 50%;
  left: 110%;
  animation: shoot 10s linear infinite 2s;
}

/* The Moon */
.uiverse-midnight-sky .moon {
  position: absolute;
  top: 15%;
  right: 15%;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: transparent;
  box-shadow: 15px 15px 0 0 #fdfbd3;
  filter: drop-shadow(0 0 15px rgba(253, 251, 211, 0.4));
  z-index: 10;
}

.hx-route-transition__label {
  position: relative;
  display: grid;
  justify-items: center;
  opacity: 0;
  transform: translateY(12px) skewX(-5deg);
}

.hx-route-transition__label::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  width: min(72vw, 920px);
  height: min(28vw, 300px);
  opacity: 0;
  background: radial-gradient(ellipse, rgba(159, 194, 255, 0.2), rgba(255, 140, 26, 0.08) 38%, transparent 70%);
  transform: translate(-50%, -50%) scale(0.45);
}

.is-covered .hx-route-transition__label,
.is-entering .hx-route-transition__label {
  animation: hx-route-label-in 0.24s 0.25s var(--hx-ease) forwards;
}

.is-covered .hx-route-transition__label::before,
.is-entering .hx-route-transition__label::before {
  animation: hx-route-burst 0.42s 0.23s var(--hx-ease) forwards;
}

.is-leaving .hx-route-transition__label {
  opacity: 1;
  animation: hx-route-label-out 0.18s var(--hx-ease) forwards;
}

.hx-route-transition__destination {
  font-family: var(--hx-font-display);
  font-size: clamp(2.4rem, 7vw, 6.4rem);
  line-height: 0.95;
  letter-spacing: 0.08em;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 4px 4px 0 rgba(46, 98, 217, 0.34);
}

/*
 * Loader by Li-Deheng (李德恒), copied from Uiverse and namespaced for this site.
 * Source: https://uiverse.io/Li-Deheng/bright-firefox-37
 * MIT License — Copyright (c) 2026 Li-Deheng.
 * Full license notice: /THIRD_PARTY_NOTICES.md
 */
.hx-uiverse-loader {
  position: absolute;
  z-index: 3;
  bottom: clamp(32px, 6vh, 68px);
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  --color: hsl(0, 0%, 87%);
  --animation: 0.72s ease-in-out infinite;
  opacity: 0;
  transform: translateX(-50%);
}

.is-entering .hx-uiverse-loader {
  animation: hx-uiverse-loader-fade-in 0.16s 0.04s ease-out forwards;
}

.is-covered .hx-uiverse-loader {
  opacity: 1;
}

.is-leaving .hx-uiverse-loader {
  opacity: 1;
  animation: hx-uiverse-loader-fade-out 0.2s ease-in forwards;
}

.hx-uiverse-loader__circle {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
  border: solid 2px var(--color);
  border-radius: 50%;
  margin: 0 10px;
  background-color: transparent;
  animation: hx-uiverse-circle-keys var(--animation);
}

.hx-uiverse-loader__dot {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--color);
  animation: hx-uiverse-dot-keys var(--animation);
}

.hx-uiverse-loader__outline {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: hx-uiverse-outline-keys var(--animation);
}

.hx-uiverse-loader__circle:nth-child(2),
.hx-uiverse-loader__circle:nth-child(2) .hx-uiverse-loader__dot { animation-delay: 0.1s; }

.hx-uiverse-loader__circle:nth-child(3),
.hx-uiverse-loader__circle:nth-child(3) .hx-uiverse-loader__dot { animation-delay: 0.2s; }

.hx-uiverse-loader__circle:nth-child(4),
.hx-uiverse-loader__circle:nth-child(4) .hx-uiverse-loader__dot { animation-delay: 0.3s; }

.hx-uiverse-loader__circle:nth-child(5),
.hx-uiverse-loader__circle:nth-child(5) .hx-uiverse-loader__dot { animation-delay: 0.4s; }

.hx-uiverse-loader__circle:nth-child(1) .hx-uiverse-loader__outline { animation-delay: 0.3s; }
.hx-uiverse-loader__circle:nth-child(2) .hx-uiverse-loader__outline { animation-delay: 0.4s; }
.hx-uiverse-loader__circle:nth-child(3) .hx-uiverse-loader__outline { animation-delay: 0.5s; }
.hx-uiverse-loader__circle:nth-child(4) .hx-uiverse-loader__outline { animation-delay: 0.6s; }
.hx-uiverse-loader__circle:nth-child(5) .hx-uiverse-loader__outline { animation-delay: 0.7s; }

@keyframes hx-route-cover {
  to { clip-path: polygon(0 0, 112% 0, 100% 100%, -12% 100%); }
}

@keyframes hx-route-uncover {
  to { clip-path: polygon(112% 0, 112% 0, 100% 100%, 100% 100%); }
}

/* Twinkle Animation */
@keyframes twinkle {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
}

/* Shooting Star Animation - Using % instead of vw/vh */
@keyframes shoot {
  0% {
    transform: translateX(0) translateY(0) rotate(-35deg);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  15% {
    transform: translateX(-1500px) translateY(1000px) rotate(-35deg);
    opacity: 0;
  }
  100% {
    transform: translateX(-1500px) translateY(1000px) rotate(-35deg);
    opacity: 0;
  }
}

@keyframes hx-route-label-in {
  to { opacity: 1; transform: none; }
}

@keyframes hx-route-label-out {
  to { opacity: 0; transform: translateY(-9px) skewX(4deg); }
}

@keyframes hx-route-burst {
  45% { opacity: 1; }
  to { opacity: 0.72; transform: translate(-50%, -50%) scale(1); }
}

@keyframes hx-uiverse-circle-keys {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes hx-uiverse-loader-fade-in {
  from { opacity: 0; transform: translateX(-50%) translateY(8px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}

@keyframes hx-uiverse-loader-fade-out {
  from { opacity: 1; transform: translateX(-50%) translateY(0); }
  to { opacity: 0; transform: translateX(-50%) translateY(6px); }
}

@keyframes hx-uiverse-dot-keys {
  0% { transform: scale(1); }
  50% { transform: scale(0); }
  100% { transform: scale(1); }
}

@keyframes hx-uiverse-outline-keys {
  0% {
    transform: scale(0);
    outline: solid 20px var(--color);
    outline-offset: 0;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    outline: solid 0 transparent;
    outline-offset: 20px;
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hx-route-transition__field,
  .hx-route-transition__label,
  .hx-route-transition__label::before,
  .hx-uiverse-loader {
    animation-duration: 0.08s !important;
    animation-delay: 0s !important;
  }

  .uiverse-midnight-sky .stars,
  .uiverse-midnight-sky .meteor { animation: none; }

  .hx-uiverse-loader__circle,
  .hx-uiverse-loader__dot,
  .hx-uiverse-loader__outline { animation: none; }
}
</style>
