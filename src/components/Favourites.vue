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
</template>

<script setup>
  import {onMounted, ref, inject} from "vue"
  
  import axios from "axios"
  import FavoriteItem from "@/components/FavoriteItem.vue"

  const emit = defineEmits(['closeFavorite', 'addToFavorite']);
  const {card} = inject('card');

/*  const emit = defineEmits(['closeFavorite']);
  const favortie = ref([]);

  onMounted(async () =>{
    try {
      const {data} = await axios.get(
        'https://460e28092cf83f01.mokky.dev/favorites?_relations=users'
      );

      favortie.value = data.map((obj) => obj.item);
    } catch (error) {
      console.log(error)
    }
  });*/
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