# Testing Troubleshooting Guide

This guide helps new users and contributors avoid common testing issues when setting up and working with the AI Development Workflow project.

## 🚨 Common Testing Issues

### 1. Chalk Import Errors

**Problem**: `TypeError: chalk.blue is not a function`

**Cause**: Incorrect chalk import syntax for the version being used.

**Solution**:
```typescript
// ❌ Wrong (causes the error)
import * as chalk from 'chalk';

// ✅ Correct for chalk v4.x
import chalk from 'chalk';
```

**Prevention**: The setup validation script now checks for this issue automatically.

### 2. Jest Configuration Issues

**Problem**: Tests fail to run or TypeScript compilation errors in tests.

**Common Causes & Solutions**:

#### Missing ts-jest preset
```javascript
// jest.config.js
module.exports = {
  preset: 'ts-jest',  // ✅ Required for TypeScript
  testEnvironment: 'node',
  // ... other config
};
```

#### Incorrect setup file path
```javascript
// jest.config.js
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // ✅ Correct path
  // ... other config
};
```

#### Missing TypeScript types
```bash
# Install missing types
npm install --save-dev @types/jest @types/node
```

### 3. Mock Configuration Problems

**Problem**: Mocks not working properly, causing tests to fail or behave unexpectedly.

**Common Issues**:

#### File system mocks not applied
```javascript
// jest.setup.js - Ensure this is present
jest.mock('fs', () => ({
  ...jest.requireActual('fs'),
  existsSync: jest.fn(),
  readFileSync: jest.fn(),
  writeFileSync: jest.fn(),
  mkdirSync: jest.fn(),
}));
```

#### Inquirer mocks not configured
```javascript
// jest.setup.js
jest.mock('inquirer', () => ({
  prompt: jest.fn(),
}));
```

#### Console output not mocked (causing test noise)
```javascript
// jest.setup.js
global.console = {
  ...console,
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  info: jest.fn(),
};
```

### 4. Dependency Installation Issues

**Problem**: Tests fail due to missing dependencies or version conflicts.

**Solutions**:

#### Clean installation
```bash
# Remove all node_modules and reinstall
cd tools
rm -rf */node_modules */package-lock.json
npm install
```

#### Check for peer dependency warnings
```bash
npm install --legacy-peer-deps
```

#### Verify critical dependencies
```bash
# Check if these are installed in each tool directory
npm list typescript commander inquirer axios chalk
```

### 5. TypeScript Configuration Issues

**Problem**: TypeScript compilation errors in tests or source files.

**Common Fixes**:

#### Ensure proper tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*", "__tests__/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

#### Check for missing type declarations
```bash
# Install missing types
npm install --save-dev @types/inquirer @types/axios
```

### 6. Path Resolution Issues

**Problem**: Tests fail due to incorrect file paths or module resolution.

**Solutions**:

#### Use path.join() for cross-platform compatibility
```typescript
// ❌ Wrong - platform-specific
const filePath = 'tools/persona-manager/src/file.ts';

// ✅ Correct - cross-platform
const filePath = path.join('tools', 'persona-manager', 'src', 'file.ts');
```

#### Ensure proper working directory in tests
```typescript
// In tests, be explicit about paths
const testDir = path.join(__dirname, '..', 'test-fixtures');
```

### 7. Async/Await Issues in Tests

**Problem**: Tests fail intermittently or don't wait for async operations.

**Solutions**:

#### Properly handle async operations
```typescript
// ❌ Wrong - not awaiting
it('should do something async', () => {
  const result = someAsyncFunction();
  expect(result).toBe(expected);
});

// ✅ Correct - properly awaiting
it('should do something async', async () => {
  const result = await someAsyncFunction();
  expect(result).toBe(expected);
});
```

#### Increase timeout for slow operations
```typescript
// For individual tests
it('should handle slow operation', async () => {
  // test code
}, 10000); // 10 second timeout

// Or globally in jest.config.js
module.exports = {
  testTimeout: 10000,
};
```

## 🔧 Setup Validation

### Automated Validation

Run the setup validation script to catch common issues:

```bash
# Full validation (includes running tests)
cd tools && npm run validate

# Quick validation (skips tests)
cd tools && npm run validate:quick
```

### Manual Validation Checklist

Before running tests, verify:

- [ ] Node.js version 18 or later
- [ ] npm version 8 or later
- [ ] All dependencies installed in each tool directory
- [ ] TypeScript compiles without errors
- [ ] Jest configuration files present
- [ ] Mock setup properly configured

### Environment Setup

```bash
# Ensure proper environment
export NODE_ENV=test

# Clear any cached modules
npm run clean

# Reinstall dependencies
npm install

# Run validation
npm run validate
```

## 🐛 Debugging Test Failures

### Step-by-Step Debugging

