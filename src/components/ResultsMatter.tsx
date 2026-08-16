import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, GraduationCap, ScrollText, Layers } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { Card3D } from './Card3D';

interface ResultsMatterProps {
  darkMode: boolean;
  onOpenBooking: () => void;
}

// Hook for animating numbers from 0 to target when visible
function useCountUp(end: number, duration: number = 2000, trigger: boolean = true): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeOutProgress = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOutProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, trigger]);

  return count;
}

const StatCounter: React.FC<{
  end: number;
  suffix?: string;
  label: string;
  isVisible: boolean;
  darkMode: boolean;
}> = ({ end, suffix = '', label, isVisible, darkMode }) => {
  const count = useCountUp(end, 2200, isVisible);

  return (
    <div className="p-2 sm:p-4">
      <div className="font-brand-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#6C7EB7] dark:text-[#8B9DC3] mb-1 tabular-nums">
        {count}{suffix}
      </div>
      <div className={`text-xs uppercase tracking-wider font-bold ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
        {label}
      </div>
    </div>
  );
};

export const ResultsMatter: React.FC<ResultsMatterProps> = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Pre-calculate stacked deck indices (current, +1, +2)
  const currentItem = TESTIMONIALS[currentIndex];
  const nextItem1 = TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length];
  const nextItem2 = TESTIMONIALS[(currentIndex + 2) % TESTIMONIALS.length];

  return (
    <section id="results" ref={sectionRef} className="py-24 relative overflow-hidden transition-colors border-b border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-[#121418]">
      {/* Dynamic Background Image of Students Graduating & Achieving Academic Milestones */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2560&q=95"
          alt="Students celebrating academic outcomes and graduation"
          className="w-full h-full object-cover object-center scale-105 opacity-55 dark:opacity-35 transition-opacity duration-700"
          referrerPolicy="no-referrer"
        />

        {/* Soft Left-to-Right & Top-to-Bottom Blended Gradient for high legibility */}
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            darkMode
              ? 'bg-gradient-to-b from-[#121418]/85 via-[#181B20]/60 to-[#121418]/85'
              : 'bg-gradient-to-b from-white/85 via-slate-50/55 to-white/85'
          }`}
        />
        <div
          className={`absolute inset-0 ${
            darkMode
              ? 'bg-gradient-to-r from-[#121418]/45 via-transparent to-[#121418]/45'
              : 'bg-gradient-to-r from-white/40 via-transparent to-white/40'
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs uppercase tracking-wider text-[#6C7EB7] dark:text-[#8B9DC3] mb-3 font-bold border border-[#6C7EB7]/25 bg-white/85 dark:bg-[#181B20]/85 backdrop-blur-md shadow-xs">
            <ScrollText className="w-3.5 h-3.5 text-[#6C7EB7] dark:text-[#8B9DC3]" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="font-brand-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 text-[#091322] dark:text-zinc-100 drop-shadow-xs">
            Proven Student Outcomes
          </h2>
          <p className="text-base sm:text-lg font-sans-body leading-relaxed text-slate-700 dark:text-zinc-200 font-medium drop-shadow-xs">
            Measurable score growth, top grade achievements, and successful university admissions worldwide.
          </p>
        </div>

        {/* Impact Numbers Bar: Lightweight Frosted Glass Container */}
        <Card3D depth={6} glare={true} glowColor="rgba(108, 126, 183, 0.25)">
          <div className={`p-6 sm:p-8 rounded-2xl border mb-14 transition-all shadow-lg backdrop-blur-md ${
            darkMode ? 'bg-[#181B20]/80 border-zinc-700/70' : 'bg-white/85 border-slate-200/90 shadow-sm'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-slate-200 dark:divide-zinc-800">
              <StatCounter
                end={98}
                suffix="%"
                label="Grade Improvement"
                isVisible={isVisible}
                darkMode={darkMode}
              />
              <StatCounter
                end={85}
                suffix="%"
                label="IB 7 / A* Achieved"
                isVisible={isVisible}
                darkMode={darkMode}
              />
              <StatCounter
                end={500}
                suffix="+"
                label="Students Mentored"
                isVisible={isVisible}
                darkMode={darkMode}
              />
              <StatCounter
                end={24}
                suffix="+"
                label="Top University Offers"
                isVisible={isVisible}
                darkMode={darkMode}
              />
            </div>
          </div>
        </Card3D>

        {/* Section Sub-heading & Status */}
        <div className="flex items-center justify-between mb-6 max-w-4xl mx-auto px-2">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#6C7EB7] dark:text-[#8B9DC3]" />
            <span className="text-xs uppercase tracking-wider font-bold text-[#6C7EB7] dark:text-[#8B9DC3]">
              Student Stories ({currentIndex + 1} of {TESTIMONIALS.length})
            </span>
          </div>

          {/* Quick Category / Role indicator */}
          <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400 font-sans-body">
            {currentItem.curriculum}
          </span>
        </div>

        {/* Testimonial Card Container with Left & Right Switch Arrows Flanking It */}
        <div className="relative max-w-4xl mx-auto">
          {/* Left Switch Arrow Button */}
          <button
            onClick={handlePrev}
            className={`absolute -left-3 sm:-left-6 md:-left-12 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full border shadow-lg flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-108 active:scale-95 backdrop-blur-md ${
              darkMode
                ? 'bg-[#181B20]/90 border-zinc-700 text-zinc-100 hover:border-[#6C7EB7] hover:bg-[#6C7EB7] hover:text-white'
                : 'bg-white/95 border-slate-200 text-slate-800 hover:border-[#6C7EB7] hover:bg-[#6C7EB7] hover:text-white shadow-md'
            }`}
            aria-label="Previous student testimonial"
            title="Previous student story"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Switch Arrow Button */}
          <button
            onClick={handleNext}
            className={`absolute -right-3 sm:-right-6 md:-right-12 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full border shadow-lg flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-108 active:scale-95 backdrop-blur-md ${
              darkMode
                ? 'bg-[#181B20]/90 border-zinc-700 text-zinc-100 hover:border-[#6C7EB7] hover:bg-[#6C7EB7] hover:text-white'
                : 'bg-white/95 border-slate-200 text-slate-800 hover:border-[#6C7EB7] hover:bg-[#6C7EB7] hover:text-white shadow-md'
            }`}
            aria-label="Next student testimonial"
            title="Next student story"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 3D Dynamic Testimonial Stack Container */}
          <div className="relative w-full h-[430px] sm:h-[360px] md:h-[320px]">
            {/* Third Card in Stack */}
            {nextItem2 && (
              <div
                className={`absolute inset-0 rounded-2xl border transition-all pointer-events-none ${
                  darkMode
                    ? 'bg-[#181B20]/60 border-zinc-800/80 shadow-md'
                    : 'bg-slate-50 border-slate-200 shadow-xs'
                }`}
                style={{
                  transform: 'translateY(24px) scale(0.92)',
                  opacity: 0.4,
                  zIndex: 1,
                }}
              />
            )}

            {/* Second Card in Stack */}
            {nextItem1 && (
              <div
                onClick={handleNext}
                className={`absolute inset-0 rounded-2xl border transition-all cursor-pointer hover:border-[#6C7EB7]/60 ${
                  darkMode
                    ? 'bg-[#181B20]/85 border-zinc-800 shadow-lg'
                    : 'bg-white/85 border-slate-200 shadow-sm'
                }`}
                style={{
                  transform: 'translateY(12px) scale(0.96)',
                  opacity: 0.75,
                  zIndex: 2,
                }}
              />
            )}

            {/* Top Active Card in Stack */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 70 : -70,
                  scale: 0.96,
                  rotate: direction > 0 ? 1.5 : -1.5,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  rotate: 0,
                  transition: {
                    duration: 0.4,
                    ease: [0.23, 1, 0.32, 1],
                  },
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -100 : 100,
                  scale: 0.95,
                  rotate: direction > 0 ? -3 : 3,
                  transition: {
                    duration: 0.3,
                    ease: [0.23, 1, 0.32, 1],
                  },
                }}
                className="absolute inset-0 z-10"
              >
                <Card3D depth={8} glare={true} glowColor="rgba(108, 126, 183, 0.25)" className="h-full">
                  <div
                    className={`h-full p-6 sm:p-8 rounded-2xl border relative flex flex-col justify-between transition-all shadow-xl backdrop-blur-md ${
                      darkMode
                        ? 'bg-[#181B20] border-zinc-800 text-zinc-100'
                        : 'bg-white border-slate-200 text-slate-900'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <Quote className="w-8 h-8 text-[#6C7EB7] dark:text-[#8B9DC3] opacity-80" />
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(5)].map((_, s) => (
                            <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>

                      <p className="font-brand-display text-sm sm:text-base lg:text-lg font-semibold leading-relaxed mb-4">
                        "{currentItem.quote}"
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-zinc-800">
                      <div className="flex items-center gap-3.5">
                        {currentItem.avatar ? (
                          <img
                            src={currentItem.avatar}
                            alt={currentItem.studentName}
                            className="w-11 h-11 rounded-full object-cover border-2 border-[#6C7EB7]"
                          />
                        ) : (
                          <div className="w-11 h-11 rounded-full bg-[#121418] border-2 border-[#6C7EB7] flex items-center justify-center text-[#6C7EB7] font-bold text-sm">
                            {currentItem.studentName[0]}
                          </div>
                        )}
                        <div>
                          <h4 className="font-brand-display font-bold text-base leading-tight">
                            {currentItem.studentName}
                          </h4>
                          {currentItem.parentName && (
                            <p className="text-xs font-sans-body text-slate-500 dark:text-zinc-400">{currentItem.parentName}</p>
                          )}
                          <p className="text-xs font-bold text-[#6C7EB7] dark:text-[#8B9DC3]">
                            {currentItem.role} • {currentItem.scoreBeforeAfter}
                          </p>
                        </div>
                      </div>

                      {/* University Outcome Badge */}
                      <div className="px-3.5 py-1.5 rounded-xl border border-[#6C7EB7]/30 bg-[#6C7EB7]/10 dark:bg-[#121418] text-[#2E427B] dark:text-[#8B9DC3] text-xs font-bold flex items-center gap-2 self-start sm:self-auto shrink-0">
                        <GraduationCap className="w-4 h-4 text-[#6C7EB7] shrink-0" />
                        <span>Admitted: {currentItem.universityAdmitted}</span>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators centered below the card */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  i === currentIndex
                    ? 'w-7 bg-[#6C7EB7]'
                    : 'w-2.5 bg-slate-300 dark:bg-zinc-700 hover:bg-slate-400 dark:hover:bg-zinc-600'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
