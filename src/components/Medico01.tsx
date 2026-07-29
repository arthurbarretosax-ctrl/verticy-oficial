import React, { useEffect } from "react";
import { Stethoscope, Activity, ClipboardList, MapPin, Instagram } from "lucide-react";

export function Medico01({ content, profile }: { content: any; profile: any }) {
  const c = content || {};
  const theme = c.theme?.colors || {};
  const branding = c.branding || {};
  const hero = c.hero || {};
  const about = c.about || {};
  const services = c.services || {};
  const testimonials = c.testimonials || {};
  const contact = c.contact || {};

  const bg = theme.bg || "#f8fafc";
  const text = theme.text || "#0f172a";
  const primary = theme.primary || "#0284c7";
  const card = theme.card || "#ffffff";

  // Enforce background color to prevent glitches
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
      case "Stethoscope": return <Stethoscope size={28} />;
      case "Activity": return <Activity size={28} />;
      case "ClipboardList": return <ClipboardList size={28} />;
      default: return <Stethoscope size={28} />;
    }
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden" style={{ backgroundColor: bg, color: text, fontFamily: "'Inter', sans-serif" }}>
      {/* Decorative top shape */}
      <div className="absolute top-0 left-0 right-0 h-64 opacity-10" style={{ backgroundColor: primary, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 50%)' }}></div>

      <header className="relative px-6 py-5 flex items-center justify-between max-w-5xl mx-auto z-10">
        <div className="flex items-center gap-3">
          {branding.logo_url && (
            <img src={branding.logo_url} alt="Logo" className="w-12 h-12 rounded-full object-cover shadow-sm border-2" style={{ borderColor: primary }} />
          )}
          <span className="font-semibold text-xl tracking-tight">{branding.name || profile?.full_name}</span>
        </div>
        {branding.location && (
          <div className="flex items-center gap-1.5 text-sm font-medium opacity-80 bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <MapPin size={16} style={{ color: primary }} />
            {branding.location}
          </div>
        )}
      </header>

      <section className="relative px-6 py-12 md:py-20 max-w-5xl mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight" style={{ color: text }}>
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-8 max-w-xl leading-relaxed">
              {hero.subtitle}
            </p>
            {hero.cta_label && (
              <a href={hero.cta_href || "#contact"} className="inline-block px-8 py-4 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-1" style={{ backgroundColor: primary }}>
                {hero.cta_label}
              </a>
            )}
          </div>
          {hero.image_url && (
            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl opacity-20" style={{ backgroundColor: primary }}></div>
              <img src={hero.image_url} alt="Médico" className="relative w-full h-[500px] object-cover rounded-3xl shadow-xl" />
            </div>
          )}
        </div>
      </section>

      {(about.title || (about.paragraphs && about.paragraphs.length > 0)) && (
        <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto" id="about">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {about.image_url && (
              <div className="order-2 md:order-1 rounded-3xl overflow-hidden shadow-lg border-4" style={{ borderColor: card }}>
                <img src={about.image_url} alt="Sobre" className="w-full h-[400px] object-cover" />
              </div>
            )}
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: `${primary}15`, color: primary }}>
                <Activity size={16} /> Especialista
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{about.title}</h2>
              <div className="flex flex-col gap-4 text-lg opacity-80 leading-relaxed">
                {(about.paragraphs || []).map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {services.items && services.items.length > 0 && (
        <section className="px-6 py-20 md:py-32 relative" id="services">
          <div className="absolute inset-0 opacity-5" style={{ backgroundColor: primary }}></div>
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{services.title || "Áreas de Atuação"}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.items.map((srv: any, i: number) => (
                <div key={i} className="p-8 rounded-2xl shadow-sm transition-shadow hover:shadow-md border" style={{ backgroundColor: card, borderColor: `${primary}20` }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${primary}15`, color: primary }}>
                    {renderIcon(srv.icon)}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{srv.title}</h3>
                  <p className="opacity-75 leading-relaxed">{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {testimonials.items && testimonials.items.length > 0 && (
        <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto" id="testimonials">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{testimonials.title || "Depoimentos"}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.items.map((t: any, i: number) => (
              <div key={i} className="p-8 rounded-2xl border relative overflow-hidden" style={{ backgroundColor: card, borderColor: `${primary}15` }}>
                <div className="absolute -top-4 -right-4 text-8xl opacity-5" style={{ color: primary }}>"</div>
                <p className="text-lg italic mb-6 opacity-80 relative z-10">{t.text}</p>
                <div className="font-semibold text-lg">{t.name}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="px-6 py-20 text-center" style={{ backgroundColor: text, color: card }} id="contact">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{contact.title || "Agende uma Avaliação"}</h2>
          <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto">
            {contact.subtitle || "Priorize a sua saúde. Entre em contato para marcar sua consulta e dar o primeiro passo."}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {contact.whatsapp && (
              <a 
                href={`https://wa.me/${String(contact.whatsapp).replace(/\D/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold transition-transform hover:-translate-y-1"
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
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold transition-transform hover:-translate-y-1 flex items-center justify-center gap-2"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", color: card }}
              >
                <Instagram size={20} /> Seguir Instagram
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
