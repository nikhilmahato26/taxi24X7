import React from 'react';
import { Compass, Calendar, MapPin } from 'lucide-react';
import { tourPackages } from '../data/tourPackages';

interface TourPackagesSectionProps {
  onOpenBooking: (initialData?: { type?: string; title?: string }) => void;
}

export const TourPackagesSection: React.FC<TourPackagesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="tour-packages" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label">
            <Compass size={14} />
            <span>HOLIDAY & PILGRIMAGE TOURS</span>
          </div>
          <h2 className="section-title">NORTH INDIA TOUR PACKAGES</h2>
          <p className="section-sub mx-auto">
            Explore the majestic Himalayas, holy pilgrimage circuits, royal forts, and heritage circuits with customized cab & tempo traveller packages from AXI 24X7.
          </p>
        </div>

        {/* 6 Tour Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_4px_24px_rgba(0,59,149,0.06)] card-hover flex flex-col justify-between"
            >
              <div>
                {/* Package Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Region badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#FFD200] text-[#0A1F44] shadow-sm">
                      {pkg.badge || pkg.region}
                    </span>
                  </div>

                  {/* Destination Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold text-yellow-300 flex items-center gap-1">
                      <MapPin size={12} />
                      <span>{pkg.region}</span>
                    </span>
                    <h3 className="text-lg font-extrabold text-white leading-snug">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-xs font-bold text-[#003B95] mb-2 uppercase tracking-wider">
                    {pkg.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Inclusions / Highlights */}
                  <div className="border-t border-slate-100 pt-4 mb-6">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Highlights:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-[11px] font-semibold text-slate-700"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBooking({ title: pkg.title, type: 'tour-package' })}
                  className="btn-primary w-full justify-center text-sm py-3 font-extrabold"
                >
                  <Calendar size={15} />
                  <span>Get Package Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
