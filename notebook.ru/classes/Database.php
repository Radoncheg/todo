<?php
class Database {
    public function connect() {
        return mysqli_connect("localhost", "root", "", "notebook");
    }

    function find($username, $password) {
        $database = new Database();
        $sql = $database->connect();
        $user = mysqli_query($sql, "SELECT `id` FROM `users` WHERE `username` = '$username' AND `password` = '$password'");
        return mysqli_fetch_array($user);
        }

        
    function create($username, $password, $email) {
        $database = new Database();
        $sql = $database->connect();    
        mysqli_query($sql, "INSERT INTO users(username, password, email) VALUES ('$username', '$password', '$email')");
        }
        
    }