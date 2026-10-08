import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react'
import { contact, locations, brand } from '../../data/siteContent'

export default function LocationsContact({ onOpenEnquiry }) {
  return (
    <section id="locations" className="py-20 lg:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Operating Hubs &amp; Contact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            BUSINESS LOCATIONS &amp; CONTACT
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            AXI 24X7 operates across North India with dedicated operational hubs in Chandigarh and Gurgaon. Reach us around the clock for enquiries and bookings.
          </p>
        </div>

        {/* Operating Hubs & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Hub 1: Chandigarh */}
          <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 hover:border-amber-400 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Chandigarh Hub
              </span>
              <h3 className="text-base font-black text-white mb-2">
                City Plaza, Peermuchalla, Chandigarh
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Serving Chandigarh Tri-city, Mohali, Panchkula, and connecting routes to Himachal Pradesh &amp; Punjab.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-900 text-[11px] text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              24x7 Operations Base
            </div>
          </div>

          {/* Hub 2: Gurgaon */}
          <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 hover:border-amber-400 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Gurgaon / NCR Hub
              </span>
              <h3 className="text-base font-black text-white mb-2">
                Rajendra Park, Sector 105, Gurgaon, Haryana
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Serving Gurgaon, Delhi NCR, airport transfers, and outstation routes to Rajasthan, UP &amp; Uttarakhand.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-900 text-[11px] text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              24x7 Operations Base
            </div>
          </div>

          {/* Contact: Phone */}
          <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 hover:border-amber-400 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Primary Phone (24x7)
              </span>
              <h3 className="text-lg font-black text-white mb-2">
                {contact.phone}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Call anytime for instant cab dispatch, outstation bookings, and route inquiries.
              </p>
            </div>
            <a
              href={contact.phoneTel}
              className="py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs text-center inline-flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Contact: Email & GST */}
          <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 hover:border-blue-400 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Official Email
              </span>
              <h3 className="text-sm font-black text-white break-all mb-2">
                {contact.email}
              </h3>
              <div className="mt-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-amber-400">
                GST: {contact.gstNumber}
              </div>
            </div>
            <a
              href={contact.emailMailto}
              className="mt-4 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs text-center inline-flex items-center justify-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* GST & Registration Banner */}
        <div id="contact" className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 block">
                GST REGISTRATION: {contact.gstNumber}
              </span>
              <h4 className="text-xl font-black text-white">
                {brand.name} • {contact.serviceType}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Connecting Delhi, Chandigarh, Punjab, Haryana, Himachal, Uttarakhand, UP, J&amp;K and Rajasthan.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="py-3 px-6 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all"
            >
              Book Taxi Online
            </button>
            <a
              href={contact.phoneTel}
              className="py-3 px-6 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs text-center transition-all"
            >
              Dial {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
