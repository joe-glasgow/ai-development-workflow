import { AIIntegration } from '../src/AIIntegration';
import * as fs from 'fs';
import * as path from 'path';
import inquirer from 'inquirer';
import axios from 'axios';

// Mock modules
jest.mock('fs');
jest.mock('inquirer');
jest.mock('axios');

const mockFs = fs as jest.Mocked<typeof fs>;
const mockInquirer = inquirer as jest.Mocked<typeof inquirer>;
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('AIIntegration', () => {
  let aiIntegration: AIIntegration;
  const mockCwd = '/test/project';

  beforeEach(() => {
    // Clear all mocks first
    jest.clearAllMocks();
    
    // Mock process.cwd before creating the instance
    jest.spyOn(process, 'cwd').mockReturnValue(mockCwd);
    
    aiIntegration = new AIIntegration();
    mockFs.existsSync.mockReturnValue(false);
    mockFs.readFileSync.mockReturnValue('{}');
    mockFs.writeFileSync.mockImplementation(() => {});
    mockFs.mkdirSync.mockImplementation(() => '');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('setupAI', () => {
    it('should configure OpenAI provider', async () => {
      const mockAnswers = {
        provider: 'OpenAI (GPT-4) - Paid',
        apiKey: 'sk-test-key',
        baseUrl: 'https://api.openai.com/v1',
        model: 'gpt-4'
      };

      mockInquirer.prompt.mockResolvedValue(mockAnswers);

      await aiIntegration.setupAI();

      expect(mockFs.writeFileSync).toHaveBeenCalledWith(
        path.join(mockCwd, '.ai-workflow', 'ai-config.json'),
        expect.stringContaining('"name": "OpenAI (GPT-4) - Paid"')
      );

      expect(mockFs.writeFileSync).toHaveBeenCalledWith(
        path.join(mockCwd, '.env'),
        expect.stringContaining('AI_API_KEY=sk-test-key')
      );
    });

    it('should configure local Ollama provider', async () => {
      const mockAnswers = {
        provider: 'Local Model (Ollama) - FREE',
        apiKey: '',
        baseUrl: 'http://localhost:11434/v1',
        model: 'llama2'
      };

      mockInquirer.prompt.mockResolvedValue(mockAnswers);

      await aiIntegration.setupAI();

      expect(mockFs.writeFileSync).toHaveBeenCalledWith(
        path.join(mockCwd, '.ai-workflow', 'ai-config.json'),
        expect.stringContaining('"name": "Local Model (Ollama) - FREE"')
      );
    });

    it('should handle existing .env file', async () => {
      const mockAnswers = {
        provider: 'OpenAI (GPT-4) - Paid',
        apiKey: 'sk-test-key',
        baseUrl: 'https://api.openai.com/v1',
        model: 'gpt-4'
      };

      mockInquirer.prompt.mockResolvedValue(mockAnswers);
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue('EXISTING_VAR=value\n');

      await aiIntegration.setupAI();

      expect(mockFs.writeFileSync).toHaveBeenCalledWith(
        path.join(mockCwd, '.env'),
        expect.stringContaining('EXISTING_VAR=value')
      );
    });
  });

  describe('startChat', () => {
    it('should handle missing AI configuration', async () => {
      mockFs.existsSync.mockReturnValue(false);

      await aiIntegration.startChat();

      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining('❌ AI not configured')
      );
    });

    it('should start chat with valid configuration', async () => {
      const mockConfig = {
        name: 'OpenAI (GPT-4) - Paid',
        apiKey: 'sk-test-key',
        baseUrl: 'https://api.openai.com/v1',
        model: 'gpt-4'
      };

      const mockContext = {
        projectName: 'Test Project',
        currentPhase: 'Development',
        activePersona: 'Frontend Developer',
        conversationHistory: []
      };

      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync
        .mockReturnValueOnce(JSON.stringify(mockConfig))
        .mockReturnValueOnce(JSON.stringify(mockContext));

      // Mock inquirer to simulate user typing 'exit'
      mockInquirer.prompt.mockResolvedValue({ prompt: 'exit' });

      await aiIntegration.startChat();

      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining('🤖 Starting AI chat')
      );
    });
  });

  describe('switchPersona', () => {
    it('should switch to existing persona', async () => {
      const personaName = 'Frontend Developer';
      const mockContext = {
        projectName: 'Test Project',
        currentPhase: 'Development',
        activePersona: 'Frontend Developer',
        conversationHistory: []
      };

      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue(JSON.stringify(mockContext)); // Mock context file

      await aiIntegration.switchPersona(personaName);

      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining('✅ Switched to Frontend Developer')
      );
    });

    it('should handle non-existent persona', async () => {
      const personaName = 'Nonexistent Developer';
      mockFs.existsSync.mockReturnValue(false);

      await aiIntegration.switchPersona(personaName);

      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining('❌ Persona "Nonexistent Developer" not found')
      );
    });
  });

  describe('AI API calls', () => {
    beforeEach(() => {
      const mockConfig = {
        name: 'OpenAI (GPT-4) - Paid',
        apiKey: 'sk-test-key',
        baseUrl: 'https://api.openai.com/v1',
        model: 'gpt-4'
      };

      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));
    });

    it('should call OpenAI API successfully', async () => {
      const mockResponse = {
        data: {
          choices: [
            {
              message: {
                content: 'This is a test response from OpenAI'
              }
            }
          ]
        }
      };

      mockAxios.post.mockResolvedValue(mockResponse);

      const prompt = 'Test prompt';
      const config = {
        name: 'OpenAI (GPT-4) - Paid',
        apiKey: 'sk-test-key',
        baseUrl: 'https://api.openai.com/v1',
        model: 'gpt-4'
      };

      const response = await aiIntegration['callOpenAI'](prompt, config);

      expect(mockAxios.post).toHaveBeenCalledWith(
        'https://api.openai.com/v1/chat/completions',
        expect.objectContaining({
          model: 'gpt-4',
          messages: [{ role: 'user', content: prompt }]
        }),
        expect.objectContaining({
          headers: expect.objectContaining({
            'Authorization': 'Bearer sk-test-key'
          })
        })
      );

      expect(response).toBe('This is a test response from OpenAI');
    });

    it('should call Anthropic API successfully', async () => {
      const mockResponse = {
        data: {
          content: [
            {
              text: 'This is a test response from Claude'
            }
          ]
        }
      };

      mockAxios.post.mockResolvedValue(mockResponse);

      const prompt = 'Test prompt';
      const config = {
        name: 'Anthropic (Claude) - Paid',
        apiKey: 'sk-ant-test-key',
        baseUrl: 'https://api.anthropic.com/v1',
        model: 'claude-3-sonnet-20240229'
      };

      const response = await aiIntegration['callAnthropic'](prompt, config);

      expect(mockAxios.post).toHaveBeenCalledWith(
        'https://api.anthropic.com/v1/messages',
        expect.objectContaining({
          model: 'claude-3-sonnet-20240229',
          messages: [{ role: 'user', content: prompt }]
        }),
        expect.objectContaining({
          headers: expect.objectContaining({
            'x-api-key': 'sk-ant-test-key'
          })
        })
      );

      expect(response).toBe('This is a test response from Claude');
    });

    it('should call Ollama API successfully', async () => {
      const mockResponse = {
        data: {
          choices: [
            {
              message: {
                content: 'This is a test response from Ollama'
              }
            }
          ]
        }
      };

      mockAxios.post.mockResolvedValue(mockResponse);

      const prompt = 'Test prompt';
      const config = {
        name: 'Local Model (Ollama) - FREE',
        apiKey: '',
        baseUrl: 'http://localhost:11434/v1',
        model: 'llama2'
      };

      const response = await aiIntegration['callOllama'](prompt, config);

      expect(mockAxios.post).toHaveBeenCalledWith(
        'http://localhost:11434/v1/chat/completions',
        expect.objectContaining({
          model: 'llama2',
          messages: [{ role: 'user', content: prompt }],
          stream: false
        })
      );

      expect(response).toBe('This is a test response from Ollama');
    });

    it('should handle API call errors', async () => {
      mockAxios.post.mockRejectedValue(new Error('Network error'));

      const prompt = 'Test prompt';
      const config = {
        name: 'OpenAI (GPT-4) - Paid',
        apiKey: 'sk-test-key',
        baseUrl: 'https://api.openai.com/v1',
        model: 'gpt-4'
      };

      await expect(aiIntegration['callOpenAI'](prompt, config)).rejects.toThrow('Network error');
    });
  });

  describe('generateCode', () => {
    it('should generate React component code', async () => {
      const mockConfig = {
        name: 'OpenAI (GPT-4) - Paid',
        apiKey: 'sk-test-key',
        baseUrl: 'https://api.openai.com/v1',
        model: 'gpt-4'
      };

      const mockAnswers = {
        codeType: 'React Component',
        description: 'A button component',
        fileName: 'Button.tsx'
      };

      const mockResponse = {
        data: {
          choices: [
            {
              message: {
                content: 'import React from "react";\n\nconst Button = () => {\n  return <button>Click me</button>;\n};\n\nexport default Button;'
              }
            }
          ]
        }
      };

      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));
      mockInquirer.prompt
        .mockResolvedValueOnce(mockAnswers)
        .mockResolvedValueOnce({ saveCode: false });
      mockAxios.post.mockResolvedValue(mockResponse);

      await aiIntegration.generateCode();

      expect(mockAxios.post).toHaveBeenCalledWith(
        'https://api.openai.com/v1/chat/completions',
        expect.objectContaining({
          messages: expect.arrayContaining([
            expect.objectContaining({
              content: expect.stringContaining('React Component')
            })
          ])
        }),
        expect.any(Object)
      );

      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining('🎉 Generated Code:')
      );
    });

    it('should save generated code to file', async () => {
      const mockConfig = {
        name: 'OpenAI (GPT-4) - Paid',
        apiKey: 'sk-test-key',
        baseUrl: 'https://api.openai.com/v1',
        model: 'gpt-4'
      };

      const mockAnswers = {
        codeType: 'React Component',
        description: 'A button component',
        fileName: 'Button.tsx'
      };

      const mockResponse = {
        data: {
          choices: [
            {
              message: {
                content: 'const Button = () => <button>Click me</button>;'
              }
            }
          ]
        }
      };

      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));
      mockInquirer.prompt
        .mockResolvedValueOnce(mockAnswers)
        .mockResolvedValueOnce({ saveCode: true })
        .mockResolvedValueOnce({ filePath: 'Button.tsx' });
      mockAxios.post.mockResolvedValue(mockResponse);

      await aiIntegration.generateCode();

      expect(mockFs.writeFileSync).toHaveBeenCalledWith(
        'Button.tsx',
        'const Button = () => <button>Click me</button>;'
      );
    });
  });

  describe('utility methods', () => {
    it('should get correct persona for code type', () => {
      expect(aiIntegration['getPersonaForCodeType']('React Component')).toBe('Frontend Developer');
      expect(aiIntegration['getPersonaForCodeType']('API Endpoint')).toBe('Backend Developer');
      expect(aiIntegration['getPersonaForCodeType']('Database Schema')).toBe('Backend Developer');
      expect(aiIntegration['getPersonaForCodeType']('Test Suite')).toBe('QA Engineer');
      expect(aiIntegration['getPersonaForCodeType']('Configuration File')).toBe('DevOps Engineer');
      expect(aiIntegration['getPersonaForCodeType']('Unknown Type')).toBe('Frontend Developer');
    });

    it('should build contextual prompt correctly', () => {
      const userPrompt = 'Create a login form';
      const personaContext = '# Frontend Developer\nExpert in React';
      const context = {
        projectName: 'Test App',
        currentPhase: 'Development',
        activePersona: 'Frontend Developer',
        conversationHistory: [
          {
            timestamp: '2023-01-01T00:00:00Z',
            persona: 'Frontend Developer',
            prompt: 'Previous question',
            response: 'Previous response'
          }
        ]
      };

      const result = aiIntegration['buildContextualPrompt'](userPrompt, personaContext, context);

      expect(result).toContain('# Frontend Developer');
      expect(result).toContain('Project Context: Test App');
      expect(result).toContain('Current Phase: Development');
      expect(result).toContain('Recent Conversation:');
      expect(result).toContain('Current Request: Create a login form');
    });
  });

  describe('showHistory', () => {
    it('should display conversation history', async () => {
      const mockContext = {
        projectName: 'Test Project',
        currentPhase: 'Development',
        activePersona: 'Frontend Developer',
        conversationHistory: [
          {
            timestamp: '2023-01-01T00:00:00Z',
            persona: 'Frontend Developer',
            prompt: 'Create a button',
            response: 'Here is a button component...'
          }
        ]
      };

      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue(JSON.stringify(mockContext));

      await aiIntegration.showHistory();

      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining('📚 Conversation History:')
      );
    });

    it('should handle empty history', async () => {
      const mockContext = {
        projectName: 'Test Project',
        currentPhase: 'Development',
        activePersona: 'Frontend Developer',
        conversationHistory: []
      };

      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue(JSON.stringify(mockContext));

      await aiIntegration.showHistory();

      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining('📭 No conversation history found')
      );
    });
  });

  describe('exportSession', () => {
    it('should export session data', async () => {
      const mockContext = {
        projectName: 'Test Project',
        currentPhase: 'Development',
        activePersona: 'Frontend Developer',
        conversationHistory: [
          {
            timestamp: '2023-01-01T00:00:00Z',
            persona: 'Frontend Developer',
            prompt: 'Test prompt',
            response: 'Test response'
          }
        ]
      };

      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue(JSON.stringify(mockContext));

      await aiIntegration.exportSession();

      expect(mockFs.writeFileSync).toHaveBeenCalledWith(
        expect.stringMatching(/ai-session-\d+\.json/),
        expect.stringContaining('Test Project')
      );
    });

    it('should handle empty session', async () => {
      const mockContext = {
        projectName: 'Test Project',
        currentPhase: 'Development',
        activePersona: 'Frontend Developer',
        conversationHistory: []
      };

      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue(JSON.stringify(mockContext));

      await aiIntegration.exportSession();

      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining('📭 No conversation history to export')
      );
    });
  });
});
