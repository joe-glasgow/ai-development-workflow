#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';

const program = new Command();

interface WorkflowPhase {
  name: string;
  status: 'pending' | 'in-progress' | 'completed' | 'blocked';
  startedAt: string | null;
  completedAt: string | null;
  tasks: WorkflowTask[];
  deliverables: string[];
  qualityGates: QualityGate[];
}

interface WorkflowTask {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  assignedPersona: string;
  estimatedHours: number;
  actualHours: number;
  dependencies: string[];
}

interface QualityGate {
  name: string;
  criteria: string;
  status: 'pending' | 'passed' | 'failed';
  checkedAt: string | null;
  notes: string;
}

class WorkflowTracker {
  private configPath: string;
  private trackingPath: string;

  constructor() {
    this.configPath = path.join(process.cwd(), '.ai-workflow');
    this.trackingPath = path.join(this.configPath, 'workflow-tracking.json');
  }

  async initTracking() {
    console.log(chalk.blue('📊 Initializing workflow tracking...'));

    if (!fs.existsSync(this.configPath)) {
      console.log(chalk.red('❌ No AI workflow found. Run "persona-cli init" first.'));
      return;
    }

    const phases: WorkflowPhase[] = [
      {
        name: 'Discovery & Planning',
        status: 'pending',
        startedAt: null,
        completedAt: null,
        tasks: [
          {
            id: 'req-analysis',
            name: 'Requirements Analysis',
            description: 'Gather and analyze project requirements',
            status: 'pending',
            assignedPersona: 'Product Manager',
            estimatedHours: 16,
            actualHours: 0,
            dependencies: []
          },
          {
            id: 'tech-planning',
            name: 'Technical Planning',
            description: 'Design system architecture and choose technology stack',
            status: 'pending',
            assignedPersona: 'Backend Developer',
            estimatedHours: 12,
            actualHours: 0,
            dependencies: ['req-analysis']
          },
          {
            id: 'project-planning',
            name: 'Project Planning',
            description: 'Create timeline, milestones, and resource allocation',
            status: 'pending',
            assignedPersona: 'Project Manager',
            estimatedHours: 8,
            actualHours: 0,
            dependencies: ['req-analysis', 'tech-planning']
          }
        ],
        deliverables: [
          'Project Requirements Document',
          'Technical Architecture Document',
          'Project Plan with Timeline',
          'Success Metrics Framework'
        ],
        qualityGates: [
          {
            name: 'Requirements Completeness',
            criteria: 'All user stories defined with acceptance criteria',
            status: 'pending',
            checkedAt: null,
            notes: ''
          },
          {
            name: 'Technical Feasibility',
            criteria: 'Architecture reviewed and approved by technical team',
            status: 'pending',
            checkedAt: null,
            notes: ''
          }
        ]
      },
      {
        name: 'Design & Prototyping',
        status: 'pending',
        startedAt: null,
        completedAt: null,
        tasks: [
          {
            id: 'ui-design',
            name: 'UI Design',
            description: 'Create user interface designs and design system',
            status: 'pending',
            assignedPersona: 'UX Designer',
            estimatedHours: 24,
            actualHours: 0,
            dependencies: []
          },
          {
            id: 'prototyping',
            name: 'Prototyping',
            description: 'Build interactive prototypes for validation',
            status: 'pending',
            assignedPersona: 'UX Designer',
            estimatedHours: 16,
            actualHours: 0,
            dependencies: ['ui-design']
          },
          {
            id: 'design-validation',
            name: 'Design Validation',
            description: 'Test designs with users and stakeholders',
            status: 'pending',
            assignedPersona: 'Product Manager',
            estimatedHours: 8,
            actualHours: 0,
            dependencies: ['prototyping']
          }
        ],
        deliverables: [
          'Design System Documentation',
          'High-Fidelity Mockups',
          'Interactive Prototypes',
          'Design Validation Report'
        ],
        qualityGates: [
          {
            name: 'Design Consistency',
            criteria: 'All designs follow established design system',
            status: 'pending',
            checkedAt: null,
            notes: ''
          },
          {
            name: 'User Validation',
            criteria: 'Designs tested and validated with target users',
            status: 'pending',
            checkedAt: null,
            notes: ''
          }
        ]
      },
      {
        name: 'Development Setup',
        status: 'pending',
        startedAt: null,
        completedAt: null,
        tasks: [
          {
            id: 'env-setup',
            name: 'Environment Setup',
            description: 'Configure development environment and tooling',
            status: 'pending',
            assignedPersona: 'DevOps Engineer',
            estimatedHours: 12,
            actualHours: 0,
            dependencies: []
          },
          {
            id: 'cicd-setup',
            name: 'CI/CD Setup',
            description: 'Configure automated testing and deployment',
            status: 'pending',
            assignedPersona: 'DevOps Engineer',
            estimatedHours: 16,
            actualHours: 0,
            dependencies: ['env-setup']
          }
        ],
        deliverables: [
          'Development Environment',
          'CI/CD Pipeline',
          'Code Quality Tools',
          'Development Standards'
        ],
        qualityGates: [
          {
            name: 'Environment Validation',
            criteria: 'All team members can run project locally',
            status: 'pending',
            checkedAt: null,
            notes: ''
          }
        ]
      },
      {
        name: 'Implementation',
        status: 'pending',
        startedAt: null,
        completedAt: null,
        tasks: [
          {
            id: 'frontend-dev',
            name: 'Frontend Development',
            description: 'Implement user interface components and features',
            status: 'pending',
            assignedPersona: 'Frontend Developer',
            estimatedHours: 80,
            actualHours: 0,
            dependencies: []
          },
          {
            id: 'backend-dev',
            name: 'Backend Development',
            description: 'Implement APIs and business logic',
            status: 'pending',
            assignedPersona: 'Backend Developer',
            estimatedHours: 80,
            actualHours: 0,
            dependencies: []
          },
          {
            id: 'testing',
            name: 'Testing Implementation',
            description: 'Create comprehensive test suite',
            status: 'pending',
            assignedPersona: 'QA Engineer',
            estimatedHours: 40,
            actualHours: 0,
            dependencies: ['frontend-dev', 'backend-dev']
          }
        ],
        deliverables: [
          'Frontend Implementation',
          'Backend Implementation',
          'Testing Suite',
          'Documentation'
        ],
        qualityGates: [
          {
            name: 'Code Quality',
            criteria: 'Code meets quality standards (linting, formatting, type safety)',
            status: 'pending',
            checkedAt: null,
            notes: ''
          },
          {
            name: 'Test Coverage',
            criteria: '90%+ test coverage for critical paths',
            status: 'pending',
            checkedAt: null,
            notes: ''
          }
        ]
      },
      {
        name: 'Deployment & Monitoring',
        status: 'pending',
        startedAt: null,
        completedAt: null,
        tasks: [
          {
            id: 'deployment',
            name: 'Production Deployment',
            description: 'Deploy application to production environment',
            status: 'pending',
            assignedPersona: 'DevOps Engineer',
            estimatedHours: 16,
            actualHours: 0,
            dependencies: []
          },
          {
            id: 'monitoring',
            name: 'Monitoring Setup',
            description: 'Configure monitoring and alerting',
            status: 'pending',
            assignedPersona: 'DevOps Engineer',
            estimatedHours: 12,
            actualHours: 0,
            dependencies: ['deployment']
          }
        ],
        deliverables: [
          'Production Infrastructure',
          'Monitoring Dashboard',
          'Performance Validation',
          'Security Implementation'
        ],
        qualityGates: [
          {
            name: 'Production Readiness',
            criteria: 'Application meets all production requirements',
            status: 'pending',
            checkedAt: null,
            notes: ''
          }
        ]
      }
    ];

    const tracking = {
      phases,
      currentPhase: 0,
      createdAt: new Date().toISOString(),
      metrics: {
        developmentSpeed: 0,
        codeQuality: 0,
        testCoverage: 0,
        deploymentFrequency: 0,
        bugRate: 0
      }
    };

    fs.writeFileSync(this.trackingPath, JSON.stringify(tracking, null, 2));
    console.log(chalk.green('✅ Workflow tracking initialized'));
  }

