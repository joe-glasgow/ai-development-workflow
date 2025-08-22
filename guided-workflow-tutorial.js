#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`;
}

function log(message, color = 'reset') {
  console.log(colorize(message, color));
}

function logStep(step, message) {
  console.log('\n' + colorize(`📍 Step ${step}:`, 'cyan') + ' ' + colorize(message, 'bright'));
}

function logSuccess(message) {
  console.log(colorize('✅ ', 'green') + message);
}

function logInfo(message) {
  console.log(colorize('💡 ', 'blue') + message);
}

function logWarning(message) {
  console.log(colorize('⚠️  ', 'yellow') + message);
}

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(colorize(prompt, 'cyan'), resolve);
  });
}

function waitForEnter(message = 'Press Enter to continue...') {
  return question(message);
}

function execCommand(command, options = {}) {
  try {
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: options.silent ? 'pipe' : 'inherit',
      ...options 
    });
    return { success: true, output: result };
  } catch (error) {
    return { success: false, error: error.message, output: error.stdout };
  }
}

function showWelcome() {
  console.clear();
  console.log(colorize('🎓 AI Development Workflow - Interactive Tutorial', 'bright'));
  console.log(colorize('================================================', 'bright'));
  console.log('\nWelcome to the hands-on tutorial! This will guide you through:');
  console.log('• Creating your first AI-powered project');
  console.log('• Using AI personas for different development tasks');
  console.log('• Tracking your workflow progress');
  console.log('• Best practices for AI-assisted development');
  console.log('\n' + colorize('Duration: ~15-20 minutes', 'yellow'));
  console.log(colorize('Prerequisites: Tools should be installed (run setup-wizard.js first)', 'yellow'));
}

async function checkSetup() {
  logStep(1, 'Verifying Setup');
  
  const commands = [
    { cmd: './tools/persona-manager/bin/pc --version', name: 'Persona Manager (pc)' },
    { cmd: './tools/ai-integration/bin/aiw --version', name: 'AI Integration (aiw)' },
    { cmd: './tools/workflow-tracker/bin/wt --version', name: 'Workflow Tracker (wt)' }
  ];
  
  let allWorking = true;
  
  for (const { cmd, name } of commands) {
    const result = execCommand(cmd, { silent: true });
    if (result.success) {
      logSuccess(`${name} ✓`);
    } else {
      logWarning(`${name} not working - you may need to run setup-wizard.js first`);
      allWorking = false;
    }
  }
  
  if (!allWorking) {
    console.log('\n' + colorize('Setup Issues Detected', 'red'));
    console.log('Please run the setup wizard first:');
    console.log(colorize('  node setup-wizard.js', 'cyan'));
    const answer = await question('\nContinue anyway? (y/N): ');
    if (answer.toLowerCase() !== 'y') {
      process.exit(0);
    }
  }
  
  await waitForEnter();
}

async function createTutorialProject() {
  logStep(2, 'Creating Your First Project');
  
  console.log('Let\'s create a sample project to work with during this tutorial.');
  console.log('We\'ll build a simple task management app using AI assistance.');
  
  const projectName = 'ai-tutorial-project';
  
  // Clean up any existing tutorial project
  if (fs.existsSync(projectName)) {
    console.log(`\nRemoving existing ${projectName} directory...`);
    execCommand(`rm -rf ${projectName}`);
  }
  
  console.log(`\nCreating project: ${projectName}`);
  console.log(colorize('Command: pc init ' + projectName, 'yellow'));
  
  const result = execCommand(`./tools/persona-manager/bin/pc init ${projectName}`);
  
  if (result.success) {
    logSuccess('Project created successfully!');
    logInfo('The persona manager has set up a basic project structure with workflow phases.');
  } else {
    logWarning('Project creation had issues, but we can continue...');
  }
  
  await waitForEnter();
}

async function explorePersonas() {
  logStep(3, 'Understanding AI Personas');
  
  console.log('AI personas help you get contextually appropriate responses for different roles.');
  console.log('Let\'s explore the available personas:');
  
  console.log(colorize('\nCommand: pc list-personas', 'yellow'));
  execCommand('./tools/persona-manager/bin/pc list-personas');
  
  console.log('\nEach persona provides specialized knowledge and perspective:');
  console.log('• Frontend Developer: React, UI/UX, responsive design');
  console.log('• Backend Developer: APIs, databases, server architecture');
  console.log('• Product Manager: Requirements, user stories, prioritization');
  console.log('• UX Designer: User experience, design systems, accessibility');
  
  await waitForEnter();
  
  console.log('\nLet\'s look at a specific persona in detail:');
  console.log(colorize('Command: pc get-persona "Frontend Developer"', 'yellow'));
  execCommand('./tools/persona-manager/bin/pc get-persona "Frontend Developer"');
  
  await waitForEnter();
}

