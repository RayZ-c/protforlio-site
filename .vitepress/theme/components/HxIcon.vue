<script setup>
/**
 * ANIMATED LINE ICON
 * ---------------------------------------------------------------------------
 * Renders one Lucide glyph as inline SVG and tags it with its animation family
 * so icons.css can drive the motion. See icons.js for why the geometry is
 * inlined rather than installed.
 *
 * The icon is `aria-hidden` on purpose: every one of these sits directly beside
 * its own visible text label, so announcing it would only make a screen reader
 * say the same thing twice.
 *
 * `v-html` is safe here — the value never comes from user input or content,
 * only from the ICONS map in this repo, keyed by an exact string match.
 */
import { computed } from 'vue'
import { ICONS, ICON_FAMILY } from '../icons.js'

const props = defineProps({
  /** Lucide icon name, e.g. "target". Unknown names render nothing. */
  name: { type: String, required: true },
  /** Extra class hook, used by ProjectPanel for the mini variant. */
  tone: { type: String, default: '' }
})

const markup = computed(() => ICONS[props.name] || '')
const family = computed(() => ICON_FAMILY[props.name] || 'nudge')
</script>

<template>
  <svg
    v-if="markup"
    class="hx-icon"
    :class="[`hx-icon--${family}`, tone && `hx-icon--${tone}`]"
    :data-icon="name"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
    v-html="markup"
  />
</template>
