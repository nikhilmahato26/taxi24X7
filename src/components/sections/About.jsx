import { motion } from 'framer-motion'
import { MapPin, Phone, Car, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { aboutContent, locations, contact, brand } from '../../data/siteContent'

export default function About({ onOpenEnquiry }) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Hub Showcase */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
                <div className="relative aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
                    alt="Scenic North India highway tour"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 inline-block mb-1">
                      24X7 North India Operations
                    </span>
                    <p className="text-sm font-bold text-white">Serving Delhi, Chandigarh, Hills &amp; Shrines</p>
                  </div>
                </div>

                {/* Operating Hubs Summary */}
                <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Official Business Locations
                  </div>
                  {locations.map((loc) => (
                    <div key={loc.id} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">{loc.title}</strong>
                        <span>{loc.address}</span>
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 text-xs text-slate-400 font-mono">
                    GST: {contact.gstNumber}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Factual Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>About AXI 24X7</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              {aboutContent.heading}
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              <p className="font-semibold text-white">
                {aboutContent.paragraph}
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                {aboutContent.locationsIntro}
              </p>
            </div>

            {/* Business Locations Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {locations.map((loc) => (
                <div
                  key={loc.id}
                  className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2 text-amber-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">{loc.label}</span>
                  </div>
                  <h4 className="text-sm font-black text-white mb-1">{loc.address}</h4>
                  <ul className="mt-2 space-y-1 text-xs text-slate-400">
                    {loc.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-amber-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry()}
                className="btn-primary"
              >
                Book a Taxi Now
              </button>
              <a
                href={contact.phoneTel}
                className="btn-secondary"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