async function setupAIIntegration() {
  logStep(4, 'AI Integration Setup');
  
  console.log('Now let\'s set up AI integration so you can chat with AI using these personas.');
  
  // Check if AI is already configured
  const configPath = path.join(process.env.HOME || process.env.USERPROFILE, '.ai-workflow', 'config.json');
  
  if (fs.existsSync(configPath)) {
    logSuccess('AI integration is already configured!');
    console.log('You can reconfigure it anytime with: aiw setup');
  } else {
    console.log('Let\'s configure your AI provider. You have several options:');
    console.log('• OpenAI GPT-4 (paid, very capable)');
    console.log('• Anthropic Claude (paid, great for coding)');
    console.log('• Google Gemini (free tier available)');
    console.log('• Hugging Face (free tier)');
    console.log('• Ollama (completely free, runs locally)');
    
    const answer = await question('\nWould you like to configure AI now? (Y/n): ');
    
    if (answer.toLowerCase() !== 'n') {
      console.log(colorize('\nCommand: aiw setup', 'yellow'));
      execCommand('./tools/ai-integration/bin/aiw setup');
    } else {
      logInfo('You can configure AI later with: aiw setup');
    }
  }
  
  await waitForEnter();
}

async function demoAIChat() {
  logStep(5, 'AI-Powered Development Demo');
  
  console.log('Let\'s see AI assistance in action! We\'ll ask AI to help us plan our task app.');
  
  // Check if AI is configured
  const configPath = path.join(process.env.HOME || process.env.USERPROFILE, '.ai-workflow', 'config.json');
  
  if (!fs.existsSync(configPath)) {
    logWarning('AI not configured - showing example interaction instead');
    console.log('\n' + colorize('Example AI Conversation:', 'bright'));
    console.log(colorize('You:', 'green') + ' Acting as a Product Manager, help me define requirements for a task management app');
    console.log(colorize('AI:', 'blue') + ' As a Product Manager, I\'ll help you define comprehensive requirements...');
    console.log('   • Core Features: Create, edit, delete, and mark tasks as complete');
    console.log('   • User Stories: As a user, I want to add tasks so I can track my work');
    console.log('   • Priority Levels: High, Medium, Low task prioritization');
    console.log('   • Categories: Work, Personal, Shopping, etc.');
    console.log('   • Due Dates: Optional deadline tracking');
    
    await waitForEnter();
    return;
  }
  
  console.log('We\'ll start an AI chat session. Try asking:');
  console.log(colorize('"Acting as a Product Manager, help me define requirements for a task management app"', 'green'));
  console.log('\nThen try switching personas:');
  console.log(colorize('"Now as a Frontend Developer, suggest the UI components I\'ll need"', 'green'));
  
  const answer = await question('\nStart AI chat session? (Y/n): ');
  
  if (answer.toLowerCase() !== 'n') {
    console.log(colorize('\nCommand: aiw chat', 'yellow'));
    console.log('(Type "exit" to return to the tutorial)');
    execCommand('./tools/ai-integration/bin/aiw chat');
  }
  
  await waitForEnter();
}

async function workflowTracking() {
  logStep(6, 'Workflow Progress Tracking');
  
  console.log('The workflow tracker helps you monitor progress through development phases.');
  console.log('Let\'s initialize tracking for our tutorial project:');
  
  // Change to project directory
  const projectPath = 'ai-tutorial-project';
  if (fs.existsSync(projectPath)) {
    process.chdir(projectPath);
    console.log(`Changed to project directory: ${projectPath}`);
  }
  
  console.log(colorize('\nCommand: wt init', 'yellow'));
  execCommand('../tools/workflow-tracker/bin/wt init');
  
  console.log(colorize('\nCommand: wt status', 'yellow'));
  execCommand('../tools/workflow-tracker/bin/wt status');
  
  console.log('\nThe workflow tracker provides:');
  console.log('• Phase-by-phase progress monitoring');
  console.log('• Task completion tracking');
  console.log('• Time estimation and actual time logging');
  console.log('• Quality gate validation');
  console.log('• Progress reports and metrics');
  
  // Change back to original directory
  process.chdir('..');
  
  await waitForEnter();
}

async function bestPractices() {
  logStep(7, 'AI Development Best Practices');
  
  console.log('Here are key best practices for AI-assisted development:');
  
  console.log('\n' + colorize('🎭 Persona Usage:', 'bright'));
  console.log('• Be specific about the role: "As a Senior React Developer..."');
  console.log('• Provide context: "For a mobile-first e-commerce app..."');
  console.log('• Ask for explanations: "Explain why you chose this approach"');
  
  console.log('\n' + colorize('💬 Effective Prompting:', 'bright'));
  console.log('• Break complex tasks into smaller steps');
  console.log('• Ask for code with comments and explanations');
  console.log('• Request multiple options: "Show me 3 different approaches"');
  console.log('• Iterate: "Make it more accessible" or "Optimize for performance"');
  
  console.log('\n' + colorize('🔄 Workflow Integration:', 'bright'));
  console.log('• Use different personas for different phases');
  console.log('• Track your progress with the workflow tracker');
  console.log('• Document AI-generated solutions');
  console.log('• Review and test all AI-generated code');
  
  console.log('\n' + colorize('⚡ Productivity Tips:', 'bright'));
  console.log('• Save useful prompts as templates');
  console.log('• Use AI for code review and optimization');
  console.log('• Generate tests and documentation');
  console.log('• Ask for refactoring suggestions');
  
  await waitForEnter();
}

