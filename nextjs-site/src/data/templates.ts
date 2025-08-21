// Shared template data to eliminate duplication across pages

export interface Persona {
  name: string
  description: string
  skills: string[]
  useCase: string
  icon: string
}

export interface PromptTemplate {
  name: string
  description: string
  useCase: string
  tags: string[]
}

export interface PromptCategory {
  category: string
  description: string
  icon: string
  prompts: PromptTemplate[]
}

export interface WorkflowPhase {
  name: string
  description: string
  duration: string
  aiTools: string[]
}

export interface Workflow {
  name: string
  description: string
  duration: string
  teamSize: string
  icon: string
  phases: WorkflowPhase[]
  benefits: string[]
}

export interface ProjectTemplate {
  name: string
  description: string
  complexity: string
  duration: string
  icon: string
  techStack: {
    frontend: string[]
    backend: string[]
    database: string[]
    deployment: string[]
  }
  features: string[]
  useCase: string
  aiAssistance: string[]
}

// Personas data
export const personas: Persona[] = [
  {
    name: "Project Manager",
    description: "Planning, coordination, and project oversight with AI assistance",
    skills: ["Project Planning", "Resource Management", "Risk Assessment", "Stakeholder Communication"],
    useCase: "Coordinate development phases, manage timelines, and ensure deliverables meet requirements",
    icon: "📋"
  },
  {
    name: "Product Manager", 
    description: "Feature prioritization and product strategy with data-driven insights",
    skills: ["Feature Prioritization", "Market Analysis", "User Research", "Roadmap Planning"],
    useCase: "Define product requirements, analyze user feedback, and guide feature development",
    icon: "🎯"
  },
  {
    name: "UX Designer",
    description: "User experience design and interface optimization",
    skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    useCase: "Create intuitive interfaces, conduct user research, and optimize user journeys",
    icon: "🎨"
  },
  {
    name: "Frontend Developer",
    description: "UI implementation and client-side development",
    skills: ["React/Vue/Angular", "CSS/Tailwind", "JavaScript/TypeScript", "Responsive Design"],
    useCase: "Build interactive user interfaces, implement designs, and optimize performance",
    icon: "💻"
  },
  {
    name: "Backend Developer",
    description: "Server-side logic and API development",
    skills: ["API Design", "Database Management", "Authentication", "Performance Optimization"],
    useCase: "Create robust APIs, manage data flow, and ensure system scalability",
    icon: "⚙️"
  },
  {
    name: "Mobile Developer",
    description: "Cross-platform mobile application development",
    skills: ["React Native", "Flutter", "iOS/Android", "Mobile UX"],
    useCase: "Build native mobile experiences with cross-platform efficiency",
    icon: "📱"
  },
  {
    name: "DevOps Engineer",
    description: "Deployment, infrastructure, and automation",
    skills: ["CI/CD", "Cloud Platforms", "Containerization", "Monitoring"],
    useCase: "Automate deployments, manage infrastructure, and ensure system reliability",
    icon: "🚀"
  },
  {
    name: "QA Engineer",
    description: "Testing strategies and quality assurance",
    skills: ["Test Automation", "Bug Tracking", "Performance Testing", "Quality Metrics"],
    useCase: "Ensure code quality, automate testing processes, and maintain high standards",
    icon: "🔍"
  },
  {
    name: "Data Scientist",
    description: "Data analysis and machine learning insights",
    skills: ["Data Analysis", "Machine Learning", "Statistical Modeling", "Data Visualization"],
    useCase: "Extract insights from data, build predictive models, and drive data-driven decisions",
    icon: "📊"
  }
]

