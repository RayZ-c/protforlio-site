---
layout: doc
title: 赛博猴子无尽跑酷
description: 四天内以虚幻引擎 5 全蓝图完成的无尽跑酷，主角是坐轮椅的残障老人，一路被赛博猴子追赶。
---

<a href="../../zh/projects/" class="back-projects-button"> ❮❮ 所有项目 </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">项目状态 :</span>
      <span class="info-line-value"> 已完成并可游玩 | 4 天 Game Jam </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">引擎 :</span>
      <span class="info-line-value"> 虚幻引擎 5 | 100% 蓝图（无 C++） </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">团队 :</span>
      <span class="info-line-value"> 主程序兼视觉设计（4 人团队） </span>
    </p>
  </div>
</div>

# 赛博猴子无尽跑酷 {.page-title-center}
-------

<p class="project-text">
  节奏明快的无尽跑酷，主角是坐轮椅的残障老人，在三条跑道间闪避障碍，身后是穷追不舍的赛博猴子。凭借纯蓝图开发、清晰的分工与模块化架构，做到<strong>上线零 Bug</strong>。
</p>
<p class="project-text">
  这个项目体现的是<strong>快速原型能力</strong>、<strong>团队协作</strong>，以及在<strong>极端时间压力</strong>下依然交付得出可上线的代码。
</p>

<!-- HERO MEDIA CAROUSEL (fps-hero-*) -->
<MediaCarousel data-hx-reveal id="ee-hero-media" :slides="[
  { src: '/videos/elder-escape/ee-showcase-1.mp4', caption: '核心玩法循环演示。（分数达到 35 时触发强化道具！）' }
]" />



---

# 总览 {.section-title-center data-hx-reveal="true"}



## 项目概览 {.outline-only}
<ProjectPanel icon="target" title="给招聘方的快速摘要">


  <div class="project-text">

  **高压下的交付：**
  - ✅ 4 天内做出完整、可游玩的游戏
  - ✅ 上线时零严重 Bug
  - ✅ 4 人团队协作（分工明确，没有互相卡住）
  - ✅ 纯蓝图开发（迭代快，无需等待编译）

  **技术亮点：**
  - ✅ 三跑道移动系统，切换过渡平滑
  - ✅ 程序化地板生成（无限关卡，内存占用可控）
  - ✅ 难度渐进（速度持续爬升）
  - ✅ 最高分存档（跨次游玩序列化保存）
  - ✅ 完整的音效设计（所有动作皆有音效，并有环境压迫音）

  </div>

</ProjectPanel>


## 团队分工 {.outline-only}
<ProjectPanel icon="users" title="团队分工">


  <div class="project-text">


  **4 人团队的分工：**
  - **主程序（我）：** 玩法系统、玩家控制器、GameMode、Bug 修复
  - **设计（我）：** 数值调校、障碍摆放策略、视觉打磨
  - **3D 建模：** 角色、障碍物、场景模型
  - **2D 美术：** UI 设计、动画


  </div>

</ProjectPanel>

---



## 功能{.outline-only}

# 核心系统 {.section-title-center data-hx-reveal="true"}

## 1. 玩家移动与输入 {.outline-only}

<ProjectPanel icon="columns-3" title="跑道系统与操作">

<div class="project-text">

**输入架构：**
- **A / D：** 左右切换跑道（共 3 条，索引限制在 0–2）
- **W / 空格：** 跳过障碍
- **S：** 强制落地（取消滞空）

**跑道切换：**
- 基于 Lerp 的平滑移动（而非瞬间吸附）
- 以 `CurrentLaneIndex` 与 `TargetLaneIndex` 追踪状态
- 每条跑道对应一组 Y 轴坐标数组

**为什么这样做有效：** 操作跟手、可预期，并且有即时的声音与画面反馈。接入 Enhanced Input System 意味着输入处理一开始就是现代做法。

</div>

</ProjectPanel>

## 2. 难度递进 {.outline-only}

<ProjectPanel icon="trending-up" title="渐进式难度曲线">

<div class="project-text">

**速度爬升：**
- 基础速度 850 UU/s → 上限 3200 UU/s
- 每个间隔乘以 1.02 倍（可配置）
- 直接作用于 `CharacterMovement.MaxWalkSpeed`

**这样设计的理由：**
- 不引入额外复杂度就能得到自然的难度曲线
- 反应窗口自然收窄，不需要额外的难度选项
- 张力会自己一路堆上去

**成果：** 玩家会自然地从游刃有余走到手忙脚乱，做出街机式的紧张感。

</div>

</ProjectPanel>

## 3. 程序化关卡生成 {.outline-only}

<ProjectPanel icon="infinity" title="无限关卡架构">

<div class="project-text">

**运作方式：**
- `BP_Floor` 地板块生成各跑道对应的刷新点
- 每个刷新点随机挑选障碍（数组洗牌）
- 3 种障碍类型（墙、路障、陶罐），以 Switch on Int 分支
- 以 Child Actor Component 生成

**内存效率：**
- 场上地板块数量固定（超出上限即销毁最旧的一块）
- 障碍物存活时间到期后自动销毁
- 长时间游玩不会出现性能衰减

**可扩展性：**
- 新增障碍只需加一个模型子对象，不必改逻辑
- 数据驱动的生成（每条跑道的摆放可配置）
- 设计师不必找程序员就能调平衡

</div>

</ProjectPanel>

## 4. 计分系统 {.outline-only}

<ProjectPanel icon="trophy" title="计分与存档">

<div class="project-text">

