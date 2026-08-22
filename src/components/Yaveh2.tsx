import React from "react";

export default function Yaveh2({ content }: { content: any }) {
  return (
    <div className="yaveh2-wrapper">
      

  <div className="bg-noise"></div>

  
  <div className="max-w-[480px] mx-auto min-h-screen relative sm:border-x sm:border-white/5 flex flex-col bg-yaveh-black shadow-2xl">
    
    
    <header className="absolute top-0 left-0 w-full pt-8 z-50 flex justify-center px-4">
      <div className="w-24 h-24 rounded-full border-[3px] border-yaveh-gold/30 shadow-[0_0_30px_rgba(217,197,178,0.15)] overflow-hidden bg-white flex items-center justify-center">
        <img id="img-logo" src={content.img_1} alt="Yaveh Logo" className="w-full h-full object-cover"  />
      </div>
    </header>

    
    <section className="relative w-full aspect-[9/16] overflow-hidden rounded-b-[4rem] border-b border-yaveh-gold/20 reveal active">
      <div className="absolute inset-0 z-0">
        <img id="img-hero" src={content.img_2} alt="Yaveh Fisioterapia" className="w-full h-full object-cover object-top animate-zoom" loading="eager" fetchpriority="high"  />
        <div className="absolute inset-0 bg-gradient-to-t from-yaveh-black via-yaveh-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-yaveh-black/60 via-transparent to-transparent"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-8 pb-16 z-20 text-center text-white">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-yaveh-gold mb-3">{content.text_1}</h2>
        
        <h1 className="font-display text-4xl font-medium text-white leading-tight mb-8">{content.text_2}<br />{content.text_3}<span className="text-yaveh-gold italic">{content.text_4}&{content.text_5}</span>
        </h1>
        
        <div className="flex flex-col gap-4">
          <button  className="w-full bg-yaveh-gold text-yaveh-black py-5 rounded-2xl font-bold text-[11px] uppercase tracking-widest shadow-[0_0_20px_rgba(217,197,178,0.2)] active:scale-[0.98] transition-all">{content.text_6}</button>
          <button  className="w-full glass-premium py-4 rounded-2xl font-semibold text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 active:bg-white/10 active:scale-[0.98] transition-all border border-yaveh-gold/20">
            <i data-lucide="heart" className="w-4 h-4 text-yaveh-gold"></i>{content.text_7}</button>
        </div>
      </div>
    </section>

    
    <div className="w-full overflow-hidden border-b border-yaveh-gold/10 py-5 relative z-20 bg-yaveh-dark/80 backdrop-blur-md">
      <div className="animate-marquee flex gap-10 items-center text-yaveh-silver text-[10px] font-semibold uppercase tracking-[0.2em]">
        <span>{content.text_8}</span>
        <span className="text-yaveh-gold/40">✦</span>
        <span>{content.text_9}</span>
        <span className="text-yaveh-gold/40">✦</span>
        <span>{content.text_10}</span>
        <span className="text-yaveh-gold/40">✦</span>
        <span>{content.text_11}</span>
        <span className="text-yaveh-gold/40">✦</span>
        
        
        <span>{content.text_12}</span>
        <span className="text-yaveh-gold/40">✦</span>
        <span>{content.text_13}</span>
        <span className="text-yaveh-gold/40">✦</span>
        <span>{content.text_14}</span>
        <span className="text-yaveh-gold/40">✦</span>
        <span>{content.text_15}</span>
        <span className="text-yaveh-gold/40">✦</span>
      </div>
    </div>

    
    <section id="especialista" className="px-6 py-20 reveal">
       <div className="glass-premium rounded-[3rem] overflow-hidden border border-yaveh-gold/10 shadow-2xl relative group bg-gradient-to-br from-yaveh-dark to-yaveh-black text-center">
          <div className="h-[26rem] relative overflow-hidden">
             <img id="img-especialista" src={content.img_3} alt="Dra. Isabela Baierle" className="w-full h-full object-cover object-top"  />
             <div className="absolute inset-0 bg-gradient-to-t from-yaveh-black via-yaveh-black/30 to-transparent"></div>
          </div>
          
          <div className="p-10 pt-6 relative z-10">
             <h2 className="font-display text-3xl font-medium text-white mb-2">{content.text_16}</h2>
             <p className="text-[10px] font-bold text-yaveh-gold uppercase tracking-[0.3em] mb-8">{content.text_17}</p>
             
             
             <div className="space-y-4 text-[13px] text-yaveh-silver leading-relaxed font-light text-justify">
                <p>{content.text_18}<strong className="text-white font-medium">{content.text_19}</strong>{content.text_20}</p>
                <p>{content.text_21}<strong className="text-white font-medium">{content.text_22}</strong>{content.text_23}</p>
             </div>
          </div>
       </div>
    </section>

    
    <section className="px-6 py-20 bg-yaveh-dark/40 border-y border-yaveh-gold/10 reveal">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl text-white mb-2">{content.text_24}</h2>
        <p className="text-[10px] text-yaveh-gold uppercase tracking-widest font-bold">{content.text_25}</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        
        
        <div className="glass-premium p-8 rounded-[2rem] border-t-2 border-t-yaveh-gold group">
           <div className="flex flex-col items-center text-center mb-5">
              <div className="w-14 h-14 rounded-full bg-yaveh-gold/10 flex items-center justify-center border border-yaveh-gold/20 mb-4">
                 <i data-lucide="baby" className="w-6 h-6 text-yaveh-gold"></i>
              </div>
              <h4 className="font-serif text-xl font-medium text-white mb-1">{content.text_26}</h4>
           </div>
           <p className="text-[12px] text-yaveh-silver font-light leading-relaxed text-justify">{content.text_27}</p>
           <button  className="mt-6 w-full bg-white/5 border border-yaveh-gold/20 text-yaveh-gold py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-yaveh-gold/10 transition-colors">{content.text_28}</button>
        </div>

        
        <div className="glass-premium p-8 rounded-[2rem] border-t-2 border-t-white/30 group">
           <div className="flex flex-col items-center text-center mb-5">
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-4">
                 <i data-lucide="brain" className="w-6 h-6 text-white"></i>
              </div>
              <h4 className="font-serif text-xl font-medium text-white mb-1">{content.text_29}</h4>
              <p className="text-[10px] text-yaveh-gold uppercase tracking-widest font-bold">{content.text_30}</p>
           </div>
           <p className="text-[12px] text-yaveh-silver font-light leading-relaxed text-justify">{content.text_31}</p>
           <button  className="mt-6 w-full bg-white/5 border border-white/20 text-white py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-colors">{content.text_32}</button>
        </div>

        
        <div className="glass-premium p-8 rounded-[2rem] border-t-2 border-t-yaveh-gold group">
           <div className="flex flex-col items-center text-center mb-5">
              <div className="w-14 h-14 rounded-full bg-yaveh-gold/10 flex items-center justify-center border border-yaveh-gold/20 mb-4">
                 <i data-lucide="wind" className="w-6 h-6 text-yaveh-gold"></i>
              </div>
              <h4 className="font-serif text-xl font-medium text-white mb-1">{content.text_33}</h4>
              <p className="text-[10px] text-yaveh-gold uppercase tracking-widest font-bold">{content.text_34}</p>
           </div>
           <p className="text-[12px] text-yaveh-silver font-light leading-relaxed text-justify">{content.text_35}</p>
           <button  className="mt-6 w-full bg-white/5 border border-yaveh-gold/20 text-yaveh-gold py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-yaveh-gold/10 transition-colors">{content.text_36}</button>
        </div>

      </div>
    </section>

    
    <section className="py-16 bg-[#100E0C] border-t border-yaveh-gold/5">
       <div className="text-center mb-10 px-6 reveal">
          <h2 className="font-display text-3xl text-white mb-3">{content.text_37}</h2>
          <p className="text-[11px] text-yaveh-silver font-light max-w-[280px] mx-auto">{content.text_38}</p>
       </div>

       <div className="flex overflow-x-auto gap-5 px-6 hide-scrollbar snap-x pb-8">
          
          <div className="snap-center shrink-0 w-64 h-[26rem] rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-yaveh-gold/10 bg-yaveh-dark text-white text-center reveal group">
            <img id="img-clinica1" src={content.img_4} alt="Árvore da Vida" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-yaveh-black via-transparent to-transparent flex flex-col justify-end p-8">
               <p className="text-[9px] font-bold text-yaveh-gold uppercase tracking-[0.2em] mb-1">{content.text_39}</p>
               <h4 className="font-display text-xl italic text-white">{content.text_40}</h4>
            </div>
          </div>
          
          <div className="snap-center shrink-0 w-64 h-[26rem] rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-yaveh-gold/10 bg-yaveh-dark text-white text-center reveal group">
            <img id="img-clinica2" src={content.img_5} alt="Luzes e Conforto" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-yaveh-black via-transparent to-transparent flex flex-col justify-end p-8">
               <p className="text-[9px] font-bold text-yaveh-gold uppercase tracking-[0.2em] mb-1">{content.text_41}</p>
               <h4 className="font-display text-xl italic text-white">{content.text_42}</h4>
            </div>
          </div>
       </div>
    </section>

    
    <section className="px-6 py-20 relative overflow-hidden reveal">
      
      <div className="absolute -right-10 top-10 w-40 h-40 bg-yaveh-gold/10 rounded-full blur-[80px]"></div>
      
      <div className="glass-premium border border-yaveh-gold/10 p-10 rounded-[3rem] shadow-2xl text-center relative overflow-hidden bg-yaveh-dark/50">
        <i data-lucide="quote" className="absolute top-6 right-6 w-12 h-12 text-yaveh-gold/10 rotate-180"></i>
        
        <h3 className="font-display text-2xl font-medium text-white italic leading-snug mb-6 relative z-10">{content.text_43}</h3>
        
        <p className="text-xs text-yaveh-silver leading-relaxed font-light mb-8 relative z-10">{content.text_44}</p>

        <button  className="w-full bg-transparent border border-yaveh-gold/30 text-yaveh-gold py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-yaveh-gold/10 transition-all flex items-center justify-center gap-2 relative z-10">
          <i data-lucide="instagram" className="w-4 h-4"></i>{content.text_45}</button>
      </div>
    </section>

    
    <section className="px-6 py-16 border-t border-yaveh-gold/5 reveal">
      <div className="text-center mb-8 text-white">
        <h2 className="font-display text-2xl text-white">{content.text_46}</h2>
        <p className="text-[10px] text-yaveh-gold uppercase tracking-[0.3em] font-bold mt-2">{content.text_47}</p>
      </div>

      <div className="glass-premium p-3 rounded-[3rem] overflow-hidden shadow-2xl relative border-yaveh-gold/10 bg-yaveh-dark/40 text-center">
        
        <div className="w-full h-64 rounded-[2.5rem] overflow-hidden relative shadow-inner">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.593256086203!2d-53.7431!3d-24.7214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQzJzE3LjAiUyA1M8KwNDQnMzUuMiJX!5e0!3m2!1spt-BR!2sbr!4v1714080000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: '0', filter: 'grayscale(0.8) invert(90%) sepia(20%) hue-rotate(330deg)' }} allowfullscreen="" loading="lazy"></iframe>
        </div>
        
        <div className="p-8 text-center text-white">
          <p className="text-xs text-yaveh-silver font-medium mb-3 leading-relaxed">{content.text_48}<br />
            <span className="text-white block mt-1 font-semibold">{content.text_49}</span>
          </p>
          <a href="mailto:yavehfisioterapiainfantil@gmail.com" className="text-[10px] text-yaveh-gold mb-6 block hover:text-white transition-colors">{content.text_50}</a>
          
          <div className="grid grid-cols-2 gap-3">
             <button  className="bg-yaveh-black border border-yaveh-gold/20 text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-yaveh-gold/10 transition-colors">
                <i data-lucide="map-pin" className="w-3.5 h-3.5 text-yaveh-gold"></i>{content.text_51}</button>
             <button  className="bg-yaveh-black border border-yaveh-gold/20 text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-yaveh-gold/10 transition-colors">
                <i data-lucide="navigation" className="w-3.5 h-3.5 text-yaveh-gold"></i>{content.text_52}</button>
          </div>
        </div>
      </div>
    </section>

    
    <section className="mt-auto px-8 pt-8 pb-20 bg-[#0C0B0A] border-t border-yaveh-gold/10 text-center reveal text-white rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.2)]">
      
      <h3 className="font-display text-2xl mb-8 text-white italic">{content.text_53}</h3>
      
      <div className="space-y-4 max-w-[280px] mx-auto">
        
        <button  className="w-full bg-yaveh-gold text-yaveh-black py-4 rounded-full font-bold text-[11px] uppercase tracking-widest shadow-[0_0_20px_rgba(217,197,178,0.2)] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
          <i data-lucide="calendar-heart" className="w-4 h-4"></i>{content.text_54}</button>
      </div>

      <div className="mt-16 pt-8 border-t border-yaveh-gold/10 opacity-40 text-yaveh-silver text-center">
        <p className="text-[8px] font-bold uppercase tracking-[0.4em] mb-3">{content.text_55}</p>
        <p className="text-[8px] uppercase tracking-[0.3em]">{content.text_56}<strong className="text-yaveh-gold tracking-[0.2em] font-black">{content.text_57}</strong>{content.text_58}</p>
      </div>
    </section>

  </div>

  

    </div>
  );
}
