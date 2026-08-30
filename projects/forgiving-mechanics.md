---
layout: doc
title: C# Forgiving Movement Framework
description: A reusable character movement controller with forgiving input mechanics, coyote time, jump buffering, and gravity handling built for rapid game prototyping.
---

<a href="../projects/" class="back-projects-button"> ❮❮ All Projects </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">Project Status :</span>
      <span class="info-line-value"> Complete & Reusable Framework |  4 weeks </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Project Type :</span>
      <span class="info-line-value"> Modular Framework | Unity (C#) </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Core Focus :</span>
      <span class="info-line-value"> Movement feel | Game feel architecture </span>
    </p>
  </div>

</div>

# Forgiving Movement Framework {.page-title-center}
-------

<p class="project-text">
  A <strong>production-ready character movement controller</strong> for side-scroller games, built on <strong>forgiving mechanics principles</strong> (jump buffer, coyote time, variable gravity). Designed as a <strong>reusable framework</strong> that ships in weeks, not months—enabling rapid prototyping and team collaboration through <strong>parameter-driven architecture</strong>.
</p>
<!-- HERO MEDIA CAROUSEL (fm-hero-*) -->
    <MediaCarousel data-hx-reveal id="fm-hero-media" :slides="[
  { src: '/videos/forgiving-mechanics/fm-showcase-1.mp4', caption: 'Forgiving jump mechanics showcase.' },
  { src: '/videos/forgiving-mechanics/fm-coyotetime.mp4', caption: 'Accurate Ground detection (E.g: coyote time showcase).' }
]" />

    



---

# General {.section-title-center data-hx-reveal="true"}

## Quick Overview {.outline-only}

<ProjectPanel icon="target" title="Quick Summary for Recruiters">

  <div class="project-text">
    <ul>
      <li>Reusable <strong>top-down character movement framework</strong> proven in production games</li>
      <li>Forgiving mechanics built-in: <strong>coyote time, jump buffer, variable gravity</strong></li>
      <li><strong>Slope handling and ground detection</strong> using reliable raycasting</li>
      <li>Modular architecture with <strong>parameter-driven design</strong> (no magic numbers)</li>
      <li>Drop into any project, configure in inspector, ship in days</li>
      <li>Used as foundation for <strong><a href="./path-to-power">Path to Power</a></strong> combat systems</li>
    </ul>
  </div>

</ProjectPanel>


## Core Philosophy {.outline-only}

<ProjectPanel icon="lightbulb" title="Core Philosophy">

<div class="project-text">

# "Movement feel is the foundation of game feel."

This framework demonstrates:
- ✅ **Forgiving input windows** that reward player intent over precision
- ✅ **Physics-based but tunable** (gravity, acceleration, friction as parameters)
- ✅ **Ground detection that works** (reliable raycasts, no edge cases)
- ✅ **Performance-conscious** (no runtime allocations, pooling-friendly)
- ✅ **Team-ready architecture** (parameters first, code second)

Every system is built to answer: *"How do we make movement feel fair?"*

</div>

</ProjectPanel>

## Technical Highlights {.outline-only}

<ProjectPanel icon="settings" title="Technical Highlights">

<div class="project-text">

  - ✅ **Coyote Time (Jump Grace Window):** 0.15s after leaving ground, jump still works
  - ✅ **Jump Input Buffering:** Early inputs register up to 0.1s before landing
  - ✅ **Variable Gravity:** Apex hang (0.4x), descent fall (5.5x) for natural feel
  - ✅ **Ground Detection & Walking:** Raycast-based ground detection handles slopes gracefully
  - ✅ **Momentum Preservation:** Attack/dash systems inherit player velocity
  - ✅ **Dash Override System:** Dash cancels movement, not actions (skill expression)
  - ✅ **Acceleration Curves:** Smooth ramp-up from idle → running (not instant)
  - ✅ **No Jump Stacking:** Gravity check prevents double-jump exploits

</div>

</ProjectPanel>

---

## Features{.outline-only}

# Highlight Features {.section-title-center data-hx-reveal="true"}

## 1. Forgiving Input Mechanics {.outline-only}

<ProjectPanel icon="timer" eyebrow="Input" title="Jump Buffer &amp; Coyote Time">

<!-- MOVEMENT MEDIA CAROUSEL (fm-move-*) -->
<MediaCarousel data-hx-reveal id="fm-move-media" :slides="[
  { src: '/videos/forgiving-mechanics/fm-jumpbuffer.mp4', caption: 'Jump buffer: pressing jump 0.15s before landing still registers' },
  { src: '/videos/forgiving-mechanics/fm-coyotetime.mp4', caption: 'Coyote time: jumping 0.15s after leaving ground still works' }
]" />

