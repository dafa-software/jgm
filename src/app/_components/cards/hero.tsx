"use client";

import "~/styles/globals.css";
import Container from "../container";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import useIsMobile from "~/utils/use-is-mobile";
import classNames from "clsx";

interface HeroCardProps {
  mainTitle: string;
  title: string;
  text: string;
  backgroundImg: string;
  contentBottom?: React.ReactNode;
  contentRight?: React.ReactNode;
  autoplay?: boolean;
  fontColor?: string;
  images?: { src: string; subTitle: string }[];
}

export function HeroCard(props: HeroCardProps) {
  const { autoplay = true } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<
    {
      src: string;
      subTitle: string;
    }[]
  >(props.images ?? []);

  const handleNext = useCallback(() => {
    if (!!!props.images) return;
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === props.images?.length ? 0 : prevIndex + 1,
    );
  }, [props.images]);

  const handlePrevious = useCallback(() => {
    if (!!!props.images) return;
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? (props.images?.length ?? 0) - 1 : prevIndex - 1,
    );
  }, [props.images]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval: NodeJS.Timeout | undefined;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 10000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [autoplay, handleNext, handlePrevious]);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  // const textToShow = loadedImages[currentIndex]?.subTitle ?? props.title;

  return (
    <>
      <div
        className={`clip-rounded-triangle flex items-center justify-center border-b-[10px] border-[#F1F5F9] bg-cover bg-clip-content bg-center bg-no-repeat text-white md:min-h-[890px]`}
      >
        <div className="z-50 flex flex-col items-center justify-center">
          <Container>
            <div className="flex flex-col gap-12 p-6 md:flex-row">
              <div
                className={`flex flex-col justify-center gap-3 py-20 md:py-2 ${!props.contentRight && "md:w-2/3"}`}
              >
                <h1
                  className={classNames(
                    `py-2 text-3xl font-bold ${props.mainTitle?.length >= 25 ? "md:text-5xl" : "md:text-6xl"}`,
                    {
                      [`${props.fontColor} backdrop-contrast-10 rounded-xl bg-white bg-opacity-50 shadow-lg md:rounded-xl md:bg-opacity-0 md:shadow-none`]:
                        props.fontColor,
                    },
                  )}
                >
                  {/* <TypewriterEffectSmooth
                  words={
                    textToShow.split(" ").map((word) => {
                      return {
                        text: word,
                        className: "text-white",
                      };
                    }) ?? [
                      {
                        text: "",
                      },
                    ]
                  }
                  key={currentIndex}
                /> */}
                  {props.mainTitle}
                </h1>
                <p
                  className={classNames(`bg-opacity-10 text-base md:text-xl`, {
                    [`${props.fontColor} backdrop-contrast-10 rounded-xl bg-white bg-opacity-50 shadow-lg md:rounded-xl md:bg-opacity-0 md:shadow-none`]:
                      props.fontColor,
                  })}
                >
                  {props.text}
                </p>
                {props.contentBottom && <>{props.contentBottom}</>}
              </div>
              {props.contentRight && (
                <div className="md:w-1/2">{props.contentRight}</div>
              )}
            </div>

            {props.images ? (
              <AnimatePresence>
                <motion.img
                  key={currentIndex}
                  src={loadedImages[currentIndex]?.src}
                  initial="initial"
                  animate="visible"
                  variants={slideVariants}
                  className="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden bg-black bg-no-repeat object-cover opacity-50"
                />
              </AnimatePresence>
            ) : (
              <>
                <Image
                  src={`/assets/${props.backgroundImg}.png`}
                  alt="Wave"
                  width={1280}
                  height={720}
                  className="absolute left-0 top-0 -z-50 h-full w-full bg-black bg-opacity-50 object-cover"
                  priority={true}
                  quality={100}
                />
              </>
            )}
          </Container>
        </div>
      </div>
    </>
  );
}
