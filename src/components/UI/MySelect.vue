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
    width: 30%;
    font-size: 1.25rem;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    background: transparent;
  }
</style>