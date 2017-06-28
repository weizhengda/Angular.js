<?php


// $name=$_POST['name'];

// $text=$_POST['text'];

// $code=$_POST['code'];

// $age=$_POST['age'];


$postData=file_get_contents('php://input', true);
 
$d=json_decode($postData);

$text=$d->text;

$code=$d->code;

// print_r($_POST);

 echo $code.$text.'1111111';
?>