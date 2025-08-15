<?php
/**
 * Grav CMS Integration for Forum Submissions
 * This script bridges React forum submissions with Grav CMS and Comments plugin
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Grav CMS path (adjust if needed)
$gravPath = __DIR__ . '/../backend';
$dataDir = __DIR__ . '/data';

if (!is_dir($dataDir)) {
    mkdir($dataDir, 0755, true);
}

$method = $_SERVER['REQUEST_METHOD'];

try {
    switch ($method) {
        case 'POST':
            $input = json_decode(file_get_contents('php://input'), true);
            
            if (strpos($_SERVER['REQUEST_URI'], '/submit-topic') !== false) {
                handleTopicSubmission($input, $gravPath, $dataDir);
            } elseif (strpos($_SERVER['REQUEST_URI'], '/submit-reply') !== false) {
                handleReplySubmission($input, $gravPath, $dataDir);
            } else {
                http_response_code(404);
                echo json_encode(['error' => 'Endpoint not found']);
            }
            break;
            
        case 'GET':
            if (strpos($_SERVER['REQUEST_URI'], '/moderation-queue') !== false) {
                handleModerationQueue($dataDir);
            } else {
                http_response_code(404);
                echo json_encode(['error' => 'Endpoint not found']);
            }
            break;
            
        default:
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Server error: ' . $e->getMessage()]);
}

function handleTopicSubmission($input, $gravPath, $dataDir) {
    // Validate required fields
    $required = ['title', 'content', 'category', 'author'];
    foreach ($required as $field) {
        if (empty($input[$field])) {
            http_response_code(400);
            echo json_encode(['error' => "Field '$field' is required"]);
            return;
        }
    }
    
    // Create topic data for moderation
    $topic = [
        'id' => 'topic_' . time() . '_' . uniqid(),
        'type' => 'forum_topic',
        'title' => htmlspecialchars($input['title'], ENT_QUOTES, 'UTF-8'),
        'content' => htmlspecialchars($input['content'], ENT_QUOTES, 'UTF-8'),
        'category' => $input['category'],
        'author' => htmlspecialchars($input['author'], ENT_QUOTES, 'UTF-8'),
        'authorRole' => isset($input['authorRole']) ? htmlspecialchars($input['authorRole'], ENT_QUOTES, 'UTF-8') : '',
        'authorEmail' => isset($input['email']) ? htmlspecialchars($input['email'], ENT_QUOTES, 'UTF-8') : '',
        'status' => 'pending_moderation',
        'isPinned' => false,
        'votes' => 0,
        'replies' => 0,
        'views' => 0,
        'createdAt' => date('c'),
        'submittedAt' => date('c'),
        'ipAddress' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
        'userAgent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown'
    ];
    
    // Save to moderation queue
    $filename = $dataDir . '/moderation_' . $topic['id'] . '.json';
    file_put_contents($filename, json_encode($topic, JSON_PRETTY_PRINT));
    
    // Send notification email to administrators
    sendModerationNotification($topic, 'new_topic');
    
    // Create Grav page stub for approved topics (will be moved when approved)
    createGravTopicPage($topic, $gravPath, false); // false = not approved yet
    
    echo json_encode([
        'success' => true,
        'message' => 'Topic submitted for moderation',
        'topicId' => $topic['id'],
        'status' => 'pending_moderation'
    ]);
}

function handleReplySubmission($input, $gravPath, $dataDir) {
    // Validate required fields
    $required = ['topicId', 'content', 'author'];
    foreach ($required as $field) {
        if (empty($input[$field])) {
            http_response_code(400);
            echo json_encode(['error' => "Field '$field' is required"]);
            return;
        }
    }
    
    // Create reply data
    $reply = [
        'id' => 'reply_' . time() . '_' . uniqid(),
        'type' => 'forum_reply',
        'topicId' => $input['topicId'],
        'content' => htmlspecialchars($input['content'], ENT_QUOTES, 'UTF-8'),
        'author' => htmlspecialchars($input['author'], ENT_QUOTES, 'UTF-8'),
        'authorRole' => isset($input['authorRole']) ? htmlspecialchars($input['authorRole'], ENT_QUOTES, 'UTF-8') : '',
        'authorEmail' => isset($input['email']) ? htmlspecialchars($input['email'], ENT_QUOTES, 'UTF-8') : '',
        'status' => 'pending_moderation',
        'votes' => 0,
        'isPinned' => false,
        'createdAt' => date('c'),
        'submittedAt' => date('c'),
        'ipAddress' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
    ];
    
    // Save to moderation queue
    $filename = $dataDir . '/moderation_' . $reply['id'] . '.json';
    file_put_contents($filename, json_encode($reply, JSON_PRETTY_PRINT));
    
    // Send notification
    sendModerationNotification($reply, 'new_reply');
    
    echo json_encode([
        'success' => true,
        'message' => 'Reply submitted for moderation',
        'replyId' => $reply['id'],
        'status' => 'pending_moderation'
    ]);
}

function handleModerationQueue($dataDir) {
    $moderationFiles = glob($dataDir . '/moderation_*.json');
    $queue = [];
    
    foreach ($moderationFiles as $file) {
        $data = json_decode(file_get_contents($file), true);
        if ($data && isset($data['status']) && $data['status'] === 'pending_moderation') {
            $queue[] = $data;
        }
    }
    
    // Sort by submission date (newest first)
    usort($queue, function($a, $b) {
        return strtotime($b['submittedAt']) - strtotime($a['submittedAt']);
    });
    
    echo json_encode([
        'success' => true,
        'queue' => $queue,
        'count' => count($queue)
    ]);
}

function createGravTopicPage($topic, $gravPath, $approved = false) {
    $pagesDir = $gravPath . '/user/pages/05.forum/topics';
    
    if (!is_dir($pagesDir)) {
        mkdir($pagesDir, 0755, true);
    }
    
    $slug = createSlug($topic['title']);
    $topicDir = $pagesDir . '/' . $topic['id'] . '.' . $slug;
    
    if (!is_dir($topicDir)) {
        mkdir($topicDir, 0755, true);
    }
    
    $frontmatter = [
        'title' => $topic['title'],
        'category' => $topic['category'],
        'author' => $topic['author'],
        'authorRole' => $topic['authorRole'],
        'authorEmail' => $topic['authorEmail'],
        'published' => $approved,
        'visible' => $approved,
        'date' => $topic['createdAt'],
        'moderated' => $approved,
        'forum_topic' => true,
        'comments' => [
            'enabled' => true,
            'moderation' => true
        ]
    ];
    
    $content = "---\n" . yaml_emit($frontmatter) . "---\n\n" . $topic['content'];
    
    file_put_contents($topicDir . '/item.md', $content);
}

function createSlug($string) {
    $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $string), '-'));
    return substr($slug, 0, 50); // Limit length
}

function sendModerationNotification($item, $type) {
    $subject = "[Energy Museum Forum] New " . ($type === 'new_topic' ? 'Discussion' : 'Reply') . " for Moderation";
    
    $message = "A new " . ($type === 'new_topic' ? 'discussion topic' : 'reply') . " has been submitted and requires moderation.\n\n";
    
    if ($type === 'new_topic') {
        $message .= "Title: " . $item['title'] . "\n";
        $message .= "Category: " . $item['category'] . "\n";
    }
    
    $message .= "Author: " . $item['author'];
    if (!empty($item['authorRole'])) {
        $message .= " (" . $item['authorRole'] . ")";
    }
    $message .= "\n";
    
    if (!empty($item['authorEmail'])) {
        $message .= "Email: " . $item['authorEmail'] . "\n";
    }
    
    $message .= "Content:\n" . $item['content'] . "\n\n";
    $message .= "Submitted: " . $item['submittedAt'] . "\n";
    $message .= "IP Address: " . $item['ipAddress'] . "\n\n";
    $message .= "Please review and approve/reject this content in the Grav Admin panel.";
    
    // Send email (configure your mail server settings)
    $headers = "From: noreply@theenergymuseum.com\r\n";
    $headers .= "Reply-To: noreply@theenergymuseum.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Email addresses for moderation notifications
    $moderators = [
        'admin@theenergymuseum.com',
        'moderator@theenergymuseum.com'
    ];
    
    foreach ($moderators as $email) {
        @mail($email, $subject, $message, $headers);
    }
}

// Helper function for YAML (if not available, use simple array format)
if (!function_exists('yaml_emit')) {
    function yaml_emit($data) {
        $yaml = '';
        foreach ($data as $key => $value) {
            if (is_bool($value)) {
                $value = $value ? 'true' : 'false';
            } elseif (is_array($value)) {
                $yaml .= $key . ":\n";
                foreach ($value as $subkey => $subvalue) {
                    $yaml .= "  " . $subkey . ": " . (is_bool($subvalue) ? ($subvalue ? 'true' : 'false') : $subvalue) . "\n";
                }
                continue;
            }
            $yaml .= $key . ": " . $value . "\n";
        }
        return $yaml;
    }
}
?>
