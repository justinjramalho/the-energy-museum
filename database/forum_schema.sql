-- Energy Museum Community Forum Database Schema
-- Designed for scalability and Comments Pro plugin integration
-- MySQL/MariaDB compatible

-- Enable foreign key checks
SET FOREIGN_KEY_CHECKS = 1;

-- ============================================================================
-- USERS & AUTHENTICATION
-- ============================================================================

-- User accounts (can integrate with Grav user system)
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    display_name VARCHAR(100) NOT NULL,
    role_title VARCHAR(100) DEFAULT NULL, -- "Middle School Teacher", etc.
    avatar_url VARCHAR(500) DEFAULT NULL,
    bio TEXT DEFAULT NULL,
    reputation_score INT DEFAULT 0,
    is_verified BOOLEAN DEFAULT FALSE,
    is_moderator BOOLEAN DEFAULT FALSE,
    is_team_member BOOLEAN DEFAULT FALSE, -- Energy Museum team
    status ENUM('active', 'suspended', 'banned') DEFAULT 'active',
    email_notifications BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_active_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Grav integration fields
    grav_user_id VARCHAR(100) DEFAULT NULL,
    grav_username VARCHAR(50) DEFAULT NULL,
    
    INDEX idx_email (email),
    INDEX idx_username (username),
    INDEX idx_status (status),
    INDEX idx_grav_user (grav_user_id)
);

-- Guest users for non-registered posting
CREATE TABLE guest_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    session_id VARCHAR(128) NOT NULL,
    display_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) DEFAULT NULL,
    role_title VARCHAR(100) DEFAULT NULL,
    ip_address VARCHAR(45) NOT NULL, -- IPv6 compatible
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_session (session_id),
    INDEX idx_ip (ip_address)
);

-- ============================================================================
-- FORUM STRUCTURE
-- ============================================================================

-- Forum categories
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    icon VARCHAR(10) DEFAULT NULL, -- Emoji or icon class
    color VARCHAR(7) DEFAULT NULL, -- Hex color
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_slug (slug),
    INDEX idx_active (is_active),
    INDEX idx_sort (sort_order)
);

-- Forum topics/discussions
CREATE TABLE topics (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT NOT NULL,
    user_id INT DEFAULT NULL, -- NULL for guest users
    guest_user_id INT DEFAULT NULL,
    
    title VARCHAR(500) NOT NULL,
    content TEXT NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    
    -- Status and moderation
    status ENUM('pending', 'approved', 'rejected', 'deleted') DEFAULT 'pending',
    is_pinned BOOLEAN DEFAULT FALSE,
    is_locked BOOLEAN DEFAULT FALSE,
    is_featured BOOLEAN DEFAULT FALSE,
    
    -- Engagement metrics
    view_count INT DEFAULT 0,
    reply_count INT DEFAULT 0,
    vote_score INT DEFAULT 0, -- Net votes (upvotes - downvotes)
    upvote_count INT DEFAULT 0,
    downvote_count INT DEFAULT 0,
    flag_count INT DEFAULT 0,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_reply_at TIMESTAMP DEFAULT NULL,
    approved_at TIMESTAMP DEFAULT NULL,
    
    -- Moderation
    approved_by INT DEFAULT NULL, -- user_id of moderator
    rejection_reason TEXT DEFAULT NULL,
    
    -- Grav integration
    grav_page_path VARCHAR(500) DEFAULT NULL,
    grav_page_id VARCHAR(100) DEFAULT NULL,
    
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE RESTRICT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (guest_user_id) REFERENCES guest_users(id) ON DELETE SET NULL,
    FOREIGN KEY (approved_by) REFERENCES users(id) ON DELETE SET NULL,
    
    INDEX idx_category (category_id),
    INDEX idx_user (user_id),
    INDEX idx_status (status),
    INDEX idx_pinned (is_pinned),
    INDEX idx_created (created_at),
    INDEX idx_last_reply (last_reply_at),
    INDEX idx_slug (slug)
);

