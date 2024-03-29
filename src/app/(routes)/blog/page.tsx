/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import Container from "~/app/_components/container";
import Section from "~/app/_components/section";
import Title from "~/app/_components/title";
import { api } from "~/trpc/server";

export default async function Blog() {
  const allPosts = await api.post.getAllPosts();

  return (
    <main className="bg-blue-main">
      <Container>
        <Section>
          <Title title="Blog" text="Confira nossas últimas postagens" />
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-wrap justify-center gap-4">
              {allPosts.posts.map((post) => (
                <div
                  key={post.id}
                  className="w-[30%] overflow-hidden rounded-lg bg-white shadow-lg"
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
        </Section>
      </Container>
    </main>
  );
}
