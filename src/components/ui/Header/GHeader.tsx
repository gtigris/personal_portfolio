import { cn } from "@/lib/utils";
import ButtonCollection from "./ButtonCollection";

export default function GHeader() {
  return (
    //TODO do Drupal for some news, and then pull some API too, make a simple backend
    <>
      <header
        className={cn(
          "flex justify-between items-center bg-primary text-primary-foreground py-4 px-2"
        )}
      >
        <p
          className={cn("text-lg font-semibold align-middle")}
          aria-label="Site owner name"
        >
          Giorgio Jonathan Tigris
          
        </p>
        <ButtonCollection />
      </header>
    </>
  );
}
