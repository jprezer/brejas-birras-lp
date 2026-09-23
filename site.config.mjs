export default {
  preset: "warm",

  brand: {
    name: "Casa Brasa",
    shortName: "CB",
    tagline: "Fogo, tempo e mesa cheia.",
    logo: "/assets/casa-brasa-logo.svg",
    logoAlt: "Casa Brasa",
  },

  seo: {
    title: "Casa Brasa | Cozinha de fogo em Curitiba",
    description:
      "Cozinha de fogo, ingredientes locais e uma mesa feita para ficar. Conheça a Casa Brasa, no Batel, em Curitiba.",
    keywords: [
      "restaurante em Curitiba",
      "cozinha de fogo",
      "restaurante no Batel",
      "Casa Brasa",
    ],
    canonical: "https://casabrasa.example/",
    locale: "pt_BR",
    schemaType: "Restaurant",
  },

  announcement: {
    label: "Batel · Curitiba",
    actionLabel: "Reservas para esta noite",
  },

  contact: {
    primaryLabel: "Reservar uma mesa",
    footerPrimaryLabel: "Reservas",
    primaryUrl: "#visite",
    phone: "+55 41 99999-0000",
    instagramLabel: "Conheça a casa",
    socialLabel: "Instagram",
    instagramUrl: "https://www.instagram.com/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Batel%2C+Curitiba%2C+PR",
  },

  navigation: [
    { label: "Experiência", href: "#servicos" },
    { label: "À mesa", href: "#avaliacoes" },
    { label: "Visite", href: "#visite" },
  ],

  hero: {
    kicker: "Cozinha de fogo em Curitiba",
    title: ["Fogo lento.", "Mesa", "cheia."],
    accentLine: 1,
    description:
      "Ingredientes locais, brasa acesa e pratos feitos para atravessar a noite sem pressa.",
    image: "/assets/casa-brasa-hero.jpg",
    imageAlt: "Chef finalizando um prato entre as chamas da cozinha",
    imagePosition: "58% center",
    proofLabel: "Cozinha aberta",
    proofValue: "Terça a domingo",
    scrollLabel: "Descubra a casa",
  },

  statement: {
    label: "Nossa mesa",
    text: "A chama muda o ingrediente. O tempo transforma a refeição em encontro.",
    accent: "encontro.",
  },

  services: {
    title: "Da brasa para a mesa.",
    description:
      "Uma cozinha direta, guiada pela estação e feita para dividir. Cada serviço tem o ritmo da chama e o cuidado de quem recebe.",
    items: [
      {
        title: "Menu de fogo",
        description:
          "Carnes, vegetais e acompanhamentos preparados na brasa e servidos no centro da mesa.",
        detail: "Ingredientes locais · Safra do dia",
      },
      {
        title: "Bar da casa",
        description:
          "Drinks autorais, vinhos de pequenos produtores e sugestões para acompanhar cada prato.",
        detail: "Coquetéis · Vinhos · Sem álcool",
      },
      {
        title: "Mesa compartilhada",
        description:
          "Um salão acolhedor para jantares, encontros e celebrações sem cerimônia.",
        detail: "Reservas · Grupos · Eventos",
      },
    ],
  },

  // Para exibir uma galeria, adicione `gallery` seguindo o exemplo do README.

  reviews: {
    label: "Avaliações de demonstração",
    title: "Uma noite para ficar na memória.",
    rating: "4,9",
    total: "Conteúdo fictício para personalização",
    sourceLabel: "Ver localização no Google Maps",
    items: [
      {
        quote:
          "A comida chega no centro da mesa e muda o ritmo da noite. Tudo tem sabor de cuidado.",
        author: "Cliente de exemplo",
        score: "5/5",
      },
      {
        quote:
          "Ambiente bonito sem ser formal, serviço atento e uma seleção de vinhos muito bem pensada.",
        author: "Cliente de exemplo",
        score: "5/5",
      },
      {
        quote:
          "Voltaria só pelo pão na brasa, mas o jantar inteiro foi excelente.",
        author: "Cliente de exemplo",
        score: "5/5",
      },
    ],
  },

  location: {
    label: "Venha para a mesa",
    title: "No coração do Batel.",
    description:
      "A Casa Brasa é uma marca fictícia criada para demonstrar o white label. Substitua todos os dados antes de publicar.",
    actionLabel: "Abrir região no Google Maps",
    addressLines: ["Rua de Exemplo, 120", "Batel · Curitiba — PR"],
    address: {
      street: "Rua de Exemplo, 120",
      city: "Curitiba",
      region: "PR",
      postalCode: "80000-000",
      country: "BR",
    },
    hours: [
      "Terça a quinta · 18h às 23h",
      "Sexta e sábado · 18h à 00h",
      "Domingo · 12h às 17h",
    ],
    openingHours: [
      {
        days: ["Tuesday", "Wednesday", "Thursday"],
        opens: "18:00",
        closes: "23:00",
      },
      {
        days: ["Friday", "Saturday"],
        opens: "18:00",
        closes: "00:00",
      },
      { days: ["Sunday"], opens: "12:00", closes: "17:00" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps?q=Batel,+Curitiba,+PR&output=embed",
  },

  theme: {
    accent: "oklch(70% 0.17 245)",
    ink: "oklch(18% 0.025 30)",
    paper: "oklch(97% 0.004 30)",
    displayFont: null,
    bodyFont: null,
  },
};
