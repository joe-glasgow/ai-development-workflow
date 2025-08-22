import PageHero from '@/components/ui/PageHero'
import Link from 'next/link'

export default function CLIToolsPage() {
  return (
    <main className="container-max section-padding">
      <PageHero 
        title="CLI Tools - Reduce Cognitive Complexity"
        description="Powerful command-line tools designed for efficiency. Short, memorable commands that reduce typing and cognitive load while maintaining full functionality."
        tipTitle="💡 Pro Tip"
        tipDescription="Use the short aliases (pc, aiw, wt) to reduce cognitive complexity and speed up your workflow by 60-75%."
        tipColor="blue"
      />
      
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">🛠️ Three Powerful Tools, One Workflow</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Persona Manager */}
              <div className="card border-2 border-accent-yellow/30">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-accent-yellow/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Persona Manager</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <code className="bg-accent-yellow/20 text-accent-yellow px-2 py-1 rounded text-sm font-bold">pc</code>
                      <span className="text-slate-400 text-sm">Short for persona-cli</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Initialize projects, manage AI personas, and orchestrate workflow phases. The foundation of your AI-powered development process.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent-yellow rounded-full mr-3"></div>
                    <span className="text-slate-300">Project initialization with templates</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent-yellow rounded-full mr-3"></div>
                    <span className="text-slate-300">AI persona context management</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent-yellow rounded-full mr-3"></div>
                    <span className="text-slate-300">Workflow phase orchestration</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent-yellow rounded-full mr-3"></div>
                    <span className="text-slate-300">Project status and progress tracking</span>
                  </div>
                </div>
                
                <div className="bg-black/60 text-green-400 p-4 rounded-lg font-mono text-sm border border-glass-border">
                  <div className="text-accent-yellow mb-2"># Quick Commands</div>
                  <div>pc init my-project</div>
                  <div>pc start-phase discovery</div>
                  <div>pc get-persona &quot;Frontend Developer&quot;</div>
                  <div>pc status</div>
                </div>
              </div>

              {/* AI Integration */}
              <div className="card border-2 border-accent-cyan/30">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-accent-cyan/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI Integration</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <code className="bg-accent-cyan/20 text-accent-cyan px-2 py-1 rounded text-sm font-bold">aiw</code>
                      <span className="text-slate-400 text-sm">Short for ai-workflow</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Direct AI integration with multiple providers. Chat with AI, generate code, and maintain conversation history with persona-aware context.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full mr-3"></div>
                    <span className="text-slate-300">Multi-provider AI support (OpenAI, Claude, Ollama)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full mr-3"></div>
                    <span className="text-slate-300">Interactive AI chat with context</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full mr-3"></div>
                    <span className="text-slate-300">Code generation and assistance</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full mr-3"></div>
                    <span className="text-slate-300">Conversation history and export</span>
                  </div>
                </div>
                
                <div className="bg-black/60 text-green-400 p-4 rounded-lg font-mono text-sm border border-glass-border">
                  <div className="text-accent-cyan mb-2"># Quick Commands</div>
                  <div>aiw setup</div>
                  <div>aiw chat</div>
                  <div>aiw generate</div>
                  <div>aiw history</div>
                </div>
              </div>

              {/* Workflow Tracker */}
              <div className="card border-2 border-accent-purple/30">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-accent-purple/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Workflow Tracker</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <code className="bg-accent-purple/20 text-accent-purple px-2 py-1 rounded text-sm font-bold">wt</code>
                      <span className="text-slate-400 text-sm">Short for workflow-tracker</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Track progress, manage tasks, and ensure quality gates. Monitor your development workflow with detailed analytics and reporting.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent-purple rounded-full mr-3"></div>
                    <span className="text-slate-300">Progress tracking and dashboards</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent-purple rounded-full mr-3"></div>
                    <span className="text-slate-300">Task management and updates</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent-purple rounded-full mr-3"></div>
                    <span className="text-slate-300">Quality gate validation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent-purple rounded-full mr-3"></div>
                    <span className="text-slate-300">Detailed progress reports</span>
                  </div>
                </div>
                
                <div className="bg-black/60 text-green-400 p-4 rounded-lg font-mono text-sm border border-glass-border">
                  <div className="text-accent-purple mb-2"># Quick Commands</div>
                  <div>wt init</div>
                  <div>wt status</div>
                  <div>wt update-task</div>
                  <div>wt complete-phase</div>
                </div>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Install our CLI tools and experience the power of reduced cognitive complexity in your development workflow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/workflow-guide" className="btn btn-primary px-8 py-4">
                View Workflow Guide
              </Link>
              <Link href="/free-ai-setup" className="btn btn-secondary px-8 py-4">
                Setup Free AI
              </Link>
            </div>
            
            <p className="text-slate-400 mt-6">
              Need help with installation? Check out our <Link href="/workflow-guide" className="text-primary-400 hover:text-primary-300">CLI Installation Guide</Link>.
            </p>
          </div>
    </main>
  )
}
