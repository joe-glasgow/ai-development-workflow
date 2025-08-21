import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Templates - AI-Powered Development Workflow',
  description: 'Complete template library including persona templates, project templates, prompt templates, and workflow templates for AI-assisted development.',
}

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Templates</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Complete template library for AI-assisted development. Choose from personas, projects, prompts, and workflows to accelerate your development process.
          </p>
        </div>
      </div>

      {/* Template Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Persona Templates */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">🎭 Persona Templates</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Role-specific personas that provide context for AI interactions across different development disciplines.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="font-medium">Project Manager</span> - Planning and coordination
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="font-medium">Product Manager</span> - Feature prioritization
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="font-medium">UX Designer</span> - User experience design
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="font-medium">Frontend Developer</span> - UI implementation
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="font-medium">Backend Developer</span> - API development
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="font-medium">Mobile Developer</span> - Mobile app development
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="font-medium">DevOps Engineer</span> - Deployment and infrastructure
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="font-medium">QA Engineer</span> - Testing and quality assurance
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="font-medium">Data Scientist</span> - Data analysis and ML
              </div>
            </div>
          </div>

          {/* Project Templates */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">🚀 Project Templates</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Ready-to-use project structures for different application types with complete setup and configuration.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">Basic Web App</h3>
                <p className="text-sm text-gray-600">React/Vue/Angular with Node.js/Python/Go backend</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">Mobile App</h3>
                <p className="text-sm text-gray-600">React Native/Flutter with cross-platform support</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">SaaS Dashboard</h3>
                <p className="text-sm text-gray-600">Multi-tenant applications with analytics and billing</p>
              </div>
            </div>
          </div>

          {/* Prompt Templates */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">💬 Prompt Templates</h2>
            </div>
            <p className="text-gray-600 mb-6">
              AI prompt templates organized by development phase to ensure consistent and effective AI interactions.
            </p>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Development Prompts</h3>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Component creation and architecture</li>
                  <li>• API design and implementation</li>
                  <li>• Testing strategies and automation</li>
                  <li>• Code review and optimization</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Design Prompts</h3>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• UI/UX design and user research</li>
                  <li>• Accessibility and inclusive design</li>
                  <li>• Visual design and branding</li>
                  <li>• Design system creation</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Deployment Prompts</h3>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• CI/CD pipeline setup</li>
                  <li>• Infrastructure as code</li>
                  <li>• Monitoring and observability</li>
                  <li>• Security and compliance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Workflow Templates */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">🔄 Workflow Templates</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Complete development methodologies with AI integration for different project types and team structures.
            </p>
            <div className="space-y-4">
              <div className="border border-orange-200 rounded-lg p-4">
                <h3 className="font-semibold text-orange-900 mb-2">Agile Development</h3>
                <p className="text-sm text-orange-700 mb-2">Sprint-based iterative development with AI assistance</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Sprint Planning</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Daily Standups</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Retrospectives</span>
                </div>
              </div>
              <div className="border border-orange-200 rounded-lg p-4">
                <h3 className="font-semibold text-orange-900 mb-2">Design Sprint</h3>
                <p className="text-sm text-orange-700 mb-2">5-day rapid prototyping with AI-powered design</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Problem Definition</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Ideation</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Prototyping</span>
                </div>
              </div>
              <div className="border border-orange-200 rounded-lg p-4">
                <h3 className="font-semibold text-orange-900 mb-2">Continuous Deployment</h3>
                <p className="text-sm text-orange-700 mb-2">Automated delivery pipeline with AI quality gates</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Automated Testing</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Code Quality</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">🎯 Getting Started with Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">1</div>
              <h3 className="font-semibold mb-2">Choose Project Type</h3>
              <p className="text-sm opacity-90">Select from Project Templates based on your application needs</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">2</div>
              <h3 className="font-semibold mb-2">Pick Relevant Personas</h3>
              <p className="text-sm opacity-90">Browse Persona Templates for your team roles and expertise</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">3</div>
              <h3 className="font-semibold mb-2">Use AI Prompts</h3>
              <p className="text-sm opacity-90">Reference Prompt Templates for consistent AI interactions</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">4</div>
              <h3 className="font-semibold mb-2">Follow Workflows</h3>
              <p className="text-sm opacity-90">Apply Workflow Templates for structured development</p>
            </div>
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Template Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <svg className="w-12 h-12 text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-sm text-gray-600">Comprehensive guides for each template category with examples and best practices</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <svg className="w-12 h-12 text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Code Examples</h3>
              <p className="text-sm text-gray-600">Ready-to-use code snippets and configuration files for quick implementation</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <svg className="w-12 h-12 text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick Start</h3>
              <p className="text-sm text-gray-600">Step-by-step setup instructions to get started with any template in minutes</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