<div class="project-text">

**What you're seeing:** A player who *can't* miss a jump due to bad timing—input windows are large enough to be forgiving, small enough to feel responsive.

<ProjectPanel icon="arrow-up" variant="mini" title="Jump Buffer">

  <div class="mini-panel-body">

  - Player presses jump 0.15s BEFORE landing
  - System records the input timestamp
  - On landing, if buffer is active, jump executes retroactively
  - <strong>Result:</strong> No "one-frame miss" frustration, but not exploitable

  </div>
</ProjectPanel>

<ProjectPanel icon="timer" variant="mini" title="Coyote Time">

  <div class="mini-panel-body">

  - Player leaves ground (platform edge, fall-through)
  - For 0.15s after leaving, jump is still available
  - Works even if player held jump button while walking off (momentum based)
  - <strong>Result:</strong> "I jumped too late" moments become successes

  </div>
</ProjectPanel>


**Why Both Exist (Not One or the Other):**
- Buffer **alone**: Punishes fast, reactive players (feels unresponsive)
- Coyote **alone**: Punishes predictive players (feels cheap)
- **Together**: Both playstyles work, game feels fair

<ProjectPanel icon="code-xml" variant="mini" title="Implementation">

  <div class="mini-panel-body">


  ```csharp
  if (jumpInputTime > Time.time - jumpBufferWindow && isGrounded)
      Jump();  // retroactively register

  if (coyoteTimeCounter > 0f && jumpPerformed)
      Jump();  // free jump after leaving ground
  ```

  **The Result:** Players report "movement feels so good" before understanding why. That's excellent game design.


  </div>
</ProjectPanel>


</div>



</ProjectPanel>


## 2. Ground Detection {.outline-only}

<ProjectPanel icon="radar" eyebrow="Physics" title="Reliable Ground Detection">

<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-ground-media" :slides="[
  { src: '/videos/forgiving-mechanics/fm-grounddetection.mp4', caption: 'Capsule raycasts detect ground reliably on flat and angled surfaces' }
]" />

<div class="project-text">

**The Problem:** Standard rigidbody collision checks miss ground on slopes, corners, or frame-rate inconsistencies. Result: Jump doesn't work when player is clearly on ground.

**The Solution: Capsule Raycasting**

<ProjectPanel icon="code-xml" variant="mini" title="Implementation">

  <div class="mini-panel-body">


  Multiple raycasts from capsule bottom, fanned to catch edges:
  ```csharp
  RaycastHit2D hit = Physics2D.CapsuleCast(
      position: bottomCenter,
      size: capsuleSize,
      direction: Vector2.down,
      distance: groundCheckDistance,
      layerMask: groundLayer
  );
  ```

  **Why this works:**
  - ✅ Catches ground on slopes (raycasts fan out, so angled surfaces work)
  - ✅ Detects edges early (distance check is bigger than visual size)
  - ✅ Works at any frame rate (raycast is frame-time independent)
  - ✅ No rigidbody collision jitter (runs in FixedUpdate separately)
  </div>
</ProjectPanel>



</div>



</ProjectPanel>

## 3. Physics Tuning {.outline-only}

<ProjectPanel icon="arrow-down-to-line" eyebrow="Physics" title="Variable Gravity &amp; Acceleration">


<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-gravity-media" :slides="[
  { src: '/videos/forgiving-mechanics/fm-vjh.mp4', caption: 'Variable Jump Gravity (Hang Time Effect) + Acceleration curves showcase.' }
]" />

<div class="project-text">

**Variable Gravity (Hang Time Effect):**



<ProjectPanel icon="code-xml" variant="mini" title="Implementation">

  <div class="mini-panel-body">

  At jump apex, gravity is reduced to 0.4x. During descent, gravity jumps to 5.5x.

  ```csharp
  if (jumpHeld && velocity.y < hangTimeThreshold)
      rigidbody.gravityScale = normalGravity * 0.4f;  // hang
  else if (velocity.y < 0)
      rigidbody.gravityScale = normalGravity * 5.5f;  // fall fast
  ```

  **Why it works:**
  - Player feels floaty at the apex (more control, longer hang time for planning)
  - Player falls quickly after (commitment to jump, no floaty feel late in jump)
  - Matches real-world intuition (ball thrown up slowly falls back, but we perceive hang)
  - Separates arc feel from trajectory (arc *is* the game feel)

  </div>
</ProjectPanel>


**Acceleration Curves (Smooth Ramp-Up):**


