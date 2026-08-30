---
layout: doc
title: C# 容錯移動框架
description: 可重複使用的角色移動控制器，內建容錯輸入機制、Coyote Time、跳躍緩衝與重力處理，專為快速原型開發打造。
---

<a href="../../zh-Hant/projects/" class="back-projects-button"> ❮❮ 所有專案 </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">專案狀態 :</span>
      <span class="info-line-value"> 已完成的可重複使用框架 |  4 週 </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">專案類型 :</span>
      <span class="info-line-value"> 模組化框架 | Unity（C#） </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">核心方向 :</span>
      <span class="info-line-value"> 移動手感 | 手感架構 </span>
    </p>
  </div>

</div>

# 容錯移動框架 {.page-title-center}
-------

<p class="project-text">
  一套可投入正式專案的<strong>橫向捲軸角色移動控制器</strong>，建立在<strong>容錯機制</strong>之上（跳躍緩衝、Coyote Time（跳躍寬限）、可變重力）。它被設計成<strong>可重複使用的框架</strong>，讓團隊用幾週而不是幾個月搭好移動基礎；<strong>數值驅動的架構</strong>也便於快速製作原型與協作調校。
</p>
<!-- HERO MEDIA CAROUSEL (fm-hero-*) -->
    <MediaCarousel data-hx-reveal id="fm-hero-media" :slides="[
  { src: '/videos/forgiving-mechanics/fm-showcase-1.mp4', caption: '容錯跳躍機制展示。' },
  { src: '/videos/forgiving-mechanics/fm-coyotetime.mp4', caption: '精準的地面偵測（以 Coyote Time 為例）。' }
]" />

    



---

# 總覽 {.section-title-center data-hx-reveal="true"}

## 專案概覽 {.outline-only}

<ProjectPanel icon="target" title="給招募方的快速摘要">

  <div class="project-text">
    <ul>
      <li>已在正式專案中驗證過的<strong>可重複使用角色移動框架</strong></li>
      <li>內建容錯機制：<strong>Coyote Time、跳躍緩衝、可變重力</strong></li>
      <li>以可靠的射線偵測處理<strong>斜坡與地面判定</strong></li>
      <li>模組化架構，採<strong>數值驅動設計</strong>（沒有魔術數字）</li>
      <li>放進任何專案、在 Inspector 裡設定，幾天內就能上線</li>
      <li>作為 <strong><a href="./path-to-power">Path to Power</a></strong> 戰鬥系統的底層基礎</li>
    </ul>
  </div>

</ProjectPanel>


## 核心設計理念 {.outline-only}

<ProjectPanel icon="lightbulb" title="核心設計理念">

<div class="project-text">

# 「移動手感是一切手感的地基。」

這套框架想證明的是：
- ✅ **容錯的輸入窗口**，獎勵玩家的意圖而不是苛求精準
- ✅ **基於物理但可調**（重力、加速度、摩擦力都是參數）
- ✅ **真的可靠的地面偵測**（射線偵測扎實，沒有邊界情況漏判）
- ✅ **注重效能**（每幀零記憶體配置，方便物件池化）
- ✅ **適合團隊的架構**（參數優先，程式其次）

每個系統都在回答同一個問題：*「怎樣讓移動感覺是公平的？」*

</div>

</ProjectPanel>

## 技術亮點 {.outline-only}

<ProjectPanel icon="settings" title="技術亮點">

<div class="project-text">

  - ✅ **Coyote Time（跳躍寬限窗口）：** 離開地面後 0.15 秒內仍可起跳
  - ✅ **跳躍輸入緩衝：** 落地前 0.1 秒內的提前輸入依然生效
  - ✅ **可變重力：** 頂點滯空（0.4 倍）、下墜加速（5.5 倍），營造自然的手感
  - ✅ **地面偵測與行走：** 基於射線的地面判定能妥善處理斜坡
  - ✅ **動量保留：** 攻擊與衝刺系統會繼承玩家當前速度
  - ✅ **衝刺覆寫機制：** 衝刺打斷的是移動而不是動作（保留操作空間）
  - ✅ **加速曲線：** 從靜止到奔跑是平滑爬升，而非瞬間到位
  - ✅ **不可疊加跳躍：** 重力檢查杜絕二段跳的漏洞

