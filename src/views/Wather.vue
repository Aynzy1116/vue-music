<template>
  <div>
    {{ name }}
    <button @click="emitA">向父组件传值</button>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
// 获取父组件传过来的值
const props = defineProps({
  name: String
})

// 向父组件传值
const params = reactive({ 'name': 123 })
const emit = defineEmits(['AAA'])
const emitA = () => {
  emit('AAA', params)
}

// 暴露属性给父组件给
const bbb = ref('我是bbb')
defineExpose({ bbb })


</script>

<style scoped></style>