<script setup>
/**
 * HOMEPAGE SHELL
 * ---------------------------------------------------------------------------
 * Two jobs now:
 *   1. Flags <html> with `hx-home` so home-experiment.css can restyle the
 *      VitePress navbar/content chrome WITHOUT affecting any other route.
 *   2. Renders the floating scroll controls.
 *
 * The cursor spotlight and the scroll-reveal observer used to live here, which
 * meant they only ever ran on the homepage — project pages carried the classes
 * with nothing driving them, so .hx-glow was permanently invisible there. Both
 * now live in theme/interactions.js and run site-wide.
 */
import { onBeforeUnmount, onMounted } from 'vue'
import ScrollControls from './ScrollControls.vue'

const ROOT_CLASS = 'hx-home'

onMounted(() => {
  document.documentElement.classList.add(ROOT_CLASS)
})

onBeforeUnmount(() => {
  document.documentElement.classList.remove(ROOT_CLASS)
})
</script>

<template>
  <div class="hx-root">
    <slot />
    <ScrollControls />
  </div>
</template>
