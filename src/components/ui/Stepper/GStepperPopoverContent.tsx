import React from "react";
import { Badge } from "../badge";
import GImage from "../Image/GImage";
import { Separator } from "../separator";

interface GStepperPopoverContent {
  title: string;
  location: string;
  year: string;
  subjectMajor?: string;
  children?: React.ReactNode;
  gpa?: string;
  badges: string[];
}

export default function GStepperPopoverContent({
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
            <p className="w-[80%]  ">{subjectMajor}</p>
            <p className="w-[20%] ">{gpa}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              {badges.map((badge: string) => {
                return <Badge key={badge}>{badge}</Badge>;
              })}
            </div>
            {/* make this a prop */}
            {/* (2017-2020) */}
          </div>
          {/* make this a Glist with Mapping */}
          {children}
        </div>
      </div>
    </>
  );
}
