"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import ButtonCollection from "./ButtonCollection";

export const GHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <header
      className={cn(
        "flex justify-between items-center bg-primary text-primary-foreground py-4 px-2",
        className
      )}
      ref={ref}
      {...props}
    >
      <p
        className="text-lg font-semibold align-middle"
        aria-label="Site owner name"
      >
        Giorgio Jonathan Tigris
      </p>
      <ButtonCollection />
    </header>
  );
});

GHeader.displayName = "GHeader";