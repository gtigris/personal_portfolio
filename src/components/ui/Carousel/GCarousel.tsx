"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const GCarousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState<number | null>(null);
  const realSlides = Array.from({ length: 5 }).map((_, i) => i); // [0, 1, 2, 3, 4]
  const allSlides = [-1, ...realSlides, -2]; // Add dummy slides

  React.useEffect(() => {
    if (!api) return;

    const updateCenteredIndex = () => {
      const snap = api.selectedScrollSnap();
      const adjustedSnap = snap + 1;
      const maxSnap = realSlides.length + 1;

      if (adjustedSnap === maxSnap) {
        setCurrent(null);
      } else {
        setCurrent(adjustedSnap - 1);
      }
    };

    updateCenteredIndex();
    api.on("select", updateCenteredIndex);
    api.on("resize", updateCenteredIndex);

    return () => {
      api.off("select", updateCenteredIndex);
      api.off("resize", updateCenteredIndex);
    };
  }, [api, realSlides.length]);

  return (
    <Carousel
      className={cn(className, "w-full")}
      ref={ref}
      setApi={setApi}
      {...props}
    >
      <CarouselContent className="-ml-1">
        {allSlides.map((index, mappedIndex) => {
          const isDummy = index === -1 || index === -2;

          return (
            <CarouselItem
              key={mappedIndex}
              className={cn(
                "pl-1 md:basis-1/2 lg:basis-1/3 transition-all duration-300",
                !isDummy && current !== index && "opacity-50"
              )}
            >
              <div className="p-1">
                {isDummy ? (
                  <div className="aspect-square w-full h-full invisible" />
                ) : (
                  <Card>
                    <CardContent
                      className="flex aspect-square items-center justify-center p-6"
                      onClick={() => {
                        if (current === index) {
                          alert(`Clicked on slide ${index + 1}`);
                        } else {
                          api?.scrollTo(index);
                        }
                      }}
                    >
                      <span className="text-2xl font-semibold">
                        {index + 1} (current:{" "}
                        {current !== null ? current + 1 : 0})
                      </span>
                    </CardContent>
                  </Card>
                )}
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
});

GCarousel.displayName = "GCarousel";
