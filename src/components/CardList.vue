<template>

    <div class="card__list-item">
      <!--Рендер всех карточек с сервера -->
      <CardItem
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :size="item.size"
        :price="item.price"
        :discount="item.discount"
        :old_price="item.old_price"
        :imgUrl="item.imgUrl"
        :isFavorite="item.isFavorite"
        :onClickFavorite="() => emit('addToFavorite', item)"/>
    </div>

</template>

<script setup>
  import CardItem from "@/components/CardItem.vue"

  defineProps({
    items: Array
  })

  const emit = defineEmits(['addToFavorite']);
</script>

<style scoped>
  
  /* Карточки с товаром */
  .card__list-item{
    padding: 1.75rem 0;
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
</style>