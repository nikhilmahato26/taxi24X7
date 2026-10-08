import React, { useState } from 'react';
import { Search, Phone, MessageSquare, Calendar, Car, Info } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import { delhiRoutes, chandigarhRoutes } from '../data/routes';

interface RouteSearchWidgetProps {
  onOpenBooking: (initialData?: {
    type?: string;
    pickup?: string;
    drop?: string;
    vehicle?: string;
    routeTitle?: string;
  }) => void;
}

export const RouteSearchWidget: React.FC<RouteSearchWidgetProps> = ({ onOpenBooking }) => {
  const [startCity, setStartCity] = useState<'Delhi' | 'Chandigarh' | 'Other'>('Delhi');
  const [destination, setDestination] = useState<string>('Chandigarh');
  const [hasSearched, setHasSearched] = useState<boolean>(true);

  // Available destination options
  const destinationOptions =
    startCity === 'Delhi'
      ? delhiRoutes
      : startCity === 'Chandigarh'
      ? chandigarhRoutes
      : delhiRoutes; // default to delhi routes for other

  // Find matching route if exists
  const activeRoute = destinationOptions.find(
    (r) => r.to.toLowerCase() === destination.toLowerCase()
  ) || {
    displayName: `${startCity} to ${destination} Taxi`,
    description: `Direct customized taxi travel service connecting ${startCity} with ${destination}.`,
    from: startCity,
    to: destination,
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  // WhatsApp click handler
  const handleWhatsApp = (routeName: string, vehicleName?: string) => {
    const text = `Hello AXI 24X7, I would like to enquire about taxi service for ${routeName}${
      vehicleName ? ` with ${vehicleName}` : ''
    }. Please provide a quote.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919815657986?text=${encoded}`, '_blank');
  };

  return (
    <section className="py-14 bg-gradient-to-b from-white via-[#F7F9FC] to-white border-y border-slate-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="section-label">
            <Search size={14} />
            <span>ROUTE EXPLORER & INSTANT QUOTE</span>
          </div>
          <h2 className="section-title">FIND YOUR ROUTE & VEHICLE</h2>
          <p className="section-sub mx-auto">
            Select your starting point and destination to view vehicle options and quoted per-km rates.
          </p>
        </div>

        {/* Search Control Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_8px_35px_rgba(0,59,149,0.08)] border border-slate-200/80 max-w-4xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
            {/* Starting City */}
            <div className="sm:col-span-5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. Starting City
              </label>
              <div className="flex gap-2">
                {(['Delhi', 'Chandigarh', 'Other'] as const).map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => {
                      setStartCity(city);
                      if (city === 'Delhi') setDestination('Chandigarh');
                      else if (city === 'Chandigarh') setDestination('Delhi');
                      else setDestination('Himachal');
                    }}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                      startCity === city
                        ? 'bg-[#003B95] text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Destination Selection */}
            <div className="sm:col-span-4">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                2. Select Destination
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="form-input text-sm py-2.5 font-semibold"
              >
                {destinationOptions.map((route) => (
                  <option key={route.id || route.to} value={route.to}>
                    {route.to}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="sm:col-span-3">
              <button
                type="submit"
                className="btn-primary w-full justify-center py-3 text-sm font-extrabold shadow-md"
              >
                <Search size={16} />
                <span>Search Route</span>
              </button>
            </div>
          </form>
        </div>

        {/* Searched Route Result Card */}
        {hasSearched && (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#003B95]/15 shadow-xl">
            {/* Top Route Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#003B95] text-xs font-bold uppercase tracking-wider mb-2">
                  <span>Selected Route</span>
                  <span>•</span>
                  <span>{startCity} → {destination}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1F44]">
                  {activeRoute.displayName}
                </h3>
                <p className="text-sm text-slate-600 mt-1 max-w-xl">
                  {activeRoute.description}
                </p>
              </div>

              {/* Starting rate highlight */}
              <div className="bg-[#EEF4FF] rounded-2xl p-4 border border-[#003B95]/20 text-left md:text-right flex-shrink-0">
                <span className="text-xs font-semibold text-slate-500 block">Starting / quoted rate</span>
                <span className="text-2xl font-black text-[#003B95] block">
                  From ₹12/km
                </span>
                <span className="text-[11px] text-slate-600">Maruti Suzuki Dzire</span>
              </div>
            </div>

            {/* Vehicle Options Matrix for this route */}
            <div className="py-6">
              <h4 className="text-sm font-extrabold text-[#0A1F44] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Car size={16} className="text-[#003B95]" />
                <span>Available Vehicles for this Route</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {vehicles.map((v) => (
                  <div
                    key={v.id}
                    className="p-4 rounded-2xl border border-slate-200/90 hover:border-[#003B95] bg-[#F7F9FC]/60 hover:bg-white transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-[#003B95] px-2 py-0.5 rounded bg-blue-50">
                          {v.category}
                        </span>
                        <span className="text-xs font-bold text-slate-500">24x7 Available</span>
                      </div>
                      <h5 className="font-extrabold text-slate-900 text-sm mt-1">{v.name}</h5>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">{v.highlightText}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-slate-500 block">Quoted Rate</span>
                        <span className="text-base font-black text-[#0A1F44]">
                          ₹{v.ratePerKm}/km
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          onOpenBooking({
                            pickup: startCity,
                            drop: destination,
                            vehicle: v.id,
                            routeTitle: activeRoute.displayName,
                          })
                        }
                        className="text-xs font-bold text-[#003B95] hover:text-[#0A1F44] underline"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer & Mandatory Notice */}
            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5 mb-6">
              <Info size={16} className="text-amber-700 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Important:</strong> Rates shown are the client-provided per-kilometre rates. Final fare may depend on trip requirements. Contact AXI 24X7 for a confirmed quote.
              </p>
            </div>

            {/* Action Buttons: Call, WhatsApp, Enquire */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() =>
                  onOpenBooking({
                    pickup: startCity,
                    drop: destination,
                    routeTitle: activeRoute.displayName,
                  })
                }
                className="btn-primary flex-1 min-w-[140px] justify-center py-3 text-sm font-extrabold"
              >
                <Calendar size={16} />
                <span>Enquire Now</span>
              </button>

              <button
                onClick={() => handleWhatsApp(activeRoute.displayName)}
                className="btn-whatsapp flex-1 min-w-[140px] justify-center py-3 text-sm font-bold"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Quote</span>
              </button>

              <a
                href="tel:+919815657986"
                className="btn-secondary flex-1 min-w-[140px] justify-center py-3 text-sm font-bold"
              >
                <Phone size={16} />
                <span>Call +91 9815657986</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
