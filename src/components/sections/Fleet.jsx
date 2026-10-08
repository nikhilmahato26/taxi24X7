import { motion } from 'framer-motion'
import { Phone, MessageSquare, ArrowRight, Car, CheckCircle } from 'lucide-react'
import { vehicles, contact } from '../../data/siteContent'

export default function Fleet({ onOpenEnquiry }) {
  return (
    <section id="vehicles" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-50 text-amber-900 border border-amber-200 mb-4">
            <Car className="w-3.5 h-3.5 text-amber-600" />
            <span>Balaji Tourist Fleet</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            OUR VEHICLES
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Choose from our available tourist vehicles for your journey.
          </p>
        </div>

        {/* 3 Whitelisted Vehicle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, idx) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Banner / Image Area */}
              <div>
                <div className="relative aspect-[16/10] bg-gradient-to-b from-slate-100 to-slate-50 border-b border-slate-100 p-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 shadow-sm">
                    {vehicle.category}
                  </div>

                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} - Balaji Tourist Bangalore`}
                    className="w-full h-full object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                    {vehicle.name}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {vehicle.description}
                  </p>

                  {/* Availability Note - As requested: Contact us for availability */}
                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-center justify-between text-xs mb-6">
                    <span className="text-slate-600 font-medium">Availability Status:</span>
                    <span className="text-amber-900 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                      {vehicle.availabilityNote}
                    </span>
                  </div>
                </div>
              </div>

              {/* 3 Action Buttons per Card Rules: Enquire button, Call button, WhatsApp button */}
              <div className="p-6 sm:p-7 pt-0 space-y-3">
                {/* 1. Enquire Now Button */}
                <button
                  type="button"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(vehicle.name)}
                  className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 active:scale-95 transition-all"
                >
                  <span>{vehicle.cta}</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                {/* Call & WhatsApp Action Row */}
                <div className="grid grid-cols-2 gap-3">
                  {/* 2. Call Button */}
                  <a
                    href={contact.phoneTel}
                    className="py-3 px-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors text-center"
                    aria-label={`Call Balaji Tourist for ${vehicle.name}`}
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>Call Now</span>
                  </a>

                  {/* 3. WhatsApp Button */}
                  <a
                    href={`https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(
                      `Hello Balaji Tourist, I would like to enquire about vehicle availability for ${vehicle.name} in Bangalore.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors text-center"
                    aria-label={`WhatsApp Balaji Tourist for ${vehicle.name}`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-white flex-shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Factual Information Guarantee Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 text-center max-w-3xl mx-auto">
          <h4 className="text-base font-bold text-slate-900 mb-1">
            Looking for vehicle availability for your travel dates?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            Contact Balaji Tourist directly with your Bangalore sightseeing or outstation itinerary. Vehicle availability is confirmed on enquiry.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-amber-600" />
              Direct Phone Booking
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-amber-600" />
              Instant WhatsApp Support
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-amber-600" />
              Bangalore Based Operation
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
