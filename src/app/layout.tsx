import type { Metadata } from "next";
import Navbar from "./ui/navbar/navbar";
import { figtree } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Sumner-Hulmes",
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
