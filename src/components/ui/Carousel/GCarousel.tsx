'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import * as React from 'react';
import GCard from '../Card/GCard';
import GImage from '../Image/GImage';
import { useElementLayout } from '../_hook/useElementLayout';

// Define the structure for card data
interface CardData {
  id: string;
  title: string;
  description: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
}

interface GCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  cardContent?: React.ReactNode; // Keep for backward compatibility
  cardContents?: React.ReactNode[]; // Keep for backward compatibility
  cardsData?: CardData[]; // New data-driven approach
}

export const GCarousel = React.forwardRef<HTMLDivElement, GCarouselProps>(
  ({ className, cardContent, cardContents, cardsData = [], ...props }, ref) => {
    const layout = useElementLayout();
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState<number | null>(null);

    // Determine which approach to use based on provided props
    let contentSource: 'data' | 'contents' | 'content' = 'content';
    if (cardsData && cardsData.length > 0) {
      contentSource = 'data';
    } else if (cardContents && cardContents.length > 0) {
      contentSource = 'contents';
    }

    // Get appropriate length based on content source
    let slidesLength = 0;
    if (contentSource === 'data') {
      slidesLength = cardsData.length;
    } else if (contentSource === 'contents' && cardContents) {
      slidesLength = cardContents.length;
    } else {
      slidesLength = 6; // Default number if using single cardContent
    }

    const realSlides = Array.from({ length: slidesLength }).map((_, i) => i);
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
        className={cn(className, 'w-full overflow-visible')}
        ref={ref}
        setApi={setApi}
        {...props}
      >
        <CarouselContent className="-ml-1 overflow-visible">
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
                  'lg:basis-1/3 transition-all duration-300 flex justify-center items-center px-2 py-4 overflow-visible',
                  !isDummy &&
                    current !== index &&
                    'opacity-50 hover:opacity-75',
                  !isDummy && 'hover:scale-105 group'
                )}
              >
                {isDummy ? (
                  <div
                    className="w-full h-full invisible"
                    aria-hidden="true"
                    aria-label="Carousel placeholder item, not meant to be visible or indexed"
                  />
                ) : (
                  <>
                    <button
                      type="button"
                      className="p-2 m-0 border-none bg-transparent text-left inline-block w-fit h-fit cursor-pointer transition-transform duration-300 ease-in-out overflow-visible"
                      tabIndex={0}
                      onClick={handleClick} //TODO: move this to parent
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault(); // prevent scroll on space
                          handleClick();
                        }
                      }}
                    >
                      {(() => {
                        // Determine what content to render based on source type
                        if (contentSource === 'data') {
                          // Render card from data
                          const cardData =
                            cardsData[
                              index >= 0 ? index % cardsData.length : 0
                            ];
                          return (
                            <div className="overflow-visible">
                              <GCard
                                className="shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden z-10"
                                cardTitle={cardData.title}
                                cardDescription={cardData.description}
                                cardContent={<p>{cardData.content}</p>}
                                cardMainVisual={
                                  <GImage
                                    src={cardData.imageSrc}
                                    alt={cardData.imageAlt}
                                    className="w-full h-full object-cover rounded-t-md transition-transform duration-300 group-hover:scale-105"
                                  />
                                }
                              />
                            </div>
                          );
                        }

                        if (contentSource === 'contents' && cardContents) {
                          // Render from cardContents array
                          return (
                            <div className="overflow-visible">
                              {
                                cardContents[
                                  index >= 0 ? index % cardContents.length : 0
                                ]
                              }
                            </div>
                          );
                        }

                        // Default: render the same cardContent for all items
                        return (
                          <div className="overflow-visible">{cardContent}</div>
                        );
                      })()}
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
