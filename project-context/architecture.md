# Architecture and Content Map

## Rendering model

VitePress renders the root Markdown files as routes. Pages mix Markdown, inline HTML, and page-local `<script setup>`/`<style>` blocks where needed. The site extends VitePress's default theme rather than using a fully custom Vue application.

Global behavior is split across:

- `.vitepress/config.mjs`: site metadata, dark mode, navigation, social links, GitHub Pages base path.
- `.vitepress/theme/index.js`: imports and extends the default theme.
- `.vitepress/theme/custom.css`: portfolio cards, filters, case-study layouts, carousels, experience/education/contact sections, hero video, footer, and responsive styling.
- `.vitepress/theme/style.css`: VitePress starter/theme variables and button/hero defaults.

## Content entry points

- `index.md`: homepage hero, featured projects, about, experience, education, contact, social icons, footer, and scroll controls.
- `projects/index.md`: searchable/filterable project gallery.
- `projects/path-to-power.md`: featured Unity/C# 2D action platformer case study.
- `projects/ue5-fps.md`: featured Unreal Engine 5/C++ FPS framework case study.
- Other case studies cover Unity movement, Pixel Adventure, Roblox combat/commission work, a Marvel Rivals audio mod, and an Unreal endless runner.

## Assets

- Browser-served assets belong in `public/` and are referenced from site-root URLs such as `/videos/...`.
- The public CV is `public/cv_v2.pdf`. A second copy currently exists at `projects/cv_v2.pdf`; verify which copy should remain before consolidating.
- Video is central to the portfolio. Preserve filenames and compression unless a migration plan updates every reference.
- Several social icons on the homepage are remotely hosted by Icons8, while core portfolio media is local.

## Routing and deployment cautions

- Production is hosted below `/protforlio-site/`, configured through VitePress `base`.
- Avoid hardcoding the base twice. Internal VitePress links should generally be route-based; static asset URL behavior must be tested in both local development and the production build.
- The CV navigation link currently includes `/protforlio-site/` explicitly. Recheck it during a navigation rewrite.
- GitHub Actions installs dependencies, builds with `npm run docs:build`, uploads `.vitepress/dist`, and deploys to GitHub Pages.

## Current technical characteristics

- There is no application source directory or component library yet.
- Much of the UI is authored directly in Markdown/HTML and one large global CSS file.
- Future pixel-accurate work may justify extracting reusable Vue components and design tokens, but content migration should be incremental and verifiable.
- The site is forced to dark appearance.
- `package-lock.json` is ignored, so installs are not currently locked reproducibly.
