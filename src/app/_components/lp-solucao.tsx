import { SolutionsCard } from "./cards/solutions";
import Container from "./container";
import { solutions } from "./landing-page";
import Section from "./section";
import Title from "./title";

const SolucaoSection = () => {
  return (
    <Container>
      <Section>
        <Title
          variant="light"
          title="A solução que você precisa está na JGM Serviços"
          text="Com 18 anos de experiência, oferecemos soluções completas de serviços em facilities
              para diversos segmentos que necessitam terceirizar atividades como limpeza, conservação e
              outros, sempre com excelência e qualidade."
        />
        {/* <div className="grid grid-cols-1 gap-3 md:grid-cols-3"> */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          {solutions.map((solution, index) => (
            <SolutionsCard
              key={index}
              img={solution.image}
              text={solution.text}
              title={solution.title}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
};

export default SolucaoSection;
