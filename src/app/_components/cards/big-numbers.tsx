"use client";

import CountUp from "react-countup";

interface BigNumbersProps {
  title: string;
  number: number;
  kind?: string;
  variant: "primary" | "secondary";
  className?: string;
}

const BigNumbers = (props: BigNumbersProps) => {
  return (
    <div
      className={` flex w-full items-center justify-center gap-1 ${props.variant === "primary" ? "h-24 flex-col p-3 transition duration-300" : "flex-col bg-gray-100 bg-opacity-60 p-6 shadow-sm"} `}
    >
      <div className="flex flex-col items-center gap-1">
        {props.number && (
          <div className={`${props.className && props.className}`}>
            {props.kind === "number" ? "+" : "%"}
            <CountUp
              end={props.number ? props.number : 0}
              delay={0.7}
              duration={5}
              decimal=""
            />
          </div>
        )}
      </div>
      <p className={`text-nowrap text-3xl`}>{props.title}</p>
    </div>
  );
};

export default BigNumbers;
