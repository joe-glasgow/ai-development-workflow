#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
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
  console.log(colorize(`[${step}]`, 'cyan') + ' ' + message);
}

function logSuccess(message) {
  console.log(colorize('✅ ', 'green') + message);
}

function logWarning(message) {
  console.log(colorize('⚠️  ', 'yellow') + message);
}

function logError(message) {
  console.log(colorize('❌ ', 'red') + message);
}

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
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

function checkPrerequisites() {
  logStep('1/7', 'Checking system prerequisites...');
  
  // Check Node.js
  const nodeResult = execCommand('node --version', { silent: true });
  if (!nodeResult.success) {
    logError('Node.js is not installed. Please install Node.js 16+ from https://nodejs.org/');
    process.exit(1);
  }
  
  const nodeVersion = nodeResult.output.trim();
  const majorVersion = parseInt(nodeVersion.replace('v', '').split('.')[0]);
  
  if (majorVersion < 16) {
    logError(`Node.js version ${nodeVersion} is too old. Please install Node.js 16+ from https://nodejs.org/`);
    process.exit(1);
  }
  
  logSuccess(`Node.js ${nodeVersion} ✓`);
  
  // Check npm
  const npmResult = execCommand('npm --version', { silent: true });
  if (!npmResult.success) {
    logError('npm is not available. Please reinstall Node.js from https://nodejs.org/');
    process.exit(1);
  }
  
  logSuccess(`npm ${npmResult.output.trim()} ✓`);
  
  // Check git (optional but recommended)
  const gitResult = execCommand('git --version', { silent: true });
  if (gitResult.success) {
    logSuccess(`Git ${gitResult.output.trim().split(' ')[2]} ✓`);
  } else {
    logWarning('Git not found - recommended for version control');
  }
}

function installDependencies() {
  logStep('2/7', 'Installing root dependencies...');
  
  const result = execCommand('npm install');
  if (!result.success) {
    logError('Failed to install root dependencies');
    process.exit(1);
  }
  
  logSuccess('Root dependencies installed');
}

function buildTools() {
  logStep('3/7', 'Building CLI tools...');
  
  const tools = ['persona-manager', 'ai-integration', 'workflow-tracker'];
  
  for (const tool of tools) {
    log(`Building ${tool}...`, 'blue');
    
    const toolPath = path.join('tools', tool);
    if (!fs.existsSync(toolPath)) {
      logError(`Tool directory not found: ${toolPath}`);
      continue;
    }
    
    // Install dependencies
    const installResult = execCommand(`cd ${toolPath} && npm install`);
    if (!installResult.success) {
      logError(`Failed to install dependencies for ${tool}`);
      continue;
    }
    
    // Build
    const buildResult = execCommand(`cd ${toolPath} && npm run build`);
    if (!buildResult.success) {
      logWarning(`Build failed for ${tool} - this might be normal if no build script exists`);
    }
    
    logSuccess(`${tool} ready`);
  }
}

function makeExecutable() {
  logStep('4/7', 'Making CLI tools executable...');
  
  const binPaths = [
    'tools/persona-manager/bin/pc',
    'tools/persona-manager/bin/persona-cli',
    'tools/ai-integration/bin/aiw',
    'tools/ai-integration/bin/ai-workflow',
    'tools/workflow-tracker/bin/wt',
    'tools/workflow-tracker/bin/workflow-tracker'
  ];
  
  for (const binPath of binPaths) {
    if (fs.existsSync(binPath)) {
      try {
        fs.chmodSync(binPath, '755');
        logSuccess(`Made ${binPath} executable`);
      } catch (error) {
        logWarning(`Could not make ${binPath} executable: ${error.message}`);
      }
    }
  }
}

