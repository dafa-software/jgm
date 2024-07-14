interface WhyCardProps {
  icon: React.ReactNode;
  color: string;
  title: string;
}

export default function WhyCard(props: WhyCardProps) {
  return (
    <div className="flex max-w-lg flex-col items-center gap-1 text-center">
      <div
        className={`${props.color} flex h-12 w-12 items-center justify-center rounded-full text-white`}
      >
        {props.icon}
      </div>
      <h3 className="mt-4 text-xl">{props.title}</h3>
    </div>
  );
}
