import React from "react";
import "@/assets/css/star.css";

export default function Star({ content }: { content: any }) {
  return (
    <div className="star-wrapper template-star">
      

  
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Manrope:wght@300;400;500;700;800&display=swap');
      `}</style>
<div className="bg-noise"></div>

  
  <div className="max-w-md mx-auto bg-star-black min-h-screen relative shadow-2xl sm:border-x sm:border-white/5 overflow-hidden">
    
    
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-star-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

    
    <header className="w-full flex justify-end items-center p-6 absolute top-0 z-50">
      <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-star-gold animate-pulse"></span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-star-white">{content.text_1}</span>
      </div>
    </header>

    
    <section className="relative w-full pt-28 pb-10 flex flex-col items-center justify-center reveal active">
      
      
      <div className="absolute top-32 w-full text-center z-0 overflow-hidden">
        <h1 className="text-[9rem] font-serif font-bold text-white/[0.03] tracking-tighter leading-none select-none">{content.text_2}</h1>
      </div>

      
      <div className="relative w-[75%] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 z-10 group">
        <img id="img-capa" src="" alt="Nova Coleção" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 parallax-image" loading="eager" fetchpriority="high" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-star-black/90 via-transparent to-transparent flex flex-col justify-end p-6 text-center">
          <p className="text-[10px] font-bold text-star-gold uppercase tracking-[0.3em] mb-2">{content.text_3}&{content.text_4}</p>
          <h2 className="text-2xl font-serif text-white uppercase tracking-wider">{content.text_5}<br />{content.text_6}</h2>
        </div>
      </div>
    </section>

    
    <section className="px-6 py-6 relative z-20 reveal">
      <div className="space-y-4">
        
        
        <div  className="w-full bg-[#121212] border border-white/5 rounded-[2rem] h-40 flex overflow-hidden shadow-lg cursor-pointer group hover:border-star-gold/50 transition-all duration-500 active:scale-[0.98]">
          <div className="w-[55%] p-6 flex flex-col justify-center relative">
            <h3 className="font-serif text-2xl text-white mb-1 relative z-10 group-hover:text-star-gold transition-colors">{content.text_7}</h3>
            <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold whitespace-nowrap truncate relative z-10">{content.text_8}</p>
            <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-star-gold group-hover:translate-x-2 transition-all duration-500">
              <i data-lucide="arrow-right" className="w-4 h-4 text-star-gold"></i>
            </div>
          </div>
          <div className="w-[45%] h-full relative overflow-hidden bg-[#121212]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/60 to-transparent z-10"></div>
            <img id="img-atendimento-centro" src="" alt="Unidade Centro" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-60" loading="lazy" />
          </div>
        </div>

        
        <div  className="w-full bg-[#1a1a1a] border border-white/5 rounded-[2rem] h-40 flex overflow-hidden shadow-lg cursor-pointer group hover:border-star-gold/50 transition-all duration-500 active:scale-[0.98]">
          <div className="w-[45%] h-full relative overflow-hidden bg-[#1a1a1a]">
            <div className="absolute inset-0 bg-gradient-to-l from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent z-10"></div>
            <img id="img-atendimento-formosa" src="" alt="Unidade Formosa" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-60" loading="lazy" />
          </div>
          <div className="w-[55%] p-6 flex flex-col justify-center items-end text-right relative">
            <h3 className="font-serif text-2xl text-white mb-1 relative z-10 group-hover:text-star-gold transition-colors">{content.text_9}</h3>
            <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold whitespace-nowrap truncate relative z-10">{content.text_10}</p>
            <div className="absolute bottom-5 left-5 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-star-gold group-hover:-translate-x-2 transition-all duration-500">
              <i data-lucide="arrow-left" className="w-4 h-4 text-star-gold"></i>
            </div>
          </div>
        </div>

        
        <button  className="w-full bg-star-dark border border-white/5 hover:bg-white/5 p-5 rounded-[1.5rem] flex items-center justify-between transition-all active:scale-95 group mt-2">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-star-gold/50">
              <i data-lucide="star" className="w-5 h-5 text-white/50 group-hover:text-star-gold"></i>
            </div>
            <div className="text-left">
              <h3 className="text-sm font-bold text-white uppercase tracking-wide">{content.text_11}</h3>
              <p className="text-[10px] text-star-white/50 font-medium">{content.text_12}</p>
            </div>
          </div>
          <i data-lucide="chevron-right" className="w-4 h-4 text-white/30 group-hover:text-star-gold"></i>
        </button>

      </div>
    </section>

    
    <section className="px-6 py-10 reveal relative z-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-serif text-white tracking-widest uppercase">{content.text_13}</h2>
        <div className="w-12 h-[1px] bg-star-gold"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        
        <div className="relative h-64 rounded-[2rem] overflow-hidden group border border-white/10 shadow-lg">
          <img id="img-cat-fitness" src="" alt="Moda Fitness" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-star-black via-star-black/40 to-transparent"></div>
          <div className="absolute bottom-5 left-5">
            <h3 className="text-lg font-serif text-white uppercase leading-none mb-1">{content.text_14}<br />{content.text_15}</h3>
            <p className="text-[9px] text-star-gold uppercase tracking-[0.2em] font-bold">{content.text_16}</p>
          </div>
        </div>

        
        <div className="relative h-64 rounded-[2rem] overflow-hidden group border border-white/10 shadow-lg mt-6">
          <img id="img-cat-praia" src="" alt="Moda Praia" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-star-black via-star-black/40 to-transparent"></div>
          <div className="absolute bottom-5 left-5">
            <h3 className="text-lg font-serif text-white uppercase leading-none mb-1">{content.text_17}<br />{content.text_18}</h3>
            <p className="text-[9px] text-star-gold uppercase tracking-[0.2em] font-bold">{content.text_19}&{content.text_20}</p>
          </div>
        </div>
      </div>
    </section>

    
    <section className="py-16 px-8 text-center reveal border-y border-white/5 relative bg-star-dark/30">
      <i data-lucide="quote" className="w-8 h-8 text-star-gold/20 mx-auto mb-6"></i>
      <h2 className="text-xl font-serif text-white leading-relaxed mb-6">{content.text_21}</h2>
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-star-gold">{content.text_22}</p>
    </section>

    
    <section className="py-12 reveal relative z-10">
      <div className="px-6 mb-8 text-center">
        <h2 className="text-2xl font-serif text-white tracking-widest uppercase mb-2">{content.text_23}</h2>
        <p className="text-xs text-white/50">{content.text_24}</p>
      </div>

      <div className="flex overflow-x-auto gap-4 px-6 hide-scrollbar snap-x pb-8">
        
        
        <div className="snap-center shrink-0 w-64 h-[26rem] rounded-[2rem] overflow-hidden relative border border-white/10 shadow-lg">
          <img id="img-look-1" src="" alt="Look em Destaque" className="w-full h-full object-cover" loading="lazy" />
        </div>

        
        <div className="snap-center shrink-0 w-48 flex flex-col gap-4">
          <div className="h-[12.5rem] rounded-[2rem] overflow-hidden relative border border-white/10 shadow-lg">
            <img id="img-look-2" src="" alt="Detalhe Look" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="h-[12.5rem] rounded-[2rem] overflow-hidden relative border border-white/10 shadow-lg">
            <img id="img-look-3" src="" alt="Detalhe Look" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

      </div>
    </section>

    
    <section className="px-6 py-10 reveal">
      <h2 className="text-lg font-bold text-white uppercase tracking-widest mb-6">{content.text_25}</h2>
      
      <div className="space-y-4">
        
        <div className="bg-star-dark p-6 rounded-[2rem] border border-white/5 flex flex-col gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-star-gold/5 rounded-full blur-2xl"></div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-star-gray flex items-center justify-center border border-white/10">
              <i data-lucide="map-pin" className="w-4 h-4 text-star-gold"></i>
            </div>
            <div>
              <h3 className="font-bold text-white uppercase tracking-wide">{content.text_26}</h3>
              <p className="text-[10px] text-white/50 mt-0.5">{content.text_27}</p>
            </div>
          </div>
          
          <div className="pl-13 border-t border-white/5 pt-4 mt-2">
            <p className="text-xs text-white/70 leading-relaxed mb-3">{content.text_28}<br />{content.text_29}</p>
            <button  className="text-[10px] font-bold text-star-gold uppercase tracking-[0.2em] border-b border-star-gold/30 pb-0.5 hover:text-white transition-colors">{content.text_30}</button>
          </div>
        </div>

        
        <div className="bg-star-dark p-6 rounded-[2rem] border border-white/5 flex flex-col gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-star-gold/5 rounded-full blur-2xl"></div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-star-gray flex items-center justify-center border border-white/10">
              <i data-lucide="store" className="w-4 h-4 text-star-gold"></i>
            </div>
            <div>
              <h3 className="font-bold text-white uppercase tracking-wide">{content.text_31}</h3>
              <p className="text-[10px] text-white/50 mt-0.5">{content.text_32}</p>
            </div>
          </div>
          
          <div className="pl-13 border-t border-white/5 pt-4 mt-2">
            <p className="text-xs text-white/70 leading-relaxed mb-3">{content.text_33}<br />{content.text_34}</p>
            <button  className="text-[10px] font-bold text-star-gold uppercase tracking-[0.2em] border-b border-star-gold/30 pb-0.5 hover:text-white transition-colors">{content.text_35}</button>
          </div>
        </div>
      </div>
    </section>

    
    <section className="px-6 py-10 reveal">
      <h2 className="text-lg font-bold text-white uppercase tracking-widest mb-6">{content.text_36}</h2>
      
      <div className="space-y-3">
        
        <div className="faq-item bg-star-dark border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
          <button className="faq-button w-full px-5 py-5 flex items-center justify-between text-left">
            <span className="text-sm font-medium text-white tracking-wide">{content.text_37}</span>
            <i data-lucide="plus" className="w-4 h-4 text-star-gold transition-transform duration-300 icon-plus"></i>
          </button>
          <div className="faq-content max-h-0 overflow-hidden transition-all duration-300 opacity-0 px-5">
            <p className="text-xs text-white/60 leading-relaxed pb-5">{content.text_38}</p>
          </div>
        </div>

        
        <div className="faq-item bg-star-dark border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
          <button className="faq-button w-full px-5 py-5 flex items-center justify-between text-left">
            <span className="text-sm font-medium text-white tracking-wide">{content.text_39}</span>
            <i data-lucide="plus" className="w-4 h-4 text-star-gold transition-transform duration-300 icon-plus"></i>
          </button>
          <div className="faq-content max-h-0 overflow-hidden transition-all duration-300 opacity-0 px-5">
            <p className="text-xs text-white/60 leading-relaxed pb-5">{content.text_40}</p>
          </div>
        </div>
      </div>
    </section>

    
    <footer className="pt-10 pb-16 text-center border-t border-white/5 relative z-10 bg-black">
      
      <div className="flex justify-center gap-4 mb-8">
        
        <button  className="w-14 h-14 rounded-full bg-star-gray border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-star-gold hover:scale-110 transition-all shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="url(#ig-grad-star)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <defs>
              <lineargradient id="ig-grad-star" x1="2" y1="2" x2="22" y2="22">
                <stop offset="0%" stop-color="#f9ce34"></stop>
                <stop offset="30%" stop-color="#ee2a7b"></stop>
                <stop offset="70%" stop-color="#6228d7"></stop>
              </lineargradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </button>
        
        <button  className="w-14 h-14 rounded-full bg-star-gray border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-[#25D366] hover:scale-110 transition-all shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="url(#ig-grad-star)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </button>
      </div>

      <p className="text-[9px] font-bold tracking-widest uppercase text-white/40 mb-2">{content.text_41}</p>
      <p className="text-[8px] uppercase tracking-[0.3em] text-white/30 flex items-center justify-center gap-1">{content.text_42}<strong className="text-star-gold tracking-widest">{content.text_43}</strong>{content.text_44}</p>
    </footer>

  </div>

  

    </div>
  );
}
