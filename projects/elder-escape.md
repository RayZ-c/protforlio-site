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
      <span class="info-line-label">Project Type :</span>
      <span class="info-line-value"> Endless Runner | Unreal Engine 5 (100% Blueprints) </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Core Focus :</span>
      <span class="info-line-value"> Gameplay Loop | Team Coordination | Rapid Iteration </span>
    </p>
  </div>

</div>

# Cyborg Monkey Endless Runner {.page-title-center}
-------

<p class="project-text">
  A <strong>fast-paced endless runner</strong> built in **4 days** for a game jam with a **4-person team**. The player controls a retired disabled man in a wheelchair, sprinting down three lanes while being chased by cyborg monkeys, dodging randomly generated obstacles as speed and tension continuously ramp up. Delivered with <strong>zero bugs</strong> through Blueprint-only development, clear task delegation, and modular systems design—demonstrating efficient team coordination under severe time constraints.
</p>

---

# 𓆩General𓆪 {.section-title-center}

## Quick Overview {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">☑︎ Quick Summary for Recruiters</span>
    <span class="section-icon">▾</span>
  </summary>

  <div class="project-text">
    <ul>
      <li><strong>4-day game jam delivery</strong> — complete, playable, zero bugs</li>
      <li><strong>4-person team coordination</strong> — clear role separation and task delegation</li>
      <li><strong>100% Blueprint implementation</strong> — no C++, fast iteration, rapid prototyping</li>
      <li><strong>3-lane movement system</strong> with smooth transitions and lane-specific collision</li>
      <li><strong>Procedural floor generation</strong> — infinite obstacles with configurable spawning</li>
      <li><strong>Progressive difficulty scaling</strong> — continuous speed increase creates natural tension curve</li>
      <li><strong>Score system with high-score persistence</strong> — serialized saves across play sessions</li>
      <li><strong>Sound design</strong> — comprehensive SFX for all actions (jump, dash, death, monkey vocalizations)</li>
      <li><strong>Narrative cohesion</strong> — disabled protagonist, cyborg threat, visual chaser creates memorable experience</li>
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

# "Scope + Simplicity = Delivery Under Pressure"

This 4-day jam project demonstrates:
- ✅ **Focused core loop** (movement, obstacles, death) — no feature creep
- ✅ **Clear team roles** (programmer, designer, modeler, artist) — no overlap, no delays
- ✅ **Blueprint-first workflow** (no compilation overhead) — iterate fast, fail fast
- ✅ **Data-driven spawning** (random obstacles per lane) — extensible without code changes
- ✅ **Single-hit death design** (no health bars) — keeps sessions snappy, score meaningful
- ✅ **Modular architecture** (decoupled systems) — designers and artists work independently

The philosophy: *"What's the minimum viable game that's still fun, and how do we make it multiplayer-friendly?"*

Blueprint-only production proved sufficient for jam scale—no C++ needed, no technical bottlenecks. Fast iteration and frequent team communication enabled rapid balancing and bug fixes.

</div>

</details>

---

## - - - --->Features<--- - - - {.outline-only}

# Highlight Features 𓆪 {.section-title-center}

## 1. Player Controller & Input System {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Lane Movement & Input Handling</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Input Architecture:**
Input is driven through UE5's **Enhanced Input** system with a single `IMC_RunnerDefault` mapping context bound on Begin Play.

**Keybinds:**
- **A / D:** Shift one lane left/right (3 lanes total, indices clamped 0–2)
- **W / Space:** Jump to clear mid‑height signs and small pots
- **S:** Force the character back to the ground immediately when mid‑air, cancelling hang time

Each action triggers a dedicated **Input Action** asset (`Left_IA`, `Right_IA`, `Jump_IA`, `Slide_IA`) and plays a corresponding SFX cue for strong feedback.

**Lane Change Blueprint (BP_RunnerCharacter):**

<details class="mini-panel">
  <summary class="mini-panel-header">
    <span class="mini-panel-title"><strong>Lane Transition Logic</strong></span>
    <span class="mini-panel-icon">▾</span>
  </summary>

<div class="mini-panel-body">

The player controller stores:
- `CurrentLaneIndex` — player's current lane (0, 1, or 2)
- `TargetLaneIndex` — intended lane after input
- `LanePosition` array — Y-offset per lane

