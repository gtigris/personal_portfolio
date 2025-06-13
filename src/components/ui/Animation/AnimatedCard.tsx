'use client';

import { motion } from 'framer-motion';
import type React from 'react';
import { useState } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightEnabled?: boolean;
  spotlightSize?: number; // Controls the size of the spotlight (0-100)
  spotlightIntensity?: number; // Controls the intensity/brightness (0-100)
  hoverEffect?: 'zoom' | 'lift' | 'glow' | 'none';
}

export default function AnimatedCard({
  children,
  className = '',
  spotlightEnabled = true,
  spotlightSize = 100,
  spotlightIntensity = 20,
  hoverEffect = 'lift',
}: AnimatedCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse move for spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!spotlightEnabled) return;

    // Get the position relative to the current element
    const rect = e.currentTarget.getBoundingClientRect();

    // Calculate exact pixel position within the element
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update position state immediately to ensure smooth tracking
    setPosition({ x, y });
  };

  // Get hover animations based on the selected effect
  const getHoverAnimations = () => {
    switch (hoverEffect) {
      case 'zoom':
        return { scale: 1.05 };
      case 'lift':
        return { y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' };
      case 'glow':
        return { boxShadow: '0 0 20px rgba(255,255,255,0.4)' };
      default:
        return {};
    }
  };

  return (
    <motion.div
      className={`${className} relative overflow-hidden`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={getHoverAnimations()}
      // Make the card follow the mouse slightly for a more interactive feel
      animate={
        isHovered
          ? {
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            }
          : {
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }
      }
    >
      {/* Spotlight overlay */}
      {spotlightEnabled && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: isHovered
              ? `radial-gradient(
                  circle at ${position.x}px ${position.y}px, 
                  rgba(255,255,255,${spotlightIntensity / 100}) 0%, 
                  rgba(255,255,255,${spotlightIntensity / 300}) ${
                  spotlightSize / 3
                }%, 
                  transparent ${spotlightSize}%
                )`
              : 'none',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        />
      )}
      {children}
    </motion.div>
  );
}
