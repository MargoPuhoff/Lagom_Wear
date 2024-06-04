<template>
  <MyHeader/>
  
  <div class="about__banner">
    <p>Раскажем о нас</p>
  </div>
  <div class="about__info">
    
    <div class="about__info-block">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada nunc sit amet orci lacinia, ac imperdiet velit fermentum. Aenean et arcu nibh. Praesent eget semper lectus. Donec ut metus justo. Nunc ullamcorper ipsum ut nisi eleifend, vel pretium arcu pulvinar. Donec ac est a lacus tincidunt pellentesque. Proin egestas mauris sed congue molestie. Curabitur non neque libero. Praesent hendrerit consequat lectus ac venenatis. Nunc posuere, ligula a auctor maximus, ante velit tincidunt tortor, gravida porta nibh dolor et nisl. Nunc pharetra nulla et sapien convallis, quis aliquet est congue.
      </p>
      <img src="src/img/png/about__img1.png">
    </div>
      
    <div class="about__info-block">
      <img src="src/img/png/about__img2.png">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada nunc sit amet orci lacinia, ac imperdiet velit fermentum. Aenean et arcu nibh. Praesent eget semper lectus. Donec ut metus justo. Nunc ullamcorper ipsum ut nisi eleifend, vel pretium arcu pulvinar. Donec ac est a lacus tincidunt pellentesque. Proin egestas mauris sed congue molestie. Curabitur non neque libero. Praesent hendrerit consequat lectus ac venenatis. Nunc posuere, ligula a auctor maximus, ante velit tincidunt tortor, gravida porta nibh dolor et nisl. Nunc pharetra nulla et sapien convallis, quis aliquet est congue.
      </p>
    </div>

    <div class="about__info-block">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada nunc sit amet orci lacinia, ac imperdiet velit fermentum. Aenean et arcu nibh. Praesent eget semper lectus. Donec ut metus justo. Nunc ullamcorper ipsum ut nisi eleifend, vel pretium arcu pulvinar. Donec ac est a lacus tincidunt pellentesque. Proin egestas mauris sed congue molestie. Curabitur non neque libero. Praesent hendrerit consequat lectus ac venenatis. Nunc posuere, ligula a auctor maximus, ante velit tincidunt tortor, gravida porta nibh dolor et nisl. Nunc pharetra nulla et sapien convallis, quis aliquet est congue.
      </p>
      <img src="src/img/png/about__img3.png">
    </div>
    
  </div>
  
  <MyFooter/>
</template>

<script setup>
  import MyFooter from "@/components/MyFooter.vue"
  import MyHeader from "@/components/MyHeader.vue"
</script>

<style scoped>
  .about__banner{
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Didact Gothic;
    font-size: 9.3rem;
    font-weight: 400;
    color: #252020;
    background: url(@/img/png/about__banner.png) 100% no-repeat;
  }

  .about__info{
    margin: 10rem auto;
    width: 80%;
    display: flex;
    flex-direction: column;
  }

  .about__info p{
    padding: 0 5.8rem;
    text-align: center;
  }

  .about__info-block{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
</style>