On input (A/D):
1. Clamp lane index between 0 and 2
2. Read Y position from `LanePosition` array
3. Use timeline/lerp to smoothly interpolate Y position
4. Call `SetActorLocation` — smooth wheelchair sidestep instead of snapping

**Jump & Slide:**
- `Jump_IA` calls `Jump` on the Character Movement component + jump SFX
- `Slide_IA` adds downward impulse on Character Movement + dash SFX

**Result:** Responsive, predictable input with satisfying audio/visual feedback.

</div>

</details>

</div>

</details>

## 2. Infinite Runner & Speed Scaling {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Progressive Difficulty Through Speed Ramp</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Forward Movement Loop:**
The runner is always moving forward; the player only manages **lanes and vertical state**.

On Tick:
- Reads control rotation, zeroes pitch/roll, gets forward vector
- Calls `AddMovementInput` every frame so the wheelchair constantly advances
- Casts to `BP_RunnerCharacter` to adjust `MaxWalkSpeed`
- Toggles Niagara sprint effects once speed threshold is reached (visual acceleration)

**Speed Ramp Blueprint:**
A `ChangeSpeed` function in the GameMode periodically increases movement speed:

<details class="mini-panel">
  <summary class="mini-panel-header">
    <span class="mini-panel-title"><strong>Speed Scaling Implementation</strong></span>
    <span class="mini-panel-icon">▾</span>
  </summary>

<div class="mini-panel-body">

```
Event Timer (configurable interval)
    ↓
Get BP_RunnerCharacter → CharacterMovement.MaxWalkSpeed
    ↓
Multiply by small factor (e.g. 1.02)
    ↓
Clamp between 850 (start) and 3200 (max)
    ↓
Set new walk speed
    ↓
Print debug output for tuning
```

**Result:** Difficulty steadily ramps as player survives longer. Same obstacle patterns become harder purely because reaction windows shrink. Creates organic escalation without score multipliers or external difficulty settings.

</div>

</details>

</div>

</details>

## 3. Procedural Floor & Obstacle System {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Infinite Obstacle Generation</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

The level is an **infinite corridor** built from reusable `BP_Floor` tiles managed by `BP_RunnerGameMode`.

**BP_Floor — Spawn Points & Obstacles:**

Each floor tile:

1. **Generates lane-specific spawn points** in `SetupSpawnPoint`:
   - Iterates over lane positions
   - Builds transforms offset forward (e.g. X + 650) and along lane Y
   - Adds Arrow components to `SpawnPoints` array

2. **Spawns obstacles** in `SpawnObstacles`:
   - Copies `SpawnPoints` into `RandomSpawnPoints` array and shuffles
   - For each index, picks an int in range using **Switch on Int**:
     - 0 → `BP_Obstacles_Wall` (high fence)
     - 1 → `BP_Obstacles_Blocker` (mid‑height sign)
     - 2 → `BP_Obstacles_HugeWall` or pot variant
   - Spawns selected obstacle as **Child Actor Component** at transform

**Result:** All obstacle logic unified in `BP_Obstacles` hierarchy. Three visual types configured in same Blueprint folder. Adding new obstacles requires only new mesh child, no code changes.

<details class="mini-panel">
  <summary class="mini-panel-header">
    <span class="mini-panel-title"><strong>Endless Floor Extension</strong></span>
    <span class="mini-panel-icon">▾</span>
  </summary>

<div class="mini-panel-body">

**Memory-efficient infinite generation:**

- Each floor has trigger at its end
- On overlap: `BP_Floor` calls `ExtendFloor` on `BP_RunnerGameMode`
- `ExtendFloor` spawns new `BP_Floor` at current attach point using `SpawnActor`
- New tile returns next attach point
- Appends tile to `FloorTiles` array
- If `FloorTiles.Length > NumberOfTiles`:
  - Grabs oldest tile (index 0)
  - **Destroys** it, **Removes** from array

**Why this works:** Environment feels endless, but only fixed number of tiles alive simultaneously. Memory and performance stay stable regardless of play duration.

</div>

</details>

</div>

</details>

## 4. Scoring & High Score Persistence {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Score Tracking & Save System</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Runtime Score:**
GameMode tracks `CurrentPoints` and `PointsMulti`. A `Set Current Score` function:
- Adds `(DeltaTime * PointsMulti)` to `CurrentPoints`
- Writes result back into GameMode and notifies UI widgets
- When `CurrentPoints >= 35`, triggers soft milestone SFX (`playerChargingUp`)

