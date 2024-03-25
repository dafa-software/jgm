interface TitleProps {
  title: string;
  text: string;
}

export default function Title(props: TitleProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800">{props.title}</h2>
      <p className="text-xl text-gray-600">{props.text}</p>
    </div>
  );
}
