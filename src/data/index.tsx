import {
  PeopleIcon,
  SearchFolderIcon,
  ShieldIcon,
  StarsIcon,
  ToolIcon,
} from "~/app/_components/icons";

// Header
export const NavigationData = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Serviços",
    href: "/servicos",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Trabalhe Conosco",
    href: "/trabalhe-conosco",
  },
  {
    title: "Contato",
    href: "/contato",
  },
  {
    title: "Área do Colaborador",
    href: "/area-do-colaborador",
  },
];

// Footer
export const ServicesData = [
  {
    title: "Jardinagem",
    href: "servicos/jardinagem",
  },
  {
    title: "Limpeza Pós-Obra",
    href: "servicos/limpeza-pos-obra",
  },
  {
    title: "Limpeza Pós-Incêndio",
    href: "servicos/limpeza-pos-incendio",
  },
  {
    title: "Mão de Obra Especializada",
    href: "servicos/mao-de-obra-especializada",
  },
  {
    title: "Limpeza Comercial e Residencial",
    href: "servicos/limpeza-comercial-e-residencial",
  },
  {
    title: "Limpeza de Estofados e Carpetes",
    href: "servicos/limpeza-de-estofados-e-carpetes",
  },
];

export const CompanyData = [
  {
    title: "Quem Somos",
    href: "/quem-somos",
  },
  {
    title: "Contato",
    href: "/contato",
  },
  {
    title: "Trabalhe Conosco",
    href: "/trabalhe-conosco",
  },
  {
    title: "Área do Colaborador",
    href: "/area-do-colaborador",
  },
];

export const LegalData = [
  {
    title: "Termos de Uso",
    href: "/termos-de-uso",
  },
  {
    title: "Política de Privacidade",
    href: "/politica-de-privacidade",
  },
];

export const ContactData = [
  {
    title: "comercial@jgmservicos.com.br",
    href: "mailto:comercial@jgmservicos.com.br",
  },
  {
    title: "(21) 3073-7064",
    href: "tel:+552130737064",
  },
];

export const FooterTextData = [
  { title: "Serviços", data: ServicesData },
  { title: "Empresa", data: CompanyData },
  { title: "Jurídico", data: LegalData },
  { title: "Contato", data: ContactData },
];

export const LandingPageWhData = [
  {
    icon: <ToolIcon className="h-7 w-7" color="white" />,
    color: "bg-[#FF6565]",
    title: "Levamos todo o material e equipamentos",
    text: "Você não precisa se preocupar com nada! Levamos exatamente tudo o que precisar pra realizar a sua limpeza pós-obra.",
  },
  {
    icon: <ShieldIcon className="h-7 w-7" color="white" />,
    color: "bg-[#9CDDFF]",
    title: "Seguro contradanos",
    text: "Oferecemos um seguro para proteger nossos clientes caso haja qualquer imprevisto, durante o serviço prestado.",
  },
  {
    icon: <StarsIcon className="h-7 w-7" color="white" />,
    color: "bg-[#FFBC58]",
    title: "Excelência e Experiência",
    text: "São mais de 17 anos atuando no mercado de limpeza com excelência e profissionalismo, que irão atender todas as suas expectativas!",
  },
  {
    icon: <SearchFolderIcon className="h-7 w-7" color="white" />,
    color: "bg-[#74E091]",
    title: "Monitoramento durante toda a limpeza por um líder",
    text: "Sua limpeza será monitorada por um líder que coordenará toda a equipe para que a limpeza seja no nosso padrão de excelência e termine no prazo estabelecido.",
  },
  {
    icon: <PeopleIcon className="h-7 w-7" color="white" />,
    color: "bg-[#786EFE]",
    title: "Equipe treinada e especializada",
    text: "Temos uma equipe especialista apenas em pós-obra. Oferecemos treinamentos mensais para aprimoramento de técnicas de limpeza e profissionalização.",
  },
];
