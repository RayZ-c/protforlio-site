---
layout: doc
title: 龍珠 2D 平台動作
description: 一款以《七龍珠》為靈感的快節奏 2D 動作平台遊戲，四週內在 Unity 上獨立完成，專注於容錯移動機制、多層次戰鬥回饋，以及宣告式的 C# UI 系統。
---

<a href="../../zh-Hant/projects/" class="back-projects-button"> ❮❮ 所有專案 </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">專案狀態 :</span>
      <span class="info-line-value"> 進行中（核心系統已完成） | 4 週 </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">專案類型 :</span>
      <span class="info-line-value"> 個人專案 | Unity（C#）  </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">核心方向 :</span>
      <span class="info-line-value"> 移動與戰鬥手感 | UI 系統</span>
    </p>
  </div>

</div>

# 龍珠 2D 平台動作 {.page-title-center}
-------

<p class="project-text">
  一款取材自動畫戰鬥風格的 <strong>2D 動作平台遊戲</strong>，用來展現<strong>容錯移動與戰鬥框架</strong>、<strong>多層次打擊回饋的統籌</strong>，以及<strong>純 C# 撰寫的 UI Toolkit HUD</strong>——全部由我在四週期限內獨立完成。
</p>
<!-- HERO MEDIA CAROUSEL (ptp-hero-*) -->
    <MediaCarousel data-hx-reveal id="ptp-hero-media" :slides="[
  { src: '/videos/path-to-power/ptp-showcase-1.mp4', caption: '完整戰鬥系統概覽。' },
  { src: '/videos/path-to-power/ptp-showcase-4.mp4', caption: '移動與衝刺展示。' },
  { src: '/videos/path-to-power/ptp-showcase-3.mp4', caption: '主選單展示。' }
]" />

    



---

# 總覽 {.section-title-center data-hx-reveal="true"}

## 專案概覽 {.outline-only}

<ProjectPanel icon="target" title="給招募方的快速摘要">

  <div class="project-text">
    <ul>
      <li>四週獨立完成的動作平台遊戲，建立在<a href="./forgiving-mechanics"><strong>可重複使用的移動框架</strong></a>之上</li>
      <li>跟手的移動搭配<strong>容錯機制</strong>（跳躍緩衝、Coyote Time（跳躍寬限）、可變重力）</li>
      <li><strong>多層次戰鬥回饋</strong>（特效 + 音效 + 鏡頭 + 物理 + Hit Stop（命中停頓）+ UI 全部同步）</li>
      <li>純 <strong>C# UI Toolkit HUD</strong>（不使用 UXML，宣告式，對設計師友善）</li>
      <li>架構預留了擴充到多角色與 Boss 戰的空間</li>
      <li>數值驅動的系統，支撐團隊協作與快速迭代</li>
    </ul>
  </div>

</ProjectPanel>


## 核心設計理念 {.outline-only}

<ProjectPanel icon="lightbulb" title="核心設計理念">

<div class="project-text">

# 「地基先打對，打磨才有意義，然後快速迭代。」

這個專案想證明的是：
- ✅ **跟手**、**容錯**的機制，操作起來就是舒服
- ✅ **多層次回饋的工程化**（特效 + 音效 + 物理 + UI + 動畫全部同步）
- ✅ **宣告式的系統設計**，讓調整與團隊協作都變快
- ✅ 在時間壓力下**聰明地取捨**（數值驅動，對設計師友善）
- ✅ **模組化架構**（戰鬥層疊在已驗證過的移動框架之上）


</div>

</ProjectPanel>


## 技術亮點 {.outline-only}

<ProjectPanel icon="settings" title="技術亮點">

<div class="project-text">

  - ✅ **物件池（特效與音效）：** 支援每次播放的個別自訂（顏色、縮放、音高變化、存活時間等）
  - ✅ **動畫事件同步：** 讓美術用眼睛決定攻擊時機，而不是程式去猜第幾幀
  - ✅ **狀態優先順序系統：** 支援動作取消，同時避免狀態互相打架
  - ✅ **輸入緩衝（三路並行）：** 跳躍、衝刺、攻擊各有緩衝
  - ✅ **模組化架構：** 系統彼此解耦（特效／音效／UI／音訊互不依賴）
  - ✅ **與設計師協作：** 數值驅動的調校支撐快速迭代（改平衡不必重新編譯）


