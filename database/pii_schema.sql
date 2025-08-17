-- PII (Personally Identifiable Information) Database Schema
-- For The Energy Museum Contact Information Collection

-- Table for Newsletter Subscribers
CREATE TABLE newsletter_subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT,
    status ENUM('active', 'unsubscribed', 'bounced') DEFAULT 'active',
    unsubscribed_at TIMESTAMP NULL,
    privacy_consent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    gdpr_compliant BOOLEAN DEFAULT TRUE,
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_subscribed_at (subscribed_at)
);

-- Table for Professional Consultation Requests
CREATE TABLE consultation_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    organization VARCHAR(255),
    support_type ENUM('educational', 'business', 'policy', 'research', 'other') NOT NULL,
    message TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT,
    status ENUM('pending', 'contacted', 'scheduled', 'completed', 'cancelled') DEFAULT 'pending',
    assigned_to VARCHAR(255),
    notes TEXT,
    follow_up_date DATE,
    privacy_consent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    gdpr_compliant BOOLEAN DEFAULT TRUE,
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_support_type (support_type),
    INDEX idx_submitted_at (submitted_at)
);

-- Table for Contact Form Submissions (General)
CREATE TABLE contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    submission_type ENUM('general', 'support', 'feedback', 'partnership') DEFAULT 'general',
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT,
    status ENUM('new', 'read', 'responded', 'closed') DEFAULT 'new',
    privacy_consent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    gdpr_compliant BOOLEAN DEFAULT TRUE,
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_submission_type (submission_type)
);

-- Table for Unsubscribe Tokens (for newsletter)
CREATE TABLE unsubscribe_tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    token VARCHAR(64) NOT NULL UNIQUE,
    expires_at TIMESTAMP NOT NULL,
    used_at TIMESTAMP NULL,
    INDEX idx_token (token),
    INDEX idx_email (email)
);

-- Data retention and privacy compliance columns are included in table definitions above
