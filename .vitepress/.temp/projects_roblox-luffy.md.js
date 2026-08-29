import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Roblox Combat Moveset Commission","description":"Custom 4-ability + transformation system for Roblox client. All visuals, animations, SFX, and scripts created solo.","frontmatter":{"layout":"doc","title":"Roblox Combat Moveset Commission","description":"Custom 4-ability + transformation system for Roblox client. All visuals, animations, SFX, and scripts created solo."},"headers":[],"relativePath":"projects/roblox-luffy.md","filePath":"projects/roblox-luffy.md"}');
const _sfc_main = { name: "projects/roblox-luffy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MediaCarousel = resolveComponent("MediaCarousel");
  const _component_ProjectPanel = resolveComponent("ProjectPanel");
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="../projects/" class="back-home-button"> ❮❮ All Projects </a></p><div class="project-info-row"><div class="project-info-left"><p class="info-line"><span class="info-line-label">Status :</span><span class="info-line-value"> Delivered &amp; Live </span></p><p class="info-line"><span class="info-line-label">Role :</span><span class="info-line-value"> Solo Developer (Animations, VFX, SFX, Scripts) </span></p><p class="info-line"><span class="info-line-label">Platform :</span><span class="info-line-value"> Roblox Studio (Lua) </span></p></div></div><h1 class="page-title-center" id="roblox-combat-moveset" tabindex="-1">Roblox Combat Moveset <a class="header-anchor" href="#roblox-combat-moveset" aria-label="Permalink to &quot;Roblox Combat Moveset {.page-title-center}&quot;">​</a></h1><h3 class="page-title-center" id="client-commission-4-abilities-transformation" tabindex="-1">Client Commission: 4 Abilities + Transformation <a class="header-anchor" href="#client-commission-4-abilities-transformation" aria-label="Permalink to &quot;Client Commission: 4 Abilities + Transformation {.page-title-center}&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_MediaCarousel, {
    "data-hx-reveal": "",
    id: "rl-hero-media",
    slides: [
      { src: "https://www.youtube.com/embed/79QGymAW9uE?si=bbwLB3-aUYcUDnBk", type: "embed", caption: "Complete moveset showcase: 4 abilities + transformation system" }
    ]
  }, null, _parent));
  _push(`<h2 class="outline-only" id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🎯",
    title: "Overview"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}>Custom combat moveset built to client specification:</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>4 Distinct Abilities:</strong> Each with unique input, cooldown, animation, and particle feedback</li><li${_scopeId}><strong${_scopeId}>Transformation/Power-Up System:</strong> Visual state change with stat multipliers</li><li${_scopeId}><strong${_scopeId}>Animations:</strong> Custom Roblox rig animations for all abilities + transformation</li><li${_scopeId}><strong${_scopeId}>Visual Effects:</strong> Particle systems synced to ability timing</li><li${_scopeId}><strong${_scopeId}>Sound Design:</strong> Custom SFX for each ability + transformation activation</li><li${_scopeId}><strong${_scopeId}>Scripting:</strong> Pure Lua backend (input handling, ability sequencing, cooldown management)</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, "Custom combat moveset built to client specification:"),
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "4 Distinct Abilities:"),
                createTextVNode(" Each with unique input, cooldown, animation, and particle feedback")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Transformation/Power-Up System:"),
                createTextVNode(" Visual state change with stat multipliers")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Animations:"),
                createTextVNode(" Custom Roblox rig animations for all abilities + transformation")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Visual Effects:"),
                createTextVNode(" Particle systems synced to ability timing")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Sound Design:"),
                createTextVNode(" Custom SFX for each ability + transformation activation")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Scripting:"),
                createTextVNode(" Pure Lua backend (input handling, ability sequencing, cooldown management)")
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
        _push2(`<div class="project-text"${_scopeId}><table tabindex="0"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Component</th><th${_scopeId}>Details</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>Animation System</strong></td><td${_scopeId}>6+ custom animations (ability 1–4, transformation in/out)</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>VFX Integration</strong></td><td${_scopeId}>Particle systems for ability feedback, transformation aura</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>Audio Design</strong></td><td${_scopeId}>Ability cast SFX, impact sounds, transformation theme</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>Ability Scripts</strong></td><td${_scopeId}>Input detection, cooldown tracking, damage hitboxes, client prediction</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>Transformation Logic</strong></td><td${_scopeId}>State machine handling stat scaling, animation transitions, visual effects</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>Polish</strong></td><td${_scopeId}>Particle timing synced to animation, audio cues for feedback, visual combo feedback</td></tr></tbody></table></div>`);
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
                    createVNode("strong", null, "Animation System")
                  ]),
                  createVNode("td", null, "6+ custom animations (ability 1–4, transformation in/out)")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "VFX Integration")
                  ]),
                  createVNode("td", null, "Particle systems for ability feedback, transformation aura")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "Audio Design")
                  ]),
                  createVNode("td", null, "Ability cast SFX, impact sounds, transformation theme")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "Ability Scripts")
                  ]),
                  createVNode("td", null, "Input detection, cooldown tracking, damage hitboxes, client prediction")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "Transformation Logic")
                  ]),
                  createVNode("td", null, "State machine handling stat scaling, animation transitions, visual effects")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "Polish")
                  ]),
                  createVNode("td", null, "Particle timing synced to animation, audio cues for feedback, visual combo feedback")
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="links-resources" tabindex="-1">Links &amp; Resources <a class="header-anchor" href="#links-resources" aria-label="Permalink to &quot;Links &amp; Resources {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🔗",
    title: "Links & Resources"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Offical Page:</strong> <a href="https://www.roblox.com/games/9123465176/Luffy-fruit-test"${_scopeId}>PlayTest Link</a></li><li${_scopeId}><strong${_scopeId}>Contact:</strong> me (Discord: rayz.c)</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "Offical Page:"),
                createTextVNode(),
                createVNode("a", { href: "https://www.roblox.com/games/9123465176/Luffy-fruit-test" }, "PlayTest Link")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Contact:"),
                createTextVNode(" me (Discord: rayz.c)")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<hr></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("projects/roblox-luffy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const robloxLuffy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  robloxLuffy as default
};
