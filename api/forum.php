<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Data directory
$dataDir = __DIR__ . '/data';
if (!is_dir($dataDir)) {
    mkdir($dataDir, 0755, true);
}

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$pathParts = explode('/', trim($path, '/'));

// Simple routing
try {
    switch ($method) {
        case 'GET':
            if (strpos($path, '/categories') !== false) {
                handleGetCategories();
            } elseif (strpos($path, '/topics') !== false) {
                handleGetTopics();
            } elseif (strpos($path, '/topic/') !== false) {
                $topicId = end($pathParts);
                handleGetTopic($topicId);
            } else {
                handleGetForumStats();
            }
            break;
            
        case 'POST':
            $input = json_decode(file_get_contents('php://input'), true);
            if (strpos($path, '/topics') !== false) {
                handleCreateTopic($input);
            } elseif (strpos($path, '/replies') !== false) {
                handleCreateReply($input);
            } elseif (strpos($path, '/vote') !== false) {
                handleVote($input);
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

function handleGetCategories() {
    $categories = [
        [
            'id' => 'trainings',
            'title' => 'Trainings',
            'icon' => '🎓',
            'description' => 'Questions about OpenSciEd workshops, professional development, and training programs.',
            'topicCount' => 45,
            'postCount' => 234
        ],
        [
            'id' => 'funding',
            'title' => 'Funding/Grants',
            'icon' => '💰',
            'description' => 'Grant opportunities, funding sources, and implementation support for STEM programs.',
            'topicCount' => 28,
            'postCount' => 156
        ],
        [
            'id' => 'services',
            'title' => 'Services/Consultation',
            'icon' => '🤝',
            'description' => 'Questions about field experiences, customized programs, and consultation services.',
            'topicCount' => 67,
            'postCount' => 389
        ],
        [
            'id' => 'programs',
            'title' => 'Programs/Events',
            'icon' => '📅',
            'description' => 'Family STEM nights, community programs, and upcoming educational events.',
            'topicCount' => 34,
            'postCount' => 198
        ],
        [
            'id' => 'support',
            'title' => 'Support',
            'icon' => '🛠️',
            'description' => 'Technical support, troubleshooting, and general assistance with our services.',
            'topicCount' => 52,
            'postCount' => 287
        ],
        [
            'id' => 'general',
            'title' => 'General Questions',
            'icon' => '💬',
            'description' => 'Open discussions, general questions, and community conversations about energy education.',
            'topicCount' => 89,
            'postCount' => 512
        ]
    ];
    
    echo json_encode(['success' => true, 'categories' => $categories]);
}

function handleGetTopics() {
    // Sample topics data
    $topics = [
        [
            'id' => 1,
            'title' => 'NGSS Alignment Best Practices',
            'category' => 'trainings',
            'author' => 'Sarah M.',
            'authorRole' => 'Middle School Teacher',
            'content' => 'Looking for best practices for ensuring strong NGSS alignment...',
            'isPinned' => true,
            'votes' => 15,
            'replies' => 8,
            'views' => 142,
            'createdAt' => '2024-01-15T10:30:00Z',
            'lastActivity' => '2024-01-16T14:20:00Z'
        ]
    ];
    
    echo json_encode(['success' => true, 'topics' => $topics]);
}

function handleGetTopic($topicId) {
    // Sample topic detail
    $topic = [
        'id' => $topicId,
        'title' => 'NGSS Alignment Best Practices',
        'category' => 'trainings',
        'author' => 'Sarah M.',
        'authorRole' => 'Middle School Teacher',
        'content' => 'I\'m implementing OpenSciEd in my middle school science classes and looking for best practices...',
        'isPinned' => true,
        'votes' => 15,
        'replies' => 8,
        'views' => 142,
        'createdAt' => '2024-01-15T10:30:00Z'
    ];
    
    $replies = [
        [
            'id' => 1,
            'topicId' => $topicId,
            'author' => 'Dr. Edward Cohen',
            'authorRole' => 'Energy Museum Team',
            'content' => 'Great question, Sarah! NGSS alignment is indeed a journey...',
            'votes' => 22,
            'isPinned' => true,
            'createdAt' => '2024-01-15T16:45:00Z'
        ]
    ];
    
    echo json_encode([
        'success' => true, 
        'topic' => $topic,
        'replies' => $replies
    ]);
}

function handleGetForumStats() {
    $stats = [
        'totalTopics' => 315,
        'totalPosts' => 1876,
        'activeMembers' => 284,
        'questionsAnswered' => 95
    ];
    
    echo json_encode(['success' => true, 'stats' => $stats]);
}

function handleCreateTopic($input) {
    // Validate input
    $required = ['title', 'content', 'category', 'author'];
    foreach ($required as $field) {
        if (empty($input[$field])) {
            http_response_code(400);
            echo json_encode(['error' => "Field '$field' is required"]);
            return;
        }
    }
    
    // Create topic data
    $topic = [
        'id' => time(), // Simple ID generation
        'title' => htmlspecialchars($input['title']),
        'content' => htmlspecialchars($input['content']),
        'category' => $input['category'],
        'author' => htmlspecialchars($input['author']),
        'authorRole' => isset($input['authorRole']) ? htmlspecialchars($input['authorRole']) : '',
        'authorEmail' => isset($input['email']) ? htmlspecialchars($input['email']) : '',
        'isPinned' => false,
        'votes' => 0,
        'replies' => 0,
        'views' => 0,
        'moderated' => false, // Needs moderation
        'createdAt' => date('c'),
        'lastActivity' => date('c')
    ];
    
    // Save to file (in production, use proper database)
    $filename = __DIR__ . '/data/topic_' . $topic['id'] . '.json';
    file_put_contents($filename, json_encode($topic, JSON_PRETTY_PRINT));
    
    echo json_encode([
        'success' => true, 
        'message' => 'Topic submitted for moderation',
        'topicId' => $topic['id']
    ]);
}

function handleCreateReply($input) {
    // Validate input
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
        'id' => time(),
        'topicId' => $input['topicId'],
        'content' => htmlspecialchars($input['content']),
        'author' => htmlspecialchars($input['author']),
        'authorEmail' => isset($input['email']) ? htmlspecialchars($input['email']) : '',
        'votes' => 0,
        'isPinned' => false,
        'moderated' => false,
        'createdAt' => date('c')
    ];
    
    // Save to file
    $filename = __DIR__ . '/data/reply_' . $reply['id'] . '.json';
    file_put_contents($filename, json_encode($reply, JSON_PRETTY_PRINT));
    
    echo json_encode([
        'success' => true, 
        'message' => 'Reply submitted for moderation',
        'replyId' => $reply['id']
    ]);
}

function handleVote($input) {
    // Simple vote handling (in production, track user votes properly)
    echo json_encode([
        'success' => true, 
        'message' => 'Vote recorded'
    ]);
}
?>
