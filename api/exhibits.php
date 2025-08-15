<?php
/**
 * Exhibits API Endpoint for Dynamic Filtering
 * Phase 1: Database Integration
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database configuration
$db_config = [
    'host' => 'localhost',
    'dbname' => 'u747221136_energy_museum',
    'username' => 'u747221136_justinjramalho',
    'password' => 'JustinIsTheBest1!',
    'charset' => 'utf8mb4'
];

try {
    // Connect to database
    $dsn = "mysql:host={$db_config['host']};dbname={$db_config['dbname']};charset={$db_config['charset']}";
    $pdo = new PDO($dsn, $db_config['username'], $db_config['password'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    // Get request parameters
    $action = $_GET['action'] ?? 'get_exhibits';
    $category_filter = $_GET['category'] ?? 'all';

    switch ($action) {
        case 'get_exhibits':
            echo json_encode(getExhibits($pdo, $category_filter));
            break;
            
        case 'get_categories':
            echo json_encode(getCategories($pdo));
            break;
            
        case 'get_exhibit':
            $exhibit_id = $_GET['id'] ?? '';
            echo json_encode(getExhibit($pdo, $exhibit_id));
            break;
            
        default:
            http_response_code(400);
            echo json_encode(['error' => 'Invalid action']);
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Database error',
        'message' => $e->getMessage()
    ]);
}

/**
 * Get exhibits with optional category filtering
 */
function getExhibits($pdo, $category_filter = 'all') {
    try {
        $sql = "SELECT * FROM exhibits WHERE status = 'published'";
        $params = [];
        
        // Apply category filtering
        if ($category_filter !== 'all') {
            $sql .= " AND learning_approach LIKE ?";
            $params[] = '%' . $category_filter . '%';
        }
        
        $sql .= " ORDER BY sort_order, created_at DESC";
        
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        $exhibits = $stmt->fetchAll();
        
        // Transform data to match React component format
        $formatted_exhibits = [];
        foreach ($exhibits as $exhibit) {
            $formatted_exhibits[] = [
                'id' => $exhibit['id'],
                'title' => $exhibit['title'],
                'description' => $exhibit['description'],
                
                // Convert comma-separated strings to arrays for React
                'learningApproach' => explode(',', $exhibit['learning_approach']),
                'tags' => array_filter(explode(',', $exhibit['pedagogy_tags'] . ',' . $exhibit['subject_tags'])),
                
                // Visual properties
                'icon' => $exhibit['icon'],
                'gradient' => $exhibit['gradient'],
                'difficulty' => $exhibit['difficulty'],
                'storyType' => $exhibit['story_type'],
                'duration' => $exhibit['duration'],
                
                // Engagement metrics
                'visitors' => (int)$exhibit['visitors'],
                'comments' => (int)$exhibit['comments']
            ];
        }
        
        return [
            'success' => true,
            'exhibits' => $formatted_exhibits,
            'total' => count($formatted_exhibits),
            'category_filter' => $category_filter
        ];
        
    } catch (Exception $e) {
        return [
            'success' => false,
            'error' => $e->getMessage()
        ];
    }
}

/**
 * Get all exhibit categories
 */
function getCategories($pdo) {
    try {
        $sql = "SELECT * FROM exhibit_categories WHERE is_active = TRUE ORDER BY sort_order";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $categories = $stmt->fetchAll();
        
        return [
            'success' => true,
            'categories' => $categories
        ];
        
    } catch (Exception $e) {
        return [
            'success' => false,
            'error' => $e->getMessage()
        ];
    }
}

/**
 * Get single exhibit by ID
 */
function getExhibit($pdo, $exhibit_id) {
    try {
        if (empty($exhibit_id)) {
            return [
                'success' => false,
                'error' => 'Exhibit ID required'
            ];
        }
        
        $sql = "SELECT * FROM exhibits WHERE id = ? AND status = 'published'";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$exhibit_id]);
        $exhibit = $stmt->fetch();
        
        if (!$exhibit) {
            return [
                'success' => false,
                'error' => 'Exhibit not found'
            ];
        }
        
        // Format for React component
        $formatted_exhibit = [
            'id' => $exhibit['id'],
            'title' => $exhibit['title'],
            'description' => $exhibit['description'],
            'learningApproach' => explode(',', $exhibit['learning_approach']),
            'tags' => array_filter(explode(',', $exhibit['pedagogy_tags'] . ',' . $exhibit['subject_tags'])),
            'icon' => $exhibit['icon'],
            'gradient' => $exhibit['gradient'],
            'difficulty' => $exhibit['difficulty'],
            'storyType' => $exhibit['story_type'],
            'duration' => $exhibit['duration'],
            'visitors' => (int)$exhibit['visitors'],
            'comments' => (int)$exhibit['comments']
        ];
        
        return [
            'success' => true,
            'exhibit' => $formatted_exhibit
        ];
        
    } catch (Exception $e) {
        return [
            'success' => false,
            'error' => $e->getMessage()
        ];
    }
}
?>
