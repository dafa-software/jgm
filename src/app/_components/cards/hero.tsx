import "~/styles/globals.css";
import Image from "next/image";
import Container from "../container";

interface HeroCardProps {
  title: string;
  text: string;
  backgroundImg: string;
  contentBottom?: React.ReactNode;
  contentRight?: React.ReactNode;
}

export function HeroCard(props: HeroCardProps) {
  return (
    <div
      className={`flex items-center justify-center bg-cover bg-center bg-no-repeat text-white md:min-h-[800px]`}
    >
      <Container>
        <div className="flex flex-col gap-12 p-6 md:flex-row">
          <div
            className={`flex flex-col justify-center gap-3 ${!props.contentRight && "md:w-2/3"}`}
          >
            <h1 className="text-4xl font-bold">{props.title}</h1>
            <p className="text-2xl">{props.text}</p>
            {props.contentBottom && <>{props.contentBottom}</>}
          </div>
          {props.contentRight && (
            <div className="md:w-1/2">{props.contentRight}</div>
          )}
        </div>
      </Container>
      <Image
        src={`/assets/${props.backgroundImg}.png`}
        alt="Wave"
        width={1920}
        height={1080}
        className="absolute left-0 top-0 -z-50 h-full w-full bg-black object-cover"
      />
    </div>
  );
}
