<?php
/**
 * Exhibits Database Setup for Phase 1 Integration
 * Creates exhibits and categories tables with current data
 */

// Database configuration (same as forum setup)
$db_config = [
    'host' => 'localhost',
    'dbname' => 'u747221136_energy_museum',
    'username' => 'u747221136_justinjramalho',
    'password' => 'JustinIsTheBest1!',
    'charset' => 'utf8mb4'
];

echo "<h1>🎯 Phase 1: Exhibits Database Setup</h1>\n";
echo "<style>
body{font-family:Arial,sans-serif;max-width:900px;margin:0 auto;padding:20px;line-height:1.6} 
.success{color:green;background:#f0fff0;padding:10px;border-radius:5px;margin:10px 0} 
.error{color:red;background:#ffe4e1;padding:10px;border-radius:5px;margin:10px 0} 
.info{background:#f0f8ff;padding:10px;border-radius:5px;margin:10px 0}
</style>\n";

try {
    // Connect to database
    $dsn = "mysql:host={$db_config['host']};dbname={$db_config['dbname']};charset={$db_config['charset']}";
    $pdo = new PDO($dsn, $db_config['username'], $db_config['password'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    
    echo "<div class='success'><h3>✅ Database Connection Successful</h3></div>";
    
    // Read and execute the exhibits schema
    $schema_file = __DIR__ . '/database/exhibits_schema.sql';
    if (!file_exists($schema_file)) {
        throw new Exception("Schema file not found: $schema_file");
    }
    
    $sql = file_get_contents($schema_file);
    
    // Split into individual statements
    $statements = array_filter(array_map('trim', explode(';', $sql)));
    
    echo "<h3>📊 Creating Exhibits Database Structure</h3>";
    
    foreach ($statements as $statement) {
        if (empty($statement) || strpos($statement, '--') === 0) continue;
        
        try {
            $pdo->exec($statement);
            
            if (stripos($statement, 'CREATE TABLE exhibits') !== false) {
                echo "<p>✅ Created exhibits table</p>";
            } elseif (stripos($statement, 'CREATE TABLE categories') !== false) {
                echo "<p>✅ Created categories table</p>";
            } elseif (stripos($statement, 'INSERT INTO exhibits') !== false) {
                echo "<p>✅ Inserted 6 exhibits with enhanced tag system</p>";
            } elseif (stripos($statement, 'INSERT INTO categories') !== false) {
                echo "<p>✅ Inserted 6 filter categories</p>";
            }
            
        } catch (PDOException $e) {
            if (stripos($e->getMessage(), 'already exists') !== false) {
                echo "<p>⏭️ Table already exists, skipping...</p>";
            } else {
                echo "<p style='color:orange'>⚠️ Warning: " . htmlspecialchars($e->getMessage()) . "</p>";
            }
        }
    }
    
    echo "<div class='success'>";
    echo "<h3>🎉 Phase 1 Database Setup Complete!</h3>";
    echo "<p><strong>What was created:</strong></p>";
    echo "<ul>";
    echo "<li>✅ <strong>exhibits</strong> table with enhanced tag system</li>";
    echo "<li>✅ <strong>categories</strong> table for dynamic filtering</li>";
    echo "<li>✅ <strong>6 current exhibits</strong> migrated with new structure</li>";
    echo "<li>✅ <strong>6 filter categories</strong> for pedagogy-based filtering</li>";
    echo "</ul>";
    echo "</div>";
    
    // Verify the data
    echo "<h3>📋 Data Verification</h3>";
    
    $stmt = $pdo->query("SELECT COUNT(*) as count FROM exhibits WHERE status = 'published'");
    $exhibit_count = $stmt->fetch()['count'];
    echo "<p>✅ Published exhibits: <strong>$exhibit_count</strong></p>";
    
    $stmt = $pdo->query("SELECT COUNT(*) as count FROM categories WHERE is_active = TRUE");
    $category_count = $stmt->fetch()['count'];
    echo "<p>✅ Active categories: <strong>$category_count</strong></p>";
    
    // Show sample exhibit
    $stmt = $pdo->query("SELECT id, title, learning_approach FROM exhibits LIMIT 1");
    $sample = $stmt->fetch();
    if ($sample) {
        echo "<p>✅ Sample exhibit: <strong>{$sample['title']}</strong></p>";
        echo "<p>Learning approaches: <code>{$sample['learning_approach']}</code></p>";
    }
    
    echo "<div class='info'>";
    echo "<h3>🚀 Next Steps</h3>";
    echo "<ol>";
    echo "<li><strong>Create API endpoint</strong> for dynamic exhibit fetching</li>";
    echo "<li><strong>Update React component</strong> to fetch from database</li>";
    echo "<li><strong>Test filtering</strong> with database-driven content</li>";
    echo "<li><strong>Deploy updated frontend</strong> with API integration</li>";
    echo "</ol>";
    echo "</div>";
    
} catch (Exception $e) {
    echo "<div class='error'>";
    echo "<h3>❌ Setup Failed</h3>";
    echo "<p><strong>Error:</strong> " . htmlspecialchars($e->getMessage()) . "</p>";
    echo "</div>";
}

echo "<hr><p><small>Phase 1 Database Setup | " . date('Y-m-d H:i:s T') . "</small></p>";
?>
