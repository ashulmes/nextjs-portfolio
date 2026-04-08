import Link from "next/link";
import { Libre_Bodoni } from "next/font/google";

const libreBodoni = Libre_Bodoni({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["500", "700"],
  fallback: ["serif"],
});

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <p
        className={`${libreBodoni.className} tracking-wider text-2xl hidden md:block`}
      >
        Hi! I'm Alex.
      </p>
    </Link>
  );
}
