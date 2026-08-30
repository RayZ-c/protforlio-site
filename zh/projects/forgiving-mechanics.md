---
layout: doc
title: C# 容错移动框架
description: 可复用的角色移动控制器，内建容错输入机制、Coyote Time、跳跃缓冲与重力处理，专为快速原型开发打造。
---

<a href="../../zh/projects/" class="back-projects-button"> ❮❮ 所有项目 </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">项目状态 :</span>
      <span class="info-line-value"> 已完成的可复用框架 |  4 周 </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">项目类型 :</span>
      <span class="info-line-value"> 模块化框架 | Unity（C#） </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">核心方向 :</span>
      <span class="info-line-value"> 移动手感 | 手感架构 </span>
    </p>
  </div>

</div>

# 容错移动框架 {.page-title-center}
-------

<p class="project-text">
  一套可投入正式项目的<strong>横版角色移动控制器</strong>，建立在<strong>容错机制</strong>之上（跳跃缓冲、Coyote Time（跳跃宽限）、可变重力）。它被设计成<strong>可复用框架</strong>，让团队用几周而不是几个月搭好移动基础；<strong>数值驱动的架构</strong>也便于快速制作原型与协作调校。
</p>
<!-- HERO MEDIA CAROUSEL (fm-hero-*) -->
    <MediaCarousel data-hx-reveal id="fm-hero-media" :slides="[
  { src: '/videos/forgiving-mechanics/fm-showcase-1.mp4', caption: '容错跳跃机制演示。' },
  { src: '/videos/forgiving-mechanics/fm-coyotetime.mp4', caption: '精准的地面检测（以 Coyote Time 为例）。' }
]" />

    



---

# 总览 {.section-title-center data-hx-reveal="true"}

## 项目概览 {.outline-only}

<ProjectPanel icon="target" title="给招聘方的快速摘要">

  <div class="project-text">
    <ul>
      <li>已在正式项目中验证过的<strong>可复用角色移动框架</strong></li>
      <li>内建容错机制：<strong>Coyote Time、跳跃缓冲、可变重力</strong></li>
      <li>以可靠的射线检测处理<strong>斜坡与地面判定</strong></li>
      <li>模块化架构，采<strong>数值驱动设计</strong>（没有魔法数字）</li>
      <li>放进任意项目、在 Inspector 里配置，几天内就能上线</li>
      <li>作为 <strong><a href="./path-to-power">Path to Power</a></strong> 战斗系统的底层基础</li>
    </ul>
  </div>

</ProjectPanel>


## 核心设计理念 {.outline-only}

<ProjectPanel icon="lightbulb" title="核心设计理念">

<div class="project-text">

# 「移动手感是一切手感的地基。」

这套框架想证明的是：
- ✅ **容错的输入窗口**，奖励玩家的意图而不是苛求精准
- ✅ **基于物理但可调**（重力、加速度、摩擦力都是参数）
- ✅ **真的可靠的地面检测**（射线检测扎实，没有边界情况漏判）
- ✅ **注重性能**（每帧零内存分配，方便对象池化）
- ✅ **适合团队的架构**（参数优先，代码其次）

每个系统都在回答同一个问题：*「怎样让移动感觉是公平的？」*

</div>

</ProjectPanel>

## 技术亮点 {.outline-only}

<ProjectPanel icon="settings" title="技术亮点">

<div class="project-text">

  - ✅ **Coyote Time（跳跃宽限窗口）：** 离开地面后 0.15 秒内仍可起跳
  - ✅ **跳跃输入缓冲：** 落地前 0.1 秒内的提前输入依然生效
  - ✅ **可变重力：** 顶点滞空（0.4 倍）、下落加速（5.5 倍），营造自然的手感
  - ✅ **地面检测与行走：** 基于射线的地面判定能妥善处理斜坡
  - ✅ **动量保留：** 攻击与冲刺系统会继承玩家当前速度
  - ✅ **冲刺覆盖机制：** 冲刺打断的是移动而不是动作（保留操作空间）
  - ✅ **加速曲线：** 从静止到奔跑是平滑爬升，而非瞬间到位
  - ✅ **不可叠加跳跃：** 重力检查杜绝二段跳的漏洞

