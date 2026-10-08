import React from 'react';
import { Mountain, Compass, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface TourHighlightsSectionProps {
  onOpenBooking: (initialData?: { title?: string; type?: string }) => void;
}

export const TourHighlightsSection: React.FC<TourHighlightsSectionProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-16 py-10 bg-[#F7F9FC]">
      {/* 1. HIMACHAL PACKAGE HIGHLIGHT */}
      <section className="container-custom">
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_10px_35px_rgba(0,59,149,0.08)] grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-8 sm:p-12">
            <div className="section-label">
              <Mountain size={14} />
              <span>FEATURED MOUNTAIN JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1F44] tracking-tight mb-4">
              HIMACHAL TOUR PACKAGE
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Experience the breathtaking heights of Himachal Pradesh with AXI 24X7. From the colonial charm of Shimla and Kufri to snow points in Manali, Solang Valley, and Atal Tunnel, our experienced mountain drivers ensure comfortable, stress-free road trips.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8 text-xs font-bold text-slate-700">
              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#003B95]" />
                <span>Shimla & Kufri Drive</span>
              </div>
              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#003B95]" />
                <span>Manali Snow Valley</span>
              </div>
              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#003B95]" />
                <span>Scenic Mountain Roads</span>
              </div>
              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#003B95]" />
                <span>Sedan, MUV & Tempo</span>
              </div>
            </div>
            <button
              onClick={() => onOpenBooking({ title: 'Himachal Tour Package', type: 'tour-package' })}
              className="btn-primary text-sm px-7 py-3.5 font-extrabold shadow-md"
            >
              <Calendar size={16} />
              <span>Enquire About Himachal</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="lg:col-span-6 h-72 sm:h-96 lg:h-full min-h-[360px] relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
              alt="Himachal Snow Mountains & Scenic Roads"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/70 via-transparent to-transparent flex items-end p-6 text-white">
              <span className="text-sm font-bold bg-[#003B95] px-3 py-1 rounded-full text-white">
                Shimla • Manali • Snow Peaks • Scenic Roads
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. UTTARAKHAND / CHAR DHAM HIGHLIGHT */}
      <section className="container-custom">
        <div className="bg-gradient-to-br from-[#0A1F44] to-[#003B95] rounded-3xl overflow-hidden shadow-2xl text-white grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 h-72 sm:h-96 lg:h-full min-h-[360px] relative overflow-hidden order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1200&q=80"
              alt="Uttarakhand Himalayan Temples & Sacred Char Dham"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A1F44]/80 hidden lg:block" />
          </div>

          <div className="lg:col-span-6 p-8 sm:p-12 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              <span>DEVBHOOMI PILGRIMAGE & HILLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              Uttarakhand Tour Package
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-[#FFD200] mb-4">
              Char Dham Tour Package
            </h3>
            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-6">
              Traverse the sacred land of Devbhoomi with trusted outstation transport. We provide reliable cabs and Tempo Travellers for Uttarakhand tours connecting Dehradun, Mussoorie, Rishikesh, Haridwar, Nainital, and holy Char Dham shrines including Kedarnath and Badrinath.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8 text-xs font-semibold text-white/90">
              <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFD200]" />
                <span>Himalayan Temples</span>
              </div>
              <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFD200]" />
                <span>Mountain Valley Roads</span>
              </div>
              <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFD200]" />
                <span>Uttarakhand Landscapes</span>
              </div>
              <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFD200]" />
                <span>Char Dham Routes</span>
              </div>
            </div>
            <button
              onClick={() => onOpenBooking({ title: 'Uttarakhand / Char Dham Tour Package', type: 'tour-package' })}
              className="btn-primary text-sm px-8 py-3.5 font-extrabold"
            >
              <Calendar size={16} />
              <span>Plan Your Uttarakhand Journey</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. DISCOVER KASHMIR HIGHLIGHT */}
      <section className="container-custom">
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_10px_35px_rgba(0,59,149,0.08)] grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-8 sm:p-12">
            <div className="section-label">
              <Compass size={14} />
              <span>PARADISE ON EARTH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1F44] tracking-tight mb-4">
              DISCOVER KASHMIR
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
              Plan a comfortable journey to Kashmir with AXI 24X7. Enquire about available tour and transportation options.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-8">
              Experience the scenic lakes of Srinagar, pine-covered meadows of Gulmarg, and picturesque valleys of Pahalgam with our dedicated long-distance North India cabs.
            </p>
            <button
              onClick={() => onOpenBooking({ title: 'Kashmir Tour Package', type: 'tour-package' })}
              className="btn-secondary text-sm px-8 py-3.5 font-extrabold shadow-md"
            >
              <Calendar size={16} />
              <span>Enquire for Kashmir</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="lg:col-span-6 h-72 sm:h-96 lg:h-full min-h-[360px] relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80"
              alt="Kashmir Dal Lake Shikara & Pine Valley"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6 text-white">
              <span className="text-sm font-bold bg-[#FFD200] text-[#0A1F44] px-3.5 py-1 rounded-full">
                Srinagar • Gulmarg • Pahalgam
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5: RAJASTHAN & AGRA/MATHURA/VRINDAVAN SPLIT HIGHLIGHTS */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* RAJASTHAN CARD */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_6px_25px_rgba(0,59,149,0.06)] card-hover flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
                alt="Rajasthan Forts & Desert Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-black uppercase tracking-wider text-amber-300">
                  Royal Heritage Tours
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  Rajasthan Tour Package
                </h3>
              </div>
            </div>

            <div className="p-7">
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Explore the land of historic forts, opulent palaces, and desert highways across Jaipur, Ajmer, Udaipur, and Khatu Shyam Ji with AXI 24X7.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 text-xs font-bold text-slate-700">
                <span className="px-3 py-1 rounded-lg bg-slate-100">Majestic Forts</span>
                <span className="px-3 py-1 rounded-lg bg-slate-100">Rajasthan Architecture</span>
                <span className="px-3 py-1 rounded-lg bg-slate-100">Desert Landscapes</span>
                <span className="px-3 py-1 rounded-lg bg-slate-100">Jaipur Expressway</span>
              </div>
              <button
                onClick={() => onOpenBooking({ title: 'Rajasthan Tour Package', type: 'tour-package' })}
                className="btn-primary w-full justify-center text-sm py-3 font-extrabold"
              >
                <Calendar size={15} />
                <span>Enquire for Rajasthan</span>
              </button>
            </div>
          </div>

          {/* AGRA / MATHURA / VRINDAVAN CARD */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_6px_25px_rgba(0,59,149,0.06)] card-hover flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80"
                alt="Agra Taj Mahal & Mathura Vrindavan Pilgrimage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-black uppercase tracking-wider text-amber-300">
                  Heritage & Devotion
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  Agra • Mathura • Vrindavan Tour Package
                </h3>
              </div>
            </div>

            <div className="p-7">
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Fast expressway journeys from Delhi or Chandigarh to the world-famous Taj Mahal in Agra, sacred Krishna Janmabhoomi in Mathura, and Banke Bihari Temple in Vrindavan.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 text-xs font-bold text-slate-700">
                <span className="px-3 py-1 rounded-lg bg-slate-100">Taj Mahal Sightseeing</span>
                <span className="px-3 py-1 rounded-lg bg-slate-100">Mathura Temples</span>
                <span className="px-3 py-1 rounded-lg bg-slate-100">Vrindavan Darshan</span>
                <span className="px-3 py-1 rounded-lg bg-slate-100">Yamuna Expressway</span>
              </div>
              <button
                onClick={() => onOpenBooking({ title: 'Agra Mathura Vrindavan Tour Package', type: 'tour-package' })}
                className="btn-primary w-full justify-center text-sm py-3 font-extrabold"
              >
                <Calendar size={15} />
                <span>Enquire Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
