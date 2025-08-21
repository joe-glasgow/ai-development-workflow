import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PersonasPage() {
  const personas = [
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container-max section-padding">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Personas Library
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Role-specific AI personas that provide context and expertise for different aspects of software development. 
            Each persona brings specialized knowledge to enhance your AI-assisted workflow.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">How to Use Personas</h3>
            <p className="text-blue-800">
              Copy the persona context into your AI conversations to get specialized responses. 
              Each persona includes role-specific knowledge, best practices, and focused expertise.
            </p>
          </div>
        </div>

        {/* Personas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {personas.map((persona, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{persona.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{persona.name}</h3>
              <p className="text-gray-600 mb-4">{persona.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {persona.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Use Case:</h4>
                <p className="text-sm text-gray-600">{persona.useCase}</p>
              </div>
              
              <a 
                href={`https://github.com/joe-glasgow/ai-development-workflow/blob/main/templates/persona-templates/${persona.name.replace(' ', '')}.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                View Template
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Getting Started Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started with Personas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Choose Your Persona</h3>
              <p className="text-gray-600 mb-4">
                Select the persona that matches your current development phase or the expertise you need.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Copy the Template</h3>
              <p className="text-gray-600 mb-4">
                Use the GitHub template link to copy the persona context into your AI conversation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Customize for Your Project</h3>
              <p className="text-gray-600 mb-4">
                Adapt the persona context with your specific project details and requirements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Get Specialized Responses</h3>
              <p className="text-gray-600 mb-4">
                Receive role-specific guidance, best practices, and expert-level insights from your AI assistant.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
