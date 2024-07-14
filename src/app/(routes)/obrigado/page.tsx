/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import Marquee from "~/components/magicui/marquee";
import { ChevronLeft, HeartHandshake } from "lucide-react";
import Container from "~/app/_components/container";
import Link from "next/link";

const reviews = [
  {
    name: "Karoline M. de Vasconcelos",
    body: "“Amei a experiência de trabalhar com a JGM. Funcionários muito educados e focados na entrega do resultado.”",
    username: "@karoline",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Pierre",
    body: "“A empresa JGM presta serviços de limpeza no meu escritório desde o início de operação”",
    username: "@pierre",
    img: "https://avatar.vercel.sh/pierre",
  },
  {
    name: "Orliane Rangel",
    body: "“Excelente atenção e educação. Serviço realizado com sucesso.”",
    username: "@orliane",
    img: "https://avatar.vercel.sh/orliane",
  },
  {
    name: "Carla",
    body: "Profissionais eficientes e educados!",
    username: "@carla",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Ana Paula",
    body: "Pontuais e profissionais, eu adorei! Super recomendo! ",
    username: "@anapaula",
    img: "https://avatar.vercel.sh/jenny?text=AP",
  },
  {
    name: "Diego Coutinho",
    body: "A empresa sempre prestando o melhor serviço. Parabéns sempre pelo profissionalismo!",
    username: "@diegocoutinho",
    img: "https://avatar.vercel.sh/diegocoutinho?text=DC",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ThankYouPage = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-6 py-16">
      <Container>
        <div className="flex w-full flex-col items-center justify-center rounded-[2rem] p-10 py-14">
          <div className="group relative flex w-full max-w-[1000px] flex-col items-center justify-center gap-12 overflow-hidden rounded-[2rem] border p-10 py-14">
            <div className="absolute rotate-[35deg]">
              <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s]"
                repeat={3}
              >
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
            </div>
            <div className="z-10 mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md lg:size-32 dark:bg-black/10">
              <HeartHandshake className="mx-auto size-16 text-black lg:size-24 dark:text-white" />
            </div>
            <div className="z-10 mt-4 flex flex-col items-center gap-6 text-center text-black dark:text-white">
              <h1 className="text-2xl font-bold lg:text-4xl">
                Obrigado por nos escolher! Conte sempre a JGM!
              </h1>
              <p className="mt-2">
                Conte sempre conosco para te ajudar a alcançar seus objetivos,
                focando no que mais importa para você!
              </p>
              <Link
                href="/"
                className={`group mt-4 rounded-[2rem] px-6 ${buttonVariants({
                  size: "lg",
                  variant: "outline",
                })}`}
              >
                <ChevronLeft className="mr-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
                Voltar para o site
              </Link>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-white to-70% dark:to-black" />
          </div>
        </div>
      </Container>
    </div>
  );
};

const ReviewCard = ({
  img,
  name,
  // username,
  body,
}: {
  img?: string;
  name: string;
  // username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {img && (
          <picture>
            <img
              className="rounded-full"
              width="32"
              height="32"
              alt=""
              src={img}
            />
          </picture>
        )}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default ThankYouPage;
