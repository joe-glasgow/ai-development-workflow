# Phase 1: Discovery & Planning

## Overview
The discovery and planning phase establishes the foundation for your AI-powered development project. This phase focuses on understanding requirements, defining scope, and setting up the project structure for success.

## Duration
**Typical Timeline**: 1-2 weeks for most projects

## Key Personas
- **Project Manager**: Overall coordination and timeline management
- **Product Manager**: Feature prioritization and user requirements
- **UX Designer**: User research and initial concept validation

## Phase Objectives
1. **Requirements Gathering**: Define what needs to be built
2. **Scope Definition**: Establish project boundaries and constraints
3. **Technical Planning**: Choose technology stack and architecture
4. **Team Setup**: Assign roles and establish communication patterns
5. **Success Metrics**: Define measurable outcomes

## AI-Assisted Activities

### 1. Requirements Analysis
**Persona**: Product Manager
**Prompt Template**:
```
You are a Product Manager focused on user-centric solutions.

Analyze the following project concept and help define:
- Core user needs and pain points
- MVP feature set with prioritization
- User personas and target audience
- Success metrics and KPIs
- Competitive landscape analysis

Project Concept: [INSERT YOUR PROJECT DESCRIPTION]
Target Users: [INSERT TARGET USER DESCRIPTION]
Business Goals: [INSERT BUSINESS OBJECTIVES]
```

### 2. Technical Architecture Planning
**Persona**: Backend Developer + Frontend Developer
**Prompt Template**:
```
You are a Technical Architect with expertise in full-stack development.

Design the technical architecture for this project:
- Technology stack recommendations
- Database schema design
- API structure and endpoints
- Frontend component architecture
- Third-party integrations needed
- Scalability considerations
- Security requirements

Project Requirements: [INSERT REQUIREMENTS]
Expected Scale: [INSERT USER/TRAFFIC EXPECTATIONS]
Performance Goals: [INSERT PERFORMANCE REQUIREMENTS]
```

### 3. Project Planning
**Persona**: Project Manager
**Prompt Template**:
```
You are a Project Manager focused on delivering high-quality software projects.

Create a detailed project plan including:
- Work breakdown structure
- Timeline with milestones
- Resource allocation
- Risk assessment and mitigation
- Dependencies and critical path
- Quality gates and checkpoints

Project Scope: [INSERT SCOPE DETAILS]
Team Size: [INSERT TEAM COMPOSITION]
Timeline: [INSERT DEADLINE/CONSTRAINTS]
```

## Deliverables

### 1. Project Requirements Document (PRD)
- **User Stories**: Detailed user requirements
- **Functional Requirements**: What the system must do
- **Non-Functional Requirements**: Performance, security, scalability
- **Acceptance Criteria**: Definition of done for each feature

### 2. Technical Architecture Document
- **System Architecture**: High-level system design
- **Technology Stack**: Chosen technologies with justification
- **Database Design**: Schema and relationships
- **API Specification**: Endpoints and data contracts
- **Security Plan**: Authentication, authorization, data protection

### 3. Project Plan
- **Timeline**: Phases, milestones, and deadlines
- **Resource Plan**: Team roles and responsibilities
- **Risk Register**: Identified risks and mitigation strategies
- **Communication Plan**: Meetings, reporting, and collaboration tools

### 4. Success Metrics Framework
- **Business Metrics**: Revenue, user adoption, engagement
- **Technical Metrics**: Performance, reliability, maintainability
- **Quality Metrics**: Test coverage, bug rates, user satisfaction
- **Development Metrics**: Velocity, cycle time, deployment frequency

## AI Workflow Integration

### Setup Project Tracking
```bash
# Initialize project with AI workflow
persona-cli init my-project

# Start discovery phase
cd my-project
persona-cli start-phase discovery
```

### Persona Usage Pattern
1. **Start with Product Manager** for user requirements
2. **Switch to Project Manager** for planning and coordination
3. **Use Technical Architect** for system design
4. **Involve UX Designer** for user experience planning

### Documentation Generation
Use AI to generate comprehensive documentation:
```
You are a Technical Writer focused on clear, comprehensive documentation.

Create a Project Requirements Document based on:
- User research findings: [INSERT RESEARCH]
- Technical architecture: [INSERT ARCHITECTURE]
- Project timeline: [INSERT TIMELINE]
- Success metrics: [INSERT METRICS]

Format as a professional PRD with sections for overview, requirements, architecture, timeline, and success criteria.
```

## Quality Gates

### Phase Completion Criteria
- [ ] All user stories defined with acceptance criteria
- [ ] Technical architecture reviewed and approved
- [ ] Project timeline established with realistic milestones
- [ ] Team roles and responsibilities assigned
- [ ] Risk assessment completed with mitigation plans
- [ ] Success metrics defined and measurable
- [ ] Development environment requirements specified
- [ ] Stakeholder sign-off obtained

### AI Quality Checks
Use AI to validate your planning:
```
You are a Senior Technical Consultant reviewing project plans.

Review this project plan for:
- Completeness: Are all necessary components covered?
- Feasibility: Is the timeline realistic given the scope?
- Risk Assessment: Are major risks identified and addressed?
- Technical Soundness: Is the architecture appropriate for requirements?
- Success Metrics: Are the metrics measurable and meaningful?

Project Plan: [INSERT YOUR PLAN]
```

## Common Pitfalls to Avoid

1. **Scope Creep**: Clearly define MVP vs future features
2. **Over-Engineering**: Choose appropriate complexity for project size
3. **Unclear Requirements**: Ensure all stakeholders understand the scope
4. **Unrealistic Timelines**: Account for complexity and unknowns
5. **Missing Non-Functionals**: Don't forget performance, security, accessibility

## Next Phase
Once all quality gates are met, proceed to **Phase 2: Design & Prototyping**.

```bash
persona-cli complete-phase
persona-cli start-phase design
```

## Templates and Examples
- **[Project Requirements Template](../prompts/planning/requirements-template.md)**
- **[Architecture Planning Template](../prompts/planning/architecture-template.md)**
- **[Risk Assessment Template](../prompts/planning/risk-assessment-template.md)**
- **[TechGear Store Example](../../sample-project/ai-workflow-logs/phase-1-planning/)**
