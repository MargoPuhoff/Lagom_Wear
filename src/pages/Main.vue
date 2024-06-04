<template>
  <MyHeader/>
  <div class="main">
    
    <!-- Здесь баннер -->
    <div class="main__banner">
    </div>
  
    <div class="main__about">
      <div class="main__about-text">
        <MyHeading 
          title="Немного о нас"
          class="main__adout-head"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed eleifend nulla. Nam suscipit magna eget odio dapibus volutpat. Etiam laoreet lacus ac elementum volutpat. Vivamus libero felis, accumsan nec pulvinar eu, aliquam eget ligula. Nunc ullamcorper velit mi, in pulvinar lorem malesuada sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<br> 
        Donec consectetur aliquet nunc, at consectetur quam efficitur nec. Integer laoreet urna eu tincidunt dignissim. Proin velit metus, dignissim et commodo eu, tempor ut quam. Duis sed orci a libero tincidunt vehicula vitae sed magna. Nam leo felis, fringilla volutpat congue quis, maximus sed mauris. Etiam pharetra, tortor nec dignissim consequat, ipsum magna hendrerit metus, eu elementum erat nulla nec justo. Nunc lacinia id tortor vitae fermentum. Phasellus vel hendrerit felis. Fusce posuere, dolor ut mattis rutrum, elit nunc laoreet sem, nec tempus mi nisi ut nulla.</p>
      </div>
      
      <div class="main__about-img">
        <img src="/src/img/png/main__img1.png">
      </div>
    </div>

    <div class="main__banner-bottom">
      <div class="main__banner-bottom-btn">
        
        <img src="/src/img/png/main__btn.png">
        <p id="p1">Хочешь приятную и качественную вещь</p>
        <p>мы подскажем где ее 
          <my-button class="main__banner-btn"> 
            <router-link to="/catalog">заказать</router-link>
          </my-button>
        </p>
        
      </div>
    </div>

    
  </div>
  
  <!-- Подключение компонентов -->
  <MyFooter/>
</template>

<script setup>
  // импортирую те самые компоненты, чтобы их можно было легко использовать
  import MyFooter from "@/components/MyFooter.vue"
  import MyHeader from "@/components/MyHeader.vue"
  import MyHeading from "@/components/UI/MyHeading.vue"
  import MyButton from "@/components/UI/MyButton.vue"
  
</script>

<style scoped>
  .main__banner{
    height: 100vh;
    position: relative;
    background: url(@/img/png/main__banner.png) 100% no-repeat;
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

  .main__about{
    margin-top: 6.75rem;
    display: flex;
    justify-content: space-between;
    font-family: "Didact Gothic", sans-serif;
    font-weight: 400;
    font-style: normal;
    background: #F2BDAE99;
  }

  .main__about-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .main__about-text p{
    padding: 2rem 15rem;
  }

  .main__banner-bottom{
    height: 90vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Didact Gothic", sans-serif;
    font-weight: 400;
    font-style: normal;
    background: url(@/img/png/main__img2.png) no-repeat;
  }

  .main__banner-bottom-btn{
    width: 70%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3.125rem;
    border: 11px solid black;
    border-radius: 85px;
    background: #CDD0D7CC;
  }

  .main__banner-bottom-btn img{
    position: absolute;
    bottom: -7%;
    left: 0;
  }

  .main__banner-bottom-btn p{
    position: absolute;
  }

  #p1{
    top: 30%;
  }

  .main__banner-bottom-btn a{
    color: black;
    text-decoration: none;
  }
</style>