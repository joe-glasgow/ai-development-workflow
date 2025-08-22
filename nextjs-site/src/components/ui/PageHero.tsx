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
    blue: 'glass-card border-primary-500/30 text-primary-300 text-blue-200',
    green: 'glass-card border-green-500/30 text-green-300 text-green-200',
    purple: 'glass-card border-purple-500/30 text-purple-300 text-purple-200',
    orange: 'glass-card border-orange-500/30 text-orange-300 text-orange-200'
  }

  const [bgColor, borderColor, titleColor, textColor] = colorClasses[tipColor].split(' ')

  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        {title}
      </h1>
      <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
        {description}
      </p>
      {tipTitle && tipDescription && (
        <div className={`${bgColor} border ${borderColor} rounded-2xl p-6 max-w-4xl mx-auto hover:shadow-glass-lg transition-all duration-300`}>
          <h3 className={`text-lg font-semibold ${titleColor} mb-2`}>{tipTitle}</h3>
          <p className={textColor}>
            {tipDescription}
          </p>
        </div>
      )}
    </div>
  )
}
