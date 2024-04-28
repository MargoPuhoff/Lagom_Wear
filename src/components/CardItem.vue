<template>
  <div class="card__item">
      
    <div class="card__item-img">
      <img :src="imgUrl">
    </div>
      
    <div class="card__item-info">
      <div class="item-info">
        <p>Размер</p>
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
  const onClickFavorite = () => {
    alert("Товар добавлен в избранное!")
  }
  
  defineProps({
    imgUrl: String,
    title: String,
    price: Number,
    isFavorite: Boolean,
    onClickFavorite: Function
  })
</script>

<style scoped>
  .card__item{
    width: 19rem;
  }

  .card__item-img img{
    width: 100%;
  }

  .card__item-info{
    padding-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    line-height: 20px;
  }

  .item-icon{
    cursor: pointer;
  }

</style>