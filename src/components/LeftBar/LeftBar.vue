<template>
  <div class="leftbar">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">我的收藏</RouterLink>
    <div @click="aaa">点击</div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, getCurrentInstance } from 'vue'
import { RouterLink } from 'vue-router'
import { routeJump } from '@/utils/utils.js'

const instance = getCurrentInstance()
const aaa = () => {
  instance.proxy.routeJump('/other')
}
</script>

<style scoped>
.leftbar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px;
  width: 120px;
  max-width: 200px;
  background: #81d4a2;

}
</style>