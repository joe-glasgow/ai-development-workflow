export default function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🛠️ Template Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive collection of templates, personas, and workflows for every aspect of development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Persona Templates */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">🎭 Persona Templates</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Role-specific personas that provide context for AI interactions, ensuring consistent and expert-level responses.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-700">Project Manager</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-700">Product Manager</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-700">UX Designer</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-700">Frontend Developer</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-700">Backend Developer</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-700">DevOps Engineer</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-700">QA Engineer</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-700">Data Scientist</span>
              </div>
            </div>
          </div>

          {/* Project Templates */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">🚀 Project Templates</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Ready-to-use project structures for different application types with pre-configured setups and best practices.
            </p>
            <div className="space-y-4">
              <div className="card">
                <h4 className="font-semibold text-gray-900 mb-2">Basic Web App</h4>
                <p className="text-sm text-gray-600 mb-3">React/Vue/Angular with Node.js/Python/Go backend</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">TypeScript</span>
                </div>
              </div>
              <div className="card">
                <h4 className="font-semibold text-gray-900 mb-2">Mobile App</h4>
                <p className="text-sm text-gray-600 mb-3">React Native/Flutter with cross-platform support</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React Native</span>
                  <span className="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded">Flutter</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Cross-platform</span>
                </div>
              </div>
              <div className="card">
                <h4 className="font-semibold text-gray-900 mb-2">SaaS Dashboard</h4>
                <p className="text-sm text-gray-600 mb-3">Multi-tenant applications with analytics</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">Multi-tenant</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Analytics</span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Prompt Templates */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">💬 Prompt Templates</h3>
            </div>
            <p className="text-gray-600 mb-6">
              AI prompt templates organized by development phase for consistent and effective AI interactions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Development Prompts</h4>
                  <p className="text-sm text-gray-600">Component creation, API design, testing</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">15+ prompts</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Design Prompts</h4>
                  <p className="text-sm text-gray-600">UI/UX design, accessibility, visual design</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">12+ prompts</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Deployment Prompts</h4>
                  <p className="text-sm text-gray-600">CI/CD, infrastructure, monitoring</p>
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">8+ prompts</span>
              </div>
            </div>
          </div>

          {/* Workflow Templates */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">🔄 Workflow Templates</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Complete development methodologies with step-by-step processes and AI integration points.
            </p>
            <div className="space-y-4">
              <div className="card">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Agile Development</h4>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Popular</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Sprint-based iterative development with AI assistance</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  2-4 week sprints
                </div>
              </div>
              <div className="card">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Design Sprint</h4>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Fast</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">5-day rapid prototyping methodology</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  5 days to prototype
                </div>
              </div>
              <div className="card">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Continuous Deployment</h4>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Advanced</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Automated delivery pipeline with AI quality checks</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Continuous delivery
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Choose your project type, pick relevant personas, use AI prompts, and follow proven workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/templates" className="btn btn-primary">
                Browse All Templates
              </a>
              <a href="/sample-project" className="btn btn-secondary">
                View Sample Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