<ProjectPanel icon="code-xml" variant="mini" title="Implementation">

  <div class="mini-panel-body">

    
  ```csharp
  targetVelocity = inputDirection * maxSpeed;
  velocity.x = Mathf.Lerp(velocity.x, targetVelocity, acceleration * Time.deltaTime);
  ```

  **Why it works:**
  - Instant acceleration feels jerky (unrealistic, unintuitive)
  - Smooth lerp feels responsive and weighty (player has momentum)
  - Acceleration value is tunable (0.1 = sluggy, 0.5 = snappy, 0.9 = instant-ish)
  - Asymmetric accel/decel curves possible (faster stop = more control)

  </div>
</ProjectPanel>


**Parameter-Driven:**


<ProjectPanel icon="code-xml" variant="mini" title="Implementation">

  <div class="mini-panel-body">


  ```csharp
  [SerializeField] float maxSpeed = 5f;
  [SerializeField] float acceleration = 0.85f;
  [SerializeField] float hangTimeGravity = 0.4f;
  [SerializeField] float fallGravity = 5.5f;
  ```

  All tunable in inspector. No code recompile. Change at runtime in play mode.

  
  </div>
</ProjectPanel>




</div>

</ProjectPanel>

---

## Technical{.outline-only}

# Technical Deep Dive {.section-title-center data-hx-reveal="true"}

## Architecture Overview {.outline-only}

<ProjectPanel icon="layers" title="Architecture Overview - Modular Component System">

<div class="project-text">

```
┌──────────────────────────────────────────────┐
│        CharacterMovement.cs (Core)           │
│   Handles velocity, acceleration, gravity    │
└──────────────────────────────────────────────┘
                      ↓
┌──────────────────────────────────────────────┐
│         GroundDetection.cs (Raycast)         │
│     Tells CharacterMovement if grounded      │
└──────────────────────────────────────────────┘
                      ↓
┌──────────────────────────────────────────────┐
│           InputHandler.cs (Input)            │
│       Maps input → movement calls            │
└──────────────────────────────────────────────┘
                      ↓
┌──────────────────────────────────────────────┐
│      Optional: Combat/Dash Systems           │
│    Built on top of movement foundation       │
└──────────────────────────────────────────────┘
```

**Single Responsibility:**
- `CharacterMovement`: Pure physics
- `GroundDetection`: Pure raycasting
- `InputHandler`: Input mapping
- `Combat/Dash`: Systems that consume movement API

**Why This Matters:** You can swap any layer without breaking others. Change ground detection logic? CharacterMovement doesn't care. Add new input? Movement doesn't change.

**Integration Point:**
```csharp
// In FixedUpdate
groundDetection.CheckGround();
characterMovement.UpdatePhysics(inputDirection, isJumping);
controller.Move(characterMovement.Velocity);
```

Linear, clear, testable.

</div>

</ProjectPanel>

## 1. Movement Core {.outline-only}

<ProjectPanel icon="footprints" title="System 1: Character Movement">

<div class="project-text">

**Jump Buffer Implementation:**
```csharp
private float jumpInputTime;
private const float jumpBufferWindow = 0.1f;

public void HandleJumpInput(bool pressed)
{
    if (pressed)
        jumpInputTime = Time.time;
}

public void Update()
{
    // Jump buffer: even if not grounded now, retroactively register
    if (isGrounded && Time.time - jumpInputTime < jumpBufferWindow)
    {
        Jump();
        jumpInputTime = -999f;  // consume
    }
}
```

**Coyote Time Implementation:**
```csharp
private float coyoteTimeCounter = 0f;
private const float coyoteTimeDuration = 0.15f;

public void Update()
{
    if (isGrounded)
        coyoteTimeCounter = coyoteTimeDuration;
    else
        coyoteTimeCounter -= Time.deltaTime;
    
    // Jump allowed even in air if coyote time active
    if (coyoteTimeCounter > 0 && jumpPressed)
        Jump();
}
```

**Why This Order Matters:**
1. Record input time
2. Check if grounded
3. Compare timestamps
4. Execute jump
5. Consume input

No branching, pure sequential logic. Easy to debug, easy to extend.

**Variable Gravity:**
```csharp
private void ApplyGravity()
{
    float gravityMultiplier = velocity.y > 0 ? hangTimeGravity : fallGravity;
    velocity.y += Physics2D.gravity.y * gravityMultiplier * Time.deltaTime;
}
```

Tiny. Effective. Tunable.

</div>

</ProjectPanel>

## 2. Ground Detection {.outline-only}

<ProjectPanel icon="radar" title="System 2: Ground Detection">

<div class="project-text">

**Capsule Raycast Pattern:**
```csharp
public bool CheckGround()
{
    Vector2 bottomCenter = new Vector2(
        transform.position.x,
        transform.position.y - capsuleSize.y / 2f
    );
    
    RaycastHit2D hit = Physics2D.CapsuleCast(
        origin: bottomCenter,
        size: capsuleSize,
        capsuleDirection: CapsuleDirection2D.Vertical,
        angle: 0f,
        direction: Vector2.down,
        distance: groundCheckDistance,
        layerMask: groundLayer
    );
    
    isGrounded = hit.collider != null;
    groundNormal = hit.normal;
    return isGrounded;
}
```

