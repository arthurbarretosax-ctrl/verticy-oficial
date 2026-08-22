import React from "react";

export default function CristianaPsi({ content }: { content: any }) {
  return (
    <div className="cristiana.psi-wrapper">
      

  <div className="bg-grain"></div>

  
  <div className="max-w-[450px] mx-auto min-h-screen relative bg-psi-black shadow-2xl flex flex-col sm:border-x sm:border-white/5 overflow-hidden">
    
    
    <header className="relative w-full h-[95vh] overflow-hidden flex flex-col items-center">
      
      
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 animate-logo">
        <div className="w-20 h-20 rounded-full bg-psi-black/40 backdrop-blur-md p-1.5 border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
           
           <img id="img-logo" src={content.img_1} alt="Logo" className="w-full h-full object-contain rounded-full"  />
           
           <i data-lucide="sparkles" className="w-8 h-8 text-psi-accent absolute opacity-20 pointer-events-none"></i>
        </div>
      </div>

      
      <div className="absolute inset-0 z-0">
        <img id="img-hero" src={content.img_2} alt="Dra. Cristiana Inafuku" className="w-full h-full object-cover animate-zoom" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-psi-black/60 via-transparent to-psi-black"></div>
      </div>

      
      <div className="absolute top-[32%] left-0 w-full text-center z-10 pointer-events-none px-4">
        <h2 className="text-stroke text-[6.5rem] font-serif font-black leading-none uppercase tracking-tighter opacity-40">{content.text_1}</h2>
        <h1 className="text-6xl font-serif font-bold text-white leading-none tracking-tighter drop-shadow-2xl -mt-6">{content.text_2}</h1>
        <p className="text-[10px] font-bold text-psi-accent uppercase tracking-[0.6em] mt-8 italic">{content.text_3}</p>
      </div>

      
      <div className="absolute bottom-20 left-0 w-full px-10 z-20 reveal active">
        <button  className="w-full bg-white text-psi-black py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-[0_20px_50px_rgba(255,255,255,0.15)] active:scale-95 transition-all">{content.text_4}</button>
      </div>

      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30">
        <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent mx-auto"></div>
      </div>
    </header>

    
    <div className="w-full overflow-hidden border-y border-white/5 py-4 relative z-30 bg-psi-dark/80 backdrop-blur-md">
      <div className="animate-marquee flex gap-12 items-center text-white/30 italic font-medium">
        <span className="text-[11px] font-bold uppercase tracking-[0.4em]">{content.text_5}</span>
        <span className="text-psi-accent">•</span>
        <span className="text-[11px] font-bold uppercase tracking-[0.4em]">{content.text_6}</span>
        <span className="text-psi-accent">•</span>
        <span className="text-[11px] font-bold uppercase tracking-[0.4em]">{content.text_7}</span>
        <span className="text-psi-accent">•</span>
        
        <span className="text-[11px] font-bold uppercase tracking-[0.4em]">{content.text_8}</span>
        <span className="text-psi-accent">•</span>
      </div>
    </div>

    
    <section className="px-6 py-20 reveal">
      <div className="text-center mb-12 px-4">
        <h3 className="text-[10px] font-bold text-psi-accent uppercase tracking-[0.5em] mb-4">{content.text_9}</h3>
        <h2 className="font-serif text-4xl text-white italic">{content.text_10}<br /><span className="text-white not-italic font-black uppercase tracking-tighter">{content.text_11}</span></h2>
      </div>

      <div id="quiz-container" className="glass-premium p-10 rounded-[3rem] relative min-h-[420px] flex flex-col justify-center overflow-hidden">
        <div id="quiz-start" className="text-center">
          <div className="w-20 h-20 bg-psi-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-psi-accent/20">
             <i data-lucide="brain-circuit" className="w-10 h-10 text-psi-accent"></i>
          </div>
          <p className="text-sm text-slate-400 mb-10 leading-relaxed font-medium">{content.text_12}</p>
          <button  className="w-full border border-psi-accent text-psi-accent py-4 rounded-2xl font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-psi-accent hover:text-white transition-all active:scale-95">{content.text_13}</button>
        </div>

        <div id="quiz-steps" className="hidden flex-col h-full">
           <div className="mb-10">
              <span id="quiz-progress" className="text-[10px] font-black text-psi-accent uppercase tracking-widest">{content.text_14}</span>
              <div className="w-full h-1 bg-white/5 rounded-full mt-2 overflow-hidden">
                <div id="quiz-bar" className="w-[33%] h-full bg-psi-accent transition-all duration-500"></div>
              </div>
           </div>
           <h4 id="quiz-question" className="font-serif text-2xl text-white mb-10 leading-tight">{content.text_15}</h4>
           <div className="space-y-3" id="quiz-options">
              <button  className="w-full border border-white/10 p-5 rounded-2xl text-xs font-medium text-left flex items-center justify-between group active:bg-psi-accent transition-all">{content.text_16}<i data-lucide="chevron-right" className="w-4 h-4 opacity-30"></i></button>
              <button  className="w-full border border-white/10 p-5 rounded-2xl text-xs font-medium text-left flex items-center justify-between group active:bg-psi-accent transition-all">{content.text_17}<i data-lucide="chevron-right" className="w-4 h-4 opacity-30"></i></button>
              <button  className="w-full border border-white/10 p-5 rounded-2xl text-xs font-medium text-left flex items-center justify-between group active:bg-psi-accent transition-all">{content.text_18}<i data-lucide="chevron-right" className="w-4 h-4 opacity-30"></i></button>
           </div>
        </div>

        <div id="quiz-result" className="hidden text-center py-6">
           <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 bg-psi-primary/20">
             <i data-lucide="heart-handshake" className="w-10 h-10 text-psi-accent"></i>
           </div>
           <h3 className="font-serif text-3xl text-white mb-4">{content.text_19}</h3>
           <p className="text-sm text-slate-400 leading-relaxed mb-10 font-medium">{content.text_20}</p>
           <button  className="w-full bg-white text-psi-black py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all">{content.text_21}</button>
        </div>
      </div>
    </section>

    
    <section className="px-6 py-12 reveal">
      <div className="glass-premium rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl relative group bg-gradient-to-br from-psi-dark to-psi-black">
        <div className="h-[32rem] relative overflow-hidden">
          <img id="img-sobre" src={content.img_3} alt="Consultório Cristiana Inafuku" className="w-full h-full object-cover img-color-reveal" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-psi-black via-psi-black/20 to-transparent"></div>
        </div>
        <div className="p-10 pt-8 relative z-10 text-center mx-auto">
          <h2 className="font-serif text-4xl font-black text-white italic uppercase tracking-tighter leading-none mb-6">{content.text_22}<br /><span className="text-psi-accent">{content.text_23}</span></h2>
          <div className="space-y-6 text-sm text-slate-400 leading-relaxed font-medium">
            <p>{content.text_24}</p>
            <p>{content.text_25}<strong className="text-white">{content.text_26}</strong>{content.text_27}</p>
          </div>
          <div className="mt-10 pt-8 border-t border-white/5">
             <div className="flex flex-wrap justify-center gap-2">
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-psi-accent italic">{content.text_28}</span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-psi-accent italic">{content.text_29}&{content.text_30}</span>
             </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="px-6 py-20 bg-psi-dark/20 border-y border-white/5 reveal">
      <div className="text-center mb-16">
        <h2 className="font-display text-2xl uppercase tracking-widest leading-none">{content.text_31}<br /><span className="text-psi-accent italic">{content.text_32}</span></h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="glass-premium p-6 rounded-[2.5rem] flex flex-col justify-between h-44 relative overflow-hidden">
           <i data-lucide="home" className="w-7 h-7 text-psi-accent"></i>
           <div>
             <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">{content.text_33}</h4>
             <p className="text-[10px] text-slate-500 leading-tight">{content.text_34}</p>
           </div>
        </div>
        <div className="glass-premium p-6 rounded-[2.5rem] flex flex-col justify-between h-44 border-t-2 border-t-psi-accent/20">
           <i data-lucide="clock" className="w-7 h-7 text-psi-accent"></i>
           <div>
             <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">{content.text_35}</h4>
             <p className="text-[10px] text-slate-500 leading-tight">{content.text_36}</p>
           </div>
        </div>
        <div className="glass-premium p-6 rounded-[2.5rem] col-span-2 flex items-center gap-6 border-l-4 border-l-psi-accent">
           <div className="w-14 h-14 rounded-2xl bg-psi-accent/10 flex items-center justify-center shrink-0 border border-psi-accent/20">
             <i data-lucide="repeat" className="w-7 h-7 text-psi-accent"></i>
           </div>
           <div>
             <h4 className="text-sm font-bold text-white uppercase tracking-widest">{content.text_37}</h4>
             <p className="text-[11px] text-slate-400">{content.text_38}</p>
           </div>
        </div>
      </div>
    </section>

    
    <section className="px-10 py-32 text-center reveal relative overflow-hidden">
       <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]"><i data-lucide="quote" className="w-80 h-80 text-white"></i></div>
       <h3 className="font-serif text-[2.2rem] text-white leading-tight italic drop-shadow-xl relative z-10">{content.text_39}<br /><span className="text-psi-accent not-italic font-black uppercase tracking-tighter text-3xl">{content.text_40}</span>
       </h3>
       <p className="text-[10px] font-black uppercase tracking-[0.5em] text-psi-accent mt-12 opacity-60">{content.text_41}</p>
    </section>

    
    <footer className="mt-auto px-8 pt-16 pb-24 bg-psi-dark/40 border-t border-white/5 text-center reveal">
      <h3 className="font-display text-2xl mb-12 tracking-tighter uppercase leading-none italic text-center mx-auto">{content.text_42}<br /><span className="text-psi-accent opacity-60 font-black">{content.text_43}</span></h3>
      <div className="space-y-4 max-w-xs mx-auto mb-16">
        <button  className="w-full bg-white text-psi-black py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-xl active:scale-[0.97] transition-all flex items-center justify-center gap-3">
          <i data-lucide="message-circle" className="w-5 h-5"></i>{content.text_44}</button>
        <button  className="w-full glass-premium border border-white/10 text-white py-5 rounded-full font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 active:bg-white/10 transition-all">
          <i data-lucide="instagram" className="w-5 h-5 text-pink-500"></i>{content.text_45}</button>
      </div>
      <div className="mt-24 pt-10 border-t border-white/5 opacity-10 text-center mx-auto">
        <p className="text-[8px] font-bold uppercase tracking-[0.5em] mb-4">{content.text_46}</p>
        <p className="text-[8px] uppercase tracking-[0.4em]">{content.text_47}<strong className="text-white tracking-[0.2em] font-black uppercase text-center mx-auto">{content.text_48}</strong>{content.text_49}</p>
      </div>
    </footer>

    
    <a href="https://wa.me/5512976045978" target="_blank" className="fixed bottom-8 right-6 w-16 h-16 bg-[#25D366] rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.4)] flex items-center justify-center z-50 animate-bounce active:scale-90 transition-transform">
      <i data-lucide="message-circle" className="w-8 h-8 text-white fill-white"></i>
    </a>

  </div>

  

    </div>
  );
}
