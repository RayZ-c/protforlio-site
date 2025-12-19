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
    image: '/protforlio-site/videos/path-to-power/ptp-showcase-3.mp4',
    hoverVideo: '/protforlio-site/videos/path-to-power/ptp-showcase-1.mp4',
    tags: ['Unity', 'C#', '2D', 'Side-Scroller', 'Action'],
    date: 'September 2025',
    context: 'Academic',
    featured: true
  },
  {
    id: 'ue5-fps',
    title: 'Unreal Engine 5 FPS',
    summary: 'Solo-developed FPS prototype with custom weapons, AI enemies, and pacing.',
    link: '/protforlio-site/projects/ue5-fps',
    image: '/projects/placeholder.png',
    hoverVideo: '/protforlio-site/videos/PixelAdventure/pa-1.mp4',
    tags: ['Unreal', 'C++', '3D', 'FPS', 'AI'],
    date: 'September 2025',
    context: 'Academic',
    featured: true
  },
  {
    id: 'pixel-adventure-2d',
    title: 'Pixel Adventure',
    summary: 'Fast-paced 2D top‑down RPG where you fight two distinct bosses and collect gems for progression.',
    link: '/protforlio-site/projects/pixel-adventure',
    image: '/protforlio-site/videos/PixelAdventure/pa-4.mp4',
    hoverVideo: '/protforlio-site/videos/PixelAdventure/pa-1.mp4',
    tags: ['Unity', 'C#', '2D', 'Top-Down', 'AI', 'Action'],
    date: 'December 2024',
    context: 'Academic',
    featured: false
  },
  {
    id: 'project-4',
    title: 'Project 4 (Placeholder)',
    summary: 'Short description for project 4.',
    link: '/protforlio-site/projects/project-4',
    image: '/projects/placeholder.png',
    tags: ['Unreal', 'Prototype'],
    date: 'September 2025',
    context: 'Academic',
    featured: false
  },
  {
    id: 'project-5',
    title: 'Project 5 (Placeholder)',
    summary: 'Short description for project 5.',
    link: '/protforlio-site/projects/project-5',
    image: '/projects/placeholder.png',
    tags: ['Game Jam'],
    date: 'September 2025',
    context: 'Academic',
    featured: false
  },
  {
    id: 'project-6',
    title: 'Project 6 (Placeholder)',
    summary: 'Short description for project 6.',
    link: '/protforlio-site/projects/project-6',
    image: '/projects/placeholder.png',
    tags: ['Personal'],
    date: 'September 2025',
    context: 'Academic',
    featured: false
  },
  {
    id: 'project-7',
    title: 'Project 7 (Placeholder)',
    summary: 'Short description for project 7.',
    link: '/protforlio-site/projects/project-7',
    image: '/projects/placeholder.png',
    tags: ['University'],
    date: 'September 2025',
    context: 'Academic',
    featured: false
  },
  {
    id: 'project-8',
    title: 'Project 8 (Placeholder)',
    summary: 'Short description for project 8.',
    link: '/protforlio-site/projects/project-8',
    image: '/projects/placeholder.png',
    tags: ['Prototype'],
    date: 'September 2025',
    context: 'Academic',
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
            tag === 'Top-Down' ? 'tag-topdown' : '',
            tag === 'Side-Scroller' ? 'tag-sidescroll' : '',
            tag === 'Action' ? 'tag-action' : '',
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
