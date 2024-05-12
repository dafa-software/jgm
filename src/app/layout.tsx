import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Whatsapp from "./_components/whatsapp";
export const runtime = "edge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "JGM Serviços",
  description:
    "Atendemos os nossos clientes com qualidade superior ao encontrado no mercado.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`font-sans ${inter.variable}`}>
        <Whatsapp />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
