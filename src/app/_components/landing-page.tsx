"use client";

import { HeroCard } from "~/app/_components/cards/hero";
import WhyCard from "~/app/_components/cards/why";
import Container from "~/app/_components/container";
import Section from "~/app/_components/section";
import Title from "~/app/_components/title";
import {
  FeedbackData,
  HomeLogoData,
  HomePersonData,
  LandingPageIconData,
  LandingPageWhyData,
} from "~/data";
import IconCard from "~/app/_components/cards/icon";
import { LandingPageFeedbackCard } from "~/app/_components/cards/lp-feedback";
import BudgetWithIcon from "~/app/_components/budget-with-icon";
import LandingPageForm from "./forms/landing-page";

import { Fragment } from "react";
import SolucaoSection from "./lp-solucao";
import OrcamentoCTA from "./cta-orcamento";
import AnimatedSubtitle from "./cards/animated-subtitle";
import { PersonCard } from "./cards/person";

import Image from "next/image";

interface LandingPageProps {
  slug?: string;
  title: string;
  text: string;
  backgroundImg: string;
  mainTitle: string;
}

export const solutions = [
  {
    title: "Recepção e Atendimento",
    text: "Oferecemos serviços de recepção e atendimento, tanto para ambientes comerciais quanto residenciais.",
    image: "/assets/lp-staff-terceirizacao3.png",
  },
  {
    title: "Limpeza e Conservação",
    text: "Serviços de limpeza e conservação, com profissionais experientes e bem treinados.",
    image: "/assets/lp-staff-terceirizacao2.png",
  },
  {
    title: "Portaria",
    text: "Oferecemos serviços de portária, levando um ambiente seguro para todos os clientes.",
    image: "/assets/lp-staff-terceirizacao1.png",
  },
  {
    title: "Outros facilities",
    text: "Oferecemos outros serviços, como manutenção de jardins, piscinas, jardins e outros.",
    image: "/assets/lp-staff-terceirizacao4.png",
  },
];

export default function LandingPage(props: LandingPageProps) {
  // const slug = props.slug ?? "";
  return (
    <Fragment>
      <HeroCard
        mainTitle={props.mainTitle}
        backgroundImg={props.backgroundImg}
        title={props.title}
        text={props.text}
        contentRight={<LandingPageForm variant="thin" title={props.title} />}
      />

      <div className="bg-white">
        <SolucaoSection />
      </div>

      <OrcamentoCTA />

      <div className="bg-[#F1F5F9] bg-[url(/assets/bg-squares.svg)] bg-cover bg-center bg-no-repeat py-4">
        <Container>
          <Section>
            <Title
              variant="light"
              title="Qual a diferença da JGM para as outras terceirizadoras?"
              text={
                <>
                  A JGM Serviços se destaca pelo{" "}
                  <strong>investimento contínuo em treinamento</strong>,
                  assegurando um trabalho de <strong>alta qualidade</strong>.
                  Nossos processos e metodologias, agregados com tecnologia,
                  garantem um atendimento diferenciado na terceirização de
                  serviços.
                </>
              }
            />
            <div className="flex flex-wrap justify-center gap-12 pt-4 md:gap-6">
              <div className="mx-auto max-w-7xl">
                <div className="mx-auto grid max-w-2xl grid-cols-2 items-center justify-center gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                  {LandingPageWhyData.map((props, index) => (
                    <WhyCard key={index} {...props} />
                  ))}
                </div>
              </div>
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

        <section className="bg-gradient-to-t from-white to-[#F1F5F9]">
          <Container>
            <Section>
              {/* <Title
              variant="light"
              title="Alguns dos Nossos Clientes"
              text="Confira alguns de nossos clientes! "
            /> */}
              <AnimatedSubtitle
                text="Alguns dos Nossos Clientes"
                description="Confira alguns de nossos clientes!"
                variant="dark"
                className="flex flex-col items-center gap-2 pb-8 text-center"
              />

              <div className="mt-6 grid grid-cols-2 items-center justify-center gap-2 border-y p-3 md:flex md:flex-row">
                {HomeLogoData.map((props, index) => (
                  <Image
                    key={index}
                    src={props.src}
                    alt={props.alt}
                    width={100}
                    height={100}
                    className="h-fit w-full md:w-10/12"
                  />
                ))}
              </div>
            </Section>
          </Container>
        </section>

        <div className="bg-[#F1F5F9]">
          <Container>
            <Section>
              <Title
                variant="light"
                title="Solicite uma cotação"
                text="Preencha o formulário abaixo e receba uma mensagem do nosso time comercial"
              />
              {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-12">
                {LandingPageBudgetWithIconData.map((props, index) => (
                  <BudgetWithIcon key={index} {...props} />
                ))}
              </div> */}
              <LandingPageForm variant="wide" title={props.title} />
            </Section>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}
