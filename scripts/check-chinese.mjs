#!/usr/bin/env node
/**
 * CHINESE LOCALE AUDIT
 * ---------------------------------------------------------------------------
 *   npm run check:zh
 *
 * Catches the defects that make a Chinese translation read as machine output,
 * mechanically, so 20,000 words do not have to be re-read by eye on every
 * change.
 *
 * Scoped to the two MQM dimensions a script can actually decide —
 * TERMINOLOGY and LOCALE CONVENTIONS. (Multidimensional Quality Metrics is the
 * standard translation-QA framework; its other five dimensions — accuracy,
 * style, audience, linguistic convention, markup — need a human.)
 *
 * WHY THIS EXISTS
 * Simplified and Traditional are not a character mapping. 程序/程式,
 * 软件/軟體, 项目/專案 are different WORDS, all valid Chinese, and using the
 * mainland one in a Taiwan document is invisible to a spell-checker and
 * instantly obvious to a reader. That is precisely the failure this catches.
 *
 * DESIGN NOTE — why the lists are short
 * A first version pasted in large Simplified/Traditional character tables and
 * drowned in false positives: the tables contained Latin letters and, worse,
 * characters that are valid in BOTH scripts (只 常 骨 作 台 秘 沉 干). Every
 * entry below is hand-verified as existing in one script only. A small correct
 * list beats a large noisy one — a check nobody trusts gets ignored.
 */
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

const errors = []
const warnings = []
const err = (f, m) => errors.push(`${f}: ${m}`)
const warn = (f, m) => warnings.push(`${f}: ${m}`)

/**
 * Hand-verified single-script characters, common enough to appear in this
 * site's vocabulary. Each is the SIMPLIFIED form; its Traditional counterpart
 * follows. Both directions are derived from this one table.
 */
