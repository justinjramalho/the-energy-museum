<?php
// The Energy Museum API Directory
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

echo json_encode([
    'message' => 'The Energy Museum API',
    'version' => '1.0',
    'endpoints' => [
        '/api/comments.php' => 'Comments API',
        '/api/exhibits.php' => 'Exhibits API', 
        '/api/forum.php' => 'Forum API',
        '/api/newsletter.php' => 'Newsletter API',
        '/api/support.php' => 'Support API'
    ],
    'status' => 'active'
]);
?>
