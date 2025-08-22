'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Helper function to determine if a nav item is active
  const isActiveRoute = (route: string) => {
    if (route === '/templates') {
      // Templates is active for /templates and any /templates/* route except specific sub-routes
      return pathname === '/templates' || 
             (pathname.startsWith('/templates/') && 
              !pathname.startsWith('/templates/personas') && 
              !pathname.startsWith('/templates/workflows'))
    }
    return pathname === route || pathname.startsWith(route + '/')
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    if (isMenuOpen) {
      document.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
    <header
      className={`glass-nav text-slate-100 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-glass-xl backdrop-blur-3xl bg-glass-dark' : 'backdrop-blur-2xl'
      }`}
      role="banner"
    >
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="group flex items-center space-x-2 hover:opacity-80 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-md"
          >
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-accent-yellow rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              <span className="text-2xl font-black bg-gradient-to-r from-accent-yellow via-accent-pink to-accent-purple bg-clip-text text-transparent">
                AI
              </span>
              <span className="text-xl font-bold text-white">
                Workflow
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex" aria-label="Main navigation" role="navigation">
            <div className="relative">
              {/* Gradient border container */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full p-[2px] shadow-2xl">
                <div className="glass-light backdrop-blur-xl bg-black/20 border-0 rounded-full h-full w-full"></div>
              </div>
              {/* Navigation content */}
              <div className="relative glass-light backdrop-blur-xl bg-black/20 border-0 rounded-full p-2 shadow-2xl">
                <div className="flex space-x-2">
                  <Link
                    href="/free-ai-setup"
                    aria-current={isActiveRoute('/free-ai-setup') ? 'page' : undefined}
                    className={`relative px-5 py-3 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                      isActiveRoute('/free-ai-setup') 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50 border-0' 
                        : 'text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg'
                    }`}
                  >
                    {isActiveRoute('/free-ai-setup') && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-75 -z-10"></div>
                    )}
                    Free AI
                  </Link>
                  <Link
                    href="/cli-tools"
                    aria-current={isActiveRoute('/cli-tools') ? 'page' : undefined}
                    className={`relative px-5 py-3 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                      isActiveRoute('/cli-tools') 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50 border-0' 
                        : 'text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg'
                    }`}
                  >
                    {isActiveRoute('/cli-tools') && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-75 -z-10"></div>
                    )}
                    CLI Tools
                  </Link>
                  <Link
                    href="/templates"
                    aria-current={isActiveRoute('/templates') ? 'page' : undefined}
                    className={`relative px-5 py-3 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                      isActiveRoute('/templates') 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50 border-0' 
                        : 'text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg'
                    }`}
                  >
                    {isActiveRoute('/templates') && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-75 -z-10"></div>
                    )}
                    Templates
                  </Link>
                  <Link
                    href="/templates/personas"
                    aria-current={isActiveRoute('/templates/personas') ? 'page' : undefined}
                    className={`relative px-5 py-3 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                      isActiveRoute('/templates/personas') 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50 border-0' 
                        : 'text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg'
                    }`}
                  >
                    {isActiveRoute('/templates/personas') && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-75 -z-10"></div>
                    )}
                    Personas
                  </Link>
                  <Link
                    href="/templates/workflows"
                    aria-current={isActiveRoute('/templates/workflows') ? 'page' : undefined}
                    className={`relative px-5 py-3 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                      isActiveRoute('/templates/workflows') 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50 border-0' 
                        : 'text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg'
                    }`}
                  >
                    {isActiveRoute('/templates/workflows') && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-75 -z-10"></div>
                    )}
                    Workflows
                  </Link>
                  <Link
                    href="/sample-project"
                    aria-current={isActiveRoute('/sample-project') ? 'page' : undefined}
                    className={`relative px-5 py-3 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                      isActiveRoute('/sample-project') 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50 border-0' 
                        : 'text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg'
                    }`}
                  >
                    {isActiveRoute('/sample-project') && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-75 -z-10"></div>
                    )}
                    Demo
                  </Link>
                  <Link
                    href="/workflow-guide"
                    aria-current={isActiveRoute('/workflow-guide') ? 'page' : undefined}
                    className={`relative px-5 py-3 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                      isActiveRoute('/workflow-guide') 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50 border-0' 
                        : 'text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg'
                    }`}
                  >
                    {isActiveRoute('/workflow-guide') && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-75 -z-10"></div>
                    )}
                    Guide
                  </Link>
                  <a 
                    href="https://github.com/joe-glasgow/ai-development-workflow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative px-5 py-3 rounded-full font-semibold transition-all duration-300 text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    aria-label="Open GitHub repository in a new tab"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-glass-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-primary-navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>
    </header>
    {isMenuOpen && (
      <div className="fixed inset-0 z-40 md:hidden">
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
        <nav
          id="mobile-primary-navigation"
          role="navigation"
          aria-label="Mobile navigation"
          className="fixed top-20 left-0 right-0 mx-4"
        >
          <div className="relative">
            {/* Gradient border for mobile nav */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl p-[2px] shadow-2xl">
              <div className="glass-card backdrop-blur-xl bg-black/20 border-0 rounded-2xl h-full w-full"></div>
            </div>
            {/* Mobile navigation content */}
            <div className="relative glass-card backdrop-blur-xl bg-black/20 border-0 rounded-2xl shadow-2xl animate-in slide-in-from-top-2 duration-200">
              <div className="px-4 pt-4 pb-5 space-y-3">
                <Link
                  href="/free-ai-setup"
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActiveRoute('/free-ai-setup') ? 'page' : undefined}
                  className={`relative block px-5 py-4 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                    isActiveRoute('/free-ai-setup') 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50 border-0' 
                      : 'text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg'
                  }`}
                >
                  {isActiveRoute('/free-ai-setup') && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-md opacity-75 -z-10"></div>
                  )}
                  Free AI Setup
                </Link>
                <Link
                  href="/cli-tools"
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActiveRoute('/cli-tools') ? 'page' : undefined}
                  className={`relative block px-5 py-4 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                    isActiveRoute('/cli-tools') 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50 border-0' 
                      : 'text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg'
                  }`}
                >
                  {isActiveRoute('/cli-tools') && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-md opacity-75 -z-10"></div>
                  )}
                  CLI Tools
                </Link>
                <Link
                  href="/templates"
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActiveRoute('/templates') ? 'page' : undefined}
                  className={`relative block px-5 py-4 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                    isActiveRoute('/templates') 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50 border-0' 
                      : 'text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg'
                  }`}
                >
                  {isActiveRoute('/templates') && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-md opacity-75 -z-10"></div>
                  )}
                  Templates
                </Link>
                <Link
                  href="/templates/personas"
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActiveRoute('/templates/personas') ? 'page' : undefined}
                  className={`relative block px-5 py-4 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                    isActiveRoute('/templates/personas') 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50 border-0' 
                      : 'text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg'
                  }`}
                >
                  {isActiveRoute('/templates/personas') && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-md opacity-75 -z-10"></div>
                  )}
                  Personas
                </Link>
                <Link
                  href="/templates/workflows"
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActiveRoute('/templates/workflows') ? 'page' : undefined}
                  className={`relative block px-5 py-4 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                    isActiveRoute('/templates/workflows') 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50 border-0' 
                      : 'text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg'
                  }`}
                >
                  {isActiveRoute('/templates/workflows') && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-md opacity-75 -z-10"></div>
                  )}
                  Workflows
                </Link>
                <Link
                  href="/sample-project"
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActiveRoute('/sample-project') ? 'page' : undefined}
                  className={`relative block px-5 py-4 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                    isActiveRoute('/sample-project') 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50 border-0' 
                      : 'text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg'
                  }`}
                >
                  {isActiveRoute('/sample-project') && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-md opacity-75 -z-10"></div>
                  )}
                  Demo
                </Link>
                <Link
                  href="/workflow-guide"
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActiveRoute('/workflow-guide') ? 'page' : undefined}
                  className={`relative block px-5 py-4 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                    isActiveRoute('/workflow-guide') 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50 border-0' 
                      : 'text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg'
                  }`}
                >
                  {isActiveRoute('/workflow-guide') && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-md opacity-75 -z-10"></div>
                  )}
                  Guide
                </Link>
                <a
                  href="https://github.com/joe-glasgow/ai-development-workflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="relative block px-5 py-4 rounded-xl font-semibold transition-all duration-300 text-slate-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  aria-label="Open GitHub repository in a new tab"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )}
    </>
  )
}
