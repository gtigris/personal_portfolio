import { GHeader } from "@/components/ui/Header/GHeader";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col">
      <GHeader />
      {children}
    </div>
  );
}
