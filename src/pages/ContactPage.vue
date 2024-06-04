<template>
  <MyHeader/>

  <div class="contact__banner">Контакты</div>
  <div class="contact__info">

    <MyBlock
      blockImg="src/img/png/contact__img1.png"
      text="In et sodales elit, vitae consectetur dolor. Donec nibh erat, condimentum nec ipsum ultrices, lacinia interdum urna. Donec in convallis nunc. Phasellus sodales feugiat mi ut tempus. Suspendisse sit amet ultrices mauris. Curabitur sit amet sapien id diam lobortis auctor. Phasellus nec urna eget dolor consequat gravida. Nulla nec justo non nulla sollicitudin varius. Aliquam erat volutpat. Integer ultricies vulputate urna at feugiat. Suspendisse sapien velit, imperdiet ac ante ut, imperdiet fringilla mauris. Pellentesque eget tellus vulputate, elementum purus sagittis, lobortis quam. Ut lobortis, mauris vehicula dignissim consequat, sapien odio mollis ante, et pulvinar lacus ante vitae purus. Etiam consectetur, leo ornare condimentum tempor, felis tortor euismod ligula, et euismod nibh nibh et arcu. Phasellus efficitur risus a nulla gravida pellentesque."
      class="left"/>
  </div>

  <MyFooter/>
</template>

<script setup>
  import MyFooter from "@/components/MyFooter.vue"
  import MyHeader from "@/components/MyHeader.vue"
  import MyBlock from "@/components/MyBlock.vue"

</script>

<style scoped>
  .contact__banner{
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9.3rem;
    border-bottom: 2px solid linear-gradient(#F8DAD1 to #714133);
    color: #252020;
    background: #F8DAD1;
  }

  .contact__info{
    margin: 10rem auto;
    width: 80%;
  }
</style>