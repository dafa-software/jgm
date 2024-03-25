"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export default function Form({ variant }: { variant: "thin" | "wide" }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const createForm = api.form.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
      setMail("");
      setPhone("");
      setService("");
      setMessage("");
    },
  });

  console.log(variant); // todo large variant for normal pages

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createForm.mutate({ name, mail, phone, service, message });
      }}
      className="flex flex-col gap-6 rounded-md bg-white p-6 md:min-w-[500px]"
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
          placeholder="Exemplo: ed@asd.com"
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
          placeholder="Exemplo: Consultoria"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full rounded-md border bg-gray-100 px-4 py-2 text-black"
        />
      </div>
      <div>
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
      <div className="flex flex-col gap-3">
        <button
          type="submit"
          className="rounded-md bg-blue-main py-3 font-semibold transition hover:bg-blue-900"
          disabled={createForm.isPending}
        >
          {createForm.isPending
            ? "Enviando..."
            : "Receber orçamento via e-mail"}
        </button>
        <button
          type="submit"
          className="rounded-md bg-green-500 py-3 font-semibold transition hover:bg-blue-900"
          disabled={createForm.isPending}
        >
          {createForm.isPending
            ? "Enviando..."
            : "Receber orçamento via WhatsApp"}
        </button>
      </div>
    </form>
  );
}
