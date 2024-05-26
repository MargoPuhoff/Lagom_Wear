<template>
  <div class="header">
    <div v-if="!open">Логотип</div>
    
    <div>
      <ul class="menu__desktop">
        
        <router-link to="/"><li>Главная</li></router-link>
        <router-link to="/catalog"><li>Одежда</li></router-link>
        <router-link to="/contact"><li><img src="@/img/icons/contact.svg"></li></router-link>
        <router-link to="/delivery"><li><img width="50" height="50" src="https://img.icons8.com/bubbles/50/in-transit.png"/></li></router-link>
        <router-link to="/favorite"><li>
          <img width="50" height="50" src="https://img.icons8.com/bubbles/50/likes-folder.png"/>
        </li></router-link>
        
      </ul>
      
      <div class="menu__mobile">
        <a href="#" 
          class="header__menu"
          @click="openMenu">Меню</a>
        <ul v-if="open">
          <router-link to="/"><li>Главная</li></router-link>
          <router-link to="/catalog"><li>Одежда</li></router-link>
          <router-link to="/contact"><li>Контакты</li></router-link>
          <router-link to="/delivery"><li>Доставка</li></router-link>
          <router-link to="/favorite"><li>Избранное</li></router-link>
        </ul>
      </div>
      
    </div>
  </div>
</template>

<script setup>
  import {ref} from "vue"
  
  const open = ref(false)
  const emit = defineEmits(['openFavorite']);

  const openMenu = () => {
    open.value = !open.value;
  };
</script>

<style scoped>

  .header{
    padding: 1.4rem 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    cursor: pointer;
    color: white;
    background: rgba(113, 65, 51, 1);
  }
  
  .menu__desktop{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .menu__mobile{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

   .menu__mobile li{
      padding: 0.5rem;
   }
  
  li{
    padding-left: 1.8rem;
    list-style: none;
    color: white;
  }

  a{
    color: white;
    text-decoration-line: none;
  }

  .header__menu{
    display: none;
  }
  
/* Адаптив для меню */
  
  @media screen and (max-width: 750px) {
    
    .menu__desktop{
      display: none;
    }
    
    .header__menu{
      display: block;
    }
  }
  
</style>