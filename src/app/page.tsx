import { GButton } from '@/components/ui/gButton';
import GHeader from '@/components/ui/Header/GHeader';

import GIcon from '@/components/ui/gIcon';
import { cn } from '@/lib/utils';
import { GCarousel } from '@/components/ui/Carousel/GCarousel';
import GMainVisual from '@/components/ui/MainVisual/GMainVisual';
import GCard from '@/components/ui/Card/GCard';
import GImage from '@/components/ui/Image/GImage';

export default function HomePage() {
  return (
    <>
      <div className={cn('bg-slate-200 w-dvw min-h-dvh')}>
        <div>
          <h1 className={cn('text-center text-7xl font-bold')}>Modules</h1>
          <h2>GButton</h2>
          <GButton>Default</GButton>
          <GButton variant="destructive">Destructive</GButton>
          <GButton variant="outline">Outline</GButton>
          <GButton variant="secondary">Secondary</GButton>
          <GButton variant="ghost">Ghost</GButton>
          <GButton variant="link">Link</GButton>
        </div>
        <div className={cn(' mt-4 border-t-2 border-slate-700')}>
          <h2>GIcon</h2>
          <GIcon type="chevron-right"></GIcon>
          <GIcon type="arrow-right"></GIcon>
          <GIcon type="trash"></GIcon>
          <GIcon type="star"></GIcon>
        </div>
        <div className={cn(' mt-4 border-t-2 border-slate-700')}>
          <h2>GHeader</h2>
          <GHeader />
        </div>
        <div className={cn('mt-4 border-t-2 border-slate-700')}>
          <h2>GCarousel</h2>
          <div className={cn('flex justify-center align-middle')}>
            <GCarousel />
          </div>
        </div>
        <div className={cn('mt-4 border-t-2 border-slate-700')}>
          <h2>GMainVisual</h2>
          <div>
            <GMainVisual />
          </div>
        </div>
        <div className={cn('mt-4 border-t-2 border-slate-700')}>
          <h2>GCard</h2>
          <div className=" w-full bg-gray-500 flex align-middle justify-center">
            <GCard />
          </div>
        </div>
        <div className={cn('mt-4 border-t-2 border-slate-700 ')}>
          <h2>GImage</h2>
          <div className="relative h-[400px]">
            <GImage
              src="/mainVisual.jpg"
              alt={'mainVisual'}
              objectFit="contain"
            />
          </div>
        </div>
        <div className={cn('mt-4 border-t-2 border-slate-700 ')}>
          <h2>GComponent</h2>
          <div>GComponent Content</div>
        </div>
      </div>
    </>
  );
}
