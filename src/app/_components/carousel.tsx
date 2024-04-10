"use client";

import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Carousel(props: { children: React.ReactNode }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 600px)").matches;

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: isMobile ? 1 : 4,
      spacing: 10,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    drag: true,
    mode: "free-snap",
    renderMode: "performance",
  });

  const handlePrevious = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    event && instanceRef.current?.prev() && event.stopPropagation();
  };

  const handleNext = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    event && instanceRef.current?.next() && event.stopPropagation();
  };

  function Arrow(props: {
    left?: boolean;
    onClick: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
  }) {
    return (
      <svg
        viewBox="0 0 24 24"
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute top-1/2 h-12 w-12 translate-y-1/2 cursor-pointer rounded-full fill-cyan-200 p-3 transition-transform duration-100 ease-in-out hover:scale-110 ${props.left ? "left-2" : "left-auto right-2"}`}
      >
        {props.left ? (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        ) : (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    );
  }

  return (
    <section>
      <div className="relative">
        <div
          ref={sliderRef}
          className="keen-slider mx-auto max-w-xs md:max-w-md lg:max-w-4xl xl:max-w-[1000px]"
        >
          {props.children}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow left onClick={handlePrevious} />
            <Arrow onClick={handleNext} />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="flex justify-center p-3">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                title="Go to slide"
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`mx-1 h-3 w-3 rounded-full ${currentSlide === idx ? "bg-cyan-200" : "bg-gray-200 bg-opacity-40"}`}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
