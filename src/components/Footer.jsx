import { Phone, Mail, MapPin, MessageSquare, Car, ArrowUp } from 'lucide-react'
import { brand, contact, vehicles, services, navLinks } from '../data/siteContent'

export default function Footer({ onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollTo = (href) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      const headerOffset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-950 text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Contact Summary (5 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-slate-950 font-black shadow-md">
                <Car className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <span className="block text-2xl font-extrabold tracking-tight text-white">
                  {brand.name}
                </span>
                <span className="block text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                  {brand.positioning}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Providing comfortable tourist transportation services from Bangalore with Toyota Innova, Toyota Etios and Maruti Suzuki Swift Dzire for city sightseeing and outstation journeys.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{contact.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={contact.phoneTel} className="hover:text-amber-300 transition-colors">
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

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Explore Site
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tourist Vehicles (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Available Vehicles
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              {vehicles.map((v) => (
                <li key={v.id} className="flex flex-col">
                  <span className="font-bold text-white">{v.name}</span>
                  <span className="text-[11px] text-slate-400">{v.description}</span>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(v.name)}
                    className="text-[10px] text-amber-400 hover:text-amber-300 text-left font-semibold mt-0.5"
                  >
                    Enquire Availability →
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Tourist Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Tourist Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {services.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry('', s.title)}
                    className="hover:text-amber-300 transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Legal Disclaimer */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Balaji Tourist. All rights reserved. Bangalore, Karnataka, India.</p>

          <p className="text-[11px] text-slate-400 text-center md:text-right max-w-md">
            Bangalore Tourist Transportation & Car Rental Service. Vehicle availability and travel requirements are confirmed upon direct enquiry.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
