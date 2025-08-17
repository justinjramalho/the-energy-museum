<?php
// PII Admin API for Grav Admin Panel
require_once __DIR__ . '/PIIDatabase.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    $database = new PIIDatabase();
    $action = $_GET['action'] ?? $_POST['action'] ?? '';
    
    switch ($action) {
        case 'subscribers':
            handleGetSubscribers($database);
            break;
            
        case 'consultations':
            handleGetConsultations($database);
            break;
            
        case 'consultation':
            $id = $_GET['id'] ?? null;
            handleGetConsultation($database, $id);
            break;
            
        case 'update_status':
            $input = json_decode(file_get_contents('php://input'), true);
            handleUpdateStatus($database, $input);
            break;
            
        case 'export':
            $type = $_GET['type'] ?? '';
            handleExport($database, $type);
            break;
            
        default:
            http_response_code(400);
            echo json_encode(['error' => 'Invalid action']);
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Server error: ' . $e->getMessage()]);
}

function handleGetSubscribers($database) {
    try {
        $stmt = $database->connection->prepare("
            SELECT id, email, subscribed_at, status, ip_address, privacy_consent_at
            FROM newsletter_subscribers 
            ORDER BY subscribed_at DESC
        ");
        $stmt->execute();
        $subscribers = $stmt->fetchAll();
        
        echo json_encode([
            'success' => true,
            'subscribers' => $subscribers,
            'total' => count($subscribers)
        ]);
        
    } catch (PDOException $e) {
        echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
    }
}

function handleGetConsultations($database) {
    try {
        $stmt = $database->connection->prepare("
            SELECT id, full_name, email, organization, support_type, message, 
                   submitted_at, status, assigned_to, notes
            FROM consultation_requests 
            ORDER BY submitted_at DESC
        ");
        $stmt->execute();
        $consultations = $stmt->fetchAll();
        
        echo json_encode([
            'success' => true,
            'consultations' => $consultations,
            'total' => count($consultations)
        ]);
        
    } catch (PDOException $e) {
        echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
    }
}

function handleGetConsultation($database, $id) {
    if (!$id) {
        echo json_encode(['error' => 'Consultation ID required']);
        return;
    }
    
    try {
        $stmt = $database->connection->prepare("
            SELECT * FROM consultation_requests WHERE id = ?
        ");
        $stmt->execute([$id]);
        $consultation = $stmt->fetch();
        
        if ($consultation) {
            echo json_encode([
                'success' => true,
                'consultation' => $consultation
            ]);
        } else {
            echo json_encode(['error' => 'Consultation not found']);
        }
        
    } catch (PDOException $e) {
        echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
    }
}

function handleUpdateStatus($database, $input) {
    if (!isset($input['id']) || !isset($input['status'])) {
        echo json_encode(['error' => 'ID and status required']);
        return;
    }
    
    try {
        $stmt = $database->connection->prepare("
            UPDATE consultation_requests 
            SET status = ?, notes = CONCAT(IFNULL(notes, ''), ?, '\n--- Updated: ', NOW(), ' ---\n')
            WHERE id = ?
        ");
        
        $updateNote = "Status changed to: {$input['status']}";
        if (!empty($input['notes'])) {
            $updateNote .= "\nNotes: {$input['notes']}";
        }
        
        $result = $stmt->execute([
            $input['status'],
            $updateNote,
            $input['id']
        ]);
        
        if ($result) {
            echo json_encode([
                'success' => true,
                'message' => 'Status updated successfully'
            ]);
        } else {
            echo json_encode(['error' => 'Failed to update status']);
        }
        
    } catch (PDOException $e) {
        echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
    }
}

function handleExport($database, $type) {
    try {
        $filename = "energy_museum_{$type}_" . date('Y-m-d') . '.csv';
        
        header('Content-Type: text/csv');
        header('Content-Disposition: attachment; filename="' . $filename . '"');
        
        $output = fopen('php://output', 'w');
        
        if ($type === 'subscribers') {
            // Export subscribers
            fputcsv($output, ['ID', 'Email', 'Subscribed Date', 'Status', 'IP Address', 'Privacy Consent']);
            
            $stmt = $database->connection->prepare("
                SELECT id, email, subscribed_at, status, ip_address, privacy_consent_at
                FROM newsletter_subscribers 
                ORDER BY subscribed_at DESC
            ");
            $stmt->execute();
            
            while ($row = $stmt->fetch()) {
                fputcsv($output, [
                    $row['id'],
                    $row['email'],
                    $row['subscribed_at'],
                    $row['status'],
                    $row['ip_address'],
                    $row['privacy_consent_at']
                ]);
            }
            
        } elseif ($type === 'consultations') {
            // Export consultations
            fputcsv($output, [
                'ID', 'Name', 'Email', 'Organization', 'Support Type', 
                'Message', 'Submitted Date', 'Status', 'Assigned To', 'Notes'
            ]);
            
            $stmt = $database->connection->prepare("
                SELECT id, full_name, email, organization, support_type, message,
                       submitted_at, status, assigned_to, notes
                FROM consultation_requests 
                ORDER BY submitted_at DESC
            ");
            $stmt->execute();
            
            while ($row = $stmt->fetch()) {
                fputcsv($output, [
                    $row['id'],
                    $row['full_name'],
                    $row['email'],
                    $row['organization'],
                    $row['support_type'],
                    $row['message'],
                    $row['submitted_at'],
                    $row['status'],
                    $row['assigned_to'],
                    $row['notes']
                ]);
            }
        }
        
        fclose($output);
        exit;
        
    } catch (Exception $e) {
        echo json_encode(['error' => 'Export failed: ' . $e->getMessage()]);
    }
}
?>
