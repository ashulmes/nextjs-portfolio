import Link from "next/link";
import { libreBodoni } from "@/app/fonts";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <p
        className={`${libreBodoni.className} tracking-wide text-2xl hidden md:block text-amber-300/90 hover:text-white`}
      >
        Hi! I&apos;m Alex.
      </p>
    </Link>
  );
}
