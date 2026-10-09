import { motion } from 'framer-motion'
import { howItWorks, contact } from '../../data/siteContent'
import { useInView } from '../../hooks/useInView'

const icons = {
  location: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  phone: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  car: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17h8M5 17H3v-4.586a1 1 0 01.293-.707l3.414-3.414A1 1 0 017.414 8H16a1 1 0 01.707.293l1 1A1 1 0 0118 10v7h-2" />
      <circle cx="7.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth={2} />
      <circle cx="16.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth={2} />
    </svg>
  ),
}

export default function HowItWorks() {
  const [ref, inView] = useInView(0.2)

  return (
    <section className="py-20 bg-gray-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">
            <svg className="w-4 h-4 text-yellow-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
            </svg>
            Simple 3-Step Process
          </span>
          <h2 className="section-title mb-4">How It Works</h2>
          <p className="section-sub mx-auto">
            Book your taxi with a quick WhatsApp message or direct phone call.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-yellow-primary to-blue-primary z-0" />

          {howItWorks.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="relative mb-6">
                {/* Step number badge */}
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-yellow-primary rounded-full flex items-center justify-center z-10 shadow-sm">
                  <span className="text-blue-dark font-black text-xs">{step.step}</span>
                </div>
                {/* Icon circle */}
                <div className="w-20 h-20 bg-white rounded-2xl shadow-card flex items-center justify-center text-blue-primary group-hover:shadow-card-hover group-hover:-translate-y-1 transition-all duration-300">
                  {icons[step.icon]}
                </div>
              </div>
              <h3 className="text-xl font-black text-blue-dark mb-2">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-xs text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12 flex flex-wrap justify-center gap-3"
        >
          <a
            href={`tel:${contact.phone}`}
            className="btn-primary text-sm px-8 py-3.5 text-blue-dark inline-flex items-center gap-2 font-black"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Call {contact.displayPhone}
          </a>
          <a
            href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi TAXI 24X7, I want to book a taxi.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm px-8 py-3.5 inline-flex items-center gap-2 font-black"
          >
            WhatsApp Booking
          </a>
        </motion.div>
      </div>
    </section>
  )
}
