'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold hover:opacity-90 transition-opacity">
            AI-Powered Development Workflow
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/templates" className="hover:text-primary-200 transition-colors font-medium">
              Templates
            </Link>
            <Link href="/sample-project" className="hover:text-primary-200 transition-colors font-medium">
              Sample Project
            </Link>
            <Link href="/workflow-guide" className="hover:text-primary-200 transition-colors font-medium">
              Workflow Guide
            </Link>
            <a 
              href="https://github.com/joe-glasgow/ai-development-workflow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary-200 transition-colors font-medium"
            >
              GitHub
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-primary-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-primary-500 mt-4 pt-4">
            <div className="flex flex-col space-y-3">
              <Link href="/templates" className="hover:text-primary-200 transition-colors font-medium">
                Templates
              </Link>
              <Link href="/sample-project" className="hover:text-primary-200 transition-colors font-medium">
                Sample Project
              </Link>
              <Link href="/workflow-guide" className="hover:text-primary-200 transition-colors font-medium">
                Workflow Guide
              </Link>
              <a 
                href="https://github.com/joe-glasgow/ai-development-workflow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-200 transition-colors font-medium"
              >
                GitHub
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
