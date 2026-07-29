import React, { useEffect } from "react";
import { Zap, Dumbbell, Timer, MapPin, Instagram, Activity, ArrowUpRight } from "lucide-react";

export function Personal01({ content, profile }: { content: any; profile: any }) {
  const c = content || {};
  const theme = c.theme?.colors || {};
  const branding = c.branding || {};
  const hero = c.hero || {};
  const about = c.about || {};
  const services = c.services || {};
  const testimonials = c.testimonials || {};
  const contact = c.contact || {};

  const bg = theme.bg || "#09090b";
  const text = theme.text || "#ffffff";
  const primary = theme.primary || "#f97316";
  const card = theme.card || "#18181b";

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
      case "Zap": return <Zap size={32} strokeWidth={2} />;
      case "Dumbbell": return <Dumbbell size={32} strokeWidth={2} />;
      case "Timer": return <Timer size={32} strokeWidth={2} />;
      default: return <Activity size={32} strokeWidth={2} />;
    }
  };

  return (
    <div className="w-full min-h-screen relative font-sans selection:bg-orange-500 selection:text-white" style={{ backgroundColor: bg, color: text }}>
      
      <header className="px-6 py-6 md:py-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 z-20 relative">
        <div className="flex items-center gap-3">
          {branding.logo_url && (
            <img src={branding.logo_url} alt="Logo" className="h-10 w-10 object-cover rounded-md" />
          )}
          <span className="font-black text-2xl uppercase tracking-tighter italic">
            {branding.name || profile?.full_name}
          </span>
        </div>
        {branding.location && (
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ backgroundColor: card }}>
            <MapPin size={14} style={{ color: primary }} /> {branding.location}
          </div>
        )}
      </header>

      <section className="relative w-full overflow-hidden flex items-center min-h-[80vh] md:min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          {hero.image_url && (
            <img src={hero.image_url} alt="Treino" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-widest rounded-full mb-6 transform -skew-x-12" style={{ backgroundColor: primary, color: "#000" }}>
              <Zap size={14} fill="#000" /> Consultoria Elite
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tighter leading-[0.9] text-white">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-xl font-medium leading-relaxed">
              {hero.subtitle}
            </p>
            {hero.cta_label && (
              <a href={hero.cta_href || "#contact"} className="inline-flex items-center justify-center px-10 py-5 text-lg font-black uppercase tracking-widest transform transition-transform hover:scale-105 hover:-skew-x-6" style={{ backgroundColor: primary, color: "#000" }}>
                {hero.cta_label}
              </a>
            )}
          </div>
        </div>
      </section>

      {services.items && services.items.length > 0 && (
        <section className="px-6 py-24 max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-center">
            {services.title || "Metodologia"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.items.map((srv: any, i: number) => (
              <div key={i} className="p-10 rounded-2xl transition-all hover:bg-zinc-800 group" style={{ backgroundColor: card }}>
                <div className="w-16 h-16 flex items-center justify-center mb-8 rounded-xl transform transition-transform group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: `${primary}20`, color: primary }}>
                  {renderIcon(srv.icon)}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{srv.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {(about.title || (about.paragraphs && about.paragraphs.length > 0)) && (
        <section className="px-6 py-24" id="about">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {about.image_url && (
              <div className="relative">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl" style={{ backgroundColor: primary }}></div>
                <img src={about.image_url} alt="Coach" className="relative w-full h-[600px] object-cover rounded-3xl grayscale contrast-125" />
              </div>
            )}
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">{about.title}</h2>
              <div className="flex flex-col gap-6 text-xl text-gray-300 font-medium leading-relaxed">
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
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-center">
            {testimonials.title || "Resultados"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.items.map((t: any, i: number) => (
              <div key={i} className="p-10 rounded-2xl relative overflow-hidden" style={{ backgroundColor: card }}>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 rounded-bl-full" style={{ backgroundColor: primary }}></div>
                <p className="text-xl md:text-2xl font-bold mb-8 relative z-10 leading-tight">"{t.text}"</p>
                <div className="font-black uppercase tracking-widest text-sm" style={{ color: primary }}>{t.name}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="w-full relative overflow-hidden mt-12" id="contact">
        <div className="absolute inset-0 opacity-20" style={{ backgroundColor: primary }}></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0%, #09090b 100%)' }}></div>
        
        <div className="relative z-10 px-6 py-32 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">{contact.title || "Bora Treinar?"}</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-medium">
            {contact.subtitle || "Dê o primeiro passo rumo à sua melhor versão. Me chame no WhatsApp e vamos montar seu plano."}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {contact.whatsapp && (
              <a 
                href={`https://wa.me/${String(contact.whatsapp).replace(/\D/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-6 text-xl font-black uppercase tracking-widest transform transition-transform hover:scale-105 hover:rotate-2 flex items-center justify-center gap-3"
                style={{ backgroundColor: primary, color: "#000" }}
              >
                Garantir Vaga <ArrowUpRight size={24} />
              </a>
            )}
            {contact.instagram && (
              <a 
                href={contact.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-6 text-xl font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-3 border-2 hover:bg-white/5"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <Instagram size={24} /> Instagram
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
