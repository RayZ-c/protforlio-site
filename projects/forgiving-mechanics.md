---
layout: doc
title: C# Forgiving Movement Framework
description: A reusable character movement controller with forgiving input mechanics, coyote time, jump buffering, and gravity handling built for rapid game prototyping.
---

<a href="../projects/" class="back-home-button"> ❮❮ All Projects </a>

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
    <div class="media-carousel">
      <!-- radios -->
      <input type="radio" name="fm-hero-media" id="fm-hero-1" checked>
      <input type="radio" name="fm-hero-media" id="fm-hero-2">
      <input type="radio" name="fm-hero-media" id="fm-hero-3">
      <!-- slides -->
      <div class="media-slides">
        <figure><video
            autoplay
            muted
            loop
            playsinline
            controls
            preload="metadata">
            <source src="/videos/forgiving-mechanics/fm-showcase-1.mp4" type="video/mp4" />
        </video></figure>
        <figure><video
            autoplay
            muted
            loop
            playsinline
            controls
            preload="metadata">
            <source src="/videos/forgiving-mechanics/fm-coyotetime.mp4" type="video/mp4" />
        </video></figure>
      </div>
      <!-- arrows -->
      <div class="media-arrows">
        <!-- prev -->
        <label for="fm-hero-2" class="media-arrow-btn media-arrow-prev arrow-prev-1">‹</label>
        <label for="fm-hero-1" class="media-arrow-btn media-arrow-prev arrow-prev-2">‹</label>
        <!-- next -->
        <label for="fm-hero-1" class="media-arrow-btn media-arrow-next arrow-next-2">›</label>
        <label for="fm-hero-2" class="media-arrow-btn media-arrow-next arrow-next-1">›</label>
      </div>
      <div class="media-captions">
        <div class="media-caption">
          Forgiving jump mechanics showcase.
        </div>
        <div class="media-caption">
          Accurate Ground detection (E.g: coyote time showcase).
        </div>
      </div>
      <!-- dots -->
      <div class="media-dots">
        <label for="fm-hero-1"></label>
        <label for="fm-hero-2"></label>
      </div>
    </div>

    
<style>
  /* HERO CAROUSEL (fm-hero-*) */
  #fm-hero-1:checked ~ .media-slides figure:nth-child(1),
  #fm-hero-2:checked ~ .media-slides figure:nth-child(2),
  #fm-hero-3:checked ~ .media-slides figure:nth-child(3) {
    display: block;
  }

  #fm-hero-1:checked ~ .media-dots label:nth-child(1),
  #fm-hero-2:checked ~ .media-dots label:nth-child(2),
  #fm-hero-3:checked ~ .media-dots label:nth-child(3) {
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
  #fm-hero-1:checked ~ .media-arrows .arrow-prev-1,
  #fm-hero-2:checked ~ .media-arrows .arrow-prev-2,
  #fm-hero-3:checked ~ .media-arrows .arrow-prev-3,
  #fm-hero-1:checked ~ .media-arrows .arrow-next-1,
  #fm-hero-2:checked ~ .media-arrows .arrow-next-2,
  #fm-hero-3:checked ~ .media-arrows .arrow-next-3{
    opacity: 1;
    pointer-events: auto;
  }
</style>


---

# 𓆩General𓆪 {.section-title-center}

## Quick Overview {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">☑︎ Quick Summary for Developers</span>
    <span class="section-icon">▾</span>
  </summary>

  <div class="project-text">
    <ul>
      <li>Reusable <strong>top-down character movement framework</strong> proven in production games</li>
      <li>Forgiving mechanics built-in: <strong>coyote time, jump buffer, variable gravity</strong></li>
      <li><strong>Slope handling and ground detection</strong> using reliable raycasting</li>
      <li>Modular architecture with <strong>parameter-driven design</strong> (no magic numbers)</li>
      <li>Drop into any project, configure in inspector, ship in days</li>
      <li>Used as foundation for <strong2><a href='/protforlio-site/projects/path-to-power' >Path to Power</a></strong2> combat systems</li>
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

# "Movement feel is the foundation of game feel."

