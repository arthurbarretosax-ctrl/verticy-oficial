import React, { useEffect } from "react";
import { Building2, PieChart, Calculator, TrendingUp, FileText, CheckCircle, MapPin, Instagram, Phone, ArrowRight, ShieldCheck, Star } from "lucide-react";

export function Contabilidade01({ content, profile }: { content: any; profile: any }) {
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
  const primary = theme.primary || "#1d4ed8";
  const accent = theme.accent || "#dbeafe";
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
      case "Building2": return <Building2 size={24} strokeWidth={2} />;
      case "PieChart": return <PieChart size={24} strokeWidth={2} />;
      case "Calculator": return <Calculator size={24} strokeWidth={2} />;
      case "TrendingUp": return <TrendingUp size={24} strokeWidth={2} />;
      case "FileText": return <FileText size={24} strokeWidth={2} />;
      case "CheckCircle": return <CheckCircle size={24} strokeWidth={2} />;
      default: return <ShieldCheck size={24} strokeWidth={2} />;
    }
  };

  return (
    <div className="w-full min-h-screen relative font-sans selection:bg-blue-200 selection:text-blue-900" style={{ backgroundColor: bg, color: text }}>
      
      <header className="px-6 py-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 z-20 relative bg-white border border-slate-200 shadow-sm rounded-b-2xl mt-0">
        <div className="flex items-center gap-4">
          {branding.logo_url ? (
            <img src={branding.logo_url} alt="Logo" className="h-12 object-contain" />
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg" style={{ backgroundColor: primary, color: "#fff" }}>
                <TrendingUp size={20} />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-800 uppercase">
                {branding.name || profile?.full_name}
              </span>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-6">
          {branding.location && (
            <span className="hidden lg:flex text-sm font-medium opacity-60 items-center gap-1.5">
              <MapPin size={16} style={{ color: primary }} /> {branding.location}
            </span>
          )}
          {contact.whatsapp && (
            <a 
              href={`https://wa.me/${String(contact.whatsapp).replace(/\D/g, '')}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5 shadow-md"
              style={{ backgroundColor: primary, color: "#fff" }}
            >
              Falar com Contador
            </a>
          )}
        </div>
      </header>

      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-bold mb-6" style={{ backgroundColor: accent, color: primary }}>
              <ShieldCheck size={16} /> Contabilidade Especializada
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-slate-800 tracking-tight">
              {hero.title}
            </h1>
            
            <p className="text-lg opacity-80 mb-10 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>
            
            {hero.cta_label && (
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href={hero.cta_href || "#contact"} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:shadow-xl hover:shadow-blue-500/20" style={{ backgroundColor: primary }}>
                  {hero.cta_label} <ArrowRight size={18} />
                </a>
              </div>
            )}
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 opacity-60">
              <div className="flex items-center gap-2 font-semibold text-sm"><CheckCircle size={16} style={{ color: primary }} /> Abertura Rápida</div>
              <div className="flex items-center gap-2 font-semibold text-sm"><CheckCircle size={16} style={{ color: primary }} /> 100% Digital</div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="absolute top-0 right-0 w-3/4 h-full rounded-[2rem] -translate-y-8 translate-x-8 -z-10" style={{ backgroundColor: accent }}></div>
            {hero.image_url && (
              <img src={hero.image_url} alt="Contabilidade" className="w-full aspect-[4/3] object-cover rounded-[2rem] shadow-2xl border-4 border-white" />
            )}
            
            {/* Trust badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: accent, color: primary }}>
                <TrendingUp size={24} />
              </div>
              <div>
                <div className="font-extrabold text-slate-800 text-xl">+100</div>
                <div className="text-xs font-semibold uppercase tracking-wider opacity-60">Empresas Atendidas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {services.items && services.items.length > 0 && (
        <section className="px-6 py-24 bg-white border-y border-slate-100" id="services">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">{services.title || "Nossas Soluções"}</h2>
              <p className="opacity-70 font-medium text-lg">Cuidamos da burocracia para que você possa focar no que realmente importa: seu negócio.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.items.map((srv: any, i: number) => (
                <div key={i} className="p-8 rounded-2xl border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl group bg-slate-50">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm transition-colors group-hover:text-white" style={{ backgroundColor: card, color: primary }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = primary; e.currentTarget.style.color = '#fff' }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = card; e.currentTarget.style.color = primary }}>
                    {renderIcon(srv.icon)}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800">{srv.title}</h3>
                  <p className="opacity-70 leading-relaxed font-medium">{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(about.title || (about.paragraphs && about.paragraphs.length > 0)) && (
        <section className="py-24 max-w-7xl mx-auto px-6" id="about">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            {about.image_url && (
              <div className="relative">
                <img src={about.image_url} alt="Equipe" className="relative w-full aspect-square object-cover rounded-3xl shadow-xl" />
                <div className="absolute inset-0 border-2 rounded-3xl -translate-x-4 -translate-y-4 -z-10" style={{ borderColor: primary }}></div>
              </div>
            )}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-8">{about.title}</h2>
              <div className="flex flex-col gap-6 text-lg opacity-80 font-medium leading-relaxed">
                {(about.paragraphs || []).map((p: string, i: number) => (
                  <p key={i} className="flex gap-4">
                    <span className="w-1.5 h-6 rounded-full mt-1 shrink-0" style={{ backgroundColor: primary }}></span>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {testimonials.items && testimonials.items.length > 0 && (
        <section className="px-6 py-24" style={{ backgroundColor: accent }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-16 text-center">{testimonials.title || "O que dizem sobre nós"}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.items.map((t: any, i: number) => (
                <div key={i} className="p-8 md:p-10 rounded-2xl shadow-sm bg-white">
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(n => <Star key={n} size={20} fill={primary} style={{ color: primary }} />)}
                  </div>
                  <p className="text-lg opacity-80 mb-8 font-medium leading-relaxed text-slate-700">
                    "{t.text}"
                  </p>
                  <div className="font-bold text-slate-900 border-t border-slate-100 pt-6">
                    {t.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="w-full relative px-6 py-24 bg-slate-900 text-white text-center" id="contact">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-8 shadow-lg" style={{ backgroundColor: primary }}>
            <Building2 size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">{contact.title || "Traga sua empresa para a Exata"}</h2>
          <p className="text-xl opacity-80 mb-12 font-medium leading-relaxed max-w-xl mx-auto">
            {contact.subtitle || "Solicite uma análise tributária gratuita e descubra como podemos otimizar seus resultados."}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {contact.whatsapp && (
              <a 
                href={`https://wa.me/${String(contact.whatsapp).replace(/\D/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 rounded-xl font-bold text-white transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
                style={{ backgroundColor: primary }}
              >
                <Phone size={20} fill="currentColor" /> Falar no WhatsApp
              </a>
            )}
            {contact.instagram && (
              <a 
                href={contact.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 rounded-xl font-bold transition-colors border-2 flex items-center justify-center gap-3 text-lg hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <Instagram size={20} /> Acompanhar Instagram
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
