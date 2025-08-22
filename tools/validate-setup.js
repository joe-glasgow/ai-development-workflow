#!/usr/bin/env node

/**
 * Setup Validation Script
 * 
 * This script validates the development environment and testing setup
 * to prevent common issues that new users might encounter.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const chalk = require('chalk');

class SetupValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.passed = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    switch (type) {
      case 'error':
        console.log(chalk.red(`❌ [${timestamp}] ${message}`));
        this.errors.push(message);
        break;
      case 'warning':
        console.log(chalk.yellow(`⚠️  [${timestamp}] ${message}`));
        this.warnings.push(message);
        break;
      case 'success':
        console.log(chalk.green(`✅ [${timestamp}] ${message}`));
        this.passed.push(message);
        break;
      default:
        console.log(chalk.blue(`ℹ️  [${timestamp}] ${message}`));
    }
  }

  async validateNodeVersion() {
    try {
      const nodeVersion = process.version;
      const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
      
      if (majorVersion < 18) {
        this.log(`Node.js version ${nodeVersion} is too old. Please upgrade to Node.js 18 or later.`, 'error');
        return false;
      }
      
      this.log(`Node.js version ${nodeVersion} is compatible`, 'success');
      return true;
    } catch (error) {
      this.log(`Failed to check Node.js version: ${error.message}`, 'error');
      return false;
    }
  }

  async validateNpmVersion() {
    try {
      const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
      const majorVersion = parseInt(npmVersion.split('.')[0]);
      
      if (majorVersion < 8) {
        this.log(`npm version ${npmVersion} is too old. Please upgrade npm: npm install -g npm@latest`, 'warning');
      } else {
        this.log(`npm version ${npmVersion} is compatible`, 'success');
      }
      return true;
    } catch (error) {
      this.log(`Failed to check npm version: ${error.message}`, 'error');
      return false;
    }
  }

  async validateGitInstallation() {
    try {
      const gitVersion = execSync('git --version', { encoding: 'utf8' }).trim();
      this.log(`Git is installed: ${gitVersion}`, 'success');
      return true;
    } catch (error) {
      this.log('Git is not installed or not in PATH. Please install Git.', 'error');
      return false;
    }
  }

  async validateProjectStructure() {
    const requiredDirs = [
      'persona-manager',
      'ai-integration', 
      'workflow-tracker',
      '../docs',
      '../templates'
    ];

    const requiredFiles = [
      '../package.json',
      'package.json',
      'jest.config.js',
      'jest.setup.js',
      'tsconfig.json'
    ];

    let allValid = true;

    for (const dir of requiredDirs) {
      if (!fs.existsSync(dir)) {
        this.log(`Missing required directory: ${dir}`, 'error');
        allValid = false;
      } else {
        this.log(`Found required directory: ${dir}`, 'success');
      }
    }

    for (const file of requiredFiles) {
      if (!fs.existsSync(file)) {
        this.log(`Missing required file: ${file}`, 'error');
        allValid = false;
      } else {
        this.log(`Found required file: ${file}`, 'success');
      }
    }

    return allValid;
  }

  async validateDependencies() {
    const toolDirs = ['persona-manager', 'ai-integration', 'workflow-tracker'];
    let allValid = true;

    for (const toolDir of toolDirs) {
      const packageJsonPath = path.join(toolDir, 'package.json');
      const nodeModulesPath = path.join(toolDir, 'node_modules');

      if (!fs.existsSync(packageJsonPath)) {
        this.log(`Missing package.json in ${toolDir}`, 'error');
        allValid = false;
        continue;
      }

      if (!fs.existsSync(nodeModulesPath)) {
        this.log(`Dependencies not installed in ${toolDir}. Run: cd ${toolDir} && npm install`, 'warning');
        continue;
      }

      try {
        // Check if critical dependencies are installed
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const criticalDeps = ['typescript', 'commander', 'inquirer'];
        
        for (const dep of criticalDeps) {
          const depPath = path.join(toolDir, 'node_modules', dep);
          if (!fs.existsSync(depPath) && 
              !packageJson.dependencies?.[dep] && 
              !packageJson.devDependencies?.[dep]) {
            this.log(`Missing critical dependency ${dep} in ${toolDir}`, 'warning');
          }
        }

        this.log(`Dependencies validated for ${toolDir}`, 'success');
      } catch (error) {
        this.log(`Failed to validate dependencies for ${toolDir}: ${error.message}`, 'error');
        allValid = false;
      }
    }

    return allValid;
  }

  async validateTypeScriptConfiguration() {
    const toolDirs = ['persona-manager', 'ai-integration', 'workflow-tracker'];
    let allValid = true;

    // Check root tsconfig
    if (!fs.existsSync('tsconfig.json')) {
      this.log('Missing root TypeScript configuration', 'error');
      allValid = false;
    }

    for (const toolDir of toolDirs) {
      const tsconfigPath = path.join(toolDir, 'tsconfig.json');
      
      if (!fs.existsSync(tsconfigPath)) {
        this.log(`Missing TypeScript config in ${toolDir}`, 'error');
        allValid = false;
        continue;
      }

      try {
        const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
        
        // Check for strict mode
        if (!tsconfig.compilerOptions?.strict) {
          this.log(`TypeScript strict mode not enabled in ${toolDir}`, 'warning');
        }

        // Check for proper module resolution
        if (tsconfig.compilerOptions?.moduleResolution !== 'node') {
          this.log(`Incorrect module resolution in ${toolDir}`, 'warning');
        }

        this.log(`TypeScript configuration validated for ${toolDir}`, 'success');
      } catch (error) {
        this.log(`Invalid TypeScript configuration in ${toolDir}: ${error.message}`, 'error');
        allValid = false;
      }
    }

    return allValid;
  }

  async validateJestConfiguration() {
    try {
      // Check Jest config exists
      if (!fs.existsSync('jest.config.js')) {
        this.log('Missing Jest configuration file', 'error');
        return false;
      }

      // Check Jest setup file exists
      if (!fs.existsSync('jest.setup.js')) {
        this.log('Missing Jest setup file', 'error');
        return false;
      }

      // Validate Jest config
      const jestConfig = require(path.resolve('jest.config.js'));
      
      if (!jestConfig.preset || jestConfig.preset !== 'ts-jest') {
        this.log('Jest not configured for TypeScript', 'warning');
      }

      if (!jestConfig.setupFilesAfterEnv || !jestConfig.setupFilesAfterEnv.includes('<rootDir>/jest.setup.js')) {
        this.log('Jest setup file not properly configured', 'warning');
      }

      this.log('Jest configuration validated', 'success');
      return true;
    } catch (error) {
      this.log(`Failed to validate Jest configuration: ${error.message}`, 'error');
      return false;
    }
  }

  async validateTestFiles() {
    const toolDirs = ['persona-manager', 'ai-integration', 'workflow-tracker'];
    let allValid = true;

    for (const toolDir of toolDirs) {
      const testDir = path.join(toolDir, '__tests__');
      
      if (!fs.existsSync(testDir)) {
        this.log(`Missing test directory for ${toolDir}`, 'error');
        allValid = false;
        continue;
      }

      const testFiles = fs.readdirSync(testDir).filter(file => file.endsWith('.test.ts'));
      
      if (testFiles.length === 0) {
        this.log(`No test files found for ${toolDir}`, 'warning');
        continue;
      }

      // Check if test files are valid TypeScript
      for (const testFile of testFiles) {
        const testPath = path.join(testDir, testFile);
        try {
          const content = fs.readFileSync(testPath, 'utf8');
          
          // Basic validation - check for describe/it blocks
          if (!content.includes('describe(') || !content.includes('it(')) {
            this.log(`Test file ${testFile} in ${toolDir} may not be properly structured`, 'warning');
          }
        } catch (error) {
          this.log(`Failed to read test file ${testFile} in ${toolDir}`, 'error');
          allValid = false;
        }
      }

      this.log(`Test files validated for ${toolDir} (${testFiles.length} files)`, 'success');
    }

    return allValid;
  }

  async validateBuildProcess() {
    const toolDirs = ['persona-manager', 'ai-integration', 'workflow-tracker'];
    let allValid = true;

    for (const toolDir of toolDirs) {
      try {
        // Check if TypeScript compiles without errors
        execSync('npx tsc --noEmit', { 
          cwd: toolDir, 
          stdio: 'pipe' 
        });
        
        this.log(`TypeScript compilation successful for ${toolDir}`, 'success');
      } catch (error) {
        this.log(`TypeScript compilation failed for ${toolDir}: ${error.message}`, 'error');
        allValid = false;
      }
    }

    return allValid;
  }

  async validateEnvironmentVariables() {
    const optionalEnvVars = [
      'OPENAI_API_KEY',
      'ANTHROPIC_API_KEY',
      'GOOGLE_API_KEY',
      'HUGGING_FACE_API_KEY'
    ];

    let hasAnyApiKey = false;

    for (const envVar of optionalEnvVars) {
      if (process.env[envVar]) {
        this.log(`Environment variable ${envVar} is set`, 'success');
        hasAnyApiKey = true;
      }
    }

    if (!hasAnyApiKey) {
      this.log('No AI API keys found in environment. You can set them later or use local models.', 'warning');
    }

    return true;
  }

  async runTests() {
    try {
      this.log('Running test suite to validate setup...', 'info');
      
      execSync('npm test', { 
        stdio: 'pipe'
      });
      
      this.log('All tests passed successfully', 'success');
      return true;
    } catch (error) {
      this.log(`Tests failed: ${error.message}`, 'error');
      this.log('Run "cd tools && npm test" for detailed error information', 'info');
      return false;
    }
  }

  async generateReport() {
    console.log('\n' + '='.repeat(60));
    console.log(chalk.bold.blue('SETUP VALIDATION REPORT'));
    console.log('='.repeat(60));

    console.log(chalk.green(`✅ Passed: ${this.passed.length}`));
    console.log(chalk.yellow(`⚠️  Warnings: ${this.warnings.length}`));
    console.log(chalk.red(`❌ Errors: ${this.errors.length}`));

    if (this.warnings.length > 0) {
      console.log('\n' + chalk.yellow.bold('WARNINGS:'));
      this.warnings.forEach(warning => console.log(chalk.yellow(`  • ${warning}`)));
    }

    if (this.errors.length > 0) {
      console.log('\n' + chalk.red.bold('ERRORS:'));
      this.errors.forEach(error => console.log(chalk.red(`  • ${error}`)));
      
      console.log('\n' + chalk.red.bold('NEXT STEPS:'));
      console.log(chalk.white('1. Fix the errors listed above'));
      console.log(chalk.white('2. Re-run this validation script'));
      console.log(chalk.white('3. Check the troubleshooting guide: docs/TROUBLESHOOTING.md'));
      console.log(chalk.white('4. If issues persist, try a clean reinstall: ./cleanup.sh && ./setup.sh'));
      console.log(chalk.white('5. Open an issue on GitHub if problems continue'));
      
      console.log('\n' + chalk.yellow.bold('🧹 CLEAN REINSTALL OPTION:'));
      console.log(chalk.white('If you\'re experiencing persistent issues, you can start fresh:'));
      console.log(chalk.cyan('  ./cleanup.sh    # Remove all installations'));
      console.log(chalk.cyan('  ./setup.sh      # Fresh installation'));
      
      return false;
    }

    if (this.warnings.length > 0) {
      console.log('\n' + chalk.yellow.bold('RECOMMENDATIONS:'));
      console.log(chalk.white('• Address the warnings above for optimal experience'));
      console.log(chalk.white('• The setup should work, but you may encounter minor issues'));
    }

    console.log('\n' + chalk.green.bold('🎉 SETUP VALIDATION COMPLETE!'));
    console.log(chalk.white('Your development environment is ready for AI-powered development.'));
    
    console.log('\n' + chalk.blue.bold('NEXT STEPS:'));
    console.log(chalk.white('1. Run "ai-workflow setup" to configure your AI provider'));
    console.log(chalk.white('2. Try "persona-cli init my-project" to create your first project'));
    console.log(chalk.white('3. Check out the workflow guide: docs/WORKFLOW_GUIDE.md'));

    return true;
  }

  async validate() {
    console.log(chalk.blue.bold('🔍 AI Development Workflow - Setup Validation'));
    console.log(chalk.gray('This script will validate your development environment and testing setup.\n'));

    const validations = [
      { name: 'Node.js Version', fn: () => this.validateNodeVersion() },
      { name: 'npm Version', fn: () => this.validateNpmVersion() },
      { name: 'Git Installation', fn: () => this.validateGitInstallation() },
      { name: 'Project Structure', fn: () => this.validateProjectStructure() },
      { name: 'Dependencies', fn: () => this.validateDependencies() },
      { name: 'TypeScript Configuration', fn: () => this.validateTypeScriptConfiguration() },
      { name: 'Jest Configuration', fn: () => this.validateJestConfiguration() },
      { name: 'Test Files', fn: () => this.validateTestFiles() },
      { name: 'Build Process', fn: () => this.validateBuildProcess() },
      { name: 'Environment Variables', fn: () => this.validateEnvironmentVariables() },
      { name: 'Test Suite', fn: () => this.runTests() }
    ];

    for (const validation of validations) {
      console.log(chalk.blue(`\n🔍 Validating ${validation.name}...`));
      try {
        await validation.fn();
      } catch (error) {
        this.log(`Validation failed for ${validation.name}: ${error.message}`, 'error');
      }
    }

    return await this.generateReport();
  }
}

// Run validation if called directly
if (require.main === module) {
  const validator = new SetupValidator();
  validator.validate().then(success => {
    process.exit(success ? 0 : 1);
  }).catch(error => {
    console.error(chalk.red(`Validation script failed: ${error.message}`));
    process.exit(1);
  });
}

module.exports = SetupValidator;
