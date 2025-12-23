---
layout: doc
title: Roblox Combat System Framework
description: Reusable 5-hit combo + blocking framework for Roblox. Sold to multiple clients. Complete with knockback, block-breaking, heavy attacks, and synchronized feedback.
---

<a href="../projects/" class="back-home-button"> ❮❮ All Projects </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">Status :</span>
      <span class="info-line-value"> Live & Multi-Client </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Role :</span>
      <span class="info-line-value"> Framework Developer (Systems Design & Lua) </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Platform :</span>
      <span class="info-line-value"> Roblox Studio (Reusable Module) </span>
    </p>
  </div>
</div>

# Roblox Combat System Framework {.page-title-center}
### Reusable 5-Hit Combo + Blocking System {.page-title-center}


<div class="media-carousel">
  <input type="radio" name="rcf-hero-media" id="rcf-hero-1" checked>
  
  <div class="media-slides">
    <figure>
        <video
            autoplay
            muted
            playsinline
            controls
            preload="metadata">
            <source src="/protforlio-site/videos/roblox-combat/rc-showcase-1.mp4" type="video/mp4" />
        </video>
    </figure>
  </div>
  
  <div class="media-captions">
    <div class="media-caption">
      Complete combat system: 5-hit combos, knockback, blocking, block breaks, heavy attacks
    </div>
  </div>
</div>


<style>
  /* HERO CAROUSEL (rcf-hero-*) */
  #rcf-hero-1:checked ~ .media-slides figure:nth-child(1) {
    display: block;
  }
</style>

##

## Overview {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Overview</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

Production combat framework designed for reusability across multiple Roblox games:

- **5-Hit Combo Chain:** Sequential attack animations with increasing damage per step
- **Knockback System:** Progressive knockback on combo hits, heavy knockback on final hit
- **Block Mechanics:** Full block state with damage reduction + block-break threshold
- **Block Break Reaction:** Stun animation + stat reset when block is broken
- **Heavy Attack:** One-handed break attack with extended cooldown and guaranteed knockback
- **Impact Feedback:** Synchronized particle + animation reactions on both attack and block

</div>
</details>



## Implementation {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Technical Implementation</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

| Component | Details |
|---|---|
| **Combo System** | 5-hit sequential chain with per-hit damage/knockback scaling, combo timeout |
| **Knockback Physics** | Direction-aware knockback (scales per combo step, max on final hit) |
| **Block State Machine** | Active block → taking hit → block break → stun recovery |
| **Block Break Logic** | Cumulative damage threshold triggers break, resets on timeout |
| **Heavy Attack System** | Alternative input, longer animation, automatic block-breaking |
| **Feedback System** | Animation reactions (stagger, block react), particle spawning, damage numbers |
| **Modular Design** | Parameter-driven balance (damage, knockback, cooldowns all configurable) |

</div>
</details>


## Why It's Reusable {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Reusability & Result</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

- **No hardcoded values** - All damage, knockback, cooldown, timing in config table
- **Animation-agnostic** - Works with any character rig (uses generic animation names)
- **Plug-and-play** - Drop module into game, connect to character, configure parameters
- **Extensible** - Easy to add new attacks or modify block behavior without touching core logic
- **Multiple clients** - Same codebase, different balance per game (client-specific configs)

**Result:** Delivered to 3+ clients with custom balance tuning per game. Framework handles all core combat patterns while remaining lightweight and performant. Clients report minimal integration time and ability to modify mechanics without code changes.

</div>
</details>

