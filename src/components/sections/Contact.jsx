import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageSquare, Car, ArrowRight, ShieldCheck } from 'lucide-react'
import { contact, brand } from '../../data/siteContent'

export default function Contact({ onOpenEnquiry }) {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-50 text-amber-900 border border-amber-200 mb-4">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Connect with Balaji Tourist</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            CONTACT BALAJI TOURIST
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Reach out to enquire about vehicle availability for your upcoming Bangalore or Karnataka journeys.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* 1. Phone Card */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-400 transition-all text-center flex flex-col items-center justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5 mx-auto">
                <Phone className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">
                Direct Phone
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                {contact.phone}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Call us directly to discuss vehicle availability and travel enquiries.
              </p>
            </div>
            <a
              href={contact.phoneTel}
              className="w-full py-3 px-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs inline-flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Now</span>
            </a>
          </div>

          {/* 2. WhatsApp Card */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all text-center flex flex-col items-center justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-5 mx-auto">
                <MessageSquare className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">
                WhatsApp Chat
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                +91 9035018855
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Quickest way to share your dates and planned travel requirement.
              </p>
            </div>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs inline-flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* 3. Email Card */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-400 transition-all text-center flex flex-col items-center justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-5 mx-auto">
                <Mail className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">
                Email Enquiry
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 break-all mb-2">
                {contact.email}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Send your travel itinerary or questions via official email.
              </p>
            </div>
            <a
              href={contact.emailMailto}
              className="w-full py-3 px-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs inline-flex items-center justify-center gap-2 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* Location Notice (Bangalore, Karnataka, India - strict compliance, no invented street address) */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Operational Location
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                {contact.location}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Serving travelers across Bangalore with comfortable vehicle options for local sightseeing and outstation journeys.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-md shadow-amber-500/20"
            >
              Enquire Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
