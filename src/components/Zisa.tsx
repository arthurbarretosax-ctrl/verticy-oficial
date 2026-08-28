import React from "react";
import "@/assets/css/zisa.css";

export default function Zisa({ content }: { content: any }) {
  return (
    <div className="zisa-wrapper template-zisa">
      <div className="relative overflow-x-hidden overflow-x-hidden selection:bg-[#B8B0C8] selection:text-[#050507] pb-0 bg-[#050507]">
      

  
  
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
      `}</style>
<div className="max-w-md mx-auto min-h-screen relative shadow-2xl bg-[#050507] sm:border-x sm:border-white/10 overflow-hidden flex flex-col">
    
    
    <div className="bg-noise mix-blend-overlay"></div>

    
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#67E8F9] rounded-full mix-blend-overlay filter blur-[120px] opacity-15 pointer-events-none animate-float"></div>
    <div className="absolute top-[45%] left-0 w-80 h-80 bg-[#8B5CF6] rounded-full mix-blend-overlay filter blur-[140px] opacity-20 pointer-events-none animate-float-delayed"></div>
    <div className="absolute bottom-[10%] right-0 w-72 h-72 bg-[#D8B4FE] rounded-full mix-blend-overlay filter blur-[100px] opacity-10 pointer-events-none animate-float"></div>

    
    <header className="absolute top-0 left-0 w-full z-50 flex justify-start items-center px-6 py-6 text-[#F4F2F7]">
      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] bg-[#050507]/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-sm">{content.text_1}</span>
    </header>

    
    <section className="relative w-full h-[70vh] rounded-b-[3rem] overflow-hidden shadow-sm reveal active group border-b border-white/5">
      
      <div className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <img id="img-zisa1" src="" alt="ZiSa Coleção Boreal" className="w-full h-full object-cover object-center animate-ken-burns parallax-bg" loading="eager" fetchpriority="high" />
      </div>
      
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/40 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#050507] via-[#050507]/90 to-transparent"></div>

      
      <div className="absolute bottom-10 left-0 w-full flex justify-center px-6 transform transition-transform duration-700 group-hover:-translate-y-2">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent blur-2xl w-40 h-40 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"></div>
        
        
        <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-[#67E8F9] via-[#8B5CF6] to-[#D8B4FE] p-[2px] shadow-2xl z-10">
          
          <div className="w-full h-full rounded-full overflow-hidden bg-[#050507] border-[3px] border-[#050507]">
            <img id="img-logo-topo" src="" alt="ZiSa Logo" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    
    <div className="w-full overflow-hidden border-b border-white/5 py-3 relative z-20 bg-[#050507]/80 backdrop-blur-md">
      <div className="animate-marquee flex gap-8 items-center text-[#F4F2F7]">
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{content.text_2}</span>
        <span className="text-[10px] text-[#B8B0C8]">•</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] italic">{content.text_3}</span>
        <span className="text-[10px] text-[#B8B0C8]">•</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{content.text_4}</span>
        <span className="text-[10px] text-[#B8B0C8]">•</span>
        
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{content.text_5}</span>
        <span className="text-[10px] text-[#B8B0C8]">•</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] italic">{content.text_6}</span>
        <span className="text-[10px] text-[#B8B0C8]">•</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{content.text_7}</span>
        <span className="text-[10px] text-[#B8B0C8]">•</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{content.text_8}</span>
        <span className="text-[10px] text-[#B8B0C8]">•</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] italic">{content.text_9}</span>
        <span className="text-[10px] text-[#B8B0C8]">•</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{content.text_10}</span>
      </div>
    </div>

    
    <section className="px-5 mt-10 space-y-4 relative z-20">
      
      
      <div  className="w-full bg-[#F4F2F7] rounded-[2rem] h-40 flex overflow-hidden shadow-[0_10px_30px_rgba(244,242,247,0.05)] cursor-pointer group hover:shadow-xl transition-all duration-500 reveal active:scale-[0.98]">
        <div className="w-[55%] p-6 flex flex-col justify-center relative">
          <h3 className="font-serif text-2xl text-[#050507] mb-2 relative z-10 group-hover:text-[#6D28D9] transition-colors">{content.text_11}</h3>
          <p className="text-[10px] uppercase tracking-widest text-[#050507]/70 font-semibold whitespace-nowrap truncate relative z-10">{content.text_12}</p>
          <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-[#050507]/5 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-500">
            <i data-lucide="arrow-right" className="w-4 h-4 text-[#050507]"></i>
          </div>
        </div>
        <div className="w-[45%] h-full relative overflow-hidden bg-[#F4F2F7]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F2F7] via-[#F4F2F7]/40 to-transparent z-10"></div>
          <img id="img-zisa2" src="" alt="Comprar Online" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" />
        </div>
      </div>

      
      <div  className="w-full bg-[#B8B0C8] rounded-[2rem] h-40 flex overflow-hidden shadow-[0_10px_30px_rgba(184,176,200,0.05)] cursor-pointer group hover:shadow-xl transition-all duration-500 reveal active:scale-[0.98] delay-100">
        <div className="w-[45%] h-full relative overflow-hidden bg-[#B8B0C8]">
          <div className="absolute inset-0 bg-gradient-to-l from-[#B8B0C8] via-[#B8B0C8]/40 to-transparent z-10"></div>
          <img id="img-zisa6" src="" alt="Agendar Showroom" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" />
        </div>
        <div className="w-[55%] p-6 flex flex-col justify-center items-end text-right relative">
          <h3 className="font-serif text-2xl text-[#050507] mb-2 relative z-10 group-hover:text-[#6D28D9] transition-colors">{content.text_13}</h3>
          <p className="text-[10px] uppercase tracking-widest text-[#050507]/70 font-semibold whitespace-nowrap truncate relative z-10">{content.text_14}</p>
          <div className="absolute bottom-5 left-5 w-8 h-8 rounded-full bg-[#050507]/5 flex items-center justify-center group-hover:-translate-x-2 transition-transform duration-500">
            <i data-lucide="arrow-left" className="w-4 h-4 text-[#050507]"></i>
          </div>
        </div>
      </div>

      
      <div  className="w-full bg-[#F4F2F7] rounded-[2rem] h-40 flex overflow-hidden shadow-[0_10px_30px_rgba(244,242,247,0.05)] cursor-pointer group hover:shadow-xl transition-all duration-500 reveal active:scale-[0.98] delay-200">
        <div className="w-[55%] p-6 flex flex-col justify-center relative">
          <h3 className="font-serif text-2xl text-[#050507] mb-2 relative z-10 group-hover:text-[#6D28D9] transition-colors">{content.text_15}</h3>
          <p className="text-[10px] uppercase tracking-widest text-[#050507]/70 font-semibold whitespace-nowrap truncate relative z-10">{content.text_16}</p>
          <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-[#050507]/5 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-500">
            <i data-lucide="arrow-right" className="w-4 h-4 text-[#050507]"></i>
          </div>
        </div>
        <div className="w-[45%] h-full relative overflow-hidden bg-[#F4F2F7]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F2F7] via-[#F4F2F7]/40 to-transparent z-10"></div>
          <img id="img-zisa4" src="" alt="Instagram ZiSa" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" />
        </div>
      </div>

    </section>

    
    <section className="px-8 mt-24 mb-12 reveal">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-[1px] bg-[#B8B0C8]/30"></div>
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B8B0C8]">{content.text_17}</h2>
      </div>
      <h2 className="font-serif text-4xl text-[#F4F2F7] mb-8 leading-tight">{content.text_18}<br /><span className="italic text-[#B8B0C8]">{content.text_19}</span></h2>
      <div className="space-y-5 text-[14px] text-[#F4F2F7]/70 font-medium leading-relaxed text-justify relative">
        
        <i data-lucide="quote" className="absolute -top-4 -left-3 w-16 h-16 text-[#B8B0C8]/10 -z-10 rotate-180"></i>
        
        <p>{content.text_20}<strong className="font-bold text-[#F4F2F7]">{content.text_21}</strong>{content.text_22}</p>
        <p>{content.text_23}<strong className="text-[#B8B0C8] italic">{content.text_24}</strong>{content.text_25}</p>
      </div>
    </section>

    
    <section className="px-5 mb-16 reveal-scale">
      <div className="w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 relative group bg-[#050507]">
        <img id="img-zisa5" src="" alt="Sobre a ZiSa" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 opacity-90" loading="lazy" />
      </div>
    </section>

    
    <section className="py-8 relative z-10 border-t border-white/5 reveal">
      <div className="px-8 mb-8 text-center">
        <h2 className="text-3xl font-serif text-[#F4F2F7] mb-4">{content.text_26}</h2>
        <p className="text-sm text-[#B8B0C8] font-light leading-relaxed">{content.text_27}</p>
      </div>

      
      <div className="grid grid-cols-2 gap-3 px-6 pb-8">
        <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-xl border border-white/10 relative group reveal-scale">
          <img id="img-zisa7" src="" alt="Look ZiSa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
        <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-xl border border-white/10 relative group reveal-scale delay-100">
          <img id="img-zisa8" src="" alt="Look ZiSa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
        <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-xl border border-white/10 relative group reveal-scale delay-200">
          <img id="img-zisa9" src="" alt="Look ZiSa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
        <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-xl border border-white/10 relative group reveal-scale delay-300">
          <img id="img-zisa10" src="" alt="Look ZiSa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
      </div>
    </section>

    
    <section className="px-6 py-12 relative z-10 reveal mb-10">
      <div className="bg-[#0a0a0e] p-6 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
        
        
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#B8B0C8] rounded-full filter blur-[80px] opacity-10 pointer-events-none"></div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-serif text-[#F4F2F7] mb-2">{content.text_28}</h2>
          <p className="text-[10px] uppercase tracking-widest text-[#B8B0C8] font-bold">{content.text_29}</p>
        </div>

        
        <div className="w-full h-64 rounded-[2rem] overflow-hidden border border-white/5 mb-6 bg-[#050507]">
          <iframe src="https://maps.google.com/maps?q=Parque%20São%20Caetano,%20Campos%20dos%20Goytacazes&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
            <i data-lucide="map-pin" className="w-4 h-4 text-[#B8B0C8]"></i>
          </div>
          <div>
            <p className="text-sm font-medium text-[#F4F2F7]">{content.text_30}</p>
            <p className="text-xs text-[#F4F2F7]/60 mt-1">{content.text_31}</p>
            <p className="text-[10px] font-bold text-[#B8B0C8] uppercase tracking-wider mt-4">{content.text_32}</p>
          </div>
        </div>
      </div>
    </section>

    
    <section className="bg-white rounded-t-[3.5rem] pt-20 pb-8 px-6 reveal shadow-[0_-20px_50px_rgba(0,0,0,0.3)] relative">
      
      
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-200 rounded-full"></div>

      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl text-gray-900 mb-3">{content.text_33}</h2>
        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{content.text_34}</p>
      </div>

      <div className="space-y-3">
        
        
        <div className="faq-item border border-gray-100 rounded-2xl bg-gray-50 overflow-hidden transition-all duration-300 hover:bg-gray-100 shadow-sm reveal delay-100">
          <button className="faq-button w-full px-5 py-4 flex items-center justify-between text-left">
            <span className="font-serif text-[17px] text-gray-900">{content.text_35}</span>
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200">
              <i data-lucide="chevron-down" className="w-4 h-4 text-gray-600 transition-transform duration-500 icon-arrow"></i>
            </div>
          </button>
          <div className="faq-content px-5">
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed pb-5 border-t border-gray-200 pt-3">{content.text_36}<strong>{content.text_37}</strong>{content.text_38}</p>
          </div>
        </div>

        
        <div className="faq-item border border-gray-100 rounded-2xl bg-gray-50 overflow-hidden transition-all duration-300 hover:bg-gray-100 shadow-sm reveal delay-200">
          <button className="faq-button w-full px-5 py-4 flex items-center justify-between text-left">
            <span className="font-serif text-[17px] text-gray-900">{content.text_39}</span>
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200">
              <i data-lucide="chevron-down" className="w-4 h-4 text-gray-600 transition-transform duration-500 icon-arrow"></i>
            </div>
          </button>
          <div className="faq-content px-5">
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed pb-5 border-t border-gray-200 pt-3">{content.text_40}</p>
          </div>
        </div>

        
        <div className="faq-item border border-gray-100 rounded-2xl bg-gray-50 overflow-hidden transition-all duration-300 hover:bg-gray-100 shadow-sm reveal delay-300">
          <button className="faq-button w-full px-5 py-4 flex items-center justify-between text-left">
            <span className="font-serif text-[17px] text-gray-900">{content.text_41}</span>
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200">
              <i data-lucide="chevron-down" className="w-4 h-4 text-gray-600 transition-transform duration-500 icon-arrow"></i>
            </div>
          </button>
          <div className="faq-content px-5">
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed pb-5 border-t border-gray-200 pt-3">{content.text_42}</p>
          </div>
        </div>

      </div>

      
      <div className="text-center pt-12 pb-2">
        <a href="https://instagram.com/zisa.loja" target="_blank" className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:scale-110 transition-transform duration-300 mb-6 shadow-xl shadow-pink-500/30">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">{content.text_43}</p>
        <p className="text-[8px] uppercase tracking-[0.3em] text-gray-400 flex items-center justify-center gap-1">{content.text_44}<a href="https://verticy.site" target="_blank" className="text-gray-900 font-black text-[11px] tracking-widest hover:text-[#6D28D9] transition-colors relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-px after:bg-gray-400 hover:after:bg-[#6D28D9]">{content.text_45}</a>
          <span className="text-[7px]">{content.text_46}</span>
        </p>
      </div>

    </section>

  </div>

  

    </div>
    </div>
  );
}
