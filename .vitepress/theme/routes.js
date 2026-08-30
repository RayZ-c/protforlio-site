/**
 * LOCALE-AWARE ROUTE HELPERS
 * ---------------------------------------------------------------------------
 * With i18n every page exists three times, so any check of the form
 * `relativePath === 'index.md'` silently becomes wrong: the Chinese home pages
 * are `zh/index.md` and `zh-Hant/index.md`.
 *
 * That mistake was live in both background canvases before the locales landed
 * — the beams would have disappeared on the Chinese homepage and the dot field
 * would have appeared over it. Route identity is centralised here so there is
 * one place to be right.
 */

/** Locale directory prefixes, longest first so `zh-Hant` wins over `zh`. */
export const LOCALE_DIRS = ['zh-Hant', 'zh']

/** Strips any locale directory: 'zh-Hant/projects/x.md' -> 'projects/x.md'. */
export function stripLocale(relativePath = '') {
  for (const dir of LOCALE_DIRS) {
    if (relativePath === `${dir}/` || relativePath.startsWith(`${dir}/`)) {
      return relativePath.slice(dir.length + 1)
    }
  }
  return relativePath
}

/** True for the home page of ANY locale. */
export function isHomePage(relativePath = '') {
  return stripLocale(relativePath) === 'index.md'
}

/**
 * Every home/project document is mirrored in both Chinese locales. Utility
 * pages such as THIRD_PARTY_NOTICES are English-only and must fall back to a
 * locale home instead of manufacturing a translated URL that will 404.
 */
export function hasLocaleVariant(relativePath = '') {
  const path = stripLocale(relativePath)
  return path === 'index.md' || path === 'projects/index.md' || path.startsWith('projects/')
}
