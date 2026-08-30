# Design decisions taken on Raymond's behalf

Every choice made without him in the room, with what to say to reverse it.
None of these are locked in — they are listed so they can be argued with.

(Previously `decision-log.local.md`, which was gitignored and so would not have
survived a push. It contains no secrets, so it is tracked now. The only file
that must stay gitignored is `notify.local.md`, which holds a live webhook.)

---

## A-1 · Navbar text colour shifted slightly
**What changed:** VitePress chrome text was `#dfdfd6` (warm off-white, a stock
VitePress dark value). Mapping `--vp-c-text-1` onto `--hx-ink` makes it
`#eef2f9` (the site's own cool near-white).
**Why:** it is the whole point of the token bridge — the navbar now uses the
same ink as the page it sits on, instead of a slightly warm foreign value.
**Impact:** imperceptible in isolation; the only real pixel change on the
homepage from Phase A. Layout unchanged.
**To revert:** "keep the old navbar text colour" → hardcode
`--vp-c-text-1: #dfdfd6` in `style.css`.

## A-2 · Semantic state colours pulled toward the palette
**What changed:** VitePress `tip` blocks now use the site blue, `warning` uses
the site orange, and `danger` uses a warm red `#ff6a4d` instead of the stock
red/yellow/indigo set.
**Why:** the brief allows only orange and cool blue. Danger keeps a distinct red
because a warning that reads as a link is a usability failure, not a style one.
**To revert:** "put the default VitePress state colours back" → restore the
`--vp-c-tip/warning/danger` blocks in `style.css`.

---

## B-1 · Panel titles became props, and `<strong>Category</strong>:` became an eyebrow
**What changed:** `<span class="section-title">✮ <strong>Movement</strong>: Forgiving Mechanics</span>`
is now `<ProjectPanel icon="🎮" eyebrow="Movement" title="Forgiving Mechanics">`.
**Why:** the bold half was a category label doing structural work with inline
markup. As a prop it can be styled consistently and never drifts.
**To revert:** "put the bold category back inline" — the eyebrow prop can be
dropped and the text folded into `title`.

## C-1 · Body text weight raised from 175 to 400
**What changed:** `.project-text` was `font-weight: 175` — thinner than Inter's
Thin. On a near-black ground it rendered washed out and picked up a blue cast
from the ink token, which read as a colour bug but was a weight problem.
**Also:** measure changed from `max-width: 68rem` (~1088px, far past a
comfortable line length) to `74ch`.
**To revert:** "make the body text thin again" → `font-weight: 175`.

## C-2 · Meta labels recede by colour, not thinness
**What changed:** `.info-line-label` was `font-weight: 150`. Now 500, uppercase,
letter-spaced, in the dim ink token.
**Why:** it still recedes behind the value, but is legible.

## C-3 · Rainbow gradients replaced
**What changed:** `.info-line-value` (purple→red→green animated gradient text)
is now solid orange. `.pill-accent` ("Featured") went magenta→purple gradient to
solid orange. Card hover no longer repaints every tag purple.
**Why:** the brief allows orange and cool blue only. Gradient text also makes
contrast unmeasurable.

## C-4 · Project cards adopted the homepage treatment
**What changed:** the radial gradient that washed near-white across each card's
top-left is gone; cards are now flat panel + hairline border + clipped corner +
orange edge on hover, matching the homepage.

## C-5 · Heading decorations standardised
**What changed:** the mixed set (`✮ ☑︎ ⚔︎ 𓆩𓆪` plus scattered emoji) became ONE
emoji per section type: 🎯 summary · 🎮 gameplay · 🏗️ architecture ·
⚙️ technical · 📈 results · 🔊 audio · 💾 data · 🔗 links · 👥 team · 💡 rationale.
Heading TEXT was not changed.
**Also:** `## - - - --->Features<--- - - -` renders as plain "Features" in the
sidebar; the hieroglyph brackets are gone from centred titles.
**To revert:** the mapping lives in one table in the conversion script; any
individual panel's `icon=` can be edited directly.

## C-6 · Typos fixed
"Quick Overiew" → "Quick Overview" (twice), and "I are the lead sound designer"
→ "I am the lead sound designer" in star-platinum-mod.md.

## C-7 · Nested `<p>` split (star-platinum-mod)
A `<p>` contained another `<p>`, which is invalid — browsers auto-close the
outer one, so SSR and client disagreed. Now two sibling paragraphs. Same words.

## D-1 · Released VitePress's 320px body floor
`body { min-width: 320px }` is a VitePress default. On a 320px window with a
15px scrollbar the viewport is 305px, so every page scrolled sideways. Released
below 340px only.

## D-2 · Small contrast fixes
`.sr-chapter-index` (the inactive reel numbers) went from 40% to 62% white —
3.72:1 to ~4.9:1. Code blocks now inherit the page ink so low-emphasis tokens
stay above threshold.

---

# Known, not fixed

**Hydration mismatch on 2 pages** (`forgiving-mechanics`, `star-platinum-mod`).
Traced into VitePress's OWN local-nav component (`data-v-6b867909`): its SSR
output uses `DIV`s where the client renders `SPAN`s. Not your content, not
visible to users, and the page renders correctly. `ue5-fps` — which had this
before — is now clean, fixed as a side effect of the component conversion.

---

# Effects pass (added after the first review)

## E-1 · Spotlight, reveal moved site-wide
`.hx-glow` was on ProjectPanel but its pointer listener lived in
`HomeExperiment.vue`, which only mounts on the homepage — so the effect was
permanently invisible on project pages. Both the spotlight and the scroll-reveal
observer now live in `theme/interactions.js` and run everywhere. The reveal gate
class moved from `.hx-root` to `:root` for the same reason.

## E-2 · Effects added (theme/effects.css)
Top sweep bar on panels and cards · button shine sweep · tag hover lift ·
carousel tab sweep · panel open rise + icon lean · filter chips using the hero's
engine-chip corner brackets · search focus ring · card media push-in (1.04) ·
eyebrow dash on case-study h3 · project-meta accent rail · diamond marker on
group titles · doc-link underline sweep · one consistent focus ring.

## E-3 · Scroll reveal applied to structure, not every panel
Marked the 21 carousels, 18 group titles and the project cards — not all 88
panels. Revealing every panel on a long case study means content that "is not
there yet" when you scroll to it, which reads as sluggish.
**To revert:** "reveal everything" → add data-hx-reveal to ProjectPanel's root.

## E-4 · Card hover video bug fixed
`image` and `hoverVideo` are the same file on every card, but the markup used
`v-if`/`v-else` to swap between them — tearing down a playing video and building
an identical one that started from nothing at `preload="none"`. That is why the
card went black. Now one element that restarts from 0 on hover, as asked.

---

# Layout pass (case-study rail + card fixes)

## L-1 · Fact strip moved to a sticky left rail (>= 1560px only)
The doc column is centred, leaving ~320px dead on the left. Above 1560px the
project fact strip moves there and sticks while you read. Below that it returns
to the normal stacked flow.
**Breakpoint is 1560, not 1400:** the pull into the gutter is a fixed distance
while the gutter shrinks with the viewport — at 1400 the rail landed off-screen
at x=-22.
**To revert:** "put the status block back above the title" -> delete the
`@media (min-width: 1560px)` block in doc.css.

## L-2 · `.VPContent` overflow changed — this fixed sticky SITE-WIDE
VitePress ships `overflow: hidden auto` on `.VPContent`. `hidden` makes it a
scroll container, so every `position: sticky` inside the content area silently
did nothing (verified with a bare test element: it moved 1:1 with the scroll).
Changed to `overflow-x: clip; overflow-y: visible` — clips identically without
creating a scroll container. Re-verified no horizontal overflow returned at
320/390/768/1024/1440/1600/1920.

## L-3 · Page titles centred
`.page-title-center` was applied in every case-study file but had NO CSS at all,
so the class did nothing. Now centred, with the site's gradient rule beneath.

## L-4 · Project cards: no entry animation
Tried twice, removed both times, documented in effects.css:
scroll-reveal left rebuilt cards invisible below the fold; a CSS entry animation
broke because Vue reuses keyed nodes, so nth-child shifts on every filter change
and re-applies the animation's from-state (opacity version left cards faded;
transform version fought the hover transform). Cards now appear instantly and
the hover carries the motion.

