# CLI Installation & Troubleshooting Guide

This guide addresses common issues encountered during CLI tool installation and provides solutions for different scenarios.

## 🚀 Quick Installation

The easiest way to install the CLI tools is using our automated setup script:

```bash
git clone https://github.com/joe-glasgow/ai-development-workflow.git
cd ai-development-workflow
chmod +x setup.sh
./setup.sh
```

## 🛠️ Available Commands

After installation, you'll have access to both long and short command versions:

| Long Command | Short Alias | Purpose |
|--------------|-------------|---------|
| `persona-cli` | `pc` | Project initialization and persona management |
| `ai-workflow` | `aiw` | AI integration and code generation |
| `workflow-tracker` | `wt` | Progress tracking and quality gates |

## 🔧 Installation Options

### Option 1: Global Installation (Recommended)

Global installation allows you to use commands from anywhere:

```bash
./setup.sh
# When prompted, choose 'y' for global installation
```

**Requirements:**
- Write access to `/usr/local/bin` (may require sudo)
- Commands available system-wide

### Option 2: PATH-based Installation

Add tools to your PATH without requiring admin privileges:

```bash
# Add to current session
export PATH="/path/to/ai-development-workflow/tools/persona-manager/bin:/path/to/ai-development-workflow/tools/ai-integration/bin:/path/to/ai-development-workflow/tools/workflow-tracker/bin:$PATH"

# Make permanent (choose your shell)
echo 'export PATH="/path/to/ai-development-workflow/tools/persona-manager/bin:/path/to/ai-development-workflow/tools/ai-integration/bin:/path/to/ai-development-workflow/tools/workflow-tracker/bin:$PATH"' >> ~/.zshrc  # For zsh
echo 'export PATH="/path/to/ai-development-workflow/tools/persona-manager/bin:/path/to/ai-development-workflow/tools/ai-integration/bin:/path/to/ai-development-workflow/tools/workflow-tracker/bin:$PATH"' >> ~/.bashrc  # For bash
```

### Option 3: Direct Path Usage

Use full paths without modifying PATH:

```bash
./tools/persona-manager/bin/pc init my-project
./tools/ai-integration/bin/aiw setup
./tools/workflow-tracker/bin/wt status
```

## 🚨 Common Issues & Solutions

### Issue 1: "Command not found" Error

**Symptoms:**
```bash
$ pc --help
zsh: command not found: pc
```

**Causes & Solutions:**

#### Cause A: Tools not in PATH
```bash
# Check if tools directory is in PATH
echo $PATH | grep ai-development-workflow

# If not found, add to PATH
export PATH="/path/to/ai-development-workflow/tools/persona-manager/bin:/path/to/ai-development-workflow/tools/ai-integration/bin:/path/to/ai-development-workflow/tools/workflow-tracker/bin:$PATH"
```

#### Cause B: Alias files not executable
```bash
# Make alias files executable
chmod +x tools/persona-manager/bin/pc
chmod +x tools/ai-integration/bin/aiw
chmod +x tools/workflow-tracker/bin/wt
```

#### Cause C: Alias files don't exist
```bash
# Check if alias files exist
ls -la tools/persona-manager/bin/
ls -la tools/ai-integration/bin/
ls -la tools/workflow-tracker/bin/

# If missing, re-run setup
./setup.sh
```

### Issue 2: Permission Denied for Global Installation

**Symptoms:**
```bash
⚠️  Cannot write to /usr/local/bin
```

**Solutions:**

#### Solution A: Use sudo (requires admin password)
```bash
sudo ./setup.sh
```

#### Solution B: Use PATH method (recommended)
```bash
# Add to your shell profile
echo 'export PATH="/path/to/ai-development-workflow/tools/persona-manager/bin:/path/to/ai-development-workflow/tools/ai-integration/bin:/path/to/ai-development-workflow/tools/workflow-tracker/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

#### Solution C: Use alternative install directory
```bash
# Create personal bin directory
mkdir -p ~/bin

# Create symlinks
ln -sf "$(pwd)/tools/persona-manager/bin/pc" ~/bin/pc
ln -sf "$(pwd)/tools/ai-integration/bin/aiw" ~/bin/aiw
ln -sf "$(pwd)/tools/workflow-tracker/bin/wt" ~/bin/wt

# Add to PATH
echo 'export PATH="$HOME/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### Issue 3: TypeScript Compilation Errors

