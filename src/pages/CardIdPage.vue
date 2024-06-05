<template>
  <MyHeader/>
  <!-- Здесь карточка товара (смотрит по id)-->
  
  
  <div class="card__item__id">  
    <div class="card__item__id-img">
      <img :src="item.imgUrl"/>
    </div>
    <div class="card__item__id-p">
      <b>{{ item.title }}</b>
      <p>Размеры: {{ item.size }}</p>
      <p class="discript">{{item.discript}}</p>
      <span class="price">{{ item.price }}</span>
      <span class="old_price">{{ item.old_price}}</span>
      <span class="price">{{ item.discount }}</span>
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
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .card__item__id-img{
    width: 30%;
  }

  .card__item__id-img img{
    width: 100%;
  }

  .card__item__id-p{
    margin-left: 2rem;
    font-size: 2.5rem;
    line-height: 180%;
    align-self: stretch;
  }

  .card__item__id-p b{
    font-size: 3rem;
  }

  .price{
    color: #CF2929;
  }

  .old_price{
    padding: 0 10px;
    font-size: 2rem;
    text-decoration: line-through;
    color: #7C7C7C;
  }

  .discript{
    line-height: 100%;
    font-size: 2rem;
  }
</style>