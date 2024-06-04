<template>
  <button class="btn">
    
    <slot></slot>
    
  </button>
</template>

<script setup>
</script>

<style scoped>
  
  .btn{
    font-size: 1.25rem;
    cursor: pointer;
    background: transparent;
  }

  .favourite__btn{
    margin: auto;
    padding: 1.25rem;
    width: 15%;
    font-weight: 500;
    
    border: none;
    border-radius: 15px;
    box-shadow: 0 0 5px #66433F;
  }

  .form__btn{
    margin: 2.625rem;
    padding: .6rem 2.75rem;
    text-transform: uppercase;
    border: 1px solid black;
  }

  .main__banner-btn{
    padding: .6rem 2.125rem;
    font-size: 2.5rem;
    text-transform: uppercase;
    border: 4px solid #714133;
    background: white;
  }
</style>