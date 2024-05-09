<template>
  <MyHeader/>
  <!--<Favourites/>-->
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
  
  const fetchFavorite = async () => {
    try {
      
      const {data: favorites} = await axios.get('https://460e28092cf83f01.mokky.dev/favorites');
      
      items.value = items.value.map((item) => {
        const favorite = favorites.find((favorite) => favorite.parentId === item.id)

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

  const addToFavorite = async (item) => {
    item.isFavorite = !item.isFavorite;
  };

  const fetchCard = async () => {
    try {
      const response = await axios.get('https://460e28092cf83f01.mokky.dev/items');
      items.value = response.data.map((obj) => ({
        ...obj,
        isFavorite: false
      }));
    } catch (error) {
      console.log(error);
    }
  };

  onMounted(async () => {
    await fetchCard();
    await fetchFavorite();
  });

  provide('addToFavorite', addToFavorite);
  
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