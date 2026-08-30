---
layout: doc
title: 龙珠 2D 平台动作
description: 一款以《龙珠》为灵感的快节奏 2D 动作平台游戏，四周内在 Unity 上独立完成，专注于容错移动机制、多层次战斗反馈，以及声明式的 C# UI 系统。
---

<a href="../../zh/projects/" class="back-projects-button"> ❮❮ 所有项目 </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">项目状态 :</span>
      <span class="info-line-value"> 进行中（核心系统已完成） | 4 周 </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">项目类型 :</span>
      <span class="info-line-value"> 个人项目 | Unity（C#）  </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">核心方向 :</span>
      <span class="info-line-value"> 移动与战斗手感 | UI 系统</span>
    </p>
  </div>

</div>

# 龙珠 2D 平台动作 {.page-title-center}
-------

<p class="project-text">
  一款取材自动画战斗风格的 <strong>2D 动作平台游戏</strong>，用来展示<strong>容错移动与战斗框架</strong>、<strong>多层次打击反馈的统筹</strong>，以及<strong>纯 C# 编写的 UI Toolkit HUD</strong>——全部由我在四周期限内独立完成。
</p>
<!-- HERO MEDIA CAROUSEL (ptp-hero-*) -->
    <MediaCarousel data-hx-reveal id="ptp-hero-media" :slides="[
  { src: '/videos/path-to-power/ptp-showcase-1.mp4', caption: '完整战斗系统概览。' },
  { src: '/videos/path-to-power/ptp-showcase-4.mp4', caption: '移动与冲刺演示。' },
  { src: '/videos/path-to-power/ptp-showcase-3.mp4', caption: '主菜单演示。' }
]" />

    



---

# 总览 {.section-title-center data-hx-reveal="true"}

## 项目概览 {.outline-only}

<ProjectPanel icon="target" title="给招聘方的快速摘要">

  <div class="project-text">
    <ul>
      <li>四周独立完成的动作平台游戏，建立在<a href="./forgiving-mechanics"><strong>可复用的移动框架</strong></a>之上</li>
      <li>跟手的移动搭配<strong>容错机制</strong>（跳跃缓冲、Coyote Time（跳跃宽限）、可变重力）</li>
      <li><strong>多层次战斗反馈</strong>（特效 + 音效 + 镜头 + 物理 + Hit Stop（命中停顿）+ UI 全部同步）</li>
      <li>纯 <strong>C# UI Toolkit HUD</strong>（不使用 UXML，声明式，对设计师友好）</li>
      <li>架构预留了扩充到多角色与 Boss 战的空间</li>
      <li>数值驱动的系统，支撑团队协作与快速迭代</li>
    </ul>
  </div>

</ProjectPanel>


## 核心设计理念 {.outline-only}

<ProjectPanel icon="lightbulb" title="核心设计理念">

<div class="project-text">

# 「地基先打对，打磨才有意义，然后快速迭代。」

这个项目想证明的是：
- ✅ **跟手**、**容错**的机制，操作起来就是舒服
- ✅ **多层次反馈的工程化**（特效 + 音效 + 物理 + UI + 动画全部同步）
- ✅ **声明式的系统设计**，让调整与团队协作都变快
- ✅ 在时间压力下**聪明地做取舍**（数值驱动，对设计师友好）
- ✅ **模块化架构**（战斗层叠在已验证过的移动框架之上）


</div>

</ProjectPanel>


## 技术亮点 {.outline-only}

<ProjectPanel icon="settings" title="技术亮点">

<div class="project-text">

  - ✅ **对象池（特效与音效）：** 支持每次播放的个别定制（颜色、缩放、音高变化、存活时间等）
  - ✅ **动画事件同步：** 让美术用眼睛决定攻击时机，而不是程序去猜第几帧
  - ✅ **状态优先级系统：** 支持动作取消，同时避免状态互相打架
  - ✅ **输入缓冲（三路并行）：** 跳跃、冲刺、攻击各有缓冲
  - ✅ **模块化架构：** 系统彼此解耦（特效／音效／UI／音频互不依赖）
  - ✅ **与设计师协作：** 数值驱动的调校支撑快速迭代（改平衡不必重新编译）


