import { motion } from 'framer-motion'
import { contact } from '../../data/siteContent'
import { useInView } from '../../hooks/useInView'

export default function LocationsSection() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="locations" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-yellow-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-yellow-primary/20 text-yellow-primary font-bold text-xs uppercase px-4 py-1.5 rounded-full mb-4 border border-yellow-primary/30">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            Operational Hubs &amp; Service Coverage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Serving Across <span className="text-yellow-primary">North India</span>
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Operating from two strategic headquarters in Chandigarh and Gurgaon to provide round-the-clock taxi connectivity across North India.
          </p>
        </motion.div>

        {/* Dual Hub Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contact.locations.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-7 border border-slate-700/80 hover:border-yellow-primary/40 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-primary text-blue-dark font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                    {loc.badge}
                  </span>
                  <span className="text-slate-400 text-xs font-semibold">24×7 Active Dispatch</span>
                </div>

                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-primary/30 border border-blue-400/30 flex items-center justify-center text-2xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{loc.title}</h3>
                    <p className="text-yellow-primary text-sm font-bold mt-1">
                      {loc.address}
                    </p>
                    <p className="text-slate-400 text-xs mt-1">
                      Region: {loc.area}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-700/60 flex items-center justify-between gap-3 mt-4">
                <a
                  href={`tel:${contact.phone}`}
                  className="flex-1 text-center bg-blue-primary hover:bg-blue-600 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all"
                >
                  Call {loc.title.split(' ')[0]} Hub
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Hi TAXI 24X7, I need a taxi from ${loc.title}. Please confirm availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-yellow-primary hover:bg-yellow-400 text-blue-dark font-black text-xs py-2.5 px-4 rounded-xl transition-all"
                >
                  WhatsApp Dispatch
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service States Grid & GST Verification */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* States Coverage */}
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-md rounded-3xl p-7 border border-slate-700">
            <h4 className="text-lg font-black text-white mb-2 flex items-center gap-2">
              <span className="text-yellow-primary">🗺️</span> North India States &amp; Regions Covered
            </h4>
            <p className="text-slate-300 text-xs mb-5">
              We provide doorstep pick-ups and drops across the following 10 states &amp; territories:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {contact.serviceAreas.map((area) => (
                <div
                  key={area}
                  className="bg-slate-700/60 hover:bg-slate-700 border border-slate-600/60 rounded-xl px-3 py-2.5 text-center transition-all"
                >
                  <span className="block text-xs font-black text-white">{area}</span>
                  <span className="block text-[10px] text-yellow-300 font-semibold mt-0.5">24×7 Available</span>
                </div>
              ))}
            </div>
          </div>

          {/* GST Registered Card */}
          <div className="bg-gradient-to-br from-blue-900/60 to-slate-800 rounded-3xl p-7 border border-blue-500/30 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-yellow-primary/20 text-yellow-primary flex items-center justify-center text-2xl mb-4 border border-yellow-primary/30">
                🧾
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-yellow-primary">
                Official Business Registration
              </span>
              <h4 className="text-xl font-black text-white mt-1 mb-2">
                GST Registered
              </h4>
              <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700 mb-3">
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">GSTIN / Number:</span>
                <span className="text-base sm:text-lg font-mono font-black text-yellow-primary tracking-wider">
                  {contact.gst}
                </span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Legitimate commercial taxi service with valid interstate tourist permits and official tax invoices for business trips.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-700/60">
              <span className="text-xs text-slate-400">Need corporate invoice?</span>
              <a
                href={`mailto:${contact.email}?subject=GST Invoice Request`}
                className="block text-xs text-yellow-primary font-bold hover:underline mt-0.5"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
