import React from "react";
import "@/assets/css/ilgner2.css";

export default function Ilgner2({ content }: { content: any }) {
  return (
    <div className="ilgner2-wrapper template-ilgner2">
      <div className="relative overflow-x-hidden overflow-x-hidden selection:bg-icn-green selection:text-icn-black pb-6">
      

  
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap');
      `}</style>
<div className="bg-noise"></div>

  
  <div className="max-w-md mx-auto min-h-screen relative sm:border-x sm:border-white/5 flex flex-col bg-icn-black shadow-2xl text-white">
    
    
    <section className="relative w-full h-[75vh] overflow-hidden rounded-b-[4rem] border-b border-icn-green/20 reveal active">
      <div className="absolute inset-0 z-0">
        
        <img id="img-hero" src={content.img_1} alt="Ilgner Chagas" className="w-full h-full object-cover animate-zoom" loading="eager" fetchpriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-icn-black via-icn-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-icn-black/60 via-transparent to-transparent"></div>
      </div>

      
      <div className="absolute inset-0 flex flex-col justify-end p-8 pb-10 z-20 text-center">
        
        <div className="w-32 h-32 bg-icn-black rounded-full p-1 shadow-2xl border-4 border-icn-green/30 mx-auto mb-6 overflow-hidden flex items-center justify-center transition-transform duration-700 hover:scale-105">
           <img id="img-logo" src={content.img_2} alt="Logo ICNTEAM" className="w-full h-full object-cover rounded-full" />
        </div>

        <h2 className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/80 mb-2 italic">{content.text_1}</h2>
        <h1 className="font-display text-5xl font-black text-white leading-none mb-6 uppercase italic tracking-tighter">{content.text_2}<span className="text-icn-green">{content.text_3}</span></h1>
        
        <div className="flex flex-col gap-3">
          <button  className="w-full bg-icn-green text-icn-black py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl animate-pulse-green active:scale-95 transition-all">{content.text_4}</button>
        </div>
      </div>
    </section>

    
    <div className="w-full overflow-hidden border-y border-white/5 py-5 relative z-20 bg-black/60 backdrop-blur-md">
      <div className="animate-marquee flex gap-10 items-center text-white italic text-[11px] font-black uppercase tracking-widest">
        <span className="opacity-50">{content.text_5}</span>
        <span className="text-white/20 font-light">|</span>
        <span className="opacity-50">{content.text_6}</span>
        <span className="text-white/20 font-light">|</span>
        <span className="opacity-50">{content.text_7}</span>
        <span className="text-white/20 font-light">|</span>
        <span className="opacity-50">{content.text_8}</span>
        
        
        <span className="opacity-50 ml-10">{content.text_9}</span>
        <span className="text-white/20 font-light">|</span>
        <span className="opacity-50">{content.text_10}</span>
        <span className="text-white/20 font-light">|</span>
        <span className="opacity-50">{content.text_11}</span>
      </div>
    </div>

    
    <section className="px-6 py-12 reveal">
       <div className="glass-premium rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl relative group bg-gradient-to-br from-icn-dark to-black text-center p-2">
          
          <div className="h-[28rem] rounded-[3rem] relative overflow-hidden">
             <img id="img-especialista" src={content.img_3} alt="Ilgner Chagas" className="w-full h-full object-cover object-top" />
             <div className="absolute inset-0 bg-gradient-to-t from-icn-black via-icn-black/20 to-transparent"></div>
          </div>
          
          <div className="p-8 relative z-10 text-center">
             <h2 className="font-display text-4xl font-black text-white italic uppercase tracking-tighter leading-none mb-4">{content.text_12}<br /><span className="text-icn-green">{content.text_13}</span>
             </h2>
             <p className="text-[10px] font-bold text-icn-green uppercase tracking-[0.4em] mb-6 font-black">{content.text_14}</p>
             
             <div className="space-y-4 text-sm text-icn-silver leading-relaxed font-medium">
                <p>{content.text_15}<strong>{content.text_16}</strong> e <strong>{content.text_17}</strong>{content.text_18}</p>
                <p>{content.text_19}<strong>{content.text_20}</strong>{content.text_21}</p>
             </div>
          </div>
       </div>
    </section>

    
    <section className="py-12 bg-black/40 border-y border-white/5">
       <div className="text-center mb-8 px-6 reveal">
          <h2 className="font-display text-4xl uppercase tracking-tighter text-white leading-none mx-auto text-center">{content.text_22}<br /><span className="text-icn-green italic text-3xl">{content.text_23}</span></h2>
          <p className="text-[10px] text-white/40 uppercase tracking-widest mt-3 font-bold text-center mx-auto">{content.text_24}</p>
       </div>

       <div className="flex overflow-x-auto gap-4 px-6 hide-scrollbar snap-x pb-4">
          
          <div className="reveal snap-center shrink-0 w-72 h-[28rem] rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/5 bg-icn-dark text-white text-center">
            <img id="img-result-1" src={content.img_4} alt="Resultado 1" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-icn-black via-transparent to-transparent flex flex-col justify-end p-8">
               <p className="text-[10px] font-bold text-icn-green uppercase tracking-[0.3em] mb-1">{content.text_25}</p>
               <h4 className="font-display text-2xl uppercase italic leading-none">{content.text_26}</h4>
            </div>
          </div>
          
          <div className="reveal snap-center shrink-0 w-72 h-[28rem] rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/5 bg-icn-dark text-white text-center">
            <img id="img-result-2" src={content.img_5} alt="Time de Atletas" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-icn-black via-transparent to-transparent flex flex-col justify-end p-8">
               <p className="text-[10px] font-bold text-icn-green uppercase tracking-[0.3em] mb-1">{content.text_27}</p>
               <h4 className="font-display text-2xl uppercase italic leading-none text-center">{content.text_28}</h4>
            </div>
          </div>
       </div>
    </section>

    
    <footer className="mt-auto px-8 pt-10 pb-12 bg-black border-t border-white/5 text-center reveal text-white relative">
      <h3 className="font-display text-2xl mb-8 tracking-tighter uppercase leading-none italic text-center mx-auto uppercase">{content.text_29}<br /><span className="text-icn-green opacity-60 font-black">{content.text_30}</span></h3>
      
      <div className="space-y-4 max-w-xs mx-auto">
        <button  className="w-full bg-icn-green text-icn-black py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-xl active:scale-[0.97] transition-all flex items-center justify-center gap-3">
          <i data-lucide="message-circle" className="w-5 h-5"></i>{content.text_31}</button>
        
        <button  className="w-full bg-[#0a0a0a] border border-white/10 text-white py-5 rounded-[2rem] font-bold text-[12px] uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl">
          <i data-lucide="instagram" className="w-5 h-5"></i>{content.text_32}</button>
      </div>

      
      <div className="mt-12 pt-6 border-t border-white/5 opacity-20 text-white text-center">
        <p className="text-[8px] font-bold uppercase tracking-[0.5em] mb-3">{content.text_33}</p>
        <p className="text-[8px] uppercase tracking-[0.4em]">{content.text_34}<strong className="text-white tracking-[0.2em] font-black text-center mx-auto uppercase">{content.text_35}</strong>{content.text_36}</p>
      </div>
    </footer>

  </div>

  

    </div>
    </div>
  );
}
