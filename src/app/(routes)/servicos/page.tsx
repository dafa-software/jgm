import { ServicesCard } from "~/app/_components/cards/services";
import Container from "~/app/_components/container";
import Section from "~/app/_components/section";
import Title from "~/app/_components/title";
import { HomeServicesData } from "~/data";

export default function ServicesPage() {
  return (
    <main className="bg-blue-main">
      <Container>
        <Section>
          <Title
            title="Nossos serviços"
            text="Oferecemos uma gama abrangente de serviços de limpeza e manutenção, tanto para ambientes comerciais quanto residenciais."
          />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {HomeServicesData.map((service, index) => (
              <ServicesCard key={index} {...service} />
            ))}
          </div>
        </Section>
      </Container>
    </main>
  );
}
