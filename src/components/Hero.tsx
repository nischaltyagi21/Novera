import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Star } from 'lucide-react';
import { CampusBackground } from './CampusBackground';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroProps {
  darkMode: boolean;
  currentCampusIdx: number;
  onSelectCampus: (index: number) => void;
  onOpenBooking: () => void;
  onExploreCurriculum: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  darkMode,
  currentCampusIdx,
  onSelectCampus,
  onOpenBooking,
  onExploreCurriculum,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden bg-slate-50 dark:bg-[#121418]"
    >
      {/* Dynamic Campus Image Background (Ken Burns Zoom & Rotation) */}
      <CampusBackground
        darkMode={darkMode}
        currentIdx={currentCampusIdx}
        onCampusChange={onSelectCampus}
      />

      {/* Directional smooth gradient fading from left to right: strong contrast on the left for typography, completely transparent from 50% onwards */}
      <div
        className={`absolute inset-0 pointer-events-none z-10 transition-colors duration-700 ${
          darkMode
            ? 'bg-gradient-to-r from-[#121418] via-[#121418]/90 via-30% to-transparent to-50%'
            : 'bg-gradient-to-r from-white via-white/90 via-30% to-transparent to-50%'
        }`}
      />
      {/* Gentle bottom blend into the next section */}
      <div
        className={`absolute inset-x-0 bottom-0 h-24 pointer-events-none z-10 ${
          darkMode
            ? 'bg-gradient-to-t from-[#121418] to-transparent'
            : 'bg-gradient-to-t from-white to-transparent'
        }`}
      />

      {/* Main Content: Clean, Focused Hero Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex-1 flex items-center my-auto">
        <div className="max-w-3xl py-6 sm:py-10">
          
          {/* Eyebrow Pill Tag with Live Pulsing Radar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-200/80 dark:border-zinc-700/80 bg-white/95 dark:bg-[#181B20]/95 shadow-sm mb-6 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6C7EB7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6C7EB7]"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#091322] dark:text-[#8B9DC3]">
              1-on-1 Academic Tutoring & Test Prep
            </span>
          </motion.div>

          {/* Clean Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-brand-display text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.05] mb-6"
          >
            <span className="block text-[#091322] dark:text-zinc-100 drop-shadow-xs">Personalised</span>
            <span className="block text-[#091322] dark:text-zinc-100 drop-shadow-xs">Learning.</span>
            <span className="block font-brand-display font-extrabold text-[#6C7EB7] dark:text-[#8B9DC3] mt-1 drop-shadow-xs">
              Global Success.
            </span>
          </motion.h1>

          {/* Subtitle with high-contrast text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl font-sans-body text-slate-700 dark:text-zinc-300 leading-relaxed mb-9 max-w-2xl font-medium drop-shadow-xs"
          >
            Bespoke 1–to–1 tutoring for IB, IGCSE, A-Level, AP, and Admissions Test Prep delivered by our subject specialists with a proven track record.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 text-sm font-bold rounded-xl bg-[#6C7EB7] hover:bg-[#5B6EA7] text-white transition-all duration-200 shadow-md flex items-center justify-center cursor-pointer hover:shadow-lg active:scale-98"
            >
              Book a Free Consultation
            </button>

            <button
              onClick={onExploreCurriculum}
              className="px-8 py-4 text-sm font-bold rounded-xl bg-white/95 hover:bg-slate-100 dark:bg-[#181B20]/95 border border-slate-200 dark:border-zinc-800 text-[#091322] dark:text-zinc-100 hover:border-[#6C7EB7] dark:hover:border-[#6C7EB7] transition-all duration-200 shadow-xs cursor-pointer active:scale-98 backdrop-blur-md"
            >
              Explore Curriculum
            </button>
          </motion.div>

          {/* 3 Animated Metric Proof Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-slate-200 dark:border-zinc-800 w-full max-w-2xl"
          >
            {/* Metric 1 */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 dark:bg-[#181B20]/90 backdrop-blur-md border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:scale-102 transition-transform">
              <div className="w-10 h-10 rounded-lg bg-[#6C7EB7]/15 flex items-center justify-center text-[#6C7EB7] dark:text-[#8B9DC3] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-base text-[#091322] dark:text-zinc-100 leading-tight font-brand-display">
                  <AnimatedCounter value="94%" duration={2200} />
                </div>
                <div className="text-xs text-slate-600 dark:text-zinc-400 font-sans-body font-semibold">
                  Top Tier Admission
                </div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 dark:bg-[#181B20]/90 backdrop-blur-md border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:scale-102 transition-transform">
              <div className="w-10 h-10 rounded-lg bg-[#6C7EB7]/15 flex items-center justify-center text-[#6C7EB7] dark:text-[#8B9DC3] shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-base text-[#091322] dark:text-zinc-100 leading-tight font-brand-display">
                  <AnimatedCounter value="500+" duration={2200} />
                </div>
                <div className="text-xs text-slate-600 dark:text-zinc-400 font-sans-body font-semibold">
                  Expert Tutors
                </div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 dark:bg-[#181B20]/90 backdrop-blur-md border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:scale-102 transition-transform">
              <div className="w-10 h-10 rounded-lg bg-[#6C7EB7]/15 flex items-center justify-center text-[#6C7EB7] dark:text-[#8B9DC3] shrink-0">
                <Star className="w-5 h-5 fill-[#6C7EB7] text-[#6C7EB7]" />
              </div>
              <div>
                <div className="font-extrabold text-base text-[#091322] dark:text-zinc-100 leading-tight font-brand-display">
                  <AnimatedCounter value="4.9 / 5.0" decimals={1} duration={2200} />
                </div>
                <div className="text-xs text-slate-600 dark:text-zinc-400 font-sans-body font-semibold">
                  Parent Rating
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
