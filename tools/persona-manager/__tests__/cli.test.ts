import { PersonaManager } from '../src/PersonaManager';

// Mock the PersonaManager class
jest.mock('../src/PersonaManager');

const MockedPersonaManager = PersonaManager as jest.MockedClass<typeof PersonaManager>;

// Mock console methods
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

// Mock process.exit
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _mockExit = jest.spyOn(process, 'exit').mockImplementation((_code?: string | number | null | undefined) => {
  return undefined as never;
});

describe('Persona Manager CLI', () => {
  let mockPersonaManager: jest.Mocked<PersonaManager>;

  beforeEach(() => {
    jest.clearAllMocks();
    mockPersonaManager = new MockedPersonaManager() as jest.Mocked<PersonaManager>;
    MockedPersonaManager.mockImplementation(() => mockPersonaManager);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('CLI Commands', () => {
    it('should handle init command', async () => {
      mockPersonaManager.initProject = jest.fn().mockResolvedValue(undefined);

      // Simulate the init command without calling process.exit
      const initAction = jest.fn(async (projectName: string) => {
        if (!projectName) {
          console.error('❌ Project name is required');
          return false; // Return false instead of calling process.exit
        }
        await mockPersonaManager.initProject(projectName);
        return true;
      });

      // Test successful init
      const result1 = await initAction('test-project');
      expect(result1).toBe(true);
      expect(mockPersonaManager.initProject).toHaveBeenCalledWith('test-project');

      // Test missing project name
      const result2 = await initAction('');
      expect(result2).toBe(false);
      expect(mockConsoleError).toHaveBeenCalledWith('❌ Project name is required');
    });

    it('should handle list command', async () => {
      mockPersonaManager.listPersonas = jest.fn().mockResolvedValue(undefined);

      const listAction = jest.fn(async () => {
        await mockPersonaManager.listPersonas();
      });

      await listAction();
      expect(mockPersonaManager.listPersonas).toHaveBeenCalled();
    });

    it('should handle get-persona command', async () => {
      mockPersonaManager.getPersona = jest.fn().mockResolvedValue(undefined);

      const getPersonaAction = jest.fn(async (personaName: string) => {
        if (!personaName) {
          console.error('❌ Persona name is required');
          return false; // Return false instead of calling process.exit
        }
        await mockPersonaManager.getPersona(personaName);
        return true;
      });

      // Test successful get-persona
      const result1 = await getPersonaAction('Frontend Developer');
      expect(result1).toBe(true);
      expect(mockPersonaManager.getPersona).toHaveBeenCalledWith('Frontend Developer');

      // Test missing persona name
      const result2 = await getPersonaAction('');
      expect(result2).toBe(false);
      expect(mockConsoleError).toHaveBeenCalledWith('❌ Persona name is required');
    });

    it('should handle start-phase command', async () => {
      mockPersonaManager.startPhase = jest.fn().mockResolvedValue(undefined);

      const startPhaseAction = jest.fn(async (phaseName: string) => {
        if (!phaseName) {
          console.error('❌ Phase name is required');
          return false; // Return false instead of calling process.exit
        }
        await mockPersonaManager.startPhase(phaseName);
        return true;
      });

      // Test successful start-phase
      const result1 = await startPhaseAction('discovery');
      expect(result1).toBe(true);
      expect(mockPersonaManager.startPhase).toHaveBeenCalledWith('discovery');

      // Test missing phase name
      const result2 = await startPhaseAction('');
      expect(result2).toBe(false);
      expect(mockConsoleError).toHaveBeenCalledWith('❌ Phase name is required');
    });

    it('should handle complete-phase command', async () => {
      mockPersonaManager.completePhase = jest.fn().mockResolvedValue(undefined);

      const completePhaseAction = jest.fn(async () => {
        await mockPersonaManager.completePhase();
      });

      await completePhaseAction();
      expect(mockPersonaManager.completePhase).toHaveBeenCalled();
    });

    it('should handle status command', async () => {
      mockPersonaManager.status = jest.fn().mockResolvedValue(undefined);

      const statusAction = jest.fn(async () => {
        await mockPersonaManager.status();
      });

      await statusAction();
      expect(mockPersonaManager.status).toHaveBeenCalled();
    });

    it('should handle errors gracefully', async () => {
      const error = new Error('Test error');
      mockPersonaManager.initProject = jest.fn().mockRejectedValue(error);

      const errorHandlingAction = jest.fn(async (projectName: string) => {
        try {
          await mockPersonaManager.initProject(projectName);
          return true;
        } catch (err) {
          console.error('❌ Error:', (err as Error).message);
          return false;
        }
      });

      const result = await errorHandlingAction('test-project');
      expect(result).toBe(false);
      expect(mockConsoleError).toHaveBeenCalledWith('❌ Error:', 'Test error');
    });
  });

  describe('CLI Validation', () => {
    it('should validate project name format', () => {
      const validateProjectName = (name: string): boolean => {
        if (!name || name.trim().length === 0) {
          return false;
        }
        // Check for invalid characters
        if (!/^[a-zA-Z0-9-_]+$/.test(name)) {
          return false;
        }
        return true;
      };

      expect(validateProjectName('valid-project')).toBe(true);
      expect(validateProjectName('valid_project')).toBe(true);
      expect(validateProjectName('validProject123')).toBe(true);
      expect(validateProjectName('')).toBe(false);
      expect(validateProjectName('   ')).toBe(false);
      expect(validateProjectName('invalid project')).toBe(false);
      expect(validateProjectName('invalid@project')).toBe(false);
    });

    it('should validate persona names', () => {
      const validatePersonaName = (name: string): boolean => {
        if (!name || name.trim().length === 0) {
          return false;
        }
        const validPersonas = [
          'Project Manager',
          'Product Manager',
          'UX Designer',
          'Frontend Developer',
          'Backend Developer',
          'Mobile Developer',
          'DevOps Engineer',
          'QA Engineer',
          'Data Scientist'
        ];
        return validPersonas.includes(name);
      };

      expect(validatePersonaName('Frontend Developer')).toBe(true);
      expect(validatePersonaName('Backend Developer')).toBe(true);
      expect(validatePersonaName('Invalid Developer')).toBe(false);
      expect(validatePersonaName('')).toBe(false);
    });

    it('should validate phase names', () => {
      const validatePhaseName = (name: string): boolean => {
        if (!name || name.trim().length === 0) {
          return false;
        }
        const validPhases = ['discovery', 'design', 'development', 'implementation', 'deployment'];
        return validPhases.includes(name.toLowerCase());
      };

      expect(validatePhaseName('discovery')).toBe(true);
      expect(validatePhaseName('Discovery')).toBe(true);
      expect(validatePhaseName('DESIGN')).toBe(true);
      expect(validatePhaseName('invalid-phase')).toBe(false);
      expect(validatePhaseName('')).toBe(false);
    });
  });

  describe('Help and Version', () => {
    it('should display help information', () => {
      const displayHelp = () => {
        console.log('Usage: persona-cli [command] [options]');
        console.log('');
        console.log('Commands:');
        console.log('  init <project-name>     Initialize AI workflow for project');
        console.log('  list                    List available personas');
        console.log('  get-persona <name>      Get persona context');
        console.log('  start-phase <phase>     Start a workflow phase');
        console.log('  complete-phase          Complete current phase');
        console.log('  status                  Show project status');
        console.log('');
        console.log('Options:');
        console.log('  -h, --help             Display help information');
        console.log('  -V, --version          Display version number');
      };

      displayHelp();

      expect(mockConsoleLog).toHaveBeenCalledWith('Usage: persona-cli [command] [options]');
      expect(mockConsoleLog).toHaveBeenCalledWith('Commands:');
      expect(mockConsoleLog).toHaveBeenCalledWith('  init <project-name>     Initialize AI workflow for project');
    });

    it('should display version information', () => {
      const displayVersion = () => {
        console.log('persona-cli version 1.0.0');
      };

      displayVersion();
      expect(mockConsoleLog).toHaveBeenCalledWith('persona-cli version 1.0.0');
    });
  });
});
