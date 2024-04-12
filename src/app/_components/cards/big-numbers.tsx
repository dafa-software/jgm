"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface BigNumbersProps {
  title: string;
  number: number;
  kind?: string;
  variant: "primary" | "secondary";
  className?: string;
}

const BigNumbers = (props: BigNumbersProps) => {
  const [ref, inView] = useInView({ threshold: 1 });
  return (
    <div
      className={` flex w-full items-center justify-center gap-1 ${props.variant === "primary" ? "h-24 flex-col p-3 transition duration-300" : "flex-row p-6 shadow-sm"} `}
      ref={ref}
    >
      <div className="flex flex-col items-start gap-1">
        {props.number && (
          <div
            className={`${props.className && props.className} shadow-2xl hover:scale-125`}
          >
            {props.kind === "number" ? "+" : "%"}
            {inView && (
              <CountUp
                end={props.number ? props.number : 0}
                delay={0.7}
                duration={5}
                decimal=""
              />
            )}
          </div>
        )}
      </div>
      <p className={`text-nowrap text-3xl text-white`}>{props.title}</p>
    </div>
  );
};

export default BigNumbers;
