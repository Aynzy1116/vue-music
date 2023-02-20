<template>
  <div>
    <Wather ref="ww" :name="name" @AAA="getValue" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Wather from '@/views/Wather.vue'

const name = ref('小豆芽')

const getValue = (value) => {
  console.log('value', value);
  console.log('name', name);
  name.value = value.name + '12'
}

const ww = ref()
console.log('子组件的值', ww);

</script>

<style scoped></style>