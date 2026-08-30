---
layout: doc
title: {{TITLE}}
description: TODO one sentence for search results and link previews. Say the engine, the genre and the one interesting thing.
---

<a href="../projects/" class="back-projects-button"> ❮❮ All Projects </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">Project Status :</span>
      <span class="info-line-value"> TODO e.g. Complete &amp; Playable | 4-Week Solo Build </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Engine :</span>
      <span class="info-line-value"> TODO e.g. Unity 6 | C# </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Team :</span>
      <span class="info-line-value"> TODO e.g. Solo Developer </span>
    </p>
  </div>
</div>

# {{TITLE}} {.page-title-center}
-------

<p class="project-text">
  TODO two or three sentences. What it is, what you built, and the result.
  Put the number or the outcome in <strong>bold</strong> — this paragraph is
  the most-read text on the page.
</p>

<MediaCarousel
  id="{{SLUG}}-hero"
  label="{{TITLE}} showcase"
  :slides="[
    { src: '/videos/{{SLUG}}/TODO-1.mp4', caption: 'TODO what the viewer is looking at' },
    { src: '/videos/{{SLUG}}/TODO-2.mp4', caption: 'TODO' }
  ]"
/>

## General {.outline-only}

<ProjectPanel icon="target" title="Quick Summary for Recruiters" open>

- TODO the headline fact — scope, timeframe, what makes it non-trivial
- TODO the system you are proudest of
- TODO the constraint you worked under and how you handled it
- TODO what it demonstrates you can do

</ProjectPanel>

<ProjectPanel icon="lightbulb" title="Core Philosophy">

TODO why you built it the way you did. This is where you sound like an engineer
rather than a feature list.

</ProjectPanel>

## Highlight Features {.outline-only}

<ProjectPanel icon="TODO" eyebrow="TODO Category" title="TODO Feature Name">

**The Problem:** TODO what was actually hard.

**The Solution:** TODO what you built.

```csharp
// TODO a short, real excerpt — 15 lines at most.
// Show the interesting decision, not boilerplate.
```

**Result:** TODO what changed because of it.

</ProjectPanel>

## Technical Deep Dive {.outline-only}

<ProjectPanel icon="layers" title="Architecture &amp; Design Patterns">

TODO how the systems fit together, and the pattern you used.

<ProjectPanel icon="code-xml" variant="mini" title="Implementation">

TODO the nested detail that would clutter the parent panel.

</ProjectPanel>

</ProjectPanel>

## Extras {.outline-only}

<ProjectPanel icon="wrench" title="Technologies &amp; Stack">

- **Engine:** TODO
- **Language:** TODO
- **Tools:** TODO

</ProjectPanel>

<ProjectPanel icon="link" title="Links &amp; Resources">

- [TODO Play it](TODO)
- [TODO Source](TODO)

</ProjectPanel>
