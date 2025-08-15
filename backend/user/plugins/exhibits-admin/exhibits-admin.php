<?php
/**
 * Exhibits Admin Plugin
 * 
 * Comprehensive admin interface for managing Energy Museum exhibits
 * Allows non-technical users to manage all aspects of the Experiences page
 */

namespace Grav\Plugin;

use Grav\Common\Plugin;
use Grav\Common\Uri;
use Grav\Common\Utils;
use RocketTheme\Toolbox\Event\Event;

class ExhibitsAdminPlugin extends Plugin
{
    protected $route = 'admin';
    protected $exhibits_route = 'exhibits-admin';

    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return [
            'onPluginsInitialized' => ['onPluginsInitialized', 0],
            'onAdminMenu' => ['onAdminMenu', 0],
            'onAdminTaskExecute' => ['onAdminTaskExecute', 0],
            'onTwigTemplatePaths' => ['onTwigTemplatePaths', 0],
        ];
    }

    /**
     * Initialize the plugin
     */
    public function onPluginsInitialized()
    {
        // Admin only functionality
        if (!$this->isAdmin()) {
            return;
        }

        $this->enable([
            'onAdminMenu' => ['onAdminMenu', 0],
            'onAdminTaskExecute' => ['onAdminTaskExecute', 0],
            'onTwigTemplatePaths' => ['onTwigTemplatePaths', 0],
        ]);
    }

    /**
     * Add admin menu item
     */
    public function onAdminMenu()
    {
        $twig = $this->grav['twig'];
        
        $twig->plugins_hooked_nav['⚡ Exhibits Manager'] = [
            'route' => $this->exhibits_route,
            'icon' => 'fa-bolt',
            'authorize' => ['admin.login', 'admin.super'],
            'priority' => 8
        ];
    }

    /**
     * Add template paths
     */
    public function onTwigTemplatePaths()
    {
        $this->grav['twig']->twig_paths[] = __DIR__ . '/templates';
    }

    /**
     * Handle admin tasks
     */
    public function onAdminTaskExecute(Event $event)
    {
        $method = $event['method'];
        
        if (strpos($method, 'task') === 0) {
            $task = substr($method, 4);
            $task = strtolower($task);
            
            switch ($task) {
                case 'saveexhibit':
                    $this->taskSaveExhibit();
                    break;
                case 'deleteexhibit':
                    $this->taskDeleteExhibit();
                    break;
                case 'addexhibit':
                    $this->taskAddExhibit();
                    break;
                case 'updatestats':
                    $this->taskUpdateStats();
                    break;
                case 'reorderexhibits':
                    $this->taskReorderExhibits();
                    break;
            }
        }
    }

    /**
     * Get database connection
     */
    private function getDatabaseConnection()
    {
        $host = 'localhost';
        $db   = 'u747221136_energy_museum';
        $user = 'u747221136_justinjramalho';
        $pass = 'JustinIsTheBest1!';
        $charset = 'utf8mb4';

        $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
        $options = [
            \PDO::ATTR_ERRMODE            => \PDO::ERRMODE_EXCEPTION,
            \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
            \PDO::ATTR_EMULATE_PREPARES   => false,
        ];

        try {
            return new \PDO($dsn, $user, $pass, $options);
        } catch (\PDOException $e) {
            throw new \Exception('Database connection failed: ' . $e->getMessage());
        }
    }

    /**
     * Get all exhibits from database
     */
    public function getExhibits()
    {
        try {
            $pdo = $this->getDatabaseConnection();
            $stmt = $pdo->query("SELECT * FROM exhibits ORDER BY display_order ASC, created_at DESC");
            $exhibits = $stmt->fetchAll();

            // Convert learning_approaches string back to array for display
            foreach ($exhibits as &$exhibit) {
                if (isset($exhibit['learning_approaches'])) {
                    $exhibit['learning_approaches'] = explode(',', $exhibit['learning_approaches']);
                }
            }

            return $exhibits;
        } catch (\Exception $e) {
            $this->grav['log']->error('Error fetching exhibits: ' . $e->getMessage());
            return [];
        }
    }

    /**
     * Get all categories from database
     */
    public function getCategories()
    {
        try {
            $pdo = $this->getDatabaseConnection();
            $stmt = $pdo->query("SELECT * FROM exhibit_categories ORDER BY display_order ASC");
            return $stmt->fetchAll();
        } catch (\Exception $e) {
            $this->grav['log']->error('Error fetching categories: ' . $e->getMessage());
            return [];
        }
    }

    /**
     * Task: Save exhibit
     */
    private function taskSaveExhibit()
    {
        $data = $this->grav['request']->request->all();
        
        try {
            $pdo = $this->getDatabaseConnection();
            
            // Convert learning approaches array to comma-separated string
            $learning_approaches = '';
            if (isset($data['learning_approaches']) && is_array($data['learning_approaches'])) {
                $learning_approaches = implode(',', $data['learning_approaches']);
            }

            $sql = "UPDATE exhibits SET 
                        title = :title,
                        description = :description,
                        learning_approaches = :learning_approaches,
                        tags = :tags,
                        icon = :icon,
                        gradient = :gradient,
                        difficulty = :difficulty,
                        story_type = :story_type,
                        duration = :duration,
                        visitors = :visitors,
                        comments = :comments,
                        content = :content,
                        visitor_stories = :visitor_stories,
                        display_order = :display_order,
                        is_featured = :is_featured,
                        is_published = :is_published,
                        updated_at = NOW()
                    WHERE id = :id";

            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                ':id' => $data['id'],
                ':title' => $data['title'],
                ':description' => $data['description'],
                ':learning_approaches' => $learning_approaches,
                ':tags' => $data['tags'],
                ':icon' => $data['icon'],
                ':gradient' => $data['gradient'],
                ':difficulty' => $data['difficulty'],
                ':story_type' => $data['story_type'],
                ':duration' => $data['duration'],
                ':visitors' => (int)$data['visitors'],
                ':comments' => (int)$data['comments'],
                ':content' => $data['content'] ?? '',
                ':visitor_stories' => $data['visitor_stories'] ?? '',
                ':display_order' => (int)$data['display_order'],
                ':is_featured' => isset($data['is_featured']) ? 1 : 0,
                ':is_published' => isset($data['is_published']) ? 1 : 0
            ]);

            $this->grav->redirect('/admin/' . $this->exhibits_route . '?message=Exhibit saved successfully');
            
        } catch (\Exception $e) {
            $this->grav['log']->error('Error saving exhibit: ' . $e->getMessage());
            $this->grav->redirect('/admin/' . $this->exhibits_route . '?error=Failed to save exhibit');
        }
    }

    /**
     * Task: Add new exhibit
     */
    private function taskAddExhibit()
    {
        $data = $this->grav['request']->request->all();
        
        try {
            $pdo = $this->getDatabaseConnection();
            
            // Convert learning approaches array to comma-separated string
            $learning_approaches = '';
            if (isset($data['learning_approaches']) && is_array($data['learning_approaches'])) {
                $learning_approaches = implode(',', $data['learning_approaches']);
            }

            $sql = "INSERT INTO exhibits (
                        id, title, description, learning_approaches, tags, icon, gradient,
                        difficulty, story_type, duration, visitors, comments, content,
                        visitor_stories, display_order, is_featured, is_published, created_at, updated_at
                    ) VALUES (
                        :id, :title, :description, :learning_approaches, :tags, :icon, :gradient,
                        :difficulty, :story_type, :duration, :visitors, :comments, :content,
                        :visitor_stories, :display_order, :is_featured, :is_published, NOW(), NOW()
                    )";

            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                ':id' => $data['id'],
                ':title' => $data['title'],
                ':description' => $data['description'],
                ':learning_approaches' => $learning_approaches,
                ':tags' => $data['tags'],
                ':icon' => $data['icon'],
                ':gradient' => $data['gradient'],
                ':difficulty' => $data['difficulty'],
                ':story_type' => $data['story_type'],
                ':duration' => $data['duration'],
                ':visitors' => (int)$data['visitors'],
                ':comments' => (int)$data['comments'],
                ':content' => $data['content'] ?? '',
                ':visitor_stories' => $data['visitor_stories'] ?? '',
                ':display_order' => (int)$data['display_order'],
                ':is_featured' => isset($data['is_featured']) ? 1 : 0,
                ':is_published' => isset($data['is_published']) ? 1 : 0
            ]);

            $this->grav->redirect('/admin/' . $this->exhibits_route . '?message=Exhibit added successfully');
            
        } catch (\Exception $e) {
            $this->grav['log']->error('Error adding exhibit: ' . $e->getMessage());
            $this->grav->redirect('/admin/' . $this->exhibits_route . '?error=Failed to add exhibit');
        }
    }

    /**
     * Task: Delete exhibit
     */
    private function taskDeleteExhibit()
    {
        $id = $this->grav['request']->request->get('id');
        
        try {
            $pdo = $this->getDatabaseConnection();
            
            $sql = "DELETE FROM exhibits WHERE id = :id";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([':id' => $id]);

            $this->grav->redirect('/admin/' . $this->exhibits_route . '?message=Exhibit deleted successfully');
            
        } catch (\Exception $e) {
            $this->grav['log']->error('Error deleting exhibit: ' . $e->getMessage());
            $this->grav->redirect('/admin/' . $this->exhibits_route . '?error=Failed to delete exhibit');
        }
    }

    /**
     * Task: Update visitor/comment stats
     */
    private function taskUpdateStats()
    {
        $data = $this->grav['request']->request->all();
        
        try {
            $pdo = $this->getDatabaseConnection();
            
            $sql = "UPDATE exhibits SET visitors = :visitors, comments = :comments WHERE id = :id";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                ':id' => $data['id'],
                ':visitors' => (int)$data['visitors'],
                ':comments' => (int)$data['comments']
            ]);

            echo json_encode(['success' => true, 'message' => 'Stats updated successfully']);
            
        } catch (\Exception $e) {
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
        }
        exit;
    }

    /**
     * Task: Reorder exhibits
     */
    private function taskReorderExhibits()
    {
        $order = $this->grav['request']->request->get('order');
        
        try {
            $pdo = $this->getDatabaseConnection();
            
            $pdo->beginTransaction();
            
            foreach ($order as $position => $id) {
                $sql = "UPDATE exhibits SET display_order = :order WHERE id = :id";
                $stmt = $pdo->prepare($sql);
                $stmt->execute([
                    ':order' => $position + 1,
                    ':id' => $id
                ]);
            }
            
            $pdo->commit();
            
            echo json_encode(['success' => true, 'message' => 'Order updated successfully']);
            
        } catch (\Exception $e) {
            $pdo->rollback();
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
        }
        exit;
    }
}
?>
