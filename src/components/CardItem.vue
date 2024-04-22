<template>
  <div class="card__list-item">
    <div class="card__item">
      
      <div class="card__item-img">
        <img src="@/img/jpg/order.jpg">
      </div>
      
      <div class="card__item-info">
        <p>Размер</p>
        <b>Имя товара</b>
        <p>1500.00</p>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default{
    
}
</script>

<style scoped>
  
  .card__list-item{
    padding-top: 7.6rem;
    width: 50%;
    display: flex;
    justify-content: space-between;
  }

  .card__item{
    width: 19rem;
    background: white;
  }

  .card__item-img img{
    width: 100%;
  }

  .card__item-info{
    padding-top: 1.5rem;
    line-height: 20px;
  }
</style>