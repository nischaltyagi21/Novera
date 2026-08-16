import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export interface CampusItem {
  id: number;
  title: string;
  shortName: string;
  location: string;
  landmark: string;
  url: string;
  description: string;
}

export const CAMPUS_IMAGES: CampusItem[] = [
  {
    id: 1,
    title: 'University of Oxford',
    shortName: 'Oxford',
    location: 'Oxford, United Kingdom',
    landmark: 'Radcliffe Camera & Bodleian Library',
    url: 'https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=2560&q=95',
    description: 'The historic collegiate heart of 900+ years of tutorial scholarship and discovery.'
  },
  {
    id: 2,
    title: 'University of Cambridge',
    shortName: 'Cambridge',
    location: 'Cambridge, United Kingdom',
    landmark: "King's College Chapel & River Cam",
    url: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=2560&q=95',
    description: 'Cradle of Newtonian physics, pure mathematics, and classical academic rigor.'
  },
  {
    id: 3,
    title: 'Harvard University',
    shortName: 'Harvard',
    location: 'Cambridge, Massachusetts, USA',
    landmark: 'Harvard Yard & Widener Library',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2560&q=95',
    description: 'Premier Ivy League institution fostering transformative global leadership.'
  },
  {
    id: 4,
    title: 'Massachusetts Institute of Technology (MIT)',
    shortName: 'MIT',
    location: 'Cambridge, Massachusetts, USA',
    landmark: 'Killian Court & Great Dome',
    url: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=2560&q=95',
    description: 'Global epicenter of science, computation, and breakthrough engineering.'
  },
  {
    id: 5,
    title: 'Stanford University',
    shortName: 'Stanford',
    location: 'Stanford, California, USA',
    landmark: 'Memorial Court & Historic Main Quad',
    url: 'https://images.unsplash.com/photo-1583373834259-46cc92173cb7?auto=format&fit=crop&w=2560&q=95',
    description: 'Silicon Valley powerhouse for interdisciplinary research and bold exploration.'
  },
  {
    id: 6,
    title: 'Princeton University',
    shortName: 'Princeton',
    location: 'Princeton, New Jersey, USA',
    landmark: 'Nassau Hall & Gothic Blair Quad',
    url: 'https://images.unsplash.com/photo-1592280771190-4e29c0477342?auto=format&fit=crop&w=2560&q=95',
    description: 'Renowned center for pure academic scholarship, humanities, and research.'
  },
  {
    id: 7,
    title: 'Yale University',
    shortName: 'Yale',
    location: 'New Haven, Connecticut, USA',
    landmark: 'Sterling Memorial Quad & Harkness Tower',
    url: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=2560&q=95',
    description: 'Collegiate Gothic campus cultivating intellectual curiosity and leadership.'
  },
  {
    id: 8,
    title: 'Imperial College London',
    shortName: 'Imperial',
    location: 'South Kensington, London, UK',
    landmark: "Queen's Tower & Exhibition Road",
    url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2560&q=95',
    description: 'World-leading powerhouse in STEM, medical discovery, and business innovation.'
  },
  {
    id: 9,
    title: 'Columbia University',
    shortName: 'Columbia',
    location: 'New York City, New York, USA',
    landmark: 'Low Memorial Library & Butler Quad',
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2560&q=95',
    description: 'Ivy League bastion of core humanities, medicine, and international affairs.'
  },
  {
    id: 10,
    title: 'University College London (UCL)',
    shortName: 'UCL',
    location: 'Bloomsbury, London, UK',
    landmark: 'Portico Quad & Wilkins Building',
    url: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=2560&q=95',
    description: 'London’s global university pioneering progressive research and humanistic arts.'
  }
];

interface CampusBackgroundProps {
  darkMode: boolean;
  currentIdx?: number;
  onCampusChange?: (index: number) => void;
}

export const CampusBackground: React.FC<CampusBackgroundProps> = ({
  darkMode,
  currentIdx: controlledIdx,
  onCampusChange
}) => {
  const [internalIdx, setInternalIdx] = useState(0);

  const activeIdx = controlledIdx !== undefined ? controlledIdx : internalIdx;
  const currentCampus = CAMPUS_IMAGES[activeIdx] || CAMPUS_IMAGES[0];

  useEffect(() => {
    if (controlledIdx !== undefined) return;
    const interval = setInterval(() => {
      setInternalIdx((prev) => {
        const next = (prev + 1) % CAMPUS_IMAGES.length;
        if (onCampusChange) onCampusChange(next);
        return next;
      });
    }, 4000); // Faster, energetic rotation as requested
    return () => clearInterval(interval);
  }, [controlledIdx, onCampusChange]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden w-full h-full">
      {/* Dynamic University Campus Imagery with Cinematic Ken Burns Zoom In/Out Motion */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentCampus.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {currentCampus.url && (
            <motion.img
              src={currentCampus.url}
              alt={currentCampus.title}
              className="w-full h-full object-cover object-center"
              initial={{ scale: 1, x: 0, y: 0 }}
              animate={{
                scale: [1, 1.09, 1.03],
                x: [0, -12, 8],
                y: [0, 8, -6]
              }}
              transition={{
                duration: 6.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              referrerPolicy="no-referrer"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Directional left-to-right fade: strictly on the left half (stops by 45%), keeping right section completely clean and transparent */}
      <div
        className={`absolute inset-0 z-10 transition-colors duration-700 pointer-events-none ${
          darkMode
            ? 'bg-gradient-to-r from-[#121418]/80 via-[#121418]/30 via-25% to-transparent to-45%'
            : 'bg-gradient-to-r from-white/80 via-white/30 via-25% to-transparent to-45%'
        }`}
      />
    </div>
  );
};
