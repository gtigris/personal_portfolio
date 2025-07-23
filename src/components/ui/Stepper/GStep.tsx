import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';
import GTypography from '../Typography/GTypography';

//GStep
const ringVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
    rotate: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      bounce: 0.2,
    },
  },
};
const ringVariantsHover = {
  hidden: {
    scale: 0,
    opacity: 1,
  },
  wave: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'loop' as const,
    },
  },
};

export const ringVanishVariants = {
  hidden: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 150, damping: 12 },
  },
  visible: {
    scale: 0,
    opacity: 0,
    transition: { type: 'spring', stiffness: 150, damping: 12 },
  },
};

const spinCWVariants = {
  visible: {
    rotate: 360,
    transition: {
      repeat: Number.POSITIVE_INFINITY,
      ease: 'circInOut',
      duration: 2,
      delay: 0.3, // after scale
    },
  },
};
const spinCCWVariants = {
  visible: {
    rotate: -360,
    transition: {
      repeat: Number.POSITIVE_INFINITY,
      ease: 'linear',
      duration: 2,
      delay: 0.3, // after scale
    },
  },
};

interface GStepProps {
  isActive: boolean;
  onClick?: () => void;
  year: string;
}
export const GStep = React.forwardRef<HTMLDivElement, GStepProps>(
  ({ isActive, onClick, year }, ref) => {
    const [isHovered, setHovered] = React.useState(false);

    const finalAnimation = isActive ? 'visible' : isHovered ? 'wave' : 'hidden';

    return (
      <div
        ref={ref}
        className="relative cursor-pointer group"
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); // prevent scroll on space
            onClick?.();
          }
        }}
      >
        <motion.div
          className="relative w-16 h-16 flex items-center justify-center"
          initial="hidden"
          animate={finalAnimation}
        >
          {/* Hover */}
          <motion.svg
            className="absolute w-full h-full z-25 will-change-transform"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            variants={ringVariantsHover}
            initial={false}
          >
            <motion.circle
              cx="50"
              cy="50"
              r="42"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="butt"
            />
          </motion.svg>
          {/* Outer Ring */}
          <motion.svg
            className="absolute w-full h-full z-10 will-change-transform"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            variants={ringVariants}
            initial={false}
          >
            <motion.circle
              cx="50"
              cy="50"
              r="43"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="33.5 33.5"
              strokeLinecap="butt"
              variants={spinCWVariants}
            />
          </motion.svg>

          {/* Inner Ring */}
          <motion.svg
            className="absolute w-full h-full z-10 will-change-transform"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            variants={ringVariants}
            initial={false}
          >
            <motion.circle
              cx="50"
              cy="50"
              r="26"
              stroke="grey"
              strokeWidth="2"
              strokeDasharray="40.8 40.8"
              strokeLinecap="butt"
              variants={spinCCWVariants}
            />
          </motion.svg>

          <motion.div
            className="absolute w-16 h-16 bg-white rounded-full z-20 border-2 border-black"
            variants={ringVanishVariants}
          />

          <div
            className={cn(
              'absolute w-6 h-6 bg-black rounded-full z-30 group-hover:bg-gray-700 transition-all'
            )}
          />
        </motion.div>

        <GTypography
          size="lg"
          weight="lg"
          className="absolute top-1/2 -translate-y-1/2 z-0 pointer-events-none left-[calc(100%+10px)]"
        >
          {year}
        </GTypography>
      </div>
    );
  }
);
GStep.displayName = 'GStep';
