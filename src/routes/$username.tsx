import React from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
import { DENTISTA01_DEFAULTS } from "@/lib/dentista01-defaults";
import { CREATOR01_DEFAULTS } from "@/lib/creator01-defaults";
import { Confeitaria01 } from "@/components/Confeitaria01";
import { Creator01 } from "@/components/Creator01";
import Advogado01 from "@/components/Advogado01";
import { Medico01 } from "@/components/Medico01";
import { Arquiteto01 } from "@/components/Arquiteto01";
import { Corretor01 } from "@/components/Corretor01";
import { Personal01 } from "@/components/Personal01";
import { Restaurante01 } from "@/components/Restaurante01";
import { Barbearia01 } from "@/components/Barbearia01";
import { Psicologo01 } from "@/components/Psicologo01";
import { Maquiadora01 } from "@/components/Maquiadora01";
import { Petshop01 } from "@/components/Petshop01";
import { Buffet01 } from "@/components/Buffet01";
import { Contabilidade01 } from "@/components/Contabilidade01";
import { ADVOGADO01_DEFAULTS } from "@/lib/advogado01-defaults";
import { CONFEITARIA01_DEFAULTS } from "@/lib/confeitaria01-defaults";
import { MEDICO01_DEFAULTS } from "@/lib/medico01-defaults";
import { ARQUITETO01_DEFAULTS } from "@/lib/arquiteto01-defaults";
import { CORRETOR01_DEFAULTS } from "@/lib/corretor01-defaults";
import { PERSONAL01_DEFAULTS } from "@/lib/personal01-defaults";
import { RESTAURANTE01_DEFAULTS } from "@/lib/restaurante01-defaults";
import { BARBEARIA01_DEFAULTS } from "@/lib/barbearia01-defaults";
import { PSICOLOGO01_DEFAULTS } from "@/lib/psicologo01-defaults";
import { MAQUIADORA01_DEFAULTS } from "@/lib/maquiadora01-defaults";
import { PETSHOP01_DEFAULTS } from "@/lib/petshop01-defaults";
import { BUFFET01_DEFAULTS } from "@/lib/buffet01-defaults";
import { CONTABILIDADE01_DEFAULTS } from "@/lib/contabilidade01-defaults";

import "/public/assets/css/verticy.css";
import "/public/assets/css/dentista01.css";
import "/public/assets/css/confeitaria01.css";
import "/public/assets/css/creator01.css";

