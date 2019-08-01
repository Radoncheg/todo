<?php 
session_start();
if (isset($_POST['submit'])) 
{   
    session_destroy();
    header("Location: ../Login.php");
    exit;
}
?>
<html>
<head>
 <meta charset="utf-8">                           
 <title>Записная книжка</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link rel="stylesheet" href="../styles/style.css"">
</head>
<body>
<section class='small'>
<p><div class='text' align = 'center'><font size="6"> Добро пожаловать в записную книжку</font><div></p>
<form method="post">
 <p><input name="submit" value="Завершить сеанс" class='btn btn-primary' type= "submit"></p>
</form>
  </section>
</body>
