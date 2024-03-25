import Link from "next/link";
import { FooterTextData } from "~/data";

interface DataProps {
  title: string;
  href: string;
}

interface FooterBodyProps {
  title: string;
  data: DataProps[];
}

export default function Footer() {
  return (
    <footer className="flex justify-center border-t border-gray-200 border-opacity-80 bg-gradient-to-r from-blue-main to-blue-main px-6 py-24 text-white">
      <div className="container flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          {FooterTextData.map((data) => (
            <FooterText key={data.title} title={data.title} data={data.data} />
          ))}
        </div>
        <div className="w-full border border-white" />
        <p className="text-sm">
          Copyright © 2024. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function FooterText(props: FooterBodyProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-light text-gray-50">{props.title}</p>
      <div className="flex flex-col gap-3">
        {props.data.map((data) => (
          <Link
            key={data.title}
            href={data.href}
            className="hover:text-cyan-200"
          >
            {data.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
