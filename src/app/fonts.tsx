import { Libre_Bodoni, Figtree } from "next/font/google";

export const libreBodoni = Libre_Bodoni({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  fallback: ["serif"],
});

export const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  fallback: ["sans-serif"],
});
