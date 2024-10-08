import Link from "next/link";
import Image from "next/image";
import { HeroCard } from "../_components/cards/hero";
import Container from "../_components/container";
import Section from "../_components/section";
import {
  FeedbackData,
  HomeLogoData,
  HomePersonData,
  HomeServicesData,
  HomeWhyData,
} from "~/data";
import { ServicesCard } from "../_components/cards/services";
import Carousel from "../_components/carousel";
// import { PlayCircleIcon } from "@heroicons/react/16/solid";
import Title from "../_components/title";
import FeedbackCard from "../_components/cards/feedback";
import { Fragment, Suspense } from "react";
import SuspenseLoader from "../_components/suspense-loader";
import BudgetWithIcon from "../_components/budget-with-icon";
import { PersonCard } from "../_components/cards/person";
import BlogCard from "../_components/cards/blog";
import BigNumbers from "../_components/cards/big-numbers";
import AnimatedSubtitle from "../_components/cards/animated-subtitle";

export default async function Home() {
  const images = [
    // {
    //   src: "/assets/lp-bg-image.png",
    //   subTitle: "Excelência em atender você!",
    // },
    {
      src: "/assets/lp-bg-empresa.png",
      subTitle: "Excelência para sua empresa!",
    },
    {
      src: "/assets/lp-bg-voce.png",
      subTitle: "Excelência para sua casa!",
    },
  ];

  return (
    <Fragment>
      <HeroCard
        mainTitle="Excelência em servir!"
        images={images}
        backgroundImg="lp-bg-image"
        title="Excelência em atender você"
        text="A JGM tem como objetivo atender as necessidades de nossos clientes com qualidade superior ao encontrado no mercado. Com equipes frequentemente treinadas."
        contentBottom={
          <div className="flex flex-col gap-4 py-8 md:flex-row">
            <Link
              href="https://wa.me/5521964127226"
              className="duration-400 transform rounded-md bg-sky-500 px-8 py-4 font-bold  tracking-widest text-white shadow-sm transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:bg-blue-600 hover:text-white"
            >
              Solicite um orçamento →
            </Link>

            <Link
              href="https://grupojgm.vagas.solides.com.br/"
              className="rounded-md border-2 border-white px-8 py-4 font-bold shadow-sm transition duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-blue-main"
            >
              Trabalhe Conosco →
            </Link>
          </div>
        }
      />
      <section className="bg-white bg-[url(/assets/bg-wave.svg)] bg-cover bg-center bg-no-repeat">
        <Container>
          <Section>
            <div className="flex flex-col justify-between gap-3 pb-8 md:flex-row md:items-end md:px-14">
              <div className="flex flex-col gap-3 md:w-1/2">
                <h2 className="text-2xl font-bold text-blue-main  md:text-3xl">
                  Nossos serviços
                </h2>
                <p className="py-4 text-xl text-blue-main">
                  Oferecemos uma gama abrangente de serviços de limpeza e
                  manutenção, tanto para ambientes comerciais quanto
                  residenciais.
                </p>
              </div>
              <Link
                href="/servicos"
                className="text-center text-blue-700 hover:cursor-pointer hover:underline"
              >
                Visualizar todos os serviços →
              </Link>
            </div>

            <Carousel>
              {HomeServicesData.map((props, index) => (
                <div
                  key={index}
                  className="keen-slider__slide flex justify-center"
                >
                  <ServicesCard key={index} {...props} />
                </div>
              ))}
            </Carousel>
          </Section>
        </Container>
      </section>

      {/* <section className="flex items-center justify-center gap-2 bg-[#FFEDD5] p-4 text-blue-main">
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
      </section> */}

      <section className="bg-blue-main">
        <Container>
          <Section>
            <div className="mx-8 flex flex-col gap-12 p-2">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex flex-col gap-3 text-white md:w-2/3">
                  <AnimatedSubtitle
                    text={"Porque escolher a JGM Serviços"}
                    description="A JGM Serviços surge como resposta à frustração com serviços
                    terceirizados, oferecendo soluções satisfatórias para
                    pessoas e empresas. Com atendimento personalizado,
                    profissionais capacitados e equipamentos de qualidade,
                    facilitamos a vida dos clientes para que possam focar no que
                    realmente importa."
                    variant="light"
                  />
                </div>
                <Link
                  href="/contato"
                  className="rounded-md border-2 border-white px-8 py-4 font-bold text-white shadow-sm transition duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-blue-main"
                >
                  Entre em Contato →
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                {HomeWhyData.map((props, index) => (
                  <BudgetWithIcon key={index} {...props} />
                ))}
              </div>

              <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
                <div className="md:w-1/2">
                  <Carousel slides={1}>
                    {images.map((props, index) => (
                      <div key={index} className="keen-slider__slide">
                        <Image
                          src={props.src}
                          alt="bg"
                          className="h-96 w-fit rounded-md object-cover shadow-lg"
                          width={720}
                          height={400}
                          priority
                          quality={100}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 text-xl font-bold text-blue-main">
                  <BigNumbers
                    title={"Funcionarios"}
                    number={800}
                    variant={"secondary"}
                    kind="number"
                    className="text-4xl text-white"
                  />
                  <div className="flex h-0.5 w-[80%] rounded-full bg-white"></div>
                  <BigNumbers
                    title={`de anos
                  experiência`}
                    number={18}
                    variant={"secondary"}
                    kind="number"
                    className="text-4xl text-white"
                  />
                  <div className="flex h-0.5 w-[80%] rounded-full bg-white"></div>
                  <BigNumbers
                    title={"Clientes satisfeitos"}
                    number={200}
                    variant={"secondary"}
                    kind="number"
                    className="text-4xl text-white"
                  />
                </div>
              </div>
            </div>
          </Section>
        </Container>
      </section>
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
            <div className="flex justify-center">
              <div className="columns-1 md:columns-4">
                {HomePersonData.map((props, index) => (
                  <div key={index} className="flex">
                    <PersonCard key={index} {...props} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 items-center justify-center gap-2 border-y p-3 md:flex md:flex-row">
              {HomeLogoData.map((props, index) => (
                <Image
                  key={index}
                  src={props.src}
                  alt={props.alt}
                  width={100}
                  height={100}
                  className="h-fit w-full md:w-10/12"
                  priority
                  quality={75}
                />
              ))}
            </div>
          </Section>
        </Container>
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
                <div key={index} className="keen-slider__slide">
                  <FeedbackCard key={index} {...props} />
                </div>
              ))}
            </Carousel>
          </Section>
        </Container>
      </section>
      <section className="bg-[#F1F5F9] bg-[url(/assets/bg-squares.svg)] bg-cover bg-center bg-no-repeat">
        <Container>
          <Section>
            <Title
              variant="light"
              title="Recentes no Blog"
              text="Alguns dos nossos posts mais recentes em nosso blog, sempre com novas informações."
            />
            <Suspense
              fallback={
                <div className="flex flex-col gap-6 md:flex-row">
                  {[1, 2, 3].map((_, index) => (
                    <SuspenseLoader key={index} />
                  ))}
                </div>
              }
            >
              <BlogCard type="some" />
            </Suspense>
          </Section>
        </Container>
      </section>
    </Fragment>
  );
}
