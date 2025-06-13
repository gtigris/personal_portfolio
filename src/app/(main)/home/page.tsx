'use client';

import AnimatedCard from '@/components/ui/Animation/AnimatedCard';
import Parallax from '@/components/ui/Animation/Parallax';
import GMainVisual from '@/components/ui/MainVisual/GMainVisual';
import GSection from '@/components/ui/Section/GSection';
import GStepper from '@/components/ui/Stepper/GStepper';
import GTypography from '@/components/ui/Typography/GTypography';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <GSection type="black">
        <Parallax speed={-0.2}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <GMainVisual />
          </motion.div>
        </Parallax>
      </GSection>

      <GSection type="white">
        <div className="grid grid-cols-2 overflow-hidden ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#183c28] text-center flex items-center justify-center h-screen"
          >
            <GTypography size={'xl'} weight={'lg'} className="text-white">
              Academic & Professional Background
            </GTypography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center h-screen overflow-auto"
          >
            <GStepper />
          </motion.div>
        </div>
      </GSection>

      {/* //TODO: change this to the carousel instead */}
      <GSection type="black">
        <div className="min-h-screen py-20 px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <GTypography size="xl" weight="lg" className="text-white">
              Portfolio Showcase
            </GTypography>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Grid of animated cards with staggered entrance */}
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1, // Staggered entrance
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
              >
                <AnimatedCard
                  hoverEffect={'zoom'}
                  spotlightEnabled={true}
                  className="bg-white/10 rounded-lg p-6 h-[300px] flex flex-col"
                >
                  <div className="h-40 bg-white/5 rounded mb-4"></div>
                  <GTypography size="lg" weight="md" className="text-white">
                    Project {item}
                  </GTypography>
                  <p className="mt-2 text-white/70 text-sm">
                    Interactive portfolio project with custom animations
                  </p>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </GSection>
    </>
  );
}
