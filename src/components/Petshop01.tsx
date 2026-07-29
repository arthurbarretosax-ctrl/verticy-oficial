import React, { useEffect } from "react";
import { Activity, Scissors, Home, Heart, MapPin, Instagram, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export function Petshop01({ content, profile }: { content: any; profile: any }) {
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
  const primary = theme.primary || "#0ea5e9";
  const accent = theme.accent || "#fef08a";
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
      case "Activity": return <Activity size={32} strokeWidth={2} />;
      case "Scissors": return <Scissors size={32} strokeWidth={2} />;
      case "Home": return <Home size={32} strokeWidth={2} />;
      default: return <Heart size={32} strokeWidth={2} />;
    }
  };

  return (
    <div className="w-full min-h-screen relative font-sans selection:bg-sky-200 selection:text-sky-900" style={{ backgroundColor: bg, color: text }}>
      
      <header className="px-6 py-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 z-20 relative">
        <div className="flex items-center gap-4">
          {branding.logo_url ? (
            <img src={branding.logo_url} alt="Logo" className="h-14 w-14 object-cover rounded-2xl shadow-sm" />
          ) : (
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl shadow-sm font-bold text-2xl" style={{ backgroundColor: primary, color: "#fff" }}>
              P
            </div>
          )}
          <div className="flex flex-col text-center md:text-left">
            <span className="font-extrabold text-2xl tracking-tight text-slate-800">
              {branding.name || profile?.full_name}
            </span>
            {branding.location && (
              <span className="text-sm font-medium opacity-70 mt-0.5 flex items-center justify-center md:justify-start gap-1">
                <MapPin size={14} style={{ color: primary }} /> {branding.location}
              </span>
            )}
          </div>
        </div>
        
        {contact.whatsapp && (
          <a 
            href={`https://wa.me/${String(contact.whatsapp).replace(/\D/g, '')}`}
            target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-transform hover:scale-105 shadow-md"
            style={{ backgroundColor: accent, color: text }}
          >
            <Phone size={16} /> Falar com a Clínica
          </a>
        )}
      </header>

      <section className="px-6 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-slate-100 relative overflow-hidden" style={{ backgroundColor: card }}>
          {/* Fun bg elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-bl-[100px] -z-10 opacity-20" style={{ backgroundColor: primary }}></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-tr-[50px] -z-10 opacity-50" style={{ backgroundColor: accent }}></div>

          <div className="text-center lg:text-left order-2 lg:order-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm" style={{ backgroundColor: accent, color: text }}>
              <Heart size={16} fill={primary} style={{ color: primary }} /> Petshop & Veterinária
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-slate-800 tracking-tight">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl opacity-75 mb-10 leading-relaxed font-medium">
              {hero.subtitle}
            </p>
            {hero.cta_label && (
              <a href={hero.cta_href || "#contact"} className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/30" style={{ backgroundColor: primary }}>
                {hero.cta_label} <ArrowRight size={20} />
              </a>
            )}
          </div>
          <div className="order-1 lg:order-2 relative z-10">
            {hero.image_url && (
              <div className="relative">
                <div className="absolute inset-0 rounded-[3rem] rotate-3 opacity-50" style={{ backgroundColor: accent }}></div>
                <img src={hero.image_url} alt="Pet" className="relative w-full aspect-square object-cover rounded-[3rem] shadow-lg -rotate-3 transition-transform hover:rotate-0 duration-300" />
              </div>
            )}
          </div>
        </div>
      </section>

      {services.items && services.items.length > 0 && (
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">{services.title || "Nossos Serviços"}</h2>
            <p className="opacity-60 font-medium">Tudo o que seu pet precisa em um só lugar.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.items.map((srv: any, i: number) => (
              <div key={i} className="p-8 rounded-[2.5rem] shadow-sm transition-all hover:shadow-md border-2 hover:-translate-y-2 group bg-white" style={{ borderColor: 'transparent' }} onMouseOver={(e) => e.currentTarget.style.borderColor = primary} onMouseOut={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                <div className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-6 shadow-inner" style={{ backgroundColor: `${primary}15`, color: primary }}>
                  {renderIcon(srv.icon)}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{srv.title}</h3>
                <p className="opacity-70 leading-relaxed font-medium">{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {(about.title || (about.paragraphs && about.paragraphs.length > 0)) && (
        <section className="py-24 my-12 relative overflow-hidden" id="about">
          <div className="absolute inset-0 -z-10" style={{ backgroundColor: primary, opacity: 0.05 }}></div>
          
          <div className="px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {about.image_url && (
              <div className="relative order-2 lg:order-1">
                <img src={about.image_url} alt="Nossa Clínica" className="relative w-full aspect-[4/3] object-cover rounded-[3rem] shadow-xl" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full -z-10" style={{ backgroundColor: accent }}></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full -z-10" style={{ backgroundColor: primary }}></div>
              </div>
            )}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-8 leading-tight">{about.title}</h2>
              <div className="flex flex-col gap-6 text-lg opacity-80 leading-relaxed font-medium">
                {(about.paragraphs || []).map((p: string, i: number) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 size={24} className="shrink-0 mt-1" style={{ color: primary }} />
                    <p>{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {testimonials.items && testimonials.items.length > 0 && (
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-16 text-center">{testimonials.title || "Famílias Felizes"}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.items.map((t: any, i: number) => (
              <div key={i} className="relative p-10 rounded-[3rem] shadow-sm bg-white border border-slate-100">
                <div className="absolute top-8 right-8 text-6xl font-serif opacity-10" style={{ color: primary }}>"</div>
                <p className="text-lg md:text-xl font-medium mb-8 leading-relaxed relative z-10 text-slate-700">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: accent, color: text }}>
                    {t.name.charAt(0)}
                  </div>
                  <div className="font-bold text-slate-800">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="w-full relative px-6 py-24 md:py-32 overflow-hidden mt-12 text-center rounded-t-[4rem]" id="contact" style={{ backgroundColor: primary }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: '#ffffff' }}></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10 -translate-x-1/2 translate-y-1/4" style={{ backgroundColor: '#ffffff' }}></div>
        
        <div className="max-w-3xl mx-auto relative z-10 text-white">
          <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-[2rem] mb-8 shadow-lg" style={{ backgroundColor: '#ffffff', color: primary }}>
            <Heart size={40} fill={primary} />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">{contact.title || "Traga seu pet para nos conhecer"}</h2>
          <p className="text-xl opacity-90 mb-12 font-medium leading-relaxed max-w-xl mx-auto">
            {contact.subtitle || "Agende um horário pelo WhatsApp ou venha nos visitar. Estamos sempre de portas abertas!"}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {contact.whatsapp && (
              <a 
                href={`https://wa.me/${String(contact.whatsapp).replace(/\D/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 rounded-full font-bold text-slate-800 transition-transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-3 text-lg"
                style={{ backgroundColor: accent }}
              >
                <Phone size={22} fill="currentColor" /> Chamar no Zap
              </a>
            )}
            {contact.instagram && (
              <a 
                href={contact.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 rounded-full font-bold transition-colors border-2 flex items-center justify-center gap-3 text-lg hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                <Instagram size={22} /> @petloveclinica
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
