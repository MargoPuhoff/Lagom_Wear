<template>
  <MyHeader/>
  <div class="favorites">
    
    <div class="favorites__head">
      <h2>Ваши сохраненки</h2>
    </div>
    
    <div class="favourite__items">
      <FavoriteItem
        v-for="item in card"
        :key="item.id"
        :title="item.title"
        :size="item.size"
        :price="item.price"
        :img-url="item.imgUrl"
        :is-favorite="item.isFavorite"
        :onClickFavorite="() => emit('addToFavorite', item)"/>
    </div>
    
    <my-button class="favourite__btn">
      Перейти к боту
    </my-button>
    
  </div>
  <MyFooter/>
</template>

<script setup>
  import {onMounted, ref, inject} from "vue"
  
  import MyFooter from "@/components/MyFooter.vue"
  import MyHeader from "@/components/MyHeader.vue"
  import FavoriteItem from "@/components/FavoriteItem.vue"
  import axios from "axios"
  
  const emit = defineEmits(['closeFavorite', 'addToFavorite']);
  const card = inject('card');
</script>

<style scoped>

  .favorites{
    height: 100vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    color: #66433F;
    background: white;
  }
  
  .favorites__head{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .favourite__items{
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
  }
</style>