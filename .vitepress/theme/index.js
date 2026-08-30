// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'

// Load order matters. tokens.css defines every --hx-* value on :root;
// style.css maps VitePress's own --vp-* variables onto those tokens; custom.css
// and home-experiment.css then consume them. Tokens must come first.
import './tokens.css'
import './style.css'
import './custom.css'
import './components.css'
import './doc.css'
import './effects.css'
import './icons.css'

// ── EXPERIMENTAL HOMEPAGE ────────────────────────────────────────────────────
// The block below is the only wiring the homepage redesign needs. Delete these
// imports + registrations (and restore the previous index.md) to revert it.
import './home-experiment.css'
import HomeExperiment from './components/HomeExperiment.vue'
import ScrollControls from './components/ScrollControls.vue'
import ProjectPanel from './components/ProjectPanel.vue'
import MediaCarousel from './components/MediaCarousel.vue'
import TagRow from './components/TagRow.vue'
import HomeSection from './components/HomeSection.vue'
import HomeProjectCard from './components/HomeProjectCard.vue'
import HomeTimelineEntry from './components/HomeTimelineEntry.vue'
import ShowreelHero from './components/ShowreelHero.vue'
import HeroNameEnergy from './components/HeroNameEnergy.vue'
import PageTransition from './components/PageTransition.vue'
import BackgroundField from './components/BackgroundField.vue'
import BeamsBackground from './components/BeamsBackground.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import CvMenu from './components/CvMenu.vue'
// Alternative hero, kept available: swap <ShowreelHero /> for <PortfolioReveal />
// in index.md to go back to the cursor-brush reveal banner.
import PortfolioReveal from './components/PortfolioReveal.vue'
// ─────────────────────────────────────────────────────────────────────────────

// Plays project-page gameplay clips only once they scroll into view, instead of
// letting all ~40 buffer at once. See lazy-video.js for the full reasoning.
import { setupLazyVideo } from './lazy-video'

// Cursor spotlight + scroll reveal, for every page (not just the homepage).
import { setupInteractions } from './interactions'

// Per-character assemble on the big page titles.
import { setupTextReveal } from './text-reveal'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Fixed route overlay. It is visually global but remains inside the
      // theme tree so it can chain VitePress's navigation hooks safely.
      // Order matters: the field paints behind the page, the transition over it.
      // Two backgrounds, each of which decides for itself whether this route
      // is its route: beams on the homepage, the signal field everywhere else.
      'layout-top': () => [h(BeamsBackground), h(BackgroundField), h(PageTransition)],
      // The CV menu and language switcher are rendered here rather than as
      // plain nav links, because both are per-language choices. VitePress's
      // own translations dropdown is disabled in effects.css: it collapses
      // into the mobile hamburger, and someone who cannot read the current
      // language must not have to find a hidden menu.
      'nav-bar-content-after': () => [h(CvMenu), h(LanguageSwitcher)]
    })
  },
  enhanceApp({ app, router, siteData }) {
    setupLazyVideo(router)
    setupInteractions(router)
    setupTextReveal(router)

    app.component('ShowreelHero', ShowreelHero)
    app.component('HeroNameEnergy', HeroNameEnergy)
    app.component('PortfolioReveal', PortfolioReveal)
    app.component('HomeExperiment', HomeExperiment)
    app.component('ScrollControls', ScrollControls)
    app.component('ProjectPanel', ProjectPanel)
    app.component('MediaCarousel', MediaCarousel)
    app.component('TagRow', TagRow)
    app.component('HomeSection', HomeSection)
    app.component('HomeProjectCard', HomeProjectCard)
    app.component('HomeTimelineEntry', HomeTimelineEntry)
  }
}
