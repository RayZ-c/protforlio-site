# Portfolio Project Context

This folder is the durable handoff context for future work on Raymond Cheng's game-development portfolio. Read this file and the linked notes before making structural or visual changes.

## Purpose

- Present Raymond as a gameplay/game systems programmer for game-development roles.
- Lead with playable-looking work, technical ownership, implementation detail, and clear recruiter-friendly summaries.
- Preserve the existing project content and media when applying a future reference website/template.

## Quick facts

- Framework: VitePress 1.x on Vue 3, with Markdown pages and raw HTML.
- Package manager: npm.
- Main page: `index.md`.
- Project listing: `projects/index.md`.
- Project case studies: `projects/*.md`.
- Theme entry: `.vitepress/theme/index.js`.
- Main custom styling: `.vitepress/theme/custom.css`.
- VitePress configuration/navigation: `.vitepress/config.mjs`.
- Static assets: `public/` (images, videos, portrait, and public CV).
- Deployment: GitHub Pages through `.github/workflows/deploy.yml` on pushes to `main`.
- Production base path: `/protforlio-site/` (the repository name is intentionally misspelled).

## Context files

- [architecture.md](architecture.md): file map, rendering model, and important implementation details.
- [redesign-brief.md](redesign-brief.md): rules and checklist for reproducing the future reference template.
- [local-development.md](local-development.md): install, development, build, and preview commands.

## Working rule

Treat the Markdown case studies and everything under `public/` as valuable source content. A redesign may change layout, components, typography, navigation, and styling, but it should not silently discard project evidence, media, CV access, contact information, or outbound profile links.

Update these notes whenever the framework, routes, content model, deployment target, or redesign direction changes materially.

## Current redesign direction

The first template reference is stored in `test-project/`. Its full-screen two-image cursor reveal has been adapted into the homepage through `.vitepress/theme/components/PortfolioReveal.vue`; the existing portfolio sections continue below it.

### Experimental homepage ("hx") design system

The whole homepage now runs on a self-contained, easy-to-revert layer:

- `.vitepress/theme/home-experiment.css` - all design tokens (colour, type, spacing, geometry, motion, breakpoints) and every homepage style. Scoped to `.hx-root` and to `:root.hx-home`, so nothing leaks onto `projects/` or the case studies.
- `.vitepress/theme/components/HomeExperiment.vue` - page shell: sets the `hx-home` flag on `<html>`, runs the shared scroll-reveal observer, renders the scroll controls.
- `HomeSection.vue`, `HomeProjectCard.vue`, `HomeTimelineEntry.vue` - the repeated UI. `HomeProjectCard` carries a pointer-tracked spotlight glow driven by two CSS custom properties (the 21st.dev spotlight-card idea rebuilt natively - no React/Tailwind/framer-motion, no new dependencies).
- `ShowreelHero.vue` - **the current hero.** `public/videos/banner.mp4` is a 53s reel covering five real projects, so the hero turns it into a navigable index: each chapter seeks the reel and swaps the caption + case-study link. Auto-advances; hover previews; click pins and loops; chapters are real buttons with arrow-key navigation; the rail scrolls the active chapter into view on narrow screens. Under `prefers-reduced-motion` nothing auto-plays and the deck becomes a still-frame picker. All timestamps live in `SHOWREEL_CONFIG` - **if `banner.mp4` is ever re-cut, that object is the only thing to update.** Verified chapter starts: 1.5s Path to Power, 15s Pixel Adventure, 20.5s UE5 FPS, 26.5s Endless Runner, 43s Roblox Movesets.
- `PortfolioReveal.vue` - the previous cursor-brush reveal hero, kept registered but unused. Swap `<ShowreelHero />` for `<PortfolioReveal />` in `index.md` to bring it back. Layer order is video (0) -> dark overlay (1) -> brush-revealed still on canvas (2) -> copy (3); the video is a real `<video>` element and is never drawn into the canvas. Brush tuning lives in `REVEAL_CONFIG`.
- `index.md` - content only, using those components. `markdownStyles: false` disables the default `.vp-doc` prose layer.

Palette is deliberately two accents (warm `#ff8c1a`, cool `#2e62d9`/`#9fc2ff`) on near-black navy. Do not reintroduce the purple/pink/green/cyan mix.

Notes worth keeping:

- VitePress's `normalizeLink()` does **not** apply `base` to non-HTML nav targets, so the CV nav entry builds its own path from the single `base` constant in `config.mjs`.
- `cleanUrls` is off, so project links built with `withBase()` need an explicit `.html` to survive a hard load.
- Reveal-on-scroll only hides content after JS confirms it can show it again (`.hx-reveal-on`).
- Section headers deliberately carry **no** 01/02/03 numbering: the sections are not a sequence, so numbering would be decoration rather than information.
- Generic link colours are wrapped in `:where()` to keep specificity at 0-1-0, so component classes win without `!important`.

To disable the experiment: drop the `./home-experiment.css` import and the `Home*` component registrations from `.vitepress/theme/index.js`, then restore the previous `index.md`.
