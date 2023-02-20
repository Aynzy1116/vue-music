<template>
  <div>我是other</div>
</template>

<script setup>
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()
  console.log('router', router);
  console.log('route', route.query);
  console.log('route', route.params);
</script>