import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Playfair Display — classic luxury serif, strong at heavy weights for hero text
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nudenotes.in"),
  title: {
    default: "Nude Notes — Wear The Wilderness",
    template: "%s | Nude Notes",
  },
  description:
    "Nude Notes is a niche luxury perfume house crafting raw, unfiltered fragrances. Explore Bare Birch, Monolith, and Unfiltered — Eau de Parfum, ₹399.",
  keywords: [
    "nude notes",
    "niche perfume",
    "luxury fragrance",
    "eau de parfum",
    "indie perfume india",
    "bare birch",
    "monolith",
    "unfiltered",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Nude Notes",
    title: "Nude Notes — Wear The Wilderness",
    description:
      "Niche fragrances crafted for those who wear the wilderness. Three Eau de Parfums. Raw. Unfiltered. Unapologetic.",
    images: [
      {
        url: "/images/bare-birch.jpg",
        width: 1200,
        height: 630,
        alt: "Nude Notes — Bare Birch Eau de Parfum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nude Notes — Wear The Wilderness",
    description: "Niche fragrances crafted for those who wear the wilderness.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D0D0D",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#F5F0E8] text-[#1A1410] overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
