"use client";

import { useEffect, useState } from "react";
import Links from "./links";
import Logo from "./logo";

export default function Navbar() {
  const [userScroll, setUserScroll] = useState(false);

  useEffect(() => {
    const userScrollHandler = () => {
      if (window.scrollY >= 90) {
        setUserScroll(true);
      } else {
        setUserScroll(false);
      }
    };

    window.addEventListener("scroll", userScrollHandler);
    return () => {
      return window.removeEventListener("scroll", userScrollHandler);
    };
  }, []);

  return (
    <nav
      className={`h-18 fixed z-50 w-full px-[5%] border-b-1 border-amber-300/25`}
    >
      <div
        className={`flex items-center h-full justify-center ${userScroll ? "md:justify-between" : "md:justify-end"}`}
      >
        {userScroll && <Logo />}
        <Links />
      </div>
    </nav>
  );
}
