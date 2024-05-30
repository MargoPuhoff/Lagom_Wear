<template>
  <div class="card__item">
      
    <router-link
      :to='linkOpen'>
      <div class="card__item-img">
        <img :src="imgUrl">
      </div>
    </router-link>
      
    <div class="card__item-info">
      <div class="item-info">
        <p>{{ size }}</p>
        <b>{{ title }}</b>
        <p>{{ price }}</p>
      </div>
      
      <div class="item-icon">
        <img
          @click="onClickFavorite"
          width="50" height="50" 
          :src="!isFavorite ? 'https://img.icons8.com/bubbles/50/hearts.png' : 'https://img.icons8.com/bubbles/50/filled-like.png'"/>
      </div>
    </div>
      
  </div>
</template>

<script setup>
  import {computed} from "vue"
  
  const props = defineProps({
    id: Number,
    imgUrl: String,
    title: String,
    price: Number,
    size: String,
    isFavorite: Boolean,
    onClickFavorite: Function
  });

  const linkOpen = computed(() => `/catalog/${props.id}`);
</script>

<style scoped>
  /* Карточка с товаром, которая будет на странице в каталоге */
  /*поменяла на проценты,изменика размер карт,изменила растояния*/
  
  .card__item{
    padding-bottom: 5%;
    width: 19rem;
    cursor: pointer;
  }
/*смотри нужно сделать описание товара согласно, дизайну(если не пойдет скажи) и еще чтобы с этого текста тоже перекидывало на карточку товара*/
  .card__item-img img{
    width: 100%;
    height:100%;
    min-height: 570px;
  }

  .card__item-info{
    padding-top: 5%;
    display: flex;
    justify-content: space-between;
    line-height: 25px;
  }

  .item-icon{
    padding-right:1%;
    }

</style>