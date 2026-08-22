import React from "react";

export default function LaviniaPsi({ content }: { content: any }) {
  return (
    <div className="lavinia.psi-wrapper">
      

  <div className="bg-noise"></div>

  <div className="max-w-md mx-auto min-h-screen relative bg-psi-black shadow-2xl overflow-hidden sm:border-x sm:border-white/5 flex flex-col">
    
    
    <header className="relative w-full h-[88vh] overflow-hidden group">
      <div className="absolute inset-0 z-10 px-8 pt-16 pb-20">
        <div className="w-full h-full arch-frame shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden">
          <img id="img-capa" src={content.img_1} alt="Dra. Lavínia Morais" className="w-full h-full object-cover animate-ken-burns" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-psi-black via-transparent to-transparent opacity-90"></div>
        </div>
      </div>

      <div className="absolute bottom-28 left-0 w-full text-center z-20 pointer-events-none px-6">
        <h2 className="text-2xl font-serif italic text-psi-white tracking-[0.3em] uppercase opacity-70 mb-0">{content.text_1}</h2>
        <h1 className="text-[4.5rem] font-serif font-bold text-white tracking-tighter drop-shadow-2xl leading-[0.8] mb-4">{content.text_2}</h1>
        <div className="w-12 h-[1px] bg-psi-gold mx-auto mb-4 opacity-50"></div>
        <p className="text-[9px] font-bold text-psi-gold uppercase tracking-[0.6em]">{content.text_3}</p>
      </div>

      <div className="absolute bottom-6 left-0 w-full px-8 z-30 reveal active text-center">
        <button  className="w-full bg-white text-psi-black py-5 rounded-full font-bold text-[11px] uppercase tracking-[0.3em] shadow-2xl active:scale-95 transition-all">{content.text_4}</button>
      </div>
    </header>

    
    <div className="w-full overflow-hidden border-y border-white/5 py-4 relative z-20 bg-psi-dark/80 backdrop-blur-md">
      <div className="animate-marquee flex gap-10 items-center text-psi-white/30 italic">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em]">{content.text_5}</span>
        <span className="text-psi-gold">•</span>
        <span className="text-[10px] font-bold uppercase tracking-[0.5em]">{content.text_6}</span>
        <span className="text-psi-gold">•</span>
        <span className="text-[10px] font-bold uppercase tracking-[0.5em]">{content.text_7}</span>
        <span className="text-psi-gold">•</span>
        <span className="text-[10px] font-bold uppercase tracking-[0.5em]">{content.text_8}</span>
        <span className="text-psi-gold">•</span>
        <span className="text-[10px] font-bold uppercase tracking-[0.5em]">{content.text_9}</span>
        <span className="text-psi-gold">•</span>
      </div>
    </div>

    
    <section className="px-6 py-20 reveal bg-psi-dark/20 border-b border-white/5">
      <div className="text-center mb-12">
        <i data-lucide="activity" className="w-8 h-8 text-psi-gold mx-auto mb-4 opacity-50"></i>
        <h3 className="text-[10px] font-bold text-psi-gold uppercase tracking-[0.4em] mb-4 italic">{content.text_10}</h3>
        <h2 className="font-serif text-4xl text-white italic">{content.text_11}<br /><span className="text-psi-gold not-italic">{content.text_12}</span></h2>
        <p className="text-[12px] text-psi-silver mt-6 px-4 leading-relaxed font-medium">{content.text_13}</p>
      </div>

      <div id="quiz-container" className="glass-card p-8 rounded-[3rem] relative min-h-[400px] flex flex-col justify-between overflow-hidden">
        <div id="quiz-start" className="text-center py-10">
          <p className="text-sm text-psi-silver mb-8 leading-relaxed italic">{content.text_14}</p>
          <button  className="w-full border border-psi-gold text-psi-gold py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-psi-gold hover:text-black transition-all">{content.text_15}</button>
        </div>

        <div id="quiz-steps" className="hidden flex-col h-full">
          <div className="mb-8">
            <span id="quiz-progress" className="text-[10px] font-black text-psi-gold uppercase tracking-widest">{content.text_16}</span>
            <div className="w-full h-1 bg-white/5 rounded-full mt-2 overflow-hidden">
              <div id="quiz-bar" className="w-[20%] h-full bg-psi-gold transition-all duration-500"></div>
            </div>
          </div>
          <h4 id="quiz-question" className="font-serif text-2xl text-white mb-10 leading-tight">{content.text_17}</h4>
          <div className="space-y-3" id="quiz-options">
            <button  className="option-btn w-full border border-white/10 p-4 rounded-2xl text-[12px] font-medium text-left flex items-center justify-between group">{content.text_18}<span>0</span></button>
            <button  className="option-btn w-full border border-white/10 p-4 rounded-2xl text-[12px] font-medium text-left flex items-center justify-between">{content.text_19}<span>1</span></button>
            <button  className="option-btn w-full border border-white/10 p-4 rounded-2xl text-[12px] font-medium text-left flex items-center justify-between">{content.text_20}<span>2</span></button>
            <button  className="option-btn w-full border border-white/10 p-4 rounded-2xl text-[12px] font-medium text-left flex items-center justify-between">{content.text_21}<span>3</span></button>
          </div>
        </div>

        <div id="quiz-result" className="hidden text-center py-6">
          <div id="result-icon" className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-psi-gold/10">
            <i data-lucide="alert-circle" className="w-10 h-10 text-psi-gold"></i>
          </div>
          <h3 id="result-title" className="font-serif text-3xl text-white mb-4">{content.text_22}</h3>
          <p id="result-desc" className="text-sm text-psi-silver leading-relaxed mb-10 font-medium">{content.text_23}</p>
          <div className="space-y-4">
             <button  className="w-full bg-white text-psi-black py-5 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all border border-white">{content.text_24}</button>
             <p className="text-[10px] text-white/30 uppercase tracking-widest italic">{content.text_25}</p>
          </div>
        </div>
      </div>
    </section>

    
    <section className="px-8 py-20 reveal">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-[1px] bg-psi-gold"></div>
        <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-psi-gold">{content.text_26}</h2>
      </div>
      <h2 className="font-serif text-5xl text-white mb-10 leading-[0.9] italic tracking-tighter">{content.text_27}<br /><span className="text-psi-gold not-italic">{content.text_28}</span></h2>
      <div className="glass-card p-10 rounded-[3rem] relative overflow-hidden group">
        <i data-lucide="sparkles" className="absolute -top-4 -right-4 w-24 h-24 text-white/[0.03] rotate-12"></i>
        <div className="space-y-6 text-[15px] text-psi-silver leading-relaxed font-medium">
          <p>{content.text_29}</p>
          <p>{content.text_30}<strong className="text-white italic font-serif text-lg">{content.text_31}</strong>{content.text_32}</p>
        </div>
      </div>
    </section>

    
    <section className="px-6 py-12 bg-psi-dark/30 border-y border-white/5 reveal">
      <div className="text-center mb-12">
        <h3 className="text-[10px] font-bold text-psi-gold uppercase tracking-[0.4em] mb-4 italic">{content.text_33}</h3>
        <h2 className="font-serif text-3xl text-white uppercase tracking-tighter leading-none">{content.text_34}<br />&{content.text_35}</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="glass-card p-8 rounded-[2.5rem] col-span-2 flex flex-col items-center text-center border-t-2 border-t-psi-gold/30">
          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
            <i data-lucide="book-open" className="w-8 h-8 text-psi-gold"></i>
          </div>
          <h4 className="text-xs font-bold text-psi-gold uppercase tracking-widest mb-3">{content.text_36}</h4>
          <p className="text-[13px] text-white font-semibold leading-relaxed">{content.text_37}&<br />{content.text_38}</p>
        </div>
        <div className="glass-card p-6 rounded-[2rem] flex flex-col justify-between h-44">
           <i data-lucide="building-2" className="w-6 h-6 text-psi-gold opacity-50"></i>
           <div>
             <h4 className="text-[10px] font-bold text-psi-gold uppercase mb-1">{content.text_39}</h4>
             <h4 className="text-xs font-bold text-white uppercase mb-1">{content.text_40}</h4>
             <p className="text-[9px] text-psi-silver italic leading-tight">{content.text_41}</p>
           </div>
        </div>
        <div className="glass-card p-6 rounded-[2rem] flex flex-col justify-between h-44">
           <i data-lucide="heart-pulse" className="w-6 h-6 text-psi-gold opacity-50"></i>
           <div>
             <h4 className="text-[10px] font-bold text-psi-gold uppercase mb-1">{content.text_42}</h4>
             <h4 className="text-xs font-bold text-white uppercase mb-1">{content.text_43}</h4>
             <p className="text-[9px] text-psi-silver italic leading-tight">{content.text_44}</p>
           </div>
        </div>
      </div>
    </section>

    
    <section className="py-20 reveal">
      <div className="px-8 mb-12">
          <h2 className="font-serif text-4xl text-white italic leading-none">{content.text_45}</h2>
          <p className="text-[10px] font-bold text-psi-gold uppercase tracking-[0.3em] mt-3">{content.text_46}</p>
      </div>
      <div className="flex overflow-x-auto gap-5 px-8 hide-scrollbar snap-x pb-4">
        <div className="snap-center shrink-0 w-72 glass-card p-10 rounded-[3rem] text-center border-b-4 border-b-psi-gold/20">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-8 border border-white/10"><i data-lucide="globe" className="w-8 h-8 text-psi-gold"></i></div>
          <h3 className="font-serif text-2xl font-bold text-white mb-4">{content.text_47}</h3>
          <p className="text-xs text-psi-silver leading-relaxed">{content.text_48}</p>
        </div>
        <div className="snap-center shrink-0 w-72 glass-card p-10 rounded-[3rem] text-center border-b-4 border-b-white/20">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-8 border border-white/10"><i data-lucide="map-pin" className="w-8 h-8 text-white"></i></div>
          <h3 className="font-serif text-2xl font-bold text-white mb-4">{content.text_49}</h3>
          <p className="text-xs text-psi-silver leading-relaxed">{content.text_50}</p>
        </div>
      </div>
    </section>

    
    <footer className="px-8 pt-16 pb-24 relative z-10 text-center bg-[#030303] rounded-t-[4rem] border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="w-16 h-1.5 bg-white/10 rounded-full mx-auto mb-12"></div>
      <div className="mb-16">
        <h2 className="text-[10px] font-bold text-psi-gold uppercase tracking-[0.5em] mb-4 italic">{content.text_51}</h2>
        <h3 className="font-serif text-4xl text-white mb-12 leading-tight">{content.text_52}</h3>
        <div className="space-y-4">
          <button  className="w-full bg-white text-psi-black py-5 rounded-2xl font-bold text-[12px] uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3">
            <i data-lucide="message-circle" className="w-5 h-5"></i>{content.text_53}</button>
          <button  className="w-full border border-white/10 bg-white/5 text-white/70 py-5 rounded-2xl font-bold text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 active:scale-95 hover:text-white transition-all">
            <i data-lucide="instagram" className="w-5 h-5"></i>{content.text_54}</button>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 opacity-30 text-center">
        <p className="text-[9px] uppercase tracking-[0.4em] flex items-center justify-center gap-1 font-semibold">{content.text_55}<strong className="text-white tracking-[0.2em] font-black uppercase">{content.text_56}</strong>
        </p>
      </div>
    </footer>

  </div>

  

    </div>
  );
}
