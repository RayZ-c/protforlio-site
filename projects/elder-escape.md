---
layout: doc
title: Cyborg Monkey Endless Runner
description: A 4‑day Unreal Engine 5 endless runner built in Blueprints, featuring a disabled old man in a wheelchair chased by cyborg monkeys.
---

<a href="../projects/" class="back-home-button"> ❮❮ All Projects </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">Project Status :</span>
      <span class="info-line-value"> Complete & Playable | 4-Day Game Jam </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Engine :</span>
      <span class="info-line-value"> Unreal Engine 5 | 100% Blueprints (No C++) </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Team :</span>
      <span class="info-line-value"> Lead Programmer & Visual Designer (4-person team) </span>
    </p>
  </div>
</div>

# Cyborg Monkey Endless Runner {.page-title-center}
-------

<p class="project-text">
  A fast-paced endless runner featuring a disabled protagonist in a wheelchair, dodging obstacles across 3 lanes while cyborg monkeys chase. <strong>Zero bugs at launch</strong> through Blueprint-only development, clear task delegation, and modular architecture. 
</p>
<p class="project-text">
  Demonstrates <strong>rapid prototyping</strong>, <strong>team coordination</strong>, and production-ready code under <strong>extreme time pressure</strong>.
</p>

<!-- HERO MEDIA CAROUSEL (fps-hero-*) -->
<div class="media-carousel">
  <!-- radios -->
  <input type="radio" name="ee-hero-media" id="ee-hero-1" checked>
  <!-- slides -->
  <div class="media-slides">
    <figure><video
        autoplay
        muted
        playsinline
        controls
        preload="metadata">
        <source src="/videos/elder-escape/ee-showcase-1.mp4" type="video/mp4" />
    </video></figure>
  </div>
  <div class="media-captions">
    <div class="media-caption">
      <p>Main gameplay loop overview. (<strong>Power-up at Score 35!</strong>)</p>
    </div>
  </div>
</div>

<style>
  /* HERO CAROUSEL (fm-hero-*) */
  #ee-hero-1:checked ~ .media-slides figure:nth-child(1) {
    display: block;
  }
</style>

---

# General {.section-title-center}



## Quick Overview {.outline-only}
<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">☑︎ Quick Summary for Recruiters</span>
    <span class="section-icon">▾</span>
  </summary>


  <div class="project-text">

  **Delivery Under Pressure:**
  - ✅ Complete, playable game in 4 days
  - ✅ Zero critical bugs at launch
  - ✅ 4-person team coordination (clear role separation, no bottlenecks)
  - ✅ Blueprint-only (fast iteration, no compilation overhead)

  **Technical Highlights:**
  - ✅ 3-lane movement system with smooth transitions
  - ✅ Procedural floor generation (infinite level generation, memory-efficient)
  - ✅ Progressive difficulty scaling (continuous speed ramp)
  - ✅ High-score persistence (serialized saves across sessions)
  - ✅ Comprehensive sound design (SFX for all actions + ambient threat)

  </div>

</details>


## Team Structure {.outline-only}
<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">☑︎ Team Structure</span>
    <span class="section-icon">▾</span>
  </summary>


  <div class="project-text">


  **Team Coordination (4 People):**
  - **Lead Programmer (Me):** Gameplay systems, player controller, game mode, bug fixes
  - **Designer (Me):** Balance tuning, obstacle placement strategies, visual polish
  - **3D Modeler:** Characters, obstacles, environment meshes
  - **2D Artist:** UI design, animations


  </div>

</details>

---



## - - - --->Features<--- - - -  {.outline-only}

# Core Systems {.section-title-center}

## 1. Player Movement & Input  {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">🎮 Lane System & Controls</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Input Architecture:**
- **A / D:** Shift lanes left/right (3 lanes, clamped 0–2)
- **W / Space:** Jump over obstacles
- **S:** Force ground (cancels hang time)

**Lane Transitions:**
- Smooth Lerp-based movement (not instant snapping)
- `CurrentLaneIndex` and `TargetLaneIndex` tracking
- Y-position array per lane

**Why it works:** Responsive, predictable input with immediate audio/visual feedback. Enhanced Input System integration means modern input handling out-of-the-box.

</div>

</details>

## 2. Difficulty Progression  {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">📈 Progressive Difficulty Curve</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Speed Scaling:**
- Base speed: 850 UU/s → Max speed: 3200 UU/s
- Multiplier: 1.02x every interval (configurable)
- Tied directly to `CharacterMovement.MaxWalkSpeed`

**Why this design:** 
- Natural difficulty curve without complexity
- Reaction windows shrink organically—no external difficulty settings
- Creates escalating tension without effort

**Result:** Players naturally progress from comfortable to impossible, creating arcade-like tension.

</div>

</details>

## 3. Procedural Level Generation  {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">🏗️ Infinite Level Architecture</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**How It Works:**
- `BP_Floor` tiles generate lane-specific spawn points
- Random obstacle selection per spawn (array shuffle)
- 3 obstacle types (Wall, Blocker, Pot) via Switch on Int
- Spawned as Child Actor Components

