import React, { useState } from 'react';
import { Navigation, MessageSquare, Calendar, Search } from 'lucide-react';
import { chandigarhRoutes } from '../data/routes';

interface ChandigarhRoutesSectionProps {
  onOpenBooking: (initialData?: { pickup?: string; drop?: string; routeTitle?: string }) => void;
}

export const ChandigarhRoutesSection: React.FC<ChandigarhRoutesSectionProps> = ({ onOpenBooking }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRoutes = chandigarhRoutes.filter(
    (route) =>
      route.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWhatsApp = (routeName: string) => {
    const text = `Hello AXI 24X7, I would like to book / enquire for ${routeName}. Please provide fare and vehicle details.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919815657986?text=${encoded}`, '_blank');
  };

  return (
    <section id="chandigarh-routes" className="py-20 bg-[#F7F9FC] border-t border-slate-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="section-label">
              <Navigation size={14} />
              <span>CHANDIGARH TRI-CITY & PEERMUCHALLA ROUTES</span>
            </div>
            <h2 className="section-title">CHANDIGARH TO POPULAR DESTINATIONS</h2>
            <p className="section-sub">
              Connecting Chandigarh, Peermuchalla, Mohali, and Panchkula to major North Indian cities, Himalayan hill stations, and spiritual pilgrimage shrines.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-72 relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search Chandigarh route..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-10 text-xs py-2.5 rounded-full"
            />
          </div>
        </div>

        {/* Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredRoutes.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,59,149,0.05)] card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#003B95] border border-blue-100">
                    {route.tag || 'Tri-city Outstation'}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">24x7 Cab</span>
                </div>

                <h3 className="text-base font-extrabold text-[#0A1F44] mb-2 leading-snug">
                  {route.displayName}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-3">
                  {route.description}
                </p>
              </div>

              {/* Action Buttons: Book / Enquire & WhatsApp */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <button
                  onClick={() =>
                    onOpenBooking({
                      pickup: 'Chandigarh',
                      drop: route.to,
                      routeTitle: route.displayName,
                    })
                  }
                  className="btn-primary w-full text-xs py-2.5 justify-center font-extrabold"
                >
                  <Calendar size={13} />
                  <span>Book / Enquire</span>
                </button>

                <button
                  onClick={() => handleWhatsApp(route.displayName)}
                  className="btn-whatsapp w-full text-xs py-2 justify-center font-bold"
                >
                  <MessageSquare size={13} />
                  <span>WhatsApp Enquiry</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredRoutes.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 text-sm">No routes matching "{searchTerm}".</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-3 text-xs font-bold text-[#003B95] underline"
            >
              Reset search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
