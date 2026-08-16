import React from 'react';
import { X, Star, GraduationCap, Award } from 'lucide-react';
import { Tutor } from '../types';

interface TutorDetailProps {
  tutor: Tutor | null;
  onClose: () => void;
  onOpenBookingWithTutor: (tutorName: string) => void;
  darkMode: boolean;
}

export const TutorDetailModal: React.FC<TutorDetailProps> = ({
  tutor,
  onClose,
  onOpenBookingWithTutor,
  darkMode,
}) => {
  if (!tutor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className={`relative w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden transition-all ${
        darkMode ? 'bg-[#181B20] border-zinc-800 text-zinc-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-xl border transition-colors z-10 cursor-pointer ${
            darkMode ? 'bg-[#121418] border-zinc-700 text-zinc-300 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6 pb-6 border-b border-slate-200 dark:border-zinc-800">
            <div className="p-1 rounded-2xl border border-[#6C7EB7]/40 bg-slate-50 dark:bg-[#121418] shadow-sm shrink-0">
              {tutor.image ? (
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover"
                />
              ) : (
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-[#121418] flex items-center justify-center text-[#6C7EB7] font-brand-display text-2xl font-bold">
                  {tutor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
              )}
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#6C7EB7]/30 bg-[#6C7EB7]/10 text-[#2E427B] dark:text-[#8B9DC3] text-xs font-bold uppercase tracking-wider mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                {tutor.university}
              </div>

              <h2 className="font-brand-display text-2xl font-extrabold">{tutor.name}</h2>
              <p className="text-xs sm:text-sm text-[#6C7EB7] dark:text-[#8B9DC3] font-bold mt-0.5">{tutor.title}</p>
              
              <div className="flex items-center gap-3 text-xs font-sans-body text-slate-500 dark:text-zinc-400 mt-2 font-medium">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{tutor.rating}</span>
                </div>
                <span>•</span>
                <span>{tutor.experienceYears} Years Exp</span>
                <span>•</span>
                <span>{tutor.studentsTaught}+ Students</span>
              </div>
            </div>
          </div>

          <div className="space-y-5 text-xs sm:text-sm">
            <div>
              <h3 className="font-bold uppercase tracking-wider text-[#6C7EB7] dark:text-[#8B9DC3] text-xs mb-1.5">
                About the Tutor
              </h3>
              <p className={`font-sans-body leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-slate-600'}`}>
                {tutor.bio}
              </p>
            </div>

            <div>
              <h3 className="font-bold uppercase tracking-wider text-[#6C7EB7] dark:text-[#8B9DC3] text-xs mb-2">
                Key Highlights
              </h3>
              <div className="space-y-2">
                {tutor.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-center gap-2 font-sans-body">
                    <Award className="w-4 h-4 text-[#6C7EB7] shrink-0" />
                    <span className={darkMode ? 'text-zinc-300' : 'text-slate-700'}>{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold uppercase tracking-wider text-[#6C7EB7] dark:text-[#8B9DC3] text-xs mb-2">
                Subjects & Curricula
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {tutor.subjects.map((subj, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-[#121418] text-[#091322] dark:text-zinc-200 border border-slate-200 dark:border-zinc-700"
                  >
                    {subj}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-sans-body text-slate-500 dark:text-zinc-400">Includes free diagnostic assessment</span>
            <button
              onClick={() => {
                onClose();
                onOpenBookingWithTutor(tutor.name);
              }}
              className="px-6 py-3 text-xs sm:text-sm font-bold rounded-xl bg-[#6C7EB7] hover:bg-[#5B6EA7] text-white transition-all shadow-md cursor-pointer active:scale-98"
            >
              Request Tutoring with {tutor.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
