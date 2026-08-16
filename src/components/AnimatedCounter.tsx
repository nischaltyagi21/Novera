import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number | string;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Parse numeric target
  let targetNumber = 0;
  let detectedSuffix = suffix;
  let detectedPrefix = prefix;

  if (typeof value === 'number') {
    targetNumber = value;
  } else {
    // Extract numbers like "94%", "500+", "1500+", "4.9", "98.4%", "12,000+"
    const cleanStr = value.trim();
    if (cleanStr.includes('/')) {
      // Special rating case e.g. "4.9 / 5.0"
      const match = cleanStr.match(/([\d.]+)\s*\/\s*([\d.]+)/);
      if (match) {
        targetNumber = parseFloat(match[1]);
        detectedSuffix = ` / ${match[2]}`;
      }
    } else {
      const match = cleanStr.match(/([^\d.]*)([\d,.]+)([^\d.]*)/);
      if (match) {
        detectedPrefix = prefix || match[1];
        targetNumber = parseFloat(match[2].replace(/,/g, ''));
        detectedSuffix = suffix || match[3];
      }
    }
  }

  // Detect decimal places if not specified
  const numDecimals = decimals || (targetNumber.toString().includes('.') ? targetNumber.toString().split('.')[1].length : 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();
          const startVal = 0;

          const updateCounter = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = startVal + (targetNumber - startVal) * easeProgress;
            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setDisplayValue(targetNumber);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, duration, hasAnimated]);

  const formattedNumber = displayValue.toLocaleString(undefined, {
    minimumFractionDigits: numDecimals,
    maximumFractionDigits: numDecimals,
  });

  return (
    <span ref={elementRef} className={`tabular-nums ${className}`}>
      {detectedPrefix}
      {formattedNumber}
      {detectedSuffix}
    </span>
  );
};
