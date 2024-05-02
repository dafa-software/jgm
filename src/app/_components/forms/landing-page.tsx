"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export default function LandingPageForm({
  variant,
  title = "Pós obra",
}: {
  variant: "thin" | "wide";
  title: string;
}) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const createForm = api.LandingForm.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
      setMail("");
      setPhone("");
      setService("");
      setMessage("");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createForm.mutate({ name, mail, phone, service, message });
      }}
      className={`${variant === "wide" ? "flex flex-col md:grid md:grid-cols-2" : "flex flex-col"} gap-6 rounded-md bg-white p-6 md:min-w-[500px]`}
    >
      <div>
        <label htmlFor="your-ruby" className="block font-bold text-gray-800">
          Nome
        </label>
        <input
          type="text"
          placeholder="Exemplo: John Doe"
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
          placeholder="Exemplo: john@doe.com"
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
          placeholder="Exemplo: (11) 99999-9999"
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
          value={service || title}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border bg-gray-100 px-4 py-2 text-black"
        />
      </div>
      <div
        className={`flex ${variant === "wide" ? "col-span-2 flex-col md:flex-row" : "flex-col"} w-full gap-3 text-white`}
      >
        <button
          type="submit"
          className={`${variant === "wide" && "md:w-1/2"} rounded-md bg-blue-main px-6 py-3 font-semibold transition hover:bg-blue-900`}
          disabled={createForm.isPending}
        >
          {createForm.isPending
            ? "Enviando..."
            : "Receber esse orçamento via e-mail"}
        </button>
        <button
          type="submit"
          className={`${variant === "wide" && "md:w-1/2"} rounded-md bg-green-500 px-6 py-3 font-semibold transition hover:bg-green-600`}
          disabled={createForm.isPending}
        >
          {createForm.isPending
            ? "Enviando..."
            : "Receber esse orçamento via WhatsApp"}
        </button>
      </div>
    </form>
  );
}
