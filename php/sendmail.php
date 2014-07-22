<?php

if(isset($_POST['email'])) {



    // EDIT THE 2 LINES BELOW AS REQUIRED

    $email_to = "mcminnra@gmail.com";

    $email_subject = "Message from Web Portfolio";


    $sender_email = $_POST['email']; // required
    $subject = "Email from Web Portfolio Form: " + $_POST['subject']; // required
    $message = $_POST['message']; // required


    $email_message = "Form details below.\n\n";



    function clean_string($string) {

      $bad = array("content-type","bcc:","to:","cc:","href");

      return str_replace($bad,"",$string);

    }

// create email headers

$headers = 'From: '.$sender_email."\r\n".

'Reply-To: '.$sender_email."\r\n" .

'X-Mailer: PHP/' . phpversion();

@mail($email_to, $subject, $message, $headers);

?>



<h1>Successfully Sent</h1>



Thank you for contacting me. We will be in touch with you very soon.



<?php

}

?>