This framework demonstrates:
- ✅ **Forgiving input windows** that reward player intent over precision
- ✅ **Physics-based but tunable** (gravity, acceleration, friction as parameters)
- ✅ **Ground detection that works** (reliable raycasts, no edge cases)
- ✅ **Performance-conscious** (no runtime allocations, pooling-friendly)
- ✅ **Team-ready architecture** (parameters first, code second)

Every system is built to answer: *"How do we make movement feel fair?"*

</div>

</details>

## Technical Highlights {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Technical Highlights</span>
    <span class="section-icon">▾</span>
  </summary>

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

</details>

---

## - - - --->Features<--- - - -  {.outline-only}

# Highlight Features𓆪 {.section-title-center}

## 1. Forgiving Input Mechanics {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ <strong>Input</strong>: Jump Buffer & Coyote Time</span>
    <span class="section-icon">▾</span>
  </summary>

<!-- MOVEMENT MEDIA CAROUSEL (fm-move-*) -->
<div class="media-carousel">
  <input type="radio" name="fm-move-media" id="fm-move-1" checked>
  <input type="radio" name="fm-move-media" id="fm-move-2">

  <div class="media-slides">
    <figure><video
        autoplay
        muted
        loop
        playsinline
        controls
        preload="metadata">
        <source src="/videos/forgiving-mechanics/fm-jumpbuffer.mp4" type="video/mp4" />
    </video></figure>
    <figure><video
        autoplay
        muted
        loop
        playsinline
        controls
        preload="metadata">
        <source src="/videos/forgiving-mechanics/fm-coyotetime.mp4" type="video/mp4" />
    </video></figure>
  </div>

  <div class="media-arrows">
    <label for="fm-move-2" class="media-arrow-btn media-arrow-prev arrow-prev-1">‹</label>
    <label for="fm-move-1" class="media-arrow-btn media-arrow-prev arrow-prev-2">‹</label>
    <label for="fm-move-1" class="media-arrow-btn media-arrow-next arrow-next-2">›</label>
    <label for="fm-move-2" class="media-arrow-btn media-arrow-next arrow-next-1">›</label>
  </div>
    <div class="media-captions">
            <div class="media-caption">
            Jump buffer: pressing jump 0.15s before landing still registers
            </div>
            <div class="media-caption">
            Coyote time: jumping 0.15s after leaving ground still works
            </div>
        </div>
    <div class="media-dots">
        <label for="fm-move-1"></label>
        <label for="fm-move-2"></label>
    </div>
</div>

<div class="project-text">

**What you're seeing:** A player who *can't* miss a jump due to bad timing—input windows are large enough to be forgiving, small enough to feel responsive.

<details class="mini-panel">
  <summary class="mini-panel-header">
    <span class="mini-panel-title"> <strong>Jump Buffer</strong></span>
    <span class="mini-panel-icon">▼</span>
  </summary>

  <div class="mini-panel-body">

  - Player presses jump 0.15s BEFORE landing
  - System records the input timestamp
  - On landing, if buffer is active, jump executes retroactively
  - <strong>Result:</strong> No "one-frame miss" frustration, but not exploitable

  </div>
</details>

<details class="mini-panel">
  <summary class="mini-panel-header">
    <span class="mini-panel-title"> <strong>Coyote Time</strong></span>
    <span class="mini-panel-icon">▼</span>
  </summary>

  <div class="mini-panel-body">

  - Player leaves ground (platform edge, fall-through)
  - For 0.15s after leaving, jump is still available
  - Works even if player held jump button while walking off (momentum based)
  - <strong>Result:</strong> "I jumped too late" moments become successes

  </div>
</details>


**Why Both Exist (Not One or the Other):**
- Buffer **alone**: Punishes fast, reactive players (feels unresponsive)
- Coyote **alone**: Punishes predictive players (feels cheap)
- **Together**: Both playstyles work, game feels fair

