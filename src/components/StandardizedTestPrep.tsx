import React, { useState } from 'react';
import { Award, ArrowRight, CheckCircle2, TrendingUp, Sparkles, BookOpen, Target, GraduationCap } from 'lucide-react';
import { StandardizedTest } from '../types';
import { Card3D } from './Card3D';
import { AnimatedCounter } from './AnimatedCounter';

interface StandardizedTestPrepProps {
  tests: StandardizedTest[];
  darkMode: boolean;
  onOpenBooking: (testName?: string) => void;
}

export const StandardizedTestPrep: React.FC<StandardizedTestPrepProps> = ({
  tests,
  darkMode,
  onOpenBooking,
}) => {
  const [activeTestId, setActiveTestId] = useState<string>(tests[0]?.id || 'sat');
  const selectedTest = tests.find((t) => t.id === activeTestId) || tests[0];

  return (
    <section id="test-prep" className="py-24 relative overflow-hidden transition-colors border-b border-slate-200 dark:border-zinc-800">
      {/* High-Resolution Test Preparation Study & Exam Workspace Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=2560&q=95"
          alt="Standardized test preparation study materials and exam workspace"
          className="w-full h-full object-cover object-center opacity-50 dark:opacity-30 filter saturate-85 transition-opacity duration-700"
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
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-wider text-[#6C7EB7] dark:text-[#8B9DC3] mb-2 font-bold flex items-center gap-2">
            <Target className="w-4 h-4 text-[#6C7EB7] dark:text-[#8B9DC3]" />
            <span>Standardized Tests</span>
          </div>
          <h2 className={`font-brand-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 ${
            darkMode ? 'text-zinc-100' : 'text-[#091322]'
          }`}>
            Digital SAT, ACT, GMAT & GRE
          </h2>
          <p className={`text-base font-sans-body leading-relaxed ${
            darkMode ? 'text-zinc-300' : 'text-slate-600'
          }`}>
            1-to-1 coaching designed to maximize percentile scores. Master question pattern recognition, pacing, and exam psychology with senior tutors.
          </p>
        </div>

        {/* Test Selector Tabs */}
        <div className="flex flex-wrap gap-3.5 mb-10 pb-4 border-b border-slate-200 dark:border-zinc-800">
          {tests.map((test) => {
            const isActive = test.id === activeTestId;
            return (
              <button
                key={test.id}
                onClick={() => setActiveTestId(test.id)}
                className={`px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold transition-all duration-200 flex items-center gap-3 cursor-pointer border shadow-xs ${
                  isActive
                    ? 'bg-[#6C7EB7] text-white border-[#6C7EB7] shadow-md scale-102'
                    : darkMode
                    ? 'bg-[#181B20] text-zinc-200 border-zinc-800 hover:border-[#6C7EB7]/60 hover:text-white'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-[#6C7EB7] hover:text-[#6C7EB7]'
                }`}
              >
                <span>{test.name}</span>
                <span className={`text-xs px-2.5 py-1 rounded-md font-bold ${
                  isActive
                    ? 'bg-black/20 text-white'
                    : darkMode
                    ? 'bg-[#121418] text-[#8B9DC3] border border-zinc-800'
                    : 'bg-slate-100 text-[#2E427B] border border-slate-200'
                }`}>
                  <AnimatedCounter value={test.averageScoreGain} />
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Test Detail Spotlight */}
        {selectedTest && (
          <Card3D depth={6} glare={true} glowColor="rgba(108, 126, 183, 0.25)">
            <div className={`rounded-2xl border p-6 sm:p-8 transition-all shadow-lg backdrop-blur-md ${
              darkMode
                ? 'bg-[#181B20]/95 border-zinc-800'
                : 'bg-white/95 border-slate-200'
            }`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Details (8 cols) */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2.5">
                      <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[#6C7EB7]/15 text-[#2E427B] dark:text-[#8B9DC3] border border-[#6C7EB7]/30">
                        {selectedTest.badge}
                      </span>
                      <span className={`text-xs font-medium ${darkMode ? 'text-zinc-400' : 'text-slate-500'}`}>
                        Scale: {selectedTest.scoreScale}
                      </span>
                    </div>

                    <h3 className={`font-brand-display text-2xl sm:text-3xl font-extrabold mb-2 ${
                      darkMode ? 'text-zinc-100' : 'text-[#091322]'
                    }`}>
                      {selectedTest.name} – {selectedTest.fullName}
                    </h3>

                    <p className="text-xs sm:text-sm font-bold mb-4 text-[#6C7EB7] dark:text-[#8B9DC3]">
                      Audience: {selectedTest.targetAudience}
                    </p>

                    <p className={`text-sm sm:text-base font-sans-body leading-relaxed mb-6 ${
                      darkMode ? 'text-zinc-300' : 'text-slate-600'
                    }`}>
                      {selectedTest.description}
                    </p>

                    {/* Key Modules */}
                    <div className="mb-6">
                      <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                        darkMode ? 'text-zinc-200' : 'text-slate-800'
                      }`}>
                        <BookOpen className="w-4 h-4 text-[#6C7EB7] dark:text-[#8B9DC3]" />
                        <span>Curriculum & Core Modules</span>
                      </h4>
                      <div className="space-y-2">
                        {selectedTest.keyModules.map((module, mIdx) => (
                          <div
                            key={mIdx}
                            className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${
                              darkMode
                                ? 'bg-[#121418] border-zinc-800 text-zinc-200'
                                : 'bg-slate-50 border-slate-200 text-slate-800'
                            }`}
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#6C7EB7] dark:text-[#8B9DC3] shrink-0 mt-0.5" />
                            <span>{module}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Proven Strategies */}
                    <div>
                      <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                        darkMode ? 'text-zinc-200' : 'text-slate-800'
                      }`}>
                        <TrendingUp className="w-4 h-4 text-[#6C7EB7] dark:text-[#8B9DC3]" />
                        <span>Prep Strategy</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {selectedTest.strategies.map((strat, sIdx) => (
                          <div
                            key={sIdx}
                            className={`p-3 rounded-xl border text-xs leading-relaxed ${
                              darkMode
                                ? 'bg-[#121418] border-zinc-800 text-zinc-300'
                                : 'bg-slate-50 border-slate-200 text-slate-700'
                            }`}
                          >
                            <span className="font-bold text-[#6C7EB7] dark:text-[#8B9DC3] block mb-1">0{sIdx + 1}. Focus</span>
                            {strat}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Sidebar Card (4 cols) */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                  {/* Metric Card with Animated Numbers */}
                  <div className={`p-5 rounded-2xl border ${
                    darkMode
                      ? 'bg-[#121418] border-zinc-800 text-zinc-200'
                      : 'bg-slate-50 border-slate-200 text-slate-800'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase tracking-wider font-bold text-[#6C7EB7] dark:text-[#8B9DC3]">Average Score Gain</span>
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div className="text-3xl font-extrabold font-brand-display text-[#6C7EB7] dark:text-[#8B9DC3] mb-1">
                      <AnimatedCounter value={selectedTest.averageScoreGain} />
                    </div>
                    <p className="text-xs leading-relaxed text-slate-500 dark:text-zinc-400">
                      Typical improvement across 12-week customized 1-to-1 plans.
                    </p>
                  </div>

                  {/* Target Universities Card */}
                  <div className={`p-5 rounded-2xl border ${
                    darkMode
                      ? 'bg-[#121418] border-zinc-800 text-zinc-200'
                      : 'bg-slate-50 border-slate-200 text-slate-800'
                  }`}>
                    <h5 className="text-xs uppercase tracking-wider font-bold mb-3 flex items-center gap-2 text-[#6C7EB7] dark:text-[#8B9DC3]">
                      <GraduationCap className="w-4 h-4" />
                      <span>Target Destinations</span>
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedTest.targetUniversities.map((uni, uIdx) => (
                        <span
                          key={uIdx}
                          className={`text-xs px-2.5 py-1 rounded-md border font-medium ${
                            darkMode
                              ? 'bg-[#181B20] border-zinc-800 text-zinc-200'
                              : 'bg-white border-slate-200 text-slate-800'
                          }`}
                        >
                          {uni}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <button
                    onClick={() => onOpenBooking(selectedTest.name)}
                    className="w-full py-3.5 text-xs sm:text-sm font-bold rounded-xl bg-[#6C7EB7] hover:bg-[#5B6EA7] text-white transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Book {selectedTest.name} Session</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </Card3D>
        )}
      </div>
    </section>
  );
};
