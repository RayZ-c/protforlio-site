import { defineConfig } from 'vitepress'

// Single source of truth for the GitHub Pages sub-path. Anything that
// VitePress does NOT run through withBase() itself (nav links to non-HTML
// assets such as the CV PDF) must be built from this constant, never
// hardcoded a second time.
const base = '/protforlio-site/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "RayZc - Game Developer",
  description: "Game development portfolio and projects",

  appearance: 'force-dark', // ← always dark, no light mode



  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    // Hero name: Archivo Black · Display: Bebas Neue · UI/labels: Barlow Condensed · Body: Inter
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=Barlow+Condensed:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap' }],
    ['meta', { property: 'og:title', content: 'RayZc - Game Developer' }],
    ['meta', { property: 'og:description', content: 'Game development portfolio and projects' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://rayz-c.github.io/protforlio-site/' }],
    ['meta', { property: 'og:image', content: 'https://rayz-c.github.io/protforlio-site/raymond-portrait.jpg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'RayZc - Game Developer' }],
    ['meta', { name: 'twitter:description', content: 'Game development portfolio and projects' }],
    ['meta', { name: 'twitter:image', content: 'https://rayz-c.github.io/protforlio-site/raymond-portrait.jpg' }]
  ],



  themeConfig: {
    logo: '/raymond-portrait.jpg',  

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/' },
      // VitePress's normalizeLink() skips withBase() for non-HTML targets,
      // so the PDF link has to carry the base itself.
      { text: 'CV', link: `${base}cv_v2.pdf`, target: '_blank' },
      { text: 'About Me', link: '/#about' },
      { text: 'Experience', link: '/#experience' },
      { text: 'Education', link: '/#education' },
      { text: 'Contact', link: '/#contact' }
    ],

    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RayZ-c' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/raymond-cheng-7b0340365/' }
    ]
  }
})
