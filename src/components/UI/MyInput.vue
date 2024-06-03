<template>
  <input
    placeholder="Что хотите найти?">
</template>

<script setup>
  
</script>

<style scoped>
  /* Input на странице каталог */
  .card__list-search{
    padding: 0.25rem 2rem;
    width: 30%;
    font-size: 1.25rem;
    color: black;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    background: url(@/img/svg/search__catalog.svg) no-repeat;
    background-size: 8%;
  }

  .card__list-search::placeholder{
    font-size: 1.25rem;
    color: #7B7B7B;
  }
</style>