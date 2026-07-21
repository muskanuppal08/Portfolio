<?php
/**
 * Real-Life Contact Handler (Laravel / PHP)
 * Location: Documents/Portfolio/server/contact.php
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);

$name = $input['name'] ?? '';
$email = $input['email'] ?? '';
$subject = $input['subject'] ?? 'Portfolio Contact Inquiry';
$message = $input['message'] ?? '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Name, email, and message are required.']);
    exit();
}

$logData = [
    'id' => time(),
    'name' => $name,
    'email' => $email,
    'subject' => $subject,
    'message' => $message,
    'date' => date('Y-m-d H:i:s')
];

$file = __DIR__ . '/messages.json';
$messages = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
if (!is_array($messages)) {
    $messages = [];
}

array_unshift($messages, $logData);
file_put_contents($file, json_encode($messages, JSON_PRETTY_PRINT));

echo json_encode([
    'success' => true,
    'message' => 'Contact message saved successfully via PHP/Laravel handler!',
    'data' => $logData
]);
