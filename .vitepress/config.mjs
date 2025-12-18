import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/protforlio-site/',   // repo name, with slashes
  title: "RayZc - Game Developer",
  description: "Game development portfolio and projects",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'About', link: '/#about' },
      { text: 'Contact', link: '/#contact' }
    ],

    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RayZ-c' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/raymond-cheng-7b0340365/' }
    ]
  }
})
