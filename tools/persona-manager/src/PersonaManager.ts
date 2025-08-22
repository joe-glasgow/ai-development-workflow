import inquirer from 'inquirer';
import * as fs from 'fs';
import * as path from 'path';

export interface PersonaConfig {
  name: string;
  role: string;
  responsibilities: string[];
  communicationStyle: string;
  keyPrompts: string[];
  expertiseAreas: string[];
}

export interface ProjectConfig {
  name: string;
  type: string;
  personas: string[];
  workflow: string;
  createdAt: string;
}

export class PersonaManager {
  private configPath: string;
  private templatesPath: string;

  constructor() {
    this.configPath = path.join(process.cwd(), '.ai-workflow');
    this.templatesPath = path.join(__dirname, '../../../templates');
  }

  async initProject(projectName: string) {
    console.log(`🚀 Initializing AI workflow for project: ${projectName}`);

    // Create project directory if it doesn't exist
    const projectPath = path.join(process.cwd(), projectName);
    if (!fs.existsSync(projectPath)) {
      fs.mkdirSync(projectPath, { recursive: true });
    }

    // Create .ai-workflow directory
    const workflowPath = path.join(projectPath, '.ai-workflow');
    if (!fs.existsSync(workflowPath)) {
      fs.mkdirSync(workflowPath, { recursive: true });
    }

    // Interactive project setup
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'projectType',
        message: 'What type of project are you building?',
        choices: [
          'Basic Web App (React + Node.js)',
          'Mobile App (React Native)',
          'SaaS Dashboard',
          'Custom Project'
        ]
      },
      {
        type: 'checkbox',
        name: 'teamRoles',
        message: 'Select the roles needed for your project:',
        choices: [
          'Project Manager',
          'Product Manager',
          'UX Designer',
          'Frontend Developer',
          'Backend Developer',
          'Mobile Developer',
          'DevOps Engineer',
          'QA Engineer',
          'Data Scientist'
        ]
      },
      {
        type: 'list',
        name: 'workflow',
        message: 'Choose your development workflow:',
        choices: [
          'Agile Development',
          'Design Sprint',
          'Continuous Deployment'
        ]
      }
    ]);

    // Create project config
    const projectConfig: ProjectConfig = {
      name: projectName,
      type: answers.projectType,
      personas: answers.teamRoles,
      workflow: answers.workflow,
      createdAt: new Date().toISOString()
    };

    // Save project config
    fs.writeFileSync(
      path.join(workflowPath, 'project.json'),
      JSON.stringify(projectConfig, null, 2)
    );

    // Copy relevant personas
    const personasPath = path.join(workflowPath, 'personas');
    fs.mkdirSync(personasPath, { recursive: true });

    for (const role of answers.teamRoles) {
      const personaFile = role.replace(/\s+/g, '') + '.md';
      const sourcePath = path.join(this.templatesPath, 'persona-templates', personaFile);
      const destPath = path.join(personasPath, personaFile);

      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`✅ Added ${role} persona`);
      }
    }

    // Copy project template if not custom
    if (answers.projectType !== 'Custom Project') {
      const templateName = this.getTemplateName(answers.projectType);
      const templatePath = path.join(this.templatesPath, 'project-templates', templateName);
      
      if (fs.existsSync(templatePath)) {
        this.copyDirectory(templatePath, projectPath);
        console.log(`✅ Project template copied`);
      }
    }

    // Create workflow tracking file
    const workflowTracking = {
      phases: [
        { name: 'Discovery & Planning', status: 'pending', startedAt: null, completedAt: null },
        { name: 'Design & Prototyping', status: 'pending', startedAt: null, completedAt: null },
        { name: 'Development Setup', status: 'pending', startedAt: null, completedAt: null },
        { name: 'Implementation', status: 'pending', startedAt: null, completedAt: null },
        { name: 'Deployment & Monitoring', status: 'pending', startedAt: null, completedAt: null }
      ],
      currentPhase: 0,
      createdAt: new Date().toISOString()
    };

    fs.writeFileSync(
      path.join(workflowPath, 'workflow-tracking.json'),
      JSON.stringify(workflowTracking, null, 2)
    );

    console.log(`\n🎉 Project ${projectName} initialized successfully!`);
    console.log(`📁 Project directory: ${projectPath}`);
    console.log(`⚙️  Configuration: ${workflowPath}`);
    console.log(`\nNext steps:`);
    console.log(`1. cd ${projectName}`);
    console.log(`2. persona-cli start-phase discovery`);
    console.log(`3. Follow the workflow guide`);
  }

  async listPersonas() {
    const workflowPath = path.join(process.cwd(), '.ai-workflow');
    const personasPath = path.join(workflowPath, 'personas');

    if (!fs.existsSync(personasPath)) {
      console.log('❌ No AI workflow found. Run "persona-cli init" first.');
      return;
    }

    const personas = fs.readdirSync(personasPath).filter(file => file.endsWith('.md'));
    
    if (personas.length === 0) {
      console.log('📭 No personas configured for this project.');
      return;
    }

    console.log('👥 Available Personas:');
    personas.forEach((persona, index) => {
      const name = persona.replace('.md', '').replace(/([A-Z])/g, ' $1').trim();
      console.log(`${index + 1}. ${name}`);
    });
  }

  async getPersona(personaName: string) {
    const workflowPath = path.join(process.cwd(), '.ai-workflow');
    const personaFile = personaName.replace(/\s+/g, '') + '.md';
    const personaPath = path.join(workflowPath, 'personas', personaFile);

    if (!fs.existsSync(personaPath)) {
      console.log(`❌ Persona "${personaName}" not found.`);
      console.log('Available personas:');
      await this.listPersonas();
      return;
    }

    const content = fs.readFileSync(personaPath, 'utf-8');
    console.log('\n📋 Copy this persona context to your AI tool:\n');
    console.log('='.repeat(50));
    console.log(content);
    console.log('='.repeat(50));
    console.log('\n💡 Tip: Copy the above text and paste it as context in ChatGPT, Claude, or your preferred AI tool.');
  }

  async startPhase(phaseName: string) {
    const workflowPath = path.join(process.cwd(), '.ai-workflow');
    const trackingPath = path.join(workflowPath, 'workflow-tracking.json');

    if (!fs.existsSync(trackingPath)) {
      console.log('❌ No workflow tracking found. Run "persona-cli init" first.');
      return;
    }

    const tracking = JSON.parse(fs.readFileSync(trackingPath, 'utf-8'));
    const phaseIndex = tracking.phases.findIndex((p: any) => 
      p.name.toLowerCase().includes(phaseName.toLowerCase())
    );

    if (phaseIndex === -1) {
      console.log(`❌ Phase "${phaseName}" not found.`);
      console.log('Available phases:', tracking.phases.map((p: any) => p.name).join(', '));
      return;
    }

    // Update phase status
    tracking.phases[phaseIndex].status = 'in-progress';
    tracking.phases[phaseIndex].startedAt = new Date().toISOString();
    tracking.currentPhase = phaseIndex;

    fs.writeFileSync(trackingPath, JSON.stringify(tracking, null, 2));

    console.log(`🚀 Started phase: ${tracking.phases[phaseIndex].name}`);
    console.log(`📋 Recommended personas for this phase:`);
    
    // Show recommended personas based on phase
    const phasePersonas = this.getPhasePersonas(phaseName);
    phasePersonas.forEach(persona => {
      console.log(`   • ${persona}`);
    });

    console.log(`\n💡 Use "persona-cli get-persona [name]" to get persona context`);
  }

  async completePhase() {
    const workflowPath = path.join(process.cwd(), '.ai-workflow');
    const trackingPath = path.join(workflowPath, 'workflow-tracking.json');

    if (!fs.existsSync(trackingPath)) {
      console.log('❌ No workflow tracking found.');
      return;
    }

    const tracking = JSON.parse(fs.readFileSync(trackingPath, 'utf-8'));
    const currentPhase = tracking.phases[tracking.currentPhase];

    if (currentPhase.status !== 'in-progress') {
      console.log('❌ No phase currently in progress.');
      return;
    }

    currentPhase.status = 'completed';
    currentPhase.completedAt = new Date().toISOString();

    fs.writeFileSync(trackingPath, JSON.stringify(tracking, null, 2));

    console.log(`✅ Completed phase: ${currentPhase.name}`);
    
    // Check if there's a next phase
    if (tracking.currentPhase + 1 < tracking.phases.length) {
      const nextPhase = tracking.phases[tracking.currentPhase + 1];
      console.log(`📋 Next phase: ${nextPhase.name}`);
      console.log(`💡 Run "persona-cli start-phase ${nextPhase.name.split(' ')[0].toLowerCase()}" to continue`);
    } else {
      console.log('🎉 All phases completed! Project workflow finished.');
    }
  }

  async status() {
    const workflowPath = path.join(process.cwd(), '.ai-workflow');
    const trackingPath = path.join(workflowPath, 'workflow-tracking.json');

    if (!fs.existsSync(trackingPath)) {
      console.log('❌ No AI workflow found in this directory.');
      console.log('💡 Run "persona-cli init [project-name]" to get started.');
      return;
    }

    const tracking = JSON.parse(fs.readFileSync(trackingPath, 'utf-8'));
    const projectConfig = JSON.parse(fs.readFileSync(path.join(workflowPath, 'project.json'), 'utf-8'));

    console.log(`📊 Project: ${projectConfig.name}`);
    console.log(`🏗️  Type: ${projectConfig.type}`);
    console.log(`👥 Team: ${projectConfig.personas.join(', ')}`);
    console.log(`📅 Created: ${new Date(projectConfig.createdAt).toLocaleDateString()}`);
    console.log('\n📋 Workflow Progress:');

    tracking.phases.forEach((phase: any, index: number) => {
      const status = phase.status === 'completed' ? '✅' : 
                    phase.status === 'in-progress' ? '🔄' : '⏳';
      const current = index === tracking.currentPhase ? ' (current)' : '';
      console.log(`   ${status} ${phase.name}${current}`);
    });

    const completedPhases = tracking.phases.filter((p: any) => p.status === 'completed').length;
    const progress = Math.round((completedPhases / tracking.phases.length) * 100);
    console.log(`\n📈 Overall Progress: ${progress}% (${completedPhases}/${tracking.phases.length} phases)`);
  }

  public getTemplateName(projectType: string): string {
    const mapping: { [key: string]: string } = {
      'Basic Web App (React + Node.js)': 'basic-webapp',
      'Mobile App (React Native)': 'mobile-app',
      'SaaS Dashboard': 'saas-dashboard'
    };
    return mapping[projectType] || 'basic-webapp';
  }

  public getPhasePersonas(phaseName: string): string[] {
    const phasePersonas: { [key: string]: string[] } = {
      'discovery': ['Project Manager', 'Product Manager'],
      'design': ['UX Designer', 'Product Manager'],
      'development': ['Frontend Developer', 'Backend Developer'],
      'implementation': ['Frontend Developer', 'Backend Developer', 'QA Engineer'],
      'deployment': ['DevOps Engineer', 'Backend Developer']
    };
    return phasePersonas[phaseName.toLowerCase()] || [];
  }

  private copyDirectory(src: string, dest: string) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        this.copyDirectory(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}
