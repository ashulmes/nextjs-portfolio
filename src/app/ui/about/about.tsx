import { Libre_Bodoni } from "next/font/google";

const libreBodoni = Libre_Bodoni({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  fallback: ["serif"],
});

export default function About() {
  return (
    <section
      id="about"
      className="h-screen relative flex justify-center items-center overflow-hidden flex-col"
    >
      <div className="absolute z-10 flex flex-col max-w-[400] md:max-w-[600]">
        <h1
          className={`${libreBodoni.className} tracking-wide text-center text-6xl md:text-8xl text-white`}
        >
          Hi! I&apos;m <span className="text-amber-300/90">Alex</span>.
        </h1>
        <h2 className="font-extralight tracking-wider text-center">
          A customer-focused software engineer, with a passion for personal
          development, clean code and accessibility. Please ask me about my dog.
        </h2>
      </div>
    </section>
  );
}
