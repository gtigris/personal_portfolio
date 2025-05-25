import { cn } from "@/lib/utils";
import { Badge } from "../badge";

interface GBadgeProps {
  children: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
}

export default function GBadge({ children, variant, className }: GBadgeProps) {
  return (
    <Badge variant={variant} className={cn(className)}>
      {children}
    </Badge>
  );
}