</div>

</ProjectPanel>



---
## 功能{.outline-only}

# 亮點功能 {.section-title-center data-hx-reveal="true"}

## 1. 移動框架 {.outline-only}

<ProjectPanel icon="footprints" eyebrow="移動" title="容錯機制">

<!-- MOVEMENT MEDIA CAROUSEL (ptp-move-*) -->
<MediaCarousel data-hx-reveal id="ptp-move-media" :slides="[
  { src: '/videos/path-to-power/ptp-showcase-4.mp4', caption: '展示輸入跟手度：稍晚的輸入依然生效，並有額外的寬限窗口（Coyote 跳躍）' },
  { src: '/videos/path-to-power/ptp-showcase-5.mp4', caption: '氣充能／發射時的空中重力變化展示' }
]" />



<div class="project-text">

**你看到的是：** 一個*操作起來就是舒服*的角色——不是碰巧，而是設計出來的。

移動系統同時維護**三路輸入緩衝**（跳躍、衝刺、攻擊），杜絕那種毀掉手感的「差一幀」挫折。再搭配容錯物理（跳躍緩衝窗口、Coyote Time、可變重力），做出既俐落又能讀懂玩家意圖的操作。

**建立在**[**容錯移動框架**](/zh-Hant/projects/forgiving-mechanics)之上，並在此擴充了：
- **攻擊動量保留**（攻擊期間玩家動量平滑衰減到零，做出「出招要承擔」的分量感，又不至於失去操作性）
- **狀態優先順序系統**（攻擊後搖期間鎖住移動，但面向方向仍獨立可控，保留操作空間）
- **衝刺作為動作覆寫**（衝刺可取消任何動作，唯獨硬直除外，用動作經濟學把技術上限拉高）
- **氣充能／發射時的重力調節**（充能期間降低重力，做出獨特的漂浮感，把充能狀態與一般移動區隔開）


</div>





</ProjectPanel>


## 2. 戰鬥手感 {.outline-only}

<ProjectPanel icon="swords" eyebrow="戰鬥" title="多層次回饋">

<!-- COMBAT MEDIA CAROUSEL (ptp-combat-*) -->
<MediaCarousel data-hx-reveal id="ptp-combat-media" :slides="[
  { src: '/videos/path-to-power/ptp-showcase-1.mp4', caption: '五層打擊回饋總覽（注意特效爆發時機、音效同步、敵人擊退、閃色強度與命中停頓是同時觸發的）' },
  { src: '/videos/path-to-power/ptp-combat-1.mp4', caption: '基礎五段連段 + 慢動作' },
  { src: '/videos/path-to-power/ptp-combat-2.mp4', caption: '落地版本的五段連段 + 慢動作' },
  { src: '/videos/path-to-power/ptp-combat-3.mp4', caption: '基礎的氣（Ki）充能 + 慢動作' },
  { src: '/videos/path-to-power/ptp-combat-4.mp4', caption: '氣充能與衝刺接空中的展示 + 慢動作' },
  { src: '/videos/path-to-power/ptp-combat-5.mp4', caption: '龜派氣功展示（尚未完全完成）+ 慢動作' }
]" />
<div class="project-text">

**三種核心戰鬥輸入：** 五段近戰連段、氣彈、氣充能。

當玩家打中目標時：

1. **特效爆發**（粒子時機對齊動畫幀）
2. **打擊音效**（來自物件池的音源，音高隨機化避免重複感）
3. **鏡頭衝擊**（Cinemachine 震動，方向與強度依連段數變化）
4. **敵人視覺回饋**（閃色強度分級：輕擊是淡粉，重擊是亮紅）
5. **物理反應**（擊退方向與力度依打擊位置而定）
6. **命中停頓**（0.05–0.08 秒的時間凍結，做出打擊實感）
7. **UI 更新**（分數彈出、血條插值、螢幕邊緣閃光）

