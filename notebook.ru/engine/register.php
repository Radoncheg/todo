<?php
require_once("../classes/Database.php");
$database = new Database();
$database->create($_REQUEST["username"], $_REQUEST['password'], $_REQUEST["email"]);