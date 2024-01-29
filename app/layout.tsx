import type { Metadata } from "next";
import { Inter, Satisfy } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-satisfy",
});
const satoshi = localfont({
  src: "./fonts/Satoshi-Variable.ttf",
  display: "swap",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Satoshi: ["400", "500", "700"]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${satisfy.variable}`}>
        {children}
      </body>
    </html>
  );
}
