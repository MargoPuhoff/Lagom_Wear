<template>
    <div class="about__info-block">
      <p>{{ text }}</p>
      <img :src="blockImg">
    </div>
</template>

<script setup>
  import {defineProps} from "vue"
  
  defineProps({
    text: String,
    blockImg: String
  })
</script>

<style scoped>
  .about__info-block{
    display: flex;
    justify-content: center;
    align-items: center; 
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .about__info-block p{
    padding: 0 5.8rem;
    text-align: center;
  }

  .left {
    flex-direction: row-reverse; /* меняем порядок элементов */
  }

  @media screen and (max-width: 935px) {
    .about__info-block{
      padding-bottom: 4rem;
      flex-direction: column;
    }

    .about__info-block p{
      padding-bottom: 4rem;
    }
  }
  
</style>