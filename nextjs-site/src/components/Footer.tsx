export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Main Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              AI-Powered Development Workflow
            </h3>
            <p className="text-gray-600 mb-4">
              Boost development speed by 60-70% with proven AI workflows, templates, and automation tools.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/joe-glasgow/ai-development-workflow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="GitHub Repository"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/templates" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="/sample-project" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Sample Project
                </a>
              </li>
              <li>
                <a href="/workflow-guide" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Workflow Guide
                </a>
              </li>
              <li>
                <a href="/templates/personas" className="text-gray-600 hover:text-primary-600 transition-colors">
                  AI Personas
                </a>
              </li>
              <li>
                <a href="/templates/prompts" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Prompt Library
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/joe-glasgow/ai-development-workflow" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/joe-glasgow/ai-development-workflow/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Report Issues
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/joe-glasgow/ai-development-workflow/discussions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Discussions
                </a>
              </li>
              <li>
                <a href="/templates/workflows" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Workflow Templates
                </a>
              </li>
              <li>
                <a href="/templates/projects" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Project Templates
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              <p>&copy; {currentYear} Joe Glasgow. MIT License.</p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>Made with ❤️ for developers</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Open Source</span>
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
    </footer>
  )
}
