# Handoff — read this first

Written for whoever picks this up next (human or agent) with no prior context.

## What this project is

Raymond Cheng's game-dev portfolio. VitePress 1.6.4 + Vue 3, deployed to GitHub
Pages under `/protforlio-site/`. The audience is recruiters and studio hiring
leads, and **the repository itself is part of the portfolio** — people will read
the code. Dead code and copy-pasted markup count against it.

## State right now

Last commit is `4a86827 "Whole Website revamped V1"` — the entire design-system
pass plus the Codex continuation is committed AND pushed. The working tree is
clean apart from the `.temp` cleanup described below.

Raymond owns commits. Do not commit or push without him asking.

Uncommitted work = a site-wide design system pass:

- **New files:** `theme/tokens.css`, `doc.css`, `components.css`, `effects.css`,
  `interactions.js`, and components `ProjectPanel`, `MediaCarousel`, `TagRow`,
  `ScrollControls`.
- **Rewritten:** `theme/style.css` (was untouched VitePress boilerplate).
- **Edited:** all 9 project markdown files, `custom.css`, `theme/index.js`.

Verified before handoff: production build clean, all 10 pages return 200, no
console errors, no failed requests, no horizontal overflow at
320 / 390 / 768 / 1024 / 1440 / 1600 / 1920.

## Where the knowledge lives

| File | What it holds |
|---|---|
| `architecture.md` | Stylesheet layers, component map, media pipeline, routing. **Start here.** |
| `decisions.md` | Every design decision taken without Raymond, and how to reverse each. |
| `redesign-brief.md` | His original brief and constraints. |
| `local-development.md` | Running the site locally. |
| `notify.local.md` | Gitignored. Holds a live Discord webhook — never commit, never paste it anywhere. |

## Traps that have already cost time

Each of these was a real bug found by measurement, not theory. They will bite
again.

1. **`.VPContent` has `overflow: hidden auto` by default.** `hidden` makes it a
   scroll container, so `position: sticky` silently does nothing anywhere in the
   content area. `doc.css` overrides it to `overflow-x: clip`. Do not "tidy"
   that back to `hidden`.

2. **Specificity ties decided by load order.** Four separate bugs came from new
   rules tying with VitePress's own or with an older duplicate in `custom.css`:
   - `.vp-doc p` (0-1-1) beat `.info-line` (0-1-0) → 85px row gaps
   - `.vp-doc li` beat `.hx-tag--warm` → all tags rendered one colour
   - `.vp-doc a:hover` beat the button hover → orange text on an orange fill
   - a duplicate `.project-body h3` later in `custom.css` silently forced a
     smaller size
   Prose rules in `doc.css` use `:where()` to sit at zero specificity for this
   reason. Prefer that over `!important`.

3. **`.dark` vs `:root`.** VitePress declares dark values inside `.dark {}` and
   the site runs `appearance: 'force-dark'`. `:root` ties with `.dark` (both
   0-1-0). All `--vp-*` overrides in `style.css` are written `:root, :root.dark`.

4. **Animations outrank declarations.** A running or filled CSS animation beats
   a normal hover rule. `fill-mode: both` leaves the final keyframe applied
   forever — that silently killed a hover transform. Use `backwards`, or don't
   animate a property you also set on hover.

5. **Vue reuses keyed DOM nodes.** On the projects grid, filtering shifts each
   card's `nth-child`, which re-evaluates animation delays and re-applies
   from-states. Two entry-animation attempts were removed because of this; see
   the comment block in `effects.css`. Don't re-add one without solving that.

6. **`clip-path` clips pseudo-elements and descendants.** Card borders are drawn
   by `::after` rather than a real `border`, because the notch clip sliced it.

7. **Paths inside a `:slides="[…]"` array are JS literals**, so VitePress's asset
   transform never sees them. `MediaCarousel` calls `withBase()` itself. Author
   paths base-free (`/videos/…`). Never hardcode `/protforlio-site/` twice.

8. **New imports in `theme/index.js` need a dev server restart.** HMR does not
   pick them up, and the symptom looks like your CSS "not working".

9. **Videos: never add `autoplay`.** The browser starts fetching the instant the
   element parses; no script can win that race. Clips are `preload="none"` +
   poster + play-on-visible (`lazy-video.js`). One project page was 1.3 GB
   before this.

10. **Never strip audio from the clips.** `muted` is only an initial state —
    viewers can unmute. This was a real mistake, corrected; see `decisions.md`.

## Known and unfixed

- **Hydration mismatch on 2 pages** (`forgiving-mechanics`, `star-platinum-mod`).
  Traced into VitePress's *own* local-nav component (`data-v-6b867909`): its SSR
  output uses `DIV`s where the client renders `SPAN`s. Not site content, not
  user-visible, pages render correctly. Deliberately left alone.
