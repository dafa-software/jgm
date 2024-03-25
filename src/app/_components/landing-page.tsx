import { HeroCard } from "~/app/_components/cards/hero";
import WhyCard from "~/app/_components/cards/why";
import Container from "~/app/_components/container";
import Form from "~/app/_components/form";
import Section from "~/app/_components/section";
import Title from "~/app/_components/title";
import {
  LandingPageBudgetWithIconData,
  LandingPageFeedbackData,
  LandingPageIconData,
  LandingPageWhyData,
} from "~/data";
import Image from "next/image";
import IconCard from "~/app/_components/cards/icon";
import { LandingPageFeedbackCard } from "~/app/_components/cards/lp-feedback";
import BudgetWithIcon from "~/app/_components/budget-with-icon";

interface LandingPageProps {
  title: string;
  text: string;
}

export default function LandingPage(props: LandingPageProps) {
  return (
    <main>
      <HeroCard
        title={props.title}
        text={props.text}
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
      <div className="bg-[#F1F5F9]">
        <Container>
          <Section>
            <div className={`grid grid-cols-1 gap-12 md:grid-cols-3`}>
              {LandingPageWhyData.map((props, index) => (
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
              variant="light"
              title="Nosso time JGM"
              text="Conheça um Pouco Mais Sobre os Profissionais que Compõem Nossa Equipe"
            />
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Image
                  key={index}
                  src={`/assets/lp-staff-${index}.png`}
                  alt="Placeholder"
                  width={350}
                  height={350}
                />
              ))}
            </div>
          </Section>
        </Container>
      </div>
      <div className="bg-blue-main">
        <Container>
          <Section>
            <Title
              title="Áreas de Atuação"
              text="A JGM atua em diversos seguimentos. "
            />
            <div className="flex flex-col gap-6 md:flex-row md:gap-20">
              {LandingPageIconData.map((props, index) => (
                <IconCard key={index} {...props} />
              ))}
            </div>
          </Section>
          <div className="border border-white" />
          <Section>
            <div className="flex w-full flex-col items-center">
              <div className="flex max-w-lg flex-col gap-6 text-center">
                <h3 className="text-3xl font-semibold text-white">
                  <span className="underline decoration-cyan-200 decoration-4">
                    Mais de 1000 clientes
                  </span>{" "}
                  satisfeitos com os nossos serviços.
                </h3>
                <div className="flex flex-col gap-3">
                  {LandingPageFeedbackData.map((props, index) => (
                    <LandingPageFeedbackCard key={index} {...props} />
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </Container>
        <div className="bg-[#F1F5F9]">
          <Container>
            <Section>
              <Title
                variant="light"
                title="Solicite seu Orçamento Agora Mesmo"
                text="Preencha o formulário abaixo e receba uma mensagem do nosso time comercial"
              />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-12">
                {LandingPageBudgetWithIconData.map((props, index) => (
                  <BudgetWithIcon key={index} {...props} />
                ))}
              </div>
            </Section>
            <Section>
              <Form variant="wide" />
            </Section>
          </Container>
        </div>
      </div>
    </main>
  );
}
