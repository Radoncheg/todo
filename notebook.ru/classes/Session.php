<?php
class Session {
    public function redirect() {
       $_SESSION['password'] = $password; 
       $_SESSION['username'] = $username; 
       $_SESSION['id'] = $id_user['id']; 
       header("Location: ./content/enter.php");
    }
}