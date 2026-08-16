import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { EducationLogo } from './EducationLogo';
import { LegalTabType } from './LegalModal';

interface FooterProps {
  darkMode: boolean;
  onOpenBooking: () => void;
  onOpenLegal?: (tab: LegalTabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenBooking, onOpenLegal }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className={`border-t relative z-20 transition-colors duration-300 ${
      darkMode 
        ? 'border-zinc-800 bg-[#121418] text-zinc-100' 
        : 'border-slate-200 bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <EducationLogo darkMode={darkMode} />
            </div>

            <p className={`text-xs sm:text-sm font-sans-body leading-relaxed mb-6 max-w-sm ${
              darkMode ? 'text-zinc-400' : 'text-slate-600'
            }`}>
              Elite 1-to-1 tutoring, standardized test preparation (SAT, ACT, GMAT, GRE), and UK university admissions coaching for ambitious students worldwide.
            </p>

            <div className={`space-y-3 text-xs font-sans-body ${
              darkMode ? 'text-zinc-300' : 'text-slate-700'
            }`}>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#6C7EB7]" />
                <span className={darkMode ? 'text-zinc-300' : 'text-slate-700'}>admissions@noveraeducation.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#6C7EB7]" />
                <span className={darkMode ? 'text-zinc-300' : 'text-slate-700'}>+44 (0) 20 7946 0192 (UK & International)</span>
              </div>
            </div>
          </div>

          {/* Test Prep Col */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 pb-2 border-b font-brand-display ${
              darkMode ? 'text-zinc-100 border-zinc-800' : 'text-slate-900 border-slate-200'
            }`}>
              Test Preparation
            </h4>
            <ul className={`space-y-2.5 text-xs font-sans-body ${
              darkMode ? 'text-zinc-400' : 'text-slate-600'
            }`}>
              <li>
                <a
                  href="#test-prep"
                  onClick={(e) => scrollToSection(e, 'test-prep')}
                  className="hover:text-[#6C7EB7] dark:hover:text-[#8B9DC3] transition-colors"
                >
                  Digital SAT Prep
                </a>
              </li>
              <li>
                <a
                  href="#test-prep"
                  onClick={(e) => scrollToSection(e, 'test-prep')}
                  className="hover:text-[#6C7EB7] dark:hover:text-[#8B9DC3] transition-colors"
                >
                  ACT Prep (34-36 Target)
                </a>
              </li>
              <li>
                <a
                  href="#test-prep"
                  onClick={(e) => scrollToSection(e, 'test-prep')}
                  className="hover:text-[#6C7EB7] dark:hover:text-[#8B9DC3] transition-colors"
                >
                  GMAT Focus Edition
                </a>
              </li>
              <li>
                <a
                  href="#test-prep"
                  onClick={(e) => scrollToSection(e, 'test-prep')}
                  className="hover:text-[#6C7EB7] dark:hover:text-[#8B9DC3] transition-colors"
                >
                  GRE General Test
                </a>
              </li>
              <li>
                <a
                  href="#uk-admissions"
                  onClick={(e) => scrollToSection(e, 'uk-admissions')}
                  className="hover:text-[#6C7EB7] dark:hover:text-[#8B9DC3] transition-colors font-semibold text-[#6C7EB7] dark:text-[#8B9DC3]"
                >
                  UK Tests: TMUA, TSA, UCAT, LNAT
                </a>
              </li>
            </ul>
          </div>

          {/* School Curricula Col */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 pb-2 border-b font-brand-display ${
              darkMode ? 'text-zinc-100 border-zinc-800' : 'text-slate-900 border-slate-200'
            }`}>
              Curricula & Subjects
            </h4>
            <ul className={`space-y-2.5 text-xs font-sans-body ${
              darkMode ? 'text-zinc-400' : 'text-slate-600'
            }`}>
              <li>
                <a
                  href="#curriculum"
                  onClick={(e) => scrollToSection(e, 'curriculum')}
                  className="hover:text-[#6C7EB7] dark:hover:text-[#8B9DC3] transition-colors"
                >
                  IB Diploma (HL / SL)
                </a>
              </li>
              <li>
                <a
                  href="#curriculum"
                  onClick={(e) => scrollToSection(e, 'curriculum')}
                  className="hover:text-[#6C7EB7] dark:hover:text-[#8B9DC3] transition-colors"
                >
                  Cambridge / Edexcel IGCSE
                </a>
              </li>
              <li>
                <a
                  href="#curriculum"
                  onClick={(e) => scrollToSection(e, 'curriculum')}
                  className="hover:text-[#6C7EB7] dark:hover:text-[#8B9DC3] transition-colors"
                >
                  A-Level & Further Maths
                </a>
              </li>
              <li>
                <a
                  href="#curriculum"
                  onClick={(e) => scrollToSection(e, 'curriculum')}
                  className="hover:text-[#6C7EB7] dark:hover:text-[#8B9DC3] transition-colors"
                >
                  Advanced Placement (AP)
                </a>
              </li>
              <li>
                <a
                  href="#subjects"
                  onClick={(e) => scrollToSection(e, 'subjects')}
                  className="hover:text-[#6C7EB7] dark:hover:text-[#8B9DC3] transition-colors"
                >
                  All Academic Subjects
                </a>
              </li>
            </ul>
          </div>

          {/* Organization Col */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 pb-2 border-b font-brand-display ${
              darkMode ? 'text-zinc-100 border-zinc-800' : 'text-slate-900 border-slate-200'
            }`}>
              Novera Education
            </h4>
            <ul className={`space-y-2.5 text-xs font-sans-body ${
              darkMode ? 'text-zinc-400' : 'text-slate-600'
            }`}>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="hover:text-[#6C7EB7] dark:hover:text-[#8B9DC3] transition-colors"
                >
                  About Our Academy
                </a>
              </li>
              <li>
                <a
                  href="#tutors"
                  onClick={(e) => scrollToSection(e, 'tutors')}
                  className="hover:text-[#6C7EB7] dark:hover:text-[#8B9DC3] transition-colors"
                >
                  Our Expert Tutors
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => scrollToSection(e, 'how-it-works')}
                  className="hover:text-[#6C7EB7] dark:hover:text-[#8B9DC3] transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#blogs"
                  onClick={(e) => scrollToSection(e, 'blogs')}
                  className="hover:text-[#6C7EB7] dark:hover:text-[#8B9DC3] transition-colors"
                >
                  Insights & Articles
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-[#6C7EB7] dark:text-[#8B9DC3] uppercase tracking-wider font-bold hover:underline text-[11px] cursor-pointer"
                >
                  Book Free Consultation
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between text-xs font-sans-body gap-4 ${
          darkMode ? 'border-zinc-800/80 text-zinc-400' : 'border-slate-200 text-slate-500'
        }`}>
          <div>
            © 2026 Novera Education Ltd. All rights reserved.
          </div>
          <div className={`flex items-center gap-6 text-[11px] uppercase tracking-wider font-medium ${
            darkMode ? 'text-zinc-400' : 'text-slate-600'
          }`}>
            <button
              onClick={() => onOpenLegal && onOpenLegal('standards')}
              className="hover:text-[#6C7EB7] dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              Academic Standards
            </button>
            <button
              onClick={() => onOpenLegal && onOpenLegal('privacy')}
              className="hover:text-[#6C7EB7] dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal && onOpenLegal('terms')}
              className="hover:text-[#6C7EB7] dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
