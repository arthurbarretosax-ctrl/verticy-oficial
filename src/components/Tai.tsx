import React from "react";
import "@/assets/css/tai.css";

export default function Tai({ content }: { content: any }) {
  return (
    <div className="tai-wrapper template-tai selection:bg-tai-brown selection:text-white pb-0">
      

  
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');
      `}</style>
<div className="bg-paper"></div>

  
  <div className="max-w-[480px] mx-auto min-h-screen relative bg-tai-bg shadow-2xl flex flex-col sm:border-x sm:border-tai-dark/10 overflow-hidden">
    
    
    <header className="relative w-full h-[85vh] overflow-hidden flex flex-col items-center justify-end pb-16 z-10 shadow-2xl">
      
      
      <div className="absolute inset-0 z-0">
        <img id="img-capa" src={content.img_1} alt="Cobertura em Tempo Real" className="w-full h-full object-cover object-top animate-[slowZoom_20s_ease-in-out_infinite_alternate]" loading="eager"  />
        
        <div className="absolute inset-0 bg-gradient-to-b from-tai-dark/80 via-tai-dark/40 to-tai-dark/95"></div>
      </div>

      
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
        <div className="w-24 h-24 bg-tai-bg rounded-full p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden border border-tai-accent/30">
          <img id="img-logo" src={content.img_2} alt="Logo Tai" className="w-full h-full object-contain rounded-full"  />
          
          <i data-lucide="camera" className="w-8 h-8 text-tai-dark absolute -z-10 opacity-20"></i>
        </div>
      </div>
      
      
      <div className="text-center reveal active w-full relative z-20 px-8">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-tai-bg/80 mb-3 drop-shadow-md">{content.text_1}&{content.text_2}</h2>
        <h1 className="font-serif text-[2.7rem] font-medium leading-[1.1] text-tai-bg mb-4 tracking-tight drop-shadow-xl">{content.text_3}<br /><span className="italic text-tai-accent">{content.text_4}</span>
        </h1>
        <p className="text-[13px] text-tai-bg/80 font-medium mb-8 drop-shadow-md">{content.text_5}</p>
        
        <button  className="w-full bg-tai-accent text-white hover:bg-tai-brown py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(181,124,90,0.4)] flex items-center justify-center gap-3 transition-all active:scale-95">{content.text_6}<i data-lucide="arrow-right" className="w-4 h-4"></i>
        </button>
      </div>
    </header>

    
    <section className="py-20 px-8 bg-tai-dark text-tai-bg text-center reveal relative overflow-hidden">
      
      <i data-lucide="quote" className="absolute top-10 left-10 w-24 h-24 text-tai-bg/5 rotate-180"></i>
      
      <p className="font-serif text-3xl italic leading-snug mb-6 relative z-10">{content.text_7}<br />
        <span className="text-tai-accent font-bold not-italic uppercase tracking-widest text-lg block mt-4">{content.text_8}</span>
      </p>
      
      <div className="w-12 h-[1px] bg-tai-accent mx-auto mb-6"></div>
      
      <p className="text-xs font-light tracking-widest uppercase opacity-80">{content.text_9}<br />{content.text_10}</p>
    </section>

    
    <section className="py-24 px-6 reveal">
      <div className="text-center mb-16">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-tai-brown mb-2 block">{content.text_11}</span>
        <h2 className="font-serif text-4xl text-tai-dark leading-tight">{content.text_12}<br /><span className="italic text-tai-brown">{content.text_13}</span></h2>
      </div>

      <div className="space-y-6">
        
        
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-tai-dark/5 reveal">
          <div className="w-12 h-12 rounded-full bg-tai-light flex items-center justify-center mb-6">
            <i data-lucide="smartphone" className="w-5 h-5 text-tai-brown"></i>
          </div>
          <h3 className="font-serif text-2xl text-tai-dark mb-3">{content.text_14}<span className="italic text-tai-brown">{content.text_15}</span></h3>
          <p className="text-sm text-tai-dark/70 leading-relaxed mb-6 font-medium">{content.text_16}</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2 text-xs text-tai-dark/80"><i data-lucide="check" className="w-4 h-4 text-tai-accent shrink-0"></i> <strong>{content.text_17}</strong>{content.text_18}</li>
            <li className="flex items-start gap-2 text-xs text-tai-dark/80"><i data-lucide="check" className="w-4 h-4 text-tai-accent shrink-0"></i> <strong>{content.text_19}</strong>{content.text_20}</li>
          </ul>
        </div>

        
        <div className="bg-tai-light/30 rounded-[2rem] p-8 border border-tai-dark/5 reveal">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
            <i data-lucide="clapperboard" className="w-5 h-5 text-tai-brown"></i>
          </div>
          <h3 className="font-serif text-2xl text-tai-dark mb-3">{content.text_21}<span className="italic text-tai-brown">{content.text_22}</span></h3>
          <p className="text-sm text-tai-dark/70 leading-relaxed mb-6 font-medium">{content.text_23}</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-xs text-tai-dark/80"><i data-lucide="circle-dot" className="w-4 h-4 text-tai-accent shrink-0"></i> <strong>{content.text_24}</strong>{content.text_25}</li>
            <li className="flex items-start gap-2 text-xs text-tai-dark/80"><i data-lucide="circle-dot" className="w-4 h-4 text-tai-accent shrink-0"></i> <strong>{content.text_26}</strong>{content.text_27}</li>
          </ul>
        </div>

        
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-tai-dark/5 reveal">
          <div className="w-12 h-12 rounded-full bg-tai-light flex items-center justify-center mb-6">
            <i data-lucide="film" className="w-5 h-5 text-tai-brown"></i>
          </div>
          <h3 className="font-serif text-2xl text-tai-dark mb-3">{content.text_28}<span className="italic text-tai-brown">{content.text_29}</span></h3>
          <p className="text-sm text-tai-dark/70 leading-relaxed font-medium">{content.text_30}</p>
          <div className="mt-6 bg-tai-bg p-4 rounded-xl text-center border border-tai-dark/5">
            <p className="font-serif italic text-tai-brown text-sm">{content.text_31}</p>
          </div>
        </div>

      </div>
    </section>

    
    <section className="py-20 bg-tai-light/20 border-y border-tai-dark/5 reveal">
      <div className="px-6 mb-10">
        <h2 className="font-serif text-3xl text-tai-dark leading-tight mb-2">{content.text_32}<br /><span className="italic text-tai-brown">{content.text_33}</span></h2>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-tai-dark/50">{content.text_34}</p>
      </div>

      <div className="flex overflow-x-auto gap-4 px-6 hide-scrollbar snap-x pb-4">
        
        <div className="snap-center shrink-0 w-64 h-80 rounded-[2rem] overflow-hidden relative shadow-lg">
          <img src={content.img_3} alt="Mini Wedding" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-tai-dark/90 via-tai-dark/20 to-transparent flex flex-col justify-end p-6">
             <h4 className="text-white font-serif text-2xl italic mb-1">{content.text_35}&<br />{content.text_36}</h4>
             <p className="text-[10px] text-white/70 uppercase tracking-widest">{content.text_37}&{content.text_38}</p>
          </div>
        </div>
        
        <div className="snap-center shrink-0 w-64 h-80 rounded-[2rem] overflow-hidden relative shadow-lg">
          <img src={content.img_4} alt="Corporativo" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-tai-dark/90 via-tai-dark/20 to-transparent flex flex-col justify-end p-6">
             <h4 className="text-white font-serif text-2xl italic mb-1">{content.text_39}<br />{content.text_40}</h4>
             <p className="text-[10px] text-white/70 uppercase tracking-widest">{content.text_41}&{content.text_42}</p>
          </div>
        </div>
        
        <div className="snap-center shrink-0 w-64 h-80 rounded-[2rem] overflow-hidden relative shadow-lg">
          <img src={content.img_5} alt="Formaturas" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-tai-dark/90 via-tai-dark/20 to-transparent flex flex-col justify-end p-6">
             <h4 className="text-white font-serif text-2xl italic mb-1">{content.text_43}&<br />{content.text_44}</h4>
             <p className="text-[10px] text-white/70 uppercase tracking-widest">{content.text_45}</p>
          </div>
        </div>
      </div>
    </section>

    
    <section className="py-24 px-8 text-center reveal">
       <i data-lucide="camera" className="w-8 h-8 text-tai-accent mx-auto mb-6 opacity-50"></i>
       <h3 className="font-serif text-[2rem] text-tai-dark leading-tight italic">{content.text_46}<span className="font-bold text-tai-brown">{content.text_47}</span>
       </h3>
    </section>

    
    <footer className="mt-auto px-6 pt-16 pb-28 bg-tai-dark text-center reveal rounded-t-[3rem]">
      
      <div className="mb-12">
        <h2 className="font-serif text-4xl text-white mb-6">{content.text_48}<br /><span className="italic text-tai-brown">{content.text_49}</span></h2>
        <p className="text-sm text-white/70 leading-relaxed font-light">{content.text_50}</p>
      </div>

      <div className="space-y-4 mb-16">
        <button  className="w-full bg-tai-bg text-tai-dark py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3">
          <i data-lucide="message-circle" className="w-5 h-5"></i>{content.text_51}</button>
        
        <button  className="w-full border border-white/20 text-white py-5 rounded-full font-medium text-xs uppercase tracking-[0.2em] hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-3">
          <i data-lucide="instagram" className="w-4 h-4"></i>{content.text_52}</button>
      </div>

      <div className="pt-10 border-t border-white/10 opacity-40">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-2 text-white">{content.text_53}</p>
        <p className="text-[8px] uppercase tracking-[0.3em] text-white">{content.text_54}</p>
      </div>
    </footer>

    
    <a href="https://wa.me/5554991397135" target="_blank" className="fixed bottom-6 right-6 w-14 h-14 bg-tai-dark text-tai-bg rounded-full shadow-[0_10px_30px_rgba(42,31,24,0.3)] flex items-center justify-center z-50 hover:scale-110 active:scale-90 transition-transform border border-tai-bg/20">
      <i data-lucide="message-circle" className="w-6 h-6"></i>
    </a>

  </div>

  

    </div>
  );
}
