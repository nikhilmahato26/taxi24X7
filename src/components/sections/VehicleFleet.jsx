import { useState } from 'react'
import { motion } from 'framer-motion'
import { Car, Phone, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react'
import { vehicles, contact, rateNotes } from '../../data/siteContent'

export default function VehicleFleet({ onOpenEnquiry }) {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const categories = ['All', 'Sedan', 'MUV', 'Premium', 'Group Travel']

  const filteredVehicles = selectedFilter === 'All'
    ? vehicles
    : vehicles.filter((v) => v.category === selectedFilter)

  return (
    <section id="vehicles" className="py-20 lg:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-4">
            <Car className="w-3.5 h-3.5" />
            <span>Fleet &amp; Quoted Rate Card</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            CHOOSE YOUR VEHICLE
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Reliable, well-maintained vehicles for city travel, outstation journeys, and group mountain tours.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedFilter === cat
                    ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Premium Vehicle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle, idx) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group bg-slate-900 rounded-3xl border border-slate-800 hover:border-amber-400/80 shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Vehicle Image Box */}
                <div className="relative aspect-[16/10] bg-slate-950 p-6 flex items-center justify-center overflow-hidden border-b border-slate-800/80">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900/90 text-amber-400 border border-slate-700">
                    {vehicle.category}
                  </div>

                  <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-slate-950 shadow-md">
                    Rate: {vehicle.rateDisplay}
                  </div>

                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} - TAXI 24X7 North India Taxi`}
                    className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                      {vehicle.name}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {vehicle.description}
                  </p>

                  {/* Rate highlight badge */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-400">Starting / quoted rate</span>
                    <span className="text-xl font-black text-amber-400">{vehicle.rateDisplay}</span>
                  </div>

                  <div className="text-[11px] text-slate-400 italic">
                    Contact TAXI 24X7 for total fare calculation.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-7 pt-0 space-y-3">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(vehicle.name)}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
                >
                  <span>Book / Enquire</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(vehicle.name)}
                    className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold text-center transition-colors"
                  >
                    Check Availability
                  </button>

                  <a
                    href={`https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(
                      `Hello TAXI 24X7, I want to check availability and fare quote for ${vehicle.name} (${vehicle.rateDisplay}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors text-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mandatory Rate Notes & Disclaimers */}
        <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-wider text-amber-400 mb-2">
                Rate Information Notice
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                {rateNotes.primaryNotice}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-semibold leading-relaxed">
                {rateNotes.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
