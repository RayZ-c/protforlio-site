// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './style.css'

// ── EXPERIMENTAL HOMEPAGE ────────────────────────────────────────────────────
// The block below is the only wiring the homepage redesign needs. Delete these
// imports + registrations (and restore the previous index.md) to revert it.
import './home-experiment.css'
import HomeExperiment from './components/HomeExperiment.vue'
import HomeSection from './components/HomeSection.vue'
import HomeProjectCard from './components/HomeProjectCard.vue'
import HomeTimelineEntry from './components/HomeTimelineEntry.vue'
import ShowreelHero from './components/ShowreelHero.vue'
import HeroNameEnergy from './components/HeroNameEnergy.vue'
// Alternative hero, kept available: swap <ShowreelHero /> for <PortfolioReveal />
// in index.md to go back to the cursor-brush reveal banner.
import PortfolioReveal from './components/PortfolioReveal.vue'
// ─────────────────────────────────────────────────────────────────────────────

// Plays project-page gameplay clips only once they scroll into view, instead of
// letting all ~40 buffer at once. See lazy-video.js for the full reasoning.
import { setupLazyVideo } from './lazy-video'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    setupLazyVideo(router)

    app.component('ShowreelHero', ShowreelHero)
    app.component('HeroNameEnergy', HeroNameEnergy)
    app.component('PortfolioReveal', PortfolioReveal)
    app.component('HomeExperiment', HomeExperiment)
    app.component('HomeSection', HomeSection)
    app.component('HomeProjectCard', HomeProjectCard)
    app.component('HomeTimelineEntry', HomeTimelineEntry)
  }
}
