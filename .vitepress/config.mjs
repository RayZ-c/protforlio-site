import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/protforlio-site/',   // repo name, with slashes
  title: "RayZc - Game Developer",
  description: "Game development portfolio and projects",

  appearance: 'force-dark', // ← always dark, no light mode



  head: [
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
