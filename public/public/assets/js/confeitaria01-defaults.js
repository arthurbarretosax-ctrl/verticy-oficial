export const CONFEITARIA01_DEFAULTS = {
  theme: {
    colors: {
      bg: "#FDFBF7",
      card: "#FFFFFF",
      rose: "#E8B4B8",
      roseDark: "#D49A9E",
      gold: "#D4AF37",
      text: "#4A3737",
    },
  },
  branding: {
    name: "Bruna Bolos e Doces",
    slogan: "✨ Feitos com carinho para momentos especiais",
    location: "Campos / RJ",
    logo_url: "/bruna1.png",
  },
  hero: {
    image_url: "/bruna2.png",
    cta_label: "Ver Catálogo",
  },
  marquee: {
    words: [
      { text: "Artesanal", italic: false },
      { text: "Bolos de Festa", italic: true },
      { text: "Sobremesas", italic: false },
      { text: "Por Encomenda", italic: true },
    ],
  },
  catalog: {
    title: "O nosso Menu",
    subtitle: "Escolha e peça pelo WhatsApp",
    items: [
      {
        id: "aniversario",
        title: "Bolos de Aniversário",
        description: "Bolos decorados e personalizados para tornar a sua celebração inesquecível. Vários recheios disponíveis.",
        category: "Festa",
        image_url: "/bruna3.png",
      },
      {
        id: "doces",
        title: "Doces de Festa",
        description: "Brigadeiros tradicionais e gourmet, beijinhos, cajuzinhos e muito mais. Feitos com ingredientes premium.",
        category: "Clássicos",
        image_url: "/bruna5.png",
      },
      {
        id: "caseiros",
        title: "Bolos Caseiros",
        description: "O sabor do bolo da avó. Massa fofinha, perfeito para o seu café da tarde. Simples ou com cobertura.",
        category: "Café da Tarde",
        image_url: "/bruna4.png",
      },
      {
        id: "sobremesas",
        title: "Tortas & Sobremesas",
        description: "As melhores opções para a sobremesa do fim de semana em família. Taças, travessas e fatias.",
        category: "Especiais",
        image_url: "/bruna6.png",
      },
    ],
  },
  gallery: {
    title: "Nossas Delícias",
    subtitle: "Deslize ➜",
    images: ["/bruna7.png", "/bruna8.png", "/bruna9.png"],
  },
  contact: {
    title_pre: "Faça a sua",
    title_highlight: "Encomenda",
    subtitle: "Vagas limitadas por semana",
    cta_label: "Chamar no WhatsApp",
    whatsapp_number: "5522999999999",
    instagram_handle: "@bruna_bolosedoces",
    instagram_url: "https://instagram.com/bruna_bolosedoces",
    footer_year: new Date().getFullYear(),
    footer_name: "BRUNA BOLOS E DOCES",
  },
};
