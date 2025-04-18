'use client';
import { motion } from 'framer-motion';

export default function GStepper() {
  return (
    <div className="flex items-center">
      <GStep />
      <GRoad />
      <GStep />
    </div>
  );
}

export function GStep() {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      {/* animated circle */}
      <motion.svg
        className="w-full h-full z-10"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
          duration: 2,
        }}
      >
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="black"
          strokeWidth="2"
          strokeDasharray="150 30"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* black ball in the center */}
      <div className="absolute w-8 h-8 bg-black rounded-full z-20" />
    </div>
  );
}

export function GRoad() {
  return (
    <>
      <motion.svg
        viewBox="0 0 200 40"
        className="w-[200px] h-4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
        focusable="false"
      >
        <motion.line
          x1="0"
          y1="20"
          x2="200"
          y2="20"
          stroke="black"
          strokeWidth="10"
          strokeDasharray="40 40" // 10px dash, 10px gap
          animate={{
            strokeDashoffset: [0, -80], // move dash to the left
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'loop',
            ease: 'linear',
            duration: 1,
          }}
        />
      </motion.svg>
    </>
  );
}
