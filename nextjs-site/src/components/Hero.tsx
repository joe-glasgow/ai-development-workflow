export default function Hero() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-yellow/25 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-accent-pink/25 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl"></div>
      
      <div className="container-max relative z-10">
        <div className="text-center">
          {/* Bold Typography with Colorful Accents */}
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              <span className="relative inline-block">
                AI-Powered
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-yellow rounded-lg rotate-12 opacity-80"></div>
              </span>
              <br />
              <span className="relative inline-block bg-gradient-to-r from-primary-400 via-accent-pink to-accent-purple bg-clip-text text-transparent">
                Development
                <div className="absolute -bottom-1 -left-3 w-6 h-6 bg-accent-cyan rounded-full opacity-70"></div>
              </span>
              <br />
              <span className="relative inline-block">
                Workflow
                <div className="absolute top-0 right-0 w-4 h-4 bg-accent-pink rounded-sm rotate-45 opacity-90"></div>
              </span>
            </h1>
          </div>
          
          <div className="glass-hero p-8 mb-12 max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-200 mb-6 leading-relaxed">
              A comprehensive framework for leveraging AI throughout the entire development lifecycle - from design to deployment.
            </p>
            <div className="inline-flex items-center px-6 py-3 glass-medium rounded-full text-lg font-bold text-accent-yellow mb-6">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Proven to boost development speed by 60-70%
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="#quick-start" className="group relative px-8 py-4 glass-medium rounded-2xl text-lg font-bold text-white hover:shadow-glass-xl transition-all duration-300 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-purple rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10">Get Started Now</span>
            </a>
            <a href="#results" className="group relative px-8 py-4 glass-light rounded-2xl text-lg font-bold text-white border-2 border-glass-border hover:border-primary-400 transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10">View Results</span>
            </a>
          </div>

          {/* What's New Badge */}
          <div className="inline-flex items-center px-6 py-3 glass-card text-sm font-medium mb-12 hover:shadow-glass-lg transition-all duration-300">
            <div className="w-2 h-2 bg-accent-yellow rounded-full mr-3 animate-pulse"></div>
            <span className="text-slate-200">🚀 What&apos;s New: Complete Functional Tools + FREE AI Integration</span>
          </div>

          {/* Enhanced Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="glass-card p-8 text-center group hover:shadow-glass-xl transition-all duration-300 transform hover:scale-105">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow to-accent-pink rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="relative w-full h-full bg-glass-medium rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">60-70% Faster</h3>
              <p className="text-slate-300 leading-relaxed">Proven development speed improvement with real-world metrics</p>
            </div>
            
            <div className="glass-card p-8 text-center group hover:shadow-glass-xl transition-all duration-300 transform hover:scale-105">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="relative w-full h-full bg-glass-medium rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">95% Quality Score</h3>
              <p className="text-slate-300 leading-relaxed">Consistent code quality across all components</p>
            </div>
            
            <div className="glass-card p-8 text-center group hover:shadow-glass-xl transition-all duration-300 transform hover:scale-105">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-pink to-accent-yellow rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="relative w-full h-full bg-glass-medium rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Complete Framework</h3>
              <p className="text-slate-300 leading-relaxed">Templates, personas, workflows, and automation tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
