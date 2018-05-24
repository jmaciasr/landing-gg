<?php
	$name = $_POST["lanContName"];
	$email = $_POST["lanContEmail"];
	$message = $_POST["lanContMessage"];
	$email_subject = "Nuevo correo de _". $name;
	$email_body = "Nos escribe: " . $name . "\nCorreo: " . $email . "\nMensaje: " . $message;
	$to = "promos@perheadlab.com";
	mail($to, $email_subject, $email_body);
	header("Location: sended.html");
?>