  async showStatus() {
    if (!fs.existsSync(this.trackingPath)) {
      console.log(chalk.red('❌ No workflow tracking found. Run "workflow-tracker init" first.'));
      return;
    }

    const tracking = JSON.parse(fs.readFileSync(this.trackingPath, 'utf-8'));
    
    console.log(chalk.blue('📊 Workflow Status Dashboard'));
    console.log(chalk.gray('='.repeat(50)));

    // Overall progress
    const completedPhases = tracking.phases.filter((p: WorkflowPhase) => p.status === 'completed').length;
    const progress = Math.round((completedPhases / tracking.phases.length) * 100);
    
    console.log(chalk.cyan(`📈 Overall Progress: ${progress}% (${completedPhases}/${tracking.phases.length} phases)`));
    console.log('');

    // Phase status
    tracking.phases.forEach((phase: WorkflowPhase, index: number) => {
      const status = phase.status === 'completed' ? '✅' : 
                    phase.status === 'in-progress' ? '🔄' : 
                    phase.status === 'blocked' ? '🚫' : '⏳';
      const current = index === tracking.currentPhase ? chalk.yellow(' (current)') : '';
      
      console.log(`${status} ${chalk.white(phase.name)}${current}`);
      
      if (phase.status === 'in-progress' || phase.status === 'completed') {
        const completedTasks = phase.tasks.filter(t => t.status === 'completed').length;
        const taskProgress = Math.round((completedTasks / phase.tasks.length) * 100);
        console.log(chalk.gray(`   Tasks: ${taskProgress}% (${completedTasks}/${phase.tasks.length})`));
        
        const passedGates = phase.qualityGates.filter(g => g.status === 'passed').length;
        const gateProgress = Math.round((passedGates / phase.qualityGates.length) * 100);
        console.log(chalk.gray(`   Quality Gates: ${gateProgress}% (${passedGates}/${phase.qualityGates.length})`));
      }
    });

    // Current metrics
    console.log('\n📊 Current Metrics:');
    console.log(chalk.green(`⚡ Development Speed: ${tracking.metrics.developmentSpeed}%`));
    console.log(chalk.green(`🎯 Code Quality: ${tracking.metrics.codeQuality}%`));
    console.log(chalk.green(`🧪 Test Coverage: ${tracking.metrics.testCoverage}%`));
  }