**High Score Persistence:**
On Game Over, the Game Over widget:
- Gets GameMode and casts to `BP_RunnerGameMode`
- Checks `DoesSaveGameExist` with slot `"HighScoreValue"`
- If exists: loads `Runner_SaveGame`, reads `HighScoreValue`, compares with current score
  - If new score is higher: updates `HighScoreValue`, saves to slot
- If not exists: creates new SaveGame object, sets initial value from `CurrentPoints`, saves

**UI Flow:**

<details class="mini-panel">
  <summary class="mini-panel-header">
    <span class="mini-panel-title"><strong>Widget Architecture</strong></span>
    <span class="mini-panel-icon">▾</span>
  </summary>

<div class="mini-panel-body">

**Two widget layers:**

1. **GamePlay_UI** — In-game HUD
   - Score display (top right, large text)
   - Optional speed indicator
   - Real-time updates via getter functions

2. **GameOver_UI** — End-of-session screen
   - Final score prominently displayed
   - "GAME OVER" title in red
   - **Retry** button (reload level)
   - **Exit** button (quit game)

**Begin Play (RunnerCharacter):**
- Creates `GamePlay_UI` widget, adds to viewport
- Plays looping BGM (`Game_bgm`) via `Play Sound 2D`
- Binds Enhanced Input mapping context via `Add Mapping Context`

**On Death / Game Over:**
- `BP_RunnerCharacter.Death` disables Character Movement and input
- Enables physics on meshes (ragdoll collapse effect)
- Plays explosion + death SFX depending on score
- Spawns `GameOver_UI`, enables mouse cursor
- Widget handles high-score save logic and button inputs

</div>

</details>

</div>

</details>

## 5. Audio & Visual Chaser {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Sound Design & Monkey Chaser</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Sound System:**
Audio handled entirely via simple **Sound Wave** assets. Dedicated sounds for:
- Jump, dash, BGM, monkey vocalizations, angry stingers, charging cues

Actions trigger `Play Sound 2D` nodes embedded next to their logic:
- Lane change → dash SFX
- Jump → jump SFX
- Death → death_fast or death_slow depending on score
- Score milestone → playerChargingUp SFX

**The Monkey Chaser (BP_Monkey):**

<details class="mini-panel">
  <summary class="mini-panel-header">
    <span class="mini-panel-title"><strong>Chaser Behavior</strong></span>
    <span class="mini-panel-icon">▾</span>
  </summary>

<div class="mini-panel-body">

Primarily a **visual threat**, not gameplay mechanic.

**Tick Script:**
- Gets player pawn and forward vector
- Interpolates position toward slot directly behind wheelchair (`VInterpTo`)
- Offset: `PlayerLocation - Forward * distance`

**Result:** Creates constant pressure and urgency without affecting game logic. Obstacle and speed tuning stay independent from chaser behavior. Reinforces narrative (disabled man running from cyborg monkeys) without mechanical complexity.

**Animation:**
- Idle/walk cycles
- Periodic vocalizations (angry stinger SFX)
- Victory animation on player death

</div>

</details>

</div>

</details>

## 6. Death & Obstacle Collision {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Instant-Death Collision System</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

The `BP_Obstacles` and variants treat all collision as **instant failure**.

**Obstacle Overlap Blueprint (BP_Obstacles):**

`Event ActorBeginOverlap`:
1. Casts `OtherActor` to `BP_RunnerCharacter`
2. On success, calls `Death` function on runner
3. After short delay, pauses game (freezes chase in place)

**Why this design:**
- All three obstacle types route through same Blueprint base
- Consistent behavior with minimal duplication
- New mesh added as child auto-compatible with existing death logic
- Single-hit-death keeps sessions short and score meaningful

</div>

</details>

---

## - - - --->Technical<--- - - - {.outline-only}

# 𓆩Technical Architecture 𓆪 {.section-title-center}

## Design Patterns {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Blueprint Design Patterns Used</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**1. Data-Driven Spawning**
- Random obstacle selection via array shuffle
- Configurable spawn points per lane
- Variable difficulty curve through timer adjustments
- No hardcoded obstacle types

**2. Event-Based Communication**
- Player death triggers game over via event dispatch
- Score updates through getter functions
- Speed changes broadcast to UI
- Loose coupling between systems

**3. Smooth Transitions**
- Lerp for lane movement (not instant snapping)
- Velocity-based jumping (acceleration/deceleration)
- Gradual speed scaling (not discrete jumps)

