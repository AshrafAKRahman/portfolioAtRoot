<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Methods");

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['firstName']) && !empty($data['lastName']) && !empty($data['email']) && !empty($data['phone']) && !empty($data['message'])) {
    $firstName = $data['firstName'];
    $lastName = $data['lastName'];
    $email = $data['email'];
    $phone = $data['phone'];
    $message = $data['message'];
    
    $to = "ashraf.ak.rahman@gmail.com";
    $subject = "Contact Form Submission";
    $body = "Name: {$firstName} {$lastName}\nEmail: {$email}\nPhone: {$phone}\n\nMessage:\n{$message}";

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.sendgrid.net';
        $mail->SMTPAuth = true;
        $mail->Username = 'apikey';
        $mail->Password = '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';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom($email, "{$firstName} {$lastName}");
        $mail->addAddress($to);
        $mail->addReplyTo($email);

        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body = $body;

        $mail->send();
        echo json_encode(["message" => "Message sent successfully."]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["message" => "Error sending message: {$mail->ErrorInfo}"]);
    }
} else {
    http_response_code(400);
    echo json_encode(["message" => "Please fill in all fields."]);
}
?>
