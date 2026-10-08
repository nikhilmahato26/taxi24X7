import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageSquare, Menu, X, Car, MapPin } from 'lucide-react'
import { brand, contact, navLinks } from '../data/siteContent'
import { useScrollSpy } from '../hooks/useScrollSpy'

const SECTION_IDS = ['home', 'about', 'services', 'sightseeing', 'karnataka', 'vehicles', 'contact']

export default function Navbar({ onOpenEnquiry }) {
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

      const headerOffset = window.innerWidth >= 768 ? 84 : 72
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top, behavior: 'smooth' })
      window.history.replaceState(null, '', href)
    }, 0)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/10 border-b border-white/10 py-2.5'
          : 'bg-slate-950 border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            type="button"
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            aria-label="Balaji Tourist Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Car className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="block text-xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                {brand.name}
              </span>
              <span className="block text-[10px] font-semibold tracking-wider uppercase text-slate-400">
                Bangalore Tourist Transportation
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeId === id
              return (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 focus:outline-none ${
                    isActive
                      ? 'text-white bg-white/15 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </nav>

          {/* Direct CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={contact.phoneTel}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/15 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{contact.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 transition-all hover:scale-105"
            >
              <span>{brand.primaryCta}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={contact.phoneTel}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-amber-400 border border-white/15"
              aria-label="Call Balaji Tourist"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/15 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-slate-950 px-4 pt-4 pb-6 mt-2.5 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-amber-400 text-xs">→</span>
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href={contact.phoneTel}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/10 text-white font-bold text-sm border border-white/15"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  Call {contact.phone}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false)
                    onOpenEnquiry && onOpenEnquiry()
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm"
                >
                  {brand.primaryCta}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