</div>

</ProjectPanel>

---

## 功能{.outline-only}

# 亮点功能 {.section-title-center data-hx-reveal="true"}

## 1. 容错输入机制 {.outline-only}

<ProjectPanel icon="timer" eyebrow="输入" title="跳跃缓冲与 Coyote Time">

<!-- MOVEMENT MEDIA CAROUSEL (fm-move-*) -->
<MediaCarousel data-hx-reveal id="fm-move-media" :slides="[
  { src: '/videos/forgiving-mechanics/fm-jumpbuffer.mp4', caption: '跳跃缓冲：落地前 0.15 秒按下跳跃仍会生效' },
  { src: '/videos/forgiving-mechanics/fm-coyotetime.mp4', caption: 'Coyote Time：离开地面后 0.15 秒内起跳依然成立' }
]" />

<div class="project-text">

**你看到的是：** 一个*不会*因为时机没抓准而跳空的角色——输入窗口大到足够宽容，又小到不失跟手。

<ProjectPanel icon="arrow-up" variant="mini" title="跳跃缓冲">

  <div class="mini-panel-body">

  - 玩家在落地前 0.15 秒按下跳跃
  - 系统记录这次输入的时间戳
  - 落地当下若缓冲仍有效，就补执行这次跳跃
  - <strong>成果：</strong>不会有「差一帧」的挫败感，但也无法被滥用

  </div>
</ProjectPanel>

<ProjectPanel icon="timer" variant="mini" title="Coyote Time">

  <div class="mini-panel-body">

  - 玩家离开地面（走出平台边缘、从平台落下）
  - 离开后的 0.15 秒内，跳跃依然可用
  - 即使玩家是按着跳跃键走出边缘也成立（依动量判定）
  - <strong>成果：</strong>把「我跳晚了」的瞬间变成成功

  </div>
</ProjectPanel>


**为什么两者都要（而不是二选一）：**
- 只有**缓冲**：会惩罚反应快的玩家（感觉不跟手）
- 只有 **Coyote**：会惩罚预判型玩家（感觉很廉价）
- **两者并用**：两种玩法都成立，游戏感觉才公平

<ProjectPanel icon="code-xml" variant="mini" title="实现">

  <div class="mini-panel-body">


  ```csharp
  if (jumpInputTime > Time.time - jumpBufferWindow && isGrounded)
      Jump();  // retroactively register

  if (coyoteTimeCounter > 0f && jumpPerformed)
      Jump();  // free jump after leaving ground
  ```

  **结果：** 玩家会先说出「这个移动手感真好」，然后才搞懂为什么。那就是好的游戏设计。


  </div>
</ProjectPanel>


</div>



</ProjectPanel>


## 2. 地面检测 {.outline-only}

<ProjectPanel icon="radar" eyebrow="物理" title="可靠的地面检测">

<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-ground-media" :slides="[
  { src: '/videos/forgiving-mechanics/fm-grounddetection.mp4', caption: '胶囊射线检测在平面与斜面上都能稳定判定地面' }
]" />

<div class="project-text">

**问题：** 标准的刚体碰撞检查在斜坡、转角或帧率波动时会漏判地面。结果就是：玩家明明站在地上，跳跃却没反应。

**解法：胶囊射线检测**

<ProjectPanel icon="code-xml" variant="mini" title="实现">

  <div class="mini-panel-body">


  从胶囊底部发出多条射线并向外张开，以便抓到边缘：
  ```csharp
  RaycastHit2D hit = Physics2D.CapsuleCast(
      position: bottomCenter,
      size: capsuleSize,
      direction: Vector2.down,
      distance: groundCheckDistance,
      layerMask: groundLayer
  );
  ```

  **这样做为什么有效：**
  - ✅ 斜坡上也抓得到地面（射线向外张开，斜面同样成立）
  - ✅ 能提早判定边缘（检测距离大于视觉尺寸）
  - ✅ 任何帧率下都成立（射线检测与帧时间无关）
  - ✅ 没有刚体碰撞抖动（独立在 FixedUpdate 中运行）
  </div>
</ProjectPanel>



</div>