const CHAR_PAIRS = [
  ['这', '這'], ['个', '個'], ['们', '們'], ['时', '時'], ['说', '說'],
  ['开', '開'], ['关', '關'], ['门', '門'], ['问', '問'], ['间', '間'],
  ['车', '車'], ['东', '東'], ['马', '馬'], ['长', '長'], ['风', '風'],
  ['飞', '飛'], ['语', '語'], ['读', '讀'], ['写', '寫'], ['学', '學'],
  ['会', '會'], ['体', '體'], ['发', '發'], ['头', '頭'], ['无', '無'],
  ['与', '與'], ['业', '業'], ['从', '從'], ['众', '眾'], ['传', '傳'],
  ['价', '價'], ['动', '動'], ['务', '務'], ['单', '單'], ['变', '變'],
  ['发', '發'], ['图', '圖'], ['团', '團'], ['场', '場'], ['坏', '壞'],
  ['声', '聲'], ['处', '處'], ['备', '備'], ['实', '實'], ['对', '對'],
  ['导', '導'], ['岁', '歲'], ['师', '師'], ['带', '帶'], ['帮', '幫'],
  ['张', '張'], ['归', '歸'], ['当', '當'], ['录', '錄'], ['认', '認'],
  ['让', '讓'], ['论', '論'], ['设', '設'], ['访', '訪'], ['证', '證'],
  ['译', '譯'], ['试', '試'], ['话', '話'], ['请', '請'], ['调', '調'],
  ['费', '費'], ['资', '資'], ['质', '質'], ['购', '購'], ['贵', '貴'],
  ['买', '買'], ['货', '貨'], ['软', '軟'], ['转', '轉'], ['输', '輸'],
  ['还', '還'], ['连', '連'], ['进', '進'], ['远', '遠'], ['选', '選'],
  ['银', '銀'], ['错', '錯'], ['闭', '閉'], ['闻', '聞'], ['阅', '閱'],
  ['际', '際'], ['陆', '陸'], ['阳', '陽'], ['阶', '階'], ['难', '難'],
  ['静', '靜'], ['验', '驗'], ['鱼', '魚'], ['鸟', '鳥'], ['龙', '龍'],
  ['点', '點'], ['热', '熱'], ['爱', '愛'], ['现', '現'], ['电', '電'],
  ['画', '畫'], ['盘', '盤'], ['监', '監'], ['种', '種'], ['积', '積'],
  ['称', '稱'], ['稳', '穩'], ['穷', '窮'], ['竞', '競'], ['笔', '筆'],
  ['简', '簡'], ['类', '類'], ['紧', '緊'], ['红', '紅'], ['级', '級'],
  ['纪', '紀'], ['纯', '純'], ['线', '線'], ['练', '練'], ['组', '組'],
  ['细', '細'], ['织', '織'], ['终', '終'], ['经', '經'], ['结', '結'],
  ['绕', '繞'], ['给', '給'], ['络', '絡'], ['绝', '絕'], ['统', '統'],
  ['维', '維'], ['综', '綜'], ['绿', '綠'], ['缓', '緩'], ['编', '編'],
  ['缩', '縮'], ['继', '繼'], ['续', '續'], ['网', '網'], ['罗', '羅'],
  ['职', '職'], ['联', '聯'], ['聪', '聰'], ['肃', '肅'], ['胜', '勝'],
  ['脑', '腦'], ['脚', '腳'], ['艰', '艱'], ['艺', '藝'], ['节', '節'],
  ['虽', '雖'], ['补', '補'], ['装', '裝'], ['觉', '覺'], ['计', '計'],
  ['订', '訂'], ['议', '議'], ['讯', '訊'], ['记', '記'], ['讲', '講'],
  ['许', '許'], ['诉', '訴'], ['识', '識'], ['词', '詞'], ['详', '詳'],
  ['误', '誤'], ['说', '說'], ['课', '課'], ['谁', '誰'], ['谈', '談'],
  ['谢', '謝'], ['贝', '貝'], ['负', '負'], ['贡', '貢'], ['财', '財'],
  ['责', '責'], ['贤', '賢'], ['败', '敗'], ['账', '賬'], ['贩', '販'],
  ['贫', '貧'], ['贮', '貯'], ['贯', '貫'], ['贴', '貼'], ['贷', '貸'],
  ['贸', '貿'], ['贺', '賀'], ['赋', '賦'], ['赏', '賞'], ['赐', '賜'],
  ['赔', '賠'], ['赖', '賴'], ['赚', '賺'], ['赛', '賽'], ['赞', '贊'],
  ['赠', '贈'], ['赢', '贏'], ['跃', '躍'], ['践', '踐'], ['踪', '蹤'],
  ['轮', '輪'], ['轻', '輕'], ['载', '載'], ['较', '較'], ['辅', '輔'],
  ['辑', '輯'], ['输', '輸'], ['辖', '轄'], ['辞', '辭'], ['辩', '辯'],
  ['边', '邊'], ['达', '達'], ['过', '過'], ['迈', '邁'], ['运', '運'],
  ['违', '違'], ['迟', '遲'], ['适', '適'], ['递', '遞'], ['遗', '遺'],
  ['释', '釋'], ['针', '針'], ['钟', '鐘'], ['钢', '鋼'], ['铁', '鐵'],
  ['铺', '鋪'], ['链', '鏈'], ['销', '銷'], ['锁', '鎖'], ['锅', '鍋'],
  ['锋', '鋒'], ['锐', '銳'], ['错', '錯'], ['键', '鍵'], ['镜', '鏡'],
  ['队', '隊'], ['阴', '陰'], ['阵', '陣'], ['隐', '隱'], ['雾', '霧'],
  ['韩', '韓'], ['页', '頁'], ['顶', '頂'], ['项', '項'], ['顺', '順'],
  ['预', '預'], ['领', '領'], ['颇', '頗'], ['频', '頻'], ['题', '題'],
  ['颜', '顏'], ['额', '額'], ['显', '顯'], ['饭', '飯'], ['馆', '館'],
  ['驱', '驅'], ['驶', '駛'], ['骑', '騎'], ['惊', '驚'], ['验', '驗'],
  ['齐', '齊'], ['齿', '齒'], ['农', '農'], ['冲', '衝'], ['决', '決'],
  ['况', '況'], ['减', '減'], ['划', '劃'], ['医', '醫'], ['华', '華'],
  ['卖', '賣'], ['参', '參'], ['双', '雙'], ['号', '號'],
  ['叶', '葉'], ['吗', '嗎'], ['员', '員'], ['响', '響'], ['园', '園'],
  ['坚', '堅'], ['报', '報'], ['够', '夠'], ['宁', '寧'], ['宝', '寶'],
  ['宽', '寬'], ['寻', '尋'], ['将', '將'], ['尔', '爾'], ['层', '層'],
  ['属', '屬'], ['岛', '島'], ['币', '幣'], ['应', '應'], ['废', '廢'],
  ['异', '異'], ['弹', '彈'], ['强', '強'], ['忆', '憶'], ['怀', '懷'],
  ['总', '總'], ['恒', '恆'], ['战', '戰'], ['户', '戶'], ['执', '執'],
  ['扩', '擴'], ['扫', '掃'], ['扬', '揚'], ['护', '護'], ['担', '擔'],
  ['拟', '擬'], ['择', '擇'], ['挥', '揮'], ['损', '損'], ['换', '換'],
  ['据', '據'], ['损', '損'], ['摆', '擺'], ['数', '數'], ['旧', '舊'],
  ['显', '顯'], ['术', '術'], ['机', '機'], ['杀', '殺'], ['杂', '雜'],
  ['权', '權'], ['条', '條'], ['来', '來'], ['极', '極'], ['构', '構'],
  ['标', '標'], ['栈', '棧'], ['样', '樣'], ['检', '檢'], ['楼', '樓'],
  ['横', '橫'], ['欢', '歡'], ['欧', '歐'], ['残', '殘'], ['毁', '毀'],
  ['气', '氣'], ['汇', '匯'], ['汉', '漢'], ['泽', '澤'], ['济', '濟'],
  ['测', '測'], ['浓', '濃'], ['温', '溫'], ['满', '滿'], ['滤', '濾'],
  ['灭', '滅'], ['灯', '燈'], ['灵', '靈'], ['炼', '煉'], ['烧', '燒'],
  ['独', '獨'], ['环', '環'], ['产', '產'], ['疗', '療'], ['痒', '癢'],
  ['皱', '皺'], ['盖', '蓋'], ['矿', '礦'], ['码', '碼'],
  ['础', '礎'], ['礼', '禮'], ['离', '離'], ['竖', '豎'],
  ['筑', '築'], ['签', '簽'], ['篮', '籃'], ['粮', '糧'], ['纸', '紙']
]

