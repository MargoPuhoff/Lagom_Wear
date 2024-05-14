<template>

    <div class="card__list-item">
      <CardItem
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :size="item.size"
        :price="item.price"
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
  
  .card__list{
    padding: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #807A80;
  }
  
  .card__list-item{
    padding-top: 7.6rem;
    padding-bottom: 7.6rem;
    width: 70%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
</style>