import Image from "next/image";
import { api } from "~/trpc/server";

export default async function BlogCard({ type }: { type: "some" | "all" }) {
  let posts;

  if (type === "some") {
    posts = await api.post.getSomePosts({ limit: 3 });
  } else if (type === "all") {
    posts = await api.post.getAllPosts();
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-wrap justify-center gap-4">
        {posts?.posts.map((post) => (
          <div
            key={post.id}
            className="overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-lg md:w-[32%]"
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
              />
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
