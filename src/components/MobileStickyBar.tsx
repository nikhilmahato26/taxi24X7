import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href="tel:+919815657986"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-100 text-[#0A1F44] hover:bg-slate-200 transition-colors"
        >
          <Phone size={18} className="text-[#003B95] mb-0.5" />
          <span className="text-[11px] font-extrabold leading-tight">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919815657986?text=Hello%20AXI%2024X7%2C%20I%20would%20like%20to%20enquire%20about%20a%20taxi."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#25D366]/10 text-emerald-800 hover:bg-[#25D366]/20 transition-colors"
        >
          <MessageSquare size={18} className="text-[#25D366] mb-0.5" />
          <span className="text-[11px] font-extrabold leading-tight">WhatsApp</span>
        </a>

        {/* Book a Taxi */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#FFD200] text-[#0A1F44] font-extrabold shadow-sm active:scale-95 transition-transform"
        >
          <Calendar size={18} className="text-[#0A1F44] mb-0.5" />
          <span className="text-[11px] font-black leading-tight">Book Taxi</span>
        </button>
      </div>
    </div>
  );
};
