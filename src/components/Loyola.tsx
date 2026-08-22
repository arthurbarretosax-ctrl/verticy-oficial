import React from "react";

export default function Loyola({ content }: { content: any }) {
  return (
    <div className="loyola-wrapper">
      

  <div className="max-w-md mx-auto bg-loyola-bg min-h-screen relative shadow-2xl sm:border-x sm:border-white/5 overflow-hidden">
    
    <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-loyola-accent/20 to-transparent pointer-events-none"></div>
    <div className="absolute top-[20%] right-0 w-64 h-64 bg-loyola-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

    <header className="relative px-6 pt-16 pb-8 text-center z-10 reveal active">
      
      <div className="flex justify-center mb-6">
        <div className="bg-[#005CA9]/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#005CA9]/30 flex items-center gap-2 shadow-[0_0_15px_rgba(0,92,169,0.2)]">
          <i data-lucide="shield-check" className="w-4 h-4 text-[#00A1E0]"></i>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white">{content.text_1}</span>
        </div>
      </div>

      <div className="relative w-36 h-36 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full border-2 border-loyola-gold/30 scale-[1.05] animate-[spin_15s_linear_infinite] border-t-loyola-gold border-r-transparent"></div>
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-loyola-bg relative z-10 shadow-2xl">
          <img id="img-perfil" src="" alt="Thiago Loyola" className="w-full h-full object-cover" loading="eager" />
        </div>
        <div className="absolute bottom-1 right-2 bg-loyola-gold w-8 h-8 rounded-full flex items-center justify-center border-4 border-loyola-bg z-20">
          <i data-lucide="check" className="w-4 h-4 text-black stroke-[3]"></i>
        </div>
      </div>

      <h1 className="font-serif text-3xl font-bold text-white mb-1">{content.text_2}</h1>
      <p className="text-xs text-loyola-gold uppercase tracking-[0.2em] font-semibold mb-4">{content.text_3}</p>

      <p className="text-sm text-gray-300 leading-relaxed max-w-[90%] mx-auto font-medium">{content.text_4}<strong className="text-white">{content.text_5}</strong>{content.text_6}</p>
    </header>

    <section className="px-6 py-4 relative z-20 reveal">
      <button  className="w-full btn-gold py-4 rounded-2xl font-bold text-[14px] uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>{content.text_7}</button>
      <p className="text-center text-[10px] text-gray-500 mt-3 flex items-center justify-center gap-1">
        <i data-lucide="clock" className="w-3 h-3"></i>{content.text_8}</p>
    </section>

    
    <section className="px-6 py-8 relative z-10 reveal">
      <div className="glass-panel rounded-[2rem] overflow-hidden border border-white/5 relative shadow-xl">
        
        
        <div className="w-full h-[22rem] relative">
          <div className="absolute inset-0 bg-gradient-to-t from-loyola-card via-transparent to-transparent z-10 opacity-90"></div>
          <img id="img-sobre-thiago" src="" alt="Sobre Thiago Loyola" className="w-full h-full object-cover object-top" loading="lazy" />
        </div>

        
        <div className="p-5 relative z-20 -mt-24">
          <div className="bg-loyola-bg/90 backdrop-blur-xl rounded-[1.5rem] p-6 border border-white/10 shadow-2xl">
             <h2 className="font-serif text-2xl font-bold text-white mb-3">{content.text_9}</h2>
             <div className="w-8 h-[2px] bg-loyola-gold mb-5"></div>
             
             <div className="space-y-4 text-[13px] text-gray-300 leading-relaxed font-medium text-justify">
               <p>{content.text_10}</p>
               <p>{content.text_11}<strong className="text-white">{content.text_12}</strong>{content.text_13}</p>
             </div>
          </div>
        </div>

      </div>
    </section>

    <section className="px-6 py-8 relative z-10 reveal">
      <div className="flex items-center gap-3 mb-5 pl-1">
        <div className="w-8 h-[2px] bg-loyola-gold"></div>
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white">{content.text_14}</h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
        
        <div  className="col-span-2 glass-panel rounded-[1.5rem] p-6 relative overflow-hidden group cursor-pointer hover:border-loyola-gold/50 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-loyola-gold/10 rounded-full blur-[40px] group-hover:bg-loyola-gold/20 transition-colors"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <div className="w-10 h-10 rounded-full bg-loyola-gold/10 flex items-center justify-center mb-3 border border-loyola-gold/20">
                <i data-lucide="gavel" className="w-5 h-5 text-loyola-gold"></i>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-1">{content.text_15}</h3>
              <p className="text-[11px] text-gray-400 leading-relaxed max-w-[85%]">{content.text_16}</p>
            </div>
            <i data-lucide="arrow-up-right" className="w-5 h-5 text-gray-500 group-hover:text-loyola-gold transition-colors"></i>
          </div>
        </div>

        <div  className="glass-panel rounded-[1.5rem] p-5 flex flex-col justify-between group cursor-pointer hover:border-[#005CA9]/50 transition-colors">
          <div className="w-10 h-10 rounded-full bg-[#005CA9]/10 flex items-center justify-center mb-4 border border-[#005CA9]/20">
            <i data-lucide="building" className="w-5 h-5 text-[#00A1E0]"></i>
          </div>
          <div>
            <h3 className="font-bold text-white text-sm mb-1">{content.text_17}<br />&{content.text_18}</h3>
            <p className="text-[10px] text-gray-400">{content.text_19}</p>
          </div>
        </div>

        <div  className="glass-panel rounded-[1.5rem] p-5 flex flex-col justify-between group cursor-pointer hover:border-loyola-gold/50 transition-colors">
          <div className="w-10 h-10 rounded-full bg-loyola-gold/10 flex items-center justify-center mb-4 border border-loyola-gold/20">
            <i data-lucide="key" className="w-5 h-5 text-loyola-gold"></i>
          </div>
          <div>
            <h3 className="font-bold text-white text-sm mb-1">{content.text_20}<br />&{content.text_21}</h3>
            <p className="text-[10px] text-gray-400">{content.text_22}</p>
          </div>
        </div>

      </div>
    </section>

    <section className="px-6 py-6 relative z-10 reveal">
      <div className="bg-gradient-to-br from-[#0B1221] to-[#040814] rounded-[2rem] border border-white/5 p-6 shadow-2xl relative overflow-hidden flex items-center gap-5">
        
        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-loyola-gold/5 rounded-full blur-[30px]"></div>

        <div className="w-20 h-20 rounded-full bg-black border border-white/10 flex items-center justify-center p-2 shrink-0 shadow-lg relative z-10">
          <img id="img-logo-imob" src="" alt="Imobiliária Loyola" className="w-full h-full object-contain" />
        </div>
        
        <div className="relative z-10">
          <p className="text-[9px] uppercase tracking-widest text-loyola-gold font-bold mb-1">{content.text_23}</p>
          <h3 className="font-serif text-lg font-bold text-white leading-tight mb-2">{content.text_24}<br />{content.text_25}</h3>
          <button  className="text-[10px] font-semibold text-white/70 flex items-center gap-1 hover:text-loyola-gold transition-colors">
            <i data-lucide="instagram" className="w-3 h-3"></i>{content.text_26}</button>
        </div>
      </div>
    </section>

    
    <section className="py-10 relative z-10 reveal border-t border-white/5 mt-4 bg-gradient-to-b from-[#040814] to-[#0B1221]/50">
      <div className="px-6 mb-6">
        <h2 className="text-3xl font-serif font-bold text-white mb-1 leading-tight">{content.text_27}<br /><span className="text-loyola-gold italic">{content.text_28}</span></h2>
        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{content.text_29}</p>
      </div>

      <div className="flex overflow-x-auto gap-4 px-6 hide-scrollbar snap-x pb-8">
        
        
        <div className="snap-center shrink-0 w-60 h-80 rounded-[1.5rem] overflow-hidden relative border border-white/10 shadow-xl group">
          <img id="img-cliente-1" src="" alt="Cliente Feliz" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div className="absolute bottom-5 left-5 right-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-loyola-gold/20 flex items-center justify-center border border-loyola-gold/30">
                <i data-lucide="key" className="w-3 h-3 text-loyola-gold"></i>
              </div>
              <span className="text-[9px] font-bold text-loyola-gold uppercase tracking-wider">{content.text_30}</span>
            </div>
            <p className="text-sm text-white font-medium leading-snug">{content.text_31}</p>
          </div>
        </div>

        
        <div className="snap-center shrink-0 w-60 h-80 rounded-[1.5rem] overflow-hidden relative border border-white/10 shadow-xl group">
          <img id="img-cliente-2" src="" alt="Cliente Feliz" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div className="absolute bottom-5 left-5 right-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-loyola-gold/20 flex items-center justify-center border border-loyola-gold/30">
                <i data-lucide="home" className="w-3 h-3 text-loyola-gold"></i>
              </div>
              <span className="text-[9px] font-bold text-loyola-gold uppercase tracking-wider">{content.text_32}</span>
            </div>
            <p className="text-sm text-white font-medium leading-snug">{content.text_33}</p>
          </div>
        </div>

        
        <div className="snap-center shrink-0 w-60 h-80 rounded-[1.5rem] overflow-hidden relative border border-white/10 shadow-xl group">
          <img id="img-cliente-3" src="" alt="Cliente Feliz" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div className="absolute bottom-5 left-5 right-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-loyola-gold/20 flex items-center justify-center border border-loyola-gold/30">
                <i data-lucide="star" className="w-3 h-3 text-loyola-gold"></i>
              </div>
              <span className="text-[9px] font-bold text-loyola-gold uppercase tracking-wider">{content.text_34}</span>
            </div>
            <p className="text-sm text-white font-medium leading-snug">{content.text_35}</p>
          </div>
        </div>

      </div>
    </section>

    <section className="py-10 relative z-10 reveal border-t border-white/5">
      <div className="px-6 mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-serif font-bold text-white mb-1">{content.text_36}<br />{content.text_37}</h2>
          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{content.text_38}</p>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-4 px-6 hide-scrollbar snap-x pb-8">
        
        <div  className="snap-center shrink-0 w-44 h-72 rounded-[1.5rem] overflow-hidden relative border border-white/10 shadow-lg group cursor-pointer">
          <img id="img-reel-1" src="" alt="Dica Leilão" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          
          <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
            <i data-lucide="play" className="w-4 h-4 text-white fill-white ml-0.5"></i>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-2 py-1 bg-loyola-gold/20 border border-loyola-gold/30 rounded text-[9px] font-bold text-loyola-gold uppercase mb-2">{content.text_39}</span>
            <p className="text-xs text-white font-medium leading-snug line-clamp-2">{content.text_40}</p>
          </div>
        </div>

        <div  className="snap-center shrink-0 w-44 h-72 rounded-[1.5rem] overflow-hidden relative border border-white/10 shadow-lg group cursor-pointer">
          <img id="img-reel-2" src="" alt="Dica Financiamento" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          
          <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
            <i data-lucide="play" className="w-4 h-4 text-white fill-white ml-0.5"></i>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-2 py-1 bg-[#00A1E0]/20 border border-[#00A1E0]/30 rounded text-[9px] font-bold text-[#00A1E0] uppercase mb-2">{content.text_41}</span>
            <p className="text-xs text-white font-medium leading-snug line-clamp-2">{content.text_42}</p>
          </div>
        </div>

        <div  className="snap-center shrink-0 w-44 h-72 rounded-[1.5rem] overflow-hidden relative border border-white/10 shadow-lg group cursor-pointer">
          <img id="img-reel-3" src="" alt="Depoimento" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          
          <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
            <i data-lucide="play" className="w-4 h-4 text-white fill-white ml-0.5"></i>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-[9px] font-bold text-green-400 uppercase mb-2">{content.text_43}</span>
            <p className="text-xs text-white font-medium leading-snug line-clamp-2">{content.text_44}</p>
          </div>
        </div>

      </div>
    </section>

    <section className="px-6 py-8 reveal">
      <div className="flex items-center gap-3 mb-6 pl-1">
        <div className="w-8 h-[2px] bg-loyola-gold"></div>
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white">{content.text_45}</h2>
      </div>
      
      <div className="space-y-3">
        <div className="faq-item glass-panel rounded-2xl overflow-hidden transition-all duration-300">
          <button className="faq-button w-full px-5 py-4 flex items-center justify-between text-left">
            <span className="text-sm font-medium text-white">{content.text_46}</span>
            <i data-lucide="plus" className="w-4 h-4 text-loyola-gold transition-transform duration-300 icon-plus"></i>
          </button>
          <div className="faq-content max-h-0 overflow-hidden transition-all duration-300 opacity-0 px-5">
            <p className="text-xs text-gray-400 leading-relaxed pb-5 pt-1">{content.text_47}</p>
          </div>
        </div>

        <div className="faq-item glass-panel rounded-2xl overflow-hidden transition-all duration-300">
          <button className="faq-button w-full px-5 py-4 flex items-center justify-between text-left">
            <span className="text-sm font-medium text-white">{content.text_48}</span>
            <i data-lucide="plus" className="w-4 h-4 text-loyola-gold transition-transform duration-300 icon-plus"></i>
          </button>
          <div className="faq-content max-h-0 overflow-hidden transition-all duration-300 opacity-0 px-5">
            <p className="text-xs text-gray-400 leading-relaxed pb-5 pt-1">{content.text_49}</p>
          </div>
        </div>

        <div className="faq-item glass-panel rounded-2xl overflow-hidden transition-all duration-300">
          <button className="faq-button w-full px-5 py-4 flex items-center justify-between text-left">
            <span className="text-sm font-medium text-white">{content.text_50}</span>
            <i data-lucide="plus" className="w-4 h-4 text-loyola-gold transition-transform duration-300 icon-plus"></i>
          </button>
          <div className="faq-content max-h-0 overflow-hidden transition-all duration-300 opacity-0 px-5">
            <p className="text-xs text-gray-400 leading-relaxed pb-5 pt-1">{content.text_51}</p>
          </div>
        </div>
      </div>
    </section>

    <footer className="pt-8 pb-16 text-center relative z-10">
      
      <div className="flex justify-center gap-4 mb-8">
        <button  className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-loyola-gold transition-all shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 24 24" fill="none" stroke="url(#ig-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <defs>
              <lineargradient id="ig-grad" x1="2" y1="2" x2="22" y2="22">
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
        <button  className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-[#25D366] hover:border-[#25D366] transition-all shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </button>
      </div>

      <p className="text-[9px] font-bold tracking-widest uppercase text-gray-600 mb-2">{content.text_52}</p>
      <p className="text-[8px] uppercase tracking-[0.3em] text-gray-700 flex items-center justify-center gap-1">{content.text_53}<strong className="text-loyola-gold tracking-widest">{content.text_54}</strong>{content.text_55}</p>
    </footer>

  </div>
    

    </div>
  );
}
