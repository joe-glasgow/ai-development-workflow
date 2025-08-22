import inquirer from 'inquirer';
import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as chalk from 'chalk';

dotenv.config();

export interface AIProvider {
  name: string;
  apiKey: string;
  baseUrl: string;
  model: string;
}

export interface WorkflowContext {
  projectName: string;
  currentPhase: string;
  activePersona: string;
  conversationHistory: Array<{
    timestamp: string;
    persona: string;
    prompt: string;
    response: string;
  }>;
}

export class AIIntegration {
  private configPath: string;
  private workflowPath: string;

  constructor() {
    this.configPath = path.join(process.cwd(), '.ai-workflow');
    this.workflowPath = path.join(this.configPath, 'ai-context.json');
  }

  async setupAI() {
    console.log(chalk.blue('🤖 Setting up AI integration...'));

    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'provider',
        message: 'Choose your AI provider:',
        choices: [
          'OpenAI (GPT-4) - Paid',
          'Anthropic (Claude) - Paid',
          'Local Model (Ollama) - FREE',
          'Hugging Face - FREE Tier',
          'Google Gemini - FREE Tier',
          'Custom API'
        ]
      },
      {
        type: 'input',
        name: 'apiKey',
        message: 'Enter your API key (leave blank for local models):',
        when: (answers) => !answers.provider.includes('Local Model')
      },
      {
        type: 'input',
        name: 'baseUrl',
        message: 'Enter API base URL:',
        default: (answers: any) => {
          switch (answers.provider) {
            case 'OpenAI (GPT-4) - Paid': return 'https://api.openai.com/v1';
            case 'Anthropic (Claude) - Paid': return 'https://api.anthropic.com/v1';
            case 'Local Model (Ollama) - FREE': return 'http://localhost:11434/v1';
            case 'Hugging Face - FREE Tier': return 'https://api-inference.huggingface.co/models';
            case 'Google Gemini - FREE Tier': return 'https://generativelanguage.googleapis.com/v1beta';
            default: return '';
          }
        }
      },
      {
        type: 'input',
        name: 'model',
        message: 'Enter model name:',
        default: (answers: any) => {
          switch (answers.provider) {
            case 'OpenAI (GPT-4)': return 'gpt-4';
            case 'Anthropic (Claude)': return 'claude-3-sonnet-20240229';
            case 'Local Model (Ollama)': return 'llama2';
            default: return '';
          }
        }
      }
    ]);

    const config: AIProvider = {
      name: answers.provider,
      apiKey: answers.apiKey || '',
      baseUrl: answers.baseUrl,
      model: answers.model
    };

    // Save AI configuration
    if (!fs.existsSync(this.configPath)) {
      fs.mkdirSync(this.configPath, { recursive: true });
    }

    fs.writeFileSync(
      path.join(this.configPath, 'ai-config.json'),
      JSON.stringify(config, null, 2)
    );

    // Create .env file for API keys
    const envPath = path.join(process.cwd(), '.env');
    let envContent = '';
    
    if (fs.existsSync(envPath)) {
      envContent = fs.readFileSync(envPath, 'utf-8');
    }

    if (answers.apiKey && !envContent.includes('AI_API_KEY')) {
      envContent += `\n# AI Integration\nAI_API_KEY=${answers.apiKey}\n`;
      fs.writeFileSync(envPath, envContent);
    }

    console.log(chalk.green('✅ AI integration configured successfully!'));
    console.log(chalk.yellow('💡 Use "ai-workflow chat" to start AI-assisted development'));
  }

  async startChat() {
    const config = this.loadAIConfig();
    if (!config) {
      console.log(chalk.red('❌ AI not configured. Run "ai-workflow setup" first.'));
      return;
    }

    const context = this.loadWorkflowContext();
    
    console.log(chalk.blue(`🤖 Starting AI chat with ${config.name}`));
    console.log(chalk.gray(`Project: ${context.projectName || 'Unknown'}`));
    console.log(chalk.gray(`Phase: ${context.currentPhase || 'Not set'}`));
    console.log(chalk.gray(`Persona: ${context.activePersona || 'None'}`));
    console.log(chalk.yellow('Type "exit" to quit, "persona [name]" to switch persona\n'));

    let chatActive = true;
    while (chatActive) {
      const { prompt } = await inquirer.prompt([
        {
          type: 'input',
          name: 'prompt',
          message: chalk.cyan('You:'),
        }
      ]);

      if (prompt.toLowerCase() === 'exit') {
        chatActive = false;
        break;
      }

      if (prompt.toLowerCase().startsWith('persona ')) {
        const personaName = prompt.substring(8).trim();
        await this.switchPersona(personaName);
        continue;
      }

      await this.sendToAI(prompt, context, config);
    }

    console.log(chalk.blue('👋 AI chat session ended'));
  }

  async switchPersona(personaName: string) {
    const personaFile = personaName.replace(/\s+/g, '') + '.md';
    const personaPath = path.join(this.configPath, 'personas', personaFile);

    if (!fs.existsSync(personaPath)) {
      console.log(chalk.red(`❌ Persona "${personaName}" not found.`));
      return;
    }

    const context = this.loadWorkflowContext();
    context.activePersona = personaName;
    this.saveWorkflowContext(context);

    console.log(chalk.green(`✅ Switched to ${personaName} persona`));
  }

  async sendToAI(prompt: string, context: WorkflowContext, config: AIProvider) {
    try {
      console.log(chalk.gray('🤔 Thinking...'));

      // Load active persona context
      let personaContext = '';
      if (context.activePersona) {
        const personaFile = context.activePersona.replace(/\s+/g, '') + '.md';
        const personaPath = path.join(this.configPath, 'personas', personaFile);
        
        if (fs.existsSync(personaPath)) {
          personaContext = fs.readFileSync(personaPath, 'utf-8');
        }
      }

      // Build full prompt with context
      const fullPrompt = this.buildContextualPrompt(prompt, personaContext, context);

      // Send to AI (implementation depends on provider)
      const response = await this.callAI(fullPrompt, config);

      console.log(chalk.green('\n🤖 AI Response:'));
      console.log(response);
      console.log('');

      // Save conversation history
      context.conversationHistory.push({
        timestamp: new Date().toISOString(),
        persona: context.activePersona || 'None',
        prompt: prompt,
        response: response
      });

      this.saveWorkflowContext(context);

    } catch (error: any) {
      console.log(chalk.red('❌ Error communicating with AI:'), error.message);
    }
  }

  public buildContextualPrompt(userPrompt: string, personaContext: string, context: WorkflowContext): string {
    let prompt = '';

    // Add persona context if available
    if (personaContext) {
      prompt += `${personaContext}\n\n`;
    }

    // Add project context
    if (context.projectName) {
      prompt += `Project Context: ${context.projectName}\n`;
    }
    
    if (context.currentPhase) {
      prompt += `Current Phase: ${context.currentPhase}\n`;
    }

    // Add recent conversation history for context
    if (context.conversationHistory.length > 0) {
      const recentHistory = context.conversationHistory.slice(-3);
      prompt += '\nRecent Conversation:\n';
      recentHistory.forEach(entry => {
        prompt += `[${entry.persona}] ${entry.prompt}\n`;
        prompt += `Response: ${entry.response.substring(0, 200)}...\n\n`;
      });
    }

    prompt += `\nCurrent Request: ${userPrompt}`;

    return prompt;
  }

  private async callAI(prompt: string, config: AIProvider): Promise<string> {
    try {
      if (config.name.includes('OpenAI')) {
        return await this.callOpenAI(prompt, config);
      } else if (config.name.includes('Anthropic')) {
        return await this.callAnthropic(prompt, config);
      } else if (config.name.includes('Local Model')) {
        return await this.callOllama(prompt, config);
      } else {
        return await this.callCustomAPI(prompt, config);
      }
    } catch (error: any) {
      throw new Error(`AI API call failed: ${error.message}`);
    }
  }

  public async callOpenAI(prompt: string, config: AIProvider): Promise<string> {
    const response = await axios.post(
      `${config.baseUrl}/chat/completions`,
      {
        model: config.model,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 2000,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${config.apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content;
  }

  public async callAnthropic(prompt: string, config: AIProvider): Promise<string> {
    const response = await axios.post(
      `${config.baseUrl}/messages`,
      {
        model: config.model,
        max_tokens: 2000,
        messages: [{ role: 'user', content: prompt }]
      },
      {
        headers: {
          'x-api-key': config.apiKey,
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01'
        }
      }
    );

    return response.data.content[0].text;
  }

  public async callOllama(prompt: string, config: AIProvider): Promise<string> {
    const response = await axios.post(
      `${config.baseUrl}/chat/completions`,
      {
        model: config.model,
        messages: [{ role: 'user', content: prompt }],
        stream: false
      }
    );

    return response.data.choices[0].message.content;
  }

  private async callCustomAPI(prompt: string, config: AIProvider): Promise<string> {
    // Generic implementation for custom APIs
    const response = await axios.post(
      `${config.baseUrl}/chat`,
      {
        prompt: prompt,
        model: config.model
      },
      {
        headers: {
          'Authorization': `Bearer ${config.apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.response || response.data.content || response.data.text;
  }

  private loadAIConfig(): AIProvider | null {
    const configFile = path.join(this.configPath, 'ai-config.json');
    
    if (!fs.existsSync(configFile)) {
      return null;
    }

    return JSON.parse(fs.readFileSync(configFile, 'utf-8'));
  }

  private loadWorkflowContext(): WorkflowContext {
    if (!fs.existsSync(this.workflowPath)) {
      return {
        projectName: '',
        currentPhase: '',
        activePersona: '',
        conversationHistory: []
      };
    }

    return JSON.parse(fs.readFileSync(this.workflowPath, 'utf-8'));
  }

  private saveWorkflowContext(context: WorkflowContext) {
    if (!fs.existsSync(this.configPath)) {
      fs.mkdirSync(this.configPath, { recursive: true });
    }

    fs.writeFileSync(this.workflowPath, JSON.stringify(context, null, 2));
  }

  async generateCode() {
    const config = this.loadAIConfig();
    if (!config) {
      console.log(chalk.red('❌ AI not configured. Run "ai-workflow setup" first.'));
      return;
    }

    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'codeType',
        message: 'What type of code do you want to generate?',
        choices: [
          'React Component',
          'API Endpoint',
          'Database Schema',
          'Test Suite',
          'Configuration File'
        ]
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe what you want to create:'
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'Enter the file name (with extension):'
      }
    ]);

    const context = this.loadWorkflowContext();
    
    // Get appropriate persona for code type
    const persona = this.getPersonaForCodeType(answers.codeType);
    
    // Load persona context
    const personaFile = persona.replace(/\s+/g, '') + '.md';
    const personaPath = path.join(this.configPath, 'personas', personaFile);
    let personaContext = '';
    
    if (fs.existsSync(personaPath)) {
      personaContext = fs.readFileSync(personaPath, 'utf-8');
    }

    // Build code generation prompt
    const prompt = `${personaContext}

Generate ${answers.codeType} with the following requirements:
${answers.description}

File name: ${answers.fileName}

Please provide:
1. Complete, production-ready code
2. Proper TypeScript types
3. Error handling
4. Comments explaining complex logic
5. Basic tests if applicable

Follow best practices for ${answers.codeType} development.`;

    try {
      console.log(chalk.gray('🤔 Generating code...'));
      const response = await this.callAI(prompt, config);

      console.log(chalk.green('\n🎉 Generated Code:'));
      console.log(chalk.gray('='.repeat(50)));
      console.log(response);
      console.log(chalk.gray('='.repeat(50)));

      // Ask if user wants to save the code
      const { saveCode } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'saveCode',
          message: 'Save this code to a file?',
          default: true
        }
      ]);

      if (saveCode) {
        const { filePath } = await inquirer.prompt([
          {
            type: 'input',
            name: 'filePath',
            message: 'Enter the file path to save:',
            default: answers.fileName
          }
        ]);

        fs.writeFileSync(filePath, response);
        console.log(chalk.green(`✅ Code saved to ${filePath}`));
      }

      // Save to conversation history
      context.conversationHistory.push({
        timestamp: new Date().toISOString(),
        persona: persona,
        prompt: `Generate ${answers.codeType}: ${answers.description}`,
        response: response
      });

      this.saveWorkflowContext(context);

    } catch (error: any) {
      console.log(chalk.red('❌ Error generating code:'), error.message);
    }
  }

  public getPersonaForCodeType(codeType: string): string {
    const mapping: { [key: string]: string } = {
      'React Component': 'Frontend Developer',
      'API Endpoint': 'Backend Developer',
      'Database Schema': 'Backend Developer',
      'Test Suite': 'QA Engineer',
      'Configuration File': 'DevOps Engineer'
    };
    return mapping[codeType] || 'Frontend Developer';
  }

  async showHistory() {
    const context = this.loadWorkflowContext();
    
    if (context.conversationHistory.length === 0) {
      console.log(chalk.yellow('📭 No conversation history found.'));
      return;
    }

    console.log(chalk.blue('📚 Conversation History:'));
    console.log(chalk.gray('='.repeat(50)));

    context.conversationHistory.forEach((entry, index) => {
      const date = new Date(entry.timestamp).toLocaleString();
      console.log(chalk.cyan(`\n[${index + 1}] ${date} - ${entry.persona}`));
      console.log(chalk.white(`Prompt: ${entry.prompt}`));
      console.log(chalk.gray(`Response: ${entry.response.substring(0, 200)}...`));
    });
  }

  async exportSession() {
    const context = this.loadWorkflowContext();
    
    if (context.conversationHistory.length === 0) {
      console.log(chalk.yellow('📭 No conversation history to export.'));
      return;
    }

    const exportData = {
      project: context.projectName,
      phase: context.currentPhase,
      exportedAt: new Date().toISOString(),
      conversations: context.conversationHistory
    };

    const fileName = `ai-session-${Date.now()}.json`;
    fs.writeFileSync(fileName, JSON.stringify(exportData, null, 2));

    console.log(chalk.green(`✅ Session exported to ${fileName}`));
  }
}
