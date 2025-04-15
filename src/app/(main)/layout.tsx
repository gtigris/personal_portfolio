import { GHeader } from "@/components/ui/Header/GHeader";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GHeader />
      {children}
    </>
  );
}
