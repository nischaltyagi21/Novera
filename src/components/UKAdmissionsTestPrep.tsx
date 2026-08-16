import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, BookOpen, GraduationCap, Landmark } from 'lucide-react';
import { UKAdmissionsTest } from '../types';
import { Card3D } from './Card3D';

interface UKAdmissionsTestPrepProps {
  tests: UKAdmissionsTest[];
  darkMode: boolean;
  onOpenBooking: (testName?: string) => void;
}

export const UKAdmissionsTestPrep: React.FC<UKAdmissionsTestPrepProps> = ({
  tests,
  darkMode,
  onOpenBooking,
}) => {
  const [activeTestId, setActiveTestId] = useState<string>(tests[0]?.id || 'tmua');
  const selectedTest = tests.find((t) => t.id === activeTestId) || tests[0];

  return (
    <section id="uk-admissions" className="py-24 relative overflow-hidden transition-colors border-b border-slate-200 dark:border-zinc-800">
      {/* High-Resolution Iconic University Campus & Oxford Collegiate Architecture Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=2560&q=95"
          alt="Oxford and Cambridge University Collegiate Campus and Historic Colleges"
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
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-wider text-[#6C7EB7] dark:text-[#8B9DC3] mb-2 font-bold flex items-center gap-2">
            <Landmark className="w-4 h-4 text-[#6C7EB7] dark:text-[#8B9DC3]" />
            <span>UK University Admissions</span>
          </div>
          <h2 className={`font-brand-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 ${
            darkMode ? 'text-zinc-100' : 'text-[#091322]'
          }`}>
            Oxford, Cambridge & Medical Entrance
          </h2>
          <p className={`text-base font-sans-body leading-relaxed ${
            darkMode ? 'text-zinc-300' : 'text-slate-600'
          }`}>
            Specialist 1-to-1 coaching for TMUA, TSA, UCAT, and LNAT entrance tests taught by top-decile Oxbridge and Imperial graduates.
          </p>
        </div>

        {/* UK Test Grid / Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {tests.map((test) => {
            const isActive = test.id === activeTestId;
            return (
              <Card3D key={test.id} depth={6} glare={true} glowColor="rgba(108, 126, 183, 0.25)">
                <div
                  onClick={() => setActiveTestId(test.id)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between h-full backdrop-blur-xs ${
                    isActive
                      ? darkMode
                        ? 'bg-[#181B20] border-[#6C7EB7] shadow-md ring-1 ring-[#6C7EB7]/40'
                        : 'bg-white border-[#6C7EB7] shadow-md ring-1 ring-[#6C7EB7]/30'
                      : darkMode
                      ? 'bg-[#181B20]/70 border-zinc-800 hover:border-[#6C7EB7]/50'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-brand-display font-extrabold text-[#6C7EB7] dark:text-[#8B9DC3]">{test.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        isActive
                          ? 'bg-[#6C7EB7] text-white'
                          : darkMode ? 'bg-[#121418] text-zinc-300' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {test.id.toUpperCase()}
                      </span>
                    </div>
                    <h4 className={`text-xs font-bold mb-2 leading-snug ${
                      darkMode ? 'text-zinc-100' : 'text-[#091322]'
                    }`}>
                      {test.fullName}
                    </h4>
                    <p className={`text-[11px] font-medium ${darkMode ? 'text-zinc-400' : 'text-slate-500'}`}>
                      Target: {test.targetDegree}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs font-bold text-[#6C7EB7] dark:text-[#8B9DC3]">
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>

        {/* Selected UK Test Detail Box */}
        {selectedTest && (
          <Card3D depth={6} glare={true} glowColor="rgba(108, 126, 183, 0.25)">
            <div className={`rounded-2xl border p-6 sm:p-8 transition-all shadow-lg backdrop-blur-md ${
              darkMode
                ? 'bg-[#181B20]/95 border-zinc-800'
                : 'bg-white/95 border-slate-200'
            }`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Test breakdown */}
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-3 mb-2.5">
                    <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[#6C7EB7]/15 text-[#2E427B] dark:text-[#8B9DC3] border border-[#6C7EB7]/30">
                      Admissions Exam
                    </span>
                    <span className={`text-xs font-medium ${darkMode ? 'text-zinc-400' : 'text-slate-500'}`}>
                      Format: {selectedTest.format}
                    </span>
                  </div>

                  <h3 className={`font-brand-display text-2xl sm:text-3xl font-extrabold mb-2 ${
                    darkMode ? 'text-zinc-100' : 'text-[#091322]'
                  }`}>
                    {selectedTest.name} – {selectedTest.fullName}
                  </h3>

                  <p className="text-xs sm:text-sm font-bold mb-4 text-[#6C7EB7] dark:text-[#8B9DC3]">
                    Degrees: {selectedTest.targetDegree}
                  </p>

                  <p className={`text-sm sm:text-base font-sans-body leading-relaxed mb-6 ${
                    darkMode ? 'text-zinc-300' : 'text-slate-600'
                  }`}>
                    {selectedTest.description}
                  </p>

                  {/* Skills Assessed */}
                  <div className="mb-6">
                    <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                      darkMode ? 'text-zinc-200' : 'text-slate-800'
                    }`}>
                      <BookOpen className="w-4 h-4 text-[#6C7EB7] dark:text-[#8B9DC3]" />
                      <span>Skills & Papers Assessed</span>
                    </h4>
                    <div className="space-y-2">
                      {selectedTest.skillsAssessed.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${
                            darkMode
                              ? 'bg-[#121418] border-zinc-800 text-zinc-200'
                              : 'bg-slate-50 border-slate-200 text-slate-800'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#6C7EB7] dark:text-[#8B9DC3] shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Prep Highlights */}
                  <div>
                    <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                      darkMode ? 'text-zinc-200' : 'text-slate-800'
                    }`}>
                      <Sparkles className="w-4 h-4 text-[#6C7EB7] dark:text-[#8B9DC3]" />
                      <span>Novera Education Coaching</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {selectedTest.prepHighlights.map((hl, hIdx) => (
                        <div
                          key={hIdx}
                          className={`p-3 rounded-xl border text-xs leading-relaxed ${
                            darkMode
                              ? 'bg-[#121418] border-zinc-800 text-zinc-300'
                              : 'bg-slate-50 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span className="font-bold text-[#6C7EB7] dark:text-[#8B9DC3] block mb-1">0{hIdx + 1}. Pillar</span>
                          {hl}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Universities and Booking */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                  {/* Format Summary Card */}
                  <div className={`p-5 rounded-2xl border ${
                    darkMode
                      ? 'bg-[#121418] border-zinc-800 text-zinc-200'
                      : 'bg-slate-50 border-slate-200 text-slate-800'
                  }`}>
                    <h5 className="text-xs uppercase tracking-wider font-bold mb-1 text-[#6C7EB7] dark:text-[#8B9DC3]">
                      Exam Structure
                    </h5>
                    <p className="text-xs sm:text-sm font-sans-body leading-relaxed">
                      {selectedTest.format}
                    </p>
                  </div>

                  {/* Key Universities Requiring This Test */}
                  <div className={`p-5 rounded-2xl border ${
                    darkMode
                      ? 'bg-[#121418] border-zinc-800 text-zinc-200'
                      : 'bg-slate-50 border-slate-200 text-slate-800'
                  }`}>
                    <h5 className="text-xs uppercase tracking-wider font-bold mb-3 flex items-center gap-2 text-[#6C7EB7] dark:text-[#8B9DC3]">
                      <GraduationCap className="w-4 h-4" />
                      <span>Target Institutions</span>
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedTest.universities.map((uni, uIdx) => (
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

                  {/* Booking CTA */}
                  <button
                    onClick={() => onOpenBooking(selectedTest.name)}
                    className="w-full py-3.5 text-xs sm:text-sm font-bold rounded-xl bg-[#6C7EB7] hover:bg-[#5B6EA7] text-white transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Book {selectedTest.name} Tutor</span>
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
