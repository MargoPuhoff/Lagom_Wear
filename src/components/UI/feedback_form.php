<?php
  $msg_box = ""; // в этой переменной будем хранить сообщения формы
  
  if($_POST['btn_submit']) {
    $errors = array(); // контейнер для ошибок
    // проверяем корректность полей
    if($_POST['name'] == "") $errors[] = "Поле 'Имя' не заполнено!";
    if($_POST['phone'] == "") $errors[] = "Поле 'Номер телефона' не заполнено!";
    if($_POST['text'] == "") $errors[] = "Поле 'Описание товара' не заполнено!";
    
    // если форма без ошибок
    if(empty($errors)) {
     // собираем данные из формы
      $message = "Имя: " . $_POST['name'] . "<br/>";
      $message .= "Номер телефона: " . $_POST['phone'] . "<br/>";
      $message .= "Текст: " . $_POST['text'];
      
      send_mail($message); // отправим письмо
      // выведем сообщение об успехе
      $msg_box = "<span style='color: green;'>Сообщение успешно отправлено!</span>";
    } else {
      // если были ошибки, то выводим их
      $msg_box = "";
      foreach($errors as $one_error) {
        $msg_box .= "<span style='color: red;'>$one_error</span><br/>";
      }
    }
  } 

  // функция отправки письма
  function send_mail($message) {
    // почта, на которую придет письмо
    $mail_to = "ira.silenko.14@gmail.com";
    // тема письма
    $subject = "Письмо с обратной связи";
    
    // заголовок письма
    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
    $headers .= "From: Тестовое письмо <адрес_почты_на_хосте>\r\n"; // от кого письмо
    
    // отправляем письмо
    mail($mail_to, $subject, $message, $headers);
  }
?>