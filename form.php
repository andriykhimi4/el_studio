<?php
  $recepient = 'andriykhimi4@gmail.com';
  $sitename = 'El_studio';
  $name = trim($_POST ['name']);
  $phone = trim($_POST ['phone']);
  $pagetitle = 'Нова заяка із сайту \'$sitename\'';
  $message = 'Имя:' + $name '\n Телефон:' + $phone;
  mail($recepient, $pagetitle, $message, 'Content-type: text\plain; charset=\'utf-8\' \n From:$name');
?>