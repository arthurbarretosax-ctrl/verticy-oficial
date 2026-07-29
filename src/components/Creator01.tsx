import React, { useEffect, useMemo } from "react";
function waLink(number?: string, msg?: string) {
  const n = (number || "").replace(/\D/g, "");
  if (!n) return "#";
  return `https://wa.me/${n}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
}

export function Creator01({ content, profile }: { content: any; profile?: any }) {
  const theme = content.theme?.colors || {};
  const hero = content.hero || {};
  const about = content.about || {};
  const stats = content.stats || {};
  const projects = content.projects || {};
  const measurements = content.measurements || {};
  const style = content.style || {};
  const contact = content.contact || {};

  const styleVars = useMemo(() => ({
    "--c02-bg": theme.bg || "#F6F5EC",
    "--c02-text": theme.text || "#1a1a1a",
    "--c02-brand": theme.brand || "#B29079",
    "--c02-border": theme.border || "#C1B6A4",
    "--c02-text-light": theme.text_light || "#ffffff",
  } as React.CSSProperties), [theme]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach((el) => {
      observer.observe(el);
    });

    const counterElements = document.querySelectorAll('.counter-num');
    const counterObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = +(entry.target.getAttribute('data-target') || 0);
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          
          const updateCounter = () => {
            current += step;
            if (current < target) {
              entry.target.innerHTML = Math.ceil(current).toLocaleString('pt-BR');
              requestAnimationFrame(updateCounter);
            } else {
              entry.target.innerHTML = target.toLocaleString('pt-BR');
            }
          };
          
          if (target > 0) updateCounter();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterElements.forEach(el => counterObserver.observe(el));
    
    return () => {
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  const handleWA = (service = "") => {
    let message = contact.wa_message || "Olá! Gostaria de conversar sobre uma parceria.";
    if(service) {
      message = `Olá! Acessei o seu portfólio e gostaria de solicitar um orçamento para ${service}.`;
    }
    if (contact.wa_number) {
      window.open(waLink(contact.wa_number, message), "_blank");
    }
  };

  const handleEmail = () => {
    if(contact.email) {
      const subject = "Pedido de Orçamento / Parceria";
      const body = "Olá,\n\nGostaria de obter mais informações sobre os seus serviços.";
      window.open(`mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
    }
  };

  return (
    <div className="creator01 c02 text-[var(--c02-brand)] font-sans selection:bg-[var(--c02-brand)] selection:text-[var(--c02-bg)]" style={styleVars}>
      <main className="max-w-md mx-auto relative overflow-hidden min-h-screen border-x border-[var(--c02-border)]/30 bg-[var(--c02-bg)]"> 
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-[var(--c02-brand)] blur-[120px] opacity-5 rounded-full pointer-events-none bg-breath z-0"></div>

        <section className="relative min-h-screen flex flex-col justify-between px-6 pt-6 pb-10 overflow-hidden z-10">
          {hero.badge && (
            <div className="absolute top-5 left-5 border border-[var(--c02-border)]/50 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] text-[var(--c02-brand)] glass z-20 animate-hero-text" style={{animationDelay: '0.2s'}}>
              {hero.badge}
            </div>
          )}

          <div className="absolute top-24 right-[-3rem] w-32 h-32 rounded-full border border-[var(--c02-border)] floating pointer-events-none opacity-50"></div>

          {hero.image_url && (
            <div className="relative mt-16 z-10 animate-hero-img">
              <div className="rounded-[2.5rem] hero-shadow border border-[color-mix(in srgb, var(--c02-brand) 20%, var(--c02-bg))]">
                <div className="rounded-[2.5rem] overflow-hidden bg-gray-100">
                  <img
                    src={hero.image_url}
                    alt={hero.title_pre}
                    className="w-full h-[35rem] object-cover object-top hover:scale-105 transition-transform duration-[2s] ease-out"
                    style={{filter: 'none', mixBlendMode: 'normal', display: 'block'}}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="relative z-10 text-center mt-8">
            <p className="uppercase tracking-[0.4em] text-[10px] text-[var(--c02-brand)] mb-4 animate-hero-text" style={{animationDelay: '0.6s'}}>
              {hero.subtitle}
            </p>

            <h1 className="text-5xl font-black leading-none tracking-tight animate-hero-text" style={{animationDelay: '0.8s'}}>
              {hero.title_pre}
            </h1>

            <h1 className="text-5xl font-black leading-none tracking-tight gradient-text animate-hero-text" style={{animationDelay: '1s'}}>
              {hero.title_highlight}
            </h1>

            <p className="text-[var(--c02-brand)]/80 text-[13px] leading-relaxed mt-6 max-w-xs mx-auto animate-hero-text" style={{animationDelay: '1.2s'}}>
              {hero.description}
            </p>

            <div className="animate-hero-text" style={{animationDelay: '1.4s'}}>
              <button
                onClick={() => handleWA()}
                className="mt-8 bg-[var(--c02-brand)] text-[var(--c02-bg)] px-8 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-[var(--c02-brand)]/20 hover:scale-105 hover:shadow-[var(--c02-brand)]/40 active:scale-95 transition-all duration-300"
              >
                {hero.cta_label || "Trabalhar comigo"}
              </button>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 fade-up">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="uppercase tracking-[0.3em] text-[10px] text-[var(--c02-border)] mb-3">
                {about.eyebrow}
              </p>
              <h2 className="text-4xl font-black leading-none text-[var(--c02-brand)]">
                {about.title_pre}<br /> {about.title_highlight}
              </h2>
            </div>
            <i className="ph-fill ph-sparkle w-7 h-7 text-[var(--c02-brand)] floating" style={{animationDuration: '4s'}}></i>
          </div>

          <div className="relative h-[24rem] w-full mb-12 mt-4 group">
            {about.images?.[0] && (
              <div className="absolute top-0 left-0 w-40 transform -rotate-6 z-10 shadow-xl bg-[var(--c02-bg)] p-2 pb-8 group-hover:rotate-[-2deg] group-hover:-translate-x-2 transition-all duration-500 border border-[color-mix(in srgb, var(--c02-brand) 20%, var(--c02-bg))]">
                <img src={about.images[0]} className="w-full h-40 object-cover opacity-90 transition-opacity bg-gray-100" />
              </div>
            )}
            
            {about.images?.[1] && (
              <div className="absolute top-6 right-0 w-44 transform rotate-6 z-20 shadow-xl bg-[var(--c02-bg)] p-2 pb-8 group-hover:rotate-[2deg] group-hover:translate-x-2 transition-all duration-500 border border-[color-mix(in srgb, var(--c02-brand) 20%, var(--c02-bg))]">
                <img src={about.images[1]} className="w-full h-48 object-cover opacity-90 transition-opacity bg-gray-100" />
              </div>
            )}
            
            {about.images?.[2] && (
              <div className="absolute top-36 left-10 w-52 transform -rotate-2 z-30 shadow-2xl bg-[var(--c02-bg)] p-2 pb-10 group-hover:scale-105 group-hover:rotate-0 transition-all duration-500 border border-[var(--c02-brand)]/30">
                <img src={about.images[2]} className="w-full h-56 object-cover bg-gray-100" />
                <div className="absolute -bottom-4 right-4 bg-[var(--c02-brand)] text-[var(--c02-bg)] border border-[var(--c02-bg)] px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 floating" style={{animationDuration: '3s'}}>
                  <i className="ph-fill ph-star w-3 h-3 text-[var(--c02-bg)]"></i>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em]">Autenticidade</span>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-5 text-[14px] leading-relaxed text-[var(--c02-brand)]/90 mt-16 bg-[color-mix(in srgb, var(--c02-brand) 20%, var(--c02-bg))]/30 p-6 rounded-3xl border border-[color-mix(in srgb, var(--c02-brand) 20%, var(--c02-bg))] fade-up" style={{'--delay': 1} as any}>
            {(about.paragraphs || []).map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 bg-[color-mix(in srgb, var(--c02-brand) 10%, var(--c02-bg))] rounded-t-[3rem] fade-up relative z-20"> 
          <div className="text-center mb-12 fade-up" style={{'--delay': 0} as any}>
            <p className="uppercase tracking-[0.3em] text-[10px] text-[var(--c02-border)] mb-4">
              {stats.eyebrow}
            </p>
            <h2 className="text-4xl font-black leading-none text-[var(--c02-brand)]">
              {stats.title_pre}<br /> {stats.title_highlight}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="glass border border-[var(--c02-border)]/30 rounded-[2rem] p-6 h-full fade-up hover:bg-[color-mix(in srgb, var(--c02-brand) 20%, var(--c02-bg))]/50 transition-colors duration-300" style={{'--delay': 1} as any}>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--c02-brand)]/60 mb-2">
                seguidores
              </p>
              <h3 className="text-3xl font-black text-[var(--c02-brand)] counter-num" data-target={stats.followers}>
                0
              </h3>
            </div>

            <div className="bg-[var(--c02-brand)] rounded-[2rem] p-7 text-[var(--c02-bg)] shadow-xl shadow-[var(--c02-brand)]/30 transform scale-105 z-10 border border-[var(--c02-brand)] fade-up hover:scale-110 transition-transform duration-300" style={{'--delay': 2} as any}>
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-80 mb-2">
                alcance
              </p>
              <h3 className="text-4xl font-black">
                <span className="counter-num" data-target={stats.reach}>0</span>k
              </h3>
              <p className="text-[10px] mt-2 opacity-70">contas mensais</p>
            </div>

            <div className="glass border border-[var(--c02-border)]/30 rounded-[2rem] p-6 h-full fade-up hover:bg-[color-mix(in srgb, var(--c02-brand) 20%, var(--c02-bg))]/50 transition-colors duration-300" style={{'--delay': 3} as any}>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--c02-brand)]/60 mb-2">
                formato
              </p>
              <h3 className="text-3xl font-black text-[var(--c02-brand)]">
                {stats.format}
              </h3>
            </div>

            <div className="glass border border-[var(--c02-border)]/30 rounded-[2rem] p-6 h-full fade-up hover:bg-[color-mix(in srgb, var(--c02-brand) 20%, var(--c02-bg))]/50 transition-colors duration-300" style={{'--delay': 4} as any}>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--c02-brand)]/60 mb-2">
                público
              </p>
              <h3 className="text-3xl font-black text-[var(--c02-brand)]">
                {stats.audience}
              </h3>
            </div>
          </div>
        </section>

        <section className="py-24 fade-up">
          <div className="px-6 mb-10 text-center">
            {projects.badge && (
              <span className="bg-[color-mix(in srgb, var(--c02-brand) 20%, var(--c02-bg))] text-[var(--c02-brand)] text-[9px] font-black px-4 py-1.5 uppercase tracking-[0.3em] rounded-full mb-4 inline-block shadow-sm">{projects.badge}</span>
            )}
            <h2 className="text-4xl font-black leading-none text-[var(--c02-brand)]">
              {projects.title_pre}<br /> {projects.title_highlight}
            </h2>
          </div>

          <div className="overflow-x-auto flex gap-5 px-6 pb-6 hide-scrollbar snap-x snap-mandatory">
            {(projects.items || []).map((it: any, i: number) => (
              <div key={i} className="snap-center shrink-0 w-[17rem] bg-[color-mix(in srgb, var(--c02-brand) 20%, var(--c02-bg))] rounded-[2rem] overflow-hidden transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[var(--c02-brand)]/20 border border-[color-mix(in srgb, var(--c02-brand) 20%, var(--c02-bg))] fade-up" style={{'--delay': (i+1)} as any}>
                <div className="overflow-hidden bg-gray-100">
                  <img src={it.image_url} className="w-full h-72 object-cover object-top opacity-90 hover:opacity-100 transition-all duration-700 hover:scale-110" />
                </div>
                <div className="p-6 relative -mt-4 bg-gradient-to-t from-[color-mix(in srgb, var(--c02-brand) 20%, var(--c02-bg))] via-[color-mix(in srgb, var(--c02-brand) 20%, var(--c02-bg))] to-transparent">
                  <h3 className="text-xl font-black mb-3 text-[var(--c02-brand)]">
                    {it.title}
                  </h3>
                  <p className="text-[12px] text-[var(--c02-brand)]/80 leading-relaxed mb-5 min-h-[40px]">
                    {it.description}
                  </p>
                  <button
                    onClick={() => handleWA(it.title)}
                    className="w-full bg-[var(--c02-brand)] text-[var(--c02-bg)] py-4 rounded-xl uppercase text-[10px] tracking-[0.2em] font-bold shadow-md hover:bg-[color-mix(in srgb, var(--c02-brand) 85%, #000)] transition-colors"
                  >
                    Solicitar valor
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 bg-[color-mix(in srgb, var(--c02-brand) 20%, var(--c02-bg))] rounded-[3rem] mx-2 shadow-sm border border-[var(--c02-border)]/30 fade-up relative z-20">
          <div className="flex justify-between items-center mb-10">
            <div>
              <p className="uppercase tracking-[0.3em] text-[10px] text-[var(--c02-brand)] mb-2">
                {measurements.eyebrow}
              </p>
              <h2 className="text-4xl font-black leading-none text-[var(--c02-brand)]">
                {measurements.title}
              </h2>
            </div>
            <i className="ph-fill ph-ruler w-8 h-8 text-[var(--c02-brand)]"></i>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2 space-y-4 text-[12px] pt-4">
              {(measurements.items || []).map((m: any, i: number) => (
                <div key={i} className="flex justify-between border-b border-[var(--c02-border)]/40 pb-2 fade-up" style={{'--delay': (i+1)} as any}>
                  <span className="text-[var(--c02-brand)]/70 uppercase tracking-widest">{m.label}</span>
                  <span className="font-bold">{m.value}</span>
                </div>
              ))}
            </div>
            <div className="w-1/2 relative fade-up" style={{'--delay': 3} as any}>
              <div className="overflow-hidden rounded-2xl border border-[var(--c02-border)]/40 shadow-lg group bg-gray-100">
                <img src={measurements.image_url} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              </div>
              {measurements.mannequin && (
                <div className="absolute -top-3 -right-2 bg-[var(--c02-bg)] text-[var(--c02-brand)] border border-[var(--c02-brand)]/20 px-3 py-1 rounded-full text-[8px] uppercase tracking-widest shadow-md floating" style={{animationDuration: '3s'}}>
                  {measurements.mannequin}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="text-center mb-10 fade-up">
             <h2 className="text-2xl font-black text-[var(--c02-brand)] tracking-widest mb-2 uppercase">{style.title}</h2>
             <p className="text-[10px] font-bold text-[var(--c02-border)] tracking-[0.2em] uppercase">{style.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 px-2 pb-6">
            {(style.images || []).map((src: string, i: number) => (
              <div key={i} className={`overflow-hidden rounded-2xl fade-up border border-[color-mix(in srgb, var(--c02-brand) 20%, var(--c02-bg))] shadow-sm group ${i % 2 !== 0 ? 'transform translate-y-6' : ''} ${i >= 2 ? 'mt-2' : ''}`} style={{'--delay': (i+1)} as any}>
                <img src={src} className="w-full aspect-[4/5] object-cover opacity-90 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100 bg-gray-100" />
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pt-20 pb-24 relative fade-up bg-[color-mix(in srgb, var(--c02-brand) 10%, var(--c02-bg))] rounded-t-[3rem] border-t border-[color-mix(in srgb, var(--c02-brand) 20%, var(--c02-bg))] mt-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--c02-brand)]/5 to-transparent rounded-t-[3rem] pointer-events-none"></div>

          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--c02-brand)] w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-[color-mix(in srgb, var(--c02-brand) 10%, var(--c02-bg))] z-20 floating-icon">
            <i className="ph-fill ph-chat-circle w-7 h-7 text-[var(--c02-bg)]"></i>
          </div>

          <div className="relative z-10 text-center mt-6">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--c02-border)] mb-3 fade-up" style={{'--delay': 1} as any}>{contact.eyebrow}</h2>
            <h2 className="text-4xl font-black leading-none mb-8 text-[var(--c02-brand)] fade-up" style={{'--delay': 2} as any}>
              {contact.title_pre}<br /> {contact.title_highlight}
            </h2>

            <div className="space-y-4 fade-up" style={{'--delay': 3} as any}>
              <button
                onClick={() => handleWA()}
                className="w-full bg-[var(--c02-brand)] text-[var(--c02-bg)] py-5 rounded-2xl uppercase tracking-[0.2em] text-[11px] font-black shadow-lg shadow-[var(--c02-brand)]/20 flex justify-center items-center gap-2 hover:scale-105 hover:shadow-[var(--c02-brand)]/40 hover:bg-[color-mix(in srgb, var(--c02-brand) 85%, #000)] active:scale-95 transition-all duration-300"
              >
                <i className="ph-fill ph-whatsapp-logo w-4 h-4"></i> WhatsApp
              </button>

              <button
                onClick={handleEmail}
                className="w-full bg-[color-mix(in srgb, var(--c02-brand) 20%, var(--c02-bg))] text-[var(--c02-brand)] border border-[var(--c02-border)]/50 py-5 rounded-2xl uppercase tracking-[0.2em] text-[11px] font-black hover:bg-[color-mix(in srgb, var(--c02-brand) 25%, var(--c02-bg))] flex justify-center items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <i className="ph-fill ph-envelope w-4 h-4 text-[var(--c02-brand)]"></i> Enviar E-mail
              </button>

              {contact.instagram && (
                <button
                  onClick={() => window.open(`https://www.instagram.com/${contact.instagram}`, '_blank')}
                  className="w-full border border-[var(--c02-brand)]/50 text-[var(--c02-brand)] py-5 rounded-2xl uppercase tracking-[0.2em] text-[11px] font-black hover:bg-[var(--c02-brand)] hover:text-[var(--c02-bg)] flex justify-center items-center gap-2 transition-all duration-300 hover:scale-105 mt-2"
                >
                  <i className="ph-fill ph-instagram-logo w-4 h-4"></i> @{contact.instagram}
                </button>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
