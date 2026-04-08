import Link from "next/link";

const navLinks = [
  { url: "#about", text: "About", external: false },
  { url: "#skills", text: "Skills", external: false },
  { url: "#projects", text: "Projects", external: false },
  {
    url: "https://uk.linkedin.com/in/ashulmes",
    text: "Connect",
    external: true,
  },
];

export default function Links() {
  return (
    <ul className="flex space-x-7 sm:space-x-10">
      {navLinks.map((link, index) => {
        return (
          <li key={index}>
            <Link
              href={link.url}
              className="hover:text-amber-300 text-sm font-extralight uppercase tracking-wider transition-colors duration-300"
              target={link.external ? `_blank` : `_self`}
            >
              {link.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
