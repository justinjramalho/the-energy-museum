# Energy Museum Forum Database Setup

This directory contains the complete database schema and migration tools for the Energy Museum Community Forum. The database is designed to scale from the current Comments plugin to the Comments Pro plugin with full moderation capabilities.

## 🗄️ Database Overview

### **Core Features Supported:**
- ✅ **Topics & Replies** with full threading
- ✅ **User Management** (registered + guest users)
- ✅ **Voting System** (upvote/downvote)
- ✅ **Flagging & Reporting** with moderation queue
- ✅ **Category System** with filtering
- ✅ **Moderation Tools** with approval workflow
- ✅ **Analytics & Statistics** 
- ✅ **Grav CMS Integration** ready
- ✅ **Comments Pro Plugin** ready

### **Database Tables:**

| Table | Purpose |
|-------|---------|
| `users` | Registered user accounts |
| `guest_users` | Anonymous user sessions |
| `categories` | Forum categories (Trainings, Funding, etc.) |
| `topics` | Discussion topics/questions |
| `replies` | Comments/replies to topics |
| `votes` | Upvote/downvote tracking |
| `flags` | Content reporting system |
| `moderation_log` | Moderation action history |
| `notifications` | User notification system |
| `daily_stats` | Analytics and metrics |
| `forum_settings` | Configuration settings |

## 🚀 Quick Setup

### **1. Database Migration**

```bash
# Run the complete migration
cd database
php migrate.php migrate

# Or do a fresh install with test data
php migrate.php fresh
```

### **2. Environment Configuration**

Create a `.env` file or set environment variables:

```bash
DB_HOST=localhost
DB_NAME=u747221136_energy_museum
DB_USER=u747221136_justinjramalho
DB_PASS=JustinIsTheBest1!
```

### **3. Test the Setup**

```bash
# Verify database structure
php migrate.php migrate

# Add sample data for testing
php migrate.php seed
```

## 📋 Migration Commands

```bash
# Available commands:
php migrate.php migrate   # Run database migration
php migrate.php rollback  # Remove all forum tables  
php migrate.php seed      # Add test data
php migrate.php fresh     # Rollback + Migrate + Seed
```

## 🔧 Integration with Current System

### **React Frontend Integration**

Update your API service to use the new database:

```php
// api/forum-db.php
require_once 'ForumDatabase.php';

$forumDB = new ForumDatabase();

// Get topics for React frontend
$topics = $forumDB->getTopics([
    'category' => $_GET['category'] ?? null,
    'search' => $_GET['search'] ?? null,
    'sort' => $_GET['sort'] ?? 'recent',
    'limit' => 50
]);

header('Content-Type: application/json');
echo json_encode(['success' => true, 'topics' => $topics]);
```

### **Grav CMS Integration**

The database supports full Grav integration:

```yaml
# Comments plugin config update
comments:
  database:
    enabled: true
    table_prefix: 'forum_'
    auto_sync: true
  
  moderation:
    enabled: true
    auto_approve_team: true
    queue_all_posts: true
```

### **Comments Pro Plugin Ready**

The schema supports all Comments Pro features:

- **Advanced Moderation**: Full moderation queue with approval workflow
- **User Reputation**: User scoring and reputation tracking
- **Threaded Comments**: Parent/child reply relationships  
- **Advanced Analytics**: Daily stats and engagement metrics
- **Spam Detection**: IP tracking and flagging system
- **Email Notifications**: Comprehensive notification system

## 📊 Database Performance

### **Optimizations Included:**

- **Indexed Queries**: All common queries are optimized
- **Automated Triggers**: Vote counts update automatically
- **View Caching**: Pre-computed views for common data
- **Cleanup Procedures**: Automatic cleanup of old data

### **Performance Features:**

