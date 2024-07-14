import Link from "next/link";
import Image from "next/image";
import { FooterIconData, FooterTextData } from "~/data";

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
    <footer className="flex justify-center border-t border-gray-200 border-opacity-80 bg-blue-main bg-[url(/assets/bg-sound.svg)] bg-cover bg-center bg-no-repeat px-6 py-24 text-white">
      <div className="container flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          {FooterTextData.map((data) => (
            <FooterText key={data.title} title={data.title} data={data.data} />
          ))}
        </div>
        <div className="w-full border border-white" />
        <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
          <p className="text-sm">
            Copyright © 2024. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {FooterIconData.map((props, index) => (
              <Link key={index} {...props} className="hover:text-cyan-200">
                <Image width={32} height={32} src={props.src} alt={props.alt} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterText(props: FooterBodyProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-bold text-gray-50 ">{props.title}</p>
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
