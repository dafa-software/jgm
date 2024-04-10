"use client";

import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ServicesCardProps {
  titleType: string;
  title?: string;
  text: string;
  href: string;
  img?: string;
}

export function ServicesCard(props: ServicesCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Link
      href={props.href}
      className={`flex flex-col items-center justify-between rounded-lg border border-slate-200 text-blue-main shadow-md transition duration-300 hover:scale-105 hover:shadow-xl ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-t-lg">
        <div className="absolute inset-10 flex items-center justify-center">
          <ChevronDoubleRightIcon className="blue-main h-12 w-12 animate-pulse fill-white" />
        </div>
        <Image
          src={`/assets/${props.img}.png`}
          alt="Wave"
          width={1920}
          height={1080}
        />
        <h2 className="pb-6 text-center text-2xl font-bold">{props.title}</h2>
        {/* TODO: Improve CSS */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <p className="text-sm text-white">{props.text}</p>
          </div>
        )}
      </div>
    </Link>
  );
}
