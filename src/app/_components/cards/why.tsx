interface WhyCardProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  text: string;
}

export default function WhyCard(props: WhyCardProps) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <div
        className={`${props.color} flex h-12 w-12 items-center justify-center rounded-full text-white`}
      >
        {props.icon}
      </div>
      <h3 className="mt-4 text-xl font-bold">{props.title}</h3>
      <p className="text-gray-600">{props.text}</p>
    </div>
  );
}
