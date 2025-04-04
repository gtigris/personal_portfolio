'use client';
import SimpleParallax from 'simple-parallax-js/';
import Image from 'next/image';

export default function GMainVisual() {
  return (
    <SimpleParallax scale={2} delay={0.6} orientation="down">
      <Image src="/mainVisual.jpg" alt="image" height={1920} width={1080} />
    </SimpleParallax>
  );
}
