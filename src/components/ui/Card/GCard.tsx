import { cn } from '@/lib/utils';
import type { HTMLAttributes, ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../card';

interface GCardProps extends HTMLAttributes<HTMLDivElement> {
  cardTitle?: ReactNode;
  cardDescription?: ReactNode;
  cardContent?: ReactNode;
  cardFooter?: ReactNode;
  cardMainVisual?: ReactNode;
}

function GCard({
  cardTitle,
  cardDescription,
  cardContent,
  cardFooter,
  cardMainVisual,
  className,
  ...props
}: GCardProps) {
  return (
    <Card className={cn('w-[325px] h-[500px]', className)} {...props}>
      <div className="h-[250px] relative">{cardMainVisual}</div>
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

export default GCard;
