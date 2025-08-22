import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Workflow Guide - AI-Powered Development Workflow',
  description: 'Complete guide to implementing AI-powered development workflows with step-by-step instructions, best practices, and proven methodologies.',
}

export default function WorkflowGuidePage() {
  return (
    <main className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Workflow Guide
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-300 mb-8">
              Master the art of AI-assisted development with our comprehensive workflow guide.
              Learn proven methodologies that boost development speed by 60-70%.
            </p>

            <div className="glass rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">🎯 Getting Started</h2>
              <p className="text-slate-300 mb-4">
                Welcome to &quot;Vibe Coding&quot; - the modern approach to AI-assisted development! Our workflow is designed to be accessible to developers of all levels, from complete beginners to seasoned professionals.
              </p>
              
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-6 mb-6 border border-green-500/30">
                <h3 className="text-lg font-bold text-white mb-2">🆕 New to Development?</h3>
                <p className="text-slate-300 mb-3">
                  No problem! We&apos;ve designed this workflow to be beginner-friendly. Check our comprehensive prerequisites guide to get started.
                </p>
                <a href="https://github.com/joe-glasgow/ai-development-workflow/blob/main/docs/PREREQUISITES.md" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center text-green-400 hover:text-green-300 font-medium">
                  📚 Complete Prerequisites Guide
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-white mb-2">Essential Prerequisites</h3>
                  <ul className="text-slate-300 space-y-1">
                    <li>• <strong>Git</strong> - Version control (we&apos;ll teach you!)</li>
                    <li>• <strong>Node.js</strong> - JavaScript runtime</li>
                    <li>• <strong>Code Editor</strong> - VS Code recommended</li>
                    <li>• <strong>Terminal Basics</strong> - Copy/paste commands</li>
                    <li>• <strong>AI Access</strong> - Free options available!</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">What You&apos;ll Learn</h3>
                  <ul className="text-slate-300 space-y-1">
                    <li>• AI-assisted &quot;vibe coding&quot; techniques</li>
                    <li>• Persona-based development approach</li>
                    <li>• Automated workflow management</li>
                    <li>• Quality assurance with AI</li>
                    <li>• Free AI setup and optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">📋 Phase 1: Planning & Setup</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold text-white">Define Project Scope</h3>
                      <p className="text-slate-300">Use AI to help break down requirements and create detailed specifications.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold text-white">Select AI Personas</h3>
                      <p className="text-slate-300">Choose appropriate personas for your project (PM, Designer, Developer, etc.).</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold text-white">Setup Development Environment</h3>
                      <p className="text-slate-300">Configure tools and establish AI-assisted development workflows.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">🎨 Phase 2: Design & Architecture</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold text-white">AI-Assisted Design</h3>
                      <p className="text-slate-300">Generate wireframes, mockups, and design systems with AI guidance.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold text-white">System Architecture</h3>
                      <p className="text-slate-300">Design scalable architecture with AI recommendations and best practices.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold text-white">Technical Specifications</h3>
                      <p className="text-slate-300">Create detailed technical docs with AI assistance for consistency.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">⚡ Phase 3: Development</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold text-white">Component Development</h3>
                      <p className="text-slate-300">Build components with AI-generated code and automated testing.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold text-white">API Development</h3>
                      <p className="text-slate-300">Create robust APIs with AI-assisted endpoint design and documentation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold text-white">Integration & Testing</h3>
                      <p className="text-slate-300">Integrate components with comprehensive AI-generated test suites.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">🚀 Phase 4: Deployment</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold text-white">CI/CD Pipeline</h3>
                      <p className="text-slate-300">Setup automated deployment with AI-optimized configurations.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold text-white">Performance Optimization</h3>
                      <p className="text-slate-300">Optimize performance with AI-driven analysis and recommendations.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold text-white">Monitoring & Maintenance</h3>
                      <p className="text-slate-300">Implement AI-powered monitoring and automated maintenance workflows.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-8 mt-8">
              <h2 className="text-2xl font-bold text-white mb-4">📚 Additional Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-white mb-2">Documentation</h3>
                  <ul className="text-slate-300 space-y-2">
                    <li>• <a href="/templates/personas" className="text-primary-400 hover:text-primary-300 hover:underline">Persona Templates</a></li>
                    <li>• <a href="/templates/prompts" className="text-primary-400 hover:text-primary-300 hover:underline">Prompt Library</a></li>
                    <li>• <a href="https://github.com/joe-glasgow/ai-development-workflow/blob/main/docs/BEST_PRACTICES.md" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 hover:underline">Best Practices Guide</a></li>
                    <li>• <a href="https://github.com/joe-glasgow/ai-development-workflow/blob/main/docs/TROUBLESHOOTING.md" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 hover:underline">Troubleshooting</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Tools & Templates</h3>
                  <ul className="text-slate-300 space-y-2">
                    <li>• <a href="/templates/projects" className="text-primary-400 hover:text-primary-300 hover:underline">Project Templates</a></li>
                    <li>• <a href="https://github.com/joe-glasgow/ai-development-workflow/blob/main/docs/WORKFLOW_AUTOMATION.md" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 hover:underline">Workflow Automation</a></li>
                    <li>• <a href="https://github.com/joe-glasgow/ai-development-workflow/blob/main/docs/QUALITY_CHECKLISTS.md" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 hover:underline">Quality Checklists</a></li>
                    <li>• <a href="/sample-project" className="text-primary-400 hover:text-primary-300 hover:underline">Sample Project & Metrics</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold text-white mb-4">🚀 Ready to Start?</h3>
                <p className="text-slate-300 mb-6">
                  Choose your path based on your experience level and preferred AI setup.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/free-ai-setup" className="btn btn-primary">
                    Start with Free AI
                  </a>
                  <a href="https://github.com/joe-glasgow/ai-development-workflow/blob/main/docs/PREREQUISITES.md" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="btn btn-secondary">
                    Prerequisites Guide
                  </a>
                  <a href="/sample-project" className="btn btn-outline">
                    View Sample Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}
