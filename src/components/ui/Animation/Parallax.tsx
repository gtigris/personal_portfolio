'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { type ReactNode, useRef } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // Speed factor, positive values move slower, negative values move faster
  className?: string;
}

export default function Parallax({
  children,
  speed = 0.5,
  className = '',
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate parallax effect
  // Positive speed values create a "moving slower than scroll" effect
  // Negative speed values create a "moving faster than scroll" effect
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <div ref={ref} className={`${className} relative overflow-hidden`}>
      <motion.div style={{ y }} className="relative">
        {children}
      </motion.div>
    </div>
  );
}
