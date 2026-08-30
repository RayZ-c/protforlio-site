<script setup>
/**
 * ALWAYS-VISIBLE NAVBAR DROPDOWN
 * ---------------------------------------------------------------------------
 * The shared control behind the language switcher and the CV menu. Same shape
 * as VitePress's own `VPFlyout` — a button that opens a small panel — but with
 * two deliberate differences:
 *
 * 1. **It never collapses into the hamburger.** VitePress hides navbar content
 *    below 768px. For the language switcher that is the wrong trade: a visitor
 *    who cannot read the current language is exactly the person who must not
 *    have to find a hidden menu first. Both controls stay on screen at every
 *    width.
 *
 * 2. **It opens on click, not hover.** Hover menus are unusable on touch, and
 *    these two controls have to work on a phone.
 *
 * Keyboard and screen-reader behaviour is the standard disclosure pattern:
 * `aria-expanded` on the trigger, Escape to close, focus returned to the
 * button, and a click outside dismisses it.
 */
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({
  /** Text on the trigger button. */
  label: { type: String, required: true },
  /** Narrow-screen replacement for `label`. Falls back to `label`. */
  shortLabel: { type: String, default: '' },
  /** Accessible name for the whole control. */
  ariaLabel: { type: String, default: '' },
  /** Extra class for per-instance styling hooks. */
  variant: { type: String, default: '' }
})

const open = ref(false)
const root = ref(null)
const trigger = ref(null)

const close = () => { open.value = false }

const toggle = () => { open.value = !open.value }

const onKeydown = (event) => {
  if (event.key !== 'Escape' || !open.value) return
  close()
  // Returning focus to the trigger is what keeps keyboard users oriented;
  // without it focus lands back on <body> and their place is lost.
  trigger.value?.focus()
}

const onPointerDown = (event) => {
  if (!open.value) return
  if (root.value && !root.value.contains(event.target)) close()
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('pointerdown', onPointerDown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('pointerdown', onPointerDown)
})
</script>

<template>
  <div
    ref="root"
    class="hx-flyout"
    :class="[variant && `hx-flyout--${variant}`, { 'is-open': open }]"
  >
    <button
      ref="trigger"
      class="hx-flyout-btn"
      type="button"
      :aria-expanded="open ? 'true' : 'false'"
      :aria-label="ariaLabel || label"
      @click="toggle"
    >
      <slot name="icon" />
      <span class="hx-flyout-label">{{ label }}</span>
      <span class="hx-flyout-label-short" aria-hidden="true">{{ shortLabel || label }}</span>
      <svg class="hx-flyout-caret" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>

    <!-- Kept in the DOM and hidden with `hidden` rather than v-if, so the
         panel's links stay findable by in-page search and by crawlers. -->
    <div class="hx-flyout-menu" :hidden="!open">
      <slot :close="close" />
    </div>
  </div>
</template>
