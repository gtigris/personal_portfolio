import React from "react";
import { Badge } from "../badge";
import GImage from "../Image/GImage";
import { Separator } from "../separator";

interface GStepperPopoverContent {
  title: string;
  location: string;
  year: string;
  jobTitle?: string;
  duration?: string;
  badges: string[];
  children?: React.ReactNode;
}

export default function GStepperPopoverWorkContent({
  title,
  location,
  year,
  jobTitle,
  duration,
  children,
  badges,
}: GStepperPopoverContent) {
  return (
    <>
      <GImage
        src="/mainVisual.jpg"
        alt="mainVisual"
        objectFit="cover"
        className="opacity-5"
      />
      <div>
        <p className="font-bold text-xl">{title}</p>
        <div className="flex justify-between">
          <p>{location}</p>
          <p>{year}</p>
        </div>
        <Separator />
        <div className="text-sm">
          <div className=" my-2 flex gap-2">
            <p className="w-[80%]">{jobTitle}</p>
            <p className="w-[20%]">{duration}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              {badges.map((badge: string) => {
                return <Badge key={badge}>{badge}</Badge>;
              })}
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
