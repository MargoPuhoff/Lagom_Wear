<template>
  <!--<CardList 
  :items="favorites"
  class="card__item"/>-->
</template>

<script setup>
  /*import {onMounted, ref} from "vue"
  import axios from "axios"
  import CardList from "@/components/CardList.vue"
  
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
  .card__item{
    margin-top: 1.2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    box-shadow: 0 0 5px #66433F;
  }

  .card__item-img{
    width: 45%;
    height: 15vh;
    cursor: pointer;
  }

  .card__item-img img{
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }

  .card__item-info b{
    font-size: 1.25rem;
  }

  .card__item-icon{
    align-self: flex-end;
    cursor: pointer;
  }
</style>