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
import { api } from "~/trpc/server";
import Image from "next/image";

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
      <section className="bg-[#F1F5F9]">
        <Container>
          <Section>
            <Title
              variant="light"
              title="Recentes no Blog"
              text="Alguns dos nossos posts mais recentes em nosso blog, sempre com novas informações."
            />
            <Blog />
          </Section>
        </Container>
      </section>
      {/* <section className="bg-white">
        <Container>
          <Section>
            <h2>Porque escolher a JGM Serviços</h2>
            <p>
              A JGM Serviços surge como resposta à frustração com serviços
              terceirizados, oferecendo soluções satisfatórias para pessoas e
              empresas. Com atendimento personalizado, profissionais capacitados
              e equipamentos de qualidade, facilitamos a vida dos clientes para
              que possam focar no que realmente importa.
            </p>
          </Section>
        </Container>
      </section> */}
    </main>
  );
}

async function Blog() {
  const posts = await api.post.getSomePosts({ limit: 3 });

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-wrap justify-center gap-4">
        {posts.posts.map((post) => (
          <div
            key={post.id}
            className="overflow-hidden rounded-lg bg-white shadow-md md:w-[30%]"
          >
            <Image
              className="h-56 w-full object-cover object-center"
              src={post.image ?? "/logo.png"}
              alt={post.title.rendered ?? ""}
              width={720}
              height={400}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {post.title.rendered}
              </h2>
              <div
                className="m-2 text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: post?.content.rendered.substring(0, 160) || "",
                }}
              ></div>
              <div className="mt-4 flex items-center justify-between">
                <p className="mt-2 text-gray-500">
                  Categorias: {post.categories[0]}
                </p>
                <p className="text-slate-500">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
