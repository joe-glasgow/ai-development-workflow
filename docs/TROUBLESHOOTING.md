# Troubleshooting Guide

Having issues with the AI-Powered Development Workflow? This guide covers common problems and their solutions.

## 🚨 Installation Issues

### "Command not found" Errors

**Problem**: After running setup, commands like `persona-cli` or `ai-workflow` don't work.

**Solutions**:
1. **Restart your terminal** - This is the most common fix
2. **Check Node.js installation**:
   ```bash
   node --version
   npm --version
   ```
3. **Re-run the setup script**:
   ```bash
   chmod +x setup.sh && ./setup.sh
   ```
4. **Manual installation** (if setup script fails):
   ```bash
   cd tools/persona-manager && npm install && npm run build
   cd ../ai-integration && npm install && npm run build
   cd ../workflow-tracker && npm install && npm run build
   ```

### Git Issues

**Problem**: Git commands fail or repository cloning doesn't work.

**Solutions**:
1. **Install Git** if not already installed:
   - Windows: [git-scm.com](https://git-scm.com/download/win)
   - Mac: `brew install git` or download from git-scm.com
   - Linux: `sudo apt install git` (Ubuntu) or `sudo yum install git` (CentOS)

2. **Configure Git** (first-time setup):
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

3. **SSH Key Issues** (if using SSH):
   ```bash
   # Generate new SSH key
   ssh-keygen -t ed25519 -C "your.email@example.com"
   
   # Add to SSH agent
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   
   # Copy public key to GitHub
   cat ~/.ssh/id_ed25519.pub
   ```

### Node.js and npm Issues

**Problem**: Node.js or npm commands fail.

**Solutions**:
1. **Install/Update Node.js**:
   - Download LTS version from [nodejs.org](https://nodejs.org/)
   - Use Node Version Manager (nvm) for multiple versions

2. **Clear npm cache**:
   ```bash
   npm cache clean --force
   ```

3. **Fix npm permissions** (Mac/Linux):
   ```bash
   sudo chown -R $(whoami) ~/.npm
   ```

## 🤖 AI Integration Issues

### AI Provider Setup Problems

**Problem**: AI setup wizard fails or AI commands don't work.

**Solutions**:
1. **Check internet connection** (for cloud AI providers)
2. **Verify API keys**:
   ```bash
   # Check if API key is set
   echo $OPENAI_API_KEY
   echo $ANTHROPIC_API_KEY
   ```
3. **Re-run AI setup**:
   ```bash
   ai-workflow setup
   ```
4. **Try a different AI provider** (start with free options)

### Ollama Issues

**Problem**: Ollama installation or model download fails.

**Solutions**:
1. **Install Ollama**:
   ```bash
   # Mac/Linux
   curl -fsSL https://ollama.ai/install.sh | sh
   
   # Windows: Download from ollama.ai
   ```

2. **Start Ollama service**:
   ```bash
   ollama serve
   ```

3. **Download models**:
   ```bash
   # For coding tasks
   ollama pull codellama:7b
   
   # For general tasks
   ollama pull llama2:7b
   ```

4. **Check Ollama status**:
   ```bash
   ollama list
   curl http://localhost:11434/api/tags
   ```

### API Key Issues

**Problem**: API keys not working or giving authentication errors.

**Solutions**:
1. **Verify API key format**:
   - OpenAI: Starts with `sk-`
   - Anthropic: Starts with `sk-ant-`
   - Google: Usually a long string

2. **Check API key permissions**:
   - Ensure the key has necessary permissions
   - Check usage limits and billing status

3. **Environment variable setup**:
   ```bash
   # Add to your shell profile (.bashrc, .zshrc, etc.)
   export OPENAI_API_KEY="your-key-here"
   export ANTHROPIC_API_KEY="your-key-here"
   
   # Reload shell
   source ~/.bashrc  # or ~/.zshrc
   ```

## 🔧 Tool-Specific Issues

### Persona Manager Issues

**Problem**: `persona-cli` commands fail or don't work as expected.

**Solutions**:
1. **Check installation**:
   ```bash
   which persona-cli
   persona-cli --version
   ```

2. **Re-install if needed**:
   ```bash
   cd tools/persona-manager
   npm install
   npm run build
   npm link  # For global installation
   ```

3. **Permission issues**:
   ```bash
   # Make sure the binary is executable
   chmod +x tools/persona-manager/bin/persona-cli
   ```

### AI Workflow Issues

**Problem**: `ai-workflow` commands fail or give unexpected results.

**Solutions**:
1. **Check AI provider configuration**:
   ```bash
   ai-workflow setup
   ```

2. **Test AI connection**:
   ```bash
   ai-workflow chat
   # Try a simple prompt like "Hello, can you help me?"
   ```

3. **Clear conversation history** (if responses seem off):
   ```bash
   # Remove conversation files
   rm -rf ~/.ai-workflow/conversations/*
   ```

### Workflow Tracker Issues

**Problem**: `workflow-tracker` not tracking progress correctly.

**Solutions**:
1. **Initialize tracking in project**:
   ```bash
   cd your-project
   workflow-tracker init
   ```

2. **Check project structure**:
   ```bash
   # Make sure you're in a valid project directory
   ls -la
   # Should see .workflow-tracker directory
   ```

3. **Reset tracking** (if corrupted):
   ```bash
   rm -rf .workflow-tracker
   workflow-tracker init
   ```

## 🌐 Website and Documentation Issues

### Next.js Development Server Issues

**Problem**: `npm run dev` fails or website doesn't load.

**Solutions**:
1. **Install dependencies**:
   ```bash
   cd nextjs-site
   npm install
   ```

2. **Clear Next.js cache**:
   ```bash
   rm -rf .next
   npm run dev
   ```

3. **Check port availability**:
   ```bash
   # If port 3000 is busy, use a different port
   npm run dev -- -p 3001
   ```

4. **Node.js version compatibility**:
   ```bash
   # Make sure you're using Node.js 18 or later
   node --version
   ```

### Build Issues

**Problem**: Build fails with TypeScript or other errors.

**Solutions**:
1. **Check TypeScript errors**:
   ```bash
   npm run build
   # Review error messages carefully
   ```

2. **Update dependencies**:
   ```bash
   npm update
   ```

3. **Clear node_modules**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## 🔍 Debugging Tips

### General Debugging Approach

1. **Read error messages carefully** - They usually contain the solution
2. **Check the basics first** - Is everything installed and configured?
3. **Test in isolation** - Try each tool separately
4. **Use verbose output** when available:
   ```bash
   persona-cli init --verbose
   ai-workflow chat --debug
   ```

### Log Files and Debugging

**Check log files**:
```bash
# AI workflow logs
ls ~/.ai-workflow/logs/

# Project-specific logs
ls .workflow-tracker/logs/

# System logs (Mac)
tail -f /var/log/system.log

# System logs (Linux)
tail -f /var/log/syslog
```

### Environment Debugging

**Check environment variables**:
```bash
# List all environment variables
env | grep -i ai
env | grep -i openai
env | grep -i anthropic

# Check PATH
echo $PATH
```

## 🆘 Getting Additional Help

### Community Support

1. **GitHub Issues**: [Report bugs and feature requests](https://github.com/joe-glasgow/ai-development-workflow/issues)
2. **GitHub Discussions**: [Ask questions and share experiences](https://github.com/joe-glasgow/ai-development-workflow/discussions)
3. **Documentation**: Check our comprehensive guides in the `/docs` folder

### Before Asking for Help

Please include the following information:
1. **Operating System**: Windows, Mac, or Linux version
2. **Node.js Version**: Output of `node --version`
3. **Error Messages**: Full error text (copy and paste)
4. **Steps to Reproduce**: What you were trying to do
5. **Expected vs. Actual**: What you expected vs. what happened

### Diagnostic Commands

Run these commands and include the output when asking for help:

```bash
# System information
node --version
npm --version
git --version

# Tool installation check
which persona-cli
which ai-workflow
which workflow-tracker

# Tool version check
persona-cli --version
ai-workflow --version
workflow-tracker --version

# Environment check
env | grep -E "(OPENAI|ANTHROPIC|GOOGLE|HUGGING)"
```

## 🔄 Reset and Clean Installation

### Complete Reset

If nothing else works, try a complete reset:

```bash
# 1. Remove all installed tools
npm uninstall -g persona-cli ai-workflow workflow-tracker

# 2. Clear npm cache
npm cache clean --force

# 3. Remove project directory
cd ..
rm -rf ai-development-workflow

# 4. Fresh installation
git clone https://github.com/joe-glasgow/ai-development-workflow.git
cd ai-development-workflow
chmod +x setup.sh && ./setup.sh
```

### Selective Reset

**Reset just the tools**:
```bash
cd tools
rm -rf */node_modules */dist
./setup.sh
```

**Reset just AI configuration**:
```bash
rm -rf ~/.ai-workflow
ai-workflow setup
```

## 📱 Platform-Specific Issues

### Windows Issues

**PowerShell Execution Policy**:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Path Issues**:
- Add Node.js to PATH manually if needed
- Use Git Bash instead of Command Prompt for better compatibility

### Mac Issues

**Homebrew Installation**:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Permission Issues**:
```bash
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

### Linux Issues

**Package Manager Updates**:
```bash
# Ubuntu/Debian
sudo apt update && sudo apt upgrade

# CentOS/RHEL
sudo yum update
```

**Node.js from NodeSource**:
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

---

## 🎯 Prevention Tips

1. **Keep everything updated**: Regularly update Node.js, npm, and dependencies
2. **Use stable versions**: Stick to LTS versions of Node.js
3. **Document your setup**: Keep notes on what works for your environment
4. **Test regularly**: Run quick tests after any system changes
5. **Backup configurations**: Save working configurations before making changes

---

Still having issues? Don't hesitate to [open an issue](https://github.com/joe-glasgow/ai-development-workflow/issues) or start a [discussion](https://github.com/joe-glasgow/ai-development-workflow/discussions) - we're here to help!
