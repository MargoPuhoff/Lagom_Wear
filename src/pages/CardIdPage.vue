<template>
  <MyHeader/>
  <!-- Здесь карточка товара (смотрит по id)-->
  <div class="card__item__id">
    
    <div class="card__item__id-img">
      <img :src="item.imgUrl"/>
    </div>
    <div class="card__item__id-p">
      <p>{{ item.size }}</p>
      <b>{{ item.title }}</b>
      <p>{{ item.price }}</p>
    </div>
    
  </div>
  
  <MyFooter/>
</template>
    
<script setup>
  
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import MyFooter from "@/components/MyFooter.vue"
  import MyHeader from "@/components/MyHeader.vue"
  import axios from "axios"

  const productId = ref(0);
  const item = ref([]); 
  
  const route = useRoute();
  const updateProductId = () => {
    productId.value = +route.params.id;
  };

  updateProductId();
  // Получение товара по id
  const fetchItem = async () => {
    try {
      const response = await axios.get(`https://460e28092cf83f01.mokky.dev/catalog/${productId.value}`);

      item.value = response.data;
      console.log(item)
    } catch (error) {
      console.error(error);
    }
  };

  onMounted(async () => {
    await fetchItem();
  });
</script>

<style scoped>
  /* Div, в котором картинка и информация по карточке  */
  .card__item__id{
    padding: 1rem;
    display: flex;
    align-items: center;
  }

  .card__item__id-img{
    width: 40%;
  }

  .card__item__id-img img{
    width: 100%;
  }

  .card__item__id-p{
    margin-left: 1rem;
  }
</style>