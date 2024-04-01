import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
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
      className="flex flex-col items-center justify-between rounded-md text-blue-main shadow-md transition duration-300 hover:opacity-90 hover:shadow-xl"
    >
      <div className="flex h-full flex-col gap-6 rounded-t-md bg-white px-6 pt-6">
        <h2 className="text-center text-xl font-bold">{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <div className="relative rounded-b-md">
        <div className="absolute inset-0 flex items-center justify-center">
          <ChevronDoubleRightIcon className="blue-main h-16 w-16 animate-pulse fill-white" />
        </div>
        <Image
          src={`/assets/${props.img}.png`}
          alt="Wave"
          width={1920}
          height={1080}
          className="rounded-b-md bg-black"
        />
      </div>
    </Link>
  );
}
