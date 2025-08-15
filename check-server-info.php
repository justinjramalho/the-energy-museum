<?php
/**
 * Server Environment Check for Energy Museum Forum Database
 * Upload this file to your Hostinger server to check compatibility
 */

echo "<h1>🔍 Energy Museum Server Environment Check</h1>\n";
echo "<style>body{font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:20px;} .success{color:green;} .warning{color:orange;} .error{color:red;} .info{background:#f0f8ff;padding:10px;border-radius:5px;margin:10px 0;}</style>\n";

echo "<h2>📋 Basic Server Information</h2>\n";
echo "<ul>\n";
echo "<li><strong>PHP Version:</strong> " . phpversion() . "</li>\n";
echo "<li><strong>Server Software:</strong> " . $_SERVER['SERVER_SOFTWARE'] . "</li>\n";
echo "<li><strong>Operating System:</strong> " . php_uname() . "</li>\n";
echo "<li><strong>Current Time:</strong> " . date('Y-m-d H:i:s T') . "</li>\n";
echo "</ul>\n";

echo "<h2>🔧 PHP Extensions Check</h2>\n";

$required_extensions = [
    'pdo' => 'PDO (PHP Data Objects)',
    'pdo_mysql' => 'PDO MySQL Driver',
    'mysqli' => 'MySQLi Extension',
    'json' => 'JSON Support',
    'mbstring' => 'Multibyte String',
    'curl' => 'cURL Support',
    'openssl' => 'OpenSSL Support'
];

echo "<ul>\n";
foreach ($required_extensions as $ext => $name) {
    $loaded = extension_loaded($ext);
    $status = $loaded ? '<span class="success">✅ Available</span>' : '<span class="error">❌ Missing</span>';
    echo "<li><strong>$name:</strong> $status</li>\n";
}
echo "</ul>\n";

echo "<h2>🗄️ Database Connection Test</h2>\n";

// Database configuration (same as your existing)
$db_config = [
    'host' => 'localhost', // Try localhost first
    'dbname' => 'u747221136_energy_museum',
    'username' => 'u747221136_justinjramalho',
    'password' => 'JustinIsTheBest1!',
    'charset' => 'utf8mb4'
];

echo "<div class='info'><strong>Testing Connection to:</strong><br>";
echo "Host: " . $db_config['host'] . "<br>";
echo "Database: " . $db_config['dbname'] . "<br>";
echo "Username: " . $db_config['username'] . "<br>";
echo "Password: [HIDDEN]</div>";

