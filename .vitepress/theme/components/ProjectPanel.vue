<script setup>
/**
 * COLLAPSIBLE CASE-STUDY SECTION
 * ---------------------------------------------------------------------------
 * Replaces 88 hand-written `<details class="section-panel">` blocks across the
 * project pages, each of which repeated the same summary/title/icon markup.
 *
 * Deliberately still a real <details>/<summary>:
 *   - works with JavaScript disabled, exactly as the hand-written ones did
 *   - keyboard and screen-reader behaviour comes free from the platform
 *   - the open/closed state is the browser's, so nothing to synchronise
 *
 * Styles live in components.css rather than a scoped <style> block, because
 * slotted markdown content carries the PARENT's scope id, not this component's
 * — scoped rules would not reach it without `:deep()` on every selector.
 */
import HxIcon from './HxIcon.vue'

defineProps({
  /**
   * Lucide icon name marking the section type, e.g. "target". Was an emoji;
   * emoji render in each platform's own house style, at a different weight and
   * baseline from the text beside them, and cannot pick up the accent colour
   * or animate. See icons.js for the set and icons.css for the motion.
   */
  icon: { type: String, default: '' },
  /**
   * Category label shown before the title, e.g. eyebrow="Movement" with
   * title="Forgiving Mechanics". Several panels were written as
   * `<strong>Movement</strong>: Forgiving Mechanics` — this keeps that
   * distinction as structure instead of inline markup in a heading.
   */
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  /** Open on load — used for the summary section recruiters should see first. */
  open: { type: Boolean, default: false },
  /** `mini` is the nested variant used for sub-sections inside a panel. */
  variant: { type: String, default: 'default' }
})
</script>

<template>
  <details class="hx-panel hx-glow" :class="{ 'hx-panel--mini': variant === 'mini' }" :open="open">
    <summary class="hx-panel-head">
      <span class="hx-panel-title">
        <HxIcon v-if="icon" :name="icon" :tone="variant === 'mini' ? 'mini' : ''" />
        <span v-if="eyebrow" class="hx-panel-eyebrow">{{ eyebrow }}</span>
        <span>{{ title }}</span>
      </span>
      <span class="hx-panel-chevron"><HxIcon name="chevron-down" /></span>
    </summary>
    <div class="hx-panel-body">
      <slot />
    </div>
  </details>
</template>
