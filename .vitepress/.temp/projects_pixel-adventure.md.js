import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pixel Adventure","description":"A pixel-art top-down action game with two unique boss encounters and persistent gem-collection progression","frontmatter":{"layout":"doc","title":"Pixel Adventure","description":"A pixel-art top-down action game with two unique boss encounters and persistent gem-collection progression"},"headers":[],"relativePath":"projects/pixel-adventure.md","filePath":"projects/pixel-adventure.md"}');
const _sfc_main = { name: "projects/pixel-adventure.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MediaCarousel = resolveComponent("MediaCarousel");
  const _component_ProjectPanel = resolveComponent("ProjectPanel");
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="../projects/" class="back-home-button"> ❮❮ All Projects </a></p><div class="project-info-row"><div class="project-info-left"><p class="info-line"><span class="info-line-label">Project Status :</span><span class="info-line-value"> Ongoing | 8 Weeks</span></p><p class="info-line"><span class="info-line-label">Project Type :</span><span class="info-line-value"> Solo Project | Unity (C#)</span></p></div></div><h1 class="page-title-center" id="pixel-adventure" tabindex="-1">Pixel Adventure <a class="header-anchor" href="#pixel-adventure" aria-label="Permalink to &quot;Pixel Adventure {.page-title-center}&quot;">​</a></h1><hr><p class="project-text"> A <strong>Unity 2D top-down action game</strong> where players battle unique bosses and collect gems to unlock the final room, focusing on <strong>responsive combat</strong>, <strong>boss design</strong>, and <strong>smooth game feel</strong>. </p><div class="project-info-right">`);
  _push(ssrRenderComponent(_component_MediaCarousel, {
    "data-hx-reveal": "",
    id: "pa-media",
    slides: [
      { src: "/images/PixelAdventure/pa-1.png", type: "image", alt: "Pixel Adventure screenshot 1", caption: "Showcase of collecting the Final Gem." },
      { src: "/videos/PixelAdventure/pa-2.mp4", caption: "Showcase of face paced Robot Boss fight." },
      { src: "/videos/PixelAdventure/pa-3.mp4", caption: "Showcase of tactical Necromancer Boss fight." },
      { src: "/images/PixelAdventure/pa-4.png", type: "image", alt: "Pixel Adventure screenshot 4", caption: "Showcase of Necromancer Boss Room." },
      { src: "/images/PixelAdventure/pa-5.png", type: "image", alt: "Pixel Adventure screenshot 5", caption: "Showcase of Robot Boss Room." },
      { src: "/images/PixelAdventure/pa-6.png", type: "image", alt: "Pixel Adventure screenshot 6", caption: "A picture of the Gem in the story." }
    ]
  }, null, _parent));
  _push(`</div><hr><h1 class="section-title-center" data-hx-reveal="true" id="general" tabindex="-1">General <a class="header-anchor" href="#general" aria-label="Permalink to &quot;General {.section-title-center data-hx-reveal=&quot;true&quot;}&quot;">​</a></h1><h2 class="outline-only" id="quick-summary-for-recruiters" tabindex="-1">Quick Summary for Recruiters <a class="header-anchor" href="#quick-summary-for-recruiters" aria-label="Permalink to &quot;Quick Summary for Recruiters {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🎯",
    title: "Quick Summary for Recruiters"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><ul${_scopeId}><li${_scopeId}>Designed and implemented <strong${_scopeId}>two mechanically distinct bosses</strong> on top of a reusable enemy architecture</li><li${_scopeId}>Built a <strong${_scopeId}>full game loop</strong>: menu → intro → exploration → boss fights → progression → victory</li><li${_scopeId}>Implemented <strong${_scopeId}>combat, AI, UI, VFX, audio, and persistence systems</strong> solo in Unity 2D</li><li${_scopeId}>Focused on <strong${_scopeId}>game feel</strong> (dash, hitstop, VFX, SFX) and <strong${_scopeId}>readable, extensible code structure</strong></li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("ul", null, [
              createVNode("li", null, [
                createTextVNode("Designed and implemented "),
                createVNode("strong", null, "two mechanically distinct bosses"),
                createTextVNode(" on top of a reusable enemy architecture")
              ]),
              createVNode("li", null, [
                createTextVNode("Built a "),
                createVNode("strong", null, "full game loop"),
                createTextVNode(": menu → intro → exploration → boss fights → progression → victory")
              ]),
              createVNode("li", null, [
                createTextVNode("Implemented "),
                createVNode("strong", null, "combat, AI, UI, VFX, audio, and persistence systems"),
                createTextVNode(" solo in Unity 2D")
              ]),
              createVNode("li", null, [
                createTextVNode("Focused on "),
                createVNode("strong", null, "game feel"),
                createTextVNode(" (dash, hitstop, VFX, SFX) and "),
                createVNode("strong", null, "readable, extensible code structure")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="game-overview-gameplay" tabindex="-1">Game Overview &amp; Gameplay <a class="header-anchor" href="#game-overview-gameplay" aria-label="Permalink to &quot;Game Overview &amp; Gameplay {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🎯",
    title: "Game Overview & Gameplay"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="project-text"${_scopeId}> Players follow a mysterious gem into a cave system and must defeat two distinct bosses to collect gems to unlock progression. </p><p class="project-text"${_scopeId}> The core loop mixes <strong${_scopeId}>exploration</strong>, <strong${_scopeId}>boss fights</strong>, and <strong${_scopeId}>resource-based combat</strong>. </p><h3 class="project-text"${_scopeId}>Showcase Video:</h3><div class="video-wrapper"${_scopeId}><iframe src="https://www.youtube.com/embed/3lBQ5KZLOZc?si=8msajJs84y9lskF7" title="Pixel Adventure gameplay video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen${_scopeId}></iframe></div><h3 class="project-text"${_scopeId}>Core Gameplay:</h3><div class="project-text"${_scopeId}><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Dual Attack Styles:</strong> Sword slashing (stamina-based) and fireball projectiles (mana-based)</li><li${_scopeId}><strong${_scopeId}>Boss 1 – fast-paced Robot:</strong> Teleports around the arena and fires rapid projectiles, forcing aggressive dash usage</li><li${_scopeId}><strong${_scopeId}>Boss 2 – tactical Necromancer:</strong> Shoots triple blasts, summons skeleton mages, and spawns two shadow clones at 50% HP</li><li${_scopeId}><strong${_scopeId}>Progression:</strong> 2 gems required to unlock the final room; deaths respawn the player without wiping gem progress</li><li${_scopeId}><strong${_scopeId}>Polish:</strong> Hitstop, knockback feedback, particle effects, intro cutscene, and a victory screen</li></ul></div>`);
      } else {
        return [
          createVNode("p", { class: "project-text" }, " Players follow a mysterious gem into a cave system and must defeat two distinct bosses to collect gems to unlock progression. "),
          createVNode("p", { class: "project-text" }, [
            createTextVNode(" The core loop mixes "),
            createVNode("strong", null, "exploration"),
            createTextVNode(", "),
            createVNode("strong", null, "boss fights"),
            createTextVNode(", and "),
            createVNode("strong", null, "resource-based combat"),
            createTextVNode(". ")
          ]),
          createVNode("h3", { class: "project-text" }, "Showcase Video:"),
          createVNode("div", { class: "video-wrapper" }, [
            createVNode("iframe", {
              src: "https://www.youtube.com/embed/3lBQ5KZLOZc?si=8msajJs84y9lskF7",
              title: "Pixel Adventure gameplay video",
              frameborder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
              referrerpolicy: "strict-origin-when-cross-origin",
              allowfullscreen: ""
            })
          ]),
          createVNode("h3", { class: "project-text" }, "Core Gameplay:"),
          createVNode("div", { class: "project-text" }, [
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "Dual Attack Styles:"),
                createTextVNode(" Sword slashing (stamina-based) and fireball projectiles (mana-based)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Boss 1 – fast-paced Robot:"),
                createTextVNode(" Teleports around the arena and fires rapid projectiles, forcing aggressive dash usage")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Boss 2 – tactical Necromancer:"),
                createTextVNode(" Shoots triple blasts, summons skeleton mages, and spawns two shadow clones at 50% HP")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Progression:"),
                createTextVNode(" 2 gems required to unlock the final room; deaths respawn the player without wiping gem progress")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Polish:"),
                createTextVNode(" Hitstop, knockback feedback, particle effects, intro cutscene, and a victory screen")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<hr><h1 class="section-title-center" data-hx-reveal="true" id="highlights" tabindex="-1">Highlights <a class="header-anchor" href="#highlights" aria-label="Permalink to &quot;Highlights {.section-title-center data-hx-reveal=&quot;true&quot;}&quot;">​</a></h1><h2 class="outline-only" id="architecture-design-patterns" tabindex="-1">Architecture &amp; Design Patterns <a class="header-anchor" href="#architecture-design-patterns" aria-label="Permalink to &quot;Architecture &amp; Design Patterns {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🏗️",
    title: "Architecture & Design Patterns"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Enemy AI Framework:</strong> Parent <code${_scopeId}>Enemy</code> class with inheritance hierarchy; <code${_scopeId}>Boss1</code> and <code${_scopeId}>Boss2</code> override behavior for unique attack patterns</li><li${_scopeId}><strong${_scopeId}>State Machines:</strong> Player and enemy behavior driven by hierarchical state systems with input-driven transitions</li><li${_scopeId}><strong${_scopeId}>VFX Management:</strong> Centralized singleton <code${_scopeId}>VFXManager</code> for effect spawning and cleanup</li><li${_scopeId}><strong${_scopeId}>Data Persistence:</strong> <code${_scopeId}>ScoreSystem</code> + <code${_scopeId}>PlayerPrefs</code> to save gem progression across sessions</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "Enemy AI Framework:"),
                createTextVNode(" Parent "),
                createVNode("code", null, "Enemy"),
                createTextVNode(" class with inheritance hierarchy; "),
                createVNode("code", null, "Boss1"),
                createTextVNode(" and "),
                createVNode("code", null, "Boss2"),
                createTextVNode(" override behavior for unique attack patterns")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "State Machines:"),
                createTextVNode(" Player and enemy behavior driven by hierarchical state systems with input-driven transitions")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "VFX Management:"),
                createTextVNode(" Centralized singleton "),
                createVNode("code", null, "VFXManager"),
                createTextVNode(" for effect spawning and cleanup")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Data Persistence:"),
                createTextVNode(),
                createVNode("code", null, "ScoreSystem"),
                createTextVNode(" + "),
                createVNode("code", null, "PlayerPrefs"),
                createTextVNode(" to save gem progression across sessions")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="systems-implemented" tabindex="-1">Systems Implemented <a class="header-anchor" href="#systems-implemented" aria-label="Permalink to &quot;Systems Implemented {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🏗️",
    title: "Systems Implemented"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Combat:</strong> Hitbox detection, damage calculation, knockback mechanics</li><li${_scopeId}><strong${_scopeId}>Movement:</strong> 8-directional top-down movement with dash, stamina cost, and cooldown management</li><li${_scopeId}><strong${_scopeId}>Boss AI:</strong> Coroutine-based ability timing, cooldown handling, and phase transitions (e.g. Necromancer clone phase)</li><li${_scopeId}><strong${_scopeId}>UI:</strong> Real-time health, stamina, and mana bars; pause menu with resume, restart, controls, main menu, and quit</li><li${_scopeId}><strong${_scopeId}>Audio:</strong> Centralized <code${_scopeId}>AudioManager</code> for SFX playback</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "Combat:"),
                createTextVNode(" Hitbox detection, damage calculation, knockback mechanics")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Movement:"),
                createTextVNode(" 8-directional top-down movement with dash, stamina cost, and cooldown management")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Boss AI:"),
                createTextVNode(" Coroutine-based ability timing, cooldown handling, and phase transitions (e.g. Necromancer clone phase)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "UI:"),
                createTextVNode(" Real-time health, stamina, and mana bars; pause menu with resume, restart, controls, main menu, and quit")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Audio:"),
                createTextVNode(" Centralized "),
                createVNode("code", null, "AudioManager"),
                createTextVNode(" for SFX playback")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("projects/pixel-adventure.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pixelAdventure = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pixelAdventure as default
};
