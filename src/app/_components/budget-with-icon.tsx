import Image from "next/image";

interface IconCardProps {
  icon: string | React.ReactNode;
  text: string;
  variant?: string;
}

export default function BudgetWithIcon(props: IconCardProps) {
  const isPrimary = props.variant === "primary" ? true : false;
  return (
    <div
      className={`flex flex-row items-center gap-6  ${isPrimary ? "text-black" : "text-white"}`}
    >
      <>
        {typeof props.icon === "string" ? (
          <Image src={props.icon} alt="icon" width={90} height={90} />
        ) : (
          <div
            className={`flex items-center justify-center rounded-full bg-blue-main p-3 ${isPrimary ? "text-white" : "text-white"}`}
          >
            {props.icon}
          </div>
        )}
      </>
      <h3 className="mt-2">{props.text}</h3>
    </div>
  );
}
