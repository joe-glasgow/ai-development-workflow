#!/bin/bash

echo "🛠️  Setting up TechGear Store locally..."

# Install frontend dependencies
cd frontend
npm install
echo "✅ Frontend dependencies installed"

# Install backend dependencies
cd ../backend/infrastructure/cdk
npm install
echo "✅ Backend dependencies installed"

# Setup local environment
cd ../../../
cp .env.example .env
echo "✅ Environment file created"

echo "🎉 Setup complete! Run 'npm run dev' to start development"
