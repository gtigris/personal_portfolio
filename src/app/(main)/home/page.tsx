import GMainVisual from "@/components/ui/MainVisual/GMainVisual";
import GSection from "@/components/ui/Section/GSection";
import GStepper from "@/components/ui/Stepper/GStepper";
import GTypography from "@/components/ui/Typography/GTypography";

export default function Home() {
  return (
    <>
      <GSection type="black">
        <GMainVisual />
      </GSection>
      <GSection type="white">
        <div className="h-screen grid grid-cols-2">
          <div className=" flex items-center justify-center text-center bg-[#183c28]">
            <GTypography size={"xl"} weight={"lg"} className="text-white">
              Academic & Professional Background
            </GTypography>
          </div>
          <div className=" flex items-center justify-center">
            <GStepper />
          </div>
        </div>
      </GSection>
    </>
  );
}
