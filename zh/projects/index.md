---
title: 项目
class: page-projects
layout: home
---


<script setup>
import { ref, computed } from 'vue'

// zh-review: engine, language and platform tags stay in Latin script (Unity,
// C#, C++, Roblox, FPS, AI) because that is how they are written in Chinese
// game-dev writing AND because they double as filter keys. Genre and
// discipline tags are translated, which is the same mix a Chinese studio site
// would use.
const allProjects = [
  {
    id: 'dragon-ball-2d',
    title: '龙珠 2D 平台动作',
    summary: '以战斗为核心的 2D 平台跳跃游戏，包含自制角色控制器、连招系统与特效。',
    link: '/protforlio-site/zh/projects/path-to-power',
    image: '/protforlio-site/videos/path-to-power/ptp-showcase-1V2.mp4',
    hoverVideo: '/protforlio-site/videos/path-to-power/ptp-showcase-1V2.mp4',
    tags: ['Unity', 'C#', '2D', '横版', '动作'],
    date: '2025 年 9 月',
    context: '个人项目',
    featured: true
  },
  {
    id: 'ue5-fps',
    title: '第一人称射击框架',
    summary: '可投入正式项目的 FPS 框架，系统完全模块化，用于展示架构能力。',
    link: '/protforlio-site/zh/projects/ue5-fps',
    image: '/protforlio-site/videos/ue5-fps/fps-showcase-0.mp4',
    hoverVideo: '/protforlio-site/videos/ue5-fps/fps-showcase-0.mp4',
    tags: ['Unreal', 'C++', '3D', 'FPS', 'AI'],
    date: '2025 年 10 月',
    context: '学业项目',
    featured: true
  },
  {
    id: 'pixel-adventure-2d',
    title: '像素冒险',
    summary: '节奏明快的 2D 俯视角 RPG，挑战两场风格迥异的 Boss 战，并收集宝石推进成长。',
    link: '/protforlio-site/zh/projects/pixel-adventure',
    image: '/protforlio-site/videos/PixelAdventure/pa-1.mp4',
    hoverVideo: '/protforlio-site/videos/PixelAdventure/pa-1.mp4',
    tags: ['Unity', 'C#', '2D', '俯视角', 'AI', '动作'],
    date: '2024 年 12 月',
    context: '学业项目',
    featured: false
  },
  {
    id: 'forgiving-mechanics',
    title: '容错机制框架',
    summary: '可投入正式项目的横版移动控制器，围绕容错机制的设计原则打造。',
    link: '/protforlio-site/zh/projects/forgiving-mechanics',
    image: '/protforlio-site/videos/forgiving-mechanics/fm-showcase-2.mp4',
    hoverVideo: '/protforlio-site/videos/forgiving-mechanics/fm-showcase-2.mp4',
    tags: ['Unity', 'C#', '2D', '横版', '移动'],
    date: '2025 年 8 月',
    context: '可复用框架',
    featured: false
  },
  {
    id: 'elder-escape',
    title: '赛博猴子无尽跑酷',
    summary: '四天内用蓝图完成的无尽跑酷，主角是坐轮椅的老人，被赛博猴子一路追赶。',
    link: '/protforlio-site/zh/projects/elder-escape',
    image: '/protforlio-site/videos/elder-escape/ee-showcase-2.mp4',
    hoverVideo: '/protforlio-site/videos/elder-escape/ee-showcase-2.mp4',
    tags: ['Unreal', '蓝图', '3D', 'Game Jam'],
    date: '2024 年 9 月',
    context: '团队项目',
    featured: false
  },
  {
    id: 'star-platinum-mod',
    title: '爆红 Marvel Rivals 模组（Star Platinum）',
    summary: '角色与音效替换模组，全平台累计观看与曝光超过 1500 万次。',
    link: '/protforlio-site/zh/projects/star-platinum-mod',
    image: '/protforlio-site/videos/starplat-mod/sp-showcase-1.mp4',
    hoverVideo: '/protforlio-site/videos/starplat-mod/sp-showcase-1.mp4',
    tags: ['Unreal', '音效'],
    date: '2025 年 9 月',
    context: '个人项目',
    featured: false
  },
  {
    id: 'twin-sync',
    title: '双角色分屏解谜',
    summary: '在 36 小时的 Game Jam 中实现双角色同步操作与分屏解谜系统，交付了可稳定游玩的原型。',
    link: 'https://abdulqadir53mohamedali.itch.io/twin-sync',
    image: '',
    hoverVideo: '',
    tags: ['Unity', 'C#', '2D', '横版', 'Game Jam'],
    date: '2026 年 2 月',
    context: '团队项目',
    featured: false
  },
]

const otherProjects = [
  {
    id: 'roblox-luffy',
    title: 'Roblox RPG 招式框架',
    summary: '模块化 PvP 战斗框架，技能采用数据驱动，视觉表现完整并预留了变现接口。',
    link: '/protforlio-site/zh/projects/roblox-luffy',
    image: '/protforlio-site/videos/roblox-luffy/rl-showcase-1.mp4',
    hoverVideo: '/protforlio-site/videos/roblox-luffy/rl-showcase-1.mp4',
    tags: ['Roblox', 'Lua', '出售中'],
    date: '2023',
    context: '委托项目',
    featured: false
  },
  {
    id: 'roblox-combat',
    title: 'Roblox 战斗系统',
    summary: '可复用的 PvP 战斗框架，已售予多款客户游戏使用。',
    link: '/protforlio-site/zh/projects/roblox-combat',
    image: '/protforlio-site/videos/roblox-combat/rc-preview.mp4',
    hoverVideo: '/protforlio-site/videos/roblox-combat/rc-preview.mp4',
    tags: ['Roblox', 'Lua', '出售中'],
    date: '2022',
    context: '委托项目',
    featured: false
  }
]



