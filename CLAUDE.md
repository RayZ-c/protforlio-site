# Working on this repository

Raymond Cheng's game-dev portfolio. VitePress 1.6.4 + Vue 3, deployed to GitHub
Pages under `/protforlio-site/`.

The audience is recruiters and studio hiring leads, and **the repository itself
is part of the portfolio** — people will read the code. Dead code and
copy-pasted markup count against it.

## Rules

- **Never commit or push.** Raymond does that. Make the change and hand it over.
- **Never invent a fact** — no download counts, frame budgets, review scores or
  achievements that are not in the source material. This is the one class of
  mistake a recruiter can catch and will not forgive.
- **Never strip audio from a video.** `muted` is only an initial state; a
  visitor can unmute. This was a real mistake once.
- **Palette is two accents:** orange `#ff8c1a` and a cool blue, on near-black
  navy. No purple, pink, green, cyan or rainbow — the stock VitePress indigo is
  a bug, not a choice.
- **No new dependencies** without asking.
- Windows: PowerShell blocks `npm.ps1`. Use `npm.cmd run …`.

## Adding or updating a project page

This is the most common task. There is a system for it — use it rather than
copying an existing page by hand.

```bash
npm run new:project -- <slug>   # page + index card + media folders
npm run media -- <slug>         # encode raw capture, generate posters
npm run check                   # icons, tags, media, wiring, base paths
```

**Read [`project-context/authoring-a-case-study.md`](project-context/authoring-a-case-study.md)
before writing a case study.** It is the style contract: page skeleton, panel
structure, the Lucide icon vocabulary, the tag vocabulary, media rules, and the
three places a project has to be registered.

If Raymond hands you a filled-in
[`project-context/templates/project-brief.md`](project-context/templates/project-brief.md),
that brief is the source of facts. Everything not in it is either derivable from
the code or must be asked about — not guessed.

## Where the knowledge lives

| File | What it holds |
|---|---|
| `project-context/authoring-a-case-study.md` | **Style contract for project pages. Start here for content work.** |
| `project-context/architecture.md` | Stylesheet layers, components, media pipeline, routing. **Start here for code work.** |
| `project-context/handoff.md` | Current state, and ten traps that have already cost time. |
| `project-context/decisions.md` | Decisions taken without Raymond, and how to reverse each. |
| `project-context/local-development.md` | Running the site locally. |
| `project-context/notify.local.md` | Gitignored. Holds a live Discord webhook — never commit it, never paste it anywhere. |

## Traps worth knowing before you touch CSS

These are all real bugs found by measurement, not theory.

1. **`.VPContent` ships with `overflow: hidden auto`**, which makes it a scroll
   container and silently kills `position: sticky` everywhere in the content
   area. `doc.css` overrides it to `overflow-x: clip`. Don't "tidy" it back.
2. **Specificity ties are decided by load order.** `.vp-doc p`, `.vp-doc li` and
   `.vp-doc a:hover` have each beaten a new component rule. Prose rules in
   `doc.css` use `:where()` to sit at zero specificity. Prefer that over
   `!important`.
3. **`:root` ties with `.dark`** (both 0-1-0) and the site forces dark mode. All
   `--vp-*` overrides are written `:root, :root.dark` (0-2-0).
4. **A filled CSS animation outranks a hover rule.** `fill-mode: both` leaves
   the last keyframe applied forever; that killed a hover transform once.
5. **Vue reuses keyed DOM nodes.** Filtering the projects grid shifts each
   card's `nth-child`, which re-runs animation delays. Two entry animations were
   removed because of this — see the comment block in `effects.css`.
6. **New imports in `theme/index.js` need a dev-server restart.** HMR misses
   them, and the symptom looks like "my CSS isn't working".

## Verifying

```bash
npm run check          # content: icons, tags, media, posters, wiring
npm run docs:build     # must be clean
npm run docs:preview   # serves the real build on :4173
```

Raymond tests the site himself. Make the change, run **one** short targeted
check that proves the specific thing, then hand over — don't run long audit
suites every turn.
