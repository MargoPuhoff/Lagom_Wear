<template>
  <button class="btn">
    
    <slot></slot>
    
  </button>
</template>

<script>
export default{
  name: "my-button"    
}
</script>

<style scoped>
  .btn{
    padding: 1.25rem;
    font-weight: 500;
    font-size: 1.25rem;
    cursor: pointer;
    color: #66433F;
    border: none;
    border-radius: 15px;
    background: transparent;
    box-shadow: 0 0 5px #66433F;
  }

  .favourite__btn{
    position:absolute;
    bottom: 15%;
    left: 2rem;
    margin-top: 1.25rem;
  }
</style>