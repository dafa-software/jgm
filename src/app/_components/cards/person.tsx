import Image from "next/image";

interface PersonCardProps {
  image: string;
  person: string;
  occupation: string;
}

export function PersonCard(props: PersonCardProps) {
  return (
    <div className="flex flex-col rounded-md bg-white shadow-sm transition duration-300 ease-in-out hover:scale-105">
      <Image
        className="h-56 w-full rounded-t-md object-cover object-center"
        src={props.image}
        alt={props.person}
        width={720}
        height={400}
      />
      <div className="p-3">
        <h3 className="text-lg font-bold">{props.person}</h3>
        <p className="text-sm text-gray-500">{props.occupation}</p>
      </div>
    </div>
  );
}
