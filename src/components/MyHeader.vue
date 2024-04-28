<template>
  <div class="header">
    <div>Логотип</div>
    
    <div>
      <ul>
        
        <router-link to="/"><li>Главная</li></router-link>
        <router-link to="/catalog"><li>Одежда</li></router-link>
         <li><img src="@/img/icons/contact.svg"></li>
        <li><img width="50" height="50" src="https://img.icons8.com/bubbles/50/in-transit.png"/></li>
        <li><img width="50" height="50" src="https://img.icons8.com/bubbles/50/shopping-bag.png"/></li>
        <li><img width="50" height="50" src="https://img.icons8.com/bubbles/50/likes-folder.png"/></li>
        
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
    font-size: 1.25rem;
    cursor: pointer;
    color: white;
    background: #E6CEB6;
  }
  
  ul{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  li{
    padding-left: 1.8rem;
    list-style: none;
    color: white;
  }

  a{
    text-decoration-line: none;
  }
</style>