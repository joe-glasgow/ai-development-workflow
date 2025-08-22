export default function Features() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🛠️ Functional Tools & Features
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Complete set of working CLI tools and comprehensive templates for AI-powered development
          </p>
        </div>

        {/* CLI Tools Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">⚡ Working CLI Tools</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Persona Manager */}
            <div className="card border-2 border-primary-400/30">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-400/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Persona Manager</h4>
                  <span className="text-primary-400 text-sm font-medium">persona-cli</span>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6">
                Interactive CLI for project initialization, persona management, and phase tracking with automated setup.
              </p>
              
              <div className="bg-black/60 text-green-400 p-4 rounded-lg font-mono text-sm mb-6 border border-glass-border">
                <div># Initialize new project</div>
                <div>persona-cli init</div>
                <div></div>
                <div># Manage personas</div>
                <div>persona-cli persona</div>
                <div></div>
                <div># Track phases</div>
                <div>persona-cli phase</div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-400/20 text-primary-400 rounded-full text-sm">Interactive Setup</span>
                <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">Phase Tracking</span>
                <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm">Persona Management</span>
              </div>
            </div>

            {/* AI Integration */}
            <div className="card border-2 border-accent-cyan/30">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-cyan/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">AI Integration</h4>
                  <span className="text-accent-cyan text-sm font-medium">ai-workflow</span>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6">
                Direct AI integration supporting multiple providers with contextual chat, code generation, and conversation history.
              </p>
              
              <div className="bg-black/60 text-green-400 p-4 rounded-lg font-mono text-sm mb-6 border border-glass-border">
                <div># Setup AI provider</div>
                <div>ai-workflow setup</div>
                <div></div>
                <div># Start AI chat</div>
                <div>ai-workflow chat</div>
                <div></div>
                <div># Generate code</div>
                <div>ai-workflow generate</div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-cyan/20 text-accent-cyan rounded-full text-sm">Multi-Provider</span>
                <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">Free Options</span>
                <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm">Code Generation</span>
              </div>
            </div>

            {/* Workflow Tracker */}
            <div className="card border-2 border-accent-purple/30">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-purple/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Workflow Tracker</h4>
                  <span className="text-accent-purple text-sm font-medium">workflow-tracker</span>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6">
                Comprehensive progress tracking with quality gates, task management, and automated reporting.
              </p>
              
              <div className="bg-black/60 text-green-400 p-4 rounded-lg font-mono text-sm mb-6 border border-glass-border">
                <div># Initialize tracking</div>
                <div>workflow-tracker init</div>
                <div></div>
                <div># Track progress</div>
                <div>workflow-tracker status</div>
                <div></div>
                <div># Generate reports</div>
                <div>workflow-tracker report</div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-purple/20 text-accent-purple rounded-full text-sm">Quality Gates</span>
                <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">Progress Tracking</span>
                <span className="px-3 py-1 bg-orange-400/20 text-orange-400 rounded-full text-sm">Automated Reports</span>
              </div>
            </div>
          </div>
        </div>

        {/* Templates Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Persona Templates */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-glass-base rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">🎭 Persona Templates</h3>
            </div>
            <p className="text-slate-300 mb-6">
              Role-specific personas that provide context for AI interactions, ensuring consistent and expert-level responses.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center p-3 glass rounded-lg">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-slate-200">Project Manager</span>
              </div>
              <div className="flex items-center p-3 glass rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-slate-200">Product Manager</span>
              </div>
              <div className="flex items-center p-3 glass rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-slate-200">UX Designer</span>
              </div>
              <div className="flex items-center p-3 glass rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-slate-200">Frontend Developer</span>
              </div>
              <div className="flex items-center p-3 glass rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-slate-200">Backend Developer</span>
              </div>
              <div className="flex items-center p-3 glass rounded-lg">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-slate-200">DevOps Engineer</span>
              </div>
              <div className="flex items-center p-3 glass rounded-lg">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-slate-200">QA Engineer</span>
              </div>
              <div className="flex items-center p-3 glass rounded-lg">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-slate-200">Data Scientist</span>
              </div>
            </div>
          </div>

          {/* Workflow Phases */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-glass-base rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">🔄 5-Phase Workflow</h3>
            </div>
            <p className="text-slate-300 mb-6">
              Structured development phases with AI prompts, quality gates, and deliverables for consistent project success.
            </p>
            <div className="space-y-4">
              <div className="card">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white">1. Discovery & Planning</h4>
                  <span className="px-2 py-1 bg-glass-base text-blue-200 text-xs rounded">Requirements</span>
                </div>
                <p className="text-sm text-slate-300">Project scope, user research, technical planning</p>
              </div>
              <div className="card">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white">2. Design & Prototyping</h4>
                  <span className="px-2 py-1 bg-glass-base text-purple-200 text-xs rounded">Design</span>
                </div>
                <p className="text-sm text-slate-300">UI/UX design, wireframes, design system</p>
              </div>
              <div className="card">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white">3. Development Setup</h4>
                  <span className="px-2 py-1 bg-glass-base text-green-200 text-xs rounded">Infrastructure</span>
                </div>
                <p className="text-sm text-slate-300">Environment setup, tooling, architecture</p>
              </div>
              <div className="card">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white">4. Implementation</h4>
                  <span className="px-2 py-1 bg-glass-base text-orange-200 text-xs rounded">Development</span>
                </div>
                <p className="text-sm text-slate-300">Feature development, testing, code review</p>
              </div>
              <div className="card">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white">5. Deployment & Monitoring</h4>
                  <span className="px-2 py-1 bg-glass-base text-red-200 text-xs rounded">Operations</span>
                </div>
                <p className="text-sm text-slate-300">CI/CD, deployment, monitoring, maintenance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">✨ Key Features</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Free AI Options
              </h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Ollama for completely free local AI
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Google AI Studio generous free tier
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Hugging Face 1000 free calls/month
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Low-cost options starting at $0.002/1K tokens
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Automated Setup
              </h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  One-command installation script
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Automatic dependency management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Global CLI command installation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Interactive project initialization
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Templates Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Project Templates */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-glass-base rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">🚀 Project Templates</h3>
            </div>
            <p className="text-slate-300 mb-6">
              Ready-to-use project structures for different application types with pre-configured setups and best practices.
            </p>
            <div className="space-y-4">
              <div className="card">
                <h4 className="font-semibold text-white mb-2">Basic Web App</h4>
                <p className="text-sm text-slate-300 mb-3">React/Vue/Angular with Node.js/Python/Go backend</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-glass-base text-blue-200 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-glass-base text-green-200 text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-glass-base text-purple-200 text-xs rounded">TypeScript</span>
                </div>
              </div>
              <div className="card">
                <h4 className="font-semibold text-white mb-2">Mobile App</h4>
                <p className="text-sm text-slate-300 mb-3">React Native/Flutter with cross-platform support</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-glass-base text-blue-200 text-xs rounded">React Native</span>
                  <span className="px-2 py-1 bg-glass-base text-cyan-200 text-xs rounded">Flutter</span>
                  <span className="px-2 py-1 bg-glass-base text-orange-200 text-xs rounded">Cross-platform</span>
                </div>
              </div>
              <div className="card">
                <h4 className="font-semibold text-white mb-2">SaaS Dashboard</h4>
                <p className="text-sm text-slate-300 mb-3">Multi-tenant applications with analytics</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-glass-base text-indigo-200 text-xs rounded">Multi-tenant</span>
                  <span className="px-2 py-1 bg-glass-base text-yellow-200 text-xs rounded">Analytics</span>
                  <span className="px-2 py-1 bg-glass-base text-red-200 text-xs rounded">Dashboard</span>
                </div>
              </div>
            </div>
          </div>

          {/* Prompt Templates */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-glass-base rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">💬 Prompt Templates</h3>
            </div>
            <p className="text-slate-300 mb-6">
              AI prompt templates organized by development phase for consistent and effective AI interactions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 glass rounded-lg">
                <div>
                  <h4 className="font-medium text-white">Development Prompts</h4>
                  <p className="text-sm text-slate-300">Component creation, API design, testing</p>
                </div>
                <span className="px-3 py-1 bg-glass-base text-blue-200 text-sm rounded-full">15+ prompts</span>
              </div>
              <div className="flex items-center justify-between p-4 glass rounded-lg">
                <div>
                  <h4 className="font-medium text-white">Design Prompts</h4>
                  <p className="text-sm text-slate-300">UI/UX design, accessibility, visual design</p>
                </div>
                <span className="px-3 py-1 bg-glass-base text-green-200 text-sm rounded-full">12+ prompts</span>
              </div>
              <div className="flex items-center justify-between p-4 glass rounded-lg">
                <div>
                  <h4 className="font-medium text-white">Deployment Prompts</h4>
                  <p className="text-sm text-slate-300">CI/CD, infrastructure, monitoring</p>
                </div>
                <span className="px-3 py-1 bg-glass-base text-purple-200 text-sm rounded-full">8+ prompts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started CTA */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
              Install the tools, choose your AI provider, and start building with AI-powered development workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/free-ai-setup" className="btn btn-primary">
                Start with Free AI
              </a>
              <a href="/templates" className="btn btn-secondary">
                Browse Templates
              </a>
              <a href="/sample-project" className="btn btn-outline">
                View Sample Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
