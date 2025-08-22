import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import QuickStart from '@/components/QuickStart'
import Features from '@/components/Features'
import Results from '@/components/Results'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Results />
        <QuickStart />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
