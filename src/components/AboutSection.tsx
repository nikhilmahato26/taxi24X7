import React from 'react';
import { ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F7F9FC] border-t border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Location Badges */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 relative">
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80"
                alt="AXI 24X7 Outstation Travel Cabs"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="px-3 py-1 rounded-full bg-[#FFD200] text-[#0A1F44] text-xs font-black uppercase tracking-wider mb-2 inline-block">
                    Reliable North India Travel
                  </span>
                  <p className="text-sm font-bold text-white">
                    Connecting Delhi, Chandigarh, Himachal, Uttarakhand & Beyond
                  </p>
                </div>
              </div>
            </div>

            {/* Overlapping Quick Badge */}
            {/* Overlapping Quick Badge with Official Logo */}
            <div className="absolute -bottom-5 -right-3 sm:right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#1A2232] overflow-hidden border border-slate-700/50 flex-shrink-0">
                  <img
                    src="/logo.jpg"
                    alt="AXI 24X7 Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#0A1F44]">24X7 Assistance</h4>
                  <p className="text-[11px] text-slate-500 font-semibold">Your Ride. Any Time. Everywhere.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Factual About Copy */}
          <div className="lg:col-span-7">
            <div className="section-label">
              <ShieldCheck size={14} />
              <span>ABOUT AXI 24X7</span>
            </div>

            <h2 className="section-title">YOUR NORTH INDIA TRAVEL PARTNER</h2>

            {/* Exact Required Content */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-medium">
              AXI 24X7 provides taxi and travel services across North India, connecting customers to major cities, hill stations, pilgrimage destinations and tourist destinations. With a range of cars and Tempo Traveller options, customers can enquire for local, intercity and outstation travel requirements.
            </p>

            {/* Mention of Provided Business Locations */}
            <div className="mb-8">
              <h3 className="text-xs font-extrabold text-[#0A1F44] uppercase tracking-wider mb-3">
                Operational Business Locations:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#003B95] flex-shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Chandigarh Region
                    </span>
                    <strong className="text-xs font-bold text-[#0A1F44] block">
                      City Plaza, Peermuchalla, Chandigarh
                    </strong>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#003B95] flex-shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Gurgaon / Delhi NCR
                    </span>
                    <strong className="text-xs font-bold text-[#0A1F44] block">
                      Rajendra Park, Sector 105, Gurgaon, Haryana
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Factual Core Service Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#003B95] flex-shrink-0" />
                <span>Intercity Travel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#003B95] flex-shrink-0" />
                <span>Hill Stations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#003B95] flex-shrink-0" />
                <span>Pilgrimage Yatras</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
