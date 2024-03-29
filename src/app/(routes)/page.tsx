import Link from "next/link";
import { HeroCard } from "../_components/cards/hero";
import Container from "../_components/container";
import Section from "../_components/section";
import { FeedbackData, HomeServicesData } from "~/data";
import { ServicesCard } from "../_components/cards/services";
import Carousel from "../_components/carousel";
import { PlayCircleIcon } from "@heroicons/react/16/solid";
import Title from "../_components/title";
import FeedbackCard from "../_components/cards/feedback";

export default async function Home() {
  return (
    <main>
      <HeroCard
        backgroundImg="lp-bg-image"
        title="Excelência em atender você"
        text="A JGM tem como objetivo atender as necessidades de nossos clientes com qualidade superior ao encontrado no mercado. Com equipes frequentemente treinadas."
        contentBottom={
          <div className="flex flex-row gap-3">
            <Link
              href="https://wa.me/5521977378854"
              className="rounded-md bg-blue-main px-8 py-4 font-bold shadow-sm"
            >
              Solicite um orçamento →
            </Link>
            <Link
              href="https://wa.me/5521977378854"
              className="rounded-md border-2 border-white px-8 py-4 font-bold shadow-sm"
            >
              Trabalhe Conosco →
            </Link>
          </div>
        }
      />
      <section className="bg-blue-main">
        <Container>
          <Section>
            <div className="flex flex-col justify-between gap-3 pb-8 md:flex-row md:items-end">
              <div className="flex flex-col gap-3 md:w-1/2">
                <h2 className="text-2xl font-bold  text-white">
                  Nossos serviços
                </h2>
                <p className="text-lg text-gray-200">
                  Oferecemos uma gama abrangente de serviços de limpeza e
                  manutenção, tanto para ambientes comerciais quanto
                  residenciais.
                </p>
              </div>
              <p className="text-cyan-200 hover:cursor-pointer hover:underline">
                Visualizar todos os serviços →
              </p>
            </div>
            <Carousel>
              {HomeServicesData.map((props, index) => (
                <div key={index} className="keen-slider__slide flex">
                  <ServicesCard key={index} {...props} />
                </div>
              ))}
            </Carousel>
          </Section>
        </Container>
      </section>
      <section className="flex items-center justify-center gap-2 bg-[#FFEDD5] p-4 text-blue-main">
        <PlayCircleIcon className="h-6 w-6" />
        <p>
          Interessado em saber como nossas soluções funcionam para você? Assista
          ao nosso{" "}
          <Link
            target="_blank"
            className="underline"
            href="https://www.instagram.com/reel/C3qCEZCA89V/?hl=en"
          >
            vídeo de apresentação.
          </Link>
        </p>
      </section>
      <section className="bg-white">
        <Container>
          <Section>
            <Title
              variant="light"
              title="Depoimentos"
              text="Veja o que nossos clientes têm a dizer! Confira os depoimentos mais recentes que recebemos sobre nossos produtos e serviços."
            />
            <Carousel>
              {FeedbackData.map((props, index) => (
                <div key={index} className="keen-slider__slide flex">
                  <FeedbackCard key={index} {...props} />
                </div>
              ))}
            </Carousel>
          </Section>
        </Container>
      </section>
    </main>
  );
}
