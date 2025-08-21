import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Personas - AI-Powered Development Workflow',
  description: 'Role-specific AI personas for software development. Expert-level AI assistants for project management, development, design, and more.',
  keywords: 'AI personas, software development roles, AI assistants, development team, project management, frontend developer, backend developer',
}

const personas = [
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    description: 'Focused on creating responsive, performant, and maintainable user interfaces using modern web technologies.',
    color: 'bg-blue-500',
    responsibilities: [
      'Component development and architecture',
      'Responsive design implementation', 
      'Performance optimization',
      'Accessibility implementation',
      'State management',
      'Testing and debugging'
    ],
    expertise: [
      'React, Vue, or Angular frameworks',
      'TypeScript and JavaScript',
      'CSS/SCSS and responsive design',
      'Performance optimization',
      'Testing frameworks (Jest, Cypress)',
      'Build tools (Webpack, Vite)',
      'Design system implementation'
    ],
    keyPrompts: [
      'Create reusable React components with TypeScript',
      'Implement responsive design for mobile and desktop',
      'Optimize bundle size and loading performance',
      'Add comprehensive unit and integration tests',
      'Implement accessibility features (ARIA, keyboard navigation)',
      'Set up state management with Redux/Zustand'
    ]
  },
  {
    id: 'backend-developer',
    title: 'Backend Developer',
    description: 'Specializes in server-side development, API design, database architecture, and system scalability.',
    color: 'bg-green-500',
    responsibilities: [
      'API development and design',
      'Database architecture and optimization',
      'Server infrastructure management',
      'Security implementation',
      'Performance monitoring',
      'Integration with third-party services'
    ],
    expertise: [
      'Node.js, Python, Java, or Go',
      'RESTful and GraphQL APIs',
      'Database design (SQL/NoSQL)',
      'Cloud platforms (AWS, GCP, Azure)',
      'Microservices architecture',
      'Security best practices',
      'DevOps and CI/CD'
    ],
    keyPrompts: [
      'Design scalable RESTful APIs',
      'Implement secure authentication and authorization',
      'Optimize database queries and performance',
      'Set up monitoring and logging systems',
      'Create comprehensive API documentation',
      'Implement caching strategies'
    ]
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    description: 'Coordinates project timelines, resources, and stakeholder communication to ensure successful delivery.',
    color: 'bg-purple-500',
    responsibilities: [
      'Project planning and scheduling',
      'Resource allocation and management',
      'Stakeholder communication',
      'Risk assessment and mitigation',
      'Progress tracking and reporting',
      'Team coordination and leadership'
    ],
    expertise: [
      'Agile and Scrum methodologies',
      'Project management tools',
      'Risk management',
      'Stakeholder management',
      'Budget planning and tracking',
      'Team leadership',
      'Communication strategies'
    ],
    keyPrompts: [
      'Create detailed project timelines and milestones',
      'Identify and mitigate project risks',
      'Facilitate effective team meetings',
      'Generate comprehensive project reports',
      'Optimize resource allocation',
      'Implement agile development processes'
    ]
  },
  {
    id: 'ux-designer',
    title: 'UX Designer',
    description: 'Creates user-centered designs through research, prototyping, and iterative design processes.',
    color: 'bg-pink-500',
    responsibilities: [
      'User research and analysis',
      'Wireframing and prototyping',
      'User journey mapping',
      'Usability testing',
      'Design system creation',
      'Accessibility design'
    ],
    expertise: [
      'User research methodologies',
      'Design tools (Figma, Sketch, Adobe)',
      'Prototyping and wireframing',
      'Usability testing',
      'Information architecture',
      'Accessibility standards',
      'Design systems'
    ],
    keyPrompts: [
      'Conduct user research and create personas',
      'Design intuitive user interfaces',
      'Create comprehensive design systems',
      'Perform usability testing and analysis',
      'Optimize user conversion funnels',
      'Ensure accessibility compliance'
    ]
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'Bridges development and operations through automation, infrastructure management, and deployment pipelines.',
    color: 'bg-orange-500',
    responsibilities: [
      'CI/CD pipeline development',
      'Infrastructure automation',
      'Monitoring and alerting',
      'Security implementation',
      'Performance optimization',
      'Disaster recovery planning'
    ],
    expertise: [
      'Cloud platforms (AWS, GCP, Azure)',
      'Container orchestration (Docker, Kubernetes)',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'CI/CD tools (Jenkins, GitHub Actions)',
      'Monitoring tools (Prometheus, Grafana)',
      'Security tools and practices',
      'Scripting and automation'
    ],
    keyPrompts: [
      'Set up automated deployment pipelines',
      'Implement infrastructure monitoring',
      'Create disaster recovery procedures',
      'Optimize cloud resource costs',
      'Implement security best practices',
      'Automate infrastructure provisioning'
    ]
  },
  {
    id: 'qa-engineer',
    title: 'QA Engineer',
    description: 'Ensures software quality through comprehensive testing strategies, automation, and quality assurance processes.',
    color: 'bg-red-500',
    responsibilities: [
      'Test strategy development',
      'Automated testing implementation',
      'Manual testing execution',
      'Bug tracking and reporting',
      'Quality metrics analysis',
      'Test documentation'
    ],
    expertise: [
      'Testing frameworks and tools',
      'Test automation (Selenium, Cypress)',
      'Performance testing',
      'Security testing',
      'API testing',
      'Mobile testing',
      'Quality assurance processes'
    ],
    keyPrompts: [
      'Create comprehensive test plans',
      'Implement automated testing suites',
      'Perform thorough regression testing',
      'Analyze and report quality metrics',
      'Set up continuous testing pipelines',
      'Conduct performance and load testing'
    ]
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Defines product strategy, prioritizes features, and ensures alignment between business goals and user needs.',
    color: 'bg-indigo-500',
    responsibilities: [
      'Product strategy development',
      'Feature prioritization',
      'Market research and analysis',
      'Stakeholder management',
      'Product roadmap planning',
      'User feedback analysis'
    ],
    expertise: [
      'Product strategy and planning',
      'Market research and analysis',
      'User experience design',
      'Data analysis and metrics',
      'Agile development processes',
      'Stakeholder communication',
      'Competitive analysis'
    ],
    keyPrompts: [
      'Develop comprehensive product roadmaps',
      'Analyze market trends and opportunities',
      'Prioritize features based on user value',
      'Create detailed product requirements',
      'Conduct competitive analysis',
      'Define and track product metrics'
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Extracts insights from data through statistical analysis, machine learning, and predictive modeling.',
    color: 'bg-teal-500',
    responsibilities: [
      'Data analysis and modeling',
      'Machine learning implementation',
      'Statistical analysis',
      'Data visualization',
      'Predictive modeling',
      'Data pipeline development'
    ],
    expertise: [
      'Python, R, and SQL',
      'Machine learning frameworks',
      'Statistical analysis',
      'Data visualization tools',
      'Big data technologies',
      'Cloud ML platforms',
      'Data engineering'
    ],
    keyPrompts: [
      'Analyze data patterns and trends',
      'Build predictive machine learning models',
      'Create insightful data visualizations',
      'Implement data processing pipelines',
      'Perform statistical hypothesis testing',
      'Optimize model performance and accuracy'
    ]
  },
  {
    id: 'mobile-developer',
    title: 'Mobile Developer',
    description: 'Develops native and cross-platform mobile applications with focus on performance and user experience.',
    color: 'bg-cyan-500',
    responsibilities: [
      'Mobile app development',
      'Cross-platform implementation',
      'Performance optimization',
      'App store deployment',
      'Mobile UI/UX design',
      'Device integration'
    ],
    expertise: [
      'React Native, Flutter, or native development',
      'iOS and Android platforms',
      'Mobile UI/UX patterns',
      'App store guidelines',
      'Mobile performance optimization',
      'Device APIs and integrations',
      'Mobile testing strategies'
    ],
    keyPrompts: [
      'Develop cross-platform mobile applications',
      'Optimize app performance and battery usage',
      'Implement native device integrations',
      'Create responsive mobile interfaces',
      'Set up mobile CI/CD pipelines',
      'Ensure app store compliance'
    ]
  }
]