</div>

</ProjectPanel>



---
## 功能{.outline-only}

# 亮点功能 {.section-title-center data-hx-reveal="true"}

## 1. 移动框架 {.outline-only}

<ProjectPanel icon="footprints" eyebrow="移动" title="容错机制">

<!-- MOVEMENT MEDIA CAROUSEL (ptp-move-*) -->
<MediaCarousel data-hx-reveal id="ptp-move-media" :slides="[
  { src: '/videos/path-to-power/ptp-showcase-4.mp4', caption: '展示输入跟手度：稍晚的输入依然生效，并有额外的宽限窗口（Coyote 跳跃）' },
  { src: '/videos/path-to-power/ptp-showcase-5.mp4', caption: '气充能／发射时的空中重力变化演示' }
]" />



<div class="project-text">

**你看到的是：** 一个*操作起来就是舒服*的角色——不是碰巧，而是设计出来的。

移动系统同时维护**三路输入缓冲**（跳跃、冲刺、攻击），杜绝那种毁掉手感的「差一帧」挫败。再搭配容错物理（跳跃缓冲窗口、Coyote Time、可变重力），做出既俐落又能读懂玩家意图的操作。

**建立在**[**容错移动框架**](/zh/projects/forgiving-mechanics)之上，并在此扩充了：
- **攻击动量保留**（攻击期间玩家动量平滑衰减到零，做出「出招要承担」的分量感，又不至于失去操作性）
- **状态优先级系统**（攻击后摇期间锁住移动，但面向方向仍独立可控，保留操作空间）
- **冲刺作为动作覆盖**（冲刺可取消任何动作，唯独硬直除外，用动作经济学把技术上限拉高）
- **气充能／发射时的重力调节**（充能期间降低重力，做出独特的漂浮感，把充能状态与一般移动区隔开）


</div>





</ProjectPanel>


## 2. 战斗手感 {.outline-only}

<ProjectPanel icon="swords" eyebrow="战斗" title="多层次反馈">

<!-- COMBAT MEDIA CAROUSEL (ptp-combat-*) -->
<MediaCarousel data-hx-reveal id="ptp-combat-media" :slides="[
  { src: '/videos/path-to-power/ptp-showcase-1.mp4', caption: '五层打击反馈总览（注意特效爆发时机、音效同步、敌人击退、闪色强度与命中停顿是同时触发的）' },
  { src: '/videos/path-to-power/ptp-combat-1.mp4', caption: '基础五段连击 + 慢动作' },
  { src: '/videos/path-to-power/ptp-combat-2.mp4', caption: '落地版本的五段连击 + 慢动作' },
  { src: '/videos/path-to-power/ptp-combat-3.mp4', caption: '基础的气（Ki）充能 + 慢动作' },
  { src: '/videos/path-to-power/ptp-combat-4.mp4', caption: '气充能与冲刺接空中的演示 + 慢动作' },
  { src: '/videos/path-to-power/ptp-combat-5.mp4', caption: '龟派气功演示（尚未完全完成）+ 慢动作' }
]" />
<div class="project-text">

**三种核心战斗输入：** 五段近战连击、气弹、气充能。

当玩家打中目标时：

1. **特效爆发**（粒子时机对齐动画帧）
2. **打击音效**（来自对象池的音源，音高随机化避免重复感）
3. **镜头冲击**（Cinemachine 震动，方向与强度依连击段数变化）
4. **敌人视觉反馈**（闪色强度分级：轻击是淡粉，重击是亮红）
5. **物理反应**（击退方向与力度依打击位置而定）
6. **命中停顿**（0.05–0.08 秒的时间冻结，做出打击实感）
7. **UI 更新**（分数弹出、血条插值、屏幕边缘闪光）

