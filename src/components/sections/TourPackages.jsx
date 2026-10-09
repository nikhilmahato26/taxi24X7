import { motion } from 'framer-motion'
import { tourPackages, contact } from '../../data/siteContent'
import { useInView } from '../../hooks/useInView'

export default function TourPackages() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="tours" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-yellow-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">
            <svg className="w-4 h-4 text-yellow-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            Holiday & Pilgrimage Tours
          </span>
          <h2 className="section-title mb-4">
            North India <span className="text-blue-primary">Tour Packages</span>
          </h2>
          <p className="section-sub mx-auto">
            Hassle-free custom travel packages with experienced mountain and highway chauffeurs. Choose from Sedans, SUVs, or Luxury Tempo Travellers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-card card-hover border border-gray-100 flex flex-col"
            >
              {/* Image banner */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Badge */}
                <span className="absolute top-3 left-3 bg-yellow-primary text-blue-dark text-xs font-black px-3 py-1 rounded-full shadow-md">
                  {pkg.badge}
                </span>

                {/* Region */}
                <span className="absolute top-3 right-3 bg-blue-dark/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/20">
                  {pkg.region}
                </span>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-bold text-yellow-300 tracking-wide uppercase">
                    {pkg.subtitle}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-black text-blue-dark mb-2 group-hover:text-blue-primary transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {pkg.description}
                </p>

                {/* Feature bullets */}
                <div className="space-y-1.5 mb-6">
                  {pkg.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                      <span className="w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 text-[10px]">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="mt-auto grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Hi TAXI 24X7, I am interested in the ${pkg.title}. Please provide package itinerary and pricing quote.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-yellow-primary text-blue-dark font-black text-xs py-3 px-3 rounded-xl hover:bg-yellow-400 transition-all shadow-sm text-center"
                  >
                    <span>Get Quote</span>
                  </a>
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center justify-center gap-1.5 bg-blue-primary text-white font-black text-xs py-3 px-3 rounded-xl hover:bg-blue-700 transition-all shadow-sm text-center"
                  >
                    <span>Call Enquiry</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Tour Banner */}
        <div className="mt-12 bg-blue-dark rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div>
            <span className="inline-block bg-yellow-primary/20 text-yellow-primary font-bold text-xs px-3 py-1 rounded-full mb-2 border border-yellow-primary/30">
              Custom Itineraries Available
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              Planning a Custom Family or Corporate Tour?
            </h3>
            <p className="text-blue-100 text-sm mt-1 max-w-xl">
              Tell us your preferred destinations, number of passengers, and travel dates. We arrange customized outstation trips with Sedans, Crysta, Hycross, or Tempo Travellers.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center gap-3">
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi TAXI 24X7, I want to customize a tour package for my family/group. Please help me plan the itinerary.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-blue-dark text-sm px-6 py-3 font-extrabold whitespace-nowrap"
            >
              WhatsApp Plan
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm px-5 py-3 rounded-xl transition-all whitespace-nowrap"
            >
              Call {contact.displayPhone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
