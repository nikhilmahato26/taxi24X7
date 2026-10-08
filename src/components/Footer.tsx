import React from 'react';
import { Phone, Mail, MapPin, FileText, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1F44] text-white pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="container-custom">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & GST Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-lg bg-[#111827] flex-shrink-0">
                <img
                  src="/logo.jpg"
                  alt="AXI 24X7 Logo"
                  className="w-14 h-14 object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-2xl font-black tracking-tight text-white">AXI</span>
                  <span
                    className="px-2 py-0.5 rounded text-xs font-black tracking-wider uppercase"
                    style={{ backgroundColor: 'var(--yellow-primary)', color: 'var(--blue-dark)' }}
                  >
                    24X7
                  </span>
                </div>
                <span className="text-[10px] font-bold text-yellow-300 uppercase tracking-wider mt-1">
                  Your Ride. Any Time. Everywhere.
                </span>
              </div>
            </div>

            <p className="text-xs text-blue-100/80 leading-relaxed max-w-sm">
              Reliable 24x7 taxi and travel services connecting Delhi, Chandigarh, Himachal, Uttarakhand, Kashmir, Rajasthan and all across North India.
            </p>

            {/* GST Number Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/10 text-xs text-blue-100">
              <FileText size={15} style={{ color: 'var(--yellow-primary)' }} />
              <span>
                GST: <strong className="font-mono text-white tracking-wider">03BZHPK5217Q1Z2</strong>
              </span>
            </div>

            {/* Helpline highlight */}
            <div className="pt-2">
              <a
                href="tel:+919815657986"
                className="inline-flex items-center gap-2 text-base font-black hover:underline"
                style={{ color: 'var(--yellow-primary)' }}
              >
                <Phone size={18} />
                <span>+91 9815657986</span>
              </a>
              <span className="text-[11px] text-slate-400 block mt-0.5">24x7 Direct Booking Helpline</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-blue-100/80">
              <li>
                <a href="#services" className="hover:text-white flex items-center gap-1">
                  <ChevronRight size={12} className="text-yellow-400" />
                  <span>Taxi Services</span>
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-white flex items-center gap-1">
                  <ChevronRight size={12} className="text-yellow-400" />
                  <span>Vehicle Fleet & Rates</span>
                </a>
              </li>
              <li>
                <a href="#delhi-routes" className="hover:text-white flex items-center gap-1">
                  <ChevronRight size={12} className="text-yellow-400" />
                  <span>Delhi Routes</span>
                </a>
              </li>
              <li>
                <a href="#chandigarh-routes" className="hover:text-white flex items-center gap-1">
                  <ChevronRight size={12} className="text-yellow-400" />
                  <span>Chandigarh Routes</span>
                </a>
              </li>
              <li>
                <a href="#tour-packages" className="hover:text-white flex items-center gap-1">
                  <ChevronRight size={12} className="text-yellow-400" />
                  <span>North India Tours</span>
                </a>
              </li>
              <li>
                <a href="#service-area" className="hover:text-white flex items-center gap-1">
                  <ChevronRight size={12} className="text-yellow-400" />
                  <span>Service Areas</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white flex items-center gap-1">
                  <ChevronRight size={12} className="text-yellow-400" />
                  <span>About Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Popular Routes
            </h4>
            <ul className="space-y-2 text-xs text-blue-100/80">
              <li>Delhi to Chandigarh Taxi</li>
              <li>Delhi to Shimla & Manali Taxi</li>
              <li>Delhi to Rishikesh & Haridwar Taxi</li>
              <li>Delhi to Agra, Mathura & Vrindavan</li>
              <li>Chandigarh to Delhi & NCR Taxi</li>
              <li>Chandigarh to 5 Devi Yatra Taxi</li>
              <li>Kedarnath & Badrinath Char Dham</li>
              <li>Kashmir & Rajasthan Tour Cabs</li>
            </ul>
          </div>

          {/* Business Locations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Business Locations
            </h4>
            <div className="space-y-3 text-xs text-blue-100/80">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Location 1:</strong>
                  <span>City Plaza, Peermuchalla, Chandigarh</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Location 2:</strong>
                  <span>Rajendra Park, Sector 105, Gurgaon, Haryana</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Mail size={16} className="text-yellow-400 flex-shrink-0" />
                <a href="mailto:taxi24x707@gmail.com" className="text-white hover:underline">
                  taxi24x707@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <strong>AXI 24X7</strong>. All rights reserved. 24x7 Taxi & Travel Services across North India.
          </p>
          <p className="text-[11px] text-slate-400 max-w-md text-center md:text-right">
            * Rates shown are the client-provided per-kilometre rates. Final fare may depend on trip requirements. Contact AXI 24X7 for a quote.
          </p>
        </div>
      </div>
    </footer>
  );
};
