import React, { useState } from 'react';
import { MapPin, MessageSquare, Calendar, Search } from 'lucide-react';
import { delhiRoutes } from '../data/routes';

interface DelhiRoutesSectionProps {
  onOpenBooking: (initialData?: { pickup?: string; drop?: string; routeTitle?: string }) => void;
}

export const DelhiRoutesSection: React.FC<DelhiRoutesSectionProps> = ({ onOpenBooking }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRoutes = delhiRoutes.filter(
    (route) =>
      route.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWhatsApp = (routeName: string) => {
    const text = `Hello AXI 24X7, I want to enquire about taxi service for ${routeName}. Please share vehicle availability and quote.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919815657986?text=${encoded}`, '_blank');
  };

  return (
    <section id="delhi-routes" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="section-label">
              <MapPin size={14} />
              <span>DELHI NCR OUTSTATION ROUTES</span>
            </div>
            <h2 className="section-title">DELHI TO POPULAR DESTINATIONS</h2>
            <p className="section-sub">
              Doorstep taxi pickup from anywhere in Delhi, Noida, Gurgaon, Faridabad, and IGI Airport to prominent North Indian cities, hill stations, and pilgrimage centres.
            </p>
          </div>

          {/* Quick Filter Search Input */}
          <div className="w-full md:w-72 relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search Delhi route..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-10 text-xs py-2.5 rounded-full"
            />
          </div>
        </div>

        {/* Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoutes.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,59,149,0.05)] card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#003B95] border border-blue-100">
                    {route.tag || 'Popular Route'}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    24x7 Cab
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#0A1F44] mb-2">
                  {route.displayName}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {route.description}
                </p>
              </div>

              {/* Action Buttons: Enquire & WhatsApp */}
              <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-slate-100">
                <button
                  onClick={() =>
                    onOpenBooking({
                      pickup: 'Delhi',
                      drop: route.to,
                      routeTitle: route.displayName,
                    })
                  }
                  className="btn-primary text-xs py-2.5 justify-center font-extrabold"
                >
                  <Calendar size={13} />
                  <span>Enquire</span>
                </button>

                <button
                  onClick={() => handleWhatsApp(route.displayName)}
                  className="btn-whatsapp text-xs py-2.5 justify-center font-bold"
                >
                  <MessageSquare size={13} />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredRoutes.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
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
