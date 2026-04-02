import Link from "next/link";
import { LuCodeXml } from "react-icons/lu";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-amber-100 text-olive-950 rounded-full grid place-items-center">
                <LuCodeXml />
            </div>
            <p className="font-bold md:text-2x1 hidden sm:block">
                Hi! I'm Alex.
            </p>
        </Link>
    )
}