<template>
  <MyHeader/>
  <div class="favorites">

    <MyHeading title="Избраное" class="favorite__title"/>
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
      <a href="https://t.me/lagom_wear">Перейти в Telegram</a>
    </my-button>
    
  </div>
  <MyFooter/>
</template>

<script setup>
  import MyFooter from "@/components/MyFooter.vue"
  import MyHeader from "@/components/MyHeader.vue"
  import CardItem from "@/components/CardItem.vue"
  import MyButton from "@/components/UI/MyButton.vue"
  import MyHeading from "@/components/UI/MyHeading.vue"
  
  const STORAGE_KEY = "favoriteItems"  
  const favoriteItems = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
</script>

<style scoped>

  .favorites{
    height: 100vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
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

  .favourite__btn a{
    color: #66433F;
    text-decoration: none;  
  }
</style>