import {
  BuildingIcon,
  ClipboardIcon,
  HouseIcon,
  MenuBarsIcon,
  ModernHouseIcon,
  PeopleIcon,
  PhoneIcon,
  SearchFolderIcon,
  ShieldIcon,
  ShopIcon,
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

// Landing Pages
export const LandingPageWhyData = [
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

export const LandingPageIconData = [
  {
    icon: <HouseIcon className="h-7 w-7" color="white" />,
    title: "Residências",
  },
  {
    icon: <ModernHouseIcon className="h-7 w-7" color="white" />,
    title: "Condomínios e Empresas",
  },
  {
    icon: <BuildingIcon className="h-7 w-7" color="white" />,
    title: "Escritórios",
  },
  {
    icon: <ShopIcon className="h-7 w-7" color="white" />,
    title: "Shopping e Lojas",
  },
  {
    icon: <ClipboardIcon className="h-7 w-7" color="white" />,
    title: "Outros",
  },
];

export const LandingPageFeedbackData = [
  {
    text: "“Amei a experiência de trabalhar com a JGM. Funcionários muito educados e focados na entrega do resultado. Toda limpeza está com a entrega muito além do esperado. Muito obrigada e até todas as próximas.”",
    person: "Karoline M. de Vasconcelos",
  },
  {
    text: "“A empresa JGM presta serviços de limpeza no meu escritório desde o início de operação”",
    person: "Karoline M. de Vasconcelos",
  },
  {
    text: "“Excelente atenção e educação. Serviço realizado com sucesso.”",
    person: "Karoline M. de Vasconcelos",
  },
];

export const LandingPageBudgetWithIconData = [
  {
    icon: <PhoneIcon className="h-6 w-6" />,
    text: "Você entra em contato conosco pelo formulário, email ou whatsapp e marcamos uma visita técnica para conhecer o espaço a ser limpo.",
  },
  {
    icon: <MenuBarsIcon className="h-6 w-6" />,
    text: "Montamos uma proposta personalizada de acordo com o nível de sujidade, equipamentos e materiais necessários e o tempo que será realizada a limpeza.",
  },
  {
    icon: <ClipboardIcon className="h-6 w-6" />,
    text: "Proposta aceita, enviamos nossos melhores profissionais para prestar um serviço de excelência.",
  },
];

// home

export const HomeServicesData = [
  {
    titleType: "text",
    title: "Limpeza Pós-obra",
    img: "services-pos-obra",
    text: "Limpeza requerida na finalização de uma obra ou reforma, fazendo a retirada de resquícios e removendo a sujidade do local, com profissionais treinados e de forma segura e detalhada.",
    href: "/servicos/pos-obra",
  },
  {
    titleType: "text",
    title: "Terceirização de mão de obra",
    img: "services-tercerizacao",
    text: "Com uma longa experiência em terceirização de serviços, seguindo todas as normas vigentes, oferecemos soluções empresariais eficientes e inovadoras para todos os segmentos do mercado.",
    href: "/servicos/mao-de-obra",
  },
  {
    titleType: "text",
    title: "Limpeza Comercial e Residencial",
    img: "services-pos-obra",
    text: "Oferecemos uma gama abrangente de serviços de limpeza e manutenção, tanto para ambientes comerciais quanto residenciais.",
    href: "/servicos/comercial-e-residencial",
  },
  {
    titleType: "text",
    title: "Mão de Obra Especializada",
    img: "services-pos-obra",
    text: "Delegar à nossa empresa algumas das suas atividades é a melhor forma de entregar bons resultados aos seus clientes. Nossa equipe administrativa possui experiência e capacidade técnica para dar o suporte que a sua organização precisa.",
    href: "/servicos/mao-de-obra",
  },
  {
    titleType: "text",
    title: "Limpeza de Estofados e Carpetes",
    img: "services-pos-obra",
    text: "Limpeza de estofados e carpetes com produtos e equipamentos de alta qualidade, que garantem a limpeza profunda e a remoção de manchas.",
    href: "/servicos/estofados-e-carpetes",
  },
  {
    titleType: "text",
    title: "Jardinagem",
    img: "services-pos-obra",
    text: "Manutenção de jardins e áreas verdes, com profissionais especializados e equipamentos de qualidade.",
    href: "/servicos/manutencao-de-jardim",
  },
  {
    titleType: "text",
    title: "Limpeza Pós-Incêndio",
    img: "services-pos-incendio",
    text: "Limpeza especializada em locais que sofreram incêndio, com profissionais treinados e equipamentos de segurança.",
    href: "/servicos/pos-incendio",
  },
  {
    title: "JGM Flix",
    titleType: "image",
    text: "Diversos serviços por assinatura e opções de planos para você escolher o que melhor te atende. E com os melhores profissionais!",
    href: "/servicos/jgm-flix",
  },
];
