---
title: Projects
class: page-projects
layout: home
---


<script setup>
import { ref, computed } from 'vue'

const allProjects = [
  {
    id: 'dragon-ball-2d',
    title: 'Dragon Ball 2D Platformer',
    summary: 'Combat-focused 2D platformer with custom controller, combo system, and VFX.',
    link: '/protforlio-site/projects/path-to-power',
    image: '/protforlio-site/videos/path-to-power/ptp-showcase-1V2.mp4',
    hoverVideo: '/protforlio-site/videos/path-to-power/ptp-showcase-1V2.mp4',
    tags: ['Unity', 'C#', '2D', 'Side-Scroller', 'Action'],
    date: 'September 2025',
    context: 'Personal',
    featured: true
  },
  {
    id: 'ue5-fps',
    title: '1st Person Shooter Framework',
    summary: 'Production-ready FPS framework with fully modular systems to showcase architecture expertise.',
    link: '/protforlio-site/projects/ue5-fps',
    image: '/protforlio-site/videos/ue5-fps/fps-showcase-0.mp4',
    hoverVideo: '/protforlio-site/videos/ue5-fps/fps-showcase-0.mp4',
    tags: ['Unreal', 'C++', '3D', 'FPS', 'AI'],
    date: 'October 2025',
    context: 'Academic',
    featured: true
  },
  {
    id: 'pixel-adventure-2d',
    title: 'Pixel Adventure',
    summary: 'Fast-paced 2D top‑down RPG where you fight two distinct bosses and collect gems for progression.',
    link: '/protforlio-site/projects/pixel-adventure',
    image: '/protforlio-site/videos/PixelAdventure/pa-1.mp4',
    hoverVideo: '/protforlio-site/videos/PixelAdventure/pa-1.mp4',
    tags: ['Unity', 'C#', '2D', 'Top-Down', 'AI', 'Action'],
    date: 'December 2024',
    context: 'Academic',
    featured: false
  },
  {
    id: 'forgiving-mechanics',
    title: 'Forgiving Mechanics Framework',
    summary: 'Production-ready movement controller for side scroller games, built on forgiving mechanics principles.',
    link: '/protforlio-site/projects/forgiving-mechanics',
    image: '/protforlio-site/videos/forgiving-mechanics/fm-showcase-2.mp4',
    hoverVideo: '/protforlio-site/videos/forgiving-mechanics/fm-showcase-2.mp4',
    tags: ['Unity', 'C#', '2D', 'Side-Scroller', 'Movement'],
    date: 'August 2025',
    context: 'Reusable Framework',
    featured: false
  },
  {
    id: 'elder-escape',
    title: 'Cyborg Monkey Endless Runner',
    summary: 'A 4‑day endless runner built in Blueprints, featuring a disabled old man in a wheelchair chased by cyborg monkeys.',
    link: '/protforlio-site/projects/elder-escape',
    image: '/protforlio-site/videos/elder-escape/ee-showcase-2.mp4',
    hoverVideo: '/protforlio-site/videos/elder-escape/ee-showcase-2.mp4',
    tags: ['Unreal', 'Blueprints', '3D', 'Game Jam'],
    date: 'September 2024',
    context: 'Team Project',
    featured: false
  },
  {
    id: 'star-platinum-mod',
    title: 'Viral Marvel Rivals Mod (Star Platinum)',
    summary: 'A Character & Sfx replacer mod with 15+ million views and impressions across platforms.',
    link: '/protforlio-site/projects/star-platinum-mod',
    image: '/protforlio-site/videos/starplat-mod/sp-showcase-1.mp4',
    hoverVideo: '/protforlio-site/videos/starplat-mod/sp-showcase-1.mp4',
    tags: ['Unreal', "SFX"],
    date: 'September 2025',
    context: 'Personal',
    featured: false
  }
]

const otherProjects = [
  {
    id: 'roblox-luffy',
    title: 'Roblox RPG Movesets',
    summary: 'Modular PvP combat framework with data-driven abilities, polished visuals and monetisation hooks.',
    link: '/protforlio-site/projects/roblox-luffy',
    image: '/protforlio-site/videos/roblox-luffy/rl-showcase-1.mp4',
    hoverVideo: '/protforlio-site/videos/roblox-luffy/rl-showcase-1.mp4',
    tags: ['Roblox', 'Lua', 'For Sale'],
    date: '2023',
    context: 'Commission',
    featured: false
  },
  {
    id: 'roblox-combat',
    title: 'Roblox Combat System',
    summary: 'Reusable PvP combat framework sold for multiple client games.',
    link: '/protforlio-site/projects/roblox-combat',
    image: '/protforlio-site/videos/roblox-combat/rc-preview.mp4',
    hoverVideo: '/protforlio-site/videos/roblox-combat/rc-preview.mp4',
    tags: ['Roblox', 'Lua', 'For Sale'],
    date: '2022',
    context: 'Commission',
    featured: false
  }
]



const search = ref('')
const activeTag = ref('All')
const showFilters = ref(false)          // NEW

const allTags = computed(() => {
  const set = new Set()
  allProjects.forEach(p => p.tags.forEach(t => set.add(t)))
  return ['All', ...Array.from(set)]
})

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase()
  const tag = activeTag.value
  return allProjects.filter(p => {
    const matchesTag = tag === 'All' || p.tags.includes(tag)
    const text = (p.title + ' ' + p.summary + ' ' + p.tags.join(' ')).toLowerCase()
    const matchesSearch = !q || text.includes(q)
    return matchesTag && matchesSearch
  })
})

