<template>
  <MyHeader/>
  
  <div class="delivery__banner">Доставка</div>
  <div class="delivery__info">
    
    <MyBlock
      blockImg="src/img/png/delivery__img1.png"
      text="Maecenas ut faucibus tellus. Aliquam urna ipsum, dictum vel dolor sit amet, feugiat luctus nunc. Etiam tincidunt lacus auctor purus mollis, a accumsan lectus iaculis. Phasellus imperdiet nisi sit amet neque aliquet faucibus. Vivamus eleifend neque ac libero ultrices, at eleifend augue auctor. Maecenas sit amet dapibus ligula. Suspendisse posuere mollis nunc. Curabitur faucibus, risus vel convallis accumsan, turpis elit sagittis purus, vel porta nibh est vel orci. Cras eget nibh dolor. Aenean fermentum nibh ut lorem pretium euismod. Quisque at est massa."/>

    <MyBlock
      blockImg="src/img/png/delivery__img2.png"
      text="Maecenas ut faucibus tellus. Aliquam urna ipsum, dictum vel dolor sit amet, feugiat luctus nunc. Etiam tincidunt lacus auctor purus mollis, a accumsan lectus iaculis. Phasellus imperdiet nisi sit amet neque aliquet faucibus. Vivamus eleifend neque ac libero ultrices, at eleifend augue auctor. Maecenas sit amet dapibus ligula. Suspendisse posuere mollis nunc. Curabitur faucibus, risus vel convallis accumsan, turpis elit sagittis purus, vel porta nibh est vel orci. Cras eget nibh dolor. Aenean fermentum nibh ut lorem pretium euismod. Quisque at est massa."
      class="left"/>
  </div>
  
  <MyFooter/>
</template>

<script setup>
  import MyFooter from "@/components/MyFooter.vue"
  import MyHeader from "@/components/MyHeader.vue"
  import MyBlock from "@/components/MyBlock.vue"
  
</script>

<style scoped>
  .delivery__banner{
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9.3rem;
    border-bottom: 2px solid linear-gradient(#F8DAD1 to #714133);
    color: #252020;
    background: #F8DAD1;
  }

  .delivery__info{
    margin: 10rem auto;
    width: 80%;
  }
</style>