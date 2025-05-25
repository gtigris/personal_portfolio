import GBlurText from "./GBlurText";
import GSlotText from "./GSlotText";

export default function GMainVisual() {
  const blurText = [
    "FrontEnd Engineer",
    "UI/UX Consultant",
    "BackEnd Developer",
  ];
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center space-y-6">
      <GSlotText
        text="Giorgio Jonathan Tigris"
        className="text-white text-4xl"
      />
      <div className="flex items-center justify-center">
        <GBlurText text={blurText} className="text-white text-9xl" />
      </div>
    </div>
  );
}
