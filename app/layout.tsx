import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Playfair_Display, Inter } from "next/font/google";
import GrainOverlay from "@/components/GrainOverlay";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

// Loaded per the brand type scale (H2 / 56px / 700, incl. italics). Every
// heading actually used across the current sections is spec'd as Bebas
// Neue, so this variable is available for any future H2 use but isn't
// forced onto an element that the design doesn't call for.
const playfairDisplay = Playfair_Display({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // Falls back to localhost in dev; set NEXT_PUBLIC_SITE_URL (or rely on
  // Vercel's automatic VERCEL_URL) once a real domain is assigned.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  ),
  title: "Seven Days Family Restaurant — Eat Fresh. Sialkot.",
  description:
    "Seven Days Family Restaurant — Jammu Road, Dalowali, Sialkot. Free home delivery. Call 052 3206050.",
  openGraph: {
    images: ["/frames/frame_0001.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#080400",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${playfairDisplay.variable} ${inter.variable} antialiased`}>
        <GrainOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
