import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (initialData?: { type?: string; title?: string }) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Vehicle Fleet', href: '#fleet' },
    { label: 'Delhi Routes', href: '#delhi-routes' },
    { label: 'Chandigarh Routes', href: '#chandigarh-routes' },
    { label: 'Tour Packages', href: '#tour-packages' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-[0_4px_25px_rgba(0,59,149,0.08)] py-3 border-b border-slate-100'
          : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-xl border border-slate-800/40 shadow-sm bg-[#1A2232] flex-shrink-0">
            <img
              src="/logo.jpg"
              alt="AXI 24X7 Official Logo"
              className="w-11 h-11 sm:w-12 sm:h-12 object-cover transition-transform duration-200 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-xl sm:text-2xl font-black tracking-tight" style={{ color: 'var(--blue-dark)' }}>
                AXI
              </span>
              <span
                className="px-2 py-0.5 rounded text-xs sm:text-sm font-black tracking-wider uppercase"
                style={{ backgroundColor: 'var(--yellow-primary)', color: 'var(--blue-dark)' }}
              >
                24X7
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">
              Your Ride. Any Time. Everywhere.
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#003B95] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#003B95] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919815657986"
            className="btn-outline text-xs px-4 py-2.5 flex items-center gap-2"
          >
            <Phone size={15} />
            <span>+91 9815657986</span>
          </a>
          <button
            onClick={() => onOpenBooking()}
            className="btn-primary text-xs px-5 py-2.5 flex items-center gap-2 font-bold"
          >
            <Calendar size={15} />
            <span>Book a Taxi</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={() => onOpenBooking()}
            className="btn-primary text-xs px-3.5 py-2 flex items-center gap-1.5 md:hidden font-bold"
          >
            <Calendar size={14} />
            <span>Book</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-100 shadow-xl px-5 py-6">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-[#003B95] py-2 border-b border-slate-50 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-slate-400 text-xs">→</span>
              </a>
            ))}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919815657986"
                className="btn-secondary w-full justify-center text-sm py-3"
              >
                <Phone size={16} />
                <span>Call +91 9815657986</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn-primary w-full justify-center text-sm py-3"
              >
                <Calendar size={16} />
                <span>Book a Taxi Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
