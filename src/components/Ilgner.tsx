import React from "react";

export default function Ilgner({ content }: { content: any }) {
  return (
    <div className="ilgner-wrapper">
      

  <div className="bg-noise"></div>

  
  <div className="max-w-md mx-auto min-h-screen relative bg-icn-black shadow-2xl flex flex-col sm:border-x sm:border-white/5 overflow-hidden">
    
    
    <header className="absolute top-0 left-0 w-full z-50 flex justify-center px-6 py-6">
      <span className="text-[9px] font-bold uppercase tracking-[0.3em] bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-white shadow-lg">{content.text_1}</span>
    </header>

    
    <section className="relative w-full h-[70vh] overflow-hidden group">
      <div className="absolute inset-0 w-full h-full">
        
        <img id="img-hero" src={content.img_1} alt="Ilgner Chagas Capa" className="w-full h-full object-cover animate-ken-burns" loading="eager" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-icn-black/60 via-transparent to-icn-black/90"></div>

      
      <div className="absolute bottom-6 left-0 w-full flex flex-col items-center z-20 px-6">
        <div className="w-32 h-32 bg-icn-black rounded-full p-1 shadow-2xl border-4 border-icn-green/30 mb-4 overflow-hidden flex items-center justify-center transition-transform duration-700 hover:scale-105">
          <img id="img-logo" src={content.img_2} alt="Logo ICNTEAM" className="w-full h-full object-cover rounded-full" />
        </div>
        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-icn-green mb-1 drop-shadow-lg italic text-center leading-none">{content.text_2}</h2>
        <div className="h-1 w-8 bg-icn-green/40 rounded-full"></div>
      </div>
    </section>

    
    <section className="px-8 pt-8 pb-10 text-center reveal active">
      <h1 className="font-display text-4xl font-black text-white uppercase italic tracking-tighter mb-8 leading-none mx-auto">{content.text_3}<br /><span className="text-icn-green">{content.text_4}</span>
      </h1>
      
      <div className="glass-card p-8 rounded-[3rem] border border-white/10 relative group bg-icn-dark text-center">
         <h2 className="font-display text-3xl font-black text-white italic uppercase tracking-tighter mb-4 mx-auto leading-none">{content.text_5}<br /><span className="text-icn-green">{content.text_6}</span>
         </h2>
         <div className="space-y-4 text-sm text-icn-silver leading-relaxed font-medium">
            <p>{content.text_7}<strong>{content.text_8}</strong> e <strong>{content.text_9}</strong>{content.text_10}</p>
            <p>{content.text_11}<strong>{content.text_12}</strong>{content.text_13}</p>
            <p className="text-white italic font-bold border-t border-white/5 pt-4">{content.text_14}</p>
         </div>
      </div>
    </section>

    
    <div className="w-full overflow-hidden border-y border-white/5 py-3 relative z-20 bg-icn-dark/80 backdrop-blur-md">
      <div className="animate-marquee flex gap-8 items-center text-white italic">
        <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40">{content.text_15}</span>
        <span className="text-[10px] text-icn-green">|</span>
        <span className="text-[9px] font-black uppercase tracking-[0.2em]">{content.text_16}</span>
        <span className="text-[10px] text-icn-green">|</span>
        <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40">{content.text_17}</span>
        <span className="text-[10px] text-icn-green">|</span>
        <span className="text-[9px] font-black uppercase tracking-[0.2em]">{content.text_18}</span>
        
        <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40 ml-8">{content.text_19}</span>
        <span className="text-[10px] text-icn-green">|</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{content.text_20}</span>
      </div>
    </div>

    
    <section id="planos" className="px-6 py-12 reveal">
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl font-black text-white uppercase italic tracking-tighter">{content.text_21}<br /><span className="text-icn-green">{content.text_22}</span></h2>
        <div className="bg-icn-green/10 inline-block px-4 py-1 rounded-full mt-4 border border-icn-green/20">
           <p className="text-[9px] text-icn-green uppercase tracking-widest font-black italic">{content.text_23}</p>
        </div>
      </div>

      <div className="space-y-4">
        
        <div className="glass-card p-6 rounded-[2.5rem] border-l-4 border-l-icn-silver/30">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-display text-xl font-bold text-white uppercase italic">{content.text_24}</h3>
              <p className="text-[9px] text-icn-silver uppercase tracking-widest mt-1">{content.text_25}</p>
            </div>
            <span className="text-[8px] font-black text-icn-silver uppercase border border-icn-silver/20 px-2 py-1 rounded">{content.text_26}</span>
          </div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-3 text-[11px] text-icn-silver"><i data-lucide="check" className="w-4 h-4 text-icn-green"></i>{content.text_27}</li>
            <li className="flex items-center gap-3 text-[11px] text-icn-silver"><i data-lucide="check" className="w-4 h-4 text-icn-green"></i>{content.text_28}</li>
          </ul>
          <button  className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest active:scale-95 transition-all text-center">{content.text_29}</button>
        </div>

        
        <div className="bg-white p-7 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
             <span className="bg-icn-green text-icn-black text-[8px] font-black uppercase px-3 py-1 rounded-full animate-pulse">{content.text_30}</span>
          </div>
          <div className="mb-4">
            <h3 className="font-display text-xl font-black text-icn-black uppercase italic leading-none">{content.text_31}</h3>
            <p className="text-[9px] font-bold text-icn-green uppercase tracking-widest mt-1">{content.text_32}</p>
          </div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-3 text-[11px] text-icn-black/80 font-bold"><i data-lucide="zap" className="w-4 h-4 text-icn-green fill-icn-green"></i>{content.text_33}</li>
            <li className="flex items-center gap-3 text-[11px] text-icn-black/80 font-bold"><i data-lucide="zap" className="w-4 h-4 text-icn-green fill-icn-green"></i>{content.text_34}</li>
          </ul>
          <button  className="w-full bg-icn-black text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all text-center text-white">{content.text_35}</button>
        </div>

        
        <div className="glass-card p-6 rounded-[2.5rem] border-l-4 border-l-icn-green/50">
          <div className="mb-4">
            <h3 className="font-display text-xl font-bold text-white uppercase italic">{content.text_36}</h3>
            <p className="text-[9px] font-bold text-icn-green uppercase tracking-widest mt-1">{content.text_37}</p>
          </div>
          <ul className="space-y-2 mb-6 text-left">
            <li className="flex items-center gap-3 text-[11px] text-icn-silver"><i data-lucide="trending-up" className="w-4 h-4 text-icn-green"></i>{content.text_38}</li>
            <li className="flex items-center gap-3 text-[11px] text-icn-silver"><i data-lucide="trending-up" className="w-4 h-4 text-icn-green"></i>{content.text_39}</li>
          </ul>
          <button  className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest active:scale-95 transition-all text-center">{content.text_40}</button>
        </div>

        
        <div className="relative p-[2px] rounded-[3rem] bg-gradient-to-br from-icn-green via-icn-greenDark to-icn-black shadow-[0_0_50px_rgba(74,222,128,0.2)]">
          <div className="bg-icn-black p-7 rounded-[2.9rem] h-full text-left">
            <div className="flex justify-between items-start mb-4">
               <h3 className="font-display text-xl font-black text-icn-green uppercase italic leading-none">{content.text_41}<br /><span className="text-white text-[10px] opacity-50 not-italic">{content.text_42}</span></h3>
               <i data-lucide="award" className="w-7 h-7 text-icn-green"></i>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <i data-lucide="shield-check" className="w-5 h-5 text-icn-green shrink-0"></i>
                <p className="text-[11px] text-icn-silver leading-relaxed"><strong className="text-white">{content.text_43}</strong>{content.text_44}</p>
              </div>
              <div className="flex items-start gap-3">
                <i data-lucide="target" className="w-5 h-5 text-icn-green shrink-0"></i>
                <p className="text-[11px] text-icn-silver leading-relaxed"><strong className="text-white">{content.text_45}</strong>{content.text_46}</p>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl mb-6 border border-white/10">
               <p className="text-[10px] text-white/80 font-medium leading-relaxed italic text-center">{content.text_47}</p>
            </div>
            <button  className="w-full bg-icn-green text-icn-black py-5 rounded-3xl font-black text-[10px] uppercase tracking-widest animate-pulse-green shadow-xl active:scale-95 transition-all text-center">{content.text_48}</button>
          </div>
        </div>
      </div>
    </section>

    
    <section className="py-12 bg-icn-dark/40 border-t border-white/5">
       <div className="text-center mb-10 px-6 reveal">
          <h2 className="font-display text-4xl uppercase tracking-tighter text-white leading-none text-center mx-auto uppercase leading-none">{content.text_49}<br /><span className="text-icn-green italic text-3xl">{content.text_50}</span></h2>
          <p className="text-[10px] text-white/40 uppercase tracking-widest mt-4 font-bold text-center mx-auto leading-none">{content.text_51}</p>
       </div>

       <div className="flex overflow-x-auto gap-4 px-8 hide-scrollbar snap-x pb-4">
          <div className="reveal snap-center shrink-0 w-72 h-[28rem] rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/5 bg-icn-black">
            <img id="img-res-1" src={content.img_3} alt="Transformação 1" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-icn-black via-transparent to-transparent flex flex-col justify-end p-8">
               <p className="text-[10px] font-bold text-icn-green uppercase tracking-[0.3em] mb-1">{content.text_52}</p>
               <h4 className="font-display text-2xl uppercase italic leading-none text-white">{content.text_53}</h4>
            </div>
          </div>
          <div className="reveal snap-center shrink-0 w-72 h-[28rem] rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/5 bg-icn-black text-white text-center">
            <img id="img-res-2" src={content.img_4} alt="Troféus Elite Team" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-icn-black via-transparent to-transparent flex flex-col justify-end p-8">
               <p className="text-[10px] font-bold text-icn-green uppercase tracking-[0.3em] mb-1">{content.text_54}</p>
               <h4 className="font-display text-2xl uppercase italic leading-none text-white">{content.text_55}</h4>
            </div>
          </div>
       </div>
    </section>

    
    <footer className="mt-auto px-8 pt-8 pb-12 bg-icn-black border-t border-white/5 text-center reveal text-white relative">
      <h3 className="font-display text-2xl mb-8 tracking-tighter uppercase leading-none italic text-center mx-auto uppercase leading-none">{content.text_56}<br /><span className="text-icn-green opacity-60 font-black">{content.text_57}</span></h3>
      
      <div className="space-y-4 max-w-xs mx-auto">
        <button  className="w-full bg-icn-green text-icn-black py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-xl active:scale-[0.97] transition-all flex items-center justify-center gap-3">
          <i data-lucide="message-circle" className="w-5 h-5"></i>{content.text_58}</button>
        
        <button  className="w-full bg-icn-dark border border-white/10 text-white py-5 rounded-[2rem] font-bold text-[12px] uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl text-white">
          <i data-lucide="instagram" className="w-5 h-5"></i>{content.text_59}</button>
      </div>

      <div className="mt-12 pt-6 border-t border-white/5 opacity-20 text-white text-center">
        <p className="text-[8px] font-bold uppercase tracking-[0.5em] mb-4">{content.text_60}</p>
        <p className="text-[8px] uppercase tracking-[0.4em]">{content.text_61}<strong className="text-white tracking-[0.2em] font-black text-center mx-auto uppercase">{content.text_62}</strong>{content.text_63}</p>
      </div>
    </footer>

  </div>

  

    </div>
  );
}