-- Forum replies/comments
CREATE TABLE replies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    topic_id INT NOT NULL,
    parent_reply_id INT DEFAULT NULL, -- For threaded conversations
    user_id INT DEFAULT NULL,
    guest_user_id INT DEFAULT NULL,
    
    content TEXT NOT NULL,
    
    -- Status and moderation
    status ENUM('pending', 'approved', 'rejected', 'deleted') DEFAULT 'pending',
    is_pinned BOOLEAN DEFAULT FALSE, -- Pinned replies (team responses)
    is_solution BOOLEAN DEFAULT FALSE, -- Marked as solution to the topic
    
    -- Engagement metrics
    vote_score INT DEFAULT 0,
    upvote_count INT DEFAULT 0,
    downvote_count INT DEFAULT 0,
    flag_count INT DEFAULT 0,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    approved_at TIMESTAMP DEFAULT NULL,
    
    -- Moderation
    approved_by INT DEFAULT NULL,
    rejection_reason TEXT DEFAULT NULL,
    
    -- Grav integration
    grav_comment_id VARCHAR(100) DEFAULT NULL,
    
    FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE,
    FOREIGN KEY (parent_reply_id) REFERENCES replies(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (guest_user_id) REFERENCES guest_users(id) ON DELETE SET NULL,
    FOREIGN KEY (approved_by) REFERENCES users(id) ON DELETE SET NULL,
    
    INDEX idx_topic (topic_id),
    INDEX idx_parent (parent_reply_id),
    INDEX idx_user (user_id),
    INDEX idx_status (status),
    INDEX idx_created (created_at),
    INDEX idx_pinned (is_pinned)
);

-- ============================================================================
-- VOTING SYSTEM
-- ============================================================================

-- Vote tracking for topics and replies
CREATE TABLE votes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT DEFAULT NULL,
    guest_user_id INT DEFAULT NULL,
    
    -- What's being voted on
    topic_id INT DEFAULT NULL,
    reply_id INT DEFAULT NULL,
    
    vote_type ENUM('up', 'down') NOT NULL,
    ip_address VARCHAR(45) NOT NULL,
    user_agent TEXT,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (guest_user_id) REFERENCES guest_users(id) ON DELETE CASCADE,
    FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE,
    FOREIGN KEY (reply_id) REFERENCES replies(id) ON DELETE CASCADE,
    
    -- Ensure one vote per user per item
    UNIQUE KEY unique_user_topic_vote (user_id, topic_id),
    UNIQUE KEY unique_guest_topic_vote (guest_user_id, topic_id),
    UNIQUE KEY unique_user_reply_vote (user_id, reply_id),
    UNIQUE KEY unique_guest_reply_vote (guest_user_id, reply_id),
    
    INDEX idx_topic (topic_id),
    INDEX idx_reply (reply_id),
    INDEX idx_user (user_id),
    INDEX idx_ip (ip_address)
);

-- ============================================================================
-- FLAGGING & MODERATION
-- ============================================================================

-- Content flagging/reporting
CREATE TABLE flags (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT DEFAULT NULL,
    guest_user_id INT DEFAULT NULL,
    
    -- What's being flagged
    topic_id INT DEFAULT NULL,
    reply_id INT DEFAULT NULL,
    
    reason ENUM('spam', 'inappropriate', 'offensive', 'off_topic', 'misinformation', 'other') NOT NULL,
    reason_text TEXT DEFAULT NULL,
    
    status ENUM('pending', 'reviewed', 'dismissed', 'acted_upon') DEFAULT 'pending',
    moderator_notes TEXT DEFAULT NULL,
    reviewed_by INT DEFAULT NULL,
    reviewed_at TIMESTAMP DEFAULT NULL,
    
    ip_address VARCHAR(45) NOT NULL,
    user_agent TEXT,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (guest_user_id) REFERENCES guest_users(id) ON DELETE SET NULL,
    FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE,
    FOREIGN KEY (reply_id) REFERENCES replies(id) ON DELETE CASCADE,
    FOREIGN KEY (reviewed_by) REFERENCES users(id) ON DELETE SET NULL,
    
    INDEX idx_topic (topic_id),
    INDEX idx_reply (reply_id),
    INDEX idx_status (status),
    INDEX idx_created (created_at)
);

