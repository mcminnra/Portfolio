<?php
/*

contact script written for my website

Author: Ryder McMinn

*/

//my email

$ryderEmail = "mcminnra@gmail.com";



//Form Variables

$email = $_REQUEST["email"];

$name = $_REQUEST["name"];

$message = $_REQUEST["message"];



$message = "[NAME]" . $name . "[NAME]" . "\r\n" .

"[EMAIL]" . $email . "[EMAIL]" . "\r\n" .

"[MESSAGE]" . $message . "[MESSAGE]";

$message = wordwrap($message, 70, "\r\n");

$subject = "Email from rydermcminn.com - From: " . $name

mail($ryderEmail, $subject, $message);

header( 'http://rydermcminn.com/#contactme' ) ;

?>



<h1>Successfully Sent</h1>

Thank you for contacting me. I will be in touch with you very soon.