**Symptoms:**
```bash
src/cli.ts:4:22 - error TS7016: Could not find a declaration file for module 'inquirer'
```

**Solution:**
```bash
# Clean and reinstall dependencies
cd tools/persona-manager
rm -rf node_modules package-lock.json
npm install
npm run build

# Repeat for other tools if needed
```

### Issue 4: Node.js/npm Not Found

**Symptoms:**
```bash
❌ Node.js is required but not installed.
```

**Solutions:**

#### For macOS:
```bash
# Using Homebrew
brew install node

# Using official installer
# Download from https://nodejs.org/
```

#### For Ubuntu/Debian:
```bash
# Using apt
sudo apt update
sudo apt install nodejs npm

# Using NodeSource repository (recommended)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### For Windows:
```bash
# Download installer from https://nodejs.org/
# Or use Chocolatey
choco install nodejs

# Or use Scoop
scoop install nodejs
```

### Issue 5: Commands Work But Show Wrong Help

**Symptoms:**
Commands execute but show help for the wrong tool.

**Cause:**
Alias files pointing to wrong executables.

**Solution:**
```bash
# Check alias file contents
cat tools/persona-manager/bin/pc
# Should contain: #!/usr/bin/env node
#                require('../dist/cli.js');

# If incorrect, recreate alias files
./setup.sh
```

## 🧪 Testing Your Installation

### Basic Functionality Test
```bash
# Test short commands
pc --help
aiw --help
wt --help

# Test long commands
persona-cli --help
ai-workflow --help
workflow-tracker --help
```

### Full Workflow Test
```bash
# Create test project
pc init test-project
cd test-project

# Setup AI (will prompt for configuration)
aiw setup

# Initialize tracking
wt init

# Check status
wt status
```

## 🧹 Uninstalling

To completely remove all tools and configurations:

```bash
# Run cleanup script
./cleanup.sh

# Manual cleanup if needed
rm -rf tools/*/node_modules
rm -rf tools/*/dist
rm -f /usr/local/bin/{persona-cli,pc,ai-workflow,aiw,workflow-tracker,wt}

# Remove from PATH (edit your shell profile)
# Remove the export PATH line from ~/.zshrc or ~/.bashrc
```

## 🔍 Debugging Tips

### Check Installation Status
```bash
# Verify files exist
ls -la tools/persona-manager/bin/
ls -la tools/ai-integration/bin/
ls -la tools/workflow-tracker/bin/

# Check permissions
ls -la tools/*/bin/*

# Verify PATH
echo $PATH | tr ':' '\n' | grep ai-development-workflow
```

### Check Global Installation
```bash
# Check for global symlinks
ls -la /usr/local/bin/ | grep -E "(persona-cli|pc|ai-workflow|aiw|workflow-tracker|wt)"

# Test global access
which pc
which aiw
which wt
```

### Shell-Specific Issues

#### Zsh (macOS default)
```bash
# Check shell
echo $SHELL

# Reload configuration
source ~/.zshrc

# Check if PATH is set
grep -n "ai-development-workflow" ~/.zshrc
```

#### Bash
```bash
# Reload configuration
source ~/.bashrc

# Check if PATH is set
grep -n "ai-development-workflow" ~/.bashrc
```

## 📞 Getting Help

If you're still experiencing issues:

1. **Check our [Troubleshooting Guide](TROUBLESHOOTING.md)** for general issues
2. **Review the [Prerequisites Guide](PREREQUISITES.md)** for system requirements
3. **Open an issue** on our [GitHub repository](https://github.com/joe-glasgow/ai-development-workflow/issues)
4. **Include the following information:**
   - Operating system and version
   - Node.js and npm versions (`node --version`, `npm --version`)
   - Shell type (`echo $SHELL`)
   - Error messages (full output)
   - Steps you've already tried

## 💡 Pro Tips

1. **Use short commands** (`pc`, `aiw`, `wt`) to reduce typing and cognitive load
2. **Add PATH permanently** to your shell profile for persistent access
3. **Test installation** with `--help` flags before starting projects
4. **Keep tools updated** by re-running `./setup.sh` periodically
5. **Use the cleanup script** for clean uninstalls before reinstalling

---

*This guide covers the most common installation scenarios. For advanced configurations or enterprise deployments, see our [Enterprise Guide](docs/ENTERPRISE.md).*
