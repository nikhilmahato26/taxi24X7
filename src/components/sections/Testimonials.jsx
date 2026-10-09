import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../../data/siteContent'
import { useInView } from '../../hooks/useInView'

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className={`w-4 h-4 ${i <= rating ? 'text-yellow-primary' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [ref, inView] = useInView(0.2)
  const timerRef = useRef(null)

  const next = () => setCurrent(p => (p + 1) % testimonials.length)
  const prev = () => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    timerRef.current = setInterval(next, 4500)
    return () => clearInterval(timerRef.current)
  }, [])

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, 4500)
  }

  const goTo = (i) => { setCurrent(i); resetTimer() }
  const handlePrev = () => { prev(); resetTimer() }
  const handleNext = () => { next(); resetTimer() }

  // Show 1 on mobile, 3 on desktop (centered)
  const visibleCount = 3
  const visibleItems = Array.from({ length: visibleCount }, (_, i) =>
    testimonials[(current + i) % testimonials.length]
  )

  return (
    <section className="py-20 bg-gray-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            Customer Reviews
          </span>
          <h2 className="section-title mb-4">
            What Our Customers <span className="text-blue-primary">Say</span>
          </h2>
          <p className="section-sub mx-auto">
            Real reviews from TAXI 24X7 passengers across Delhi NCR, Chandigarh, and North India.
          </p>
        </motion.div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-10">
          {visibleItems.map((t, i) => (
            <AnimatePresence key={t.name + current} mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`bg-white rounded-3xl p-6 shadow-card border-2 flex flex-col gap-4 ${
                  i === 1 ? 'border-yellow-primary scale-105 shadow-yellow' : 'border-gray-100'
                }`}
              >
                <TestimonialContent t={t} />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>

        {/* Mobile: 1 card */}
        <div className="md:hidden mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl p-6 shadow-card border-2 border-yellow-primary flex flex-col gap-4"
            >
              <TestimonialContent t={testimonials[current]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border-2 border-blue-primary text-blue-primary flex items-center justify-center hover:bg-blue-primary hover:text-white transition-all focus:outline-none focus:ring-4 focus:ring-blue-primary/30"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                  i === current ? 'bg-yellow-primary w-6' : 'bg-gray-200 w-2 hover:bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border-2 border-blue-primary text-blue-primary flex items-center justify-center hover:bg-blue-primary hover:text-white transition-all focus:outline-none focus:ring-4 focus:ring-blue-primary/30"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}

function TestimonialContent({ t }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <StarRating rating={t.rating} />
        <span className="text-xs bg-blue-50 text-blue-primary font-semibold px-2.5 py-1 rounded-full">{t.type}</span>
      </div>

      <svg className="w-8 h-8 text-yellow-primary opacity-60" fill="currentColor" viewBox="0 0 32 32">
        <path d="M10 8C6.7 8 4 10.7 4 14v10h10V14H7c0-1.7 1.3-3 3-3V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z"/>
      </svg>

      <p className="text-gray-600 leading-relaxed text-sm flex-1 italic">"{t.review}"</p>

      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <div className="w-10 h-10 bg-blue-primary rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0">
          {t.name[0]}
        </div>
        <div>
          <div className="font-bold text-blue-dark text-sm">{t.name}</div>
          <div className="text-xs text-gray-400 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            {t.location}
          </div>
        </div>
      </div>
    </>
  )
}
