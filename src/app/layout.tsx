import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Navbar from "./ui/navbar/navbar";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${figtree.className} antialiased bg-olive-950 text-white/90`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
