import React from 'react';
import { X, Clock, Calendar, ArrowRight } from 'lucide-react';
import { ResourceArticle } from '../types';

interface ArticleDetailProps {
  article: ResourceArticle | null;
  onClose: () => void;
  onOpenBooking: () => void;
  darkMode: boolean;
}

export const ArticleDetailModal: React.FC<ArticleDetailProps> = ({
  article,
  onClose,
  onOpenBooking,
  darkMode,
}) => {
  if (!article) return null;

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

        <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-zinc-800">
          {article.image && (
            <img src={article.image} alt={article.title} className="w-full h-full object-cover opacity-80" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-lg border border-zinc-700/80 bg-[#121418]/90 text-[#8B9DC3] text-[11px] font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <h2 className="font-brand-display text-2xl font-extrabold mt-2 text-white">{article.title}</h2>
            <div className="flex items-center gap-3 text-xs font-sans-body text-zinc-300 mt-2">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#6C7EB7]" /> {article.readTime}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#6C7EB7]" /> {article.date}</span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-5 text-xs sm:text-sm">
          {/* Author Header */}
          <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-zinc-800">
            {article.author.avatar ? (
              <img src={article.author.avatar} alt={article.author.name} className="w-10 h-10 rounded-full object-cover border border-[#6C7EB7]" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-[#121418] border border-[#6C7EB7] flex items-center justify-center text-[#6C7EB7] font-bold text-xs">
                {article.author.name[0]}
              </div>
            )}
            <div>
              <div className="font-bold text-sm text-[#091322] dark:text-zinc-100 font-brand-display">{article.author.name}</div>
              <div className="text-xs text-[#6C7EB7] dark:text-[#8B9DC3] font-semibold">{article.author.role}</div>
            </div>
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-3 leading-relaxed font-sans-body text-xs sm:text-sm">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className={darkMode ? 'text-zinc-300' : 'text-slate-600'}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="pt-5 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-sans-body text-slate-500 dark:text-zinc-400">Consult with an Academic Director</span>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-6 py-3 text-xs sm:text-sm font-bold rounded-xl bg-[#6C7EB7] hover:bg-[#5B6EA7] text-white transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