**Why Capsule Over Line Raycast:**
- Line raycast: Only checks center (misses slopes)
- Capsule raycast: Fans out across width (catches edges)
- Capsule is consistent with visual size (no magic distance)

**Slope Handling:**
```csharp
public void HandleSlopes(Vector2 velocity)
{
    float slopeAngle = Vector2.Angle(groundNormal, Vector2.up);
    
    if (slopeAngle > maxWalkableSlope)
        return;  // too steep, slide off
    
    // Adjust horizontal velocity to follow slope
    velocity = Vector2.ProjectOnPlane(velocity, groundNormal);
}
```

Slopes feel natural, don't stick where they shouldn't.

</div>

</ProjectPanel>

## 3. Input Handling {.outline-only}

<ProjectPanel icon="move-horizontal" title="System 3: Side-Scroller Controller">

<div class="project-text">

**Input Mapping (Simple & Clear):**
```csharp
private void HandleInput()
{
    float moveInput = Input.GetAxisRaw("Horizontal");
    bool jumpInput = Input.GetButtonDown("Jump");
    bool dashInput = Input.GetButtonDown("Dash");
    
    movement.SetDirection(new Vector2(moveInput, 0));
    movement.HandleJumpInput(jumpInput);
    
    if (dashInput)
        Dash();
}
```

**Facing Direction (Decoupled):**
```csharp
if (moveInput != 0)
    facingDirection = moveInput > 0 ? 1 : -1;

// Facing direction persists even during jump
// Result: Player can face one direction while moving another (skill expression)
```

**Why Decouple Facing:**
- Allows attacking backward mid-jump (high-level play)
- Feels responsive (visual feedback matches intent)
- Not automatic (player controls it actively)

**The Pattern:** Input → Data → Action. No state mutation mid-frame.

</div>

</ProjectPanel>

---

## Extras{.outline-only}

# Extra Notes {.section-title-center data-hx-reveal="true"}

## When to Use This Framework {.outline-only}

<ProjectPanel icon="compass" title="When to Use This Framework">

<div class="project-text">

**Perfect For:**
- ✅ Platformers action games (E.g: Hollow knight)
- ✅ 2D roguelikes or dungeon crawlers
- ✅ Rapid prototyping (setup in 30 minutes)
- ✅ Multiplayer-ready (fully deterministic physics)
- ✅ Teams (parameter-driven, not hard-coded)

**Less Ideal For:**
- ❌ Grid-based movement (use AStar pathfinding instead)
- ❌ 3D games (code is 2D-only; 3D version available separately)

</div>

</ProjectPanel>

## Framework Implementation {.outline-only}

<ProjectPanel icon="git-compare" title="Framework vs. Game-Specific Implementation">

<div class="project-text">

**This is a Framework, Not a Template**

What that means:
- You own the movement code (it's yours to modify)
- Parameters are starting points, not dogma (tune to your game feel)
- It ships in weeks, not months (saves hundreds of hours)
- It scales to multiple characters (used in Path to Power with custom combat)

**What You Get:**
- Battle-tested forgiving mechanics
- Reliable ground detection (no "jump doesn't work" bugs)
- Clean, documented code (readable by teams)
- Parameter-first design (iterate without recompile)

**What You Build:**
- Game-specific combat systems
- Custom abilities (dashes, double-jumps, wall-slides)
- Unique feel (adjust gravity/acceleration to your game)
- Level design patterns (slopes, platforms, gaps)

The framework handles the *foundation*. You handle the *flavor*.

</div>

</ProjectPanel>

## Technologies & Stack {.outline-only}

<ProjectPanel icon="wrench" title="Technologies &amp; Stack">

<div class="project-text">

- **Engine:** Unity 2020 LTS+
- **Language:** C#
- **Physics:** Rigidbody2D with custom movement
- **Input:** New Input System (event-driven, configurable)
- **Ground Detection:** Raycast & CapsuleCast
- **Performance:** Zero allocations per frame (pooling-friendly)
- **Documentation:** Inline comments + parameter descriptions

</div>

</ProjectPanel>

## Links & Resources {.outline-only}

<ProjectPanel icon="link" title="Links &amp; Resources">

<div class="project-text">

- **GitHub:** [Not available yet]
- **Used In:** [Path to Power](/projects/path-to-power)
- **Live Demo:** [Not available yet]
- **Documentation:** Included in codebase

</div>

</ProjectPanel>

---
