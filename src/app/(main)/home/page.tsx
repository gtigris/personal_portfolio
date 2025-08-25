'use client';

import Parallax from '@/components/ui/Animation/Parallax';
import { GCarousel } from '@/components/ui/Carousel/GCarousel';
import GFlipcard from '@/components/ui/Flipcard/GFlipcard';
import GMainVisual from '@/components/ui/MainVisual/GMainVisual';
import GWorldMap from '@/components/ui/Map/GWorldMap';
import GSection from '@/components/ui/Section/GSection';
import GStepper from '@/components/ui/Stepper/GStepper';
import GTypography from '@/components/ui/Typography/GTypography';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <GSection type="black" className="h-4/5">
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#183c28] text-center flex flex-col items-center justify-start h-screen pt-20"
        >
          <GTypography size={'xl'} weight={'lg'} className="text-white mb-4">
            My Journey
          </GTypography>

          {/* Interactive world map with key locations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-4/5 h-4/5 mb-4 rounded-xl"
          >
            {/* Import dynamic to avoid SSR issues with mapbox */}
            <GWorldMap className="w-full h-full" />
          </motion.div>
        </motion.div>
      </GSection>
      <GSection type="white">
        <div className="grid grid-cols-2 overflow-hidden ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black text-center flex items-center justify-center h-screen"
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

      <GSection type="white">
        <div className="min-h-screen py-20 px-8 bg-[#183c28]">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <GTypography size="xl" weight="lg" className="text-white">
              My Tech Stack
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
                  imageSrc: '/next.png',
                  imageAlt: 'Next.js',
                },
                {
                  id: 'typescript',
                  title: 'TypeScript',
                  description: 'Typed JavaScript',
                  content:
                    'Strong typing, interfaces, and advanced type operations',
                  imageSrc: '/typescript.png',
                  imageAlt: 'TypeScript',
                },
                {
                  id: 'tailwind',
                  title: 'Tailwind CSS',
                  description: 'Utility-First CSS',
                  content:
                    'Responsive design, custom themes, and component styling',
                  imageSrc: '/tailwindcss.png',
                  imageAlt: 'Tailwind CSS',
                },
                {
                  id: 'react',
                  title: 'React',
                  description: 'UI Library',
                  content:
                    'Component architecture, hooks, and state management',
                  imageSrc: '/reactjs.jpg',
                  imageAlt: 'React',
                },
                {
                  id: 'vue',
                  title: 'Vue.js',
                  description: 'Progressive Framework',
                  content:
                    'Reactive data binding, composition API, and Single File Components',
                  imageSrc: '/vuejs.png',
                  imageAlt: 'Vue.js',
                },
                {
                  id: 'csharp',
                  title: 'C#',
                  description: 'Backend Language',
                  content: 'ASP.NET Core, Entity Framework, and REST APIs',
                  imageSrc: '/csharp.jpeg',
                  imageAlt: 'C#',
                },
              ]}
              className="mx-4"
            />
          </motion.div>
        </div>
      </GSection>
      <GSection type="white" className="h-screen">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className=" h-full text-center flex flex-col items-center justify-start pt-8"
        >
          <GTypography size={'xl'} weight={'lg'} className="text-black mb-16">
            Languages
          </GTypography>
          <div className="grid grid-cols-3 flex-1 w-full">
            <div className="flex items-center justify-center h-full">
              <GFlipcard
                frontContent={
                  <span className="text-white font-bold text-5xl">
                    Indonesian
                  </span>
                }
                backContent={
                  <span className="text-white font-bold text-2xl">
                    Born and raised in Indonesia (Native Level)
                  </span>
                }
              />
            </div>
            <div className="flex items-center justify-center h-full">
              <GFlipcard
                frontContent={
                  <span className="text-white font-bold text-5xl">English</span>
                }
                backContent={
                  <span className="text-white font-bold text-2xl">
                    Studied engineering in the United States (Fluent Level)
                  </span>
                }
              />
            </div>
            <div className="flex items-center justify-center h-full">
              <GFlipcard
                frontContent={
                  <span className="text-white font-bold text-5xl">
                    Japanese
                  </span>
                }
                backContent={
                  <span className="text-white font-bold text-2xl">
                    N2 Certification (Proficient Level)
                  </span>
                }
              />
            </div>
          </div>
        </motion.div>
      </GSection>
    </>
  );
}
