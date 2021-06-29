<?php

include "db.php";
$user = $_POST["username"];

$sql = "SELECT password FROM usuarios WHERE id='$user'";

$result = mysqli_query($conn, $sql);

$password = mysqli_fetch_assoc($result);

echo json_encode(array("passwordResponse"=>$password["password"]));


?>