/* ---------- server fn ---------- */
const getPublicSite = createServerFn({ method: "GET" })
  .inputValidator((data: { username: string, preview?: boolean }) =>
    z.object({ username: z.string().min(1).max(40), preview: z.boolean().optional() }).parse(data),
  )
  .handler(async ({ data }) => {
    const key = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY || process.env.VITE_SUPABASE_ANON_KEY!;
    const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL!;
    const client = createClient<Database>(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { data: profile } = await (client as any)
      .from("profiles")
      .select("id, username, full_name, profession")
      .eq("username", data.username)
      .maybeSingle();

    if (!profile) return null;

    const { data: site } = await (client as any)
      .from("sites")
      .select("template_id, content, published")
      .eq("user_id", profile.id)
      .maybeSingle();

    if (!site) return null;
    if (!site.published && !data.preview) return null;
    return { profile, site };
  });

/* ---------- route ---------- */
export const Route = createFileRoute("/$username")({
  validateSearch: (search: Record<string, unknown>) => ({
    preview: search.preview === "true" || search.preview === true ? true : undefined,
  }),
  loaderDeps: ({ search: { preview } }) => ({ preview }),
  loader: async ({ params, deps }) => {
    const result = await getPublicSite({ data: { username: params.username, preview: deps.preview } });
    if (!result) throw notFound();
    return result;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { profile, site } = loaderData;
    const c: any = site.content || {};
    const isDentista = site.template_id === "dentista01";
    const heroTitle = isDentista
      ? `${c?.branding?.name || profile.full_name} · ${profile.profession || "Estética"}`
      : c?.hero?.title || `${profile.full_name} · Verticy`;
    const description = isDentista
      ? c?.about?.paragraphs?.[0] || `Site de ${profile.full_name}.`
      : c?.hero?.subtitle || `Site oficial de ${profile.full_name}.`;
    const ogImage = isDentista ? c?.hero?.image_url : undefined;
    return {
      meta: [
        { title: heroTitle },
        { name: "description", content: description },
        { property: "og:title", content: heroTitle },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(ogImage ? [
          { property: "og:image", content: ogImage },
          { name: "twitter:image", content: ogImage },
        ] : []),
      ],
      links: isDentista
        ? [
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600&display=swap" },
            { rel: "stylesheet", href: "https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" },
            { rel: "stylesheet", href: "https://unpkg.com/@phosphor-icons/web@2.1.1/src/light/style.css" },
            { rel: "stylesheet", href: "https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css" },
            { rel: "stylesheet", href: "https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css" },
            { rel: "stylesheet", href: "https://unpkg.com/@phosphor-icons/web@2.1.1/src/thin/style.css" },
            { rel: "stylesheet", href: "/assets/css/dentista01.css" },
          ]
        : [
            { rel: "stylesheet", href: "/assets/css/verticy.css" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" },
          ],
      scripts: isDentista
        ? [{ src: "/assets/js/dentista01.js", defer: true }]
        : [],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: ErrorView,
  component: Microsite,
});

function initials(name: string | null = "") {
  if (!name) return "V";
  return (
    name.trim().split(/\s+/).slice(0, 2).map((s) => s[0]?.toUpperCase() || "").join("") || "V"
  );
}

function waLink(number?: string, msg?: string) {
  const n = (number || "").replace(/\D/g, "");
  if (!n) return "#";
  return `https://wa.me/${n}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
}



function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.8)", zIndex: 99999, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ backgroundColor: "var(--d01-bg, #fff)", width: "100%", maxWidth: 400, borderRadius: 16, padding: 24, position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "var(--d01-dark, #000)" }}>&times;</button>
        <h3 style={{ fontSize: 20, marginBottom: 8, color: "var(--d01-dark, #000)", fontFamily: "'Outfit', sans-serif" }}>Agendar Horário</h3>
        <p style={{ color: "var(--d01-n500, #666)", marginBottom: 24, fontSize: 14, fontFamily: "'Outfit', sans-serif" }}>Selecione o melhor dia e horário para você.</p>
        
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "var(--d01-dark, #000)", fontFamily: "'Outfit', sans-serif" }}>Dia</label>
          <select style={{ width: "100%", padding: 12, borderRadius: 8, border: "1px solid rgba(0,0,0,0.1)", fontSize: 16, background: "transparent", color: "var(--d01-dark, #000)" }}>
            <option>Selecione um dia...</option>
            <option>Amanhã - 29/07</option>
            <option>Quarta - 30/07</option>
            <option>Quinta - 31/07</option>
          </select>
        </div>
        
        <div style={{ marginBottom: 24 }}>
          <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "var(--d01-dark, #000)", fontFamily: "'Outfit', sans-serif" }}>Horário</label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            <button style={{ padding: 8, borderRadius: 8, border: "1px solid rgba(0,0,0,0.1)", background: "transparent", color: "var(--d01-dark, #000)", cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>09:00</button>
            <button style={{ padding: 8, borderRadius: 8, border: "none", background: "var(--d01-n600, #000)", color: "#fff", cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>10:30</button>
            <button style={{ padding: 8, borderRadius: 8, border: "1px solid rgba(0,0,0,0.1)", background: "transparent", color: "var(--d01-dark, #000)", cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>14:00</button>
          </div>
        </div>
        
        <button onClick={() => { alert("Este é apenas um protótipo visual do Agendamento. O backend será conectado em breve!"); onClose(); }} style={{ width: "100%", padding: 14, borderRadius: 8, border: "none", background: "var(--d01-n600, #000)", color: "#fff", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>Confirmar Agendamento</button>
      </div>
    </div>
  );
}

function Microsite() {
  const { profile, site } = Route.useLoaderData();
  const [liveContent, setLiveContent] = React.useState<any>(site.content);

  React.useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "LIVE_PREVIEW" && event.data?.content) {
        setLiveContent(event.data.content);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  React.useEffect(() => {
    if (site?.template_id === "nutricionista01") {
      const theme = liveContent?.theme?.colors || {};
      document.body.style.backgroundColor = theme.bg || "#F4F7F2";
    } else {
      document.body.style.backgroundColor = "";
    }
  }, [site?.template_id, liveContent]);

  if (site.template_id === "dentista01") {
    return <Dentista01 content={{ ...DENTISTA01_DEFAULTS, ...(liveContent as any) }} />;
  }
  if (site.template_id === "confeitaria01") {
    return <Confeitaria01 content={{ ...CONFEITARIA01_DEFAULTS, ...(liveContent as any) }} profile={profile} />;
  }
  if (site.template_id === "creator01") {
    return <Creator01 content={{ ...CREATOR01_DEFAULTS, ...(liveContent as any) }} profile={profile} />;
  }
  if (site.template_id === "advogado01") {
    return <Advogado01 content={{ ...ADVOGADO01_DEFAULTS, ...(liveContent as any) }} />;
  }
  if (site.template_id === "medico01") {
    return <Medico01 content={{ ...MEDICO01_DEFAULTS, ...(liveContent as any) }} profile={profile} />;
  }
  if (site.template_id === "arquiteto01") {
    return <Arquiteto01 content={{ ...ARQUITETO01_DEFAULTS, ...(liveContent as any) }} profile={profile} />;
  }
  if (site.template_id === "corretor01") {
    return <Corretor01 content={{ ...CORRETOR01_DEFAULTS, ...(liveContent as any) }} profile={profile} />;
  }
  if (site.template_id === "personal01") {
    return <Personal01 content={{ ...PERSONAL01_DEFAULTS, ...(liveContent as any) }} profile={profile} />;
  }
  if (site.template_id === "restaurante01") {
    return <Restaurante01 content={{ ...RESTAURANTE01_DEFAULTS, ...(liveContent as any) }} profile={profile} />;
  }
  if (site.template_id === "barbearia01") {
    return <Barbearia01 content={{ ...BARBEARIA01_DEFAULTS, ...(liveContent as any) }} profile={profile} />;
  }
  if (site.template_id === "psicologo01") {
    return <Psicologo01 content={{ ...PSICOLOGO01_DEFAULTS, ...(liveContent as any) }} profile={profile} />;
  }
  if (site.template_id === "maquiadora01") {
    return <Maquiadora01 content={{ ...MAQUIADORA01_DEFAULTS, ...(liveContent as any) }} profile={profile} />;
  }
  if (site.template_id === "petshop01") {
    return <Petshop01 content={{ ...PETSHOP01_DEFAULTS, ...(liveContent as any) }} profile={profile} />;
  }
  if (site.template_id === "buffet01") {
    return <Buffet01 content={{ ...BUFFET01_DEFAULTS, ...(liveContent as any) }} profile={profile} />;
  }
  if (site.template_id === "contabilidade01") {
    return <Contabilidade01 content={{ ...CONTABILIDADE01_DEFAULTS, ...(liveContent as any) }} profile={profile} />;
  }
  return <AuroraSite profile={profile} content={liveContent as any} />;
}


/* ------------- Aurora (template padrão) ------------- */
function AuroraSite({ profile, content }: { profile: any; content: any }) {
  const c = content || {};
  const hero = c.hero || {};
  const about = c.about || {};
  const services = c.services || {};
  const contact = c.contact || {};

  return (
    <>
      <div className="mesh-bg" />
      <header className="site-hero">
        <div className="site-container">
          <div className="site-avatar">{initials(profile.full_name)}</div>
          <h1 className="site-title gradient-text">{hero.title || profile.full_name}</h1>
          {hero.subtitle && <p className="site-sub">{hero.subtitle}</p>}
          {hero.cta_label && (
            <div className="mt-6">
              <a className="btn btn-primary btn-lg" href={hero.cta_href || "#contact"}>{hero.cta_label}</a>
            </div>
          )}
        </div>
      </header>

      {(about.title || about.body) && (
        <section className="site-container" id="about">
          <span className="eyebrow"><span className="dot" />Sobre</span>
          <h2 className="h-1 mt-4">{about.title}</h2>
          {about.body && <p className="lead mt-4" style={{ whiteSpace: "pre-wrap" }}>{about.body}</p>}
        </section>
      )}

      {Array.isArray(services.items) && services.items.length > 0 && (
        <section className="site-container" id="services">
          <span className="eyebrow"><span className="dot" />Serviços</span>
          <h2 className="h-1 mt-4">{services.title || "O que ofereço"}</h2>
          <div className="site-services">
            {services.items.map((it: any, i: number) => (
              <div key={i} className="card">
                <h3 className="h-3">{it.title}</h3>
                {it.desc && <p className="muted mt-2" style={{ fontSize: 14 }}>{it.desc}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {(contact.whatsapp || contact.instagram || contact.email) && (
        <section className="site-container" id="contact">
          <span className="eyebrow"><span className="dot" />Contato</span>
          <h2 className="h-1 mt-4">Vamos falar</h2>
          <div className="flex gap-3 mt-6" style={{ flexWrap: "wrap" }}>
            {contact.whatsapp && (
              <a className="btn btn-primary btn-lg" href={waLink(contact.whatsapp)} target="_blank" rel="noopener">WhatsApp</a>
            )}
            {contact.instagram && (
              <a className="btn btn-ghost btn-lg" href={`https://instagram.com/${String(contact.instagram).replace(/^@/, "")}`} target="_blank" rel="noopener">Instagram</a>
            )}
            {contact.email && (
              <a className="btn btn-ghost btn-lg" href={`mailto:${contact.email}`}>E-mail</a>
            )}
          </div>
        </section>
      )}

      <footer className="site-footer">Feito com <a href="/">Verticy</a></footer>
    </>
  );
}

