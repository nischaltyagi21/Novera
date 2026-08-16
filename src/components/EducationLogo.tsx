import React from 'react';

interface EducationLogoProps {
  darkMode?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'full' | 'symbol' | 'compact';
}

export const EducationLogo: React.FC<EducationLogoProps> = ({
  darkMode = false,
  className = '',
  size = 'md',
  showText = true,
  variant = 'full',
}) => {
  // Mountain and brand text color: High contrast bright/crisp white in dark mode or on dark footer, deep slate in light mode
  const mountainColor = darkMode ? '#FFFFFF' : '#091322';

  const dimensions = {
    sm: { symbol: 'h-6 w-auto aspect-[1.8/1]', text: 'text-[15px] tracking-[0.25em]', sub: 'text-[7px] tracking-[0.32em]', gap: 'gap-2.5' },
    md: { symbol: 'h-7.5 w-auto aspect-[1.8/1]', text: 'text-[19px] tracking-[0.26em]', sub: 'text-[8.5px] tracking-[0.34em]', gap: 'gap-3' },
    lg: { symbol: 'h-9.5 w-auto aspect-[1.8/1]', text: 'text-[23px] tracking-[0.28em]', sub: 'text-[9.5px] tracking-[0.36em]', gap: 'gap-3.5' },
    xl: { symbol: 'h-12 w-auto aspect-[1.8/1]', text: 'text-3xl tracking-[0.3em]', sub: 'text-[11px] tracking-[0.38em]', gap: 'gap-4' },
  }[size];

  return (
    <div className={`inline-flex items-center ${dimensions.gap} select-none ${className}`}>
      {/* Novera Mountain Logo: Left peak smoothly connected in the middle with the primary tall peak without narrow pinched gap */}
      <svg
        viewBox="0 0 200 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${dimensions.symbol} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      >
        <path
          d="M 4 84 L 54 42 L 78 58 L 122 8 L 196 84 L 122 26 L 78 50 L 54 34 Z"
          fill={mountainColor}
          stroke={mountainColor}
          strokeWidth="0.75"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Wordmark: NOVERA centered directly above EDUCATION */}
      {showText && variant !== 'symbol' && (
        <div className="flex flex-col justify-center items-center text-center">
          <div
            className={`${dimensions.text} font-black uppercase leading-none ${
              darkMode ? 'text-white drop-shadow-xs' : 'text-[#091322]'
            } text-center tracking-[0.24em] font-brand-display transition-colors`}
          >
            NOVERA
          </div>

          <div className="flex items-center justify-center gap-1.5 mt-1.5 w-full">
            <span className="h-[1.5px] flex-1 max-w-[14px] bg-[#6C7EB7] opacity-80" />
            <span
              className={`${dimensions.sub} font-bold uppercase text-[#6C7EB7] dark:text-[#9FB0D8] leading-none whitespace-nowrap text-center font-brand-display tracking-[0.32em]`}
            >
              EDUCATION
            </span>
            <span className="h-[1.5px] flex-1 max-w-[14px] bg-[#6C7EB7] opacity-80" />
          </div>
        </div>
      )}
    </div>
  );
};