const search = ref('')
const ALL_TAG = '全部'
const activeTag = ref(ALL_TAG)
const showFilters = ref(false)

const allTags = computed(() => {
  const set = new Set()
  allProjects.forEach(p => p.tags.forEach(t => set.add(t)))
  return [ALL_TAG, ...Array.from(set)]
})

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase()
  const tag = activeTag.value
  return allProjects.filter(p => {
    const matchesTag = tag === ALL_TAG || p.tags.includes(tag)
    const text = (p.title + ' ' + p.summary + ' ' + p.tags.join(' ')).toLowerCase()
    const matchesSearch = !q || text.includes(q)
    return matchesTag && matchesSearch
  })
})

const totalCount = computed(() => allProjects.length)
const shownCount = computed(() => filtered.value.length)

const hoveredId = ref(null)

/** Poster frames mirror the video tree: /videos/x/y.mp4 -> /posters/x/y.jpg */
const posterFor = (src) => {
  if (!src || !src.endsWith('.mp4') || !src.includes('/videos/')) return undefined
  return src.replace('/videos/', '/posters/').replace(/\.mp4$/, '.jpg')
}

/**
 * Restart from the top on hover so the visitor always sees the clip from the
 * beginning rather than joining it mid-loop.
 */
const replay = (event) => {
  const v = event.currentTarget
  if (!v) return
  try { v.currentTime = 0 } catch {}
  const p = v.play()
  if (p && typeof p.catch === 'function') p.catch(() => {})
}

</script>



<a id="top"></a>

<div class="projects-page-heading">
  <div class="projects-page-heading-copy">
    <h1>项目</h1>
    <p class="projects-subtitle">
    浏览全部项目，可使用下方的搜索与标签进行筛选。
    </p>
  </div>
  <a href="/protforlio-site/zh/" class="back-home2-button"> ❮❮ 首页 </a>
</div>

---

<div class="projects-toolbar">
  <button
    class="projects-toggle-filters"
    @click="showFilters = !showFilters"
  >
    {{ showFilters ? '收起筛选' : '展开筛选' }}
  </button>

  <span class="projects-count">
    显示 {{ shownCount }} / {{ totalCount }} 个项目
  </span>
</div>


<div
  class="projects-filter-bar"
  v-show="showFilters"
>
  <input
    v-model="search"
    type="text"
    class="projects-search"
    placeholder="搜索标题、描述或标签…"
  />
  <div class="projects-tag-list">
    <button
      v-for="tag in allTags"
      :key="tag"
      class="projects-tag-button"
      :class="{ active: activeTag === tag }"
      @click="activeTag = tag"
    >
      {{ tag }}
    </button>
  </div>
</div>

<div class="projects-grid">
  <a
    v-for="project in filtered"
    :key="project.id"
    class="project-card project-card-small"
    :href="project.link"
    @mouseenter="hoveredId = project.id"
    @mouseleave="hoveredId = null"
  >
    <span class="hx-card-spot" aria-hidden="true"></span>
    <div class="project-media">
      <!-- ONE element, never swapped. image and hoverVideo are the same file,
           so the old v-if/v-else pair tore down a playing video and built an
           identical one that started from nothing at preload="none" — which is
           why the card went black on hover. Now hovering just restarts it. -->
      <video
        :src="project.hoverVideo || project.image"
        :poster="posterFor(project.hoverVideo || project.image)"
        muted
        loop
        playsinline
        preload="none"
        data-lazy-video
        @mouseenter="replay"
      ></video>
      <div class="project-pill-row">
        <span class="pill">{{ project.date || '待定' }}</span>
      </div>
      <div class="project-pill-row2">
        <span class="pill">{{ project.context || '项目' }}</span>
      </div>
      <span class="pill pill-accent" v-if="project.featured">精选</span>
    </div>
    <div class="project-body">
      <h3>{{ project.title }}</h3>
      <p>{{ project.summary }}</p>
      <TagRow :tags="project.tags" />
    </div>
  </a>
</div>



# 其他项目（在售与已售）

<div class="projects-subtitle other-projects-subtitle">
  
  为客户开发的委托项目，聚焦玩法系统、可商业化的设计，以及打磨到位的玩家体验。
</div>

<div class="projects-grid">
  <a
    v-for="project in otherProjects"
    :key="project.id"
    class="project-card project-card-small"
    :href="project.link"
    @mouseenter="hoveredId = project.id"
    @mouseleave="hoveredId = null"
  >
    <span class="hx-card-spot" aria-hidden="true"></span>
    <div class="project-media">
      <video
        :src="project.hoverVideo || project.image"
        :poster="posterFor(project.hoverVideo || project.image)"
        muted
        loop
        playsinline
        preload="none"
        data-lazy-video
        @mouseenter="replay"
      ></video>
      <div class="project-pill-row">
        <span class="pill">{{ project.date || '待定' }}</span>
      </div>
      <div class="project-pill-row2">
        <span class="pill">{{ project.context || '项目' }}</span>
      </div>
      <span class="pill pill-accent" v-if="project.featured">精选</span>
    </div>
    <div class="project-body">
      <h3>{{ project.title }}</h3>
      <p>{{ project.summary }}</p>
      <TagRow :tags="project.tags" />
    </div>
  </a>
</div>



<ScrollControls />

<a id="bottom"></a>
