import React, { useEffect } from "react";
import { Utensils, Flame, Coffee, MapPin, Instagram, Phone, ChevronRight } from "lucide-react";

export function Restaurante01({ content, profile }: { content: any; profile: any }) {
  const c = content || {};
  const theme = c.theme?.colors || {};
  const branding = c.branding || {};
  const hero = c.hero || {};
  const about = c.about || {};
  const services = c.services || {};
  const testimonials = c.testimonials || {};
  const contact = c.contact || {};

  const bg = theme.bg || "#1c1917";
  const text = theme.text || "#f5f5f4";
  const primary = theme.primary || "#ef4444";
  const card = theme.card || "#292524";

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
      case "Utensils": return <Utensils size={28} strokeWidth={1.5} />;
      case "Flame": return <Flame size={28} strokeWidth={1.5} />;
      case "Coffee": return <Coffee size={28} strokeWidth={1.5} />;
      default: return <Utensils size={28} strokeWidth={1.5} />;
    }
  };

  return (
    <div className="w-full min-h-screen relative font-sans selection:bg-red-500 selection:text-white" style={{ backgroundColor: bg, color: text }}>
      
      {/* Top Banner (Optional for accent color pop) */}
      <div className="w-full h-1.5" style={{ backgroundColor: primary }}></div>

      <header className="px-6 py-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 z-20 relative">
        <div className="flex items-center gap-3">
          {branding.logo_url && (
            <img src={branding.logo_url} alt="Logo" className="h-14 w-14 object-cover rounded-full shadow-lg" />
          )}
          <div className="flex flex-col text-center md:text-left">
            <span className="font-serif text-3xl font-semibold tracking-wide">
              {branding.name || profile?.full_name}
            </span>
            {branding.location && (
              <span className="text-xs tracking-wider opacity-70 mt-1 flex items-center justify-center md:justify-start gap-1">
                <MapPin size={12} style={{ color: primary }} /> {branding.location}
              </span>
            )}
          </div>
        </div>
      </header>

      <section className="relative px-6 pb-20 pt-10 md:py-24 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              {hero.subtitle}
            </p>
            {hero.cta_label && (
              <a href={hero.cta_href || "#contact"} className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: primary }}>
                {hero.cta_label} <ChevronRight size={18} />
              </a>
            )}
          </div>
          <div className="relative order-1 lg:order-2">
            {hero.image_url && (
              <div className="relative rounded-full aspect-square overflow-hidden shadow-2xl border-4" style={{ borderColor: card }}>
                <img src={hero.image_url} alt="Restaurante" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            )}
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full -z-10 opacity-50 blur-2xl" style={{ backgroundColor: primary }}></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full -z-10 opacity-20 blur-2xl" style={{ backgroundColor: primary }}></div>
          </div>
        </div>
      </section>

      {(about.title || (about.paragraphs && about.paragraphs.length > 0)) && (
        <section className="py-24" style={{ backgroundColor: card }} id="about">
          <div className="px-6 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {about.image_url && (
                <div className="relative">
                  <img src={about.image_url} alt="Nossa História" className="relative w-full h-[500px] object-cover rounded-2xl shadow-xl" />
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-xl -z-10" style={{ border: `2px solid ${primary}` }}></div>
                </div>
              )}
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">{about.title}</h2>
                <div className="w-20 h-1 mb-8 rounded-full" style={{ backgroundColor: primary }}></div>
                <div className="flex flex-col gap-6 text-lg opacity-80 leading-relaxed font-light">
                  {(about.paragraphs || []).map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {services.items && services.items.length > 0 && (
        <section className="px-6 py-24 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: primary }}>Descubra</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{services.title || "Nosso Menu"}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.items.map((srv: any, i: number) => (
              <div key={i} className="p-8 rounded-3xl transition-transform hover:-translate-y-2 border text-center" style={{ backgroundColor: card, borderColor: 'rgba(255,255,255,0.05)' }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg rotate-3 transition-transform hover:rotate-6" style={{ backgroundColor: primary, color: "#fff" }}>
                  {renderIcon(srv.icon)}
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">{srv.title}</h3>
                <p className="opacity-70 leading-relaxed font-light">{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {testimonials.items && testimonials.items.length > 0 && (
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #ef4444 0%, transparent 50%)' }}></div>
          <div className="px-6 max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16">{testimonials.title || "Avaliações"}</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {testimonials.items.map((t: any, i: number) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="text-5xl font-serif opacity-20 mb-4" style={{ color: primary }}>"</div>
                  <p className="text-xl font-light italic mb-6 opacity-90 leading-relaxed">"{t.text}"</p>
                  <div className="font-semibold tracking-wide">{t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="py-24 px-6 text-center border-t" style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: card }} id="contact">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{contact.title || "Reserve sua Mesa"}</h2>
          <p className="text-lg opacity-70 mb-12 max-w-xl mx-auto font-light leading-relaxed">
            {contact.subtitle || "Garanta seu lugar e venha desfrutar de uma noite incrível. Aceitamos reservas via WhatsApp."}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {contact.whatsapp && (
              <a 
                href={`https://wa.me/${String(contact.whatsapp).replace(/\D/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 rounded-full font-semibold transition-transform hover:scale-105 shadow-xl text-white flex items-center justify-center gap-2"
                style={{ backgroundColor: primary }}
              >
                <Phone size={18} /> Reservar Agora
              </a>
            )}
            {contact.instagram && (
              <a 
                href={contact.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 border hover:bg-white/5"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <Instagram size={18} /> Acompanhar Novidades
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
