import { motion } from "framer-motion";

export function GRoad() {
  return (
    <>
      <motion.svg
        viewBox="0 0 40 100"
        className="w-4 h-[100px]"
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
          y2="100"
          stroke="black"
          strokeWidth="4"
        />

        <motion.line
          x1="20"
          y1="0"
          x2="20"
          y2="100"
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
          y2="100"
          stroke="black"
          strokeWidth="4"
        />
      </motion.svg>
    </>
  );
}