全部由单一的 `ApplyExternalHit()` 调用统筹，**彻底的模块化设计。**

而且每一层反馈的强度都会随连击段数递增，不必显示连击计数器，节奏感自然就出来了。





<ProjectPanel icon="zap" variant="mini" eyebrow="气与体力系统" title="资源设计">

  <div class="mini-panel-body">

<!-- MOVEMENT MEDIA CAROUSEL (ptp-move-*) -->
<MediaCarousel data-hx-reveal id="ptp-re-media" :slides="[
  { src: '/videos/path-to-power/ptp-ki-1.mp4', caption: '展示消耗与回复能量的各种方式。' }
]" />

<div class="project-text">

**你看到的是：** 一套既能防止无脑连按、又奖励事前规划的资源经济。

**气充能：**
- 按住按键 → 气场变大 → 粒子喷发 → 能量条上升
- 平滑的充能速率（每秒 30 点）＝ 从零充满需要 3 秒
- 充能期间重力调节（0.3 倍）＝ 独特的漂浮手感
- 声光反馈随充能强度递增（渐强效果）

**能量消耗与回复：**
- 气弹：消耗 20 点，冷却 0.2 秒，使用后 3 秒才开始回复
- 龟派气功：发射期间每秒消耗 15 点（浮动，不是固定值）
- 近战命中：每次回复 5 点
- **聪明的延迟：** 使用后的 3 秒延迟能防止无限连发
- **快速取用：** 若充能够久则立即重置冷却（奖励事前规划）


<ProjectPanel icon="brain" variant="mini" title="心理层面">

  <div class="mini-panel-body">

  按住越久、蓄得越满，本身就带来回报感。把体力做成离散格数，比线性条更让人觉得是「花掉」而不是「流失」。使用后的回复延迟会被理解成策略安排，而不是随便设的冷却时间。这些细节就是「随便能玩」与「玩起来觉得公平」的分界。

  </div>
</ProjectPanel>

</div>







  </div>
</ProjectPanel>





</div>

</ProjectPanel>






## 3. UI 系统（UI Toolkit） {.outline-only}

<ProjectPanel icon="layout-dashboard" eyebrow="UI 系统" title="UI Toolkit">


<!-- UI MEDIA CAROUSEL (ptp-ui-*) -->
<MediaCarousel data-hx-reveal id="ptp-ui0-media" :slides="[
  { src: '/videos/path-to-power/ptp-hud-0.mp4', caption: '玩家 HUD 总览。' }
]" />
<div class="project-text">

UI 与 HUD 使用 **Unity 的 UI Toolkit 系统**，完全以代码驱动，好处是：
- **快速迭代**（改完代码立刻看到结果）
- **与设计师协作**（数值驱动的 UI：条的颜色、动画速度、位置都可调）
- **可复用**（例如 ColorBar、动画与菜单组件彼此解耦）

<ProjectPanel icon="gauge" variant="mini" title="游戏内 HUD（常驻显示）">

  <div class="mini-panel-body">
  <MediaCarousel data-hx-reveal id="ptp-hud-media" :slides="[
  { src: '/videos/path-to-power/ptp-hud-1.mp4', caption: '头像与能量条（青→黄，带插值动画）' },
  { src: '/videos/path-to-power/ptp-hud-2.mp4', caption: '血条（绿→橙→红渐变，带插值动画）' },
  { src: '/videos/path-to-power/ptp-hud-3.mp4', caption: '体力格（3 个离散的黄／灰方块，心理上是「用掉几格」而不是线性流失）' },
  { src: '/videos/path-to-power/ptp-hud-4.mp4', caption: '分数标签（右上角，命中时弹跳并震动，并浮出 &quot;+Score&quot; 文字）' }
]" />


    
  

  </div>
