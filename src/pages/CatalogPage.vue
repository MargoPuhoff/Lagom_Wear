<template>
  <MyHeader/>
  
  <div class="card__list">
    <MyHeading title="Наши хиты"/>
    <CardList 
      :items="items"
      @addToFavorite="addToFavorite"/>
  </div>
  
  <MyFooter/>
</template>

<script setup>
  import {onMounted, ref, provide} from "vue"
  
  import MyFooter from "@/components/MyFooter.vue"
  import MyHeader from "@/components/MyHeader.vue"
  import CardList from "@/components/CardList.vue"
  import MyHeading from "@/components/UI/MyHeading.vue"
  import axios from "axios"
  
  const items = ref([]); 
  
  const STORAGE_KEY = "favoriteItems"  
  const favoriteItems = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  
  const addToFavorite = (item) => {
    try {
    
      const index = favoriteItems.findIndex((favItem) => favItem.id === item.id);
      item.isFavorite = !item.isFavorite;
      
      if (index !== -1) {
          if (!favoriteItems[index].isFavorite) {
            favoriteItems.splice(index, 1); 
          } 
      } else {
          favoriteItems.push(item);
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteItems));
    } catch (error) {
      console.log(error);
    }
  }

  const loadFavoritesFromLocalStorage = () => {
    favoriteItems.forEach((savedItem) => {
      const itemIndex = items.value.findIndex((item) => item.id === savedItem.id);

      if (itemIndex !== -1) {
        items.value[itemIndex].isFavorite = true;
      }
    });
  }
  
  const fetchCard = async () => {
    try {
      const response = await axios.get(
        'https://460e28092cf83f01.mokky.dev/catalog'
      );

      items.value = response.data.map((obj) => ({
        ...obj,
        isFavorite: false,
        favoriteId: null
      }));
    } catch (error) {
      console.log(error);
    }
  };

  /*provide('card', {
    favoriteItems,
    addToFavorite,
    loadFavoritesFromLocalStorage
  })*/

  onMounted(async () => {
    await fetchCard();
    loadFavoritesFromLocalStorage()
  });
</script>

<style scoped>
  .card__list{
    padding: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #807A80;
  }
</style>