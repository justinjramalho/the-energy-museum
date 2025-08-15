<?php
/**
 * Final Exhibits Database Setup for Phase 1 Integration
 * Uses separate table names to avoid conflicts with forum database
 */

// Database configuration
$db_config = [
    'host' => 'localhost',
    'dbname' => 'u747221136_energy_museum',
    'username' => 'u747221136_justinjramalho',
    'password' => 'JustinIsTheBest1!',
    'charset' => 'utf8mb4'
];

echo "<h1>🎯 Phase 1: Exhibits Database Setup (Final)</h1>\n";
echo "<style>
body{font-family:Arial,sans-serif;max-width:900px;margin:0 auto;padding:20px;line-height:1.6} 
.success{color:green;background:#f0fff0;padding:10px;border-radius:5px;margin:10px 0} 
.error{color:red;background:#ffe4e1;padding:10px;border-radius:5px;margin:10px 0} 
.info{background:#f0f8ff;padding:10px;border-radius:5px;margin:10px 0}
.code{background:#f5f5f5;padding:10px;border-radius:5px;font-family:monospace;margin:10px 0}
</style>\n";

try {
    // Connect to database
    $dsn = "mysql:host={$db_config['host']};dbname={$db_config['dbname']};charset={$db_config['charset']}";
    $pdo = new PDO($dsn, $db_config['username'], $db_config['password'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    
    echo "<div class='success'><h3>✅ Database Connection Successful</h3></div>";
    
    // Check existing tables
    $stmt = $pdo->query("SHOW TABLES");
    $existing_tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
    echo "<div class='info'>";
    echo "<h4>📋 Existing Tables:</h4>";
    echo "<p>" . implode(', ', $existing_tables) . "</p>";
    echo "</div>";
    
    echo "<h3>📊 Creating Exhibits Database Structure</h3>";
    
    // Step 1: Create exhibits table (separate from forum)
    echo "<p>🔧 Creating exhibits table...</p>";
    $create_exhibits = "
    CREATE TABLE IF NOT EXISTS exhibits (
        id VARCHAR(100) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        learning_approach TEXT NOT NULL,
        pedagogy_tags TEXT,
        subject_tags TEXT,
        funding_tags TEXT,
        icon VARCHAR(10) DEFAULT '⚡',
        gradient VARCHAR(200) DEFAULT 'linear-gradient(135deg, #00d4ff, #0099cc)',
        difficulty ENUM('Beginner', 'Intermediate', 'Advanced') DEFAULT 'Beginner',
        story_type VARCHAR(100),
        duration VARCHAR(50),
        visitors INT DEFAULT 0,
        comments INT DEFAULT 0,
        status ENUM('draft', 'published', 'archived') DEFAULT 'published',
        sort_order INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";
    
    $pdo->exec($create_exhibits);
    echo "<p>✅ Exhibits table created successfully</p>";
    
    // Step 2: Create exhibit_categories table (separate from forum categories)
    echo "<p>🔧 Creating exhibit_categories table...</p>";
    $create_exhibit_categories = "
    CREATE TABLE IF NOT EXISTS exhibit_categories (
        id VARCHAR(50) PRIMARY KEY,
        label VARCHAR(100) NOT NULL,
        description TEXT,
        icon VARCHAR(10),
        color VARCHAR(7) DEFAULT '#00d4ff',
        sort_order INT DEFAULT 0,
        is_active BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    
    $pdo->exec($create_exhibit_categories);
    echo "<p>✅ Exhibit categories table created successfully</p>";
    
    // Step 3: Clear existing exhibits data only (not forum categories)
    echo "<p>🧹 Clearing existing exhibits data...</p>";
    $pdo->exec("DELETE FROM exhibits");
    $pdo->exec("DELETE FROM exhibit_categories");
    echo "<p>✅ Exhibits tables cleared</p>";
    
    // Step 4: Insert exhibits one by one
    echo "<p>📝 Inserting exhibits...</p>";
    
    $exhibits = [
        [
            'id' => 'renewable-revolution',
            'title' => 'Renewable Revolution',
            'description' => 'Journey through an immersive historical narrative exploring humanity\'s relationship with renewable energy, from ancient windmills to futuristic solar arrays.',
            'learning_approach' => 'narrative-driven,virtual,place-based',
            'pedagogy_tags' => 'Historical Journey,Interactive Timeline,Real-World Application',
            'subject_tags' => 'Wind Energy,Solar Technology',
            'funding_tags' => '',
            'icon' => '🌞',
            'gradient' => 'linear-gradient(135deg, #FFD700, #FFA500)',
            'difficulty' => 'Beginner',
            'story_type' => 'Historical Narrative',
            'duration' => '15-20 min',
            'visitors' => 1250,
            'comments' => 89
        ],
        [
            'id' => 'physics-of-power',
            'title' => 'The Physics of Power',
            'description' => 'Embark on a mind-bending interactive journey where abstract physics becomes tangible reality. Manipulate energy fields and witness quantum phenomena in action.',
            'learning_approach' => 'problem-based,virtual',
            'pedagogy_tags' => 'Scientific Problem,Virtual Reality,Innovation Challenge',
            'subject_tags' => 'Quantum Physics,Energy Laws',
            'funding_tags' => '',
            'icon' => '⚡',
            'gradient' => 'linear-gradient(135deg, #00d4ff, #0099cc)',
            'difficulty' => 'Advanced',
            'story_type' => 'Interactive Discovery',
            'duration' => '20-25 min',
            'visitors' => 987,
            'comments' => 156
        ],
        [
            'id' => 'energy-society',
            'title' => 'Energy and Society',
            'description' => 'Follow the dramatic narrative of how energy transformed human civilization, from steam engines to smart cities, through the eyes of historical figures.',
            'learning_approach' => 'narrative-driven,place-based',
            'pedagogy_tags' => 'Historical Drama,Community Investigation,Real-World Application',
            'subject_tags' => 'Social Impact,Urban Planning',
            'funding_tags' => '',
            'icon' => '🏘️',
            'gradient' => 'linear-gradient(135deg, #32CD32, #228B22)',
            'difficulty' => 'Intermediate',
            'story_type' => 'Historical Drama',
            'duration' => '18-22 min',
            'visitors' => 1450,
            'comments' => 203
        ],
        [
            'id' => 'climate-solutions',
            'title' => 'Climate Solutions',
            'description' => 'Experience a future-forward simulation where you collaborate with scientists in 2050 to witness breakthrough technologies that solved the climate crisis.',
            'learning_approach' => 'problem-based,virtual,grant-supported',
            'pedagogy_tags' => 'Challenge-Based,Online Simulation,Research Investigation',
            'subject_tags' => 'Climate Action',
            'funding_tags' => 'NSF Funded',
            'icon' => '🌍',
            'gradient' => 'linear-gradient(135deg, #4169E1, #1E90FF)',
            'difficulty' => 'Intermediate',
            'story_type' => 'Future Simulation',
            'duration' => '25-30 min',
            'visitors' => 2100,
            'comments' => 287
        ],
        [
            'id' => 'battery-science',
            'title' => 'The Science of Energy Storage',
            'description' => 'Dive deep into the molecular world of batteries through a detective story, solving the mystery of how energy gets trapped and released.',
            'learning_approach' => 'narrative-driven,problem-based,virtual,grant-supported',
            'pedagogy_tags' => 'Scientific Mystery,Research Investigation,Virtual Reality',
            'subject_tags' => 'Battery Technology',
            'funding_tags' => 'STEM Grant',
            'icon' => '🔋',
            'gradient' => 'linear-gradient(135deg, #FF6347, #FF4500)',
            'difficulty' => 'Advanced',
            'story_type' => 'Scientific Mystery',
            'duration' => '22-28 min',
            'visitors' => 876,
            'comments' => 124
        ],
        [
            'id' => 'smart-homes',
            'title' => 'Smart Homes & Energy Efficiency',
            'description' => 'Experience a day in the life of an AI-powered smart home, learning how intelligent systems optimize energy use through interactive household scenarios.',
            'learning_approach' => 'place-based,virtual,problem-based,grant-supported',
            'pedagogy_tags' => 'Real-World Application,Interactive Timeline,Engineering Design',
            'subject_tags' => 'Smart Technology',
            'funding_tags' => 'Title I',
            'icon' => '🏠',
            'gradient' => 'linear-gradient(135deg, #9370DB, #8A2BE2)',
            'difficulty' => 'Beginner',
            'story_type' => 'Interactive Simulation',
            'duration' => '12-15 min',
            'visitors' => 1320,
            'comments' => 167
        ]
    ];
    
    $insert_stmt = $pdo->prepare("
        INSERT INTO exhibits (
            id, title, description, learning_approach, pedagogy_tags, subject_tags, funding_tags,
            icon, gradient, difficulty, story_type, duration, visitors, comments
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");
    
    foreach ($exhibits as $exhibit) {
        $insert_stmt->execute([
            $exhibit['id'], $exhibit['title'], $exhibit['description'], $exhibit['learning_approach'],
            $exhibit['pedagogy_tags'], $exhibit['subject_tags'], $exhibit['funding_tags'],
            $exhibit['icon'], $exhibit['gradient'], $exhibit['difficulty'], 
            $exhibit['story_type'], $exhibit['duration'], $exhibit['visitors'], $exhibit['comments']
        ]);
        echo "<p>✅ Inserted: <strong>{$exhibit['title']}</strong></p>";
    }
    
    // Step 5: Insert exhibit categories
    echo "<p>📝 Inserting exhibit categories...</p>";
    
    $categories = [
        ['all', 'All Learning Experiences', 'Show all available exhibits across all learning approaches', 0],
        ['place-based', 'Place-Based', 'Field experiences and real-world applications', 1],
        ['virtual', 'Virtual', 'Online simulations and digital experiences', 2],
        ['problem-based', 'Problem-Based', 'Challenge-based learning and research investigations', 3],
        ['narrative-driven', 'Narrative-Driven', 'Story-based and historical journey experiences', 4],
        ['grant-supported', 'Grant Supported', 'Exhibits funded by educational grants', 5]
    ];
    
    $category_stmt = $pdo->prepare("INSERT INTO exhibit_categories (id, label, description, sort_order) VALUES (?, ?, ?, ?)");
    
    foreach ($categories as $category) {
        $category_stmt->execute($category);
        echo "<p>✅ Inserted category: <strong>{$category[1]}</strong></p>";
    }
    
    echo "<div class='success'>";
    echo "<h3>🎉 Phase 1 Database Setup Complete!</h3>";
    echo "<p><strong>What was created:</strong></p>";
    echo "<ul>";
    echo "<li>✅ <strong>exhibits</strong> table with enhanced tag system</li>";
    echo "<li>✅ <strong>exhibit_categories</strong> table for dynamic filtering</li>";
    echo "<li>✅ <strong>6 current exhibits</strong> migrated with new structure</li>";
    echo "<li>✅ <strong>6 filter categories</strong> for pedagogy-based filtering</li>";
    echo "</ul>";
    echo "</div>";
    
    // Step 6: Verification
    echo "<h3>📋 Data Verification</h3>";
    
    $stmt = $pdo->query("SELECT COUNT(*) as count FROM exhibits WHERE status = 'published'");
    $exhibit_count = $stmt->fetch()['count'];
    echo "<p>✅ Published exhibits: <strong>$exhibit_count</strong></p>";
    
    $stmt = $pdo->query("SELECT COUNT(*) as count FROM exhibit_categories WHERE is_active = TRUE");
    $category_count = $stmt->fetch()['count'];
    echo "<p>✅ Active categories: <strong>$category_count</strong></p>";
    
    // Show sample exhibit with learning approaches
    $stmt = $pdo->query("SELECT id, title, learning_approach FROM exhibits ORDER BY sort_order LIMIT 3");
    $samples = $stmt->fetchAll();
    
    echo "<h4>📚 Sample Exhibits:</h4>";
    foreach ($samples as $sample) {
        echo "<div class='info'>";
        echo "<p><strong>{$sample['title']}</strong> (ID: {$sample['id']})</p>";
        echo "<p>Learning approaches: <code>{$sample['learning_approach']}</code></p>";
        echo "</div>";
    }
    
    // Show all tables now
    $stmt = $pdo->query("SHOW TABLES");
    $all_tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
    echo "<div class='info'>";
    echo "<h4>📋 All Database Tables:</h4>";
    echo "<p>" . implode(', ', $all_tables) . "</p>";
    echo "</div>";
    
    echo "<div class='success'>";
    echo "<h3>🚀 Ready for Step 2: API Integration</h3>";
    echo "<p>Your exhibits database is now ready for dynamic filtering!</p>";
    echo "<ol>";
    echo "<li>✅ <strong>Database setup complete</strong> (exhibits and exhibit_categories tables)</li>";
    echo "<li>🔄 <strong>Next:</strong> Create API endpoint for exhibit fetching</li>";
    echo "<li>🔄 <strong>Then:</strong> Update React component to use database</li>";
    echo "<li>🔄 <strong>Finally:</strong> Deploy and test dynamic filtering</li>";
    echo "</ol>";
    echo "<p><strong>Note:</strong> Forum database remains intact (categories, topics, replies, etc.)</p>";
    echo "</div>";
    
} catch (Exception $e) {
    echo "<div class='error'>";
    echo "<h3>❌ Setup Failed</h3>";
    echo "<p><strong>Error:</strong> " . htmlspecialchars($e->getMessage()) . "</p>";
    echo "<p><strong>Line:</strong> " . $e->getLine() . "</p>";
    echo "</div>";
}

echo "<hr><p><small>Phase 1 Database Setup (Final) | " . date('Y-m-d H:i:s T') . "</small></p>";
?>
