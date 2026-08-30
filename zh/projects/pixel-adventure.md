---
layout: doc
title: 像素冒险
description: 像素风俯视角动作游戏，包含两场风格迥异的 Boss 战，以及可存档的宝石收集成长系统
---

<a href="../../zh/projects/" class="back-projects-button"> ❮❮ 所有项目 </a>


<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">项目状态 :</span>
      <span class="info-line-value"> 进行中 | 8 周</span>
    </p>
    <p class="info-line">
      <span class="info-line-label">项目类型 :</span>
      <span class="info-line-value"> 个人项目 | Unity（C#）</span>
    </p>
  </div>
</div>

# 像素冒险 {.page-title-center}
-------


<p class="project-text">
  一款 <strong>Unity 2D 俯视角动作游戏</strong>，玩家需要击败风格各异的 Boss 并收集宝石来解锁最终房间。开发重点放在<strong>跟手的战斗</strong>、<strong>Boss 设计</strong>与<strong>流畅的手感</strong>。
</p>


  <div class="project-info-right">
    <MediaCarousel data-hx-reveal id="pa-media" :slides="[
  { src: '/images/PixelAdventure/pa-1.png', type: 'image', alt: 'Pixel Adventure 截图 1', caption: '收集最终宝石的演示。' },
  { src: '/videos/PixelAdventure/pa-2.mp4', caption: '节奏明快的机器人 Boss 战演示。' },
  { src: '/videos/PixelAdventure/pa-3.mp4', caption: '偏策略的死灵法师 Boss 战演示。' },
  { src: '/images/PixelAdventure/pa-4.png', type: 'image', alt: 'Pixel Adventure 截图 4', caption: '死灵法师 Boss 房间。' },
  { src: '/images/PixelAdventure/pa-5.png', type: 'image', alt: 'Pixel Adventure 截图 5', caption: '机器人 Boss 房间。' },
  { src: '/images/PixelAdventure/pa-6.png', type: 'image', alt: 'Pixel Adventure 截图 6', caption: '剧情中的宝石。' }
]" />
  </div>





---
# 总览 {.section-title-center data-hx-reveal="true"}


## 给招聘方的快速摘要 {.outline-only}


<ProjectPanel icon="target" title="给招聘方的快速摘要">

  <div class="project-text">
    <ul>
      <li>在可复用的敌人架构之上，设计并实现了<strong>两个机制完全不同的 Boss</strong></li>
      <li>做出<strong>完整的游戏循环</strong>：菜单 → 开场 → 探索 → Boss 战 → 成长 → 通关</li>
      <li>在 Unity 2D 中独立完成<strong>战斗、AI、UI、特效、音频与存档系统</strong></li>
      <li>重点打磨<strong>手感</strong>（冲刺、Hit Stop（命中停顿）、特效、音效）与<strong>清晰、易扩展的代码结构</strong></li>
    </ul>
  </div>

</ProjectPanel>


## 玩法概览 {.outline-only}
<ProjectPanel icon="gamepad-2" title="玩法概览">

  <p class="project-text">
    玩家追随一颗神秘宝石进入洞窟，必须击败两个截然不同的 Boss，收集宝石以推进流程。
  </p>

  <p class="project-text">
    核心循环结合了<strong>探索</strong>、<strong>Boss 战</strong>与<strong>资源管理型战斗</strong>。
  </p>

  <h3 class="project-text">演示视频：</h3>


  <div class="video-wrapper">
    <iframe
      src="https://www.youtube.com/embed/3lBQ5KZLOZc?si=8msajJs84y9lskF7"
      title="Pixel Adventure 实机演示"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>


  <h3 class="project-text">核心玩法：</h3>

  <div class="project-text">
    <ul>
      <li><strong>双攻击方式：</strong>近战挥剑（消耗体力）与火球远程（消耗魔力）</li>
      <li><strong>Boss 1 —— 快节奏机器人：</strong>在场地内瞬移并高频发射弹幕，逼迫玩家积极使用冲刺</li>
      <li><strong>Boss 2 —— 策略型死灵法师：</strong>发射三连射击、召唤骷髅法师，血量降至 50% 时分裂出两个暗影分身</li>
      <li><strong>成长：</strong>需集齐 2 颗宝石才能解锁最终房间；死亡后重生但不会清空已收集的宝石</li>
      <li><strong>打磨：</strong>命中停顿、击退反馈、粒子特效、开场演出与通关画面</li>
    </ul>
  </div>

</ProjectPanel>



---
# 亮点 {.section-title-center data-hx-reveal="true"}



## 架构与设计模式 {.outline-only}
<ProjectPanel icon="layers" title="架构与设计模式">

  <div class="project-text">
    <ul>
      <li><strong>敌人 AI 框架：</strong>以 <code>Enemy</code> 父类为基础的继承体系；<code>Boss1</code> 与 <code>Boss2</code> 各自覆写行为，实现专属的攻击模式</li>
      <li><strong>状态机：</strong>玩家与敌人的行为都由分层状态系统驱动，依输入进行状态切换</li>
      <li><strong>特效管理：</strong>集中式单例 <code>VFXManager</code> 统一负责特效的生成与回收</li>
      <li><strong>数据持久化：</strong><code>ScoreSystem</code> 搭配 <code>PlayerPrefs</code>，跨次游玩保存宝石进度</li>
    </ul>
  </div>

</ProjectPanel>



## 已实现的系统 {.outline-only}
<ProjectPanel icon="layers" title="已实现的系统">

  <div class="project-text">
    <ul>
      <li><strong>战斗：</strong>判定框检测、伤害计算、击退机制</li>
      <li><strong>移动：</strong>八方向俯视角移动，含冲刺、体力消耗与冷却管理</li>
      <li><strong>Boss AI：</strong>以协程控制技能时序、冷却处理与阶段转换（例如死灵法师的分身阶段）</li>
      <li><strong>UI：</strong>实时的生命、体力与魔力条；暂停菜单含继续、重来、操作说明、主菜单与退出</li>
      <li><strong>音频：</strong>集中式 <code>AudioManager</code> 负责音效播放</li>
    </ul>
  </div>

</ProjectPanel>
