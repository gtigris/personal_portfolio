import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { cn } from "@/lib/utils";
interface GStepperPopoverProps {
  children: React.ReactNode;
  popoverContent: React.ReactNode;
  popoverSide: "left" | "right" | "top" | "bottom";
}
export function GStepperPopover({
  children,
  popoverContent,
  popoverSide,
}: GStepperPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        className={cn("w-[400px] relative overflow-hidden")}
        side={popoverSide}
      >
        {popoverContent}
      </PopoverContent>
    </Popover>
  );
}
