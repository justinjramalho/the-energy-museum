# 🚀 Energy Museum Production Deployment Checklist

## 📋 Pre-Deployment Verification

**Local Status Check:**
- ✅ PHP 8.2.28 (Server compatible)
- ✅ MariaDB 10.11.10 (Database ready)
- ✅ All forum components built
- ✅ Database schema prepared

## 📁 Files to Upload via FileZilla

### **1. API & Database Files** (NEW - Critical for forum)
```
📁 api/
├── comments.php
├── support.php
├── forum.php
├── grav-integration.php
└── ForumDatabase.php

📁 database/
├── forum_schema.sql
├── migrate.php
└── README.md
```

### **2. Frontend Files** (UPDATED)
```
📁 frontend/
├── public/
│   ├── index.html (updated meta)
│   ├── manifest.json (lightning bolt assets)
│   ├── lightning-bolt-favicon-48x48.ico
│   ├── lightning-bolt-favicon-16x16.png
│   ├── lightning-bolt-favicon-32x32.png
│   ├── lightning-bolt-apple-touch-icon-180x180.png
│   ├── lightning-bolt-android-chrome-192x192.png
│   └── lightning-bolt-android-chrome-512x512.png
├── src/
│   ├── components/
│   │   ├── Header.js (updated navigation)
│   │   ├── Footer.js (updated links & icons)
│   │   ├── ExhibitionTeaser.js (content updates)
│   │   ├── CommentSystem.js
│   │   ├── AskQuestionModal.js
│   │   └── ForumTopic.js
│   ├── pages/
│   │   ├── Home.js (services teaser, updated)
│   │   ├── About.js (complete page)
│   │   ├── Services.js (complete page)
│   │   ├── Exhibitions.js (renamed to Experiences)
│   │   ├── ExhibitionDetail.js (updated)
│   │   ├── Support.js (renamed to Contact)
│   │   ├── Donate.js
│   │   └── Forum.js (NEW)
│   ├── services/
│   │   └── api.js (forum integration)
│   ├── hooks/
│   │   ├── useScrollAnimation.js
│   │   └── useApi.js
│   └── App.js (forum routes)
└── package.json
```

### **3. Backend Files** (UPDATED)
```
📁 backend/
├── user/
│   ├── config/
│   │   └── system.yaml (database config)
│   ├── plugins/
│   │   └── comments/
│   │       └── comments.yaml (forum config)
│   └── pages/
│       ├── 02.about/default.md
│       └── 05.forum/default.md
└── .htaccess
```

### **4. Root Files**
```
📁 root/
├── check-server-info.php (for testing)
├── start-dev-improved.sh
├── package.json
└── README.md
```

## 🎯 FileZilla Upload Strategy

### **Method 1: Complete Fresh Upload (Recommended)**
1. **Delete old public_html contents** (backup first)
2. **Upload ALL updated files**
3. **Verify file structure matches above**

### **Method 2: Selective Upload (Faster)**
1. **Upload NEW directories:** `api/`, `database/`
2. **Replace UPDATED files:** All frontend files, backend configs
3. **Keep existing:** Any custom configurations

## 📂 Directory Structure on Server

After upload, your server should have:
```
📁 /home/u747221136/domains/theenergymuseum.com/public_html/
├── 📁 api/ (NEW)
├── 📁 database/ (NEW) 
├── 📁 frontend/ (UPDATED)
├── 📁 backend/ (UPDATED)
├── 📁 logs/ (will be created)
├── check-server-info.php
└── index.html (redirect to frontend)
```

## ✅ Post-Upload Verification

### **1. File Structure Check**
- [ ] All directories uploaded correctly
- [ ] No missing files in browser
- [ ] Permissions are correct

### **2. Database Migration Test**
- [ ] Run migration script
- [ ] Verify tables created
- [ ] Test sample data

### **3. Frontend Functionality**
- [ ] Website loads at theenergymuseum.com
- [ ] All pages navigate correctly
- [ ] Forum page accessible
- [ ] No console errors

### **4. Forum Integration**
- [ ] "Ask a Question" modal works
- [ ] Database connections successful
- [ ] Vote/flag persistence works

## 🚨 Backup Strategy

**Before Upload:**
1. **Download current public_html** (full backup)
2. **Export any existing database data**
3. **Save current .htaccess and configs**

**Recovery Plan:**
- Keep backup files accessible
- Document any custom configurations
- Test rollback procedure if needed

## 📞 Support Contacts

**If Issues Arise:**
- Hostinger Support: Database permissions
- FileZilla Help: File transfer issues  
- Error Logs: Check /logs directory for details

---

**🎯 Ready to proceed with upload? Confirm which method you prefer and I'll guide you through each step!**
