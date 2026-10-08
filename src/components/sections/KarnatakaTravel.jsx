import { motion } from 'framer-motion'
import { Mountain, Compass, MapPin, ArrowRight } from 'lucide-react'
import { karnatakaTravel, contact } from '../../data/siteContent'

export default function KarnatakaTravel({ onOpenEnquiry }) {
  return (
    <section id="karnataka" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-50 text-amber-900 border border-amber-200 mb-4">
            <Mountain className="w-3.5 h-3.5 text-amber-600" />
            <span>Outstation Travel From Bangalore</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {karnatakaTravel.heading}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            {karnatakaTravel.supportingText}
          </p>

          <button
            type="button"
            onClick={() => onOpenEnquiry && onOpenEnquiry('', 'Outstation Travel')}
            className="btn-primary"
          >
            <span>{karnatakaTravel.ctaText}</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

        {/* Scenic Destination Inspiration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {karnatakaTravel.destinations.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={dest.imageUrl}
                  alt={`${dest.name} - Karnataka travel inspiration`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">
                  {dest.travelTag}
                </div>

                <div className="absolute bottom-3 left-3 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Outstation from Bangalore</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-1">
                    {dest.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-600 mb-3">{dest.theme}</p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {dest.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">Flexible Travel</span>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry('', `Outstation Travel (${dest.name})`)}
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1"
                  >
                    <span>Enquire Ride</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Notice */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-center max-w-3xl mx-auto shadow-sm">
          <p className="text-xs sm:text-sm text-slate-500">
            {karnatakaTravel.notice}
          </p>
        </div>
      </div>
    </section>
  )
}
