import { defineConfig } from 'vitepress'

// Single source of truth for the GitHub Pages sub-path. Anything that
// VitePress does NOT run through withBase() itself (nav links to non-HTML
// assets such as the CV PDF) must be built from this constant, never
// hardcoded a second time.
const base = '/protforlio-site/'

const SITE_ORIGIN = 'https://rayz-c.github.io'

/**
 * Latin faces, loaded on every locale. None of these contain a single CJK
 * glyph, which is exactly why the Chinese locales need their own stack below.
 */
const LATIN_FONTS =
  'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=Barlow+Condensed:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap'

/**
 * Noto Sans SC/TC are served by Google Fonts already split into ~100
 * frequency-banded `unicode-range` chunks, so a page downloads only the
 * characters it actually renders rather than a 5-20 MB full CJK face.
 *
 * These are attached PER LOCALE, not globally: an English visitor must never
 * pay for a stylesheet they cannot render a glyph from.
 */
const FONT_SC =
  'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;900&display=swap'
const FONT_TC =
  'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap'

const fontPreconnect = [
  ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
]

/**
 * Search-engine hints that this page exists in three languages. VitePress does
 * not emit these itself. `x-default` points at English because that is the
 * locale served from the site root.
 *
 * Deliberately page-agnostic (locale home pages): GitHub Pages serves a static
 * build with no per-route head hook, and a wrong per-page alternate is worse
 * than a correct site-level one.
 */
const hreflang = [
  ['link', { rel: 'alternate', hreflang: 'en', href: `${SITE_ORIGIN}${base}` }],
  ['link', { rel: 'alternate', hreflang: 'zh-Hans', href: `${SITE_ORIGIN}${base}zh/` }],
  ['link', { rel: 'alternate', hreflang: 'zh-Hant', href: `${SITE_ORIGIN}${base}zh-Hant/` }],
  ['link', { rel: 'alternate', hreflang: 'x-default', href: `${SITE_ORIGIN}${base}` }]
]

/** Social links are identical in every locale. */
const socialLinks = [
  { icon: 'github', link: 'https://github.com/RayZ-c' },
  { icon: 'linkedin', link: 'https://www.linkedin.com/in/raymond-cheng-7b0340365/' }
]

/**
 * The nav is rebuilt per locale rather than shared, because every link needs
 * the locale prefix. `prefix` is '' for the root locale and '/zh' | '/zh-Hant'
 * otherwise — VitePress resolves a leading-slash link against the site base,
 * not against the current locale, so the prefix has to be explicit.
 */
const navFor = (prefix, labels) => [
  { text: labels.home, link: `${prefix}/` },
  { text: labels.projects, link: `${prefix}/projects/` },
  // NOTE: no CV entry here. The CV exists per language, so it is rendered as
  // its own always-visible dropdown (`CvMenu`) beside the language switcher
  // rather than as a single flat link.
  { text: labels.about, link: `${prefix}/#about` },
  { text: labels.experience, link: `${prefix}/#experience` },
  { text: labels.education, link: `${prefix}/#education` },
  { text: labels.contact, link: `${prefix}/#contact` }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: 'RayZc - Game Developer',

  // Anything matched here stays in the repo but is NOT turned into a public
  // page. Without it, private planning notes and the leftover VitePress
  // starter examples build into reachable, indexable URLs.
  srcExclude: [
    'project-context/**',   // internal planning notes, incl. the redesign brief
    'test.md',              // scratch page
    'api-examples.md',      // VitePress starter leftovers
    'markdown-examples.md',
    'test-project/**',      // separate vite sandbox, not part of the site
    'README.md',
    'CLAUDE.md',            // agent instructions, not site content
    'AGENTS.md'
  ],
  description: 'Game development portfolio and projects',

  appearance: 'force-dark', // ← always dark, no light mode

  /**
   * English is the ROOT locale rather than living at /en/. GitHub Pages serves
   * a static build with no redirect layer, so whatever sits at the site root
   * is what a bare link resolves to — and the primary audience is English.
   */
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: navFor('', {
          home: 'Home',
          projects: 'Projects',
          about: 'About Me',
          experience: 'Experience',
          education: 'Education',
          contact: 'Contact'
        })
      }
    },

    zh: {
      label: '简体中文',
      lang: 'zh-Hans',
      title: 'RayZc - 游戏开发者',
      description: '游戏开发作品集与项目详解',
      head: [...fontPreconnect, ['link', { rel: 'stylesheet', href: FONT_SC }]],
      themeConfig: {
        nav: navFor('/zh', {
          home: '首页',
          projects: '项目',
          about: '关于我',
          experience: '工作经历',
          education: '教育背景',
          contact: '联系方式'
        }),
        outline: { label: '本页目录' },
        darkModeSwitchLabel: '外观',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        langMenuLabel: '切换语言'
      }
    },

    'zh-Hant': {
      label: '繁體中文',
      lang: 'zh-Hant',
      title: 'RayZc - 遊戲開發者',
      description: '遊戲開發作品集與專案詳解',
      head: [...fontPreconnect, ['link', { rel: 'stylesheet', href: FONT_TC }]],
      themeConfig: {
        nav: navFor('/zh-Hant', {
          home: '首頁',
          projects: '專案',
          about: '關於我',
          experience: '工作經歷',
          education: '學歷',
          contact: '聯絡方式'
        }),
        outline: { label: '本頁目錄' },
        darkModeSwitchLabel: '外觀',
        returnToTopLabel: '回到頂部',
        sidebarMenuLabel: '選單',
        langMenuLabel: '切換語言'
      }
    }
  },

  head: [
    ...fontPreconnect,
    // Hero name: Archivo Black · Display: Bebas Neue · UI/labels: Barlow Condensed · Body: Inter
    ['link', { rel: 'stylesheet', href: LATIN_FONTS }],
    ...hreflang,
    ['meta', { property: 'og:title', content: 'RayZc - Game Developer' }],
    ['meta', { property: 'og:description', content: 'Game development portfolio and projects' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: `${SITE_ORIGIN}${base}` }],
    ['meta', { property: 'og:image', content: `${SITE_ORIGIN}${base}raymond-portrait.jpg` }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'RayZc - Game Developer' }],
    ['meta', { name: 'twitter:description', content: 'Game development portfolio and projects' }],
    ['meta', { name: 'twitter:image', content: `${SITE_ORIGIN}${base}raymond-portrait.jpg` }]
  ],

  themeConfig: {
    logo: '/raymond-portrait.jpg',
    socialLinks
  }
})
