---
layout: doc
title: Pixel Adventure
description: A pixel-art top-down action game with two unique boss encounters and persistent gem-collection progression
---

<a href="../projects/" class="back-home-button"> ❮❮ All Projects </a>



# Pixel Adventure {.page-title-center}
-------


<p class="project-text">
  A <strong>Unity 2D top-down action game</strong> where players battle unique bosses and collect gems to unlock the final room, focusing on <strong>responsive combat</strong>, <strong>boss design</strong>, and <strong>smooth game feel</strong>.
</p>


<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">Project Status :</span>
      <span class="info-line-value"> Ongoing</span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Project Type :</span>
      <span class="info-line-value"> Solo Project</span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Project Duration :</span>
      <span class="info-line-value"> 8 Weeks </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Software Used :</span>
      <span class="info-line-value"> Unity</span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Languages Used :</span>
      <span class="info-line-value"> C#</span>
    </p>
  </div>


  <div class="project-info-right">
    <div class="media-carousel">
      <!-- radios -->
      <input type="radio" name="pa-media" id="pa-1" checked>
      <input type="radio" name="pa-media" id="pa-2">
      <input type="radio" name="pa-media" id="pa-3">
      <input type="radio" name="pa-media" id="pa-4">
      <input type="radio" name="pa-media" id="pa-5">
      <input type="radio" name="pa-media" id="pa-6">
      <!-- slides -->
      <div class="media-slides">
        <figure><img src="/images/PixelAdventure/pa-1.png" alt="Pixel Adventure screenshot 1"></figure>
        <figure><video src="/videos/PixelAdventure/pa-2.mp4" autoplay muted loop playsinline></video></figure>
        <figure><video src="/videos/PixelAdventure/pa-3.mp4" autoplay muted loop playsinline></video></figure>
        <figure><img src="/images/PixelAdventure/pa-4.png" alt="Pixel Adventure screenshot 4"></figure>
        <figure><img src="/images/PixelAdventure/pa-5.png" alt="Pixel Adventure screenshot 5"></figure>
        <figure><img src="/images/PixelAdventure/pa-6.png" alt="Pixel Adventure screenshot 6"></figure>
      </div>
      <!-- arrows -->
      <div class="media-arrows">
        <!-- prev -->
        <label for="pa-6" class="media-arrow-btn media-arrow-prev arrow-prev-1">‹</label>
        <label for="pa-1" class="media-arrow-btn media-arrow-prev arrow-prev-2">‹</label>
        <label for="pa-2" class="media-arrow-btn media-arrow-prev arrow-prev-3">‹</label>
        <label for="pa-3" class="media-arrow-btn media-arrow-prev arrow-prev-4">‹</label>
        <label for="pa-4" class="media-arrow-btn media-arrow-prev arrow-prev-5">‹</label>
        <label for="pa-5" class="media-arrow-btn media-arrow-prev arrow-prev-6">‹</label>
        <!-- next -->
        <label for="pa-2" class="media-arrow-btn media-arrow-next arrow-next-1">›</label>
        <label for="pa-3" class="media-arrow-btn media-arrow-next arrow-next-2">›</label>
        <label for="pa-4" class="media-arrow-btn media-arrow-next arrow-next-3">›</label>
        <label for="pa-5" class="media-arrow-btn media-arrow-next arrow-next-4">›</label>
        <label for="pa-6" class="media-arrow-btn media-arrow-next arrow-next-5">›</label>
        <label for="pa-1" class="media-arrow-btn media-arrow-next arrow-next-6">›</label>
      </div>
      <!-- dots -->
      <div class="media-dots">
        <label for="pa-1"></label>
        <label for="pa-2"></label>
        <label for="pa-3"></label>
        <label for="pa-4"></label>
        <label for="pa-5"></label>
        <label for="pa-6"></label>
      </div>
      <div class="media-captions">
        <div class="media-caption">
          Showcase of collecting the Final Gem.
        </div>
        <div class="media-caption">
          Showcase of face paced Robot Boss fight.
        </div>
        <div class="media-caption">
          Showcase of tactical Necromancer Boss fight.
        </div>
        <div class="media-caption">
          Showcase of Necromancer Boss Room.
        </div>
        <div class="media-caption">
          Showcase of Robot Boss Room.
        </div>
        <div class="media-caption">
          A picture of the Gem in the story.
        </div>
      </div>
    </div>
  </div>
</div>


<style>
  /* show slides */
  #pa-1:checked ~ .media-slides figure:nth-child(1),
  #pa-2:checked ~ .media-slides figure:nth-child(2),
  #pa-3:checked ~ .media-slides figure:nth-child(3),
  #pa-4:checked ~ .media-slides figure:nth-child(4),
  #pa-5:checked ~ .media-slides figure:nth-child(5),
  #pa-6:checked ~ .media-slides figure:nth-child(6) {
    display: block;
  }


  /* active dot */
  #pa-1:checked ~ .media-dots label:nth-child(1),
  #pa-2:checked ~ .media-dots label:nth-child(2),
  #pa-3:checked ~ .media-dots label:nth-child(3),
  #pa-4:checked ~ .media-dots label:nth-child(4),
  #pa-5:checked ~ .media-dots label:nth-child(5),
  #pa-6:checked ~ .media-dots label:nth-child(6) {
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
  #pa-1:checked ~ .media-arrows .arrow-prev-1,
  #pa-2:checked ~ .media-arrows .arrow-prev-2,
  #pa-3:checked ~ .media-arrows .arrow-prev-3,
  #pa-4:checked ~ .media-arrows .arrow-prev-4,
  #pa-5:checked ~ .media-arrows .arrow-prev-5,
  #pa-6:checked ~ .media-arrows .arrow-prev-6,
  #pa-1:checked ~ .media-arrows .arrow-next-1,
  #pa-2:checked ~ .media-arrows .arrow-next-2,
  #pa-3:checked ~ .media-arrows .arrow-next-3,
  #pa-4:checked ~ .media-arrows .arrow-next-4,
  #pa-5:checked ~ .media-arrows .arrow-next-5,
  #pa-6:checked ~ .media-arrows .arrow-next-6 {
    opacity: 1;
    pointer-events: auto;
  }
