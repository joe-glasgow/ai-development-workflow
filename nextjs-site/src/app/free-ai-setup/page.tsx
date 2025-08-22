import PageHero from '@/components/ui/PageHero'
import Link from 'next/link'

export default function FreeAISetupPage() {
  return (
    <main className="container-max section-padding">
      <PageHero 
        title="Free & Low-Cost AI Setup"
        description="Get started with AI-powered development without breaking the bank. Perfect for students, junior developers, and anyone wanting to try the workflow."
        tipTitle="💡 Pro Tip"
        tipDescription="Start with Ollama for completely free local AI, then upgrade to cloud providers as your projects grow."
        tipColor="green"
      />
      
          {/* Free Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">🆓 Completely Free Options</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Ollama */}
              <div className="card border-2 border-green-400/30">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Ollama</h3>
                    <span className="text-green-400 text-sm font-medium">Recommended - Local AI</span>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Run AI models locally on your computer. Completely free with no API costs, works offline, and keeps your data private.
                </p>
                
                <div className="bg-black/60 text-green-400 p-4 rounded-lg font-mono text-sm mb-6 border border-glass-border">
                  <div># Install Ollama</div>
                  <div>curl -fsSL https://ollama.ai/install.sh | sh</div>
                  <div></div>
                  <div># Install coding model</div>
                  <div>ollama pull codellama:7b</div>
                  <div></div>
                  <div># Start server</div>
                  <div>ollama serve</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-green-400 font-bold text-lg">$0</div>
                    <div className="text-slate-400 text-sm">Total Cost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 font-bold text-lg">∞</div>
                    <div className="text-slate-400 text-sm">Usage Limit</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">Free Forever</span>
                  <span className="px-3 py-1 bg-accent-cyan/20 text-accent-cyan rounded-full text-sm">Privacy First</span>
                  <span className="px-3 py-1 bg-accent-purple/20 text-accent-purple rounded-full text-sm">Offline Ready</span>
                </div>
              </div>

              {/* Google AI Studio */}
              <div className="card border-2 border-blue-400/30">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Google AI Studio</h3>
                    <span className="text-blue-400 text-sm font-medium">Generous Free Tier</span>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Free tier with generous limits for Gemini models. Good performance and reliability for cloud-based AI.
                </p>
                
                <div className="bg-black/60 text-green-400 p-4 rounded-lg font-mono text-sm mb-6 border border-glass-border">
                  <div># Get free API key</div>
                  <div>open https://makersuite.google.com/app/apikey</div>
                  <div></div>
                  <div># Configure in workflow</div>
                  <div>ai-workflow setup</div>
                  <div># Choose "Google Gemini - FREE Tier"</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-blue-400 font-bold text-lg">$0</div>
                    <div className="text-slate-400 text-sm">Free Tier</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-bold text-lg">60/min</div>
                    <div className="text-slate-400 text-sm">Rate Limit</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">Generous Limits</span>
                  <span className="px-3 py-1 bg-accent-cyan/20 text-accent-cyan rounded-full text-sm">Fast Response</span>
                  <span className="px-3 py-1 bg-accent-purple/20 text-accent-purple rounded-full text-sm">Reliable</span>
                </div>
              </div>

              {/* Hugging Face */}
              <div className="card border-2 border-orange-400/30">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Hugging Face</h3>
                    <span className="text-orange-400 text-sm font-medium">1000 Free Calls/Month</span>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Free tier with 1000 API calls per month. Access to many open-source models, perfect for experimentation.
                </p>
                
                <div className="bg-black/60 text-green-400 p-4 rounded-lg font-mono text-sm mb-6 border border-glass-border">
                  <div># Create account & get token</div>
                  <div>open https://huggingface.co/settings/tokens</div>
                  <div></div>
                  <div># Configure in workflow</div>
                  <div>ai-workflow setup</div>
                  <div># Choose "Hugging Face - FREE Tier"</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-orange-400 font-bold text-lg">1000</div>
                    <div className="text-slate-400 text-sm">Free Calls/Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-orange-400 font-bold text-lg">50+</div>
                    <div className="text-slate-400 text-sm">Model Options</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-orange-400/20 text-orange-400 rounded-full text-sm">Many Models</span>
                  <span className="px-3 py-1 bg-accent-cyan/20 text-accent-cyan rounded-full text-sm">Open Source</span>
                  <span className="px-3 py-1 bg-accent-purple/20 text-accent-purple rounded-full text-sm">Learning Focused</span>
                </div>
              </div>
            </div>
          </div>

          {/* Low-Cost Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">💰 Low-Cost Options</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold text-white mb-4">OpenAI GPT-3.5 Turbo</h3>
                <p className="text-slate-300 mb-6">
                  Excellent performance at a fraction of GPT-4 cost. Perfect for most development tasks.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-primary-400 font-bold text-lg">$0.002</div>
                    <div className="text-slate-400 text-sm">per 1K tokens</div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary-400 font-bold text-lg">~$1</div>
                    <div className="text-slate-400 text-sm">per day typical</div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary-400 font-bold text-lg">Fast</div>
                    <div className="text-slate-400 text-sm">Response time</div>
                  </div>
                </div>
                <div className="bg-black/60 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div>ai-workflow setup</div>
                  <div># Choose "OpenAI (GPT-4) - Paid"</div>
                  <div># Model: gpt-3.5-turbo</div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-white mb-4">Anthropic Claude Haiku</h3>
                <p className="text-slate-300 mb-6">
                  Fast and efficient model with excellent reasoning capabilities at very low cost.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-primary-400 font-bold text-lg">$0.25</div>
                    <div className="text-slate-400 text-sm">per 1M tokens</div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary-400 font-bold text-lg">~$0.50</div>
                    <div className="text-slate-400 text-sm">per day typical</div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary-400 font-bold text-lg">Smart</div>
                    <div className="text-slate-400 text-sm">Reasoning</div>
                  </div>
                </div>
                <div className="bg-black/60 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div>ai-workflow setup</div>
                  <div># Choose "Anthropic (Claude) - Paid"</div>
                  <div># Model: claude-3-haiku-20240307</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Start Guide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">🚀 Quick Start with Free AI</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Ollama Setup */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-green-400 text-black rounded-full flex items-center justify-center font-bold mr-3 text-sm">1</span>
                  Ollama Setup (Recommended)
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Install Ollama</h4>
                      <p className="text-slate-400 text-sm">Visit https://ollama.ai and download for your OS</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Download AI Model</h4>
                      <div className="bg-black/40 p-2 rounded text-xs font-mono text-green-400 mt-2">
                        ollama pull codellama:7b
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Start Server</h4>
                      <div className="bg-black/40 p-2 rounded text-xs font-mono text-green-400 mt-2">
                        ollama serve
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Setup Workflow</h4>
                      <div className="bg-black/40 p-2 rounded text-xs font-mono text-green-400 mt-2">
                        ai-workflow setup<br/>
                        # Choose "Local Model (Ollama) - FREE"
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google AI Studio Setup */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-blue-400 text-black rounded-full flex items-center justify-center font-bold mr-3 text-sm">2</span>
                  Google AI Studio
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-400/20 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Get Free API Key</h4>
                      <p className="text-slate-400 text-sm">Visit Google AI Studio and create free account</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-400/20 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Configure Workflow</h4>
                      <div className="bg-black/40 p-2 rounded text-xs font-mono text-green-400 mt-2">
                        ai-workflow setup<br/>
                        # Choose "Google Gemini - FREE Tier"
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-400/20 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Start Coding</h4>
                      <div className="bg-black/40 p-2 rounded text-xs font-mono text-green-400 mt-2">
                        ai-workflow chat<br/>
                        # Begin AI-assisted development
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">📊 Cost Comparison</h2>
            
            <div className="glass-card p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-glass-border">
                      <th className="text-white font-bold py-4 px-4">Provider</th>
                      <th className="text-white font-bold py-4 px-4">Free Tier</th>
                      <th className="text-white font-bold py-4 px-4">Cost After Free</th>
                      <th className="text-white font-bold py-4 px-4">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-glass-border/50">
                      <td className="py-4 px-4 font-medium">Ollama</td>
                      <td className="py-4 px-4 text-green-400">Unlimited</td>
                      <td className="py-4 px-4">Hardware only</td>
                      <td className="py-4 px-4">Privacy, unlimited use</td>
                    </tr>
                    <tr className="border-b border-glass-border/50">
                      <td className="py-4 px-4 font-medium">Google AI Studio</td>
                      <td className="py-4 px-4 text-green-400">Generous limits</td>
                      <td className="py-4 px-4">$0.50/1M tokens</td>
                      <td className="py-4 px-4">Balanced performance/cost</td>
                    </tr>
                    <tr className="border-b border-glass-border/50">
                      <td className="py-4 px-4 font-medium">Hugging Face</td>
                      <td className="py-4 px-4 text-green-400">1000 calls/month</td>
                      <td className="py-4 px-4">$9/month</td>
                      <td className="py-4 px-4">Experimentation</td>
                    </tr>
                    <tr className="border-b border-glass-border/50">
                      <td className="py-4 px-4 font-medium">OpenAI GPT-3.5</td>
                      <td className="py-4 px-4 text-yellow-400">$5 credit</td>
                      <td className="py-4 px-4">$0.002/1K tokens</td>
                      <td className="py-4 px-4">Production quality</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">Anthropic Claude</td>
                      <td className="py-4 px-4 text-yellow-400">$5 credit</td>
                      <td className="py-4 px-4">$0.25/1M tokens</td>
                      <td className="py-4 px-4">Advanced reasoning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Start for Free?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Choose your preferred free option and begin AI-powered development today. No credit card required!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://ollama.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary px-8 py-4"
              >
                Download Ollama (Free)
              </a>
              <a 
                href="https://makersuite.google.com/app/apikey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary px-8 py-4"
              >
                Get Google AI Key (Free)
              </a>
            </div>
            
            <p className="text-slate-400 mt-6">
              Need help? Check out our <Link href="/workflow-guide" className="text-primary-400 hover:text-primary-300">complete workflow guide</Link> or browse <Link href="/templates" className="text-primary-400 hover:text-primary-300">templates</Link>.
            </p>
          </div>
    </main>
  )
}
