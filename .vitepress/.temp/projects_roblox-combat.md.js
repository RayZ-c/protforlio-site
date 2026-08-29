import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Roblox Combat System Framework","description":"Reusable 5-hit combo + blocking framework for Roblox. Sold to multiple clients. Complete with knockback, block-breaking, heavy attacks, and synchronized feedback.","frontmatter":{"layout":"doc","title":"Roblox Combat System Framework","description":"Reusable 5-hit combo + blocking framework for Roblox. Sold to multiple clients. Complete with knockback, block-breaking, heavy attacks, and synchronized feedback."},"headers":[],"relativePath":"projects/roblox-combat.md","filePath":"projects/roblox-combat.md"}');
const _sfc_main = { name: "projects/roblox-combat.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MediaCarousel = resolveComponent("MediaCarousel");
  const _component_ProjectPanel = resolveComponent("ProjectPanel");
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="../projects/" class="back-home-button"> ❮❮ All Projects </a></p><div class="project-info-row"><div class="project-info-left"><p class="info-line"><span class="info-line-label">Status :</span><span class="info-line-value"> Live &amp; Multi-Client </span></p><p class="info-line"><span class="info-line-label">Role :</span><span class="info-line-value"> Framework Developer (Systems Design &amp; Lua) </span></p><p class="info-line"><span class="info-line-label">Platform :</span><span class="info-line-value"> Roblox Studio (Reusable Module) </span></p></div></div><h1 class="page-title-center" id="roblox-combat-system-framework" tabindex="-1">Roblox Combat System Framework <a class="header-anchor" href="#roblox-combat-system-framework" aria-label="Permalink to &quot;Roblox Combat System Framework {.page-title-center}&quot;">​</a></h1><h3 class="page-title-center" id="reusable-5-hit-combo-blocking-system" tabindex="-1">Reusable 5-Hit Combo + Blocking System <a class="header-anchor" href="#reusable-5-hit-combo-blocking-system" aria-label="Permalink to &quot;Reusable 5-Hit Combo + Blocking System {.page-title-center}&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_MediaCarousel, {
    "data-hx-reveal": "",
    id: "rcf-hero-media",
    slides: [
      { src: "/videos/roblox-combat/rc-showcase-1.mp4", caption: "Complete combat system: 5-hit combos, knockback, blocking, block breaks, heavy attacks" }
    ]
  }, null, _parent));
  _push(`<h2 class="outline-only" id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🎯",
    title: "Overview"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}>Production combat framework designed for reusability across multiple Roblox games:</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>5-Hit Combo Chain:</strong> Sequential attack animations with increasing damage per step</li><li${_scopeId}><strong${_scopeId}>Knockback System:</strong> Progressive knockback on combo hits, heavy knockback on final hit</li><li${_scopeId}><strong${_scopeId}>Block Mechanics:</strong> Full block state with damage reduction + block-break threshold</li><li${_scopeId}><strong${_scopeId}>Block Break Reaction:</strong> Stun animation + stat reset when block is broken</li><li${_scopeId}><strong${_scopeId}>Heavy Attack:</strong> One-handed break attack with extended cooldown and guaranteed knockback</li><li${_scopeId}><strong${_scopeId}>Impact Feedback:</strong> Synchronized particle + animation reactions on both attack and block</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, "Production combat framework designed for reusability across multiple Roblox games:"),
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "5-Hit Combo Chain:"),
                createTextVNode(" Sequential attack animations with increasing damage per step")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Knockback System:"),
                createTextVNode(" Progressive knockback on combo hits, heavy knockback on final hit")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Block Mechanics:"),
                createTextVNode(" Full block state with damage reduction + block-break threshold")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Block Break Reaction:"),
                createTextVNode(" Stun animation + stat reset when block is broken")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Heavy Attack:"),
                createTextVNode(" One-handed break attack with extended cooldown and guaranteed knockback")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Impact Feedback:"),
                createTextVNode(" Synchronized particle + animation reactions on both attack and block")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="implementation" tabindex="-1">Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;Implementation {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "⚙️",
    title: "Technical Implementation"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><table tabindex="0"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Component</th><th${_scopeId}>Details</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>Combo System</strong></td><td${_scopeId}>5-hit sequential chain with per-hit damage/knockback scaling, combo timeout</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>Knockback Physics</strong></td><td${_scopeId}>Direction-aware knockback (scales per combo step, max on final hit)</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>Block State Machine</strong></td><td${_scopeId}>Active block → taking hit → block break → stun recovery</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>Block Break Logic</strong></td><td${_scopeId}>Cumulative damage threshold triggers break, resets on timeout</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>Heavy Attack System</strong></td><td${_scopeId}>Alternative input, longer animation, automatic block-breaking</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>Feedback System</strong></td><td${_scopeId}>Animation reactions (stagger, block react), particle spawning, damage numbers</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>Modular Design</strong></td><td${_scopeId}>Parameter-driven balance (damage, knockback, cooldowns all configurable)</td></tr></tbody></table></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("table", { tabindex: "0" }, [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", null, "Component"),
                  createVNode("th", null, "Details")
                ])
              ]),
              createVNode("tbody", null, [
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "Combo System")
                  ]),
                  createVNode("td", null, "5-hit sequential chain with per-hit damage/knockback scaling, combo timeout")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "Knockback Physics")
                  ]),
                  createVNode("td", null, "Direction-aware knockback (scales per combo step, max on final hit)")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "Block State Machine")
                  ]),
                  createVNode("td", null, "Active block → taking hit → block break → stun recovery")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "Block Break Logic")
                  ]),
                  createVNode("td", null, "Cumulative damage threshold triggers break, resets on timeout")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "Heavy Attack System")
                  ]),
                  createVNode("td", null, "Alternative input, longer animation, automatic block-breaking")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "Feedback System")
                  ]),
                  createVNode("td", null, "Animation reactions (stagger, block react), particle spawning, damage numbers")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "Modular Design")
                  ]),
                  createVNode("td", null, "Parameter-driven balance (damage, knockback, cooldowns all configurable)")
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="why-it-s-reusable" tabindex="-1">Why It&#39;s Reusable <a class="header-anchor" href="#why-it-s-reusable" aria-label="Permalink to &quot;Why It&#39;s Reusable {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "📈",
    title: "Reusability & Result"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>No hardcoded values</strong> - All damage, knockback, cooldown, timing in config table</li><li${_scopeId}><strong${_scopeId}>Animation-agnostic</strong> - Works with any character rig (uses generic animation names)</li><li${_scopeId}><strong${_scopeId}>Plug-and-play</strong> - Drop module into game, connect to character, configure parameters</li><li${_scopeId}><strong${_scopeId}>Extensible</strong> - Easy to add new attacks or modify block behavior without touching core logic</li><li${_scopeId}><strong${_scopeId}>Multiple clients</strong> - Same codebase, different balance per game (client-specific configs)</li></ul><p${_scopeId}><strong${_scopeId}>Result:</strong> Delivered to 3+ clients with custom balance tuning per game. Framework handles all core combat patterns while remaining lightweight and performant. Clients report minimal integration time and ability to modify mechanics without code changes.</p></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "No hardcoded values"),
                createTextVNode(" - All damage, knockback, cooldown, timing in config table")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Animation-agnostic"),
                createTextVNode(" - Works with any character rig (uses generic animation names)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Plug-and-play"),
                createTextVNode(" - Drop module into game, connect to character, configure parameters")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Extensible"),
                createTextVNode(" - Easy to add new attacks or modify block behavior without touching core logic")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Multiple clients"),
                createTextVNode(" - Same codebase, different balance per game (client-specific configs)")
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Result:"),
              createTextVNode(" Delivered to 3+ clients with custom balance tuning per game. Framework handles all core combat patterns while remaining lightweight and performant. Clients report minimal integration time and ability to modify mechanics without code changes.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("projects/roblox-combat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const robloxCombat = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  robloxCombat as default
};
