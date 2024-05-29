<template>
  
  <select>
    <option value="name">
      По названию
    </option>
    <option value="price">
      Сначала дешевле
    </option>
    <option value="-price">
      Сначала дороже
    </option>
  </select>
  
</template>

<script setup>
  
</script>

<style scoped> 
  /* Select на странице каталог */
  .card__list-select{
    width: 10%;
    outline: none;
    border: none;
    border-bottom: 1px solid white;
    background: transparent;
  }
</style>