import React from "react";
import "@/assets/css/dudu.css";

export default function Dudu({ content }: { content: any }) {
  return (
    <div className="dudu-wrapper template-dudu bg-brand-black text-gray-200 overflow-x-hidden selection:bg-brand-orange selection:text-white pb-20 min-h-screen">
      

  
  
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap');
      `}</style>
<div className="max-w-md mx-auto bg-brand-black min-h-screen relative shadow-2xl overflow-hidden sm:border-x sm:border-brand-border">
    
    
    <div className="absolute top-0 left-0 w-full h-[400px] bg-brand-orange/20 mix-blend-overlay filter blur-[120px] pointer-events-none"></div>

    
    <header className="relative pt-12 pb-8 px-6 text-center z-10 reveal active">
      
      
      <div className="inline-flex items-center gap-2 bg-brand-dark border border-brand-orange/30 px-3 py-1.5 rounded-full mb-6 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
        <i data-lucide="flame" className="w-3.5 h-3.5 text-brand-orange animate-pulse"></i>
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange">{content.text_1}</span>
      </div>

      
      <div className="relative w-36 h-36 mx-auto mb-6">
        
        <div className="absolute inset-0 rounded-full border-2 border-brand-orange/30 animate-[spin_10s_linear_infinite] border-t-brand-orange border-r-transparent border-b-transparent border-l-transparent"></div>
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-brand-black bg-brand-dark z-10 relative">
          
          <img id="img-perfil" src="" alt="" className="w-full h-full object-cover" loading="eager" fetchpriority="high" />
        </div>
        
        <div className="absolute bottom-1 right-1 bg-brand-black p-2 rounded-full border border-brand-border z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-brand-yellow">
            <path d="M3 12a9 9 0 0 1 18 0H3z"></path>
            <rect x="3" y="14" width="18" height="3" rx="1"></rect>
            <path d="M4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2H4v2z"></path>
          </svg>
        </div>
      </div>

      
      <h1 className="font-display text-4xl font-bold text-white tracking-wide uppercase mb-1">{content.text_2}</h1>
      <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{content.text_3}</h2>

      <p className="text-sm text-gray-300 leading-relaxed max-w-[90%] mx-auto font-medium">{content.text_4}<strong className="text-white">{content.text_5}</strong>{content.text_6}</p>
    </header>

    
    <section className="px-5 py-4 relative z-10 reveal">
      <div className="grid grid-cols-2 gap-3">
        
        <div className="bg-brand-dark border border-brand-border rounded-2xl p-4 text-center">
          <p className="font-display text-2xl font-bold text-brand-orange mb-1">{content.text_7}</p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">{content.text_8}</p>
        </div>
        
        <div className="bg-brand-dark border border-brand-border rounded-2xl p-4 text-center">
          <p className="font-display text-2xl font-bold text-brand-yellow mb-1">{content.text_9}</p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">{content.text_10}</p>
        </div>
      </div>
    </section>

    
    <section className="px-5 py-8 relative z-10 reveal">
      <h3 className="font-display text-xl text-white uppercase tracking-wider mb-4 ml-1">{content.text_11}</h3>

      <div className="space-y-3">
        
        
        <button  className="w-full fire-gradient p-[1px] rounded-2xl group transition-transform active:scale-95 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
          <div className="bg-brand-black w-full h-full rounded-[15px] p-4 flex items-center justify-between group-hover:bg-transparent transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <i data-lucide="rocket" className="w-5 h-5 text-brand-orange group-hover:text-white"></i>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white text-sm group-hover:text-white">{content.text_12}</h4>
                <p className="text-[10px] text-brand-orange group-hover:text-white/80 uppercase tracking-widest mt-0.5">{content.text_13}</p>
              </div>
            </div>
            <i data-lucide="chevron-right" className="w-5 h-5 text-brand-orange group-hover:text-white"></i>
          </div>
        </button>

        
        <button  className="w-full bg-brand-dark hover:bg-brand-border border border-brand-border p-4 rounded-2xl flex items-center justify-between transition-all active:scale-95 group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <i data-lucide="trending-up" className="w-5 h-5 text-gray-300 group-hover:text-brand-yellow"></i>
            </div>
            <div className="text-left">
              <h4 className="font-bold text-white text-sm">{content.text_14}</h4>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">{content.text_15}</p>
            </div>
          </div>
          <i data-lucide="arrow-up-right" className="w-4 h-4 text-gray-500 group-hover:text-white"></i>
        </button>

        
        <button  className="w-full bg-brand-dark hover:bg-brand-border border border-brand-border p-4 rounded-2xl flex items-center justify-between transition-all active:scale-95 group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20">
              <i data-lucide="users" className="w-5 h-5 text-[#25D366]"></i>
            </div>
            <div className="text-left">
              <h4 className="font-bold text-white text-sm">{content.text_16}</h4>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">{content.text_17}</p>
            </div>
          </div>
          <i data-lucide="arrow-up-right" className="w-4 h-4 text-gray-500 group-hover:text-white"></i>
        </button>

      </div>
    </section>

    
    <section className="py-8 relative z-10 bg-brand-dark/50 border-y border-brand-border reveal mt-4">
      <div className="px-6 mb-6 flex justify-between items-end">
        <div>
          <h2 className="font-display text-2xl font-bold text-white tracking-wide uppercase">{content.text_18}</h2>
          <p className="text-xs text-gray-400 mt-1">{content.text_19}</p>
        </div>
        <button  className="text-[10px] font-bold text-brand-orange uppercase tracking-widest hover:text-white transition-colors border-b border-brand-orange/30 pb-0.5 mb-1">{content.text_20}</button>
      </div>

      
      <div className="flex overflow-x-auto gap-4 px-6 hide-scrollbar snap-x pb-4">
        
        
        <div className="snap-center shrink-0 w-52 h-72 rounded-[1.5rem] overflow-hidden relative shadow-xl border border-brand-border group cursor-pointer" >
          <img id="img-conteudo-1" src="" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent flex flex-col justify-end p-4">
            <div className="w-8 h-8 rounded-full bg-brand-orange/90 backdrop-blur-sm flex items-center justify-center mb-3">
               <i data-lucide="play" className="w-4 h-4 text-white ml-0.5"></i>
            </div>
            <p className="text-sm font-bold text-white leading-tight">{content.text_21}</p>
            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">{content.text_22}</p>
          </div>
        </div>

        
        <div className="snap-center shrink-0 w-52 h-72 rounded-[1.5rem] overflow-hidden relative shadow-xl border border-brand-border group cursor-pointer" >
          <img id="img-conteudo-2" src="" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent flex flex-col justify-end p-4">
            <div className="w-8 h-8 rounded-full bg-brand-orange/90 backdrop-blur-sm flex items-center justify-center mb-3">
               <i data-lucide="play" className="w-4 h-4 text-white ml-0.5"></i>
            </div>
            <p className="text-sm font-bold text-white leading-tight">{content.text_23}</p>
            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">{content.text_24}</p>
          </div>
        </div>

        
        <div className="snap-center shrink-0 w-52 h-72 rounded-[1.5rem] overflow-hidden relative shadow-xl border border-brand-border group cursor-pointer" >
          <img id="img-conteudo-3" src="" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent flex flex-col justify-end p-4">
            <div className="w-8 h-8 rounded-full bg-brand-orange/90 backdrop-blur-sm flex items-center justify-center mb-3">
               <i data-lucide="play" className="w-4 h-4 text-white ml-0.5"></i>
            </div>
            <p className="text-sm font-bold text-white leading-tight">{content.text_25}</p>
            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">{content.text_26}</p>
          </div>
        </div>

      </div>
    </section>

    
    <section className="px-6 pt-12 pb-12 relative z-10 text-center reveal">
      
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-dark border border-brand-border mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 text-brand-orange">
          <path d="M3 12a9 9 0 0 1 18 0H3z"></path>
          <rect x="3" y="14" width="18" height="3" rx="1"></rect>
          <path d="M4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2H4v2z"></path>
        </svg>
      </div>

      <h2 className="text-xl font-display font-bold text-white uppercase tracking-wide mb-6">{content.text_27}</h2>

      <div className="flex justify-center gap-4 mb-10">
        
        <button  className="w-14 h-14 rounded-full bg-brand-dark border border-brand-orange/40 flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white hover:scale-110 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </button>
        
        
        <button  className="w-14 h-14 rounded-full bg-brand-dark border border-brand-orange/40 flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white hover:scale-110 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
          </svg>
        </button>
        
        
        <button  className="w-14 h-14 rounded-full bg-brand-dark border border-brand-orange/40 flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white hover:scale-110 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </button>
      </div>

      <div className="pt-8 border-t border-brand-border">
        <p className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-2">{content.text_28}</p>
        <p className="text-[9px] uppercase tracking-[0.3em] text-gray-500 flex items-center justify-center gap-1">{content.text_29}<strong className="text-white tracking-[0.2em] font-bold">{content.text_30}</strong>{content.text_31}</p>
      </div>
    </section>

  </div>

  

    </div>
  );
}
