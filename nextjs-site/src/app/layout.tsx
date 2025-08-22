import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://joe-glasgow.github.io/ai-development-workflow/'),
  title: 'AI-Powered Development Workflow - Boost Development Speed by 60-70%',
  description: 'Complete framework for AI-assisted software development. Proven 60-70% development speed improvement with AI workflows, templates, and automation tools.',
  keywords: 'AI development, software development workflow, AI-assisted coding, development automation, AI tools, software engineering, development productivity, AI personas, development templates, prompt engineering',
  authors: [{ name: 'Joe Glasgow' }],
  openGraph: {
    title: 'AI-Powered Development Workflow - 60-70% Faster Development',
    description: 'Complete framework for AI-assisted software development with proven results. Boost development speed by 60-70% with AI workflows, templates, and automation tools.',
    type: 'website',
    url: 'https://joe-glasgow.github.io/ai-development-workflow/',
    images: ['/assets/images/placeholder-og.png'],
  },
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg" />
        <link rel="canonical" href="https://joe-glasgow.github.io/ai-development-workflow/" />
      </head>
      <body className="font-sans antialiased text-slate-100">
        <div className="min-h-dvh">
          {children}
        </div>
      </body>
    </html>
  )
}
