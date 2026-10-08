import React from 'react';
import { Clock, Map, Car, Compass } from 'lucide-react';

export const QuickHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Clock,
      title: '24x7 Service',
      description: 'Taxi assistance available around the clock.',
      color: 'bg-amber-100 text-amber-700',
    },
    {
      icon: Map,
      title: 'North India',
      description: 'Travel across major North Indian regions.',
      color: 'bg-blue-100 text-[#003B95]',
    },
    {
      icon: Car,
      title: 'Multiple Vehicles',
      description: 'Cars and Tempo Traveller options available.',
      color: 'bg-emerald-100 text-emerald-700',
    },
    {
      icon: Compass,
      title: 'Tour Packages',
      description: 'Explore Himachal, Uttarakhand, Kashmir, Rajasthan and more.',
      color: 'bg-indigo-100 text-indigo-700',
    },
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 mb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_24px_rgba(0,59,149,0.06)] card-hover flex flex-col items-start text-left"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${item.color}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-extrabold text-[#0A1F44] mb-1.5">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
