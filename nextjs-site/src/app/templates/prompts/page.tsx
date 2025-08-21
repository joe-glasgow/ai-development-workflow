import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PromptsPage() {
  const promptCategories = [
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container-max section-padding">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Prompt Library
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Curated collection of AI prompts for every stage of software development. 
            From initial design to deployment, these prompts help you get better results from AI assistants.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-green-900 mb-2">Prompt Engineering Tips</h3>
            <p className="text-green-800">
              Be specific about your requirements, provide context about your project, 
              and iterate on prompts to get the best results from your AI assistant.
            </p>
          </div>
        </div>

        {/* Prompt Categories */}
        {promptCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center mb-8">
              <span className="text-4xl mr-4">{category.icon}</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.category}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {category.prompts.map((prompt, promptIndex) => (
                <div key={promptIndex} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{prompt.name}</h3>
                  <p className="text-gray-600 mb-4">{prompt.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Use Case:</h4>
                    <p className="text-sm text-gray-600">{prompt.useCase}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {prompt.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={`https://github.com/joe-glasgow/ai-development-workflow/blob/main/templates/prompt-templates/${category.category.toLowerCase().replace(' ', '-')}/${prompt.name.toLowerCase().replace(' ', '-')}.md`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    View Prompt Template
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Best Practices Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prompt Engineering Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 Be Specific</h3>
              <p className="text-gray-600 mb-4">
                Provide clear requirements, constraints, and expected outcomes. The more specific you are, 
                the better the AI can understand and deliver what you need.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📋 Provide Context</h3>
              <p className="text-gray-600 mb-4">
                Include information about your project, tech stack, team size, and any existing patterns 
                or conventions you follow.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🔄 Iterate and Refine</h3>
              <p className="text-gray-600 mb-4">
                Start with a basic prompt and refine it based on the results. Ask follow-up questions 
                to get exactly what you need.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📚 Use Examples</h3>
              <p className="text-gray-600 mb-4">
                Provide examples of what you want or don't want. This helps the AI understand 
                your preferences and style.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Quick Start Guide</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Choose Your Category</h3>
                <p className="text-blue-800">Select the prompt category that matches your current development phase.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Copy the Template</h3>
                <p className="text-blue-800">Use the GitHub link to access the full prompt template with examples.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Customize for Your Project</h3>
                <p className="text-blue-800">Adapt the prompt with your specific requirements, tech stack, and constraints.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Get Better Results</h3>
                <p className="text-blue-800">Use the optimized prompt to get more accurate and useful responses from your AI assistant.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
