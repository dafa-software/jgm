import React from "react";
import ServicesCard from "../_components/cards/services";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-main text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          JGM
        </h1>
        {}
        <div>
          <ServicesCard
            title="JGMFLIX"
            text="Texto personalizado do seu card vai aqui. Você pode escrever o que quiser para descrever seu conteúdo."
            buttonColor="blue-500"
            buttonHoverColor="blue-700"
            buttonTextColor="white"
            cardColor="bg-black"
          />
        </div>
      </div>
    </main>
  );
}