-- Moderation actions log
CREATE TABLE moderation_log (
    id INT PRIMARY KEY AUTO_INCREMENT,
    moderator_id INT NOT NULL,
    
    action_type ENUM('approve', 'reject', 'delete', 'pin', 'unpin', 'lock', 'unlock', 'flag_review', 'user_suspend', 'user_ban') NOT NULL,
    
    -- Target of moderation
    topic_id INT DEFAULT NULL,
    reply_id INT DEFAULT NULL,
    target_user_id INT DEFAULT NULL,
    flag_id INT DEFAULT NULL,
    
    reason TEXT DEFAULT NULL,
    notes TEXT DEFAULT NULL,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (moderator_id) REFERENCES users(id) ON DELETE RESTRICT,
    FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE,
    FOREIGN KEY (reply_id) REFERENCES replies(id) ON DELETE CASCADE,
    FOREIGN KEY (target_user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (flag_id) REFERENCES flags(id) ON DELETE CASCADE,
    
    INDEX idx_moderator (moderator_id),
    INDEX idx_action (action_type),
    INDEX idx_created (created_at)
);

-- ============================================================================
-- ANALYTICS & METRICS
-- ============================================================================

-- Daily forum statistics
CREATE TABLE daily_stats (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date DATE UNIQUE NOT NULL,
    
    -- Content metrics
    new_topics INT DEFAULT 0,
    new_replies INT DEFAULT 0,
    approved_topics INT DEFAULT 0,
    approved_replies INT DEFAULT 0,
    rejected_content INT DEFAULT 0,
    
    -- User activity
    active_users INT DEFAULT 0,
    new_users INT DEFAULT 0,
    guest_posts INT DEFAULT 0,
    
    -- Engagement
    total_votes INT DEFAULT 0,
    total_views INT DEFAULT 0,
    total_flags INT DEFAULT 0,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_date (date)
);

-- ============================================================================
-- NOTIFICATIONS
-- ============================================================================

-- Notification system
CREATE TABLE notifications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    
    type ENUM('reply', 'vote', 'mention', 'moderation', 'topic_approved', 'reply_approved') NOT NULL,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    
    -- Related content
    topic_id INT DEFAULT NULL,
    reply_id INT DEFAULT NULL,
    
    is_read BOOLEAN DEFAULT FALSE,
    is_emailed BOOLEAN DEFAULT FALSE,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read_at TIMESTAMP DEFAULT NULL,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE,
    FOREIGN KEY (reply_id) REFERENCES replies(id) ON DELETE CASCADE,
    
    INDEX idx_user (user_id),
    INDEX idx_unread (is_read),
    INDEX idx_created (created_at)
);

-- ============================================================================
-- SETTINGS & CONFIGURATION
-- ============================================================================

-- Forum settings
CREATE TABLE forum_settings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value TEXT,
    setting_type ENUM('string', 'integer', 'boolean', 'json') DEFAULT 'string',
    description TEXT,
    
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updated_by INT DEFAULT NULL,
    
    FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL,
    
    INDEX idx_key (setting_key)
);

-- ============================================================================
-- SAMPLE DATA & INITIAL SETUP
-- ============================================================================

-- Insert default categories
INSERT INTO categories (name, slug, description, icon, sort_order) VALUES
('Trainings', 'trainings', 'Questions about OpenSciEd workshops, professional development, and training programs.', '🎓', 1),
('Funding/Grants', 'funding', 'Grant opportunities, funding sources, and implementation support for STEM programs.', '💰', 2),
('Services/Consultation', 'services', 'Questions about field experiences, customized programs, and consultation services.', '🤝', 3),
('Programs/Events', 'programs', 'Family STEM nights, community programs, and upcoming educational events.', '📅', 4),
('Support', 'support', 'Technical support, troubleshooting, and general assistance with our services.', '🛠️', 5),
('General Questions', 'general', 'Open discussions, general questions, and community conversations about energy education.', '💬', 6);

