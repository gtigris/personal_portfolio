'use client';

import Parallax from '@/components/ui/Animation/Parallax';
import { GCarousel } from '@/components/ui/Carousel/GCarousel';
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
              Technical Skills
            </GTypography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <GCarousel
              cardsData={[
                {
                  id: 'nextjs',
                  title: 'Next.js',
                  description: 'React Framework',
                  content:
                    'Advanced proficiency with SSR, API routes, and app router',
                  imageSrc: '/next.svg',
                  imageAlt: 'Next.js',
                },
                {
                  id: 'typescript',
                  title: 'TypeScript',
                  description: 'Typed JavaScript',
                  content:
                    'Strong typing, interfaces, and advanced type operations',
                  imageSrc: '/file.svg',
                  imageAlt: 'TypeScript',
                },
                {
                  id: 'tailwind',
                  title: 'Tailwind CSS',
                  description: 'Utility-First CSS',
                  content:
                    'Responsive design, custom themes, and component styling',
                  imageSrc: '/window.svg',
                  imageAlt: 'Tailwind CSS',
                },
                {
                  id: 'react',
                  title: 'React',
                  description: 'UI Library',
                  content:
                    'Component architecture, hooks, and state management',
                  imageSrc: '/globe.svg',
                  imageAlt: 'React',
                },
                {
                  id: 'vue',
                  title: 'Vue.js',
                  description: 'Progressive Framework',
                  content:
                    'Reactive data binding, composition API, and Single File Components',
                  imageSrc: '/file.svg',
                  imageAlt: 'Vue.js',
                },
                {
                  id: 'csharp',
                  title: 'C#',
                  description: 'Backend Language',
                  content: 'ASP.NET Core, Entity Framework, and REST APIs',
                  imageSrc: '/window.svg',
                  imageAlt: 'C#',
                },
              ]}
              className="mx-4"
            />
          </motion.div>
        </div>
      </GSection>
    </>
  );
}