</ProjectPanel>

## 3. 物理调校 {.outline-only}

<ProjectPanel icon="arrow-down-to-line" eyebrow="物理" title="可变重力与加速度">


<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-gravity-media" :slides="[
  { src: '/videos/forgiving-mechanics/fm-vjh.mp4', caption: '可变跳跃重力（滞空效果）与加速曲线演示。' }
]" />

<div class="project-text">

**可变重力（滞空效果）：**



<ProjectPanel icon="code-xml" variant="mini" title="实现">

  <div class="mini-panel-body">

  跳跃顶点时重力降到 0.4 倍；开始下落后重力拉高到 5.5 倍。

  ```csharp
  if (jumpHeld && velocity.y < hangTimeThreshold)
      rigidbody.gravityScale = normalGravity * 0.4f;  // hang
  else if (velocity.y < 0)
      rigidbody.gravityScale = normalGravity * 5.5f;  // fall fast
  ```

  **为什么有效：**
  - 顶点处玩家感觉轻盈（掌控感更强，也有时间判断落点）
  - 之后迅速下坠（跳跃有承担感，尾段不会拖泥带水）
  - 符合直觉（球抛上去会慢慢落下，但我们感知到的是滞空）
  - 把「弧线的感觉」与「实际轨迹」拆开——弧线本身*就是*手感

  </div>
</ProjectPanel>


**加速曲线（平滑爬升）：**


<ProjectPanel icon="code-xml" variant="mini" title="实现">

  <div class="mini-panel-body">

    
  ```csharp
  targetVelocity = inputDirection * maxSpeed;
  velocity.x = Mathf.Lerp(velocity.x, targetVelocity, acceleration * Time.deltaTime);
  ```

  **为什么有效：**
  - 瞬间加速会显得生硬（不真实，也不符合直觉）
  - 平滑插值同时兼顾跟手与重量感（角色有动量）
  - 加速度数值可调（0.1 拖沓、0.5 俐落、0.9 接近瞬发）
  - 也能做成加减速不对称的曲线（停得更快 = 掌控感更强）

  </div>
</ProjectPanel>


**数值驱动：**


<ProjectPanel icon="code-xml" variant="mini" title="实现">

  <div class="mini-panel-body">


  ```csharp
  [SerializeField] float maxSpeed = 5f;
  [SerializeField] float acceleration = 0.85f;
  [SerializeField] float hangTimeGravity = 0.4f;
  [SerializeField] float fallGravity = 5.5f;
  ```

  全部可在 Inspector 中调整，不必重新编译，运行时也能即时改。

  
  </div>
</ProjectPanel>




</div>

</ProjectPanel>

---

## 技术{.outline-only}

# 技术细节 {.section-title-center data-hx-reveal="true"}

## 架构概览 {.outline-only}

<ProjectPanel icon="layers" title="架构概览 —— 模块化组件系统">

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

**单一职责：**
- `CharacterMovement`：纯粹处理物理
- `GroundDetection`：纯粹处理射线检测
- `InputHandler`：输入映射
- `Combat/Dash`：在移动 API 之上搭建的系统

**这为什么重要：** 任何一层都能被替换而不影响其他层。想改地面检测逻辑？CharacterMovement 完全不受影响。要加新输入？移动逻辑一行都不用动。

**接入点：**
```csharp
// In FixedUpdate
groundDetection.CheckGround();
characterMovement.UpdatePhysics(inputDirection, isJumping);
controller.Move(characterMovement.Velocity);
```

线性、清楚、好测试。

</div>

</ProjectPanel>

## 1. 移动核心 {.outline-only}

<ProjectPanel icon="footprints" title="系统 1：角色移动">

<div class="project-text">

**跳跃缓冲的实现：**
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

**Coyote Time 的实现：**
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

**顺序为什么重要：**
1. 记录输入时间
2. 检查是否着地
3. 比对时间戳
4. 执行跳跃
5. 消耗掉这次输入

没有分支，纯粹的顺序逻辑。好调试，也好扩展。

**可变重力：**
```csharp
private void ApplyGravity()
{
    float gravityMultiplier = velocity.y > 0 ? hangTimeGravity : fallGravity;
    velocity.y += Physics2D.gravity.y * gravityMultiplier * Time.deltaTime;
}
```

