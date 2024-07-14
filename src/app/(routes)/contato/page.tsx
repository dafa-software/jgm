import { HeroCard } from "~/app/_components/cards/hero";
import LandingPageForm from "~/app/_components/forms/landing-page";

export default function TrabalheConosco() {
  return (
    <main>
      <HeroCard
        mainTitle="Contate-nos!"
        backgroundImg="lp-bg-image"
        title="Contato"
        text="Preencha o formulário para entrar em contato conosco!"
        contentBottom={
          <div className="flex flex-col gap-6 md:flex-row">
            <div>
              <p className="font-bold">Telefones</p>
              <p>(21) 3073-7064</p>
              <p>(21) 96412-7226</p>
            </div>
            <div>
              <p className="font-bold">Horário de funcionamento</p>
              <p>Segunda à Sexta-Feira</p>
              <p>09:00 às 18:00</p>
            </div>
          </div>
        }
        contentRight={<LandingPageForm variant="thin" />}
      />
    </main>
  );
}