</ProjectPanel>

<ProjectPanel icon="layout-dashboard" variant="mini" title="菜单系统">

  <div class="mini-panel-body">
  <MediaCarousel data-hx-reveal id="ptp-ui-media" :slides="[
  { src: '/videos/path-to-power/ptp-ui-1.mp4', caption: '主菜单（标题淡入、开始／设置／退出按钮、UI 缩放可调）' },
  { src: '/videos/path-to-power/ptp-ui-2.mp4', caption: '暂停菜单（覆盖层、时间冻结、音效与背景音乐音量滑杆）' },
  { src: '/videos/path-to-power/ptp-ui-3.mp4', caption: '死亡画面（全屏覆盖、复活按钮）' },
  { src: '/videos/path-to-power/ptp-ui-4.mp4', caption: '告示牌文字框（靠近触发碰撞体时显示，用来营造环境氛围）' }
]" />

    
  

  </div>
</ProjectPanel>

</div>

</ProjectPanel>






---

## 技术{.outline-only}
# 技术细节 {.section-title-center data-hx-reveal="true"}


## 架构概览 {.outline-only}

<ProjectPanel icon="layers" title="架构概览 —— 模块化 Manager 模式">

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

**核心设计原则：** 打击反馈只有一个真实来源。`ApplyExternalHit()` 统筹所有层级，避免不同步与回调地狱。

**Manager 模式（单例）：**
- `VfxManager`：对象池（预先实例化、超时后停用、循环复用）
- `SfxManager`：音源池（每个音效带音高变化与音量缩放）
- `UIToolkitManager`：声明式 UI 系统（代码驱动、参数化）
- `AnimationEventBridge`：把动画事件接到玩法逻辑（帧级精准）

**好处：**
- ✅ 系统解耦（特效系统完全不知道音效系统的存在）
- ✅ 性能（池化避免运行时分配造成的卡顿）
- ✅ 可维护（改一个 Manager 不会连锁影响其他）
- ✅ 可扩展（新增一层反馈不必动到既有代码）

**这为什么重要：** 图上可以清楚看到关注点分离。输入分流到三个系统，所有反馈汇入同一个 Manager。这是专业的架构：好调试、好扩展、好测试。

</div>

</ProjectPanel>

## 1. 移动 {.outline-only}

<ProjectPanel icon="footprints" title="系统 1：容错移动">

<div class="project-text">

**跳跃缓冲与 Coyote Time：**
```csharp
// Player presses jump 0.15s BEFORE landing
if (jumpInputTime > Time.time - jumpBufferWindow && isGrounded)
    Jump();  // retroactively register input

// Player can jump 0.15s AFTER leaving ground
if (coyoteTimeCounter > 0f && jumpPerformed)
    Jump();  // free jump with no air usage
```

**为什么有效：** 跳跃缓冲接住玩家落地前的输入（补救提早的失误）；Coyote Time 让玩家在离开地面后还能跳（补救「我跳晚了」的瞬间）。两者并用，既宽容又跟手。

**可变重力（滞空效果）：**
```csharp
if (jumpHeld && velocity.y < hangTimeThreshold)
    rigidbody.gravityScale = normalGravity * 0.4f;  // hang
else if (velocity.y < 0)
    rigidbody.gravityScale = normalGravity * 5.5f;  // fall fast
```

**为什么有效：** 到顶点时重力降到 0.4 倍（玩家短暂「浮住」＝ 有掌控感）；下坠时重力拉到 5.5 倍（落得快＝ 出招要承担）。这符合玩家直觉：跳到顶端轻飘飘，之后快速落下。多数新手会用固定重力，而这里是把手感直接工程化进物理里。

**冲刺与战斗输入缓冲：**
- 记录最后一次的方向输入（lastUpTime、lastLeftTime 等）
- 冲刺从缓冲中取出优先级最高的方向
- 支撑「空中急转向」这类高阶操作
- 结果：玩家可以先排好冲刺方向，再按下冲刺键

