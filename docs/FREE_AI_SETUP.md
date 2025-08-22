# Free & Low-Cost AI Setup Guide

This guide helps you get started with the AI-Powered Development Workflow using free or low-cost AI options, perfect for students, junior developers, or anyone wanting to try the workflow without significant cost.

## 🆓 Free AI Options

### 1. Ollama (Recommended - Completely Free)

**What is Ollama?**
- Runs AI models locally on your computer
- Completely free with no API costs
- Works offline once models are downloaded
- Good performance on modern computers

**Setup Instructions:**
```bash
# 1. Install Ollama
# Visit https://ollama.ai and download for your OS

# 2. Install a coding model (choose one)
ollama pull codellama:7b        # Good for code generation (4GB)
ollama pull llama2:7b          # General purpose (4GB)
ollama pull mistral:7b         # Fast and efficient (4GB)
ollama pull deepseek-coder:6.7b # Excellent for coding (4GB)

# 3. Start Ollama server
ollama serve

# 4. Configure in AI workflow
ai-workflow setup
# Choose "Local Model (Ollama) - FREE"
# Base URL: http://localhost:11434/v1
# Model: codellama:7b (or your chosen model)
```

**Pros:**
- ✅ Completely free
- ✅ Works offline
- ✅ No API rate limits
- ✅ Privacy-focused (data stays local)

**Cons:**
- ❌ Requires decent computer specs (8GB+ RAM recommended)
- ❌ Slower than cloud APIs
- ❌ May need model fine-tuning for best results

### 2. Hugging Face (Free Tier)

**What is Hugging Face?**
- Free tier with 1000 API calls per month
- Access to many open-source models
- Good for experimentation and learning

**Setup Instructions:**
```bash
# 1. Create account at https://huggingface.co
# 2. Get free API token from https://huggingface.co/settings/tokens
# 3. Configure in AI workflow
ai-workflow setup
# Choose "Hugging Face - FREE Tier"
# API Key: your_hugging_face_token
# Base URL: https://api-inference.huggingface.co/models
# Model: microsoft/DialoGPT-large (or other chat model)
```

**Pros:**
- ✅ Free tier available
- ✅ Many model options
- ✅ No local setup required
- ✅ Good for learning

**Cons:**
- ❌ Limited monthly usage
- ❌ May have slower response times
- ❌ Rate limiting on free tier

### 3. Google AI Studio (Free Tier)

**What is Google AI Studio?**
- Free tier with generous limits
- Access to Gemini models
- Good performance and capabilities

**Setup Instructions:**
```bash
# 1. Visit https://makersuite.google.com/app/apikey
# 2. Create free API key
# 3. Configure in AI workflow
ai-workflow setup
# Choose "Google Gemini - FREE Tier"
# API Key: your_google_api_key
# Base URL: https://generativelanguage.googleapis.com/v1beta
# Model: gemini-pro
```

**Pros:**
- ✅ Generous free tier
- ✅ Good model performance
- ✅ Fast response times
- ✅ Reliable service

**Cons:**
- ❌ Requires Google account
- ❌ Usage limits (though generous)

## 💰 Low-Cost Options

### 1. OpenAI GPT-3.5 Turbo
- **Cost**: ~$0.002 per 1K tokens (very affordable)
- **Performance**: Good for most development tasks
- **Setup**: Same as GPT-4 but choose `gpt-3.5-turbo` model

### 2. Anthropic Claude Haiku
- **Cost**: ~$0.25 per million tokens
- **Performance**: Fast and efficient
- **Setup**: Choose `claude-3-haiku-20240307` model

## 🚀 Quick Start with Free Options

### Option 1: Ollama (Best for Privacy & Unlimited Use)
```bash
# Install Ollama from https://ollama.ai
ollama pull codellama:7b
ollama serve

# Setup workflow
git clone https://github.com/yourusername/ai-development-workflow.git
cd ai-development-workflow
chmod +x setup.sh
./setup.sh

# Initialize project
persona-cli init my-free-project
cd my-free-project

# Configure AI (choose Ollama)
ai-workflow setup

# Start coding with AI
ai-workflow chat
```

