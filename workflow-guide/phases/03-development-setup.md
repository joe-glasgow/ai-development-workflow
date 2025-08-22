# Phase 3: Development Setup

## Overview
The development setup phase establishes the technical foundation for implementation. This phase focuses on environment configuration, tooling setup, and establishing development practices that will accelerate the coding process.

## Duration
**Typical Timeline**: 3-5 days for most projects

## Key Personas
- **DevOps Engineer**: Infrastructure and environment setup
- **Frontend Developer**: Frontend tooling and build configuration
- **Backend Developer**: Backend services and database setup

## Phase Objectives
1. **Environment Setup**: Configure development, staging, and production environments
2. **Tooling Configuration**: Set up build tools, linters, and development utilities
3. **Repository Structure**: Organize codebase for scalability and maintainability
4. **CI/CD Pipeline**: Establish automated testing and deployment
5. **Development Standards**: Define coding standards and practices

## AI-Assisted Activities

### 1. Project Structure Setup
**Persona**: Frontend Developer + Backend Developer
**Prompt Template**:
```
You are a Full-Stack Developer setting up a new project.

Create the optimal project structure for:
- Frontend: [INSERT FRONTEND TECH STACK]
- Backend: [INSERT BACKEND TECH STACK]
- Database: [INSERT DATABASE CHOICE]
- Testing: [INSERT TESTING REQUIREMENTS]

Include:
- Directory structure with clear separation of concerns
- Configuration files (package.json, tsconfig.json, etc.)
- Environment variable setup
- Development scripts and commands
- Documentation structure

Project Type: [INSERT PROJECT TYPE]
Team Size: [INSERT TEAM SIZE]
Deployment Target: [INSERT DEPLOYMENT PLATFORM]
```

### 2. Development Environment Configuration
**Persona**: DevOps Engineer
**Prompt Template**:
```
You are a DevOps Engineer focused on development productivity.

Set up development environment for:
- Local development with hot reloading
- Database setup (local and cloud)
- Environment variable management
- Docker containerization (if needed)
- Development server configuration

Technology Stack: [INSERT TECH STACK]
Team Requirements: [INSERT TEAM NEEDS]
Deployment Platform: [INSERT TARGET PLATFORM]
```

### 3. CI/CD Pipeline Setup
**Persona**: DevOps Engineer
**Prompt Template**:
```
You are a DevOps Engineer focused on automated deployment.

Create a CI/CD pipeline with:
- Automated testing on pull requests
- Code quality checks (linting, formatting)
- Security scanning
- Automated deployment to staging
- Production deployment with approval gates

Platform: [INSERT CI/CD PLATFORM - GitHub Actions, GitLab CI, etc.]
Testing Requirements: [INSERT TESTING STRATEGY]
Deployment Targets: [INSERT ENVIRONMENTS]
```

## Deliverables

### 1. Project Structure
- **Repository Organization**: Clear directory structure and file organization
- **Configuration Files**: All necessary config files properly set up
- **Documentation**: README, CONTRIBUTING, and setup instructions
- **Scripts**: Development, build, test, and deployment scripts

### 2. Development Environment
- **Local Setup**: Complete local development environment
- **Database Configuration**: Local and cloud database setup
- **Environment Variables**: Secure configuration management
- **Development Tools**: Linting, formatting, debugging tools

### 3. CI/CD Pipeline
- **Automated Testing**: Unit, integration, and E2E test automation
- **Code Quality**: Automated linting, formatting, and security checks
- **Deployment Automation**: Staging and production deployment workflows
- **Monitoring Setup**: Error tracking and performance monitoring

### 4. Development Standards
- **Coding Standards**: Style guides and best practices
- **Git Workflow**: Branching strategy and commit conventions
- **Code Review Process**: PR templates and review guidelines
- **Documentation Standards**: Code comments and API documentation

## AI Workflow Integration

