import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { delhiRoutes, chandigarhRoutes, contact } from '../../data/siteContent'
import { useInView } from '../../hooks/useInView'

export default function RoutesSection() {
  const [activeTab, setActiveTab] = useState('delhi') // 'delhi' | 'chandigarh'
  const [searchQuery, setSearchQuery] = useState('')
  const [ref, inView] = useInView(0.1)

  const currentRoutes = activeTab === 'delhi' ? delhiRoutes : chandigarhRoutes

  const filteredRoutes = useMemo(() => {
    if (!searchQuery.trim()) return currentRoutes
    const q = searchQuery.toLowerCase().trim()
    return currentRoutes.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.to.toLowerCase().includes(q) ||
        r.desc.toLowerCase().includes(q) ||
        r.tag.toLowerCase().includes(q)
    )
  }, [currentRoutes, searchQuery])

  return (
    <section id="routes" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">
            <svg className="w-4 h-4 text-yellow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Popular Highway & Hill Routes
          </span>
          <h2 className="section-title mb-4">
            Most Booked <span className="text-blue-primary">Taxi Routes</span>
          </h2>
          <p className="section-sub mx-auto">
            Doorstep pickup across Delhi NCR & Chandigarh Tri-City. Explore direct one-way and round-trip routes with fixed & per-km fares.
          </p>
        </motion.div>

        {/* Tab & Search Bar Container */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50 p-3 sm:p-4 rounded-2xl border border-gray-200">
          {/* Tabs */}
          <div className="flex w-full md:w-auto items-center p-1 bg-white rounded-xl shadow-sm border border-gray-100">
            <button
              type="button"
              onClick={() => {
                setActiveTab('delhi')
                setSearchQuery('')
              }}
              className={`flex-1 md:flex-none px-5 py-2.5 rounded-lg text-sm font-black transition-all ${
                activeTab === 'delhi'
                  ? 'bg-blue-primary text-white shadow-sm'
                  : 'text-gray-600 hover:text-blue-primary'
              }`}
            >
              Delhi Routes ({delhiRoutes.length})
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('chandigarh')
                setSearchQuery('')
              }}
              className={`flex-1 md:flex-none px-5 py-2.5 rounded-lg text-sm font-black transition-all ${
                activeTab === 'chandigarh'
                  ? 'bg-blue-primary text-white shadow-sm'
                  : 'text-gray-600 hover:text-blue-primary'
              }`}
            >
              Chandigarh Routes ({chandigarhRoutes.length})
            </button>
          </div>

          {/* Search box */}
          <div className="w-full md:w-80 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${activeTab === 'delhi' ? 'Delhi' : 'Chandigarh'} destinations (e.g. Manali, Shimla)...`}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-primary/40 focus:border-blue-primary"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold bg-gray-100 rounded-full w-4 h-4 flex items-center justify-center"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredRoutes.map((route, i) => (
              <motion.div
                key={route.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: i < 9 ? i * 0.03 : 0 }}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card hover:shadow-card-hover hover:border-blue-primary/30 transition-all flex flex-col group relative"
              >
                {route.popular && (
                  <span className="absolute -top-2.5 right-4 bg-yellow-primary text-blue-dark text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-sm tracking-wide">
                    ★ Popular
                  </span>
                )}

                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block bg-blue-50 text-blue-primary text-xs font-bold px-2 py-0.5 rounded">
                    {route.tag}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {route.from} ➔ {route.to}
                  </span>
                </div>

                <h3 className="text-base font-black text-blue-dark mb-1.5 group-hover:text-blue-primary transition-colors">
                  {route.title}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">
                  {route.desc}
                </p>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                  <a
                    href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Hi TAXI 24X7, I want to book ${route.title}. Please provide fare quote and car options.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-yellow-primary hover:bg-yellow-400 text-blue-dark font-black text-xs py-2 px-3 rounded-lg transition-colors shadow-sm"
                  >
                    WhatsApp Fare
                  </a>
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex-1 text-center bg-blue-50 hover:bg-blue-primary hover:text-white text-blue-primary font-bold text-xs py-2 px-3 rounded-lg transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredRoutes.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-500 font-bold mb-2">No routes found matching "{searchQuery}"</p>
            <p className="text-xs text-gray-400 mb-4">We cover ANY destination across North India. Call us for instant quote!</p>
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2 btn-primary text-blue-dark text-xs px-5 py-2.5"
            >
              Call {contact.displayPhone}
            </a>
          </div>
        )}

        {/* Bottom Route Note */}
        <div className="mt-12 text-center text-xs text-gray-500">
          <p>
            💡 Need a route not listed above? We cover all cities, hill towns, villages, and tourist attractions across <strong>Punjab, Haryana, Himachal Pradesh, Uttarakhand, Delhi NCR, Rajasthan, and Uttar Pradesh</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
