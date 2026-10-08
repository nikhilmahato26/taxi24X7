import { motion } from 'framer-motion'
import { Phone, MessageSquare, ArrowRight, Clock } from 'lucide-react'
import { brand, contact } from '../../data/siteContent'

export default function CTAStrip({ onOpenEnquiry }) {
  return (
    <section className="relative py-16 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-widest bg-slate-950 text-amber-400 mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Available 24 Hours • 7 Days a Week</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
              Ready for Your North India Journey?
            </h2>

            <p className="text-slate-950/80 font-semibold text-sm sm:text-base mt-2">
              Book your taxi or outstation ride now with AXI 24X7. Rates starting from ₹12/km. Call or WhatsApp our team anytime.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-950 text-amber-400 hover:text-white hover:bg-slate-900 font-black text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>{brand.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={contact.phoneTel}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white text-slate-950 font-black text-sm shadow-md hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call {contact.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
