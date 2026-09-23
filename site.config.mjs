export default {
  preset: "impact",

  brand: {
    name: "D2 Bike Shop",
    shortName: "D2",
    tagline: "Pedale o seu caminho.",
    logo: "/assets/d2-bike-shop-logo-wide.png",
    logoAlt: "D2 Bike Shop",
  },

  seo: {
    title: "D2 Bike Shop | Bicicletas e oficina em Araucária",
    description:
      "D2 Bike Shop em Araucária: bicicletas, oficina especializada, acessórios e atendimento para quem vive o ciclismo.",
    keywords: [
      "bike shop Araucária",
      "bicicletas Araucária",
      "oficina de bicicletas Araucária",
      "acessórios para bike",
    ],
    canonical: "https://d2-bike-shop-araucaria.dagamavazco.chatgpt.site/",
    locale: "pt_BR",
    schemaType: "BicycleStore",
  },

  announcement: {
    label: "Araucária, Paraná",
    actionLabel: "Fale no WhatsApp",
  },

  contact: {
    primaryLabel: "Chamar no WhatsApp",
    primaryUrl: "https://wa.me/5541998618722",
    phone: "+55 41 99861-8722",
    instagramLabel: "Ver Instagram",
    instagramUrl: "https://www.instagram.com/d2bikeshop/",
    mapsUrl: "https://maps.app.goo.gl/2ccZhxQbB5eRjo518",
  },

  navigation: [
    { label: "Serviços", href: "#servicos" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Visite", href: "#visite" },
  ],

  hero: {
    kicker: "Pedale mais longe",
    title: ["Sua bike.", "Sua melhor", "versão."],
    accentLine: 1,
    description:
      "Mais do que uma bike shop: o ponto de encontro de quem vive o ciclismo em Araucária.",
    image: "/assets/hero-bike-shop.jpg",
    imageAlt: "Fachada da D2 Bike Shop com bicicletas em exposição",
    proofLabel: "Revenda autorizada",
    proofValue: "Kode · Oggi",
    scrollLabel: "Conheça a D2",
  },

  statement: {
    label: "A experiência D2",
    text: "Do primeiro giro ao próximo desafio. Escolhas certas fazem cada pedalada contar.",
    accent: "desafio.",
  },

  services: {
    title: "Tudo para ir além.",
    description:
      "Atendimento de quem entende que bicicleta não é só transporte. É liberdade, performance e conexão.",
    items: [
      {
        title: "Bicicletas",
        description: "Encontre a companheira certa para a sua próxima rota.",
        detail: "Urbanas · MTB · Performance",
      },
      {
        title: "Oficina",
        description: "Cuidado técnico e atenção aos detalhes para você rodar tranquilo.",
        detail: "Revisão · Ajustes · Manutenção",
      },
      {
        title: "Equipamentos",
        description: "Itens essenciais para pedalar com mais segurança e personalidade.",
        detail: "Capacetes · Acessórios · Peças",
      },
    ],
  },

  reviews: {
    label: "Avaliações no Google",
    title: "Quem pedala com a D2 recomenda.",
    rating: "4,8",
    total: "Mais de 54 avaliações",
    sourceLabel: "Ver avaliações no Google Maps",
    items: [
      {
        quote:
          "Excelente atendimento, no pós-venda são prestativos, ambiente gostoso, loja organizada e uma loja que passa confiança.",
        author: "Sandra Baptista de Miranda Lovato",
        score: "5/5",
      },
      {
        quote:
          "Sou cliente desde 2021 e nunca tive problemas. São muito atenciosos, prestativos e bons de negócios.",
        author: "Mauricio Tavares",
        score: "5/5",
      },
      {
        quote:
          "Atendimento de qualidade, equipe superatenciosa e bastante variedade de produtos e bikes.",
        author: "Felipe Gabriel de Souza Marcos",
        score: "5/5",
      },
    ],
  },

  location: {
    label: "Venha nos visitar",
    title: "A próxima aventura começa aqui.",
    description:
      "Passe na D2 Bike Shop, converse com a nossa equipe e encontre o que o seu pedal precisa.",
    actionLabel: "Traçar rota até a loja",
    addressLines: [
      "Av. Dr. Victor do Amaral, 1217",
      "Centro · Araucária — PR",
    ],
    address: {
      street: "Avenida Doutor Victor do Amaral, 1217",
      city: "Araucária",
      region: "PR",
      postalCode: "83702-040",
      country: "BR",
    },
    hours: [
      "Segunda a sexta · 09h às 18h30",
      "Sábado · 09h às 13h",
      "Domingo · Fechado",
    ],
    openingHours: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:30" },
      { days: ["Saturday"], opens: "09:00", closes: "13:00" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps?q=Av.+Dr.+V%C3%ADtor+do+Amaral,+1217,+Arauc%C3%A1ria+-+PR&output=embed",
  },

  theme: {
    accent: null,
    ink: null,
    paper: null,
    displayFont: null,
    bodyFont: null,
  },
};
