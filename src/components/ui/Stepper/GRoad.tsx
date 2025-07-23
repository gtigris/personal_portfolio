import { motion } from 'framer-motion';

export function GRoad() {
  return (
    <>
      <motion.svg
        viewBox="0 0 40 60"
        className="w-4 h-[60px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
        focusable="false"
      >
        <motion.line
          x1="10"
          y1="0"
          x2="10"
          y2="60"
          stroke="black"
          strokeWidth="4"
        />

        <motion.line
          x1="20"
          y1="0"
          x2="20"
          y2="60"
          stroke="black"
          strokeWidth="10"
          strokeDasharray="24 24"
          animate={{
            strokeDashoffset: [0, -48],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'loop',
            ease: 'linear',
            duration: 0.8,
          }}
        />

        <motion.line
          x1="30"
          y1="0"
          x2="30"
          y2="60"
          stroke="black"
          strokeWidth="4"
        />
      </motion.svg>
    </>
  );
}
