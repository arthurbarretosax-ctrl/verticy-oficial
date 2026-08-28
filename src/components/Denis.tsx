import React from "react";
import "@/assets/css/denis.css";

export default function Denis({ content }: { content: any }) {
  return (
    <div className="denis-wrapper template-denis">
      <div className="relative overflow-x-hidden overflow-x-hidden selection:bg-denis-gold selection:text-black pb-10">
      

  
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;600&display=swap');
      `}</style>
<div className="bg-noise"></div>

  
  <div className="max-w-[450px] mx-auto min-h-screen relative bg-denis-black shadow-2xl sm:border-x sm:border-white/5">
    
    
    <section className="relative w-full h-[75vh]">
      
      <div className="absolute inset-0 w-full h-full overflow-hidden rounded-b-[4rem]">
        <img id="img-hero" src={content.img_1} alt="Dênis Santos" className="w-full h-full object-cover animate-ken-burns" loading="eager" fetchpriority="high"  />
        
        <div className="absolute inset-0 bg-gradient-to-b from-denis-black/60 via-transparent to-denis-black"></div>
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-denis-black via-denis-black/80 to-transparent"></div>
      </div>

      
      <div className="absolute top-20 left-0 w-full px-10 z-20 reveal active text-center">
        <h1 className="text-white font-display text-5xl leading-none tracking-tight uppercase">{content.text_1}</h1>
        <h1 className="text-denis-gold font-display text-5xl leading-none tracking-tight mt-1 uppercase">{content.text_2}</h1>
        <p className="text-[10px] font-display font-bold uppercase tracking-[0.6em] text-white/60 mt-4 text-center">{content.text_3}</p>
      </div>

      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-40">
        <div className="w-32 h-32 rounded-full bg-denis-black p-1 border-2 border-denis-gold shadow-[0_0_40px_rgba(212,175,55,0.4)] overflow-hidden flex items-center justify-center">
           <img id="img-logo-circle" src={content.img_2} alt="Dênis Santos Logo" className="w-full h-full object-cover rounded-full"  />
        </div>
      </div>
    </section>

    
    <section className="px-8 pt-24 pb-10 space-y-4 reveal">
      <button  className="w-full btn-gold-shimmer py-5 rounded-full font-display font-bold text-[11px] uppercase tracking-[0.3em] transition-all active:scale-95 shadow-2xl">{content.text_4}</button>
      
      <div className="grid grid-cols-2 gap-3 text-center">
        <button  className="bg-denis-dark border border-denis-gold/20 text-white py-4 rounded-full font-display font-bold text-[9px] uppercase tracking-[0.2em] active:bg-denis-gold active:text-black transition-all">{content.text_5}</button>
        <button  className="bg-denis-dark border border-denis-gold/20 text-white py-4 rounded-full font-display font-bold text-[9px] uppercase tracking-[0.2em] active:bg-denis-gold active:text-black transition-all">{content.text_6}</button>
      </div>
    </section>

    
    <section className="px-8 py-6 reveal text-center">
       <p className="font-serif text-xl italic text-denis-gold leading-relaxed mb-6">{content.text_7}</p>
       <p className="text-sm font-sans text-denis-silver leading-relaxed max-w-[320px] mx-auto opacity-70">{content.text_8}</p>
    </section>

    
    <section className="px-6 py-8 reveal text-center">
      <div className="grid grid-cols-2 gap-3">
        <div className="glass-card rounded-[2rem] p-8 border-t border-white/5">
          <p className="text-3xl font-display font-bold text-denis-gold mb-1 leading-none">{content.text_9}</p>
          <p className="text-[9px] font-display uppercase tracking-widest text-white/50 font-black leading-tight">{content.text_10}<br />{content.text_11}</p>
        </div>
        <div className="glass-card rounded-[2rem] p-8 border-t border-white/5">
          <p className="text-3xl font-display font-bold text-white mb-1 leading-none">{content.text_12}</p>
          <p className="text-[9px] font-display uppercase tracking-widest text-white/50 font-black leading-tight">{content.text_13}<br />{content.text_14}</p>
        </div>
      </div>
    </section>

    
    <section className="px-6 py-12 reveal">
      <div className="glass-card rounded-[3.5rem] p-4 relative overflow-hidden">
        <div className="w-full h-[28rem] rounded-[3rem] overflow-hidden relative mb-8">
           <img id="img-sobre" src={content.img_3} alt="Dênis Santos" className="w-full h-full object-cover object-top" loading="lazy"  />
           <div className="absolute inset-0 bg-gradient-to-t from-denis-black via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="px-6 pb-8 text-center mx-auto">
           <h3 className="text-denis-gold font-display text-[10px] font-black uppercase tracking-[0.4em] mb-4 italic">{content.text_15}</h3>
           <h2 className="font-display text-3xl text-white mb-8 leading-tight uppercase">{content.text_16}<br /><span className="italic font-serif text-denis-gold lowercase text-2xl">{content.text_17}</span></h2>
           
           <div className="space-y-6 text-sm font-sans text-denis-silver leading-relaxed text-justify">
             <p>{content.text_18}</p>
             <p>{content.text_19}</p>
             <p className="text-white italic font-serif text-base border-t border-white/5 pt-6 text-center">{content.text_20}</p>
           </div>
        </div>
      </div>
    </section>

    
    <section className="px-6 py-10 relative z-10 reveal text-center">
      <div className="flex items-center gap-3 mb-10 pl-1">
        <h2 className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-white/40 italic">{content.text_21}</h2>
        <div className="flex-1 h-px bg-white/10"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 glass-card rounded-[2.5rem] p-8 relative overflow-hidden border-l-4 border-l-denis-gold group transition-all">
          <div className="flex flex-col items-center relative z-10 text-center mx-auto">
            <div className="w-12 h-12 rounded-full bg-denis-gold/10 flex items-center justify-center mb-6 border border-denis-gold/20 text-denis-gold group-hover:scale-110 transition-transform">
              <i data-lucide="gem" className="w-6 h-6"></i>
            </div>
            <h3 className="font-display text-2xl text-white mb-2 uppercase">{content.text_22}</h3>
            <p className="font-serif italic text-base text-denis-silver leading-snug">{content.text_23}</p>
          </div>
        </div>

        <div className="glass-card rounded-[2rem] p-6 flex flex-col justify-between items-center h-52 border-t border-white/5">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-5 border border-white/10 text-white">
            <i data-lucide="building-2" className="w-5 h-5"></i>
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-[11px] uppercase tracking-widest mb-1 leading-tight">{content.text_24}<br />{content.text_25}</h4>
            <p className="font-serif italic text-xs text-denis-silver">{content.text_26}</p>
          </div>
        </div>

        <div className="glass-card rounded-[2rem] p-6 flex flex-col justify-between items-center h-52 border-t border-white/5">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-5 border border-white/10 text-denis-gold">
            <i data-lucide="landmark" className="w-5 h-5"></i>
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-[11px] uppercase tracking-widest mb-1 leading-tight">{content.text_27}<br />{content.text_28}</h4>
            <p className="font-serif italic text-xs text-denis-silver">{content.text_29}</p>
          </div>
        </div>
      </div>
    </section>

    
    <section className="py-16 relative z-10 reveal border-t border-white/5">
      <div className="px-8 mb-10 text-center">
        <h2 className="font-display text-3xl text-white mb-2 tracking-tight uppercase">{content.text_30}</h2>
        <p className="font-serif italic text-denis-gold text-lg text-center">{content.text_31}</p>
      </div>

      <div className="flex overflow-x-auto gap-6 px-6 hide-scrollbar snap-x pb-8">
        
        <div className="snap-center shrink-0 w-72 h-[24rem] rounded-[2.5rem] overflow-hidden relative border border-white/10 shadow-2xl group text-left">
          <img id="img-imovel-1" src={content.img_4} alt="Residência de Alto Luxo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" loading="lazy"  />
          <div className="absolute inset-0 bg-gradient-to-t from-denis-black via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8">
            <span className="bg-denis-gold text-black text-[9px] font-display font-bold uppercase px-3 py-1 rounded-full mb-3 inline-block">{content.text_32}</span>
            <h4 className="text-white font-display text-xl leading-tight uppercase tracking-tight">{content.text_33}</h4>
          </div>
        </div>
        
        <div className="snap-center shrink-0 w-72 h-[24rem] rounded-[2.5rem] overflow-hidden relative border border-white/10 shadow-2xl group text-left">
          <img id="img-imovel-2" src={content.img_5} alt="Edifício Contemporâneo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" loading="lazy"  />
          <div className="absolute inset-0 bg-gradient-to-t from-denis-black via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8">
            <span className="bg-white/10 backdrop-blur-md text-white text-[9px] font-display font-bold uppercase px-3 py-1 rounded-full mb-3 inline-block">{content.text_34}</span>
            <h4 className="text-white font-display text-xl leading-tight uppercase tracking-tight">{content.text_35}</h4>
          </div>
        </div>
      </div>
    </section>

    
    <section className="py-20 bg-denis-dark/50 reveal">
       <div className="px-10 mb-10 flex justify-between items-end">
          <h2 className="font-serif text-4xl leading-none italic text-white uppercase tracking-tighter">{content.text_36}<br /><span className="text-denis-gold not-italic uppercase text-3xl font-black tracking-tighter">{content.text_37}</span></h2>
          <div className="w-12 h-[1px] bg-denis-gold mb-2"></div>
       </div>

       <div className="flex overflow-x-auto gap-6 px-10 hide-scrollbar snap-x pb-8 text-center">
          
          <div className="snap-center shrink-0 w-72 h-[28rem] rounded-[2.5rem] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 bg-denis-dark">
             <img id="img-res-1" src={content.img_6} alt="Entrega de Chaves" className="w-full h-full object-cover opacity-80" loading="lazy"  />
             <div className="absolute inset-0 bg-gradient-to-t from-denis-black via-transparent to-transparent"></div>
             <p className="absolute bottom-8 left-8 right-8 text-white font-serif text-2xl italic text-center">{content.text_38}&{content.text_39}</p>
          </div>
          
          <div className="snap-center shrink-0 w-72 h-[28rem] rounded-[2.5rem] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 bg-denis-dark">
             <img id="img-res-2" src={content.img_7} alt="Família e Lar" className="w-full h-full object-cover opacity-80" loading="lazy"  />
             <div className="absolute inset-0 bg-gradient-to-t from-denis-black via-transparent to-transparent"></div>
             <p className="absolute bottom-8 left-8 right-8 text-white font-serif text-2xl italic text-center">{content.text_40}&{content.text_41}</p>
          </div>
       </div>
    </section>

    
    <footer className="pt-24 pb-20 text-center bg-[#080808] relative z-10 border-t border-white/5">
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-denis-gold rounded-full blur-[50px] opacity-10"></div>

      <h3 className="font-display text-3xl mb-12 tracking-tight text-white px-10 uppercase text-center mx-auto leading-tight">{content.text_42}<br /><span className="text-denis-gold font-serif italic text-2xl lowercase tracking-normal normal-case leading-none">{content.text_43}</span></h3>
      
      <div className="flex justify-center gap-6 mb-20">
        
        <button  className="w-16 h-16 rounded-full border border-denis-gold/30 flex items-center justify-center text-denis-yellow hover:bg-denis-yellow hover:text-black transition-all shadow-xl active:scale-90 p-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </button>
        
        <button  className="w-16 h-16 rounded-full border border-denis-gold/30 flex items-center justify-center text-denis-yellow hover:bg-denis-yellow hover:text-black transition-all shadow-lg active:scale-90 p-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </button>
      </div>

      <p className="font-display text-[8px] font-bold uppercase tracking-[0.5em] mb-4 opacity-30 text-white text-center">{content.text_44}</p>
      <div className="flex items-center justify-center gap-1 opacity-20 text-center mx-auto">
        <span className="text-[8px] uppercase tracking-[0.3em] text-white text-center mx-auto">{content.text_45}</span>
        <strong className="text-denis-gold font-display text-[9px] tracking-[0.3em] font-black uppercase">{content.text_46}</strong>
      </div>
    </footer>

  </div>

  

    </div>
    </div>
  );
}
