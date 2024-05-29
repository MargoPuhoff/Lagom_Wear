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
    margin-top: 1.25rem;
    padding: 1.25rem;
    position:absolute;
    bottom: 15%;
    left: 2rem;
    font-weight: 500;
    color: #66433F;
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
</style>