-- Insert default forum settings
INSERT INTO forum_settings (setting_key, setting_value, setting_type, description) VALUES
('moderation_enabled', 'true', 'boolean', 'Require moderation for all new posts'),
('guest_posting_enabled', 'true', 'boolean', 'Allow guest users to post without registration'),
('auto_approve_team_posts', 'true', 'boolean', 'Automatically approve posts from team members'),
('voting_enabled', 'true', 'boolean', 'Enable voting on topics and replies'),
('flagging_enabled', 'true', 'boolean', 'Enable content flagging/reporting'),
('email_notifications', 'true', 'boolean', 'Send email notifications to moderators'),
('max_topics_per_day', '10', 'integer', 'Maximum topics a user can create per day'),
('max_replies_per_hour', '20', 'integer', 'Maximum replies a user can post per hour'),
('reputation_threshold_voting', '0', 'integer', 'Minimum reputation required to vote'),
('spam_detection_enabled', 'true', 'boolean', 'Enable automatic spam detection');

-- Create Energy Museum team user
INSERT INTO users (username, email, display_name, role_title, is_team_member, is_moderator, is_verified) VALUES
('energy_museum_team', 'team@theenergymuseum.com', 'Energy Museum Team', 'Official Team', TRUE, TRUE, TRUE);

-- ============================================================================
-- VIEWS FOR EASY QUERYING
-- ============================================================================

-- View for topic list with user info
CREATE VIEW topic_list_view AS
SELECT 
    t.id,
    t.title,
    t.slug,
    t.content,
    t.status,
    t.is_pinned,
    t.is_locked,
    t.view_count,
    t.reply_count,
    t.vote_score,
    t.created_at,
    t.last_reply_at,
    
    c.name as category_name,
    c.slug as category_slug,
    c.icon as category_icon,
    
    COALESCE(u.display_name, g.display_name) as author_name,
    COALESCE(u.role_title, g.role_title) as author_role,
    CASE WHEN u.is_team_member = TRUE THEN 'team' ELSE 'user' END as author_type
    
FROM topics t
LEFT JOIN categories c ON t.category_id = c.id
LEFT JOIN users u ON t.user_id = u.id
LEFT JOIN guest_users g ON t.guest_user_id = g.id
WHERE t.status = 'approved'
ORDER BY t.is_pinned DESC, t.last_reply_at DESC;

-- View for reply list with user info
CREATE VIEW reply_list_view AS
SELECT 
    r.id,
    r.topic_id,
    r.parent_reply_id,
    r.content,
    r.status,
    r.is_pinned,
    r.vote_score,
    r.created_at,
    
    COALESCE(u.display_name, g.display_name) as author_name,
    COALESCE(u.role_title, g.role_title) as author_role,
    CASE WHEN u.is_team_member = TRUE THEN 'team' ELSE 'user' END as author_type
    
FROM replies r
LEFT JOIN users u ON r.user_id = u.id
LEFT JOIN guest_users g ON r.guest_user_id = g.id
WHERE r.status = 'approved'
ORDER BY r.is_pinned DESC, r.created_at ASC;

-- ============================================================================
-- TRIGGERS FOR AUTOMATIC UPDATES
-- ============================================================================

-- Update topic reply count when replies are added/removed
DELIMITER //
CREATE TRIGGER update_topic_reply_count_insert
    AFTER INSERT ON replies
    FOR EACH ROW
BEGIN
    UPDATE topics 
    SET reply_count = (
        SELECT COUNT(*) 
        FROM replies 
        WHERE topic_id = NEW.topic_id AND status = 'approved'
    ),
    last_reply_at = CURRENT_TIMESTAMP
    WHERE id = NEW.topic_id;
END//

CREATE TRIGGER update_topic_reply_count_update
    AFTER UPDATE ON replies
    FOR EACH ROW
BEGIN
    UPDATE topics 
    SET reply_count = (
        SELECT COUNT(*) 
        FROM replies 
        WHERE topic_id = NEW.topic_id AND status = 'approved'
    ),
    last_reply_at = CURRENT_TIMESTAMP
    WHERE id = NEW.topic_id;
END//

-- Update vote counts when votes are added/changed
CREATE TRIGGER update_vote_counts_topics
    AFTER INSERT ON votes
    FOR EACH ROW
