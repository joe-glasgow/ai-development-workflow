#!/bin/bash

# AI-Powered Development Workflow Cleanup Script
# This script safely removes all installed tools and configurations

set -e  # Exit on any error

echo "🧹 AI-Powered Development Workflow Cleanup"
echo "==========================================="
echo ""
echo "⚠️  WARNING: This will remove all installed tools and configurations."
echo "This action cannot be undone."
echo ""

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to safely remove symlinks
remove_global_symlink() {
    local cmd_name="$1"
    local install_dir="$2"
    
    if [ -L "$install_dir/$cmd_name" ]; then
        echo "  Removing global symlink: $install_dir/$cmd_name"
        rm -f "$install_dir/$cmd_name"
    elif [ -f "$install_dir/$cmd_name" ]; then
        echo "  Found file at $install_dir/$cmd_name (not a symlink, skipping)"
    fi
}

# Confirm cleanup
read -p "Are you sure you want to proceed? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cleanup cancelled."
    exit 0
fi

echo ""
echo "🔍 Scanning for installed components..."

# Check for global installations
INSTALL_DIR="/usr/local/bin"
GLOBAL_COMMANDS=("persona-cli" "ai-workflow" "workflow-tracker" "pc" "aiw" "wt")
FOUND_GLOBAL=false

for cmd in "${GLOBAL_COMMANDS[@]}"; do
    if [ -L "$INSTALL_DIR/$cmd" ] || [ -f "$INSTALL_DIR/$cmd" ]; then
        FOUND_GLOBAL=true
        break
    fi
done

if [ "$FOUND_GLOBAL" = true ]; then
    echo "📍 Found global installations in $INSTALL_DIR"
    read -p "Remove global commands? This may require sudo permissions (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "🗑️  Removing global commands..."
        
        # Try to remove without sudo first
        CAN_WRITE=true
        if [ ! -w "$INSTALL_DIR" ]; then
            CAN_WRITE=false
            echo "  Need elevated permissions for $INSTALL_DIR"
            
            # Check if sudo is available
            if command_exists sudo; then
                echo "  Using sudo to remove global commands..."
                for cmd in "${GLOBAL_COMMANDS[@]}"; do
                    if [ -L "$INSTALL_DIR/$cmd" ] || [ -f "$INSTALL_DIR/$cmd" ]; then
                        echo "    Removing: $INSTALL_DIR/$cmd"
                        sudo rm -f "$INSTALL_DIR/$cmd"
                    fi
                done
            else
                echo "  ❌ sudo not available. Please manually remove:"
                for cmd in "${GLOBAL_COMMANDS[@]}"; do
                    if [ -L "$INSTALL_DIR/$cmd" ] || [ -f "$INSTALL_DIR/$cmd" ]; then
                        echo "    $INSTALL_DIR/$cmd"
                    fi
                done
            fi
        else
            # Can write directly
            for cmd in "${GLOBAL_COMMANDS[@]}"; do
                remove_global_symlink "$cmd" "$INSTALL_DIR"
            done
        fi
        
        echo "✅ Global commands cleanup completed"
    else
        echo "⏭️  Skipping global commands cleanup"
    fi
fi

# Clean up local installations
echo ""
echo "🧽 Cleaning up local installations..."

# Clean persona-manager
if [ -d "tools/persona-manager" ]; then
    echo "  Cleaning persona-manager..."
    cd tools/persona-manager
    if [ -f "package.json" ]; then
        echo "    Removing node_modules..."
        rm -rf node_modules
        echo "    Removing dist..."
        rm -rf dist
        echo "    Removing package-lock.json..."
        rm -f package-lock.json
    fi
    cd ../..
fi

# Clean ai-integration
if [ -d "tools/ai-integration" ]; then
    echo "  Cleaning ai-integration..."
    cd tools/ai-integration
    if [ -f "package.json" ]; then
        echo "    Removing node_modules..."
        rm -rf node_modules
        echo "    Removing dist..."
        rm -rf dist
        echo "    Removing package-lock.json..."
        rm -f package-lock.json
    fi
    cd ../..
fi

# Clean workflow-tracker
if [ -d "tools/workflow-tracker" ]; then
    echo "  Cleaning workflow-tracker..."
    cd tools/workflow-tracker
    if [ -f "package.json" ]; then
        echo "    Removing node_modules..."
        rm -rf node_modules
        echo "    Removing dist..."
        rm -rf dist
        echo "    Removing package-lock.json..."
        rm -f package-lock.json
    fi
    cd ../..
fi

# Clean website dependencies (optional)
if [ -d "nextjs-site/node_modules" ]; then
    echo ""
    read -p "Remove website dependencies? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "  Cleaning website dependencies..."
        cd nextjs-site
        echo "    Removing node_modules..."
        rm -rf node_modules
        echo "    Removing package-lock.json..."
        rm -f package-lock.json
        echo "    Removing .next build cache..."
        rm -rf .next
        cd ..
    fi
fi

# Clean up any generated project files (optional)
echo ""
read -p "Remove any generated project files and AI logs? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🗂️  Scanning for generated project files..."
    
    # Look for common project patterns
    find . -name ".ai-workflow" -type d 2>/dev/null | while read -r dir; do
        echo "  Found AI workflow directory: $dir"
        read -p "    Remove $dir? (y/N): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            rm -rf "$dir"
            echo "    ✅ Removed $dir"
        fi
    done
    
    find . -name "ai-workflow-logs" -type d 2>/dev/null | while read -r dir; do
        if [[ "$dir" != "./sample-project/ai-workflow-logs" ]]; then
            echo "  Found AI logs directory: $dir"
            read -p "    Remove $dir? (y/N): " -n 1 -r
            echo
            if [[ $REPLY =~ ^[Yy]$ ]]; then
                rm -rf "$dir"
                echo "    ✅ Removed $dir"
            fi
        fi
    done
fi

echo ""
echo "🎯 Cleanup Summary"
echo "=================="
echo "✅ Local tool installations cleaned"
echo "✅ Build artifacts removed"
echo "✅ Dependencies cleaned"

if [ "$FOUND_GLOBAL" = true ]; then
    echo "✅ Global commands processed"
fi

echo ""
echo "💡 Next Steps:"
echo "- To reinstall: Run ./setup.sh"
echo "- To verify cleanup: Check that 'pc', 'aiw', 'wt' commands are not found"
echo "- Manual cleanup: Remove any remaining PATH exports from your shell profile"
echo ""
echo "🧹 Cleanup completed successfully!"
