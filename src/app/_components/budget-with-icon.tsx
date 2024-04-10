interface IconCardProps {
  icon: React.ReactNode;
  text: string;
  variant?: string;
}

export default function BudgetWithIcon(props: IconCardProps) {
  const isPrimary = props.variant === "primary" ? true : false;
  return (
    <div
      className={`flex flex-row items-start gap-3  ${isPrimary ? "text-black" : "text-white"}`}
    >
      <div
        className={`flex items-center justify-center rounded-full bg-blue-main p-3 ${isPrimary ? "text-white" : "text-white"}`}
      >
        {props.icon}
      </div>
      <h3 className="mt-2">{props.text}</h3>
    </div>
  );
}
