import Link from "next/link";
import { ArrowIcon } from "../icons";

export interface ServicesCardProps {
  titleType: string;
  title?: string;
  text: string;
  href: string;
  img?: string;
}

export function ServicesCard(props: ServicesCardProps) {
  return (
    <div className="flex flex-col items-center justify-between rounded-md bg-white text-blue-main shadow-md transition duration-500 hover:scale-105">
      <div className="flex flex-col gap-6 p-8">
        <h2 className="text-center text-xl font-bold">{props.title}</h2>
        <p>{props.text}</p>
      </div>

      <Link
        href={props.href}
        style={{ backgroundImage: `url('/assets/${props.img}.png')` }}
        className="flex h-48 w-full items-center justify-center rounded-md hover:underline"
      >
        <ArrowIcon className="blue-main h-14 w-14" />
      </Link>
    </div>
  );
}
