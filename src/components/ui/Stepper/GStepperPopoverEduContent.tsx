import React from "react";
import GImage from "../Image/GImage";
import { Separator } from "../separator";
import GBadge from "../Badge/GBadge";

interface GStepperPopoverContent {
  title: string;
  location: string;
  year: string;
  subjectMajor?: string;
  children?: React.ReactNode;
  gpa?: string;
  badges: string[];
}

export default function GStepperPopoverEduContent({
  title,
  location,
  year,
  subjectMajor,
  gpa,
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
            <p className="w-[80%]">{subjectMajor}</p>
            <p className="w-[20%]">{gpa}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              {badges.map((badge: string) => {
                return <GBadge key={badge}>{badge}</GBadge>;
              })}
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
