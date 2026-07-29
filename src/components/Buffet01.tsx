import React, { useEffect } from "react";
import { Heart, Briefcase, Star, MapPin, Instagram, Phone, Utensils, Wine, Music, ChevronRight } from "lucide-react";

export function Buffet01({ content, profile }: { content: any; profile: any }) {
  const c = content || {};
  const theme = c.theme?.colors || {};
  const branding = c.branding || {};
  const hero = c.hero || {};
  const about = c.about || {};
  const services = c.services || {};
  const testimonials = c.testimonials || {};
  const contact = c.contact || {};

  const bg = theme.bg || "#fafaf9";
  const text = theme.text || "#44403c";
  const primary = theme.primary || "#d97706";
  const accent = theme.accent || "#fef3c7";
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
      case "Heart": return <Heart size={28} strokeWidth={1.5} />;
      case "Briefcase": return <Briefcase size={28} strokeWidth={1.5} />;
      case "Star": return <Star size={28} strokeWidth={1.5} />;
      case "Utensils": return <Utensils size={28} strokeWidth={1.5} />;
      case "Wine": return <Wine size={28} strokeWidth={1.5} />;
      case "Music": return <Music size={28} strokeWidth={1.5} />;
      default: return <Star size={28} strokeWidth={1.5} />;
    }
  };

  return (
    <div className="w-full min-h-screen relative font-sans selection:bg-amber-200 selection:text-amber-900" style={{ backgroundColor: bg, color: text }}>
      
      <header className="px-6 py-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 z-20 relative">
        <div className="flex flex-col items-center md:items-start gap-1">
          {branding.logo_url && (
            <img src={branding.logo_url} alt="Logo" className="h-16 object-contain mb-2" />
          )}
          <span className="font-serif text-3xl italic tracking-wide" style={{ color: primary }}>
            {branding.name || profile?.full_name}
          </span>
          {branding.location && (
            <span className="text-xs uppercase tracking-widest opacity-60 font-medium flex items-center gap-1">
              <MapPin size={12} style={{ color: primary }} /> {branding.location}
            </span>
          )}
        </div>
        
        {contact.whatsapp && (
          <a 
            href={`https://wa.me/${String(contact.whatsapp).replace(/\D/g, '')}`}
            target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-8 py-3 rounded-none text-sm font-bold uppercase tracking-widest transition-all hover:-translate-y-1 shadow-md"
            style={{ backgroundColor: primary, color: "#fff" }}
          >
            Fale Conosco
          </a>
        )}
      </header>

      <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8 opacity-60">
            <div className="w-16 h-px" style={{ backgroundColor: primary }}></div>
            <Utensils size={16} style={{ color: primary }} />
            <div className="w-16 h-px" style={{ backgroundColor: primary }}></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 text-stone-800 leading-[1.1]">
            {hero.title}
          </h1>
          <p className="text-xl opacity-70 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            {hero.subtitle}
          </p>
          {hero.cta_label && (
            <a href={hero.cta_href || "#contact"} className="inline-flex items-center gap-2 px-10 py-5 text-sm uppercase tracking-widest font-bold transition-all shadow-lg hover:shadow-xl hover:bg-stone-800 hover:text-white" style={{ backgroundColor: primary, color: "#fff" }}>
              {hero.cta_label}
            </a>
          )}
        </div>
        
        {hero.image_url && (
          <div className="w-full mt-24 relative p-4 bg-white shadow-xl">
            <div className="absolute inset-0 border-2 m-2 pointer-events-none" style={{ borderColor: primary, opacity: 0.2 }}></div>
            <img src={hero.image_url} alt="Buffet" className="w-full h-[500px] md:h-[700px] object-cover" />
          </div>
        )}
      </section>

      {services.items && services.items.length > 0 && (
        <section className="px-6 py-24 max-w-7xl mx-auto" id="services">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">{services.title || "Nossos Pacotes"}</h2>
            <div className="w-24 h-0.5 mx-auto" style={{ backgroundColor: primary }}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.items.map((srv: any, i: number) => (
              <div key={i} className="group flex flex-col h-full bg-white p-10 shadow-sm transition-all hover:shadow-2xl border border-stone-100">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 bg-stone-50 transition-colors group-hover:bg-amber-50" style={{ color: primary }}>
                  {renderIcon(srv.icon)}
                </div>
                <h3 className="text-2xl font-serif mb-4 text-stone-800">{srv.title}</h3>
                <p className="opacity-70 leading-relaxed font-light mb-8 flex-1">{srv.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: primary }}>
                  Saiba mais <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {(about.title || (about.paragraphs && about.paragraphs.length > 0)) && (
        <section className="py-24 my-12 relative" style={{ backgroundColor: accent }} id="about">
          <div className="absolute top-0 left-0 w-full h-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {about.image_url && (
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-white shadow-xl -rotate-2"></div>
                <img src={about.image_url} alt="Sobre o Buffet" className="relative w-full aspect-[4/5] object-cover rotate-1" />
              </div>
            )}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-8">{about.title}</h2>
              <div className="flex flex-col gap-6 text-lg opacity-80 font-light leading-relaxed">
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
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-16">{testimonials.title || "Momentos Mágicos"}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.items.map((t: any, i: number) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex gap-1 mb-6" style={{ color: primary }}>
                  <Star size={16} fill={primary} /><Star size={16} fill={primary} /><Star size={16} fill={primary} /><Star size={16} fill={primary} /><Star size={16} fill={primary} />
                </div>
                <p className="text-xl italic mb-8 opacity-80 leading-relaxed font-serif text-stone-600">"{t.text}"</p>
                <div className="w-12 h-px mb-4 bg-stone-300"></div>
                <div className="font-semibold uppercase tracking-widest text-xs opacity-60">{t.name}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="w-full relative px-6 py-24 md:py-32 bg-stone-900 text-center" id="contact">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        
        <div className="max-w-3xl mx-auto relative z-10 text-stone-100">
          <Wine size={48} className="mx-auto mb-8" style={{ color: primary }} strokeWidth={1} />
          
          <h2 className="text-5xl md:text-6xl font-serif mb-6">{contact.title || "Realize seu Evento"}</h2>
          <p className="text-lg opacity-80 mb-12 font-light leading-relaxed max-w-xl mx-auto">
            {contact.subtitle || "Nossa agenda para o próximo ano já está aberta. Entre em contato e reserve a sua data."}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {contact.whatsapp && (
              <a 
                href={`https://wa.me/${String(contact.whatsapp).replace(/\D/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 text-sm uppercase tracking-widest font-bold text-white transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
                style={{ backgroundColor: primary }}
              >
                <Phone size={18} /> Solicitar Orçamento
              </a>
            )}
            {contact.instagram && (
              <a 
                href={contact.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 text-sm uppercase tracking-widest font-bold transition-colors border flex items-center justify-center gap-3 hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <Instagram size={18} /> Siga-nos
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