// Prompt categories data
export const promptCategories: PromptCategory[] = [
  {
    category: "Development Prompts",
    description: "AI prompts for coding, architecture, and technical implementation",
    icon: "💻",
    prompts: [
      {
        name: "Component Development",
        description: "Create reusable React/Vue components with best practices",
        useCase: "Building UI components with proper TypeScript types and accessibility",
        tags: ["React", "Vue", "TypeScript", "Accessibility"]
      },
      {
        name: "API Design",
        description: "Design RESTful APIs and GraphQL schemas",
        useCase: "Creating scalable backend APIs with proper documentation",
        tags: ["REST", "GraphQL", "OpenAPI", "Documentation"]
      },
      {
        name: "Database Schema",
        description: "Design efficient database structures and relationships",
        useCase: "Creating normalized database schemas with proper indexing",
        tags: ["SQL", "NoSQL", "Indexing", "Performance"]
      },
      {
        name: "Testing Strategy",
        description: "Comprehensive testing approaches for different scenarios",
        useCase: "Unit, integration, and e2e testing with proper coverage",
        tags: ["Jest", "Cypress", "Testing Library", "Coverage"]
      }
    ]
  },
  {
    category: "Design Prompts",
    description: "AI prompts for UI/UX design and visual development",
    icon: "🎨",
    prompts: [
      {
        name: "UI Design System",
        description: "Create consistent design systems and component libraries",
        useCase: "Building scalable design systems with tokens and guidelines",
        tags: ["Design System", "Tokens", "Components", "Guidelines"]
      },
      {
        name: "User Experience Flow",
        description: "Design intuitive user journeys and interactions",
        useCase: "Mapping user flows and optimizing conversion paths",
        tags: ["User Flow", "UX", "Conversion", "Analytics"]
      },
      {
        name: "Responsive Design",
        description: "Create mobile-first responsive layouts",
        useCase: "Building adaptive interfaces for all device sizes",
        tags: ["Mobile-First", "Breakpoints", "Grid", "Flexbox"]
      },
      {
        name: "Accessibility Audit",
        description: "Ensure WCAG compliance and inclusive design",
        useCase: "Making applications accessible to all users",
        tags: ["WCAG", "Screen Readers", "Keyboard Navigation", "Color Contrast"]
      }
    ]
  },
  {
    category: "Deployment Prompts",
    description: "AI prompts for DevOps, CI/CD, and infrastructure",
    icon: "🚀",
    prompts: [
      {
        name: "CI/CD Pipeline",
        description: "Automated build, test, and deployment workflows",
        useCase: "Setting up continuous integration and deployment",
        tags: ["GitHub Actions", "Jenkins", "Docker", "Kubernetes"]
      },
      {
        name: "Cloud Infrastructure",
        description: "Scalable cloud architecture and resource management",
        useCase: "Deploying applications on AWS, Azure, or GCP",
        tags: ["AWS", "Azure", "GCP", "Terraform"]
      },
      {
        name: "Performance Monitoring",
        description: "Application monitoring and performance optimization",
        useCase: "Setting up monitoring, logging, and alerting systems",
        tags: ["Monitoring", "Logging", "Alerts", "Performance"]
      },
      {
        name: "Security Hardening",
        description: "Security best practices and vulnerability assessment",
        useCase: "Implementing security measures and compliance",
        tags: ["Security", "HTTPS", "Authentication", "Compliance"]
      }
    ]
  }
]

// Workflows data
export const workflows: Workflow[] = [
  {
    name: "Agile Development",
    description: "Sprint-based iterative development with AI-enhanced planning and execution",
    duration: "2-4 weeks per sprint",
    teamSize: "3-8 developers",
    icon: "🔄",
    phases: [
      {
        name: "Sprint Planning",
        description: "AI-assisted story estimation and sprint goal definition",
        duration: "4-8 hours",
        aiTools: ["Story point estimation", "Risk assessment", "Capacity planning"]
      },
      {
        name: "Daily Development",
        description: "Continuous development with AI pair programming",
        duration: "Daily",
        aiTools: ["Code generation", "Bug detection", "Code review assistance"]
      },
      {
        name: "Sprint Review",
        description: "Demo and retrospective with AI-generated insights",
        duration: "2-4 hours",
        aiTools: ["Performance metrics", "User feedback analysis", "Improvement suggestions"]
      }
    ],
    benefits: [
      "60-70% faster development cycles",
      "Improved code quality through AI review",
      "Better sprint planning accuracy",
      "Automated documentation generation"
    ]
  },
  {
    name: "Design Sprint",
    description: "5-day rapid prototyping process enhanced with AI design assistance",
    duration: "5 days",
    teamSize: "4-6 team members",
    icon: "⚡",
    phases: [
      {
        name: "Understand & Define",
        description: "Problem definition and user research with AI insights",
        duration: "Day 1",
        aiTools: ["User persona generation", "Market research analysis", "Problem statement refinement"]
      },
      {
        name: "Ideate & Decide",
        description: "Solution brainstorming and concept selection",
        duration: "Day 2-3",
        aiTools: ["Idea generation", "Concept evaluation", "Design pattern suggestions"]
      },
      {
        name: "Prototype & Test",
        description: "Rapid prototyping and user testing",
        duration: "Day 4-5",
        aiTools: ["Prototype generation", "Test script creation", "Results analysis"]
      }
    ],
    benefits: [
      "Rapid validation of ideas",
      "AI-generated design alternatives",
      "Automated user testing insights",
      "Faster time-to-market"
    ]
  },
  {
    name: "Continuous Deployment",
    description: "Automated delivery pipeline with AI-powered quality gates",
    duration: "Ongoing",
    teamSize: "2-10 developers",
    icon: "🚀",
    phases: [
      {
        name: "Code Integration",
        description: "Automated testing and quality checks",
        duration: "Minutes",
        aiTools: ["Automated testing", "Code quality analysis", "Security scanning"]
      },
      {
        name: "Staging Deployment",
        description: "Automated deployment to staging environment",
        duration: "5-15 minutes",
        aiTools: ["Environment provisioning", "Performance testing", "Smoke testing"]
      },
      {
        name: "Production Release",
        description: "Automated production deployment with monitoring",
        duration: "10-30 minutes",
        aiTools: ["Blue-green deployment", "Health monitoring", "Rollback automation"]
      }
    ],
    benefits: [
      "Reduced deployment time by 80%",
      "Automated quality assurance",
      "Zero-downtime deployments",
      "Continuous monitoring and alerts"
    ]
  }
]

