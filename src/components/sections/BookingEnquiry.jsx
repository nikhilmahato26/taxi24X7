import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageSquare, Calendar, MapPin, User, Car, Compass, CheckCircle2 } from 'lucide-react'
import { contact, vehicles, tripTypes } from '../../data/siteContent'

export default function BookingEnquiry() {
  const [vehicle, setVehicle] = useState(vehicles[0].name)
  const [tripType, setTripType] = useState(tripTypes[0])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [pickup, setPickup] = useState('')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !phone) return

    const lines = [
      '👋 Hello Balaji Tourist, I would like to enquire about vehicle availability in Bangalore:',
      '',
      `🚗 Vehicle Selected: ${vehicle}`,
      `🗺️ Travel Type: ${tripType}`,
      `📅 Travel Date: ${date || 'Flexible / To be confirmed'}`,
      `📍 Bangalore Pickup: ${pickup || 'Bangalore'}`,
      `👤 Name: ${name}`,
      `📞 Phone: ${phone}`,
      notes ? `📝 Travel Notes: ${notes}` : '',
      '',
      'Please let me know availability and travel details. Thank you!',
    ].filter(Boolean)

    const whatsappUrl = `https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section id="book" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Context & Direct Contact */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-400/15 text-amber-300 border border-amber-400/30 mb-4">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Direct Travel Enquiry</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Plan Your Journey with Balaji Tourist
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Send us your travel requirements to check vehicle availability for Bangalore city sightseeing, family travel or outstation journeys across Karnataka.
            </p>

            <div className="space-y-4">
              <a
                href={contact.phoneTel}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Call Directly
                  </span>
                  <span className="block text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {contact.phone}
                  </span>
                </div>
              </a>

              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    WhatsApp Chat
                  </span>
                  <span className="block text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    +91 9035018855
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-800/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              <div className="mb-6 pb-6 border-b border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold text-white">Travel Availability Enquiry</h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Fill in your travel preference to instantly connect with Balaji Tourist.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Enquiry Forwarded!</h4>
                  <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
                    Your vehicle enquiry has been initiated on WhatsApp. You can also call us directly at {contact.phone}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Vehicle selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Select Vehicle Option
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {vehicles.map((v) => {
                        const isSelected = vehicle === v.name
                        return (
                          <button
                            type="button"
                            key={v.id}
                            onClick={() => setVehicle(v.name)}
                            className={`p-3 rounded-xl border text-left text-xs font-semibold flex items-center gap-2 transition-all ${
                              isSelected
                                ? 'border-amber-400 bg-amber-400/20 text-white font-bold'
                                : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                            }`}
                          >
                            <Car className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                            <span className="truncate">{v.name}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Trip Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Travel Requirement
                    </label>
                    <select
                      value={tripType}
                      onChange={(e) => setTripType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      {tripTypes.map((type) => (
                        <option key={type} value={type} className="bg-slate-900 text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Your Full Name <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Suresh Gowda"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-slate-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 9035018855"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-slate-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Date & Pickup */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Planned Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-slate-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Bangalore Pickup Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          value={pickup}
                          onChange={(e) => setPickup(e.target.value)}
                          placeholder="e.g. Whitefield / Jayanagar / MG Road"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-slate-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Destination / Itinerary Details
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Share your planned destinations (e.g. Mysore day trip, Coorg 3 days, or city sightseeing)..."
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-4 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all active:scale-95"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Enquire on WhatsApp</span>
                    </button>

                    <a
                      href={contact.phoneTel}
                      className="py-4 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/15 transition-all text-center"
                    >
                      <Phone className="w-4 h-4 text-amber-400" />
                      <span>Call {contact.phone}</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
