import { Suspense } from "react";
import BlogCard from "~/app/_components/cards/blog";
import Container from "~/app/_components/container";
import Section from "~/app/_components/section";
import SuspenseLoader from "~/app/_components/suspense-loader";
import Title from "~/app/_components/title";
export const runtime = "edge";

export default async function Blog() {
  return (
    <main className="bg-blue-main bg-[url(/assets/bg-wave.svg)] bg-cover bg-center bg-no-repeat py-10">
      <Container>
        <Section>
          <Title title="Blog" text="Confira nossas últimas postagens" />
          <Suspense fallback={<SuspenseLoader />}>
            <BlogCard type="all" />
          </Suspense>
        </Section>
      </Container>
    </main>
  );
}
