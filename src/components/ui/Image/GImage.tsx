import { cn } from '@/lib/utils';
import Image, { type ImageProps } from 'next/image';
import React from 'react';

interface GImageProps extends ImageProps {
  objectFit?: 'contain' | 'cover';
  src: string;
  alt: string;
  intrinsicWidth?: number;
  intrinsicHeight?: number;
}

const GImage = React.forwardRef<HTMLImageElement, GImageProps>(
  (
    {
      className,
      objectFit = 'center',
      src,
      alt,
      intrinsicWidth,
      intrinsicHeight,
      ...props
    },
    ref
  ) => {
    return (
      <Image
        className={cn(
          objectFit === 'cover' && 'size-full object-cover',
          objectFit === 'contain' && 'size-auto object-contain',
          className
        )}
        ref={ref}
        src={src}
        alt={alt}
        width={intrinsicWidth}
        height={intrinsicHeight}
        fill={!!objectFit}
        {...props}
      />
    );
  }
);

GImage.displayName = 'GImage';
export default GImage;
