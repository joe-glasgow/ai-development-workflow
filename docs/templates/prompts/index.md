---
layout: default
title: Prompt Templates
parent: Templates
nav_order: 3
---

# Prompt Templates

AI prompt templates organized by development phase, with TechGear-inspired examples.

## Available Categories

### [Development Prompts](development/)
AI prompts for coding and implementation
- **Component Development** - React/Vue/Angular components
- **Backend Development** - API design and services
- **Testing** - Unit, integration, and E2E tests

### [Design Prompts](design/)
AI prompts for UI/UX design
- **Component Design** - Button, form, table components
- **Layout Design** - Dashboard and mobile layouts
- **Visual Design** - Color palettes and typography
- **Accessibility** - Screen reader and contrast compliance

### [Deployment Prompts](deployment/)
AI prompts for infrastructure and deployment
- **CI/CD Setup** - GitHub Actions and pipelines
- **Infrastructure** - Docker, Kubernetes, cloud platforms
- **Monitoring** - Application and infrastructure monitoring
- **Security** - Security scanning and access control

## Quick Reference

### Development Phase Prompts

| Task | Prompt Type | Example Use |
|------|-------------|-------------|
| **Component Creation** | Development | "Create a ProductCard component..." |
| **API Design** | Development | "Create a product API service..." |
| **Testing** | Development | "Create unit tests for..." |
| **UI Design** | Design | "Design a product catalog page..." |
| **Deployment** | Deployment | "Set up CI/CD pipeline..." |

### Example Prompts

#### Component Development
```
Create a ProductCard component for an e-commerce application with:
- Purpose: Display product information in a card format
- Props: product (Product), onAddToCart (function)
- Styling: Responsive card with hover effects
- Accessibility: Alt text, keyboard navigation
- Testing: Unit tests for rendering and interactions

Reference the TechGear Store product display patterns.
```

#### UI Design
```
Design a product catalog page with:
- Layout: Grid layout with filters and search
- Components: ProductCard, FilterPanel, SearchBar
- Interactions: Hover effects, quick add to cart
- Accessibility: Keyboard navigation, screen reader support
- Mobile: Responsive design with touch-friendly interactions
```

#### Deployment Setup
```
Create a GitHub Actions workflow for TechGear Store with:
- Triggers: Push to main, pull requests
- Build: React build, Node.js build
- Test: Unit tests, integration tests, E2E tests
- Lint: ESLint, Prettier, TypeScript checking
- Deploy: Staging deployment on success, production with approval
```

## Integration with Personas

### Development Prompts
- **FrontendDeveloper**: Component creation, styling, performance
- **BackendDeveloper**: API design, database, security
- **MobileDeveloper**: Mobile-specific components and features

### Design Prompts
- **UXDesigner**: User experience, accessibility, visual design
- **FrontendDeveloper**: Component implementation, responsive design

### Deployment Prompts
- **DevOpsEngineer**: Infrastructure, CI/CD, monitoring
- **BackendDeveloper**: Security, performance optimization

## Best Practices

### Using Prompts Effectively
1. **Be Specific**: Include detailed requirements and constraints
2. **Provide Context**: Reference existing code or design patterns
3. **Include Examples**: Show the expected output format
4. **Iterate**: Refine prompts based on AI responses

### Prompt Customization
- Replace placeholders with your specific requirements
- Add project-specific context and constraints
- Include performance and security requirements
- Reference your chosen tech stack

## Example Workflow

### 1. Planning Phase
- Use **ProjectManager** persona with planning prompts
- Define requirements and success criteria

### 2. Design Phase
- Use **UXDesigner** persona with design prompts
- Create wireframes and design systems

### 3. Development Phase
- Use **FrontendDeveloper** persona with development prompts
- Implement components and features

### 4. Testing Phase
- Use **QAEngineer** persona with testing prompts
- Create comprehensive test suites

### 5. Deployment Phase
- Use **DevOpsEngineer** persona with deployment prompts
- Set up CI/CD and monitoring

## Next Steps

- [Browse Development Prompts](development/)
- [Explore Design Prompts](design/)
- [Check Deployment Prompts](deployment/)
- [View Complete Example](../example-usage/) 