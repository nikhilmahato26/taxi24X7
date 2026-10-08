import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navigation, ArrowRight, MessageSquare, Phone, Search } from 'lucide-react'
import { chandigarhRoutes, contact } from '../../data/siteContent'

export default function ChandigarhRoutes({ onOpenEnquiry }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredRoutes = chandigarhRoutes.filter(
    (route) =>
      route.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section id="chandigarh-routes" className="py-20 lg:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-4">
            <Navigation className="w-3.5 h-3.5" />
            <span>Chandigarh &amp; Peermuchalla Hub</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            CHANDIGARH TO POPULAR DESTINATIONS
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Reliable taxi services connecting Chandigarh, Peermuchalla, Mohali, and Panchkula to major North Indian cities, hill retreats, and sacred shrines.
          </p>

          {/* Search within Chandigarh routes */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search destination (e.g. Shimla, Kasol, 5 Devi Yatra)..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* 16 Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoutes.map((route, idx) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (idx % 6) * 0.05 }}
              className="group bg-slate-900 rounded-3xl p-6 border border-slate-800 hover:border-amber-400 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-amber-400">
                    {route.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">From Chandigarh</span>
                </div>

                <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors mb-2">
                  {route.displayName}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {route.description}
                </p>
              </div>

              {/* Action Buttons: Book / Enquire & WhatsApp */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('', route.displayName)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Book / Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(
                    `Hello TAXI 24X7, I want to book / enquire for ${route.displayName}. Please share vehicle options and quote.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
                  aria-label={`WhatsApp Enquiry for ${route.displayName}`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredRoutes.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <p>No routes found matching "{searchTerm}". Contact TAXI 24X7 directly for customized routes.</p>
          </div>
        )}
      </div>
    </section>
  )
}
