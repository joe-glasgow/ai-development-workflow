import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function WorkflowsPage() {
  const workflows = [
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container-max section-padding">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI-Enhanced Workflow Templates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Proven development methodologies enhanced with AI assistance. 
            These workflows integrate AI tools at every stage to maximize efficiency and quality.
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Workflow Integration</h3>
            <p className="text-purple-800">
              Each workflow template includes specific AI integration points, recommended tools, 
              and measurable outcomes to help you implement AI-enhanced development processes.
            </p>
          </div>
        </div>

        {/* Workflows */}
        {workflows.map((workflow, workflowIndex) => (
          <div key={workflowIndex} className="mb-16 bg-white border border-gray-200 rounded-lg overflow-hidden">
            {/* Workflow Header */}
            <div className="bg-gray-50 p-8">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{workflow.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{workflow.name}</h2>
                  <p className="text-gray-600">{workflow.description}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Duration:</h4>
                  <p className="text-gray-600">{workflow.duration}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Team Size:</h4>
                  <p className="text-gray-600">{workflow.teamSize}</p>
                </div>
              </div>
            </div>

            {/* Workflow Phases */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow Phases</h3>
              <div className="space-y-6">
                {workflow.phases.map((phase, phaseIndex) => (
                  <div key={phaseIndex} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">{phase.name}</h4>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">AI Tools & Assistance:</h5>
                      <div className="flex flex-wrap gap-2">
                        {phase.aiTools.map((tool, toolIndex) => (
                          <span 
                            key={toolIndex}
                            className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {workflow.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <a 
                  href={`https://github.com/joe-glasgow/ai-development-workflow/blob/main/templates/workflow-templates/${workflow.name.toLowerCase().replace(' ', '-')}.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  View Complete Workflow
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Implementation Guide */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Implementation Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">🎯 Choose Your Workflow</h3>
              <p className="text-blue-800 mb-4">
                Select the workflow that best matches your project type, team size, and timeline requirements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">🛠️ Set Up AI Tools</h3>
              <p className="text-blue-800 mb-4">
                Configure the recommended AI tools and integrations for each phase of your chosen workflow.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">📊 Track Metrics</h3>
              <p className="text-blue-800 mb-4">
                Monitor key performance indicators to measure the effectiveness of your AI-enhanced workflow.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">🔄 Iterate & Improve</h3>
              <p className="text-blue-800 mb-4">
                Continuously refine your workflow based on results and team feedback to maximize benefits.
              </p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Metrics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">60-70%</div>
              <div className="text-gray-600">Faster Development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Code Quality Score</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
              <div className="text-gray-600">Deployment Time Reduction</div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6">
            Based on real-world implementation results from the TechGear Store sample project
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
