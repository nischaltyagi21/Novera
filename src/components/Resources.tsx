import React, { useState } from 'react';
import { Clock, ArrowRight, Scroll, Pause, Play } from 'lucide-react';
import { RESOURCE_ARTICLES } from '../data/mockData';
import { ResourceArticle } from '../types';

interface ResourcesProps {
  darkMode: boolean;
  onSelectArticle: (article: ResourceArticle) => void;
}

export const Resources: React.FC<ResourcesProps> = ({ darkMode, onSelectArticle }) => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate for seamless infinite marquee from right to left
  const marqueeArticles = [...RESOURCE_ARTICLES, ...RESOURCE_ARTICLES, ...RESOURCE_ARTICLES];

  return (
    <section id="blogs" className="py-24 relative transition-colors border-b border-slate-200 dark:border-zinc-800 overflow-hidden bg-slate-50/60 dark:bg-[#121418]">
      {/* High-Resolution Background of Education News, Academic Research & Strategy Journals */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=2560&q=95"
          alt="Academic research journals, education strategy and updates"
          className="w-full h-full object-cover object-center opacity-40 dark:opacity-25 filter saturate-90 transition-opacity duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Soft Linear & Radial Gradients for Pristine Text Legibility */}
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            darkMode
              ? 'bg-gradient-to-b from-[#121418]/90 via-[#181B20]/65 to-[#121418]/90'
              : 'bg-gradient-to-b from-white/85 via-slate-50/55 to-white/85'
          }`}
        />
        <div
          className={`absolute inset-0 ${
            darkMode
              ? 'bg-gradient-to-r from-[#121418]/45 via-transparent to-[#121418]/45'
              : 'bg-gradient-to-r from-white/40 via-transparent to-white/40'
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-wider text-[#6C7EB7] dark:text-[#8B9DC3] mb-3 font-bold border border-[#6C7EB7]/25 bg-white/85 dark:bg-[#181B20]/85 backdrop-blur-md">
              <Scroll className="w-3.5 h-3.5 text-[#6C7EB7] dark:text-[#8B9DC3]" />
              <span>Educational Blogs & Guides</span>
            </div>
            <h2 className="font-brand-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 text-[#091322] dark:text-zinc-100">
              Academic Insights & Strategy
            </h2>
            <p className="text-base font-sans-body max-w-2xl text-slate-600 dark:text-zinc-300">
              Expert strategy breakdowns on IB scoring, A-Level mastery, Digital SAT strategies, and Oxbridge admissions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl border transition-all cursor-pointer ${
                darkMode
                  ? 'border-zinc-800 bg-[#181B20]/90 text-zinc-200 hover:border-[#6C7EB7]'
                  : 'border-slate-200 bg-white/90 text-slate-700 hover:bg-slate-50 shadow-xs'
              }`}
              title={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              <span>{isPaused ? 'Resume' : 'Pause'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right-to-Left Auto-Scrolling Blog Cards */}
      <div className="relative w-full overflow-hidden py-2 z-10">
        {/* Side gradient fade masks */}
        <div className={`absolute top-0 bottom-0 left-0 w-16 sm:w-28 z-20 pointer-events-none ${
          darkMode ? 'bg-gradient-to-r from-[#121418] to-transparent' : 'bg-gradient-to-r from-slate-50 to-transparent'
        }`} />
        <div className={`absolute top-0 bottom-0 right-0 w-16 sm:w-28 z-20 pointer-events-none ${
          darkMode ? 'bg-gradient-to-l from-[#121418] to-transparent' : 'bg-gradient-to-l from-slate-50 to-transparent'
        }`} />

        <div
          className="animate-marquee-slow flex gap-6 px-4"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {marqueeArticles.map((article, idx) => (
            <div
              key={`${article.id}-${idx}`}
              onClick={() => onSelectArticle(article)}
              className={`w-[320px] sm:w-[380px] shrink-0 rounded-2xl overflow-hidden border transition-all duration-200 flex flex-col justify-between cursor-pointer hover:shadow-xl select-none group backdrop-blur-md ${
                darkMode
                  ? 'bg-[#181B20]/95 border-zinc-800 hover:border-[#6C7EB7]'
                  : 'bg-white/95 border-slate-200 hover:border-[#6C7EB7] shadow-sm'
              }`}
            >
              {/* Image Header */}
              <div className="relative h-44 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-zinc-800">
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                )}
                <div className="absolute top-3 left-3 bg-[#121418]/90 border border-zinc-700/80 backdrop-blur-md px-3 py-1 rounded-lg text-[#8B9DC3] text-[11px] font-bold uppercase tracking-wider">
                  {article.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 mb-2.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#6C7EB7]" />
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-brand-display font-extrabold text-lg mb-2 transition-colors line-clamp-2 text-[#091322] dark:text-zinc-100 group-hover:text-[#6C7EB7] dark:group-hover:text-[#8B9DC3]">
                    {article.title}
                  </h3>

                  <p className="text-xs font-sans-body leading-relaxed line-clamp-3 mb-4 text-slate-600 dark:text-zinc-300">
                    {article.excerpt}
                  </p>
                </div>

                {/* Author Footer */}
                <div className="pt-3.5 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {article.author.avatar ? (
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-[#6C7EB7]"
                      />
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-[#121418] border border-[#6C7EB7] flex items-center justify-center text-[10px] text-[#6C7EB7] font-bold">
                        {article.author.name[0]}
                      </div>
                    )}
                    <span className="text-xs font-semibold text-slate-700 dark:text-zinc-200 font-brand-display">
                      {article.author.name}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#6C7EB7] dark:text-[#8B9DC3] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
