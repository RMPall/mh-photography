import type { Metadata } from "next";
import { Inter, Playfair_Display, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Wordmark only - the high-contrast Didone look for the "7 Shades" lockup.
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
  style: ["normal", "italic"],
  // Next ships no fallback metrics for Bodoni Moda, so it cannot auto-tune a
  // size-adjusted fallback. Declaring the stack ourselves silences the warning
  // and keeps the wordmark on a Didone-ish face while the webfont loads.
  fallback: ["Didot", "Bodoni MT", "Georgia", "serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "7 Shades | Photography & Filmmaking",
  description:
    "7 Shades is a photography and filmmaking studio founded by Mahesh Padmanabhan, based in London. Portraits, families, events, corporate, cultural events and street photography, alongside videography, cinematography and aerial drone work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${bodoni.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