const SIMPLIFIED_ONLY = new Set(CHAR_PAIRS.map(([s]) => s))
const TRADITIONAL_ONLY = new Set(CHAR_PAIRS.map(([, t]) => t))
// Deliberately NOT listed above, because they are context-dependent rather
// than script-dependent and only ever produced false positives:
//   台/臺 — Taiwan writes 平台 (platform) with 台; 臺 is for place names.
//   秘/祕 — both current in Taiwan (神秘 is normal).
//   着/著 — 著 is used in both scripts (显著, 著名).
// Drop any accidental overlap too, so the check only fires on unambiguous cases.
for (const c of [...SIMPLIFIED_ONLY]) {
  if (TRADITIONAL_ONLY.has(c)) { SIMPLIFIED_ONLY.delete(c); TRADITIONAL_ONLY.delete(c) }
}

/**
 * Terminology that differs by market. [Simplified, Traditional, meaning].
 *
 * `except` lists compounds where the "wrong" string is actually correct in the
 * other locale because the morpheme means something different there. The one
 * that matters here: 程序化生成 is "PROCEDURAL generation" — 程序 in that
 * compound means "procedure", which is correct Taiwanese. Without the
 * exception the audit flags every procedural-generation heading.
 */
const TERM_PAIRS = [
  ['程序', '程式', 'program', ['程序化', '程序生成']],
  ['代码', '程式碼', 'source code'],
  ['脚本', '腳本', 'script'],
  ['软件', '軟體', 'software'],
  ['项目', '專案', 'project'],
  ['对象', '物件', 'object'],
  ['组件', '元件', 'component'],
  ['模块', '模組', 'module'],
  ['接口', '介面', 'interface'],
  ['性能', '效能', 'performance'],
  ['优化', '最佳化', 'optimise'],
  ['数据', '資料', 'data'],
  ['变量', '變數', 'variable'],
  ['函数', '函式', 'function'],
  ['类', '類別', 'class'],
  ['数组', '陣列', 'array'],
  ['循环', '迴圈', 'loop'],
  ['调试', '除錯', 'debug'],
  ['检测', '偵測', 'detection'],
  ['视频', '影片', 'video'],
  ['内存', '記憶體', 'memory'],
  ['缓存', '快取', 'cache'],
  ['默认', '預設', 'default'],
  ['分辨率', '解析度', 'resolution'],
  ['质量', '品質', 'quality'],
  ['运行时', '執行期', 'runtime'],
  ['菜单', '選單', 'menu'],
  ['网络', '網路', 'network'],
  ['仓库', '儲存庫', 'repository']
]

