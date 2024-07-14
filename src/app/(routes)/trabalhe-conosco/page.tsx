import { HeroCard } from "~/app/_components/cards/hero";
import WorkWithUsForm from "~/app/_components/forms/work-with-us";

export default function TrabalheConosco() {
  return (
    <main>
      <HeroCard
        mainTitle="Trabalhe Conosco"
        backgroundImg="lp-bg-image"
        title="Trabalhe Conosco"
        text="Preencha o formulário e faça parte do nosso time!"
        contentBottom={
          <div className="flex flex-col gap-6 md:flex-row">
            <div>
              <p className="font-bold">WhatsApp</p>
              <p>(21)97737-8854</p>
            </div>
            <div>
              <p className="font-bold">E-mail</p>
              <p>comercial@jgmservicos.com.br</p>
            </div>
          </div>
        }
        contentRight={<WorkWithUsForm />}
      />
    </main>
  );
}
