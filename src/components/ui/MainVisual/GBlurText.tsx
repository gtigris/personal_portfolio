"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface GBlurTextProps {
  text: string[]; // required array
  className?: string;
  durationPerLine?: number; // optional control
}

export default function GBlurText({
  text,
  className,
  durationPerLine = 3000,
}: GBlurTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % text.length);
    }, durationPerLine);
    return () => clearInterval(interval);
  }, [text.length, durationPerLine]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={cn("inset-0", className)}
        >
          {text[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
