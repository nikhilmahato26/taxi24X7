import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Calendar, ArrowRight, MapPin, Sparkles, Shield, CheckCircle, Car } from 'lucide-react'
import { brand, contact, vehicles } from '../../data/siteContent'

export default function Hero({ onOpenEnquiry }) {
  const [activeVehicleIdx, setActiveVehicleIdx] = useState(0)
  const currentVehicle = vehicles[activeVehicleIdx]

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 bg-slate-950 overflow-hidden">
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/85 to-slate-950 z-10" />
        <img
          src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=2000&q=80"
          alt="Bangalore City & Vidhana Soudha Karnataka scenic skyline"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
        />
        {/* Glow circles */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & Call to Action */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-amber-400/15 text-amber-300 border border-amber-400/30 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{brand.eyebrow}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
            >
              EXPLORE BANGALORE. <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                TRAVEL BEYOND.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              {brand.heroSubheading}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry(currentVehicle.name)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all"
              >
                <span>{brand.primaryCta}</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>

              {/* Secondary CTA */}
              <a
                href={contact.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-base border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>
                  {brand.secondaryCta}: <strong className="font-extrabold">{contact.phone}</strong>
                </span>
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Bangalore & Karnataka Travel</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-amber-400" />
                <span>Toyota Innova, Etios & Swift Dzire</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Dedicated Tourist Transportation</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Fleet Card & Live Vehicle Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/15 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/50">
              {/* Header badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Available Tourist Vehicles
                  </span>
                  <h3 className="text-xl font-extrabold text-white">Choose Your Travel Ride</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Active In Bangalore
                </div>
              </div>

              {/* Vehicle selector tabs */}
              <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-slate-800/80 border border-white/10 mb-6">
                {vehicles.map((v, idx) => {
                  const isActive = activeVehicleIdx === idx
                  return (
                    <button
                      type="button"
                      key={v.id}
                      onClick={() => setActiveVehicleIdx(idx)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold transition-all text-center truncate ${
                        isActive
                          ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {v.name.replace('Maruti Suzuki ', '').replace('Toyota ', '')}
                    </button>
                  )
                })}
              </div>

              {/* Vehicle Display Showcase */}
              <div className="relative aspect-[16/10] rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/90 border border-white/10 p-4 flex items-center justify-center overflow-hidden mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentVehicle.id}
                    initial={{ opacity: 0, y: 15, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.96 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full flex flex-col items-center justify-center"
                  >
                    <img
                      src={currentVehicle.image}
                      alt={`${currentVehicle.name} - Balaji Tourist Bangalore`}
                      className="max-h-[190px] w-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Floating category badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold">
                  {currentVehicle.category}
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-extrabold text-white">{currentVehicle.name}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1">{currentVehicle.description}</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Availability</span>
                  <span className="text-amber-400 font-bold">{currentVehicle.availabilityNote}</span>
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(currentVehicle.name)}
                    className="py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs text-center transition-all shadow-md"
                  >
                    Enquire This Vehicle
                  </button>

                  <a
                    href={`https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(
                      `Hello Balaji Tourist, I would like to enquire about vehicle availability for ${currentVehicle.name} in Bangalore.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center transition-all flex items-center justify-center gap-1.5 shadow-md"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
