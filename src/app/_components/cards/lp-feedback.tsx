interface LandingPageFeedbackProps {
  text: string;
  person: string;
}

export function LandingPageFeedbackCard(props: LandingPageFeedbackProps) {
  return (
    <div className="flex flex-col gap-6 rounded-md bg-white bg-opacity-95 p-6 shadow-md">
      <p>{props.text}</p>
      <p className="font-medium text-cyan-600">{props.person}</p>
    </div>
  );
}
