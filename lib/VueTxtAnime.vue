<script lang="ts" setup>
import { defineOptions, defineProps, onMounted, ref, withDefaults } from 'vue'
import type { TxtAnimeOptions } from 'txtanime.js'
import { TxtAnime } from 'txtanime.js'

defineOptions({
  name: 'VueTxtAnime',
})

const props = withDefaults(defineProps<{
  options?: TxtAnimeOptions
}>(), {
  options: () => ({
    effect: 'txt-an-1',
  }),
})

const elRef = ref<HTMLDivElement>()

onMounted(() => {
  void new TxtAnime(elRef.value!, props.options)
})
</script>

<template>
  <div ref="elRef">
    <slot />
  </div>
</template>
