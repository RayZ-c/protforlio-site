<script setup>
/**
 * One experience / education entry. Shared by both sections so the two
 * timelines stay visually identical.
 */
defineProps({
  period: { type: String, required: true },
  role: { type: String, required: true },
  org: { type: String, default: '' },
  orgHref: { type: String, default: '' },
  meta: { type: String, default: '' },
  tags: { type: Array, default: () => [] }
})
</script>

<template>
  <!-- The node lives outside .hx-entry because the card's clip-path would
       otherwise crop any marker positioned in its margin. -->
  <div class="hx-entry-wrap" data-hx-reveal>
    <span class="hx-entry-node" aria-hidden="true" />
    <article class="hx-entry hx-glow">
    <span class="hx-entry-period">{{ period }}</span>
    <h3 class="hx-entry-role">{{ role }}</h3>
    <p v-if="org || meta" class="hx-entry-org">
      <a v-if="org && orgHref" :href="orgHref" target="_blank" rel="noopener noreferrer">{{ org }}</a>
      <span v-else-if="org">{{ org }}</span>
      <span v-if="org && meta"> · </span>
      <span v-if="meta">{{ meta }}</span>
    </p>

    <ul class="hx-entry-list">
      <slot />
    </ul>

    <div v-if="tags.length" class="hx-tags">
      <span v-for="tag in tags" :key="tag" class="hx-tag">{{ tag }}</span>
    </div>
    </article>
  </div>
</template>
