<?php
/**
 * Energy Museum Forum Database Integration
 * Handles all database operations for the community forum
 */

class ForumDatabase {
    private $pdo;
    private $config;
    
    public function __construct($config = null) {
        $this->config = $config ?: [
            'host' => $_ENV['DB_HOST'] ?? 'localhost',
            'dbname' => $_ENV['DB_NAME'] ?? 'u747221136_energy_museum',
            'username' => $_ENV['DB_USER'] ?? 'u747221136_justinjramalho',
            'password' => $_ENV['DB_PASS'] ?? 'JustinIsTheBest1!',
            'charset' => 'utf8mb4'
        ];
        
        $this->connect();
    }
    
    private function connect() {
        try {
            $dsn = "mysql:host={$this->config['host']};dbname={$this->config['dbname']};charset={$this->config['charset']}";
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];
            
            $this->pdo = new PDO($dsn, $this->config['username'], $this->config['password'], $options);
        } catch (PDOException $e) {
            throw new Exception("Database connection failed: " . $e->getMessage());
        }
    }
    
    // ========================================================================
    // TOPIC OPERATIONS
    // ========================================================================
    
    public function createTopic($data) {
        $sql = "INSERT INTO topics (
            category_id, user_id, guest_user_id, title, content, slug,
            status, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            $this->getCategoryId($data['category']),
            $data['user_id'] ?? null,
            $data['guest_user_id'] ?? null,
            $data['title'],
            $data['content'],
            $this->generateSlug($data['title']),
            $data['status'] ?? 'pending'
        ]);
        
        $topicId = $this->pdo->lastInsertId();
        
        // Log moderation action if auto-approved
        if (($data['status'] ?? 'pending') === 'approved') {
            $this->logModerationAction($data['approved_by'], 'approve', $topicId, null, null, null, 'Auto-approved team post');
        }
        
        return $topicId;
    }
    
    public function getTopics($filters = []) {
        $sql = "SELECT * FROM topic_list_view WHERE 1=1";
        $params = [];
        
        if (!empty($filters['category'])) {
            $sql .= " AND category_slug = ?";
            $params[] = $filters['category'];
        }
        
        if (!empty($filters['search'])) {
            $sql .= " AND (title LIKE ? OR content LIKE ?)";
            $searchTerm = '%' . $filters['search'] . '%';
            $params[] = $searchTerm;
            $params[] = $searchTerm;
        }
        
        if (!empty($filters['status'])) {
            $sql .= " AND status = ?";
            $params[] = $filters['status'];
        }
        
        // Sorting
        $sortBy = $filters['sort'] ?? 'recent';
        switch ($sortBy) {
            case 'votes':
                $sql .= " ORDER BY is_pinned DESC, vote_score DESC, created_at DESC";
                break;
            case 'replies':
                $sql .= " ORDER BY is_pinned DESC, reply_count DESC, created_at DESC";
                break;
            default: // recent
                $sql .= " ORDER BY is_pinned DESC, last_reply_at DESC, created_at DESC";
        }
        
        if (!empty($filters['limit'])) {
            $sql .= " LIMIT " . intval($filters['limit']);
        }
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        
        return $stmt->fetchAll();
    }
    
    public function getTopic($id) {
        $sql = "SELECT * FROM topic_list_view WHERE id = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$id]);
        
        $topic = $stmt->fetch();
        if ($topic) {
            // Increment view count
            $this->incrementTopicViews($id);
            $topic['view_count']++;
        }
        
        return $topic;
    }
    
    public function incrementTopicViews($topicId) {
        $sql = "UPDATE topics SET view_count = view_count + 1 WHERE id = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$topicId]);
    }
    
    // ========================================================================
    // REPLY OPERATIONS
    // ========================================================================
    
    public function createReply($data) {
        $sql = "INSERT INTO replies (
            topic_id, parent_reply_id, user_id, guest_user_id, content,
            status, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, NOW())";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            $data['topic_id'],
            $data['parent_reply_id'] ?? null,
            $data['user_id'] ?? null,
            $data['guest_user_id'] ?? null,
            $data['content'],
            $data['status'] ?? 'pending'
        ]);
        
        return $this->pdo->lastInsertId();
    }
    
    public function getTopicReplies($topicId, $approved_only = true) {
        $sql = "SELECT * FROM reply_list_view WHERE topic_id = ?";
        $params = [$topicId];
        
        if ($approved_only) {
            $sql .= " AND status = 'approved'";
        }
        
        $sql .= " ORDER BY is_pinned DESC, created_at ASC";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        
        return $stmt->fetchAll();
    }
    
    // ========================================================================
    // USER OPERATIONS
    // ========================================================================
    
    public function createGuestUser($data) {
        $sql = "INSERT INTO guest_users (
            session_id, display_name, email, role_title, ip_address, user_agent
        ) VALUES (?, ?, ?, ?, ?, ?)";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            $data['session_id'],
            $data['display_name'],
            $data['email'] ?? null,
            $data['role_title'] ?? null,
            $data['ip_address'],
            $data['user_agent'] ?? null
        ]);
        
        return $this->pdo->lastInsertId();
    }
    
    public function getUser($id) {
        $sql = "SELECT * FROM users WHERE id = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$id]);
        
        return $stmt->fetch();
    }
    
    public function getUserByEmail($email) {
        $sql = "SELECT * FROM users WHERE email = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$email]);
        
        return $stmt->fetch();
    }
    
    // ========================================================================
    // VOTING OPERATIONS
    // ========================================================================
    
    public function submitVote($data) {
        // First, check if user already voted
        $existingVote = $this->getUserVote($data);
        
        if ($existingVote) {
            if ($existingVote['vote_type'] === $data['vote_type']) {
                // Remove vote (toggle off)
                return $this->removeVote($data);
            } else {
                // Update vote (change from up to down or vice versa)
                return $this->updateVote($data);
            }
        } else {
            // New vote
            return $this->insertVote($data);
        }
    }
    
    private function getUserVote($data) {
        $sql = "SELECT * FROM votes WHERE ";
        $params = [];
        
        if (!empty($data['topic_id'])) {
            $sql .= "topic_id = ? AND ";
            $params[] = $data['topic_id'];
        } elseif (!empty($data['reply_id'])) {
            $sql .= "reply_id = ? AND ";
            $params[] = $data['reply_id'];
        }
        
        if (!empty($data['user_id'])) {
            $sql .= "user_id = ?";
            $params[] = $data['user_id'];
        } else {
            $sql .= "guest_user_id = ?";
            $params[] = $data['guest_user_id'];
        }
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        
        return $stmt->fetch();
    }
    
    private function insertVote($data) {
        $sql = "INSERT INTO votes (
            user_id, guest_user_id, topic_id, reply_id, vote_type, ip_address, user_agent
        ) VALUES (?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([
            $data['user_id'] ?? null,
            $data['guest_user_id'] ?? null,
            $data['topic_id'] ?? null,
            $data['reply_id'] ?? null,
            $data['vote_type'],
            $data['ip_address'],
            $data['user_agent'] ?? null
        ]);
    }
    
    private function updateVote($data) {
        $sql = "UPDATE votes SET vote_type = ?, updated_at = NOW() WHERE ";
        $params = [$data['vote_type']];
        
        if (!empty($data['topic_id'])) {
            $sql .= "topic_id = ? AND ";
            $params[] = $data['topic_id'];
        } elseif (!empty($data['reply_id'])) {
            $sql .= "reply_id = ? AND ";
            $params[] = $data['reply_id'];
        }
        
        if (!empty($data['user_id'])) {
            $sql .= "user_id = ?";
            $params[] = $data['user_id'];
        } else {
            $sql .= "guest_user_id = ?";
            $params[] = $data['guest_user_id'];
        }
        
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute($params);
    }
    
    private function removeVote($data) {
        $sql = "DELETE FROM votes WHERE ";
        $params = [];
        
        if (!empty($data['topic_id'])) {
            $sql .= "topic_id = ? AND ";
            $params[] = $data['topic_id'];
        } elseif (!empty($data['reply_id'])) {
            $sql .= "reply_id = ? AND ";
            $params[] = $data['reply_id'];
        }
        
        if (!empty($data['user_id'])) {
            $sql .= "user_id = ?";
            $params[] = $data['user_id'];
        } else {
            $sql .= "guest_user_id = ?";
            $params[] = $data['guest_user_id'];
        }
        
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute($params);
    }
    
    // ========================================================================
    // FLAGGING OPERATIONS
    // ========================================================================
    
    public function submitFlag($data) {
        $sql = "INSERT INTO flags (
            user_id, guest_user_id, topic_id, reply_id, reason, reason_text,
            ip_address, user_agent
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            $data['user_id'] ?? null,
            $data['guest_user_id'] ?? null,
            $data['topic_id'] ?? null,
            $data['reply_id'] ?? null,
            $data['reason'],
            $data['reason_text'] ?? null,
            $data['ip_address'],
            $data['user_agent'] ?? null
        ]);
        
        return $this->pdo->lastInsertId();
    }
    
    public function getFlagsForModeration($status = 'pending') {
        $sql = "SELECT f.*, 
                t.title as topic_title,
                r.content as reply_content
                FROM flags f
                LEFT JOIN topics t ON f.topic_id = t.id
                LEFT JOIN replies r ON f.reply_id = r.id
                WHERE f.status = ?
                ORDER BY f.created_at DESC";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$status]);
        
        return $stmt->fetchAll();
    }
    
    // ========================================================================
    // MODERATION OPERATIONS
    // ========================================================================
    
    public function approveTopic($topicId, $moderatorId, $notes = null) {
        $sql = "UPDATE topics SET 
                status = 'approved', 
                approved_at = NOW(), 
                approved_by = ? 
                WHERE id = ?";
        
        $stmt = $this->pdo->prepare($sql);
        $result = $stmt->execute([$moderatorId, $topicId]);
        
        if ($result) {
            $this->logModerationAction($moderatorId, 'approve', $topicId, null, null, null, $notes);
        }
        
        return $result;
    }
    
    public function approveReply($replyId, $moderatorId, $notes = null) {
        $sql = "UPDATE replies SET 
                status = 'approved', 
                approved_at = NOW(), 
                approved_by = ? 
                WHERE id = ?";
        
        $stmt = $this->pdo->prepare($sql);
        $result = $stmt->execute([$moderatorId, $replyId]);
        
        if ($result) {
            $this->logModerationAction($moderatorId, 'approve', null, $replyId, null, null, $notes);
        }
        
        return $result;
    }
    
    public function pinTopic($topicId, $moderatorId) {
        $sql = "UPDATE topics SET is_pinned = TRUE WHERE id = ?";
        $stmt = $this->pdo->prepare($sql);
        $result = $stmt->execute([$topicId]);
        
        if ($result) {
            $this->logModerationAction($moderatorId, 'pin', $topicId);
        }
        
        return $result;
    }
    
    public function pinReply($replyId, $moderatorId) {
        $sql = "UPDATE replies SET is_pinned = TRUE WHERE id = ?";
        $stmt = $this->pdo->prepare($sql);
        $result = $stmt->execute([$replyId]);
        
        if ($result) {
            $this->logModerationAction($moderatorId, 'pin', null, $replyId);
        }
        
        return $result;
    }
    
    public function logModerationAction($moderatorId, $action, $topicId = null, $replyId = null, $targetUserId = null, $flagId = null, $notes = null) {
        $sql = "INSERT INTO moderation_log (
            moderator_id, action_type, topic_id, reply_id, target_user_id, flag_id, notes
        ) VALUES (?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([
            $moderatorId,
            $action,
            $topicId,
            $replyId,
            $targetUserId,
            $flagId,
            $notes
        ]);
    }
    
    // ========================================================================
    // CATEGORY OPERATIONS
    // ========================================================================
    
    public function getCategories() {
        $sql = "SELECT * FROM categories WHERE is_active = TRUE ORDER BY sort_order";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute();
        
        return $stmt->fetchAll();
    }
    
    private function getCategoryId($slug) {
        $sql = "SELECT id FROM categories WHERE slug = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$slug]);
        
        $result = $stmt->fetch();
        return $result ? $result['id'] : 1; // Default to first category
    }
    
    // ========================================================================
    // UTILITY METHODS
    // ========================================================================
    
    private function generateSlug($title) {
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title), '-'));
        $slug = substr($slug, 0, 100);
        
        // Ensure uniqueness
        $originalSlug = $slug;
        $counter = 1;
        
        while ($this->slugExists($slug)) {
            $slug = $originalSlug . '-' . $counter;
            $counter++;
        }
        
        return $slug;
    }
    
    private function slugExists($slug) {
        $sql = "SELECT COUNT(*) FROM topics WHERE slug = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$slug]);
        
        return $stmt->fetchColumn() > 0;
    }
    
    public function getForumStats() {
        $sql = "SELECT 
                (SELECT COUNT(*) FROM topics WHERE status = 'approved') as total_topics,
                (SELECT COUNT(*) FROM replies WHERE status = 'approved') as total_replies,
                (SELECT COUNT(DISTINCT COALESCE(user_id, guest_user_id)) FROM topics) as total_members,
                (SELECT COUNT(*) FROM topics WHERE status = 'approved' AND reply_count > 0) / 
                (SELECT COUNT(*) FROM topics WHERE status = 'approved') * 100 as answered_percentage";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute();
        
        return $stmt->fetch();
    }
    
    public function searchContent($query, $limit = 50) {
        $sql = "SELECT 'topic' as type, id, title as content, category_id, created_at
                FROM topics 
                WHERE status = 'approved' AND (title LIKE ? OR content LIKE ?)
                UNION ALL
                SELECT 'reply' as type, id, content, NULL as category_id, created_at
                FROM replies 
                WHERE status = 'approved' AND content LIKE ?
                ORDER BY created_at DESC
                LIMIT ?";
        
        $searchTerm = '%' . $query . '%';
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$searchTerm, $searchTerm, $searchTerm, $limit]);
        
        return $stmt->fetchAll();
    }
    
    // ========================================================================
    // CLEANUP METHODS
    // ========================================================================
    
    public function cleanupOldGuestUsers() {
        $sql = "CALL CleanupOldGuestUsers()";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute();
    }
    
    public function updateDailyStats($date = null) {
        $date = $date ?: date('Y-m-d');
        $sql = "CALL UpdateDailyStats(?)";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$date]);
    }
}
?>
