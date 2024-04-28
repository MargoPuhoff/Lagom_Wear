<template>
  <p>{{title}}</p>
</template>

<script setup>
  defineProps({
    title: String
  })
</script>
  
<style scoped>
  p{
    font-size: 3.125rem;
  }
</style>