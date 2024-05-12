<template>
  <MyHeader/>
  
  <div class="card__list">
    <!--<MyHeading title="Наши новинки"/>
    <CardList 
      :items="items"/>
    <MyHeading title="Новая колекция "/>
    <CardList 
      :items="items"/>-->
    <MyHeading title="Наши хиты"/>
    <CardList 
      :items="items"/>
  </div>
  
  <MyFooter/>
</template>

<script setup>
  import {onMounted, ref} from "vue"
  
  import MyFooter from "@/components/MyFooter.vue"
  import MyHeader from "@/components/MyHeader.vue"
  import CardList from "@/components/CardList.vue"
  import MyHeading from "@/components/UI/MyHeading.vue"
  import axios from "axios"
  
  const items = ref([]); 

  onMounted(async () => {
    try {
      const response = await axios.get('https://460e28092cf83f01.mokky.dev/catalog');
      items.value = response.data
    } catch (error) {
      console.log(error);
    }
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