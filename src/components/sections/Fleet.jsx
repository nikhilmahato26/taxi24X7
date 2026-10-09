import { motion } from 'framer-motion'
import { fleet, contact } from '../../data/siteContent'
import { useInView } from '../../hooks/useInView'

export default function Fleet() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">
            <svg className="w-4 h-4 text-yellow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
            </svg>
            Our Fleet &amp; Pricing
          </span>
          <h2 className="section-title mb-4">
            Transparent Per-KM <span className="text-blue-primary">Vehicle Rates</span>
          </h2>
          <p className="section-sub mx-auto">
            Clean, sanitized, and air-conditioned vehicles for every journey. Choose the perfect car for outstation trips, family tours, or group travel.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleet.map((vehicle, i) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative bg-white rounded-3xl p-6 border-2 card-hover flex flex-col gap-4 ${
                vehicle.featured
                  ? 'border-yellow-primary shadow-yellow ring-2 ring-yellow-primary/30'
                  : 'border-gray-100 shadow-card'
              }`}
            >
              {vehicle.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-black px-4 py-1 rounded-full flex items-center gap-1 whitespace-nowrap shadow-sm ${
                  vehicle.featured
                    ? 'bg-yellow-primary text-blue-dark'
                    : 'bg-blue-primary text-white'
                }`}>
                  {vehicle.featured ? '⭐ ' : ''}{vehicle.badge}
                </div>
              )}

              {/* Vehicle Image container */}
              <div className="relative w-full aspect-[16/10] mb-2 rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden flex items-center justify-center p-2">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.name} cab`}
                  className="w-full h-full object-contain object-center hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Title and Rate */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-black text-blue-dark">{vehicle.name}</h3>
                  <span className="text-xl">{vehicle.icon}</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-block bg-blue-50 text-blue-primary text-xs font-bold px-2.5 py-1 rounded-full">
                    {vehicle.type}
                  </span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-blue-dark">
                      ₹{vehicle.pricePerKm}
                    </span>
                    <span className="text-xs font-bold text-gray-500"> / km</span>
                  </div>
                </div>
              </div>

              {/* Specs chips */}
              <div className="flex flex-wrap gap-1.5">
                {vehicle.specs.map((spec) => (
                  <span key={spec} className="text-xs text-gray-600 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full font-semibold">
                    {spec}
                  </span>
                ))}
              </div>

              {/* Suitable for */}
              <div>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Ideal For</p>
                <ul className="space-y-1">
                  {vehicle.suitableFor.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                      <span className="w-3.5 h-3.5 bg-yellow-primary/20 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] text-blue-primary font-bold">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="mt-auto grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Hi TAXI 24X7, I want to book the ${vehicle.name} at ${vehicle.rateText}. Please confirm availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center font-black text-xs py-3 px-2 rounded-xl transition-all shadow-sm ${
                    vehicle.featured
                      ? 'bg-yellow-primary text-blue-dark hover:bg-yellow-400'
                      : 'bg-blue-primary text-white hover:bg-blue-700'
                  }`}
                >
                  WhatsApp Book
                </a>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-center font-bold text-xs py-3 px-2 rounded-xl border border-gray-200 text-blue-dark hover:bg-gray-100 transition-all"
                >
                  Call Booking
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note below fleet */}
        <div className="mt-10 p-5 bg-blue-50/60 rounded-2xl border border-blue-100 text-center max-w-3xl mx-auto">
          <p className="text-xs text-gray-600 leading-relaxed">
            📌 <strong>Fare Information:</strong> Rates shown are client-provided starting per-kilometre outstation rates. Toll taxes, state border tax, parking, and driver allowance extra as applicable. Contact TAXI 24X7 for exact fixed all-inclusive package fares.
          </p>
        </div>
      </div>
    </section>
  )
}