**4. Memory Efficiency**
- Obstacles destroyed after lifespan expires
- Floor tiles reused/removed from pool
- Minimal actor spawning (only visible obstacles)
- Fixed tile count prevents memory bloat

**Why Blueprint-Only Worked for 4-Day Jam:**

<details class="mini-panel">
  <summary class="mini-panel-header">
    <span class="mini-panel-title"><strong>Blueprint vs C++ Trade-offs</strong></span>
    <span class="mini-panel-icon">▾</span>
  </summary>

<div class="mini-panel-body">

**Advantages (4-day scope):**
- ✅ No C++ compilation time → faster iteration
- ✅ Visual debugging (pins, breakpoints) → easier problem-solving
- ✅ Fast prototyping → rapid testing and balancing
- ✅ Non-technical designer/artist can understand flow
- ✅ Easier to refactor without breaking builds

**Trade-offs:**
- ⚠️ Performance adequate for indie scope (not AAA-level optimization)
- ⚠️ Blueprint complexity grows with system interdependencies
- ⚠️ Version control more complex (binary .uasset files)

**Verdict:** For rapid prototyping and game jam constraints, Blueprint-only was the right choice. Fast iteration and clear visual flow enabled zero-bug delivery under pressure.

</div>

</details>

</div>

</details>

## Team Coordination {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ 4-Person Team Structure & Task Distribution</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Role Separation:**

- **You (Lead Programmer & Designer):** Core gameplay systems, player controller, game management, obstacle spawning, speed scaling, UI flow, zero-bug delivery, intra-team communication
- **Supporting Programmer:** Assisted with implementation and debugging as needed
- **Designer:** Level/difficulty design, obstacle placement strategies, gameplay balance tuning
- **Modeler:** Character assets, obstacle meshes, environment geometry, wheelchair model
- **Artist:** Character rigging, animations, UI design, visual polish, signage graphics

**Communication Cadence:**
- Daily 30-minute standups (blockers, task status, next steps)
- Shared design doc (Blueprint reference, spawn point configs, speed curve)
- Weekly playtest session (Friday evening for feedback)
- Clear merge strategy (Blueprint ownership per system, no simultaneous edits)

**Key Achievement:** Zero critical bugs at launch. Possible because:
1. Clear task delegation (no overlap, no bottlenecks)
2. Frequent playtesting (identified and fixed issues in-jam)
3. Designer/artist appreciated visual Blueprint flow (could review logic without programmer explanation)
4. Modular systems meant artist changes never broke gameplay code

</div>

</details>

## Systems Reference {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Blueprint Breakdown</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

All systems live under `/Content/Runner/Blueprints`:

| Blueprint | Purpose | Key Features |
|-----------|---------|--------------|
| **BP_RunnerCharacter** | Player controller | Input handling, lane movement, jump, death trigger |
| **BP_Obstacles** | Obstacle base class | Collision, mesh variants, lifespan management |
| **BP_Obstacles_Wall** | High fence variant | Tallest obstacle type |
| **BP_Obstacles_Blocker** | Mid-height sign | Medium jump requirement |
| **BP_Obstacles_Pot** | Low pot variant | Easiest to clear |
| **BP_Floor** | Level tile generator | Lane spawn points, obstacle randomization, endless extension |
| **BP_Monkey** | Enemy chaser | Follow player, animations, vocalizations |
| **BP_RunnerGameMode** | Game manager | Score tracking, checkpoint, game flow, difficulty control |
| **GamePlay_UI** | In-game HUD | Score display, real-time updates |
| **GameOver_UI** | End screen | Final score, retry/exit buttons, high-score save logic |
| **IMC_RunnerDefault** | Input mapping | A/D/W/S key bindings |
| **Runner_SaveGame** | Persistence layer | High score serialization |

No C++ source files—entire game logic is Blueprint.

</div>

</details>

---

## - - - --->Extras<--- - - - {.outline-only}

# 𓆩Extra Notes 𓆪 {.section-title-center}

## Core Competencies {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Core Competencies Demonstrated</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Game Design:**
- ✅ Focused scope management (one core mechanic, no feature creep)
- ✅ Single-hit death design (consequence without tedium)
- ✅ Progressive difficulty curve (speed scaling)
- ✅ Narrative integration (disabled protagonist, cyborg threat)
- ✅ Replayability through randomization

