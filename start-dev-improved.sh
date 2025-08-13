#!/bin/bash

echo "🚀 Starting The Energy Museum - Improved Development Environment"
echo "================================================================"

# Kill any existing servers
echo "🧹 Cleaning up existing servers..."
pkill -f "php.*localhost.*8001" 2>/dev/null || true
pkill -f "php.*localhost.*8002" 2>/dev/null || true
pkill -f "npm.*start" 2>/dev/null || true
sleep 2

# Check for required tools
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js first."
    exit 1
fi

if ! command -v php &> /dev/null; then
    echo "❌ PHP not found. Please install PHP first."
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing root dependencies..."
    npm install
fi

if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd frontend && npm install && cd ..
fi

if [ ! -d "backend/vendor" ]; then
    echo "📦 Installing Grav dependencies..."
    cd backend && composer install && cd ..
fi

# Start servers in background
echo ""
echo "🚀 Starting development servers..."

# Start Grav CMS Backend
echo "🏛️  Starting Grav CMS (localhost:8001)..."
cd backend && php -S localhost:8001 system/router.php > ../logs/grav.log 2>&1 &
GRAV_PID=$!
cd ..

# Start API Server
echo "🔧 Starting API Server (localhost:8002)..."
cd api && php -S localhost:8002 > ../logs/api.log 2>&1 &
API_PID=$!
cd ..

# Start React Frontend
echo "⚛️  Starting React Frontend (localhost:3000)..."
cd frontend && npm start > ../logs/react.log 2>&1 &
REACT_PID=$!
cd ..

# Create logs directory
mkdir -p logs

# Wait for servers to start
echo ""
echo "⏳ Waiting for servers to initialize..."
sleep 5

# Test servers
echo ""
echo "🔍 Testing server connectivity..."

# Test Grav
if curl -s -f http://localhost:8001 > /dev/null; then
    echo "✅ Grav CMS: http://localhost:8001"
    echo "✅ Grav Admin: http://localhost:8001/admin"
else
    echo "❌ Grav CMS failed to start"
fi

# Test API
if curl -s -f http://localhost:8002/support.php > /dev/null; then
    echo "✅ API Server: http://localhost:8002"
else
    echo "❌ API Server failed to start"
fi

# Test React (takes longer to start)
echo "⏳ React is starting up (this may take 30-60 seconds)..."
sleep 10
if curl -s -f http://localhost:3000 > /dev/null; then
    echo "✅ React Frontend: http://localhost:3000"
else
    echo "⏳ React still starting up - check http://localhost:3000 in your browser"
fi

echo ""
echo "🎉 Development environment ready!"
echo ""
echo "📱 Frontend (React):      http://localhost:3000"
echo "🏛️  Backend (Grav CMS):    http://localhost:8001"
echo "⚙️  Admin Panel:          http://localhost:8001/admin"
echo "🔧 API Server:           http://localhost:8002"
echo ""
echo "📋 Credentials:"
echo "   Admin Username: edthescienceguy"
echo "   Admin Password: JustinIsTheBest1!"
echo ""
echo "📁 Logs available in: ./logs/"
echo ""
echo "💡 To stop all servers: Ctrl+C or run 'pkill -f php && pkill -f npm'"
echo ""

# Keep script running
echo "Press Ctrl+C to stop all servers..."
wait