- **Projects index is ~46 MB** because each card plays a looping gameplay video.
  That is Raymond's explicit choice, not an oversight. Do not "fix" it.
- `custom.css` is down from 1429 to ~980 lines but still holds legacy rules.
  It is the source of most specificity collisions; shrinking it further is the
  standing cleanup.
- `package-lock.json` is gitignored, so installs are not reproducible.

## Working agreements

- **Raymond tests the site himself.** Make the change, run one short targeted
  check that proves the specific thing, then hand over. Do not run long audit
  suites every turn.
- **Do not commit or push.** He does that.
- Windows: PowerShell blocks `npm.ps1`. Use `npm.cmd run docs:dev`,
  `npm.cmd run docs:build`, `npm.cmd run docs:preview`.
- Build output is capped by GitHub Pages at **1 GB**; the site is ~151 MB now.

## Verifying a change

```bash
npm.cmd run docs:build         # must be clean
npm.cmd run docs:preview       # serves the real build on :4173
```

Then check, with a browser: all 10 pages return 200, no console errors, no
failed requests, and no horizontal overflow across 320 → 1920. For anything
touching video, confirm a project page still loads only one clip at open and
that all 46 clips still have audio.

## Sensible next steps

1. Get Raymond's review of `decisions.md` and reverse anything he disagrees with.
2. Keep shrinking `custom.css` — it is the main remaining source of collisions.
3. The 404 page is still the unstyled default.
4. `project-context/` is excluded from the build via `srcExclude`, so these
   notes never become public pages. Keep it that way when adding files.

---

## Codex continuation update — 29 August 2026

This section records the full follow-up session after the original handoff was
written. It is the newest state and takes precedence where an older paragraph
above describes something that has since changed.

### Work completed

- Added `theme/components/PageTransition.vue` and mounted it through the
  VitePress `layout-top` slot in `theme/index.js`.
  - Runs only between different routes; same-page hash navigation does not
    trigger it.
  - Route labels are deliberately short: `HOME`, `PROJECTS`, or the project
    slug converted to uppercase words.
  - The background is the complete Uiverse midnight-sky pattern: three star
    layers, three meteors and a crescent moon.
  - The bottom-centre four-dot Uiverse loader fades in/out and loops every
    `0.72s` with compressed stagger timings.
  - The earlier slash bars, centre rule and corner-line decorations were
    completely removed after Raymond rejected them.
  - Reduced-motion mode keeps the transition but removes looping motion.
  - Full MIT notices for both copied Uiverse elements live in
    `/THIRD_PARTY_NOTICES.md`.

- Case-study navigation/layout fixes:
  - Added a small safe gap below the fixed navbar for the `All Projects` back
    button so it no longer clips the header.
  - Repaired the right-side `On this page` links by ensuring the case-study
    headings expose real, stable anchors.
  - At `>= 1440px`, `.VPDoc.has-aside > .container` is a balanced
    `256px / 784px / 256px` grid: left lane, centred article, right outline.
    This removes the large unused right gutter and centres the reading column.
  - The original left fact rail remains enabled only at `>= 1560px`.
  - Structural case-study group headings no longer use the site-wide translate
    reveal, because transformed text can paint outside its reserved box.
  - At `<= 1559px`, the first panel after each centred group heading receives
    an explicit `24px` top offset using the exact DOM sequence
    `h1.section-title-center + h2.outline-only + .hx-panel`. This is the final
    fix for panels covering `GENERAL`, `HIGHLIGHT FEATURES`, `TECHNICAL DEEP
    DIVE`, etc. while a browser window is narrowed. Raymond personally resized
    the window across the failing sizes and confirmed this works.
  - Centred h3 commission subtitles now behave as subtitles instead of getting
    the standard dash-led document-h3 treatment.

- `MediaCarousel` fixes and additions:
  - Number buttons use `@click.prevent`, so selecting media never changes the
    page scroll location or behaves like hash navigation.
  - Added real previous/next buttons at the far sides of the media stage.
    They wrap around, use the same orange/cool-blue theme, are translucent,
    have idle/hover/pressed motion, and carry descriptive ARIA labels.
  - The underlying radio controls remain, preserving native keyboard arrow-key
    navigation and no-JS behavior.

- Navbar typography is now global rather than homepage-only:
  `Barlow Condensed`, uppercase menu labels, matching size/weight/letter-spacing
  on home, projects index and case-study pages.

- Case-study main titles and group titles were tightened to normal spacing.
  Do not restore the older large `margin-top`/`padding-top` values.

### Verification actually performed

- `npm.cmd run docs:build` passed after every final change.
- Early in the session, Chrome measurements verified the desktop case-study
  article was geometrically centred and navbar typography matched across home,
  projects and a case page.
- Carousel interactions and route transitions were inspected in Chrome; the
  transition DOM contained the expected four loader circles at bottom centre
  and produced no console errors at that time.
