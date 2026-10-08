import { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickHighlights } from './components/QuickHighlights';
import { RouteSearchWidget } from './components/RouteSearchWidget';
import { ServicesSection } from './components/ServicesSection';
import { VehicleFleetSection } from './components/VehicleFleetSection';
import { DelhiRoutesSection } from './components/DelhiRoutesSection';
import { ChandigarhRoutesSection } from './components/ChandigarhRoutesSection';
import { TourPackagesSection } from './components/TourPackagesSection';
import { TourHighlightsSection } from './components/TourHighlightsSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { AboutSection } from './components/AboutSection';
import { LocationsContactSection } from './components/LocationsContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{
    type?: string;
    pickup?: string;
    drop?: string;
    vehicle?: string;
    title?: string;
    routeTitle?: string;
  } | undefined>(undefined);

  const handleOpenBooking = (data?: {
    type?: string;
    pickup?: string;
    drop?: string;
    vehicle?: string;
    title?: string;
    routeTitle?: string;
  }) => {
    setModalData(data);
    setModalOpen(true);
  };

  const handleCloseBooking = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1E293B]">
      {/* 1. Announcement & Contact TopBar */}
      <TopBar />

      {/* 2. Sticky PeCAB Style Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* 3. Hero Section with 24x7 badge, heading, road-trip imagery & quick enquiry */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 4. 4 Quick Highlights Cards */}
        <QuickHighlights />

        {/* 5. Centralized Route Search & Dynamic Filter Component */}
        <RouteSearchWidget onOpenBooking={handleOpenBooking} />

        {/* 6. Taxi Services Section (Delhi, Chandigarh, Outstation, One-way, Round-trip, Tour) */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* 7. Vehicle Fleet & Rate Card Section (Dzire, Ertiga, Carens, Crysta, Hycross, Tempo) */}
        <VehicleFleetSection onOpenBooking={handleOpenBooking} />

        {/* 8. Popular Delhi Routes Section (21 routes with Enquire & WhatsApp) */}
        <DelhiRoutesSection onOpenBooking={handleOpenBooking} />

        {/* 9. Chandigarh Routes Section (16 routes with Book/Enquire & WhatsApp) */}
        <ChandigarhRoutesSection onOpenBooking={handleOpenBooking} />

        {/* 10. Tour Packages Section (6 North India holiday & pilgrimage packages) */}
        <TourPackagesSection onOpenBooking={handleOpenBooking} />

        {/* 11. Dedicated Highlights: Himachal, Uttarakhand/Char Dham, Kashmir, Rajasthan, Agra/Mathura */}
        <TourHighlightsSection onOpenBooking={handleOpenBooking} />

        {/* 12. Service Area Section (North India coverage) */}
        <ServiceAreaSection />

        {/* 13. Factual About Section with Peermuchalla Chandigarh & Gurgaon locations */}
        <AboutSection />

        {/* 14. Locations, Contact & Direct Enquiry Form with GST */}
        <LocationsContactSection />
      </main>

      {/* 15. Footer with GST, both locations, quick links and disclaimer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={handleCloseBooking}
        initialData={modalData}
      />

      {/* Floating WhatsApp with pulsing ring */}
      <FloatingWhatsApp />

      {/* Sticky Action Bar for Mobile Screens */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}

export default App;
