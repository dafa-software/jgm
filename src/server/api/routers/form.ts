import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const formRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        mail: z.string().email(),
        phone: z.string().min(1),
        service: z.string().min(1),
        message: z.string().min(1),
      }),
    )
    .mutation(async ({ input }) => {
      console.log(input);
    }),
});
