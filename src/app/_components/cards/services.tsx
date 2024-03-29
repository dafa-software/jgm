import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export interface ServicesCardProps {
  titleType: string;
  title?: string;
  text: string;
  href: string;
  img?: string;
}

export function ServicesCard(props: ServicesCardProps) {
  return (
    <Link
      href={props.href}
      className="flex flex-col items-center justify-between rounded-md bg-white text-blue-main shadow-md transition duration-300 hover:scale-95 hover:shadow-xl"
    >
      <div className="flex flex-col gap-6 p-6">
        <h2 className="text-center text-xl font-bold">{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <div
        style={{ backgroundImage: `url('/assets/${props.img}.png')` }}
        className="flex h-40 w-full items-center justify-center rounded-md hover:underline"
      >
        <ChevronDoubleRightIcon className="blue-main h-14 w-14 animate-pulse" />
      </div>
    </Link>
  );
}