const totalCount = computed(() => allProjects.length)    // NEW
const shownCount = computed(() => filtered.value.length) // NEW

const hoveredId = ref(null)

</script>



<a href="/protforlio-site/" class="back-home2-button"> ❮❮ Home </a>

<a id="top"></a>

# Projects

<div class="projects-header-row">
  <p class="projects-subtitle">
    Browse all projects. Use the search and tags below to filter.
  </p>
</div>

---

<div class="projects-toolbar">
  <button
    class="projects-toggle-filters"
    @click="showFilters = !showFilters"
  >
    {{ showFilters ? 'Hide Filters' : 'Show Filters' }}
  </button>

  <span class="projects-count">
    Showing {{ shownCount }} of {{ totalCount }} projects
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
    placeholder="Search by title, description, or tag..."
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
    <div class="project-media">
      <!-- NOT hovered: show image (or idle loop) -->
      <video
        v-if="hoveredId !== project.id"
        :src="project.image"
        autoplay
        muted
        loop
        playsinline
      ></video>
      <!-- Hovered: show hover video -->
      <video
        v-else
        :src="project.hoverVideo"
        autoplay
        muted
        loop
        playsinline
      ></video>
      <div class="project-pill-row">
        <span class="pill">{{ project.date || 'TBD' }}</span>
      </div>
      <div class="project-pill-row2">
        <span class="pill">{{ project.context || 'Project' }}</span>
      </div>
      <span class="pill pill-accent" v-if="project.featured">Featured</span>
    </div>
    <div class="project-body">
      <h3>{{ project.title }}</h3>
      <p>{{ project.summary }}</p>
      <div class="project-tags">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="tag"
          :class="[
            tag === 'Unity' ? 'tag-unity' : '',
            tag === 'C#' ? 'tag-csharp' : '',
            tag === '2D' ? 'tag-2d' : '',
            tag === '3D' ? 'tag-3d' : '',
            tag === 'Unreal' ? 'tag-unreal' : '',
            tag === 'C++' ? 'tag-cpp' : '',
            tag === 'Blueprints' ? 'tag-cpp' : '',
            tag === 'Top-Down' ? 'tag-topdown' : '',
            tag === 'Side-Scroller' ? 'tag-sidescroll' : '',
            tag === 'Action' ? 'tag-action' : '',
            tag === 'Movement' ? 'tag-movement' : '',
            tag === 'FPS' ? 'tag-fps' : '',
            tag === 'AI' ? 'tag-ai' : '',
            tag === 'Prototype' ? 'tag-prototype' : '',
            tag === 'Game Jam' ? 'tag-gamejam' : ''
          ]"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </a>
</div>



##

# Other Projects (For Sale & Sold)

<div class="projects-subtitle other-projects-subtitle">
  
  Commission-based projects built for clients, focused on gameplay systems, monetisation-ready design, and polished player experiences.
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
    <div class="project-media">
      <video
        v-if="hoveredId !== project.id"
        :src="project.image"
        autoplay
        muted
        loop
        playsinline
      ></video>
      <video
        v-else
        :src="project.hoverVideo"
        autoplay
        muted
        loop
        playsinline
      ></video>
      <div class="project-pill-row">
        <span class="pill">{{ project.date || 'TBD' }}</span>
      </div>
      <div class="project-pill-row2">
        <span class="pill">{{ project.context || 'Project' }}</span>
      </div>
      <span class="pill pill-accent" v-if="project.featured">Featured</span>
    </div>
    <div class="project-body">
      <h3>{{ project.title }}</h3>
      <p>{{ project.summary }}</p>
      <div class="project-tags">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="tag"
          :class="[
            tag === 'For Sale' ? 'tag-forsale' : '',
            tag === 'Lua' ? 'tag-lua' : '',
            tag === 'Roblox' ? 'tag-roblox' : '',
            tag === 'Unity' ? 'tag-unity' : '',
            tag === 'C#' ? 'tag-csharp' : '',
            tag === '2D' ? 'tag-2d' : '',
            tag === '3D' ? 'tag-3d' : '',
            tag === 'Unreal' ? 'tag-unreal' : '',
            tag === 'C++' ? 'tag-cpp' : '',
            tag === 'Blueprints' ? 'tag-cpp' : '',
            tag === 'Top-Down' ? 'tag-topdown' : '',
            tag === 'Side-Scroller' ? 'tag-sidescroll' : '',
            tag === 'Action' ? 'tag-action' : '',
            tag === 'Movement' ? 'tag-movement' : '',
            tag === 'FPS' ? 'tag-fps' : '',
            tag === 'AI' ? 'tag-ai' : '',
            tag === 'Prototype' ? 'tag-prototype' : '',
            tag === 'Game Jam' ? 'tag-gamejam' : ''
          ]"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </a>
</div>



<div class="scroll-controls">
  <button class="scroll-btn scroll-up" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" aria-label="Scroll to top">
    ↑
  </button>
  <a class="scroll-btn scroll-down" href="#bottom" aria-label="Scroll to bottom">↓</a>
</div>

<a id="bottom"></a>