export default function PersonasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-max py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Personas Library</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto">
              Role-specific AI personas that provide expert-level context and guidance for every aspect of software development
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How AI Personas Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Each persona provides specialized knowledge, communication style, and expert prompts tailored to specific roles in software development. 
              Use them to get consistent, professional-level AI assistance for any development task.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Knowledge</h3>
                <p className="text-gray-600">Each persona embodies deep expertise in their specific domain</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Consistent Communication</h3>
                <p className="text-gray-600">Professional communication style tailored to each role</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready-to-Use Prompts</h3>
                <p className="text-gray-600">Pre-crafted prompts for common tasks and scenarios</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personas Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-8">
            {personas.map((persona) => (
              <div key={persona.id} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${persona.color} rounded-lg flex items-center justify-center mr-4`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{persona.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{persona.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {persona.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Expertise Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {persona.expertise.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Sample Prompts</h4>
                  <div className="space-y-2">
                    {persona.keyPrompts.slice(0, 3).map((prompt, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <code className="text-sm text-gray-800">"{prompt}"</code>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guide */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use AI Personas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get the most out of AI personas by following these best practices for implementation and usage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Persona</h3>
              <p className="text-gray-600">Select the persona that matches your current task or role</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Set the Context</h3>
              <p className="text-gray-600">Provide the persona definition to your AI assistant</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Use Sample Prompts</h3>
              <p className="text-gray-600">Start with the provided prompts and adapt them to your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Iterate & Improve</h3>
              <p className="text-gray-600">Refine your prompts based on results and feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Use AI Personas?</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Download the complete persona templates and start improving your AI-assisted development workflow today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/joe-glasgow/ai-development-workflow/tree/main/templates/persona-templates" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="btn btn-primary">
                Download Personas
              </a>
              <a href="/templates" className="btn btn-secondary">
                Browse All Templates
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
