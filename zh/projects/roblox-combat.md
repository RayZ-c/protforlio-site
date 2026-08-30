---
layout: doc
title: Roblox 战斗系统框架
description: 可复用的 5 段连击 + 格挡框架，已售予多位客户。包含击退、破防、重击与同步反馈。
---

<a href="../../zh/projects/" class="back-projects-button"> ❮❮ 所有项目 </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">状态 :</span>
      <span class="info-line-value"> 已上线，多客户使用中 </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">担任角色 :</span>
      <span class="info-line-value"> 框架开发（系统设计与 Lua） </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">平台 :</span>
      <span class="info-line-value"> Roblox Studio（可复用模块） </span>
    </p>
  </div>
</div>

# Roblox 战斗系统框架 {.page-title-center}
### 可复用的 5 段连击 + 格挡系统 {.page-title-center}


<MediaCarousel data-hx-reveal id="rcf-hero-media" :slides="[
  { src: '/videos/roblox-combat/rc-showcase-1.mp4', caption: '完整战斗系统：5 段连击、击退、格挡、破防与重击' }
]" />





## 概览 {.outline-only}

<ProjectPanel icon="target" title="概览">

<div class="project-text">

为多款 Roblox 游戏复用而设计、可投入正式项目的战斗框架：

- **5 段连击：** 连续攻击动画，每一段伤害递增
- **击退系统：** 连击过程中击退逐段增强，最后一击为重击退
- **格挡机制：** 完整格挡状态，具备减伤与破防阈值
- **破防反应：** 格挡被打破时触发硬直动画并重置相关数值
- **重击：** 单独输入的破防攻击，冷却更长，必定造成击退
- **打击反馈：** 攻击方与防守方的粒子与动画反应彼此同步

</div>
</ProjectPanel>



## 实现 {.outline-only}

<ProjectPanel icon="settings" title="技术实现">

<div class="project-text">

| 模块 | 说明 |
|---|---|
| **连击系统** | 5 段连续攻击，逐段调整伤害与击退，并设有连击中断计时 |
| **击退物理** | 带方向判定的击退（随连击段数递增，最后一击达到上限） |
| **格挡状态机** | 格挡中 → 受击 → 破防 → 硬直恢复 |
| **破防逻辑** | 累计伤害达到阈值即触发破防，超时后重置 |
| **重击系统** | 独立输入、动画更长，可自动破防 |
| **反馈系统** | 动画反应（踉跄、格挡反应）、粒子生成、伤害数字 |
| **模块化设计** | 数值驱动的平衡配置（伤害、击退、冷却皆可调） |

</div>
</ProjectPanel>


## 为什么可以复用 {.outline-only}

<ProjectPanel icon="recycle" title="复用性与成果">

<div class="project-text">

- **没有写死的数值** —— 伤害、击退、冷却与时序全部集中在配置表中
- **不绑定特定动画** —— 使用通用动画命名，可搭配任意角色骨骼
- **即插即用** —— 把模块放进项目、接上角色、配置参数即可
- **易于扩展** —— 新增攻击或调整格挡行为都不必改动核心逻辑
- **多客户复用** —— 同一套代码，各游戏使用各自的平衡配置

**成果：** 已交付给 3 位以上客户，并针对各自的游戏做了数值调校。框架覆盖了核心战斗流程，同时保持轻量与良好性能。客户反馈整合所需时间很短，且不必改代码就能调整机制。

</div>
</ProjectPanel>
