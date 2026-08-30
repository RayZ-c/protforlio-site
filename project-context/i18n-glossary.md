# Chinese terminology glossary

The locked term list for this site's Simplified (`zh-Hans`) and Traditional
(`zh-Hant`, **Taiwan**) translations.

**This file is the reason the translation does not read as machine output.**
Every recurring technical noun is decided once here and used consistently
everywhere, instead of drifting between synonyms page to page.

## Rules the translation follows

1. **The two locales are written independently from the English source.**
   Neither is converted from the other. Character conversion is detectable by
   any native reader, and for a programmer's portfolio it is especially obvious
   because the core vocabulary genuinely differs — see the table below.
2. **Traditional targets Taiwan (zh-TW).** Software-industry Taiwanese, not
   Hong Kong usage.
3. **Product, engine and language names stay in Latin script.** `Unity`,
   `Roblox`, `C#`, `C++`, `Lua`, `Blueprints`, `UI Toolkit`, `Nexus Mods`.
   This is standard in both markets; translating them reads as amateurish.
   The one exception is Unreal Engine, which has an established localised name.
4. **No 的-stacking, no English clause order.** The most reliable tell of
   machine translation is a Chinese sentence with English syntax. Sentences are
   re-cut, not transposed.
5. **Numbers and outcomes are never invented**, same rule as the English.

## The core divergence

These are the words that expose a converted document. All of them appear in
this portfolio.

| English | 简体 zh-Hans | 繁體 zh-Hant (TW) |
|---|---|---|
| program | 程序 | 程式 |
| source code / code | 代码 | 程式碼 |
| script (Unity / Roblox) | 脚本 | 腳本 |
| programmer | 程序员 | 程式設計師 |
| software | 软件 | 軟體 |
| project (work item) | 项目 | 專案 |
| object | 对象 | 物件 |
| component | 组件 | 元件 |
| module / modular | 模块 / 模块化 | 模組 / 模組化 |
| programming interface / API interface | 接口 | 介面 |
| user interface / UI | 界面 / 用户界面 | 介面 / 使用者介面 |
| performance | 性能 | 效能 |
| optimise | 优化 | 最佳化 |
| data | 数据 | 資料 |
| variable | 变量 | 變數 |
| function | 函数 | 函式 |
| class | 类 | 類別 |
| array | 数组 | 陣列 |
| loop | 循环 | 迴圈 |
| debug | 调试 | 除錯 |
| build (verb) | 构建 | 建置 |
| detection | 检测 | 偵測 |
| feedback | 回馈 → **反馈** | 回饋 |
| video | 视频 | 影片 |
| resolution | 分辨率 | 解析度 |
| quality | 质量 | 品質 |
| memory | 内存 | 記憶體 |
| cache | 缓存 | 快取 |
| default | 默认 | 預設 |
| runtime | 运行时 | 執行期 |
| repository | 仓库 | 儲存庫 |
| rendered/video frame | 帧 | 影格 |
| animation frame / keyframe | 动画帧 / 关键帧 | 動畫幀 / 關鍵幀 |

## Role and positioning

| English | zh-Hans | zh-Hant (TW) |
|---|---|---|
| Gameplay Programmer | 游戏玩法程序员 | 遊戲程式設計師 |
| Game Developer | 游戏开发者 | 遊戲開發者 |
| Lead Programmer | 主程序 | 主程式 |
| Freelance / commission work | 外包 / 委托开发 | 接案 / 委託開發 |
| Portfolio | 作品集 | 作品集 |
| Case study | 项目详解 | 專案詳解 |
| Open to roles & internships | 求职与实习机会开放中 | 開放求職與實習機會 |
| Internship | 实习 | 實習 |

`案例研究` is avoided for "case study" — it reads as academic/consulting
jargon. `项目详解` / `專案詳解` is what a games portfolio would actually say.

## Engines and tools

| English | zh-Hans | zh-Hant (TW) |
|---|---|---|
| Unreal Engine 5 | 虚幻引擎 5 | 虛幻引擎 5 |
| Unity | Unity | Unity |
| Roblox / Roblox Studio | Roblox | Roblox |
| Blueprints | 蓝图 | 藍圖 |
| game engine | 游戏引擎 | 遊戲引擎 |
| editor | 编辑器 | 編輯器 |
| Inspector | Inspector 面板 | Inspector 面板 |
| Unity UI Toolkit | UI Toolkit | UI Toolkit |
| Unreal UI widgets (generic) | Widget UI / UI Widget | Widget UI / UI Widget |

Do not call Unreal widgets `UIToolkit`. **UI Toolkit is a Unity product name.**
Where the English source does not prove that an Unreal project used UMG, use
the accurate generic `Widget UI` rather than inventing a subsystem.

## Gameplay and design