### Phase Management
```bash
# Continue from design phase
persona-cli start-phase development

# Get DevOps persona for infrastructure setup
persona-cli get-persona "DevOps Engineer"
```

### Setup Automation
Use AI to generate setup scripts:
```
You are a DevOps Engineer creating setup automation.

Create a setup script that:
- Installs all project dependencies
- Configures development environment
- Sets up database connections
- Initializes necessary services
- Validates the setup is working

Technology Stack: [INSERT TECH STACK]
Operating Systems: [INSERT TARGET OS - macOS, Linux, Windows]
```

### Configuration Generation
```
You are a Frontend Developer setting up build tools.

Create configuration files for:
- TypeScript configuration with strict settings
- ESLint configuration with team standards
- Prettier configuration for consistent formatting
- Webpack/Vite configuration for optimal builds
- Testing configuration with coverage requirements

Project Requirements: [INSERT REQUIREMENTS]
Team Preferences: [INSERT TEAM STANDARDS]
```

## Quality Gates

### Phase Completion Criteria
- [ ] Local development environment fully functional
- [ ] All team members can run the project locally
- [ ] CI/CD pipeline configured and tested
- [ ] Code quality tools integrated and working
- [ ] Database setup and migrations working
- [ ] Environment variables properly configured
- [ ] Development scripts and commands documented
- [ ] Team onboarding documentation complete

### AI Quality Checks
```
You are a Senior DevOps Engineer reviewing development setup.

Evaluate this setup for:
- Completeness: Are all necessary tools and configurations included?
- Security: Are secrets and sensitive data properly managed?
- Scalability: Will this setup work as the team grows?
- Maintainability: Are configurations well-documented and version-controlled?
- Performance: Are build and deployment times optimized?

Setup Configuration: [INSERT SETUP DETAILS]
```

## Environment Validation

### Local Development Test
```bash
# Test local setup
npm install
npm run dev
npm run test
npm run build
```

### Team Onboarding Test
- New team member can set up environment in under 30 minutes
- All development commands work without manual intervention
- Documentation is clear and complete
- Common issues are documented with solutions

## Common Pitfalls to Avoid

1. **Complex Setup**: Keep setup simple and well-documented
2. **Missing Dependencies**: Ensure all dependencies are specified
3. **Environment Inconsistencies**: Use containers or detailed documentation
4. **Slow Build Times**: Optimize build configuration from the start
5. **Poor Documentation**: Document every setup step and requirement

## Next Phase
Once all quality gates are met, proceed to **Phase 4: Implementation**.

```bash
persona-cli complete-phase
persona-cli start-phase implementation
```

## Templates and Examples
- **[Environment Setup Template](../prompts/development/environment-setup-template.md)**
- **[CI/CD Configuration Template](../prompts/deployment/ci-cd-template.md)**
- **[Project Structure Template](../prompts/development/project-structure-template.md)**
- **[TechGear Store Setup Examples](../../sample-project/scripts/)**

</final_file_content>

IMPORTANT: For any future changes to this file, use the final_file_content shown above as your reference. This content reflects the current state of the file, including any auto-formatting (e.g., if you used single quotes but the formatter converted them to double quotes). Always base your SEARCH/REPLACE operations on this final version to ensure accuracy.<environment_details>
# VSCode Visible Files
workflow-guide/phases/03-development-setup.md

# VSCode Open Tabs
extensions.json
nextjs-site/package.json
nextjs-site/src/app/layout.tsx
nextjs-site/src/components/Header.tsx
tools/persona-manager/src/cli.ts
tools/persona-manager/bin/persona-cli
workflow-guide/phases/01-discovery-planning.md
workflow-guide/phases/02-design-prototyping.md
workflow-guide/phases/03-development-setup.md

# Current Time
22/08/2025, 11:29:16 am (Europe/London, UTC+1:00)

# Context Window Usage
53,353 / 200K tokens used (27%)

# Current Mode
ACT MODE
</environment_details>
