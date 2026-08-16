import React from 'react';
import { X, CheckCircle2, ArrowRight, BookOpen, GraduationCap, Landmark, Shield } from 'lucide-react';
import { Program } from '../types';

interface ProgramDetailProps {
  program: Program | null;
  onClose: () => void;
  onOpenBooking: () => void;
  darkMode: boolean;
}

export const ProgramDetailModal: React.FC<ProgramDetailProps> = ({
  program,
  onClose,
  onOpenBooking,
  darkMode,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className={`relative w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden transition-all ${
        darkMode ? 'bg-[#0b1d3a] border-[#1e3a6a] text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-lg border transition-colors z-10 cursor-pointer ${
            darkMode ? 'bg-[#071326] border-[#1e3a6a] text-slate-300 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-44 sm:h-52 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-[#1e3a6a]">
          {program.image && (
            <img src={program.image} alt={program.title} className="w-full h-full object-cover opacity-80" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="px-2.5 py-0.5 rounded border border-[#ca933b]/40 bg-[#071326] text-[#ca933b] text-[10px] font-bold uppercase tracking-wider">
              {program.curriculum}
            </span>
            <h2 className="font-serif text-2xl font-bold mt-1.5">{program.title}</h2>
            <p className="text-xs font-serif-classic text-slate-300">{program.subtitle}</p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-5 text-xs sm:text-sm">
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-[#ca933b] text-xs mb-1.5">
              Program Overview
            </h3>
            <p className={`font-serif-classic leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {program.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-wider text-[#ca933b] text-xs mb-2">
              Key Features & Methodology
            </h3>
            <div className="space-y-2">
              {program.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 font-serif-classic">
                  <CheckCircle2 className="w-4 h-4 text-[#ca933b] shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-slate-200' : 'text-slate-700'}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-wider text-[#ca933b] text-xs mb-2">
              Subjects Offered in {program.shortCode}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {program.subjectsOffered.map((subject, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#071326] text-[#ca933b] border border-[#1e3a6a]"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-5 border-t border-slate-200 dark:border-[#1e3a6a] flex items-center justify-between">
            <span className="text-xs font-serif-classic text-slate-500 dark:text-slate-400">Target: {program.grades}</span>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-[#ca933b] hover:bg-[#b78229] text-[#0b192c] transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Inquire for {program.shortCode}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

