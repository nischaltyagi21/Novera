import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Users, Laptop, GraduationCap, ArrowRight, Shield, ArrowUpRight, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/mockData';
import { Card3D } from './Card3D';

interface HowItWorksProps {
  darkMode: boolean;
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ darkMode, onOpenBooking }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <UserCheck className="w-5 h-5" />;
      case 1:
        return <Users className="w-5 h-5" />;
      case 2:
        return <Laptop className="w-5 h-5" />;
      case 3:
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <UserCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden transition-colors border-b border-slate-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-5 border-b border-slate-200 dark:border-zinc-800">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#6C7EB7] dark:text-[#8B9DC3] mb-2 font-bold flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#6C7EB7] dark:text-[#8B9DC3]" />
              <span>Step-by-Step Methodology</span>
            </div>
            <h2 className={`font-brand-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-zinc-100' : 'text-[#091322]'
            }`}>
              How Novera Tutoring Works
            </h2>
          </div>
          <p className={`text-sm sm:text-base font-sans-body max-w-md ${darkMode ? 'text-zinc-300' : 'text-slate-600'}`}>
            A structured, 4-step progressive framework from initial diagnostic to exam day mastery.
          </p>
        </div>

        {/* 4 Cards Moving Left-to-Right in Staggered Motion & Flowing Progress */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-12">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 1.1, // Slower, graceful motion as requested
                delay: idx * 0.32, // Paced left-to-right progression
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative h-full"
            >
              {/* Progressive Flow Connecting Line (Desktop) */}
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] z-20 bg-gradient-to-r from-[#6C7EB7] to-transparent" />
              )}

              <Card3D depth={6} glare={true} glowColor="rgba(108, 126, 183, 0.25)" className="h-full">
                <div
                  className={`h-full p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between relative group hover:shadow-xl ${
                    darkMode
                      ? 'bg-[#181B20] border-zinc-800 hover:border-[#6C7EB7]'
                      : 'bg-white border-slate-200 hover:border-[#6C7EB7] shadow-xs'
                  }`}
                >
                  {/* Step Indicator Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#6C7EB7]/15 text-[#6C7EB7] dark:text-[#8B9DC3] flex items-center justify-center font-bold">
                        {getStepIcon(idx)}
                      </div>
                      <span className="font-brand-display text-2xl font-extrabold text-[#6C7EB7]/40 group-hover:text-[#6C7EB7] transition-colors">
                        0{step.step}
                      </span>
                    </div>

                    <h3 className={`font-brand-display text-lg font-bold mb-2 transition-colors ${
                      darkMode ? 'text-zinc-100 group-hover:text-[#8B9DC3]' : 'text-[#091322] group-hover:text-[#6C7EB7]'
                    }`}>
                      {step.title}
                    </h3>

                    <p className={`text-xs font-sans-body leading-relaxed mb-4 ${
                      darkMode ? 'text-zinc-300' : 'text-slate-600'
                    }`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Key Takeaway / Outcome */}
                  <div className={`pt-3 mt-2 border-t text-[11px] font-bold flex items-center gap-1.5 ${
                    darkMode ? 'border-zinc-800 text-[#8B9DC3]' : 'border-slate-100 text-[#2E427B]'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6C7EB7]" />
                    <span>{step.details}</span>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        {/* Bottom Booking Trigger */}
        <div className="text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#6C7EB7] hover:bg-[#5B6EA7] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>Start Step 1: Free Diagnostic Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
