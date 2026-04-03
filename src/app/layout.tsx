import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "./ui/navbar/navbar";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "700"],
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Alexandra Hulmes",
  description: "Frontend Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased bg-olive-950 text-amber-100`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
