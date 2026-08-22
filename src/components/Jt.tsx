import React from "react";
import "@/assets/css/jt.css";

export default function Jt({ content }: { content: any }) {
  return (
    <div className="jt-wrapper template-jt overflow-x-hidden selection:bg-jt-gold selection:text-jt-black pb-10">
      

  
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:ital,wght@0,700;0,800;0,900;1,400;1,700;1,900&display=swap');
      `}</style>
<div className="bg-noise"></div>

  
  <div className="max-w-md mx-auto min-h-screen relative sm:border-x sm:border-white/5 flex flex-col bg-jt-black shadow-2xl">
    
    
    <section className="relative w-full h-[85vh] overflow-hidden rounded-b-[4rem] border-b border-jt-gold/20 reveal active">
      <div className="absolute inset-0 z-0">
        <img id="img-hero" src={content.img_1} alt="Jeferson Teixeira" className="w-full h-full object-cover animate-zoom" loading="eager" fetchpriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-jt-black via-jt-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-jt-black/60 via-transparent to-transparent"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-8 pb-16 z-20 text-center text-white">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/80 mb-3">{content.text_1}</h2>
        <h1 className="font-display text-5xl font-black text-jt-gold leading-none mb-1 uppercase italic tracking-tighter">{content.text_2}</h1>
        <h1 className="font-display text-5xl font-black text-white leading-none mb-8 uppercase italic tracking-tighter">{content.text_3}</h1>
        
        <div className="flex flex-col gap-4">
          <button  className="w-full bg-jt-gold text-jt-black py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl animate-pulse-gold active:scale-95 transition-all">{content.text_4}</button>
          <button  className="w-full glass-premium py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 active:bg-white/10 active:scale-95 transition-all">
            <i data-lucide="award" className="w-4 h-4 text-jt-gold"></i>{content.text_5}</button>
        </div>
      </div>
    </section>

    
    <div className="w-full overflow-hidden border-b border-white/5 py-6 relative z-20 bg-black/60 backdrop-blur-md">
      <div className="animate-marquee flex gap-10 items-center text-white italic text-[11px] font-black uppercase tracking-widest">
        <span className="opacity-50">{content.text_6}</span>
        <span className="text-white/20 font-light">|</span>
        <span className="opacity-50">{content.text_7}</span>
        <span className="text-white/20 font-light">|</span>
        <span className="opacity-50">{content.text_8}</span>
        <span className="text-white/20 font-light">|</span>
        <span className="opacity-50">{content.text_9}</span>
        <span className="text-white/20 font-light">|</span>
        
        
        <span className="opacity-50">{content.text_10}</span>
        <span className="text-white/20 font-light">|</span>
        <span className="opacity-50">{content.text_11}</span>
        <span className="text-white/20 font-light">|</span>
        <span className="opacity-50">{content.text_12}</span>
        <span className="text-white/20 font-light">|</span>
        <span className="opacity-50">{content.text_13}</span>
        <span className="text-white/20 font-light">|</span>
      </div>
    </div>

    
    <section id="especialista" className="px-6 py-20 reveal">
       <div className="glass-premium rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl relative group bg-gradient-to-br from-jt-dark to-black text-center">
          <div className="h-[28rem] relative overflow-hidden">
             <img id="img-especialista" src={content.img_2} alt="Jeferson Teixeira Especialista" className="w-full h-full object-cover object-top" />
             <div className="absolute inset-0 bg-gradient-to-t from-jt-black via-jt-black/20 to-transparent"></div>
          </div>
          
          <div className="p-10 pt-8 relative z-10">
             <h2 className="font-display text-4xl font-black text-white italic uppercase tracking-tighter leading-none mb-4">{content.text_14}<br /><span className="text-jt-gold">{content.text_15}</span>
             </h2>
             <p className="text-[10px] font-bold text-jt-gold uppercase tracking-[0.4em] mb-8 font-black">{content.text_16}</p>
             
             <div className="space-y-6 text-sm text-jt-silver leading-relaxed font-medium">
                <p>{content.text_17}<strong className="text-white font-bold">{content.text_18}</strong>{content.text_19}<strong className="text-white font-bold">{content.text_20}</strong>.
                </p>
             </div>
          </div>
       </div>
    </section>

    
    <section className="px-6 py-20 bg-jt-dark/30 border-y border-white/5">
      <div className="text-center mb-12 reveal">
        <h2 className="font-display text-2xl uppercase tracking-tighter text-white leading-none">{content.text_21}<br /><span className="text-jt-pain italic">{content.text_22}</span></h2>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="glass-premium p-6 rounded-[2rem] border-l-4 border-l-jt-pain reveal">
           <div className="flex gap-4 items-start">
              <i data-lucide="alert-triangle" className="w-6 h-6 text-jt-pain shrink-0"></i>
              <div>
                 <h4 className="font-bold text-sm uppercase text-white mb-1">{content.text_23}</h4>
                 <p className="text-xs text-jt-silver font-medium">{content.text_24}</p>
              </div>
           </div>
        </div>
        <div className="glass-premium p-6 rounded-[2rem] border-l-4 border-l-jt-pain reveal">
           <div className="flex gap-4 items-start">
              <i data-lucide="battery-low" className="w-6 h-6 text-jt-pain shrink-0"></i>
              <div>
                 <h4 className="font-bold text-sm uppercase text-white mb-1">{content.text_25}</h4>
                 <p className="text-xs text-jt-silver font-medium">{content.text_26}</p>
              </div>
           </div>
        </div>
      </div>
    </section>

    
    <section className="px-6 py-24 relative overflow-hidden">
      <div className="absolute -right-20 top-20 w-64 h-64 bg-jt-gold/5 rounded-full blur-[100px]"></div>
      
      <div className="text-center mb-16 reveal">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-jt-silver mb-2 italic text-center mx-auto">{content.text_27}</h3>
        <h2 className="font-display text-3xl uppercase text-white text-center mx-auto leading-none">{content.text_28}<br /><span className="text-jt-gold italic">{content.text_29}</span></h2>
      </div>

      <div className="grid grid-cols-1 gap-6 relative z-10">
        <div className="reveal bg-white p-10 rounded-[3rem] shadow-2xl flex flex-col items-center text-center">
          <p className="text-[9px] text-jt-black/60 mb-6 font-black uppercase tracking-[0.2em]">{content.text_30}</p>
          <div className="w-16 h-16 rounded-full bg-jt-gold/10 flex items-center justify-center mb-6 border border-jt-gold/20">
             <i data-lucide="infinity" className="w-9 h-9 text-jt-gold"></i>
          </div>
          <h3 className="text-jt-black font-display text-4xl font-black italic mb-3 tracking-tighter uppercase leading-none text-center">{content.text_31}</h3>
          <p className="text-jt-black text-xs font-medium leading-relaxed max-w-[85%]">{content.text_32}</p>
          
          <div className="mt-10 pt-8 border-t border-black/5 w-full">
            <p className="text-jt-black text-sm font-bold uppercase tracking-widest">{content.text_33}</p>
          </div>
        </div>

        <button  className="reveal w-full bg-jt-gold text-jt-black py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-lg active:scale-95 transition-all">{content.text_34}</button>
      </div>
    </section>

    
    <section className="py-16 bg-black/40 border-t border-white/5">
       <div className="text-center mb-12 px-6 reveal">
          <h2 className="font-display text-4xl uppercase tracking-tighter text-white leading-none text-center mx-auto">{content.text_35}<br /><span className="text-jt-gold italic">{content.text_36}</span></h2>
          <p className="text-[10px] text-white/40 uppercase tracking-widest mt-4 font-bold">{content.text_37}</p>
       </div>

       <div className="flex overflow-x-auto gap-5 px-6 hide-scrollbar snap-x pb-8">
          <div className="snap-center shrink-0 w-72 h-[30rem] rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/5 bg-jt-dark">
            <img id="img-atleta-1" src={content.img_3} alt="Bodybuilder" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-jt-black via-transparent to-transparent flex flex-col justify-end p-8 text-center text-white">
               <p className="text-[10px] font-bold text-jt-gold uppercase tracking-[0.3em] mb-1">{content.text_38}</p>
               <h4 className="font-display text-2xl uppercase italic leading-none">{content.text_39}</h4>
            </div>
          </div>
          <div className="snap-center shrink-0 w-72 h-[30rem] rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/5 bg-jt-dark text-white">
            <img id="img-atleta-2" src={content.img_4} alt="Fernando Fernandes" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-jt-black via-transparent to-transparent flex flex-col justify-end p-8 text-center text-white">
               <p className="text-[10px] font-bold text-jt-gold uppercase tracking-[0.3em] mb-1">{content.text_40}&{content.text_41}</p>
               <h4 className="font-display text-2xl uppercase italic leading-none">{content.text_42}</h4>
            </div>
          </div>
          <div className="snap-center shrink-0 w-72 h-[30rem] rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/5 bg-jt-dark text-white">
            <img id="img-atleta-3" src={content.img_5} alt="Running" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-jt-black via-transparent to-transparent flex flex-col justify-end p-8 text-center text-white">
               <p className="text-[10px] font-bold text-jt-gold uppercase tracking-[0.3em] mb-1">{content.text_43}</p>
               <h4 className="font-display text-2xl uppercase italic leading-none">{content.text_44}</h4>
            </div>
          </div>
       </div>
    </section>

    
    <section className="px-6 py-20 reveal border-t border-white/5">
       <div className="text-center mb-12">
          <h2 className="font-display text-3xl uppercase tracking-tighter text-white leading-none">{content.text_45}<br /><span className="text-jt-gold italic text-xl">{content.text_46}</span></h2>
          <p className="text-[10px] text-white/40 uppercase tracking-widest mt-4 font-black">{content.text_47}</p>
       </div>

       <div className="grid grid-cols-2 gap-3">
          
          <div  className="aspect-[9/16] rounded-[2.5rem] overflow-hidden relative glass-premium cursor-pointer group shadow-xl">
             <img id="img-feed-1" src={content.img_6} alt="Feedback Vídeo" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
             <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent">
                <i data-lucide="play-circle" className="w-12 h-12 text-white/80 group-hover:scale-110 transition-transform"></i>
             </div>
          </div>
          
          <div  className="aspect-[9/16] rounded-[2.5rem] overflow-hidden relative glass-premium cursor-pointer group shadow-xl">
             <img id="img-feed-2" src={content.img_7} alt="Feedback Vídeo" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
             <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent">
                <i data-lucide="play-circle" className="w-12 h-12 text-white/80 group-hover:scale-110 transition-transform"></i>
             </div>
          </div>
          
          <div  className="col-span-2 aspect-[16/9] rounded-[2.5rem] overflow-hidden relative glass-premium cursor-pointer group shadow-xl mt-1">
             <img id="img-feed-3" src={content.img_8} alt="Feedback Especial" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
             <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
                   <i data-lucide="instagram" className="w-8 h-8 text-white"></i>
                </div>
             </div>
             <p className="absolute bottom-4 left-0 w-full text-center text-[9px] font-black uppercase tracking-widest text-white/60">{content.text_48}</p>
          </div>
       </div>
    </section>

    
    <section className="px-6 pb-24 reveal">
       <div className="glass-premium rounded-[3.5rem] overflow-hidden border-white/5 relative group bg-gradient-to-br from-jt-dark to-black shadow-2xl">
          <div className="h-64 relative overflow-hidden">
             <img id="img-corp" src={content.img_9} alt="Ambiente Corporativo" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-jt-black via-jt-black/20 to-transparent"></div>
          </div>
          <div className="p-10 pt-8 text-white text-center">
             <h3 className="font-display text-4xl font-black italic uppercase tracking-tighter mb-4 leading-none">{content.text_49}<br />{content.text_50}</h3>
             <p className="text-xs text-jt-silver leading-relaxed font-medium mb-10 px-2">{content.text_51}</p>
             <button  className="w-full py-5 rounded-2xl border border-jt-gold text-jt-gold font-black text-[11px] uppercase tracking-widest hover:bg-jt-gold hover:text-jt-black transition-all">{content.text_52}</button>
          </div>
       </div>
    </section>

    
    <section className="px-6 py-20 reveal border-t border-white/5">
      <div className="text-center mb-10 text-white">
        <h2 className="font-display text-3xl uppercase tracking-tighter leading-none">{content.text_53}</h2>
        <p className="text-[10px] text-jt-silver uppercase tracking-[0.4em] font-bold mt-4">{content.text_54}</p>
      </div>

      <div className="glass-premium p-4 rounded-[3.5rem] overflow-hidden shadow-2xl relative border-white/5 bg-jt-dark">
        <div className="w-full h-80 rounded-[3rem] overflow-hidden relative shadow-inner">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.650868779693!2d-41.3283!3d-21.7569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc530467b5e1f7%3A0x673967d1656f70!2sCampos%20dos%20Goytacazes%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1714080000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
        </div>
        
        <div className="p-10 text-center">
          <p className="text-xs text-jt-silver font-bold italic mb-8 leading-relaxed text-center mx-auto">{content.text_55}<br />
            <span className="text-white not-italic uppercase tracking-widest block mt-2 font-black">{content.text_56}</span>
          </p>
          <div className="grid grid-cols-2 gap-3">
             <button  className="bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 active:bg-white/10">
                <i data-lucide="map-pin" className="w-4 h-4"></i>{content.text_57}</button>
             <button  className="bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 active:bg-white/10">
                <i data-lucide="navigation" className="w-4 h-4"></i>{content.text_58}</button>
          </div>
        </div>
      </div>
    </section>

    
    <section className="mt-auto px-8 pt-10 pb-24 bg-black border-t border-white/5 text-center reveal">
      <div className="w-16 h-16 bg-jt-gold/5 rounded-full border border-jt-gold/10 flex items-center justify-center mx-auto mb-10 shadow-xl text-jt-gold text-center">
        <i data-lucide="award" className="w-8 h-8 opacity-30"></i>
      </div>
      <h3 className="font-display text-2xl mb-12 tracking-tighter uppercase leading-none text-white italic text-center mx-auto">{content.text_59}<br /><span className="text-jt-gold opacity-60 font-black">{content.text_60}</span></h3>
      
      <div className="space-y-4 max-w-xs mx-auto">
        <button  className="w-full bg-jt-gold text-jt-black py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl active:scale-[0.97] transition-all flex items-center justify-center gap-3">
          <i data-lucide="message-circle" className="w-5 h-5"></i>{content.text_61}</button>
        <button  className="w-full glass-premium py-5 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 active:scale-[0.97] active:bg-white/10 transition-all text-white">
          <i data-lucide="instagram" className="w-5 h-5 text-jt-gold"></i>{content.text_62}</button>
      </div>

      <div className="mt-24 pt-10 border-t border-white/5 opacity-20 text-white">
        <p className="text-[8px] font-bold uppercase tracking-[0.5em] mb-4">{content.text_63}</p>
        <p className="text-[8px] uppercase tracking-[0.4em]">{content.text_64}<strong className="text-white tracking-[0.2em] font-black">{content.text_65}</strong>{content.text_66}</p>
      </div>
    </section>

  </div>

  

    </div>
  );
}