</div>

</ProjectPanel>

---

## 功能{.outline-only}

# 亮點功能 {.section-title-center data-hx-reveal="true"}

## 1. 容錯輸入機制 {.outline-only}

<ProjectPanel icon="timer" eyebrow="輸入" title="跳躍緩衝與 Coyote Time">

<!-- MOVEMENT MEDIA CAROUSEL (fm-move-*) -->
<MediaCarousel data-hx-reveal id="fm-move-media" :slides="[
  { src: '/videos/forgiving-mechanics/fm-jumpbuffer.mp4', caption: '跳躍緩衝：落地前 0.15 秒按下跳躍仍會生效' },
  { src: '/videos/forgiving-mechanics/fm-coyotetime.mp4', caption: 'Coyote Time：離開地面後 0.15 秒內起跳依然成立' }
]" />

<div class="project-text">

**你看到的是：** 一個*不會*因為時機沒抓準而跳空的角色——輸入窗口大到足夠寬容，又小到不失跟手。

<ProjectPanel icon="arrow-up" variant="mini" title="跳躍緩衝">

  <div class="mini-panel-body">

  - 玩家在落地前 0.15 秒按下跳躍
  - 系統記錄這次輸入的時間戳
  - 落地當下若緩衝仍有效，就補執行這次跳躍
  - <strong>成果：</strong>不會有「差一幀」的挫折感，但也無法被濫用

  </div>
</ProjectPanel>

<ProjectPanel icon="timer" variant="mini" title="Coyote Time">

  <div class="mini-panel-body">

  - 玩家離開地面（走出平台邊緣、從平台落下）
  - 離開後的 0.15 秒內，跳躍依然可用
  - 即使玩家是按著跳躍鍵走出邊緣也成立（依動量判定）
  - <strong>成果：</strong>把「我跳太晚了」的瞬間變成成功

  </div>
</ProjectPanel>


**為什麼兩者都要（而不是二選一）：**
- 只有**緩衝**：會懲罰反應快的玩家（感覺不跟手）
- 只有 **Coyote**：會懲罰預判型玩家（感覺很廉價）
- **兩者並用**：兩種玩法都成立，遊戲感覺才公平

<ProjectPanel icon="code-xml" variant="mini" title="實作">

  <div class="mini-panel-body">


  ```csharp
  if (jumpInputTime > Time.time - jumpBufferWindow && isGrounded)
      Jump();  // retroactively register

  if (coyoteTimeCounter > 0f && jumpPerformed)
      Jump();  // free jump after leaving ground
  ```

  **結果：** 玩家會先說出「這個移動手感真好」，然後才搞懂為什麼。那就是好的遊戲設計。


  </div>
</ProjectPanel>


</div>



</ProjectPanel>


## 2. 地面偵測 {.outline-only}

<ProjectPanel icon="radar" eyebrow="物理" title="可靠的地面偵測">

<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-ground-media" :slides="[
  { src: '/videos/forgiving-mechanics/fm-grounddetection.mp4', caption: '膠囊射線偵測在平面與斜面上都能穩定判定地面' }
]" />

<div class="project-text">

**問題：** 標準的剛體碰撞檢查在斜坡、轉角或幀率波動時會漏判地面。結果就是：玩家明明站在地上，跳躍卻沒反應。

**解法：膠囊射線偵測**

<ProjectPanel icon="code-xml" variant="mini" title="實作">

  <div class="mini-panel-body">


  從膠囊底部發出多條射線並向外張開，以便抓到邊緣：
  ```csharp
  RaycastHit2D hit = Physics2D.CapsuleCast(
      position: bottomCenter,
      size: capsuleSize,
      direction: Vector2.down,
      distance: groundCheckDistance,
      layerMask: groundLayer
  );
  ```

  **這樣做為什麼有效：**
  - ✅ 斜坡上也抓得到地面（射線向外張開，斜面同樣成立）
  - ✅ 能提早判定邊緣（偵測距離大於視覺尺寸）
  - ✅ 任何幀率下都成立（射線偵測與幀時間無關）
  - ✅ 沒有剛體碰撞抖動（獨立在 FixedUpdate 中執行）
  </div>
</ProjectPanel>



</div>



</ProjectPanel>

