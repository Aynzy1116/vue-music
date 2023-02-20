<script setup>
import { RouterView } from 'vue-router'
import LeftBar from './components/LeftBar/LeftBar.vue';
</script>

<template>
  <div class="app">
    <div class="flex">
      <LeftBar />
      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  width: 100vw;
  min-height: 100vh;
}
</style>