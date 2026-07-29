import React, { useEffect } from "react";
import { Sparkles, Camera, Palette, Heart, MapPin, Instagram, Phone, ChevronRight } from "lucide-react";

export function Maquiadora01({ content, profile }: { content: any; profile: any }) {
  const c = content || {};
  const theme = c.theme?.colors || {};
  const branding = c.branding || {};
  const hero = c.hero || {};
  const about = c.about || {};
  const services = c.services || {};
  const testimonials = c.testimonials || {};
  const contact = c.contact || {};

  const bg = theme.bg || "#fff1f2";
  const text = theme.text || "#3f3f46";
  const primary = theme.primary || "#be185d";
  const accent = theme.accent || "#fbcfe8";
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
      case "Sparkles": return <Sparkles size={28} strokeWidth={1.5} />;
      case "Camera": return <Camera size={28} strokeWidth={1.5} />;
      case "Palette": return <Palette size={28} strokeWidth={1.5} />;
      case "Heart": return <Heart size={28} strokeWidth={1.5} />;
      default: return <Sparkles size={28} strokeWidth={1.5} />;
    }
  };

  return (
    <div className="w-full min-h-screen relative font-sans selection:bg-pink-200 selection:text-pink-900" style={{ backgroundColor: bg, color: text }}>
      
      <header className="px-6 py-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 z-20 relative">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          {branding.logo_url && (
            <img src={branding.logo_url} alt="Logo" className="h-16 object-contain mb-2" />
          )}
          <span className="font-serif text-3xl italic tracking-wide" style={{ color: primary }}>
            {branding.name || profile?.full_name}
          </span>
          {branding.location && (
            <span className="text-xs uppercase tracking-widest opacity-60 font-medium">
              {branding.location}
            </span>
          )}
        </div>
        
        {contact.instagram && (
          <a 
            href={contact.instagram}
            target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-colors"
            style={{ backgroundColor: card, color: primary, border: `1px solid ${accent}` }}
          >
            <Instagram size={16} /> @camilabeauty
          </a>
        )}
      </header>

      <section className="px-6 py-12 md:py-20 max-w-6xl mx-auto" id="services">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-[1.1] text-zinc-800">
              {hero.title}
            </h1>
            <p className="text-lg opacity-70 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              {hero.subtitle}
            </p>
            {hero.cta_label && (
              <a href={hero.cta_href || "#contact"} className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-medium text-white shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: primary }}>
                {hero.cta_label}
              </a>
            )}
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 rounded-full -z-10 blur-xl opacity-60" style={{ backgroundColor: accent }}></div>
            {hero.image_url && (
              <img src={hero.image_url} alt="Maquiagem" className="w-full aspect-[3/4] object-cover rounded-t-full rounded-b-[3rem] shadow-2xl" />
            )}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full -z-10" style={{ backgroundColor: accent }}></div>
          </div>
        </div>
      </section>

      {services.items && services.items.length > 0 && (
        <section className="px-6 py-24 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-800 mb-4">{services.title || "Serviços & Pacotes"}</h2>
            <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: primary }}></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.items.map((srv: any, i: number) => (
              <div key={i} className="p-10 rounded-[2.5rem] text-center transition-all hover:-translate-y-2 hover:shadow-xl" style={{ backgroundColor: card }}>
                <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-8 shadow-inner" style={{ backgroundColor: accent, color: primary }}>
                  {renderIcon(srv.icon)}
                </div>
                <h3 className="text-2xl font-serif mb-4 text-zinc-800">{srv.title}</h3>
                <p className="opacity-70 leading-relaxed font-light">{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {(about.title || (about.paragraphs && about.paragraphs.length > 0)) && (
        <section className="py-24 my-12 relative overflow-hidden" id="about">
          <div className="absolute inset-0 -z-10" style={{ backgroundColor: card }}></div>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: accent }}></div>
          
          <div className="px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {about.image_url && (
              <div className="relative">
                <div className="absolute inset-0 translate-x-4 -translate-y-4 rounded-[2.5rem] border-2" style={{ borderColor: accent }}></div>
                <img src={about.image_url} alt="Especialista" className="relative w-full aspect-square object-cover rounded-[2.5rem] shadow-xl" />
              </div>
            )}
            <div className="text-center lg:text-left">
              <span className="uppercase tracking-widest text-sm font-semibold mb-2 block" style={{ color: primary }}>Conheça</span>
              <h2 className="text-4xl md:text-5xl font-serif text-zinc-800 mb-8">{about.title}</h2>
              <div className="flex flex-col gap-6 text-lg opacity-75 font-light leading-relaxed">
                {(about.paragraphs || []).map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {testimonials.items && testimonials.items.length > 0 && (
        <section className="px-6 py-24 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-zinc-800 mb-16">{testimonials.title || "O que as clientes dizem"}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.items.map((t: any, i: number) => (
              <div key={i} className="relative p-8 rounded-3xl" style={{ backgroundColor: card }}>
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md" style={{ backgroundColor: primary }}>
                  <Heart size={18} fill="white" />
                </div>
                <p className="text-lg italic mt-6 mb-6 opacity-80 leading-relaxed">"{t.text}"</p>
                <div className="font-semibold uppercase tracking-widest text-xs" style={{ color: primary }}>{t.name}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="w-full relative px-6 py-24 md:py-32 text-center" id="contact">
        <div className="absolute inset-0 -z-10" style={{ backgroundColor: primary }}></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] -z-10"></div>
        
        <div className="max-w-3xl mx-auto relative z-10 text-white">
          <h2 className="text-5xl md:text-6xl font-serif mb-6">{contact.title || "Agende sua Produção"}</h2>
          <p className="text-lg opacity-90 mb-12 font-light leading-relaxed max-w-xl mx-auto">
            {contact.subtitle || "Consulte disponibilidade de datas e solicite um orçamento sem compromisso."}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {contact.whatsapp && (
              <a 
                href={`https://wa.me/${String(contact.whatsapp).replace(/\D/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 rounded-full font-medium text-pink-700 transition-transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-2"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Phone size={18} /> Solicitar Orçamento
              </a>
            )}
            {contact.instagram && (
              <a 
                href={contact.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 rounded-full font-medium transition-colors border flex items-center justify-center gap-2 hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.4)' }}
              >
                <Instagram size={18} /> Meu Portfólio
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
