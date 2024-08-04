import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";

export interface SolutionsCardProps {
  title?: string;
  text: string;
  img: string;
}

export function SolutionsCard(props: SolutionsCardProps) {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <div className="group z-10 h-full w-full overflow-hidden rounded-xl  border border-gray-200 transition duration-300 ease-in-out">
        <div className="absolute inset-10 flex items-center justify-center">
          <ChevronDoubleRightIcon className="blue-main h-12 w-12 animate-pulse fill-white" />
        </div>
        <Image
          src={props.img}
          className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center transition duration-300 group-hover:scale-125 group-hover:opacity-30"
          alt=""
          width={1920}
          height={1080}
        />

        {props.title && (
          <div
            className={`absolute inset-2 flex translate-y-[35%] flex-col items-center justify-center px-3 text-center text-blue-800 shadow-lg transition-all duration-500
              group-hover:translate-y-0
                 ${props.title?.length >= 12 ? "pt-10" : "pt-10"}  
              `}
          >
            <h1
              className={`rounded-lg bg-white bg-opacity-10 text-center text-2xl font-bold `}
            >
              {props.title}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
