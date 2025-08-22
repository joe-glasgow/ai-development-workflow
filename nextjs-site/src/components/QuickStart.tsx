import Link from 'next/link'

export default function QuickStart() {
  return (
    <section id="quick-start" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🎯 Quick Start Options
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose your preferred way to get started with AI-powered development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Option 1 - NEW: Complete AI-Integrated Workflow */}
          <div className="card border-2 border-accent-yellow/30">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-accent-yellow to-accent-pink text-black rounded-full flex items-center justify-center font-bold mr-3">
                1
              </div>
              <h3 className="text-xl font-semibold text-white">Complete AI Workflow</h3>
              <span className="ml-2 px-2 py-1 bg-accent-yellow text-black text-xs font-bold rounded-full">NEW</span>
            </div>
            <p className="text-slate-300 mb-6">
              Automated setup with functional CLI tools, direct AI integration, and progress tracking.
            </p>
            <div className="bg-black/60 text-green-400 p-4 rounded-lg font-mono text-sm mb-6 border border-glass-border">
              <div>git clone https://github.com/joe-glasgow/ai-development-workflow.git</div>
              <div>cd ai-development-workflow</div>
              <div>chmod +x setup.sh && ./setup.sh</div>
              <div>pc init my-project</div>
              <div>cd my-project && aiw setup</div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-accent-yellow/20 text-accent-yellow rounded-full text-sm">Automated Setup</span>
              <span className="px-3 py-1 bg-accent-cyan/20 text-accent-cyan rounded-full text-sm">AI Integration</span>
              <span className="px-3 py-1 bg-accent-purple/20 text-accent-purple rounded-full text-sm">Progress Tracking</span>
            </div>
            <Link href="/workflow-guide" className="btn btn-primary w-full">
              Start AI Workflow
            </Link>
          </div>

          {/* Option 2 - FREE AI Option */}
          <div className="card border-2 border-green-400/30">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-accent-cyan text-black rounded-full flex items-center justify-center font-bold mr-3">
                2
              </div>
              <h3 className="text-xl font-semibold text-white">FREE AI Setup</h3>
              <span className="ml-2 px-2 py-1 bg-green-400 text-black text-xs font-bold rounded-full">FREE</span>
            </div>
            <p className="text-slate-300 mb-6">
              Get started with completely free AI options - no API costs, perfect for learning and experimentation.
            </p>
            <div className="bg-black/60 text-green-400 p-4 rounded-lg font-mono text-sm mb-6 border border-glass-border">
              <div># Install free local AI</div>
              <div>curl -fsSL https://ollama.ai/install.sh | sh</div>
              <div>ollama pull codellama:7b</div>
              <div>ollama serve</div>
              <div># Setup workflow with free AI</div>
              <div>aiw setup  # Choose Ollama</div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">$0 Cost</span>
              <span className="px-3 py-1 bg-accent-cyan/20 text-accent-cyan rounded-full text-sm">Local AI</span>
              <span className="px-3 py-1 bg-accent-purple/20 text-accent-purple rounded-full text-sm">Privacy First</span>
            </div>
            <Link href="/free-ai-setup" className="btn btn-secondary w-full">
              Free AI Guide
            </Link>
          </div>

          {/* Option 3 - Sample Project */}
          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                3
              </div>
              <h3 className="text-xl font-semibold text-white">Sample Project</h3>
            </div>
            <p className="text-slate-300 mb-6">
              Step-by-step walkthrough using the TechGear Store project with real AI logs and proven results.
            </p>
            <div className="bg-black/60 text-green-400 p-4 rounded-lg font-mono text-sm mb-6 border border-glass-border">
              <div>cd ai-development-workflow/sample-project</div>
              <div>./scripts/setup-local.sh</div>
              <div># Follow WORKFLOW_EXECUTION_LOG.md</div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-glass-base text-green-200 rounded-full text-sm">Real AI Logs</span>
              <span className="px-3 py-1 bg-glass-base text-blue-200 rounded-full text-sm">Proven Results</span>
              <span className="px-3 py-1 bg-glass-base text-purple-200 rounded-full text-sm">Complete Example</span>
            </div>
            <Link href="/sample-project" className="btn btn-secondary w-full">
              View Sample Project
            </Link>
          </div>
        </div>

        {/* NEW: CLI Tools Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">🛠️ Available CLI Tools</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent-yellow/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-white">pc</h4>
              </div>
              <p className="text-slate-300 text-sm mb-4">Project initialization and persona management</p>
              <div className="bg-black/40 p-3 rounded text-xs font-mono text-green-400">
                pc init my-project<br/>
                pc get-persona "Frontend Developer"
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent-cyan/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-bold text-white">aiw</h4>
              </div>
              <p className="text-slate-300 text-sm mb-4">Direct AI integration and code generation</p>
              <div className="bg-black/40 p-3 rounded text-xs font-mono text-green-400">
                aiw setup<br/>
                aiw chat<br/>
                aiw generate
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent-purple/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-white">wt</h4>
              </div>
              <p className="text-slate-300 text-sm mb-4">Progress tracking and quality gates</p>
              <div className="bg-black/40 p-3 rounded text-xs font-mono text-green-400">
                wt status<br/>
                wt complete-phase
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Additional Resources</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/templates/personas" className="group">
              <div className="card text-center group-hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-glass-base rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">AI Personas</h4>
                <p className="text-sm text-slate-300">Role-specific AI assistants</p>
              </div>
            </Link>
            
            <Link href="/templates/prompts" className="group">
              <div className="card text-center group-hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-glass-base rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">Prompt Library</h4>
                <p className="text-sm text-slate-300">Ready-to-use AI prompts</p>
              </div>
            </Link>
            
            <Link href="/templates/workflows" className="group">
              <div className="card text-center group-hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-glass-base rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">Workflows</h4>
                <p className="text-sm text-slate-300">Development methodologies</p>
              </div>
            </Link>
            
            <a href="https://github.com/joe-glasgow/ai-development-workflow" className="group">
              <div className="card text-center group-hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-glass-base rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">GitHub Repo</h4>
                <p className="text-sm text-slate-300">Source code & issues</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