### Option 2: Google AI Studio (Best for Cloud-Based Free Option)
```bash
# Get free API key from https://makersuite.google.com/app/apikey

# Setup workflow
git clone https://github.com/yourusername/ai-development-workflow.git
cd ai-development-workflow
chmod +x setup.sh
./setup.sh

# Initialize project
persona-cli init my-free-project
cd my-free-project

# Configure AI (choose Google Gemini)
ai-workflow setup

# Start coding with AI
ai-workflow chat
```

## 🎯 Optimizing Free AI Usage

### 1. Efficient Prompting
- **Be specific**: Clear, detailed prompts get better results
- **Use personas**: Leverage the persona system for context
- **Iterate**: Build on previous responses rather than starting over

### 2. Local Model Optimization
```bash
# For better performance with Ollama
ollama pull codellama:13b      # Larger model if you have 16GB+ RAM
ollama pull deepseek-coder:33b # Best coding model if you have 32GB+ RAM

# Optimize Ollama settings
export OLLAMA_NUM_PARALLEL=2   # Adjust based on your CPU cores
export OLLAMA_MAX_LOADED_MODELS=1  # Limit memory usage
```

### 3. Hybrid Approach
- **Local for iteration**: Use Ollama for rapid prototyping and iteration
- **Cloud for complex tasks**: Use free tier cloud APIs for complex architecture decisions
- **Paid for production**: Upgrade to paid APIs for production-critical code

## 🔧 Troubleshooting Free Options

### Ollama Issues
```bash
# Check if Ollama is running
curl http://localhost:11434/api/tags

# Restart Ollama service
ollama serve

# Update Ollama
# Download latest version from https://ollama.ai
```

### API Rate Limits
- **Hugging Face**: 1000 calls/month - track usage in dashboard
- **Google AI Studio**: Check quotas at https://console.cloud.google.com/
- **Solution**: Combine multiple free services or upgrade when needed

### Performance Tips
- **Shorter prompts**: More efficient token usage
- **Batch requests**: Group related questions together
- **Cache responses**: Save AI responses for reuse

## 📊 Cost Comparison

| Provider | Free Tier | Cost After Free | Best For |
|----------|-----------|-----------------|----------|
| Ollama | Unlimited | Hardware only | Privacy, unlimited use |
| Google AI Studio | Generous limits | $0.50/1M tokens | Balanced performance/cost |
| Hugging Face | 1000 calls/month | $9/month | Experimentation |
| OpenAI GPT-3.5 | $5 credit | $0.002/1K tokens | Production quality |
| Anthropic Claude | $5 credit | $0.25/1M tokens | Advanced reasoning |

## 🎓 Learning Path

### Week 1: Start with Ollama
- Install and configure Ollama
- Try basic code generation
- Learn persona switching
- Practice with simple components

### Week 2: Explore Cloud Options
- Try Google AI Studio free tier
- Compare response quality
- Test different models
- Learn prompt optimization

### Week 3: Advanced Usage
- Combine multiple AI providers
- Use workflow tracking
- Generate complete features
- Export and analyze sessions

### Week 4: Production Ready
- Evaluate paid options if needed
- Optimize workflows
- Share learnings with team
- Scale to larger projects

## 💡 Pro Tips for Free Usage

1. **Start Local**: Begin with Ollama to learn without costs
2. **Optimize Prompts**: Better prompts = better results with any model
3. **Use Personas**: The persona system works with all AI providers
4. **Track Usage**: Monitor API usage to stay within free limits
5. **Combine Providers**: Use different providers for different tasks
6. **Learn Gradually**: Master one provider before trying others

## 🆘 Getting Help

- **Ollama Community**: https://github.com/ollama/ollama/discussions
- **Hugging Face Forums**: https://discuss.huggingface.co/
- **Google AI Studio Docs**: https://ai.google.dev/docs
- **Workflow Issues**: Create issue in this repository

Remember: The goal is to learn and improve your development process. Start free, learn the workflow, and upgrade when the value is proven!
