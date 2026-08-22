import React from "react";
import "@/assets/css/francianefurohumanizado2.css";

export default function FrancianeFurohumanizado2({ content }: { content: any }) {
  return (
    <div className="franciane-furohumanizado2-wrapper template-franciane-furohumanizado2 selection:bg-furo-pink selection:text-white pb-10">
      

  
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
      `}</style>
<div className="bg-sparkles"></div>

  
  <div className="max-w-md mx-auto min-h-screen relative bg-furo-bg shadow-2xl overflow-hidden sm:border-x sm:border-white/5 flex flex-col">
    
    
    <header className="relative w-full h-[75vh] overflow-hidden border-b border-furo-purple/20">
      <img id="img-capa" src={content.img_1} alt="Franciane Ribeiro" className="absolute inset-0 w-full h-full object-cover object-top animate-zoom" loading="eager" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-furo-bg via-furo-bg/30 to-transparent"></div>

      
      <div className="absolute top-8 left-6 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-furo-pink/30 flex items-center gap-2 shadow-lg z-20">
        <i data-lucide="home" className="w-3 h-3 text-furo-pink"></i>
        <span className="text-[9px] font-bold uppercase tracking-widest text-furo-nude italic">{content.text_1}&{content.text_2}</span>
      </div>

      
      <div className="absolute bottom-12 left-0 w-full px-8 reveal active text-center z-20">
        <h2 className="text-[10px] font-bold text-furo-pink uppercase tracking-[0.4em] mb-3 drop-shadow-lg">{content.text_3}&{content.text_4}</h2>
        <h1 className="font-serif text-[3.5rem] font-bold text-white leading-none tracking-tighter drop-shadow-xl">{content.text_5}</h1>
        <h1 className="font-serif text-[3.5rem] font-bold text-gradient leading-none italic tracking-tighter drop-shadow-xl -mt-2">{content.text_6}</h1>
        <p className="text-[11px] text-furo-nude uppercase tracking-[0.2em] mt-5 font-medium">{content.text_7}</p>
      </div>
    </header>

    
    <section className="px-6 py-12 reveal relative z-20 -mt-8">
      <div className="glass-purple rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden text-center min-h-[420px] flex flex-col">
        <div className="mb-6 shrink-0">
          <i data-lucide="sparkles" className="w-8 h-8 text-furo-pink mx-auto mb-3 opacity-80"></i>
          <h3 className="font-serif text-2xl text-white mb-2 italic">{content.text_8}</h3>
          <p className="text-xs text-furo-nude/70 leading-relaxed font-medium">{content.text_9}</p>
        </div>

        <div id="quiz-container" className="flex-1 flex flex-col justify-center">
           <div id="quiz-start">
             <button  className="w-full bg-white text-furo-bg py-5 rounded-2xl font-black text-[12px] uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3">{content.text_10}<i data-lucide="chevron-right" className="w-4 h-4"></i>
             </button>
           </div>

           <div id="quiz-steps" className="hidden flex-col h-full">
              <h4 id="quiz-question" className="font-serif text-xl text-white mb-6 leading-tight min-h-[3rem] flex items-center justify-center"></h4>
              <div className="space-y-2.5" id="quiz-options"></div>
           </div>

           <div id="quiz-result" className="hidden flex-col items-center py-4">
              <h3 className="font-serif text-2xl text-white mb-2 leading-tight">{content.text_11}</h3>
              <p id="result-desc" className="text-xs text-furo-nude/70 leading-relaxed mb-8 font-medium"></p>
              <button  className="w-full btn-gradient text-white py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-xl active:scale-95">{content.text_12}</button>
           </div>
        </div>
      </div>
    </section>

    
    <section className="px-8 py-16 reveal text-center">
       <div className="bg-gradient-to-b from-furo-pink/20 to-transparent p-[1px] rounded-[3.5rem]">
          <div className="bg-furo-bg p-10 rounded-[3.4rem] border border-furo-pink/10">
             <h2 className="text-7xl font-black text-furo-pink mb-4 leading-none">{content.text_13}</h2>
             <p className="text-lg font-serif italic text-white mb-6 leading-snug">{content.text_14}</p>
             <p className="text-xs text-furo-nude/60 leading-relaxed">{content.text_15}</p>
          </div>
       </div>
    </section>

    
    <section className="px-8 py-10 reveal">
       <div className="flex items-center gap-3 mb-12">
        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-furo-pink italic">{content.text_16}</h2>
        <div className="flex-1 h-px bg-white/10"></div>
      </div>

      <div className="space-y-10">
        <div className="flex gap-5">
           <div className="w-12 h-12 rounded-2xl bg-furo-pink/10 border border-furo-pink/30 flex items-center justify-center font-serif italic text-furo-pink shrink-0 text-xl">1</div>
           <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{content.text_17}</h4>
              <p className="text-xs text-furo-nude/60 leading-relaxed">{content.text_18}</p>
           </div>
        </div>
        <div className="flex gap-5">
           <div className="w-12 h-12 rounded-2xl bg-furo-pink/10 border border-furo-pink/30 flex items-center justify-center font-serif italic text-furo-pink shrink-0 text-xl">2</div>
           <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{content.text_19}</h4>
              <p className="text-xs text-furo-nude/60 leading-relaxed">{content.text_20}</p>
           </div>
        </div>
        <div className="flex gap-5">
           <div className="w-12 h-12 rounded-2xl bg-furo-pink/10 border border-furo-pink/30 flex items-center justify-center font-serif italic text-furo-pink shrink-0 text-xl">3</div>
           <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{content.text_21}</h4>
              <p className="text-xs text-furo-nude/60 leading-relaxed">{content.text_22}</p>
           </div>
        </div>
        <div className="flex gap-5">
           <div className="w-12 h-12 rounded-2xl bg-furo-pink/10 border border-furo-pink/30 flex items-center justify-center font-serif italic text-furo-pink shrink-0 text-xl">4</div>
           <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{content.text_23}</h4>
              <p className="text-xs text-furo-nude/60 leading-relaxed">{content.text_24}</p>
           </div>
        </div>
      </div>
    </section>

    
    <section className="px-6 py-10 reveal bg-furo-card/30 border-y border-white/5">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 glass-purple p-8 rounded-[2.5rem] relative overflow-hidden">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-furo-pink/20 flex items-center justify-center shrink-0 border border-furo-pink/30">
               <i data-lucide="moon" className="w-7 h-7 text-furo-pink"></i>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-white mb-2 italic">{content.text_25}</h3>
              <p className="text-xs text-furo-nude/70 leading-relaxed">{content.text_26}</p>
            </div>
          </div>
        </div>

        <div className="glass-purple p-6 rounded-[2rem] flex flex-col justify-between h-48 border-t-2 border-t-furo-pink/40">
           <i data-lucide="gift" className="w-7 h-7 text-furo-pink mb-4"></i>
           <div>
             <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">{content.text_27}</h4>
             <p className="text-[10px] text-furo-nude/60 leading-tight">{content.text_28}</p>
           </div>
        </div>

        <div className="glass-purple p-6 rounded-[2rem] flex flex-col justify-between h-48 border-t-2 border-t-furo-purple/40">
           <i data-lucide="calendar-check" className="w-7 h-7 text-furo-purple mb-4"></i>
           <div>
             <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">{content.text_29}</h4>
             <p className="text-[10px] text-furo-nude/60 leading-tight">{content.text_30}</p>
           </div>
        </div>

        <div className="glass-purple p-6 rounded-[2rem] flex flex-col justify-between h-48">
           <i data-lucide="coffee" className="w-7 h-7 text-furo-nude mb-4"></i>
           <div>
             <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">{content.text_31}</h4>
             <p className="text-[10px] text-furo-nude/60 leading-tight">{content.text_32}</p>
           </div>
        </div>

        <div className="glass-purple p-6 rounded-[2rem] flex flex-col justify-between h-48 border-b-2 border-b-furo-pink/20">
           <i data-lucide="sparkles" className="w-7 h-7 text-furo-pink mb-4"></i>
           <div>
             <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">{content.text_33}</h4>
             <p className="text-[10px] text-furo-nude/60 leading-tight">{content.text_34}</p>
           </div>
        </div>
      </div>
    </section>

    
    <section className="py-16 reveal border-t border-white/5">
      <div className="flex overflow-x-auto gap-5 px-6 hide-scrollbar snap-x pb-8">
        <div className="snap-center shrink-0 w-64 h-[24rem] rounded-[2.5rem] overflow-hidden relative border border-white/10 group shadow-2xl">
          <img id="img-port-1" src={content.img_2} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-furo-bg via-transparent to-transparent"></div>
          <p className="absolute bottom-6 left-6 font-bold text-white text-lg uppercase italic tracking-tighter">{content.text_35}</p>
        </div>
        <div className="snap-center shrink-0 w-64 h-[24rem] rounded-[2.5rem] overflow-hidden relative border border-white/10 group shadow-2xl">
          <img id="img-port-2" src={content.img_3} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-furo-bg via-transparent to-transparent"></div>
          <p className="absolute bottom-6 left-6 font-bold text-white text-lg uppercase italic tracking-tighter">{content.text_36}</p>
        </div>
      </div>
    </section>

    
    <footer className="px-8 pt-12 pb-24 text-center bg-[#050109] rounded-t-[4rem] border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="w-16 h-1 bg-white/10 rounded-full mx-auto mb-12"></div>
      <h3 className="font-serif text-3xl text-white mb-10 leading-[0.9]">{content.text_37}</h3>
      
      <div className="space-y-4">
        <button  className="w-full btn-gradient text-white py-5 rounded-3xl font-black text-xs uppercase tracking-widest active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl">
          <i data-lucide="message-circle" className="w-5 h-5 fill-white"></i>{content.text_38}</button>
        <button  className="w-full border border-white/10 bg-white/5 text-white py-5 rounded-3xl font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 active:scale-95">
          <i data-lucide="instagram" className="w-5 h-5 text-furo-pink"></i>{content.text_39}</button>
      </div>

      <div className="pt-12 border-t border-white/5 mt-16 opacity-30">
        <p className="text-[8px] font-black uppercase tracking-[0.5em] mb-3 italic">{content.text_40}</p>
        <p className="text-[8px] uppercase tracking-[0.4em] font-semibold">{content.text_41}<strong className="text-furo-pink font-black">{content.text_42}</strong></p>
      </div>
    </footer>

  </div>

  

    </div>
  );
}
