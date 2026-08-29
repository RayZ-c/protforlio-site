import { useSSRContext, ref, computed, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"Projects","description":"","frontmatter":{"title":"Projects","class":"page-projects","layout":"home"},"headers":[],"relativePath":"projects/index.md","filePath":"projects/index.md"}');
const __default__ = { name: "projects/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const allProjects = [
      {
        id: "dragon-ball-2d",
        title: "Dragon Ball 2D Platformer",
        summary: "Combat-focused 2D platformer with custom controller, combo system, and VFX.",
        link: "/protforlio-site/projects/path-to-power",
        image: "/protforlio-site/videos/path-to-power/ptp-showcase-1V2.mp4",
        hoverVideo: "/protforlio-site/videos/path-to-power/ptp-showcase-1V2.mp4",
        tags: ["Unity", "C#", "2D", "Side-Scroller", "Action"],
        date: "September 2025",
        context: "Personal",
        featured: true
      },
      {
        id: "ue5-fps",
        title: "1st Person Shooter Framework",
        summary: "Production-ready FPS framework with fully modular systems to showcase architecture expertise.",
        link: "/protforlio-site/projects/ue5-fps",
        image: "/protforlio-site/videos/ue5-fps/fps-showcase-0.mp4",
        hoverVideo: "/protforlio-site/videos/ue5-fps/fps-showcase-0.mp4",
        tags: ["Unreal", "C++", "3D", "FPS", "AI"],
        date: "October 2025",
        context: "Academic",
        featured: true
      },
      {
        id: "pixel-adventure-2d",
        title: "Pixel Adventure",
        summary: "Fast-paced 2D top‑down RPG where you fight two distinct bosses and collect gems for progression.",
        link: "/protforlio-site/projects/pixel-adventure",
        image: "/protforlio-site/videos/PixelAdventure/pa-1.mp4",
        hoverVideo: "/protforlio-site/videos/PixelAdventure/pa-1.mp4",
        tags: ["Unity", "C#", "2D", "Top-Down", "AI", "Action"],
        date: "December 2024",
        context: "Academic",
        featured: false
      },
      {
        id: "forgiving-mechanics",
        title: "Forgiving Mechanics Framework",
        summary: "Production-ready movement controller for side scroller games, built on forgiving mechanics principles.",
        link: "/protforlio-site/projects/forgiving-mechanics",
        image: "/protforlio-site/videos/forgiving-mechanics/fm-showcase-2.mp4",
        hoverVideo: "/protforlio-site/videos/forgiving-mechanics/fm-showcase-2.mp4",
        tags: ["Unity", "C#", "2D", "Side-Scroller", "Movement"],
        date: "August 2025",
        context: "Reusable Framework",
        featured: false
      },
      {
        id: "elder-escape",
        title: "Cyborg Monkey Endless Runner",
        summary: "A 4‑day endless runner built in Blueprints, featuring a disabled old man in a wheelchair chased by cyborg monkeys.",
        link: "/protforlio-site/projects/elder-escape",
        image: "/protforlio-site/videos/elder-escape/ee-showcase-2.mp4",
        hoverVideo: "/protforlio-site/videos/elder-escape/ee-showcase-2.mp4",
        tags: ["Unreal", "Blueprints", "3D", "Game Jam"],
        date: "September 2024",
        context: "Team Project",
        featured: false
      },
      {
        id: "star-platinum-mod",
        title: "Viral Marvel Rivals Mod (Star Platinum)",
        summary: "A Character & Sfx replacer mod with 15+ million views and impressions across platforms.",
        link: "/protforlio-site/projects/star-platinum-mod",
        image: "/protforlio-site/videos/starplat-mod/sp-showcase-1.mp4",
        hoverVideo: "/protforlio-site/videos/starplat-mod/sp-showcase-1.mp4",
        tags: ["Unreal", "SFX"],
        date: "September 2025",
        context: "Personal",
        featured: false
      },
      {
        id: "twin-sync",
        title: "2 Character Split Screen Puzzle",
        summary: "Built synchronized dual-character control and split-screen puzzle systems in a 36-hour game jam, delivering a stable playable prototype.",
        link: "https://abdulqadir53mohamedali.itch.io/twin-sync",
        image: "",
        hoverVideo: "",
        tags: ["Unity", "C#", "2D", "Side-Scroller", "Game Jam"],
        date: "February 2026",
        context: "Team Project",
        featured: false
      }
    ];
    const otherProjects = [
      {
        id: "roblox-luffy",
        title: "Roblox RPG Movesets",
        summary: "Modular PvP combat framework with data-driven abilities, polished visuals and monetisation hooks.",
        link: "/protforlio-site/projects/roblox-luffy",
        image: "/protforlio-site/videos/roblox-luffy/rl-showcase-1.mp4",
        hoverVideo: "/protforlio-site/videos/roblox-luffy/rl-showcase-1.mp4",
        tags: ["Roblox", "Lua", "For Sale"],
        date: "2023",
        context: "Commission",
        featured: false
      },
      {
        id: "roblox-combat",
        title: "Roblox Combat System",
        summary: "Reusable PvP combat framework sold for multiple client games.",
        link: "/protforlio-site/projects/roblox-combat",
        image: "/protforlio-site/videos/roblox-combat/rc-preview.mp4",
        hoverVideo: "/protforlio-site/videos/roblox-combat/rc-preview.mp4",
        tags: ["Roblox", "Lua", "For Sale"],
        date: "2022",
        context: "Commission",
        featured: false
      }
    ];
    const search = ref("");
    const activeTag = ref("All");
    const showFilters = ref(false);
    const allTags = computed(() => {
      const set = /* @__PURE__ */ new Set();
      allProjects.forEach((p) => p.tags.forEach((t) => set.add(t)));
      return ["All", ...Array.from(set)];
    });
    const filtered = computed(() => {
      const q = search.value.trim().toLowerCase();
      const tag = activeTag.value;
      return allProjects.filter((p) => {
        const matchesTag = tag === "All" || p.tags.includes(tag);
        const text = (p.title + " " + p.summary + " " + p.tags.join(" ")).toLowerCase();
        const matchesSearch = !q || text.includes(q);
        return matchesTag && matchesSearch;
      });
    });
    const totalCount = computed(() => allProjects.length);
    const shownCount = computed(() => filtered.value.length);
    ref(null);
    const posterFor = (src) => {
      if (!src || !src.endsWith(".mp4") || !src.includes("/videos/")) return void 0;
      return src.replace("/videos/", "/posters/").replace(/\.mp4$/, ".jpg");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TagRow = resolveComponent("TagRow");
      const _component_ScrollControls = resolveComponent("ScrollControls");
      _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="/protforlio-site/" class="back-home2-button"> ❮❮ Home </a></p><p><a id="top"></a></p><h1 id="projects" tabindex="-1">Projects <a class="header-anchor" href="#projects" aria-label="Permalink to &quot;Projects&quot;">​</a></h1><div class="projects-header-row"><p class="projects-subtitle"> Browse all projects. Use the search and tags below to filter. </p></div><hr><div class="projects-toolbar"><button class="projects-toggle-filters">${ssrInterpolate(showFilters.value ? "Hide Filters" : "Show Filters")}</button><span class="projects-count"> Showing ${ssrInterpolate(shownCount.value)} of ${ssrInterpolate(totalCount.value)} projects </span></div><div class="projects-filter-bar" style="${ssrRenderStyle(showFilters.value ? null : { display: "none" })}"><input${ssrRenderAttr("value", search.value)} type="text" class="projects-search" placeholder="Search by title, description, or tag..."><div class="projects-tag-list"><!--[-->`);
      ssrRenderList(allTags.value, (tag) => {
        _push(`<button class="${ssrRenderClass([{ active: activeTag.value === tag }, "projects-tag-button"])}">${ssrInterpolate(tag)}</button>`);
      });
      _push(`<!--]--></div></div><div class="projects-grid"><!--[-->`);
      ssrRenderList(filtered.value, (project) => {
        _push(`<a class="project-card project-card-small"${ssrRenderAttr("href", project.link)}><span class="hx-card-spot" aria-hidden="true"></span><div class="project-media"><video${ssrRenderAttr("src", project.hoverVideo || project.image)}${ssrRenderAttr("poster", posterFor(project.hoverVideo || project.image))} muted loop playsinline preload="none" data-lazy-video></video><div class="project-pill-row"><span class="pill">${ssrInterpolate(project.date || "TBD")}</span></div><div class="project-pill-row2"><span class="pill">${ssrInterpolate(project.context || "Project")}</span></div>`);
        if (project.featured) {
          _push(`<span class="pill pill-accent">Featured</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="project-body"><h3>${ssrInterpolate(project.title)}</h3><p>${ssrInterpolate(project.summary)}</p>`);
        _push(ssrRenderComponent(_component_TagRow, {
          tags: project.tags
        }, null, _parent));
        _push(`</div></a>`);
      });
      _push(`<!--]--></div><h1 id="other-projects-for-sale-sold" tabindex="-1">Other Projects (For Sale &amp; Sold) <a class="header-anchor" href="#other-projects-for-sale-sold" aria-label="Permalink to &quot;Other Projects (For Sale &amp; Sold)&quot;">​</a></h1><div class="projects-subtitle other-projects-subtitle"><p>Commission-based projects built for clients, focused on gameplay systems, monetisation-ready design, and polished player experiences.</p></div><div class="projects-grid"><!--[-->`);
      ssrRenderList(otherProjects, (project) => {
        _push(`<a class="project-card project-card-small"${ssrRenderAttr("href", project.link)}><span class="hx-card-spot" aria-hidden="true"></span><div class="project-media"><video${ssrRenderAttr("src", project.hoverVideo || project.image)}${ssrRenderAttr("poster", posterFor(project.hoverVideo || project.image))} muted loop playsinline preload="none" data-lazy-video></video><div class="project-pill-row"><span class="pill">${ssrInterpolate(project.date || "TBD")}</span></div><div class="project-pill-row2"><span class="pill">${ssrInterpolate(project.context || "Project")}</span></div>`);
        if (project.featured) {
          _push(`<span class="pill pill-accent">Featured</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="project-body"><h3>${ssrInterpolate(project.title)}</h3><p>${ssrInterpolate(project.summary)}</p>`);
        _push(ssrRenderComponent(_component_TagRow, {
          tags: project.tags
        }, null, _parent));
        _push(`</div></a>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_ScrollControls, null, null, _parent));
      _push(`<p><a id="bottom"></a></p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("projects/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
