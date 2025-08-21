interface GettingStartedLink {
  title: string
  description: string
  href: string
  icon: 'book' | 'template' | 'demo'
  color: 'green' | 'blue' | 'purple'
}

interface GettingStartedProps {
  title?: string
  links: GettingStartedLink[]
}

export default function GettingStarted({ 
  title = "Ready to Get Started?", 
  links 
}: GettingStartedProps) {
  const getIconSvg = (icon: string) => {
    switch (icon) {
      case 'book':
        return (
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        )
      case 'template':
        return (
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        )
      case 'demo':
        return (
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      default:
        return null
    }
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-100'
      case 'blue':
        return 'bg-blue-100'
      case 'purple':
        return 'bg-purple-100'
      default:
        return 'bg-gray-100'
    }
  }

  return (
    <div className="bg-gray-50 rounded-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {links.map((link, index) => (
          <div key={index} className="text-center">
            <div className={`${getColorClasses(link.color)} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
              {getIconSvg(link.icon)}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
            <p className="text-gray-600 mb-4">{link.description}</p>
            <a href={link.href} className="text-primary-600 hover:text-primary-700 font-medium">
              {link.title.includes('Learn') ? 'View Workflow Guide' : 
               link.title.includes('Explore') ? 'Browse All Templates' : 
               'View Live Demo'} →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
