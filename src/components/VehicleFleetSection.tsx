import React from 'react';
import { Car, Calendar, Info } from 'lucide-react';
import { vehicles } from '../data/vehicles';

interface VehicleFleetSectionProps {
  onOpenBooking: (initialData?: { vehicle?: string; title?: string }) => void;
}

export const VehicleFleetSection: React.FC<VehicleFleetSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="fleet" className="py-20 bg-[#F7F9FC] border-t border-slate-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label">
            <Car size={14} />
            <span>TRANSPARENT PER-KM RATE CARD</span>
          </div>
          <h2 className="section-title">CHOOSE YOUR VEHICLE</h2>
          <p className="section-sub mx-auto">
            From economic city sedans to spacious MUVs and group Tempo Travellers, explore our available fleet across North India.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_4px_24px_rgba(0,59,149,0.06)] card-hover flex flex-col justify-between"
            >
              <div>
                {/* Vehicle Image Container */}
                <div className="relative h-52 bg-gradient-to-t from-slate-900/60 to-transparent overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#FFD200] text-[#0A1F44] shadow-sm">
                      {vehicle.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1 text-xs font-bold text-[#003B95] shadow">
                    AXI 24X7 Verified
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-extrabold text-[#0A1F44]">
                      {vehicle.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    {vehicle.highlightText}
                  </p>

                  {/* Quoted Rate Highlight Banner */}
                  <div className="bg-[#EEF4FF] rounded-2xl p-4 border border-[#003B95]/15 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                          Quoted Rate
                        </span>
                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-2xl font-black text-[#003B95]">
                            ₹{vehicle.ratePerKm}
                          </span>
                          <span className="text-xs font-bold text-slate-600">/ km</span>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-white text-[11px] font-bold text-emerald-700 border border-emerald-200">
                        24x7 Assistance
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-2 italic">
                      * Starting / quoted rate: ₹{vehicle.ratePerKm}/km
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2.5">
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => onOpenBooking({ vehicle: vehicle.id, title: vehicle.name })}
                    className="btn-outline text-xs py-2.5 justify-center font-bold"
                  >
                    Check Availability
                  </button>
                  <button
                    onClick={() => onOpenBooking({ vehicle: vehicle.id, title: vehicle.name })}
                    className="btn-primary text-xs py-2.5 justify-center font-extrabold"
                  >
                    <Calendar size={14} />
                    <span>Book / Enquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Disclaimers & Notes (Strictly per instructions) */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm max-w-3xl mx-auto text-left">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
              <Info size={16} />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-[#0A1F44] mb-1">
                Vehicle Rate & Pricing Transparency
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-2">
                Rates shown are the client-provided per-kilometre rates. Contact AXI 24X7 for the applicable fare for your journey and trip requirements.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-semibold text-[#003B95]">
                Final fare may depend on trip requirements. Contact us for a quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
