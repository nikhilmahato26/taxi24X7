import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import HeroHighlights from './components/sections/HeroHighlights'
import RouteSearchWidget from './components/sections/RouteSearchWidget'
import VehicleFleet from './components/sections/VehicleFleet'
import DelhiRoutes from './components/sections/DelhiRoutes'
import ChandigarhRoutes from './components/sections/ChandigarhRoutes'
import TourPackages from './components/sections/TourPackages'
import Services from './components/sections/Services'
import ServiceArea from './components/sections/ServiceArea'
import About from './components/sections/About'
import LocationsContact from './components/sections/LocationsContact'
import CTAStrip from './components/sections/CTAStrip'
import Footer from './components/Footer'
import WhatsAppFloat from './components/ui/WhatsAppFloat'
import EnquiryModal from './components/ui/EnquiryModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalVehicle, setModalVehicle] = useState('')
  const [modalRoute, setModalRoute] = useState('')
  const [modalPackage, setModalPackage] = useState('')

  const handleOpenEnquiry = (vehicle = '', route = '', tourPackage = '') => {
    setModalVehicle(vehicle)
    setModalRoute(route)
    setModalPackage(tourPackage)
    setModalOpen(true)
  }

  const handleCloseEnquiry = () => {
    setModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-amber-400 focus:text-slate-950 focus:font-black focus:px-4 focus:py-2 focus:rounded-xl focus:shadow-xl"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenEnquiry={handleOpenEnquiry} />
        <HeroHighlights onOpenEnquiry={handleOpenEnquiry} />
        <RouteSearchWidget onOpenEnquiry={handleOpenEnquiry} />
        <VehicleFleet onOpenEnquiry={handleOpenEnquiry} />
        <DelhiRoutes onOpenEnquiry={handleOpenEnquiry} />
        <ChandigarhRoutes onOpenEnquiry={handleOpenEnquiry} />
        <TourPackages onOpenEnquiry={handleOpenEnquiry} />
        <Services onOpenEnquiry={handleOpenEnquiry} />
        <ServiceArea onOpenEnquiry={handleOpenEnquiry} />
        <About onOpenEnquiry={handleOpenEnquiry} />
        <LocationsContact onOpenEnquiry={handleOpenEnquiry} />
        <CTAStrip onOpenEnquiry={() => handleOpenEnquiry()} />
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Floating 24x7 Action Buttons */}
      <WhatsAppFloat />

      {/* Global Booking / Route Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={handleCloseEnquiry}
        initialVehicle={modalVehicle}
        initialRoute={modalRoute}
        initialPackage={modalPackage}
      />
    </div>
  )
}