1. **Run tests with verbose output**:
   ```bash
   npm test -- --verbose
   ```

2. **Run a single test file**:
   ```bash
   npm test -- PersonaManager.test.ts
   ```

3. **Run a specific test**:
   ```bash
   npm test -- --testNamePattern="should initialize project"
   ```

4. **Check TypeScript compilation**:
   ```bash
   npx tsc --noEmit
   ```

5. **Verify mock setup**:
   ```bash
   # Add debug output to jest.setup.js
   console.log('Mocks configured:', {
     fs: !!jest.isMockFunction(require('fs').existsSync),
     inquirer: !!jest.isMockFunction(require('inquirer').prompt),
   });
   ```

### Common Debug Commands

```bash
# Check Jest configuration
npx jest --showConfig

# Run tests with coverage to see what's not tested
npm run test:coverage

# Check for TypeScript errors
npx tsc --noEmit --project tsconfig.json

# Verify dependencies
npm list --depth=0
```

## 🚀 Prevention Strategies

### For New Contributors

1. **Always run validation first**:
   ```bash
   cd tools && npm run validate
   ```

2. **Use the provided setup script**:
   ```bash
   ./setup.sh
   ```

3. **Check the troubleshooting guide** before asking for help

4. **Run tests before making changes**:
   ```bash
   npm test
   ```

### For Maintainers

1. **Update validation script** when adding new dependencies
2. **Keep mock configurations up to date**
3. **Document any new testing patterns**
4. **Review test failures in CI/CD carefully**

### Automated Checks

The project includes several automated checks:

- **Pre-commit hooks**: Run linting and basic tests
- **GitHub Actions**: Full test suite on pull requests
- **Setup validation**: Comprehensive environment checking
- **Coverage reporting**: Ensure adequate test coverage

## 📋 Quick Reference

### Essential Commands

```bash
# Setup and validation
./setup.sh                    # Initial setup
cd tools && npm run validate  # Validate setup

# Testing
npm test                      # Run all tests
npm run test:watch           # Watch mode
npm run test:coverage        # With coverage

# Debugging
npm test -- --verbose        # Verbose output
npm test -- SomeTest.test.ts # Single file
npx tsc --noEmit            # Check TypeScript
```

### Key Files to Check

- `tools/jest.config.js` - Jest configuration
- `tools/jest.setup.js` - Mock setup
- `tools/tsconfig.json` - TypeScript config
- `tools/package.json` - Dependencies and scripts
- `tools/validate-setup.js` - Validation script

### Environment Variables

```bash
# Testing environment
export NODE_ENV=test

# Debug Jest
export DEBUG=jest

# Increase Node.js memory (for large test suites)
export NODE_OPTIONS="--max-old-space-size=4096"
```

## 🆘 Getting Help

If you're still experiencing issues after following this guide:

1. **Run the validation script** and share the output
2. **Check existing GitHub issues** for similar problems
3. **Create a new issue** with:
   - Operating system and version
   - Node.js and npm versions
   - Full error messages
   - Steps to reproduce
   - Output of `cd tools && npm run validate`

### Diagnostic Information

When reporting issues, include:

```bash
# System information
node --version
npm --version
git --version

# Project validation
cd tools && npm run validate

# Test output
npm test 2>&1 | head -50
```

---

## 📚 Additional Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [TypeScript Jest Setup](https://jestjs.io/docs/getting-started#using-typescript)
- [Node.js Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [Project Troubleshooting Guide](./TROUBLESHOOTING.md)

## 🔄 Reset and Clean Installation

### Automated Clean Reset (Recommended)

The project includes a cleanup script for easy reset:

```bash
# Complete clean reset
./cleanup.sh    # Remove all installations and dependencies
./setup.sh      # Fresh installation with validation
```

### Manual Reset Steps

If the cleanup script isn't available:

```bash
# 1. Remove all installed tools
npm uninstall -g persona-cli ai-workflow workflow-tracker

# 2. Clear npm cache
npm cache clean --force

# 3. Remove project directory
cd ..
rm -rf ai-development-workflow

# 4. Fresh installation
git clone https://github.com/joe-glasgow/ai-development-workflow.git
cd ai-development-workflow
chmod +x setup.sh && ./setup.sh
```

### Selective Reset

**Reset just the tools**:
```bash
cd tools
rm -rf */node_modules */dist
npm install
npm run build
```

**Reset just AI configuration**:
```bash
rm -rf ~/.ai-workflow
ai-workflow setup
```

### When to Use Clean Reset

Consider a clean reset when:
- Multiple validation errors persist
- Dependency conflicts cannot be resolved
- Build processes consistently fail
- Tests fail with mysterious errors
- You've made significant system changes

Remember: Most testing issues are environment-related and can be resolved by following the setup validation process. When in doubt, start with a clean installation using the cleanup script!
