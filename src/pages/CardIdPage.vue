<template>
  <MyHeader/>
  
  <div>
    <h1>Товар номер {{ productId }}</h1>
    
    <div>
      <img :src="item.imgUrl"/>
    </div>
    <div>
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