---
layout: doc
title: Pixel Adventure
description: A pixel-art top-down action game with two unique boss encounters and persistent gem-collection progression
---

<a href="../projects/" class="back-projects-button"> ❮❮ All Projects </a>


<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">Project Status :</span>
      <span class="info-line-value"> Ongoing | 8 Weeks</span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Project Type :</span>
      <span class="info-line-value"> Solo Project | Unity (C#)</span>
    </p>
  </div>
</div>

# Pixel Adventure {.page-title-center}
-------


<p class="project-text">
  A <strong>Unity 2D top-down action game</strong> where players battle unique bosses and collect gems to unlock the final room, focusing on <strong>responsive combat</strong>, <strong>boss design</strong>, and <strong>smooth game feel</strong>.
</p>


  <div class="project-info-right">
    <MediaCarousel data-hx-reveal id="pa-media" :slides="[
  { src: '/images/PixelAdventure/pa-1.png', type: 'image', alt: 'Pixel Adventure screenshot 1', caption: 'Showcase of collecting the Final Gem.' },
  { src: '/videos/PixelAdventure/pa-2.mp4', caption: 'Showcase of face paced Robot Boss fight.' },
  { src: '/videos/PixelAdventure/pa-3.mp4', caption: 'Showcase of tactical Necromancer Boss fight.' },
  { src: '/images/PixelAdventure/pa-4.png', type: 'image', alt: 'Pixel Adventure screenshot 4', caption: 'Showcase of Necromancer Boss Room.' },
  { src: '/images/PixelAdventure/pa-5.png', type: 'image', alt: 'Pixel Adventure screenshot 5', caption: 'Showcase of Robot Boss Room.' },
  { src: '/images/PixelAdventure/pa-6.png', type: 'image', alt: 'Pixel Adventure screenshot 6', caption: 'A picture of the Gem in the story.' }
]" />
  </div>





---
# General {.section-title-center data-hx-reveal="true"}


## Quick Summary for Recruiters {.outline-only}


<ProjectPanel icon="target" title="Quick Summary for Recruiters">

  <div class="project-text">
    <ul>
      <li>Designed and implemented <strong>two mechanically distinct bosses</strong> on top of a reusable enemy architecture</li>
      <li>Built a <strong>full game loop</strong>: menu → intro → exploration → boss fights → progression → victory</li>
      <li>Implemented <strong>combat, AI, UI, VFX, audio, and persistence systems</strong> solo in Unity 2D</li>
      <li>Focused on <strong>game feel</strong> (dash, hitstop, VFX, SFX) and <strong>readable, extensible code structure</strong></li>
    </ul>
  </div>

</ProjectPanel>


## Game Overview & Gameplay {.outline-only}
<ProjectPanel icon="gamepad-2" title="Game Overview &amp; Gameplay">

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

</ProjectPanel>



---
# Highlights {.section-title-center data-hx-reveal="true"}



## Architecture & Design Patterns {.outline-only}
<ProjectPanel icon="layers" title="Architecture &amp; Design Patterns">

  <div class="project-text">
    <ul>
      <li><strong>Enemy AI Framework:</strong> Parent <code>Enemy</code> class with inheritance hierarchy; <code>Boss1</code> and <code>Boss2</code> override behavior for unique attack patterns</li>
      <li><strong>State Machines:</strong> Player and enemy behavior driven by hierarchical state systems with input-driven transitions</li>
      <li><strong>VFX Management:</strong> Centralized singleton <code>VFXManager</code> for effect spawning and cleanup</li>
      <li><strong>Data Persistence:</strong> <code>ScoreSystem</code> + <code>PlayerPrefs</code> to save gem progression across sessions</li>
    </ul>
  </div>

</ProjectPanel>



## Systems Implemented {.outline-only}
<ProjectPanel icon="layers" title="Systems Implemented">

  <div class="project-text">
    <ul>
      <li><strong>Combat:</strong> Hitbox detection, damage calculation, knockback mechanics</li>
      <li><strong>Movement:</strong> 8-directional top-down movement with dash, stamina cost, and cooldown management</li>
      <li><strong>Boss AI:</strong> Coroutine-based ability timing, cooldown handling, and phase transitions (e.g. Necromancer clone phase)</li>
      <li><strong>UI:</strong> Real-time health, stamina, and mana bars; pause menu with resume, restart, controls, main menu, and quit</li>
      <li><strong>Audio:</strong> Centralized <code>AudioManager</code> for SFX playback</li>
    </ul>
  </div>

</ProjectPanel>


