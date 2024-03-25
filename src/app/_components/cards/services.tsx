import React from "react";

interface ServicesCardProps {
  title: string;
  text: string;
  buttonColor: string;
  buttonHoverColor: string;
  buttonTextColor: string;
  cardColor: string;
}

function ServicesCard({
  title,
  text,
  buttonColor,
  buttonHoverColor,
  buttonTextColor,
}: ServicesCardProps) {
  return (
    <div className="mx-center container mt-10  justify-center justify-items-center">
      <div className="mx-auto max-w-md  rounded bg-white shadow-lg">
        <div className="px-6 py-4">
          <h1 className="text-1 mb-6 text-center font-bold">{title}</h1>
          <p className="texte-center text-base">{text}</p>
        </div>
        <div className="flex justify-center px-6 py-4">
          <button
            className={`bg-${buttonColor} hover:bg-${buttonHoverColor} text-${buttonTextColor} rounded px-4 py-2 font-bold`}
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
