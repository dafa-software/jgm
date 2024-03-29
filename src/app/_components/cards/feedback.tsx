interface FeedbackCardProps {
  text: string;
  person: string;
}

export default function FeedbackCard(props: FeedbackCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded-md p-6">
      <p className="font-bold">{props.text}</p>
      <p className="font-semibold text-blue-main">{props.person}</p>
    </div>
  );
}
