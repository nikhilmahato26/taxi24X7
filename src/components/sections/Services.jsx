import { motion } from 'framer-motion'
import { Landmark, Route, Users, Car, Navigation, Sliders, ArrowRight, MessageSquare } from 'lucide-react'
import { services, contact } from '../../data/siteContent'

const iconMap = {
  landmark: Landmark,
  route: Route,
  users: Users,
  car: Car,
  navigation: Navigation,
  sliders: Sliders,
}

export default function Services({ onOpenEnquiry }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-50 text-amber-900 border border-amber-200 mb-4">
            <span>Balaji Tourist Transportation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            OUR TOURIST SERVICES
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Comfortable tourist vehicles in Bangalore tailored for city sightseeing, family travel, and journeys beyond.
          </p>
        </div>

        {/* 6 Whitelisted Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Car
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="group relative bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-amber-400 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 group-hover:border-amber-200 group-hover:text-amber-800 transition-colors">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card footer CTA */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry('', service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    <span>Enquire Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href={`https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(
                      `Hello Balaji Tourist, I would like to enquire about ${service.title} in Bangalore.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors text-xs"
                    aria-label={`WhatsApp Enquiry for ${service.title}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">Need a customized travel requirement?</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Contact Balaji Tourist directly with your itinerary to enquire about vehicle availability.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenEnquiry && onOpenEnquiry('', 'Customized Travel')}
            className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs whitespace-nowrap transition-colors"
          >
            Enquire With Us
          </button>
        </div>
      </div>
    </section>
  )
}
