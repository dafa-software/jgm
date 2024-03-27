import Link from "next/link";
import { HeroCard } from "../_components/cards/hero";
import Container from "../_components/container";
import Section from "../_components/section";
import { HomeServicesData } from "~/data";
import { ServicesCard } from "../_components/cards/services";

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
      <div className="bg-blue-main">
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
            <div className="grid grid-cols-3 gap-6">
              {HomeServicesData.map((props, index) => (
                <ServicesCard key={index} {...props} />
              ))}
            </div>
          </Section>
        </Container>
      </div>
    </main>
  );
}
