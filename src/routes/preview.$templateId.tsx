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
import Advogado01 from "@/components/Advogado01";
import { ADVOGADO01_DEFAULTS } from "@/lib/advogado01-defaults";
import { Dentista01 } from "@/routes/$username";
import { DENTISTA01_DEFAULTS } from "@/lib/dentista01-defaults";
import { Medico01 } from "@/components/Medico01";
import { MEDICO01_DEFAULTS } from "@/lib/medico01-defaults";
import { Confeitaria01 } from "@/components/Confeitaria01";
import { CONFEITARIA01_DEFAULTS } from "@/lib/confeitaria01-defaults";
import { Creator01 } from "@/components/Creator01";
import { CREATOR01_DEFAULTS } from "@/lib/creator01-defaults";

import Denis from "@/components/Denis";
import { DENIS_DEFAULTS } from "@/lib/denis-defaults";
import Duo from "@/components/Duo";
import { DUO_DEFAULTS } from "@/lib/duo-defaults";
import Manuel from "@/components/Manuel";
import { MANUEL_DEFAULTS } from "@/lib/manuel-defaults";
import Wilian from "@/components/Wilian";
import { WILIAN_DEFAULTS } from "@/lib/wilian-defaults";
import Loyola from "@/components/Loyola";
import { LOYOLA_DEFAULTS } from "@/lib/loyola-defaults";
import Amandex from "@/components/Amandex";
import { AMANDEX_DEFAULTS } from "@/lib/amandex-defaults";
import FrancianeFurohumanizado2 from "@/components/FrancianeFurohumanizado2";
import { FRANCIANEFUROHUMANIZADO2_DEFAULTS } from "@/lib/francianefurohumanizado2-defaults";
import Ilgner from "@/components/Ilgner";
import { ILGNER_DEFAULTS } from "@/lib/ilgner-defaults";
import Ilgner2 from "@/components/Ilgner2";
import { ILGNER2_DEFAULTS } from "@/lib/ilgner2-defaults";
import IgnosForadoar from "@/components/IgnosForadoar";
import { IGNOSFORADOAR_DEFAULTS } from "@/lib/ignosforadoar-defaults";
import LuanaForadoar from "@/components/LuanaForadoar";
import { LUANAFORADOAR_DEFAULTS } from "@/lib/luanaforadoar-defaults";
import DraMirella from "@/components/DraMirella";
import { DRAMIRELLA_DEFAULTS } from "@/lib/dramirella-defaults";
import Yaveh2 from "@/components/Yaveh2";
import { YAVEH2_DEFAULTS } from "@/lib/yaveh2-defaults";
import Jt from "@/components/Jt";
import { JT_DEFAULTS } from "@/lib/jt-defaults";
import LaylaPsi from "@/components/LaylaPsi";
import { LAYLAPSI_DEFAULTS } from "@/lib/laylapsi-defaults";
import Hortela2 from "@/components/Hortela2";
import { HORTELA2_DEFAULTS } from "@/lib/hortela2-defaults";
import Zisa from "@/components/Zisa";
import { ZISA_DEFAULTS } from "@/lib/zisa-defaults";
import CristianaPsi from "@/components/CristianaPsi";
import { CRISTIANAPSI_DEFAULTS } from "@/lib/cristianapsi-defaults";
import Dudu from "@/components/Dudu";
import { DUDU_DEFAULTS } from "@/lib/dudu-defaults";
import CristianaPsi2 from "@/components/CristianaPsi2";
import { CRISTIANAPSI2_DEFAULTS } from "@/lib/cristianapsi2-defaults";
import DraRaisabastos from "@/components/DraRaisabastos";
import { DRARAISABASTOS_DEFAULTS } from "@/lib/draraisabastos-defaults";
import TaiStorymaker from "@/components/TaiStorymaker";
import { TAISTORYMAKER_DEFAULTS } from "@/lib/taistorymaker-defaults";
import DayForadoar from "@/components/DayForadoar";
import { DAYFORADOAR_DEFAULTS } from "@/lib/dayforadoar-defaults";
import Tai from "@/components/Tai";
import { TAI_DEFAULTS } from "@/lib/tai-defaults";
import LaviniaPsi from "@/components/LaviniaPsi";
import { LAVINIAPSI_DEFAULTS } from "@/lib/laviniapsi-defaults";
import DraAndrezza from "@/components/DraAndrezza";
import { DRAANDREZZA_DEFAULTS } from "@/lib/draandrezza-defaults";
import Hortela from "@/components/Hortela";
import { HORTELA_DEFAULTS } from "@/lib/hortela-defaults";
import Gabi1 from "@/components/Gabi1";
import { GABI1_DEFAULTS } from "@/lib/gabi1-defaults";
import Duo2 from "@/components/Duo2";
import { DUO2_DEFAULTS } from "@/lib/duo2-defaults";
import Yaveh from "@/components/Yaveh";
import { YAVEH_DEFAULTS } from "@/lib/yaveh-defaults";
import Star from "@/components/Star";
import { STAR_DEFAULTS } from "@/lib/star-defaults";

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
  
  const dummyProfile = { full_name: "Preview Usuário", whatsapp: "5511999999999", instagram_url: "#" } as any;

  if (templateId === "contabilidade01") {
    return <Contabilidade01 content={CONTABILIDADE01_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "buffet01") {
    return <Buffet01 content={BUFFET01_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "petshop01") {
    return <Petshop01 content={PETSHOP01_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "maquiadora01") {
    return <Maquiadora01 content={MAQUIADORA01_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "psicologo01") {
    return <Psicologo01 content={PSICOLOGO01_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "barbearia01") {
    return <Barbearia01 content={BARBEARIA01_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "restaurante01") {
    return <Restaurante01 content={RESTAURANTE01_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "personal01") {
    return <Personal01 content={PERSONAL01_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "corretor01") {
    return <Corretor01 content={CORRETOR01_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "arquiteto01") {
    return <Arquiteto01 content={ARQUITETO01_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "advogado01") {
    return <Advogado01 content={ADVOGADO01_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "dentista01") {
    return <Dentista01 content={DENTISTA01_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "medico01") {
    return <Medico01 content={MEDICO01_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "confeitaria01") {
    return <Confeitaria01 content={CONFEITARIA01_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "creator01") {
    return <Creator01 content={CREATOR01_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "denis") {
    return <Denis content={DENIS_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "duo") {
    return <Duo content={DUO_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "manuel") {
    return <Manuel content={MANUEL_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "wilian") {
    return <Wilian content={WILIAN_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "loyola") {
    return <Loyola content={LOYOLA_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "amandex") {
    return <Amandex content={AMANDEX_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "francianefurohumanizado2") {
    return <FrancianeFurohumanizado2 content={FRANCIANEFUROHUMANIZADO2_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "ilgner") {
    return <Ilgner content={ILGNER_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "ilgner2") {
    return <Ilgner2 content={ILGNER2_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "ignosforadoar") {
    return <IgnosForadoar content={IGNOSFORADOAR_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "luanaforadoar") {
    return <LuanaForadoar content={LUANAFORADOAR_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "dramirella") {
    return <DraMirella content={DRAMIRELLA_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "yaveh2") {
    return <Yaveh2 content={YAVEH2_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "jt") {
    return <Jt content={JT_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "laylapsi") {
    return <LaylaPsi content={LAYLAPSI_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "hortela2") {
    return <Hortela2 content={HORTELA2_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "zisa") {
    return <Zisa content={ZISA_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "cristianapsi") {
    return <CristianaPsi content={CRISTIANAPSI_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "dudu") {
    return <Dudu content={DUDU_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "cristianapsi2") {
    return <CristianaPsi2 content={CRISTIANAPSI2_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "draraisabastos") {
    return <DraRaisabastos content={DRARAISABASTOS_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "taistorymaker") {
    return <TaiStorymaker content={TAISTORYMAKER_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "dayforadoar") {
    return <DayForadoar content={DAYFORADOAR_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "tai") {
    return <Tai content={TAI_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "laviniapsi") {
    return <LaviniaPsi content={LAVINIAPSI_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "draandrezza") {
    return <DraAndrezza content={DRAANDREZZA_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "hortela") {
    return <Hortela content={HORTELA_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "gabi1") {
    return <Gabi1 content={GABI1_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "duo2") {
    return <Duo2 content={DUO2_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "yaveh") {
    return <Yaveh content={YAVEH_DEFAULTS} profile={dummyProfile} />;
  }
  if (templateId === "star") {
    return <Star content={STAR_DEFAULTS} profile={dummyProfile} />;
  }

  return (
    <div style={{ padding: 40, textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>Template não encontrado para preview.</h2>
      <p>ID fornecido: {templateId}</p>
    </div>
  );
}
