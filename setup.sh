#!/bin/bash

# AI-Powered Development Workflow Setup Script
# This script automates the installation and setup of all workflow tools

set -e  # Exit on any error

echo "🚀 Setting up AI-Powered Development Workflow..."
echo "=================================================="

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo "🔍 Checking prerequisites..."

if ! command_exists node; then
    echo "❌ Node.js is required but not installed."
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

if ! command_exists npm; then
    echo "❌ npm is required but not installed."
    echo "Please install npm (usually comes with Node.js)"
    exit 1
fi

echo "✅ Prerequisites check passed"

# Install and build persona-manager
echo ""
echo "📦 Installing Persona Manager..."
cd tools/persona-manager
npm install
npm run build
chmod +x bin/persona-cli
chmod +x bin/pc  # Short alias
echo "✅ Persona Manager installed"

# Install and build ai-integration
echo ""
echo "🤖 Installing AI Integration..."
cd ../ai-integration
npm install
npm run build
chmod +x bin/ai-workflow
chmod +x bin/aiw  # Short alias
echo "✅ AI Integration installed"

# Install and build workflow-tracker
echo ""
echo "📊 Installing Workflow Tracker..."
cd ../workflow-tracker
npm install
npm run build
chmod +x bin/workflow-tracker
chmod +x bin/wt  # Short alias
echo "✅ Workflow Tracker installed"

# Return to root directory
cd ../..

# Create global symlinks (optional)
echo ""
echo "🔗 Setting up global commands..."

# Check if user wants global installation
read -p "Install commands globally? This allows you to use all commands from anywhere (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Create symlinks in a directory that's likely in PATH
    INSTALL_DIR="/usr/local/bin"
    
    if [ -w "$INSTALL_DIR" ]; then
        # Install both long and short commands
        ln -sf "$(pwd)/tools/persona-manager/bin/persona-cli" "$INSTALL_DIR/persona-cli"
        ln -sf "$(pwd)/tools/persona-manager/bin/pc" "$INSTALL_DIR/pc"
        ln -sf "$(pwd)/tools/ai-integration/bin/ai-workflow" "$INSTALL_DIR/ai-workflow"
        ln -sf "$(pwd)/tools/ai-integration/bin/aiw" "$INSTALL_DIR/aiw"
        ln -sf "$(pwd)/tools/workflow-tracker/bin/workflow-tracker" "$INSTALL_DIR/workflow-tracker"
        ln -sf "$(pwd)/tools/workflow-tracker/bin/wt" "$INSTALL_DIR/wt"
        echo "✅ Global commands installed to $INSTALL_DIR"
        echo "   Available commands: persona-cli (pc), ai-workflow (aiw), workflow-tracker (wt)"
    else
        echo "⚠️  Cannot write to $INSTALL_DIR. You have several options:"
        echo ""
        echo "🔧 Option 1 - Use sudo (requires admin password):"
        echo "   sudo ./setup.sh"
        echo ""
        echo "🔧 Option 2 - Add to PATH manually (recommended):"
        echo "   export PATH=\"$(pwd)/tools/persona-manager/bin:$(pwd)/tools/ai-integration/bin:$(pwd)/tools/workflow-tracker/bin:\$PATH\""
        echo "   # Add this line to your ~/.zshrc or ~/.bashrc to make it permanent"
        echo ""
        echo "🔧 Option 3 - Use full paths:"
        echo "   ./tools/persona-manager/bin/pc"
        echo "   ./tools/ai-integration/bin/aiw"
        echo "   ./tools/workflow-tracker/bin/wt"
    fi
else
    echo "💡 To use the tools, choose one of these options:"
    echo ""
    echo "🔧 Option 1 - Add to PATH (recommended):"
    echo "   export PATH=\"$(pwd)/tools/persona-manager/bin:$(pwd)/tools/ai-integration/bin:$(pwd)/tools/workflow-tracker/bin:\$PATH\""
    echo "   # Add this line to your ~/.zshrc or ~/.bashrc to make it permanent"
    echo ""
    echo "🔧 Option 2 - Use full paths:"
    echo "   ./tools/persona-manager/bin/pc init my-project"
    echo "   ./tools/ai-integration/bin/aiw setup"
    echo "   ./tools/workflow-tracker/bin/wt status"
fi

# Install website dependencies (optional)
echo ""
read -p "Install documentation website dependencies? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "📱 Installing website dependencies..."
    cd nextjs-site
    npm install
    echo "✅ Website dependencies installed"
    echo "💡 Run 'npm run dev' in nextjs-site/ to start the documentation website"
    cd ..
fi

echo ""
echo "🎉 Setup Complete!"
echo "=================="
echo ""
echo "🚀 Quick Start (using short commands):"
echo "1. Initialize a new project:"
echo "   pc init my-awesome-project"
echo ""
echo "2. Setup AI integration:"
echo "   cd my-awesome-project"
echo "   aiw setup"
echo ""
echo "3. Start development:"
echo "   aiw chat"
echo ""
echo "📚 Documentation:"
echo "- Workflow Guide: workflow-guide/README.md"
echo "- Sample Project: sample-project/README.md"
echo "- Templates: templates/README.md"
echo ""
echo "🛠️  Available Commands:"
echo "- pc (persona-cli): Project initialization and persona management"
echo "- aiw (ai-workflow): AI integration and code generation"
echo "- wt (workflow-tracker): Progress tracking and quality gates"
echo ""
echo "💡 Free AI Options:"
echo "- Ollama (local): Install from https://ollama.ai"
echo "- Hugging Face: Free tier available"
echo "- Google Colab: Free GPU access for local models"
echo ""
echo "🧹 To uninstall: Run ./cleanup.sh"
echo ""
echo "Happy coding with AI! 🤖✨"
