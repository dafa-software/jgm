import Image from "next/image";

interface IconCardProps {
  icon: string;
  text: string;
  variant?: string;
}

export default function BudgetWithIcon(props: IconCardProps) {
  const isPrimary = props.variant === "primary" ? true : false;
  return (
    <div
      className={`flex flex-row items-center gap-6  ${isPrimary ? "text-black" : "text-white"}`}
    >
      <Image src={props.icon} alt="icon" width={90} height={90} />
      <h3 className="mt-2">{props.text}</h3>
    </div>
  );
}
