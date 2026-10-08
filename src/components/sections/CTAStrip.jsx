import { motion } from 'framer-motion'
import { Phone, MessageSquare, ArrowRight, Sparkles } from 'lucide-react'
import { brand, contact } from '../../data/siteContent'

export default function CTAStrip({ onOpenEnquiry }) {
  return (
    <section className="relative py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-t border-b border-white/10">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Bangalore Tourist Travel</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Explore Bangalore or Travel Beyond?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Contact Balaji Tourist today for comfortable tourist transportation and car rental availability in Bangalore.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>{brand.primaryCta}</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <a
              href={contact.phoneTel}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call {contact.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
