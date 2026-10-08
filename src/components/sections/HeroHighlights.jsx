import { motion } from 'framer-motion'
import { Clock, MapPin, Car, Compass } from 'lucide-react'
import { heroHighlights } from '../../data/siteContent'

const iconMap = {
  clock: Clock,
  'map-pin': MapPin,
  car: Car,
  compass: Compass,
}

export default function HeroHighlights({ onOpenEnquiry }) {
  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {heroHighlights.map((card, idx) => {
          const Icon = iconMap[card.icon] || Car
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-2xl hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 flex items-center justify-center transition-all">
                  <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 group-hover:bg-amber-400/20 group-hover:text-amber-300 transition-colors">
                  {card.badge}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors mb-1.5">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-[11px] text-amber-500">TAXI 24X7</span>
                <span className="group-hover:translate-x-1 transition-transform text-slate-500 group-hover:text-amber-400">→</span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
