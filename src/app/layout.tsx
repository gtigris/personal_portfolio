import type { Metadata } from "next";
import "tailwindcss";
import "./globals.css";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Giorgio's Portfolio",
  description: "Giorgio's Personal Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.variable} font-sora`}>{children}</body>
    </html>
  );
}
