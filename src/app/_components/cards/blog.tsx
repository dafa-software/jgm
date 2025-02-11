import Link from "next/link";
import { SafeImage } from "~/components/SafeImage";
import { api } from "~/trpc/server";

export default async function BlogCard({ type }: { type: "some" | "all" }) {
  let posts;

  try {
    if (type === "some") {
      posts = await api.post.getSomePosts({ limit: 3 });
    } else if (type === "all") {
      posts = await api.post.getAllPosts();
    }

    if (!posts?.posts?.length) {
      return (
        <div className="flex min-h-[200px] items-center justify-center">
          <p className="text-gray-500">Nenhum post encontrado.</p>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-wrap justify-center gap-4">
          {posts.posts.map((post) => (
            <Link
              key={post.id}
              className="overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-lg md:w-[32%]"
              href={`/blog/${post.slug}?id=${post.id}`}
            >
              <SafeImage
                className="h-56 w-full object-cover object-center"
                src={post.image ?? "/logo.png"}
                alt={post.title?.rendered ?? ""}
                width={720}
                height={400}
                unoptimized
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {post.title?.rendered}
                </h2>
                <div
                  className="m-2 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: post?.content?.rendered
                      ? `${post.content.rendered.substring(0, 160)} ...`
                      : "",
                  }}
                />
                <div className="mt-4 flex items-center justify-between gap-2">
                  <p className="text-right text-xs text-slate-500">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                  <p className="cursor-pointer text-right text-sm text-sky-500">
                    Ver mais ...
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <p className="text-gray-500">
          Erro ao carregar os posts. Por favor, tente novamente mais tarde.
        </p>
      </div>
    );
  }
}