/* ------------- Dentista01 ------------- */
export function Dentista01({ content }: { content: any }) {
  const [isBookingOpen, setBookingOpen] = React.useState(false);
  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setBookingOpen(true);
  };

  const b = content.branding || {};
  const hero = content.hero || {};
  const about = content.about || {};
  const dif = content.diferenciais || {};
  const svc = content.services || {};
  const esp = content.especialistas || {};
  const res = content.resultados || {};
  const testi = content.testimonials || {};
  const faq = content.faq || {};
  const cons = content.consultorio || {};
  const ig = content.instagram || {};
  const mp = content.map || {};
  const ct = content.contact || {};

  const heroWA = waLink(hero.wa_number, hero.wa_message);
  const footWA = waLink(ct.wa_number, ct.wa_message);
  const brandName = b.name || "";
  const tc = (content.theme && content.theme.colors) || {};
  const themeCss = `
    .d01 {
      ${tc.bg ? `--d01-bg: ${tc.bg};` : ""}
      ${tc.dark ? `--d01-dark: ${tc.dark};` : ""}
      ${tc.cream ? `--d01-cream: ${tc.cream};` : ""}
      ${tc.accent ? `--d01-n600: ${tc.accent};` : ""}
      ${tc.accent_soft ? `--d01-n500: ${tc.accent_soft};` : ""}
      ${tc.highlight ? `--d01-n300: ${tc.highlight};` : ""}
      ${tc.highlight ? `--d01-n400: ${tc.highlight};` : ""}
    }
    .d01 .d01-h2.light, .d01-footer, .d01-navbar .d01-brand { ${tc.text_light ? `color: ${tc.text_light};` : ""} }
  `;

  return (
    <div className="d01">
      <style dangerouslySetInnerHTML={{ __html: themeCss }} />
      {/* Navbar */}
      <header className="d01-navbar" id="d01-navbar">
        <div className="d01-navbar-inner">
          <a href="#top" className="d01-brand">
            {b.logo_url ? <img src={b.logo_url} alt={brandName} style={{ height: 40 }} /> : brandName}
          </a>
          <nav className="d01-nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#tratamentos">Procedimentos</a>
            <a href="#consultorio">Consultório</a>
            <a href="#resultados">Resultados</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href="#" onClick={handleBookingClick} className="d01-btn d01-btn-dark d01-nav-cta d01-hover-lift">
            Agendar Avaliação <i className="ph ph-calendar-blank" />
          </a>
          <button className="d01-menu-btn" id="d01-menu-btn" aria-label="Menu">
            <i className="ph ph-list" id="d01-menu-icon" />
          </button>
        </div>
        <div className="d01-mobile-menu" id="d01-mobile-menu">
          <nav>
            <a href="#sobre" className="d01-mobile-link">Sobre</a>
            <a href="#diferenciais" className="d01-mobile-link">Diferenciais</a>
            <a href="#tratamentos" className="d01-mobile-link">Procedimentos</a>
            <a href="#consultorio" className="d01-mobile-link">Consultório</a>
            <a href="#resultados" className="d01-mobile-link">Resultados</a>
            <a href="#faq" className="d01-mobile-link">FAQ</a>
            <a href={heroWA} target="_blank" rel="noopener" className="d01-mobile-link cta">
              <i className="ph-fill ph-whatsapp-logo" /> Agendar
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="d01-hero" id="top">
        <div className="d01-hero-bg">
          <picture>
            {hero.image_mobile_url && <source media="(max-width: 767px)" srcSet={hero.image_mobile_url} />}
            <img src={hero.image_url || DENTISTA01_DEFAULTS.hero.image_url} alt={brandName} />
          </picture>
        </div>
        <div className="d01-hero-content">
          <h1 className="d01-reveal d-1">
            {hero.title_pre} <span className="hl">{hero.title_highlight}</span>
            <br />
            {hero.title_end}
          </h1>
          <div className="d01-hero-actions d01-reveal d-2">
            <a href="#" onClick={handleBookingClick} className="d01-btn d01-btn-primary d01-hover-lift">Agendar consulta</a>
            <a href={heroWA} target="_blank" rel="noopener" className="d01-btn d01-btn-ghost d01-hover-lift">
              <i className="ph-fill ph-whatsapp-logo" /> Conversar no WhatsApp
            </a>
          </div>
        </div>
        {hero.show_cro_badge && b.cro && (
          <div className="d01-hero-badge d01-glass-dark d01-reveal d-3">
            <div className="d01-hero-badge-icon"><i className="ph-light ph-certificate" /></div>
            <div>
              <p>{b.cro}</p>
              <p>Cirurgião-Dentista</p>
            </div>
          </div>
        )}
      </section>

      {/* Sobre */}
      <section id="sobre" className="d01-section cream">
        <div className="d01-container">
          <div className="d01-about-grid">
            <div className="d01-about-img d01-reveal">
              <img src={about.image_url || DENTISTA01_DEFAULTS.about.image_url} alt={brandName} />
            </div>
            <div className="d01-about-text d01-reveal d-1">
              <span className="d01-eyebrow">{about.eyebrow}</span>
              <h2 className="d01-h2" style={{ marginBottom: 28 }}>
                {about.title_pre} <span className="hl">{about.title_highlight}</span>
              </h2>
              {(about.paragraphs || []).map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
              {about.quote && (
                <div className="d01-about-quote">
                  <p>"{about.quote}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="d01-section warm">
        <div className="d01-container-sm">
          <div style={{ textAlign: "center", marginBottom: 56 }} className="d01-reveal">
            <span className="d01-eyebrow light">{dif.eyebrow}</span>
            <h2 className="d01-h2 light">{dif.title_pre} <span className="hl">{dif.title_highlight}</span></h2>
          </div>
          <div className="d01-difer-grid">
            {(dif.items || []).map((it: any, i: number) => (
              <div key={i} className={`d01-difer-item d01-reveal ${i % 2 ? "d-1" : ""}`}>
                <i className={`ph-light ${it.icon || "ph-check"}`} />
                <h4>{it.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tratamentos */}
      <section id="tratamentos" className="d01-section dark">
        <div className="d01-container-lg">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 64px" }} className="d01-reveal">
            <span className="d01-eyebrow mid">{svc.eyebrow}</span>
            <h2 className="d01-h2 light">{svc.title_pre} <span className="hl">{svc.title_highlight}</span></h2>
          </div>
          <div className="d01-services-grid">
            {(svc.items || []).map((it: any, i: number) => (
              <div key={i} className={`d01-service-card d01-reveal d01-hover-lift ${i % 3 === 1 ? "d-1" : i % 3 === 2 ? "d-2" : ""}`}>
                {it.image_url && <img src={it.image_url} alt={it.title} />}
                <div className="d01-service-card-body">
                  <i className={`ph-thin ${it.icon || "ph-sparkle"}`} />
                  <h3>{it.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Especialistas */}
      {(esp.body || (esp.tags || []).length > 0) && (
        <section className="d01-especialistas">
          <div className="d01-especialistas-card d01-reveal d01-hover-lift">
            <div className="d01-icon-box"><i className="ph-light ph-users-three" /></div>
            <h3>{esp.title_pre} <span className="hl">{esp.title_highlight}</span></h3>
            {esp.body && <p>{esp.body}</p>}
            <div className="d01-tags">
              {(esp.tags || []).map((t: string, i: number) => <span key={i} className="d01-tag">{t}</span>)}
            </div>
          </div>
        </section>
      )}

      {/* Resultados */}
      <section id="resultados" className="d01-section warm">
        <div className="d01-container-lg">
          <div style={{ textAlign: "center", marginBottom: 64 }} className="d01-reveal">
            <span className="d01-eyebrow light">{res.eyebrow}</span>
            <h2 className="d01-h2 light">{res.title_pre} <span className="hl">{res.title_highlight}</span></h2>
          </div>
          <div className="d01-ba-grid">
            {(res.items || []).map((it: any, i: number) => (
              <div key={i} className={`d01-ba d01-reveal ${i ? "d-1" : ""}`}>
                <img src={it.before_url} alt="Antes" />
                <span className="d01-ba-badge before">Antes</span>
                <div className="d01-ba-after">
                  <img src={it.after_url} alt="Depois" />
                  <span className="d01-ba-badge after">Depois</span>
                </div>
                <div className="d01-ba-handle" />
                <input type="range" min={0} max={100} defaultValue={50} className="d01-ba-input" aria-label="Comparar antes e depois" />
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 40, color: "rgba(253,251,249,.5)", fontSize: 13, letterSpacing: "0.02em" }} className="d01-reveal">
            <i className="ph-light ph-hand-swipe-left" /> Arraste para comparar
          </p>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="d01-section cream">
        <div className="d01-container">
          <div style={{ textAlign: "center", marginBottom: 64 }} className="d01-reveal">
            <span className="d01-eyebrow">{testi.eyebrow}</span>
            <h2 className="d01-h2">{testi.title_pre} <span className="hl">{testi.title_highlight}</span></h2>
          </div>
          <div className="d01-testi-grid">
            {(testi.items || []).map((t: any, i: number) => (
              <div key={i} className={`d01-testi d01-hover-lift d01-reveal ${i ? "d-1" : ""}`}>
                <i className="ph-fill ph-quotes d01-testi-quote-icon" />
                <div className="d01-testi-stars">★★★★★</div>
                <p>"{t.quote}"</p>
                <div className="d01-testi-author">
                  <div className="d01-testi-avatar">{(t.name || "?").trim()[0]?.toUpperCase()}</div>
                  <div>
                    <div className="d01-testi-name">{t.name}</div>
                    <div className="d01-testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="d01-section dark">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }} className="d01-reveal">
            <span className="d01-eyebrow mid">{faq.eyebrow}</span>
            <h2 className="d01-h2 light">{faq.title_pre} <span className="hl">{faq.title_highlight}</span></h2>
          </div>
          <div className="d01-faq d01-reveal">
            {(faq.items || []).map((f: any, i: number) => (
              <div key={i} className="d01-faq-item">
                <button className="d01-faq-btn" type="button">
                  <span>{f.q}</span>
                  <i className="ph-bold ph-caret-down" />
                </button>
                <div className="d01-faq-content">
                  <div>{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultório */}
      {(cons.images || []).length > 0 && (
        <section id="consultorio" className="d01-section cream">
          <div className="d01-container-lg">
            <div style={{ textAlign: "center", marginBottom: 64 }} className="d01-reveal">
              <span className="d01-eyebrow">{cons.eyebrow}</span>
              <h2 className="d01-h2">{cons.title_pre} <span className="hl">{cons.title_highlight}</span></h2>
            </div>
            <div className="d01-consult-grid">
              {(cons.images || []).map((src: string, i: number) => (
                <div key={i} className={`d01-consult-item d01-reveal ${i ? "d-2" : "d-1"}`}>
                  <img src={src} alt={`Consultório ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Instagram */}
      {(ig.images || []).length > 0 && (
        <section className="d01-section warm">
          <div className="d01-container-sm" style={{ maxWidth: 1000 }}>
            <div className="d01-ig-header d01-reveal">
              <div>
                <span className="d01-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <i className="ph-bold ph-instagram-logo" /> {ig.eyebrow}
                </span>
                <h2 className="d01-h2 light" style={{ marginTop: 12 }}>{ig.title_pre} <span className="hl">{ig.title_highlight}</span></h2>
              </div>
              {ig.url && (
                <a href={ig.url} target="_blank" rel="noopener" className="d01-ig-handle">
                  {ig.handle} <i className="ph-bold ph-arrow-up-right" />
                </a>
              )}
            </div>
            <div className="d01-ig-grid">
              {(ig.images || []).map((src: string, i: number) => (
                <a key={i} href={ig.url || "#"} target="_blank" rel="noopener" className={`d01-ig-item d01-reveal d01-hover-lift ${i === 1 ? "d-1" : i === 2 ? "d-2" : i === 3 ? "d-3" : ""}`}>
                  <img src={src} alt={`Post ${i + 1}`} />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mapa */}
      {mp.embed_url && (
        <section style={{ background: "var(--d01-bg)", paddingTop: 80 }}>
          <div className="d01-map-head d01-reveal">
            <span className="d01-eyebrow mid">{mp.eyebrow}</span>
            <h2 className="d01-h2 light">{mp.title_pre} <span className="hl">{mp.title_highlight}</span></h2>
          </div>
          <div className="d01-map">
            <iframe src={mp.embed_url} loading="lazy" title="Mapa" />
          </div>
        </section>
      )}

      {/* Footer / Contato */}
      <footer id="contato" className="d01-footer">
        <div className="d01-footer-inner">
          <div className="d01-footer-cta d01-reveal">
            <h3>{ct.footer_headline_pre} <br /><span className="hl">{ct.footer_headline_highlight}</span></h3>
            <a href={footWA} target="_blank" rel="noopener" className="d01-btn d01-btn-cream d01-hover-lift">
              <i className="ph-fill ph-whatsapp-logo" /> Agendar Avaliação
            </a>
          </div>
          <div className="d01-footer-info d01-reveal d-1">
            {(ct.address_lines || []).length > 0 && (
              <div>
                <h4>Localização</h4>
                <p>{(ct.address_lines || []).map((l: string, i: number) => (<span key={i}>{l}<br /></span>))}</p>
              </div>
            )}
            {(ct.hours_lines || []).length > 0 && (
              <div>
                <h4>Atendimento</h4>
                <p>{(ct.hours_lines || []).map((l: string, i: number) => (<span key={i}>{l}<br /></span>))}</p>
              </div>
            )}
          </div>
        </div>

        <div className="d01-footer-bar">
          <div className="d01-footer-bar-info">
            <p>© {ct.footer_year || new Date().getFullYear()} {brandName}.</p>
            {b.cro && <p>{b.cro}</p>}
          </div>
          <div className="d01-socials">
            {ct.instagram_url && (
              <a href={ct.instagram_url} target="_blank" rel="noopener" className="d01-social" aria-label="Instagram">
                <i className="ph-fill ph-instagram-logo" />
              </a>
            )}
            {ct.wa_number && (
              <a href={footWA} target="_blank" rel="noopener" className="d01-social" aria-label="WhatsApp">
                <i className="ph-fill ph-whatsapp-logo" />
              </a>
            )}
          </div>
        </div>

        <div className="d01-signature">
          <p>© {ct.footer_year || new Date().getFullYear()} {brandName.toUpperCase()}</p>
          <p>CRIADO POR <a href="/">VERTICY.</a> <span style={{ opacity: 0.6 }}>PREMIUM SITE</span></p>
        </div>
      </footer>
      <BookingModal isOpen={isBookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

function NotFound() {
  return (
    <>
      <div className="mesh-bg" />
      <div className="auth-shell">
        <div className="auth-card text-center">
          <h1 className="h-1">Site não encontrado</h1>
          <p className="lead mt-4">Esse endereço ainda não foi publicado.</p>
          <a href="/" className="btn btn-primary mt-6">Voltar para Verticy</a>
        </div>
      </div>
    </>
  );
}

function ErrorView({ error }: { error?: any }) {
  return (
    <>
      <div className="mesh-bg" />
      <div className="auth-shell">
        <div className="auth-card text-center">
          <h1 className="h-2">Algo deu errado</h1>
          <p className="lead mt-4">Tente novamente em instantes.</p>
          {error && (
            <div style={{ marginTop: 20, padding: 10, background: "#ff000020", color: "#ff4444", borderRadius: 8, fontSize: 12, textAlign: "left", wordBreak: "break-all" }}>
              <strong>Error details:</strong><br/>
              {error.message || String(error)}
            </div>
          )}
          <a href="/" className="btn btn-ghost mt-6">Voltar</a>
        </div>
      </div>
    </>
  );
}
