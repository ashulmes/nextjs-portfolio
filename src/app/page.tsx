import About from "./ui/about/about";
import Skills from "./ui/skills/skills";

export default function Home() {
  return (
    <main className="flex-1 overflow-y-auto">
      <About />
      <Skills />
    </main>
  );
}
