<template>
  <div class="footer">
    
    <div class="footer__icon">
      <a href="https://t.me/lagom_wear"><img src="@/img/svg/tg.svg"></a>
      <img src="@/img/svg/vk.svg">
    </div>
    
    <div class="footer__menu">
      <ul>
        
        <router-link to="/"><li>Главная</li></router-link>
        <router-link to="/catalog"><li>каталог</li></router-link>
        <router-link to="/delivery"><li>доставка</li></router-link>
        <router-link to="/about_us"><li>О нас</li></router-link>
        <router-link to="/contact"><li>контакты</li></router-link>
        <router-link to="/favorite"><li>Избранное</li></router-link>
        
      </ul>      
    </div>
    
    <div class="footer__info">
      <p>icon by <a href="https://icons8.com">Icons8</a></p>
      <p>© 2023 Единорог</p>
      <p>Сделано с любовью</p>
    </div>
    
  </div>
</template>

<script setup>
</script>

<style scoped>
  .footer{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    color: white;
    background: rgba(113, 65, 51, 1);  
  }

  .footer__icon img{
    margin: 4.3rem 4.3rem 0 0;
    padding: .4rem;
    width: 100px;
    cursor: pointer;
  }

  ul, .footer__info{
    padding-top: 3rem;
    display: flex;
    justify-content: space-around;
    text-decoration: none;
  }

  .footer__menu a{
    text-decoration: none;
  }

  li{
    padding-left: 6rem;
    list-style: none;
    color: white;
    font-weight: 300;
    text-transform: uppercase;
  }

  .footer__info p{
    padding-left: 10rem;
    font-size: 0.8rem;
  }
</style>