import { Phone, Mail, MapPin, MessageSquare, Car, ArrowUp, ShieldCheck } from 'lucide-react'
import { brand, contact, vehicles, navLinks, locations, rateNotes } from '../data/siteContent'

export default function Footer({ onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollTo = (href) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      const headerOffset = 90
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Business Details (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-400 flex items-center justify-center text-slate-950 font-black shadow-md">
                <Car className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="block text-2xl font-black tracking-tight text-white">
                    {brand.name}
                  </span>
                  <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-500 text-slate-950">
                    24X7
                  </span>
                </div>
                <span className="block text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  {contact.serviceType}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Providing dependable 24x7 taxi services, outstation travel, and North India tour packages connecting Delhi, Chandigarh, Himachal, Uttarakhand, Kashmir, and Rajasthan.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-amber-400 font-mono">
              <ShieldCheck className="w-4 h-4 inline mr-1.5 text-amber-400" />
              GST Number: {contact.gstNumber}
            </div>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={contact.phoneTel} className="hover:text-amber-300 font-bold transition-colors">
                  {contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={contact.emailMailto} className="hover:text-amber-300 transition-colors break-all">
                  {contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Business Locations (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 mb-4">
              Business Locations
            </h4>
            <div className="space-y-4 text-xs text-slate-300">
              {locations.map((loc) => (
                <div key={loc.id} className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800/80">
                  <span className="text-amber-400 font-bold block mb-1">{loc.title}</span>
                  <p className="text-slate-300 leading-relaxed">{loc.address}</p>
                </div>
              ))}
              <p className="text-[11px] text-slate-500">
                Primary Service Area: {contact.primaryServiceArea} (Connecting Delhi, Chandigarh, Punjab, Haryana, HP, UK, UP, J&amp;K, Rajasthan).
              </p>
            </div>
          </div>

          {/* Column 3: Fleet Rates (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 mb-4">
              Vehicle Rate Card
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {vehicles.map((v) => (
                <li key={v.id} className="flex items-center justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-200">{v.name}</span>
                  <span className="font-mono font-bold text-amber-400">{v.rateDisplay}</span>
                </li>
              ))}
            </ul>
            <p className="text-[10px] text-slate-400 mt-3 leading-relaxed">
              * Quoted per-km starting rates. {rateNotes.disclaimer}
            </p>
          </div>

          {/* Column 4: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Legal Disclaimer */}
        <div className="py-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved. GST: {contact.gstNumber}.</p>

          <p className="text-[11px] text-slate-400 text-center md:text-right max-w-xl">
            {rateNotes.primaryNotice}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
