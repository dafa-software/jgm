import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getAllPosts, getSinglePost } from "~/services/posts.service";

let post = {
  id: 1,
  name: "Hello World",
};

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      post = { id: post.id + 1, name: input.name };
      return post;
    }),

  getLatest: publicProcedure.query(() => {
    return post;
  }),

  getAllPosts: publicProcedure.query(async () => {
    const posts = await getAllPosts();
    return { posts };
  }),

  getSomePosts: publicProcedure
    .input(
      z.object({
        limit: z.number().default(10),
      }),
    )
    .query(async ({ input }) => {
      const posts = await getAllPosts();
      return { posts: posts.slice(0, input.limit) };
    }),

  getSinglePost: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ input }) => {
      const post = await getSinglePost(input.id);
      return post;
    }),
});
