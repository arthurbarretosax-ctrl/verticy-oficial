import { createFileRoute } from "@tanstack/react-router";
import { Contabilidade01 } from "@/components/Contabilidade01";
import { CONTABILIDADE01_DEFAULTS } from "@/lib/contabilidade01-defaults";
import { Buffet01 } from "@/components/Buffet01";
import { BUFFET01_DEFAULTS } from "@/lib/buffet01-defaults";
import { Petshop01 } from "@/components/Petshop01";
import { PETSHOP01_DEFAULTS } from "@/lib/petshop01-defaults";
import { Maquiadora01 } from "@/components/Maquiadora01";
import { MAQUIADORA01_DEFAULTS } from "@/lib/maquiadora01-defaults";
import { Psicologo01 } from "@/components/Psicologo01";
import { PSICOLOGO01_DEFAULTS } from "@/lib/psicologo01-defaults";
import { Barbearia01 } from "@/components/Barbearia01";
import { BARBEARIA01_DEFAULTS } from "@/lib/barbearia01-defaults";
import { Restaurante01 } from "@/components/Restaurante01";
import { RESTAURANTE01_DEFAULTS } from "@/lib/restaurante01-defaults";
import { Personal01 } from "@/components/Personal01";
import { PERSONAL01_DEFAULTS } from "@/lib/personal01-defaults";
import { Corretor01 } from "@/components/Corretor01";
import { CORRETOR01_DEFAULTS } from "@/lib/corretor01-defaults";
import { Arquiteto01 } from "@/components/Arquiteto01";
import { ARQUITETO01_DEFAULTS } from "@/lib/arquiteto01-defaults";
import { Advogado01 } from "@/components/Advogado01";
import { ADVOGADO01_DEFAULTS } from "@/lib/advogado01-defaults";
import { Dentista01 } from "@/routes/$username";
import { DENTISTA01_DEFAULTS } from "@/lib/dentista01-defaults";
import { Medico01 } from "@/components/Medico01";
import { MEDICO01_DEFAULTS } from "@/lib/medico01-defaults";
import { Confeitaria01 } from "@/components/Confeitaria01";
import { CONFEITARIA01_DEFAULTS } from "@/lib/confeitaria01-defaults";
import { Creator01 } from "@/components/Creator01";
import { CREATOR01_DEFAULTS } from "@/lib/creator01-defaults";

export const Route = createFileRoute("/preview/$templateId")({
  head: ({ params }) => {
    const tpl = params.templateId;
    return {
      meta: [
        { title: `Preview - ${tpl}` }
      ],
      links: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" },
        { rel: "stylesheet", href: "https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" },
        { rel: "stylesheet", href: "https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css" },
        { rel: "stylesheet", href: `/assets/css/${tpl}.css` },
      ]
    };
  },
  component: PreviewTemplate,
});

function PreviewTemplate() {
  const { templateId } = Route.useParams();

  if (templateId === "contabilidade01") {
    return <Contabilidade01 content={CONTABILIDADE01_DEFAULTS} />;
  }
  if (templateId === "buffet01") {
    return <Buffet01 content={BUFFET01_DEFAULTS} />;
  }
  if (templateId === "petshop01") {
    return <Petshop01 content={PETSHOP01_DEFAULTS} />;
  }
  if (templateId === "maquiadora01") {
    return <Maquiadora01 content={MAQUIADORA01_DEFAULTS} />;
  }
  if (templateId === "psicologo01") {
    return <Psicologo01 content={PSICOLOGO01_DEFAULTS} />;
  }
  if (templateId === "barbearia01") {
    return <Barbearia01 content={BARBEARIA01_DEFAULTS} />;
  }
  if (templateId === "restaurante01") {
    return <Restaurante01 content={RESTAURANTE01_DEFAULTS} />;
  }
  if (templateId === "personal01") {
    return <Personal01 content={PERSONAL01_DEFAULTS} />;
  }
  if (templateId === "corretor01") {
    return <Corretor01 content={CORRETOR01_DEFAULTS} />;
  }
  if (templateId === "arquiteto01") {
    return <Arquiteto01 content={ARQUITETO01_DEFAULTS} />;
  }
  if (templateId === "advogado01") {
    return <Advogado01 content={ADVOGADO01_DEFAULTS} />;
  }
  if (templateId === "dentista01") {
    return <Dentista01 content={DENTISTA01_DEFAULTS} />;
  }
  if (templateId === "medico01") {
    return <Medico01 content={MEDICO01_DEFAULTS} />;
  }
  if (templateId === "confeitaria01") {
    return <Confeitaria01 content={CONFEITARIA01_DEFAULTS} />;
  }
  if (templateId === "creator01") {
    return <Creator01 content={CREATOR01_DEFAULTS} />;
  }
  return (
    <div style={{ padding: 40, textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>Template não encontrado para preview.</h2>
      <p>ID fornecido: {templateId}</p>
    </div>
  );
}
