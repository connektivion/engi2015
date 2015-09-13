<?php
require 'PHPMailerAutoload.php';

$response = array( 'success' => false );
$formData = file_get_contents( 'php://input' );
$data = json_decode( $formData );

if($data->name!=''&&$data->number!=''&&$data->college!=''&&$data->email!=''){
	$mail = new PHPMailer;

	//$mail->SMTPDebug = 3;                               // Enable verbose debug output

	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'connektivion@gmail.com';                 // SMTP username
	$mail->Password = 'im781227xy#';                           // SMTP password
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465;                                    // TCP port to connect to

	$mail->From = 'connektivion@gmail.com';
	$mail->FromName = 'Engineer Web Team';
	$mail->addAddress('rajatmittal18@gmail.com', 'mahendra bohra');     // Add a recipient
	$mail->addReplyTo('info@example.com', 'Information');
	   // Optional name
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = 'Engineer Campus Ambassedor Registration';
	$mail->Body    = 'Hey dude,<br>'.$data->name.' from '.$data->college.' has registered<br> '.'Email: '.$data->email.'<br>Number: '.$data->number;
	$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

	if(!$mail->send()) {
	    echo 'Message could not be sent.';
	    echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
	    $response[ 'success' ] = true;

	}
	echo json_encode( $response );
}
?>