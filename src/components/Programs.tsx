import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Program } from '../types';
import { Card3D } from './Card3D';

interface ProgramsProps {
  programs: Program[];
  darkMode: boolean;
  onSelectProgram: (program: Program) => void;
  onOpenBooking: () => void;
}

export const Programs: React.FC<ProgramsProps> = ({
  programs,
  darkMode,
  onSelectProgram,
}) => {
  return (
    <section id="curriculum" className="py-24 relative overflow-hidden transition-colors border-b border-slate-200 dark:border-zinc-800">
      {/* High-Resolution Background of Exam Papers & Student Academic Success */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=2560&q=95"
          alt="Student exam papers, study notes and high-grade test preparation"
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-5 border-b border-slate-200 dark:border-zinc-800">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#6C7EB7] dark:text-[#8B9DC3] font-bold mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#6C7EB7] dark:text-[#8B9DC3]" />
              <span>Academic Curriculum</span>
            </div>
            <h2 className={`font-brand-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-zinc-100' : 'text-[#091322]'
            }`}>
              Curriculum & Qualifications
            </h2>
          </div>

          <button
            onClick={() => onSelectProgram(programs[0])}
            className={`inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold transition-all group cursor-pointer ${
              darkMode ? 'text-[#8B9DC3] hover:text-white' : 'text-slate-700 hover:text-[#6C7EB7]'
            }`}
          >
            <span>View All Syllabi</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {programs.map((program) => (
            <Card3D
              key={program.id}
              depth={8}
              glare={true}
              glowColor="rgba(108, 126, 183, 0.2)"
              className="h-full"
            >
              <div
                onClick={() => onSelectProgram(program)}
                className={`group h-full rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between hover:shadow-xl cursor-pointer ${
                  darkMode
                    ? 'bg-[#181B20] border-zinc-800 hover:border-[#6C7EB7]'
                    : 'bg-white/95 border-slate-200 hover:border-[#6C7EB7]'
                }`}
              >
                {/* Card Thumbnail */}
                <div className="relative h-40 overflow-hidden bg-slate-900">
                  {program.image && (
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#121418]/90 border border-[#6C7EB7]/50 text-[#8B9DC3] font-bold text-[11px]">
                      {program.grades}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`font-brand-display text-lg font-bold mb-1 transition-colors ${
                      darkMode ? 'text-zinc-100 group-hover:text-[#8B9DC3]' : 'text-[#091322] group-hover:text-[#6C7EB7]'
                    }`}>
                      {program.title}
                    </h3>
                    <p className={`text-xs italic mb-2.5 font-sans-body ${
                      darkMode ? 'text-zinc-400' : 'text-slate-500'
                    }`}>
                      {program.subtitle}
                    </p>
                    <p className={`text-xs font-sans-body leading-relaxed line-clamp-3 mb-4 ${
                      darkMode ? 'text-zinc-300' : 'text-slate-600'
                    }`}>
                      {program.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs font-bold text-[#6C7EB7] dark:text-[#8B9DC3]">
                    <span>Explore Syllabus</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};
