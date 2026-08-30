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
| `theme/icons.css` | The animated line-icon set: ten keyframe families plus the panel icon and chevron styling. |
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
| `HxIcon` | The emoji that used to mark each panel section. Imported directly by `ProjectPanel` rather than registered globally, because nothing in Markdown uses it. |

### Canvas background system

Two mutually exclusive fixed canvases are mounted through the custom Layout's
`layout-top` slot:

- `BeamsBackground.vue` runs only on `index.md`.
- `BackgroundField.vue` runs on every non-home route.

Both use `theme/canvas-background.js`, which owns backing-store scaling, the
frame cap, resize handling, visibility pause, reduced-motion behavior and
listener teardown. The Layout component persists between VitePress routes, so
setup is driven by a watcher on `[enabled, canvas]`; `onMounted` is insufficient
because the canvas itself is conditionally created and destroyed by route.

The beams render at 0.45 scale and 30fps. Their current baseline is `5-8` CSS
pixels per frame, with a scroll multiplier stored inside the component. The
scroll listener is passive and is removed together with the canvas runtime.
The homepage hero is opaque, so it naturally covers the fixed beam canvas for
the first viewport without a scroll visibility listener.

Background stacking depends on transparent homepage content surfaces. In
particular, `:root.hx-home .VPContent` in `home-experiment.css` has higher
specificity than a plain `.VPContent` rule. If the beams unexpectedly disappear,
inspect the compiled `style.*.css` cascade before adding another override.

### Projects index header

The Projects page heading is raw HTML in `projects/index.md`, not the default
Markdown heading sequence. `.projects-page-heading` is a flex row containing a
copy block (`h1` plus `.projects-subtitle`) and `.back-home2-button`.

The Home anchor is `position: relative` even though it participates in flex.
This is required because the shared orange button sweep in `effects.css` is an
absolutely positioned `::after`; the positioned anchor contains and clips it.
Making the anchor static causes the pseudo-element to size against the page and
paint a large animated orange wedge from the left edge.

### Internationalisation

The site ships in three locales, using VitePress's native directory routing:

| Route | Locale | `lang` |
|---|---|---|
| `/` | English | `en` |
| `/zh/` | Simplified Chinese | `zh-Hans` |
| `/zh-Hant/` | Traditional Chinese (Taiwan) | `zh-Hant` |

English is the ROOT locale rather than living at `/en/`. GitHub Pages serves a
static build with no redirect layer, so whatever sits at the site root is what a
bare link resolves to — and the primary audience is English.

**The language switcher is VitePress's own.** `VPNavBarTranslations` renders an
always-visible dropdown on the right of the navbar (and
`VPNavScreenTranslations` inside the mobile menu), and its `langs` composable
resolves the SAME page in the target locale, preserving the `#hash`. None of
that is reimplemented here — `effects.css` only restyles it. Each language is
labelled with its own autonym (`English`, `简体中文`, `繁體中文`) so a reader who
cannot read the current locale can still find theirs.

**Fonts are the part that would silently break.** Bebas Neue, Barlow Condensed,
Archivo Black and Inter contain no CJK glyphs at all, so without intervention
every Chinese heading falls back to an arbitrary system font. `config.mjs`
attaches Noto Sans SC / TC per locale via `locales[x].head`, so an English
visitor never downloads a stylesheet they cannot render a glyph from. Google
Fonts already splits those faces into ~100 `unicode-range` chunks, so a page
only fetches the characters it actually shows.

The token overrides live at the bottom of `effects.css`, selected on
`:root:lang(zh-Hans)` / `:root:lang(zh-Hant)`. **Latin faces stay FIRST in every
stack**: Latin runs inside Chinese text (`Unity`, `C++`, `UIToolkit`, the tag
chips) keep the original typography and only Han characters fall through to
Noto. That mixed-script behaviour is deliberate — it is what stops a Chinese
page reading as a different site.

**Route identity must go through `theme/routes.js`.** Any check of the form
`relativePath === 'index.md'` is wrong once locales exist, because the Chinese
home pages are `zh/index.md` and `zh-Hant/index.md`. That bug was live in both
background canvases: the beams would have vanished on the Chinese homepage and
the dot field would have appeared over it. `isHomePage()` and `stripLocale()`
are the single place to be right about this.

UI strings inside Vue components come from `theme/i18n.js` (`useI18n().t()`),
keyed by English sentence so a missing translation degrades to correct English
rather than to a dotted id. Page CONTENT is not templated — each locale has its
own markdown file.

**`npm run check` enforces locale parity.** A translated page must stay
structurally identical to its English source: same panel count, same carousel
ids, same case-study media paths, balanced tags, and card links that stay inside
their own locale. Project-index preview media is compared by card id as well as
checked for file existence; a different but valid clip is still content drift.
Prose changes; markup must not. Without that check a translation drifts silently,
because nothing about it produces a build error.

Terminology is locked in `project-context/i18n-glossary.md`. The two Chinese
locales are written INDEPENDENTLY from the English, never converted from each
other — character conversion is detectable by any native reader, and for a
programmer's portfolio it is especially obvious (CN 程序/软件/项目/对象 vs
TW 程式/軟體/專案/物件 are different words, not different characters).

### Section icons

`ProjectPanel`'s `icon` prop takes a **Lucide icon name**, not an emoji. Emoji
were replaced because they render in each platform's own house style, sit at a
different weight and baseline from the text beside them, cannot take the accent
colour, and cannot animate. One building-site emoji was also carrying 17
different sections, which is why the set read as filler.

- **Geometry** is inlined in `theme/icons.js` (Lucide, ISC — see
  `/THIRD_PARTY_NOTICES.md`). Inlined rather than installed so there is no
  dependency, no extra request, and — the reason that matters — each glyph's
  child elements stay individually addressable.
- **Motion** is in `theme/icons.css`. 45 icons share **ten keyframe families**
  grouped by what kind of object the icon is (`spin`, `rings`, `draw`, `lift`,
  `drop`, `nudge`, `glow`, `stack`, `tick`, `slide`, `beat`, `split`). An
  unlisted icon falls back to `nudge`, which suits anything.
- Each family animates **one part** of the glyph — the cog's ring, the stack's
  top layer, the far half of a link — via `:nth-child()`. A whole-glyph
  `scale()` was what the old emoji hover did, and it is what made it look
  generic.
- The trigger is `.hx-panel-head:hover` / `.hx-panel[open]`, i.e. the whole
  summary row, so the motion also confirms the hit target. `[open]` settles
  into an end state rather than looping: a case study can have a dozen panels
  open at once.
- The `▾` chevron is now the Lucide `chevron-down`, so the row is drawn with one
  pen. It is explicitly excluded from family animations.

To add an icon: fetch it from `lucide-static`, add its inner elements to
`ICONS`, and give it a family in `ICON_FAMILY`.

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

The icon geometry is Lucide (ISC), inlined in `theme/icons.js`. Six of those
icons additionally carry Feather's MIT licence.

The required full notices live in `/THIRD_PARTY_NOTICES.md`.

## Known issues

- Two pages (`forgiving-mechanics`, `star-platinum-mod`) log a Vue hydration
  mismatch. Traced into VitePress's own local-nav component (`data-v-6b867909`),
  whose SSR output uses `DIV`s where the client renders `SPAN`s. Not site
  content; pages render correctly.
- `package-lock.json` is gitignored, so installs are not reproducible.
- The projects index is the heaviest page (~46 MB) because each card plays a
  looping gameplay video — a deliberate design choice, not an oversight.