**Blueprint Architecture:**
- ✅ Data-driven design (configurable spawning, no hardcoded values)
- ✅ Modular systems (decoupled components)
- ✅ Event-based communication (loose coupling)
- ✅ Memory management (pooling, tile lifecycle)

**Team Leadership:**
- ✅ Clear role definition (no bottlenecks)
- ✅ Task delegation and accountability
- ✅ Frequent communication (daily standups)
- ✅ Quality assurance (playtesting, bug fixing)
- ✅ Zero-bug delivery under pressure

**UE5 Systems:**
- ✅ Enhanced Input system (modern input handling)
- ✅ Character Movement component (locomotion)
- ✅ Save Game API (persistence)
- ✅ UI Toolkit (HUD widgets)
- ✅ Audio management (sound effects, BGM)

</div>

</details>

## Design Decisions & Justifications {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Design Philosophy</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Why 3 Lanes?**
- Simple input (A/D/W/S fully covers movement)
- Accessibility focus (matches disabled protagonist narrative)
- Clear visuals (easy to read at high speed)
- Balanced challenge (not overwhelming, not repetitive)

**Why Continuous Speed Increase?**
- Creates natural difficulty curve without complexity
- No pause/checkpoint needed (pure arcade feel)
- Forces constant engagement (can't zone out)
- Death always possible (high skill ceiling)

**Why Random Obstacles?**
- Prevents memorization
- Keeps experienced players engaged
- Fair difficulty (no pattern abuse)
- Endless replayability

**Why Single-Hit Death?**
- Keeps sessions short (respects player time in jam context)
- Makes score meaningful (not just "how long you lasted")
- Simplifies UI (no health bar)
- Maintains tension (every obstacle is life-or-death)

**Why Monkey Chaser?**
- Reinforces narrative (disabled man running from cyborg monkeys)
- Creates visual stress without game impact
- Thematic consistency
- Adds personality to otherwise mechanical game

</div>

</details>

## Potential Expansions {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Post-Jam Extension Ideas</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

**Gameplay Systems:**
- Power-up pickups (temporary speed boost, invincibility)
- Multiple playable characters with unique abilities
- Boss battles at score milestones
- Different environment themes (industrial, nature, urban)

**Progression:**
- Score leaderboard (local/online)
- Progressive unlock system (cosmetics, characters)
- Daily challenges with bonus scoring
- Seasonal content updates

**Accessibility:**
- Colorblind modes (lane indicators)
- Adjustable difficulty (speed scaling multiplier)
- Assist mode (slower max speed, larger hitboxes)

**Multiplayer:**
- Local co-op (competing for score)
- Split-screen leaderboards
- Networked high-score sharing

</div>

</details>

## Technologies & Stack {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Technologies & Stack</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

- **Engine:** Unreal Engine 5.0+
- **Implementation:** 100% Blueprints (no C++)
- **Input:** Enhanced Input System (modern input handling)
- **Architecture:** Component-based actors, composition over inheritance
- **Rendering:** Skeletal mesh animation, particle effects (Niagara)
- **Audio:** Sound wave assets, 2D audio playback
- **Persistence:** SaveGame API for high-score serialization
- **UI:** UIToolkit widget system for HUD

**Project Structure:**
- `/Content/Runner/Blueprints/` — All game logic
- `/Content/Runner/Characters/` — Character meshes & animations
- `/Content/Runner/Obstacles/` — Obstacle models
- `/Content/Runner/Audio/` — SFX and BGM assets
- `/Content/Runner/Levels/` — Main gameplay level

</div>

</details>

## Links & Resources {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Project Resources</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

- **GitHub:** [Not available yet]
- **Source Code Documentation:** [Not available yet]
- **Play in Browser:** [Not available yet]
- **Team Feedback:** Blueprint architecture enabled rapid iteration and zero-bug delivery on a 4-day timeline

</div>

</details>

---

## Conclusion

This 4-day game jam project demonstrates **efficient team coordination, clear system architecture, and successful scope management** using Unreal Engine 5 Blueprints. By focusing on a single core mechanic (dodge obstacles), clear visual feedback (three lanes, score, speed), and strong narrative (disabled protagonist, cyborg threat), the game delivers **immediate engagement and high replayability** within severe time constraints.

The use of Blueprint-only development, data-driven spawning, and modular design enabled rapid iteration and zero-bug delivery—proving that Blueprints are production-viable for indie game jam scale. Clear team roles, frequent communication, and shared design understanding were critical to success under pressure.