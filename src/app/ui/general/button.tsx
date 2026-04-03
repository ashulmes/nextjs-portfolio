import Link from "next/link";
import { IconType } from "react-icons";

interface ButtonProps {
  href: string;
  text: string;
  icon: IconType;
  iconPosition: "right" | "left";
  rounded?: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <Link
      href={props.href}
      className={`px-8 py-3 bg-linear-to-r from-blue-900 to-purple-800 hover:from-blue-800 hover:to-purple-700 text-white font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 ${
        props.rounded ? "rounded-full" : "rounded-lg"
      }`}
    >
      {props.icon && props.iconPosition === "left" && (
        <props.icon className="w-5 h-5" />
      )}
      {props.text}
      {props.icon && props.iconPosition === "right" && (
        <props.icon className="w-5 h-5" />
      )}
    </Link>
  );
}
