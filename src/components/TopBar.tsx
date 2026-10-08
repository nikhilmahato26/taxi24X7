import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--blue-dark)', color: '#FFFFFF' }} className="py-2 text-xs border-b border-white/10">
      <div className="container-custom flex flex-wrap items-center justify-between gap-2">
        {/* Left: 24x7 badge & locations */}
        <div className="flex items-center gap-4 flex-wrap">
          <span className="inline-flex items-center gap-1.5 font-semibold text-yellow-300" style={{ color: 'var(--yellow-primary)' }}>
            <Clock size={13} />
            <span>24X7 TAXI SERVICE</span>
          </span>
          <span className="hidden sm:inline-block text-white/30">•</span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
            <MapPin size={13} className="text-yellow-400" />
            <span>Peermuchalla (Chandigarh) & Gurgaon (Haryana)</span>
          </span>
        </div>

        {/* Right: Phone & Email */}
        <div className="flex items-center gap-4 ml-auto">
          <a
            href="mailto:taxi24x707@gmail.com"
            className="hidden md:inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
          >
            <Mail size={13} style={{ color: 'var(--yellow-primary)' }} />
            <span>taxi24x707@gmail.com</span>
          </a>
          <a
            href="tel:+919815657986"
            className="inline-flex items-center gap-1.5 font-bold hover:underline"
            style={{ color: 'var(--yellow-primary)' }}
          >
            <Phone size={13} />
            <span>+91 9815657986</span>
          </a>
        </div>
      </div>
    </div>
  );
};