<details class="mini-panel">
  <summary class="mini-panel-header">
    <span class="mini-panel-title"> <strong>Implementation</strong></span>
    <span class="mini-panel-icon">▼</span>
  </summary>

  <div class="mini-panel-body">


  ```csharp
  if (jumpInputTime > Time.time - jumpBufferWindow && isGrounded)
      Jump();  // retroactively register

  if (coyoteTimeCounter > 0f && jumpPerformed)
      Jump();  // free jump after leaving ground
  ```

  **The Result:** Players report "movement feels so good" before understanding why. That's excellent game design.


  </div>
</details>


</div>

<style>
  #fm-move-1:checked ~ .media-slides figure:nth-child(1),
  #fm-move-2:checked ~ .media-slides figure:nth-child(2) {
    display: block;
  }

  #fm-move-1:checked ~ .media-dots label:nth-child(1),
  #fm-move-2:checked ~ .media-dots label:nth-child(2) {
    background: #38bdf8;
    transform: scale(1.2);
  }

  #fm-move-1:checked ~ .media-arrows .arrow-prev-1,
  #fm-move-2:checked ~ .media-arrows .arrow-prev-2,
  #fm-move-1:checked ~ .media-arrows .arrow-next-1,
  #fm-move-2:checked ~ .media-arrows .arrow-next-2 {
    opacity: 1;
    pointer-events: auto;
  }
</style>

</details>


## 2. Ground Detection {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ <strong>Physics</strong>: Reliable Ground Detection</span>
    <span class="section-icon">▾</span>
  </summary>

<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<div class="media-carousel">
  <input type="radio" name="fm-ground-media" id="fm-ground-1" checked>
  <input type="radio" name="fm-ground-media" id="fm-ground-2">

  <div class="media-slides">
    <figure><video
        autoplay
        muted
        loop
        playsinline
        controls
        preload="metadata">
        <source src="/videos/forgiving-mechanics/fm-grounddetection.mp4" type="video/mp4" />
    </video></figure>
  </div>
    <div class="media-captions">
            <div class="media-caption">
            Capsule raycasts detect ground reliably on flat and angled surfaces
            </div>
        </div>
    <div class="media-dots">
        <label for="fm-ground-1"></label>
    </div>
</div>

<div class="project-text">

**The Problem:** Standard rigidbody collision checks miss ground on slopes, corners, or frame-rate inconsistencies. Result: Jump doesn't work when player is clearly on ground.

**The Solution: Capsule Raycasting**

<details class="mini-panel">
  <summary class="mini-panel-header">
    <span class="mini-panel-title"> <strong>Implementation</strong></span>
    <span class="mini-panel-icon">▼</span>
  </summary>

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
</details>



</div>

<style>
  #fm-ground-1:checked ~ .media-slides figure:nth-child(1),
  #fm-ground-2:checked ~ .media-slides figure:nth-child(2) {
    display: block;
  }

  #fm-ground-1:checked ~ .media-dots label:nth-child(1),
  #fm-ground-2:checked ~ .media-dots label:nth-child(2) {
    background: #38bdf8;
    transform: scale(1.2);
  }

  #fm-ground-1:checked ~ .media-arrows .arrow-prev-1,
  #fm-ground-2:checked ~ .media-arrows .arrow-prev-2,
  #fm-ground-1:checked ~ .media-arrows .arrow-next-1,
  #fm-ground-2:checked ~ .media-arrows .arrow-next-2 {
    opacity: 1;
    pointer-events: auto;
  }
</style>

</details>

## 3. Physics Tuning {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ <strong>Physics</strong>: Variable Gravity & Acceleration</span>
    <span class="section-icon">▾</span>
  </summary>


<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<div class="media-carousel">
  <input type="radio" name="fm-gravity-media" id="fm-gravity-1" checked>
  <input type="radio" name="fm-gravity-media" id="fm-gravity-2">

  <div class="media-slides">
    <figure><video
        autoplay
        muted
        loop
        playsinline
        controls
        preload="metadata">
        <source src="/videos/forgiving-mechanics/fm-vjh.mp4" type="video/mp4" />
    </video></figure>
  </div>
    <div class="media-captions">
            <div class="media-caption">
            Variable Jump Gravity (Hang Time Effect) + Acceleration curves showcase.
            </div>
        </div>
