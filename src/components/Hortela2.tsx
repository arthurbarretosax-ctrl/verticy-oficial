import React from "react";
import "@/assets/css/hortela2.css";

export default function Hortela2({ content }: { content: any }) {
  return (
    <div className="hortela2-wrapper template-hortela2">
      

  
  
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
      `}</style>
<div className="max-w-md mx-auto min-h-screen relative shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#050605] sm:border-x sm:border-white/5 overflow-hidden flex flex-col">
    
    <div className="bg-noise mix-blend-overlay"></div>

    
    <div className="absolute top-0 right-0 w-80 h-80 bg-[#9AD4AA] rounded-full mix-blend-overlay filter blur-[150px] opacity-20 pointer-events-none"></div>
    <div className="absolute top-[40%] left-[-50px] w-96 h-96 bg-[#9AD4AA] rounded-full mix-blend-overlay filter blur-[120px] opacity-10 pointer-events-none"></div>

    
    <header className="absolute top-0 left-0 w-full z-50 flex justify-start items-center px-6 py-6 text-white">
      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-sm">{content.text_1}</span>
    </header>

    
    <section className="relative w-full h-[70vh] rounded-b-[3rem] overflow-hidden shadow-2xl reveal active group border-b border-white/5 bg-[#0A0D0B]">
      
      <div className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <img id="img-hortela1" src="" alt="Coleção Hortelã" className="w-full h-full object-cover object-center animate-ken-burns parallax-bg opacity-90" loading="eager" fetchpriority="high" />
      </div>
      
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#050605]/60 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-t from-[#050605] via-[#050605]/80 to-transparent"></div>

      
      <div className="absolute bottom-10 left-0 w-full flex justify-center px-6 transform transition-transform duration-700 group-hover:-translate-y-2">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/50 via-transparent to-transparent blur-xl w-64 h-32 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"></div>
        
        <img id="img-logo-topo" src="" alt="Hortelã Logo" className="w-56 md:w-64 object-contain drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] relative z-10" />
      </div>
    </section>

    
    <div className="w-full overflow-hidden border-b border-white/5 py-3 relative z-20 bg-black/50 backdrop-blur-md">
      <div className="animate-marquee flex gap-8 items-center text-white/80">
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{content.text_2}</span>
        <span className="text-[10px] text-[#9AD4AA]">✦</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] italic">{content.text_3}</span>
        <span className="text-[10px] text-[#9AD4AA]">✦</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{content.text_4}</span>
        <span className="text-[10px] text-[#9AD4AA]">✦</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] italic">{content.text_5}</span>
        <span className="text-[10px] text-[#9AD4AA]">✦</span>
        
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{content.text_6}</span>
        <span className="text-[10px] text-[#9AD4AA]">✦</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] italic">{content.text_7}</span>
        <span className="text-[10px] text-[#9AD4AA]">✦</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{content.text_8}</span>
        <span className="text-[10px] text-[#9AD4AA]">✦</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] italic">{content.text_9}</span>
      </div>
    </div>

    
    <section className="px-5 mt-10 space-y-4 relative z-20">
      
      
      <div  className="w-full bg-[#9AD4AA] rounded-[2rem] h-40 flex overflow-hidden shadow-[0_10px_30px_rgba(154,212,170,0.15)] cursor-pointer group hover:shadow-xl transition-all duration-500 reveal active:scale-[0.98]">
        <div className="w-[55%] p-6 flex flex-col justify-center relative">
          <h3 className="font-serif text-2xl text-[#050605] mb-1.5 relative z-10 group-hover:text-white transition-colors">{content.text_10}</h3>
          <p className="text-[10px] uppercase tracking-widest text-[#050605]/70 font-bold whitespace-nowrap truncate relative z-10">{content.text_11}</p>
          <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-500 border border-white/30 shadow-sm">
            <i data-lucide="arrow-right" className="w-4 h-4 text-[#050605]"></i>
          </div>
        </div>
        <div className="w-[45%] h-full relative overflow-hidden bg-[#9AD4AA]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#9AD4AA] via-[#9AD4AA]/60 to-transparent z-10"></div>
          <img id="img-hortela2" src="" alt="Loja Pelinca" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 mix-blend-multiply opacity-80" />
        </div>
      </div>

      
      <div  className="w-full bg-[#161A18] rounded-[2rem] h-40 flex overflow-hidden shadow-lg cursor-pointer group hover:shadow-xl hover:border-[#9AD4AA]/30 border border-white/5 transition-all duration-500 reveal active:scale-[0.98] delay-100">
        <div className="w-[45%] h-full relative overflow-hidden bg-[#161A18]">
          <div className="absolute inset-0 bg-gradient-to-l from-[#161A18] via-[#161A18]/60 to-transparent z-10"></div>
          <img id="img-hortela3" src="" alt="Loja Goytacazes" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 opacity-60" />
        </div>
        <div className="w-[55%] p-6 flex flex-col justify-center items-end text-right relative">
          <h3 className="font-serif text-2xl text-white mb-1.5 relative z-10 group-hover:text-[#9AD4AA] transition-colors">{content.text_12}</h3>
          <p className="text-[9.5px] uppercase tracking-widest text-white/50 font-bold whitespace-nowrap truncate relative z-10">{content.text_13}</p>
          <div className="absolute bottom-5 left-5 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:-translate-x-2 transition-transform duration-500 border border-white/10">
            <i data-lucide="arrow-left" className="w-4 h-4 text-[#9AD4AA]"></i>
          </div>
        </div>
      </div>

      
      <div  className="w-full bg-[#0A0D0B] border border-white/5 rounded-[2rem] h-40 flex overflow-hidden shadow-lg cursor-pointer group hover:shadow-xl hover:border-[#9AD4AA]/30 transition-all duration-500 reveal active:scale-[0.98] delay-200">
        <div className="w-[55%] p-6 flex flex-col justify-center relative">
          <h3 className="font-serif text-2xl text-white mb-1.5 relative z-10 group-hover:text-[#9AD4AA] transition-colors">{content.text_14}</h3>
          <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold whitespace-nowrap truncate relative z-10">{content.text_15}</p>
          <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-500 border border-white/10">
            <i data-lucide="instagram" className="w-4 h-4 text-[#9AD4AA]"></i>
          </div>
        </div>
        <div className="w-[45%] h-full relative overflow-hidden bg-[#0A0D0B]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D0B] via-[#0A0D0B]/60 to-transparent z-10"></div>
          <img id="img-hortela4" src="" alt="Instagram Hortelã" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 opacity-60" />
        </div>
      </div>

    </section>

    
    <section className="px-8 mt-20 mb-12 reveal">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-[1px] bg-[#9AD4AA]"></div>
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">{content.text_16}</h2>
      </div>
      <h2 className="font-serif text-4xl text-white mb-8 leading-tight">{content.text_17}<br /><span className="italic text-[#9AD4AA]">{content.text_18}</span></h2>
      <div className="space-y-4 text-[14px] text-white/70 font-medium leading-relaxed text-justify relative">
        <i data-lucide="quote" className="absolute -top-4 -left-3 w-12 h-12 text-[#9AD4AA]/10 -z-10 rotate-180"></i>
        <p>{content.text_19}<strong className="font-bold text-white">{content.text_20}</strong>{content.text_21}</p>
        <p>{content.text_22}</p>
      </div>
    </section>

    
    <section className="px-5 mb-16 reveal-scale">
      <div className="w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 relative group bg-[#0A0D0B]">
        <img id="img-hortela5" src="" alt="Look Hortelã" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 opacity-90" loading="lazy" />
      </div>
    </section>

    
    <section className="py-10 relative z-10 border-t border-white/5 reveal bg-gradient-to-b from-[#050605] to-[#0A0D0B]">
      <div className="px-8 mb-8 text-center">
        <h2 className="text-3xl font-serif text-white mb-3">{content.text_23}</h2>
        <p className="text-xs text-white/60 font-medium leading-relaxed max-w-[90%] mx-auto uppercase tracking-widest">{content.text_24}</p>
      </div>

      
      <div className="grid grid-cols-2 gap-3 px-6 pb-8">
        <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-lg border border-white/10 relative group reveal-scale bg-[#0A0D0B]">
          <img id="img-hortela6" src="" alt="Detalhe Look" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100" loading="lazy" />
        </div>
        <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-lg border border-white/10 relative group reveal-scale delay-100 bg-[#0A0D0B]">
          <img id="img-hortela7" src="" alt="Detalhe Look" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100" loading="lazy" />
        </div>
        <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-lg border border-white/10 relative group reveal-scale delay-200 bg-[#0A0D0B]">
          <img id="img-hortela8" src="" alt="Detalhe Look" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100" loading="lazy" />
        </div>
        <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-lg border border-white/10 relative group reveal-scale delay-300 bg-[#0A0D0B]">
          <img id="img-hortela9" src="" alt="Detalhe Look" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100" loading="lazy" />
        </div>
      </div>
    </section>

    
    <section className="px-6 py-12 relative z-10 reveal">
      <div className="flex items-center gap-3 mb-8 pl-1">
        <div className="w-8 h-[2px] bg-[#9AD4AA]"></div>
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white">{content.text_25}</h2>
      </div>

      <div className="space-y-4">
        
        
        <div className="bg-[#0A0D0B] p-6 rounded-[2rem] border border-white/5 shadow-lg flex flex-col gap-3 group hover:border-[#9AD4AA]/50 transition-colors relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#9AD4AA]/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#9AD4AA] shrink-0 border border-white/10">
              <i data-lucide="map-pin" className="w-5 h-5"></i>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">{content.text_26}</h3>
              <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold mt-1">{content.text_27}</p>
            </div>
          </div>
          <p className="text-xs text-white/70 leading-relaxed pl-16 pt-3 border-t border-white/5 font-medium relative z-10">{content.text_28}</p>
        </div>

        
        <div className="bg-[#0A0D0B] p-6 rounded-[2rem] border border-white/5 shadow-lg flex flex-col gap-3 group hover:border-white/20 transition-colors relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/70 shrink-0 border border-white/10">
              <i data-lucide="map-pin" className="w-5 h-5"></i>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">{content.text_29}</h3>
              <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold mt-1">{content.text_30}</p>
            </div>
          </div>
          <p className="text-xs text-white/70 leading-relaxed pl-16 pt-3 border-t border-white/5 font-medium relative z-10">{content.text_31}</p>
        </div>

      </div>
    </section>

    
    <section className="bg-[#0A0D0B] rounded-t-[3.5rem] pt-16 pb-8 px-6 reveal shadow-[0_-10px_40px_rgba(0,0,0,0.5)] relative border-t border-white/5 mt-4">
      
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/10 rounded-full"></div>

      <div className="text-center mb-10">
        <h2 className="font-serif text-3xl text-white mb-2">{content.text_32}</h2>
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#9AD4AA] font-bold">{content.text_33}</p>
      </div>

      <div className="space-y-3">
        
        <div className="faq-item border border-white/5 rounded-2xl bg-[#161A18] overflow-hidden transition-all duration-300 shadow-md">
          <button className="faq-button w-full px-5 py-4 flex items-center justify-between text-left">
            <span className="font-serif text-[15px] font-semibold text-white">{content.text_34}</span>
            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
              <i data-lucide="chevron-down" className="w-3 h-3 text-[#9AD4AA] transition-transform duration-500 icon-arrow"></i>
            </div>
          </button>
          <div className="faq-content px-5">
            <p className="text-[12px] text-white/60 font-medium leading-relaxed pb-5 border-t border-white/5 pt-3">{content.text_35}</p>
          </div>
        </div>

        
        <div className="faq-item border border-white/5 rounded-2xl bg-[#161A18] overflow-hidden transition-all duration-300 shadow-md">
          <button className="faq-button w-full px-5 py-4 flex items-center justify-between text-left">
            <span className="font-serif text-[15px] font-semibold text-white">{content.text_36}</span>
            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
              <i data-lucide="chevron-down" className="w-3 h-3 text-[#9AD4AA] transition-transform duration-500 icon-arrow"></i>
            </div>
          </button>
          <div className="faq-content px-5">
            <p className="text-[12px] text-white/60 font-medium leading-relaxed pb-5 border-t border-white/5 pt-3">{content.text_37}<br /><br />
              📍 <strong className="text-white">{content.text_38}</strong>{content.text_39}<br />
              📍 <strong className="text-white">{content.text_40}</strong>{content.text_41}</p>
          </div>
        </div>
      </div>

      
      <div className="text-center pt-16 pb-6">
        
        <button  className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#050605] mx-auto mb-6 hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </button>
        
        <p className="text-[9px] font-bold tracking-widest uppercase text-white/30 mb-2">{content.text_42}</p>
        <p className="text-[8px] uppercase tracking-[0.3em] text-white/20 flex items-center justify-center gap-1">{content.text_43}<a href="https://instagram.com/verticy.web" target="_blank" className="text-white font-black text-[10px] tracking-widest hover:text-[#9AD4AA] transition-colors">{content.text_44}</a>
        </p>
      </div>

    </section>

  </div>

  

    </div>
  );
}
