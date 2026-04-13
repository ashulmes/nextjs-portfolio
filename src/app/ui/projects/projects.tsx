import { Libre_Bodoni } from "next/font/google";

const libreBodoni = Libre_Bodoni({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  fallback: ["serif"],
});

export default function Projects() {
  return (
    <section
      id="projects"
      className="h-screen relative flex justify-center items-center overflow-hidden flex-col"
    >
      <h2
        className={`${libreBodoni.className} tracking-wide text-center text-4xl md:text-6xl text-white`}
      >
        My <span className="text-amber-300/90">playground</span>.
      </h2>
    </section>
  );
}
