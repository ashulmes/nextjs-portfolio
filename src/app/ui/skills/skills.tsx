import { libreBodoni } from "@/app/fonts";
import Card from "./card";
import { VscTools, VscFeedback, VscSortPrecedence } from "react-icons/vsc";

const skillCards = [
  {
    icon: VscFeedback,
    title: "Leading",
    description:
      "Ten years of experience in leading high-performance teams across multiple disciplines; supporting, mentoring, and learning from my colleagues every step of the way.",
  },
  {
    icon: VscTools,
    title: "Building",
    description:
      "When I'm not walking my dog, I'm usually building, breaking or fixing something. I spend most my time with React and Next.js, but they don't mind me experimenting with something new.",
  },
  {
    icon: VscSortPrecedence,
    title: "Planning",
    description:
      "A track-record of planning, working and delivering as part of a scrum team and an agile release train. We drive value at an organisational level, and we enable other teams to do the same.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="h-screen relative flex justify-center items-center overflow-hidden flex-col"
    >
      <h2
        className={`${libreBodoni.className} tracking-wide text-center text-4xl md:text-6xl text-white`}
      >
        My <span className="text-amber-300/90">toolkit</span>.
      </h2>
      <div className="flex space-x-0 md:space-x-8 space-y-8 md:space-y-0 p-10 max-w-[910] justify-between flex-col md:flex-row">
        {skillCards.map((card, index) => {
          return (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>
    </section>
  );
}
