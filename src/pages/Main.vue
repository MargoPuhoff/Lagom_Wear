<template>
  <MyHeader/>
  <div class="main">
    
    <div class="main__banner">
      <div class="main__banner-p">
        <h2>Lagom Wear | Оверсайз одежда</h2>
        <p>Базовая женская оверсайз одежда из<br>премиального хлопка</p>
      </div>
    </div>
    
    <CardList/>
    
  </div>
  <MyFooter/>
</template>

<script>
import MyFooter from "@/components/MyFooter.vue"
import MyHeader from "@/components/MyHeader.vue"
import CardList from "@/components/CardList.vue"
  
export default{
  
  components:{
    MyFooter, MyHeader, CardList
  } 
  
}
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
</style>