try {
    $dsn = "mysql:host={$db_config['host']};dbname={$db_config['dbname']};charset={$db_config['charset']}";
    $pdo = new PDO($dsn, $db_config['username'], $db_config['password'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
    
    echo "<p class='success'>✅ <strong>Database Connection: SUCCESSFUL</strong></p>\n";
    
    // Test database permissions
    echo "<h3>🔐 Database Permissions Test</h3>\n";
    echo "<ul>\n";
    
    // Test SELECT
    try {
        $stmt = $pdo->query("SELECT 1");
        echo "<li class='success'>✅ SELECT permission: OK</li>\n";
    } catch (Exception $e) {
        echo "<li class='error'>❌ SELECT permission: FAILED - " . $e->getMessage() . "</li>\n";
    }
    
    // Test CREATE TABLE
    try {
        $pdo->exec("CREATE TABLE test_permissions_check (id INT PRIMARY KEY AUTO_INCREMENT, test_col VARCHAR(50))");
        echo "<li class='success'>✅ CREATE TABLE permission: OK</li>\n";
        
        // Test INSERT
        try {
            $pdo->exec("INSERT INTO test_permissions_check (test_col) VALUES ('test')");
            echo "<li class='success'>✅ INSERT permission: OK</li>\n";
        } catch (Exception $e) {
            echo "<li class='error'>❌ INSERT permission: FAILED - " . $e->getMessage() . "</li>\n";
        }
        
        // Test UPDATE
        try {
            $pdo->exec("UPDATE test_permissions_check SET test_col = 'updated' WHERE id = 1");
            echo "<li class='success'>✅ UPDATE permission: OK</li>\n";
        } catch (Exception $e) {
            echo "<li class='error'>❌ UPDATE permission: FAILED - " . $e->getMessage() . "</li>\n";
        }
        
        // Test DELETE
        try {
            $pdo->exec("DELETE FROM test_permissions_check WHERE id = 1");
            echo "<li class='success'>✅ DELETE permission: OK</li>\n";
        } catch (Exception $e) {
            echo "<li class='error'>❌ DELETE permission: FAILED - " . $e->getMessage() . "</li>\n";
        }
        
        // Clean up test table
        $pdo->exec("DROP TABLE test_permissions_check");
        echo "<li class='success'>✅ DROP TABLE permission: OK</li>\n";
        
    } catch (Exception $e) {
        echo "<li class='error'>❌ CREATE TABLE permission: FAILED - " . $e->getMessage() . "</li>\n";
    }
    
    echo "</ul>\n";
    
    // Database info
    echo "<h3>📊 Database Information</h3>\n";
    $stmt = $pdo->query("SELECT VERSION() as version");
    $version = $stmt->fetch()['version'];
    echo "<p><strong>MySQL Version:</strong> $version</p>\n";
    
    $stmt = $pdo->query("SHOW TABLES");
    $tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
    echo "<p><strong>Existing Tables:</strong> " . count($tables) . " tables</p>\n";
    if (count($tables) > 0) {
        echo "<ul>\n";
        foreach ($tables as $table) {
            echo "<li>$table</li>\n";
        }
        echo "</ul>\n";
    }
    
} catch (PDOException $e) {
    echo "<p class='error'>❌ <strong>Database Connection: FAILED</strong></p>\n";
    echo "<p class='error'>Error: " . $e->getMessage() . "</p>\n";
    echo "<div class='info'><strong>Troubleshooting:</strong><br>";
    echo "1. Verify database credentials in Hostinger panel<br>";
    echo "2. Try alternative host: srv1540.hstgr.io<br>";
    echo "3. Check if database exists and user has permissions<br>";
    echo "4. Ensure database user is added to the database</div>";
    
    // Try alternative host
    echo "<h3>🔄 Trying Alternative Host</h3>\n";
    try {
        $alt_config = $db_config;
        $alt_config['host'] = 'srv1540.hstgr.io';
        $dsn = "mysql:host={$alt_config['host']};dbname={$alt_config['dbname']};charset={$alt_config['charset']}";
        $pdo = new PDO($dsn, $alt_config['username'], $alt_config['password'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        ]);
        echo "<p class='success'>✅ <strong>Alternative Host Connection: SUCCESSFUL</strong></p>\n";
        echo "<div class='info'>Use host: srv1540.hstgr.io for database connections</div>";
    } catch (PDOException $e2) {
        echo "<p class='error'>❌ Alternative host also failed: " . $e2->getMessage() . "</p>\n";
    }
}

echo "<h2>📁 File System Permissions</h2>\n";

$test_dirs = [
    __DIR__ . '/api',
    __DIR__ . '/database', 
    __DIR__ . '/logs',
    __DIR__ . '/backend/user'
];

echo "<ul>\n";
foreach ($test_dirs as $dir) {
    if (is_dir($dir)) {
        $writable = is_writable($dir);
        $status = $writable ? '<span class="success">✅ Writable</span>' : '<span class="warning">⚠️ Read-only</span>';
        echo "<li><strong>$dir:</strong> $status</li>\n";
    } else {
        echo "<li><strong>$dir:</strong> <span class='warning'>⚠️ Directory not found</span></li>\n";
    }
}
echo "</ul>\n";

echo "<h2>🎯 Compatibility Summary</h2>\n";

$php_ok = version_compare(phpversion(), '8.0.0', '>=');
$pdo_ok = extension_loaded('pdo') && extension_loaded('pdo_mysql');

echo "<div class='info'>\n";
echo "<h3>Forum Database Compatibility:</h3>\n";
echo "<ul>\n";
echo "<li><strong>PHP 8.0+:</strong> " . ($php_ok ? '<span class="success">✅ Compatible</span>' : '<span class="error">❌ Needs upgrade</span>') . "</li>\n";
echo "<li><strong>Database Extensions:</strong> " . ($pdo_ok ? '<span class="success">✅ Available</span>' : '<span class="error">❌ Missing</span>') . "</li>\n";
echo "</ul>\n";

if ($php_ok && $pdo_ok) {
    echo "<p class='success'><strong>🎉 Your server is ready for the forum database implementation!</strong></p>\n";
    echo "<p><strong>Next Steps:</strong></p>\n";
    echo "<ol>\n";
    echo "<li>Report the PHP version and any issues to your developer</li>\n";
    echo "<li>Proceed with database migration</li>\n";
    echo "<li>Configure forum integration</li>\n";
    echo "</ol>\n";
} else {
    echo "<p class='warning'><strong>⚠️ Some compatibility issues detected.</strong></p>\n";
    echo "<p>Contact Hostinger support to address the issues above before proceeding.</p>\n";
}
echo "</div>\n";

echo "<hr>\n";
echo "<p><small>Generated: " . date('Y-m-d H:i:s T') . " | Energy Museum Forum Database Setup</small></p>\n";
?>
