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
