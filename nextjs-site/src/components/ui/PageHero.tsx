interface PageHeroProps {
  title: string
  description: string
  tipTitle?: string
  tipDescription?: string
  tipColor?: 'blue' | 'green' | 'purple' | 'orange'
}

export default function PageHero({ 
  title, 
  description, 
  tipTitle, 
  tipDescription, 
  tipColor = 'blue' 
}: PageHeroProps) {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-900 text-blue-800',
    green: 'bg-green-50 border-green-200 text-green-900 text-green-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-900 text-purple-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-900 text-orange-800'
  }

  const [bgColor, borderColor, titleColor, textColor] = colorClasses[tipColor].split(' ')

  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {title}
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        {description}
      </p>
      {tipTitle && tipDescription && (
        <div className={`${bgColor} border ${borderColor} rounded-lg p-6 max-w-4xl mx-auto`}>
          <h3 className={`text-lg font-semibold ${titleColor} mb-2`}>{tipTitle}</h3>
          <p className={textColor}>
            {tipDescription}
          </p>
        </div>
      )}
    </div>
  )
}
