import React, { useEffect } from "react";
import { Key, Building, TrendingUp, MapPin, Instagram, Phone, ChevronRight } from "lucide-react";

export function Corretor01({ content, profile }: { content: any; profile: any }) {
  const c = content || {};
  const theme = c.theme?.colors || {};
  const branding = c.branding || {};
  const hero = c.hero || {};
  const about = c.about || {};
  const services = c.services || {};
  const testimonials = c.testimonials || {};
  const contact = c.contact || {};

  const bg = theme.bg || "#ffffff";
  const text = theme.text || "#1e293b";
  const primary = theme.primary || "#0f172a";
  const accent = theme.accent || "#d4af37";
  const card = theme.card || "#f8fafc";

  // Enforce background color
  useEffect(() => {
    document.body.style.backgroundColor = bg;
    document.body.style.color = text;
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [bg, text]);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Key": return <Key size={26} strokeWidth={1.5} />;
      case "Building": return <Building size={26} strokeWidth={1.5} />;
      case "TrendingUp": return <TrendingUp size={26} strokeWidth={1.5} />;
      default: return <Key size={26} strokeWidth={1.5} />;
    }
  };

  return (
    <div className="w-full min-h-screen relative font-sans selection:bg-slate-800 selection:text-white" style={{ backgroundColor: bg, color: text }}>
      
      {/* Top Banner (Optional for accent color pop) */}
      <div className="w-full h-1" style={{ backgroundColor: accent }}></div>

      <header className="px-6 py-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 z-10 relative">
        <div className="flex items-center gap-3">
          {branding.logo_url && (
            <img src={branding.logo_url} alt="Logo" className="h-12 w-12 object-cover rounded-md shadow-sm" />
          )}
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight" style={{ color: primary }}>
              {branding.name || profile?.full_name}
            </span>
            {branding.location && (
              <span className="text-xs uppercase tracking-wider font-semibold opacity-60 flex items-center gap-1">
                <MapPin size={12} /> {branding.location}
              </span>
            )}
          </div>
        </div>
        {contact.whatsapp && (
          <a 
            href={`https://wa.me/${String(contact.whatsapp).replace(/\D/g, '')}`}
            target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-sm font-semibold text-sm transition-all shadow-sm hover:shadow-md"
            style={{ backgroundColor: primary, color: "#fff" }}
          >
            <Phone size={16} /> Falar Agora
          </a>
        )}
      </header>

      <section className="px-4 py-8 md:py-16 max-w-7xl mx-auto">
        <div className="rounded-[2rem] overflow-hidden relative" style={{ backgroundColor: primary }}>
          <div className="absolute inset-0 z-0">
            {hero.image_url && (
              <img src={hero.image_url} alt="Imóvel" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 px-8 py-20 md:p-24 lg:w-2/3">
            <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm mb-6" style={{ backgroundColor: accent, color: primary }}>
              Exclusividade & Alto Padrão
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              {hero.subtitle}
            </p>
            {hero.cta_label && (
              <a href={hero.cta_href || "#contact"} className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold text-white transition-all hover:gap-4" style={{ backgroundColor: accent }}>
                {hero.cta_label} <ChevronRight size={20} />
              </a>
            )}
          </div>
        </div>
      </section>

      {services.items && services.items.length > 0 && (
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: primary }}>{services.title || "Minha Atuação"}</h2>
            <div className="w-16 h-1 mx-auto" style={{ backgroundColor: accent }}></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.items.map((srv: any, i: number) => (
              <div key={i} className="p-8 rounded-xl transition-all hover:-translate-y-1 hover:shadow-xl border border-slate-100" style={{ backgroundColor: card }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm" style={{ backgroundColor: "white", color: primary }}>
                  {renderIcon(srv.icon)}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: primary }}>{srv.title}</h3>
                <p className="opacity-75 leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {(about.title || (about.paragraphs && about.paragraphs.length > 0)) && (
        <section className="py-20" style={{ backgroundColor: card }} id="about">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              {about.image_url && (
                <div className="relative">
                  <div className="absolute -inset-4 rounded-xl hidden md:block" style={{ border: `2px solid ${accent}` }}></div>
                  <img src={about.image_url} alt="Corretor" className="relative w-full h-[500px] object-cover rounded-lg shadow-2xl" />
                </div>
              )}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: primary }}>{about.title}</h2>
                <div className="w-16 h-1 mb-8" style={{ backgroundColor: accent }}></div>
                <div className="flex flex-col gap-6 text-lg opacity-80 leading-relaxed">
                  {(about.paragraphs || []).map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {testimonials.items && testimonials.items.length > 0 && (
        <section className="px-6 py-20 max-w-7xl mx-auto bg-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: primary }}>{testimonials.title || "Clientes"}</h2>
            <div className="w-16 h-1 mx-auto" style={{ backgroundColor: accent }}></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.items.map((t: any, i: number) => (
              <div key={i} className="p-10 rounded-2xl relative" style={{ backgroundColor: card }}>
                <div className="absolute top-6 right-8 text-6xl font-serif opacity-10" style={{ color: primary }}>"</div>
                <p className="text-lg italic mb-6 opacity-80 relative z-10 leading-relaxed">"{t.text}"</p>
                <div className="font-bold text-sm tracking-widest uppercase" style={{ color: accent }}>{t.name}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="py-24 px-6 text-center" style={{ backgroundColor: primary, color: "#fff" }} id="contact">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-1 mx-auto mb-8" style={{ backgroundColor: accent }}></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{contact.title || "Vamos conversar?"}</h2>
          <p className="text-lg text-slate-300 mb-12 max-w-xl mx-auto">
            {contact.subtitle || "Me chame no WhatsApp e me conte o que você procura. Terei o maior prazer em ajudar."}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {contact.whatsapp && (
              <a 
                href={`https://wa.me/${String(contact.whatsapp).replace(/\D/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 rounded-sm font-bold transition-transform hover:-translate-y-1 text-slate-900 shadow-xl shadow-yellow-500/10"
                style={{ backgroundColor: accent }}
              >
                Iniciar Atendimento
              </a>
            )}
            {contact.instagram && (
              <a 
                href={contact.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 rounded-sm font-bold transition-all flex items-center justify-center gap-2 border border-slate-700 hover:bg-slate-800"
              >
                <Instagram size={20} /> Instagram
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
