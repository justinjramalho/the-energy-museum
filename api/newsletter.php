<?php
// Newsletter subscription API
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

    // Create data directory if it doesn't exist
    $dataDir = __DIR__ . '/data';
    if (!is_dir($dataDir)) {
        mkdir($dataDir, 0755, true);
    }

    // Newsletter subscribers file
    $subscribersFile = $dataDir . '/newsletter_subscribers.json';
    
    // Load existing subscribers
    $subscribers = [];
    if (file_exists($subscribersFile)) {
        $existingData = file_get_contents($subscribersFile);
        $subscribers = json_decode($existingData, true) ?: [];
    }

    // Check if email already exists
    foreach ($subscribers as $subscriber) {
        if ($subscriber['email'] === $email) {
            echo json_encode([
                'success' => true,
                'message' => 'You are already subscribed to our newsletter!'
            ]);
            exit;
        }
    }

    // Add new subscriber
    $newSubscriber = [
        'email' => $email,
        'subscribed_at' => date('Y-m-d H:i:s'),
        'ip_address' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown',
        'status' => 'active'
    ];

    $subscribers[] = $newSubscriber;

    // Save to file
    if (file_put_contents($subscribersFile, json_encode($subscribers, JSON_PRETTY_PRINT))) {
        // Log subscription
        $logFile = $dataDir . '/newsletter_log.txt';
        $logEntry = date('Y-m-d H:i:s') . " - New subscription: $email\n";
        file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);

        echo json_encode([
            'success' => true,
            'message' => 'Thank you for subscribing to The Energy Museum newsletter!'
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Unable to process subscription. Please try again later.'
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
