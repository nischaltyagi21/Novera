import React from 'react';
import { GraduationCap, ArrowRight, Award, Compass, FileText, MessagesSquare, Landmark, CheckCircle2 } from 'lucide-react';
import { Card3D } from './Card3D';

interface UniversityPrepProps {
  darkMode: boolean;
  onOpenBooking: () => void;
}

export const UniversityPrep: React.FC<UniversityPrepProps> = ({ darkMode, onOpenBooking }) => {
  const pillars = [
    {
      title: 'Top Exam Grades',
      desc: 'Achieve conditional offer grades (A*A*A / 40-45 IB) with syllabus and mark-scheme mastery.',
      icon: <Award className="w-5 h-5 text-[#6C7EB7] dark:text-[#8B9DC3]" />
    },
    {
      title: 'Personal Statements & Essays',
      desc: 'Craft compelling essays showcasing subject passion, independent research, and critical analysis.',
      icon: <FileText className="w-5 h-5 text-[#6C7EB7] dark:text-[#8B9DC3]" />
    },
    {
      title: 'Entrance Tests & Mock Interviews',
      desc: 'Dedicated coaching for TMUA, TSA, UCAT, LNAT and realistic mock interviews with Oxbridge alumni.',
      icon: <MessagesSquare className="w-5 h-5 text-[#6C7EB7] dark:text-[#8B9DC3]" />
    },
    {
      title: 'Strategic College Selection',
      desc: 'Expert guidance on UCAS college choices, Ivy League ED/EA strategies, and competitive positioning.',
      icon: <Compass className="w-5 h-5 text-[#6C7EB7] dark:text-[#8B9DC3]" />
    }
  ];

  return (
    <section id="admissions" className="py-24 relative overflow-hidden transition-colors border-b border-slate-200 dark:border-zinc-800">
      {/* High-Resolution University Admissions Campus & Architecture Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2560&q=95"
          alt="Prestigious University Campus and Historic Admissions Hall"
          className="w-full h-full object-cover object-center opacity-45 dark:opacity-30 filter saturate-90 transition-opacity duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Soft Linear & Radial Gradients for Pristine Text Legibility */}
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            darkMode
              ? 'bg-gradient-to-b from-[#121418]/85 via-[#181B20]/60 to-[#121418]/85'
              : 'bg-gradient-to-b from-white/80 via-slate-50/50 to-white/80'
          }`}
        />
        <div
          className={`absolute inset-0 ${
            darkMode
              ? 'bg-gradient-to-r from-[#121418]/40 via-transparent to-[#121418]/40'
              : 'bg-gradient-to-r from-white/40 via-transparent to-white/40'
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Visual Frame */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <Card3D depth={8} glare={true} glowColor="rgba(108, 126, 183, 0.25)">
              <div className={`p-3 rounded-2xl border transition-all shadow-xl backdrop-blur-md ${
                darkMode ? 'border-zinc-800 bg-[#181B20]/90' : 'border-slate-200 bg-white/90 shadow-lg'
              }`}>
                <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-zinc-800">
                  <img
                    src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80"
                    alt="Historic University Library and Admissions"
                    className="w-full h-[360px] sm:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#121418]/90 backdrop-blur-md text-white border border-zinc-700/80">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8B9DC3]">
                      <GraduationCap className="w-4 h-4 text-[#6C7EB7]" />
                      <span>Proven Global Placements</span>
                    </div>
                    <div className="text-xs sm:text-sm font-brand-display font-semibold mt-1 text-slate-100">
                      Oxford • Cambridge • Imperial • LSE • UCL • Harvard • Stanford • MIT
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>

          {/* Right Text & Pillars */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs uppercase tracking-wider text-[#6C7EB7] dark:text-[#8B9DC3] mb-3 font-bold border border-[#6C7EB7]/25 bg-white/80 dark:bg-[#181B20]/80 backdrop-blur-sm">
              <Landmark className="w-3.5 h-3.5 text-[#6C7EB7] dark:text-[#8B9DC3]" />
              <span>University Admissions Consulting</span>
            </div>
            
            <h2 className={`font-brand-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
              darkMode ? 'text-zinc-100' : 'text-[#091322]'
            }`}>
              Pathway to World-Leading Universities
            </h2>

            <p className={`text-base font-sans-body leading-relaxed mb-6 ${darkMode ? 'text-zinc-300' : 'text-slate-600'}`}>
              End-to-end mentorship combining academic tutoring with strategic admissions consulting for Oxford, Cambridge, Russell Group, and Ivy League institutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {pillars.map((pillar, idx) => (
                <div key={idx} className={`flex items-start gap-3 p-4 rounded-xl border transition-all ${
                  darkMode ? 'border-zinc-800 bg-[#181B20]/85 shadow-sm' : 'border-slate-200 bg-white/85 shadow-xs'
                }`}>
                  <div className={`p-2.5 rounded-xl border shrink-0 ${
                    darkMode ? 'bg-[#121418] border-zinc-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className={`text-xs font-bold uppercase tracking-wider mb-1 font-brand-display ${darkMode ? 'text-zinc-100' : 'text-[#091322]'}`}>
                      {pillar.title}
                    </h3>
                    <p className={`text-xs font-sans-body leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenBooking}
              className="px-7 py-3.5 text-xs sm:text-sm font-bold rounded-xl bg-[#6C7EB7] hover:bg-[#5B6EA7] text-white transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Book Admissions Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