**Memory Efficiency:**
- Fixed number of active tiles (oldest destroyed when limit reached)
- Obstacles destroyed after lifespan expires
- No performance degradation over time

**Extensibility:**
- New obstacles = new mesh child, no code changes
- Data-driven spawning (configurable per-lane placement)
- Designer can balance without programmer involvement

</div>

</details>

## 4. Scoring System  {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">💾 Score System & Persistence</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Runtime Scoring:**
- Points accumulate: `(DeltaTime * PointsMulti)`
- Score multiplier tied to speed (encourages risk)
- Milestone SFX at score thresholds

**High Score Persistence:**
- SaveGame API (`Runner_SaveGame`)
- Slot-based serialization (`"HighScoreValue"`)
- Auto-loads on game start, compares on death, saves if beaten

**Two-Widget UI:**
1. **GamePlay_UI** — Real-time score display (top right)
2. **GameOver_UI** — Final score + Retry/Exit buttons

</div>

</details>

## 5. Audio & Visual Design  {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">🔊 Sound Effects & Chaser AI</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Sound System:**
- Jump, dash, death (fast/slow), monkey vocalizations, BGM
- `Play Sound 2D` nodes embedded in action logic
- Immediate audio feedback for all inputs

**Monkey Chaser (BP_Monkey):**
- Visual threat, not gameplay mechanic
- Follows player position via `VInterpTo`
- Reinforces narrative without affecting game balance
- Adds personality + pressure without mechanical complexity

</div>

</details>

---
## - - - --->Technical<--- - - -  {.outline-only}

# Technical Architecture {.section-title-center}


## Blueprint Design Patterns  {.outline-only}
<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">🏗️ Blueprint Design Patterns </span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Design Patterns:**

1. **Data-Driven Spawning** — Configurable spawn points, random obstacle selection, no hardcoded values
2. **Event-Based Communication** — Death triggers event dispatch, score updates via getters, loose coupling
3. **Smooth Transitions** — Lerp-based movement, velocity-based jumping, gradual speed scaling
4. **Memory Pooling** — Fixed tile count, obstacle lifespans, minimal actor spawning

**Blueprint vs C++ for 4-Day Jam:**
- ✅ No compilation time = faster iteration
- ✅ Visual debugging = easier problem-solving
- ✅ Non-technical team members can understand flow
- ✅ Zero-bug delivery possible with modular architecture

**Success Formula:**
- Daily standups (blockers & status)
- Shared design doc (Blueprint reference, configs)
- Clear ownership per system (no simultaneous edits)
- Weekly playtests (Friday feedback sessions)

</div>

</details>

## Blueprints Breakdown  {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">📋 Core Blueprints Breakdown</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

| Blueprint | Purpose |
|-----------|---------|
| **BP_RunnerCharacter** | Player controller (input, lanes, death) |
| **BP_Obstacles** (Wall/Blocker/Pot) | Obstacle variants with collision & lifespan |
| **BP_Floor** | Level tile generator (spawn points, randomization) |
| **BP_Monkey** | Enemy chaser (follow, animations, SFX) |
| **BP_RunnerGameMode** | Game manager (score, checkpoint, difficulty) |
| **GamePlay_UI** | In-game HUD (score display, real-time updates) |
| **GameOver_UI** | End screen (final score, retry/exit, save logic) |
| **Runner_SaveGame** | High-score persistence layer |
| **IMC_RunnerDefault** | Input action mapping (A/D/W/S) |

**All under `/Content/Runner/Blueprints/` — Zero C++ source files.**

</div>

</details>

---
## - - - --->Extras<--- - - -  {.outline-only}

# Extra Notes {.section-title-center}

## Design Decisions  {.outline-only}
<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">🎯 Why These Design Choices?</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**3 Lanes?**
- Simple input (A/D/W/S covers all movement)
- Clear visuals (readable at high speed)
- Balanced (not overwhelming, not repetitive)

**Continuous Speed Increase?**
- Natural difficulty curve without complexity
- Forces constant engagement (can't zone out)
- Death always possible (high skill ceiling)

**Random Obstacles?**
- Prevents memorization → keeps experienced players engaged
- Fair difficulty (no pattern abuse)
- Endless replayability

**Single-Hit Death?**
- Keeps sessions short (respects player time)
- Makes score meaningful (not just "time survived")
- Maintains tension (every obstacle = life-or-death)


</div>

</details>


## Technologies & Stack  {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">⚙️ Tools & Technologies</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

- **Engine:** Unreal Engine 5.0+
- **Language:** 100% Blueprints (no C++)
- **Input System:** Enhanced Input System (modern, configurable)
- **Character Movement:** Built-in Character Movement component
- **Persistence:** SaveGame API (slot-based saves)
- **UI:** UIToolkit widget system
- **Audio:** Sound Wave assets + 2D playback
- **Rendering:** Skeletal meshes + Niagara particles
- **Architecture:** Component-based, composition over inheritance

</div>

</details>

---
