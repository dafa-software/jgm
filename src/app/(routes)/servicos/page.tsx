import { ServicesCard } from "~/app/_components/cards/services";
import Container from "~/app/_components/container";
import Section from "~/app/_components/section";
import Title from "~/app/_components/title";
import { HomeServicesData } from "~/data";

export default function ServicesPage() {
  return (
    <main className="bg-blue-main bg-[url(/assets/bg-wave.svg)] bg-cover bg-center bg-no-repeat">
      <Container >
        <Section >
          <Title
            title="Nossos serviços"
            text="Oferecemos uma gama abrangente de serviços de limpeza e manutenção, tanto para ambientes comerciais quanto residenciais."
          />
          <div className="flex flex-wrap justify-center gap-4">
            {HomeServicesData.map((service, index) => (
              <div key={index} className="flex overflow-hidden md:w-[23%]">
                <ServicesCard key={index} {...service} />
              </div>
            ))}
          </div>
        </Section>
      </Container>
    </main>
  );
}
