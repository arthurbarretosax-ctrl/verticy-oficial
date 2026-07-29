import React, { useEffect } from "react";
import { Scissors, Coffee, Clock, Star, MapPin, Instagram, Phone, ChevronRight } from "lucide-react";

export function Barbearia01({ content, profile }: { content: any; profile: any }) {
  const c = content || {};
  const theme = c.theme?.colors || {};
  const branding = c.branding || {};
  const hero = c.hero || {};
  const about = c.about || {};
  const services = c.services || {};
  const testimonials = c.testimonials || {};
  const contact = c.contact || {};

  const bg = theme.bg || "#171717";
  const text = theme.text || "#f5f5f5";
  const primary = theme.primary || "#d97706";
  const card = theme.card || "#262626";

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
      case "Scissors": return <Scissors size={32} strokeWidth={1.5} />;
      case "Coffee": return <Coffee size={32} strokeWidth={1.5} />;
      case "Clock": return <Clock size={32} strokeWidth={1.5} />;
      case "Star": return <Star size={32} strokeWidth={1.5} />;
      default: return <Scissors size={32} strokeWidth={1.5} />;
    }
  };

  return (
    <div className="w-full min-h-screen relative font-sans selection:bg-amber-600 selection:text-white" style={{ backgroundColor: bg, color: text }}>
      
      <header className="px-6 py-6 md:py-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 z-20 relative border-b border-white/10">
        <div className="flex items-center gap-4">
          {branding.logo_url ? (
            <img src={branding.logo_url} alt="Logo" className="h-16 w-16 object-contain" />
          ) : (
            <div className="w-12 h-12 flex items-center justify-center border-2 rounded-full" style={{ borderColor: primary }}>
              <Scissors size={20} style={{ color: primary }} />
            </div>
          )}
          <div className="flex flex-col">
            <span className="font-bold text-2xl uppercase tracking-widest font-serif">
              {branding.name || profile?.full_name}
            </span>
            {branding.location && (
              <span className="text-xs uppercase tracking-[0.2em] opacity-60 mt-1 flex items-center gap-1">
                <MapPin size={12} style={{ color: primary }} /> {branding.location}
              </span>
            )}
          </div>
        </div>
        {contact.whatsapp && (
          <a 
            href={`https://wa.me/${String(contact.whatsapp).replace(/\D/g, '')}`}
            target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-3 border uppercase tracking-widest text-xs font-bold transition-all hover:bg-white hover:text-black"
            style={{ borderColor: primary, color: primary }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = primary; e.currentTarget.style.color = '#000'; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = primary; }}
          >
            Agendar Horário
          </a>
        )}
      </header>

      <section className="relative w-full border-b-8" style={{ borderColor: primary }}>
        <div className="absolute inset-0 z-0">
          {hero.image_url && (
            <img src={hero.image_url} alt="Barbearia" className="w-full h-[600px] md:h-[700px] object-cover opacity-40 grayscale" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-6 py-32 md:py-48 max-w-7xl mx-auto text-center md:text-left flex flex-col md:items-start items-center">
          <div className="inline-block px-4 py-1 border mb-8 uppercase tracking-[0.3em] text-xs font-bold" style={{ borderColor: primary, color: primary }}>
            Tradição & Estilo
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tight leading-[0.9] font-serif max-w-4xl text-white drop-shadow-lg">
            {hero.title}
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed">
            {hero.subtitle}
          </p>
          {hero.cta_label && (
            <a href={hero.cta_href || "#contact"} className="inline-flex items-center gap-3 px-10 py-5 text-sm uppercase tracking-[0.2em] font-bold text-black transition-transform hover:-translate-y-1" style={{ backgroundColor: primary }}>
              {hero.cta_label} <ChevronRight size={18} />
            </a>
          )}
        </div>
      </section>

      {services.items && services.items.length > 0 && (
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest font-serif mb-4 text-white">
              {services.title || "Serviços"}
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: primary }}></div>
          </div>
          <div className="flex flex-col gap-6">
            {services.items.map((srv: any, i: number) => (
              <div key={i} className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border-b border-white/10 group hover:bg-white/5 transition-colors">
                <div className="w-16 h-16 flex items-center justify-center shrink-0 border-2 rounded-full transform transition-transform group-hover:scale-110" style={{ borderColor: primary, color: primary }}>
                  {renderIcon(srv.icon)}
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-bold uppercase tracking-wider mb-2 font-serif text-white">{srv.title}</h3>
                  <p className="text-gray-400 font-light text-lg">{srv.desc}</p>
                </div>
                <a href="#contact" className="hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity uppercase text-xs font-bold tracking-widest items-center gap-1" style={{ color: primary }}>
                  Agendar <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {(about.title || (about.paragraphs && about.paragraphs.length > 0)) && (
        <section className="py-24 border-y border-white/5" style={{ backgroundColor: card }} id="about">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            {about.image_url && (
              <div className="relative">
                <img src={about.image_url} alt="Sobre nós" className="relative w-full h-[500px] object-cover sepia-[.3] contrast-125" />
                <div className="absolute -inset-4 border-2 -z-10" style={{ borderColor: primary }}></div>
              </div>
            )}
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest font-serif mb-8 text-white">{about.title}</h2>
              <div className="flex flex-col gap-6 text-xl text-gray-300 font-light leading-relaxed">
                {(about.paragraphs || []).map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {testimonials.items && testimonials.items.length > 0 && (
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest font-serif mb-4 text-white">
              {testimonials.title || "Clientes"}
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: primary }}></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.items.map((t: any, i: number) => (
              <div key={i} className="p-10 border relative" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <div className="flex items-center gap-2 mb-6" style={{ color: primary }}>
                  <Star size={16} fill={primary} /><Star size={16} fill={primary} /><Star size={16} fill={primary} /><Star size={16} fill={primary} /><Star size={16} fill={primary} />
                </div>
                <p className="text-xl italic mb-8 text-gray-300 font-serif leading-relaxed">"{t.text}"</p>
                <div className="font-bold uppercase tracking-widest text-sm text-white border-t border-white/10 pt-4">{t.name}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="w-full relative px-6 py-24 text-center border-t-4" style={{ backgroundColor: '#0a0a0a', borderColor: primary }} id="contact">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-16 mx-auto flex items-center justify-center border-2 mb-8 rotate-45" style={{ borderColor: primary }}>
            <Scissors size={24} style={{ color: primary }} className="-rotate-45" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest font-serif mb-6 text-white">{contact.title || "Garanta seu Horário"}</h2>
          <p className="text-lg text-gray-400 mb-12 font-light">
            {contact.subtitle || "Não deixe para a última hora. Agende agora e venha dar um tapa no visual."}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {contact.whatsapp && (
              <a 
                href={`https://wa.me/${String(contact.whatsapp).replace(/\D/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-5 text-sm uppercase tracking-[0.2em] font-bold text-black transition-transform hover:scale-105 flex items-center justify-center gap-3"
                style={{ backgroundColor: primary }}
              >
                <Phone size={18} /> Agendar via WhatsApp
              </a>
            )}
            {contact.instagram && (
              <a 
                href={contact.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-5 text-sm uppercase tracking-[0.2em] font-bold text-white transition-colors border hover:bg-white/5 flex items-center justify-center gap-3"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <Instagram size={18} /> Seguir no Instagram
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
