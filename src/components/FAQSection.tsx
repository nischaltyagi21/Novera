import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/mockData';

interface FAQProps {
  darkMode: boolean;
  onOpenBooking: () => void;
}

export const FAQSection: React.FC<FAQProps> = ({ darkMode, onOpenBooking }) => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50/50 dark:bg-[#121418]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-wider text-[#6C7EB7] dark:text-[#8B9DC3] mb-3 font-bold border border-[#6C7EB7]/25 bg-white dark:bg-[#181B20]">
            <HelpCircle className="w-3.5 h-3.5 text-[#6C7EB7] dark:text-[#8B9DC3]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-brand-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 text-[#091322] dark:text-zinc-100">
            Common Questions
          </h2>
          <p className="text-base sm:text-lg font-sans-body text-slate-600 dark:text-zinc-300">
            Quick answers about tutoring sessions, tutor matching, and scheduling.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-12">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? darkMode
                      ? 'bg-[#181B20] border-[#6C7EB7] shadow-md'
                      : 'bg-white border-[#6C7EB7] shadow-sm'
                    : darkMode
                    ? 'bg-[#181B20]/70 border-zinc-800 hover:border-zinc-700'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-brand-display font-bold text-base sm:text-lg text-[#091322] dark:text-zinc-100">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg transition-colors shrink-0 ${
                    isOpen
                      ? 'bg-[#6C7EB7] text-white'
                      : darkMode ? 'bg-[#121418] text-zinc-400' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base font-sans-body leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 pt-4 text-slate-600 dark:text-zinc-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className={`p-6 sm:p-8 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-6 transition-all ${
          darkMode ? 'bg-[#181B20] border-zinc-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="text-left">
            <h4 className="font-brand-display font-extrabold text-lg text-[#091322] dark:text-zinc-100">
              Have more questions?
            </h4>
            <p className="text-xs sm:text-sm font-sans-body mt-1 text-slate-600 dark:text-zinc-400">
              Speak directly with an academic director or schedule a free diagnostic consultation.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 text-xs sm:text-sm font-bold rounded-xl bg-[#6C7EB7] hover:bg-[#5B6EA7] text-white transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 shadow-md hover:shadow-lg active:scale-98"
          >
            <span>Ask a Director</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
