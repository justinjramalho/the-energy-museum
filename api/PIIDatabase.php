<?php
/**
 * PII Database Manager
 * Handles all Personally Identifiable Information storage and retrieval
 * Includes GDPR compliance features
 */

class PIIDatabase {
    public $connection;
    private $host = 'localhost';
    private $database = 'u747221136_energy_museum';
    private $username = 'u747221136_justinjramalho';
    private $password = 'JustinIsTheBest1!';
    
    public function __construct() {
        try {
            $this->connection = new PDO(
                "mysql:host={$this->host};dbname={$this->database};charset=utf8mb4",
                $this->username,
                $this->password,
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false,
                ]
            );
        } catch (PDOException $e) {
            error_log("Database connection failed: " . $e->getMessage());
            throw new Exception("Database connection failed");
        }
    }
    
    /**
     * Add newsletter subscriber
     */
    public function addNewsletterSubscriber($email, $ipAddress = null, $userAgent = null) {
        try {
            $stmt = $this->connection->prepare(
                "INSERT IGNORE INTO newsletter_subscribers 
                (email, ip_address, user_agent, privacy_consent_at) 
                VALUES (?, ?, ?, NOW())"
            );
            
            $result = $stmt->execute([$email, $ipAddress, $userAgent]);
            
            if ($stmt->rowCount() > 0) {
                return [
                    'success' => true,
                    'message' => 'Successfully subscribed to newsletter',
                    'subscriber_id' => $this->connection->lastInsertId()
                ];
            } else {
                return [
                    'success' => true,
                    'message' => 'Email already subscribed',
                    'already_exists' => true
                ];
            }
            
        } catch (PDOException $e) {
            error_log("Newsletter subscription error: " . $e->getMessage());
            return [
                'success' => false,
                'message' => 'Unable to process subscription'
            ];
        }
    }
    
    /**
     * Add consultation request
     */
    public function addConsultationRequest($data) {
        try {
            $stmt = $this->connection->prepare(
                "INSERT INTO consultation_requests 
                (full_name, email, organization, support_type, message, ip_address, user_agent, privacy_consent_at) 
                VALUES (?, ?, ?, ?, ?, ?, ?, NOW())"
            );
            
            $result = $stmt->execute([
                $data['name'],
                $data['email'],
                $data['organization'] ?? null,
                $data['supportType'],
                $data['message'],
                $data['ipAddress'] ?? null,
                $data['userAgent'] ?? null
            ]);
            
            if ($result) {
                return [
                    'success' => true,
                    'message' => 'Consultation request submitted successfully',
                    'request_id' => $this->connection->lastInsertId()
                ];
            }
            
        } catch (PDOException $e) {
            error_log("Consultation request error: " . $e->getMessage());
            return [
                'success' => false,
                'message' => 'Unable to submit consultation request'
            ];
        }
    }
    
    /**
     * Add general contact submission
     */
    public function addContactSubmission($data) {
        try {
            $stmt = $this->connection->prepare(
                "INSERT INTO contact_submissions 
                (name, email, subject, message, submission_type, ip_address, user_agent, privacy_consent_at) 
                VALUES (?, ?, ?, ?, ?, ?, ?, NOW())"
            );
            
            $result = $stmt->execute([
                $data['name'],
                $data['email'],
                $data['subject'] ?? null,
                $data['message'],
                $data['submissionType'] ?? 'general',
                $data['ipAddress'] ?? null,
                $data['userAgent'] ?? null
            ]);
            
            if ($result) {
                return [
                    'success' => true,
                    'message' => 'Contact form submitted successfully',
                    'submission_id' => $this->connection->lastInsertId()
                ];
            }
            
        } catch (PDOException $e) {
            error_log("Contact submission error: " . $e->getMessage());
            return [
                'success' => false,
                'message' => 'Unable to submit contact form'
            ];
        }
    }
    
    /**
     * Generate unsubscribe token
     */
    public function generateUnsubscribeToken($email) {
        try {
            $token = bin2hex(random_bytes(32));
            $expiresAt = date('Y-m-d H:i:s', strtotime('+30 days'));
            
            $stmt = $this->connection->prepare(
                "INSERT INTO unsubscribe_tokens (email, token, expires_at) VALUES (?, ?, ?)"
            );
            
            $stmt->execute([$email, $token, $expiresAt]);
            
            return $token;
            
        } catch (PDOException $e) {
            error_log("Token generation error: " . $e->getMessage());
            return false;
        }
    }
    
    /**
     * Unsubscribe user via token
     */
    public function unsubscribeByToken($token) {
        try {
            // Verify token
            $stmt = $this->connection->prepare(
                "SELECT email FROM unsubscribe_tokens 
                WHERE token = ? AND expires_at > NOW() AND used_at IS NULL"
            );
            $stmt->execute([$token]);
            $result = $stmt->fetch();
            
            if (!$result) {
                return ['success' => false, 'message' => 'Invalid or expired token'];
            }
            
            $email = $result['email'];
            
            // Start transaction
            $this->connection->beginTransaction();
            
            // Update subscriber status
            $stmt = $this->connection->prepare(
                "UPDATE newsletter_subscribers 
                SET status = 'unsubscribed', unsubscribed_at = NOW() 
                WHERE email = ?"
            );
            $stmt->execute([$email]);
            
            // Mark token as used
            $stmt = $this->connection->prepare(
                "UPDATE unsubscribe_tokens SET used_at = NOW() WHERE token = ?"
            );
            $stmt->execute([$token]);
            
            $this->connection->commit();
            
            return [
                'success' => true,
                'message' => 'Successfully unsubscribed from newsletter',
                'email' => $email
            ];
            
        } catch (PDOException $e) {
            $this->connection->rollBack();
            error_log("Unsubscribe error: " . $e->getMessage());
            return ['success' => false, 'message' => 'Unable to process unsubscribe request'];
        }
    }
    
    /**
     * Get subscriber count
     */
    public function getSubscriberCount() {
        try {
            $stmt = $this->connection->prepare(
                "SELECT COUNT(*) as count FROM newsletter_subscribers WHERE status = 'active'"
            );
            $stmt->execute();
            return $stmt->fetch()['count'];
        } catch (PDOException $e) {
            return 0;
        }
    }
    
    /**
     * GDPR: Get all data for a specific email
     */
    public function getPersonalData($email) {
        try {
            $data = [];
            
            // Newsletter data
            $stmt = $this->connection->prepare(
                "SELECT * FROM newsletter_subscribers WHERE email = ?"
            );
            $stmt->execute([$email]);
            $data['newsletter'] = $stmt->fetchAll();
            
            // Consultation requests
            $stmt = $this->connection->prepare(
                "SELECT * FROM consultation_requests WHERE email = ?"
            );
            $stmt->execute([$email]);
            $data['consultations'] = $stmt->fetchAll();
            
            // Contact submissions
            $stmt = $this->connection->prepare(
                "SELECT * FROM contact_submissions WHERE email = ?"
            );
            $stmt->execute([$email]);
            $data['contacts'] = $stmt->fetchAll();
            
            return $data;
            
        } catch (PDOException $e) {
            error_log("Personal data retrieval error: " . $e->getMessage());
            return false;
        }
    }
    
    /**
     * GDPR: Delete all data for a specific email
     */
    public function deletePersonalData($email) {
        try {
            $this->connection->beginTransaction();
            
            $tables = ['newsletter_subscribers', 'consultation_requests', 'contact_submissions'];
            
            foreach ($tables as $table) {
                $stmt = $this->connection->prepare("DELETE FROM {$table} WHERE email = ?");
                $stmt->execute([$email]);
            }
            
            $this->connection->commit();
            return true;
            
        } catch (PDOException $e) {
            $this->connection->rollBack();
            error_log("Personal data deletion error: " . $e->getMessage());
            return false;
        }
    }
}
