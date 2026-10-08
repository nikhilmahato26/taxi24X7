import React from 'react';
import { MapPin, Info } from 'lucide-react';
import { serviceStates } from '../data/services';

export const ServiceAreaSection: React.FC = () => {
  return (
    <section id="service-area" className="py-20 bg-white border-t border-slate-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-label">
            <MapPin size={14} />
            <span>EXTENSIVE REGIONAL COVERAGE</span>
          </div>
          <h2 className="section-title">NORTH INDIA TAXI SERVICE</h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            Taxi and travel services connecting Delhi, Chandigarh, Punjab, Haryana, Himachal Pradesh, Uttarakhand, Uttar Pradesh, Jammu & Kashmir and Rajasthan.
          </p>
        </div>

        {/* States & Regions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {serviceStates.map((state, idx) => (
            <div
              key={idx}
              className="bg-[#F7F9FC] rounded-2xl p-5 border border-slate-200/90 text-left hover:border-[#003B95] hover:bg-[#EEF4FF]/50 transition-all group"
            >
              <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#003B95] mb-3 group-hover:scale-105 transition-transform shadow-xs">
                <MapPin size={16} />
              </div>
              <h3 className="font-extrabold text-[#0A1F44] text-sm mb-1">
                {state.name}
              </h3>
              <p className="text-[11px] text-slate-500 leading-normal">
                {state.note}
              </p>
            </div>
          ))}
        </div>

        {/* Mandatory Factual Disclaimer Notice */}
        <div className="max-w-2xl mx-auto rounded-2xl bg-slate-50 p-4 border border-slate-200 text-xs text-slate-500 text-center flex items-center justify-center gap-2">
          <Info size={14} className="text-slate-400 flex-shrink-0" />
          <span>
            * AXI 24X7 provides outstation, intercity, and tour connections across these regions. Service availability may vary based on route, trip requirements, and advance confirmation.
          </span>
        </div>
      </div>
    </section>
  );
};