全部由單一的 `ApplyExternalHit()` 呼叫統籌，**徹底的模組化設計。**

而且每一層回饋的強度都會隨連段數遞增，不必顯示連段計數器，節奏感自然就出來了。





<ProjectPanel icon="zap" variant="mini" eyebrow="氣與體力系統" title="資源設計">

  <div class="mini-panel-body">

<!-- MOVEMENT MEDIA CAROUSEL (ptp-move-*) -->
<MediaCarousel data-hx-reveal id="ptp-re-media" :slides="[
  { src: '/videos/path-to-power/ptp-ki-1.mp4', caption: '展示消耗與回復能量的各種方式。' }
]" />

<div class="project-text">

**你看到的是：** 一套既能防止無腦連按、又獎勵事前規劃的資源經濟。

**氣充能：**
- 按住按鍵 → 氣場變大 → 粒子噴發 → 能量條上升
- 平滑的充能速率（每秒 30 點）＝ 從零充滿需要 3 秒
- 充能期間重力調節（0.3 倍）＝ 獨特的漂浮手感
- 聲光回饋隨充能強度遞增（漸強效果）

**能量消耗與回復：**
- 氣彈：消耗 20 點，冷卻 0.2 秒，使用後 3 秒才開始回復
- 龜派氣功：發射期間每秒消耗 15 點（浮動，不是固定值）
- 近戰命中：每次回復 5 點
- **聰明的延遲：** 使用後的 3 秒延遲能防止無限連發
- **快速取用：** 若充能夠久則立即重置冷卻（獎勵事前規劃）


<ProjectPanel icon="brain" variant="mini" title="心理層面">

  <div class="mini-panel-body">

  按住越久、蓄得越滿，本身就帶來回報感。把體力做成離散格數，比線性條更讓人覺得是「花掉」而不是「流失」。使用後的回復延遲會被理解成策略安排，而不是隨便設的冷卻時間。這些細節就是「隨便能玩」與「玩起來覺得公平」的分界。

  </div>
</ProjectPanel>

</div>







  </div>
</ProjectPanel>





</div>

</ProjectPanel>






## 3. UI 系統（UI Toolkit） {.outline-only}

<ProjectPanel icon="layout-dashboard" eyebrow="UI 系統" title="UI Toolkit">


<!-- UI MEDIA CAROUSEL (ptp-ui-*) -->
<MediaCarousel data-hx-reveal id="ptp-ui0-media" :slides="[
  { src: '/videos/path-to-power/ptp-hud-0.mp4', caption: '玩家 HUD 總覽。' }
]" />
<div class="project-text">

UI 與 HUD 使用 **Unity 的 UI Toolkit 系統**，完全以程式驅動，好處是：
- **快速迭代**（改完程式立刻看到結果）
- **與設計師協作**（數值驅動的 UI：條的顏色、動畫速度、位置都可調）
- **可重複使用**（例如 ColorBar、動畫與選單元件彼此解耦）

<ProjectPanel icon="gauge" variant="mini" title="遊戲內 HUD（常駐顯示）">

  <div class="mini-panel-body">
  <MediaCarousel data-hx-reveal id="ptp-hud-media" :slides="[
  { src: '/videos/path-to-power/ptp-hud-1.mp4', caption: '頭像與能量條（青→黃，帶插值動畫）' },
  { src: '/videos/path-to-power/ptp-hud-2.mp4', caption: '血條（綠→橙→紅漸層，帶插值動畫）' },
  { src: '/videos/path-to-power/ptp-hud-3.mp4', caption: '體力格（3 個離散的黃／灰方塊，心理上是「用掉幾格」而不是線性流失）' },
  { src: '/videos/path-to-power/ptp-hud-4.mp4', caption: '分數標籤（右上角，命中時彈跳並震動，並浮出 &quot;+Score&quot; 文字）' }
]" />


    
  

  </div>
