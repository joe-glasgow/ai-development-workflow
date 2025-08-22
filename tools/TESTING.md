# CLI Tools Testing Guide

This document outlines the comprehensive testing strategy for the AI-powered development workflow CLI tools.

## Overview

We have implemented a robust testing infrastructure for three main CLI tools:
- **persona-manager** (`pc`) - Project initialization and persona management
- **ai-integration** (`aiw`) - Direct AI integration and code generation  
- **workflow-tracker** (`wt`) - Progress tracking and quality gates

## Testing Infrastructure

### Test Framework
- **Jest** - Primary testing framework with TypeScript support
- **ts-jest** - TypeScript preprocessor for Jest
- **Coverage reporting** - LCOV and HTML reports with 80% minimum threshold

### Test Structure
```
tools/
├── jest.config.js          # Jest configuration
├── jest.setup.js           # Global test setup and mocks
├── package.json            # Dependencies and test scripts
└── [tool-name]/
    ├── __tests__/
    │   └── [ToolName].test.ts
    └── src/
        └── [ToolName].ts
```

### Mock Strategy
- **File System Operations** - Mocked to prevent actual file creation during tests
- **User Input (inquirer)** - Mocked to simulate user interactions
- **HTTP Requests (axios)** - Mocked to test API integrations without external calls
- **Console Output** - Mocked to verify CLI feedback without noise

## Test Categories

### 1. Unit Tests
**Coverage**: Core business logic, utility functions, error handling

**persona-manager tests:**
- ✅ Project initialization with different configurations
- ✅ Persona management (list, get, switch)
- ✅ Workflow phase management (start, complete, status)
- ✅ Template selection and file operations
- ✅ Error handling for missing files/configurations

**ai-integration tests:**
- ✅ AI provider configuration (OpenAI, Anthropic, Ollama, etc.)
- ✅ Chat session management with context
- ✅ Code generation with different personas
- ✅ API call handling for multiple providers
- ✅ Conversation history and export functionality

**workflow-tracker tests:**
- ✅ Workflow initialization and phase tracking
- ✅ Task management and progress updates
- ✅ Quality gate validation
- ✅ Metrics calculation and reporting
- ✅ Integration with persona-manager data

### 2. Integration Tests
**Coverage**: Tool interactions, end-to-end workflows

- Project creation → AI setup → Workflow tracking
- Persona switching between tools
- Data consistency across tool boundaries
- CLI command chaining and dependencies

### 3. Performance Tests
**Coverage**: CLI startup time, memory usage, large project handling

- Tool initialization speed (< 2 seconds)
- Memory footprint monitoring
- Large conversation history handling
- Concurrent tool usage scenarios

### 4. Security Tests
**Coverage**: Input validation, API key handling, file permissions

- API key storage and encryption
- Input sanitization for user prompts
- File system access restrictions
- Dependency vulnerability scanning

## Quality Gates

### Coverage Requirements
- **Minimum**: 80% line coverage across all tools
- **Target**: 90% line coverage for critical paths
- **Branches**: 75% branch coverage minimum

### Code Quality
- **TypeScript**: Strict mode enabled, no `any` types
- **ESLint**: Enforced coding standards
- **Prettier**: Consistent code formatting

### Performance Benchmarks
- CLI startup: < 2 seconds
- API response handling: < 5 seconds timeout
- File operations: < 1 second for typical projects

## Running Tests

### Local Development
```bash
# Install dependencies
cd tools && npm install

# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run linting
npm run lint
```

### Individual Tool Testing
```bash
# Test specific tool
cd tools/persona-manager
npm test

# Test with coverage
npm run test:coverage
```

### CI/CD Pipeline
Tests run automatically on:
- Pull requests to `main` or `develop`
- Pushes to `main` branch
- Changes to `tools/**` directory

## GitHub Actions Workflow

### Test Matrix
- **Node.js versions**: 18.x, 20.x
- **Operating systems**: Ubuntu (primary), with Windows/macOS support planned

### Pipeline Stages
1. **Lint & Type Check** - Code quality validation
2. **Unit Tests** - Individual tool testing with coverage
3. **Integration Tests** - Cross-tool workflow validation
4. **Security Scan** - Dependency vulnerability check
5. **Quality Gates** - Coverage thresholds and performance benchmarks
6. **Build Verification** - CLI tool compilation and basic functionality

### Failure Conditions
- Test failures or coverage below 80%
- TypeScript compilation errors
- ESLint violations
- Security vulnerabilities (high severity)
- Performance regression (> 20% slower)

## Test Data Management

### Mock Data
- Standardized project configurations
- Sample persona templates
- Mock AI responses for consistent testing
- Workflow tracking scenarios

### Test Isolation
- Each test runs in isolated environment
- File system operations are mocked
- No external API calls during testing
- Clean state between test runs

## Debugging Tests

### Common Issues
1. **Mock not working**: Check jest.setup.js configuration
2. **TypeScript errors**: Verify @types packages are installed
3. **File path issues**: Use path.join() for cross-platform compatibility
4. **Async test failures**: Ensure proper await/Promise handling

### Debug Commands
```bash
# Run single test file
npm test -- PersonaManager.test.ts

# Run with verbose output
npm test -- --verbose

# Debug specific test
npm test -- --testNamePattern="should initialize project"
```

## Contributing to Tests

### Adding New Tests
1. Follow existing test structure and naming conventions
2. Include both positive and negative test cases
3. Mock external dependencies appropriately
4. Add integration tests for new features
5. Update coverage thresholds if needed

### Test Naming Convention
- Describe blocks: Feature or method being tested
- Test cases: "should [expected behavior] when [condition]"
- Use clear, descriptive names that explain the test purpose

### Best Practices
- **Arrange-Act-Assert** pattern for test structure
- **Single responsibility** - one assertion per test when possible
- **Descriptive assertions** - use specific matchers and error messages
- **Test edge cases** - empty inputs, invalid data, error conditions
- **Mock minimally** - only mock what's necessary for isolation

## Continuous Improvement

### Metrics Tracking
- Test execution time trends
- Coverage percentage over time
- Flaky test identification
- Performance benchmark history

### Regular Reviews
- Monthly test suite performance review
- Quarterly coverage goal assessment
- Annual testing strategy evaluation
- Continuous feedback integration

## Future Enhancements

### Planned Improvements
- **Visual regression testing** for CLI output formatting
- **Load testing** for high-volume usage scenarios
- **Cross-platform testing** on Windows and macOS
- **End-to-end testing** with real AI providers (staging environment)
- **Property-based testing** for input validation
- **Mutation testing** to verify test quality

### Tool-Specific Enhancements
- **persona-manager**: Template validation tests
- **ai-integration**: Provider-specific API testing
- **workflow-tracker**: Advanced metrics calculation tests

This testing strategy ensures reliable, maintainable CLI tools that provide consistent value to developers using the AI-powered workflow system.
