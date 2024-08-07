import { HeroCard } from "~/app/_components/cards/hero";
import Container from "~/app/_components/container";
import Section from "~/app/_components/section";
import Title from "~/app/_components/title";
import {
  FeedbackData,
  LandingPageBudgetWithIconData,
  LandingPageIconData,
  LandingPageWhyDataWithText,
} from "~/data";
import IconCard from "~/app/_components/cards/icon";
import { LandingPageFeedbackCard } from "~/app/_components/cards/lp-feedback";
import BudgetWithIcon from "~/app/_components/budget-with-icon";
import LandingPageForm from "./forms/landing-page";
import WhyCardWithText from "./cards/why-with-text";

import Image from "next/image";
import Link from "next/link";

interface LandingPageProps {
  slug?: string;
  title: string;
  text: string;
  backgroundImg: string;
  mainTitle: string;
}

export default function LandingPageGeneral(props: LandingPageProps) {
  const slug = props.slug ?? "";
  return (
    <main>
      <HeroCard
        mainTitle={props.mainTitle}
        backgroundImg={props.backgroundImg}
        title={props.title}
        text={props.text}
        contentRight={<LandingPageForm variant="thin" title={props.title} />}
      />
      <div className="bg-[#F1F5F9] bg-[url(/assets/bg-squares.svg)] bg-cover bg-center bg-no-repeat">
        <Container>
          <Section>
            <Title
              variant="light"
              title="Por que contratar a JGM"
              text={
                <>
                  Conheça os <strong>diferenciais</strong> que fazem da JGM a{" "}
                  <strong>melhor opção</strong> para a sua casa ou o seu
                  negócio.
                </>
              }
            />
            <div className="flex flex-wrap justify-center gap-12 md:gap-6">
              {LandingPageWhyDataWithText.map((props, index) => (
                <div key={index} className="flex overflow-hidden md:w-[30%]">
                  <WhyCardWithText key={index} {...props} />
                </div>
              ))}
            </div>
          </Section>
        </Container>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 bg-blue-main p-6 font-bold md:flex-row md:gap-6">
        <h2 className="text-xl text-white">Pronto para começar?</h2>
        <Link
          className="rounded-md bg-white p-3 px-6 text-blue-main transition duration-300 hover:bg-blue-100"
          href="https://wa.me/5521964127226"
          target="_blank"
        >
          Solicite um orçamento
        </Link>
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
                  src={`${props.slug ? `/assets/lp-staff-${slug}${index}.png` : `/assets/lp-staff-${index}.png`}`}
                  alt="Placeholder"
                  width={350}
                  height={350}
                  className=""
                  priority
                  quality={100}
                />
              ))}
            </div>
          </Section>
        </Container>
      </div>
      <div className="bg-blue-main bg-[url(/assets/bg-wave.svg)] bg-cover bg-center bg-no-repeat">
        <Container>
          <Section>
            <Title
              title="Áreas de Atuação"
              text="A JGM atua em diversos segmentos. "
            />
            <div className="flex flex-col gap-16 md:flex-row md:gap-20">
              <div className="mx-auto grid max-w-2xl grid-cols-2 items-center justify-center gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                {LandingPageIconData.map((props, index) => (
                  <IconCard key={index} {...props} />
                ))}
              </div>
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
                  {FeedbackData.slice(0, 3).map((props, index) => (
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
              <LandingPageForm variant="wide" title={props.title} />
            </Section>
          </Container>
        </div>
      </div>
    </main>
  );
}
