import { motion } from 'framer-motion'
import { whyChoose, brand } from '../../data/siteContent'
import { useInView } from '../../hooks/useInView'

export default function WhyChoose() {
  const [ref, inView] = useInView(0.15)

  return (
    <section className="py-20 bg-blue-dark overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-primary/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-primary/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-yellow-primary/20 text-yellow-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4 border border-yellow-primary/30">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            Why Choose TAXI 24X7
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            The {brand.name} <span className="text-yellow-primary">Difference</span>
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            We don't just drive you — we provide a dependable, safe, and comfortable journey every time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoose.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-yellow-primary/20 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:bg-yellow-primary/30 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">{item.title}</h3>
              <p className="text-blue-100 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