**攻击动量保留：**
```csharp
recordedMomentum = rigidbody.velocity;
// During attack animation (0.3s tween)
attackAnimationMomentum = Mathf.Lerp(recordedMomentum, 0, t / 0.3f);
// After attack
rigidbody.velocity = new Vector2(attackAnimationMomentum.x, rigidbody.velocity.y);
```

**为什么有效：** 攻击前先记录玩家动量，攻击过程中平滑抹去（有分量感，做出「出招要承担」），结束后再恢复（保住流畅度）。这就是「角色出招时扎实站住」（好）、「角色原地僵住」（差）与「动量凭空消失」（突兀）三者的分界。

**要点：** 每个参数都有它存在的理由，没有一个是随手填的。这就是系统性思考。

</div>

</ProjectPanel>

## 2. 战斗 {.outline-only}

<ProjectPanel icon="swords" title="系统 2：战斗时序">

<div class="project-text">

**由动画事件触发伤害（而不是数帧）：**
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

**为什么这样做：** 美术用眼睛决定攻击帧，程序员在那一帧挂上事件。播放时事件就在那一帧准时触发；即使美术之后修改动画，事件依然对得上。这种设计能承受后续改动。

**逐段伤害缩放（对设计师友好）：**
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

**为什么重要：** 设计师把 `damage` 从 10 改成 15，游戏热重载，改动立刻可见。不必重新编译、不必重新打包、不用等。四周的打磨周期就是靠这个撑起来的。

**命中停顿递增（渐强效果）：**
- 前段（1–2 击）：冻结 0.05 秒
- 中段（3–4 击）：冻结 0.065 秒
- 收尾（第 5 击）：冻结 0.08 秒
- 结果：不必显示连击计数器，节奏感自然成立

**玩家感受到的是：** 每一下都比前一下更有分量。他们看不到「连击数」，但*感觉*得到冻结里的节奏。这就是心理层面的游戏设计。


</div>

</ProjectPanel>

## 3. 反馈同步 {.outline-only}

<ProjectPanel icon="waves" title="系统 3：反馈">

<div class="project-text">

**一次调用，五层以上反馈：**
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

**成果：** 所有系统同时触发，不会不同步，也没有回调地狱。

**专业的做法是：** 只有一个入口，所有效果由它统筹。要加新的反馈（屏幕边缘闪光、粒子变色），就扩充这个方法，而不是把回调散得到处都是。这就是代码在规模变大后依然好维护的原因。

**不同步是怎么发生的（差的写法）：**
- 特效先触发
- 音效另外触发（有点延迟）
- 镜头震动又另外触发（延迟不一样）
- UI 在别的帧才更新
- 结果：反馈松散、不协调，「没力道」

**这样同步为什么有效（好的写法）：**
- 七个系统在同一帧触发
- 共用同一个方向向量（击退方向与镜头方向一致）
- 共用同一组强度数据（命中停顿与闪色的分级彼此对齐）
- 结果：反馈「有打击感」、协调、够力


</div>

</ProjectPanel>

## 4. UI 系统（声明式） {.outline-only}

<ProjectPanel icon="layout-dashboard" title="系统 4：UI Toolkit">

<div class="project-text">

**范例：血条（纯 C#）**
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

**为什么用纯 C# 而不是 UXML：**
- 不必在编辑器里拖拽 ＝ 版本控制不会有合并冲突
- 运行模式下热重载 ＝ 改动即时可见
- 声明式 ＝ UI 结构在代码里一目了然
- 可复用 ＝ 组件可组合，而不是一次性的画面

**相较于旧版 Canvas 的优势：**
- ✅ 现代做法（2024 年后的业界标准）
- ✅ 性能（内部批处理优于 Canvas）
- ✅ 可扩展（大型 UI 系统的代码更干净）
- ✅ 团队协作（基于代码而非编辑器）


