import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { StandardizedTestPrep } from './components/StandardizedTestPrep';
import { UKAdmissionsTestPrep } from './components/UKAdmissionsTestPrep';
import { UniversityPrep } from './components/UniversityPrep';
import { HowItWorks } from './components/HowItWorks';
import { AboutUs } from './components/AboutUs';
import { OurTutors } from './components/OurTutors';
import { ResultsMatter } from './components/ResultsMatter';
import { Resources } from './components/Resources';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

import { BookConsultationModal } from './components/BookConsultationModal';
import { TutorDetailModal } from './components/TutorDetailModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { LegalModal, LegalTabType } from './components/LegalModal';

import { PROGRAMS, STANDARDIZED_TESTS, UK_ADMISSIONS_TESTS, TUTORS, RESOURCE_ARTICLES } from './data/mockData';
import { Program, Tutor, ResourceArticle } from './types';
import { CAMPUS_IMAGES } from './components/CampusBackground';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentCampusIdx, setCurrentCampusIdx] = useState(0);

  // Auto-rotate hero campus background smoothly & dynamically
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCampusIdx((prev) => (prev + 1) % CAMPUS_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedTutorName, setPreselectedTutorName] = useState<string | undefined>(undefined);
  const [preselectedTestName, setPreselectedTestName] = useState<string | undefined>(undefined);

  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ResourceArticle | null>(null);

  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalTabType>('standards');

  const handleOpenBooking = (testOrCurriculumName?: string) => {
    setPreselectedTutorName(undefined);
    setPreselectedTestName(testOrCurriculumName);
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithTutor = (tutorName: string) => {
    setPreselectedTutorName(tutorName);
    setPreselectedTestName(undefined);
    setBookingModalOpen(true);
  };

  const handleOpenLegal = (tab: LegalTabType) => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  const scrollToCurriculum = () => {
    const el = document.getElementById('curriculum') || document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen font-brand-display transition-colors duration-300 relative selection:bg-[#6C7EB7]/30 bg-white dark:bg-[#121418] ${
      darkMode ? 'text-zinc-100 dark' : 'text-slate-900'
    }`}>
      {/* Navigation Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main className="overflow-x-hidden relative z-10 bg-white dark:bg-[#121418]">
        {/* Top Hero Section (Campus Background is strictly contained here) */}
        <Hero
          darkMode={darkMode}
          currentCampusIdx={currentCampusIdx}
          onSelectCampus={setCurrentCampusIdx}
          onOpenBooking={() => handleOpenBooking()}
          onExploreCurriculum={scrollToCurriculum}
        />

        {/* Rest of the Website - Clean solid background */}
        <div className="relative z-20 bg-white dark:bg-[#121418] text-slate-900 dark:text-zinc-100">
          {/* 1. Curriculum Section */}
          <Programs
            programs={PROGRAMS}
            darkMode={darkMode}
            onSelectProgram={(program) => setSelectedProgram(program)}
            onOpenBooking={() => handleOpenBooking()}
          />

          {/* 2. Standardized Test Prep Section (SAT, ACT, GMAT, GRE) */}
          <StandardizedTestPrep
            tests={STANDARDIZED_TESTS}
            darkMode={darkMode}
            onOpenBooking={(testName) => handleOpenBooking(testName)}
          />

          {/* 3. UK Admissions Test Prep Section (TMUA, TSA, UCAT, LNAT) */}
          <UKAdmissionsTestPrep
            tests={UK_ADMISSIONS_TESTS}
            darkMode={darkMode}
            onOpenBooking={(testName) => handleOpenBooking(testName)}
          />

          {/* 4. University Admissions Prep & Consulting Section */}
          <UniversityPrep
            darkMode={darkMode}
            onOpenBooking={() => handleOpenBooking()}
          />

          {/* How It Works Section (4 Inline Steps) */}
          <HowItWorks
            darkMode={darkMode}
            onOpenBooking={() => handleOpenBooking()}
          />

          {/* Results That Matter & Testimonials with Animated Percentage Counter */}
          <ResultsMatter
            darkMode={darkMode}
            onOpenBooking={() => handleOpenBooking()}
          />

          {/* Our Tutors Section (Continuous Slow Marquee) */}
          <OurTutors
            tutors={TUTORS}
            darkMode={darkMode}
            onSelectTutor={(tutor) => setSelectedTutor(tutor)}
            onOpenBooking={() => handleOpenBooking()}
          />

          {/* 4. Educational Blogs Section (Slow Right-to-Left Scrolling) */}
          <Resources
            darkMode={darkMode}
            onSelectArticle={(article) => setSelectedArticle(article)}
          />

          {/* 5. About Us Section (Mentoring Future Leaders with Online Student Photos) */}
          <AboutUs
            darkMode={darkMode}
            onOpenBooking={() => handleOpenBooking()}
          />

          {/* FAQs & Direct Help */}
          <FAQSection
            darkMode={darkMode}
            onOpenBooking={() => handleOpenBooking()}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer
        darkMode={darkMode}
        onOpenBooking={() => handleOpenBooking()}
        onOpenLegal={handleOpenLegal}
      />

      {/* Interactive Modals */}
      <BookConsultationModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        darkMode={darkMode}
        preselectedTutorName={preselectedTutorName}
        preselectedTestName={preselectedTestName}
      />

      <TutorDetailModal
        tutor={selectedTutor}
        onClose={() => setSelectedTutor(null)}
        onOpenBookingWithTutor={handleOpenBookingWithTutor}
        darkMode={darkMode}
      />

      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onOpenBooking={() => handleOpenBooking()}
        darkMode={darkMode}
      />

      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenBooking={() => handleOpenBooking()}
        darkMode={darkMode}
      />

      <LegalModal
        isOpen={legalModalOpen}
        initialTab={legalModalTab}
        onClose={() => setLegalModalOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}

