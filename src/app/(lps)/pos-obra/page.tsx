import { HeroCard } from "~/app/_components/cards/hero";
import WhyCard from "~/app/_components/cards/why";
import Container from "~/app/_components/container";
import Form from "~/app/_components/form";
import Section from "~/app/_components/section";
import Title from "~/app/_components/title";
import { LandingPageWhData } from "~/data";

export default function PosObra() {
  return (
    <main>
      <HeroCard
        title="Limpeza pós-obra"
        text="Procurando uma empresa de limpeza pós-obra de qualidade e com profissionais especializados? Conheça a melhor empresa de limpeza pós-obra do Rio de Janeiro!"
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
        contentRight={<Form variant="thin" />}
      />
      <div className="bg-white">
        <Container>
          <Section>
            <div className={`grid grid-cols-1 gap-12 md:grid-cols-3`}>
              {LandingPageWhData.map((props, index) => (
                <WhyCard key={index} {...props} />
              ))}
            </div>
          </Section>
        </Container>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 bg-blue-main p-6 font-bold md:flex-row md:gap-6">
        <h2 className="text-xl text-white">Pronto para começar?</h2>
        <button className="rounded-md bg-white p-3 px-6 text-blue-main transition duration-300 hover:bg-blue-100">
          Solicite um orçamento
        </button>
      </div>
      <div className="bg-white">
        <Container>
          <Section>
            <Title
              title="Nosso time JGM"
              text="Conheça um Pouco Mais Sobre os Profissionais que Compõem Nossa Equipe"
            />
          </Section>
        </Container>
      </div>
    </main>
  );
}
