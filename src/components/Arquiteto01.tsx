import React, { useEffect } from "react";
import { Home, PenTool, Layout, Compass, MapPin, Instagram, ArrowRight } from "lucide-react";

export function Arquiteto01({ content, profile }: { content: any; profile: any }) {
  const c = content || {};
  const theme = c.theme?.colors || {};
  const branding = c.branding || {};
  const hero = c.hero || {};
  const about = c.about || {};
  const services = c.services || {};
  const testimonials = c.testimonials || {};
  const contact = c.contact || {};

  const bg = theme.bg || "#111111";
  const text = theme.text || "#ffffff";
  const primary = theme.primary || "#c2a373";
  const card = theme.card || "#1a1a1a";

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
      case "Home": return <Home size={24} strokeWidth={1.5} />;
      case "PenTool": return <PenTool size={24} strokeWidth={1.5} />;
      case "Layout": return <Layout size={24} strokeWidth={1.5} />;
      case "Compass": return <Compass size={24} strokeWidth={1.5} />;
      default: return <Home size={24} strokeWidth={1.5} />;
    }
  };

  return (
    <div className="w-full min-h-screen relative" style={{ backgroundColor: bg, color: text, fontFamily: "'Inter', sans-serif" }}>
      
      <header className="px-6 py-6 md:py-8 max-w-6xl mx-auto flex items-center justify-between z-10 relative">
        <div className="flex items-center gap-4">
          {branding.logo_url && (
            <img src={branding.logo_url} alt="Logo" className="h-10 object-contain" />
          )}
          <span className="font-light tracking-[0.2em] uppercase text-sm md:text-base">
            {branding.name || profile?.full_name}
          </span>
        </div>
        {branding.location && (
          <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest opacity-60">
            <MapPin size={14} />
            {branding.location}
          </div>
        )}
      </header>

      <section className="px-6 py-12 md:py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 md:order-1">
            <div className="w-12 h-[1px] mb-8" style={{ backgroundColor: primary }}></div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light mb-8 leading-[1.1] tracking-tight">
              {hero.title}
            </h1>
            <p className="text-lg opacity-70 mb-12 max-w-md font-light leading-relaxed">
              {hero.subtitle}
            </p>
            {hero.cta_label && (
              <a href={hero.cta_href || "#contact"} className="inline-flex items-center gap-4 uppercase tracking-[0.15em] text-xs font-medium group transition-opacity hover:opacity-70">
                {hero.cta_label}
                <span className="w-8 h-8 rounded-full flex items-center justify-center border transition-colors group-hover:bg-white group-hover:text-black" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                  <ArrowRight size={14} />
                </span>
              </a>
            )}
          </div>
          {hero.image_url && (
            <div className="order-1 md:order-2">
              <img src={hero.image_url} alt="Projeto em destaque" className="w-full h-[50vh] md:h-[70vh] object-cover" />
            </div>
          )}
        </div>
      </section>

      {(about.title || (about.paragraphs && about.paragraphs.length > 0)) && (
        <section className="px-6 py-20 md:py-32 max-w-6xl mx-auto" id="about">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] mb-4 opacity-60">{about.title}</h2>
              <div className="w-full h-[1px] opacity-20 mb-8" style={{ backgroundColor: text }}></div>
              {about.image_url && (
                <img src={about.image_url} alt="Sobre" className="w-full h-[300px] object-cover mt-8 grayscale hover:grayscale-0 transition-all duration-700" />
              )}
            </div>
            <div className="flex flex-col gap-8 text-xl md:text-2xl font-light leading-relaxed opacity-90">
              {(about.paragraphs || []).map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {services.items && services.items.length > 0 && (
        <section className="py-20 md:py-32 border-t border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-light mb-16">{services.title || "Expertise"}</h2>
            <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
              {services.items.map((srv: any, i: number) => (
                <div key={i} className="group">
                  <div className="w-12 h-12 flex items-center justify-center mb-6 border" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                    <div style={{ color: primary }}>{renderIcon(srv.icon)}</div>
                  </div>
                  <h3 className="text-xl font-medium mb-4">{srv.title}</h3>
                  <p className="opacity-60 font-light leading-relaxed">{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {testimonials.items && testimonials.items.length > 0 && (
        <section className="px-6 py-20 md:py-32 max-w-4xl mx-auto text-center">
          <h2 className="text-xs uppercase tracking-[0.2em] mb-16 opacity-60">{testimonials.title || "Clientes"}</h2>
          <div className="flex flex-col gap-16 md:gap-24">
            {testimonials.items.map((t: any, i: number) => (
              <div key={i}>
                <p className="text-xl md:text-3xl font-light leading-relaxed mb-6">"{t.text}"</p>
                <div className="text-sm uppercase tracking-widest opacity-50">— {t.name}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="px-6 py-24 md:py-32 border-t" style={{ backgroundColor: card, borderColor: 'rgba(255,255,255,0.05)' }} id="contact">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">{contact.title || "Inicie seu Projeto"}</h2>
            <p className="text-lg opacity-60 max-w-md font-light mb-12">
              {contact.subtitle || "Vamos juntos dar vida às suas ideias. Entre em contato com nossa equipe."}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 md:justify-end">
            {contact.whatsapp && (
              <a 
                href={`https://wa.me/${String(contact.whatsapp).replace(/\D/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 text-sm uppercase tracking-widest font-medium transition-opacity hover:opacity-80 flex items-center justify-center"
                style={{ backgroundColor: primary, color: "#fff" }}
              >
                Falar no WhatsApp
              </a>
            )}
            {contact.instagram && (
              <a 
                href={contact.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 text-sm uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-3 border"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <Instagram size={16} /> Instagram
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
