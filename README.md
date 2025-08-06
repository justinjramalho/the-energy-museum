# The Energy Museum - Visual Storytelling Website

A modern, interactive museum website built with React frontend and Grav CMS backend, featuring digital exhibitions, visitor comments, and professional support requests.

## Project Structure

```
the-energy-museum/
├── frontend/          # React application
├── backend/           # Grav CMS
├── docs/             # Documentation
└── README.md         # This file
```

## Features

- 🏛️ **Digital Exhibitions**: Immersive visual storytelling experiences
- 💬 **Interactive Comments**: Visitor engagement on exhibitions
- 🤝 **Professional Support**: Request individualized assistance
- 📱 **Responsive Design**: Modern, mobile-friendly interface
- 🎨 **Visual Storytelling**: Rich media and interactive content

## Technology Stack

- **Frontend**: React.js with modern hooks and routing
- **Backend**: Grav CMS for content management
- **Styling**: Modern CSS with responsive design
- **API**: RESTful integration between React and Grav

## Development Roadmap

1. ✅ Project setup and structure
2. 🔄 Grav CMS backend configuration
3. ⏳ React frontend development
4. ⏳ Digital exhibitions system
5. ⏳ Comment functionality
6. ⏳ Support request system
7. ⏳ UI/UX polish
8. ⏳ API integration
9. ⏳ Testing and deployment

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **PHP** (v8.1 or higher)
- **npm** or **yarn**

### Quick Start

For the fastest setup, use our automated start script:

```bash
./start-dev.sh
```

This will automatically install dependencies and start both development servers.

### Manual Installation & Setup

1. **Clone or download the project**
   ```bash
   cd the-energy-museum
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies (for development scripts)
   npm install
   
   # Install frontend dependencies
   cd frontend
   npm install
   cd ..
   ```

3. **Start the development servers**
   
   **Option A: Start both servers simultaneously**
   ```bash
   npm run dev
   ```
   
   **Option B: Start servers individually**
   ```bash
   # Terminal 1: Start Grav CMS backend
   cd backend
   php -S localhost:8001 system/router.php
   
   # Terminal 2: Start React frontend
   cd frontend
   npm start
   ```

4. **Access the applications**
   - **Frontend (React)**: http://localhost:3000
   - **Backend (Grav CMS)**: http://localhost:8001
   - **API Server**: http://localhost:8002
   - **Grav Admin**: http://localhost:8001/admin (first visit will prompt to create admin account)

### Development Workflow

- **Frontend Development**: Work in the `frontend/` directory using React
- **Content Management**: Use Grav CMS admin panel or edit markdown files in `backend/user/pages/`
- **API Development**: API endpoints are available at http://localhost:8002
  - Comments: `/comments.php/{exhibition-id}` (GET/POST)
  - Support: `/support.php` (POST)
  - Data is stored in JSON files in the `data/` directory
- **Styling**: Use styled-components in React components

### Current Features ✅

- 🏛️ **Museum Homepage** with modern, energy-themed design and scroll animations
- 📋 **Digital Exhibitions** with storytelling focus and categorized displays
- 💬 **Interactive Comment System** for visitor engagement on exhibitions
- 🤝 **Professional Support System** with working consultation request forms
- 🎨 **Responsive Design** optimized for all devices
- 🔗 **React Router** for seamless navigation
- 📡 **REST API Integration** for comments, support requests, and data management
- ⚡ **Real-time Data Storage** using JSON files and PHP backend
- 🎯 **Scroll-triggered Animations** with alternating exhibition teasers
- 📖 **Grav CMS Integration** for content management

### Upcoming Features 🚧

- Interactive exhibition content with 3D visualizations
- Advanced exhibition detail pages with rich multimedia
- Expert consultation booking system with calendar integration
- Newsletter subscription and email automation
- Advanced search and filtering across exhibitions
- User authentication and visitor profiles
- Data analytics and visitor engagement metrics