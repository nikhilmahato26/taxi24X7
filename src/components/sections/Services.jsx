import { motion } from 'framer-motion'
import { services, contact } from '../../data/siteContent'
import { useInView } from '../../hooks/useInView'

const serviceIcons = {
  outstation: '🛣️',
  'hill-tours': '🏔️',
  pilgrimage: '🛕',
  'one-way': '➡️',
  airport: '✈️',
  'tempo-group': '🚌',
}

export default function Services() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="services" className="py-20 bg-gray-bg">
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
            Comprehensive Travel Solutions
          </span>
          <h2 className="section-title mb-4">
            Our Taxi &amp; Tour <span className="text-blue-primary">Services</span>
          </h2>
          <p className="section-sub mx-auto">
            From daily airport runs and one-way intercity drops to multi-day Himalayan expeditions and Char Dham yatra pilgrimages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const icon = serviceIcons[service.id] || '🚗'
            const whatsappMsg = `Hi TAXI 24X7, I want to book ${service.title}. Please confirm availability and fare estimate.`

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-3xl p-6 shadow-card card-hover border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{icon}</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-primary">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-blue-dark mb-2 group-hover:text-blue-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {service.routes.map((rt) => (
                      <div key={rt} className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                        <span className="text-yellow-primary font-bold">➔</span>
                        <span>{rt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center bg-yellow-primary hover:bg-yellow-400 text-blue-dark font-black text-xs py-2.5 px-3 rounded-xl transition-all shadow-sm"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-center bg-blue-primary hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-3 rounded-xl transition-all shadow-sm"
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
