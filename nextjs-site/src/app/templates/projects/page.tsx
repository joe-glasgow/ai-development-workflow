import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ProjectsPage() {
  const projectTemplates = [
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

  const quickStartSteps = [
    {
      step: 1,
      title: "Choose Your Template",
      description: "Select the project template that best matches your goals and experience level"
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
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container-max section-padding">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI-Ready Project Templates
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Production-ready project templates optimized for AI-assisted development. 
            Each template includes best practices, modern tech stacks, and AI integration points.
          </p>
          <div className="glass-card border border-orange-500/30 p-6 max-w-4xl mx-auto hover:shadow-glass-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-orange-300 mb-2">AI-First Development</h3>
            <p className="text-slate-300">
              These templates are designed to maximize AI assistance throughout the development process, 
              from initial setup to deployment and maintenance.
            </p>
          </div>
        </div>

        {/* Project Templates */}
        {projectTemplates.map((template, templateIndex) => (
          <div key={templateIndex} className="mb-16 glass-card overflow-hidden hover:shadow-glass-xl transition-all duration-300">
            {/* Template Header */}
            <div className="glass-light p-8">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{template.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{template.name}</h2>
                  <p className="text-slate-300 mb-4">{template.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="glass-medium text-blue-200 px-3 py-1 rounded-full border border-blue-500/30">
                      {template.complexity}
                    </span>
                    <span className="glass-medium text-green-200 px-3 py-1 rounded-full border border-green-500/30">
                      {template.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Tech Stack Options</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Object.entries(template.techStack).map(([category, technologies]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-white mb-2 capitalize">{category}:</h4>
                      <div className="space-y-1">
                        {technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="text-sm text-slate-300 glass-light px-2 py-1 rounded border border-glass-border-light">
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {template.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Case */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Perfect For</h3>
                <p className="text-slate-300 glass-light p-4 rounded-lg border border-glass-border-light">{template.useCase}</p>
              </div>

              {/* AI Assistance */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">AI Assistance Included</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {template.aiAssistance.map((assistance, assistanceIndex) => (
                    <div key={assistanceIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <span className="text-slate-300">{assistance}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`https://github.com/joe-glasgow/ai-development-workflow/tree/main/templates/project-templates/${template.name.toLowerCase().replace(' ', '-')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Template
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a 
                  href="/sample-project"
                  className="btn btn-secondary"
                >
                  View Live Demo
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Quick Start Guide */}
        <div className="glass-card border border-blue-500/30 p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Quick Start Guide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartSteps.map((step, stepIndex) => (
              <div key={stepIndex} className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="glass-light border border-green-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Learn the Basics</h3>
              <p className="text-slate-300 mb-4">Start with our workflow guide to understand AI-assisted development principles.</p>
              <a href="/workflow-guide" className="text-green-400 hover:text-green-300 font-medium transition-colors">
                View Workflow Guide →
              </a>
            </div>
            <div className="text-center">
              <div className="glass-light border border-blue-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Explore Templates</h3>
              <p className="text-slate-300 mb-4">Browse our complete template library including personas and prompts.</p>
              <a href="/templates" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                Browse All Templates →
              </a>
            </div>
            <div className="text-center">
              <div className="glass-light border border-purple-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">See It in Action</h3>
              <p className="text-slate-300 mb-4">Check out our live TechGear Store demo to see the results.</p>
              <a href="/sample-project" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                View Live Demo →
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
