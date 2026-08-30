# Authoring a case study

The style contract for `projects/*.md`. Follow it and a new page is
indistinguishable from the nine that exist.

Run `npm run check` before you call a page finished — it mechanically enforces
roughly half of what is below.

---

## The five-minute version

```bash
npm run new:project -- my-game     # scaffolds page + card + media folders
# drop raw capture into media-src/my-game/
npm run media -- my-game           # encode to CRF 26 + generate posters
# write the page: fill every TODO
npm run check                      # icons, tags, media, wiring
npm run docs:dev                   # look at it
```

---

## Page skeleton

Order is fixed, because the outline in the right rail is generated from it and
readers scan case studies in this sequence.

1. **Frontmatter** — `layout: doc`, `title`, `description`.
2. **Back link** — `<a href="../projects/" class="back-projects-button">`.
   Exactly this class. `back-home-button` is retired.
3. **Fact block** — `.project-info-row` with three `.info-line` rows: Status,
   Engine, Team. At ≥1560px this becomes the sticky left rail, which is why it
   must come *before* the title and must stay three rows.
4. **Title** — `# Title {.page-title-center}` followed by a `-------` rule.
5. **Lead paragraph** — `<p class="project-text">`, two or three sentences.
6. **Hero carousel** — `<MediaCarousel id="<slug>-hero" …>`.
7. **Group sections** — `## Name {.outline-only}` then the panels under it.

### Group headings

`{.outline-only}` renders the heading into the right-hand outline but hides it
visually; the visible divider is drawn by CSS. Use the same four groups unless
the project genuinely needs different ones:

`General` · `Highlight Features` · `Technical Deep Dive` · `Extras`

Never leave an empty `##`. A bare heading still draws its gradient rule, which
looks like a rendering bug — this shipped once and had to be fixed in four
files.

---

## Panels

```html
<ProjectPanel icon="target" eyebrow="Movement" title="Forgiving Mechanics" open>

markdown content, blank line above and below

</ProjectPanel>
```

| prop | notes |
|---|---|
| `icon` | **Lucide name**, never an emoji. See the vocabulary below. |
| `eyebrow` | Optional category shown before the title in orange caps. |
| `title` | Escape `&` as `&amp;`. |
| `open` | One per page — the recruiter summary. Nothing else. |
| `variant="mini"` | Nested sub-section. Quieter, smaller icon. |

**Blank lines around the content are required.** markdown-it stops parsing
markdown inside an HTML block and resumes after a blank line; without them the
body renders as literal text.

A good panel is `**The Problem:**` → `**The Solution:**` → code → `**Result:**`.
That shape is what makes it read as engineering rather than a feature list.

---

## Icon vocabulary

Full set: `.vitepress/theme/icons.js`. Pick by what the section is *about* — the
whole reason the emoji were replaced is that one glyph was covering 17 unrelated
sections.

| Section is about | Icon |
|---|---|
| Summary, overview | `target` |
| Rationale, philosophy | `lightbulb` |
| Architecture, systems | `layers` |
| A pattern | `puzzle` · `blocks` · `boxes` |
| A flow or pipeline | `workflow` |
| Movement | `footprints` · `move-horizontal` |
| Combat | `swords` |
| Detection, sensing | `radar` |
| Timing | `timer` |
| Physics, gravity | `arrow-down-to-line` |
| AI, performance | `cpu` |
| UI, HUD | `layout-dashboard` · `gauge` |
| Audio | `volume-2` · `waves` |
| Save, data | `database` · `save` |
| Score, achievement | `trophy` · `award` |
| Results, growth | `trending-up` · `recycle` · `scale` |
| Tools, stack | `wrench` · `settings` |
| Code sample | `code-xml` · `file-code` |
| Team | `users` |
| Links | `link` |
| Scope, plan | `map` · `compass` |
| Health, life | `heart-pulse` |
| Respawn, retry | `rotate-ccw` · `refresh-cw` |
| Effects, buffs | `sparkles` · `zap` |

Need one that does not exist? Fetch it and register it:

