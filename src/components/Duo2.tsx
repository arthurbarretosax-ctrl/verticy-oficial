import React from "react";
import "@/assets/css/duo2.css";

export default function Duo2({ content }: { content: any }) {
  return (
    <div className="duo2-wrapper template-duo2 overflow-x-hidden selection:bg-[#9E9EA0] selection:text-[#050505] pb-0 bg-[#050505]">
      

  
  
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
      `}</style>
<div className="max-w-md mx-auto min-h-screen relative shadow-2xl bg-[#050505] sm:border-x sm:border-white/10 overflow-hidden flex flex-col">
    
    <div className="bg-noise mix-blend-overlay"></div>

    
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#9E9EA0] rounded-full mix-blend-overlay filter blur-[120px] opacity-20 pointer-events-none animate-float"></div>
    <div className="absolute top-[45%] left-0 w-80 h-80 bg-[#F5F5F7] rounded-full mix-blend-overlay filter blur-[140px] opacity-10 pointer-events-none animate-float-delayed"></div>

    
    <header className="absolute top-0 left-0 w-full z-50 flex justify-start items-center px-6 py-6 text-[#F5F5F7]">
      <span className="text-[9px] font-bold uppercase tracking-[0.2em] bg-[#050505]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-sm flex items-center gap-2">
        <i data-lucide="apple" className="w-3 h-3 text-white"></i>{content.text_1}</span>
    </header>

    
    <section className="relative w-full h-[70vh] rounded-b-[3rem] overflow-hidden shadow-sm reveal active group border-b border-white/5">
      
      <div className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <img id="img-duo1" src="" alt="Duo Imports" className="w-full h-full object-cover object-center animate-ken-burns parallax-bg" loading="eager" fetchpriority="high" />
      </div>
      
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent"></div>

      
      <div className="absolute bottom-10 left-0 w-full flex justify-center px-6 transform transition-transform duration-700 group-hover:-translate-y-2">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent blur-2xl w-48 h-48 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"></div>
        <div className="w-28 h-28 bg-[#0a0a0a] rounded-[2rem] border border-white/10 p-2 shadow-2xl relative z-10 flex items-center justify-center">
            <img id="img-logo-topo" src="" alt="Duo Imports Logo" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>

    
    <div className="w-full overflow-hidden border-b border-white/5 py-3 relative z-20 bg-[#050505]/80 backdrop-blur-md">
      <div className="animate-marquee flex gap-8 items-center text-[#F5F5F7]">
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{content.text_2}</span>
        <span className="text-[10px] text-[#9E9EA0]"></span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] italic">{content.text_3}</span>
        <span className="text-[10px] text-[#9E9EA0]"></span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{content.text_4}</span>
        <span className="text-[10px] text-[#9E9EA0]"></span>
        
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{content.text_5}</span>
        <span className="text-[10px] text-[#9E9EA0]"></span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] italic">{content.text_6}</span>
        <span className="text-[10px] text-[#9E9EA0]"></span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{content.text_7}</span>
        <span className="text-[10px] text-[#9E9EA0]"></span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{content.text_8}</span>
        <span className="text-[10px] text-[#9E9EA0]"></span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] italic">{content.text_9}</span>
        <span className="text-[10px] text-[#9E9EA0]"></span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{content.text_10}</span>
      </div>
    </div>

    
    <section className="px-5 mt-10 space-y-4 relative z-20">
      
      
      <div  className="w-full bg-[#F5F5F7] rounded-[2rem] h-40 flex overflow-hidden shadow-[0_10px_30px_rgba(245,245,247,0.05)] cursor-pointer group hover:shadow-xl transition-all duration-500 reveal active:scale-[0.98]">
        <div className="w-[55%] p-6 flex flex-col justify-center relative">
          <h3 className="font-serif text-2xl text-[#050505] mb-1 relative z-10 group-hover:text-[#1C1C1E] transition-colors">{content.text_11}</h3>
          <p className="text-[10px] uppercase tracking-widest text-[#050505]/70 font-semibold whitespace-nowrap truncate relative z-10">{content.text_12}</p>
          <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-[#050505]/5 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-500">
            <i data-lucide="arrow-right" className="w-4 h-4 text-[#050505]"></i>
          </div>
        </div>
        <div className="w-[45%] h-full relative overflow-hidden bg-[#F5F5F7]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F7] via-[#F5F5F7]/40 to-transparent z-10"></div>
          <img id="img-duo2" src="" alt="Comprar iPhone" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 mix-blend-multiply opacity-90" />
        </div>
      </div>

      
      <div  className="w-full bg-[#9E9EA0] rounded-[2rem] h-40 flex overflow-hidden shadow-[0_10px_30px_rgba(158,158,160,0.05)] cursor-pointer group hover:shadow-xl transition-all duration-500 reveal active:scale-[0.98] delay-100">
        <div className="w-[45%] h-full relative overflow-hidden bg-[#9E9EA0]">
          <div className="absolute inset-0 bg-gradient-to-l from-[#9E9EA0] via-[#9E9EA0]/40 to-transparent z-10"></div>
          <img id="img-duo3" src="" alt="Assistência Técnica" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 mix-blend-multiply opacity-90" />
        </div>
        <div className="w-[55%] p-6 flex flex-col justify-center items-end text-right relative">
          <h3 className="font-serif text-2xl text-[#050505] mb-1 relative z-10 group-hover:text-[#1C1C1E] transition-colors">{content.text_13}</h3>
          <p className="text-[10px] uppercase tracking-widest text-[#050505]/70 font-semibold whitespace-nowrap truncate relative z-10">{content.text_14}</p>
          <div className="absolute bottom-5 left-5 w-8 h-8 rounded-full bg-[#050505]/5 flex items-center justify-center group-hover:-translate-x-2 transition-transform duration-500">
            <i data-lucide="arrow-left" className="w-4 h-4 text-[#050505]"></i>
          </div>
        </div>
      </div>

      
      <div  className="w-full bg-[#F5F5F7] rounded-[2rem] h-40 flex overflow-hidden shadow-[0_10px_30px_rgba(245,245,247,0.05)] cursor-pointer group hover:shadow-xl transition-all duration-500 reveal active:scale-[0.98] delay-200">
        <div className="w-[55%] p-6 flex flex-col justify-center relative">
          <h3 className="font-serif text-2xl text-[#050505] mb-1 relative z-10 group-hover:text-[#1C1C1E] transition-colors">{content.text_15}</h3>
          <p className="text-[9.5px] uppercase tracking-widest text-[#050505]/70 font-semibold whitespace-nowrap truncate relative z-10">{content.text_16}</p>
          <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-[#050505]/5 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-500">
            <i data-lucide="arrow-right" className="w-4 h-4 text-[#050505]"></i>
          </div>
        </div>
        <div className="w-[45%] h-full relative overflow-hidden bg-[#F5F5F7]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F7] via-[#F5F5F7]/40 to-transparent z-10"></div>
          <img id="img-duo4" src="" alt="Catálogo Apple" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 mix-blend-multiply opacity-90" />
        </div>
      </div>

    </section>

    
    <section className="px-8 mt-24 mb-12 reveal">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-[1px] bg-[#9E9EA0]/30"></div>
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9E9EA0]">{content.text_17}</h2>
      </div>
      <h2 className="font-serif text-4xl text-[#F5F5F7] mb-8 leading-tight">{content.text_18}&<br /><span className="italic text-[#9E9EA0]">{content.text_19}</span></h2>
      <div className="space-y-5 text-[14px] text-[#F5F5F7]/70 font-medium leading-relaxed text-justify relative">
        <i data-lucide="quote" className="absolute -top-4 -left-3 w-16 h-16 text-[#9E9EA0]/10 -z-10 rotate-180"></i>
        
        <p>
          A <strong className="font-bold text-[#F5F5F7]">{content.text_20}</strong>{content.text_21}</p>
        <p>{content.text_22}</p>
      </div>
    </section>

    
    <section className="px-5 mb-16 reveal-scale">
      <div className="w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 relative group bg-[#1C1C1E]">
        <img id="img-duo5" src="" alt="Sobre a Duo" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 opacity-90" loading="lazy" />
      </div>
    </section>

    
    <section className="py-8 relative z-10 border-t border-white/5 reveal">
      <div className="px-8 mb-8 text-center">
        <h2 className="text-3xl font-serif text-[#F5F5F7] mb-4">{content.text_23}</h2>
        <p className="text-sm text-[#9E9EA0] font-light leading-relaxed">{content.text_24}</p>
      </div>

      
      <div className="grid grid-cols-2 gap-3 px-6 pb-8">
        <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-xl border border-white/10 relative group reveal-scale">
          <img id="img-duo6" src="" alt="Cliente Duo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
        <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-xl border border-white/10 relative group reveal-scale delay-100">
          <img id="img-duo7" src="" alt="Aparelhos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
        <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-xl border border-white/10 relative group reveal-scale delay-200">
          <img id="img-duo8" src="" alt="Assistência" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
        <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-xl border border-white/10 relative group reveal-scale delay-300">
          <img id="img-duo9" src="" alt="Unboxing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
      </div>
    </section>

    
    <section className="px-6 py-12 relative z-10 reveal mb-10">
      <div className="bg-[#0a0a0a] p-6 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
        
        
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#9E9EA0] rounded-full filter blur-[80px] opacity-10 pointer-events-none"></div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-serif text-[#F5F5F7] mb-2">{content.text_25}</h2>
          <p className="text-[10px] uppercase tracking-widest text-[#9E9EA0] font-bold">{content.text_26}</p>
        </div>

        
        <div className="w-full h-64 rounded-[2rem] overflow-hidden border border-white/5 mb-6 bg-[#1C1C1E]">
          <iframe src="https://maps.google.com/maps?q=Shopping%20Avenida%2028,%20Campos%20dos%20Goytacazes&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
            <i data-lucide="map-pin" className="w-4 h-4 text-[#9E9EA0]"></i>
          </div>
          <div>
            <p className="text-sm font-medium text-[#F5F5F7]">{content.text_27}</p>
            <p className="text-xs text-[#F5F5F7]/60 mt-1">{content.text_28}</p>
          </div>
        </div>
      </div>
    </section>

    
    <section className="bg-white rounded-t-[3.5rem] pt-20 pb-8 px-6 reveal shadow-[0_-20px_50px_rgba(0,0,0,0.5)] relative">
      
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#050505]/10 rounded-full"></div>

      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl text-[#050505] mb-3">{content.text_29}</h2>
        <p className="text-[10px] uppercase tracking-widest text-[#050505]/60 font-bold">{content.text_30}</p>
      </div>

      <div className="space-y-3">
        
        
        <div className="faq-item border border-[#050505]/10 rounded-2xl bg-[#F5F5F7] overflow-hidden transition-all duration-300 hover:bg-gray-100 shadow-sm reveal delay-100">
          <button className="faq-button w-full px-5 py-4 flex items-center justify-between text-left">
            <span className="font-serif text-[17px] text-[#050505]">{content.text_31}</span>
            <div className="w-7 h-7 rounded-full bg-[#050505]/5 flex items-center justify-center shrink-0">
              <i data-lucide="chevron-down" className="w-4 h-4 text-[#050505] transition-transform duration-500 icon-arrow"></i>
            </div>
          </button>
          <div className="faq-content px-5">
            <p className="text-[12px] text-[#050505]/80 font-medium leading-relaxed pb-5 border-t border-[#050505]/10 pt-3">{content.text_32}</p>
          </div>
        </div>

        
        <div className="faq-item border border-[#050505]/10 rounded-2xl bg-[#F5F5F7] overflow-hidden transition-all duration-300 hover:bg-gray-100 shadow-sm reveal delay-200">
          <button className="faq-button w-full px-5 py-4 flex items-center justify-between text-left">
            <span className="font-serif text-[17px] text-[#050505]">{content.text_33}</span>
            <div className="w-7 h-7 rounded-full bg-[#050505]/5 flex items-center justify-center shrink-0">
              <i data-lucide="chevron-down" className="w-4 h-4 text-[#050505] transition-transform duration-500 icon-arrow"></i>
            </div>
          </button>
          <div className="faq-content px-5">
            <p className="text-[12px] text-[#050505]/80 font-medium leading-relaxed pb-5 border-t border-[#050505]/10 pt-3">{content.text_34}</p>
          </div>
        </div>

        
        <div className="faq-item border border-[#050505]/10 rounded-2xl bg-[#F5F5F7] overflow-hidden transition-all duration-300 hover:bg-gray-100 shadow-sm reveal delay-300">
          <button className="faq-button w-full px-5 py-4 flex items-center justify-between text-left">
            <span className="font-serif text-[17px] text-[#050505]">{content.text_35}</span>
            <div className="w-7 h-7 rounded-full bg-[#050505]/5 flex items-center justify-center shrink-0">
              <i data-lucide="chevron-down" className="w-4 h-4 text-[#050505] transition-transform duration-500 icon-arrow"></i>
            </div>
          </button>
          <div className="faq-content px-5">
            <p className="text-[12px] text-[#050505]/80 font-medium leading-relaxed pb-5 border-t border-[#050505]/10 pt-3">{content.text_36}</p>
          </div>
        </div>

      </div>

      
      <div className="text-center pt-12 pb-2">
        <a href="https://instagram.com/duo_importss" target="_blank" className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:scale-110 transition-transform duration-300 mb-6 shadow-xl shadow-pink-500/30">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <p className="text-[10px] font-bold tracking-widest uppercase text-[#050505]/50 mb-2">{content.text_37}</p>
        <p className="text-[8px] uppercase tracking-[0.3em] text-[#050505]/40 flex items-center justify-center gap-1">{content.text_38}<a href="https://verticy.site" target="_blank" className="text-[#050505] font-black text-[11px] tracking-widest hover:text-[#1C1C1E] transition-colors relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-px after:bg-[#050505]/30 hover:after:bg-[#1C1C1E]">{content.text_39}</a>
          <span className="text-[7px]">{content.text_40}</span>
        </p>
      </div>

    </section>

  </div>

  

    </div>
  );
}
