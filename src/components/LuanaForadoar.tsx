import React from "react";

export default function LuanaForadoar({ content }: { content: any }) {
  return (
    <div className="luana-foradoar-wrapper">
      

  
  <div className="max-w-md mx-auto bg-lens-black min-h-screen relative shadow-2xl overflow-hidden sm:border-x sm:border-white/5">
    
    
    <div className="camera-focus top-0 left-1/2 -translate-x-1/2"></div>

    
    <header className="relative pt-12 pb-6 px-6 text-center z-10 reveal active">
      
      
      <div className="inline-flex items-center gap-2 bg-lens-dark border border-white/5 px-3 py-1.5 rounded-full mb-6 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-lens-accent animate-pulse"></span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">{content.text_1}&{content.text_2}</span>
      </div>

      
      <div className="relative w-36 h-36 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full border-2 border-lens-accent/30 animate-[spin_10s_linear_infinite] border-t-lens-accent border-r-transparent border-b-transparent border-l-transparent"></div>
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-lens-black bg-lens-dark z-10 relative">
          
          <img id="img-perfil" src="" alt="Luana Pessanha" className="w-full h-full object-cover" loading="eager" fetchpriority="high" />
        </div>
      </div>

      
      <h1 className="font-display text-4xl font-black text-white tracking-tight mb-1">{content.text_3}</h1>
      <h2 className="text-xs font-bold text-lens-accent uppercase tracking-[0.3em] mb-4">{content.text_4}</h2>

      <p className="text-sm text-white/60 leading-relaxed max-w-xs mx-auto italic font-medium">{content.text_5}</p>
    </header>

    
    <section className="px-5 py-6 relative z-10 reveal">
      <div className="glass-card rounded-[2rem] p-6 shadow-xl border-t border-t-white/10 relative overflow-hidden">
        
        <i data-lucide="camera" className="absolute -right-4 -bottom-4 w-32 h-32 text-white/[0.02] -rotate-12"></i>
        
        <h3 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2">{content.text_6}</h3>
        <p className="text-[13px] text-white/80 leading-relaxed mb-4 font-medium">{content.text_7}</p>
        <p className="text-[11px] text-white/50 leading-relaxed">{content.text_8}</p>
      </div>
    </section>

    
    <section className="px-5 py-8 relative z-10 reveal">
      <div className="flex items-center justify-between mb-6 ml-2">
        <h2 className="font-display text-2xl font-bold text-white tracking-tight">{content.text_9}</h2>
      </div>

      <div className="space-y-3">
        
        
        <div  className="glass-card p-5 rounded-[1.5rem] flex items-center gap-4 cursor-pointer group hover:border-lens-accent/50 hover:bg-white/5 transition-all">
          <div className="w-12 h-12 rounded-xl bg-lens-black border border-white/10 flex items-center justify-center group-hover:text-lens-accent transition-colors shadow-inner">
            <i data-lucide="camera" className="w-6 h-6"></i>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-white mb-1">{content.text_10}</h4>
            <p className="text-[10px] text-white/50 leading-tight">{content.text_11}</p>
          </div>
          <i data-lucide="chevron-right" className="w-4 h-4 text-white/30 group-hover:text-lens-accent transition-transform group-hover:translate-x-1"></i>
        </div>

        
        <div  className="glass-card p-5 rounded-[1.5rem] flex items-center gap-4 cursor-pointer group hover:border-lens-accent/50 hover:bg-white/5 transition-all">
          <div className="w-12 h-12 rounded-xl bg-lens-black border border-white/10 flex items-center justify-center group-hover:text-lens-accent transition-colors shadow-inner">
            <i data-lucide="video" className="w-6 h-6"></i>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-white mb-1">{content.text_12}</h4>
            <p className="text-[10px] text-white/50 leading-tight">{content.text_13}</p>
          </div>
          <i data-lucide="chevron-right" className="w-4 h-4 text-white/30 group-hover:text-lens-accent transition-transform group-hover:translate-x-1"></i>
        </div>

        
        <div  className="glass-card p-5 rounded-[1.5rem] flex items-center gap-4 cursor-pointer group hover:border-lens-accent/50 hover:bg-white/5 transition-all">
          <div className="w-12 h-12 rounded-xl bg-lens-black border border-white/10 flex items-center justify-center group-hover:text-lens-accent transition-colors shadow-inner">
            <i data-lucide="smartphone" className="w-6 h-6"></i>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-white mb-1">{content.text_14}</h4>
            <p className="text-[10px] text-white/50 leading-tight">{content.text_15}</p>
          </div>
          <i data-lucide="chevron-right" className="w-4 h-4 text-white/30 group-hover:text-lens-accent transition-transform group-hover:translate-x-1"></i>
        </div>

      </div>
    </section>

    
    <section className="py-10 relative z-10 reveal bg-lens-dark border-y border-white/5">
      <div className="px-7 mb-6 flex justify-between items-end">
        <div>
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-lens-accent mb-1 block">{content.text_16}</span>
          <h2 className="font-display text-2xl font-bold text-white tracking-tight">{content.text_17}</h2>
        </div>
        <button  className="text-[10px] font-bold text-white/50 uppercase tracking-widest hover:text-white transition-colors border-b border-white/20 pb-0.5">{content.text_18}</button>
      </div>

      
      <div className="flex overflow-x-auto gap-4 px-6 hide-scrollbar snap-x pb-4">
        
        
        <div className="snap-center shrink-0 w-56 h-80 rounded-[2rem] overflow-hidden relative shadow-xl border border-white/5 group">
          <img id="img-port-1" src="" alt="Fotografia de Show" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-lens-black via-transparent to-transparent flex flex-col justify-end p-5">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2">
               <i data-lucide="music" className="w-4 h-4 text-white"></i>
            </div>
            <p className="text-sm font-bold text-white tracking-wide">{content.text_19}&{content.text_20}</p>
          </div>
        </div>

        
        <div className="snap-center shrink-0 w-56 h-80 rounded-[2rem] overflow-hidden relative shadow-xl border border-white/5 group">
          <img id="img-port-2" src="" alt="Fotografia Esportiva" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-lens-black via-transparent to-transparent flex flex-col justify-end p-5">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2">
               <i data-lucide="activity" className="w-4 h-4 text-white"></i>
            </div>
            <p className="text-sm font-bold text-white tracking-wide">{content.text_21}</p>
          </div>
        </div>

        
        <div className="snap-center shrink-0 w-56 h-80 rounded-[2rem] overflow-hidden relative shadow-xl border border-white/5 group">
          <img id="img-port-3" src="" alt="Ensaios Lifestyle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-lens-black via-transparent to-transparent flex flex-col justify-end p-5">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2">
               <i data-lucide="user" className="w-4 h-4 text-white"></i>
            </div>
            <p className="text-sm font-bold text-white tracking-wide">{content.text_22}&{content.text_23}</p>
          </div>
        </div>

      </div>
    </section>

    
    <section className="px-6 pt-16 pb-24 relative z-10 reveal text-center">
      
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lens-dark border border-white/10 mb-6 shadow-lg">
        <i data-lucide="map-pin" className="w-6 h-6 text-lens-accent"></i>
      </div>

      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2">{content.text_24}</h2>
      <p className="font-display text-xl font-bold text-white mb-10">{content.text_25}</p>

      <div className="space-y-3">
        
        <button  className="w-full bg-white hover:bg-white/90 text-lens-black py-5 rounded-2xl font-bold text-[13px] uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95">
          <i data-lucide="message-circle" className="w-5 h-5"></i>{content.text_26}</button>

        
        <button  className="w-full bg-lens-dark border border-white/10 hover:bg-white/5 text-white py-5 rounded-2xl font-bold text-[13px] uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-3 active:scale-95">
          <i data-lucide="mail" className="w-5 h-5 text-white/50"></i>{content.text_27}</button>

        
        <button  className="w-full bg-transparent text-white/50 hover:text-white py-4 rounded-2xl font-bold text-[11px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 mt-2">
          <i data-lucide="instagram" className="w-4 h-4"></i>{content.text_28}</button>
      </div>

      
      <div className="mt-16 pt-8 border-t border-white/5">
        <p className="text-[9px] uppercase tracking-[0.4em] text-white/30 mb-2">{content.text_29}</p>
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">{content.text_30}<strong className="text-white tracking-[0.2em] font-bold">{content.text_31}</strong>{content.text_32}</p>
      </div>
    </section>

  </div>

  

    </div>
  );
}
