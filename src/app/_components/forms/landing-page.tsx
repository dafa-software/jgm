"use client";

import { MailIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import {
  sendConfirmationEmailToClient,
  sendInternalEmailToSales,
} from "~/server/api/email";
import Image from "next/image";

// import { api } from "~/trpc/react";

export default function LandingPageForm({
  variant,
  title = "",
  forceService = false,
}: {
  variant: "thin" | "wide";
  title?: string;
  forceService?: boolean;
}) {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(title);
  const [message, setMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      <div
        className={`${variant === "wide" ? "flex flex-col md:grid md:min-w-[850px] md:grid-cols-2 " : "flex flex-col md:min-w-[500px]"} gap-6 rounded-md bg-white p-6 `}
      >
        {/*  <form
       onSubmit={(e) => {
         e.preventDefault();
         if (typeSubmit === "email") {
           handleFormSubmit(e);
         } else {
           handleWhatsappClick(e);
         }
       }}
       className={`${variant === "wide" ? "flex flex-col md:grid md:min-w-[850px] md:grid-cols-2 " : "flex flex-col md:min-w-[500px]"} gap-6 rounded-md bg-white p-6 `}
     > */}
        <div>
          <label htmlFor="your-ruby" className="block font-bold text-gray-800">
            Nome
          </label>
          <input
            type="text"
            placeholder="Exemplo: Francisco da Silva"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border bg-gray-100 px-4 py-2 text-black"
          />
        </div>
        <div>
          <label htmlFor="your-ruby" className="block font-bold text-gray-800">
            E-mail
          </label>
          <input
            type="email"
            placeholder="Exemplo: seuemail@gmail.com"
            name="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="w-full rounded-md border bg-gray-100 px-4 py-2 text-black"
          />
        </div>
        <div>
          <label htmlFor="your-ruby" className="block font-bold text-gray-800">
            Telefone
          </label>
          <input
            type="text"
            placeholder="Exemplo: (21) 99999-9999"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-md border bg-gray-100 px-4 py-2 text-black"
          />
        </div>
        <div>
          <label htmlFor="your-ruby" className="block font-bold text-gray-800">
            Serviço
          </label>
          <input
            type="text"
            placeholder={`Exemplo: ${forceService ? title : ""}`}
            value={forceService ? title : service}
            name="service"
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-md border bg-gray-100 px-4 py-2 text-black"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="your-ruby" className="block font-bold text-gray-800">
            Mensagem
          </label>
          <textarea
            placeholder="Exemplo: Gostaria de saber mais sobre..."
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-md border bg-gray-100 px-4 py-2 text-black"
          />
        </div>
        <div
          className={`flex ${variant === "wide" ? "col-span-2 flex-col md:flex-row" : "flex-col"} w-full gap-3 text-white`}
        >
          <button
            type="button"
            className={`${variant === "wide" && "md:w-1/2"} flex items-center justify-center rounded-md bg-blue-main px-6 py-3 font-semibold transition hover:bg-blue-900`}
            // disabled={createForm.isPending}
            onClick={async () => {
              setSubmitMessage("");
              if (name && mail && phone && service && message) {
                setIsSubmitting(true);
                const id = toast.loading("Enviando informações...");
                // window.open(
                //   `mailto:comercial@jgmservicos.com.br?subject=Site%20-Or%C3%A7amento%20de%20servi%C3%A7o%20-%20${service}&body=${encodeURIComponent(
                //     formattedMessage({ name, phone, message, service }),
                //   )}`,
                //   "_blank",
                // );

                const data = await sendConfirmationEmailToClient(
                  mail,
                  name,
                  service ?? title,
                );

                await new Promise((resolve) => setTimeout(resolve, 5000));

                await sendInternalEmailToSales(
                  "comercial@jgmservicos.com.br",
                  name,
                  phone,
                  message,
                  service ?? title,
                );

                if (!data) {
                  setSubmitMessage("Erro ao enviar e-mail!");
                  return;
                }

                setSubmitMessage("E-mail enviado com sucesso!");
                toast.success("E-mail enviado com sucesso!", {
                  id,
                });
              } else {
                setSubmitMessage(
                  "Por favor, preencha todos os campos antes de enviar.",
                );
              }
              setIsSubmitting(false);
            }}
            disabled={isSubmitting}
          >
            <MailIcon className="mr-2 h-5 w-5" />
            {isSubmitting ? "Enviando..." : "Receber esse orçamento via e-mail"}
          </button>
          <button
            type="button"
            className={`${variant === "wide" && "md:w-1/2"} flex items-center justify-center rounded-md bg-green-500 px-6 py-3 font-semibold transition hover:bg-green-600`}
            onClick={() => {
              if (service || !forceService) {
                window.open(
                  `https://api.whatsapp.com/send/?phone=5521964127226&text=${encodeURIComponent(
                    `Olá, vim do site e gostaria de um orçamento para o serviço de ${service}. Obrigado.`,
                  )}`,
                  "_blank",
                );
              } else {
                setSubmitMessage(
                  "Por favor, preencha todos os campos antes de enviar.",
                );
              }
            }}
          >
            {/* {createForm.isPending
              ? "Enviando..."
              : "Receber esse orçamento via WhatsApp"} */}
            <Image
              src="/logos/whatsapp.svg"
              alt=""
              width={20}
              height={20}
              className="mr-2"
            />
            Pedir orçamento via WhatsApp
          </button>
        </div>
        {/* <span className="text-center text-sm font-bold text-red-500">
          {JSON.stringify({ name, mail, phone, service, message })}
        </span> */}
        <span className="text-center text-sm font-bold text-green-500">
          {submitMessage && <p>{submitMessage}</p>}
        </span>
        {/* </form> */}
      </div>
    </>
  );
}

function formattedMessage({
  name,
  phone,
  message,
  service,
}: {
  name: string;
  phone: string;
  message: string;
  service: string;
}) {
  return `Olá JGM, gostaria de saber mais sobre o serviço ${service} e gostaria de saber se você pode me ajudar.
  
  Meu nome é ${name} e meu telefone é ${phone}.
  
  Mensagem:
  ${message}
  `;
}
