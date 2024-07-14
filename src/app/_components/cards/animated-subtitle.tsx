"use client";
import { useInView } from "react-intersection-observer";

interface AnimatedSubtitleProps {
  text: string;
  description?: string;
  className?: string;
  variant?: "light" | "dark";
}

const AnimatedSubtitle = ({ ...props }: AnimatedSubtitleProps) => {
  const light = props.variant === "light" ? true : false;
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className={`${props.className} animate-slide-in-left`}>
      {inView && (
        <>
          <h2
            className={`${light ? "text-white" : "text-blue-main"} pb-4 text-3xl font-semibold`}
          >
            {props.text}
          </h2>
          {props.description && (
            <p className={`${light ? "text-white" : "text-blue-main"} text-lg`}>
              {props.description}
            </p>
          )}
        </>
      )}
    </div>
  );
};
export default AnimatedSubtitle;
