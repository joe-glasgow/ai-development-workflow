# Prerequisites for AI-Powered Development Workflow

Welcome to the AI-Powered Development Workflow! This guide will help you get set up with everything you need to start "vibe coding" with AI assistance. Don't worry if you're new to development - we'll walk you through each step.

## 🎯 What is "Vibe Coding"?

"Vibe Coding" is the modern approach to development where you collaborate with AI to build software faster and more efficiently. Instead of struggling with syntax or getting stuck on implementation details, you focus on the creative and strategic aspects while AI handles the heavy lifting.

## 📋 Prerequisites Checklist

### Essential Skills (Don't worry - we'll help you learn!)

- [ ] **Basic Computer Skills**: Comfortable using a computer, installing software, and navigating file systems
- [ ] **Text Editor Familiarity**: Know how to open, edit, and save text files
- [ ] **Command Line Basics**: Ability to open a terminal/command prompt and run simple commands
- [ ] **Web Browser Skills**: Comfortable browsing the internet and following links

### Required Software

#### 1. **Git (Version Control)**
Git helps you track changes to your code and collaborate with others.

**Why you need it:** Essential for managing code changes and working with our workflow tools.

**Installation:**
- **Windows**: Download from [git-scm.com](https://git-scm.com/download/win)
- **Mac**: Install via Homebrew: `brew install git` or download from [git-scm.com](https://git-scm.com/download/mac)
- **Linux**: `sudo apt install git` (Ubuntu/Debian) or `sudo yum install git` (CentOS/RHEL)

**Quick Test:**
```bash
git --version
# Should show something like: git version 2.39.0
```

**New to Git?** Check out these beginner resources:
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)

#### 2. **Node.js (JavaScript Runtime)**
Node.js allows you to run JavaScript outside of web browsers and is needed for our CLI tools.

**Why you need it:** Our workflow tools are built with Node.js and require it to run.

**Installation:**
- Visit [nodejs.org](https://nodejs.org/) and download the LTS version
- Follow the installer instructions for your operating system

**Quick Test:**
```bash
node --version
npm --version
# Should show version numbers for both
```

#### 3. **Code Editor**
A good code editor makes development much easier.

**Recommended Options:**
- **VS Code** (Free, most popular): [code.visualstudio.com](https://code.visualstudio.com/)
- **Cursor** (AI-powered): [cursor.sh](https://cursor.sh/)
- **Sublime Text**: [sublimetext.com](https://www.sublimetext.com/)

### Optional but Helpful

#### Terminal/Command Line Knowledge
You'll need to run some commands, but don't worry - we provide exact commands to copy and paste.

**Learning Resources:**
- **Windows**: [Command Prompt Basics](https://www.digitalcitizen.life/command-prompt-how-use-basic-commands/)
- **Mac/Linux**: [Terminal Basics](https://www.freecodecamp.org/news/command-line-for-beginners/)

#### AI Tool Access
You'll need access to at least one AI assistant. We support many options including free ones!

**Free Options (No Credit Card Required):**
- **Ollama** (Local AI): Completely free, runs on your computer
- **Google AI Studio**: Generous free tier
- **Hugging Face**: 1000 free API calls per month

**Paid Options (Low Cost):**
- **OpenAI GPT-3.5**: ~$1-2 per day typical usage
- **Anthropic Claude**: ~$0.50-1 per day typical usage

## 🚀 Quick Setup for Complete Beginners

### Step 1: Install Prerequisites
1. **Install Git** (see instructions above)
2. **Install Node.js** (see instructions above)
3. **Install VS Code** or your preferred editor

### Step 2: Get the Workflow
Open your terminal/command prompt and run:

```bash
# Clone the repository
git clone https://github.com/joe-glasgow/ai-development-workflow.git

# Navigate to the directory
cd ai-development-workflow

# Run the automated setup
chmod +x setup.sh && ./setup.sh
```

### Step 3: Choose Your AI Provider
Run the setup wizard:
```bash
aiw setup
```

Follow the prompts to choose your AI provider. We recommend starting with **Ollama** (completely free) or **Google AI Studio** (generous free tier).

### Step 4: Start Your First Project
```bash
# Initialize a new project
pc init my-first-project

# Navigate to your project
cd my-first-project

# Start AI-assisted development
aiw chat
```

## 🆘 Getting Help

### If You Get Stuck

1. **Check our [Free AI Setup Guide](/free-ai-setup)** for detailed AI configuration
2. **Browse our [Templates](/templates)** for examples and starting points
3. **Review the [Sample Project](/sample-project)** to see the workflow in action
4. **Ask for help** in our [GitHub Discussions](https://github.com/joe-glasgow/ai-development-workflow/discussions)

### Common Issues

**"Command not found" errors:**
- Make sure you've run the setup script: `./setup.sh`
- Restart your terminal after installation
- Check that Node.js is properly installed: `node --version`

**Git issues:**
- Make sure Git is installed: `git --version`
- Configure Git with your name and email:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

**AI setup issues:**
- Start with free options like Ollama or Google AI Studio
- Check our [Free AI Setup Guide](/free-ai-setup) for detailed instructions
- Make sure you have an active internet connection for cloud AI providers

## 🎓 Learning Path for New Developers

### Week 1: Foundations
- [ ] Install all prerequisites
- [ ] Complete Git basics tutorial
- [ ] Set up your first AI provider (recommend Ollama)
- [ ] Run through our sample project

### Week 2: First Project
- [ ] Use `pc init` to start a simple project
- [ ] Practice AI-assisted coding with basic features
- [ ] Learn to use different personas for different tasks

### Week 3: Advanced Features
- [ ] Explore workflow tracking with `wt`
- [ ] Try different AI providers and compare results
- [ ] Experiment with prompt engineering

### Week 4: Real Project
- [ ] Start a real project using the full workflow
- [ ] Apply all phases: planning, design, development, deployment
- [ ] Share your results with the community

## 💡 Pro Tips for Beginners

1. **Start Small**: Begin with simple projects to learn the workflow
2. **Use Free AI**: Ollama is perfect for learning without costs
3. **Follow the Phases**: Don't skip the planning and design phases
4. **Ask Questions**: AI assistants are great teachers - ask them to explain code
5. **Practice Regularly**: The more you use AI-assisted development, the better you'll get
6. **Join the Community**: Connect with other developers using the workflow

## 🌟 Success Stories

> "I went from knowing basic HTML to building a full-stack app in 3 weeks using this workflow. The AI guidance made complex concepts accessible." - Sarah, Junior Developer

> "As a designer learning to code, the persona-based approach helped me understand different aspects of development." - Mike, UX Designer

> "The free AI options made it possible for me to learn without worrying about costs." - Alex, Student

---

Ready to start your AI-powered development journey? Head to our [Free AI Setup Guide](/free-ai-setup) to begin!
