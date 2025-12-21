---
layout: doc
title: Path to Power
description: A fast-paced Dragon Ball–inspired 2D action platformer built solo in Unity over 4 weeks, focused on forgiving movement mechanics, multi-layer combat feedback, and declarative C# UI systems.
---

<a href="../projects/" class="back-home-button"> ❮❮ All Projects </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">Project Status :</span>
      <span class="info-line-value"> Ongoing (Core systems completed) | 4 Weeks </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Project Type :</span>
      <span class="info-line-value"> Solo Project | Unity (C#)  </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Core Focus :</span>
      <span class="info-line-value"> Movement & Combat feel | UI systems</span>
    </p>
  </div>

</div>

# Path to Power {.page-title-center}
-------

<p class="project-text">
  A <strong>2D action platformer</strong> inspired by anime combat, built to showcase a <strong>forgiving movement & combat framework</strong>, <strong>multi-layer hit feedback orchestration</strong>, and a <strong>pure C# UIToolkit HUD</strong>—all shipped solo in 4 weeks under deadline pressure.
</p>
<!-- HERO MEDIA CAROUSEL (ptp-hero-*) -->
    <div class="media-carousel">
      <!-- radios -->
      <input type="radio" name="ptp-hero-media" id="ptp-hero-1" checked>
      <input type="radio" name="ptp-hero-media" id="ptp-hero-2">
      <input type="radio" name="ptp-hero-media" id="ptp-hero-3">
      <input type="radio" name="ptp-hero-media" id="ptp-hero-4">
      <input type="radio" name="ptp-hero-media" id="ptp-hero-5">
      <input type="radio" name="ptp-hero-media" id="ptp-hero-6">
      <!-- slides -->
      <div class="media-slides">
        <figure><video
            autoplay
            muted
            playsinline
            controls
            preload="metadata">
            <source src="/videos/path-to-power/ptp-showcase-1.mp4" type="video/mp4" />
        </video></figure>
        <figure><video
            autoplay
            muted
            playsinline
            controls
            preload="metadata">
            <source src="/videos/path-to-power/ptp-showcase-4.mp4" type="video/mp4" />
        </video></figure>
        <figure><video
            autoplay
            muted
            playsinline
            controls
            preload="metadata">
            <source src="/videos/path-to-power/ptp-showcase-3.mp4" type="video/mp4" />
        </video></figure>
      </div>
      <!-- arrows -->
      <div class="media-arrows">
        <!-- prev -->
        <label for="ptp-hero-3" class="media-arrow-btn media-arrow-prev arrow-prev-1">‹</label>
        <label for="ptp-hero-1" class="media-arrow-btn media-arrow-prev arrow-prev-2">‹</label>
        <label for="ptp-hero-2" class="media-arrow-btn media-arrow-prev arrow-prev-3">‹</label>
        <!-- next -->
        <label for="ptp-hero-1" class="media-arrow-btn media-arrow-next arrow-next-3">›</label>
        <label for="ptp-hero-2" class="media-arrow-btn media-arrow-next arrow-next-1">›</label>
        <label for="ptp-hero-3" class="media-arrow-btn media-arrow-next arrow-next-2">›</label>
      </div>
      <div class="media-captions">
        <div class="media-caption">
          Complete combat system overview.
        </div>
        <div class="media-caption">
          Showcase of movement + dash.
        </div>
        <div class="media-caption">
          Showcase of Main Menu.
        </div>
      </div>
      <!-- dots -->
      <div class="media-dots">
        <label for="ptp-hero-1"></label>
        <label for="ptp-hero-2"></label>
        <label for="ptp-hero-3"></label>
      </div>
    </div>

    
<style>
  /* HERO CAROUSEL (ptp-hero-*) */
  #ptp-hero-1:checked ~ .media-slides figure:nth-child(1),
  #ptp-hero-2:checked ~ .media-slides figure:nth-child(2),
  #ptp-hero-3:checked ~ .media-slides figure:nth-child(3) {
    display: block;
  }

  #ptp-hero-1:checked ~ .media-dots label:nth-child(1),
  #ptp-hero-2:checked ~ .media-dots label:nth-child(2),
  #ptp-hero-3:checked ~ .media-dots label:nth-child(3) {
    background: #38bdf8;
    transform: scale(1.2);
  }

  /* arrow container */
  .media-arrows {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
    padding: 0 0.6rem;
  }


  .media-arrow-btn {
    pointer-events: auto;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 999px;
    border: 2.5px solid rgba(148, 163, 184, 0.55);
    background: rgba(61, 61, 61, 0.58);
    color: #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.4rem;
    transition: background 0.15s ease, border-color 0.15s ease, transform 0.1s ease;
  }


  .media-arrow-btn:hover {
    background: #38bdf8;
    border-color: #38bdf8;
    color: #020617;
  }


  /* hide all arrows by default */
  .media-arrows .media-arrow-btn {
    opacity: 0;
    pointer-events: none;
  }


  /* show only the pair for the active slide */
  #ptp-hero-1:checked ~ .media-arrows .arrow-prev-1,
  #ptp-hero-2:checked ~ .media-arrows .arrow-prev-2,
  #ptp-hero-3:checked ~ .media-arrows .arrow-prev-3,
  #ptp-hero-1:checked ~ .media-arrows .arrow-next-1,
  #ptp-hero-2:checked ~ .media-arrows .arrow-next-2,
  #ptp-hero-3:checked ~ .media-arrows .arrow-next-3{
    opacity: 1;
    pointer-events: auto;
  }
</style>


---

# 𓆩General𓆪 {.section-title-center}

