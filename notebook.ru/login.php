<?php 
session_start();
if (isset($_POST['submit'])) 
{
    if (empty($_POST['username'])) 
    {
        $info_input = 'Вы не ввели логин';
    }
    elseif (empty($_POST['password'])) 
    {
        $info_input = 'Вы не ввели пароль';
    }
    else 
    {    
        $username = $_POST["username"];
        $password = $_POST["password"]; 
        require_once("./classes/Database.php");
        $database = new Database();
        $id_user = $database->find($username, $password);
        if (empty($id_user['id'])) 
        {
            $info_input = 'Введенные данные не верны';
        }
        else 
        {
            require_once("./classes/Session.php");
            $session = new Session();
            $session->redirect($password, $username, $id_user['id']);
            }     
    }
}
$info_input = isset($info_input) ? $info_input : NULL;
echo $info_input;
 ?>
<html>
<head>
 <meta charset="utf-8">                           
 <title>Записная книжка</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link rel="stylesheet" href="./styles/style.css">
</head>
<body>
  <section class='small'>
<p><div class='text' align = 'center'><font size="6"> Вход в систему:</font><div></p>
<form method="post">
<input name="username" class='form-control' placeholder="Введите имя"></label></p>
<input name="password" class='form-control' placeholder="Введите пароль"></label></p> 
 <p><input name="submit" class='btn btn-primary' type= "submit"></p>
 <p>Если еще не зарегистрированы, то </br><a href= "index.php">зарегистрируйтесь</a>!</p>
 </form>
  </section>
</body> 
</html>
