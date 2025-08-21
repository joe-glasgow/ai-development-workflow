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
    blue: 'bg-blue-50 border-blue-200 bg-blue-600 text-blue-900 text-blue-800',
    green: 'bg-green-50 border-green-200 bg-green-600 text-green-900 text-green-800',
    purple: 'bg-purple-50 border-purple-200 bg-purple-600 text-purple-900 text-purple-800',
    orange: 'bg-orange-50 border-orange-200 bg-orange-600 text-orange-900 text-orange-800'
  }

  const [bgColor, borderColor, buttonColor, titleColor, textColor] = colorClasses[color].split(' ')

  return (
    <div className={`${bgColor} border ${borderColor} rounded-lg p-8 mb-16`}>
      <h2 className={`text-2xl font-bold ${titleColor} mb-8 text-center`}>{title}</h2>
      <div className={`grid md:grid-cols-2 ${steps.length === 4 ? 'lg:grid-cols-4' : steps.length === 3 ? 'lg:grid-cols-3' : ''} gap-6`}>
        {steps.map((step, stepIndex) => (
          <div key={stepIndex} className="text-center">
            <div className={`${buttonColor} text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4`}>
              {step.step}
            </div>
            <h3 className={`text-lg font-semibold ${titleColor} mb-2`}>{step.title}</h3>
            <p className={`${textColor} text-sm`}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
