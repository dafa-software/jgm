"use client";

import React from "react";
import { TracingBeam } from "~/app/_components/ui/tracing-beams";
import { api } from "~/trpc/react";
import { useSearchParams } from "next/navigation";

const BlogPage = () => {
  const searchParams = useSearchParams();

  const blogId = Number(searchParams.get("id")) || 0;

  const { data: blogPost, isLoading } = api.post.getSinglePost.useQuery({
    id: blogId,
  });

  const { post } = blogPost ?? {};

  if (isLoading || !post)
    return (
      <div className="p-32 text-center">Carregando conteúdo do blog...</div>
    );

  return (
    <>
      {post ? (
        <TracingBeam>
          <div className="p-12">
            <div className="flex flex-col items-center gap-2">
              <div className="p-4">
                <h2 className="py-4 text-3xl font-semibold text-gray-800">
                  {post.title?.rendered}
                </h2>
                <div
                  className="items-center justify-center gap-y-96 text-black"
                  dangerouslySetInnerHTML={{
                    __html:
                      post.content?.rendered.replaceAll(
                        "</p>\n",
                        "<br /><br />",
                      ) || "",
                  }}
                />
              </div>
            </div>
          </div>
        </TracingBeam>
      ) : undefined}
    </>
  );
};

export default BlogPage;
