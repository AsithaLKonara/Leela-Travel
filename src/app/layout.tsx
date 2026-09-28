import type { Metadata } from "next";
import { Poppins, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leela Travel | Cinematic Sri Lankan Journeys",
  description:
    "An interactive cinematic travel journal for curated Sri Lankan experiences. Discover hill country, coastlines, ancient heritage, and bespoke journeys.",
  keywords: ["Sri Lanka travel", "luxury Sri Lanka tours", "Leela Travel", "Ella", "Sigiriya", "Bespoke Ceylon journeys"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${cormorant.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-obsidian text-leela-white font-sans selection:bg-sea-mist/20 selection:text-sea-mist">
        <Navbar />
        <main className="flex-1 w-full relative">{children}</main>
      </body>
    </html>
  );
}
