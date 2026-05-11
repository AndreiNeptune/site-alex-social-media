import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

export const metadata: Metadata = {
  title: "Alexandru Balasoiu | Attention Engineering",
  description: "Cinematic creative archive, attention engineering lab, luxury social-first studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&f[]=clash-display@200,300,400,500,600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-black text-white selection:bg-white selection:text-black">
        <LoadingScreen />
        <NoiseOverlay />
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
