import Link from "next/link";
import { LuCodeXml } from "react-icons/lu";
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
      <div className="w-10 h-10 bg-amber-100 text-olive-950 rounded-full grid place-items-center">
        <LuCodeXml />
      </div>
      <p
        className={`${libreBodoni.className} font-bold tracking-wider text-xl hidden sm:block`}
      >
        Hi! I'm Alex.
      </p>
    </Link>
  );
}
