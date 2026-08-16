import React from 'react';
import { motion } from 'motion/react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  glare?: boolean;
  glowColor?: string;
  onClick?: () => void;
  id?: string;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  onClick,
  id,
}) => {
  return (
    <motion.div
      id={id}
      onClick={onClick}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      whileTap={{ scale: 0.99 }}
      className={`relative ${className}`}
    >
      <div className="w-full h-full relative">
        {children}
      </div>
    </motion.div>
  );
};