## 3. 物理調校 {.outline-only}

<ProjectPanel icon="arrow-down-to-line" eyebrow="物理" title="可變重力與加速度">


<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-gravity-media" :slides="[
  { src: '/videos/forgiving-mechanics/fm-vjh.mp4', caption: '可變跳躍重力（滯空效果）與加速曲線展示。' }
]" />

<div class="project-text">

**可變重力（滯空效果）：**



<ProjectPanel icon="code-xml" variant="mini" title="實作">

  <div class="mini-panel-body">

  跳躍頂點時重力降到 0.4 倍；開始下墜後重力拉高到 5.5 倍。

  ```csharp
  if (jumpHeld && velocity.y < hangTimeThreshold)
      rigidbody.gravityScale = normalGravity * 0.4f;  // hang
  else if (velocity.y < 0)
      rigidbody.gravityScale = normalGravity * 5.5f;  // fall fast
  ```

  **為什麼有效：**
  - 頂點處玩家感覺輕盈（掌控感更強，也有時間判斷落點）
  - 之後迅速下墜（跳躍有承擔感，尾段不會拖泥帶水）
  - 符合直覺（球拋上去會慢慢落下，但我們感知到的是滯空）
  - 把「弧線的感覺」與「實際軌跡」拆開——弧線本身*就是*手感

  </div>
</ProjectPanel>


**加速曲線（平滑爬升）：**


<ProjectPanel icon="code-xml" variant="mini" title="實作">

  <div class="mini-panel-body">

    
  ```csharp
  targetVelocity = inputDirection * maxSpeed;
  velocity.x = Mathf.Lerp(velocity.x, targetVelocity, acceleration * Time.deltaTime);
  ```

  **為什麼有效：**
  - 瞬間加速會顯得生硬（不真實，也不符合直覺）
  - 平滑插值同時兼顧跟手與重量感（角色有動量）
  - 加速度數值可調（0.1 拖沓、0.5 俐落、0.9 接近瞬發）
  - 也能做成加減速不對稱的曲線（停得更快 = 掌控感更強）

  </div>
</ProjectPanel>


**數值驅動：**


<ProjectPanel icon="code-xml" variant="mini" title="實作">

  <div class="mini-panel-body">


  ```csharp
  [SerializeField] float maxSpeed = 5f;
  [SerializeField] float acceleration = 0.85f;
  [SerializeField] float hangTimeGravity = 0.4f;
  [SerializeField] float fallGravity = 5.5f;
  ```

  全部可在 Inspector 中調整，不必重新編譯，執行期也能即時改。

  
  </div>
</ProjectPanel>




</div>

</ProjectPanel>

---

## 技術{.outline-only}

# 技術細節 {.section-title-center data-hx-reveal="true"}

## 架構概覽 {.outline-only}

<ProjectPanel icon="layers" title="架構概覽 —— 模組化元件系統">

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

**單一職責：**
- `CharacterMovement`：純粹處理物理
- `GroundDetection`：純粹處理射線偵測
- `InputHandler`：輸入對應
- `Combat/Dash`：在移動 API 之上搭建的系統

**這為什麼重要：** 任何一層都能被替換而不影響其他層。想改地面偵測邏輯？CharacterMovement 完全不受影響。要加新輸入？移動邏輯一行都不用動。

**接入點：**
```csharp
// In FixedUpdate
groundDetection.CheckGround();
characterMovement.UpdatePhysics(inputDirection, isJumping);
controller.Move(characterMovement.Velocity);
```

線性、清楚、好測試。

</div>

</ProjectPanel>

## 1. 移動核心 {.outline-only}

<ProjectPanel icon="footprints" title="系統 1：角色移動">

<div class="project-text">

**跳躍緩衝的實作：**
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

**Coyote Time 的實作：**
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

**順序為什麼重要：**
1. 記錄輸入時間
2. 檢查是否著地
3. 比對時間戳
4. 執行跳躍
5. 消耗掉這次輸入

沒有分支，純粹的順序邏輯。好除錯，也好擴充。

**可變重力：**
```csharp
private void ApplyGravity()
{
    float gravityMultiplier = velocity.y > 0 ? hangTimeGravity : fallGravity;
    velocity.y += Physics2D.gravity.y * gravityMultiplier * Time.deltaTime;
}
```

