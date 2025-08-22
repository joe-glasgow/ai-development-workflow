/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ai-radial': 'radial-gradient(1200px 600px at 10% -10%, rgba(37, 99, 235, 0.25), transparent 60%), radial-gradient(800px 400px at 110% 10%, rgba(99, 102, 241, 0.2), transparent 60%)',
        'ai-linear': 'linear-gradient(180deg, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.95) 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'accent-gradient': 'linear-gradient(45deg, #f59e0b, #ef4444, #ec4899, #8b5cf6)',
      },
      boxShadow: {
        glass: '0 10px 30px rgba(2, 6, 23, 0.5)',
        'glass-lg': '0 20px 40px rgba(2, 6, 23, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'glass-xl': '0 25px 50px rgba(2, 6, 23, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'glass-inner': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      colors: {
        // Enhanced glassmorphism tokens for true dark background
        'glass-base': 'rgba(15, 23, 42, 0.7)',
        'glass-light': 'rgba(15, 23, 42, 0.5)',
        'glass-medium': 'rgba(15, 23, 42, 0.8)',
        'glass-dark': 'rgba(15, 23, 42, 0.9)',
        'glass-border': 'rgba(255, 255, 255, 0.15)',
        'glass-border-light': 'rgba(255, 255, 255, 0.1)',
        'glass-hover': 'rgba(15, 23, 42, 0.85)',
        // Accent colors inspired by the design references
        'accent-yellow': '#f59e0b',
        'accent-pink': '#ec4899',
        'accent-purple': '#8b5cf6',
        'accent-cyan': '#06b6d4',
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
