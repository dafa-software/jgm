"use client";

import { useState } from "react";

// import { api } from "~/trpc/react";

export default function LandingPageForm({
  variant,
  title = "Nome do serviço",
}: {
  variant: "thin" | "wide";
  title?: string;
}) {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(title);
  const [message, setMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  // const createForm = api.LandingForm.create.useMutation({
  //   onSuccess: () => {
  //     console.log("🚀🚀🚀 success");
  //     setSubmitMessage("Sucesso ao enviar o formulário!");
  //   },
  // });

  // const handleFormSubmit = useCallback(
  //   (event: FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();

  //     const data = new FormData(event.currentTarget);

  //     console.log("Olhar aqui", data);

  //     const name = data.get("name") as string;
  //     const mail = data.get("mail") as string;
  //     const phone = data.get("phone") as string;
  //     const service = data.get("service") as string;
  //     const message = data.get("message") as string;

  //     console.log("🚀🚀🚀 submit", { name, mail, phone, service, message });

  //     createForm.mutate({ name, mail, phone, service, message });
  //   },
  //   [createForm],
  // );

  // const handleWhatsappClick = useCallback(
  //   (event: FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();

  //     const data = new FormData(event.currentTarget);

  //     console.log("Olhar aqui", data);

  //     const name = data.get("name") as string;
  //     const phone = data.get("phone") as string;
  //     const service = data.get("service") as string;
  //     const message = data.get("message") as string;

  //     router.push(
  //       "https://api.whatsapp.com/send/?phone=5521964127226&text=" +
  //         encodeURIComponent(
  //           whatsappMessage({ name, phone, message, service }),
  //         ),
  //     );
  //   },
  //   [router],
  // );

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
            placeholder={`Exemplo: ${title}`}
            value={title}
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
            className={`${variant === "wide" && "md:w-1/2"} rounded-md bg-blue-main px-6 py-3 font-semibold transition hover:bg-blue-900`}
            // disabled={createForm.isPending}
            onClick={() => {
              if (name && mail && phone && service && message) {
                window.open(
                  `mailto:comercial@jgmservicos.com.br?subject=Site%20-Or%C3%A7amento%20de%20servi%C3%A7o%20-%20${service}&body=${encodeURIComponent(
                    formattedMessage({ name, phone, message, service }),
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
              : "Receber esse orçamento via e-mail"} */}
            Receber esse orçamento via e-mail
          </button>
          <button
            type="button"
            className={`${variant === "wide" && "md:w-1/2"} rounded-md bg-green-500 px-6 py-3 font-semibold transition hover:bg-green-600`}
            // disabled={createForm.isPending}
            onClick={() => {
              if (name && phone && service && message) {
                window.open(
                  `https://api.whatsapp.com/send/?phone=5521964127226&text=${encodeURIComponent(
                    formattedMessage({ name, phone, message, service }),
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
            Receber esse orçamento via WhatsApp
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
