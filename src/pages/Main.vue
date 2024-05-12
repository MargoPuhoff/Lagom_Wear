<template>
  <MyHeader
    @openFavorite="openFavorite"/>
  <Favourites 
    v-if="favoriteOpen"
    @closeFavorite="closeFavorite"/>
  <div class="main">
    
    <div class="main__banner">
      <div class="main__banner-p">
        <h2>Lagom Wear | Оверсайз одежда</h2>
        <p>Базовая женская оверсайз одежда из<br>премиального хлопка</p>
      </div>
    </div>
    
  </div>
  
  <div class="card__list">
    <MyHeading title="Наши новинки"/>
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
  import Favourites from "@/components/Favourites.vue"
  import axios from "axios"

  const items = ref([]); 
  const card = ref([]);
  const favoriteOpen = ref(false);
  
  const closeFavorite = () => {
    favoriteOpen.value = false
  };
  const openFavorite = () => {
    favoriteOpen.value = true
  };
  
  const fetchFavorite = async () => {
    try {
      
      const {data: favorites} = await axios.get(
        'https://460e28092cf83f01.mokky.dev/favorites'
      );
      
      items.value = items.value.map((item) => {
        const favorite = favorites.find((favorite) => favorite.item_id === item.id)

        if(!favorite){
          return item
        }
        
        return{
          ...item,
          isFavorite: true,
          favoriteId: favorite.id
        }
        
      })      
      console.log(items.value)
    } catch (error) {
      console.log(error);
    }
  }; 

/*  const addToFavorite = async (item) => {
    try {
      item.isFavorite = !item.isFavorite;
      
      if (item.isFavorite) {
        const obj = {
          item_id: item.id,
        };
        
        const {data} = await axios.post(
          'https://460e28092cf83f01.mokky.dev/favorites', obj
        );
        
        item.favoriteId = data.id;
      } else {
        await axios.delete(
          `https://460e28092cf83f01.mokky.dev/favorites/${item.favoriteId}`
        );
        
        item.favoriteId = null; 
      }; 
    } catch (error) {
      console.log(error)
    }
  }; */
  const addToFavorite = (item) => {
    try {
      item.isFavorite = !item.isFavorite;
      
      if (item.isFavorite){
        card.value.push(item);
      } else {
        card.value.splice(
          card.value.findIndex(item), 1)
      }
      
      console.log(card);
    } catch (error) {
      console.log(error)
    }
  }
  const fetchCard = async () => {
    try {
      const response = await axios.get(
        'https://460e28092cf83f01.mokky.dev/items'
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

  provide('card', {
    card,
    addToFavorite
  })
  
  onMounted(async () => {
    await fetchCard();
    await fetchFavorite();
  });
  
</script>

<style scoped>
  .main__banner{
    height: 80vh;
    position: relative;
    background: url(@/img/jpg/banner.jpg) 100% 100% no-repeat;
  }

  .main__banner-p{
    position: absolute;
    left: 10%;
    bottom: 20%;
    font-weight: 300;
    color: white;
  }

  .main__banner-p h2{
    font-size: 3.125rem;
  }

  .main__banner-p p{
    font-size: 2.18rem;
  }

  .card__list{
    padding: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #807A80;
  }
</style>