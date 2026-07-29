export const RESTAURANTE01_DEFAULTS = {
  theme: {
    colors: {
      bg: "#1c1917", // dark warm stone
      text: "#f5f5f4",
      primary: "#ef4444", // appetizing red
      accent: "#fca5a5",
      card: "#292524" // slightly lighter stone
    }
  },
  branding: {
    name: "Osteria Bella",
    location: "Rua das Flores, 123",
    logo_url: ""
  },
  hero: {
    title: "A verdadeira tradição italiana na sua mesa.",
    subtitle: "Massas artesanais frescas, ingredientes selecionados e um ambiente acolhedor para momentos inesquecíveis.",
    cta_label: "Fazer Reserva",
    cta_href: "#contact",
    image_url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200"
  },
  about: {
    title: "Nossa História",
    paragraphs: [
      "Nascida da paixão pela culinária autêntica, a Osteria Bella traz as receitas de família passadas de geração em geração.",
      "Cada prato que sai da nossa cozinha é preparado com amor, usando apenas ingredientes locais frescos e farinha importada diretamente da Itália."
    ],
    image_url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800"
  },
  services: {
    title: "Nosso Menu",
    items: [
      { title: "Pratos Principais", desc: "Massas frescas, risotos cremosos e carnes suculentas com o toque da nonna.", icon: "Utensils" },
      { title: "Pizzas Rústicas", desc: "Massa de longa fermentação, assada em forno a lenha, com bordas crocantes.", icon: "Flame" },
      { title: "Vinhos e Drinks", desc: "Uma adega cuidadosamente selecionada para harmonizar com cada prato.", icon: "Coffee" }
    ]
  },
  testimonials: {
    title: "Avaliações",
    items: [
      { name: "Mariana L.", text: "A melhor experiência gastronômica da cidade. O Carbonara é simplesmente divino!" },
      { name: "Fernando R.", text: "Ambiente fantástico, atendimento impecável e a pizza me fez sentir em Nápoles." }
    ]
  },
  contact: {
    title: "Reserve sua Mesa",
    subtitle: "Garanta seu lugar e venha desfrutar de uma noite incrível. Aceitamos reservas via WhatsApp.",
    whatsapp: "11999999999",
    instagram: "https://instagram.com/osteriabella"
  }
};
