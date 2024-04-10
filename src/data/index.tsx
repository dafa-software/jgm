import { EyeIcon, FlagIcon, HeartIcon } from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  ClipboardDocumentCheckIcon,
  HomeIcon,
  HomeModernIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

// Footer
export const ServicesData = [
  // {
  //   title: "JGM Flix",
  //   href: "servicos/jgm-flix",
  // },
  {
    title: "Jardinagem",
    href: "servicos/manutencao-de-jardim",
  },
  {
    title: "Limpeza Pós-Obra",
    href: "servicos/pos-obra",
  },
  {
    title: "Limpeza Pós-Incêndio",
    href: "servicos/pos-incendio",
  },
  {
    title: "Mão de Obra Especializada",
    href: "servicos/mao-de-obra",
  },
  {
    title: "Terceirização de Mão de Obra",
    href: "servicos/terceirizacao",
  },
  {
    title: "Limpeza Comercial e Residencial",
    href: "servicos/comercial-e-residencial",
  },
  {
    title: "Limpeza de Estofados e Carpetes",
    href: "servicos/estofados-e-carpetes",
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
    href: "https://grupojgm.vagas.solides.com.br/",
  },
  // {
  //   title: "Área do Colaborador",
  //   href: "/area-do-colaborador",
  // },
];

