"use client";

import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

export interface ServicesCardProps {
  title?: string;
  text: string;
  href?: string;
  img?: string;
}

export function ServicesCard(props: ServicesCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Fragment>
      <div
        className="relative flex flex-col justify-center overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          href={props.href ?? ""}
          className={`group relative m-0 flex h-full min-h-96 min-w-60 rounded-xl opacity-[-2000px] shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg `}
        >
          <div className="z-10 h-full w-full overflow-hidden rounded-xl border  border-gray-200 transition duration-300 ease-in-out ">
            <div className="absolute inset-10 flex items-center justify-center">
              <ChevronDoubleRightIcon className="blue-main h-12 w-12 animate-pulse fill-white" />
            </div>
            <Image
              src={`/assets/${props.img}.png`}
              className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center transition duration-300 group-hover:scale-125 group-hover:opacity-30"
              alt=""
              width={1920}
              height={1080}
            />

            {props.title && (
              <div
                className={`absolute inset-0 flex translate-y-[35%] flex-col items-center justify-center px-3 text-center text-blue-800 transition-all duration-500
              group-hover:translate-y-0
                 ${props.title?.length >= 12 ? "py-1" : "pb-8"} 
              `}
              >
                <h1 className={`text-center text-2xl font-bold`}>
                  {props.title}
                </h1>

                {isHovered && (
                  <h1 className="relative top-2 py-4 text-base font-bold text-blue-main opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {props.text}
                  </h1>
                )}
              </div>
            )}
          </div>
        </Link>
      </div>
    </Fragment>
  );
}
