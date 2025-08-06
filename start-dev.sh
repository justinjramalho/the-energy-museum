#!/bin/bash

# The Energy Museum - Development Server Start Script
echo "🏛️  Starting The Energy Museum Development Environment"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if PHP is installed
if ! command -v php &> /dev/null; then
    echo "❌ PHP is not installed. Please install PHP first."
    exit 1
fi

echo "✅ Node.js and PHP are available"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing root dependencies..."
    npm install
fi

if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd frontend && npm install && cd ..
fi

echo ""
echo "🚀 Starting development servers..."
echo "   Frontend (React): http://localhost:3000"
echo "   Backend (Grav):   http://localhost:8001"
echo "   API Server:       http://localhost:8002"
echo "   Admin Panel:      http://localhost:8001/admin"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

# Start all servers using concurrently
npm run dev