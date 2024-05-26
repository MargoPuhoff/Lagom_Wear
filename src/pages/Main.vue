<template>
  <MyHeader/>
  <div class="main">
    
    <div class="main__banner">
      <div class="main__banner-p">
        <h2>Lagom Wear | Оверсайз одежда</h2>
        <p>Базовая женская оверсайз одежда из<br>премиального хлопка</p>
      </div>
    </div>
    
  </div>
  <MyForm/>
  <MyFooter/>
</template>

<script setup>
  import MyFooter from "@/components/MyFooter.vue"
  import MyHeader from "@/components/MyHeader.vue"
  import MyForm from "@/components/UI/MyForm.vue"
</script>

<style scoped>
  .main__banner{
    height: 87vh;
    position: relative;
    background:#F8DAD1;
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
    color:black;
  }

  .main__banner-p p{
    font-size: 2.18rem;
    color:black;
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