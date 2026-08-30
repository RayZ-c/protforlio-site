---
layout: doc
title: Roblox 战斗招式委托开发
description: 为 Roblox 客户定制的 4 技能 + 变身系统。全部美术表现、动画、音效与脚本均由个人独立完成。
---

<a href="../../zh/projects/" class="back-projects-button"> ❮❮ 所有项目 </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">状态 :</span>
      <span class="info-line-value"> 已交付并上线 </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">担任角色 :</span>
      <span class="info-line-value"> 独立开发（动画、特效、音效、脚本） </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">平台 :</span>
      <span class="info-line-value"> Roblox Studio（Lua） </span>
    </p>
  </div>
</div>

# Roblox 战斗招式组 {.page-title-center}
### 客户委托：4 个技能 + 变身系统 {.page-title-center}


<MediaCarousel data-hx-reveal id="rl-hero-media" :slides="[
  { src: 'https://www.youtube.com/embed/79QGymAW9uE?si=bbwLB3-aUYcUDnBk', type: 'embed', caption: '完整招式演示：4 个技能与变身系统' }
]" />





## 概览 {.outline-only}

<ProjectPanel icon="target" title="概览">

<div class="project-text">

  依客户规格定制的战斗招式组：

  - **4 个差异化技能：** 各自拥有独立的输入方式、冷却、动画与粒子反馈
  - **变身／强化系统：** 视觉形态切换，并附带属性倍率变化
  - **动画：** 为全部技能与变身制作的 Roblox 骨骼动画
  - **视觉特效：** 粒子系统与技能时序同步
  - **音效设计：** 每个技能与变身触发都有专属音效
  - **脚本：** 纯 Lua 后端（输入处理、技能时序、冷却管理）

</div>
</ProjectPanel>



## 实现 {.outline-only}

<ProjectPanel icon="settings" title="技术实现">

<div class="project-text">

| 模块 | 说明 |
|---|---|
| **动画系统** | 6 组以上自制动画（技能 1–4、变身进入与退出） |
| **特效整合** | 用于技能反馈的粒子系统，以及变身光环 |
| **音效设计** | 技能起手音、命中音、变身主题音 |
| **技能脚本** | 输入检测、冷却计时、伤害判定框、客户端预测 |
| **变身逻辑** | 状态机负责属性缩放、动画过渡与视觉表现 |
| **打磨** | 粒子时序对齐动画、以音效强化反馈、连段的视觉提示 |

</div>
</ProjectPanel>


## 相关链接 {.outline-only}

<ProjectPanel icon="link" title="相关链接">

<div class="project-text">

- **官方页面：** <a href= https://www.roblox.com/games/9123465176/Luffy-fruit-test >试玩链接</a>
- **联系方式：** 本人（Discord：rayz.c）

</div>

</ProjectPanel>


---