BEGIN
    IF NEW.topic_id IS NOT NULL THEN
        UPDATE topics 
        SET 
            upvote_count = (SELECT COUNT(*) FROM votes WHERE topic_id = NEW.topic_id AND vote_type = 'up'),
            downvote_count = (SELECT COUNT(*) FROM votes WHERE topic_id = NEW.topic_id AND vote_type = 'down'),
            vote_score = (
                SELECT COUNT(CASE WHEN vote_type = 'up' THEN 1 END) - COUNT(CASE WHEN vote_type = 'down' THEN 1 END)
                FROM votes WHERE topic_id = NEW.topic_id
            )
        WHERE id = NEW.topic_id;
    END IF;
    
    IF NEW.reply_id IS NOT NULL THEN
        UPDATE replies 
        SET 
            upvote_count = (SELECT COUNT(*) FROM votes WHERE reply_id = NEW.reply_id AND vote_type = 'up'),
            downvote_count = (SELECT COUNT(*) FROM votes WHERE reply_id = NEW.reply_id AND vote_type = 'down'),
            vote_score = (
                SELECT COUNT(CASE WHEN vote_type = 'up' THEN 1 END) - COUNT(CASE WHEN vote_type = 'down' THEN 1 END)
                FROM votes WHERE reply_id = NEW.reply_id
            )
        WHERE id = NEW.reply_id;
    END IF;
END//

DELIMITER ;

-- ============================================================================
-- INDEXES FOR PERFORMANCE
-- ============================================================================

-- Additional performance indexes
CREATE INDEX idx_topics_category_status_pinned ON topics(category_id, status, is_pinned, last_reply_at);
CREATE INDEX idx_replies_topic_status_created ON replies(topic_id, status, created_at);
CREATE INDEX idx_votes_topic_type ON votes(topic_id, vote_type);
CREATE INDEX idx_votes_reply_type ON votes(reply_id, vote_type);
CREATE INDEX idx_flags_status_created ON flags(status, created_at);
CREATE INDEX idx_users_active ON users(status, last_active_at);

-- ============================================================================
-- CLEANUP PROCEDURES
-- ============================================================================

-- Procedure to clean up old guest user records
DELIMITER //
CREATE PROCEDURE CleanupOldGuestUsers()
BEGIN
    DELETE FROM guest_users 
    WHERE created_at < DATE_SUB(NOW(), INTERVAL 30 DAY)
    AND id NOT IN (
        SELECT DISTINCT guest_user_id FROM topics WHERE guest_user_id IS NOT NULL
        UNION
        SELECT DISTINCT guest_user_id FROM replies WHERE guest_user_id IS NOT NULL
    );
END//

-- Procedure to update daily statistics
CREATE PROCEDURE UpdateDailyStats(IN target_date DATE)
BEGIN
    INSERT INTO daily_stats (
        date, new_topics, new_replies, approved_topics, approved_replies,
        active_users, total_votes, total_views
    ) VALUES (
        target_date,
        (SELECT COUNT(*) FROM topics WHERE DATE(created_at) = target_date),
        (SELECT COUNT(*) FROM replies WHERE DATE(created_at) = target_date),
        (SELECT COUNT(*) FROM topics WHERE DATE(approved_at) = target_date AND status = 'approved'),
        (SELECT COUNT(*) FROM replies WHERE DATE(approved_at) = target_date AND status = 'approved'),
        (SELECT COUNT(DISTINCT COALESCE(user_id, guest_user_id)) FROM topics WHERE DATE(created_at) = target_date),
        (SELECT COUNT(*) FROM votes WHERE DATE(created_at) = target_date),
        (SELECT SUM(view_count) FROM topics WHERE DATE(created_at) = target_date)
    ) ON DUPLICATE KEY UPDATE
        new_topics = VALUES(new_topics),
        new_replies = VALUES(new_replies),
        approved_topics = VALUES(approved_topics),
        approved_replies = VALUES(approved_replies),
        active_users = VALUES(active_users),
        total_votes = VALUES(total_votes),
        total_views = VALUES(total_views);
END//

DELIMITER ;

-- Enable event scheduler for automatic daily stats
-- SET GLOBAL event_scheduler = ON;
-- CREATE EVENT update_daily_stats_event
-- ON SCHEDULE EVERY 1 DAY STARTS '2024-01-01 23:59:00'
-- DO CALL UpdateDailyStats(CURDATE());
