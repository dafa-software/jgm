import React from "react";

interface ServicesCardProps {
  title: string;
  description: string;
  action1Text: string;
  onAction1Click?: () => void;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  title,
  description,
  action1Text,

  onAction1Click,
}) => {
  return (
    <div className="h-80 max-w-md rounded-lg bg-white p-5 shadow-md">
      <div className="text-center">
        <h5 className="text-lg font-bold text-red-500">{title}</h5>
        <br></br>
        <p className="text-sm text-black">{description}</p>
      </div>

      <div className="flex justify-center">
        <button
          className=" mt-2  rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={onAction1Click}
        >
          {action1Text}
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;
