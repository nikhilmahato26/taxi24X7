import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="WhatsApp Quick Contact">
      <a
        href="https://wa.me/919815657986?text=Hello%20AXI%2024X7%2C%20I%20would%20like%20to%20enquire%20about%20a%20taxi%20booking."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 lg:bottom-7 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl whatsapp-pulse hover:scale-110 active:scale-95 transition-transform"
        aria-label="Chat on WhatsApp with AXI 24X7"
      >
        <MessageSquare size={28} />
      </a>
    </aside>
  );
};
