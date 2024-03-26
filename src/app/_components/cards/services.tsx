import Container from "../container";

interface ServicesCardProps {
  title: string;
  text: string;
  titleColor?: string;
  textColor?: string;
  contentBottom?: React.ReactNode;
  contentRight?: React.ReactNode;
  containerBackgroundColor?: string; // Nova propriedade para a cor de fundo do contêiner
}

export function ServicesCard(props: ServicesCardProps) {
  return (
    <div
      className={`flex justify-center ${props.containerBackgroundColor ?? "bg-black"} bg-cover bg-center bg-no-repeat text-white md:min-h-[500px]`}
    >
      <Container>
        <div className={props.containerBackgroundColor ?? "bg-black"} />
        <div className="flex flex-col gap-12 p-6 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className={`text-4xl font-bold ${props.titleColor}`}>
              {props.title}
            </h1>
            <p className={`text-2xl ${props.textColor}`}>{props.text}</p>
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
