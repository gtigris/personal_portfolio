"use client";
import { motion } from "framer-motion";

export default function GStepper() {
  return (
    <div className="flex flex-col items-center">
      <GStep onClick={() => console.log("Step 1 clicked")} />
      <GRoad />
      <GStep onClick={() => console.log("Step 2 clicked")} />
    </div>
  );
}

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
      type: "spring",
      bounce: 0.2,
    },
  },
};

export const ringVanishVariants = {
  hidden: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 150, damping: 12 },
  },
  visible: {
    scale: 0,
    opacity: 0,
    transition: { type: "spring", stiffness: 150, damping: 12 },
  },
};

const spinCWVariants = {
  visible: {
    rotate: 360,
    transition: {
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
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
      ease: "linear",
      duration: 2,
      delay: 0.3, // after scale
    },
  },
};

interface GStepProps {
  onClick?: () => void;
}
export function GStep({ onClick }: GStepProps) {
  return (
    <div
      className="relative cursor-pointer"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault(); // prevent scroll on space
          onClick?.();
        }
      }}
    >
      <motion.div
        className="relative w-20 h-20 flex items-center justify-center"
        initial="hidden"
        whileHover="visible" // hover trigger
        // variants={{
        //   hidden: {},
        //   visible: {},
        // }}
      >
        {/* Outer Ring */}
        <motion.svg
          className="absolute w-full h-full z-10 will-change-transform"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          variants={ringVariants}
        >
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="35.34 35.34"
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
        >
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            stroke="grey"
            strokeWidth="2"
            strokeDasharray="47.125 47.125"
            strokeLinecap="butt"
            variants={spinCCWVariants}
          />
        </motion.svg>

        {/* Black Center (hover trigger) */}
        {/* <div className="absolute"> */}
        <motion.div
          className="absolute w-20 h-20 bg-white rounded-full z-20 border-2 border-black"
          variants={ringVanishVariants}
        />

        {/* <div className="absolute w-20 h-20 bg-gray-300 rounded-full z-0 border-2 border-black" /> */}
        <div className="absolute w-8 h-8 bg-black rounded-full z-20" />
        {/* </div> */}
      </motion.div>
    </div>
  );
}

export function GRoad() {
  return (
    <>
      <motion.svg
        viewBox="0 0 40 200"
        className="w-4 h-[200px]"
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
          y2="200"
          stroke="black"
          strokeWidth="4"
        />

        <motion.line
          x1="20"
          y1="0"
          x2="20"
          y2="200"
          stroke="black"
          strokeWidth="10"
          strokeDasharray="40 40"
          animate={{
            strokeDashoffset: [0, -80],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
            duration: 1,
          }}
        />

        <motion.line
          x1="30"
          y1="0"
          x2="30"
          y2="200"
          stroke="black"
          strokeWidth="4"
        />
      </motion.svg>
    </>
  );
}
