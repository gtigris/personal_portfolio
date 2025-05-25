"use client";
import React from "react";
import { GStepperPopover } from "./GStepperPopover";
import GList from "../List/GList";
import GStepperPopoverEduContent from "./GStepperPopoverEduContent";
import GStepperPopoverWorkContent from "./GStepperPopoverWorkContent";
import { GStep } from "./GStep";
import { GRoad } from "./GRoad";
//TODO: we can just make the gstep uncontrollable, no need to lift it up
export default function GStepper() {
  return (
    <div className="flex flex-col items-center">
      <GStepperPopover
        popoverSide="right"
        popoverType="edu"
        popoverContent={
          <GStepperPopoverEduContent
            badges={["Education", "Bachelor's Degree"]}
            title="San Jose State University"
            location="San Jose, California"
            year="(2017-2020)"
            subjectMajor="B.S. Industrial Technology and Computer Networking"
            gpa={"3.71 / 4.0"}
          >
            <GList
              type="unordered"
              lists={[
                "Magna Cum Laude",
                "President's Scholar",
                "Dean's Scholar",
              ]}
              listStyle="list-disc list-inside"
            />
          </GStepperPopoverEduContent>
        }
      >
        {(isOpen) => (
          <GStep isActive={isOpen} yearPosition="right" year="2017" />
        )}
      </GStepperPopover>
      <GRoad />
      <GStepperPopover
        popoverSide="left"
        popoverType="work"
        popoverContent={
          <GStepperPopoverWorkContent
            badges={["Part-Time", "Summer Internship", "Work Experience"]}
            title="GOJEK - PT Dompet Anak Bangsa"
            location="Jakarta, Indonesia"
            year="(2017)"
            jobTitle="Risk and Fraud Analyst"
            duration={"3 Months"}
          >
            <GList
              type="unordered"
              lists={[
                "Uncovered fraudulent transactions by flagging and analyzing outlier patterns and data points",
                "Collaborated with Business Intelligence division to create an algorithm, obtaining 95% confidence in flagging scammers.",
              ]}
              listStyle="list-disc list-inside"
            />
          </GStepperPopoverWorkContent>
        }
      >
        {(isOpen) => (
          <GStep isActive={isOpen} yearPosition="left" year="2017" />
        )}
      </GStepperPopover>
      <GRoad />
      <GStepperPopover
        popoverSide="right"
        popoverType="work"
        popoverContent={
          <GStepperPopoverWorkContent
            badges={["Full-Time", "Work Experience"]}
            title="PT Roket Edukasi Indonesia (LMS)"
            location="Jakarta, Indonesia"
            year="(2021 - 2022)"
            jobTitle="Operational Manager"
            duration={"1.5 Years"}
          >
            <GList
              type="unordered"
              lists={[
                "Introduced Learning Management System to a Grade-A private educational institution",
                "Spearheaded strategy and execution using the Value Proposition Canvas to design a Learning Management System tailored to user needs.",
              ]}
              listStyle="list-disc list-inside"
            />
          </GStepperPopoverWorkContent>
        }
      >
        {(isOpen) => (
          <GStep isActive={isOpen} yearPosition="right" year="2021" />
        )}
      </GStepperPopover>
      <GRoad />
      <GStepperPopover
        popoverSide="left"
        popoverType="edu"
        popoverContent={
          <GStepperPopoverEduContent
            badges={["Education", "Master's Degree"]}
            title="GLOBIS University"
            location="Tokyo, Japan"
            year="(2022-2023)"
            subjectMajor="Master of Business Administration"
          >
            <GList
              type="unordered"
              lists={[
                "Excelled at Business Analytics and Venture Capital Investment",
                "Completed 1-year program and participated in a 3-months internship",
              ]}
              listStyle="list-disc list-inside"
            />
          </GStepperPopoverEduContent>
        }
      >
        {(isOpen) => (
          <GStep isActive={isOpen} yearPosition="left" year="2022" />
        )}
      </GStepperPopover>
      <GRoad />
      <GStepperPopover
        popoverSide="right"
        popoverType="work"
        popoverContent={
          <GStepperPopoverWorkContent
            badges={["Part-Time", "Work Experience"]}
            title="Amiya Corporation"
            location="Tokyo, Japan"
            year="(2023)"
            jobTitle="Global Sales Unit"
            duration={"3 Months"}
          >
            <GList
              type="unordered"
              lists={[
                "Researched market expansion possibility in the ASEAN region, specifically concerning the feasibility of Indonesian market penetration and strategy.",
              ]}
              listStyle="list-disc list-inside"
            />
          </GStepperPopoverWorkContent>
        }
      >
        {(isOpen) => (
          <GStep isActive={isOpen} yearPosition="right" year="2023" />
        )}
      </GStepperPopover>
      <GRoad />
      <GStepperPopover
        popoverSide="left"
        popoverType="work"
        popoverContent={
          <GStepperPopoverWorkContent
            badges={["Full-Time", "Work Experience"]}
            title="Growth xPartners Inc."
            location="Tokyo, Japan"
            year="(2023 - ongoing)"
            jobTitle="Software Engineer"
            duration={"1.5 Years~"}
          >
            <GList
              type="unordered"
              lists={[
                "Enhanced the UI/UX of an internal, company-wide employee development platform",
                "Built a Global Traceability System using React, enabling end-to-end data tracking and improved operational visibility",
              ]}
              listStyle="list-disc list-inside"
            />
          </GStepperPopoverWorkContent>
        }
      >
        {(isOpen) => (
          <GStep isActive={isOpen} yearPosition="left" year="2023" />
        )}
      </GStepperPopover>
    </div>
  );
}
