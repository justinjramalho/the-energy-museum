<?php
namespace Grav\Plugin;

use Grav\Common\Plugin;
use Grav\Common\Page\Collection;
use RocketTheme\Toolbox\Event\Event;

/**
 * Museum API Plugin
 *
 * Provides REST API endpoints for the Energy Museum
 * Handles comments, exhibitions data, and support requests
 */
class MuseumApiPlugin extends Plugin
{
    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return [
            'onPluginsInitialized' => ['onPluginsInitialized', 0]
        ];
    }

    /**
     * Initialize the plugin
     */
    public function onPluginsInitialized()
    {
        // Don't proceed if we are in the admin plugin
        if ($this->isAdmin()) {
            return;
        }

        // Enable the events we want to listen to
        $this->enable([
            'onPageInitialized' => ['onPageInitialized', 0]
        ]);
    }

    /**
     * Handle page initialization and API routes
     */
    public function onPageInitialized()
    {
        $uri = $this->grav['uri'];
        $route = $uri->route();

        // Handle API routes
        if (strpos($route, '/api/') === 0) {
            $this->handleApiRequest($route, $uri);
        }
    }

    /**
     * Handle API requests
     */
    private function handleApiRequest($route, $uri)
    {
        $method = $_SERVER['REQUEST_METHOD'];
        $path_parts = explode('/', trim($route, '/'));
        
        // Remove 'api' from path parts
        array_shift($path_parts);
        
        // Set CORS headers
        $this->setCorsHeaders();
        
        // Handle preflight requests
        if ($method === 'OPTIONS') {
            http_response_code(200);
            exit;
        }

        try {
            switch ($path_parts[0]) {
                case 'exhibitions':
                    $this->handleExhibitionsApi($path_parts, $method);
                    break;
                case 'comments':
                    $this->handleCommentsApi($path_parts, $method);
                    break;
                case 'support':
                    $this->handleSupportApi($path_parts, $method);
                    break;
                case 'pages':
                    $this->handlePagesApi($path_parts, $method);
                    break;
                default:
                    $this->jsonResponse(['error' => 'Invalid API endpoint'], 404);
            }
        } catch (Exception $e) {
            $this->jsonResponse(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Handle exhibitions API
     */
    private function handleExhibitionsApi($path_parts, $method)
    {
        switch ($method) {
            case 'GET':
                if (isset($path_parts[1])) {
                    // Get specific exhibition
                    $this->getExhibition($path_parts[1]);
                } else {
                    // Get all exhibitions
                    $this->getAllExhibitions();
                }
                break;
            default:
                $this->jsonResponse(['error' => 'Method not allowed'], 405);
        }
    }

    /**
     * Handle comments API
     */
    private function handleCommentsApi($path_parts, $method)
    {
        switch ($method) {
            case 'GET':
                if (isset($path_parts[1])) {
                    // Get comments for specific exhibition
                    $this->getComments($path_parts[1]);
                } else {
                    $this->jsonResponse(['error' => 'Exhibition ID required'], 400);
                }
                break;
            case 'POST':
                if (isset($path_parts[1])) {
                    // Add comment to specific exhibition
                    $this->addComment($path_parts[1]);
                } else {
                    $this->jsonResponse(['error' => 'Exhibition ID required'], 400);
                }
                break;
            default:
                $this->jsonResponse(['error' => 'Method not allowed'], 405);
        }
    }

    /**
     * Handle support requests API
     */
    private function handleSupportApi($path_parts, $method)
    {
        switch ($method) {
            case 'POST':
                $this->submitSupportRequest();
                break;
            default:
                $this->jsonResponse(['error' => 'Method not allowed'], 405);
        }
    }

    /**
     * Handle pages API
     */
    private function handlePagesApi($path_parts, $method)
    {
        switch ($method) {
            case 'GET':
                if (isset($path_parts[1])) {
                    $this->getPage($path_parts[1]);
                } else {
                    $this->getAllPages();
                }
                break;
            default:
                $this->jsonResponse(['error' => 'Method not allowed'], 405);
        }
    }

    /**
     * Get all exhibitions
     */
    private function getAllExhibitions()
    {
        $pages = $this->grav['pages'];
        $exhibitions_page = $pages->find('/exhibitions');
        
        if (!$exhibitions_page) {
            $this->jsonResponse(['error' => 'Exhibitions page not found'], 404);
            return;
        }

        $exhibitions = [];
        $children = $exhibitions_page->children();
        
        foreach ($children as $child) {
            $exhibitions[] = $this->formatExhibitionData($child);
        }

        $this->jsonResponse([
            'exhibitions' => $exhibitions,
            'total' => count($exhibitions)
        ]);
    }

    /**
     * Get specific exhibition
     */
    private function getExhibition($slug)
    {
        $pages = $this->grav['pages'];
        $exhibition = $pages->find('/exhibitions/' . $slug);
        
        if (!$exhibition) {
            $this->jsonResponse(['error' => 'Exhibition not found'], 404);
            return;
        }

        $this->jsonResponse($this->formatExhibitionData($exhibition));
    }

    /**
     * Get comments for exhibition
     */
    private function getComments($exhibition_id)
    {
        $comments_file = DATA_DIR . 'museum/comments/' . $exhibition_id . '.json';
        
        if (!file_exists($comments_file)) {
            $this->jsonResponse(['comments' => [], 'total' => 0]);
            return;
        }

        $comments = json_decode(file_get_contents($comments_file), true);
        
        $this->jsonResponse([
            'comments' => $comments ?: [],
            'total' => count($comments ?: [])
        ]);
    }

    /**
     * Add comment to exhibition
     */
    private function addComment($exhibition_id)
    {
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!$input || !isset($input['name']) || !isset($input['comment'])) {
            $this->jsonResponse(['error' => 'Name and comment are required'], 400);
            return;
        }

        // Create comments directory if it doesn't exist
        $comments_dir = DATA_DIR . 'museum/comments/';
        if (!is_dir($comments_dir)) {
            mkdir($comments_dir, 0755, true);
        }

        $comments_file = $comments_dir . $exhibition_id . '.json';
        
        // Load existing comments
        $comments = [];
        if (file_exists($comments_file)) {
            $comments = json_decode(file_get_contents($comments_file), true) ?: [];
        }

        // Create new comment
        $new_comment = [
            'id' => uniqid(),
            'name' => strip_tags($input['name']),
            'email' => isset($input['email']) ? filter_var($input['email'], FILTER_SANITIZE_EMAIL) : null,
            'comment' => strip_tags($input['comment']),
            'timestamp' => date('c'),
            'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
        ];

        // Add to comments array
        array_unshift($comments, $new_comment);

        // Keep only last 100 comments
        $comments = array_slice($comments, 0, 100);

        // Save comments
        file_put_contents($comments_file, json_encode($comments, JSON_PRETTY_PRINT));

        $this->jsonResponse([
            'success' => true,
            'comment' => $new_comment,
            'message' => 'Comment added successfully'
        ], 201);
    }

    /**
     * Submit support request
     */
    private function submitSupportRequest()
    {
        $input = json_decode(file_get_contents('php://input'), true);
        
        $required_fields = ['name', 'email', 'supportType', 'message'];
        foreach ($required_fields as $field) {
            if (!isset($input[$field]) || empty($input[$field])) {
                $this->jsonResponse(['error' => "Field '$field' is required"], 400);
                return;
            }
        }

        // Create support requests directory if it doesn't exist
        $support_dir = DATA_DIR . 'museum/support/';
        if (!is_dir($support_dir)) {
            mkdir($support_dir, 0755, true);
        }

        // Create support request
        $request = [
            'id' => uniqid(),
            'name' => strip_tags($input['name']),
            'email' => filter_var($input['email'], FILTER_SANITIZE_EMAIL),
            'organization' => isset($input['organization']) ? strip_tags($input['organization']) : '',
            'supportType' => strip_tags($input['supportType']),
            'message' => strip_tags($input['message']),
            'timestamp' => date('c'),
            'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
            'status' => 'pending'
        ];

        // Save request
        $filename = $support_dir . date('Y-m-d_H-i-s') . '_' . $request['id'] . '.json';
        file_put_contents($filename, json_encode($request, JSON_PRETTY_PRINT));

        $this->jsonResponse([
            'success' => true,
            'requestId' => $request['id'],
            'message' => 'Support request submitted successfully'
        ], 201);
    }

    /**
     * Get specific page
     */
    private function getPage($route)
    {
        $pages = $this->grav['pages'];
        $page = $pages->find('/' . $route);
        
        if (!$page) {
            $this->jsonResponse(['error' => 'Page not found'], 404);
            return;
        }

        $this->jsonResponse($this->formatPageData($page));
    }

    /**
     * Get all pages
     */
    private function getAllPages()
    {
        $pages = $this->grav['pages'];
        $all_pages = $pages->all();
        
        $formatted_pages = [];
        foreach ($all_pages as $page) {
            if ($page->published() && $page->visible()) {
                $formatted_pages[] = $this->formatPageData($page);
            }
        }

        $this->jsonResponse([
            'pages' => $formatted_pages,
            'total' => count($formatted_pages)
        ]);
    }

    /**
     * Format exhibition data for API response
     */
    private function formatExhibitionData($page)
    {
        $header = $page->header();
        
        return [
            'id' => $page->slug(),
            'title' => $page->title(),
            'content' => $page->content(),
            'excerpt' => $page->summary(300),
            'route' => $page->route(),
            'date' => $page->date(),
            'taxonomy' => $header->taxonomy ?? [],
            'metadata' => $header->metadata ?? [],
            'published' => $page->published(),
            'visible' => $page->visible()
        ];
    }

    /**
     * Format page data for API response
     */
    private function formatPageData($page)
    {
        $header = $page->header();
        
        return [
            'id' => $page->slug(),
            'title' => $page->title(),
            'content' => $page->content(),
            'excerpt' => $page->summary(200),
            'route' => $page->route(),
            'date' => $page->date(),
            'metadata' => $header->metadata ?? [],
            'published' => $page->published(),
            'visible' => $page->visible()
        ];
    }

    /**
     * Set CORS headers
     */
    private function setCorsHeaders()
    {
        header('Access-Control-Allow-Origin: http://localhost:3000');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
        header('Access-Control-Allow-Credentials: true');
    }

    /**
     * Send JSON response
     */
    private function jsonResponse($data, $status_code = 200)
    {
        http_response_code($status_code);
        header('Content-Type: application/json');
        echo json_encode($data, JSON_PRETTY_PRINT);
        exit;
    }
}