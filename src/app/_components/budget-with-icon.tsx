interface IconCardProps {
  icon: React.ReactNode;
  text: string;
}

export default function BudgetWithIcon(props: IconCardProps) {
  return (
    <div className="flex flex-row items-start gap-3 text-blue-main">
      <div className="flex items-center justify-center rounded-full bg-white p-3">
        {props.icon}
      </div>
      <h3 className="mt-2">{props.text}</h3>
    </div>
  );
}
