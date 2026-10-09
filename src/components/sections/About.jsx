import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import heroBg2 from '../../assets/images/hero-bg-2.png'
import { contact } from '../../data/siteContent'

const stats = [
  { num: '10+', label: 'States & UTs Covered' },
  { num: '24×7', label: 'Service Active' },
  { num: '₹12/km', label: 'Starting Cab Rate' },
  { num: '5★', label: 'Rated Drivers' },
]

export default function About() {
  const [ref, inView] = useInView(0.2)

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left – Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover border border-gray-100">
              <img
                src={heroBg2}
                alt="TAXI 24X7 reliable cab service across North India"
                className="w-full h-[460px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-dark/70 via-transparent to-transparent" />
              
              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                  <div className="w-11 h-11 bg-yellow-primary rounded-xl flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    🚖
                  </div>
                  <div>
                    <div className="font-black text-blue-dark text-sm">North India's Trusted Cabs</div>
                    <div className="text-gray-500 text-xs">Chandigarh &amp; Gurgaon Hubs • 24×7 Dispatch</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -top-6 -right-6 bg-blue-primary rounded-2xl p-5 shadow-blue text-white hidden lg:block"
            >
              <div className="text-2xl font-black text-yellow-primary">24×7</div>
              <div className="text-xs text-blue-100 font-semibold">Any Time<br />Everywhere</div>
            </motion.div>
          </motion.div>

          {/* Right – Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="section-label">
                <svg className="w-4 h-4 text-yellow-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                About TAXI 24X7
              </span>
              <h2 className="section-title mb-5">
                Your Ride. Any Time. <span className="text-blue-primary">Everywhere.</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                <strong>TAXI 24X7</strong> is a premier 24×7 cab and travel services provider operating strategically from <strong>Chandigarh (Peermuchalla)</strong> and <strong>Gurgaon (Sector 105)</strong>, serving travelers across all of North India.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Whether you need a quick one-way taxi between Delhi and Chandigarh, a dependable family ride to the hills of Himachal &amp; Uttarakhand, or a comfortable multi-day pilgrimage to Char Dham or 5 Devi Yatra, we offer prompt dispatch, clean AC vehicles, and upfront per-kilometre pricing starting at just <strong>₹12/km</strong>.
              </p>

              {/* Features list */}
              <ul className="space-y-2.5 mb-8">
                {[
                  'Operating across Delhi NCR, Chandigarh, Punjab, Himachal, Uttarakhand, Haryana, UP, Rajasthan & J&K',
                  'Fleet ranging from Sedans (Dzire/Aura) to Innova Crysta, Hycross & 12-17 Seater Tempo Travellers',
                  'Mountain road veterans and police-verified highway drivers',
                  'GST Registered Business (GSTIN: 03BZHPK5217Q1Z2) with official tax billing',
                  'Door-to-door doorstep pickup and 24x7 phone & WhatsApp booking assistance',
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.06 }}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium"
                  >
                    <span className="w-4 h-4 bg-yellow-primary/20 rounded-full flex items-center justify-center flex-shrink-0 text-blue-primary font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-gray-100">
                {stats.map((s) => (
                  <div key={s.label} className="bg-gray-50 p-3 rounded-2xl text-center border border-gray-100">
                    <div className="text-xl sm:text-2xl font-black text-blue-dark">{s.num}</div>
                    <div className="text-[11px] text-gray-500 font-semibold mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
