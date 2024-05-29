<template>
  <div class="form">
    <!-- поменяла место обработки формы на рнр файл,-->
    <form action="feedback_form.php" method="post" class="postcard" name="frm_feedback" >
      <p>Форма связи</p>
      <input type="text" placeholder="Ваше имя" id="name" required>
      <input type="phone" placeholder="Номер телефона" id="phone" required>
      <textarea rows="8" id="text">Напишите какой товар понравился</textarea>
      <p>как с вами можно связаться</p>
      <input type="radio" name="connection" value="Позвонить">
      <input type="radio" name="connection" value="написать в телеграмм">
      <my-button class="form__btn">
        <input type="submit" value="Отправить форму" name="btn_submit">
      </my-button> <!--добавь стиль кнопки-->
    </form>
  </div>
</template>

<script setup>
  import MyButton from "@/components/UI/MyButton.vue"
</script>

<style scoped>
  .form{
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(@/img/jpg/form__back.jpg) no-repeat;
    background-position-y: 47%;
    background-size: 100%;
  }

  form{
    margin: 10.18rem;
    width: 30%;
    display: flex;    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 38px;
    border: 1px solid black;
    background: #BABABA;
  }

  p, input::placeholder{
    text-transform: uppercase;
  }

  p{
    padding-top: 2.6rem;
  }

  input{
    margin: 1.5rem;
    padding-bottom: 1rem;
    width: 80%;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    background: transparent;
  }
  
 input::placeholder{
   color: black;
 }

  textarea{
    width: 80%;
    text-transform: uppercase;
    outline: none;
    background: transparent;
    border: 1px solid black;
  }
</style>