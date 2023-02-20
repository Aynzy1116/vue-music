import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('小度')
  const item = reactive([1, 2, 3])
  const doubleCount = computed(() => count.value * 2)
  function increment () {
    count.value++
  }
  const aaa = (value) => {
    console.log('value', value);
    count.value += value
  }


  return { count, name, item, doubleCount, increment, aaa }
})
