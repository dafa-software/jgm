import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { TRPCReactProvider } from "~/trpc/react";
import Whatsapp from "./_components/whatsapp";
// import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

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
    <html lang="pt-br" className={inter.className}>
      <body className={`font-sans ${inter.variable}`}>
        {/* <GoogleAnalytics gaId="G-2ZVEPQKJ990" /> */}
        {/* <GoogleTagManager gtmId="GTM-2ZVEPQKJ990" /> */}
        <Whatsapp />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Analytics />
      </body>
    </html>
  );
}