## Quick Overiew {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">☑︎ Quick Summary for Recruiters</span>
    <span class="section-icon">▾</span>
  </summary>

  <div class="project-text">
    <ul>
      <li>4-week solo action platformer built on a <a href='/protforlio-site/projects/forgiving-mechanics' ><strong>reusable movement framework</strong></a></li>
      <li>Responsive movement with <strong>forgiving mechanics</strong> (jump buffer, coyote time, variable gravity)</li>
      <li><strong>Multi-layer combat feedback</strong> (VFX + SFX + Camera + Physics + Hit-Stop + UI synchronized)</li>
      <li>Pure <strong>C# UIToolkit HUD</strong> (no UXML, declarative, designer-friendly)</li>
      <li>Architecture designed to scale to character roster and boss encounters</li>
      <li>Parameter-driven systems enabling team collaboration and rapid iteration</li>
    </ul>
  </div>

</details>


## Core Philosophy {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Core Philosophy</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

# "Build the foundation right, polish meaningfully, iterate fast."

This project demonstrates:
- ✅ **Responsive**, **forgiving** mechanics that feel great to control
- ✅ **Multi-layer feedback engineering** (VFX + SFX + Physics + UI + Animation synchronized)
- ✅ **Declarative system design** enabling rapid tuning and team collaboration
- ✅ **Smart balancing** under time constraints (parameter-driven, designer-friendly)
- ✅ **Modular architecture** (combat layers on top of validated movement framework)


</div>

</details>


## Technical Highlights {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Technical Highlights𓆪</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

  - ✅ **Object Pooling (VFX & SFX) :** Support for per-playback customization (color, scale, pitch variation, lifetime...etc)
  - ✅ **Animation Event Synchronization :** Enables artists to time attacks visually, not programmers guessing frames
  - ✅ **State Priority System :** Allows action canceling & Prevents unintended state conflicts
  - ✅ **Input Buffering (3 Simultaneous) :** Jump, Dash, Attacks buffer
  - ✅ **Modular Architecture :** Decoupled systems (VFX/SFX/UI/Audio all independent)
  - ✅ **Designer Collaboration :** Rapid iteration with Parameter-driven tuning (no code recompile for balance changes)


</div>

</details>



---
## - - - --->Features<--- - - -  {.outline-only}

# Highlight Features𓆪 {.section-title-center}

## 1. Movement Framework {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ <strong>Movement</strong>: Forgiving Mechanics</span>
    <span class="section-icon">▾</span>
  </summary>

<!-- MOVEMENT MEDIA CAROUSEL (ptp-move-*) -->
<div class="media-carousel">
  <input type="radio" name="ptp-move-media" id="ptp-move-1" checked>
  <input type="radio" name="ptp-move-media" id="ptp-move-2">
  <input type="radio" name="ptp-move-media" id="ptp-move-3">
  <input type="radio" name="ptp-move-media" id="ptp-move-4">
  <input type="radio" name="ptp-move-media" id="ptp-move-5">
  <input type="radio" name="ptp-move-media" id="ptp-move-6">

  <div class="media-slides">
    <figure><video
        autoplay
        muted
        playsinline
        controls
        preload="metadata">
        <source src="/videos/path-to-power/ptp-showcase-4.mp4" type="video/mp4" />
    </video></figure>
    <figure><video
        autoplay
        muted
        playsinline
        controls
        preload="metadata">
        <source src="/videos/path-to-power/ptp-showcase-5.mp4" type="video/mp4" />
    </video></figure>
  </div>

  <div class="media-arrows">
    <label for="ptp-move-2" class="media-arrow-btn media-arrow-prev arrow-prev-1">‹</label>
    <label for="ptp-move-1" class="media-arrow-btn media-arrow-prev arrow-prev-2">‹</label>
    <label for="ptp-move-1" class="media-arrow-btn media-arrow-next arrow-next-2">›</label>
    <label for="ptp-move-2" class="media-arrow-btn media-arrow-next arrow-next-1">›</label>
  </div>
    <div class="media-captions">
            <div class="media-caption">
            Shows responsive input responsiveness, late inputs still register, extra window (coyote jump)
            </div>
            <div class="media-caption">
            Showcase of Ki charging/blasting gravity change in mid-air
            </div>
        </div>
    <div class="media-dots">
        <label for="ptp-move-1"></label>
        <label for="ptp-move-2"></label>
    </div>
</div>



<div class="project-text">

**What you're seeing:** A character that *feels good to control* - not by accident, but by design.

The movement system uses **three simultaneous input buffers** (jump, dash, attack) to prevent the "one-frame miss" frustration that kills game feel. Combined with forgiving physics (jump buffer window, coyote time, variable gravity), this creates a control scheme that's both snappy AND responsive to player intent.

**Built on the** <a href='/protforlio-site/projects/forgiving-mechanics' >**Forgiving Movement Framework**</a> and expanded here with:
- **Attack momentum preservation** (player momentum smoothly tweens to zero during attack, creating "commitment" feel without losing responsive control)
- **State priority system** (movement locks during attack endlag, but facing direction remains independent for skill expression)
- **Dash as action override** (dash cancels any action except enemy stuns, raising skill ceiling through deliberate action economy)
- **Ki charging/blasting gravity modulation** (reduced gravity during charge for distinctive floaty feel, separating charge state from normal movement)


</div>