</style>


---
# 𓆩General𓆪 {.section-title-center}


## Quick Summary for Recruiters {.outline-only}


<details class="section-panel">
  <summary class="section-header">
    <span class="section-title"> ☑︎ Quick Summary for Recruiters</span>
    <span class="section-icon">▾</span>
  </summary>

  <div class="project-text">
    <ul>
      <li>Designed and implemented <strong>two mechanically distinct bosses</strong> on top of a reusable enemy architecture</li>
      <li>Built a <strong>full game loop</strong>: menu → intro → exploration → boss fights → progression → victory</li>
      <li>Implemented <strong>combat, AI, UI, VFX, audio, and persistence systems</strong> solo in Unity 2D</li>
      <li>Focused on <strong>game feel</strong> (dash, hitstop, VFX, SFX) and <strong>readable, extensible code structure</strong></li>
    </ul>
  </div>

</details>


## Game Overview & Gameplay {.outline-only}
<details class="section-panel">
  <summary class="section-header">
    <span class="section-title"> ⚔︎ Game Overview & Gameplay</span>
    <span class="section-icon">▾</span>
  </summary>

  <p class="project-text">
    Players follow a mysterious gem into a cave system and must defeat two distinct bosses to collect gems to unlock progression. 
  </p>

  <p class="project-text">
    The core loop mixes <strong>exploration</strong>, <strong>boss fights</strong>, and <strong>resource-based combat</strong>.
  </p>

  <h3 class="project-text">Showcase Video:</h3>


  <div class="video-wrapper">
    <iframe
      src="https://www.youtube.com/embed/3lBQ5KZLOZc?si=8msajJs84y9lskF7"
      title="Pixel Adventure gameplay video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>


  <h3 class="project-text">Core Gameplay:</h3>

  <div class="project-text">
    <ul>
      <li><strong>Dual Attack Styles:</strong> Sword slashing (stamina-based) and fireball projectiles (mana-based)</li>
      <li><strong>Boss 1 – fast-paced Robot:</strong> Teleports around the arena and fires rapid projectiles, forcing aggressive dash usage</li>
      <li><strong>Boss 2 – tactical Necromancer:</strong> Shoots triple blasts, summons skeleton mages, and spawns two shadow clones at 50% HP</li>
      <li><strong>Progression:</strong> 2 gems required to unlock the final room; deaths respawn the player without wiping gem progress</li>
      <li><strong>Polish:</strong> Hitstop, knockback feedback, particle effects, intro cutscene, and a victory screen</li>
    </ul>
  </div>

</details>



---
# 𓆩Highlights𓆪 {.section-title-center} 



## Architecture & Design Patterns  {.outline-only}
<details class="section-panel">
  <summary class="section-header">
    <span class="section-title"> ✮ Architecture & Design Patterns </span>
    <span class="section-icon">▾</span>
  </summary>

  <div class="project-text">
    <ul>
      <li><strong>Enemy AI Framework:</strong> Parent <code>Enemy</code> class with inheritance hierarchy; <code>Boss1</code> and <code>Boss2</code> override behavior for unique attack patterns</li>
      <li><strong>State Machines:</strong> Player and enemy behavior driven by hierarchical state systems with input-driven transitions</li>
      <li><strong>VFX Management:</strong> Centralized singleton <code>VFXManager</code> for effect spawning and cleanup</li>
      <li><strong>Data Persistence:</strong> <code>ScoreSystem</code> + <code>PlayerPrefs</code> to save gem progression across sessions</li>
    </ul>
  </div>

</details>



## Systems Implemented {.outline-only}
<details class="section-panel">
  <summary class="section-header">
    <span class="section-title"> ✮ Systems Implemented</span>
    <span class="section-icon">▾</span>
  </summary>

  <div class="project-text">
    <ul>
      <li><strong>Combat:</strong> Hitbox detection, damage calculation, knockback mechanics</li>
      <li><strong>Movement:</strong> 8-directional top-down movement with dash, stamina cost, and cooldown management</li>
      <li><strong>Boss AI:</strong> Coroutine-based ability timing, cooldown handling, and phase transitions (e.g. Necromancer clone phase)</li>
      <li><strong>UI:</strong> Real-time health, stamina, and mana bars; pause menu with resume, restart, controls, main menu, and quit</li>
      <li><strong>Audio:</strong> Centralized <code>AudioManager</code> for SFX playback</li>
    </ul>
  </div>

</details>


##
