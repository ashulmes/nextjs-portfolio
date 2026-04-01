import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  fallback: ["sans-serif"]
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
    <html
      lang="en"
      className={`${dmSans.className} h-full antialiased bg-olive-950 text-amber-100`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