async function exploreTemplates() {
  logStep(8, 'Exploring Templates and Resources');
  
  console.log('The workflow includes extensive templates to accelerate your development:');
  
  console.log('\n' + colorize('📁 Available Templates:', 'bright'));
  console.log('• Persona Templates: Detailed role definitions');
  console.log('• Project Templates: Starter projects for different types');
  console.log('• Prompt Templates: Proven prompts for common tasks');
  console.log('• Workflow Templates: Process templates for different methodologies');
  
  console.log('\nLet\'s explore the templates directory:');
  if (fs.existsSync('templates')) {
    console.log(colorize('\nPersona Templates:', 'yellow'));
    const personaTemplates = fs.readdirSync('templates/persona-templates').filter(f => f.endsWith('.md'));
    personaTemplates.forEach(template => {
      console.log(`  • ${template.replace('.md', '')}`);
    });
    
    console.log(colorize('\nProject Templates:', 'yellow'));
    const projectTemplates = fs.readdirSync('templates/project-templates');
    projectTemplates.forEach(template => {
      console.log(`  • ${template}`);
    });
  }
  
  console.log('\n' + colorize('💡 Using Templates:', 'bright'));
  console.log('• Copy project templates: cp -r templates/project-templates/basic-webapp my-project');
  console.log('• Reference persona templates when crafting prompts');
  console.log('• Use prompt templates as starting points');
  console.log('• Adapt workflow templates to your process');
  
  await waitForEnter();
}

async function nextSteps() {
  logStep(9, 'Next Steps & Resources');
  
  console.log('Congratulations! You\'ve completed the AI Development Workflow tutorial.');
  
  console.log('\n' + colorize('🚀 What to do next:', 'bright'));
  console.log('1. Create a real project: pc init my-real-project');
  console.log('2. Configure AI if you haven\'t: aiw setup');
  console.log('3. Start building with AI assistance: aiw chat');
  console.log('4. Track your progress: wt init && wt status');
  
  console.log('\n' + colorize('📚 Documentation:', 'bright'));
  console.log('• Workflow Guide: workflow-guide/README.md');
  console.log('• Best Practices: docs/BEST_PRACTICES.md');
  console.log('• Troubleshooting: docs/TROUBLESHOOTING.md');
  console.log('• Quality Checklists: docs/QUALITY_CHECKLISTS.md');
  
  console.log('\n' + colorize('🌟 Advanced Features:', 'bright'));
  console.log('• Explore the sample project for real-world examples');
  console.log('• Check out the NextJS documentation site');
  console.log('• Try different AI providers and compare results');
  console.log('• Contribute your own templates and improvements');
  
  console.log('\n' + colorize('🤝 Community:', 'bright'));
  console.log('• GitHub: https://github.com/joe-glasgow/ai-development-workflow');
  console.log('• Issues: Report bugs and request features');
  console.log('• Discussions: Share your experiences and tips');
  
  const cleanup = await question('\nClean up tutorial project? (Y/n): ');
  if (cleanup.toLowerCase() !== 'n') {
    if (fs.existsSync('ai-tutorial-project')) {
      execCommand('rm -rf ai-tutorial-project');
      logSuccess('Tutorial project cleaned up');
    }
  }
  
  console.log('\n' + colorize('Happy coding with AI! 🤖✨', 'magenta'));
}

async function main() {
  try {
    showWelcome();
    await waitForEnter('\nPress Enter to start the tutorial...');
    
    await checkSetup();
    await createTutorialProject();
    await explorePersonas();
    await setupAIIntegration();
    await demoAIChat();
    await workflowTracking();
    await bestPractices();
    await exploreTemplates();
    await nextSteps();
    
  } catch (error) {
    console.log('\n' + colorize('Tutorial Error:', 'red'));
    console.log(error.message);
    console.log('\nFor help, check:');
    console.log('• docs/TROUBLESHOOTING.md');
    console.log('• https://github.com/joe-glasgow/ai-development-workflow/issues');
  } finally {
    rl.close();
  }
}

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n\nTutorial cancelled by user.');
  console.log('You can restart anytime with: npm run tutorial');
  rl.close();
  process.exit(0);
});

if (require.main === module) {
  main();
}
