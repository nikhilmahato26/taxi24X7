import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, ArrowRight, ShieldCheck, MapPin, Car, Sparkles, Clock, CheckCircle2 } from 'lucide-react'
import { brand, contact, vehicles } from '../../data/siteContent'

export default function Hero({ onOpenEnquiry }) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-950 overflow-hidden text-white">
      {/* Background imagery: North Indian mountain highway road-trip */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2000&q=80"
          alt="Himalayan mountain highway North India scenic taxi journey"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        />
        {/* Glow ambient spots */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top 24x7 Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-amber-400 text-slate-950 mb-4 shadow-lg shadow-amber-400/20"
            >
              <Clock className="w-3.5 h-3.5" />
              <span>24X7 TAXI SERVICE</span>
            </motion.div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="block text-xs sm:text-sm font-black tracking-widest uppercase text-amber-400 mb-3"
            >
              {brand.eyebrow}
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6"
            >
              YOUR JOURNEY, <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                OUR DRIVE
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
                onClick={() => onOpenEnquiry && onOpenEnquiry()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-slate-950 font-black text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all"
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

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-300"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Chandigarh (Peermuchalla) &amp; Gurgaon (Sec 105)</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-amber-400" />
                <span>Starting from ₹12/km</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>GST: {contact.gstNumber}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Column: Live Rate Snapshot Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/80">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-400">
                    Transparent Per-Km Rates
                  </span>
                  <h3 className="text-xl font-black text-white">North India Fleet Rates</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  24x7 Available
                </div>
              </div>

              {/* Quick Fleet Rate List */}
              <div className="space-y-2.5 mb-5">
                {vehicles.map((v) => (
                  <div
                    key={v.id}
                    className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-amber-500/50 transition-colors"
                  >
                    <div>
                      <span className="text-sm font-bold text-white block">{v.name}</span>
                      <span className="text-[11px] text-slate-400">{v.category}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-base font-black text-amber-400 block">{v.rateDisplay}</span>
                      <span className="text-[10px] text-slate-400">quoted rate</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed mb-5">
                * Final fare may depend on trip requirements. Contact AXI 24X7 for a quote for your journey.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry && onOpenEnquiry()}
                  className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs text-center transition-all"
                >
                  Book Your Taxi
                </button>
                <a
                  href={`https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(
                    'Hello AXI 24X7, I want to check taxi availability and fare for my travel in North India.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center transition-all flex items-center justify-center gap-1.5"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