</ProjectPanel>

<ProjectPanel icon="layout-dashboard" variant="mini" title="選單系統">

  <div class="mini-panel-body">
  <MediaCarousel data-hx-reveal id="ptp-ui-media" :slides="[
  { src: '/videos/path-to-power/ptp-ui-1.mp4', caption: '主選單（標題淡入、開始／設定／離開按鈕、UI 縮放可調）' },
  { src: '/videos/path-to-power/ptp-ui-2.mp4', caption: '暫停選單（覆蓋層、時間凍結、音效與背景音樂音量滑桿）' },
  { src: '/videos/path-to-power/ptp-ui-3.mp4', caption: '死亡畫面（全螢幕覆蓋、復活按鈕）' },
  { src: '/videos/path-to-power/ptp-ui-4.mp4', caption: '告示牌文字框（靠近觸發碰撞體時顯示，用來營造環境氛圍）' }
]" />

    
  

  </div>
</ProjectPanel>

</div>

</ProjectPanel>






---

## 技術{.outline-only}
# 技術細節 {.section-title-center data-hx-reveal="true"}


## 架構概覽 {.outline-only}

<ProjectPanel icon="layers" title="架構概覽 —— 模組化 Manager 模式">

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

**核心設計原則：** 打擊回饋只有一個真實來源。`ApplyExternalHit()` 統籌所有層級，避免不同步與回呼地獄。

**Manager 模式（單例）：**
- `VfxManager`：物件池（預先實體化、逾時後停用、循環重用）
- `SfxManager`：音源池（每個音效帶音高變化與音量縮放）
- `UIToolkitManager`：宣告式 UI 系統（程式驅動、參數化）
- `AnimationEventBridge`：把動畫事件接到玩法程式（幀級精準）

**好處：**
- ✅ 系統解耦（特效系統完全不知道音效系統的存在）
- ✅ 效能（池化避免執行期配置造成的卡頓）
- ✅ 好維護（改一個 Manager 不會連鎖影響其他）
- ✅ 可擴充（新增一層回饋不必動到既有程式）

**這為什麼重要：** 圖上可以清楚看到關注點分離。輸入分流到三個系統，所有回饋匯入同一個 Manager。這是專業的架構：好除錯、好擴充、好測試。

</div>

</ProjectPanel>

## 1. 移動 {.outline-only}

<ProjectPanel icon="footprints" title="系統 1：容錯移動">

<div class="project-text">

**跳躍緩衝與 Coyote Time：**
```csharp
// Player presses jump 0.15s BEFORE landing
if (jumpInputTime > Time.time - jumpBufferWindow && isGrounded)
    Jump();  // retroactively register input

// Player can jump 0.15s AFTER leaving ground
if (coyoteTimeCounter > 0f && jumpPerformed)
    Jump();  // free jump with no air usage
```

**為什麼有效：** 跳躍緩衝接住玩家落地前的輸入（補救提早的失誤）；Coyote Time 讓玩家在離開地面後還能跳（補救「我跳太晚了」的瞬間）。兩者並用，既寬容又跟手。

**可變重力（滯空效果）：**
```csharp
if (jumpHeld && velocity.y < hangTimeThreshold)
    rigidbody.gravityScale = normalGravity * 0.4f;  // hang
else if (velocity.y < 0)
    rigidbody.gravityScale = normalGravity * 5.5f;  // fall fast
```

**為什麼有效：** 到頂點時重力降到 0.4 倍（玩家短暫「浮住」＝ 有掌控感）；下墜時重力拉到 5.5 倍（落得快＝ 出招要承擔）。這符合玩家直覺：跳到頂端輕飄飄，之後快速落下。多數新手會用固定重力，而這裡是把手感直接工程化進物理裡。

**衝刺與戰鬥輸入緩衝：**
- 記錄最後一次的方向輸入（lastUpTime、lastLeftTime 等）
- 衝刺從緩衝中取出優先順序最高的方向
- 支撐「空中急轉向」這類高階操作
- 結果：玩家可以先排好衝刺方向，再按下衝刺鍵

