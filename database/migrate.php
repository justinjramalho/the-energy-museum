<?php
/**
 * Database Migration Script for Energy Museum Forum
 * Run this to set up the complete forum database structure
 */

require_once __DIR__ . '/../api/ForumDatabase.php';

class ForumMigration {
    private $pdo;
    
    public function __construct($config = null) {
        $config = $config ?: [
            'host' => $_ENV['DB_HOST'] ?? 'localhost',
            'dbname' => $_ENV['DB_NAME'] ?? 'u747221136_energy_museum',
            'username' => $_ENV['DB_USER'] ?? 'u747221136_justinjramalho',
            'password' => $_ENV['DB_PASS'] ?? 'JustinIsTheBest1!',
            'charset' => 'utf8mb4'
        ];
        
        try {
            $dsn = "mysql:host={$config['host']};dbname={$config['dbname']};charset={$config['charset']}";
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];
            
            $this->pdo = new PDO($dsn, $config['username'], $config['password'], $options);
            echo "✅ Database connection established\n";
        } catch (PDOException $e) {
            die("❌ Database connection failed: " . $e->getMessage() . "\n");
        }
    }
    
    public function migrate() {
        echo "🚀 Starting Forum Database Migration...\n\n";
        
        try {
            // Read and execute the schema file
            $schemaFile = __DIR__ . '/forum_schema.sql';
            if (!file_exists($schemaFile)) {
                throw new Exception("Schema file not found: $schemaFile");
            }
            
            $sql = file_get_contents($schemaFile);
            
            // Split into individual statements
            $statements = $this->splitSqlStatements($sql);
            
            echo "📝 Executing " . count($statements) . " SQL statements...\n";
            
            foreach ($statements as $index => $statement) {
                $statement = trim($statement);
                if (empty($statement) || $statement === ';') {
                    continue;
                }
                
                try {
                    $this->pdo->exec($statement);
                    
                    // Show progress for major operations
                    if (stripos($statement, 'CREATE TABLE') === 0) {
                        preg_match('/CREATE TABLE\s+(\w+)/i', $statement, $matches);
                        $tableName = $matches[1] ?? 'unknown';
                        echo "  ✓ Created table: $tableName\n";
                    } elseif (stripos($statement, 'CREATE VIEW') === 0) {
                        preg_match('/CREATE VIEW\s+(\w+)/i', $statement, $matches);
                        $viewName = $matches[1] ?? 'unknown';
                        echo "  ✓ Created view: $viewName\n";
                    } elseif (stripos($statement, 'CREATE TRIGGER') === 0) {
                        preg_match('/CREATE TRIGGER\s+(\w+)/i', $statement, $matches);
                        $triggerName = $matches[1] ?? 'unknown';
                        echo "  ✓ Created trigger: $triggerName\n";
                    } elseif (stripos($statement, 'CREATE PROCEDURE') === 0) {
                        preg_match('/CREATE PROCEDURE\s+(\w+)/i', $statement, $matches);
                        $procName = $matches[1] ?? 'unknown';
                        echo "  ✓ Created procedure: $procName\n";
                    } elseif (stripos($statement, 'INSERT INTO') === 0) {
                        preg_match('/INSERT INTO\s+(\w+)/i', $statement, $matches);
                        $tableName = $matches[1] ?? 'unknown';
                        echo "  ✓ Inserted data into: $tableName\n";
                    }
                    
                } catch (PDOException $e) {
                    // Some statements might fail if they already exist, that's okay
                    $errorCode = $e->getCode();
                    $errorMessage = $e->getMessage();
                    
                    // Ignore "already exists" errors
                    if (stripos($errorMessage, 'already exists') !== false || 
                        $errorCode === '42S01' || // Table already exists
                        $errorCode === '42000') {  // Object already exists
                        continue;
                    }
                    
                    echo "  ⚠️  Warning on statement " . ($index + 1) . ": " . $errorMessage . "\n";
                }
            }
            
            echo "\n✅ Database migration completed successfully!\n\n";
            
            // Verify the installation
            $this->verifyInstallation();
            
        } catch (Exception $e) {
            echo "\n❌ Migration failed: " . $e->getMessage() . "\n";
            exit(1);
        }
    }
    
    private function splitSqlStatements($sql) {
        // Remove comments and normalize
        $sql = preg_replace('/--.*$/m', '', $sql);
        $sql = preg_replace('/\/\*.*?\*\//s', '', $sql);
        
        // Handle DELIMITER statements
        $sql = preg_replace('/DELIMITER\s+(\S+).*?DELIMITER\s*;/s', function($matches) {
            $delimiter = $matches[1];
            $content = $matches[0];
            // Replace custom delimiter with semicolon
            $content = str_replace($delimiter, ';', $content);
            // Remove DELIMITER statements
            $content = preg_replace('/DELIMITER\s+\S+\s*/', '', $content);
            return $content;
        }, $sql);
        
        // Split on semicolons not within quotes
        $statements = [];
        $current = '';
        $inString = false;
        $stringChar = '';
        
        for ($i = 0; $i < strlen($sql); $i++) {
            $char = $sql[$i];
            
            if (!$inString && ($char === '"' || $char === "'")) {
                $inString = true;
                $stringChar = $char;
            } elseif ($inString && $char === $stringChar) {
                // Check for escaped quote
                if ($i > 0 && $sql[$i-1] !== '\\') {
                    $inString = false;
                }
            } elseif (!$inString && $char === ';') {
                $statements[] = trim($current);
                $current = '';
                continue;
            }
            
            $current .= $char;
        }
        
        if (trim($current)) {
            $statements[] = trim($current);
        }
        
        return array_filter($statements, function($stmt) {
            return !empty(trim($stmt));
        });
    }
    
    private function verifyInstallation() {
        echo "🔍 Verifying installation...\n";
        
        $tables = [
            'users', 'guest_users', 'categories', 'topics', 'replies',
            'votes', 'flags', 'moderation_log', 'daily_stats', 
            'notifications', 'forum_settings'
        ];
        
        foreach ($tables as $table) {
            try {
                $stmt = $this->pdo->query("SELECT COUNT(*) FROM $table");
                $count = $stmt->fetchColumn();
                echo "  ✓ Table '$table': $count rows\n";
            } catch (PDOException $e) {
                echo "  ❌ Table '$table': ERROR - " . $e->getMessage() . "\n";
            }
        }
        
        // Check views
        $views = ['topic_list_view', 'reply_list_view'];
        foreach ($views as $view) {
            try {
                $stmt = $this->pdo->query("SELECT COUNT(*) FROM $view");
                $count = $stmt->fetchColumn();
                echo "  ✓ View '$view': $count rows\n";
            } catch (PDOException $e) {
                echo "  ❌ View '$view': ERROR - " . $e->getMessage() . "\n";
            }
        }
        
        echo "\n📊 Installation Summary:\n";
        
        // Show categories
        $stmt = $this->pdo->query("SELECT name FROM categories ORDER BY sort_order");
        $categories = $stmt->fetchAll(PDO::FETCH_COLUMN);
        echo "  Categories: " . implode(', ', $categories) . "\n";
        
        // Show settings
        $stmt = $this->pdo->query("SELECT COUNT(*) FROM forum_settings");
        $settingsCount = $stmt->fetchColumn();
        echo "  Forum settings: $settingsCount configured\n";
        
        echo "\n🎉 Forum database is ready for use!\n";
    }
    
    public function rollback() {
        echo "🔄 Rolling back forum database...\n";
        
        $tables = [
            'moderation_log', 'notifications', 'flags', 'votes', 'replies', 
            'topics', 'categories', 'users', 'guest_users', 'daily_stats', 
            'forum_settings'
        ];
        
        // Drop views first
        $views = ['topic_list_view', 'reply_list_view'];
        foreach ($views as $view) {
            try {
                $this->pdo->exec("DROP VIEW IF EXISTS $view");
                echo "  ✓ Dropped view: $view\n";
            } catch (PDOException $e) {
                echo "  ⚠️  Could not drop view $view: " . $e->getMessage() . "\n";
            }
        }
        
        // Drop procedures and triggers
        try {
            $this->pdo->exec("DROP PROCEDURE IF EXISTS CleanupOldGuestUsers");
            $this->pdo->exec("DROP PROCEDURE IF EXISTS UpdateDailyStats");
            echo "  ✓ Dropped procedures\n";
        } catch (PDOException $e) {
            echo "  ⚠️  Could not drop procedures: " . $e->getMessage() . "\n";
        }
        
        // Drop tables in reverse order
        foreach (array_reverse($tables) as $table) {
            try {
                $this->pdo->exec("DROP TABLE IF EXISTS $table");
                echo "  ✓ Dropped table: $table\n";
            } catch (PDOException $e) {
                echo "  ⚠️  Could not drop table $table: " . $e->getMessage() . "\n";
            }
        }
        
        echo "\n✅ Rollback completed\n";
    }
    
    public function seedTestData() {
        echo "🌱 Seeding test data...\n";
        
        try {
            // Create test guest user
            $stmt = $this->pdo->prepare("INSERT INTO guest_users (session_id, display_name, role_title, ip_address) VALUES (?, ?, ?, ?)");
            $stmt->execute(['test_session_123', 'Sarah M.', 'Middle School Teacher', '127.0.0.1']);
            $guestUserId = $this->pdo->lastInsertId();
            
            // Create test topics
            $topics = [
                [
                    'title' => 'NGSS Alignment Best Practices',
                    'content' => 'I\'m implementing OpenSciEd in my middle school science classes and looking for best practices for ensuring strong NGSS alignment. Our district is particularly focused on the three-dimensional learning aspects.',
                    'category_id' => 1, // Trainings
                    'guest_user_id' => $guestUserId,
                    'status' => 'approved'
                ],
                [
                    'title' => 'Title I Grant Application Tips',
                    'content' => 'Here are some proven strategies for successful Title I grant applications based on our experience helping schools secure funding for energy education programs.',
                    'category_id' => 2, // Funding
                    'guest_user_id' => $guestUserId,
                    'status' => 'approved',
                    'is_pinned' => true
                ]
            ];
            
            foreach ($topics as $topic) {
                $stmt = $this->pdo->prepare("INSERT INTO topics (category_id, guest_user_id, title, content, slug, status, is_pinned, approved_at) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())");
                $stmt->execute([
                    $topic['category_id'],
                    $topic['guest_user_id'],
                    $topic['title'],
                    $topic['content'],
                    $this->generateSlug($topic['title']),
                    $topic['status'],
                    $topic['is_pinned'] ?? false
                ]);
                
                echo "  ✓ Created topic: " . $topic['title'] . "\n";
            }
            
            echo "\n✅ Test data seeded successfully!\n";
            
        } catch (Exception $e) {
            echo "\n❌ Failed to seed test data: " . $e->getMessage() . "\n";
        }
    }
    
    private function generateSlug($title) {
        return strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title), '-'));
    }
}

// CLI Usage
if (php_sapi_name() === 'cli') {
    $action = $argv[1] ?? 'migrate';
    
    $migration = new ForumMigration();
    
    switch ($action) {
        case 'migrate':
            $migration->migrate();
            break;
        case 'rollback':
            $migration->rollback();
            break;
        case 'seed':
            $migration->seedTestData();
            break;
        case 'fresh':
            echo "🔄 Fresh installation...\n";
            $migration->rollback();
            $migration->migrate();
            $migration->seedTestData();
            break;
        default:
            echo "Usage: php migrate.php [migrate|rollback|seed|fresh]\n";
            echo "  migrate  - Run database migration\n";
            echo "  rollback - Remove all forum tables\n";
            echo "  seed     - Add test data\n";
            echo "  fresh    - Rollback + Migrate + Seed\n";
            exit(1);
    }
}
?>
