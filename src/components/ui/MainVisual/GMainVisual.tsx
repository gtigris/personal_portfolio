"use client";
import SimpleParallax from "simple-parallax-js/";
import Image from "next/image";

export default function GMainVisual() {
  return (
    <SimpleParallax scale={2}>
      <Image src="/mainVisual.jpg" alt="image" height={1800} width={1520} />
    </SimpleParallax>
  );
}
