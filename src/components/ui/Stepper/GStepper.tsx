'use client';
import { motion } from 'framer-motion';

export default function GStepper() {
  return (
    <div className="relative size-20">
      <GStep />

      {/* 
      <GRoad /> */}
    </div>
  );
}
export function GStep() {
  return (
    <>
      <motion.svg
        className="absolute inset-0 z-20"
        viewBox="0 0 100 100"
        shapeRendering="geometricPrecision"
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
          strokeDasharray="160 50"
          strokeLinecap="round"
        />
      </motion.svg>
      <div className="absolute inset-0 rounded-full bg-black z-10 size-8 m-auto" />
    </>
  );
}

export function GRoad() {
  return <div className="w-10 h-1 bg-gray-300" />;
}
