import { IconType } from "react-icons";

interface CardProps {
  icon: IconType;
  title: string;
  description: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="border-1 border-amber-300/25 flex flex-col grow-1 basis-0 min-w-[0] space-y-4 p-8">
      <props.icon className="w-8 h-8 fill-white/70" />
      <p className="text-amber-300/90 text-sm font-extralight uppercase tracking-widest transition-colors duration-300">
        {props.title}
      </p>
      <p className="text-sm font-extralight leading-6">{props.description}</p>
    </div>
  );
}
