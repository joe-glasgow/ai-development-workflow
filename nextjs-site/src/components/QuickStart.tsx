import Link from 'next/link'

export default function QuickStart() {
  return (
    <section id="quick-start" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🎯 Quick Start Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your preferred way to get started with AI-powered development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Option 1 */}
          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Follow the Sample Project</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Step-by-step walkthrough using the TechGear Store project with real AI logs and proven results.
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-6">
              <div>git clone https://github.com/joe-glasgow/ai-development-workflow.git</div>
              <div>cd ai-development-workflow/sample-project</div>
              <div>./scripts/setup-local.sh</div>
              <div># Follow WORKFLOW_EXECUTION_LOG.md step-by-step</div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Real AI Logs</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Proven Results</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Complete Example</span>
            </div>
            <Link href="/sample-project" className="btn btn-primary w-full">
              View Sample Project
            </Link>
          </div>

          {/* Option 2 */}
          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Start Your Own Project</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Initialize a new project with customized personas and follow our comprehensive workflow guide.
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-6">
              <div>cd ai-development-workflow</div>
              <div>./tools/persona-manager/bin/persona-cli init my-project</div>
              <div># Customize personas and follow workflow-guide/</div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Custom Setup</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Guided Process</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Flexible</span>
            </div>
            <Link href="/workflow-guide" className="btn btn-secondary w-full">
              View Workflow Guide
            </Link>
          </div>

          {/* Option 3 */}
          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Use Templates</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Jump-start with ready-to-use templates for different project types and development scenarios.
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-6">
              <div># Choose from various project templates</div>
              <div>cp -r templates/project-templates/saas-dashboard my-project</div>
              <div>cd my-project</div>
              <div># Follow template-specific setup instructions</div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Quick Start</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Pre-configured</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Multiple Types</span>
            </div>
            <Link href="/templates" className="btn btn-secondary w-full">
              Browse Templates
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Resources</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/templates/personas" className="group">
              <div className="card text-center group-hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">AI Personas</h4>
                <p className="text-sm text-gray-600">Role-specific AI assistants</p>
              </div>
            </Link>
            
            <Link href="/templates/prompts" className="group">
              <div className="card text-center group-hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Prompt Library</h4>
                <p className="text-sm text-gray-600">Ready-to-use AI prompts</p>
              </div>
            </Link>
            
            <Link href="/templates/workflows" className="group">
              <div className="card text-center group-hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Workflows</h4>
                <p className="text-sm text-gray-600">Development methodologies</p>
              </div>
            </Link>
            
            <a href="https://github.com/joe-glasgow/ai-development-workflow" className="group">
              <div className="card text-center group-hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">GitHub Repo</h4>
                <p className="text-sm text-gray-600">Source code & issues</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
