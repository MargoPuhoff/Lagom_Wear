<template>
    <div class="card__item">
      
      <div class="card__item-img">
        <img :src="imgUrl">
      </div>
      
      <div class="card__item-info">
        <p>Размер</p>
        <b>{{ title }}</b>
        <p>{{ price }}</p>
      </div>
      
    </div>
</template>

<script setup>
  defineProps({
    imgUrl: String,
    title: String,
    price: Number
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
    line-height: 20px;
  }
</style>