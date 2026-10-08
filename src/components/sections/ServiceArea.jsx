import { motion } from 'framer-motion'
import { MapPin, CheckCircle2, ArrowRight } from 'lucide-react'
import { serviceArea, contact } from '../../data/siteContent'

export default function ServiceArea({ onOpenEnquiry }) {
  return (
    <section id="service-area" className="py-20 lg:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Regional Travel Coverage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {serviceArea.heading}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {serviceArea.supportingText}
          </p>
        </div>

        {/* States & Corridors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {serviceArea.states.map((state, idx) => (
            <motion.div
              key={state.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="group bg-slate-950 rounded-2xl p-5 border border-slate-800 hover:border-amber-400/80 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
                  <h3 className="text-base font-black text-white group-hover:text-amber-400 transition-colors">
                    {state.name}
                  </h3>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {state.note}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500">
                <span>Active Corridor</span>
                <span className="text-amber-400 font-bold">AXI 24X7</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Operational Note */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-950 border border-slate-800 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Need a travel quote for any of these states?</h4>
            <p className="text-xs text-slate-400">
              Enquire directly with your pickup and drop location across North India.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenEnquiry && onOpenEnquiry('', 'Outstation Travel')}
            className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider whitespace-nowrap transition-colors"
          >
            Enquire Journey
          </button>
        </div>
      </div>
    </section>
  )
}
