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

// Get the exhibition ID from the URL
$request_uri = $_SERVER['REQUEST_URI'];
$path_parts = explode('/', trim($request_uri, '/'));

// Find exhibition ID after 'comments'
$exhibition_id = null;
$found_comments = false;
foreach ($path_parts as $part) {
    if ($found_comments && !empty($part)) {
        $exhibition_id = $part;
        break;
    }
    if ($part === 'comments') {
        $found_comments = true;
    }
}

if (!$exhibition_id) {
    http_response_code(400);
    echo json_encode(['error' => 'Exhibition ID is required']);
    exit;
}

// Create data directory if it doesn't exist
$data_dir = __DIR__ . '/../../../data/comments/';
if (!is_dir($data_dir)) {
    mkdir($data_dir, 0755, true);
}

$comments_file = $data_dir . $exhibition_id . '.json';

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        // Get comments for exhibition
        if (file_exists($comments_file)) {
            $comments = json_decode(file_get_contents($comments_file), true) ?: [];
        } else {
            $comments = [];
        }
        
        echo json_encode([
            'comments' => $comments,
            'total' => count($comments)
        ], JSON_PRETTY_PRINT);
        break;

    case 'POST':
        // Add new comment
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!$input || !isset($input['name']) || !isset($input['comment'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Name and comment are required']);
            exit;
        }

        // Load existing comments
        if (file_exists($comments_file)) {
            $comments = json_decode(file_get_contents($comments_file), true) ?: [];
        } else {
            $comments = [];
        }

        // Create new comment
        $new_comment = [
            'id' => uniqid(),
            'name' => strip_tags(trim($input['name'])),
            'email' => isset($input['email']) ? filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL) : null,
            'comment' => strip_tags(trim($input['comment'])),
            'timestamp' => date('c'),
            'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
        ];

        // Add to beginning of comments array
        array_unshift($comments, $new_comment);

        // Keep only last 100 comments
        $comments = array_slice($comments, 0, 100);

        // Save comments
        file_put_contents($comments_file, json_encode($comments, JSON_PRETTY_PRINT));

        http_response_code(201);
        echo json_encode([
            'success' => true,
            'comment' => $new_comment,
            'message' => 'Comment added successfully'
        ], JSON_PRETTY_PRINT);
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
?>