  async updateTask() {
    if (!fs.existsSync(this.trackingPath)) {
      console.log(chalk.red('❌ No workflow tracking found.'));
      return;
    }

    const tracking = JSON.parse(fs.readFileSync(this.trackingPath, 'utf-8'));
    const currentPhase = tracking.phases[tracking.currentPhase];

    if (!currentPhase) {
      console.log(chalk.red('❌ No active phase found.'));
      return;
    }

    const { taskId } = await inquirer.prompt([
      {
        type: 'list',
        name: 'taskId',
        message: 'Select task to update:',
        choices: currentPhase.tasks.map((task: WorkflowTask) => ({
          name: `${task.name} (${task.status})`,
          value: task.id
        }))
      }
    ]);

    const task = currentPhase.tasks.find((t: WorkflowTask) => t.id === taskId);
    if (!task) return;

    const { status, actualHours } = await inquirer.prompt([
      {
        type: 'list',
        name: 'status',
        message: 'Update task status:',
        choices: ['pending', 'in-progress', 'completed', 'blocked'],
        default: task.status
      },
      {
        type: 'number',
        name: 'actualHours',
        message: 'Actual hours spent:',
        default: task.actualHours
      }
    ]);

    task.status = status;
    task.actualHours = actualHours;

    fs.writeFileSync(this.trackingPath, JSON.stringify(tracking, null, 2));
    console.log(chalk.green(`✅ Task "${task.name}" updated`));

    // Check if phase is complete
    const allTasksComplete = currentPhase.tasks.every((t: WorkflowTask) => t.status === 'completed');
    if (allTasksComplete && currentPhase.status !== 'completed') {
      console.log(chalk.yellow('🎉 All tasks in current phase completed!'));
      console.log(chalk.yellow('💡 Run "workflow-tracker complete-phase" to mark phase as done'));
    }
  }

