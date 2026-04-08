"use client";

import Links from "./links";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="h-24 fixed z-50 w-full px-[10%] border-b-1 border-amber-100/25">
      <div className="flex items-center h-full justify-center md:justify-between">
        <Logo />
        <Links />
      </div>
    </nav>
  );
}
