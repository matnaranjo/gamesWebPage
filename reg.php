<?php
	include 'db.php';
	$username=$_POST['username'];
	$password=$_POST['password'];

	$sql = "INSERT INTO usuarios ( `id`, `password`) 
	VALUES ('$username','$password')";
	if (mysqli_query($conn, $sql)) {
		echo json_encode(array("statusCode"=>200));
	} 
	else {
		echo json_encode(array("statusCode"=>201));
	}
	mysqli_close($conn);
?>