很短。很有效。可调。

</div>

</ProjectPanel>

## 2. 地面检测 {.outline-only}

<ProjectPanel icon="radar" title="系统 2：地面检测">

<div class="project-text">

**胶囊射线的写法：**
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

**为什么用胶囊而不是单线射线：**
- 单线射线：只检查中心点（会漏掉斜坡）
- 胶囊射线：沿宽度张开（抓得到边缘）
- 胶囊与角色视觉尺寸一致（不必再靠魔法数字硬凑检测距离）

**斜坡处理：**
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

斜坡走起来自然，也不会黏在不该黏的地方。

</div>

</ProjectPanel>

## 3. 输入处理 {.outline-only}

<ProjectPanel icon="move-horizontal" title="系统 3：横版控制器">

<div class="project-text">

**输入映射（简单直接）：**
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

**面向方向（与移动解耦）：**
```csharp
if (moveInput != 0)
    facingDirection = moveInput > 0 ? 1 : -1;

// Facing direction persists even during jump
// Result: Player can face one direction while moving another (skill expression)
```

**为什么要把面向解耦：**
- 让玩家能在跳跃中向后攻击（高阶操作）
- 手感更跟手（画面反馈符合玩家意图）
- 不是自动的（由玩家主动掌控）

**这个模式是：** 输入 → 数据 → 动作。不在同一帧内改动状态。

</div>

</ProjectPanel>

---

## 其他{.outline-only}

# 补充说明 {.section-title-center data-hx-reveal="true"}

## 什么情况适合用这套框架 {.outline-only}

<ProjectPanel icon="compass" title="什么情况适合用这套框架">

<div class="project-text">

**非常适合：**
- ✅ 平台动作游戏（例如《空洞骑士》那类）
- ✅ 2D Roguelike 或地牢探索
- ✅ 快速原型（30 分钟内就能接好）
- ✅ 联机需求（物理完全可确定性复现）
- ✅ 团队协作（数值驱动，而非写死在代码里）

**不太适合：**
- ❌ 格子移动（请改用 A* 寻路）
- ❌ 3D 游戏（这份代码只处理 2D；3D 版本另外提供）

</div>

</ProjectPanel>

## 框架的定位 {.outline-only}

<ProjectPanel icon="git-compare" title="框架与游戏专属实现的分界">

<div class="project-text">

**这是框架，不是模板**

意思是：
- 移动代码归你所有（你可以随意改）
- 参数只是起点，不是教条（依你的游戏手感去调）
- 交付以周计而不是以月计（省下数百小时）
- 可扩展到多个角色（Path to Power 就在其上加了专属战斗）

**你会得到：**
- 经过实战验证的容错机制
- 可靠的地面检测（不会再有「跳不起来」的 Bug）
- 干净、有注释的代码（团队看得懂）
- 参数优先的设计（调整不必重编译）

**你要自己做的：**
- 游戏专属的战斗系统
- 自定义技能（冲刺、二段跳、蹬墙）
- 独有的手感（依你的游戏调整重力与加速度）
- 关卡设计的套路（斜坡、平台、缺口）

框架负责*地基*，你负责*风味*。

</div>

</ProjectPanel>

## 技术栈 {.outline-only}

<ProjectPanel icon="wrench" title="技术栈">

<div class="project-text">

- **引擎：** Unity 2020 LTS 以上
- **语言：** C#
- **物理：** Rigidbody2D 搭配自订移动逻辑
- **输入：** New Input System（事件驱动、可配置）
- **地面检测：** Raycast 与 CapsuleCast
- **性能：** 每帧零内存分配（方便对象池化）
- **文档：** 代码注释与参数说明

</div>

</ProjectPanel>

## 相关链接 {.outline-only}

<ProjectPanel icon="link" title="相关链接">

<div class="project-text">

- **GitHub：** [暂未开放]
- **应用于：** [Path to Power](/zh/projects/path-to-power)
- **在线试玩：** [暂未开放]
- **文档：** 已包含在代码库中

</div>

</ProjectPanel>

---
