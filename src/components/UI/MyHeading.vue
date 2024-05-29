<template>
  <p>{{title}}</p>
</template>

<script setup>
  defineProps({
    title: String
  })
</script>
  
<style scoped>
  /* Можно использовать этот компонент как загаловок */
  p{
    font-size: 3.125rem;
  }
</style>