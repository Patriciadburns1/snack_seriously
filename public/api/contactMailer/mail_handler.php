<?php
require_once('email_config.php');
require('phpmailer/PHPMailerAutoload.php');

//to break all <scripts> just in case.
foreach($_POST as $key=>$value){
    $_POST[$key] = htmlentities( addslashes( $value ));
}

$mail = new PHPMailer;
$mail->SMTPDebug = 3;           // Enable verbose debug output. Change to 0 to disable debugging output.

$mail->isSMTP();                // Set mailer to use SMTP.
$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers.
$mail->SMTPAuth = true;         // Enable SMTP authentication


$mail->Username = EMAIL_USER;   // SMTP username
$mail->Password = EMAIL_PASS;   // SMTP password
$mail->SMTPSecure = 'tls';      // Enable TLS encryption, `ssl` also accepted, but TLS is a newer more-secure encryption
$mail->Port = 587;              // TCP port to connect to
$options = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$mail->smtpConnect($options);
$mail->From = 'snackseriously@gmail.com';  // sender's email address (shows in "From" field)
$mail->FromName = 'SnackSeriously';   // sender's name (shows in "From" field)
$mail->addAddress($_POST['email'], $_POST['name']);  // Add a recipient
//$mail->addAddress('ellen@example.com');                        // Name is optional
$mail->addReplyTo('panguyenuwm@gmail.com');                          // Add a reply-to address
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML



$mail->Subject = 'message from '.$_POST['name'].' on '.date('Y-m-d H:i:s').' at '.$_SERVER['REMOTE_ADDR'];
$mail->Body    = "
    Recieved message from {$_POST['name']}<br>
    Email address: {$_POST['email']}<br>
    Subject: {$_POST['subject']}<br>
    Message: {$_POST['body']}
    ";

$mail->AltBody = "
    Recieved message from {$_POST['name']}\n
    Email address: {$_POST['email']}\n
    Subject: {$_POST['subject']}\n
    Message: {$_POST['body']}
    ";

$output = [
    'success'=>false,
    'error'=>'',
    'message'=>''
];

if(!$mail->send()) {
    $output['error'] = $mail->ErrorInfo;
    unset($output['message']);
} else {
    $output['success'] = true;
    $output['message'] = 'Message has been sent';
    unset($output['error']);
}

print(json_encode($output));
?>