- The last responsive heading/panel fix was manually tested by Raymond across
  the failing window sizes and confirmed fixed.
- Late in the session, Codex's Browser plugin updated from cache version
  `26.818.41509` to `26.825.41651` while its service still referenced the
  deleted older path. This prevented further automated Chrome screenshots.
  Diagnostics showed Chrome running, the extension enabled and the native-host
  manifest correct. This is a local Codex plugin-cache problem, not a site bug.

### Current working-tree reminder

Superseded: this work IS now committed and pushed as `4a86827`.
`PageTransition.vue` and `THIRD_PARTY_NOTICES.md` are intentional new source
files.

**`.vitepress/.temp/` was committed by mistake in `4a86827`** — 151 MB across
116 files, containing a second full copy of every video and poster. It is
generated SSR scratch, regenerated on every build. `.gitignore` now excludes it
and it has been untracked, so it will not recur.

The 151 MB remains in git history: `.git` is ~1.1 GB, past GitHub's 1 GB
recommended repository size. It does NOT affect the published site (`.temp`
never reaches `dist`), but every CI deploy clones it. Reclaiming it would need a
history rewrite (git-filter-repo or BFG) plus a force push — Raymond's call,
not something to do unprompted.


---

## Codex handoff — 30 August 2026, continued from Claude session

Claude ran low on credits mid-session. Everything below is uncommitted,
working-tree changes on top of the last pushed commit (`4a86827`). Raymond
commits himself — do not commit or push without him asking.

### State: `npm run check` passes, `npm run docs:build` is clean.

Verify before touching anything further:
```bash
npm.cmd run check          # content validator, see below
npm.cmd run docs:build     # must be clean
npm.cmd run docs:preview   # serves on :4173
```

### What was built this session, newest first

**4. Beams background (homepage only)** — `components/BeamsBackground.vue`.
Soft diagonal light beams behind every homepage section BELOW the hero.
Adapted from KokonutUI's Beams Background (MIT), rebuilt in Vue/Canvas2D,
recoloured onto the orange/blue palette. Rendered at 0.45x resolution plus a
small blur, upscaled by the browser, instead of the original's per-draw 35px
canvas filter, roughly 9x fewer pixels blurred for the same look.

- Real bug fixed twice: two DIFFERENT elements were painting an opaque
  fill over the canvas: `:root.hx-home .VPContent` (0-2-0 specificity, in
  `home-experiment.css`) and `.hx-section` / `.hx-section--band`. A first
  pass fix targeted a same-name-but-lower-specificity rule in `effects.css`
  and silently did nothing. Lesson: when an override does not work, grep the
  COMPILED dist CSS for every rule matching that selector and check which one
  actually wins. Do not assume the file you edited is the one that counts.
- Homepage hero (`.sr-hero`) is opaque and exactly one viewport tall, so the
  fixed canvas is naturally covered while the hero is on screen. No scroll
  listener needed.
- Verify: scroll the homepage past the hero, beams should be clearly visible
  (bright orange/blue wash) behind Featured Projects, About Me, Experience,
  Education, Contact. Interior pages must show the calmer dot field instead
  (see item 3), never beams.

