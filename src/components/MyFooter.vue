<template>
  <div class="footer">
    
    <div class="footer__icon">
      <img src="@/img/icons/telegram-icon.svg">
      <img src="@/img/icons/vk-icon.svg">
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
      <p>icon by <a href="https://icons8.com">Icons8</a></p>
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
    color: white;
    background: #E6CEB6;
  }

  .footer__icon img{
    margin: 4.3rem 4.3rem 0 0;
    padding: .4rem;
    width: 100px;
    cursor: pointer;
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