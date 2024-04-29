<template>
  <MyHeader/>
  <Favourites/>
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
    <CardList/>
  </div>
  
  <MyFooter/>
</template>

<script>
import MyFooter from "@/components/MyFooter.vue"
import MyHeader from "@/components/MyHeader.vue"
import CardList from "@/components/CardList.vue"
import MyHeading from "@/components/UI/MyHeading.vue"
import Favourites from "@/components/Favourites.vue"
  
export default{
  
  components:{
    MyFooter, MyHeader, 
    CardList, MyHeading, Favourites
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

  .card__list{
    padding: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #807A80;
  }
</style>