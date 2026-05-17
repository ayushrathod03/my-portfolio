import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creative Developer | High-End Portfolio",
  description: "Awwwards-level scrollytelling personal portfolio showcasing high-performance canvas rendering, cinematic scroll animations, and premium interactive digital experiences.",
  keywords: ["Creative Developer", "Portfolio", "Next.js", "Framer Motion", "Canvas Animation", "Scrollytelling"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-background text-foreground overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
