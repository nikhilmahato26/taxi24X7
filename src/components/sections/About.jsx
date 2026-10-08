import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, CheckCircle, ShieldCheck, Compass, Car, Users, Sparkles } from 'lucide-react'
import { brand, contact, aboutContent, vehicles } from '../../data/siteContent'

const positioningPillars = [
  'Tourist Transportation',
  'Bangalore Sightseeing',
  'Outstation Travel',
  'Family Travel',
  'Group Travel',
  'Comfortable Car Travel',
  'Airport / City Travel Enquiries',
  'Karnataka Travel',
  'South India Travel',
]

export default function About({ onOpenEnquiry }) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Card */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
                <div className="relative aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80"
                    alt="Bangalore Palace landmark tourist destination"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/90 text-slate-950 inline-block mb-1">
                      Bangalore Tourist Hub
                    </span>
                    <p className="text-sm font-bold text-white">Comfortable Rides Across Bangalore & Karnataka</p>
                  </div>
                </div>

                {/* Fleet summary banner inside card */}
                <div className="p-6 bg-slate-900 text-white">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-300 pb-3 border-b border-white/10">
                    <span>Available Fleet Options</span>
                    <span className="text-amber-400">Bangalore</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {vehicles.map((v) => (
                      <span
                        key={v.id}
                        className="text-xs px-3 py-1.5 rounded-lg bg-white/10 text-white font-medium border border-white/10"
                      >
                        {v.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Badge Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center flex-shrink-0 font-bold">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Bangalore, Karnataka</div>
                    <div className="text-[11px] text-slate-500">Tourist Transportation Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Factual Copy & Positioning */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-50 text-amber-900 border border-amber-200 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>About Balaji Tourist</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              {aboutContent.heading}
            </h2>

            {/* Factual Core Content */}
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
              <p className="font-semibold text-slate-900">
                {aboutContent.paragraph1}
              </p>
              <p className="text-slate-600">
                {aboutContent.paragraph2}
              </p>
            </div>

            {/* Business Positioning Grid */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Core Travel Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {positioningPillars.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry()}
                className="btn-primary"
              >
                Enquire for Travel
              </button>
              <a
                href={contact.phoneTel}
                className="btn-secondary"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                Call {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