<style>
  #ptp-move-1:checked ~ .media-slides figure:nth-child(1),
  #ptp-move-2:checked ~ .media-slides figure:nth-child(2),
  #ptp-move-3:checked ~ .media-slides figure:nth-child(3),
  #ptp-move-4:checked ~ .media-slides figure:nth-child(4),
  #ptp-move-5:checked ~ .media-slides figure:nth-child(5),
  #ptp-move-6:checked ~ .media-slides figure:nth-child(6) {
    display: block;
  }

  #ptp-move-1:checked ~ .media-dots label:nth-child(1),
  #ptp-move-2:checked ~ .media-dots label:nth-child(2),
  #ptp-move-3:checked ~ .media-dots label:nth-child(3),
  #ptp-move-4:checked ~ .media-dots label:nth-child(4),
  #ptp-move-5:checked ~ .media-dots label:nth-child(5),
  #ptp-move-6:checked ~ .media-dots label:nth-child(6) {
    background: #38bdf8;
    transform: scale(1.2);
  }

  #ptp-move-1:checked ~ .media-arrows .arrow-prev-1,
  #ptp-move-2:checked ~ .media-arrows .arrow-prev-2,
  #ptp-move-3:checked ~ .media-arrows .arrow-prev-3,
  #ptp-move-4:checked ~ .media-arrows .arrow-prev-4,
  #ptp-move-5:checked ~ .media-arrows .arrow-prev-5,
  #ptp-move-6:checked ~ .media-arrows .arrow-prev-6,
  #ptp-move-1:checked ~ .media-arrows .arrow-next-1,
  #ptp-move-2:checked ~ .media-arrows .arrow-next-2,
  #ptp-move-3:checked ~ .media-arrows .arrow-next-3,
  #ptp-move-4:checked ~ .media-arrows .arrow-next-4,
  #ptp-move-5:checked ~ .media-arrows .arrow-next-5,
  #ptp-move-6:checked ~ .media-arrows .arrow-next-6 {
    opacity: 1;
    pointer-events: auto;
  }
</style>

</details>


## 2. Combat Feel {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ <strong>Combat</strong>: Multi-Layer Feedback</span>
    <span class="section-icon">▾</span>
  </summary>

<!-- COMBAT MEDIA CAROUSEL (ptp-combat-*) -->
<div class="media-carousel">
  <input type="radio" name="ptp-combat-media" id="ptp-combat-1" checked>
  <input type="radio" name="ptp-combat-media" id="ptp-combat-2">
  <input type="radio" name="ptp-combat-media" id="ptp-combat-3">
  <input type="radio" name="ptp-combat-media" id="ptp-combat-4">
  <input type="radio" name="ptp-combat-media" id="ptp-combat-5">
  <input type="radio" name="ptp-combat-media" id="ptp-combat-6">

  <div class="media-slides">
    <figure><video
        autoplay
        muted
        playsinline
        controls
        preload="metadata">
        <source src="/videos/path-to-power/ptp-showcase-1.mp4" type="video/mp4" />
    </video></figure>
    <figure><video
        autoplay
        muted
        playsinline
        controls
        preload="metadata">
        <source src="/videos/path-to-power/ptp-combat-1.mp4" type="video/mp4" />
    </video></figure>
    <figure><video
        autoplay
        muted
        playsinline
        controls
        preload="metadata">
        <source src="/videos/path-to-power/ptp-combat-2.mp4" type="video/mp4" />
    </video></figure>
    <figure><video
        autoplay
        muted
        playsinline
        controls
        preload="metadata">
        <source src="/videos/path-to-power/ptp-combat-3.mp4" type="video/mp4" />
    </video></figure>
    <figure><video
        autoplay
        muted
        playsinline
        controls
        preload="metadata">
        <source src="/videos/path-to-power/ptp-combat-4.mp4" type="video/mp4" />
    </video></figure>
    <figure><video
        autoplay
        muted
        playsinline
        controls
        preload="metadata">
        <source src="/videos/path-to-power/ptp-combat-5.mp4" type="video/mp4" />
    </video></figure>
  </div>

  <div class="media-arrows">
    <label for="ptp-combat-6" class="media-arrow-btn media-arrow-prev arrow-prev-1">‹</label>
    <label for="ptp-combat-1" class="media-arrow-btn media-arrow-prev arrow-prev-2">‹</label>
    <label for="ptp-combat-2" class="media-arrow-btn media-arrow-prev arrow-prev-3">‹</label>
    <label for="ptp-combat-3" class="media-arrow-btn media-arrow-prev arrow-prev-4">‹</label>
    <label for="ptp-combat-4" class="media-arrow-btn media-arrow-prev arrow-prev-5">‹</label>
    <label for="ptp-combat-5" class="media-arrow-btn media-arrow-prev arrow-prev-6">‹</label>
    <label for="ptp-combat-1" class="media-arrow-btn media-arrow-next arrow-next-6">›</label>
    <label for="ptp-combat-2" class="media-arrow-btn media-arrow-next arrow-next-1">›</label>
    <label for="ptp-combat-3" class="media-arrow-btn media-arrow-next arrow-next-2">›</label>
    <label for="ptp-combat-4" class="media-arrow-btn media-arrow-next arrow-next-3">›</label>
    <label for="ptp-combat-5" class="media-arrow-btn media-arrow-next arrow-next-4">›</label>
    <label for="ptp-combat-6" class="media-arrow-btn media-arrow-next arrow-next-5">›</label>
  </div>
    <div class="media-captions">
            <div class="media-caption">
            Overview of 5-Layer Hit Feedback 
            <p>(Watch VFX burst timing, SFX sync, enemy knockback, color flash intensity, and hit-stop all firing simultaneously.) </p>
            </div>
            <div class="media-caption">
            Default 5-hit combo + slow motion
            </div>
            <div class="media-caption">
            Landed version of 5-hit combo + slow motion
            </div>
            <div class="media-caption">
            Default Energy(Ki) Charging + slow motion
            </div>
            <div class="media-caption">
            Showcase of Energy(Ki) Charging & Dash into mid-air + slow motion
            </div> 
            <div class="media-caption">
            Showcase of Kamehameha (not fully finished) + slow motion
            </div>
        </div>

  <div class="media-dots">
    <label for="ptp-combat-1"></label>
    <label for="ptp-combat-2"></label>
    <label for="ptp-combat-3"></label>
    <label for="ptp-combat-4"></label>
    <label for="ptp-combat-5"></label>
    <label for="ptp-combat-6"></label>
  </div>
