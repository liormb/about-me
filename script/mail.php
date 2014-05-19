<?php
	if (isset($_POST['submit'])) {
		$to      = 'liormb@yahoo.com';
		$subject = "New Mail | Lior Elrom Website";
		$name    = ($_POST['name'] ? $_POST['name'] : "Unknown");
		$email   = $_POST['email'];
		$company = ($_POST['company'] ? $_POST['company'] : "Unknown");
		$msg = ($_POST['msg'] ? $_POST['msg'] : "No message attached");
		$msg = wordwrap($msg, 50, "\r\n");
		
		$message = 
			'<html>'.
			'<head>'.
				'<title>Lior Elrom | Full-Stack Web Developer</title>'.
			'</head>'.
			'<style>'.
				'h1, h2 { display: block; }'.
				'h1 { width: 100%; margin: 0; padding: 20px 0; text-align: center; background: rgb(245,245,245); color: rgb(80,80,80); font-size: 18px; font-weight: normal; }'.
				'h2 { color: red; text-align: left; font-size: 16px; font-weight: normal; }'.
				'h2 span { color: rgb(80,80,80); }'.
				'p { text-align: left; color: rgb(80,80,80); margin-bottom: 50px; line-height: 24px; font-size: 14px; }'.
			'</style>'.
			'<body>'.
				'<h1>New Message</h1>'.
				'<h2>Name: <span>'.$name.'</span></h2><hr>'.
				'<h2>Email: <span>'.$email.'</span></h2><hr>'.
				'<h2>Company: <span>'.$company.'</span></h2><hr>'.
				'<h2>Message:</h2>'.
				'<p>'.$_POST["msg"].'</p>'.
			'</body>'.
			'</html>';
		
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= 'To: ' . $to . "\r\n";
		$headers .= 'From: ' . $email . "\r\n";
		
		if(filter_var($email, FILTER_VALIDATE_EMAIL)){
		  // E-mail is valid
		  mail($to, $subject, $message, $headers);
		}
		// header("Location: http://liormb.com");
		// exit;
	}
?>