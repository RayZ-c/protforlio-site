/**
 * UI STRINGS
 * ---------------------------------------------------------------------------
 * Everything that lives inside a Vue component rather than in markdown. Page
 * CONTENT is translated by giving each locale its own markdown file; this
 * covers the chrome around it — the hero, the showreel rail, the scroll
 * buttons, carousel labels.
 *
 * Deliberately not `vue-i18n`: this is a few dozen strings across four
 * components, and the standing rule is no new dependencies. A plain object
 * keyed by locale plus `useData().lang` does the same job.
 *
 * Keys are English sentences rather than dotted ids. At this size it keeps the
 * components readable, and a missing translation degrades into correct English
 * instead of into `hero.status`.
 *
 * NOT translated, deliberately:
 *   - "Raymond Cheng" — it is his name.
 *   - Engine, language and platform chips (Unity, C#, C++, Lua, Roblox) —
 *     written in Latin script in Chinese game-dev writing, and translating them
 *     reads as amateurish.
 */
import { computed } from 'vue'
import { useData } from 'vitepress'

/**
 * Maps the `lang` VitePress puts on <html> to our locale keys. Prefix matching
 * so a future `zh-HK` or `en-GB` still resolves rather than silently falling
 * back to English.
 */
export function localeOf(lang) {
  if (!lang) return 'en'
  if (lang.startsWith('zh-Hant')) return 'zh-Hant'
  if (lang.startsWith('zh')) return 'zh'
  return 'en'
}

/** Directory prefix for a locale. Root locale has none. */
export const PREFIX = { en: '', zh: '/zh', 'zh-Hant': '/zh-Hant' }

