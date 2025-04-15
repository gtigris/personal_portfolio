'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import { useElementLayout } from '../_hook/useElementLayout';

interface GCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  cardContent: React.ReactNode;
}

export const GCarousel = React.forwardRef<HTMLDivElement, GCarouselProps>(
  ({ className, cardContent, ...props }, ref) => {
    const layout = useElementLayout();
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState<number | null>(null);
    const realSlides = Array.from({ length: 5 }).map((_, i) => i); // [0, 1, 2, 3, 4]
    const allSlides = layout !== 'lg' ? realSlides : [-1, ...realSlides, -2];

    React.useEffect(() => {
      if (!api) return;

      const updateCenteredIndex = () => {
        const snap = api.selectedScrollSnap();
        let newCurrent: number | null = null;

        if (layout === 'lg') {
          const adjustedSnap = snap + 1;
          const maxSnap = realSlides.length + 1;
          if (adjustedSnap === maxSnap) {
            newCurrent = null;
          } else {
            newCurrent = adjustedSnap - 1;
          }
        } else {
          newCurrent = snap;
        }

        // Only update if changed
        if (current !== newCurrent) {
          setCurrent(newCurrent);
        }
      };
      updateCenteredIndex();

      api.on('select', updateCenteredIndex);
      api.on('resize', updateCenteredIndex);

      return () => {
        api.off('select', updateCenteredIndex);
        api.off('resize', updateCenteredIndex);
      };
    }, [api, layout, realSlides.length, current]);

    return (
      <Carousel
        className={cn(className, 'w-full')}
        ref={ref}
        setApi={setApi}
        {...props}
      >
        <CarouselContent className="-ml-1">
          {allSlides.map((index) => {
            const isDummy = index === -1 || index === -2;
            const handleClick = () => {
              if (current === index) {
                alert(`Clicked on slide ${index + 1}`);
              } else {
                api?.scrollTo(index);
              }
            };

            return (
              <CarouselItem
                key={index}
                className={cn(
                  'lg:basis-1/3 transition-all duration-300 flex justify-center items-center',
                  !isDummy && current !== index && 'opacity-50'
                )}
              >
                {isDummy ? (
                  <div className="w-full h-full invisible" />
                ) : (
                  <>
                    <button
                      type="button"
                      className="p-0 m-0 border-none bg-transparent text-left inline-block w-fit h-fit cursor-pointer"
                      tabIndex={0}
                      onClick={handleClick} //TODO: move this to parent
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault(); // prevent scroll on space
                          handleClick();
                        }
                      }}
                    >
                      {cardContent}
                    </button>
                  </>
                )}
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    );
  }
);

GCarousel.displayName = 'GCarousel';
