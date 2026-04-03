import Link from "next/link";

const navLinks = [
  { url: "#home", text: "Home" },
  { url: "#about", text: "About Me" },
  { url: "#experience", text: "Experience" },
  { url: "#projects", text: "Projects" },
];

export default function Links() {
  return (
    <ul className="hidden lg:flex space-x-10">
      {navLinks.map((link, index) => {
        return (
          <li key={index}>
            <Link
              href={link.url}
              className="hover:text-amber-300 text-sm font-extralight uppercase tracking-wider transition-colors duration-300"
            >
              {link.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
