"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export default function WorkWithUsForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const createForm = api.workForm.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
      setMail("");
      setPhone("");
      setMessage("");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createForm.mutate({ name, mail, phone, message });
      }}
      className="flex flex-col gap-6 rounded-md bg-white p-6 md:min-w-[500px]"
    >
      <div>
        <label htmlFor="your-ruby" className="block font-bold text-gray-800">
          Nome
        </label>
        <input
          type="text"
          placeholder="Exemplo: Francisco da Silva"
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
          placeholder="Exemplo: (21) 99876-5432"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-md border bg-gray-100 px-4 py-2 text-black"
        />
      </div>

      <div className="col-span-2">
        <label htmlFor="your-ruby" className="block font-bold text-gray-800">
          Cole seu currículo aqui
        </label>
        <textarea
          placeholder="Exemplo: https://www.linkedin.com/in/johndoe"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border bg-gray-100 px-4 py-2 text-black"
        />
      </div>
      <div className="flex w-full flex-col gap-3 text-white">
        <button
          type="submit"
          className="rounded-md bg-blue-main px-6 py-3 font-semibold transition hover:bg-blue-900"
          disabled={createForm.isPending}
        >
          {createForm.isPending
            ? "Enviando..."
            : "Enviar formulário de trabalho"}
        </button>
      </div>
    </form>
  );
}
