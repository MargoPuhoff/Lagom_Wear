<template>
  <MyHeader
    @openFavorite="openFavorite"/>
  <Favourites
    v-if="favoriteOpen"
    @closeFavorite="closeFavorite"/>
  
  <div class="card__list">
    <!--<MyHeading title="Наши новинки"/>
    <CardList 
      :items="items"/>
    <MyHeading title="Новая колекция "/>
    <CardList 
      :items="items"/>-->
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

  /*onMounted(async () => {
    try {
      const response = await axios.get('https://460e28092cf83f01.mokky.dev/catalog');
      items.value = response.data
    } catch (error) {
      console.log(error);
    }
  }); */
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

  provide('card', {
    card,
    addToFavorite
  })

  onMounted(async () => {
    await fetchCard();
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