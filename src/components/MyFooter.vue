<template>
  <div class="footer">
    
    <div class="footer__icon">
      <img src="@/img/svg/telegram.svg">
      <img src="@/img/svg/vk.svg">
    </div>
    
    <div class="footer__menu">
      <ul>
        
        <li>Главная</li>
        <li>Одежда</li>
        <li>Доставка</li>
        <li>О нас</li>
        <li>Контакты</li>
        
      </ul>      
    </div>
    
    <div class="footer__info">
      <p>© 2023 Единорог</p>
      <p>Сделано с любовью</p>
    </div>
    
  </div>
</template>

<script>
  export default{

  }
</script>

<style scoped>
  .footer{
    padding: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.25rem;
    font-family: "Ubuntu", sans-serif;
    color: white;
    background: #E6CEB6;
  }

  .footer__icon img{
    margin: 4.3rem 4.3rem 0 0;
    padding: .4rem;
    width: 50px;
    cursor: pointer;
    border-radius: 50%;
    background: white;
  }

  ul, .footer__info{
    padding-top: 4.6rem;
    display: flex;
    justify-content: space-around;
  }

  li{
    padding-left: 3.125rem;
    list-style: none;
    cursor: pointer;
  }

  .footer__info p{
    padding-left: 5rem;
    font-size: .875rem;
  }
</style>