**3. Signal dot field background (every page except homepage)** —
`components/BackgroundField.vue`. Adapted from ThreeUI's Signal Particles
(MIT, plain Canvas2D despite the library's name, no three.js anywhere).
Interference pattern of dots, orange/blue accent flecks, drift plus shimmer
plus flicker layered on top of the original's flat ripple.

- Shares a lifecycle module with the beams: `theme/canvas-background.js`
  (`mountCanvas()`). Read the comment at the top of that file: it documents
  a real bug. This component is mounted once by the layout and stays
  mounted; only the canvas swaps per route. Setup must be driven by a
  watcher on the route, never by `onMounted`, or anyone who lands on the
  homepage (field off) and clicks through gets a canvas that was never
  initialised: blank, and invisible even on a hard reload (that is how it
  shipped broken once already).

**2. Chromatic title assemble** — `theme/text-reveal.js` plus
`theme/icons.css` (bottom section). Big titles (case-study `<h1>`, the
Projects index title, homepage `.hx-title` sections, and the hero name
RAYMOND CHENG) assemble per character with an orange/blue fringe that
collapses as each letter lands. Adapted from ThreeUI's intro wordmark scene
(MIT); CSS keyframes here, not their JS timeline.

- Three real bugs found and fixed, all documented inline in
  `text-reveal.js`. Read the comments before touching this file.
  1. Characters used to rest in their finished state as a fail-safe, and
     the reveal trigger sat 10% up from the viewport bottom. Result: text
     painted fully, sat there, then snapped back to scattered and replayed
     once scrolled further. Raymond caught this visually.
  2. IntersectionObserver's first callback fires against pre-layout
     geometry, so on load every heading, including ones far below the fold,
     reported as on screen and revealed itself invisibly, off screen.
     Fixed by re-checking real `getBoundingClientRect()` at callback time.
  3. VitePress injects a header-anchor link containing a zero-width space
     inside every heading. The splitter was treating that as content: one
     page's `aria-label` was a single invisible character. The anchor is
     now explicitly excluded and re-appended untouched.
- The hero name's existing orange/blue chromatic ghost effect
  (`.sr-line::before` / `::after`, pseudo-elements reading `attr(data-t)`)
  had to move down onto each character span instead of the whole line.
  Those rules live in `home-experiment.css` (search HERO NAME), not in
  `ShowreelHero.vue`'s scoped style block: Vue-scoped selectors compile to
  a data-v attribute selector, which JS-created spans never carry, so they
  would never match there.
  Also fixed: the entrance animation for the status pill, role line, chips
  and buttons used `transform: translateY(...)` in its keyframes, which
  replaces `.sr-status`'s existing `transform: translateX(-50%)` centring.
  The pill sat about half its width off-centre during the whole entrance and
  snapped back when the animation ended. Fixed by animating the standalone
  `translate` property instead of `transform`, which composes rather than
  overwrites. This exact trap, an animation clobbering an unrelated
  transform on the same element, has now bitten this codebase three times.
  Check for it whenever adding a new animation to an already-transformed
  element.

**1. Animated Lucide icon set** — `theme/icons.js` plus `theme/icons.css`
plus `components/HxIcon.vue`. Replaced all 88 emoji on
`<ProjectPanel icon="...">` with real Lucide line icons (ISC licensed,
geometry inlined, no dependency added), each with a CSS-keyframe hover/open
animation from one of 10 shared families (spin, rings, draw, lift, drop,
nudge, glow, stack, tick, slide, beat, split). Mapped per section title, not
one-to-one from the old emoji: the old set had one emoji covering 17
unrelated sections.

### New authoring tooling (also this session, separate from the visual work)

Built because Raymond wants to hand future project pages to an AI with
minimal hand-holding:

- `CLAUDE.md` / `AGENTS.md` (repo root): auto-loaded instructions for
  whichever AI tool opens this repo. Read `CLAUDE.md` now if you have not.
- `project-context/authoring-a-case-study.md`: the full style contract,
  page skeleton, panel structure, the icon vocabulary, tag vocabulary,
  media rules, the 3 places a project must be registered.
- `project-context/templates/project-brief.md`: what Raymond fills in.
  `project-context/templates/case-study.md`: what a new page scaffolds from.
- `scripts/new-project.mjs` (`npm run new:project -- <slug>`): scaffolds a
  case-study page, registers a card on the index, creates media folders.
- `scripts/prepare-media.mjs` (`npm run media -- <slug>`): wraps ffmpeg,
  CRF 26, faststart, preserves audio, generates posters. Never hand-write
  ffmpeg flags for this repo; use this script.
- `scripts/check-content.mjs` (`npm run check`): validates icon names, tag
  vocabulary, media/poster existence, duplicate carousel ids, hardcoded
  base paths, frontmatter, retired CSS classes. Exits non-zero on error.

### Traps already logged elsewhere, still true, do not re-discover them

See the existing Traps section above this one in this same file, and
`project-context/architecture.md`. Nothing in this session invalidated any
of those; two new ones were added this session (the VPContent specificity
trap and the transform/translate clobber trap), both documented inline in
the CSS at the point they bit, and summarised above.

### Sensible next steps for Codex

1. Nothing is currently broken as far as Claude's testing found; this is a
   feature-addition handoff, not a bug-fix handoff. Re-verify anyway,
   several of the fixes above turned out to have a second hidden layer on
   the first pass.
2. If Raymond reports the beams or dot field look wrong on a screen Claude
   did not test (very wide, very narrow, reduced-motion), start by grepping
   the COMPILED dist CSS for the selector in question rather than trusting
   source file edits. See the VPContent lesson above.
3. `project-context/decisions.md` still has unreviewed entries from earlier
   sessions per the original handoff, unrelated to this session's work.

---

## Codex handoff - 30 August 2026, beam tuning and Projects header

This is the newest continuation after Claude's background/authoring-tool pass.
Raymond said he will commit the completed working tree himself. Do not commit or
push unless he explicitly asks.

### Homepage beam background: final approved implementation

`theme/components/BeamsBackground.vue` was tuned through several visual passes:

- Beam colours now use the exact design tokens as RGB values: orange
  `#ff8c1a` and cobalt blue `#2e62d9`. The former HSL lightness plus hue jitter
  produced broad tan and powder-blue washes that did not match the site.
- Per-beam opacity is `0.14-0.32`, keeping the moving colour behind the content
  rather than competing with it.
- The final idle speed is deliberately fast: `5-8` CSS pixels per frame at the
  capped 30fps (about `150-240px/s`). This is not accidental; Raymond asked for
  the former scroll-boosted pace to become the default idle pace.
- Scrolling adds a velocity-sensitive `1.6x-2.8x` multiplier. The multiplier
  ramps toward its target at `0.34` per frame, releases toward idle at `0.08`
  per frame, and begins releasing 110ms after the last scroll event. The pulse
  phase receives a smaller proportional boost so the whole field feels faster.
- The passive scroll listener is installed only while the homepage canvas is
  active and is removed by the same route-driven teardown as `mountCanvas()`.
  Preserve that cleanup when editing the effect.

Chrome testing confirmed visible idle movement within a 350ms sample, faster
movement while scrolling, smooth release, no console errors, and correct canvas
swapping on Projects -> Home (`hx-field` removed and `hx-beams` restored).

### Projects index header

The top of `projects/index.md` now uses one `.projects-page-heading` flex row:

- `.projects-page-heading-copy` contains the real `<h1>` plus the subtitle.
- The subtitle sits `0.45rem` below the title instead of inheriting the old
  large Markdown-heading/header-row gap.
- The Home button is the second flex item, aligned with the title block. It is
  no longer absolutely positioned independently from the heading.

Important bug and final fix: the Home button's orange hover fill is an
absolutely positioned `::after` in `effects.css`. The first flex-row pass made
the anchor `position: static`; its pseudo-element then used the whole page as
its containing block and appeared as a huge orange wedge on the left that swept
toward the middle on hover. The final rule is
`.projects-page-heading .back-home2-button { position: relative; }`. Do not
change it back to `static`. Chrome screenshots verified the left edge is clear
both at rest and while the Home button is hovered; the orange sweep remains
clipped inside the pill.

### Verification and local notification record

- `npm.cmd run check`: no errors; three existing warnings remain (two raw HTML
  base-path warnings and the `SFX` tag vocabulary warning).
- `npm.cmd run docs:build`: clean.
- `git diff --check`: clean apart from Windows LF/CRLF notices.
- Desktop Chrome screenshots and hover/route interaction checks: clean, no
  console errors.
- `project-context/notify.local.md` has been updated to Raymond's newer Discord
  webhook. It is gitignored and must remain local; never copy the credential
  into tracked documentation or a public artifact. Follow that file's Tier 1 /
  Tier 2 rules and include the top-level user mention so Discord actually pings.


---

## Codex handoff — 30 August 2026, i18n session (Claude running low on tokens)

Claude is handing off mid-session on Chinese localisation. Everything below is
uncommitted. Raymond commits himself — do not commit or push without him
asking. **Read `project-context/i18n-state.md` first** — it is the detailed
companion to this section and stays up to date independently of this file.

### Verify the starting state before touching anything

```bash
npm run check       # structure + locale parity   -> must say "No errors"
npm run check:zh    # Chinese terminology audit    -> must say "All clean"
npm run docs:build  # -> must be clean
```

If any of those three fail, something regressed after this handoff was
written — stop and diagnose before adding new work on top.

### What exists right now

Full trilingual site: `/` English (root locale) · `/zh/` Simplified ·
`/zh-Hant/` Traditional (Taiwan). All 11 pages (home + projects index + 8 case
studies) exist in all three locales, ~20,000 words of translation, written
independently per locale (never auto-converted between Simplified and
Traditional — see "Why independent, not converted" below).

### New files, and what each one is for

| File | Purpose |
|---|---|
| `theme/i18n.js` | UI-string dictionary. `useI18n()` returns `{ t, locale, localePath }`. Keys are English sentences; a missing translation degrades to English rather than to a dotted id. |
| `theme/routes.js` | `isHomePage()` / `stripLocale()`. The ONE place allowed to compare a route to `'index.md'`. |
| `theme/components/NavFlyout.vue` | Shared always-visible dropdown (click to open, Escape/outside-click to close). Used by both controls below. |
| `theme/components/LanguageSwitcher.vue` | Language dropdown. Preserves the current page and `#hash` when switching. |
| `theme/components/CvMenu.vue` | CV dropdown: `English` (real PDF) / `简体中文` / `繁體中文` (both disabled, show "尚未提供", until the PDFs exist). |
| `scripts/check-chinese.mjs` (`npm run check:zh`) | Terminology + locale-convention audit for Chinese pages, see below. |
| `project-context/i18n-glossary.md` | Locked terminology per locale — the reason the translation does not read as machine output. |
| `project-context/i18n-state.md` | Full current-state doc, more detailed than this section. |
| `zh/` , `zh-Hant/` | The translated content trees, mirroring `index.md` and `projects/*.md`. |

### Files changed, and why

- **`.vitepress/config.mjs`** — `locales{}` block (root/zh/zh-Hant), per-locale
  Noto Sans SC/TC font loading, `hreflang` tags. CV entry removed from the
  plain `nav` array (it is now `CvMenu.vue`, not a flat link).
- **`theme/effects.css`** — appended, do not scroll past assuming it is only
  the old content: (1) CJK font-stack overrides under
  `:root:lang(zh-Hans|zh-Hant)`, Latin faces listed FIRST so mixed-script text
  keeps its original typography; (2) `.hx-flyout*` styling for both navbar
  dropdowns, including the mobile short-label / no-caret rules that fix a
  horizontal-scroll bug (see Traps).
- **`theme/index.js`** — mounts `LanguageSwitcher` + `CvMenu` via
  `'nav-bar-content-after'`.
- **`ShowreelHero.vue`, `ScrollControls.vue`, `MediaCarousel.vue`,
  `PageTransition.vue`** — wired to `useI18n()`. `PageTransition.vue` also
  strips the locale prefix before resolving the destination label, or every
  Chinese route flashed its English name during the transition.
- **`TagRow.vue`** — Chinese tag vocabulary (战斗/戰鬥 etc.) added to
  the existing ENGINE/DISCIPLINE sets so Chinese tag chips get the right
  orange/blue colour instead of falling through to grey.
- **`scripts/check-content.mjs`** — now also validates locale card media
  (`image`/`hoverVideo` paths in `zh/projects/index.md` and
  `zh-Hant/projects/index.md`), because that gap let a real bug through once
  (see "Real bugs found" below).
- **`BackgroundField.vue`, `BeamsBackground.vue`** — route check switched from
  `relativePath === 'index.md'` to `isHomePage()`. This predates the i18n
  session but is part of the same correctness fix and is mentioned here so it
  is not mistaken for unrelated drift.

### Why independent translation, not conversion

Simplified → Traditional character conversion is detectable by any native
reader, and for a programmer's portfolio it is glaring, because the CORE
VOCABULARY differs — not the characters, the words:

| English | 简体 (CN) | 繁體 (TW) |
|---|---|---|
| program/code | 程序 | 程式 |
| software | 软件 | 軟體 |
| project | 项目 | 專案 |
| object | 对象 | 物件 |
| interface | 接口 | 介面 |

Both `zh/` and `zh-Hant/` were written from the English source independently,
governed by `project-context/i18n-glossary.md`. **Never machine-convert one
Chinese locale from the other** — it will reintroduce exactly this defect.

### The Chinese QA tool — how it works and its known limits

`npm run check:zh` covers 2 of the 7 MQM (Multidimensional Quality Metrics,
the standard translation-QA framework) dimensions — the two a script can
actually decide:

1. **Character-set leakage** — a hand-verified list of ~250 character pairs
   that exist in ONLY one script (e.g. 這/这, 個/个). Flags a Simplified
   character in a Traditional file or vice versa.
2. **Terminology leakage** — ~25 word pairs from the glossary
   (程序/程式, 软件/軟體, 项目/專案…). Flags a valid Chinese
   word used in the WRONG market — the defect a spell-checker cannot see.

**Known false-positive traps already handled, do not re-add them:**
- `台`/`臺`, `秘`/`祕`, `著`/`着` are context-dependent, not
  script-dependent (Taiwan writes 平台 with 台; 臺 is only for place
  names). They were removed from the character table after producing false
  positives on every page.
- `程序化生成` ("PROCEDURAL generation") is correct Taiwanese —
  `程序` there means "procedure", not "code". `TERM_PAIRS` has an explicit
  `except` list for this; if you add new terminology pairs, check whether the
  "wrong" string is also a legitimate different word in some compound before
  assuming it is an error.

The tool does NOT check accuracy, style, audience appropriateness, linguistic
convention or markup (the other 5 MQM dimensions) — those need a human native
reader. The `zh-review` HTML comments in the translated files mark the
judgement calls most worth that reviewer's attention; `grep -r "zh-review"
zh/ zh-Hant/` finds all of them.

### Real bugs found and fixed this session — read before assuming something is fine

1. **Fabricated media paths.** Both Chinese `projects/index.md` files had
   invented video paths for the `twin-sync` card; the English source has empty
   strings (that card genuinely has no media). Fixed, and
   `check-content.mjs` now checks locale card media so this class of error
   fails the build instead of only showing as a browser console 404.
2. **Mobile navbar overflow.** The language switcher + CV menu + hamburger did
   not fit inside a 390px viewport, causing horizontal scroll. Fixed with a
   short-code label (`EN`/`简`/`繁`) and no caret below 768px — verified
   `scrollWidth` 375 ≤ 390 after the fix. If you touch `.hx-flyout` CSS, re-run
   this check at 390px width.
3. **Route-transition label leaked English.** The overlay resolved the page
   name from the slug BEFORE stripping the locale prefix, so every Chinese
   route showed its English name for the duration of the transition. Fixed in
   `PageTransition.vue`; translations are `route:<slug>` keys in `i18n.js`.
4. **CJK fonts.** None of Bebas Neue / Barlow Condensed / Archivo Black /
   Inter contain CJK glyphs — every Chinese heading would silently fall back
   to an arbitrary system font. Fixed with Noto Sans SC/TC loaded PER LOCALE
   (verified: English pages load 0 CJK stylesheets). If you add a new Latin
   display font anywhere, check whether Chinese pages need a matching
   fallback added to the `:lang()` blocks in `effects.css`.

### Sensible next steps

1. **Nothing is currently broken** as far as Claude's testing found (the three
   validators above all pass). Re-verify anyway before building on top — several
   fixes this session turned out to have a second hidden layer on first pass.
2. **Two Chinese CV PDFs are the main open item.** Raymond needs to produce
   them; enabling one in `CvMenu.vue` is a one-line change (`file: null` →
   the path) once it exists in `public/`.
3. If Raymond reports something not translated, check whether the string
   lives in `theme/i18n.js` (UI chrome) or in the markdown itself (page
   content) before assuming which file needs editing.
4. The technical/recruiter editorial review is now complete; see the Codex
   handoff below. A later native-speaker pass is optional preference tuning,
   not a correctness blocker.

## Codex handoff — Chinese localisation editorial QA — 30 August 2026

### Scope and outcome

Codex completed the second, human-oriented review requested by Raymond. All 20
translated Markdown pages (10 Simplified Chinese and 10 Taiwan Traditional
Chinese) were compared with the English source for technical meaning,
recruiter readability, locale conventions, and consistent product vocabulary.
No Chinese CV was created or enabled; Raymond explicitly deferred both PDFs.

The detailed editorial record is `project-context/i18n-review.md`. The locked
term table is `project-context/i18n-glossary.md`. Read both before changing
Chinese copy; this pass deliberately did not use Simplified/Traditional
character conversion as a translation method.

### Important terminology decisions

- Program, source code, and script are separate concepts:
  `程序 / 代码 / 脚本` (CN), `程式 / 程式碼 / 腳本` (TW).
- The recruiter-facing role is `游戏玩法程序员` in CN and
  `遊戲程式設計師` in Taiwan Traditional.
- Keep the searchable English term on first use and add a short explanation:
  `Coyote Time（跳跃宽限／跳躍寬限）` and
  `Hit Stop（命中停顿／命中停頓）`. Later uses may use the Chinese short form.
- `UI Toolkit` is Unity's product name. Unreal case studies now use generic
  `Widget UI` / `UI Widget`; do not reintroduce `UIToolkit Widget`, and do not
  claim UMG unless the source proves that technology was used.
- Mechanical calques such as `生产级`, `正式級`, `性能自觉`, and `效能自覺`
  were replaced with recruiter-natural claims such as `可投入正式项目／專案`
  and `注重性能／效能`.
- Media counters use `项／項`, not the image-only classifiers `张／張`, because
  a carousel can contain images, video, or embeds.

### Safeguards changed

`scripts/check-chinese.mjs` now distinguishes program/code/script and audits
additional market-specific pairs such as class, quality, and repository. It
also rejects the known bad phrases `顿帧／頓幀`, `土狼时间／土狼時間`, the
machine-like production/performance calques, and `UIToolkit Widget`.

Do not collapse those rows back into one program/code mapping. Also preserve
the existing exceptions for legitimate compounds such as Taiwan
`程序化生成` (procedural generation).

### Live Chrome verification

- Language switching preserved the active case-study route from Simplified to
  Traditional Chinese.
- `lang`, Noto Sans SC/TC font resolution, revised terminology inside collapsed
  panels, projects search UI, and formal-project wording were inspected in the
  rendered DOM.
- Home, projects index, and Path to Power were checked at desktop width and at
  390 × 844. There was no page-level horizontal overflow; compact locale labels
  rendered as `简` / `繁` on mobile.
- Screenshots were visually inspected. Chrome logged no warnings or errors.

### State for the next agent

Everything remains uncommitted; Raymond commits. The only intentionally open
localisation deliverables are the two Chinese CV PDFs. An optional native-
speaker preference pass may adjust personal tone, but the terminology and
recruiter-comprehension review is complete and documented. Re-run the commands
below before changing this state:

```bash
npm run check
npm run check:zh
npm run docs:build
```

Final results on 30 August 2026:

- `npm run check` — passed with no errors. Its three existing warnings are the
  two intentional raw-HTML base paths and the pre-existing grey `SFX` tag.
- `npm run check:zh` — all 20 Chinese files clean.
- `npm run docs:build` — production build completed successfully.

### Additional pre-read audit

Raymond asked whether anything mechanical remained before his own reading. The
extra audit found and fixed three items:

1. The Simplified and Traditional project indexes used valid but different
   preview clips from English for `forgiving-mechanics` and `elder-escape`.
   Both now match English. `check-content.mjs` compares `image` and
   `hoverVideo` by card id, so existence alone can no longer hide this drift.
2. `4 年+` on both home pages was changed to the natural `4 年以上`.
3. On English-only utility pages such as `THIRD_PARTY_NOTICES`, the custom
   language switcher previously manufactured nonexistent Chinese paths. It now
   falls back to the chosen locale's home page; real translated pages still
   preserve their exact route. `routes.js` owns this decision through
   `hasLocaleVariant()`.

Additional checks passed: English/locale URL and media parity, rendered-prose
leakage and punctuation scan, 32-page `lang`/description/alt/duplicate-id
audit, Chrome interaction test, clean Chrome console, the two standard checks,
and a production build. VitePress itself still emits a CSS-hidden duplicate
translation menu on the notices page with theoretical locale paths; users
cannot see or activate it, while the visible custom menu is verified safe.

## Codex handoff — production UI and showreel performance — 30 August 2026

### What changed

- `ScrollControls.vue`: the tooltip `data-label` attributes now pass through
  `t()`. Verified production DOM values are `回到顶部 / 跳到底部` for Simplified
  Chinese and `回到頂部 / 跳到底部` for Traditional Chinese.
- `effects.css`: the CV dropdown trigger now uses the same typography and open
  visual treatment as the main nav while retaining its document icon, caret,
  focus state, and dropdown. Production computed values match the nav at
  16 px, weight 600, uppercase, 1.44 px tracking, transparent background, and
  no pill border.
- `MediaCarousel.vue`: fixed the English accessible arrow labels from
  `Previous media inMedia gallery` to `Previous media in Media gallery` while
  preserving the no-space Chinese colon construction.

### The GitHub-Pages-only giant panel bug

The giant icons and wrapped panel titles were not a responsive-layout defect.
`effects.css` ended with an unmatched extra `}`. Vite dev served `icons.css`
as a separate stylesheet, hiding the problem locally; the production build
concatenated the files, so Chrome discarded the following `.hx-icon` sizing
rules. This is why the live deployment measured the first icon at roughly
126×126 px while local measured 24.15×24.15 px.

The extra brace is removed. In the rebuilt production CSS, `.hx-icon` resolves
to 24.15×24.15 px and the first panel title resolves to 21 px on one line.
This is the second reminder not to trust only the dev server for stylesheet
bugs: inspect the emitted `dist/assets/style.*.css` and run `docs:preview`.

### Homepage showreel optimisation

The original `banner.mp4` was 1440×720 H.264 at 60 fps, 12.69 MB, with uneven
keyframe gaps approaching four seconds. The MP4 already had its `moov` atom at
the front, so `faststart` was not the missing fix. The expensive decode rate,
long random-seek distance, metadata-only preload, and multiple rapid seeks from
mouseenter + focus + click were the material problems.

The new pipeline is:

- `banner.mp4`: 1440×720, H.264 High, yuv420p, 30 fps, 53.33 s, 13.95 MB,
  ~2.09 Mbps.
- `banner-mobile.mp4`: 960×480, same codec/profile/pixel format, 30 fps,
  53.33 s, 8.20 MB, ~1.23 Mbps.
- Both use `+faststart`, a two-second GOP, and explicit keyframes at every
  `SHOWREEL_CONFIG.chapters[].start` value. Audio was removed because the hero
  is muted and the old track contained no useful audio.
- Desktop SSIM against a 30 fps conversion of the source measured 0.994069.
  This deliberately spends a little more desktop bandwidth to keep the
  front-page showcase crisp while cutting decode work in half; mobile saves
  about 35% versus the old one-size source.
- `ShowreelHero.vue` now selects the mobile source with
  `media="(max-width: 767px)"`, uses `preload="auto"`, tries `fastSeek()` with
  an exact `currentTime` fallback, ignores redundant seeks, debounces hover
  intent by 160 ms, cancels pending previews, and no longer seeks on focus.
  Keyboard selection still goes through the existing arrow-key handler.

Do not replace the responsive sources with a `<link rel="preload" as="video">`:
current browser support is not reliable enough and this reel is far above the
small-file size where that technique is recommended. H.264 was kept for broad
hardware decoding; a WebM/VP9 variant should only be added after testing
`MediaCapabilities.decodingInfo()` on representative devices.

### Verification and state

After all edits:

```text
npm run check       — All clean (8 case studies + projects index)
npm run check:zh    — All clean (20 Chinese files)
npm run docs:build  — production build completed
git diff --check    — clean
```

Chrome production-preview checks at 1440×1000 confirmed the fixed panel
dimensions, matching CV/nav typography, working CV dropdown, no page-level
horizontal overflow, correct carousel accessible label, correct Chinese
tooltip values, desktop `banner.mp4` selection at 1440×720, readyState 4, and
smooth chapter changes once buffered. `ffprobe` verified both installed and
built video assets. Everything remains uncommitted; Raymond owns commits.
