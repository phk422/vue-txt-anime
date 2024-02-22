<script lang="ts" setup>
import { defineProps, onMounted, ref, withDefaults } from 'vue'
import type { TxtAnimeOptions } from 'txtanime.js'
import { TxtAnime } from 'txtanime.js'

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

<script lang="ts">
export default {
  name: 'VueTxtAnime',
}
</script>

<template>
  <div ref="elRef">
    <slot />
  </div>
</template>
