import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "./ui/navbar/navbar";
import Footer from "./ui/footer/footer";
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
        className={`${dmSans.className} flex flex-col h-screen antialiased bg-olive-950 text-white/90`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
