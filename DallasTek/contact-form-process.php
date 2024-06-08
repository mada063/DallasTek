<?php
// Define functions at the top
function problem($error) {
    echo "We're sorry, but there were error(s) found with the form you submitted. ";
    echo "These errors appear below.<br><br>";
    echo $error . "<br><br>";
    echo "Please go back and fix these errors.<br><br>";
    exit;  // Use exit instead of die for clarity
}

function clean_string($string) {
    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
    return str_replace($bad, "", $string);
}

if (isset($_POST['Email'])) {
    // Initialization
    $email_to = "mathias@dallastek.no";
    $email_subject = "Melding fra kontaktskjema";

    // Validation
    if (!isset($_POST['Name']) || !isset($_POST['Email']) || !isset($_POST['Message'])) {
        problem('We\'re sorry, but there appears to be a problem with the form you submitted.');
    }

    $name = htmlspecialchars(trim($_POST['Name']));
    $email = htmlspecialchars(trim($_POST['Email']));
    $message = htmlspecialchars(trim($_POST['Message']));

    $error_message = "";
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message .= 'The Email address you entered does not appear to be valid.<br>';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";
    if (!preg_match($string_exp, $name)) {
        $error_message .= 'The Name you entered does not appear to be valid.<br>';
    }

    if (strlen($message) < 2) {
        $error_message .= 'The Message you entered do not appear to be valid.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    // Building the message
    $email_message = "Form details below.\n\n";
    $email_message .= "Name: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Message: " . clean_string($message) . "\n";

    // Creating email headers
    $headers = 'From: ' . $email . "\r\n" .
               'Reply-To: ' . $email . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // Send email and check for success
    if(mail($email_to, $email_subject, $email_message, $headers)) {
        echo 'Takk for at du tok kontakt! Vi vil svare deg snart.';
    } else {
        echo 'Beklager, det oppstod en feil ved sending av meldingen. Vennligst prøv igjen senere.';
        error_log("Mail failed to send from $email to $email_to on " . date('Y-m-d H:i:s'));
    }
}
?>
