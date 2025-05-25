"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface GSlotTextProps {
  text: string;
  className?: string;
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function getRandomChar() {
  return characters[Math.floor(Math.random() * characters.length)];
}

export default function GSlotText({ text, className }: GSlotTextProps) {
  const [displayed, setDisplayed] = useState(Array(text.length).fill(""));
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  // Initial typing animation
  useEffect(() => {
    if (!inView || hasAnimated) return;

    if (currentCharIndex >= text.length) {
      setHasAnimated(true);
      return;
    }

    let steps = 0;
    const maxSteps = Math.floor(Math.random() * 5);

    const intervalId = setInterval(() => {
      setDisplayed((prev) =>
        prev.map((char, i) => {
          if (i < currentCharIndex) return text[i];
          if (i === currentCharIndex) return getRandomChar();
          return "";
        })
      );

      steps++;
      if (steps > maxSteps) {
        clearInterval(intervalId);
        setDisplayed((prev) =>
          prev.map((char, i) => (i === currentCharIndex ? text[i] : char))
        );
        setCurrentCharIndex((prev) => prev + 1);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [inView, hasAnimated, currentCharIndex, text]);

  // Flicker glitch every 10s after full animation
  useEffect(() => {
    if (!hasAnimated) return;

    const glitchInterval = setInterval(() => {
      setIsGlitching(true);

      const flicker = setInterval(() => {
        setDisplayed((prev) =>
          prev.map((char, i) =>
            Math.random() < 0.05 ? getRandomChar() : text[i]
          )
        );
      }, 60);

      setTimeout(() => {
        clearInterval(flicker);
        setDisplayed(text.split(""));
        setIsGlitching(false);
      }, 400); // end glitch after short burst
    }, 5000); // every 10s

    return () => clearInterval(glitchInterval);
  }, [hasAnimated, text]);

  return (
    <motion.div
      ref={ref}
      animate={
        !hasAnimated || isGlitching ? { y: [0, -2, 2, -1, 1, 0] } : { y: 0 }
      }
      transition={{
        duration: 0.3,
        repeat: !hasAnimated || isGlitching ? Infinity : 0,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {displayed.map((char, i) => (
        <span key={i} className={cn(className)}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </motion.div>
  );
}
