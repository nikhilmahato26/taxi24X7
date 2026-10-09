import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { brand, contact } from '../data/siteContent'
import { useScrollSpy } from '../hooks/useScrollSpy'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Fleet & Rates', href: '#fleet' },
  { label: 'Tour Packages', href: '#tours' },
  { label: 'Routes', href: '#routes' },
  { label: 'Services', href: '#services' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
]

const SECTION_IDS = ['home', 'fleet', 'tours', 'routes', 'services', 'locations', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    const id = href.replace('#', '')
    setMobileOpen(false)

    window.setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return

      const headerOffset = window.innerWidth >= 768 ? 76 : 68
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top, behavior: 'smooth' })
      window.history.replaceState(null, '', href)
    }, 0)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,59,149,0.12)] border-b border-gray-100'
          : 'bg-white border-b border-gray-100/60'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo badge */}
          <button
            type="button"
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-primary/40 rounded-xl group text-left"
            aria-label="TAXI 24X7 Home"
          >
            <div className="h-11 sm:h-12 w-11 sm:w-12 rounded-xl bg-[#1c252c] p-1 border border-slate-700/60 flex items-center justify-center shadow-sm overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
              <img
                src={brand.logo}
                alt="TAXI 24X7 Logo"
                className="h-full w-full object-contain"
                loading="eager"
              />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-black text-blue-dark tracking-tight leading-none group-hover:text-blue-primary transition-colors">
                TAXI <span className="text-yellow-500">24X7</span>
              </span>
              <span className="block text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mt-0.5">
                Your Ride. Any Time. Everywhere.
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeId === id
              return (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-3.5 py-2 text-xs xl:text-sm font-extrabold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-primary/30 ${
                    isActive
                      ? 'text-blue-primary font-black'
                      : 'text-gray-600 hover:text-blue-primary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-yellow-primary rounded-full"
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-2 text-blue-dark font-black text-xs lg:text-sm hover:text-blue-primary transition-colors"
            >
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-primary flex items-center justify-center">
                <PhoneIcon />
              </span>
              <span>{contact.displayPhone}</span>
            </a>
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi TAXI 24X7, I want to book a taxi.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs lg:text-sm px-4 lg:px-5 py-2.5 font-black text-blue-dark"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-blue-dark hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-primary/30"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-blue-dark transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-blue-dark transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-blue-dark transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  type="button"
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="w-full text-left px-3 py-2.5 text-sm font-bold text-gray-700 hover:text-blue-primary hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-gray-300 text-xs">➔</span>
                </motion.button>
              ))}

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-50 text-blue-primary font-black text-sm"
                >
                  <PhoneIcon />
                  Call {contact.displayPhone}
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi TAXI 24X7, I want to book a taxi.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center py-3 text-blue-dark text-sm font-black"
                >
                  WhatsApp Booking
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  )
}