## L-5 · Card border moved to a pseudo-element
A real `border` was being sliced by the card's notch clip-path, so only some
edges showed and they snapped instead of fading. Drawn by `::after` now, all
four edges fading together, with the spotlight on its own span because both
pseudo-elements were taken.

---

# Codex continuation decisions — 29 August 2026

## L-6 · Desktop case-study article is centred independently of the outline
**What changed:** at `>= 1440px`, the VitePress doc container uses three balanced
columns: `256px 784px 256px`. The article occupies the middle and the outline
occupies the right lane.
**Why:** VitePress normally centres article + outline as one unit, leaving the
article itself 128px left of the viewport centre and a visibly larger empty
area beyond the outline.
**To revert:** "use VitePress's default doc alignment" -> remove the
`@media (min-width: 1440px)` `.VPDoc.has-aside` grid block in `doc.css`.

## L-7 · Group-heading separation is attached to the first panel
**What changed:** below 1560px, the first `.hx-panel` after
`h1.section-title-center + h2.outline-only` gets `margin-top: var(--hx-5)`.
The structural group titles also opt out of translate-based scroll reveal.
**Why:** the condensed display font can visually escape its CSS line box under
window resizing/non-native scaling. Because panels are isolated opaque stacking
contexts, they painted over the bottom of the heading. Moving the actual panel
box is deterministic; adding more heading margin alone was not.
**To revert:** "remove the compact heading protection" -> remove the
`@media (max-width: 1559px)` group-title/panel rules in `doc.css`. Expect the
overlap shown in Raymond's resize screenshots to return.

