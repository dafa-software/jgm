interface TitleProps {
  title: string;
  text?: string | React.ReactNode;
  variant?: "light" | "dark";
}

export default function Title(props: TitleProps) {
  return (
    <div className="flex flex-col items-center gap-2 pb-8 text-center">
      <h2
        className={`text-3xl font-bold ${props.variant === "light" ? "text-blue-main" : "text-white"}`}
      >
        {props.title}
      </h2>
      {props.text && (
        <p
          className={`text-center text-xl md:w-[60%] ${props.variant === "light" ? "text-gray-600" : "text-gray-50"}`}
        >
          {props.text}
        </p>
      )}
    </div>
  );
}