| English | zh-Hans | zh-Hant (TW) |
|---|---|---|
| gameplay | 玩法 | 玩法 |
| game feel | 手感 | 手感 |
| combat | 战斗 | 戰鬥 |
| movement | 移动 | 移動 |
| character controller | 角色控制器 | 角色控制器 |
| jump buffer | 跳跃缓冲 | 跳躍緩衝 |
| coyote time | Coyote Time（跳跃宽限） | Coyote Time（跳躍寬限） |
| hit stop | Hit Stop（命中停顿） | Hit Stop（命中停頓） |
| forgiving mechanics | 容错机制 | 容錯機制 |
| hit feedback | 打击反馈 | 打擊回饋 |
| VFX | 特效 | 特效 |
| SFX | 音效 | 音效 |
| HUD | HUD | HUD |
| boss fight | Boss 战 | Boss 戰 |
| endless runner | 无尽跑酷 | 無盡跑酷 |
| platformer | 平台跳跃游戏 | 平台遊戲 |
| top-down | 俯视角 | 俯視角 |
| side-scroller | 横版卷轴 | 橫向捲軸 |
| FPS / first-person shooter | 第一人称射击 | 第一人稱射擊 |
| mod | 模组 | 模組 |
| game jam | Game Jam | Game Jam |

`Coyote Time` and `Hit Stop` keep the English with a plain-language gloss on
first use only. Chinese game-development discussion commonly keeps the English
terms; literal labels such as `土狼时间` or the ambiguous `顿帧` read less
clearly to recruiters who are not gameplay specialists.

## Architecture and engineering

| English | zh-Hans | zh-Hant (TW) |
|---|---|---|
| architecture | 架构 | 架構 |
| design pattern | 设计模式 | 設計模式 |
| object pool | 对象池 | 物件池 |
| state machine | 状态机 | 狀態機 |
| singleton | 单例 | 單例 |
| data-driven | 数据驱动 | 資料驅動 |
| data asset | 数据资产 | 資料資產 |
| scalable | 可扩展 | 可擴充 |
| reusable | 可复用 | 可重複使用 |
| refactor | 重构 | 重構 |
| prototype | 原型 | 原型 |
| iteration | 迭代 | 迭代 |
| raycast | 射线检测 | 射線偵測 |
| ground detection | 地面检测 | 地面偵測 |
| collision | 碰撞 | 碰撞 |
| physics | 物理 | 物理 |
| gravity | 重力 | 重力 |
| enemy AI | 敌人 AI | 敵人 AI |
| projectile | 投射物 | 投射物 |
| gameplay checkpoint | 检查点 | 檢查點 |
| respawn | 重生 | 重生 |
| persistence / saving | 存档 | 存檔 |
| serialization | 序列化 | 序列化 |
| animation | 动画 | 動畫 |
| camera | 摄像机 | 攝影機 |
| shader | 着色器 | 著色器 |
| particle | 粒子 | 粒子 |

## Section headings used across case studies

| English | zh-Hans | zh-Hant (TW) |
|---|---|---|
| Quick Summary for Recruiters | 给招聘方的快速摘要 | 給招募方的快速摘要 |
| Quick Overview | 项目概览 | 專案概覽 |
| Overview | 概览 | 概覽 |
| Core Philosophy | 核心设计理念 | 核心設計理念 |
| Highlight Features | 亮点功能 | 亮點功能 |
| Technical Deep Dive | 技术细节 | 技術細節 |
| Technical Highlights | 技术亮点 | 技術亮點 |
| Architecture & Design Patterns | 架构与设计模式 | 架構與設計模式 |
| Technologies & Stack | 技术栈 | 技術堆疊 |
| Tools & Technologies | 工具与技术 | 工具與技術 |
| Links & Resources | 相关链接 | 相關連結 |
| Team Structure | 团队分工 | 團隊分工 |
| Design Decisions | 设计决策 | 設計決策 |
| The Problem | 问题 | 問題 |
| The Solution | 解决方案 | 解決方案 |
| Result | 成果 | 成果 |
| Extras | 其他 | 其他 |

## What is deliberately NOT translated

- **External product and repository names.** Display titles may be translated
  when that makes the work immediately understandable (`Pixel Adventure` →
  `像素冒险` / `像素冒險`; descriptive framework titles are translated too),
  but names inside external links, repository references, and branded mod names
  remain unchanged so recruiters can cross-reference GitHub, itch.io, Roblox,
  and Nexus Mods.
- **Tag chips** (`Unity`, `C++`, `3D`, `FPS`, `AI`). Industry-standard in
  Latin script in both markets, and they double as filter keys in
  `projects/index.md`.
- **Raymond Cheng.** Latin name retained. If a Chinese name is supplied later
  it should appear as `Raymond Cheng（中文名）` on first use only.
- **The CV PDF**, which is an English document. The nav link keeps its English
  label with a Chinese qualifier so nobody clicks expecting Chinese.

## For the reviewer

Deliberate choices worth a second opinion are marked in the translated files
with an HTML comment:

```html
<!-- zh-review: reason this phrasing was chosen -->
```

Grep for `zh-review` to find every one of them. They are not TODOs — each is a
judgement call that a native speaker may want to overrule.
