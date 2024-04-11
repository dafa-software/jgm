"use client";

import "~/styles/globals.css";
import Container from "../container";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState, useCallback } from "react";

interface HeroCardProps {
  title: string;
  text: string;
  backgroundImg: string;
  contentBottom?: React.ReactNode;
  contentRight?: React.ReactNode;
  autoplay?: boolean;
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

  return (
    <div
      className={`clip-rounded-triangle flex items-center justify-center bg-cover bg-clip-content bg-center bg-no-repeat text-white md:min-h-[1000px]`}
    >
      <div className="z-50 flex flex-col items-center justify-center">
        <Container>
          <div className="flex flex-col gap-12 p-6 md:flex-row">
            <div
              className={`flex flex-col justify-center gap-3 py-20 md:py-2 ${!props.contentRight && "md:w-2/3"}`}
            >
              <h1 className="text-3xl font-bold">
                {loadedImages[currentIndex]?.subTitle}
              </h1>
              <p className="text-xl">{props.text}</p>
              {props.contentBottom && <>{props.contentBottom}</>}
            </div>
            {props.contentRight && (
              <div className="md:w-1/2">{props.contentRight}</div>
            )}
          </div>
        </Container>
      </div>
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={loadedImages[currentIndex]?.src}
          initial="initial"
          animate="visible"
          variants={slideVariants}
          // className="image absolute inset-0 h-full w-full object-cover object-center"
          className="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden bg-black bg-no-repeat object-cover opacity-50"
        />
      </AnimatePresence>
    </div>
  );
}
