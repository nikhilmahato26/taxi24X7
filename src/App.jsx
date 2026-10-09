import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import FareDisclaimer from './components/sections/FareDisclaimer'
import Fleet from './components/sections/Fleet'
import TourPackages from './components/sections/TourPackages'
import RoutesSection from './components/sections/RoutesSection'
import Services from './components/sections/Services'
import LocationsSection from './components/sections/LocationsSection'
import HowItWorks from './components/sections/HowItWorks'
import About from './components/sections/About'
import WhyChoose from './components/sections/WhyChoose'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import CTAStrip from './components/sections/CTAStrip'
import Footer from './components/Footer'
import WhatsAppFloat from './components/ui/WhatsAppFloat'
import { ToastProvider } from './components/ui/Toast'

export default function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-white">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-yellow-primary focus:text-blue-dark focus:font-bold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="home">
          <Hero />
          <FareDisclaimer />
          <Fleet />
          <TourPackages />
          <RoutesSection />
          <Services />
          <LocationsSection />
          <HowItWorks />
          <About />
          <WhyChoose />
          <Testimonials />
          <FAQ />
          <Contact />
          <CTAStrip />
        </main>

        <Footer />
        <WhatsAppFloat />
      </div>
    </ToastProvider>
  )
}
