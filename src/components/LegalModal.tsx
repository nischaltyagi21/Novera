import React, { useEffect, useState } from 'react';
import { X, ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export type LegalTabType = 'standards' | 'privacy' | 'terms';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTabType;
  onClose: () => void;
  darkMode: boolean;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'standards',
  onClose,
  darkMode,
}) => {
  const [activeTab, setActiveTab] = useState<LegalTabType>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-3xl max-h-[85vh] flex flex-col rounded-2xl shadow-2xl border transition-all overflow-hidden ${
          darkMode
            ? 'bg-[#181B20] border-zinc-800 text-zinc-100'
            : 'bg-white border-slate-200 text-slate-800'
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between px-6 py-5 border-b ${
            darkMode
              ? 'bg-[#121418] border-zinc-800'
              : 'bg-slate-50/80 border-slate-100'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#6C7EB7]/15 text-[#6C7EB7] dark:text-[#8B9DC3] flex items-center justify-center font-bold">
              {activeTab === 'standards' && <ShieldCheck className="w-5 h-5" />}
              {activeTab === 'privacy' && <Lock className="w-5 h-5" />}
              {activeTab === 'terms' && <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-lg font-bold font-brand-display leading-tight text-[#091322] dark:text-zinc-100">
                {activeTab === 'standards' && 'Academic Standards & Integrity'}
                {activeTab === 'privacy' && 'Privacy Policy & Student Data'}
                {activeTab === 'terms' && 'Terms of Service & Engagement'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-zinc-400 font-sans-body">
                Novera Education Governance & Policies
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              darkMode
                ? 'bg-[#121418] border-zinc-700 text-zinc-400 hover:text-white'
                : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900'
            }`}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div
          className={`flex border-b px-6 gap-2 text-sm font-medium ${
            darkMode ? 'border-zinc-800 bg-[#121418]' : 'border-slate-100 bg-white'
          }`}
        >
          <button
            onClick={() => setActiveTab('standards')}
            className={`py-3 px-3 border-b-2 font-bold text-xs sm:text-sm transition-colors cursor-pointer font-brand-display ${
              activeTab === 'standards'
                ? 'border-[#6C7EB7] text-[#6C7EB7] dark:text-[#8B9DC3]'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-zinc-200'
            }`}
          >
            Academic Standards
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`py-3 px-3 border-b-2 font-bold text-xs sm:text-sm transition-colors cursor-pointer font-brand-display ${
              activeTab === 'privacy'
                ? 'border-[#6C7EB7] text-[#6C7EB7] dark:text-[#8B9DC3]'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-zinc-200'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`py-3 px-3 border-b-2 font-bold text-xs sm:text-sm transition-colors cursor-pointer font-brand-display ${
              activeTab === 'terms'
                ? 'border-[#6C7EB7] text-[#6C7EB7] dark:text-[#8B9DC3]'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-zinc-200'
            }`}
          >
            Terms of Service
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-sm leading-relaxed font-sans-body">
          {activeTab === 'standards' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-bold text-[#6C7EB7] dark:text-[#8B9DC3] mb-2 font-brand-display">
                  1. Tutor Qualifications & Vetting
                </h3>
                <p className="text-slate-600 dark:text-zinc-300">
                  Every tutor at Novera Education undergoes a selective multi-tier evaluation. Only 3% of applicants who graduate from world-leading universities (Oxford, Cambridge, Imperial, Ivy League) and demonstrate mastery in curriculum-specific pedagogy (IB, A-Level, AP, SAT/ACT, UK Admissions) are admitted to our faculty.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#6C7EB7] dark:text-[#8B9DC3] mb-2 font-brand-display">
                  2. Academic Integrity & Ethics
                </h3>
                <p className="text-slate-600 dark:text-zinc-300">
                  Novera Education strictly adheres to global academic integrity standards. Tutors provide pedagogical mentorship, conceptual clarity, exam strategies, and constructive critique. Under no circumstances will a tutor write, complete, or forge coursework, internal assessments (IA), extended essays (EE), or school exams on behalf of any student.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#6C7EB7] dark:text-[#8B9DC3] mb-2 font-brand-display">
                  3. Pedagogy & Evidence-Based Progress Tracking
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#6C7EB7] shrink-0 mt-0.5" />
                    <span><strong>Diagnostic Baseline:</strong> Every student completes an initial diagnostic to identify knowledge gaps and cognitive strengths.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#6C7EB7] shrink-0 mt-0.5" />
                    <span><strong>Structured Roadmaps:</strong> Customized lesson milestones are shared with students and parents with quarterly progress reporting.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#6C7EB7] shrink-0 mt-0.5" />
                    <span><strong>Past-Paper Mastery:</strong> Rigorous examination conditioning using authentic mark schemes and official examiners’ reports.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#6C7EB7] dark:text-[#8B9DC3] mb-2 font-brand-display">
                  4. Tutor Replacement Guarantee
                </h3>
                <p className="text-slate-600 dark:text-zinc-300">
                  If you are not 100% satisfied with tutor chemistry or teaching style after your initial session, we will re-match you immediately with another senior specialist without additional fee.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-bold text-[#6C7EB7] dark:text-[#8B9DC3] mb-2 font-brand-display">
                  1. Information We Collect
                </h3>
                <p className="text-slate-600 dark:text-zinc-300">
                  We collect information strictly necessary to provide tutoring services: student name, academic grade, subjects of interest, target goals, guardian contact details, and diagnostic assessment submissions.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#6C7EB7] dark:text-[#8B9DC3] mb-2 font-brand-display">
                  2. Virtual Classroom & Session Security
                </h3>
                <p className="text-slate-600 dark:text-zinc-300">
                  All live lesson recordings and whiteboard boards are encrypted and accessible only to the registered student, their guardians, and the designated tutor for revision purposes. We never sell, rent, or trade student personal data to third parties.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#6C7EB7] dark:text-[#8B9DC3] mb-2 font-brand-display">
                  3. GDPR & Global Compliance
                </h3>
                <p className="text-slate-600 dark:text-zinc-300">
                  Novera Education complies fully with UK & EU GDPR regulations and global child online safety guidelines. Guardians retain full rights to request data export or account deletion at any time by contacting <span className="text-[#6C7EB7] font-semibold">privacy@noveraeducation.com</span>.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-bold text-[#6C7EB7] dark:text-[#8B9DC3] mb-2 font-brand-display">
                  1. Tutoring Packages & Scheduling
                </h3>
                <p className="text-slate-600 dark:text-zinc-300">
                  Lesson hours are booked in flexible blocks or customized term plans. Sessions are scheduled based on student availability across global timezones (GMT, EST, PST, GST, HKT, SGT).
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#6C7EB7] dark:text-[#8B9DC3] mb-2 font-brand-display">
                  2. 24-Hour Rescheduling Policy
                </h3>
                <p className="text-slate-600 dark:text-zinc-300">
                  Students may reschedule or cancel any scheduled session free of charge provided notice is given at least 24 hours prior to the session start time. Cancellations under 24 hours may be billed to protect our faculty schedules.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#6C7EB7] dark:text-[#8B9DC3] mb-2 font-brand-display">
                  3. Satisfaction & Refund Policy
                </h3>
                <p className="text-slate-600 dark:text-zinc-300">
                  Unused lesson hours remain valid for 12 months from purchase date. If you decide to pause or discontinue tuition, unused hours are refundable subject to standard administrative processing.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div
          className={`flex items-center justify-end px-6 py-4 border-t ${
            darkMode ? 'bg-[#121418] border-zinc-800' : 'bg-slate-50 border-slate-100'
          }`}
        >
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#6C7EB7] hover:bg-[#5B6EA7] text-white transition-colors cursor-pointer"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
