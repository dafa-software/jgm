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
    <div
      className={`${isHovered ? "bg-blue-main opacity-70" : ""} flex flex-col items-center justify-between rounded-lg border border-slate-200 text-blue-main shadow-md transition duration-300  hover:shadow-xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute flex items-center justify-center bg-sky-600 bg-opacity-50">
          <p className="items-center justify-center p-4 text-sm text-white">
            {props.text}
          </p>
        </div>
      )}

      {/* TODO: Improve CSS */}

      <Link href={props.href} className={``}>
        <div
          className={`relative rounded-t-lg ${isHovered && "bg-blue-main opacity-70"}`}
        >
          <div className="absolute inset-10 flex items-center justify-center">
            <ChevronDoubleRightIcon className="blue-main h-12 w-12 animate-pulse fill-white" />
          </div>
          <Image
            src={`/assets/${props.img}.png`}
            alt="Wave"
            width={1920}
            height={1080}
            className="rounded-t-lg"
          />
          {props.title && (
            <h2
              className={`${props.title?.length > 16 ? "py-1" : "pt-6"} ${isHovered ? "text-start text-2xl" : "text-center text-2xl"} py-2  font-bold`}
            >
              {props.title}
            </h2>
          )}
        </div>
      </Link>
    </div>
  );
}
