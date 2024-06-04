<template>
  <div class="header">
    <router-link to="/"><div v-if="!open">LaGom Wear</div></router-link>
    
    <div>
      <ul class="menu__desktop">
        
        <router-link to="/"><li>Главная</li></router-link>
        <router-link to="/catalog"><li>каталог</li></router-link>
        <router-link to="/delivery"><li>доставка</li></router-link>
        <router-link to="/about_us"><li>О нас</li></router-link>
        <router-link to="/contact"><li>контакты</li></router-link>
        <router-link to="/favorite"><li>
          <img width="28" height="28" src="@/img/icons/icons_heart.png"/>
        </li></router-link>
        
      </ul>
      
      <div class="menu__mobile">
        <a href="#" 
          class="header__menu"
          @click="openMenu">Меню</a>
        <ul v-if="open">
          <router-link to="/"><li>Главная</li></router-link>
          <router-link to="/catalog"><li>каталог</li></router-link>
          <router-link to="/delivery"><li>Доставка</li></router-link>
          <router-link to="/about_us"><li>О нас</li></router-link>
          <router-link to="/contact"><li>Контакты</li></router-link>
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
    padding: 0.7em 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: "Fredoka", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
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
    padding-left: 1rem;
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

  @media screen and (max-width: 935px) {
    
    .menu__desktop{
      display: none;
    }
    
    .header__menu{
      display: block;
    }
  }
  
</style>