很短。很有效。可調。

</div>

</ProjectPanel>

## 2. 地面偵測 {.outline-only}

<ProjectPanel icon="radar" title="系統 2：地面偵測">

<div class="project-text">

**膠囊射線的寫法：**
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

**為什麼用膠囊而不是單線射線：**
- 單線射線：只檢查中心點（會漏掉斜坡）
- 膠囊射線：沿寬度張開（抓得到邊緣）
- 膠囊與角色視覺尺寸一致（不必再靠魔術數字硬湊偵測距離）

**斜坡處理：**
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

斜坡走起來自然，也不會黏在不該黏的地方。

</div>

</ProjectPanel>

## 3. 輸入處理 {.outline-only}

<ProjectPanel icon="move-horizontal" title="系統 3：橫向捲軸控制器">

<div class="project-text">

**輸入對應（簡單直接）：**
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

**面向方向（與移動解耦）：**
```csharp
if (moveInput != 0)
    facingDirection = moveInput > 0 ? 1 : -1;

// Facing direction persists even during jump
// Result: Player can face one direction while moving another (skill expression)
```

**為什麼要把面向解耦：**
- 讓玩家能在跳躍中向後攻擊（高階操作）
- 手感更跟手（畫面回饋符合玩家意圖）
- 不是自動的（由玩家主動掌控）

**這個模式是：** 輸入 → 資料 → 動作。不在同一幀內改動狀態。

</div>

</ProjectPanel>

---

## 其他{.outline-only}

# 補充說明 {.section-title-center data-hx-reveal="true"}

## 什麼情況適合用這套框架 {.outline-only}

<ProjectPanel icon="compass" title="什麼情況適合用這套框架">

<div class="project-text">

**非常適合：**
- ✅ 平台動作遊戲（例如《空洞騎士》那類）
- ✅ 2D Roguelike 或地城探索
- ✅ 快速原型（30 分鐘內就能接好）
- ✅ 連線需求（物理完全可決定性重現）
- ✅ 團隊協作（數值驅動，而非寫死在程式裡）

**不太適合：**
- ❌ 格狀移動（請改用 A* 尋路）
- ❌ 3D 遊戲（這份程式只處理 2D；3D 版本另外提供）

</div>

</ProjectPanel>

## 框架的定位 {.outline-only}

<ProjectPanel icon="git-compare" title="框架與遊戲專屬實作的分界">

<div class="project-text">

**這是框架，不是範本**

意思是：
- 移動程式碼歸你所有（你可以隨意修改）
- 參數只是起點，不是教條（依你的遊戲手感去調）
- 交付以週計而不是以月計（省下數百小時）
- 可擴充到多個角色（Path to Power 就在其上加了專屬戰鬥）

**你會得到：**
- 經過實戰驗證的容錯機制
- 可靠的地面偵測（不會再有「跳不起來」的 Bug）
- 乾淨、有註解的程式碼（團隊看得懂）
- 參數優先的設計（調整不必重新編譯）

**你要自己做的：**
- 遊戲專屬的戰鬥系統
- 自訂技能（衝刺、二段跳、蹬牆）
- 獨有的手感（依你的遊戲調整重力與加速度）
- 關卡設計的套路（斜坡、平台、缺口）

框架負責*地基*，你負責*風味*。

</div>

</ProjectPanel>

## 技術堆疊 {.outline-only}

<ProjectPanel icon="wrench" title="技術堆疊">

<div class="project-text">

- **引擎：** Unity 2020 LTS 以上
- **語言：** C#
- **物理：** Rigidbody2D 搭配自訂移動邏輯
- **輸入：** New Input System（事件驅動、可設定）
- **地面偵測：** Raycast 與 CapsuleCast
- **效能：** 每幀零記憶體配置（方便物件池化）
- **文件：** 程式碼註解與參數說明

</div>

</ProjectPanel>

## 相關連結 {.outline-only}

<ProjectPanel icon="link" title="相關連結">

<div class="project-text">

- **GitHub：** [尚未開放]
- **應用於：** [Path to Power](/zh-Hant/projects/path-to-power)
- **線上試玩：** [尚未開放]
- **文件：** 已包含在程式碼庫中

</div>

</ProjectPanel>

---
