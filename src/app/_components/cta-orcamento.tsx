import React from "react";

const OrcamentoCTA = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-blue-main p-6 font-bold md:flex-row md:gap-6">
      <h2 className="text-xl text-white">Pronto para começar?</h2>
      <button className="rounded-md bg-white p-3 px-6 text-blue-main transition duration-300 hover:bg-blue-100">
        Solicite um orçamento
      </button>
    </div>
  );
};

export default OrcamentoCTA;
