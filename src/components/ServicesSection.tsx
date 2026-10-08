import React from 'react';
import { MapPin, Navigation, Compass, ArrowRightCircle, Repeat, Car, ArrowRight, Check } from 'lucide-react';
import { taxiServices } from '../data/services';

interface ServicesSectionProps {
  onOpenBooking: (initialData?: { type?: string; title?: string }) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'MapPin':
        return <MapPin size={24} className="text-[#003B95]" />;
      case 'Navigation':
        return <Navigation size={24} className="text-[#003B95]" />;
      case 'Compass':
        return <Compass size={24} className="text-[#003B95]" />;
      case 'ArrowRightCircle':
        return <ArrowRightCircle size={24} className="text-[#003B95]" />;
      case 'Repeat':
        return <Repeat size={24} className="text-[#003B95]" />;
      default:
        return <Car size={24} className="text-[#003B95]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label">
            <Car size={14} />
            <span>COMPREHENSIVE FLEET & TRAVEL</span>
          </div>
          <h2 className="section-title">OUR TAXI SERVICES</h2>
          <p className="section-sub mx-auto">
            Reliable, 24x7 taxi assistance connecting major North Indian cities, airports, hill stations, and pilgrimage centres.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {taxiServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,59,149,0.06)] card-hover flex flex-col justify-between"
            >
              <div>
                {/* Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-[#EEF4FF] flex items-center justify-center mb-5 border border-blue-100 shadow-sm">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-extrabold text-[#0A1F44] mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8 border-t border-slate-100 pt-5 text-xs font-semibold text-slate-700">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Check size={11} className="text-emerald-700 font-bold" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenBooking({ title: service.title, type: service.id })}
                className="btn-secondary w-full justify-center text-sm py-3 font-bold group"
              >
                <span>Enquire Service</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