## M-1 · Carousel side arrows wrap instead of disabling at the ends
**What changed:** translucent previous/next controls sit over the media stage;
previous from slide 1 selects the last slide and next from the last selects 1.
**Why:** continuous browsing is faster and avoids visually dead controls.
**To revert:** "do not wrap carousel arrows" -> clamp in `selectPrevious` /
`selectNext` and add disabled states at the endpoints.

## M-2 · Media number selection must never move the page
**What changed:** media tabs use `@click.prevent="selectSlide(i)"` plus explicit
Enter/Space handlers. They are labels controlling radios, not anchors.
**Why:** the old interaction behaved like hash navigation and unexpectedly
changed scroll position on long case studies.

## N-1 · Navbar typography is global
**What changed:** uppercase Barlow Condensed menu/title typography moved from
homepage-scoped rules into global `style.css`.
**Why:** the homepage navbar had changed while projects and case pages retained
the old type treatment.
**To revert:** "use old typography off the homepage" -> move those nav/title
rules back under the homepage root class.

## T-1 · Route transitions are route-only and preserve existing hooks
**What changed:** `PageTransition.vue` chains, rather than overwrites,
`onBeforeRouteChange`, `onBeforePageLoad` and `onAfterRouteChanged`. Same-page
hash links do not animate.
**Why:** section navigation should be immediate, and `lazy-video.js` plus
`interactions.js` already depend on route hooks.
**To revert:** "remove page transitions" -> remove the `PageTransition` import
and `layout-top` slot from `theme/index.js`, then delete the component.

## T-2 · Midnight sky replaced the gradient/speed-line transition background
**What changed:** the transition uses Kiranmayee Abbireddy's Uiverse midnight
sky pattern in full: 3 star layers, 3 meteors and a crescent moon.
**Why:** Raymond supplied the exact visual and requested it replace the current
background.
**To revert:** "restore the old transition background" -> replace the
`.uiverse-midnight-sky` markup/CSS in `PageTransition.vue` with a background of
choice. Keep the wipe container and route-hook logic.

## T-3 · Four-dot loader timing and decorations
**What changed:** Li-Deheng's four-dot loader sits bottom-centre, loops at
`0.72s`, fades/slides in over `0.16s` and fades/slides out over `0.2s`.
**Rejected:** a `0.52s` loop was too fast. The two slash bars, centre line and
corner lines were removed completely; Raymond described them accurately as
"just lines", not a useful anime effect.
**To revert:** "change loader speed" -> edit `--animation` and its stagger
delays in `PageTransition.vue`. Do not re-add the slash markup unless Raymond
explicitly asks.

## T-4 · Third-party code notices are tracked
Both Uiverse elements are MIT licensed. Their copyright/source notices and the
full MIT text are in `/THIRD_PARTY_NOTICES.md`; source comments in
`PageTransition.vue` point there. Do not delete the notice while the copied
code remains.

---

# Codex continuation decisions - 30 August 2026

## B-1 - Homepage beams use exact token colours, not HSL variants
**What changed:** beam gradients alternate exact `#ff8c1a` and `#2e62d9` RGB
values at `0.14-0.32` opacity. Hue jitter and fixed 68% HSL lightness were
removed.
**Why:** the old conversion made orange look tan and blue look powdery across
large blurred areas; the exact accents fit the near-black navy system.
**To revert:** "restore the softer HSL beam colours" -> restore hue storage and
the HSLA gradient in `BeamsBackground.vue`. Expect the tan/washed-blue look.

## B-2 - Former scroll speed is the normal beam speed
**What changed:** idle beam speed is `5-8px/frame` at 30fps. Scroll input adds a
velocity-sensitive `1.6x-2.8x` multiplier with a fast ramp and smooth release.
**Why:** Raymond repeatedly asked for clearly visible movement and explicitly
approved treating the previous boosted pace as idle.
**To revert:** "make the beams calm again" -> lower `IDLE_SPEED_MIN/MAX`. Keep
the scroll multiplier, release easing and listener teardown intact.

## P-1 - Projects title, subtitle and Home action form one header row
**What changed:** `projects/index.md` uses `.projects-page-heading`; the title
and subtitle are grouped on the left and the Home button is a flex item on the
right.
**Why:** the subtitle had an oversized gap below `PROJECTS`, and the independently
positioned Home button did not align reliably with the heading.
**To revert:** "restore the old Projects header" -> restore the Markdown
`# Projects`, separate `.projects-header-row`, and absolute Home anchor. This also
restores the old spacing problem.

## P-2 - The flexed Home button must remain positioned
**What changed:** `.projects-page-heading .back-home2-button` is
`position: relative`, not `static`.
**Why:** its orange `::after` sweep is absolute. Without a positioned button it
attaches to the page and creates a giant animated orange wedge.
**To revert:** there is no useful visual reason to revert this while the
`::after` sweep exists. If the sweep is removed entirely, `position: static`
becomes safe again.
