import React from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface GImageProps extends ImageProps {
  type?: "contain" | "cover";
  src: string;
  alt: string;
}

const GImage = React.forwardRef<HTMLImageElement, GImageProps>(
  ({ className, type = "cover", src, alt, ...props }) => {
    return (
      <div className={cn("relative", "h-60", className)}>
        <Image
          className={cn("object-center", type && `object-${type}`)}
          src={src}
          alt={alt}
          fill={!!type}
          {...props}
        />
      </div>
    );
  }
);

GImage.displayName = "GImage";
export default GImage;
