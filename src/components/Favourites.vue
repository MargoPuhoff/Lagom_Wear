<template>
  <div class="favorites__back"></div>
  <div class="favorites">
    
    <div class="favorites__head">
      <h2>Ваши сохраненки</h2>
      <img
        @click="() => emit('closeFavorite')"
        width="50" height="50" 
        src="https://img.icons8.com/bubbles/50/close-window.png"/>
    </div>
    
    <div class="favourite__items">
      <FavouriteItem/>
    </div>
    
    <my-button class="favourite__btn">
      Перейти к боту
    </my-button>
    
  </div>
</template>

<script setup>
  import FavouriteItem from "@/components/FavouriteItem.vue"

  const emit = defineEmits(['closeFavorite']);
</script>

<style scoped>
  .favorites__back{
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9;
  }

  .favorites{
    padding: 2rem;
    height: 100vh;
    width: 20%;
    position: fixed;
    display: flex;
    flex-direction: column;
    
    top: 0;
    right: 0;
    color: #66433F;
    background: #E6CEB6;
    z-index: 99;
  }
  
  .favorites__head{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .favorites__head img{
    cursor: pointer;
    opacity: 0.7;
  }

  .favorites__head img:hover{
    opacity: 1;
  }

  .favourite__items{
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
  }
</style>