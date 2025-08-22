import { PersonaManager } from '../src/PersonaManager';
import * as fs from 'fs';
import * as path from 'path';
import * as inquirer from 'inquirer';

// Mock modules
jest.mock('fs');
jest.mock('inquirer');

const mockFs = fs as jest.Mocked<typeof fs>;
const mockInquirer = inquirer as jest.Mocked<typeof inquirer>;

describe('PersonaManager', () => {
  let personaManager: PersonaManager;
  const mockCwd = '/test/project';

  beforeEach(() => {
    // Clear all mocks first
    jest.clearAllMocks();
    
    // Mock process.cwd before creating the instance
    jest.spyOn(process, 'cwd').mockReturnValue(mockCwd);
    
    personaManager = new PersonaManager();
    mockFs.existsSync.mockReturnValue(false);
    mockFs.readFileSync.mockReturnValue('{}');
    mockFs.writeFileSync.mockImplementation(() => {});
    mockFs.mkdirSync.mockImplementation(() => '');
    mockFs.readdirSync.mockReturnValue([]);
    mockFs.copyFileSync.mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('initProject', () => {
    it('should initialize a new project with basic configuration', async () => {
      const projectName = 'test-project';
      const mockAnswers = {
        projectType: 'Basic Web App (React + Node.js)',
        teamRoles: ['Frontend Developer', 'Backend Developer'],
        workflow: 'Agile Development'
      };

      mockInquirer.prompt.mockResolvedValue(mockAnswers);
      mockFs.existsSync.mockReturnValue(true); // Mock template exists

      await personaManager.initProject(projectName);

      // Verify directories are created (the implementation creates personas directory first)
      expect(mockFs.mkdirSync).toHaveBeenCalledWith(
        path.join(mockCwd, projectName, '.ai-workflow', 'personas'),
        { recursive: true }
      );

      // Verify project config is written
      expect(mockFs.writeFileSync).toHaveBeenCalledWith(
        path.join(mockCwd, projectName, '.ai-workflow', 'project.json'),
        expect.stringContaining(projectName)
      );

      // Verify workflow tracking is initialized
      expect(mockFs.writeFileSync).toHaveBeenCalledWith(
        path.join(mockCwd, projectName, '.ai-workflow', 'workflow-tracking.json'),
        expect.stringContaining('phases')
      );
    });

    it('should handle custom project type', async () => {
      const projectName = 'custom-project';
      const mockAnswers = {
        projectType: 'Custom Project',
        teamRoles: ['Project Manager'],
        workflow: 'Design Sprint'
      };

      mockInquirer.prompt.mockResolvedValue(mockAnswers);

      await personaManager.initProject(projectName);

      // Should not attempt to copy template for custom projects
      expect(mockFs.copyFileSync).not.toHaveBeenCalled();
    });

    it('should copy persona templates for selected roles', async () => {
      const projectName = 'test-project';
      const mockAnswers = {
        projectType: 'Basic Web App (React + Node.js)',
        teamRoles: ['Frontend Developer', 'Backend Developer'],
        workflow: 'Agile Development'
      };

      mockInquirer.prompt.mockResolvedValue(mockAnswers);
      mockFs.existsSync.mockReturnValue(true);

      await personaManager.initProject(projectName);

      // Verify personas directory creation
      expect(mockFs.mkdirSync).toHaveBeenCalledWith(
        path.join(mockCwd, projectName, '.ai-workflow', 'personas'),
        { recursive: true }
      );

      // Verify persona files are copied
      expect(mockFs.copyFileSync).toHaveBeenCalledWith(
        expect.stringContaining('FrontendDeveloper.md'),
        expect.stringContaining('FrontendDeveloper.md')
      );
      expect(mockFs.copyFileSync).toHaveBeenCalledWith(
        expect.stringContaining('BackendDeveloper.md'),
        expect.stringContaining('BackendDeveloper.md')
      );
    });
  });

  describe('listPersonas', () => {
    it('should list available personas', async () => {
      const mockPersonas = ['FrontendDeveloper.md', 'BackendDeveloper.md'];
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockReturnValue(mockPersonas as any);

      await personaManager.listPersonas();

      expect(mockFs.readdirSync).toHaveBeenCalledWith(
        path.join(mockCwd, '.ai-workflow', 'personas')
      );
      expect(console.log).toHaveBeenCalledWith('👥 Available Personas:');
    });

    it('should handle no workflow found', async () => {
      mockFs.existsSync.mockReturnValue(false);

      await personaManager.listPersonas();

      expect(console.log).toHaveBeenCalledWith(
        '❌ No AI workflow found. Run "persona-cli init" first.'
      );
    });

    it('should handle no personas configured', async () => {
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockReturnValue([]);

      await personaManager.listPersonas();

      expect(console.log).toHaveBeenCalledWith(
        '📭 No personas configured for this project.'
      );
    });
  });

  describe('getPersona', () => {
    it('should retrieve and display persona content', async () => {
      const personaName = 'Frontend Developer';
      const mockContent = '# Frontend Developer\nExpert in React and TypeScript';
      
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue(mockContent);

      await personaManager.getPersona(personaName);

      expect(mockFs.readFileSync).toHaveBeenCalledWith(
        path.join(mockCwd, '.ai-workflow', 'personas', 'FrontendDeveloper.md'),
        'utf-8'
      );
      expect(console.log).toHaveBeenCalledWith(expect.stringContaining(mockContent));
    });

    it('should handle persona not found', async () => {
      const personaName = 'Nonexistent Developer';
      mockFs.existsSync.mockReturnValue(false);

      await personaManager.getPersona(personaName);

      expect(console.log).toHaveBeenCalledWith(
        `❌ Persona "${personaName}" not found.`
      );
    });
  });

  describe('startPhase', () => {
    it('should start a workflow phase', async () => {
      const phaseName = 'discovery';
      const mockTracking = {
        phases: [
          { name: 'Discovery & Planning', status: 'pending', startedAt: null },
          { name: 'Design & Prototyping', status: 'pending', startedAt: null }
        ],
        currentPhase: 0
      };

      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue(JSON.stringify(mockTracking));

      await personaManager.startPhase(phaseName);

      expect(mockFs.writeFileSync).toHaveBeenCalledWith(
        expect.stringContaining('workflow-tracking.json'),
        expect.stringMatching(/"status":\s*"in-progress"/)
      );
    });

    it('should handle phase not found', async () => {
      const phaseName = 'nonexistent';
      const mockTracking = {
        phases: [
          { name: 'Discovery & Planning', status: 'pending' }
        ]
      };

      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue(JSON.stringify(mockTracking));

      await personaManager.startPhase(phaseName);

      expect(console.log).toHaveBeenCalledWith(
        `❌ Phase "${phaseName}" not found.`
      );
    });
  });

  describe('completePhase', () => {
    it('should complete current phase and move to next', async () => {
      const mockTracking = {
        phases: [
          { name: 'Discovery & Planning', status: 'in-progress', completedAt: null },
          { name: 'Design & Prototyping', status: 'pending', startedAt: null }
        ],
        currentPhase: 0
      };

      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue(JSON.stringify(mockTracking));

      await personaManager.completePhase();

      expect(mockFs.writeFileSync).toHaveBeenCalledWith(
        expect.stringContaining('workflow-tracking.json'),
        expect.stringMatching(/"status":\s*"completed"/)
      );
    });

    it('should handle no phase in progress', async () => {
      const mockTracking = {
        phases: [
          { name: 'Discovery & Planning', status: 'pending' }
        ],
        currentPhase: 0
      };

      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue(JSON.stringify(mockTracking));

      await personaManager.completePhase();

      expect(console.log).toHaveBeenCalledWith(
        '❌ No phase currently in progress.'
      );
    });
  });

  describe('status', () => {
    it('should display project status', async () => {
      const mockTracking = {
        phases: [
          { name: 'Discovery & Planning', status: 'completed' },
          { name: 'Design & Prototyping', status: 'in-progress' }
        ],
        currentPhase: 1
      };
      const mockProject = {
        name: 'Test Project',
        type: 'Basic Web App',
        personas: ['Frontend Developer'],
        createdAt: new Date().toISOString()
      };

      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync
        .mockReturnValueOnce(JSON.stringify(mockTracking))
        .mockReturnValueOnce(JSON.stringify(mockProject));

      await personaManager.status();

      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining('📊 Project: Test Project')
      );
      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining('📈 Overall Progress: 50%')
      );
    });

    it('should handle no workflow found', async () => {
      mockFs.existsSync.mockReturnValue(false);

      await personaManager.status();

      expect(console.log).toHaveBeenCalledWith(
        '❌ No AI workflow found in this directory.'
      );
    });
  });

  describe('utility methods', () => {
    it('should get correct template name for project type', () => {
      const manager = new PersonaManager();
      
      expect(manager['getTemplateName']('Basic Web App (React + Node.js)')).toBe('basic-webapp');
      expect(manager['getTemplateName']('Mobile App (React Native)')).toBe('mobile-app');
      expect(manager['getTemplateName']('SaaS Dashboard')).toBe('saas-dashboard');
      expect(manager['getTemplateName']('Unknown Type')).toBe('basic-webapp');
    });

    it('should get correct personas for phase', () => {
      const manager = new PersonaManager();
      
      expect(manager['getPhasePersonas']('discovery')).toEqual(['Project Manager', 'Product Manager']);
      expect(manager['getPhasePersonas']('design')).toEqual(['UX Designer', 'Product Manager']);
      expect(manager['getPhasePersonas']('development')).toEqual(['Frontend Developer', 'Backend Developer']);
      expect(manager['getPhasePersonas']('unknown')).toEqual([]);
    });
  });
});
