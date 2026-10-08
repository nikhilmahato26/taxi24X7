import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageSquare, Menu, X, Car, MapPin, ShieldCheck, Clock } from 'lucide-react'
import { brand, contact, navLinks } from '../data/siteContent'
import { useScrollSpy } from '../hooks/useScrollSpy'

const SECTION_IDS = [
  'home',
  'vehicles',
  'route-search',
  'delhi-routes',
  'chandigarh-routes',
  'tour-packages',
  'service-area',
  'locations',
  'contact',
]

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

      const headerOffset = window.innerWidth >= 1024 ? 90 : 75
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top, behavior: 'smooth' })
      window.history.replaceState(null, '', href)
    }, 0)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-2xl shadow-black/40 border-b border-slate-800 py-2.5'
          : 'bg-slate-950/90 backdrop-blur-sm border-b border-slate-800/80 py-3.5'
      }`}
    >
      {/* Top micro-bar on desktop */}
      <div className="hidden lg:block border-b border-slate-800/60 pb-2 mb-2 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              24x7 Active Service Across North India
            </span>
            <span className="text-slate-600">•</span>
            <span>Hubs: Peermuchalla, Chandigarh &amp; Sector 105, Gurgaon</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300 font-mono text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              GST: {contact.gstNumber}
            </span>
            <span className="text-slate-600">•</span>
            <a href={contact.emailMailto} className="hover:text-amber-400 transition-colors">
              {contact.email}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            type="button"
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            aria-label="AXI 24X7 Home"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Car className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="block text-2xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-500 text-slate-950">
                  24X7
                </span>
              </div>
              <span className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
                North India Taxi &amp; Travel
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/90 px-3 py-1.5 rounded-full border border-slate-800">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeId === id
              return (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-200 focus:outline-none ${
                    isActive
                      ? 'text-slate-950 bg-amber-400 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
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
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-black text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{contact.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <Car className="w-3.5 h-3.5" />
              <span>{brand.primaryCta}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={contact.phoneTel}
              className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold"
              aria-label="Call AXI 24X7"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-white flex items-center justify-center focus:outline-none"
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
            className="xl:hidden border-t border-slate-800 bg-slate-950 px-4 pt-4 pb-6 mt-3 overflow-hidden"
          >
            <div className="flex flex-col gap-1.5">
              <div className="p-3 mb-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>GST: {contact.gstNumber}</span>
                <span className="text-amber-400 font-bold">24x7 Active</span>
              </div>

              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-900 transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-amber-400 text-xs">→</span>
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-2.5">
                <a
                  href={contact.phoneTel}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-amber-500 text-slate-950 font-black text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call {contact.phone}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false)
                    onOpenEnquiry && onOpenEnquiry()
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-slate-800 text-white font-bold text-sm border border-slate-700"
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
