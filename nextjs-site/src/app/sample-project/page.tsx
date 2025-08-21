import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sample Project - AI-Powered Development Workflow',
  description: 'TechGear Store sample project demonstrating the complete AI-powered development workflow with real logs and proven results.',
}

export default function SampleProjectPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sample Project: TechGear Store
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              A complete e-commerce application built using our AI-powered development workflow, 
              demonstrating 60-70% faster development with real AI logs and proven results.
            </p>

            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🚀 Project Overview</h2>
              <p className="text-gray-700 mb-4">
                TechGear Store is a full-stack e-commerce application that showcases the power of 
                AI-assisted development. Every component, API endpoint, and feature was built using 
                our comprehensive workflow framework.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Technologies Used</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• React with TypeScript</li>
                    <li>• Node.js with Express</li>
                    <li>• AWS Lambda & DynamoDB</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Product catalog & search</li>
                    <li>• Shopping cart & checkout</li>
                    <li>• User authentication</li>
                    <li>• Order management</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Development Metrics</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">65%</div>
                  <div className="text-gray-700">Faster Development</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-gray-700">Code Quality Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
                  <div className="text-gray-700">Critical Bugs</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🔗 Project Resources</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                  <div>
                    <h3 className="font-semibold text-gray-900">Live Demo</h3>
                    <p className="text-gray-600">Experience the fully functional application</p>
                  </div>
                  <a href="#" className="btn btn-primary">View Demo</a>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                  <div>
                    <h3 className="font-semibold text-gray-900">Source Code</h3>
                    <p className="text-gray-600">Complete codebase with AI development logs</p>
                  </div>
                  <a href="#" className="btn btn-secondary">View Code</a>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                  <div>
                    <h3 className="font-semibold text-gray-900">AI Workflow Logs</h3>
                    <p className="text-gray-600">Real AI prompts and responses used in development</p>
                  </div>
                  <a href="#" className="btn btn-secondary">View Logs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