**攻擊動量保留：**
```csharp
recordedMomentum = rigidbody.velocity;
// During attack animation (0.3s tween)
attackAnimationMomentum = Mathf.Lerp(recordedMomentum, 0, t / 0.3f);
// After attack
rigidbody.velocity = new Vector2(attackAnimationMomentum.x, rigidbody.velocity.y);
```

**為什麼有效：** 攻擊前先記錄玩家動量，攻擊過程中平滑抹去（有分量感，做出「出招要承擔」），結束後再恢復（保住流暢度）。這就是「角色出招時扎實站住」（好）、「角色原地僵住」（差）與「動量憑空消失」（突兀）三者的分界。

**要點：** 每個參數都有它存在的理由，沒有一個是隨手填的。這就是系統性思考。

</div>

</ProjectPanel>

## 2. 戰鬥 {.outline-only}

<ProjectPanel icon="swords" title="系統 2：戰鬥時序">

<div class="project-text">

**由動畫事件觸發傷害（而不是數幀）：**
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

**為什麼這樣做：** 美術用眼睛決定攻擊幀，程式設計師在那一幀掛上事件。播放時事件就在那一幀準時觸發；即使美術之後修改動畫，事件依然對得上。這種設計能因應後續修改。

**逐段傷害縮放（對設計師友善）：**
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

**為什麼重要：** 設計師把 `damage` 從 10 改成 15，遊戲熱重載，改動立刻可見。不必重新編譯、不必重新打包、不用等。四週的打磨週期就是靠這個撐起來的。

**命中停頓遞增（漸強效果）：**
- 前段（1–2 擊）：凍結 0.05 秒
- 中段（3–4 擊）：凍結 0.065 秒
- 收尾（第 5 擊）：凍結 0.08 秒
- 結果：不必顯示連段計數器，節奏感自然成立

**玩家感受到的是：** 每一下都比前一下更有分量。他們看不到「連段數」，但*感覺*得到凍結裡的節奏。這就是心理層面的遊戲設計。


</div>

</ProjectPanel>

## 3. 回饋同步 {.outline-only}

<ProjectPanel icon="waves" title="系統 3：回饋">

<div class="project-text">

**一次呼叫，五層以上回饋：**
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

**成果：** 所有系統同時觸發，不會不同步，也沒有回呼地獄。

**專業的做法是：** 只有一個入口，所有效果由它統籌。要加新的回饋（螢幕邊緣閃光、粒子變色），就擴充這個方法，而不是把回呼散得到處都是。這就是程式在規模變大後依然好維護的原因。

**不同步是怎麼發生的（差的寫法）：**
- 特效先觸發
- 音效另外觸發（有點延遲）
- 鏡頭震動又另外觸發（延遲不一樣）
- UI 在別的幀才更新
- 結果：回饋鬆散、不協調，「沒力道」

**這樣同步為什麼有效（好的寫法）：**
- 七個系統在同一幀觸發
- 共用同一個方向向量（擊退方向與鏡頭方向一致）
- 共用同一組強度資料（命中停頓與閃色的分級彼此對齊）
- 結果：回饋「有打擊感」、協調、夠力


</div>

</ProjectPanel>

## 4. UI 系統（宣告式） {.outline-only}

<ProjectPanel icon="layout-dashboard" title="系統 4：UI Toolkit">

<div class="project-text">

**範例：血條（純 C#）**
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

**為什麼用純 C# 而不是 UXML：**
- 不必在編輯器裡拖拉 ＝ 版本控制不會有合併衝突
- 執行模式下熱重載 ＝ 改動即時可見
- 宣告式 ＝ UI 結構在程式裡一目了然
- 可重複使用 ＝ 元件可組合，而不是一次性的畫面

**相較於舊版 Canvas 的優勢：**
- ✅ 現代做法（2024 年後的業界標準）
- ✅ 效能（內部批次處理優於 Canvas）
- ✅ 可擴充（大型 UI 系統的程式更乾淨）
- ✅ 團隊協作（基於程式而非編輯器）


