<?php
// Newsletter subscription API with Database Storage
require_once __DIR__ . '/PIIDatabase.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Credentials: true');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header('Content-Type: application/json');

try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        echo json_encode([
            'success' => false,
            'message' => 'Only POST method allowed'
        ]);
        exit;
    }

    // Get the raw POST data
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input || !isset($input['email'])) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Email address is required'
        ]);
        exit;
    }

    $email = filter_var(trim($input['email']), FILTER_VALIDATE_EMAIL);
    
    if (!$email) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Please provide a valid email address'
        ]);
        exit;
    }

    // Initialize database
    $database = new PIIDatabase();
    
    // Add subscriber to database
    $result = $database->addNewsletterSubscriber(
        $email,
        $_SERVER['REMOTE_ADDR'] ?? null,
        $_SERVER['HTTP_USER_AGENT'] ?? null
    );
    
    if ($result['success']) {
        echo json_encode([
            'success' => true,
            'message' => isset($result['already_exists']) 
                ? 'You are already subscribed to our newsletter!'
                : 'Thank you for subscribing to The Energy Museum newsletter!'
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => $result['message']
        ]);
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'An error occurred. Please try again later.',
        'error' => $e->getMessage()
    ]);
}
?>