</div>
<div class="project-text">

**3 Core combat inputs:** 5-hit melee combo, Ki blasts, and Ki charge.

When the player lands a hit:

1. **VFX burst** (particle timing synced to animation frame)
2. **SFX impact** (audio from pooled sources, pitch-varied for uniqueness)
3. **Camera impulse** (Cinemachine shake, direction/intensity based on combo step)
4. **Enemy visual feedback** (color flash intensity scales: light hit = subtle pink, heavy hit = bright red)
5. **Physics response** (knockback direction + magnitude contextual to attack position)
6. **Hit-stop freeze** (0.05–0.08s time-freeze creating impact feel)
7. **UI update** (score popup, health bar lerp, screen edge flash)

All coordinated from a single `ApplyExternalHit()` call,  **pure modular design.**

Also, every feedback layer's intensity scales per combo step, creates a natural rhythm without explicit combo-counter UI.


<style>
  #ptp-combat-1:checked ~ .media-slides figure:nth-child(1),
  #ptp-combat-2:checked ~ .media-slides figure:nth-child(2),
  #ptp-combat-3:checked ~ .media-slides figure:nth-child(3),
  #ptp-combat-4:checked ~ .media-slides figure:nth-child(4),
  #ptp-combat-5:checked ~ .media-slides figure:nth-child(5),
  #ptp-combat-6:checked ~ .media-slides figure:nth-child(6)  {
    display: block;
  }

  #ptp-combat-1:checked ~ .media-dots label:nth-child(1),
  #ptp-combat-2:checked ~ .media-dots label:nth-child(2),
  #ptp-combat-3:checked ~ .media-dots label:nth-child(3),
  #ptp-combat-4:checked ~ .media-dots label:nth-child(4),
  #ptp-combat-5:checked ~ .media-dots label:nth-child(5),
  #ptp-combat-6:checked ~ .media-dots label:nth-child(6) {
    background: #38bdf8;
    transform: scale(1.2);
  }

  #ptp-combat-1:checked ~ .media-arrows .arrow-prev-1,
  #ptp-combat-2:checked ~ .media-arrows .arrow-prev-2,
  #ptp-combat-3:checked ~ .media-arrows .arrow-prev-3,
  #ptp-combat-4:checked ~ .media-arrows .arrow-prev-4,
  #ptp-combat-5:checked ~ .media-arrows .arrow-prev-5,
  #ptp-combat-6:checked ~ .media-arrows .arrow-prev-6,
  #ptp-combat-1:checked ~ .media-arrows .arrow-next-1,
  #ptp-combat-2:checked ~ .media-arrows .arrow-next-2,
  #ptp-combat-3:checked ~ .media-arrows .arrow-next-3,
  #ptp-combat-4:checked ~ .media-arrows .arrow-next-4,
  #ptp-combat-5:checked ~ .media-arrows .arrow-next-5,
  #ptp-combat-6:checked ~ .media-arrows .arrow-next-6 {
    opacity: 1;
    pointer-events: auto;
  }

  
  /* arrow container */
  .media-arrows {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
    padding: 0 0.6rem;
  }


  .media-arrow-btn {
    pointer-events: auto;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 999px;
    border: 2.5px solid rgba(148, 163, 184, 0.55);
    background: rgba(61, 61, 61, 0.58);
    color: #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.4rem;
    transition: background 0.15s ease, border-color 0.15s ease, transform 0.1s ease;
  }


  .media-arrow-btn:hover {
    background: #38bdf8;
    border-color: #38bdf8;
    color: #020617;
  }


  /* hide all arrows by default */
  .media-arrows .media-arrow-btn {
    opacity: 0;
    pointer-events: none;
  }

</style>


<details class="mini-panel">
  <summary class="mini-panel-header">
    <span class="mini-panel-title"> <strong>Ki & Stamina System</strong>: Resource Design</span>
    <span class="mini-panel-icon">▼</span>
  </summary>

  <div class="mini-panel-body">

<!-- MOVEMENT MEDIA CAROUSEL (ptp-move-*) -->
<div class="media-carousel">
  <input type="radio" name="ptp-re-media" id="ptp-re-1" checked>

  <div class="media-slides">    
    <video controls preload="metadata">
      <source src="/public/videos/path-to-power/ptp-ki-1.mp4" type="video/mp4" />
    </video>
  </div>

  <div class="media-captions">
          <div class="media-caption">
          Showcase the ways to drain/gain energy.
          </div>
      </div>
</div>

<div class="project-text">

**What you're seeing:** Resource economy that prevents spam while rewarding planning.

**Ki Charging:**
- Hold button → aura grows → particles emit → energy bar fills
- Smooth charge rate (30 units/sec) = 3 seconds to full from zero
- Gravity modulation during charge (0.3x scale) = distinctive floaty feel
- Visual/audio feedback scales with charge intensity (crescendo effect)

