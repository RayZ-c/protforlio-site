<script setup>
/**
 * One homepage section: anchor target, optional band background, and a
 * consistent header (eyebrow / title / lead). Keeps every section
 * on the same rhythm so the page reads as one document.
 */
defineProps({
  id: { type: String, required: true },
  eyebrow: { type: String, default: '' },
  title: { type: String, default: '' },
  lead: { type: String, default: '' },
  band: { type: Boolean, default: false },
  center: { type: Boolean, default: false },
  accent: { type: String, default: 'warm' } // 'warm' | 'cool'
})
</script>

<template>
  <section :id="id" class="hx-section" :class="{ 'hx-section--band': band }">
    <div class="hx-shell">
      <header
        v-if="title || eyebrow"
        class="hx-head"
        :class="{ 'hx-head--center': center }"
        data-hx-reveal
      >
        <p v-if="eyebrow" class="hx-eyebrow" :class="{ 'hx-eyebrow--blue': accent === 'cool' }">
          <span>{{ eyebrow }}</span>
        </p>
        <h2 v-if="title" class="hx-title">{{ title }}</h2>
        <p v-if="lead" class="hx-lead">{{ lead }}</p>
      </header>

      <slot />
    </div>
  </section>
</template>
