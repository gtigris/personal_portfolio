import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { cn } from "@/lib/utils";

interface GStepperPopoverProps {
  children: (isOpen: boolean) => React.ReactNode;
  popoverContent: React.ReactNode;
  popoverSide: "left" | "right" | "top" | "bottom";
  popoverType: "work" | "edu";
}

export function GStepperPopover({
  children,
  popoverContent,
  popoverSide,
  popoverType,
}: GStepperPopoverProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{children(open)}</PopoverTrigger>
      <PopoverContent
        className={cn(
          "w-[400px] relative overflow-hidden",
          popoverType === "work"
            ? "bg-black text-white border border-white shadow-lg"
            : ""
        )}
        side={popoverSide}
      >
        {popoverContent}
      </PopoverContent>
    </Popover>
  );
}
