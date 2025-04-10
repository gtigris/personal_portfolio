import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../card";

interface GCardProps extends React.HTMLAttributes<HTMLDivElement> {
  cardTitle?: React.ReactNode;
  cardDescription?: React.ReactNode;
  cardContent?: React.ReactNode;
  cardFooter?: React.ReactNode;
  cardMainVisual?: React.ReactNode;
}

// Define the inner component
function GCardInner(
  {
    cardTitle,
    cardDescription,
    cardContent,
    cardFooter,
    cardMainVisual,
    className,
    ...props
  }: GCardProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <Card ref={ref} className={`w-[350px] ${className || ""}`} {...props}>
      <div className="h-[200px] bg-blue-400">{cardMainVisual}</div>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">{cardContent}</div>
      </CardContent>
      <CardFooter className="flex justify-between">{cardFooter}</CardFooter>
    </Card>
  );
}

// Forward the ref and export with function
const GCard = React.forwardRef(GCardInner);
export default GCard;
