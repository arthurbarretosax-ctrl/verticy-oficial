import React, { useEffect } from "react";
import * as Lucide from "lucide-react";
import { Advogado01Content } from "../lib/advogado01-defaults";

// Map Lucide icon string to Component
const Icon = ({ name, ...props }: { name: string; [key: string]: any }) => {
  const cleanName = name.replace("lucide-", "");
  // Convert kebab-case to PascalCase
  const pascalName = cleanName.split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join("");
  const Comp = (Lucide as any)[pascalName];
  if (!Comp) return null;
  return <Comp {...props} />;
};

export default function Advogado01({ content, profile }: { content: Advogado01Content; profile?: any }) {
  const [isBookingOpen, setBookingOpen] = React.useState(false);
  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setBookingOpen(true);
  };

  const { theme, branding, hero, action, areas, marquee, about, articles, lifestyle, contact } = content;
  
  // Inject custom CSS variables and custom styles
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      :root {
        --ciro-bg: ${theme?.colors?.bg || '#FDFBF7'};
        --ciro-dark: ${theme?.colors?.dark || '#1F3A2E'};
        --ciro-greenLight: ${theme?.colors?.greenLight || '#345945'};
        --ciro-sand: ${theme?.colors?.sand || '#E6DFD3'};
        --ciro-gold: ${theme?.colors?.gold || '#C5A880'};
        --ciro-text: ${theme?.colors?.text || '#2C2A29'};
      }

      .a01-body { 
        background-color: var(--ciro-bg); 
        color: var(--ciro-text); 
        -webkit-font-smoothing: antialiased; 
        scroll-behavior: smooth;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      .a01-serif { font-family: 'Playfair Display', serif; }
      .a01-hide-scrollbar::-webkit-scrollbar { display: none; }
      .a01-hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

      .a01-glass-card {
        background: rgba(253, 251, 247, 0.85);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.9);
        box-shadow: 0 10px 40px rgba(31, 58, 46, 0.05);
      }
      
      .a01-glass-dark {
        background: rgba(31, 58, 46, 0.6);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .a01-reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .a01-reveal.active {
        opacity: 1;
        transform: translateY(0);
      }

      @keyframes slowZoom {
        0% { transform: scale(1); }
        100% { transform: scale(1.08); }
      }
      .a01-animate-zoom { animation: slowZoom 20s ease-in-out infinite alternate; }

      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .a01-animate-marquee { animation: marquee 25s linear infinite; width: max-content; }

      .a01-bg-noise {
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
        pointer-events: none;
        z-index: 50;
      }
      
      /* Tailwind mapping utility classes for variables */
      .bg-ciro-bg { background-color: var(--ciro-bg); }
      .bg-ciro-dark { background-color: var(--ciro-dark); }
      .bg-ciro-sand { background-color: var(--ciro-sand); }
      .bg-ciro-gold { background-color: var(--ciro-gold); }
      
      .text-ciro-dark { color: var(--ciro-dark); }
      .text-ciro-gold { color: var(--ciro-gold); }
      .text-ciro-text { color: var(--ciro-text); }
      .text-ciro-greenLight { color: var(--ciro-greenLight); }
      
      .border-ciro-dark { border-color: var(--ciro-dark); }
      
      .hover\\:bg-ciro-sand\\/60:hover { background-color: color-mix(in srgb, var(--ciro-sand) 60%, transparent); }
    `;
    document.head.appendChild(styleEl);

    // Font injection
    const fontEl = document.createElement('link');
    fontEl.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap";
    fontEl.rel = "stylesheet";
    document.head.appendChild(fontEl);

    // Intersection Observer for .a01-reveal
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px', threshold: 0.15 });

    setTimeout(() => {
      document.querySelectorAll('.a01-reveal').forEach(el => observer.observe(el));
      document.querySelectorAll('.a01-reveal-active').forEach(el => el.classList.add('active'));
    }, 100);

    return () => {
      styleEl.remove();
      fontEl.remove();
      observer.disconnect();
    };
  }, [theme]);

  const contactWaLink = contact?.whatsapp_number ? `https://wa.me/${contact.whatsapp_number.replace(/\D/g, '')}` : '#';
  const getWaLinkWithMsg = (msg: string) => contact?.whatsapp_number ? `https://wa.me/${contact.whatsapp_number.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}` : '#';

  return (
    <div className="a01-body pb-0">
      <div className="a01-bg-noise"></div>

      <div className="max-w-md mx-auto min-h-screen relative bg-ciro-bg shadow-2xl overflow-hidden sm:border-x sm:border-ciro-dark/10 flex flex-col">
        
        {/* HERO */}
        <header className="relative w-full h-[85vh] rounded-b-[3rem] overflow-hidden shadow-xl z-10 bg-ciro-dark border-b border-ciro-dark/10">
          <img src={hero?.image_url} alt={branding?.name} className="absolute inset-0 w-full h-full object-cover object-top a01-animate-zoom opacity-90" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ciro-dark)] via-transparent to-transparent opacity-80"></div>
          
          {hero?.tag && (
            <div className="absolute top-8 left-6 a01-glass-dark px-4 py-1.5 rounded-full flex items-center gap-2">
              <Icon name="lucide-scale" className="w-3.5 h-3.5 text-ciro-gold" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-white">{hero.tag}</span>
            </div>
          )}

          <div className="absolute bottom-12 left-0 w-full px-8 text-center a01-reveal a01-reveal-active">
            <h2 className="text-[10px] font-bold text-ciro-gold uppercase tracking-[0.4em] mb-3 drop-shadow-md">{hero?.eyebrow}</h2>
            <h1 className="text-[4rem] a01-serif font-bold text-white leading-[0.9] tracking-tight drop-shadow-xl mb-2">{hero?.title_part1}</h1>
            <h1 className="text-[4rem] a01-serif font-bold text-white leading-[0.9] italic tracking-tight drop-shadow-xl">{hero?.title_part2}</h1>
            
            <p className="text-[12px] text-white/80 mt-5 font-medium leading-relaxed max-w-[280px] mx-auto border-t border-white/20 pt-4" dangerouslySetInnerHTML={{ __html: hero?.quote || '' }} />
          </div>
        </header>

        {/* ACTION */}
        <section className="px-6 py-6 relative z-20 -mt-6 a01-reveal">
          <div className="a01-glass-card rounded-[2rem] p-8 shadow-2xl relative overflow-hidden border-t-4 border-[var(--ciro-dark)] flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center mb-4">
              <Icon name="lucide-shield-check" className="w-7 h-7 text-ciro-dark" />
            </div>
            <h3 className="a01-serif text-2xl text-ciro-dark mb-2 leading-tight">
              {action?.title_pre} <br/><span className="italic">{action?.title_highlight}</span>
            </h3>
            <p className="text-[11px] text-ciro-text/70 leading-relaxed font-medium mb-6 px-2">{action?.desc}</p>
            <button onClick={handleBookingClick} className="w-full bg-ciro-dark text-white py-5 rounded-2xl font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3">
              <Icon name="lucide-message-circle" className="w-5 h-5" /> {action?.btn_label}
            </button>
          </div>
        </section>

        {/* BENTO GRID */}
        {areas?.items && areas.items.length > 0 && (
          <section className="px-6 py-12 relative z-10 a01-reveal">
            <div className="flex items-center gap-3 mb-8 pl-2">
              <div className="w-8 h-[2px] bg-ciro-dark"></div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-ciro-dark">{areas?.eyebrow}</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {areas.items.map((item: any, i: number) => (
                <div key={i} onClick={handleBookingClick} className={`${item.large ? 'col-span-2 bg-ciro-sand/40 border border-[var(--ciro-dark)]/10 p-6 rounded-[2rem] flex items-center justify-between' : 'bg-white border border-[var(--ciro-dark)]/10 p-6 rounded-[2rem] flex flex-col justify-between h-44 shadow-sm'} cursor-pointer group transition-all`}>
                  {item.large ? (
                    <>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-ciro-dark flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <Icon name={item.icon || 'lucide-users'} className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="a01-serif text-xl text-ciro-dark leading-none mb-1">{item.title}</h4>
                          <p className="text-[10px] text-ciro-text/60 uppercase tracking-widest font-semibold">{item.desc}</p>
                        </div>
                      </div>
                      <Icon name="lucide-chevron-right" className="w-5 h-5 text-ciro-dark/40 group-hover:text-ciro-dark transition-colors" />
                    </>
                  ) : (
                    <>
                      <Icon name={item.icon || 'lucide-file-text'} className="w-6 h-6 text-ciro-dark/50 mb-3 group-hover:text-ciro-dark transition-colors" />
                      <div>
                        <h4 className="a01-serif text-lg text-ciro-dark leading-tight mb-1 whitespace-pre-wrap">{item.title}</h4>
                        <p className="text-[9px] text-ciro-text/50 uppercase tracking-widest font-semibold">{item.desc}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* MARQUEE */}
        <div className="w-full overflow-hidden border-y border-[var(--ciro-dark)]/10 py-4 relative z-20 bg-ciro-dark">
          <div className="a01-animate-marquee flex gap-10 items-center text-white">
            {marquee?.words?.map((w: any, i: number) => (
              <React.Fragment key={i}>
                <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${w.italic ? 'italic' : ''}`}>{w.text}</span>
                <span className="text-ciro-gold">•</span>
              </React.Fragment>
            ))}
            {marquee?.words?.map((w: any, i: number) => (
              <React.Fragment key={'clone-'+i}>
                <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${w.italic ? 'italic' : ''}`}>{w.text}</span>
                <span className="text-ciro-gold">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section className="px-6 py-16 relative z-10 a01-reveal">
          <div className="bg-ciro-dark rounded-[3rem] p-1 relative overflow-hidden shadow-2xl">
            <div className="h-64 relative rounded-[2.5rem] overflow-hidden">
              <img src={about?.image_url} alt="Sobre" className="w-full h-full object-cover object-top" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ciro-dark)] via-transparent to-transparent opacity-80"></div>
            </div>
            <div className="p-8 pt-4 text-center relative z-10 text-white">
              <h2 className="a01-serif text-3xl mb-6 italic leading-tight">{about?.quote}</h2>
              <div className="space-y-4 text-[13px] text-white/80 font-medium leading-relaxed text-justify mb-8">
                {about?.paragraphs?.map((p: string, i: number) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong class="text-ciro-gold">$1</strong>') }} />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 text-left border-t border-white/10 pt-6">
                 {about?.bullets?.map((b: string, i: number) => (
                   <div key={i} className="flex items-start gap-2">
                     <Icon name="lucide-check-circle-2" className="w-4 h-4 text-ciro-gold shrink-0 mt-0.5" />
                     <p className="text-[10px] text-white/70 uppercase tracking-widest font-bold">{b}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLES */}
        {articles?.items && articles.items.length > 0 && (
          <section className="py-6 a01-reveal border-t border-[var(--ciro-dark)]/10 mt-4">
            <div className="px-8 mb-8">
              <h2 className="a01-serif text-3xl text-ciro-dark leading-none mb-1">
                {articles?.title_pre}<br/><span className="italic text-ciro-greenLight">{articles?.title_highlight}</span>
              </h2>
              <p className="text-[10px] font-bold text-ciro-text/50 uppercase tracking-widest mt-2">{articles?.eyebrow}</p>
            </div>
            <div className="flex overflow-x-auto gap-4 px-6 a01-hide-scrollbar snap-x pb-8">
              {articles.items.map((art: any, i: number) => (
                <div key={i} onClick={() => window.open(art.url, '_blank')} className="snap-center shrink-0 w-60 h-80 rounded-[2rem] overflow-hidden relative shadow-lg group cursor-pointer border border-[var(--ciro-dark)]/5">
                  <img src={art.image_url} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent mix-blend-multiply"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-ciro-gold/90 backdrop-blur text-white text-[8px] font-black uppercase px-2 py-1 rounded mb-2 inline-block">{art.tag}</span>
                    <p className="a01-serif text-white text-lg leading-tight drop-shadow-md z-10 relative">{art.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* LIFESTYLE */}
        {lifestyle?.images && lifestyle.images.length > 0 && (
          <section className="px-6 py-12 bg-ciro-sand/30 border-y border-[var(--ciro-dark)]/5 a01-reveal text-center">
            <Icon name="lucide-quote" className="w-8 h-8 text-ciro-gold/40 mx-auto mb-4 rotate-180" />
            <h3 className="a01-serif text-2xl text-ciro-dark italic leading-snug px-4 mb-6">{lifestyle?.quote}</h3>
            <div className="grid grid-cols-2 gap-3">
              {lifestyle.images.map((img: string, i: number) => (
                <div key={i} className="h-40 rounded-3xl overflow-hidden shadow-sm">
                  <img src={img} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FOOTER */}
        <footer className="mt-auto px-8 pt-16 pb-24 bg-ciro-dark text-white text-center rounded-t-[4rem] border-t border-[var(--ciro-dark)]/10 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] relative z-20">
          <div className="w-16 h-1 bg-white/10 rounded-full mx-auto mb-10"></div>
          <div className="mb-12">
            <h2 className="a01-serif text-3xl mb-3 tracking-wide leading-tight">
              {contact?.headline?.replace(contact?.headline_highlight || '', '')} 
              {contact?.headline_highlight && <span className="italic text-ciro-gold">{contact.headline_highlight}</span>}
            </h2>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold mt-4">{contact?.team_name}</p>
          </div>
          <div className="space-y-4 mb-16">
            <button onClick={handleBookingClick} className="w-full bg-ciro-gold hover:bg-[#a88c5c] text-ciro-dark py-5 rounded-2xl font-bold text-[11px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-lg active:scale-95">
              <Icon name="lucide-message-circle" className="w-5 h-5" /> Falar com a Equipe
            </button>
            {contact?.instagram && (
              <button onClick={() => window.open(contact.instagram_url, '_blank')} className="w-full bg-white/5 border border-white/10 text-white/80 py-4 rounded-2xl font-bold text-[11px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white active:scale-95">
                <Icon name="lucide-instagram" className="w-4 h-4 text-ciro-gold" /> {contact.instagram}
              </button>
            )}
            {contact?.website && (
              <button onClick={() => window.open(contact.website_url, '_blank')} className="w-full bg-transparent text-white/50 py-3 rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 hover:text-white mt-2">
                <Icon name="lucide-globe" className="w-4 h-4" /> Acessar Site
              </button>
            )}
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col items-center">
            <p className="text-[9px] font-bold tracking-widest uppercase text-white/30 mb-2">
              © {new Date().getFullYear()} {branding?.name?.toUpperCase()}
            </p>
            <p className="text-[8px] uppercase tracking-[0.3em] text-white/30 flex items-center justify-center gap-1">
              CRIADO POR <strong className="text-ciro-gold tracking-widest font-black">VERTICY.</strong> PREMIUM BIO
            </p>
          </div>
        </footer>

      </div>

      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center relative text-black">
            <h2 className="text-xl font-bold mb-4">Agendar Horário</h2>
            <p className="text-sm text-gray-600 mb-6">Esta funcionalidade de agenda direta será liberada em breve.</p>
            <a href={getWaLinkWithMsg("Olá! Acessei seu site e gostaria de agendar uma consulta.")} target="_blank" className="block w-full bg-green-500 text-white py-3 rounded-lg font-bold mb-3">Agendar via WhatsApp</a>
            <button onClick={() => setBookingOpen(false)} className="block w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-bold">Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
