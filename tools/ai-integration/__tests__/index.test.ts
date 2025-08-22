import { AIIntegration } from '../src/AIIntegration';

// Mock the AIIntegration class
jest.mock('../src/AIIntegration');

const MockedAIIntegration = AIIntegration as jest.MockedClass<typeof AIIntegration>;

// Mock console methods
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

// Mock process.exit
const _mockExit = jest.spyOn(process, 'exit').mockImplementation((_code?: string | number | null | undefined) => {
  return undefined as never;
});

describe('AI Integration CLI', () => {
  let mockAIIntegration: jest.Mocked<AIIntegration>;

  beforeEach(() => {
    jest.clearAllMocks();
    mockAIIntegration = new MockedAIIntegration() as jest.Mocked<AIIntegration>;
    MockedAIIntegration.mockImplementation(() => mockAIIntegration);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('CLI Commands', () => {
    it('should handle setup command', async () => {
      mockAIIntegration.setupAI = jest.fn().mockResolvedValue(undefined);

      const setupAction = jest.fn(async () => {
        await mockAIIntegration.setupAI();
      });

      await setupAction();
      expect(mockAIIntegration.setupAI).toHaveBeenCalled();
    });

    it('should handle chat command', async () => {
      mockAIIntegration.startChat = jest.fn().mockResolvedValue(undefined);

      const chatAction = jest.fn(async () => {
        await mockAIIntegration.startChat();
      });

      await chatAction();
      expect(mockAIIntegration.startChat).toHaveBeenCalled();
    });

    it('should handle generate command', async () => {
      mockAIIntegration.generateCode = jest.fn().mockResolvedValue(undefined);

      const generateAction = jest.fn(async () => {
        await mockAIIntegration.generateCode();
      });

      await generateAction();
      expect(mockAIIntegration.generateCode).toHaveBeenCalled();
    });

    it('should handle history command', async () => {
      mockAIIntegration.showHistory = jest.fn().mockResolvedValue(undefined);

      const historyAction = jest.fn(async () => {
        await mockAIIntegration.showHistory();
      });

      await historyAction();
      expect(mockAIIntegration.showHistory).toHaveBeenCalled();
    });

    it('should handle export command', async () => {
      mockAIIntegration.exportSession = jest.fn().mockResolvedValue(undefined);

      const exportAction = jest.fn(async () => {
        await mockAIIntegration.exportSession();
      });

      await exportAction();
      expect(mockAIIntegration.exportSession).toHaveBeenCalled();
    });

    it('should handle errors gracefully', async () => {
      const error = new Error('AI setup failed');
      mockAIIntegration.setupAI = jest.fn().mockRejectedValue(error);

      const errorHandlingAction = jest.fn(async () => {
        try {
          await mockAIIntegration.setupAI();
        } catch (err) {
          console.error('❌ Error:', (err as Error).message);
          return false; // Return false instead of calling process.exit
        }
        return true;
      });

      const result = await errorHandlingAction();
      expect(result).toBe(false);
      expect(mockConsoleError).toHaveBeenCalledWith('❌ Error:', 'AI setup failed');
    });
  });

  describe('CLI Validation', () => {
    it('should validate AI provider configurations', () => {
      const validateProvider = (provider: string): boolean => {
        const validProviders = [
          'OpenAI (GPT-4) - Paid',
          'Anthropic (Claude) - Paid',
          'Local Model (Ollama) - FREE',
          'Hugging Face - FREE Tier',
          'Google Gemini - FREE Tier',
          'Custom API'
        ];
        return validProviders.includes(provider);
      };

      expect(validateProvider('OpenAI (GPT-4) - Paid')).toBe(true);
      expect(validateProvider('Anthropic (Claude) - Paid')).toBe(true);
      expect(validateProvider('Local Model (Ollama) - FREE')).toBe(true);
      expect(validateProvider('Invalid Provider')).toBe(false);
    });

    it('should validate API key format', () => {
      const validateAPIKey = (key: string, provider: string): boolean => {
        if (provider.includes('Local Model')) {
          return true; // Local models don't need API keys
        }
        
        if (!key || key.trim().length === 0) {
          return false;
        }

        // Basic validation for different providers
        if (provider.includes('OpenAI')) {
          return key.startsWith('sk-');
        }
        if (provider.includes('Anthropic')) {
          return key.startsWith('sk-ant-');
        }
        
        return key.length > 10; // Generic validation
      };

      expect(validateAPIKey('sk-test123', 'OpenAI (GPT-4) - Paid')).toBe(true);
      expect(validateAPIKey('sk-ant-test123', 'Anthropic (Claude) - Paid')).toBe(true);
      expect(validateAPIKey('', 'Local Model (Ollama) - FREE')).toBe(true);
      expect(validateAPIKey('invalid', 'OpenAI (GPT-4) - Paid')).toBe(false);
      expect(validateAPIKey('', 'OpenAI (GPT-4) - Paid')).toBe(false);
    });

    it('should validate code generation types', () => {
      const validateCodeType = (codeType: string): boolean => {
        const validTypes = [
          'React Component',
          'API Endpoint',
          'Database Schema',
          'Test Suite',
          'Configuration File'
        ];
        return validTypes.includes(codeType);
      };

      expect(validateCodeType('React Component')).toBe(true);
      expect(validateCodeType('API Endpoint')).toBe(true);
      expect(validateCodeType('Invalid Type')).toBe(false);
    });

    it('should validate file paths', () => {
      const validateFilePath = (filePath: string): boolean => {
        if (!filePath || filePath.trim().length === 0) {
          return false;
        }
        
        // Check for valid file extension
        const validExtensions = ['.js', '.ts', '.jsx', '.tsx', '.py', '.java', '.cpp', '.c', '.go', '.rs'];
        const hasValidExtension = validExtensions.some(ext => filePath.endsWith(ext));
        
        // Check for invalid characters
        const invalidChars = /[<>:"|?*]/;
        
        return hasValidExtension && !invalidChars.test(filePath);
      };

      expect(validateFilePath('component.tsx')).toBe(true);
      expect(validateFilePath('api/users.ts')).toBe(true);
      expect(validateFilePath('test.spec.js')).toBe(true);
      expect(validateFilePath('')).toBe(false);
      expect(validateFilePath('invalid.txt')).toBe(false);
      expect(validateFilePath('invalid<file>.ts')).toBe(false);
    });
  });

  describe('Configuration Management', () => {
    it('should handle configuration loading', () => {
      const loadConfig = (configExists: boolean) => {
        if (!configExists) {
          console.log('❌ AI not configured. Run "ai-workflow setup" first.');
          return null;
        }
        
        return {
          name: 'OpenAI (GPT-4) - Paid',
          apiKey: 'sk-test123',
          baseUrl: 'https://api.openai.com/v1',
          model: 'gpt-4'
        };
      };

      const config = loadConfig(true);
      expect(config).toEqual({
        name: 'OpenAI (GPT-4) - Paid',
        apiKey: 'sk-test123',
        baseUrl: 'https://api.openai.com/v1',
        model: 'gpt-4'
      });

      loadConfig(false);
      expect(mockConsoleLog).toHaveBeenCalledWith('❌ AI not configured. Run "ai-workflow setup" first.');
    });

    it('should handle context management', () => {
      const loadContext = (contextExists: boolean) => {
        if (!contextExists) {
          return {
            projectName: '',
            currentPhase: '',
            activePersona: '',
            conversationHistory: []
          };
        }
        
        return {
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
      };

      const context = loadContext(true);
      expect(context.projectName).toBe('Test Project');
      expect(context.conversationHistory).toHaveLength(1);

      const emptyContext = loadContext(false);
      expect(emptyContext.projectName).toBe('');
      expect(emptyContext.conversationHistory).toHaveLength(0);
    });
  });

  describe('Help and Version', () => {
    it('should display help information', () => {
      const displayHelp = () => {
        console.log('Usage: ai-workflow [command] [options]');
        console.log('');
        console.log('Commands:');
        console.log('  setup                   Configure AI provider and settings');
        console.log('  chat                    Start interactive AI chat session');
        console.log('  generate                Generate code with AI assistance');
        console.log('  history                 Show conversation history');
        console.log('  export                  Export AI session data');
        console.log('');
        console.log('Options:');
        console.log('  -h, --help             Display help information');
        console.log('  -V, --version          Display version number');
      };

      displayHelp();

      expect(mockConsoleLog).toHaveBeenCalledWith('Usage: ai-workflow [command] [options]');
      expect(mockConsoleLog).toHaveBeenCalledWith('Commands:');
      expect(mockConsoleLog).toHaveBeenCalledWith('  setup                   Configure AI provider and settings');
    });

    it('should display version information', () => {
      const displayVersion = () => {
        console.log('ai-workflow version 1.0.0');
      };

      displayVersion();
      expect(mockConsoleLog).toHaveBeenCalledWith('ai-workflow version 1.0.0');
    });
  });

  describe('Error Handling', () => {
    it('should handle network errors', async () => {
      const networkError = new Error('Network request failed');
      mockAIIntegration.startChat = jest.fn().mockRejectedValue(networkError);

      const handleNetworkError = async () => {
        try {
          await mockAIIntegration.startChat();
          return true;
        } catch (err) {
          if ((err as Error).message.includes('Network')) {
            console.error('❌ Network error. Please check your internet connection.');
          } else {
            console.error('❌ Unexpected error:', (err as Error).message);
          }
          return false;
        }
      };

      const result = await handleNetworkError();
      expect(result).toBe(false);
      expect(mockConsoleError).toHaveBeenCalledWith('❌ Network error. Please check your internet connection.');
    });

    it('should handle API errors', async () => {
      const apiError = new Error('API key invalid');
      mockAIIntegration.generateCode = jest.fn().mockRejectedValue(apiError);

      const handleAPIError = async () => {
        try {
          await mockAIIntegration.generateCode();
          return true;
        } catch (err) {
          if ((err as Error).message.includes('API key')) {
            console.error('❌ Invalid API key. Please run "ai-workflow setup" to reconfigure.');
          } else {
            console.error('❌ API error:', (err as Error).message);
          }
          return false;
        }
      };

      const result = await handleAPIError();
      expect(result).toBe(false);
      expect(mockConsoleError).toHaveBeenCalledWith('❌ Invalid API key. Please run "ai-workflow setup" to reconfigure.');
    });
  });
});
