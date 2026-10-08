import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, Car, Phone, MessageSquare, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
import { delhiRoutes, chandigarhRoutes, vehicles, contact, rateNotes } from '../../data/siteContent'

export default function RouteSearchWidget({ onOpenEnquiry }) {
  const [startingCity, setStartingCity] = useState('Delhi')
  const [selectedDestination, setSelectedDestination] = useState('')
  const [activeResult, setActiveResult] = useState(null)

  // Dynamically populate destinations based on starting city
  const availableRoutes = useMemo(() => {
    if (startingCity === 'Delhi') return delhiRoutes
    if (startingCity === 'Chandigarh') return chandigarhRoutes
    // If 'Other', provide full combined list
    return [...delhiRoutes, ...chandigarhRoutes]
  }, [startingCity])

  const destinationOptions = useMemo(() => {
    const list = availableRoutes.map((r) => r.to)
    return Array.from(new Set(list)).sort()
  }, [availableRoutes])

  const handleSearch = (e) => {
    e.preventDefault()
    if (!selectedDestination) return

    const matched = availableRoutes.find(
      (r) => r.to.toLowerCase() === selectedDestination.toLowerCase()
    )

    if (matched) {
      setActiveResult(matched)
    } else {
      setActiveResult({
        displayName: `${startingCity} to ${selectedDestination} Taxi`,
        description: `Custom outstation taxi travel from ${startingCity} to ${selectedDestination} across North India.`,
        from: startingCity,
        to: selectedDestination,
      })
    }
  }

  return (
    <section id="route-search" className="py-20 lg:py-28 bg-slate-900 relative text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-4">
            <Search className="w-3.5 h-3.5" />
            <span>North India Route Finder</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            SEARCH YOUR TRAVEL ROUTE
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Select your starting hub in Delhi or Chandigarh to check route connectivity, vehicle options, and transparent per-kilometre rates.
          </p>
        </div>

        {/* Search Widget Card */}
        <div className="max-w-4xl mx-auto bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            {/* Starting City Selector */}
            <div className="md:col-span-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Starting City
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-amber-400" />
                <select
                  value={startingCity}
                  onChange={(e) => {
                    setStartingCity(e.target.value)
                    setSelectedDestination('')
                    setActiveResult(null)
                  }}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="Delhi">Delhi (Delhi NCR / Gurgaon)</option>
                  <option value="Chandigarh">Chandigarh (Peermuchalla / Tri-City)</option>
                  <option value="Other">Other North India Location</option>
                </select>
              </div>
            </div>

            {/* Destination Selector */}
            <div className="md:col-span-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Select Destination
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">-- Choose Destination --</option>
                  {destinationOptions.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Route Button */}
            <div className="md:col-span-3">
              <button
                type="submit"
                disabled={!selectedDestination}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20 active:scale-95"
              >
                <Search className="w-4 h-4" />
                <span>Search Route</span>
              </button>
            </div>
          </form>

          {/* Search Result Box */}
          <AnimatePresence>
            {activeResult && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="mt-8 pt-8 border-t border-slate-800"
              >
                {/* Route Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 mb-2">
                      <span>Verified Route</span>
                    </div>
                    <h3 className="text-2xl font-black text-white">{activeResult.displayName}</h3>
                    <p className="text-slate-400 text-sm mt-1">{activeResult.description}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry && onOpenEnquiry('', activeResult.displayName)}
                      className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-colors"
                    >
                      Enquire This Route
                    </button>
                    <a
                      href={contact.phoneTel}
                      className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 transition-colors"
                      title="Call Now"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Available Vehicle Options for This Route */}
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Vehicle Options &amp; Quoted Starting Rates for this Route:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {vehicles.map((v) => (
                    <div
                      key={v.id}
                      className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-colors flex items-center justify-between"
                    >
                      <div>
                        <span className="font-bold text-white text-sm block">{v.name}</span>
                        <span className="text-xs text-slate-400">{v.category}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-base font-black text-amber-400 block">{v.rateDisplay}</span>
                        <span className="text-[10px] text-slate-400">Rate: ₹{v.ratePerKm}/km</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Rate Notice */}
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
                  <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p>
                    {rateNotes.disclaimer} {rateNotes.primaryNotice}
                  </p>
                </div>

                {/* Quick WhatsApp & Call Action Strip */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
                  <span className="text-xs text-slate-400 font-semibold">
                    Ready to book? Speak to AXI 24X7 directly:
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(
                        `Hello AXI 24X7, I am enquiring about ${activeResult.displayName}. Please share vehicle availability and quote.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Quote</span>
                    </a>
                    <a
                      href={contact.phoneTel}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>Call {contact.phone}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