export const LegalData = [
  {
    title: "Termos de Uso",
    href: "https://jgmservicos.com.br/termos-de-uso/",
  },
  {
    title: "Política de Privacidade",
    href: "https://jgmservicos.com.br/politica-de-privacidade/",
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

export const FooterIconData = [
  {
    src: "/logos/facebook.svg",
    alt: "Facebook",
    href: "https://pt-br.facebook.com/jgmservicos/",
  },
  {
    src: "/logos/instagram.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/jgmservico/",
  },
  {
    src: "/logos/linkedin.svg",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/company/jgm-servi%C3%A7os/?originalSubdomain=br",
  },
  {
    src: "/logos/whatsapp.svg",
    alt: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=21964127226",
  },
];

// Header
export const NavigationData = {
  Home: {
    href: "/",
    text: "Home",
  },
  Serviços: [
    {
      href: "/servicos/pos-obra",
      text: "Limpeza Pós-obra",
    },
    {
      href: "/servicos/terceirizacao",
      text: "Terceirização de mão de obra",
    },
    {
      href: "/servicos/comercial-e-residencial",
      text: "Limpeza Comercial e Residencial",
    },
    {
      href: "/servicos/mao-de-obra",
      text: "Mão de Obra Especializada",
    },
    {
      href: "/servicos/estofados-e-carpetes",
      text: "Limpeza de Estofados e Carpetes",
    },
    {
      href: "/servicos/manutencao-de-jardim",
      text: "Jardinagem",
    },
    {
      href: "/servicos/pos-incendio",
      text: "Limpeza Pós-Incêndio",
    },
    // {
    //   href: "/servicos/jgm-flix",
    //   text: "JGM Flix",
    // },
  ],
  Blog: {
    href: "/blog",
    text: "Blog",
  },
  TrabalheConosco: {
    href: "https://grupojgm.vagas.solides.com.br/",
    text: "Trabalhe Conosco",
  },
  Contato: {
    href: "/contato",
    text: "Contato",
  },
  "Área do Colaborador": [
    {
      href: "https://jgmservicos.com.br/sistema/colaboradores/login.php",
      text: "Contracheques",
    },
    {
      href: "http://p2-jgm.snmssp.com:8082/#/",
      text: "Bimer",
    },
  ],
};

// Landing Pages
export const LandingPageWhyData = [
  {
    icon: <WrenchScrewdriverIcon className="h-7 w-7" color="white" />,
    color: "bg-[#FF6565]",
    title: "Levamos todo o material e equipamentos",
    text: "Você não precisa se preocupar com nada! Levamos exatamente tudo o que precisar pra realizar a sua limpeza pós-obra.",
  },
  {
    icon: <ShieldCheckIcon className="h-7 w-7" color="white" />,
    color: "bg-[#9CDDFF]",
    title: "Seguro contradanos",
    text: "Oferecemos um seguro para proteger nossos clientes caso haja qualquer imprevisto, durante o serviço prestado.",
  },
  {
    icon: <SparklesIcon className="h-7 w-7" color="white" />,
    color: "bg-[#FFBC58]",
    title: "Excelência e Experiência",
    text: "São mais de 17 anos atuando no mercado de limpeza com excelência e profissionalismo, que irão atender todas as suas expectativas!",
  },
  {
    icon: <MagnifyingGlassIcon className="h-7 w-7" color="white" />,
    color: "bg-[#74E091]",
    title: "Monitoramento durante toda a limpeza por um líder",
    text: "Sua limpeza será monitorada por um líder que coordenará toda a equipe para que a limpeza seja no nosso padrão de excelência e termine no prazo estabelecido.",
  },
  {
    icon: <UsersIcon className="h-7 w-7" color="white" />,
    color: "bg-[#786EFE]",
    title: "Equipe treinada e especializada",
    text: "Temos uma equipe especialista apenas em pós-obra. Oferecemos treinamentos mensais para aprimoramento de técnicas de limpeza e profissionalização.",
  },
];

export const LandingPageIconData = [
  {
    icon: <HomeIcon className="h-7 w-7" color="white" />,
    title: "Residências",
  },
  {
    icon: <HomeModernIcon className="h-7 w-7" color="white" />,
    title: "Condomínios e Empresas",
  },
  {
    icon: <BuildingOffice2Icon className="h-7 w-7" color="white" />,
    title: "Escritórios",
  },
  {
    icon: <BuildingStorefrontIcon className="h-7 w-7" color="white" />,
    title: "Shopping e Lojas",
  },
  {
    icon: <ClipboardDocumentCheckIcon className="h-7 w-7" color="white" />,
    title: "Outros",
  },
];

export const FeedbackData = [
  {
    text: "“Amei a experiência de trabalhar com a JGM. Funcionários muito educados e focados na entrega do resultado.”",
    person: "Karoline M. de Vasconcelos",
  },
  {
    text: "“A empresa JGM presta serviços de limpeza no meu escritório desde o início de operação”",
    person: "Pierre",
  },
  {
    text: "“Excelente atenção e educação. Serviço realizado com sucesso.”",
    person: "Orliane Rangel",
  },
  {
    text: "Profissionais eficientes e educados!",
    person: "Carla",
  },
  {
    text: "Pontuais e profissionais, eu adorei! Super recomendo! ",
    person: "Ana Paula",
  },
];

export const LandingPageBudgetWithIconData = [
  {
    icon: <PhoneIcon className="h-6 w-6" />,
    text: "Você entra em contato conosco pelo formulário, email ou whatsapp e marcamos uma visita técnica para conhecer o espaço a ser limpo.",
    variant: "primary",
  },
  {
    icon: <Bars3Icon className="h-6 w-6" />,
    text: "Montamos uma proposta personalizada de acordo com o nível de sujidade, equipamentos e materiais necessários e o tempo que será realizada a limpeza.",
    variant: "primary",
  },
  {
    icon: <ClipboardDocumentCheckIcon className="h-6 w-6" />,
    text: "Proposta aceita, enviamos nossos melhores profissionais para prestar um serviço de excelência.",
    variant: "primary",
  },
];

// home

export const HomeServicesData = [
  {
    titleType: "text",
    title: "Limpeza Pós-obra",
    img: "card-pos-obra",
    text: "Limpeza requerida na finalização de uma obra ou reforma, fazendo a retirada de resquícios e removendo a sujidade do local, com profissionais treinados e de forma segura e detalhada.",
    href: "/servicos/pos-obra",
  },
  {
    titleType: "text",
    title: "Terceirização de mão de obra",
    img: "card-terceirizacao",
    text: "Com uma longa experiência em terceirização de serviços, seguindo todas as normas vigentes, oferecemos soluções empresariais eficientes e inovadoras para todos os segmentos do mercado.",
    href: "/servicos/terceirizacao",
  },
  {
    titleType: "text",
    title: "Limpeza Comercial e Residencial",
    img: "card-comercial-e-residencial",
    text: "Oferecemos uma gama abrangente de serviços de limpeza e manutenção, tanto para ambientes comerciais quanto residenciais.",
    href: "/servicos/comercial-e-residencial",
  },
  {
    titleType: "text",
    title: "Mão de Obra Especializada",
    img: "card-mao-de-obra",
    text: "Delegar à nossa empresa algumas das suas atividades é a melhor forma de entregar bons resultados aos seus clientes. Nossa equipe administrativa possui experiência e capacidade técnica para dar o suporte que a sua organização precisa.",
    href: "/servicos/mao-de-obra",
  },
  {
    titleType: "text",
    title: "Limpeza de Estofados e Carpetes",
    img: "card-estofados-e-carpetes",
    text: "Limpeza de estofados e carpetes com produtos e equipamentos de alta qualidade, que garantem a limpeza profunda e a remoção de manchas.",
    href: "/servicos/estofados-e-carpetes",
  },
  {
    titleType: "text",
    title: "Jardinagem",
    img: "card-manutencao-de-jardim",
    text: "Manutenção de jardins e áreas verdes, com profissionais especializados e equipamentos de qualidade.",
    href: "/servicos/manutencao-de-jardim",
  },
  {
    titleType: "text",
    title: "Limpeza Pós-Incêndio",
    img: "card-pos-incendio",
    text: "Limpeza especializada em locais que sofreram incêndio, com profissionais treinados e equipamentos de segurança.",
    href: "/servicos/pos-incendio",
  },
  // {
  //   title: "JGM Flix",
  //   titleType: "image",
  //   text: "Diversos serviços por assinatura e opções de planos para você escolher o que melhor te atende. E com os melhores profissionais!",
  //   href: "/servicos/jgm-flix",
  // },
];

export const HomeSearchData = [
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
    href: "https://grupojgm.vagas.solides.com.br/",
  },
  {
    title: "Contato",
    href: "/contato",
  },
  {
    title: "Contracheques",
    href: "https://jgmservicos.com.br/sistema/colaboradores/login.php",
  },
  {
    title: "Bimer",
    href: "http://p2-jgm.snmssp.com:8082/#/",
  },
  {
    title: "Termos de Uso",
    href: "https://jgmservicos.com.br/termos-de-uso/",
  },
  {
    title: "Política de Privacidade",
    href: "https://jgmservicos.com.br/politica-de-privacidade/",
  },
];

export const HomeWhyData = [
  {
    icon: <FlagIcon className="h-9 w-9 fill-green-300" />,
    text: "Trazer inovação e eficiência na prestação de serviços, promovendo economia e excelência para os clientes. Além disso, busca transformar a realidade dos colaboradores, oferecendo oportunidades de crescimento e desenvolvimento profissional.",
  },
  {
    icon: <EyeIcon className="h-9 w-9 fill-cyan-200" />,
    text: "Ser referência nacional em técnica, compliance e relacionamento corporativo, buscando revolucionar o setor de prestação de serviços no Brasil e alterar a percepção dos consumidores sobre terceirização.",
  },
  {
    icon: <HeartIcon className="h-9 w-9 fill-red-300" />,
    text: "Humildade, paciência, determinação, resiliência, empatia e confiança.",
  },
];

export const HomeLogoData = [
  {
    src: "/logos/firjan.png",
    alt: "Firjan",
  },
  {
    src: "/logos/anatel.png",
    alt: "Anatel",
  },
  {
    src: "/logos/msg.png",
    alt: "MSG",
  },
  {
    src: "/logos/anp.png",
    alt: "Anp",
  },
  {
    src: "/logos/ufrj.png",
    alt: "ufrj",
  },
  {
    src: "/logos/museu.png",
    alt: "Museu de Astronomia",
  },
];

export const HomePersonData = [
  {
    image: "/assets/person1.png",
    person: "Bella Campos",
    occupation: "Atriz",
  },
  {
    image: "/assets/person2.png",
    person: "Evelyn Regly",
    occupation: "Influencer e Youtuber",
  },
  {
    image: "/assets/person3.png",
    person: "Rafael Zulu",
    occupation: "Ator e Empresário",
  },
  {
    image: "/assets/person4.png",
    person: "Pri Pessanha",
    occupation: "Influencer",
  },
];
