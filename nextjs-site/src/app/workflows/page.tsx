import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Powered Workflows - AI-Powered Development Workflow',
  description: 'Complete development methodologies with AI integration. Agile development, design sprints, and continuous deployment workflows with AI assistance.',
  keywords: 'agile development, design sprint, continuous deployment, AI workflows, development methodologies, software development process',
}

const workflows = [
  {
    id: 'agile-development',
    title: 'Agile Development',
    description: 'Sprint-based iterative development with AI assistance for planning, development, and retrospectives.',
    duration: '2-4 week sprints',
    complexity: 'Intermediate',
    color: 'bg-green-500',
    icon: '🔄',
    phases: [
      {
        name: 'Sprint Planning',
        duration: '4-8 hours',
        activities: [
          'Review and prioritize user stories',
          'Estimate story points with AI assistance',
          'Define acceptance criteria',
          'Identify dependencies and blockers'
        ]
      },
      {
        name: 'Development Cycles',
        duration: '1-2 weeks',
        activities: [
          'Feature development with AI code generation',
          'Automated code reviews',
          'AI-assisted testing',
          'Continuous documentation'
        ]
      },
      {
        name: 'Sprint Review & Retrospective',
        duration: '2-4 hours',
        activities: [
          'Demo completed features',
          'Gather stakeholder feedback',
          'AI-powered process analysis',
          'Plan improvements for next sprint'
        ]
      }
    ],
    aiIntegration: [
      'Story point estimation based on historical data',
      'Automated code generation and review',
      'Intelligent testing and bug detection',
      'Process improvement suggestions'
    ],
    tools: ['Jira/Linear', 'GitHub/GitLab', 'Slack/Teams', 'AI Code Assistants'],
    metrics: ['Velocity', 'Burndown', 'Quality', 'Team Health']
  },
  {
    id: 'design-sprint',
    title: 'Design Sprint',
    description: '5-day rapid prototyping methodology to solve problems and test solutions with users.',
    duration: '5 days',
    complexity: 'Advanced',
    color: 'bg-blue-500',
    icon: '⚡',
    phases: [
      {
        name: 'Understand (Day 1)',
        duration: '1 day',
        activities: [
          'Expert interviews and research',
          'User journey mapping',
          'Problem framing with AI insights',
          'Goal setting and success metrics'
        ]
      },
      {
        name: 'Sketch (Day 2)',
        duration: '1 day',
        activities: [
          'Lightning demos and inspiration',
          'AI-assisted solution sketching',
          'Crazy 8s ideation exercise',
          'Solution presentation and feedback'
        ]
      },
      {
        name: 'Decide (Day 3)',
        duration: '1 day',
        activities: [
          'Solution review and voting',
          'Storyboard creation',
          'User flow mapping',
          'Prototype planning with AI tools'
        ]
      },
      {
        name: 'Prototype (Day 4)',
        duration: '1 day',
        activities: [
          'AI-accelerated prototype creation',
          'User testing preparation',
          'Interview script development',
          'Prototype refinement'
        ]
      },
      {
        name: 'Test (Day 5)',
        duration: '1 day',
        activities: [
          'User interviews and testing',
          'AI-powered feedback analysis',
          'Insights synthesis',
          'Next steps and roadmap planning'
        ]
      }
    ],
    aiIntegration: [
      'User research synthesis and pattern recognition',
      'AI-generated design concepts and variations',
      'Automated prototype generation',
      'Intelligent user feedback analysis'
    ],
    tools: ['Figma/Sketch', 'Miro/Mural', 'Zoom/Teams', 'AI Design Tools'],
    metrics: ['Problem Clarity', 'Solution Validation', 'Team Alignment', 'User Satisfaction']
  },
  {
    id: 'continuous-deployment',
    title: 'Continuous Deployment',
    description: 'Automated delivery pipeline with AI quality checks and intelligent deployment strategies.',
    duration: 'Ongoing',
    complexity: 'Advanced',
    color: 'bg-purple-500',
    icon: '🚀',
    phases: [
      {
        name: 'Code Integration',
        duration: 'Continuous',
        activities: [
          'Automated code quality checks',
          'AI-powered security scanning',
          'Intelligent test execution',
          'Dependency vulnerability analysis'
        ]
      },
      {
        name: 'Build & Test',
        duration: '5-15 minutes',
        activities: [
          'Automated build processes',
          'Comprehensive test suites',
          'AI-driven performance testing',
          'Quality gate validation'
        ]
      },
      {
        name: 'Deployment',
        duration: '1-5 minutes',
        activities: [
          'Automated deployment to staging',
          'AI-monitored canary releases',
          'Intelligent rollback mechanisms',
          'Production health monitoring'
        ]
      }
    ],
    aiIntegration: [
      'Intelligent deployment risk assessment',
      'Automated performance optimization',
      'Predictive failure detection',
      'Smart rollback and recovery strategies'
    ],
    tools: ['Jenkins/GitHub Actions', 'Docker/Kubernetes', 'AWS/GCP/Azure', 'Monitoring Tools'],
    metrics: ['Deployment Frequency', 'Lead Time', 'MTTR', 'Change Failure Rate']
  }
]

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-max py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Workflows</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto">
              Complete development methodologies enhanced with AI assistance for faster, smarter, and more efficient software development
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why AI-Enhanced Workflows?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Traditional development workflows enhanced with AI capabilities deliver measurable improvements in speed, quality, and team productivity.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">60-70% Faster</h3>
                <p className="text-gray-600">Accelerated development cycles with AI assistance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Higher Quality</h3>
                <p className="text-gray-600">AI-powered quality checks and automated testing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Better Collaboration</h3>
                <p className="text-gray-600">AI-facilitated communication and decision making</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflows */}
      <section className="section-padding">
        <div className="container-max">
          <div className="space-y-16">
            {workflows.map((workflow, index) => (
              <div key={workflow.id} className="card hover:shadow-xl transition-shadow duration-300">
                {/* Workflow Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 ${workflow.color} rounded-xl flex items-center justify-center mr-6`}>
                      <span className="text-2xl">{workflow.icon}</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{workflow.title}</h2>
                      <p className="text-lg text-gray-600">{workflow.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {workflow.duration}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {workflow.complexity}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Workflow Phases */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Workflow Phases</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {workflow.phases.map((phase, phaseIndex) => (
                      <div key={phaseIndex} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <div className={`w-8 h-8 ${workflow.color} rounded-full flex items-center justify-center mr-3`}>
                            <span className="text-white font-bold text-sm">{phaseIndex + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{phase.name}</h4>
                            <p className="text-sm text-gray-500">{phase.duration}</p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, activityIndex) => (
                            <li key={activityIndex} className="flex items-start text-sm text-gray-700">
                              <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Integration */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Integration Points</h3>
                    <div className="space-y-3">
                      {workflow.aiIntegration.map((integration, integrationIndex) => (
                        <div key={integrationIndex} className="flex items-center">
                          <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          <span className="text-gray-700">{integration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Metrics</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {workflow.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="bg-gray-50 p-3 rounded-lg text-center">
                          <span className="text-sm font-medium text-gray-700">{metric}</span>
                        </div>
                      ))}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Recommended Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {workflow.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="text-center pt-6 border-t border-gray-200">
                  <a 
                    href={`https://github.com/joe-glasgow/ai-development-workflow/blob/main/templates/workflow-templates/${workflow.id}.md`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Complete {workflow.title} Guide
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Implement AI-Enhanced Workflows</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these steps to successfully integrate AI assistance into your development workflows.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Workflow</h3>
              <p className="text-gray-600">Select the methodology that best fits your team and project needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Set Up AI Tools</h3>
              <p className="text-gray-600">Integrate AI assistants and automation tools into your development environment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Train Your Team</h3>
              <p className="text-gray-600">Educate team members on AI-enhanced processes and best practices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Measure & Optimize</h3>
              <p className="text-gray-600">Track metrics and continuously improve your AI-enhanced workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Development Process?</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Start implementing AI-enhanced workflows today and experience the 60-70% productivity improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/sample-project" className="btn btn-primary">
                See Real Results
              </a>
              <a href="https://github.com/joe-glasgow/ai-development-workflow/tree/main/templates/workflow-templates" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="btn btn-secondary">
                Download Templates
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
