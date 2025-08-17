<?php
// Professional Consultation Request API
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
    
    if (!$input) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Invalid JSON data'
        ]);
        exit;
    }

    // Validate required fields
    $required = ['name', 'email', 'supportType', 'message'];
    foreach ($required as $field) {
        if (empty($input[$field])) {
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'message' => "Field '{$field}' is required"
            ]);
            exit;
        }
    }

    // Validate email
    $email = filter_var(trim($input['email']), FILTER_VALIDATE_EMAIL);
    if (!$email) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Please provide a valid email address'
        ]);
        exit;
    }

    // Validate support type
    $validTypes = ['educational', 'business', 'policy', 'research', 'other'];
    if (!in_array($input['supportType'], $validTypes)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Invalid support type'
        ]);
        exit;
    }

    // Prepare data for database
    $consultationData = [
        'name' => trim($input['name']),
        'email' => $email,
        'organization' => !empty($input['organization']) ? trim($input['organization']) : null,
        'supportType' => $input['supportType'],
        'message' => trim($input['message']),
        'ipAddress' => $_SERVER['REMOTE_ADDR'] ?? null,
        'userAgent' => $_SERVER['HTTP_USER_AGENT'] ?? null
    ];

    // Initialize database
    $database = new PIIDatabase();
    
    // Add consultation request to database
    $result = $database->addConsultationRequest($consultationData);
    
    if ($result['success']) {
        // Send notification email to admin (optional)
        $adminNotification = [
            'to' => 'info@theenergymuseum.com',
            'subject' => 'New Consultation Request - ' . $consultationData['supportType'],
            'body' => "
                New consultation request received:
                
                Name: {$consultationData['name']}
                Email: {$consultationData['email']}
                Organization: " . ($consultationData['organization'] ?: 'Not provided') . "
                Support Type: {$consultationData['supportType']}
                
                Message:
                {$consultationData['message']}
                
                Submitted at: " . date('Y-m-d H:i:s') . "
                IP Address: {$consultationData['ipAddress']}
                
                View in admin panel: https://theenergymuseum.com/backend/admin
            "
        ];
        
        // TODO: Implement email sending (using PHPMailer or similar)
        
        echo json_encode([
            'success' => true,
            'message' => 'Thank you for your consultation request! We will contact you within 24 hours.',
            'requestId' => $result['request_id']
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
