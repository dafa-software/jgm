import Container from "../container";

interface HeroCardProps {
  title: string;
  text: string;
  contentBottom?: React.ReactNode;
  contentRight?: React.ReactNode;
}

export function HeroCard(props: HeroCardProps) {
  return (
    <div className="flex justify-center bg-black bg-[url('/assets/lp-bg-image.png')] bg-cover bg-center bg-no-repeat text-white md:min-h-[500px]">
      <Container>
        <div className="flex flex-col gap-12 p-6 md:flex-row">
          <div className="flex flex-col justify-center gap-3">
            <h1 className="text-4xl font-bold">{props.title}</h1>
            <p className="text-2xl">{props.text}</p>
            {props.contentBottom && <>{props.contentBottom}</>}
          </div>
          {props.contentRight && (
            <div className="md:w-1/2">{props.contentRight}</div>
          )}
        </div>
      </Container>
    </div>
  );
}
