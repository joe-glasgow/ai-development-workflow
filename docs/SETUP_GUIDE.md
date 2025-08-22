# 🚀 AI Development Workflow - Complete Setup Guide

Welcome! This guide will help you set up the AI Development Workflow from scratch. Whether you're 14 or 40, we'll get you up and running with AI-powered development tools.

## 🎯 What You'll Get

After completing this setup, you'll have:
- **Persona Manager (pc)** - Manage AI personas and project phases
- **AI Integration (aiw)** - Connect with AI providers and generate code
- **Workflow Tracker (wt)** - Track progress and quality metrics
- A sample project to explore
- Full documentation and templates

## 📋 Prerequisites

Before we start, make sure you have:

### Required
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Terminal/Command Prompt** access

### Recommended
- **Git** - [Download here](https://git-scm.com/)
- **VS Code** or your favorite code editor
- Basic familiarity with command line

### Check Your System
Run these commands to verify:
```bash
node --version    # Should show v16.0.0 or higher
npm --version     # Should show 8.0.0 or higher
git --version     # Should show git version info
```

## 🌟 Setup Options

Choose the setup method that works best for you:

### Option 1: Interactive Setup Wizard (Recommended for Beginners)
```bash
# Clone the repository
git clone https://github.com/joe-glasgow/ai-development-workflow.git
cd ai-development-workflow

# Run the interactive wizard
node setup-wizard.js
```

The wizard will:
- ✅ Check your system requirements
- ✅ Install all tools with progress indicators
- ✅ Explain any warnings (like the harmless husky message)
- ✅ Help you configure your AI provider
- ✅ Create your first sample project
- ✅ Verify everything works

### Option 2: Quick Setup Script
```bash
# Clone the repository
git clone https://github.com/joe-glasgow/ai-development-workflow.git
cd ai-development-workflow

# Run the setup script
./setup.sh
```

### Option 3: Manual Setup (Advanced Users)
If you prefer to install each component manually, see the [Manual Installation](#manual-installation) section below.

## 🤖 AI Provider Setup

After installing the tools, you'll need to configure an AI provider:

### Free Options (Great for Getting Started)
1. **Google Gemini** - Free tier available
2. **Hugging Face** - Free tier with good models
3. **Ollama** - Run models locally (completely free)

### Paid Options (More Powerful)
1. **OpenAI GPT-4** - Most popular, very capable
2. **Anthropic Claude** - Great for coding tasks

### Configuration
Run the AI setup wizard:
```bash
aiw setup
```

Follow the prompts to:
- Choose your AI provider
- Enter your API key (if using paid service)
- Test the connection
- Set up your preferences

## 🎮 Quick Start

Once everything is installed:

### 1. Create Your First Project
```bash
pc init my-awesome-project
cd my-awesome-project
```

### 2. Start AI Chat
```bash
aiw chat
```

### 3. Track Your Progress
```bash
wt status
```

## 🔧 Common Issues & Solutions

### "Husky not found" Warning
**This is completely normal!** You'll see:
```
⚠️ Husky not found - this is normal during setup and won't affect functionality
```
This warning is harmless and won't affect your workflow. Husky is a development tool that's not needed for using the AI workflow.

### "Command not found" Errors
If you get `command not found` errors:

**Option 1: Add to PATH (Recommended)**
```bash
# Add this to your ~/.zshrc or ~/.bashrc
export PATH="$(pwd)/tools/persona-manager/bin:$(pwd)/tools/ai-integration/bin:$(pwd)/tools/workflow-tracker/bin:$PATH"
```

**Option 2: Use Full Paths**
```bash
./tools/persona-manager/bin/pc init my-project
./tools/ai-integration/bin/aiw setup
./tools/workflow-tracker/bin/wt status
```

### Permission Denied Errors
```bash
chmod +x tools/*/bin/*
```

### Node.js Version Issues
If you have an old Node.js version:
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version
3. Install and restart your terminal

## 📚 Next Steps

### Explore the Documentation
- **Workflow Guide**: `workflow-guide/README.md`
- **Sample Project**: `sample-project/README.md`
- **Templates**: `templates/README.md`
- **Troubleshooting**: `docs/TROUBLESHOOTING.md`

### Try the Sample Project
```bash
cd sample-project
# Explore the AI-generated project structure
```

### Create Your Own Project
```bash
pc init my-real-project
cd my-real-project
aiw chat
# Start building with AI assistance!
```

## 🆘 Getting Help

### Documentation
- [Troubleshooting Guide](TROUBLESHOOTING.md)
- [Best Practices](BEST_PRACTICES.md)
- [Quality Checklists](QUALITY_CHECKLISTS.md)

### Community
- [GitHub Issues](https://github.com/joe-glasgow/ai-development-workflow/issues)
- [Discussions](https://github.com/joe-glasgow/ai-development-workflow/discussions)

### Quick Fixes
- **Reset everything**: Run `./cleanup.sh` then start over
- **Update tools**: `git pull` then re-run setup
- **Check logs**: Look in `~/.ai-workflow/logs/` for detailed error info

## 🔍 Manual Installation

For advanced users who want full control:

### 1. Install Dependencies
```bash
# Install root dependencies
npm install

# Install tool dependencies
cd tools/persona-manager && npm install && npm run build
cd ../ai-integration && npm install && npm run build
cd ../workflow-tracker && npm install && npm run build
cd ../..
```

### 2. Make Executable
```bash
chmod +x tools/*/bin/*
```

### 3. Set Up Global Commands (Optional)
```bash
# Create symlinks (requires admin privileges)
sudo ln -sf "$(pwd)/tools/persona-manager/bin/pc" /usr/local/bin/pc
sudo ln -sf "$(pwd)/tools/ai-integration/bin/aiw" /usr/local/bin/aiw
sudo ln -sf "$(pwd)/tools/workflow-tracker/bin/wt" /usr/local/bin/wt
```

### 4. Configure AI
```bash
./tools/ai-integration/bin/aiw setup
```

### 5. Test Installation
```bash
./tools/persona-manager/bin/pc --help
./tools/ai-integration/bin/aiw --help
./tools/workflow-tracker/bin/wt --help
```

## 🎉 Success!

If you've made it this far, congratulations! You now have a powerful AI development workflow at your fingertips.

### What's Next?
1. **Explore**: Try the sample project and templates
2. **Create**: Build your first AI-assisted project
3. **Learn**: Read the workflow guide and best practices
4. **Share**: Tell others about your experience!

### Pro Tips
- Use the short commands: `pc`, `aiw`, `wt`
- Start with free AI providers to learn the workflow
- Check out the persona templates for different roles
- Use the workflow tracker to measure your productivity gains

Happy coding with AI! 🤖✨

---

*Having trouble? Check the [Troubleshooting Guide](TROUBLESHOOTING.md) or [open an issue](https://github.com/joe-glasgow/ai-development-workflow/issues).*
