import { createFileRoute } from "@tanstack/react-router";
import { Confeitaria01 } from "@/components/Confeitaria01";
import { CONFEITARIA01_DEFAULTS } from "@/lib/confeitaria01-defaults";
import { Creator01 } from "@/components/Creator01";
import { CREATOR01_DEFAULTS } from "@/lib/creator01-defaults";
import { DENTISTA01_DEFAULTS } from "@/lib/dentista01-defaults";
// Import Dentista01 which is inside $username for now, or just avoid previewing it
import { waLink } from "@/routes/$username";

export const Route = createFileRoute("/preview/$templateId")({
  head: ({ params }) => {
    const isConfeitaria = params.templateId === "confeitaria01";
    const isCreator = params.templateId === "creator01";
    
    return {
      meta: [
        { title: `Preview - ${params.templateId}` }
      ],
      links: isConfeitaria
        ? [
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" },
            { rel: "stylesheet", href: "https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" },
            { rel: "stylesheet", href: "https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css" },
            { rel: "stylesheet", href: "/assets/css/confeitaria01.css" },
          ]
        : isCreator
        ? [
            { rel: "stylesheet", href: "https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" },
            { rel: "stylesheet", href: "https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css" },
            { rel: "stylesheet", href: "/assets/css/creator01.css" },
          ]
        : []
    };
  },
  component: PreviewTemplate,
});

function PreviewTemplate() {
  const { templateId } = Route.useParams();

  if (templateId === "confeitaria01") {
    return <Confeitaria01 content={CONFEITARIA01_DEFAULTS} />;
  }
  
  if (templateId === "creator01") {
    return <Creator01 content={CREATOR01_DEFAULTS} />;
  }

  return (
    <div style={{ padding: 40, textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>Template não encontrado para preview.</h2>
      <p>Templates disponíveis: <strong>confeitaria01</strong>, <strong>creator01</strong>.</p>
    </div>
  );
}
