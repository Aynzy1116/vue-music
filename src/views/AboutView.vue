<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="store.increment">单击加1</button>
    <button @click="store.aaa(3)">单击加3</button>
    <div>单:{{ count }}</div>
    <div>double:{{ doubleCount }}</div>
    <button @click="setTe">设置为10</button>
    <button @click="setStore">改变store</button>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useCounterStore } from '@/stores/counter.js'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { count, doubleCount } = storeToRefs(store)
const setTe = () => {
  store.count = 10
  console.log(store);
  console.log('increment', store.increment);
  console.log('aaa', store.aaa);
}
const setStore = () => {
  store.$patch((state) => {
    console.log('state', state);
    state.count = 123
    state.name = '西安市'
  })
  console.log('store', store);
}
watch(
  () => store.count,
  () => {
    console.log('count', store.count);
    console.log('doubleCount', store.doubleCount);
  }
)
</script>

<style></style>