// Phrases that are valid characters but poor portfolio terminology. These are
// deliberately tiny and evidence-backed: each has a clearer recruiter-facing
// replacement recorded in the glossary.
const FORBIDDEN_TERMS = {
  zh: [
    ['顿帧', 'Hit Stop（命中停顿）'],
    ['土狼时间', 'Coyote Time（跳跃宽限）'],
    ['性能自觉', '注重性能'],
    ['生产级', '可投入正式项目'],
    ['UIToolkit Widget', 'Widget UI（Unreal）或 UI Toolkit（Unity）']
  ],
  'zh-Hant': [
    ['頓幀', 'Hit Stop（命中停頓）'],
    ['土狼時間', 'Coyote Time（跳躍寬限）'],
    ['效能自覺', '注重效能'],
    ['正式級', '可投入正式專案'],
    ['UIToolkit Widget', 'Widget UI（Unreal）或 UI Toolkit（Unity）']
  ]
}

/**
 * Strips everything that is legitimately not Chinese prose — fenced code,
 * inline code, HTML tags and attributes, URLs, frontmatter, and review
 * comments. Without this the audit drowns in C++ and Unreal identifiers.
 */
const proseOnly = (src) =>
  src
    .replace(/^---[\s\S]*?^---/m, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`\n]*`/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/\{\.[^}]*\}/g, ' ')

const LOCALES = [
  { key: 'zh', name: 'Simplified', dirs: ['zh', 'zh/projects'] },
  { key: 'zh-Hant', name: 'Traditional', dirs: ['zh-Hant', 'zh-Hant/projects'] }
]

async function main() {
  let filesChecked = 0

  for (const locale of LOCALES) {
    const isSimplified = locale.key === 'zh'
    const wrongChars = isSimplified ? TRADITIONAL_ONLY : SIMPLIFIED_ONLY
    const wrongLabel = isSimplified ? 'Traditional' : 'Simplified'

    for (const dir of locale.dirs) {
      let files
      try {
        files = (await readdir(dir)).filter((f) => f.endsWith('.md'))
      } catch {
        continue
      }

      for (const file of files) {
        const rel = path.join(dir, file)
        const prose = proseOnly(await readFile(rel, 'utf8'))
        filesChecked++

        // 1. character-set leakage
        const bad = new Map()
        for (const ch of prose) {
          if (wrongChars.has(ch)) bad.set(ch, (bad.get(ch) ?? 0) + 1)
        }
        if (bad.size) {
          const list = [...bad.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(([c, n]) => `${c}×${n}`)
            .join(' ')
          err(rel, `${wrongLabel} characters in a ${locale.name} page: ${list}`)
        }

        // 2. terminology leakage
        for (const [cn, tw, meaning, except = []] of TERM_PAIRS) {
          const wrong = isSimplified ? tw : cn
          const right = isSimplified ? cn : tw
          if (!prose.includes(wrong)) continue

          // Remove the legitimate compounds before counting.
          let probe = prose
          for (const ok of except) probe = probe.split(ok).join(' ')
          const n = probe.split(wrong).length - 1
          if (n > 0) {
            err(
              rel,
              `"${wrong}" (${wrongLabel} term for "${meaning}") ×${n} — ` +
                `${locale.name} uses "${right}"`
            )
          }
        }

        // 3. known ambiguous or machine-like portfolio phrasing
        for (const [bad, preferred] of FORBIDDEN_TERMS[locale.key] ?? []) {
          const n = prose.split(bad).length - 1
          if (n > 0) {
            err(rel, `ambiguous term "${bad}" ×${n} — prefer "${preferred}"`)
          }
        }
      }
    }
  }

  console.log(`\nChinese locale audit — ${filesChecked} files`)
  console.log('MQM dimensions covered: terminology, locale conventions\n')

  if (warnings.length) {
    console.log(`${warnings.length} warning(s):`)
    for (const w of warnings) console.log(`   ~ ${w}`)
    console.log('')
  }

  if (errors.length) {
    console.log(`${errors.length} error(s):`)
    for (const e of errors) console.log(`   x ${e}`)
    console.log('')
    process.exit(1)
  }

  console.log('All clean.\n')
}

main()
