import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface GTypographyProps {
  size: 'sm' | 'md' | 'lg' | 'xl';
  weight: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

const sizeMap = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl',
  xl: 'text-[100px]',
};

const weightMap = {
  sm: 'font-light',
  md: 'font-medium',
  lg: 'font-bold',
};

export default function GTypography({
  children,
  size,
  weight,
  className,
}: GTypographyProps) {
  return (
    <span className={cn(sizeMap[size], weightMap[weight], className)}>
      {children}
    </span>
  );
}
