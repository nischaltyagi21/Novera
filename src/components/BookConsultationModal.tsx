import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, Clock, Shield, CheckCircle2, Calendar, UserCheck, Landmark, Sparkles } from 'lucide-react';
import { ConsultationFormData } from '../types';
import { EducationLogo } from './EducationLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  preselectedTutorName?: string;
  preselectedTestName?: string;
}

export const BookConsultationModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  preselectedTutorName,
  preselectedTestName,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    userType: 'Student',
    fullName: '',
    email: '',
    phone: '',
    curriculum: 'IB Diploma',
    gradeLevel: 'Grade 11',
    subjectsNeeded: ['Mathematics'],
    goals: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedTestName) {
      setFormData((prev) => ({
        ...prev,
        curriculum: preselectedTestName.includes('SAT')
          ? 'Digital SAT Prep'
          : preselectedTestName.includes('ACT')
          ? 'ACT Prep'
          : preselectedTestName.includes('GMAT')
          ? 'GMAT Focus Prep'
          : preselectedTestName.includes('GRE')
          ? 'GRE Prep'
          : `UK Admissions Test (${preselectedTestName})`,
      }));
    }
  }, [preselectedTestName, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const toggleSubject = (subject: string) => {
    setFormData((prev) => {
      const exists = prev.subjectsNeeded.includes(subject);
      if (exists) {
        return { ...prev, subjectsNeeded: prev.subjectsNeeded.filter((s) => s !== subject) };
      } else {
        return { ...prev, subjectsNeeded: [...prev.subjectsNeeded, subject] };
      }
    });
  };

  const subjectOptions = [
    'Mathematics & Further Maths',
    'Physics',
    'Chemistry',
    'Biology & Medicine',
    'Economics & Business',
    'Computer Science',
    'Digital SAT / ACT Prep',
    'UK Tests (TMUA/TSA/UCAT/LNAT)',
    'English Language & Literature',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className={`relative w-full max-w-4xl rounded-2xl border shadow-2xl overflow-hidden transition-all ${
          darkMode ? 'bg-[#091220] border-[#c5a880]/60 text-white' : 'bg-[#FAF7F2] border-[#c5a880] text-[#0b192c]'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className={`absolute top-5 right-5 p-2 rounded-lg border transition-colors z-10 cursor-pointer ${
            darkMode ? 'bg-[#080f1d] border-slate-700 text-[#c5a880] hover:text-white' : 'bg-[#FAF7F2] border-[#d8ccb8] text-[#0b192c] hover:bg-[#eadecd]'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation State */
          <div className="p-10 sm:p-14 text-center max-w-xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-[#9E7D46]/20 border-2 border-[#c5a880] text-[#c5a880] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#9E7D46]" />
            </div>

            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold mb-3 text-[#0b192c] dark:text-[#F5EFEB]">
              Consultation Request Received
            </h3>

            <p className={`text-sm font-serif-classic leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Thank you, <strong className="text-[#9E7D46] font-bold">{formData.fullName}</strong>. An Academic Director from Novera Education will review your requirements and reach out to <strong className="text-[#9E7D46]">{formData.email}</strong> within 24 hours to schedule your tailored session.
            </p>

            <div className={`p-5 rounded-xl border text-xs text-left mb-8 space-y-2.5 ${
              darkMode ? 'bg-[#080f1d] border-[#c5a880]/30' : 'bg-[#eadecd]/40 border-[#c5a880]/50'
            }`}>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Target Program / Test:</span>
                <span className="font-bold">{formData.curriculum} ({formData.gradeLevel})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Subjects Selected:</span>
                <span className="font-bold">{formData.subjectsNeeded.join(', ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Applicant:</span>
                <span className="font-bold">{formData.userType}</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="px-8 py-3.5 text-xs uppercase tracking-wider font-bold rounded-xl border bg-gradient-to-r from-[#9E7D46] via-[#B89358] to-[#C5A880] text-[#080f1d] transition-all shadow-md cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        ) : (
          /* Booking Form Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info Panel */}
            <div className={`lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-r ${
              darkMode ? 'bg-[#071326] border-[#1e3a6a]' : 'bg-[#0b192c] border-slate-700 text-white'
            }`}>
              <div>
                <div className="mb-6">
                  <EducationLogo darkMode={true} size="md" />
                </div>

                <h3 className="font-brand-display text-2xl sm:text-3xl font-bold mb-4 text-slate-100 leading-tight">
                  Book a Free 1-to-1 Academic Consultation
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                  Speak directly with an Academic Director to discuss target universities, current grades, and design a customized tutoring roadmap.
                </p>

                {preselectedTutorName && (
                  <div className="p-3 rounded-xl border border-[#ca933b]/40 bg-[#0b1d3a] text-[#ca933b] text-xs uppercase tracking-wider mb-6 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#ca933b]" />
                    <span>Requested Tutor: {preselectedTutorName}</span>
                  </div>
                )}

                {preselectedTestName && (
                  <div className="p-3 rounded-xl border border-[#ca933b]/40 bg-[#0b1d3a] text-[#ca933b] text-xs uppercase tracking-wider mb-6 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#ca933b]" />
                    <span>Selected Test: {preselectedTestName}</span>
                  </div>
                )}

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#ca933b] shrink-0" />
                    <span>admissions@noveraeducation.com</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#ca933b] shrink-0" />
                    <span>+44 (0) 20 7946 0192 (UK / Global)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#ca933b] shrink-0" />
                    <span>Response Time: Within 24 Hours</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-700 text-xs text-[#ca933b]">
                100% confidential. No commitment required for consultation.
              </div>
            </div>

            {/* Right Interactive Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 p-8 sm:p-10 space-y-5">
              {/* User Type Selector: Student / Parent */}
              <div>
                <label className="block text-xs uppercase tracking-wider mb-2 text-[#ca933b] font-semibold">
                  I am a:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(['Student', 'Parent'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, userType: type })}
                      className={`py-2.5 text-xs uppercase tracking-wider font-bold rounded-lg border transition-all cursor-pointer ${
                        formData.userType === type
                          ? 'bg-[#ca933b] text-[#0b192c] border-[#ca933b] shadow-sm'
                          : darkMode
                          ? 'bg-[#071326] border-[#1e3a6a] text-slate-300 hover:border-[#ca933b]/50'
                          : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {type === 'Student' ? 'Student' : 'Parent / Guardian'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-1 text-slate-600 dark:text-slate-400 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs rounded-lg border focus:outline-none focus:border-[#ca933b] ${
                      darkMode ? 'bg-[#071326] border-[#1e3a6a] text-white' : 'bg-white border-slate-200 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider mb-1 text-slate-600 dark:text-slate-400 font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alexander@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs rounded-lg border focus:outline-none focus:border-[#ca933b] ${
                      darkMode ? 'bg-[#071326] border-[#1e3a6a] text-white' : 'bg-white border-slate-200 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              {/* Phone & Curriculum */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-1 text-slate-600 dark:text-slate-400 font-semibold">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 7700 900123 / +1 (555)..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs rounded-lg border focus:outline-none focus:border-[#ca933b] ${
                      darkMode ? 'bg-[#071326] border-[#1e3a6a] text-white' : 'bg-white border-slate-200 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider mb-1 text-slate-600 dark:text-slate-400 font-semibold">
                    Program / Test Interest
                  </label>
                  <select
                    value={formData.curriculum}
                    onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs rounded-lg border focus:outline-none focus:border-[#ca933b] ${
                      darkMode ? 'bg-[#071326] border-[#1e3a6a] text-white' : 'bg-white border-slate-200 text-slate-900'
                    }`}
                  >
                    <optgroup label="School Curricula">
                      <option value="IB Diploma">IB Diploma (HL & SL)</option>
                      <option value="MYP">IB Middle Years (MYP)</option>
                      <option value="A-Level">A-Level & Further Maths</option>
                      <option value="IGCSE">Cambridge / Edexcel IGCSE</option>
                      <option value="AP">Advanced Placement (AP)</option>
                    </optgroup>
                    <optgroup label="Standardized Test Prep">
                      <option value="Digital SAT Prep">Digital SAT Prep (1550+ Target)</option>
                      <option value="ACT Prep">ACT Prep (34-36 Target)</option>
                      <option value="GMAT Focus Prep">GMAT Focus Edition (Pre-MBA)</option>
                      <option value="GRE Prep">GRE General Prep</option>
                    </optgroup>
                    <optgroup label="UK Admissions Tests">
                      <option value="TMUA Prep">TMUA (Cambridge, Imperial, LSE)</option>
                      <option value="TSA Prep">TSA (Oxford, UCL)</option>
                      <option value="UCAT Prep">UCAT (Medical & Dental)</option>
                      <option value="LNAT Prep">LNAT (Oxford, Cambridge Law)</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Subjects Checklist */}
              <div>
                <label className="block text-xs uppercase tracking-wider mb-1.5 text-slate-600 dark:text-slate-400 font-semibold">
                  Subjects & Areas of Focus:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {subjectOptions.map((subject) => {
                    const isSelected = formData.subjectsNeeded.includes(subject);
                    return (
                      <button
                        key={subject}
                        type="button"
                        onClick={() => toggleSubject(subject)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#ca933b] text-[#0b192c] border-[#ca933b]'
                            : darkMode
                            ? 'bg-[#071326] border-[#1e3a6a] text-slate-400 hover:border-[#ca933b]/40'
                            : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {subject} {isSelected ? '✓' : '+'}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Goals */}
              <div>
                <label className="block text-xs uppercase tracking-wider mb-1 text-slate-600 dark:text-slate-400 font-semibold">
                  Current Target Universities or Goals:
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Aiming for 1550+ on Digital SAT and Grade 7 in IB Math AA HL for MIT / Oxford application..."
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  className={`w-full px-3.5 py-2.5 text-xs rounded-lg border focus:outline-none focus:border-[#ca933b] ${
                    darkMode ? 'bg-[#071326] border-[#1e3a6a] text-white' : 'bg-white border-slate-200 text-slate-900'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold rounded-xl bg-[#ca933b] hover:bg-[#b78229] text-[#0b192c] transition-all shadow-md cursor-pointer"
              >
                Schedule Free Academic Consultation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};