</div>

</ProjectPanel>

---

## 其他{.outline-only}


# 补充说明 {.section-title-center data-hx-reveal="true"}
## 聪明的取舍 {.outline-only}

<ProjectPanel icon="scale" title="期限压力下的取舍">

<div class="project-text">


在**四周期限内完成交付。**我的做法是：

### 先把地基打好

1. **移动（第 1 周）** ✓ —— 容错、跟手，足以承载其他系统
2. **战斗（第 2 周）** ✓ —— 攻击时序，数值驱动
3. **反馈（第 3 周）** ✓ —— 多层次统筹
4. **打磨（第 4 周）** ✓ —— 调校、平衡、迭代

**这个顺序为什么重要：** 移动是所有系统的地基。移动手感不好，再怎么打磨战斗也救不回来。战斗建立在移动之上，反馈放大的是原本就好的部分，而打磨是精修，不是补地基。

---

### 聪明地调数值

- **能量回复延迟**（使用后 3 秒）：不必靠冷却 UI 就能防止无脑连发
- **体力做成离散格数**（3 格）：与线性流失在心理上完全不同
- **逐段的连击超时**：依情境形成节奏，而不是一个全局计时器
- **命中停顿递增**（0.05–0.08 秒）：渐强效果 ＝ 感觉公平
- **击退方向**：依情境判定，而不是单纯「往攻击者反方向推」

**每个参数各自在做什么：**
- 回复延迟：鼓励规划（无法无限连招）
- 离散体力：感觉是「花掉」而非「流失」（心理效果）
- 逐段超时：形成自然节奏（每一击手感都不同）
- 命中停顿递增：用冻结讲出一段叙事（前段快、收尾重）
- 情境化击退：物理感更真实（依打击位置决定水平与垂直分量）

---
### 数值驱动

每个可调的数值都定义在结构里：
- `ComboAttackData`：伤害、击退、动量、超时、命中停顿
- `EnergySystem`：回复速率、回复延迟、消耗、能量上限
- `MovementPhysics`：跳跃力、滞空重力、下坠重力、冲刺力

**成果：** 一个人几小时内就能把游戏调平衡（不必重写代码），也随时可以进入团队协作。

**证据：** 四周的项目期限本身就证明了这套做法可行，而不是靠写死的数值硬撑。

</div>

</ProjectPanel>




## 技术栈 {.outline-only}

<ProjectPanel icon="wrench" title="技术栈">

<div class="project-text">

- **引擎：** Unity 2023 LTS
- **语言：** C#
- **UI 系统：** UI Toolkit（代码驱动，不用 UXML）
- **物理：** Rigidbody2D 搭配自订动量处理
- **动画：** Mecanim 搭配事件驱动的同步
- **性能：** 对象池（特效／音效），运行时零分配
- **架构：** 单例 Manager 模式搭配统筹调度
- **输入处理：** New Input System（现代、事件驱动）


</div>

</ProjectPanel>



## 项目范围 {.outline-only}

<ProjectPanel icon="map" title="项目范围">

<div class="project-text">

**个人开发**，历时四周  
**范围：** 动作平台游戏的地基（移动 + 两种技能的战斗 + 反馈 + UI）  
**状态：** 可投入正式项目的基础；功能可继续扩充（新角色、新技能、新关卡）  
**代码质量：** 专业水准（干净、有注释、可交给团队）

</div>

</ProjectPanel>



## 相关链接 {.outline-only}

<ProjectPanel icon="link" title="相关链接">

<div class="project-text">

- **GitHub：** <a href= https://github.com/RayZ-c/DragonBall2D-Platformer > 链接</a>
- **容错移动框架：** [暂未开放]
- **下载游玩：** <a href= https://rayzc.itch.io/path-to-power > Itch.io </a>

</div>

</ProjectPanel>

---
