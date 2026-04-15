import { libreBodoni } from "@/app/fonts";

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
        <p className="font-extralight tracking-wide text-center px-10">
          A customer-focused software engineer, and a sucker for personal
          development, clean code and end-user accessibility. Please ask me
          about my dog.
        </p>
      </div>
    </section>
  );
}
