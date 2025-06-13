'use client';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
}: AnimatedTextProps) {
  // Simple text animation that doesn't rely on splitting text
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: 'easeOut',
      }}
      viewport={{ once: true }}
    >
      {text}
    </motion.div>
  );
}
