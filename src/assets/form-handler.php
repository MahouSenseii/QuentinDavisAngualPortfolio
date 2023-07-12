<?php
// check if the HTTP POST request has been submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
  // extract the form data from the request body
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // validate the form data
  // ...

  // send an email with the form data
  $to = 'davisq1991@gmail.com';
  $subject = 'New contact form submission';
  $body = "Name: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\nMessage: $message";
  $headers = 'From: ' . $email . "\r\n" .
      'Reply-To: ' . $email . "\r\n" .
      'X-Mailer: PHP/' . phpversion();

  if (mail($to, $subject, $body, $headers)) {
    // send a success response
    http_response_code(200);
    echo json_encode(array('message' => 'Form submission successful'));
  } else {
    // send an error response
    http_response_code(500);
    echo json_encode(array('message' => 'Error submitting form'));
  }

} else {
  // send an error response for invalid request method
  http_response_code(405);
  echo json_encode(array('message' => 'Invalid request method'));
}
?>