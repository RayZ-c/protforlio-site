---
title: 專案
class: page-projects
layout: home
---


<script setup>
import { ref, computed } from 'vue'

// zh-review: engine, language and platform tags stay in Latin script (Unity,
// C#, C++, Roblox, FPS, AI) because that is how they are written in Chinese
// game-dev writing AND because they double as filter keys. Genre and
// discipline tags are translated, which is the same mix a Taiwanese studio
// site would use.
const allProjects = [
  {
    id: 'dragon-ball-2d',
    title: '龍珠 2D 平台動作',
    summary: '以戰鬥為核心的 2D 平台遊戲，包含自製角色控制器、連段系統與特效。',
    link: '/protforlio-site/zh-Hant/projects/path-to-power',
    image: '/protforlio-site/videos/path-to-power/ptp-showcase-1V2.mp4',
    hoverVideo: '/protforlio-site/videos/path-to-power/ptp-showcase-1V2.mp4',
    tags: ['Unity', 'C#', '2D', '橫向捲軸', '動作'],
    date: '2025 年 9 月',
    context: '個人專案',
    featured: true
  },
  {
    id: 'ue5-fps',
    title: '第一人稱射擊框架',
    summary: '可投入正式專案的 FPS 框架，系統完全模組化，用於展現架構能力。',
    link: '/protforlio-site/zh-Hant/projects/ue5-fps',
    image: '/protforlio-site/videos/ue5-fps/fps-showcase-0.mp4',
    hoverVideo: '/protforlio-site/videos/ue5-fps/fps-showcase-0.mp4',
    tags: ['Unreal', 'C++', '3D', 'FPS', 'AI'],
    date: '2025 年 10 月',
    context: '學校專案',
    featured: true
  },
  {
    id: 'pixel-adventure-2d',
    title: '像素冒險',
    summary: '節奏明快的 2D 俯視角 RPG，挑戰兩場風格迥異的 Boss 戰，並收集寶石推進成長。',
    link: '/protforlio-site/zh-Hant/projects/pixel-adventure',
    image: '/protforlio-site/videos/PixelAdventure/pa-1.mp4',
    hoverVideo: '/protforlio-site/videos/PixelAdventure/pa-1.mp4',
    tags: ['Unity', 'C#', '2D', '俯視角', 'AI', '動作'],
    date: '2024 年 12 月',
    context: '學校專案',
    featured: false
  },
  {
    id: 'forgiving-mechanics',
    title: '容錯機制框架',
    summary: '可投入正式專案的橫向捲軸移動控制器，圍繞容錯機制的設計原則打造。',
    link: '/protforlio-site/zh-Hant/projects/forgiving-mechanics',
    image: '/protforlio-site/videos/forgiving-mechanics/fm-showcase-2.mp4',
    hoverVideo: '/protforlio-site/videos/forgiving-mechanics/fm-showcase-2.mp4',
    tags: ['Unity', 'C#', '2D', '橫向捲軸', '移動'],
    date: '2025 年 8 月',
    context: '可重複使用框架',
    featured: false
  },
  {
    id: 'elder-escape',
    title: '賽博猴子無盡跑酷',
    summary: '四天內以藍圖完成的無盡跑酷，主角是坐輪椅的老人，一路被賽博猴子追趕。',
    link: '/protforlio-site/zh-Hant/projects/elder-escape',
    image: '/protforlio-site/videos/elder-escape/ee-showcase-2.mp4',
    hoverVideo: '/protforlio-site/videos/elder-escape/ee-showcase-2.mp4',
    tags: ['Unreal', '藍圖', '3D', 'Game Jam'],
    date: '2024 年 9 月',
    context: '團隊專案',
    featured: false
  },
  {
    id: 'star-platinum-mod',
    title: '爆紅 Marvel Rivals 模組（Star Platinum）',
    summary: '角色與音效替換模組，全平台累積觀看與曝光超過 1500 萬次。',
    link: '/protforlio-site/zh-Hant/projects/star-platinum-mod',
    image: '/protforlio-site/videos/starplat-mod/sp-showcase-1.mp4',
    hoverVideo: '/protforlio-site/videos/starplat-mod/sp-showcase-1.mp4',
    tags: ['Unreal', '音效'],
    date: '2025 年 9 月',
    context: '個人專案',
    featured: false
  },
  {
    id: 'twin-sync',
    title: '雙角色分割畫面解謎',
    summary: '在 36 小時的 Game Jam 中實作雙角色同步操作與分割畫面解謎系統，交付可穩定遊玩的原型。',
    link: 'https://abdulqadir53mohamedali.itch.io/twin-sync',
    image: '',
    hoverVideo: '',
    tags: ['Unity', 'C#', '2D', '橫向捲軸', 'Game Jam'],
    date: '2026 年 2 月',
    context: '團隊專案',
    featured: false
  },
]

const otherProjects = [
  {
    id: 'roblox-luffy',
    title: 'Roblox RPG 招式框架',
    summary: '模組化 PvP 戰鬥框架，技能採用資料驅動，視覺表現完整並預留了營利介面。',
    link: '/protforlio-site/zh-Hant/projects/roblox-luffy',
    image: '/protforlio-site/videos/roblox-luffy/rl-showcase-1.mp4',
    hoverVideo: '/protforlio-site/videos/roblox-luffy/rl-showcase-1.mp4',
    tags: ['Roblox', 'Lua', '販售中'],
    date: '2023',
    context: '委託專案',
    featured: false
  },
  {
    id: 'roblox-combat',
    title: 'Roblox 戰鬥系統',
    summary: '可重複使用的 PvP 戰鬥框架，已售予多款客戶遊戲使用。',
    link: '/protforlio-site/zh-Hant/projects/roblox-combat',
    image: '/protforlio-site/videos/roblox-combat/rc-preview.mp4',
    hoverVideo: '/protforlio-site/videos/roblox-combat/rc-preview.mp4',
    tags: ['Roblox', 'Lua', '販售中'],
    date: '2022',
    context: '委託專案',
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
    <h1>專案</h1>
    <p class="projects-subtitle">
    瀏覽全部專案，可使用下方的搜尋與標籤進行篩選。
    </p>
  </div>
  <a href="/protforlio-site/zh-Hant/" class="back-home2-button"> ❮❮ 首頁 </a>
</div>

---

<div class="projects-toolbar">
  <button
    class="projects-toggle-filters"
    @click="showFilters = !showFilters"
  >
    {{ showFilters ? '收合篩選' : '展開篩選' }}
  </button>

  <span class="projects-count">
    顯示 {{ shownCount }} / {{ totalCount }} 個專案
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
    placeholder="搜尋標題、描述或標籤…"
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
        <span class="pill">{{ project.context || '專案' }}</span>
      </div>
      <span class="pill pill-accent" v-if="project.featured">精選</span>
    </div>
    <div class="project-body">
      <h3>{{ project.title }}</h3>
      <p>{{ project.summary }}</p>
      <TagRow :tags="project.tags" />
    </div>
  </a>
</div>



# 其他專案（販售中與已售出）

<div class="projects-subtitle other-projects-subtitle">
  
  為客戶開發的委託專案，聚焦玩法系統、可商業化的設計，以及打磨到位的玩家體驗。
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
        <span class="pill">{{ project.context || '專案' }}</span>
      </div>
      <span class="pill pill-accent" v-if="project.featured">精選</span>
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
