<script setup lang="ts">
import VueTxtAnime from '../dist/vue-txt-anime'
</script>

<template>
  <div class="container">
    <div class="card">
      <VueTxtAnime class="txt" :options="{ effect: 'txt-an-1' }">
        VueTxtAnime
      </VueTxtAnime>
    </div>
    <div class="card">
      <VueTxtAnime class="txt" :options="{ effect: 'txt-an-3' }">
        VueTxtAnime
      </VueTxtAnime>
    </div>
    <div class="card">
      <VueTxtAnime class="txt" :options="{ effect: 'txt-an-7', text: ['Vue', 'Txt', 'Anime'] }" />
    </div>
    <div class="card">
      <span style="margin-right: 4px;">i'm</span>
      <VueTxtAnime class="txt" style="color: #2196f3;" :options="{ effect: 'txt-an-8', text: ['Peng', 'Coder', 'Anime'] }" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  font-size: 3em;
  width: 350px;
  height: 110px;
  background-color: #d3eaff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 10px;
  margin: 10px;
}
.txt {
  font-weight: 700;
  /* color: #e6d820; */
}
</style>
