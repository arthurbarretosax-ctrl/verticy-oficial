import React, { useEffect, useMemo } from "react";

function waLink(number?: string, msg?: string) {
  const n = (number || "").replace(/\D/g, "");
  if (!n) return "#";
  return `https://wa.me/${n}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
}

export function Confeitaria01({ content, profile }: { content: any; profile?: any }) {
  const theme = content.theme?.colors || {};
  const branding = content.branding || {};
  const catalog = content.catalog || {};
  const gallery = content.gallery || {};
  const contact = content.contact || {};
  const marquee = content.marquee?.words || [];
  const hero = content.hero || {};

  // Setup dynamic CSS variables based on theme
  const styleVars = useMemo(() => ({
    "--c01-bg": theme.bg || "#FDFBF7",
    "--c01-card": theme.card || "#FFFFFF",
    "--c01-rose": theme.rose || "#E8B4B8",
    "--c01-roseDark": theme.roseDark || "#D49A9E",
    "--c01-gold": theme.gold || "#D4AF37",
    "--c01-text": theme.text || "#4A3737",
  } as React.CSSProperties), [theme]);

  const handleWA = (e: React.MouseEvent<HTMLButtonElement>, productName?: string) => {
    e.preventDefault();
    if (contact.whatsapp_number) {
      let text = "Olá! Acessei seu catálogo online e gostaria de fazer uma encomenda.";
      if (productName) {
        text = `Olá! Acessei seu catálogo online e gostaria de encomendar a opção de *${productName}*. Como funciona?`;
      }
      window.open(waLink(contact.whatsapp_number, text), "_blank");
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.c01 .reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="c01 font-sans relative min-h-screen" style={styleVars}>
      {/* Fixed background effects */}
      <div className="bg-noise"></div>
      <div className="glow-orb-1"></div>
      <div className="glow-orb-2"></div>
      
      {/* Main Container */}
      <div className="max-w-md mx-auto min-h-screen relative z-10 flex flex-col sm:border-x border-[var(--c01-rose)] border-opacity-20 bg-[var(--c01-bg)] overflow-hidden">
        
        {/* Header / Hero */}
        <header className="relative w-full h-[70vh] overflow-hidden rounded-b-[3rem] shadow-md reveal active border-b border-[var(--c01-rose)] border-opacity-40">
          <div className="absolute inset-0 hero-bg" style={{ backgroundImage: `url('${hero.image_url || branding.logo_url}')` }}></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t" style={{ backgroundImage: `linear-gradient(to top, var(--c01-bg) 0%, color-mix(in srgb, var(--c01-bg) 80%, transparent) 50%, color-mix(in srgb, var(--c01-bg) 20%, transparent) 100%)` }}></div>
          
          <div className="absolute inset-0 flex flex-col justify-end p-6 pb-6 text-center">
            
            {branding.logo_url && (
              <div className="w-32 h-32 mx-auto rounded-full bg-white border-2 border-[var(--c01-rose)] p-1 shadow-[0_0_30px_rgba(232,180,184,0.4)] mb-3 overflow-hidden flex items-center justify-center">
                <img src={branding.logo_url} alt={branding.name} className="w-full h-full object-cover rounded-full bg-white" />
              </div>
            )}
            
            {branding.location && (
              <div className="inline-flex items-center justify-center gap-1.5 bg-white/60 backdrop-blur-md border border-[var(--c01-rose)] px-4 py-1.5 rounded-full mx-auto mb-4 shadow-sm" style={{ borderColor: 'color-mix(in srgb, var(--c01-rose) 50%, transparent)' }}>
                <i className="ph-fill ph-map-pin w-3 h-3 text-[var(--c01-rose)]"></i>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--c01-text)]">{branding.location}</span>
              </div>
            )}
            
            <h1 className="font-['Playfair_Display'] font-bold text-4xl leading-tight mb-2 text-[var(--c01-text)]">{branding.name}</h1>
            
            {branding.slogan && (
              <p className="text-[11px] text-[var(--c01-text)] font-medium mb-5 max-w-[280px] mx-auto leading-relaxed uppercase tracking-widest italic opacity-70">{branding.slogan}</p>
            )}
            
            <button onClick={() => document.getElementById('catalogo')?.scrollIntoView({behavior:'smooth'})} className="btn-rose py-4 px-8 rounded-2xl font-black text-[11px] uppercase tracking-widest w-full max-w-[320px] mx-auto flex items-center justify-center gap-2">
              <i className="ph-fill ph-book-open w-4 h-4"></i> {hero.cta_label || 'Ver Catálogo'}
            </button>
          </div>
        </header>

        {/* Marquee */}
        {marquee.length > 0 && (
          <div className="w-full overflow-hidden border-b py-3 relative z-20 bg-white/80 backdrop-blur-md mt-4 shadow-sm" style={{ borderColor: 'color-mix(in srgb, var(--c01-rose) 30%, transparent)' }}>
            <div className="animate-marquee flex gap-8 items-center text-[var(--c01-text)]">
              {[...marquee, ...marquee, ...marquee, ...marquee, ...marquee].map((item: any, i: number) => (
                <React.Fragment key={i}>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${item.italic ? 'italic text-[var(--c01-text)]' : 'text-[var(--c01-roseDark)]'}`}>
                    {item.text}
                  </span>
                  <span className="text-[10px] text-[var(--c01-text)] opacity-30">✦</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Catálogo */}
        <section id="catalogo" className="px-5 py-12 space-y-6 relative z-20 reveal">
          <div className="text-center mb-8">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[var(--c01-text)] mb-2">{catalog.title}</h2>
            <p className="text-[10px] uppercase tracking-widest text-[var(--c01-roseDark)] font-bold">{catalog.subtitle}</p>
          </div>
          
          {catalog.items && catalog.items.map((item: any, i: number) => (
            <div key={item.id || i} className={`glass-card rounded-[2rem] overflow-hidden flex flex-col relative reveal group ${i % 2 === 1 ? 'delay-100' : ''}`}>
              <div className="h-48 w-full relative overflow-hidden bg-gray-100">
                <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent"></div>
                <div className="absolute top-4 left-4 bg-[var(--c01-rose)] text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-md z-10">{item.category}</div>
              </div>
              <div className="p-5 pt-2 bg-[var(--c01-card)] flex flex-col gap-4 relative z-10">
                <div>
                  <h3 className="font-['Playfair_Display'] text-2xl text-[var(--c01-text)] leading-tight mb-2">{item.title}</h3>
                  <p className="text-xs text-[var(--c01-text)] opacity-70 font-medium leading-relaxed">{item.description}</p>
                </div>
                <button onClick={(e) => handleWA(e, item.title)} className="w-full border py-3.5 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm text-[var(--c01-text)]" style={{ backgroundColor: 'color-mix(in srgb, var(--c01-rose) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--c01-rose) 30%, transparent)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--c01-rose)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--c01-rose) 10%, transparent)'; e.currentTarget.style.color = 'var(--c01-text)'; }}>
                  <i className="ph-fill ph-whatsapp-logo w-4 h-4"></i> Encomendar
                </button>
              </div>
            </div>
          ))}
        </section>
        
        {/* Galeria */}
        {gallery.images && gallery.images.length > 0 && (
          <section className="py-12 relative z-20 reveal border-t mt-4 bg-[var(--c01-card)] bg-opacity-30" style={{ borderColor: 'color-mix(in srgb, var(--c01-rose) 20%, transparent)' }}>
            <div className="px-6 mb-8 flex justify-between items-end">
              <div>
                <h2 className="font-['Playfair_Display'] text-3xl italic tracking-tight text-[var(--c01-text)] mb-1">{gallery.title}</h2>
              </div>
              <p className="text-[9px] text-[var(--c01-roseDark)] uppercase tracking-widest font-bold mb-1">{gallery.subtitle}</p>
            </div>
            <div className="flex overflow-x-auto gap-4 px-6 hide-scrollbar snap-x pb-8">
              {gallery.images.map((src: string, i: number) => (
                <div key={i} className="snap-center shrink-0 w-56 h-72 rounded-[2rem] overflow-hidden relative shadow-lg border border-[var(--c01-rose)] border-opacity-20 group">
                  <img src={src} alt={`Galeria ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-auto px-6 pt-16 pb-24 text-center border-t relative z-10 bg-[var(--c01-card)] rounded-t-[4rem] shadow-[0_-20px_50px_rgba(74,55,55,0.05)]" style={{ borderColor: 'color-mix(in srgb, var(--c01-rose) 20%, transparent)' }}>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[var(--c01-rose)] rounded-full blur-[40px] opacity-30"></div>
          
          <div className="mb-10">
            <h2 className="font-['Playfair_Display'] text-3xl italic text-[var(--c01-text)] mb-2 tracking-wide">{contact.title_pre}<br/><span className="text-[var(--c01-roseDark)] not-italic font-bold">{contact.title_highlight}</span></h2>
            <p className="text-[10px] text-[var(--c01-text)] opacity-50 uppercase tracking-[0.2em] font-bold mt-4">{contact.subtitle}</p>
          </div>
          
          <div className="space-y-4 mb-12">
            <button onClick={(e) => handleWA(e)} className="w-full btn-rose font-black py-5 rounded-2xl text-[11px] uppercase tracking-widest active:scale-95 transition-all flex items-center justify-center gap-3">
              <i className="ph-fill ph-whatsapp-logo w-5 h-5"></i> {contact.cta_label}
            </button>
            
            {contact.instagram_url && (
              <button onClick={() => window.open(contact.instagram_url, '_blank')} className="w-full bg-[var(--c01-bg)] border text-[var(--c01-text)] py-4 rounded-2xl font-bold text-[11px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 mt-4 active:scale-95 shadow-sm" style={{ borderColor: 'color-mix(in srgb, var(--c01-rose) 20%, transparent)' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                <i className="ph-fill ph-instagram-logo w-4 h-4" style={{ color: 'var(--c01-roseDark)' }}></i>
                {contact.instagram_handle}
              </button>
            )}
          </div>

          <div className="pt-8 border-t" style={{ borderColor: 'color-mix(in srgb, var(--c01-rose) 20%, transparent)' }}>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--c01-text)] opacity-40 mb-2">© {contact.footer_year} {contact.footer_name}</p>
            <p className="text-[8px] uppercase tracking-[0.3em] text-[var(--c01-text)] opacity-30 flex items-center justify-center gap-1 font-semibold">
              CRIADO POR <a href="https://instagram.com/verticy.web" target="_blank" className="text-[var(--c01-roseDark)] tracking-[0.2em] font-black uppercase hover:text-[var(--c01-text)] transition-colors relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-px after:bg-[var(--c01-roseDark)] hover:after:bg-[var(--c01-text)]">VERTICY.</a> PREMIUM BIO
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
