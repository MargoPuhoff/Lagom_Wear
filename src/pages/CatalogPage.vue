<template>
  <MyHeader/>
  
  <div class="card__list">
    <MyHeading title="Наши новинки"/>
    <CardList/>
    <MyHeading title="Новая колекция "/>
    <CardList/>
    <MyHeading title="Наши хиты"/>
    <CardList/>
  </div>
  
  <MyFooter/>
</template>

<script>
import MyFooter from "@/components/MyFooter.vue"
import MyHeader from "@/components/MyHeader.vue"
import CardList from "@/components/CardList.vue"
import MyHeading from "@/components/UI/MyHeading.vue"

export default{

  components:{
    MyFooter, MyHeader, CardList, MyHeading
  } 

}
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