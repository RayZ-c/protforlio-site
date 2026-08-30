<script setup>
/**
 * LANGUAGE SWITCHER
 * ---------------------------------------------------------------------------
 * Same dropdown shape as VitePress's own translations menu, but rendered by
 * `NavFlyout` so it stays visible at EVERY viewport width — VitePress collapses
 * its version into the mobile hamburger, and a visitor who cannot read the
 * current language must not have to find a hidden menu.
 *
 * Each language is labelled with its own autonym (`English`, `简体中文`,
 * `繁體中文`) rather than translated into the current locale. A Chinese reader
 * landing on the English site has to recognise their own option on sight.
 *
 * Switching preserves the current page whenever that page exists in every
 * locale: `/projects/ue5-fps.html` becomes
 * `/zh-Hant/projects/ue5-fps.html`. English-only utility pages fall back to
 * the selected locale's home page instead of manufacturing a 404 URL.
 */
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { localeOf, PREFIX, useI18n } from '../i18n.js'
import { hasLocaleVariant } from '../routes.js'
import NavFlyout from './NavFlyout.vue'

const { page, lang } = useData()
const { t } = useI18n()

const LOCALES = [
  { key: 'en', label: 'English', short: 'EN', tag: 'en' },
  { key: 'zh', label: '简体中文', short: '简', tag: 'zh-Hans' },
  { key: 'zh-Hant', label: '繁體中文', short: '繁', tag: 'zh-Hant' }
]

const current = computed(() => localeOf(lang.value))
const currentLocale = computed(
  () => LOCALES.find((l) => l.key === current.value) ?? LOCALES[0]
)

/**
 * The full autonym does not fit beside the CV menu and the hamburger on a
 * narrow phone — it pushed the navbar past the viewport and introduced
 * horizontal scroll. The short code is swapped in by CSS below 767px.
 */
const currentLabel = computed(() => currentLocale.value.label)
const currentShort = computed(() => currentLocale.value.short)

/**
 * The current page with its locale directory stripped, so the same document
 * can be addressed in any locale. `relativePath` is the SOURCE path
 * (`zh/projects/x.md`), so it becomes a URL by dropping the prefix and
 * swapping the extension — and `index.md` maps to a directory root, which is
 * what VitePress actually emits.
 */
const pagePath = computed(() => {
  let p = page.value.relativePath || 'index.md'
  for (const dir of ['zh-Hant', 'zh']) {
    if (p === `${dir}/` || p.startsWith(`${dir}/`)) {
      p = p.slice(dir.length + 1)
      break
    }
  }
  if (p === 'index.md') return '/'
  if (p.endsWith('/index.md')) return `/${p.slice(0, -'index.md'.length)}`
  return `/${p.replace(/\.md$/, '.html')}`
})

const hrefFor = (key) => {
  const sourcePath = page.value.relativePath || 'index.md'
  const destination = key === 'en' || hasLocaleVariant(sourcePath) ? pagePath.value : '/'
  return withBase(`${PREFIX[key]}${destination}`)
}
</script>

<template>
  <NavFlyout
    variant="lang"
    :label="currentLabel"
    :short-label="currentShort"
    :aria-label="`${t('Language')} / Language`"
  >
    <template #icon>
      <!-- Lucide `languages`. A globe would read as "region"; this reads as
           "script", which is the actual choice being offered. -->
      <svg class="hx-flyout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           aria-hidden="true" focusable="false">
        <path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/>
        <path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>
      </svg>
    </template>

    <template #default="{ close }">
      <a
        v-for="loc in LOCALES"
        :key="loc.key"
        class="hx-flyout-link"
        :class="{ 'is-current': loc.key === current }"
        :href="hrefFor(loc.key)"
        :lang="loc.tag"
        :aria-current="loc.key === current ? 'true' : undefined"
        @click="close"
      >{{ loc.label }}</a>
    </template>
  </NavFlyout>
</template>
