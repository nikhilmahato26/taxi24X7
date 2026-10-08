import { motion } from 'framer-motion'
import { MapPin, Navigation, Compass, ArrowRightCircle, Repeat, Car, ArrowRight, MessageSquare } from 'lucide-react'
import { taxiServices, contact } from '../../data/siteContent'

const iconMap = {
  'map-pin': MapPin,
  navigation: Navigation,
  compass: Compass,
  'arrow-right-circle': ArrowRightCircle,
  repeat: Repeat,
  car: Car,
}

export default function Services({ onOpenEnquiry }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-4">
            <Car className="w-3.5 h-3.5" />
            <span>Dedicated North India Cab Options</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            OUR TAXI SERVICES
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Around-the-clock taxi and outstation transportation services connecting Delhi, Chandigarh, and key North Indian destinations.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {taxiServices.map((service, idx) => {
            const Icon = iconMap[service.icon] || Car
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-amber-400 shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/15 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300 group-hover:text-amber-400 transition-colors">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry('', service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Enquire Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={`https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(
                      `Hello TAXI 24X7, I want to enquire about ${service.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-300 flex items-center justify-center transition-colors"
                    aria-label={`WhatsApp for ${service.title}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
