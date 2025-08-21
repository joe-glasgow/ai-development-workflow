import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/ui/PageHero'
import GettingStarted from '@/components/ui/GettingStarted'
import { personas, commonPatterns, getGitHubTemplateUrl } from '@/data/templates'

export default function PersonasPage() {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container-max section-padding">
        <PageHero
          title="AI Personas Library"
          description="Role-specific AI personas that provide context and expertise for different aspects of software development. Each persona brings specialized knowledge to enhance your AI-assisted workflow."
          tipTitle="How to Use Personas"
          tipDescription="Copy the persona context into your AI conversations to get specialized responses. Each persona includes role-specific knowledge, best practices, and focused expertise."
          tipColor="blue"
        />

        {/* Personas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {personas.map((persona, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{persona.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{persona.name}</h3>
              <p className="text-gray-600 mb-4">{persona.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {persona.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Use Case:</h4>
                <p className="text-sm text-gray-600">{persona.useCase}</p>
              </div>
              
              <a 
                href={getGitHubTemplateUrl('persona', persona.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                View Template
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Getting Started Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started with Personas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Choose Your Persona</h3>
              <p className="text-gray-600 mb-4">
                Select the persona that matches your current development phase or the expertise you need.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Copy the Template</h3>
              <p className="text-gray-600 mb-4">
                Use the GitHub template link to copy the persona context into your AI conversation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Customize for Your Project</h3>
              <p className="text-gray-600 mb-4">
                Adapt the persona context with your specific project details and requirements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Get Specialized Responses</h3>
              <p className="text-gray-600 mb-4">
                Receive role-specific guidance, best practices, and expert-level insights from your AI assistant.
              </p>
            </div>
          </div>
        </div>

        <GettingStarted links={commonPatterns.gettingStartedLinks} />
      </main>

      <Footer />
    </div>
  )
}