**Energy Cost & Regen:**
- Ki Blast: 20 energy cost, 0.2s cooldown, 3s regen delay after use
- Kamehameha: 15 energy cost/second while firing (variable, not fixed)
- Punching: 5 energy gain per hit
- **Smart delay:** 3s delay after use prevents spam (can't chain abilities endlessly)
- **Quick ability access:** Instant cooldown reset if held long enough (rewards planning)


<details class="mini-panel">
  <summary class="mini-panel-header">
    <span class="mini-panel-title"> <strong>The Psychological Layer</strong></span>
    <span class="mini-panel-icon">▼</span>
  </summary>

  <div class="mini-panel-body">

  Holding a button longer to charge feels rewarding. Discrete stamina units feel more "spendable" than linear drain. Regen delay after use feels like strategic planning, not arbitrary cooldown timer. These details separate casual gameplay from felt fairness.

  </div>
</details>

</div>


<style>
  #ptp-re-1:checked ~ .media-slides figure:nth-child(1){
    display: block;
  }

</style>




  </div>
</details>





</div>

</details>






## 3. UI System (UIToolKit) {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ <strong>UI System</strong> : UIToolkit</span>
    <span class="section-icon">▾</span>
  </summary>


<!-- UI MEDIA CAROUSEL (ptp-ui-*) -->
<div class="media-carousel">
  <input type="radio" name="ptp-ui0-media" id="ptp-ui0-1" checked>

  <div class="media-slides">
    <figure><video src="/public/videos/path-to-power/ptp-hud-0.mp4" autoplay muted loop playsinline></video></figure>
  </div>

<div class="media-captions">
            <div class="media-caption">
            Overview of player HUD.
            </div>
        </div>
</div>
<div class="project-text">

UI & HUD built with **Unity's modern UIElements system**, entirely code-driven for:
- **Rapid iteration** (change code, see results instantly)
- **Designer collaboration** (parameter-driven UI: adjust bar colors, animation speeds, positioning)
- **Reusability** (E.g: ColorBar, Animation & Menu components all decoupled)

<details class="mini-panel">
  <summary class="mini-panel-header">
    <span class="mini-panel-title"> <strong>In-Game HUD (always visible)</strong></span>
    <span class="mini-panel-icon">▼</span>
  </summary>

  <div class="mini-panel-body">
  <div class="media-carousel">
  <input type="radio" name="ptp-hud-media" id="ptp-hud-1" checked>
  <input type="radio" name="ptp-hud-media" id="ptp-hud-2">
  <input type="radio" name="ptp-hud-media" id="ptp-hud-3">
  <input type="radio" name="ptp-hud-media" id="ptp-hud-4">
  <div class="media-slides">
    <figure><video src="/public/videos/path-to-power/ptp-hud-1.mp4" autoplay muted loop playsinline></video></figure>
    <figure><video src="/public/videos/path-to-power/ptp-hud-2.mp4" autoplay muted loop playsinline></video></figure>
    <figure><video src="/public/videos/path-to-power/ptp-hud-3.mp4" autoplay muted loop playsinline></video></figure>
    <figure><video src="/public/videos/path-to-power/ptp-hud-4.mp4" autoplay muted loop playsinline></video></figure>
  </div>
  <div class="media-arrows">
    <label for="ptp-hud-4" class="media-arrow-btn media-arrow-prev arrow-prev-1">‹</label>
    <label for="ptp-hud-1" class="media-arrow-btn media-arrow-prev arrow-prev-2">‹</label>
    <label for="ptp-hud-2" class="media-arrow-btn media-arrow-prev arrow-prev-3">‹</label>
    <label for="ptp-hud-3" class="media-arrow-btn media-arrow-prev arrow-prev-4">‹</label>
      <label for="ptp-hud-1" class="media-arrow-btn media-arrow-next arrow-next-4">›</label>
      <label for="ptp-hud-2" class="media-arrow-btn media-arrow-next arrow-next-1">›</label>
      <label for="ptp-hud-3" class="media-arrow-btn media-arrow-next arrow-next-2">›</label>
      <label for="ptp-hud-4" class="media-arrow-btn media-arrow-next arrow-next-3">›</label>
  </div>
    <div class="media-captions">
                <div class="media-caption">
                  Avatar icon + Energy bar (Cyan→Yellow, animated lerp)
                </div>
                <div class="media-caption">
                  Health bar (Green→Orange→Red gradient, animated lerp)
                </div>
                <div class="media-caption">
                  Stamina units (3 discrete yellow/gray boxes = psychological "use up units" vs. linear drain)
                </div>
                <div class="media-caption">
                  Score label (top-right, pop + shake on hit + Floating "+Score" text)
                </div>
            </div>
    </div>


    
  <style>
    #ptp-hud-1:checked ~ .media-slides figure:nth-child(1),
    #ptp-hud-2:checked ~ .media-slides figure:nth-child(2),
    #ptp-hud-3:checked ~ .media-slides figure:nth-child(3),
    #ptp-hud-4:checked ~ .media-slides figure:nth-child(4) {
      display: block;
    }


    #ptp-hud-1:checked ~ .media-arrows .arrow-prev-1,
    #ptp-hud-2:checked ~ .media-arrows .arrow-prev-2,
    #ptp-hud-3:checked ~ .media-arrows .arrow-prev-3,
    #ptp-hud-4:checked ~ .media-arrows .arrow-prev-4,
    #ptp-hud-1:checked ~ .media-arrows .arrow-next-1,
    #ptp-hud-2:checked ~ .media-arrows .arrow-next-2,
    #ptp-hud-3:checked ~ .media-arrows .arrow-next-3,
    #ptp-hud-4:checked ~ .media-arrows .arrow-next-4 {
      opacity: 1;
      pointer-events: auto;
    }
  </style>

  </div>