**运行时计分：**
- 分数累加公式：`(DeltaTime * PointsMulti)`
- 分数倍率与速度挂钩（鼓励玩家冒险）
- 到达分数节点时播放提示音

**最高分存档：**
- 使用 SaveGame API（`Runner_SaveGame`）
- 基于存档槽的序列化（`"HighScoreValue"`）
- 开局自动读取，死亡时比对，破纪录才写入

**两套 UI Widget：**
1. **GamePlay_UI** —— 实时分数显示（右上角）
2. **GameOver_UI** —— 最终分数与「重来 / 退出」按钮

</div>

</ProjectPanel>

## 5. 音效与视觉设计 {.outline-only}

<ProjectPanel icon="volume-2" title="音效与追逐者 AI">

<div class="project-text">

**音效系统：**
- 跳跃、冲刺、死亡（快速／缓慢两种）、猴子叫声、背景音乐
- 在动作逻辑中直接嵌入 `Play Sound 2D` 节点
- 所有输入都有即时的声音反馈

**追逐的猴子（BP_Monkey）：**
- 只是视觉上的威胁，不参与玩法判定
- 通过 `VInterpTo` 跟随玩家位置
- 强化叙事，但不影响游戏平衡
- 用很低的机制复杂度换来性格与压迫感

</div>

</ProjectPanel>

---
## 技术{.outline-only}

# 技术架构 {.section-title-center data-hx-reveal="true"}


## 蓝图设计模式 {.outline-only}
<ProjectPanel icon="puzzle" title="蓝图设计模式">

<div class="project-text">

**采用的设计模式：**

1. **数据驱动生成** —— 刷新点可配置、障碍随机挑选，没有写死的数值
2. **事件驱动通信** —— 死亡触发事件派发，分数通过 getter 更新，模块之间低耦合
3. **平滑过渡** —— 基于 Lerp 的移动、基于速度的跳跃、渐进的速度提升
4. **内存池化** —— 固定地板块数量、障碍设有存活时间，尽量少生成 Actor

**4 天 Jam 里选蓝图而不是 C++ 的理由：**
- ✅ 不用等编译，迭代更快
- ✅ 可视化调试，问题更好定位
- ✅ 非编程背景的组员也看得懂流程
- ✅ 配合模块化架构，零 Bug 交付是做得到的

**协作方式：**
- 每日站会（同步进度与卡点）
- 共享设计文档（蓝图索引与配置）
- 每个系统都有明确负责人（避免同时改同一处）
- 每周试玩（周五收集反馈）

</div>

</ProjectPanel>

## 蓝图一览 {.outline-only}

<ProjectPanel icon="workflow" title="核心蓝图拆解">

<div class="project-text">

| 蓝图 | 用途 |
|-----------|---------|
| **BP_RunnerCharacter** | 玩家控制器（输入、跑道、死亡） |
| **BP_Obstacles**（墙／路障／陶罐） | 各种障碍变体，含碰撞与存活时间 |
| **BP_Floor** | 关卡地板生成器（刷新点、随机化） |
| **BP_Monkey** | 追逐的敌人（跟随、动画、音效） |
| **BP_RunnerGameMode** | 游戏管理（分数、检查点、难度） |
| **GamePlay_UI** | 游戏内 HUD（分数显示、实时更新） |
| **GameOver_UI** | 结算画面（最终分数、重来／退出、存档逻辑） |
| **Runner_SaveGame** | 最高分持久化层 |
| **IMC_RunnerDefault** | 输入映射（A/D/W/S） |

**全部位于 `/Content/Runner/Blueprints/` —— 没有任何 C++ 源文件。**

</div>

</ProjectPanel>

---
## 其他{.outline-only}

# 补充说明 {.section-title-center data-hx-reveal="true"}

## 设计决策 {.outline-only}
<ProjectPanel icon="lightbulb" title="为什么这样设计？">

<div class="project-text">

**为什么是 3 条跑道？**
- 输入简单（A/D/W/S 就覆盖了全部操作）
- 画面清楚（高速下依然读得懂）
- 平衡（不至于手忙脚乱，也不会太单调）

**为什么速度持续提升？**
- 不引入复杂度就得到自然的难度曲线
- 逼玩家全程专注（没办法放空）
- 死亡随时可能发生（技术上限拉得很高）

**为什么障碍随机？**
- 防止背板 → 老玩家也得一直投入
- 难度公平（无法靠固定套路取巧）
- 提供近乎无限的重玩价值

**为什么一击即死？**
- 单局够短（尊重玩家的时间）
- 让分数真正有意义（不只是「撑了多久」）
- 维持张力（每个障碍都是生死关头）


</div>

</ProjectPanel>


## 技术栈 {.outline-only}

<ProjectPanel icon="wrench" title="工具与技术">

<div class="project-text">

- **引擎：** 虚幻引擎 5.0 以上
- **语言：** 100% 蓝图（无 C++）
- **输入系统：** Enhanced Input System（现代、可配置）
- **角色移动：** 内建 Character Movement 组件
- **存档：** SaveGame API（基于存档槽）
- **UI：** Widget UI 系统
- **音频：** Sound Wave 资源搭配 2D 播放
- **渲染：** 骨骼网格搭配 Niagara 粒子
- **架构：** 基于组件，组合优先于继承

</div>

</ProjectPanel>



## 相关链接 {.outline-only}

<ProjectPanel icon="link" title="相关链接">

<div class="project-text">

- **GitHub：** [暂未开放]
- **试玩链接：** <a href='https://rayzc.itch.io/elder-escape' >Elder Escape</a>
- **文档：** 已包含在代码库中

</div>

</ProjectPanel>

---
