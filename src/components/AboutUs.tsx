import React from 'react';
import { motion } from 'motion/react';
import { Target, Globe, Landmark, ArrowRight } from 'lucide-react';
import { STATS } from '../data/mockData';
import { AnimatedCounter } from './AnimatedCounter';

interface AboutUsProps {
  darkMode: boolean;
  onOpenBooking: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ darkMode, onOpenBooking }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-[#121418] border-b border-slate-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-wider text-[#6C7EB7] dark:text-[#8B9DC3] mb-3 font-bold border border-[#6C7EB7]/25 bg-slate-50 dark:bg-[#181B20]">
              <Landmark className="w-3.5 h-3.5 text-[#6C7EB7] dark:text-[#8B9DC3]" />
              <span>About Novera Education</span>
            </div>
            <h2 className="font-brand-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-[#091322] dark:text-zinc-100 leading-[1.1]">
              Mentoring Future Leaders with Academic Rigor
            </h2>

            <p className="text-base sm:text-lg font-sans-body leading-relaxed mb-4 text-slate-700 dark:text-zinc-300 font-medium">
              <strong className="text-[#091322] dark:text-white font-bold">Novera Education</strong> pairs ambitious secondary students with expert tutors from Oxford, Cambridge, Imperial, and Ivy League universities.
            </p>

            <p className="text-sm sm:text-base font-sans-body leading-relaxed mb-6 text-slate-600 dark:text-zinc-400">
              Whether targeting a 45 in the IB Diploma, mastering A-Level Further Maths, scoring 1550+ on the Digital SAT, or passing top UK entrance tests (TMUA, UCAT, LNAT), we cultivate true subject mastery and exam confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className={`flex items-start gap-3.5 p-4 rounded-2xl border transition-colors ${
                darkMode ? 'border-zinc-800 bg-[#181B20]' : 'border-slate-200 bg-slate-50 shadow-xs'
              }`}>
                <div className="p-2.5 rounded-xl bg-[#6C7EB7]/10 text-[#6C7EB7] dark:text-[#8B9DC3] shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#091322] dark:text-zinc-100">
                    Exam Board Precision
                  </h4>
                  <p className="text-xs font-sans-body mt-1 text-slate-600 dark:text-zinc-400">
                    Exact mark schemes & scoring rubrics
                  </p>
                </div>
              </div>

              <div className={`flex items-start gap-3.5 p-4 rounded-2xl border transition-colors ${
                darkMode ? 'border-zinc-800 bg-[#181B20]' : 'border-slate-200 bg-slate-50 shadow-xs'
              }`}>
                <div className="p-2.5 rounded-xl bg-[#6C7EB7]/10 text-[#6C7EB7] dark:text-[#8B9DC3] shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#091322] dark:text-zinc-100">
                    Global Reach
                  </h4>
                  <p className="text-xs font-sans-body mt-1 text-slate-600 dark:text-zinc-400">
                    Students supported across 18+ countries
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-8 py-4 text-sm font-bold rounded-xl bg-[#6C7EB7] hover:bg-[#5B6EA7] text-white transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Speak with an Academic Director</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right Image Frame: Students Learning Online */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Primary Online Learning Image */}
              <div className="sm:col-span-2 relative rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1000&q=80"
                  alt="Student learning online with tutor via video conference"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-104 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-100">
                      Live 1–to–1 Online Tutorial
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-lg bg-black/60 border border-white/20 text-slate-200 backdrop-blur-xs">
                    HD Interactive Video
                  </span>
                </div>
              </div>

              {/* Secondary Online Learning Photo 1 */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 shadow-sm group">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
                  alt="Student solving problem sets with digital tablet and laptop"
                  className="w-full h-40 object-cover group-hover:scale-106 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-white drop-shadow-xs">
                  Digital Whiteboard & Problem Sets
                </span>
              </div>

              {/* Secondary Online Learning Photo 2 */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 shadow-sm group">
                <img
                  src="https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?auto=format&fit=crop&w=600&q=80"
                  alt="Senior tutor giving personalized academic feedback"
                  className="w-full h-40 object-cover group-hover:scale-106 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-white drop-shadow-xs">
                  Oxbridge & Ivy Mentorship
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Big Impact Stats Grid with Animated Counter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`p-6 sm:p-8 rounded-2xl border transition-all ${
            darkMode
              ? 'bg-[#181B20] border-zinc-800 shadow-md'
              : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-x-0 sm:divide-x-0 lg:divide-x divide-slate-200 dark:divide-zinc-800">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center p-2">
                <span className="font-brand-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#6C7EB7] dark:text-[#8B9DC3] mb-1">
                  <AnimatedCounter value={stat.value} duration={2400} />
                </span>
                <span className={`text-xs font-bold uppercase tracking-wider ${
                  darkMode ? 'text-zinc-300' : 'text-slate-700'
                }`}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
