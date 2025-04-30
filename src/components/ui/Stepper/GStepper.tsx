"use client";
import { motion } from "framer-motion";

import React from "react";
import { GStepperPopover } from "./GStepperPopover";
import GStepperPopoverContent from "./GStepperPopoverContent";
import GList from "../List/GList";
//TODO: create a reverse colored one for job experience
export default function GStepper() {
  return (
    <div className="flex flex-col items-center">
      <GStepperPopover
        popoverSide="right"
        popoverContent={
          <GStepperPopoverContent
            badges={["Education", "Bachelor's Degree"]}
            title="San Jose State University"
            location="San Jose, California"
            year="(2017-2020)"
            subjectMajor="B.S. Industrial Technology and Computer Networking"
            gpa={"3.71 / 4.0"}
          >
            <GList
              type="unordered"
              lists={[
                "Magna Cum Laude",
                "President's Scholar",
                "Dean's Scholar",
              ]}
              listStyle="list-disc list-inside"
            />
          </GStepperPopoverContent>
        }
      >
        <GStep onClick={() => console.log("Step 1 clicked")} />
      </GStepperPopover>
      <GRoad />
      <GStepperPopover
        popoverSide="right"
        popoverContent={
          <GStepperPopoverContent
            badges={["Education", "Bachelor's Degree"]}
            title="San Jose State University"
            location="San Jose, California"
            year="(2017-2020)"
            subjectMajor="B.S. Industrial Technology and Computer Networking"
            gpa={"3.71 / 4.0"}
          >
            <GList
              type="unordered"
              lists={[
                "Magna Cum Laude",
                "President's Scholar",
                "Dean's Scholar",
              ]}
              listStyle="list-disc list-inside"
            />
          </GStepperPopoverContent>
        }
      >
        <GStep onClick={() => console.log("Step 1 clicked")} />
      </GStepperPopover>
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
      ease: "circInOut",
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
export const GStep = React.forwardRef<HTMLDivElement, GStepProps>(
  ({ onClick }, ref) => {
    return (
      <div
        ref={ref}
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
          whileHover="visible"
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
              r="49"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="37.5 37.5"
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

          <motion.div
            className="absolute w-20 h-20 bg-white rounded-full z-20 border-2 border-black"
            variants={ringVanishVariants}
          />

          <div className="absolute w-8 h-8 bg-black rounded-full z-20" />
        </motion.div>
      </div>
    );
  }
);
GStep.displayName = "GStep";

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