```sql
-- Key performance indexes
INDEX idx_topics_category_status_pinned ON topics(category_id, status, is_pinned, last_reply_at);
INDEX idx_replies_topic_status_created ON replies(topic_id, status, created_at);

-- Automated vote counting
CREATE TRIGGER update_vote_counts_topics AFTER INSERT ON votes ...

-- Daily statistics automation  
CREATE PROCEDURE UpdateDailyStats(IN target_date DATE) ...
```

## 🛡️ Security Features

### **Built-in Security:**

- **Input Sanitization**: All user inputs are sanitized
- **IP Tracking**: Track user actions by IP address
- **Rate Limiting**: Database support for rate limiting
- **Moderation Queue**: All content reviewed before publication
- **Flag System**: Community-driven content moderation

### **User Management:**

- **Guest Users**: Secure anonymous posting
- **Role-based Access**: Team members, moderators, users
- **Session Tracking**: Secure session management
- **Email Verification**: Optional email verification

## 📈 Analytics & Insights

### **Available Metrics:**

```sql
-- Daily activity stats
SELECT * FROM daily_stats WHERE date >= DATE_SUB(NOW(), INTERVAL 30 DAY);

-- Top topics by engagement
SELECT title, vote_score, reply_count, view_count 
FROM topics 
WHERE status = 'approved' 
ORDER BY (vote_score + reply_count) DESC;

-- User engagement metrics
SELECT author_name, COUNT(*) as posts, AVG(vote_score) as avg_score
FROM topic_list_view 
GROUP BY author_name 
ORDER BY posts DESC;
```

### **Real-time Statistics:**

- **Active Topics**: Real-time topic counts
- **User Engagement**: Vote and reply metrics  
- **Content Quality**: Approval rates and flagging stats
- **Community Growth**: New user and post trends

## 🔄 Migration from Current System

### **Data Migration Steps:**

1. **Export Current Data**: Export existing comments from Grav
2. **Transform Data**: Convert to new schema format
3. **Import Process**: Load data into new database
4. **Validation**: Verify data integrity
5. **Cutover**: Switch to new system

### **Backup Strategy:**

```bash
# Before migration
mysqldump -u user -p database_name > backup_$(date +%Y%m%d).sql

# After migration  
mysqldump -u user -p database_name > forum_backup_$(date +%Y%m%d).sql
```

## 🚀 Production Deployment

### **Environment Setup:**

1. **Database Server**: MySQL 8.0+ or MariaDB 10.5+
2. **PHP Requirements**: PHP 8.0+ with PDO MySQL
3. **Memory**: 512MB+ recommended
4. **Storage**: 1GB+ for database growth

### **Production Configuration:**

```php
// Production database config
$config = [
    'host' => 'srv1540.hstgr.io',
    'dbname' => 'u747221136_energy_museum', 
    'username' => 'u747221136_justinjramalho',
    'password' => 'your_secure_password',
    'charset' => 'utf8mb4',
    'options' => [
        PDO::ATTR_PERSISTENT => true,
        PDO::ATTR_TIMEOUT => 30
    ]
];
```

### **Monitoring & Maintenance:**

- **Daily Stats**: Automated via scheduled procedures
- **Cleanup Tasks**: Remove old guest user sessions
- **Performance Monitoring**: Query optimization
- **Backup Schedule**: Daily automated backups

## 🎯 Upgrade Path to Comments Pro

When ready to upgrade to Comments Pro:

1. **Database Ready**: Schema already supports all Pro features
2. **Data Migration**: No data loss during upgrade
3. **Feature Activation**: Enable Pro features in config
4. **Advanced Moderation**: Full moderation panel ready
5. **Analytics Dashboard**: Rich analytics available

The database is designed to grow with your community needs, from the current simple setup to a full-featured forum with advanced moderation and analytics capabilities.

## 📞 Support

For database setup assistance:
- Review migration logs for any errors
- Check database permissions and connectivity
- Verify PHP PDO MySQL extension is installed
- Test with sample data before production use

**The forum database is now ready to handle a growing, engaged community with professional moderation tools and comprehensive analytics!** 🎉
