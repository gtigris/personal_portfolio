import { cn } from "@/lib/utils";
interface GSectionProps {
  children: React.ReactNode;
  type: "black" | "white";
  className?: string;
}
export default function GSection({ children, type, className }: GSectionProps) {
  return (
    <div
      className={cn(type === "black" ? "bg-black" : "bg-stone-50", className)}
    >
      {children}
    </div>
  );
}