const STRINGS = {
  zh: {
    // ── hero ────────────────────────────────────────────────────────────
    'Open to roles & internships': '求职与实习机会开放中',
    'Gameplay Programmer': '游戏玩法程序员',
    'View projects': '查看项目',
    'Read my CV': '查看简历',
    // rotating specialisms
    'combat systems': '战斗系统',
    'boss encounters': 'Boss 战设计',
    'movement & game feel': '移动与手感',
    'gameplay frameworks': '玩法框架',
    'VFX & SFX': '特效与音效',

    // ── showreel rail ───────────────────────────────────────────────────
    'Showreel chapter': '作品集章节',
    'Open case study': '查看项目详解',
    // chapter labels
    'Path to Power': '龙珠 2D 平台动作',
    'Pixel Adventure': '像素冒险',
    'FPS Framework': 'FPS 框架',
    'Endless Runner': '无尽跑酷',
    'Roblox Movesets': 'Roblox 招式框架',
    // chapter full titles (used in the aria-label)
    '1st Person Shooter Framework': '第一人称射击框架',
    'Cyborg Monkey Endless Runner': '赛博猴子无尽跑酷',
    'Roblox RPG Movesets': 'Roblox RPG 招式框架',
    // chapter kinds
    '2D action platformer': '2D 动作平台游戏',
    'Top-down boss RPG': '俯视角 Boss RPG',
    'Modular FPS systems': '模块化 FPS 系统',
    '4-day game jam build': '4 天 Game Jam 作品',
    'Commissioned combat framework': '委托开发的战斗框架',
    // chapter stacks — engine and language names stay in Latin script
    'Unity · C# · Combat & game feel': 'Unity · C# · 战斗与手感',
    'Unity · C# · Enemy AI': 'Unity · C# · 敌人 AI',
    'Unreal Engine 5 · C++ · AI': '虚幻引擎 5 · C++ · AI',
    'Unreal Engine 5 · Blueprints': '虚幻引擎 5 · 蓝图',
    'Roblox Studio · Lua · VFX/SFX': 'Roblox Studio · Lua · 特效/音效',

    // ── scroll controls ─────────────────────────────────────────────────
    'Back to top': '回到顶部',
    'Jump to end': '跳到底部',

    // ── media carousel ──────────────────────────────────────────────────
    'Media gallery': '媒体展示',
    'Previous media in': '上一个媒体：',
    'Next media in': '下一个媒体：',
    'Slide': '第',
    'of': '项，共',

    // ── route transition overlay ────────────────────────────────────────
    // `route:<slug>` keys label the page being navigated TO. An untranslated
    // slug degrades to its humanised English form rather than a missing key.
    'HOME': '首页',
    'PROJECTS': '项目',
    'route:path-to-power': '龙珠 2D 平台动作',
    'route:pixel-adventure': '像素冒险',
    'route:ue5-fps': '第一人称射击框架',
    'route:elder-escape': '无尽跑酷',
    'route:forgiving-mechanics': '容错移动框架',
    'route:roblox-luffy': 'Roblox 招式框架',
    'route:roblox-combat': 'Roblox 战斗系统',
    'route:star-platinum-mod': 'Marvel Rivals 模组',

    // ── language switcher / CV menu ─────────────────────────────────────
    'Language': '语言',
    'CV': '简历',
    'Coming soon': '尚未提供'
  },

  'zh-Hant': {
    'Open to roles & internships': '開放求職與實習機會',
    'Gameplay Programmer': '遊戲程式設計師',
    'View projects': '查看專案',
    'Read my CV': '查看履歷',
    'combat systems': '戰鬥系統',
    'boss encounters': 'Boss 戰設計',
    'movement & game feel': '移動與手感',
    'gameplay frameworks': '玩法框架',
    'VFX & SFX': '特效與音效',

    'Showreel chapter': '作品集章節',
    'Open case study': '查看專案詳解',
    'Path to Power': '龍珠 2D 平台動作',
    'Pixel Adventure': '像素冒險',
    'FPS Framework': 'FPS 框架',
    'Endless Runner': '無盡跑酷',
    'Roblox Movesets': 'Roblox 招式框架',
    '1st Person Shooter Framework': '第一人稱射擊框架',
    'Cyborg Monkey Endless Runner': '賽博猴子無盡跑酷',
    'Roblox RPG Movesets': 'Roblox RPG 招式框架',
    '2D action platformer': '2D 動作平台遊戲',
    'Top-down boss RPG': '俯視角 Boss RPG',
    'Modular FPS systems': '模組化 FPS 系統',
    '4-day game jam build': '4 天 Game Jam 作品',
    'Commissioned combat framework': '委託開發的戰鬥框架',
    'Unity · C# · Combat & game feel': 'Unity · C# · 戰鬥與手感',
    'Unity · C# · Enemy AI': 'Unity · C# · 敵人 AI',
    'Unreal Engine 5 · C++ · AI': '虛幻引擎 5 · C++ · AI',
    'Unreal Engine 5 · Blueprints': '虛幻引擎 5 · 藍圖',
    'Roblox Studio · Lua · VFX/SFX': 'Roblox Studio · Lua · 特效/音效',

    'Back to top': '回到頂部',
    'Jump to end': '跳到底部',

    'Media gallery': '媒體展示',
    'Previous media in': '上一個媒體：',
    'Next media in': '下一個媒體：',
    'Slide': '第',
    'of': '項，共',

    'HOME': '首頁',
    'PROJECTS': '專案',
    'route:path-to-power': '龍珠 2D 平台動作',
    'route:pixel-adventure': '像素冒險',
    'route:ue5-fps': '第一人稱射擊框架',
    'route:elder-escape': '無盡跑酷',
    'route:forgiving-mechanics': '容錯移動框架',
    'route:roblox-luffy': 'Roblox 招式框架',
    'route:roblox-combat': 'Roblox 戰鬥系統',
    'route:star-platinum-mod': 'Marvel Rivals 模組',

    'Language': '語言',
    'CV': '履歷',
    'Coming soon': '尚未提供'
  }
}

/**
 * `t('Some English string')` returns the current locale's version, or the key
 * itself for English and for anything not yet translated.
 *
 * `localePath('/projects/')` prefixes a site-root path with the current
 * locale directory, so a link written once resolves correctly in all three.
 * It does NOT apply the site base — pass the result through `withBase()`.
 */
export function useI18n() {
  const { lang } = useData()
  const locale = computed(() => localeOf(lang.value))
  const t = (key) => STRINGS[locale.value]?.[key] ?? key
  const localePath = (path) => `${PREFIX[locale.value] ?? ''}${path}`
  return { t, locale, localePath }
}