```bash
curl -s https://unpkg.com/lucide-static@0.544.0/icons/<name>.svg
```

Put its inner elements into `ICONS` in `icons.js`, then give it a family in
`ICON_FAMILY` — `nudge` is the safe default. `npm run check` fails on an
unregistered name, because an unknown icon renders as an empty box.

---

## Media

**Never hand-write ffmpeg. Use `npm run media -- <slug>`.** It applies CRF 26,
`+faststart`, and preserves audio — each of which exists for a reason recorded
in the script's header.

- Author paths **without** the site base: `/videos/<slug>/clip.mp4`.
  `MediaCarousel` calls `withBase()` itself. A hardcoded `/protforlio-site/`
  works on localhost and 404s in production; `npm run check` fails on it.
- Posters are **derived**, not declared: `/videos/x/y.mp4` → `/posters/x/y.jpg`.
  The script generates them. Don't pass a `poster` unless you need an override.
- **Never add `autoplay`.** The browser starts fetching the moment the element
  parses and no script can beat it. Clips are `preload="none"` + poster +
  play-on-visible. One page was 1.3 GB before this rule.
- **Never strip audio.** `muted` is only the initial state; a visitor can
  unmute. Removing the track removes something they can ask for.
- `id` on `MediaCarousel` is required and must be unique on the page — it
  becomes the radio group name, and two groups sharing a name control each
  other. Convention: `<slug>-<section>`.

Slide shapes:

```js
{ src: '/videos/slug/clip.mp4', caption: 'What the viewer is looking at' }
{ src: '/images/slug/shot.png', type: 'image', alt: 'Describe it' }
{ src: 'https://www.youtube.com/embed/ID', type: 'embed', caption: '…' }
```

A caption containing a quote mark must escape it as `&quot;` — the attribute is
delimited by `"`.

---

## Tags

Colour carries meaning inside the two-accent palette. Anything unrecognised
renders grey, which is legal but should be a decision.

- **Orange — engine or language:** Unity · Unreal · Unreal Engine 5 · Roblox ·
  C# · C++ · Lua · Blueprints
- **Blue — genre or discipline:** 2D · 3D · FPS · Top-Down · Side-Scroller ·
  Action · Movement · AI · Combat · VFX · UI
- **Grey — status:** For Sale · Game Jam

Adding a tag to the vocabulary means editing the sets in `TagRow.vue` **and**
`KNOWN_TAGS` in `scripts/check-content.mjs`.

---

## Registering the project

`npm run new:project` does the first two. The third is a deliberate choice.

1. `projects/<slug>.md` — the page.
2. `projects/index.md` — a card in `allProjects`. The filter chips are computed
   from this array, so tags need no separate registration.
3. **Homepage** (`index.md`) — only if it should be one of the two featured
   `HomeProjectCard`s. Say which existing one it replaces; adding a third
   changes the layout.

Card fields: `id` · `title` · `summary` · `link` · `image` · `hoverVideo` ·
`tags` · `date` · `context` · `featured`.

`link`, `image` and `hoverVideo` in this file **do** include
`/protforlio-site/`, because they are plain strings in a data array that no
component passes through `withBase()`. This is the one place the base is
written out, and `check-content.mjs` knows to allow it here and nowhere else.

---

## Writing

- **Never invent a number.** No download counts, no frame budgets, no review
  scores unless they are in the brief. An invented figure is the one mistake a
  recruiter can catch and cannot forgive.
- Lead with the problem, not the feature.
- Bold the outcome, not the noun.
- Code excerpts: 15 lines maximum, real, and interesting. Boilerplate reads as
  padding.
- Prose stays in `<p class="project-text">` or plain markdown inside panels.
- Keep the existing voice: direct, technical, no marketing adjectives.

---

## Before you call it done

```bash
npm run check          # icons, tags, media, posters, wiring, base paths
npm run docs:build     # must be clean
npm run docs:preview   # then open the page
```

Then look at it: the fact rail sticks at ≥1560px, the outline lists your group
headings, panels open and close, the carousel arrows wrap, and one clip loads at
open rather than all of them.

**Do not commit.** Raymond commits.