</details>

<details class="mini-panel">
  <summary class="mini-panel-header">
    <span class="mini-panel-title"> <strong>Menu Systems</strong></span>
    <span class="mini-panel-icon">▼</span>
  </summary>

  <div class="mini-panel-body">
  <div class="media-carousel">
  <input type="radio" name="ptp-ui-media" id="ptp-ui-1" checked>
  <input type="radio" name="ptp-ui-media" id="ptp-ui-2">
  <input type="radio" name="ptp-ui-media" id="ptp-ui-3">
  <input type="radio" name="ptp-ui-media" id="ptp-ui-4">
  <div class="media-slides">
    <figure><video src="/public/videos/path-to-power/ptp-ui-1.mp4" autoplay muted loop playsinline></video></figure>
    <figure><video src="/public/videos/path-to-power/ptp-ui-2.mp4" autoplay muted loop playsinline></video></figure>
    <figure><video src="/public/videos/path-to-power/ptp-ui-3.mp4" autoplay muted loop playsinline></video></figure>
    <figure><video src="/public/videos/path-to-power/ptp-ui-4.mp4" autoplay muted loop playsinline></video></figure>
  </div>
  <div class="media-arrows">
    <label for="ptp-ui-4" class="media-arrow-btn media-arrow-prev arrow-prev-1">‹</label>
    <label for="ptp-ui-1" class="media-arrow-btn media-arrow-prev arrow-prev-2">‹</label>
    <label for="ptp-ui-2" class="media-arrow-btn media-arrow-prev arrow-prev-3">‹</label>
    <label for="ptp-ui-3" class="media-arrow-btn media-arrow-prev arrow-prev-4">‹</label>
      <label for="ptp-ui-1" class="media-arrow-btn media-arrow-next arrow-next-4">›</label>
      <label for="ptp-ui-2" class="media-arrow-btn media-arrow-next arrow-next-1">›</label>
      <label for="ptp-ui-3" class="media-arrow-btn media-arrow-next arrow-next-2">›</label>
      <label for="ptp-ui-4" class="media-arrow-btn media-arrow-next arrow-next-3">›</label>
  </div>
    <div class="media-captions">
                <div class="media-caption">
                  Main Menu (fade-in title, play/settings/quit buttons, adjustable UI scale)
                </div>
                <div class="media-caption">
                  Pause Menu (overlay, time freezes, SFX/BGM volume sliders)
                </div>
                <div class="media-caption">
                  Death Screen (full-screen overlay, revive button)
                </div>
                <div class="media-caption">
                  Sign Text Boxes (triggered by collider proximity, environmental flavor)
                </div>
            </div>
    </div>

    
  <style>
    #ptp-ui-1:checked ~ .media-slides figure:nth-child(1),
    #ptp-ui-2:checked ~ .media-slides figure:nth-child(2),
    #ptp-ui-3:checked ~ .media-slides figure:nth-child(3),
    #ptp-ui-4:checked ~ .media-slides figure:nth-child(4) {
      display: block;
    }


    #ptp-ui-1:checked ~ .media-arrows .arrow-prev-1,
    #ptp-ui-2:checked ~ .media-arrows .arrow-prev-2,
    #ptp-ui-3:checked ~ .media-arrows .arrow-prev-3,
    #ptp-ui-4:checked ~ .media-arrows .arrow-prev-4,
    #ptp-ui-1:checked ~ .media-arrows .arrow-next-1,
    #ptp-ui-2:checked ~ .media-arrows .arrow-next-2,
    #ptp-ui-3:checked ~ .media-arrows .arrow-next-3,
    #ptp-ui-4:checked ~ .media-arrows .arrow-next-4 {
      opacity: 1;
      pointer-events: auto;
    }
  </style>

  </div>
</details>

</div>

</details>

<style>
  #ptp-ui0-1:checked ~ .media-slides figure:nth-child(1) {
    display: block;
  }

</style>




---

## - - - --->Technical<--- - - -  {.outline-only}
# 𓆩Technical Deep Dive𓆪 {.section-title-center}


## Architecture Overview {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Architecture Overview - Modular Manager Pattern</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

```
┌─────────────────────────────────────────────────────────┐
│                    INPUT SYSTEM                         │
│              (InputHandler + New Input System)          │
└──────┬──────────────┬──────────────┬────────────────────┘
       │              │              │
       ↓              ↓              ↓
┌────────────┐  ┌──────────┐  ┌─────────────┐
│  Movement  │  │  Combat  │  │  Charging   │
│   System   │  │  System  │  │   System    │
└──────┬─────┘  └────┬─────┘  └──────┬──────┘
       │             │               │
       └─────────────┼───────────────┘
                     ↓
         ┌─── FEEDBACK MANAGER ───┐
         │                        │
    ┌────┴────┬────────┬─────┬───┴────┐
    ↓         ↓        ↓     ↓        ↓
  VFX Pool  SFX Pool  Camera Health   UI
           Manager   Impulse  Events  Updates
```

**Key Design Principle:** Single source of truth for hit feedback. `ApplyExternalHit()` orchestrates all layers, preventing desynchronization and callback spaghetti.

**Manager Pattern (Singleton):**
- `VfxManager`: Object pooling (pre-instantiated, deactivate on timeout, reuse)
- `SfxManager`: Audio source pooling (pitch variation per clip, volume scaling)
- `UIToolkitManager`: Declarative UI system (code-driven, parameter-based)
- `AnimationEventBridge`: Syncs animation events to gameplay code (frame-perfect timing)

