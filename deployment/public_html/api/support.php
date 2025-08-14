<?php
// Set CORS headers
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Credentials: true');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header('Content-Type: application/json');

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        // Submit support request
        $input = json_decode(file_get_contents('php://input'), true);
        
        $required_fields = ['name', 'email', 'supportType', 'message'];
        foreach ($required_fields as $field) {
            if (!isset($input[$field]) || empty(trim($input[$field]))) {
                http_response_code(400);
                echo json_encode(['error' => "Field '$field' is required"]);
                exit;
            }
        }

        // Validate email
        if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(['error' => 'Valid email address is required']);
            exit;
        }

        // Create data directory if it doesn't exist
        $data_dir = __DIR__ . '/../data/support/';
        if (!is_dir($data_dir)) {
            mkdir($data_dir, 0755, true);
        }

        // Create support request
        $request = [
            'id' => uniqid(),
            'name' => strip_tags(trim($input['name'])),
            'email' => filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL),
            'organization' => isset($input['organization']) ? strip_tags(trim($input['organization'])) : '',
            'supportType' => strip_tags(trim($input['supportType'])),
            'message' => strip_tags(trim($input['message'])),
            'timestamp' => date('c'),
            'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
            'status' => 'pending'
        ];

        // Save request to file
        $filename = $data_dir . date('Y-m-d_H-i-s') . '_' . $request['id'] . '.json';
        file_put_contents($filename, json_encode($request, JSON_PRETTY_PRINT));

        // Also save to a master list for easier access
        $master_file = $data_dir . 'all_requests.json';
        $all_requests = [];
        if (file_exists($master_file)) {
            $all_requests = json_decode(file_get_contents($master_file), true) ?: [];
        }
        array_unshift($all_requests, $request);
        
        // Keep only last 1000 requests in master file
        $all_requests = array_slice($all_requests, 0, 1000);
        file_put_contents($master_file, json_encode($all_requests, JSON_PRETTY_PRINT));

        http_response_code(201);
        echo json_encode([
            'success' => true,
            'requestId' => $request['id'],
            'message' => 'Support request submitted successfully. We will contact you within 24 hours.'
        ], JSON_PRETTY_PRINT);
        break;

    case 'GET':
        // For future admin functionality - get all support requests
        http_response_code(501);
        echo json_encode(['error' => 'GET method not implemented yet']);
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
?>