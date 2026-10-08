import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import HeroHighlights from './components/sections/HeroHighlights'
import About from './components/sections/About'
import Services from './components/sections/Services'
import BangaloreSightseeing from './components/sections/BangaloreSightseeing'
import KarnatakaTravel from './components/sections/KarnatakaTravel'
import Fleet from './components/sections/Fleet'
import BookingEnquiry from './components/sections/BookingEnquiry'
import Contact from './components/sections/Contact'
import CTAStrip from './components/sections/CTAStrip'
import Footer from './components/Footer'
import WhatsAppFloat from './components/ui/WhatsAppFloat'
import EnquiryModal from './components/ui/EnquiryModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalVehicle, setModalVehicle] = useState('')
  const [modalTripType, setModalTripType] = useState('')

  const handleOpenEnquiry = (vehicle = '', tripType = '') => {
    setModalVehicle(vehicle)
    setModalTripType(tripType)
    setModalOpen(true)
  }

  const handleCloseEnquiry = () => {
    setModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-white">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-amber-400 focus:text-slate-950 focus:font-bold focus:px-4 focus:py-2 focus:rounded-xl focus:shadow-xl"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Content Stream */}
      <main id="main-content">
        <Hero onOpenEnquiry={handleOpenEnquiry} />
        <HeroHighlights onOpenEnquiry={handleOpenEnquiry} />
        <About onOpenEnquiry={handleOpenEnquiry} />
        <Services onOpenEnquiry={handleOpenEnquiry} />
        <BangaloreSightseeing onOpenEnquiry={handleOpenEnquiry} />
        <KarnatakaTravel onOpenEnquiry={handleOpenEnquiry} />
        <Fleet onOpenEnquiry={handleOpenEnquiry} />
        <BookingEnquiry />
        <Contact onOpenEnquiry={handleOpenEnquiry} />
        <CTAStrip onOpenEnquiry={() => handleOpenEnquiry()} />
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Floating Action Buttons */}
      <WhatsAppFloat />

      {/* Interactive Global Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={handleCloseEnquiry}
        initialVehicle={modalVehicle}
        initialTripType={modalTripType}
      />
    </div>
  )
}
