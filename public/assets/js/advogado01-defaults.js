// Defaults do template Advogado01 para uso no editor vanilla (browser).
export const ADVOGADO01_DEFAULTS = {
  theme: {
    colors: {
      bg: "#FDFBF7",
      dark: "#1F3A2E",
      greenLight: "#345945",
      sand: "#E6DFD3",
      gold: "#C5A880",
      text: "#2C2A29",
    },
  },
  branding: {
    name: "Ciro Freitas",
    tagline: "Advocacia de Família e Sucessões",
    logo_url: "",
  },
  hero: {
    tag: "Família & Sucessões",
    eyebrow: "Advocacia Humanizada",
    title_part1: "Ciro",
    title_part2: "Freitas",
    quote: "\"É possível recomeçar, <br>apesar da perda.\"",
    image_url: "/ciro_hero.png",
  },
  action: {
    title_pre: "Precisando de",
    title_highlight: "orientação jurídica?",
    desc: "Seja para organizar um patrimônio, lidar com um divórcio ou conduzir um inventário, o primeiro passo é a estratégia.",
    btn_label: "Agendar Acolhimento",
  },
  areas: {
    eyebrow: "Como posso ajudar",
    items: [
      {
        id: "familia",
        title: "Direito de Família",
        desc: "Divórcios, Guarda & Alimentos",
        icon: "lucide-users",
        large: true
      },
      {
        id: "sucessoes",
        title: "Inventários &\nSucessões",
        desc: "Segurança Patrimonial",
        icon: "lucide-file-text"
      },
      {
        id: "planejamento",
        title: "Planejamento\nFamiliar",
        desc: "Prevenção de Conflitos",
        icon: "lucide-landmark"
      }
    ]
  },
  marquee: {
    words: [
      { text: "Empatia", italic: true },
      { text: "Estratégia", italic: false },
      { text: "Resolução", italic: true },
      { text: "Sigilo Absoluto", italic: false }
    ]
  },
  about: {
    image_url: "/ciro_midia.png",
    quote: "\"A vitória nunca está na sentença.\"",
    paragraphs: [
      "Muitos acreditam que o sucesso na vara de família é uma briga ganha no tribunal. Na realidade, a verdadeira vitória é garantir a paz, o recomeço e a preservação do patrimônio de forma estratégica.",
      "Sou CEO do Freitas Advogados e Presidente do IBDFAM (Instituto Brasileiro de Direito de Família). Dedico minha vida a estruturar os recomeços de famílias que enfrentam momentos difíceis."
    ],
    bullets: ["Autor de Artigos", "Presença na Mídia"]
  },
  articles: {
    title_pre: "Mente",
    title_highlight: "Estratégica",
    eyebrow: "Artigos & Reflexões",
    items: [
      {
        url: "https://ibdfam.org.br/artigos/2500/A+Dor+do+Tempo+nos+Processos+de+Fam%C3%ADlia",
        image_url: "/ciro_artigo.png",
        tag: "Artigo IBDFAM",
        title: "A dor do tempo nos processos de família."
      },
      {
        url: "https://www.instagram.com/p/DYnC1hUFZQa/?img_index=1",
        image_url: "/ciro_dica.png",
        tag: "Dica Estratégica",
        title: "O que você não deve postar durante o divórcio."
      }
    ]
  },
  lifestyle: {
    quote: "\"O seu normal é o sonho de alguém. Desfrute e seja grato!\"",
    images: ["/ciro_familia.png", "/ciro_esporte.png"]
  },
  contact: {
    headline: "Convoque o time certo para o seu recomeço.",
    headline_highlight: "time certo",
    team_name: "Freitas Advogados",
    whatsapp_number: "5522999538336",
    instagram: "@cirofreitas",
    instagram_url: "https://instagram.com/cirofreitas",
    website: "freitasadvogados.net",
    website_url: "https://freitasadvogados.net"
  }
};
