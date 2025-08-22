interface QuickStartStep {
  step: number
  title: string
  description: string
}

interface QuickStartGuideProps {
  title?: string
  steps: QuickStartStep[]
  color?: 'blue' | 'green' | 'purple' | 'orange'
}

export default function QuickStartGuide({ 
  title = "Quick Start Guide", 
  steps, 
  color = 'blue' 
}: QuickStartGuideProps) {
  const colorClasses = {
    blue: 'glass-card border-primary-500/30 bg-primary-600 text-white text-slate-200',
    green: 'glass-card border-green-500/30 bg-green-600 text-white text-slate-200',
    purple: 'glass-card border-purple-500/30 bg-purple-600 text-white text-slate-200',
    orange: 'glass-card border-orange-500/30 bg-orange-600 text-white text-slate-200'
  }

  const [bgColor, borderColor, buttonColor, titleColor, textColor] = colorClasses[color].split(' ')

  return (
    <div className={`${bgColor} border ${borderColor} rounded-2xl p-8 mb-16 hover:shadow-glass-lg transition-all duration-300`}>
      <h2 className={`text-2xl font-bold ${titleColor} mb-8 text-center`}>{title}</h2>
      <div className={`grid md:grid-cols-2 ${steps.length === 4 ? 'lg:grid-cols-4' : steps.length === 3 ? 'lg:grid-cols-3' : ''} gap-6`}>
        {steps.map((step, stepIndex) => (
          <div key={stepIndex} className="text-center">
            <div className={`${buttonColor} text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-glass transition-transform duration-300 hover:scale-110`}>
              {step.step}
            </div>
            <h3 className={`text-lg font-semibold ${titleColor} mb-2`}>{step.title}</h3>
            <p className={`${textColor} text-sm leading-relaxed`}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
