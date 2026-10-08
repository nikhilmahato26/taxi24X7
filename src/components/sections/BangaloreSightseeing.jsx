import { motion } from 'framer-motion'
import { Landmark, Compass, MapPin, ArrowRight, Sparkles } from 'lucide-react'
import { bangaloreSightseeing } from '../../data/siteContent'

export default function BangaloreSightseeing({ onOpenEnquiry }) {
  return (
    <section id="sightseeing" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-400/15 text-amber-300 border border-amber-400/30 mb-4">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Bangalore Sightseeing Inspiration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {bangaloreSightseeing.heading}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            {bangaloreSightseeing.supportingText}
          </p>

          {/* Primary Section CTA */}
          <button
            type="button"
            onClick={() => onOpenEnquiry && onOpenEnquiry('', 'Bangalore Sightseeing')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <span>{bangaloreSightseeing.ctaText}</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

        {/* Landmarks Showcase Grid (Inspiration Only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {bangaloreSightseeing.landmarks.map((place, idx) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative rounded-3xl overflow-hidden bg-slate-800/80 border border-white/10 hover:border-amber-400/60 shadow-xl flex flex-col justify-between transition-all duration-300"
            >
              {/* Photo Area */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={place.imageUrl}
                  alt={`${place.name} - Bangalore Sightseeing Inspiration`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Tag */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 backdrop-blur-md border border-white/20 text-amber-300">
                  {place.tag}
                </div>

                {/* Location indicator */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Bangalore, Karnataka</span>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-1">
                    {place.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-400/90 mb-3">{place.subtitle}</p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {place.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">Sightseeing Inspiration</span>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry('', `Bangalore Sightseeing (${place.name})`)}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                  >
                    <span>Enquire Vehicle</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Factual Disclaimer Banner */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-400">
            {bangaloreSightseeing.notice}
          </p>
        </div>
      </div>
    </section>
  )
}
