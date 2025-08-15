# 🚀 COMPLETE FRESH DEPLOYMENT GUIDE

## 🗂️ STEP 1: CLEAR & PREPARE SERVER

### **Clear public_html completely:**
1. Login to your Hostinger File Manager
2. Navigate to `public_html/`
3. **Select ALL files and folders**
4. **Delete everything** in public_html
5. Confirm public_html is completely empty

---

## 📁 STEP 2: UPLOAD COMPLETE PROJECT

### **Upload EVERYTHING from local the-energy-museum directory:**

```
UPLOAD STRUCTURE:

FROM LOCAL: /Users/degreemaps/Documents/the-energy-museum/

TO SERVER: /public_html/

COMPLETE UPLOAD LIST:
├── frontend/build/*                     → /public_html/ (ROOT - all frontend files)
├── backend/*                           → /public_html/backend/
├── api/*                              → /public_html/api/
├── database/*                         → /public_html/database/
├── check-server-info.php              → /public_html/check-server-info.php
├── setup-forum-database.php           → /public_html/setup-forum-database.php
├── setup-exhibits-database-final.php  → /public_html/setup-exhibits-database-final.php
└── All other root files               → /public_html/
```

### **CRITICAL UPLOAD DETAILS:**

#### **1. Frontend Files (Website Root):**
```
FROM: /the-energy-museum/frontend/build/*
TO: /public_html/

This includes:
- index.html → /public_html/index.html
- static/ → /public_html/static/
- manifest.json → /public_html/manifest.json
- All other build files → /public_html/
```

#### **2. Backend (Grav CMS):**
```
FROM: /the-energy-museum/backend/
TO: /public_html/backend/

This includes:
- system/ → /public_html/backend/system/
- user/ → /public_html/backend/user/
- vendor/ → /public_html/backend/vendor/
- .htaccess → /public_html/backend/.htaccess
- index.php → /public_html/backend/index.php
- All other backend files → /public_html/backend/
```

#### **3. API Files:**
```
FROM: /the-energy-museum/api/
TO: /public_html/api/

This includes:
- comments.php → /public_html/api/comments.php
- support.php → /public_html/api/support.php
- forum.php → /public_html/api/forum.php
- exhibits.php → /public_html/api/exhibits.php
- All other API files → /public_html/api/
```

#### **4. Database Setup Files:**
```
FROM: /the-energy-museum/database/
TO: /public_html/database/

This includes:
- forum_schema.sql → /public_html/database/forum_schema.sql
- exhibits_schema.sql → /public_html/database/exhibits_schema.sql
- All other database files → /public_html/database/
```

#### **5. Root Setup Files:**
```
FROM: /the-energy-museum/
TO: /public_html/

This includes:
- check-server-info.php → /public_html/check-server-info.php
- setup-forum-database.php → /public_html/setup-forum-database.php
- setup-exhibits-database-final.php → /public_html/setup-exhibits-database-final.php
```

---

## 🔧 STEP 3: CONFIGURE GRAV CMS

### **1. Access Grav Admin:**
- URL: `https://theenergymuseum.com/backend/admin`
- This should now work (not 404)

### **2. If Admin Login Required:**
Create admin user file manually:
```
File: /public_html/backend/user/accounts/admin.yaml

Content:
email: admin@theenergymuseum.com
fullname: 'Energy Museum Admin'
title: 'Site Administrator'
access:
  admin:
    login: true
    super: true
hashed_password: [will be auto-generated on first login]
```

### **3. Login Credentials:**
- Username: `admin`
- Password: `[your chosen password]`

---

## 🧪 STEP 4: VERIFY DEPLOYMENT

### **Test These URLs (In Order):**

1. **Main Website:**
   - `https://theenergymuseum.com/` ✅ Should load React homepage

2. **Experiences Page:**
   - `https://theenergymuseum.com/experiences` ✅ Should load without refresh loops

3. **Grav Admin:**
   - `https://theenergymuseum.com/backend/admin` ✅ Should show admin login

4. **API Endpoints:**
   - `https://theenergymuseum.com/api/exhibits.php?action=get_exhibits` ✅ Should return JSON

5. **Database Setup:**
   - `https://theenergymuseum.com/check-server-info.php` ✅ Should show server info

---

## 🚨 CRITICAL SUCCESS CRITERIA

### **✅ After Fresh Deployment:**
- [ ] Main website loads without errors
- [ ] Experiences page loads without refresh loops
- [ ] Grav admin accessible at /backend/admin
- [ ] No 404 errors on any page
- [ ] API endpoints return proper JSON
- [ ] Database connections work

### **❌ If Still Having Issues:**
- Clear browser cache completely
- Try incognito/private browsing
- Check file permissions (755 for directories, 644 for files)
- Verify .htaccess files uploaded correctly

---

## 📋 DETAILED UPLOAD CHECKLIST

### **Frontend Build Files (to ROOT):**
- [ ] index.html
- [ ] static/js/main.12b9801d.js
- [ ] static/css/main.e6c13ad2.css
- [ ] static/js/453.670e15c7.chunk.js
- [ ] manifest.json
- [ ] favicon.ico
- [ ] All lightning bolt icon files

### **Backend Files (to /backend/):**
- [ ] system/ directory (complete Grav core)
- [ ] user/ directory (configuration, plugins, pages)
- [ ] vendor/ directory (PHP dependencies)
- [ ] index.php (Grav entry point)
- [ ] .htaccess (URL rewriting)

### **API Files (to /api/):**
- [ ] exhibits.php
- [ ] comments.php
- [ ] support.php
- [ ] forum.php

### **Database Files (to /database/):**
- [ ] forum_schema.sql
- [ ] exhibits_schema.sql
- [ ] All setup files

### **Root Files:**
- [ ] check-server-info.php
- [ ] setup-forum-database.php
- [ ] setup-exhibits-database-final.php

---

## 🎯 EXPECTED RESULTS

After this complete fresh deployment:

1. **Main website loads perfectly**
2. **No more refresh loops**
3. **Grav admin accessible**
4. **All APIs working**
5. **Database integration functional**
6. **Admin interface ready for Phase 2**

---

## ⚡ READY FOR COMPLETE FRESH START

This approach ensures:
- ✅ **Clean slate** - no conflicting files
- ✅ **Proper structure** - everything in correct locations
- ✅ **Complete functionality** - all systems working
- ✅ **Ready for admin interface** - Phase 2 deployment ready

**Let's get this deployed correctly once and for all!**
