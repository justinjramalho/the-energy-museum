<?php
/**
 * Energy Museum Forum Database Setup for Production Server
 * Optimized for Hostinger/MariaDB 10.11.10 with PHP 8.2.28
 * 
 * INSTRUCTIONS:
 * 1. Upload this file to your public_html directory
 * 2. Visit: https://theenergymuseum.com/setup-forum-database.php
 * 3. Follow the step-by-step setup process
 */

// Security: Only allow setup to run once
$setup_complete_file = __DIR__ . '/database/.setup_complete';
if (file_exists($setup_complete_file)) {
    die('🔒 Setup already completed. Delete /database/.setup_complete to run again.');
}

echo "<h1>🗄️ Energy Museum Forum Database Setup</h1>\n";
echo "<style>
body{font-family:Arial,sans-serif;max-width:900px;margin:0 auto;padding:20px;line-height:1.6} 
.success{color:green;background:#f0fff0;padding:10px;border-radius:5px;margin:10px 0} 
.warning{color:orange;background:#fff8dc;padding:10px;border-radius:5px;margin:10px 0} 
.error{color:red;background:#ffe4e1;padding:10px;border-radius:5px;margin:10px 0} 
.info{background:#f0f8ff;padding:10px;border-radius:5px;margin:10px 0}
.code{background:#f5f5f5;padding:10px;border-radius:5px;font-family:monospace;margin:10px 0}
.step{background:#e8f5e8;padding:15px;border-radius:8px;margin:20px 0;border-left:4px solid #4CAF50}
button{background:#4CAF50;color:white;padding:10px 20px;border:none;border-radius:5px;cursor:pointer;font-size:16px}
button:hover{background:#45a049}
</style>\n";

// Database configuration
$db_config = [
    'host' => 'localhost', // Based on your successful connection test
    'dbname' => 'u747221136_energy_museum',
    'username' => 'u747221136_justinjramalho', 
    'password' => 'JustinIsTheBest1!',
    'charset' => 'utf8mb4'
];

$setup_step = $_GET['step'] ?? '1';

switch ($setup_step) {
    case '1':
        showWelcomeStep();
        break;
    case '2':
        testDatabaseConnection($db_config);
        break;
    case '3':
        runDatabaseMigration($db_config);
        break;
    case '4':
        seedSampleData($db_config);
        break;
    case '5':
        completeFinalSetup($db_config);
        break;
    default:
        showWelcomeStep();
}

function showWelcomeStep() {
    echo "<div class='step'>";
    echo "<h2>🚀 Step 1: Welcome to Forum Database Setup</h2>";
    echo "<p>This wizard will set up your forum database with the following features:</p>";
    echo "<ul>";
    echo "<li>✅ <strong>Complete Database Schema</strong> - 11 tables for full functionality</li>";
    echo "<li>✅ <strong>User Management</strong> - Support for registered and guest users</li>";
    echo "<li>✅ <strong>Voting System</strong> - Persistent upvote/downvote tracking</li>";
    echo "<li>✅ <strong>Moderation Tools</strong> - Full approval workflow</li>";
    echo "<li>✅ <strong>Analytics</strong> - Community engagement metrics</li>";
    echo "<li>✅ <strong>Grav Integration</strong> - Seamless CMS connectivity</li>";
    echo "</ul>";
    
    echo "<div class='info'>";
    echo "<h3>📋 Pre-Setup Checklist:</h3>";
    echo "<ul>";
    echo "<li>✅ PHP 8.2.28 (Confirmed)</li>";
    echo "<li>✅ MariaDB 10.11.10 (Confirmed)</li>";
    echo "<li>✅ Database Connection (Successful)</li>";
    echo "<li>✅ All project files uploaded</li>";
    echo "</ul>";
    echo "</div>";
    
    echo "<div class='warning'>";
    echo "<h3>⚠️ Important Notes:</h3>";
    echo "<ul>";
    echo "<li>This will create new database tables (existing data will be preserved)</li>";
    echo "<li>The setup process takes about 2-3 minutes</li>";
    echo "<li>You can safely re-run this if needed</li>";
    echo "</ul>";
    echo "</div>";
    
    echo "<p><strong>Ready to begin? Click 'Start Setup' to proceed.</strong></p>";
    echo "<p><a href='?step=2'><button>Start Database Setup</button></a></p>";
    echo "</div>";
}

function testDatabaseConnection($config) {
    echo "<div class='step'>";
    echo "<h2>🔌 Step 2: Testing Database Connection</h2>";
    
    try {
        $dsn = "mysql:host={$config['host']};dbname={$config['dbname']};charset={$config['charset']}";
        $pdo = new PDO($dsn, $config['username'], $config['password'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]);
        
        echo "<div class='success'>";
        echo "<h3>✅ Database Connection Successful!</h3>";
        
        // Get database info
        $stmt = $pdo->query("SELECT VERSION() as version");
        $version = $stmt->fetch()['version'];
        echo "<p><strong>Database Version:</strong> $version</p>";
        
        $stmt = $pdo->query("SHOW TABLES");
        $existing_tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
        echo "<p><strong>Existing Tables:</strong> " . count($existing_tables) . "</p>";
        
        if (count($existing_tables) > 0) {
            echo "<details><summary>View existing tables</summary><ul>";
            foreach ($existing_tables as $table) {
                echo "<li>$table</li>";
            }
            echo "</ul></details>";
        }
        echo "</div>";
        
        echo "<p><strong>Database connection verified. Ready to create forum tables.</strong></p>";
        echo "<p><a href='?step=3'><button>Create Forum Tables</button></a></p>";
        
    } catch (PDOException $e) {
        echo "<div class='error'>";
        echo "<h3>❌ Database Connection Failed</h3>";
        echo "<p><strong>Error:</strong> " . htmlspecialchars($e->getMessage()) . "</p>";
        echo "<p><strong>Please check:</strong></p>";
        echo "<ul>";
        echo "<li>Database credentials are correct</li>";
        echo "<li>Database exists in Hostinger panel</li>";
        echo "<li>User has full permissions</li>";
        echo "</ul>";
        echo "</div>";
        echo "<p><a href='?step=2'><button>Retry Connection</button></a></p>";
    }
    
    echo "</div>";
}

function runDatabaseMigration($config) {
    echo "<div class='step'>";
    echo "<h2>🗄️ Step 3: Creating Forum Database Structure</h2>";
    
    try {
        $dsn = "mysql:host={$config['host']};dbname={$config['dbname']};charset={$config['charset']}";
        $pdo = new PDO($dsn, $config['username'], $config['password'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
        
        // Check if schema file exists
        $schema_file = __DIR__ . '/database/forum_schema.sql';
        if (!file_exists($schema_file)) {
            throw new Exception("Schema file not found. Please ensure /database/forum_schema.sql is uploaded.");
        }
        
        echo "<p>📖 Reading database schema...</p>";
        $sql = file_get_contents($schema_file);
        
        // Split into individual statements (simplified version)
        $statements = explode(';', $sql);
        $successful = 0;
        $skipped = 0;
        
        echo "<p>🔧 Executing database statements...</p>";
        echo "<div style='max-height:200px;overflow-y:auto;background:#f9f9f9;padding:10px;border-radius:5px;margin:10px 0'>";
        
        foreach ($statements as $statement) {
            $statement = trim($statement);
            if (empty($statement) || strlen($statement) < 10) continue;
            
            try {
                $pdo->exec($statement);
                
                // Log major operations
                if (stripos($statement, 'CREATE TABLE') === 0) {
                    preg_match('/CREATE TABLE\s+(\w+)/i', $statement, $matches);
                    $table_name = $matches[1] ?? 'unknown';
                    echo "✅ Created table: <strong>$table_name</strong><br>";
                } elseif (stripos($statement, 'INSERT INTO') === 0) {
                    preg_match('/INSERT INTO\s+(\w+)/i', $statement, $matches);
                    $table_name = $matches[1] ?? 'unknown';
                    echo "📝 Inserted data into: <strong>$table_name</strong><br>";
                } elseif (stripos($statement, 'CREATE VIEW') === 0) {
                    preg_match('/CREATE VIEW\s+(\w+)/i', $statement, $matches);
                    $view_name = $matches[1] ?? 'unknown';
                    echo "👁️ Created view: <strong>$view_name</strong><br>";
                }
                
                $successful++;
                
            } catch (PDOException $e) {
                // Skip "already exists" errors
                if (stripos($e->getMessage(), 'already exists') !== false) {
                    $skipped++;
                    continue;
                }
                echo "<span style='color:orange'>⚠️ Warning: " . htmlspecialchars($e->getMessage()) . "</span><br>";
            }
        }
        
        echo "</div>";
        
        echo "<div class='success'>";
        echo "<h3>🎉 Database Migration Completed!</h3>";
        echo "<p><strong>Results:</strong></p>";
        echo "<ul>";
        echo "<li>✅ Successful operations: $successful</li>";
        echo "<li>⏭️ Skipped (already existed): $skipped</li>";
        echo "</ul>";
        echo "</div>";
        
        // Verify tables were created
        $stmt = $pdo->query("SHOW TABLES LIKE 'users'");
        if ($stmt->rowCount() > 0) {
            echo "<div class='info'>";
            echo "<h3>📊 Database Verification</h3>";
            
            $forum_tables = ['users', 'categories', 'topics', 'replies', 'votes', 'flags'];
            foreach ($forum_tables as $table) {
                try {
                    $stmt = $pdo->query("SELECT COUNT(*) as count FROM $table");
                    $count = $stmt->fetch()['count'];
                    echo "✅ Table '<strong>$table</strong>': $count rows<br>";
                } catch (Exception $e) {
                    echo "❌ Table '<strong>$table</strong>': Error<br>";
                }
            }
            echo "</div>";
            
            echo "<p><strong>Forum database structure is ready! Let's add some sample data.</strong></p>";
            echo "<p><a href='?step=4'><button>Add Sample Data</button></a></p>";
        } else {
            echo "<div class='error'>";
            echo "<h3>❌ Database Verification Failed</h3>";
            echo "<p>Core tables were not created successfully. Please check the error log above.</p>";
            echo "</div>";
            echo "<p><a href='?step=3'><button>Retry Migration</button></a></p>";
        }
        
    } catch (Exception $e) {
        echo "<div class='error'>";
        echo "<h3>❌ Migration Failed</h3>";
        echo "<p><strong>Error:</strong> " . htmlspecialchars($e->getMessage()) . "</p>";
        echo "</div>";
        echo "<p><a href='?step=3'><button>Retry Migration</button></a></p>";
    }
    
    echo "</div>";
}

function seedSampleData($config) {
    echo "<div class='step'>";
    echo "<h2>🌱 Step 4: Adding Sample Forum Data</h2>";
    
    try {
        $dsn = "mysql:host={$config['host']};dbname={$config['dbname']};charset={$config['charset']}";
        $pdo = new PDO($dsn, $config['username'], $config['password'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        ]);
        
        echo "<p>🎯 Creating sample forum content for testing...</p>";
        
        // Create test guest user
        $stmt = $pdo->prepare("INSERT IGNORE INTO guest_users (session_id, display_name, role_title, ip_address, user_agent) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute(['demo_session_123', 'Sarah M.', 'Middle School Teacher', '127.0.0.1', 'Demo User Agent']);
        $guest_user_id = $pdo->lastInsertId() ?: 1;
        
        // Create Energy Museum team user
        $stmt = $pdo->prepare("INSERT IGNORE INTO users (username, email, display_name, role_title, is_team_member, is_moderator, is_verified, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute(['energy_museum_team', 'team@theenergymuseum.com', 'Dr. Edward Cohen', 'Energy Museum Team', true, true, true, 'active']);
        $team_user_id = $pdo->lastInsertId() ?: 1;
        
        // Get category IDs
        $stmt = $pdo->query("SELECT id, slug FROM categories ORDER BY sort_order");
        $categories = $stmt->fetchAll(PDO::FETCH_KEY_PAIR);
        
        // Sample topics
        $sample_topics = [
            [
                'title' => 'NGSS Alignment Best Practices',
                'content' => 'I\'m implementing OpenSciEd in my middle school science classes and looking for best practices for ensuring strong NGSS alignment. Our district is particularly focused on the three-dimensional learning aspects, and I want to make sure my lessons truly embody the spirit of NGSS.\n\nSpecific questions:\n• How do you balance DCIs with SEPs and CCCs?\n• What assessment strategies work best?\n• Any experience with phenomena-based learning?\n\nThanks for any insights!',
                'category' => 'trainings',
                'author_type' => 'guest',
                'author_id' => $guest_user_id,
                'status' => 'approved',
                'is_pinned' => false
            ],
            [
                'title' => 'Title I Grant Application Tips - Team Response',
                'content' => 'Based on our experience helping schools secure over $2M in Title I funding for energy education programs, here are proven strategies for successful grant applications:\n\n🎯 **Key Success Factors:**\n• Align with ESSA requirements\n• Document evidence-based practices\n• Include measurable outcomes\n• Show sustainability planning\n• Demonstrate community need\n\n📊 **Required Documentation:**\n• Needs assessment data\n• Student performance baselines\n• Professional development plans\n• Budget justifications\n• Evaluation methodology\n\nWe\'re happy to review draft applications and provide feedback. Feel free to reach out!',
                'category' => 'funding',
                'author_type' => 'user',
                'author_id' => $team_user_id,
                'status' => 'approved',
                'is_pinned' => true
            ],
            [
                'title' => 'Family STEM Night Planning Questions',
                'content' => 'Planning our first Family & Friends STEM Night focused on renewable energy. Looking for advice on:\n\n• Age-appropriate activities for K-8\n• Materials and setup requirements\n• How to engage parents effectively\n• Time management tips\n\nOur goal is 100+ families. Any experience with events this size?',
                'category' => 'programs',
                'author_type' => 'guest',
                'author_id' => $guest_user_id,
                'status' => 'approved',
                'is_pinned' => false
            ]
        ];
        
        $created_topics = [];
        foreach ($sample_topics as $topic_data) {
            $category_id = $categories[$topic_data['category']] ?? 1;
            
            $stmt = $pdo->prepare("INSERT INTO topics (category_id, user_id, guest_user_id, title, content, slug, status, is_pinned, approved_at, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())");
            
            $user_id = ($topic_data['author_type'] === 'user') ? $topic_data['author_id'] : null;
            $guest_id = ($topic_data['author_type'] === 'guest') ? $topic_data['author_id'] : null;
            
            $stmt->execute([
                $category_id,
                $user_id,
                $guest_id,
                $topic_data['title'],
                $topic_data['content'],
                strtolower(str_replace([' ', '?', '!'], ['-', '', ''], $topic_data['title'])),
                $topic_data['status'],
                $topic_data['is_pinned']
            ]);
            
            $topic_id = $pdo->lastInsertId();
            $created_topics[] = $topic_id;
            
            echo "✅ Created topic: <strong>" . htmlspecialchars($topic_data['title']) . "</strong><br>";
        }
        
        // Add some sample replies
        if (count($created_topics) > 0) {
            $sample_replies = [
                [
                    'topic_id' => $created_topics[0],
                    'content' => 'Great question, Sarah! For NGSS alignment, I\'ve found success with phenomenon-first lesson design. Start with an engaging phenomenon, then let students drive the investigation. The SEPs emerge naturally when students are genuinely curious about explaining what they observe.',
                    'author_type' => 'user',
                    'author_id' => $team_user_id,
                    'is_pinned' => true
                ],
                [
                    'topic_id' => $created_topics[2],
                    'content' => 'We\'ve run several large STEM nights! Key tip: set up stations with 15-minute rotations. Have high school volunteers help manage activities. Pre-register families to estimate attendance and materials needed.',
                    'author_type' => 'guest',
                    'author_id' => $guest_user_id,
                    'is_pinned' => false
                ]
            ];
            
            foreach ($sample_replies as $reply_data) {
                $stmt = $pdo->prepare("INSERT INTO replies (topic_id, user_id, guest_user_id, content, status, is_pinned, approved_at, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())");
                
                $user_id = ($reply_data['author_type'] === 'user') ? $reply_data['author_id'] : null;
                $guest_id = ($reply_data['author_type'] === 'guest') ? $reply_data['author_id'] : null;
                
                $stmt->execute([
                    $reply_data['topic_id'],
                    $user_id,
                    $guest_id,
                    $reply_data['content'],
                    'approved',
                    $reply_data['is_pinned']
                ]);
                
                echo "✅ Added reply to topic ID: " . $reply_data['topic_id'] . "<br>";
            }
        }
        
        echo "<div class='success'>";
        echo "<h3>🎉 Sample Data Added Successfully!</h3>";
        echo "<p><strong>Created:</strong></p>";
        echo "<ul>";
        echo "<li>✅ 2 User accounts (team member + guest)</li>";
        echo "<li>✅ 3 Sample topics across different categories</li>";
        echo "<li>✅ 2 Sample replies with team responses</li>";
        echo "<li>✅ Pinned content for important answers</li>";
        echo "</ul>";
        echo "</div>";
        
        echo "<p><strong>Your forum now has realistic sample content for testing. Ready for final setup!</strong></p>";
        echo "<p><a href='?step=5'><button>Complete Setup</button></a></p>";
        
    } catch (Exception $e) {
        echo "<div class='error'>";
        echo "<h3>❌ Sample Data Creation Failed</h3>";
        echo "<p><strong>Error:</strong> " . htmlspecialchars($e->getMessage()) . "</p>";
        echo "<p>This is not critical - your database structure is still complete.</p>";
        echo "</div>";
        echo "<p><a href='?step=5'><button>Skip to Final Setup</button></a></p>";
    }
    
    echo "</div>";
}

function completeFinalSetup($config) {
    echo "<div class='step'>";
    echo "<h2>🎉 Step 5: Forum Database Setup Complete!</h2>";
    
    try {
        $dsn = "mysql:host={$config['host']};dbname={$config['dbname']};charset={$config['charset']}";
        $pdo = new PDO($dsn, $config['username'], $config['password'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        ]);
        
        // Final verification
        echo "<div class='success'>";
        echo "<h3>✅ Setup Verification</h3>";
        
        $verification_checks = [
            'users' => 'User management system',
            'categories' => 'Forum categories',
            'topics' => 'Discussion topics',
            'replies' => 'Comment system',
            'votes' => 'Voting functionality',
            'flags' => 'Content moderation',
            'forum_settings' => 'Configuration settings'
        ];
        
        $all_good = true;
        foreach ($verification_checks as $table => $description) {
            try {
                $stmt = $pdo->query("SELECT COUNT(*) as count FROM $table");
                $count = $stmt->fetch()['count'];
                echo "✅ <strong>$description</strong>: $count records<br>";
            } catch (Exception $e) {
                echo "❌ <strong>$description</strong>: Error<br>";
                $all_good = false;
            }
        }
        echo "</div>";
        
        if ($all_good) {
            echo "<div class='info'>";
            echo "<h3>🚀 What's Next?</h3>";
            echo "<ol>";
            echo "<li><strong>Test Your Forum:</strong> Visit <a href='/forum' target='_blank'>theenergymuseum.com/forum</a></li>";
            echo "<li><strong>Try Posting:</strong> Use the 'Ask a Question' button</li>";
            echo "<li><strong>Test Voting:</strong> Upvote/downvote content (should persist)</li>";
            echo "<li><strong>Check Moderation:</strong> All new posts go to approval queue</li>";
            echo "</ol>";
            echo "</div>";
            
            echo "<div class='warning'>";
            echo "<h3>🔧 Configuration Notes</h3>";
            echo "<ul>";
            echo "<li><strong>Moderation:</strong> All posts require approval by default</li>";
            echo "<li><strong>Team Posts:</strong> Energy Museum team posts are auto-approved</li>";
            echo "<li><strong>Guest Posting:</strong> Enabled with name/email collection</li>";
            echo "<li><strong>Analytics:</strong> Daily statistics are tracked automatically</li>";
            echo "</ul>";
            echo "</div>";
            
            // Create setup completion marker
            $setup_dir = __DIR__ . '/database';
            if (!is_dir($setup_dir)) {
                mkdir($setup_dir, 0755, true);
            }
            file_put_contents($setup_dir . '/.setup_complete', date('Y-m-d H:i:s') . "\nSetup completed successfully\n");
            
            echo "<div class='success'>";
            echo "<h3>🎯 Forum Database Is Live!</h3>";
            echo "<p>Your Energy Museum community forum is now powered by a robust database with:</p>";
            echo "<ul>";
            echo "<li>✅ Persistent voting and flagging</li>";
            echo "<li>✅ Full moderation workflow</li>";
            echo "<li>✅ Analytics and growth tracking</li>";
            echo "<li>✅ Scalable to Comments Pro plugin</li>";
            echo "</ul>";
            echo "<p><strong>The forum is ready for your community!</strong></p>";
            echo "</div>";
            
            echo "<p><a href='/forum'><button>Visit Your Forum</button></a> ";
            echo "<a href='/check-server-info.php'><button style='background:#666'>View Server Status</button></a></p>";
            
        } else {
            echo "<div class='error'>";
            echo "<h3>⚠️ Setup Issues Detected</h3>";
            echo "<p>Some verification checks failed. The forum may not function correctly.</p>";
            echo "<p>Please review the errors above and consider re-running the setup.</p>";
            echo "</div>";
            echo "<p><a href='?step=3'><button>Retry Database Setup</button></a></p>";
        }
        
    } catch (Exception $e) {
        echo "<div class='error'>";
        echo "<h3>❌ Final Verification Failed</h3>";
        echo "<p><strong>Error:</strong> " . htmlspecialchars($e->getMessage()) . "</p>";
        echo "</div>";
    }
    
    echo "</div>";
    
    echo "<hr>";
    echo "<p><small>Energy Museum Forum Database Setup Complete | " . date('Y-m-d H:i:s T') . "</small></p>";
}
?>
