import { motion } from 'framer-motion';
import { useState } from 'react';

interface Props {
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
}
export default function GFlipcard({ frontContent, backContent }: Props) {
  const [flip, setFlip] = useState(false);
  return (
    <button
      type="button"
      className="w-full h-full cursor-pointer perspective-1000 border-0 p-0 bg-transparent"
      onClick={() => setFlip((prevState) => !prevState)}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        transition={{ duration: 0.7 }}
        animate={{ rotateY: flip ? 180 : 0 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-[#183c28] flex items-center justify-center backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {frontContent}
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-black flex items-center justify-center backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <span className="text-white font-bold">{backContent}</span>
        </motion.div>
      </motion.div>
    </button>
  );
}
