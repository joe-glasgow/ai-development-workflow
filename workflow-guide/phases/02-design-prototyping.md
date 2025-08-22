# Phase 2: Design & Prototyping

## Overview
The design and prototyping phase transforms requirements into visual designs and interactive prototypes. This phase leverages AI to accelerate design creation, validate concepts, and establish the visual foundation for development.

## Duration
**Typical Timeline**: 1-2 weeks for most projects

## Key Personas
- **UX Designer**: User experience design and research
- **Product Manager**: Feature validation and user feedback
- **Frontend Developer**: Technical feasibility and implementation planning

## Phase Objectives
1. **User Experience Design**: Create intuitive user interfaces
2. **Visual Design System**: Establish consistent design patterns
3. **Prototype Creation**: Build interactive mockups for validation
4. **Design Validation**: Test concepts with users and stakeholders
5. **Technical Feasibility**: Ensure designs are implementable

## AI-Assisted Activities

### 1. User Interface Design
**Persona**: UX Designer
**Prompt Template**:
```
You are a UX Designer focused on creating intuitive user interfaces.

Design the user interface for [FEATURE/PAGE NAME]:
- Layout structure and information hierarchy
- Component specifications and interactions
- Responsive design considerations
- Accessibility requirements (WCAG 2.1 AA)
- User flow and navigation patterns
- Error states and loading indicators

Project Context: [INSERT PROJECT DETAILS]
User Personas: [INSERT TARGET USERS]
Brand Guidelines: [INSERT BRAND REQUIREMENTS]
```

### 2. Design System Creation
**Persona**: UX Designer
**Prompt Template**:
```
You are a UX Designer focused on scalable design systems.

Create a comprehensive design system including:
- Color palette with semantic naming
- Typography scale and hierarchy
- Component library specifications
- Spacing and layout guidelines
- Icon style and usage rules
- Animation and interaction patterns

Brand Requirements: [INSERT BRAND DETAILS]
Platform Targets: [INSERT PLATFORMS - web, mobile, etc.]
Accessibility Standards: [INSERT ACCESSIBILITY REQUIREMENTS]
```

### 3. Prototype Development
**Persona**: Frontend Developer
**Prompt Template**:
```
You are a Frontend Developer focused on rapid prototyping.

Create an interactive prototype for:
- Key user flows and interactions
- Component behavior and states
- Responsive layout validation
- Performance considerations
- Technical implementation notes

Design Specifications: [INSERT DESIGN DETAILS]
Technology Stack: [INSERT TECH STACK]
Prototype Scope: [INSERT FEATURES TO PROTOTYPE]
```

## Deliverables

### 1. Design System Documentation
- **Color Palette**: Primary, secondary, semantic colors with hex codes
- **Typography**: Font families, sizes, weights, line heights
- **Component Library**: Buttons, forms, cards, navigation elements
- **Layout Guidelines**: Grid system, spacing, breakpoints
- **Accessibility Standards**: Color contrast, focus states, ARIA patterns

### 2. User Interface Designs
- **Wireframes**: Low-fidelity layout structures
- **High-Fidelity Mockups**: Detailed visual designs
- **Responsive Designs**: Mobile, tablet, desktop variations
- **Component Specifications**: Detailed component documentation
- **User Flow Diagrams**: Navigation and interaction patterns

### 3. Interactive Prototypes
- **Clickable Prototypes**: Figma, Adobe XD, or code-based prototypes
- **User Testing Results**: Feedback and validation findings
- **Iteration Documentation**: Design changes and rationale
- **Technical Notes**: Implementation considerations and constraints

### 4. Design Validation Report
- **User Testing Results**: Usability findings and recommendations
- **Stakeholder Feedback**: Business and technical validation
- **Accessibility Audit**: WCAG compliance assessment
- **Performance Considerations**: Design impact on loading and rendering

## AI Workflow Integration

### Phase Management
```bash
# Continue from discovery phase
persona-cli start-phase design

# Check current status
persona-cli status
```

### Persona Usage Pattern
1. **Start with UX Designer** for initial concepts
2. **Involve Product Manager** for feature validation
3. **Consult Frontend Developer** for technical feasibility
4. **Return to UX Designer** for refinements

### Design Generation Workflow
```
# Step 1: Generate initial concepts
You are a UX Designer creating initial design concepts.

Create 3 different layout concepts for [PAGE/FEATURE]:
- Concept A: Minimalist approach
- Concept B: Feature-rich approach  
- Concept C: Mobile-first approach

Include wireframes and brief rationale for each concept.

# Step 2: Develop chosen concept
You are a UX Designer developing detailed designs.

Take Concept [A/B/C] and create:
- Detailed component specifications
- Responsive behavior documentation
- Interaction and animation details
- Accessibility considerations

# Step 3: Create design system
You are a UX Designer building scalable design systems.

Based on the approved designs, create:
- Reusable component library
- Design tokens and variables
- Usage guidelines and examples
```

## Quality Gates

### Phase Completion Criteria
- [ ] Design system established with all core components
- [ ] High-fidelity designs completed for all key screens
- [ ] Responsive designs validated across device sizes
- [ ] Interactive prototypes created for main user flows
- [ ] User testing conducted with actionable feedback
- [ ] Accessibility requirements documented and validated
- [ ] Technical feasibility confirmed by development team
- [ ] Stakeholder approval obtained for final designs

### AI Quality Checks
```
You are a Senior UX Designer reviewing design deliverables.

Evaluate these designs for:
- User Experience: Are the interfaces intuitive and user-friendly?
- Consistency: Do designs follow established patterns and guidelines?
- Accessibility: Are WCAG 2.1 AA standards met?
- Technical Feasibility: Can these designs be implemented efficiently?
- Brand Alignment: Do designs reflect brand values and guidelines?

Design Package: [INSERT DESIGN DETAILS]
```

## Design Tools Integration

### AI-Powered Design Generation
- **Midjourney/DALL-E**: Generate visual concepts and imagery
- **ChatGPT/Claude**: Create design specifications and documentation
- **GitHub Copilot**: Generate CSS and component code from designs

### Design Validation
- **User Testing**: Use AI to generate testing scripts and analyze feedback
- **Accessibility Audits**: AI-assisted WCAG compliance checking
- **Performance Analysis**: Predict design impact on loading times

## Common Pitfalls to Avoid

1. **Design Without Context**: Always consider technical constraints
2. **Inconsistent Patterns**: Establish and follow design system rules
3. **Accessibility Afterthought**: Build accessibility in from the start
4. **Over-Designing**: Focus on MVP features, avoid feature creep
5. **No User Validation**: Test designs with real users early and often

## Next Phase
Once all quality gates are met, proceed to **Phase 3: Development Setup**.

```bash
persona-cli complete-phase
persona-cli start-phase development
```

## Templates and Examples
- **[UI Design Template](../prompts/design/ui-design-template.md)**
- **[Design System Template](../prompts/design/design-system-template.md)**
- **[Prototype Testing Template](../prompts/design/prototype-testing-template.md)**
- **[TechGear Store Design Examples](../../sample-project/design/)**
