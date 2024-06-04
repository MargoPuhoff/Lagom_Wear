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
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 3.125rem;
  }

 .favorite__title{
   margin: auto;
 }
</style>