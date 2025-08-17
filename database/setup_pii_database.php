<?php
/**
 * Setup PII Database Tables
 * Run this once to create the required tables for PII collection
 */

$host = 'localhost';
$database = 'u747221136_energy_museum';
$username = 'u747221136_justinjramalho';
$password = 'JustinIsTheBest1!';

try {
    $pdo = new PDO(
        "mysql:host={$host};dbname={$database};charset=utf8mb4",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
    );
    
    echo "Connected to database successfully.\n";
    
    // Read SQL schema
    $sqlFile = __DIR__ . '/pii_schema.sql';
    if (!file_exists($sqlFile)) {
        throw new Exception("SQL schema file not found: {$sqlFile}");
    }
    
    $sql = file_get_contents($sqlFile);
    
    // Split SQL into individual statements
    $statements = array_filter(array_map('trim', explode(';', $sql)));
    
    $success = 0;
    $errors = 0;
    
    foreach ($statements as $statement) {
        // Remove comment lines and trim
        $lines = explode("\n", $statement);
        $cleanLines = [];
        foreach ($lines as $line) {
            $line = trim($line);
            if (!empty($line) && strpos($line, '--') !== 0) {
                $cleanLines[] = $line;
            }
        }
        $cleanStatement = trim(implode("\n", $cleanLines));
        
        if (empty($cleanStatement)) {
            continue; // Skip empty statements
        }
        
        try {
            $pdo->exec($cleanStatement);
            echo "✓ Executed: " . substr($cleanStatement, 0, 50) . "...\n";
            $success++;
        } catch (PDOException $e) {
            echo "✗ Error: " . $e->getMessage() . "\n";
            echo "   Statement: " . substr($cleanStatement, 0, 100) . "...\n";
            $errors++;
        }
    }
    
    echo "\n=== SETUP COMPLETE ===\n";
    echo "Successful statements: {$success}\n";
    echo "Errors: {$errors}\n";
    
    // Test tables exist
    echo "\n=== VERIFYING TABLES ===\n";
    $tables = ['newsletter_subscribers', 'consultation_requests', 'contact_submissions', 'unsubscribe_tokens'];
    
    foreach ($tables as $table) {
        $stmt = $pdo->prepare("SHOW TABLES LIKE ?");
        $stmt->execute([$table]);
        if ($stmt->fetch()) {
            echo "✓ Table '{$table}' exists\n";
        } else {
            echo "✗ Table '{$table}' NOT found\n";
        }
    }
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
    exit(1);
}

echo "\nDatabase setup complete! You can now use the PII collection system.\n";
?>
