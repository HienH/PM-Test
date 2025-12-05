import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const gilroyBold = localFont({
  src: [
    {
      path: "../../public/fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-urbanist",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trade Forex with Premier Markets",
  description:
    "Access global markets with advanced trading tools, competitive spreads, and institutional grade execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen max-w-[1440px] mx-auto bg-white text-slate-900 ${urbanist.variable} ${inter.variable} ${gilroyBold.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