async function setupGlobalCommands() {
  logStep('5/7', 'Setting up global commands...');
  
  const answer = await question('Would you like to install global commands (pc, aiw, wt)? This requires admin privileges. (y/N): ');
  
  if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
    const currentDir = process.cwd();
    const commands = [
      { name: 'pc', path: path.join(currentDir, 'tools/persona-manager/bin/pc') },
      { name: 'aiw', path: path.join(currentDir, 'tools/ai-integration/bin/aiw') },
      { name: 'wt', path: path.join(currentDir, 'tools/workflow-tracker/bin/wt') }
    ];
    
    for (const cmd of commands) {
      const result = execCommand(`sudo ln -sf "${cmd.path}" "/usr/local/bin/${cmd.name}"`);
      if (result.success) {
        logSuccess(`Global command '${cmd.name}' installed`);
      } else {
        logWarning(`Could not install global command '${cmd.name}' - you can use the full path instead`);
      }
    }
  } else {
    log('Skipping global installation. You can use commands with full paths:', 'yellow');
    log('  ./tools/persona-manager/bin/pc', 'yellow');
    log('  ./tools/ai-integration/bin/aiw', 'yellow');
    log('  ./tools/workflow-tracker/bin/wt', 'yellow');
  }
}

function testInstallation() {
  logStep('6/7', 'Testing installation...');
  
  const commands = [
    { cmd: './tools/persona-manager/bin/pc --version', name: 'Persona Manager' },
    { cmd: './tools/ai-integration/bin/aiw --version', name: 'AI Integration' },
    { cmd: './tools/workflow-tracker/bin/wt --version', name: 'Workflow Tracker' }
  ];
  
  for (const { cmd, name } of commands) {
    const result = execCommand(cmd, { silent: true });
    if (result.success) {
      logSuccess(`${name} working ✓`);
    } else {
      logError(`${name} test failed`);
    }
  }
}

async function setupAI() {
  logStep('7/7', 'AI Provider Setup...');
  
  const answer = await question('Would you like to configure an AI provider now? (Y/n): ');
  
  if (answer.toLowerCase() !== 'n' && answer.toLowerCase() !== 'no') {
    log('Starting AI setup wizard...', 'blue');
    
    const result = execCommand('./tools/ai-integration/bin/aiw setup');
    if (result.success) {
      logSuccess('AI provider configured successfully!');
    } else {
      logWarning('AI setup encountered issues - you can run "aiw setup" later');
    }
  } else {
    log('Skipping AI setup. Run "aiw setup" when you\'re ready to configure an AI provider.', 'yellow');
  }
}

function showNextSteps() {
  console.log('\n' + colorize('🎉 Setup Complete!', 'green'));
  console.log('\n' + colorize('Next Steps:', 'bright'));
  console.log('1. Create your first project:');
  console.log(colorize('   pc init my-awesome-project', 'cyan'));
  console.log('   cd my-awesome-project');
  console.log('\n2. Start AI chat:');
  console.log(colorize('   aiw chat', 'cyan'));
  console.log('\n3. Track your progress:');
  console.log(colorize('   wt status', 'cyan'));
  console.log('\n4. Try the interactive tutorial:');
  console.log(colorize('   npm run tutorial', 'cyan'));
  console.log('\n' + colorize('Documentation:', 'bright'));
  console.log('• Workflow Guide: workflow-guide/README.md');
  console.log('• Templates: templates/README.md');
  console.log('• Troubleshooting: docs/TROUBLESHOOTING.md');
  console.log('\n' + colorize('Happy coding with AI! 🤖✨', 'magenta'));
}

async function main() {
  console.log(colorize('🚀 AI Development Workflow Setup Wizard', 'bright'));
  console.log(colorize('=====================================', 'bright'));
  console.log('This wizard will set up all the tools you need for AI-powered development.\n');
  
  try {
    checkPrerequisites();
    installDependencies();
    buildTools();
    makeExecutable();
    await setupGlobalCommands();
    testInstallation();
    await setupAI();
    showNextSteps();
  } catch (error) {
    logError(`Setup failed: ${error.message}`);
    console.log('\nFor help, check:');
    console.log('• docs/TROUBLESHOOTING.md');
    console.log('• docs/SETUP_GUIDE.md');
    console.log('• https://github.com/joe-glasgow/ai-development-workflow/issues');
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n\nSetup cancelled by user.');
  rl.close();
  process.exit(0);
});

if (require.main === module) {
  main();
}
