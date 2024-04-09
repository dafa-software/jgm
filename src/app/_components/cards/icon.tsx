interface IconCardProps {
  icon: React.ReactNode;
  title: string;
}

export default function IconCard(props: IconCardProps) {
  return (
    <div className="flex flex-col items-center gap-1 text-center text-white">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white">
        {props.icon}
      </div>
      <h3 className="mt-2">{props.title}</h3>
    </div>
  );
}
