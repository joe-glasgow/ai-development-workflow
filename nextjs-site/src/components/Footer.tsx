import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent-cyan/10 rounded-full blur-2xl"></div>
      
      <div className="glass-dark border-t border-glass-border">
        <div className="container-max section-padding relative z-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Main Section */}
            <div className="lg:col-span-2">
              <div className="glass-card p-6 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-accent-yellow rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-white">
                    AI-Powered Development Workflow
                  </h3>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Boost development speed by 60-70% with proven AI workflows, templates, and automation tools. 
                  A comprehensive framework for modern development teams.
                </p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://github.com/joe-glasgow/ai-development-workflow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-3 glass-light rounded-xl hover:shadow-glass-lg transition-all duration-300 transform hover:scale-110"
                    aria-label="GitHub Repository"
                  >
                    <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <div className="flex items-center space-x-2 px-4 py-2 glass-light rounded-full">
                    <div className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></div>
                    <span className="text-sm text-slate-300 font-medium">Open Source</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-2 bg-accent-pink rounded-full mr-3"></div>
                  <h4 className="text-lg font-bold text-white">Quick Links</h4>
                </div>
                <ul className="space-y-4">
                  <li>
                    <Link href="/templates" className="group flex items-center text-slate-300 hover:text-white transition-all duration-200">
                      <div className="w-1 h-1 bg-accent-cyan rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                      Templates
                    </Link>
                  </li>
                  <li>
                    <Link href="/sample-project" className="group flex items-center text-slate-300 hover:text-white transition-all duration-200">
                      <div className="w-1 h-1 bg-accent-purple rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                      Sample Project
                    </Link>
                  </li>
                  <li>
                    <Link href="/workflow-guide" className="group flex items-center text-slate-300 hover:text-white transition-all duration-200">
                      <div className="w-1 h-1 bg-accent-yellow rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                      Workflow Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/templates/personas" className="group flex items-center text-slate-300 hover:text-white transition-all duration-200">
                      <div className="w-1 h-1 bg-accent-pink rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                      AI Personas
                    </Link>
                  </li>
                  <li>
                    <Link href="/templates/prompts" className="group flex items-center text-slate-300 hover:text-white transition-all duration-200">
                      <div className="w-1 h-1 bg-accent-cyan rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                      Prompt Library
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Resources */}
            <div>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full mr-3"></div>
                  <h4 className="text-lg font-bold text-white">Resources</h4>
                </div>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="https://github.com/joe-glasgow/ai-development-workflow" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center text-slate-300 hover:text-white transition-all duration-200"
                    >
                      <div className="w-1 h-1 bg-accent-yellow rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                      GitHub Repository
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/joe-glasgow/ai-development-workflow/issues" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center text-slate-300 hover:text-white transition-all duration-200"
                    >
                      <div className="w-1 h-1 bg-accent-pink rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                      Report Issues
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/joe-glasgow/ai-development-workflow/discussions" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center text-slate-300 hover:text-white transition-all duration-200"
                    >
                      <div className="w-1 h-1 bg-accent-purple rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                      Discussions
                    </a>
                  </li>
                  <li>
                    <Link href="/templates/workflows" className="group flex items-center text-slate-300 hover:text-white transition-all duration-200">
                      <div className="w-1 h-1 bg-accent-cyan rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                      Workflow Templates
                    </Link>
                  </li>
                  <li>
                    <Link href="/templates/projects" className="group flex items-center text-slate-300 hover:text-white transition-all duration-200">
                      <div className="w-1 h-1 bg-accent-yellow rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                      Project Templates
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="glass-light rounded-2xl p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-300 mb-4 md:mb-0">
                <p className="font-medium">&copy; {currentYear} Joe Glasgow. MIT License.</p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <span>Made with</span>
                  <div className="w-4 h-4 text-accent-pink">❤️</div>
                  <span>for developers</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 glass-medium rounded-full">
                  <div className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-300 font-medium">Active Development</span>
                </div>
              </div>
            </div>
          </div>

          {/* Schema.org structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "AI-Powered Development Workflow",
                "description": "Complete framework for AI-assisted software development. Boost development speed by 60-70% with proven AI workflows, templates, and automation tools.",
                "url": "https://joe-glasgow.github.io/ai-development-workflow/",
                "logo": "https://joe-glasgow.github.io/ai-development-workflow/assets/images/favicon.svg",
                "sameAs": [
                  "https://github.com/joe-glasgow/ai-development-workflow"
                ],
                "author": {
                  "@type": "Person",
                  "name": "Joe Glasgow",
                  "url": "https://github.com/joe-glasgow"
                }
              })
            }}
          />
        </div>
      </div>
    </footer>
  )
}
