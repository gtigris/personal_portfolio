import { GButton } from "@/components/ui/gButton";
import GHeader from "@/components/ui/Header/gHeader";
import GIcon from "@/components/ui/gIcon";
import { cn } from "@/lib/utils";
import { GMainVisual } from "@/components/ui/MainVisual/gMainVisual";

export default function HomePage() {
  return (
    <>
      <div className={cn("bg-slate-200 w-dvw h-dvh")}>
        <div>
          <h1 className={cn("text-center text-7xl font-bold")}>Modules</h1>
          <h2>GButton</h2>
          <GButton>Default</GButton>
          <GButton variant="destructive">Destructive</GButton>
          <GButton variant="outline">Outline</GButton>
          <GButton variant="secondary">Secondary</GButton>
          <GButton variant="ghost">Ghost</GButton>
          <GButton variant="link">Link</GButton>
        </div>
        <div className={cn(" mt-4 border-t-2 border-slate-700")}>
          <h2>GIcon</h2>
          <GIcon type="chevron-right"></GIcon>
          <GIcon type="arrow-right"></GIcon>
          <GIcon type="trash"></GIcon>
          <GIcon type="star"></GIcon>
        </div>
        <div className={cn(" mt-4 border-t-2 border-slate-700")}>
          <h2>GHeader</h2>
          <GHeader />
        </div>
        <div className={cn("mt-4 border-t-2 border-slate-700")}>
          <h2>GMainVisual</h2>
          <div className={cn("flex justify-center align-middle")}>
            <GMainVisual />
          </div>
        </div>
      </div>
    </>
  );
}
