import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { contact, brand } from '../../data/siteContent'

export default function CTAStrip() {
  const [ref, inView] = useInView(0.3)

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #003B95 0%, #0A1F44 50%, #003B95 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 6s ease infinite',
        }}
      />

      {/* Glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-yellow-primary/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl pointer-events-none"
      />

      {/* Dotted overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #FFD200 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-yellow-primary/20 text-yellow-primary font-bold text-xs uppercase px-4 py-1.5 rounded-full mb-6 border border-yellow-primary/30">
            <span className="w-2 h-2 bg-yellow-primary rounded-full animate-pulse" />
            24×7 Active Dispatch Across North India
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Need a Cab{' '}
            <span className="text-yellow-primary">Right Now?</span>
          </h2>
          <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Book your taxi instantly with {brand.name}. Professional drivers, sanitized cars, and transparent pricing.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href={`tel:${contact.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-yellow-primary text-blue-dark font-black px-8 py-4 rounded-full text-base sm:text-lg shadow-yellow hover:bg-yellow-400 transition-all focus:outline-none focus:ring-4 focus:ring-yellow-primary/40"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call {contact.displayPhone}
            </motion.a>

            <motion.a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi TAXI 24X7, I need a cab right now!')}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 font-black px-8 py-4 rounded-full text-base sm:text-lg hover:bg-white/20 transition-all focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Booking
            </motion.a>
          </div>

          <p className="text-blue-200 text-xs sm:text-sm mt-6 font-medium">
            Operating Across Chandigarh • Delhi NCR • Punjab • Himachal • Uttarakhand • Haryana • Rajasthan • UP • J&amp;K
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}
