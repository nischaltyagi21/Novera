import React, { useState } from 'react';
import { 
  Calculator, Zap, FlaskConical, Dna, TrendingUp, 
  Briefcase, Code, Brain, BookOpen, ArrowRight, Check, Compass, BookMarked
} from 'lucide-react';
import { SUBJECTS } from '../data/mockData';
import { SubjectItem } from '../types';

interface SubjectsProps {
  darkMode: boolean;
  onOpenBooking: () => void;
}

export const SubjectsWeCover: React.FC<SubjectsProps> = ({ darkMode, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSubject, setSelectedSubject] = useState<SubjectItem | null>(SUBJECTS[0]);

  const categories = ['All', 'Mathematics', 'Sciences', 'Humanities', 'Technology', 'Languages'];

  const filteredSubjects = activeCategory === 'All'
    ? SUBJECTS
    : SUBJECTS.filter((s) => s.category === activeCategory);

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator': return <Calculator className="w-5 h-5 text-[#9E7D46]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-600" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-emerald-600" />;
      case 'Dna': return <Dna className="w-5 h-5 text-rose-600" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#0b192c] dark:text-[#c5a880]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-amber-700" />;
      case 'Code': return <Code className="w-5 h-5 text-teal-600" />;
      case 'Brain': return <Brain className="w-5 h-5 text-rose-700" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#9E7D46]" />;
      default: return <Calculator className="w-5 h-5 text-[#9E7D46]" />;
    }
  };

  return (
    <section id="subjects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10 pb-5 border-b border-slate-200 dark:border-[#1e3a6a]">
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-wider text-[#ca933b] mb-2 font-semibold flex items-center gap-2">
              <BookMarked className="w-4 h-4 text-[#ca933b]" />
              <span>Subjects & Disciplines</span>
            </div>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-2 ${
              darkMode ? 'text-slate-100' : 'text-slate-900'
            }`}>
              Comprehensive Subject Coverage
            </h2>
            <p className={`text-sm sm:text-base font-serif-classic ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Expert 1-to-1 instruction tailored to IB, AP, A-Level, and GCSE curricula.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="lg:col-span-6 flex flex-wrap gap-2 lg:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#ca933b] text-[#0b192c] border-[#ca933b] shadow-xs'
                    : darkMode
                    ? 'bg-[#0b1d3a] text-slate-300 border-[#1e3a6a] hover:border-[#ca933b]/50'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Layout: Subjects Grid + Side Detail Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Subjects List Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredSubjects.map((subj) => {
              const isSelected = selectedSubject?.id === subj.id;
              return (
                <div
                  key={subj.id}
                  onClick={() => setSelectedSubject(subj)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? darkMode
                        ? 'bg-[#0b1d3a] border-[#ca933b] shadow-md'
                        : 'bg-white border-[#ca933b] shadow-md'
                      : darkMode
                      ? 'bg-[#0b1d3a]/70 border-[#1e3a6a] hover:border-[#ca933b]/50'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl border ${
                      darkMode ? 'bg-[#071326] border-[#1e3a6a]' : 'bg-slate-50 border-slate-200'
                    }`}>
                      {getSubjectIcon(subj.iconName)}
                    </div>
                    <div>
                      <h3 className={`font-serif font-bold text-sm ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                        {subj.name}
                      </h3>
                      <p className={`text-xs font-serif-classic italic mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {subj.curricula.slice(0, 2).join(' • ')}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-[#ca933b] translate-x-1' : 'text-slate-400'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Right Subject Overview Frame */}
          <div className="lg:col-span-5">
            {selectedSubject && (
              <div className={`p-6 sm:p-7 rounded-2xl border shadow-lg transition-all ${
                darkMode ? 'bg-[#0b1d3a] border-[#1e3a6a] text-slate-100' : 'bg-white border-slate-200 text-slate-900'
              }`}>
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-[#1e3a6a]">
                  <div className="p-3 rounded-xl border border-[#ca933b]/40 bg-[#071326] text-[#ca933b]">
                    {getSubjectIcon(selectedSubject.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#ca933b]">
                      {selectedSubject.category}
                    </span>
                    <h3 className="text-xl font-serif font-bold">{selectedSubject.name}</h3>
                  </div>
                </div>

                <p className={`text-sm font-serif-classic leading-relaxed mb-5 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {selectedSubject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-slate-800 dark:text-slate-200">
                    Curricular Focus & Topics:
                  </h4>
                  <div className="space-y-2">
                    {selectedSubject.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-serif-classic">
                        <Check className="w-3.5 h-3.5 text-[#ca933b] shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-[#1e3a6a] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Available Tutors:</span>
                    <div className="text-xs font-bold text-[#ca933b]">
                      {selectedSubject.tutorCount} Specialists
                    </div>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#ca933b] text-[#0b192c] hover:bg-[#b78229] transition-all cursor-pointer"
                  >
                    Request Tutor
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

