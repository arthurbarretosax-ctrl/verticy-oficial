import React, { useEffect } from "react";
import { Sun, Heart, Compass, MapPin, Instagram, Phone, ArrowRight, Smile } from "lucide-react";

export function Psicologo01({ content, profile }: { content: any; profile: any }) {
  const c = content || {};
  const theme = c.theme?.colors || {};
  const branding = c.branding || {};
  const hero = c.hero || {};
  const about = c.about || {};
  const services = c.services || {};
  const testimonials = c.testimonials || {};
  const contact = c.contact || {};

  const bg = theme.bg || "#f8fafc";
  const text = theme.text || "#334155";
  const primary = theme.primary || "#0f766e";
  const accent = theme.accent || "#ccfbf1";
  const card = theme.card || "#ffffff";

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
      case "Sun": return <Sun size={28} strokeWidth={1.5} />;
      case "Heart": return <Heart size={28} strokeWidth={1.5} />;
      case "Compass": return <Compass size={28} strokeWidth={1.5} />;
      case "Smile": return <Smile size={28} strokeWidth={1.5} />;
      default: return <Sun size={28} strokeWidth={1.5} />;
    }
  };

  return (
    <div className="w-full min-h-screen relative font-sans selection:bg-teal-100 selection:text-teal-900" style={{ backgroundColor: bg, color: text }}>
      
      <header className="px-6 py-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 z-20 relative">
        <div className="flex items-center gap-4">
          {branding.logo_url && (
            <img src={branding.logo_url} alt="Logo" className="h-12 w-12 object-cover rounded-full shadow-sm" />
          )}
          <div className="flex flex-col text-center md:text-left">
            <span className="font-semibold text-xl tracking-tight" style={{ color: primary }}>
              {branding.name || profile?.full_name}
            </span>
            {branding.location && (
              <span className="text-xs uppercase tracking-wider opacity-60 mt-0.5 flex items-center justify-center md:justify-start gap-1 font-medium">
                <MapPin size={12} /> {branding.location}
              </span>
            )}
          </div>
        </div>
      </header>

      <section className="px-6 py-12 md:py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8" style={{ backgroundColor: accent, color: primary }}>
              <Smile size={16} /> Bem-vindo(a)
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-slate-800">
              {hero.title}
            </h1>
            <p className="text-lg opacity-80 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
              {hero.subtitle}
            </p>
            {hero.cta_label && (
              <a href={hero.cta_href || "#contact"} className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-medium text-white transition-transform hover:-translate-y-1 shadow-lg hover:shadow-xl" style={{ backgroundColor: primary }}>
                {hero.cta_label} <ArrowRight size={18} />
              </a>
            )}
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-6 rounded-[3rem] -z-10 opacity-50" style={{ backgroundColor: accent }}></div>
            {hero.image_url && (
              <img src={hero.image_url} alt="Terapia" className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-xl" />
            )}
          </div>
        </div>
      </section>

      {services.items && services.items.length > 0 && (
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{services.title || "Como posso ajudar"}</h2>
            <div className="w-12 h-1 mx-auto rounded-full" style={{ backgroundColor: primary }}></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.items.map((srv: any, i: number) => (
              <div key={i} className="p-8 rounded-[2rem] shadow-sm transition-all hover:shadow-md border border-slate-100" style={{ backgroundColor: card }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: accent, color: primary }}>
                  {renderIcon(srv.icon)}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{srv.title}</h3>
                <p className="opacity-75 leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {(about.title || (about.paragraphs && about.paragraphs.length > 0)) && (
        <section className="py-24 my-12" style={{ backgroundColor: card }} id="about">
          <div className="px-6 max-w-5xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center">
            {about.image_url && (
              <div className="relative">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem]" style={{ backgroundColor: primary }}></div>
                <img src={about.image_url} alt="Psicóloga" className="relative w-full aspect-square object-cover rounded-[2rem] shadow-lg" />
              </div>
            )}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">{about.title}</h2>
              <div className="flex flex-col gap-6 text-lg opacity-80 leading-relaxed">
                {(about.paragraphs || []).map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {testimonials.items && testimonials.items.length > 0 && (
        <section className="px-6 py-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-16">{testimonials.title || "Depoimentos"}</h2>
          <div className="flex flex-col gap-12">
            {testimonials.items.map((t: any, i: number) => (
              <div key={i} className="relative">
                <div className="text-6xl font-serif absolute -top-8 left-1/2 -translate-x-1/2 opacity-10" style={{ color: primary }}>"</div>
                <p className="text-xl md:text-2xl font-medium italic mb-6 leading-relaxed relative z-10 text-slate-700">
                  "{t.text}"
                </p>
                <div className="text-sm font-bold uppercase tracking-widest opacity-50">{t.name}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="w-full relative px-6 py-24 md:py-32 overflow-hidden mt-12 text-center" id="contact">
        <div className="absolute inset-0 -z-10" style={{ backgroundColor: primary }}></div>
        {/* Soft decorative background circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-3xl mx-auto relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{contact.title || "Dê o primeiro passo"}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-12 font-medium leading-relaxed max-w-xl mx-auto">
            {contact.subtitle || "O cuidado com a saúde mental começa com uma simples conversa. Entre em contato para agendarmos um horário."}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {contact.whatsapp && (
              <a 
                href={`https://wa.me/${String(contact.whatsapp).replace(/\D/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-slate-800 transition-transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Phone size={18} /> Agendar Sessão
              </a>
            )}
            {contact.instagram && (
              <a 
                href={contact.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 rounded-2xl font-medium transition-colors border hover:bg-white/10 flex items-center justify-center gap-2"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                <Instagram size={18} /> Acompanhar Instagram
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
