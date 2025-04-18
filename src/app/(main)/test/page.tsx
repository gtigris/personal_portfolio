import { GButton } from '@/components/ui/Button/GButton';
import GCard from '@/components/ui/Card/GCard';
import { GCarousel } from '@/components/ui/Carousel/GCarousel';
import { GHeader } from '@/components/ui/Header/GHeader';
import GImage from '@/components/ui/Image/GImage';
import GIcon from '@/components/ui/gIcon';
import { cn } from '@/lib/utils';

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
          <GIcon type="chevron-right" />
          <GIcon type="arrow-right" />
          <GIcon type="trash" />
          <GIcon type="star" />
        </div>
        <div className={cn(' mt-4 border-t-2 border-slate-700')}>
          <h2>GHeader</h2>
          <GHeader />
        </div>
        <div className={cn('mt-4 border-t-2 border-slate-700')}>
          <h2>GCarousel</h2>
          <div className={cn('flex justify-center align-middle')}>
            <GCarousel
              cardContent={
                <div className="px-10">
                  <GCard
                    className="mx-4"
                    cardTitle={'akakara'}
                    cardDescription={'hotpot restaurant'}
                    cardContent={'3/5'}
                    cardMainVisual={
                      <GImage
                        src="/mainVisual.jpg"
                        alt="mainVisual"
                        objectFit="cover"
                      />
                    }
                  />
                </div>
              }
            />
          </div>
        </div>

        <div className={cn('mt-4 border-t-2 border-slate-700')}>
          <h2>GCard</h2>
          <div className=" w-full bg-gray-500 flex align-middle justify-center">
            <GCard
              cardTitle={'akakara'}
              cardDescription={'hotpot restaurant'}
              cardContent={'3/5'}
              cardMainVisual={
                <GImage
                  src="/mainVisual.jpg"
                  alt="mainVisual"
                  objectFit="cover"
                />
              }
            />
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
