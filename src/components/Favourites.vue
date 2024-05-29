<template>
  <MyHeader/>
  <div class="favorites">
    
    <div class="favorites__head">
      <h2>Ваши сохраненки</h2>
    </div>
    
    <div class="favourite__items">
      <!-- Рендер избранные товары из массива -->
      <CardItem
        v-for="item in favoriteItems"
        :key="item.id"
        :title="item.title"
        :size="item.size"
        :price="item.price"
        :img-url="item.imgUrl"
        :is-favorite="item.isFavorite"/>
    </div>
    
    <my-button class="favourite__btn">
      Перейти к боту
    </my-button>
    
  </div>
  <MyFooter/>
</template>

<script setup>
  import MyFooter from "@/components/MyFooter.vue"
  import MyHeader from "@/components/MyHeader.vue"
  import CardItem from "@/components/CardItem.vue"
  
  const STORAGE_KEY = "favoriteItems"  
  const favoriteItems = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
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
    align-items: center;
  }
/* Div, в котором избранные */
  .favourite__items{
    padding: 0.5rem;
    display: flex;
    justify-content: space-around;
  }
</style>