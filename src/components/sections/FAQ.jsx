import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs, contact } from '../../data/siteContent'
import { useInView } from '../../hooks/useInView'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)
  const [ref, inView] = useInView(0.15)

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">
            <svg className="w-4 h-4 text-yellow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Got Questions?
          </span>
          <h2 className="section-title mb-4">
            Frequently Asked <span className="text-blue-primary">Questions</span>
          </h2>
          <p className="section-sub mx-auto">
            Everything you need to know about booking taxi and tours with TAXI 24X7.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`border-2 rounded-2xl overflow-hidden transition-all duration-200 ${
                openIdx === i ? 'border-blue-primary shadow-card' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-primary/30 focus:ring-inset"
                aria-expanded={openIdx === i}
              >
                <span className={`font-bold text-base transition-colors ${openIdx === i ? 'text-blue-primary' : 'text-blue-dark'}`}>
                  {faq.q}
                </span>
                <span className={`ml-4 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIdx === i ? 'bg-blue-primary text-white rotate-180' : 'bg-gray-100 text-gray-400'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 text-gray-500 leading-relaxed border-t border-gray-100 pt-4 text-sm">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10 p-6 bg-blue-50 rounded-3xl"
        >
          <p className="text-gray-600 font-medium mb-4">Still have questions? We're available 24×7 to assist you!</p>
          <a href={`tel:${contact.phone}`} className="btn-primary text-blue-dark inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Call {contact.displayPhone}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
