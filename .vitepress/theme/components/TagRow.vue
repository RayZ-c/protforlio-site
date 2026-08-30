<script setup>
/**
 * PROJECT TAG ROW
 * ---------------------------------------------------------------------------
 * Replaces a 15-line chain of inline ternaries that mapped each tag to one of
 * nine colour classes (cyan, purple, green, red, yellow, lime, indigo, grey…).
 * That palette contradicted the site's two-accent rule and had to be edited in
 * the template every time a tag was added.
 *
 * The colour still carries meaning — that is what the original was reaching
 * for — but within the palette:
 *
 *   orange  engine or language   (what a recruiter filters on first)
 *   blue    genre or discipline
 *   grey    status
 *
 * Anything unrecognised falls back to grey rather than going uncoloured, so a
 * new tag looks deliberate on the day it is added.
 */
const ENGINE = new Set([
  'Unity', 'Unreal', 'Unreal Engine 5', 'Roblox',
  'C#', 'C++', 'Lua', 'Blueprints',
  // Chinese locales. Engine and language names stay in Latin script, so only
  // the handful that genuinely localise appear here.
  '虚幻引擎', '虛幻引擎', '虚幻引擎 5', '虛幻引擎 5',
  '蓝图', '藍圖'
])

const DISCIPLINE = new Set([
  '2D', '3D', 'FPS', 'Top-Down', 'Side-Scroller',
  'Action', 'Movement', 'AI', 'Combat', 'VFX', 'SFX', 'UI',
  // Chinese genre / discipline tags. Simplified and Traditional are listed
  // side by side rather than normalised: they are separate strings to the
  // browser, and a missing one would silently fall through to grey.
  '动作', '動作',            // action
  '移动', '移動',            // movement
  '战斗', '戰鬥',            // combat
  '手感',                            // game feel (same both)
  '横版', '橫向捲軸',  // side-scroller
  '俯视角', '俯視角',  // top-down
  '特效',                            // VFX (same both)
  '音效'                             // SFX (same both)
])

defineProps({
  tags: { type: Array, default: () => [] }
})

const toneOf = (tag) => {
  if (ENGINE.has(tag)) return 'hx-tag--warm'
  if (DISCIPLINE.has(tag)) return 'hx-tag--cool'
  return ''
}
</script>

<template>
  <ul v-if="tags.length" class="hx-tagrow">
    <li v-for="tag in tags" :key="tag" class="hx-tag" :class="toneOf(tag)">{{ tag }}</li>
  </ul>
</template>
