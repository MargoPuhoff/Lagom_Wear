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
        <b>{{ title }}</b><br>
        <span class="price">{{ price }}</span>
        <span class="old_price">{{ old_price}}</span>
        <span class="price">{{ discount }}</span>
      </div>
      
      <div class="item-icon">
        <img
          @click="onClickFavorite"
          width="50" height="50" 
          :src="!isFavorite ? 'src/img/svg/favorite.svg' : 'src/img/svg/isFavorite.svg'"/>
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
    discount: String,
    old_price: String,
    discript: String,
    isFavorite: Boolean,
    onClickFavorite: Function
  });

  const linkOpen = computed(() => `/catalog/${props.id}`);
</script>

<style scoped>
  /* Карточка с товаром, которая будет на странице в каталоге */

  /* Здесь width НЕЛЬЗЯ изменять. Ломается адаптив*/
  .card__item{
    padding-bottom: 6rem;
    width: 25rem;
    cursor: pointer;
  }
  
  .card__item-img{
    height: 35rem;
  }
  
  .card__item-img img{
    width: 100%;
    height: 100%;
    min-height: 570px;
  }

  .card__item-info{
    padding-top: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
  }

  .item-info{
    line-height: 25px;
  }

  .price{
    color: #CF2929;
  }

  .old_price{
    padding: 0 10px;
    font-size: 1.25rem;
    text-decoration: line-through;
    color: #7C7C7C;
  }

  .item-icon img{
    padding-right: 1%;
    width: 75%;
  }

</style>