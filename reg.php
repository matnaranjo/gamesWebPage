<?php

    include ('db.php');

    if ((isset($_POST["reg_username"])) and (isset($_POST["reg_password"])) and (isset($_POST["reg_password_conf"]))){
        $user = $_POST["reg_username"];
        $password = $_POST["reg_password"];
        $password_conf = $_POST["reg_password_conf"];
        if ($password == $password_conf){
            mysqli_select_db($conn, 'game_users') or die ('No se encuentra DB');
            mysqli_set_charset($conn, 'utf8');
            $query = "INSERT INTO usuarios (id, password) VALUES ('$user', '$password')" ;
            $result=mysqli_query($conn, $query);
        }       
    }



    ?>