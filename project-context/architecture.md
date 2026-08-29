# Architecture and Content Map

## Rendering model

VitePress renders the root Markdown files as routes. Pages mix Markdown, a small
amount of inline HTML, and page-local `<script setup>` where a page genuinely
needs logic. The site extends VitePress's default theme rather than replacing it.

## Stylesheet layers

Load order matters and is set in `.vitepress/theme/index.js`. Each file has one
job:

| File | Responsibility |
|---|---|
| `theme/tokens.css` | **The single source of truth.** Every `--hx-*` value — colour, type, spacing, geometry, motion — defined on `:root`. |
| `theme/style.css` | Bridges VitePress's own `--vp-*` variables onto those tokens, so the default theme inherits the palette instead of fighting it. |
| `theme/custom.css` | Page-specific rules that have not yet been componentised. Shrinking. |
| `theme/components.css` | Styles for components whose content arrives through a slot. |
| `theme/doc.css` | Long-form case-study page styling. |
| `theme/effects.css` | Site-wide interaction polish: panel/card sweeps, spotlight surfaces, disclosure motion, focus states and section markers. |
| `theme/home-experiment.css` | The homepage design system. Self-contained and removable. |

`theme/interactions.js` is the JS partner to the CSS layers. It owns the
delegated cursor spotlight and IntersectionObserver-based reveal behavior, and
rescans after VitePress route changes.

Two cascade rules worth knowing before editing:

- **`style.css` overrides are written `:root, :root.dark`, not `:root`.**
  VitePress declares its dark values inside `.dark { … }` and the site runs
  `appearance: 'force-dark'`, so `<html class="dark">` is always present. A bare
  `:root` has the *same* specificity as `.dark` (0-1-0) and would win only by
  import order. `:root.dark` is 0-2-0 and wins deterministically.
- **Prose rules in `doc.css` use `:where()`** so they sit at zero specificity and
  never override component classes nested inside a document. Written plainly,
  `.vp-doc li` (0-1-1) silently beat the tag colours, because `TagRow` renders
  `<li>` elements.

## Components

Registered in `.vitepress/theme/index.js` and usable directly from Markdown.

| Component | Replaces |
|---|---|
| `ProjectPanel` | 88 hand-written `<details class="section-panel">` blocks. Still a native `<details>`, so it works without JS and is keyboard-correct for free. |
| `MediaCarousel` | 21 hand-built carousels. Still radio-driven: works without JS, and a radio group is natively arrow-key navigable. |
| `TagRow` | A 15-line chain of inline ternaries mapping tags to nine colour classes. |
| `ScrollControls` | Two separate scroll-button implementations (the projects index used inline `onclick`). |
| `HomeExperiment`, `ShowreelHero`, `HomeSection`, `HomeProjectCard`, `HomeTimelineEntry`, `HeroNameEnergy` | The homepage. |
| `PageTransition` | Global route-change overlay mounted in the VitePress `layout-top` slot. Midnight-sky background, short destination label and four-dot loader. |

### MediaCarousel interaction model

The component still uses radios as its source of truth, but now exposes three
equivalent selection paths:

1. numbered labels below the stage (`@click.prevent`, so no scroll jump),
2. native arrow-key navigation within the radio group,
3. translucent previous/next stage buttons, which wrap at both ends.

The previous/next controls call the same `selectSlide()` path as the numbered
labels, so behavior cannot drift between input methods.

### Why the carousel is not JS-driven

Each hand-built carousel needed its **own generated stylesheet** — blocks of
`#fm-hero-1:checked ~ .media-slides figure:nth-child(1)` — because every instance
selected by unique element id. That was the single largest source of the ~700
lines of CSS that used to live inside the Markdown.

`MediaCarousel` selects by *position* instead:

```css
.hx-carousel-radio:nth-of-type(N):checked ~ .hx-carousel-stage > :nth-child(N)
```

Those rules are written once, in `components.css`, and serve every carousel on
the site. Supports up to 8 slides; the most any page uses is 6.

`id` is a required prop rather than auto-generated: a module-level counter would
drift between the SSR pass (one process renders many pages) and the client
(which starts from zero), producing hydration mismatches.

## Media pipeline

- Everything browser-served lives in `public/` and is referenced from site-root
  URLs such as `/videos/...`.
- **Paths inside a `:slides="[…]"` array are JS literals, not `src` attributes,**
  so VitePress's asset transform never sees them. `MediaCarousel` applies
  `withBase()` itself. Author paths base-free.
- Videos are H.264 CRF 26, `+faststart` (moov atom at the front, so playback can
  begin before the file is fully fetched), audio preserved on all of them.
- Poster frames mirror the video tree: `/videos/x/y.mp4` → `/posters/x/y.jpg`.
  `MediaCarousel` derives them rather than repeating them per page.
- Clips are `preload="none"` and play on scroll into view (`theme/lazy-video.js`).
  Do not add `autoplay`: the browser begins fetching the instant the element
  parses, and no script can win that race.

## Routing and deployment

- Production is served from `/protforlio-site/`, set via VitePress `base`.
- **Never hardcode the base twice.** `config.mjs` derives the CV link from one
  `base` constant, because VitePress's `normalizeLink()` skips the base for
  non-HTML targets such as PDFs.
- `srcExclude` in `config.mjs` keeps `project-context/`, `test.md` and the
  VitePress starter examples out of the build. Any `.md` outside an excluded path
  becomes a public page.
- Anything matching `*.local.md` / `*.local.json` is gitignored and holds local
  secrets or notes. Keep it that way.
- GitHub Actions installs, runs `npm run docs:build`, and deploys
  `.vitepress/dist`. Published sites are hard-capped at **1 GB**.

### Route-transition lifecycle

`PageTransition.vue` is mounted by the custom Layout's `layout-top` slot. It
uses VitePress router hooks as follows:

- `onBeforeRouteChange` covers normal client navigation,
- `onBeforePageLoad` covers browser back/forward (`popstate` bypasses the first
  hook),
- `onAfterRouteChanged` uncovers the destination.

Every previous hook is saved, awaited and restored on unmount. This is critical:
`lazy-video.js` and `interactions.js` also chain route hooks. `pageKey()` ignores
hashes, so navigation within the same page never shows the transition.

### Case-study desktop layout

There are two independent wide-screen breakpoints in `doc.css`:

- `>= 1440px`: balanced 256/784/256 doc grid centres the article and places
  the outline in the right lane.
- `>= 1560px`: the project status/type/focus block becomes the sticky left fact
  rail by pulling the inner document grid into the available gutter.

Below 1560px the fact block returns to normal flow. At `<= 1559px`, the first
panel beneath each centred section heading gets an explicit 24px offset; this
prevents the condensed heading glyphs being covered during window resizing.

## Third-party UI sources

The transition contains two MIT-licensed Uiverse elements:

- Midnight sky pattern by Kiranmayee Abbireddy:
  `https://uiverse.io/kiranmayee-abbireddy/average-insect-70`
- Four-dot loader by Li-Deheng:
  `https://uiverse.io/Li-Deheng/bright-firefox-37`

The required full notices live in `/THIRD_PARTY_NOTICES.md`.

## Known issues

- Two pages (`forgiving-mechanics`, `star-platinum-mod`) log a Vue hydration
  mismatch. Traced into VitePress's own local-nav component (`data-v-6b867909`),
  whose SSR output uses `DIV`s where the client renders `SPAN`s. Not site
  content; pages render correctly.
- `package-lock.json` is gitignored, so installs are not reproducible.
- The projects index is the heaviest page (~46 MB) because each card plays a
  looping gameplay video — a deliberate design choice, not an oversight.