// Project templates data
export const projectTemplates: ProjectTemplate[] = [
  {
    name: "Basic Web App",
    description: "Full-stack web application with modern frontend and backend",
    complexity: "Beginner to Intermediate",
    duration: "2-4 weeks",
    icon: "🌐",
    techStack: {
      frontend: ["React", "Vue.js", "Angular"],
      backend: ["Node.js", "Python", "Go"],
      database: ["PostgreSQL", "MongoDB", "SQLite"],
      deployment: ["Vercel", "Netlify", "Heroku"]
    },
    features: [
      "User authentication and authorization",
      "CRUD operations with database",
      "Responsive design with CSS framework",
      "API integration and data fetching",
      "Form validation and error handling",
      "Basic SEO optimization"
    ],
    useCase: "Perfect for portfolio projects, small business websites, or learning full-stack development",
    aiAssistance: [
      "Component generation and styling",
      "API endpoint creation",
      "Database schema design",
      "Testing strategy development"
    ]
  },
  {
    name: "Mobile App",
    description: "Cross-platform mobile application with native performance",
    complexity: "Intermediate to Advanced",
    duration: "4-8 weeks",
    icon: "📱",
    techStack: {
      frontend: ["React Native", "Flutter", "Expo"],
      backend: ["Firebase", "Supabase", "Node.js"],
      database: ["Firestore", "SQLite", "Realm"],
      deployment: ["App Store", "Google Play", "TestFlight"]
    },
    features: [
      "Cross-platform compatibility (iOS/Android)",
      "Native device features integration",
      "Offline data synchronization",
      "Push notifications",
      "In-app purchases (optional)",
      "Performance optimization"
    ],
    useCase: "Ideal for startups, mobile-first businesses, or developers wanting to reach mobile users",
    aiAssistance: [
      "UI/UX design for mobile interfaces",
      "Navigation flow optimization",
      "Performance monitoring setup",
      "App store optimization"
    ]
  },
  {
    name: "SaaS Dashboard",
    description: "Multi-tenant SaaS application with analytics and billing",
    complexity: "Advanced",
    duration: "8-16 weeks",
    icon: "📊",
    techStack: {
      frontend: ["Next.js", "React", "TypeScript"],
      backend: ["Node.js", "Python", "Microservices"],
      database: ["PostgreSQL", "Redis", "ClickHouse"],
      deployment: ["AWS", "GCP", "Azure"]
    },
    features: [
      "Multi-tenant architecture",
      "Role-based access control",
      "Real-time analytics dashboard",
      "Subscription billing integration",
      "API rate limiting and monitoring",
      "Advanced security features"
    ],
    useCase: "Perfect for B2B software companies, enterprise solutions, or complex data-driven applications",
    aiAssistance: [
      "Dashboard layout and visualization",
      "Multi-tenant database design",
      "Billing system integration",
      "Security audit and recommendations"
    ]
  }
]

// Common UI patterns and constants
export const commonPatterns = {
  quickStartSteps: [
    {
      step: 1,
      title: "Choose Your Template",
      description: "Select the template that best matches your goals and experience level"
    },
    {
      step: 2,
      title: "Clone & Setup", 
      description: "Clone the template repository and follow the setup instructions"
    },
    {
      step: 3,
      title: "Customize with AI",
      description: "Use AI assistance to customize the template for your specific requirements"
    },
    {
      step: 4,
      title: "Deploy & Iterate",
      description: "Deploy your application and continue improving with AI-guided development"
    }
  ],
  
  successMetrics: [
    { value: "60-70%", label: "Faster Development", color: "primary" },
    { value: "95%", label: "Code Quality Score", color: "green" },
    { value: "80%", label: "Deployment Time Reduction", color: "blue" }
  ],

  gettingStartedLinks: [
    {
      title: "Learn the Basics",
      description: "Start with our workflow guide to understand AI-assisted development principles.",
      href: "/workflow-guide",
      icon: "book" as const,
      color: "green" as const
    },
    {
      title: "Explore Templates", 
      description: "Browse our complete template library including personas and prompts.",
      href: "/templates",
      icon: "template" as const,
      color: "blue" as const
    },
    {
      title: "See It in Action",
      description: "Check out our live TechGear Store demo to see the results.",
      href: "/sample-project", 
      icon: "demo" as const,
      color: "purple" as const
    }
  ]
}

// Utility functions
export const getGitHubTemplateUrl = (type: string, name: string): string => {
  const baseUrl = "https://github.com/joe-glasgow/ai-development-workflow/blob/main/templates"
  const formattedName = name.toLowerCase().replace(/\s+/g, '-')
  
  switch (type) {
    case 'persona':
      return `${baseUrl}/persona-templates/${name.replace(' ', '')}.md`
    case 'prompt':
      return `${baseUrl}/prompt-templates/${formattedName}.md`
    case 'workflow':
      return `${baseUrl}/workflow-templates/${formattedName}.md`
    case 'project':
      return `${baseUrl}/project-templates/${formattedName}`
    default:
      return baseUrl
  }
}
