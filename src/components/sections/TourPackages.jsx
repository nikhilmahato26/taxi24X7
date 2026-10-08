import { motion } from 'framer-motion'
import { Compass, Mountain, ArrowRight, MessageSquare, Phone, MapPin } from 'lucide-react'
import { tourPackages, contact } from '../../data/siteContent'

export default function TourPackages({ onOpenEnquiry }) {
  return (
    <section id="tour-packages" className="py-20 lg:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Holiday &amp; Pilgrimage Yatras</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            NORTH INDIA TOUR PACKAGES
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Curated tour transportation connecting Delhi and Chandigarh to scenic hill stations, holy pilgrimage shrines, and royal heritage circuits.
          </p>
        </div>

        {/* 6 Tour Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-400 shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Area */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={`${pkg.title} - AXI 24X7`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 backdrop-blur-md text-amber-400 border border-slate-700">
                    {pkg.tag}
                  </div>

                  <div className="absolute bottom-3 left-4 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{pkg.region}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs font-bold text-amber-400/90 mb-3">{pkg.subtitle}</p>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Informational badge */}
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 mb-2">
                    Available with Sedan, MUV &amp; Tempo Traveller options.
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 sm:p-7 pt-0 space-y-2.5">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('', pkg.title)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry('', pkg.title)}
                    className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold text-center border border-slate-800"
                  >
                    Get Package Details
                  </button>

                  <a
                    href={`https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(
                      `Hello AXI 24X7, I am interested in ${pkg.title}. Please share available vehicle options and details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1 text-center"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Package enquiry note */}
        <div className="mt-12 text-center text-xs text-slate-400">
          <p>
            Contact AXI 24X7 for customized multi-day itineraries, group travel requirements, and vehicle selection across North India.
          </p>
        </div>
      </div>
    </section>
  )
}
