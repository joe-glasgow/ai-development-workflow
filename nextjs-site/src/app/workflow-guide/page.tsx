import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Workflow Guide - AI-Powered Development Workflow',
  description: 'Complete guide to implementing AI-powered development workflows with step-by-step instructions, best practices, and proven methodologies.',
}

export default function WorkflowGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Workflow Guide
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Master the art of AI-assisted development with our comprehensive workflow guide.
              Learn proven methodologies that boost development speed by 60-70%.
            </p>

            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Getting Started</h2>
              <p className="text-gray-700 mb-4">
                Our workflow is designed to integrate seamlessly with your existing development process. 
                Whether you&apos;re working solo or with a team, these methodologies will transform how you build software.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Prerequisites</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Basic development experience</li>
                    <li>• Access to AI tools (ChatGPT, Claude, etc.)</li>
                    <li>• Version control knowledge</li>
                    <li>• Project management basics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What You&apos;ll Learn</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• AI persona management</li>
                    <li>• Prompt engineering techniques</li>
                    <li>• Workflow automation</li>
                    <li>• Quality assurance with AI</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Phase 1: Planning & Setup</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Define Project Scope</h3>
                      <p className="text-gray-600">Use AI to help break down requirements and create detailed specifications.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Select AI Personas</h3>
                      <p className="text-gray-600">Choose appropriate personas for your project (PM, Designer, Developer, etc.).</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Setup Development Environment</h3>
                      <p className="text-gray-600">Configure tools and establish AI-assisted development workflows.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">🎨 Phase 2: Design & Architecture</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">AI-Assisted Design</h3>
                      <p className="text-gray-600">Generate wireframes, mockups, and design systems with AI guidance.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">System Architecture</h3>
                      <p className="text-gray-600">Design scalable architecture with AI recommendations and best practices.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Technical Specifications</h3>
                      <p className="text-gray-600">Create detailed technical docs with AI assistance for consistency.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">⚡ Phase 3: Development</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Component Development</h3>
                      <p className="text-gray-600">Build components with AI-generated code and automated testing.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">API Development</h3>
                      <p className="text-gray-600">Create robust APIs with AI-assisted endpoint design and documentation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Integration & Testing</h3>
                      <p className="text-gray-600">Integrate components with comprehensive AI-generated test suites.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">🚀 Phase 4: Deployment</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">CI/CD Pipeline</h3>
                      <p className="text-gray-600">Setup automated deployment with AI-optimized configurations.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Performance Optimization</h3>
                      <p className="text-gray-600">Optimize performance with AI-driven analysis and recommendations.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Monitoring & Maintenance</h3>
                      <p className="text-gray-600">Implement AI-powered monitoring and automated maintenance workflows.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Additional Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <a href="#" className="text-primary-600 hover:underline">Persona Templates</a></li>
                    <li>• <a href="#" className="text-primary-600 hover:underline">Prompt Library</a></li>
                    <li>• <a href="#" className="text-primary-600 hover:underline">Best Practices Guide</a></li>
                    <li>• <a href="#" className="text-primary-600 hover:underline">Troubleshooting</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tools & Templates</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <a href="#" className="text-primary-600 hover:underline">Project Templates</a></li>
                    <li>• <a href="#" className="text-primary-600 hover:underline">Workflow Automation</a></li>
                    <li>• <a href="#" className="text-primary-600 hover:underline">Quality Checklists</a></li>
                    <li>• <a href="#" className="text-primary-600 hover:underline">Metrics Dashboard</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