  async completePhase() {
    if (!fs.existsSync(this.trackingPath)) {
      console.log(chalk.red('❌ No workflow tracking found.'));
      return;
    }

    const tracking = JSON.parse(fs.readFileSync(this.trackingPath, 'utf-8'));
    const currentPhase = tracking.phases[tracking.currentPhase];

    if (!currentPhase) {
      console.log(chalk.red('❌ No active phase found.'));
      return;
    }

    // Check quality gates
    console.log(chalk.blue(`🔍 Checking quality gates for ${currentPhase.name}...`));
    
    for (const gate of currentPhase.qualityGates) {
      if (gate.status === 'pending') {
        const { passed } = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'passed',
            message: `Quality Gate: ${gate.name}\nCriteria: ${gate.criteria}\nDoes this pass?`
          }
        ]);

        gate.status = passed ? 'passed' : 'failed';
        gate.checkedAt = new Date().toISOString();

        if (!passed) {
          const { notes } = await inquirer.prompt([
            {
              type: 'input',
              name: 'notes',
              message: 'Add notes about why this gate failed:'
            }
          ]);
          gate.notes = notes;
        }
      }
    }

    const failedGates = currentPhase.qualityGates.filter((g: any) => g.status === 'failed');
    
    if (failedGates.length > 0) {
      console.log(chalk.red(`❌ Cannot complete phase. ${failedGates.length} quality gates failed:`));
      failedGates.forEach((gate: any) => {
        console.log(chalk.red(`   • ${gate.name}: ${gate.notes}`));
      });
      return;
    }

    // Mark phase as completed
    currentPhase.status = 'completed';
    currentPhase.completedAt = new Date().toISOString();

    // Move to next phase
    if (tracking.currentPhase + 1 < tracking.phases.length) {
      tracking.currentPhase += 1;
      tracking.phases[tracking.currentPhase].status = 'in-progress';
      tracking.phases[tracking.currentPhase].startedAt = new Date().toISOString();
    }

    fs.writeFileSync(this.trackingPath, JSON.stringify(tracking, null, 2));

    console.log(chalk.green(`✅ Phase "${currentPhase.name}" completed!`));
    
    if (tracking.currentPhase < tracking.phases.length) {
      const nextPhase = tracking.phases[tracking.currentPhase];
      console.log(chalk.blue(`📋 Next phase: ${nextPhase.name}`));
    } else {
      console.log(chalk.green('🎉 All phases completed! Project finished.'));
    }
  }

  async addTask() {
    if (!fs.existsSync(this.trackingPath)) {
      console.log(chalk.red('❌ No workflow tracking found.'));
      return;
    }

    const tracking = JSON.parse(fs.readFileSync(this.trackingPath, 'utf-8'));
    
    const { phaseIndex } = await inquirer.prompt([
      {
        type: 'list',
        name: 'phaseIndex',
        message: 'Select phase to add task to:',
        choices: tracking.phases.map((phase: WorkflowPhase, index: number) => ({
          name: `${phase.name} (${phase.status})`,
          value: index
        }))
      }
    ]);

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Task name:'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Task description:'
      },
      {
        type: 'list',
        name: 'assignedPersona',
        message: 'Assigned persona:',
        choices: [
          'Project Manager',
          'Product Manager',
          'UX Designer',
          'Frontend Developer',
          'Backend Developer',
          'QA Engineer',
          'DevOps Engineer'
        ]
      },
      {
        type: 'number',
        name: 'estimatedHours',
        message: 'Estimated hours:',
        default: 8
      }
    ]);

    const newTask: WorkflowTask = {
      id: answers.name.toLowerCase().replace(/\s+/g, '-'),
      name: answers.name,
      description: answers.description,
      status: 'pending',
      assignedPersona: answers.assignedPersona,
      estimatedHours: answers.estimatedHours,
      actualHours: 0,
      dependencies: []
    };

    tracking.phases[phaseIndex].tasks.push(newTask);
    fs.writeFileSync(this.trackingPath, JSON.stringify(tracking, null, 2));

    console.log(chalk.green(`✅ Task "${newTask.name}" added to ${tracking.phases[phaseIndex].name}`));
  }

  async generateReport() {
    if (!fs.existsSync(this.trackingPath)) {
      console.log(chalk.red('❌ No workflow tracking found.'));
      return;
    }

    const tracking = JSON.parse(fs.readFileSync(this.trackingPath, 'utf-8'));
    
    // Calculate metrics
    const totalTasks = tracking.phases.reduce((sum: number, phase: WorkflowPhase) => sum + phase.tasks.length, 0);
    const completedTasks = tracking.phases.reduce((sum: number, phase: WorkflowPhase) => 
      sum + phase.tasks.filter((t: WorkflowTask) => t.status === 'completed').length, 0);
    
    const totalEstimated = tracking.phases.reduce((sum: number, phase: WorkflowPhase) => 
      sum + phase.tasks.reduce((taskSum: number, task: WorkflowTask) => taskSum + task.estimatedHours, 0), 0);
    
    const totalActual = tracking.phases.reduce((sum: number, phase: WorkflowPhase) => 
      sum + phase.tasks.reduce((taskSum: number, task: WorkflowTask) => taskSum + task.actualHours, 0), 0);

    const report = {
      projectSummary: {
        totalPhases: tracking.phases.length,
        completedPhases: tracking.phases.filter((p: WorkflowPhase) => p.status === 'completed').length,
        totalTasks,
        completedTasks,
        totalEstimatedHours: totalEstimated,
        totalActualHours: totalActual,
        efficiencyRatio: totalEstimated > 0 ? Math.round((totalEstimated / totalActual) * 100) : 0
      },
      phaseBreakdown: tracking.phases.map((phase: WorkflowPhase) => ({
        name: phase.name,
        status: phase.status,
        duration: phase.startedAt && phase.completedAt ? 
          Math.round((new Date(phase.completedAt).getTime() - new Date(phase.startedAt).getTime()) / (1000 * 60 * 60 * 24)) : null,
        taskCompletion: Math.round((phase.tasks.filter(t => t.status === 'completed').length / phase.tasks.length) * 100),
        qualityGatesPassed: Math.round((phase.qualityGates.filter(g => g.status === 'passed').length / phase.qualityGates.length) * 100)
      })),
      generatedAt: new Date().toISOString()
    };

    const reportFileName = `workflow-report-${Date.now()}.json`;
    fs.writeFileSync(reportFileName, JSON.stringify(report, null, 2));

    console.log(chalk.green(`📊 Workflow report generated: ${reportFileName}`));
    console.log('\n📈 Summary:');
    console.log(chalk.cyan(`Tasks Completed: ${completedTasks}/${totalTasks} (${Math.round((completedTasks/totalTasks)*100)}%)`));
    console.log(chalk.cyan(`Time Efficiency: ${report.projectSummary.efficiencyRatio}%`));
    console.log(chalk.cyan(`Phases Completed: ${report.projectSummary.completedPhases}/${report.projectSummary.totalPhases}`));
  }
}

const tracker = new WorkflowTracker();

program
  .name('workflow-tracker')
  .description('Track AI-powered development workflow progress')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize workflow tracking for current project')
  .action(async () => {
    await tracker.initTracking();
  });

program
  .command('status')
  .description('Show current workflow status and progress')
  .action(async () => {
    await tracker.showStatus();
  });

program
  .command('update-task')
  .description('Update task status and progress')
  .action(async () => {
    await tracker.updateTask();
  });

program
  .command('complete-phase')
  .description('Complete current phase and move to next')
  .action(async () => {
    await tracker.completePhase();
  });

program
  .command('add-task')
  .description('Add a new task to a phase')
  .action(async () => {
    await tracker.addTask();
  });

program
  .command('report')
  .description('Generate workflow progress report')
  .action(async () => {
    await tracker.generateReport();
  });

program.parse();
