<script setup>
/**
 * CV MENU
 * ---------------------------------------------------------------------------
 * The CV exists per language, so the navbar entry is a dropdown rather than a
 * single link — same always-visible `NavFlyout` as the language switcher, so
 * the two controls read as a pair.
 *
 * The button label is translated (`CV` / `简历` / `履歷`) but each ENTRY is
 * labelled with its language's autonym, exactly like the language switcher: a
 * reader has to be able to spot the CV in their own script without first
 * understanding the current one.
 *
 * ── Adding a translated CV ────────────────────────────────────────────────
 * Only the English CV exists today. Rather than ship links that 404, an entry
 * with `file: null` renders as visibly unavailable and is not clickable.
 *
 * To turn one on: drop the PDF into `public/` and set its `file` here. That is
 * the whole change — `npm run check` will then verify the file exists, and
 * warns while any entry is still pending.
 */
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { useI18n } from '../i18n.js'
import NavFlyout from './NavFlyout.vue'

const { t } = useI18n()

const CVS = [
  { key: 'en', label: 'English', tag: 'en', file: '/cv_v2.pdf' },
  // Set to '/cv_v2_zh-Hans.pdf' once the Simplified CV is in public/.
  { key: 'zh', label: '简体中文', tag: 'zh-Hans', file: null },
  // Set to '/cv_v2_zh-Hant.pdf' once the Traditional CV is in public/.
  { key: 'zh-Hant', label: '繁體中文', tag: 'zh-Hant', file: null }
]

const entries = computed(() =>
  CVS.map((cv) => ({
    ...cv,
    // VitePress's normalizeLink() skips the base for non-HTML targets, so the
    // PDF path has to go through withBase() explicitly.
    href: cv.file ? withBase(cv.file) : null
  }))
)
</script>

<template>
  <NavFlyout variant="cv" :label="t('CV')" :aria-label="t('CV')">
    <template #icon>
      <!-- Lucide `file-text`. -->
      <svg class="hx-flyout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           aria-hidden="true" focusable="false">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
        <path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/>
        <path d="M16 13H8"/><path d="M16 17H8"/>
      </svg>
    </template>

    <template #default="{ close }">
      <template v-for="cv in entries" :key="cv.key">
        <a
          v-if="cv.href"
          class="hx-flyout-link"
          :href="cv.href"
          :lang="cv.tag"
          target="_blank"
          rel="noopener"
          @click="close"
        >
          {{ cv.label }}
          <span class="hx-flyout-hint">PDF</span>
        </a>
        <span
          v-else
          class="hx-flyout-link is-disabled"
          :lang="cv.tag"
          aria-disabled="true"
        >
          {{ cv.label }}
          <span class="hx-flyout-hint">{{ t('Coming soon') }}</span>
        </span>
      </template>
    </template>
  </NavFlyout>
</template>
