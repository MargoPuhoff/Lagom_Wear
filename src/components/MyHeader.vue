<template>
  <div class="header">
    <div>Логотип</div>
    
    <div>
      <ul>
        
        <li>Главная</li>
        <li>Одежда</li>
        <li>Доставка</li>
        <li>О нас</li>
        <li>Контакты</li>
        
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    
  }
</script>

<style scoped>

  .header{
    padding: 1.4rem 8rem;
    display: flex;
    justify-content: space-between;
    font-family: "Ubuntu", sans-serif;
    font-size: 1.25rem;
    cursor: pointer;
    color: white;
    background: #E6CEB6;
  }
  
  ul{
    display: flex;
    flex-direction: row;
  }
  
  li{
    padding-left: 1.8rem;
    list-style: none;
  }
</style>