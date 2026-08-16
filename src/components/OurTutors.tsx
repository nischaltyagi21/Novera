import React, { useState } from 'react';
import { Star, GraduationCap, ArrowRight, ShieldCheck, Award, BookCheck, Sparkles, Pause, Play } from 'lucide-react';
import { Tutor } from '../types';

interface OurTutorsProps {
  tutors: Tutor[];
  darkMode: boolean;
  onSelectTutor: (tutor: Tutor) => void;
  onOpenBooking: () => void;
}

export const OurTutors: React.FC<OurTutorsProps> = ({
  tutors,
  darkMode,
  onSelectTutor,
  onOpenBooking,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate tutors array to create a seamless infinite marquee effect
  const marqueeTutors = [...tutors, ...tutors];

  return (
    <section id="tutors" className="py-24 relative transition-colors border-b border-slate-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-[#121418]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-wider text-[#6C7EB7] dark:text-[#8B9DC3] mb-3 font-bold border border-[#6C7EB7]/25 bg-slate-50 dark:bg-[#181B20]">
              <Award className="w-3.5 h-3.5 text-[#6C7EB7] dark:text-[#8B9DC3]" />
              <span>Specialist Educators</span>
            </div>
            <h2 className="font-brand-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 text-[#091322] dark:text-zinc-100">
              Meet Our Expert Tutors
            </h2>
            <p className="text-base font-sans-body max-w-2xl text-slate-600 dark:text-zinc-300">
              Graduates from Oxford, Cambridge, Imperial, and Ivy League universities with proven track records of top exam scores.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl border transition-all cursor-pointer ${
                darkMode
                  ? 'border-zinc-800 bg-[#181B20] text-zinc-200 hover:border-[#6C7EB7]'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-xs'
              }`}
              title={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              <span>{isPaused ? 'Resume Scroll' : 'Pause Scroll'}</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-xl bg-[#6C7EB7] hover:bg-[#5B6EA7] text-white transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-98"
            >
              <span>Match with a Tutor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT-TO-LEFT SCROLLING MARQUEE OF TUTOR CARDS */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left & Right gradient fade masks */}
        <div className={`absolute top-0 bottom-0 left-0 w-16 sm:w-28 z-20 pointer-events-none ${
          darkMode ? 'bg-gradient-to-r from-[#121418] to-transparent' : 'bg-gradient-to-r from-white to-transparent'
        }`} />
        <div className={`absolute top-0 bottom-0 right-0 w-16 sm:w-28 z-20 pointer-events-none ${
          darkMode ? 'bg-gradient-to-l from-[#121418] to-transparent' : 'bg-gradient-to-l from-white to-transparent'
        }`} />

        <div
          className="animate-marquee-slow flex gap-5 px-4"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {marqueeTutors.map((tutor, idx) => (
            <div
              key={`${tutor.id}-${idx}`}
              className={`w-[310px] sm:w-[350px] shrink-0 rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between hover:shadow-xl cursor-pointer select-none group ${
                darkMode
                  ? 'bg-[#181B20] border-zinc-800 hover:border-[#6C7EB7]'
                  : 'bg-white border-slate-200 hover:border-[#6C7EB7] shadow-sm'
              }`}
              onClick={() => onSelectTutor(tutor)}
            >
              <div>
                {/* Top Badge: University & Rating */}
                <div className="flex items-center justify-between mb-4 gap-2">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                    darkMode
                      ? 'bg-[#121418] border-zinc-700 text-[#8B9DC3]'
                      : 'bg-slate-50 border-slate-200 text-[#091322]'
                  }`}>
                    <GraduationCap className="w-3.5 h-3.5 text-[#6C7EB7]" />
                    <span>{tutor.university}</span>
                  </span>

                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{tutor.rating}</span>
                    <span className={`text-[10px] ${darkMode ? 'text-zinc-400' : 'text-slate-500'}`}>({tutor.reviewsCount})</span>
                  </div>
                </div>

                {/* Tutor Name & Degree Header */}
                <div className="mb-2.5">
                  <h3 className="font-brand-display font-extrabold text-xl leading-tight text-[#091322] dark:text-zinc-100 group-hover:text-[#6C7EB7] dark:group-hover:text-[#8B9DC3] transition-colors">
                    {tutor.name}
                  </h3>
                  <p className="text-xs font-bold mt-1 text-[#6C7EB7] dark:text-[#8B9DC3]">
                    {tutor.degree}
                  </p>
                </div>

                {/* Role / Title */}
                <p className="text-xs mb-3.5 font-medium text-slate-600 dark:text-zinc-300 font-sans-body">
                  {tutor.title}
                </p>

                {/* Key Subjects Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tutor.subjects.slice(0, 3).map((subj, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-xs px-2.5 py-1 rounded-lg border font-semibold ${
                        darkMode
                          ? 'bg-[#121418] border-zinc-700/80 text-zinc-200'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      {subj}
                    </span>
                  ))}
                  {tutor.subjects.length > 3 && (
                    <span className={`text-[11px] px-2 py-0.5 rounded-md self-center font-bold ${
                      darkMode ? 'text-zinc-400' : 'text-slate-500'
                    }`}>
                      +{tutor.subjects.length - 3}
                    </span>
                  )}
                </div>

                {/* Highlights Snippet */}
                {tutor.achievements && tutor.achievements[0] && (
                  <div className={`p-3 rounded-xl text-xs leading-relaxed mb-4 border ${
                    darkMode
                      ? 'bg-[#121418]/80 border-zinc-800 text-zinc-300'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <span className="font-bold text-[#6C7EB7] dark:text-[#8B9DC3] block mb-1">Key Highlight</span>
                    {tutor.achievements[0]}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-3.5 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectTutor(tutor);
                  }}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                    darkMode
                      ? 'bg-[#121418] border-zinc-700 text-zinc-200 hover:border-[#6C7EB7]'
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  View Profile
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenBooking();
                  }}
                  className="flex-1 py-2 text-xs font-bold rounded-xl bg-[#6C7EB7] hover:bg-[#5B6EA7] text-white transition-all cursor-pointer shadow-xs"
                >
                  Book Tutor
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Assurance Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className={`p-5 rounded-2xl border flex items-start gap-3.5 transition-colors ${
            darkMode ? 'bg-[#181B20] border-zinc-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="p-2.5 rounded-xl bg-[#6C7EB7]/10 text-[#6C7EB7] dark:text-[#8B9DC3] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#091322] dark:text-zinc-100">
                Top 3% Acceptance
              </h4>
              <p className="text-xs mt-1 leading-relaxed text-slate-600 dark:text-zinc-400 font-sans-body">
                Rigorous subject testing, background checks, and pedagogy auditions.
              </p>
            </div>
          </div>

          <div className={`p-5 rounded-2xl border flex items-start gap-3.5 transition-colors ${
            darkMode ? 'bg-[#181B20] border-zinc-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="p-2.5 rounded-xl bg-[#6C7EB7]/10 text-[#6C7EB7] dark:text-[#8B9DC3] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#091322] dark:text-zinc-100">
                Subject Specialists
              </h4>
              <p className="text-xs mt-1 leading-relaxed text-slate-600 dark:text-zinc-400 font-sans-body">
                Tutors teach strictly within their verified degree disciplines.
              </p>
            </div>
          </div>

          <div className={`p-5 rounded-2xl border flex items-start gap-3.5 transition-colors ${
            darkMode ? 'bg-[#181B20] border-zinc-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="p-2.5 rounded-xl bg-[#6C7EB7]/10 text-[#6C7EB7] dark:text-[#8B9DC3] shrink-0">
              <BookCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#091322] dark:text-zinc-100">
                Exam Mastery
              </h4>
              <p className="text-xs mt-1 leading-relaxed text-slate-600 dark:text-zinc-400 font-sans-body">
                Track records of IB 7s, A*s in A-Levels, and 1550+ SAT scores.
              </p>
            </div>
          </div>

          <div className={`p-5 rounded-2xl border flex items-start gap-3.5 transition-colors ${
            darkMode ? 'bg-[#181B20] border-zinc-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="p-2.5 rounded-xl bg-[#6C7EB7]/10 text-[#6C7EB7] dark:text-[#8B9DC3] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#091322] dark:text-zinc-100">
                Fit Guarantee
              </h4>
              <p className="text-xs mt-1 leading-relaxed text-slate-600 dark:text-zinc-400 font-sans-body">
                Free tutor rematch if learning dynamics are not a perfect fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
