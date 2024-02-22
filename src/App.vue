<script setup lang="ts">
import VueTxtAnime from '../dist/vue-txt-anime'
</script>

<template>
  <VueTxtAnime class="txt" :options="{ effect: 'txt-an-2' }">
    <span>Hello World!</span>
  </VueTxtAnime>
</template>

<style scoped>
.txt {
  font-size: 4em;
  font-weight: 700;
  color: #e6d820;
}
</style>
