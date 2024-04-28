<template>

    <div class="card__list-item">
      <CardItem 
        title="Название"
        :price="1500"
        imgUrl="https://img.freepik.com/free-photo/beautiful-blonde-girl-white-oversized-tshirt-blue-jeans-posing-gray-background_89887-922.jpg?t=st=1714319485~exp=1714323085~hmac=f891ac795b654190a95cefbcba013fe3928de1f620c6a804d1b1b3f80d176c71&w=740"/>
      <CardItem
        title="Название"
        :price="1500"
        imgUrl="https://img.freepik.com/free-photo/beautiful-blonde-girl-white-oversized-tshirt-blue-jeans-posing-gray-background_89887-899.jpg?t=st=1714309911~exp=1714313511~hmac=b30f91f5ac58c62553188564dced5a60c8a5d769cda0214f0fabf185ac5bbcc9&w=740"/>
      <CardItem
        title="Название"
        :price="1500"
        imgUrl="https://img.freepik.com/free-photo/man-posing-with-sunglasses-medium-shot_23-2149409751.jpg?t=st=1714309960~exp=1714313560~hmac=634138c5610d3f23cae4f0c36f11c36434cc85209159ec69d971f66c5b8a595d&w=740"/>
    </div>

</template>

<script>
import CardItem from "@/components/CardItem.vue"
import MyHeading from "@/components/UI/MyHeading.vue"

export default{
  
  components: {
    CardItem, MyHeading  
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
  
  .card__list-item{
    padding-top: 7.6rem;
    padding-bottom: 7.6rem;
    width: 70%;
    display: flex;
    justify-content: space-between;
  }
  
</style>