</div>

<div class="project-text">

**Variable Gravity (Hang Time Effect):**



<details class="mini-panel">
  <summary class="mini-panel-header">
    <span class="mini-panel-title"> <strong>Implementation</strong></span>
    <span class="mini-panel-icon">▼</span>
  </summary>

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
</details>


**Acceleration Curves (Smooth Ramp-Up):**


<details class="mini-panel">
  <summary class="mini-panel-header">
    <span class="mini-panel-title"> <strong>Implementation</strong></span>
    <span class="mini-panel-icon">▼</span>
  </summary>

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
</details>


**Parameter-Driven:**


<details class="mini-panel">
  <summary class="mini-panel-header">
    <span class="mini-panel-title"> <strong>Implementation</strong></span>
    <span class="mini-panel-icon">▼</span>
  </summary>

  <div class="mini-panel-body">


  ```csharp
  [SerializeField] float maxSpeed = 5f;
  [SerializeField] float acceleration = 0.85f;
  [SerializeField] float hangTimeGravity = 0.4f;
  [SerializeField] float fallGravity = 5.5f;
  ```

  All tunable in inspector. No code recompile. Change at runtime in play mode.

  
  </div>
</details>



<style>
  #fm-gravity-1:checked ~ .media-slides figure:nth-child(1),
  #fm-gravity-2:checked ~ .media-slides figure:nth-child(2) {
    display: block;
  }

  #fm-gravity-1:checked ~ .media-dots label:nth-child(1),
  #fm-gravity-2:checked ~ .media-dots label:nth-child(2) {
    background: #38bdf8;
    transform: scale(1.2);
  }

  #fm-gravity-1:checked ~ .media-arrows .arrow-prev-1,
  #fm-gravity-2:checked ~ .media-arrows .arrow-prev-2,
  #fm-gravity-1:checked ~ .media-arrows .arrow-next-1,
  #fm-gravity-2:checked ~ .media-arrows .arrow-next-2 {
    opacity: 1;
    pointer-events: auto;
  }
</style>
</div>

</details>

---

## - - - --->Technical<--- - - -  {.outline-only}

# 𓆩Technical Deep Dive𓆪 {.section-title-center}

## Architecture Overview {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Architecture Overview - Modular Component System</span>
    <span class="section-icon">▾</span>
  </summary>

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

</details>

## 1. Movement Core {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ System 1: Character Movement</span>
    <span class="section-icon">▾</span>
  </summary>

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

</details>

## 2. Ground Detection {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ System 2: Ground Detection</span>
    <span class="section-icon">▾</span>
  </summary>

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

</details>

## 3. Input Handling {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ System 3: Side-Scroller Controller</span>
    <span class="section-icon">▾</span>
  </summary>

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

</details>

---

## - - - --->Extras<--- - - -  {.outline-only}

# 𓆩Extra Notes𓆪 {.section-title-center}

## When to Use This Framework {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ When to Use This Framework</span>
    <span class="section-icon">▾</span>
  </summary>

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

</details>

## Framework Implementation {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Framework vs. Game-Specific Implementation</span>
    <span class="section-icon">▾</span>
  </summary>

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

</details>

## Technologies & Stack {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Technologies & Stack</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

- **Engine:** Unity 2020 LTS+
- **Language:** C#
- **Physics:** Rigidbody2D with custom movement
- **Input:** New Input System (event-driven, configurable)
- **Ground Detection:** Raycast & CapsuleCast
- **Performance:** Zero allocations per frame (pooling-friendly)
- **Documentation:** Inline comments + parameter descriptions

</div>

</details>

## Links & Resources {.outline-only}

<details class="section-panel">
  <summary class="section-header">
    <span class="section-title">✮ Links & Resources</span>
    <span class="section-icon">▾</span>
  </summary>

<div class="project-text">

- **GitHub:** [Not available yet]
- **Used In:** <a href='/protforlio-site/projects/path-to-power' >Path to Power</a>
- **Live Demo:** [Not available yet]
- **Documentation:** Included in codebase

</div>

</details>

---
