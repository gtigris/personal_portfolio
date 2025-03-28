import {
  ChevronRight,
  ArrowRight,
  Trash,
  Star,
  type LucideIcon,
} from "lucide-react";

interface IconProps {
  type: keyof typeof iconMap;
  size?: number;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  "chevron-right": ChevronRight,
  "arrow-right": ArrowRight,
  trash: Trash,
  star: Star,
};

export default function GIcon({ type, size = 24, className }: IconProps) {
  const IconComponent = iconMap[type];

  if (!IconComponent) return null;

  return <IconComponent size={size} className={className} />;
}
