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
