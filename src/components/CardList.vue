<template>
  <div class="card__list">
    
    <p>Наши новинки</p>
    <CardItem/>
  
  </div>
</template>

<script>
import CardItem from "@/components/CardItem.vue"

export default{
  
  components: {
    CardItem  
  }
  
}
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

  p{
    font-size: 3.125rem;
  }
  
</style>