**Benefits:**
- ✅ Decoupled systems (VFX doesn't know about SFX)
- ✅ Performance (pooling prevents allocation stalls)
- ✅ Maintainability (changes to one manager don't cascade)
- ✅ Extensibility (add new feedback layer without touching existing code)

**Why This Matters:** The diagram shows clear separation of concerns. Input flows to three systems independently. All feedback funnels through one manager. This is professional architecture. Easy to debug, Easy to extend, Easy to test.

</div>

</details>

## 1. Movement {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ System 1: Forgiving Movement</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Jump Buffer & Coyote Time:**
```csharp
// Player presses jump 0.15s BEFORE landing
if (jumpInputTime > Time.time - jumpBufferWindow && isGrounded)
    Jump();  // retroactively register input

// Player can jump 0.15s AFTER leaving ground
if (coyoteTimeCounter > 0f && jumpPerformed)
    Jump();  // free jump with no air usage
```

**Why it works:** Jump buffer catches inputs before the player lands (catches mistakes). Coyote time lets them jump slightly after leaving ground (catches "I jumped too late" moments). Together: forgiving but responsive.

**Variable Gravity (Hang Time Effect):**
```csharp
if (jumpHeld && velocity.y < hangTimeThreshold)
    rigidbody.gravityScale = normalGravity * 0.4f;  // hang
else if (velocity.y < 0)
    rigidbody.gravityScale = normalGravity * 5.5f;  // fall fast
```

**Why it works:** At apex, gravity drops to 0.4x (player "floats" briefly = control). On descent, gravity jumps to 5.5x (player falls fast = commitment). This matches player intuition: jump feels floaty at top, falls fast after. Most junior devs use constant gravity—you've engineered feel into physics.

**Dash & Combat Input Buffering:**
- Last directional input recorded (lastUpTime, lastLeftTime, etc.)
- Dash reads highest-priority direction from buffer
- Enables "rapid direction change mid-air" skill expression
- Result: Player can queue a dash direction before pressing dash button

**Attack Momentum Preservation:**
```csharp
recordedMomentum = rigidbody.velocity;
// During attack animation (0.3s tween)
attackAnimationMomentum = Mathf.Lerp(recordedMomentum, 0, t / 0.3f);
// After attack
rigidbody.velocity = new Vector2(attackAnimationMomentum.x, rigidbody.velocity.y);
```

**Why it works:** Records player momentum before attacking. Smoothly removes it during attack (feels weighty, creates "commitment"). Restores it after (keeps flow). This is the difference between "hero feels rooted during attack" (good) vs. "hero freezes in place" (bad) vs. "hero momentum vanishes" (jarring).

**The Takeaway:** Every parameter serves a purpose. None are accidental. This is systems thinking.

</div>

</details>

## 2. Combat {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ System 2: Combat Sequencing</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Animation Event Triggers Damage (NOT frame-counting):**
```csharp
// In Animator: "Attack_Hit" event fires at frame 15/24
// In code: OnHitEvent listener
void OnAnimationHitEvent(int comboStep)
{
    ApplyExternalHit(
        damage: comboBaseDamage * damageScale[comboStep],
        knockback: knockbackBase * directionality[comboStep],
        hitStopDuration: 0.05f + (comboStep * 0.01f)  // scales
    );
}
```

**Why this approach:** Animators set attack frames visually. Programmers add event at the right frame. On playback, the event fires at exactly that frame. If animator changes the animation, event still fires at the right point. This is fragile-proof design.

**Per-Step Damage Scaling (Designer-Friendly):**
```csharp
[System.Serializable]
public class ComboAttackData
{
    public float damage;           // Hot-swappable
    public float knockback;        // Hot-swappable
    public float attackMomentum;   // Hot-swappable
    public float comboTimeout;     // Per-step timeout
    public float hitStopDuration;  // Scales per step
}
```

**Why it matters:** Designer changes `damage` value from 10 to 15. Game hot-reloads, change visible instantly. No code recompile, no rebuild, no waiting. This enables 4-week polish cycles.

**Hit-Stop Scaling (Crescendo Effect):**
- Early hits (1–2): 0.05s freeze
- Mid hits (3–4): 0.065s freeze
- Final hit (5): 0.08s freeze
- Result: Natural rhythm without explicit UI counter

**What the player feels:** Each hit feels slightly more impactful than the last. They don't see a "combo counter"—they *feel* the rhythm in the freezes. This is psychological game design.


</div>

</details>

## 3. Feedback Synchronization {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ System 3: Feedback</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Single Call, 5+ Layers:**
```csharp
public void ApplyExternalHit(float dmg, float knockback, Vector3 attackerPos, 
                              string sfxId, int hitIndex, MonoBehaviour causer)
{
    // Layer 1: Damage
    health.ApplyDamage(dmg, causer);
    
    // Layer 2: Physics
    Vector2 dir = ((Vector2)transform.position - (Vector2)attackerPos).normalized;
    rigidbody.AddForce(new Vector2(dir.x * knockback, dir.y * knockback/3), ForceMode2D.Impulse);
    
    // Layer 3: VFX
    VfxManager.Instance.PlayVFX("HitImpact", transform.position, scale: shockScale);
    
    // Layer 4: SFX
    SfxManager.Instance.PlaySfx(sfxId);
    
    // Layer 5: Camera
    var impulse = Camera.main.GetComponent<CinemachineImpulseSource>();
    impulse.GenerateImpulse(new Vector3(0.9f * dir.x, 0.5f, 0));  // scales by hit index
    
    // Layer 6: Animation
    HitFlash(hitIndex);  // color intensity: light → medium → heavy
    
    // Layer 7: Time (Hit-Stop)
    StartCoroutine(HitStopFreeze(hitDuration[hitIndex]));
}
```

**Result:** All systems fire simultaneously, no desync, no callback hell.

**The Professional Pattern:** One entry point. All effects orchestrated. If you want to add new feedback (screen edge flash, particle color shift), you extend this method. You don't scatter callbacks everywhere. This is how code stays maintainable at scale.

**Why Desync Happens (Bad Code):**
- VFX call fires
- SFX call fires separately (slight delay)
- Camera shake fires separately (different delay)
- UI updates on a different frame
- Result: Feedback feels loose, uncoordinated, "weak"

**Why This Synchronization Works (Good Code):**
- All seven systems fire in the same frame
- Same vector direction (knockback matches camera direction)
- Same intensity data (hit-stop scales match, color intensity scales match)
- Result: Feedback feels "punchy", coordinated, impactful


</div>

</details>

## 4. UI System (Declarative) {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ System 4: UIToolkit</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Example: Health Bar (Pure C#)**
```csharp
public class ColorBar
{
    private VisualElement bar;
    private VisualElement gloss;
    
    public void Initialize(string name, Color color, VisualElement parent)
    {
        bar = new VisualElement { name = name };
        bar.style.backgroundColor = color;
        bar.style.width = Length.Percent(100);
        
        // Shine effect (declarative overlay)
        gloss = new VisualElement();
        gloss.style.width = Length.Percent(28);  // shiny region
        bar.Add(gloss);
        parent.Add(bar);
    }
    
    public void SetValue(float normalizedValue)
    {
        // Smooth lerp animation
        bar.style.width = Length.Percent(normalizedValue * 100f);
        gloss.style.width = Length.Percent(normalizedValue * 28f);
    }
}
```

**Why Pure C# (not UXML):**
- No editor drag-drop = no merge conflicts in version control
- Hot-reload in play mode = instant feedback on changes
- Declarative = UI structure is clear in code
- Reusable = component composition, not one-off screens

**Benefits Over Legacy Canvas:**
- ✅ Modern approach (industry standard 2024+)
- ✅ Performance (internal batching better than Canvas)
- ✅ Scalability (cleaner code for large UI systems)
- ✅ Team collaboration (code-based, not editor-based)


</div>

</details>

---

## - - - --->Extras<--- - - -  {.outline-only}


# 𓆩Extra Notes𓆪 {.section-title-center}
## Smart Balancing {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Smart Balancing Under Deadline</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">


Delivered in **4 weeks under deadline pressure.** Here's the my apporach:

### Build the Foundation First

1. **Movement (week 1)** ✓ - Forgiving, responsive, foundation-ready
2. **Combat (week 2)** ✓ - Attack sequencing, parameter-driven
3. **Feedback (week 3)** ✓ - Multi-layer orchestration
4. **Polish (week 4)** ✓ - Tuning, balancing, iteration

**Why this order matters:** Movement is the foundation all other systems rest on. If movement feels bad, no amount of combat polish saves it. Combat is built on movement. Feedback amplifies what's already good. Polish is refinement, not foundation-building.

---

### Tune Intelligently

- **Energy regen delay** (3s after use): Prevents spam without cooldown UI
- **Stamina as discrete units** (3 bars): Psychological difference from linear drain
- **Per-step combo timeout**: Contextual rhythm instead of global timer
- **Hit-stop scaling** (0.05–0.08s): Crescendo effect = feels fair
- **Knockback direction**: Contextual, not just "away from attacker"

**What each parameter does:**
- Regen delay: Encourages planning (can't chain infinitely)
- Discrete stamina: Feels "spent" vs. drained (psychological)
- Per-step timeout: Creates natural rhythm (each hit feels different)
- Hit-stop scaling: Build narrative through freezes (early hit quick, final hit punchy)
- Contextual knockback: Physics feels real (horizontal + vertical based on hit position)

---
### Parameter-Driven

Every tunable value defined in structures:
- `ComboAttackData`: damage, knockback, momentum, timeout, hit-stop
- `EnergySystem`: regenRate, regenDelay, cost, maxEnergy
- `MovementPhysics`: jumpStrength, hangGravity, fallGravity, dashForce

**Result:** One person can balance game in hours (no code rewrites), team environment ready.

**Proof:** The 4-week deadline proves this works, instead of using hard coded values.

</div>

</details>




## Technologies & Stack {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Technologies & Stack</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

- **Engine:** Unity 2023 LTS
- **Language:** C#
- **UI System:** UIToolkit (code-driven, no UXML)
- **Physics:** Rigidbody2D with custom momentum handling
- **Animation:** Mecanim with event-driven synchronization
- **Performance:** Object pooling (VFX/SFX), no runtime allocations
- **Architecture:** Singleton Manager pattern with orchestration
- **Input Handling:** New Input System (modern, event-driven)


</div>

</details>



## Project Scope {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Project Scope</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Solo Development** over 4 weeks  
**Scope:** Action platformer foundation (movement + 2-ability combat + feedback + UI)  
**Status:** Production-ready foundation; features expandable (new characters, abilities, levels)  
**Code Quality:** Professional-grade (clean, documented, team-ready)

</div>

</details>



## Links & Resources {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Links & Resources</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

- **GitHub:** [Not avaliable yet]
- **Forgiving Movement Framework:** [Not avaliable yet]
- **Play in Browser:** [Not avaliable yet]

</div>

</details>

---