</div>

</ProjectPanel>

---

## 其他{.outline-only}


# 補充說明 {.section-title-center data-hx-reveal="true"}
## 聰明的取捨 {.outline-only}

<ProjectPanel icon="scale" title="時程壓力下的取捨">

<div class="project-text">


在**四週時程內完成交付。**我的做法是：

### 先把地基打好

1. **移動（第 1 週）** ✓ —— 容錯、跟手，足以承載其他系統
2. **戰鬥（第 2 週）** ✓ —— 攻擊時序，數值驅動
3. **回饋（第 3 週）** ✓ —— 多層次統籌
4. **打磨（第 4 週）** ✓ —— 調校、平衡、迭代

**這個順序為什麼重要：** 移動是所有系統的地基。移動手感不好，再怎麼打磨戰鬥也救不回來。戰鬥建立在移動之上，回饋放大的是原本就好的部分，而打磨是精修，不是補地基。

---

### 聰明地調數值

- **能量回復延遲**（使用後 3 秒）：不必靠冷卻 UI 就能防止無腦連發
- **體力做成離散格數**（3 格）：與線性流失在心理上完全不同
- **逐段的連段逾時**：依情境形成節奏，而不是一個全域計時器
- **命中停頓遞增**（0.05–0.08 秒）：漸強效果 ＝ 感覺公平
- **擊退方向**：依情境判定，而不是單純「往攻擊者反方向推」

**每個參數各自在做什麼：**
- 回復延遲：鼓勵規劃（無法無限連招）
- 離散體力：感覺是「花掉」而非「流失」（心理效果）
- 逐段逾時：形成自然節奏（每一擊手感都不同）
- 命中停頓遞增：用凍結講出一段敘事（前段快、收尾重）
- 情境化擊退：物理感更真實（依打擊位置決定水平與垂直分量）

---
### 數值驅動

每個可調的數值都定義在結構裡：
- `ComboAttackData`：傷害、擊退、動量、逾時、命中停頓
- `EnergySystem`：回復速率、回復延遲、消耗、能量上限
- `MovementPhysics`：跳躍力、滯空重力、下墜重力、衝刺力

**成果：** 一個人幾小時內就能把遊戲調平衡（不必重寫程式），也隨時可以進入團隊協作。

**證據：** 四週的專案時程本身就證明了這套做法可行，而不是靠寫死的數值硬撐。

</div>

</ProjectPanel>




## 技術堆疊 {.outline-only}

<ProjectPanel icon="wrench" title="技術堆疊">

<div class="project-text">

- **引擎：** Unity 2023 LTS
- **語言：** C#
- **UI 系統：** UI Toolkit（程式驅動，不用 UXML）
- **物理：** Rigidbody2D 搭配自訂動量處理
- **動畫：** Mecanim 搭配事件驅動的同步
- **效能：** 物件池（特效／音效），執行期零配置
- **架構：** 單例 Manager 模式搭配統籌調度
- **輸入處理：** New Input System（現代、事件驅動）


</div>

</ProjectPanel>



## 專案範圍 {.outline-only}

<ProjectPanel icon="map" title="專案範圍">

<div class="project-text">

**個人開發**，歷時四週  
**範圍：** 動作平台遊戲的地基（移動 + 兩種技能的戰鬥 + 回饋 + UI）  
**狀態：** 可投入正式專案的基礎；功能可繼續擴充（新角色、新技能、新關卡）  
**程式品質：** 專業水準（乾淨、有註解、可交給團隊）

</div>

</ProjectPanel>



## 相關連結 {.outline-only}

<ProjectPanel icon="link" title="相關連結">

<div class="project-text">

- **GitHub：** <a href= https://github.com/RayZ-c/DragonBall2D-Platformer > 連結</a>
- **容錯移動框架：** [尚未開放]
- **下載遊玩：** <a href= https://rayzc.itch.io/path-to-power > Itch.io </a>

</div>

</ProjectPanel>

---
