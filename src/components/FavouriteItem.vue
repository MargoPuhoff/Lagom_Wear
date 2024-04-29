<template>
  <div class="card__item">
    
    <div class="card__item-img">
      <img src="https://img.freepik.com/free-photo/beautiful-blonde-girl-white-oversized-tshirt-blue-jeans-posing-gray-background_89887-922.jpg?t=st=1714319485~exp=1714323085~hmac=f891ac795b654190a95cefbcba013fe3928de1f620c6a804d1b1b3f80d176c71&w=740">
    </div>
    
    <div class="card__item-info">
      <b>Название</b>
      <p>Цена</p>
    </div>
    
    <div class="card__item-icon">
      <img
        @click="onClickFavorite"
        width="50" height="50" 
        :src="!isFavorite ? 'https://img.icons8.com/bubbles/50/hearts.png' : 'https://img.icons8.com/bubbles/50/filled-like.png'"/>
    </div>
    
  </div>

  <div class="card__item">
    
    <div class="card__item-img">
      <img src="https://img.freepik.com/free-photo/beautiful-blonde-girl-white-oversized-tshirt-blue-jeans-posing-gray-background_89887-899.jpg?t=st=1714309911~exp=1714313511~hmac=b30f91f5ac58c62553188564dced5a60c8a5d769cda0214f0fabf185ac5bbcc9&w=740">
    </div>
    
    <div class="card__item-info">
      <b>Название</b>
      <p>Цена</p>
    </div>

    <div class="card__item-icon">
      <img
        @click="onClickFavorite"
        width="50" height="50" 
        :src="!isFavorite ? 'https://img.icons8.com/bubbles/50/hearts.png' : 'https://img.icons8.com/bubbles/50/filled-like.png'"/>
    </div>
    
  </div>

  <div class="card__item">
    
    <div class="card__item-img">
      <img src="https://img.freepik.com/free-photo/man-posing-with-sunglasses-medium-shot_23-2149409751.jpg?t=st=1714309960~exp=1714313560~hmac=634138c5610d3f23cae4f0c36f11c36434cc85209159ec69d971f66c5b8a595d&w=740">
    </div>
    
    <div class="card__item-info">
      <b>Название</b>
      <p>Цена</p>
    </div>

    <div class="card__item-icon">
      <img
        @click="onClickFavorite"
        width="50" height="50" 
        :src="!isFavorite ? 'https://img.icons8.com/bubbles/50/hearts.png' : 'https://img.icons8.com/bubbles/50/filled-like.png'"/>
    </div>
    
  </div>
</template>

<script>
  
</script>

<style scoped>
  .card__item{
    margin-top: 1.2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    box-shadow: 0 0 5px #66433F;
  }

  .card__item-img{
    width: 45%;
    height: 15vh;
    cursor: pointer;
  }

  .card__item-img img{
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }

  .card__item-info b{
    font-size: 1.25rem;
  }

  .card__item-icon{
    align-self: flex-end;
    cursor: pointer;
  }
</style>