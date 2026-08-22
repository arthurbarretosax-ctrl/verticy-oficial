import React from "react";

export default function LaylaPsi({ content }: { content: any }) {
  return (
    <div className="layla.psi-wrapper">
      

  
  <div className="max-w-md mx-auto bg-layla-bg min-h-screen relative shadow-2xl overflow-hidden sm:border-x sm:border-white/40">
    
    
    <header className="relative w-full h-[60vh] overflow-hidden group border-b border-white/40">
      <div className="absolute inset-0">
        <img id="img-capa" src={content.img_1} alt="Dra. Layla Ferreira" className="w-full h-full object-cover animate-zoom" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-layla-bg via-layla-bg/10 to-transparent"></div>
      </div>

      <div className="absolute bottom-10 left-0 w-full px-8 text-center reveal active z-10">
        <h2 className="text-[10px] font-bold text-layla-text uppercase tracking-[0.4em] mb-3 opacity-60 italic">{content.text_1}</h2>
        <h1 className="font-serif text-5xl font-medium text-layla-text leading-none tracking-tight">{content.text_2}</h1>
        <p className="text-[11px] font-bold text-layla-brown uppercase tracking-[0.2em] mt-4">{content.text_3}</p>
      </div>
    </header>

    
    <section className="px-6 py-12 reveal bg-white/30 border-b border-white/40">
      <div className="text-center mb-8">
        <i data-lucide="leaf" className="w-6 h-6 text-layla-brown mx-auto mb-3 opacity-40"></i>
        <h3 className="text-[10px] font-bold text-layla-brown uppercase tracking-[0.3em] mb-2 italic">{content.text_4}</h3>
        <h2 className="font-serif text-3xl text-layla-text italic">{content.text_5}<br /><span className="not-italic font-bold uppercase tracking-tighter">{content.text_6}</span></h2>
        <p className="text-[12px] text-layla-text/60 mt-4 px-4 leading-relaxed font-medium">{content.text_7}</p>
      </div>

      <div id="quiz-container" className="glass-light p-8 rounded-[3rem] relative min-h-[380px] flex flex-col justify-between overflow-hidden">
        
        <div id="quiz-start" className="text-center py-8">
          <p className="text-sm text-layla-text/70 mb-8 leading-relaxed italic">{content.text_8}</p>
          <button  className="w-full bg-layla-text text-white py-5 rounded-full font-bold text-[12px] uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all btn-pulse flex items-center justify-center gap-3">{content.text_9}<i data-lucide="chevron-right" className="w-4 h-4"></i>
          </button>
        </div>

        <div id="quiz-steps" className="hidden flex-col h-full">
          <div className="mb-6">
            <span id="quiz-progress" className="text-[10px] font-black text-layla-brown uppercase tracking-widest">{content.text_10}</span>
            <div className="w-full h-1 bg-layla-text/5 rounded-full mt-2 overflow-hidden"><div id="quiz-bar" className="w-[20%] h-full bg-layla-brown transition-all duration-500"></div></div>
          </div>
          
          <h4 id="quiz-question" className="font-serif text-2xl text-layla-text mb-8 leading-tight text-center">{content.text_11}</h4>
          
          <div className="space-y-2.5" id="quiz-options">
            <button  className="w-full border border-layla-text/10 p-4 rounded-2xl text-xs font-medium text-left flex items-center justify-between hover:bg-layla-text/5 transition-colors">{content.text_12}<span>0</span></button>
            <button  className="w-full border border-layla-text/10 p-4 rounded-2xl text-xs font-medium text-left flex items-center justify-between hover:bg-layla-text/5 transition-colors">{content.text_13}<span>1</span></button>
            <button  className="w-full border border-layla-text/10 p-4 rounded-2xl text-xs font-medium text-left flex items-center justify-between hover:bg-layla-text/5 transition-colors">{content.text_14}<span>2</span></button>
            <button  className="w-full border border-layla-text/10 p-4 rounded-2xl text-xs font-medium text-left flex items-center justify-between hover:bg-layla-text/5 transition-colors">{content.text_15}<span>3</span></button>
          </div>
        </div>

        <div id="quiz-result" className="hidden text-center py-4">
          <div id="result-icon" className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-layla-accent/20 text-layla-brown"><i data-lucide="heart" className="w-8 h-8"></i></div>
          <h3 id="result-title" className="font-serif text-3xl text-layla-text mb-3">{content.text_16}</h3>
          <p id="result-desc" className="text-xs text-layla-text/70 leading-relaxed mb-10 font-medium">{content.text_17}</p>
          <button  className="w-full bg-layla-text text-white py-5 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all">{content.text_18}</button>
        </div>
      </div>
    </section>

    
    <section className="px-8 py-16 reveal">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-[1px] bg-layla-brown"></div>
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-layla-brown">{content.text_19}</h2>
      </div>

      <h2 className="font-serif text-4xl text-layla-text mb-8 leading-tight italic">{content.text_20}<br /><span className="not-italic font-bold uppercase tracking-tighter text-2xl">{content.text_21}</span></h2>

      <div className="space-y-6 text-[14px] text-layla-text/80 leading-relaxed font-medium text-justify">
        <p>{content.text_22}<strong className="text-layla-text">{content.text_23}</strong>{content.text_24}</p>
        
        <div className="glass-light p-6 rounded-[2rem] border-l-4 border-l-layla-brown">
           <p className="text-[11px] font-bold uppercase tracking-widest text-layla-brown mb-2">{content.text_25}</p>
           <p className="text-xs font-semibold italic text-layla-text">{content.text_26}</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/40 p-5 rounded-3xl border border-white/60">
             <i data-lucide="brain" className="w-5 h-5 text-layla-brown mb-3"></i>
             <h4 className="text-[11px] font-black uppercase mb-1">{content.text_27}</h4>
             <p className="text-[10px] leading-snug">{content.text_28}</p>
          </div>
          <div className="bg-white/40 p-5 rounded-3xl border border-white/60">
             <i data-lucide="home" className="w-5 h-5 text-layla-brown mb-3"></i>
             <h4 className="text-[11px] font-black uppercase mb-1">{content.text_29}</h4>
             <p className="text-[10px] leading-snug">{content.text_30}</p>
          </div>
        </div>
      </div>
    </section>

    
    <section className="px-6 py-12 bg-layla-accent/10 border-y border-white/40 reveal">
      <div className="text-center mb-10">
        <h3 className="text-[10px] font-bold text-layla-brown uppercase tracking-[0.4em] mb-2">{content.text_31}</h3>
        <h2 className="font-serif text-3xl text-layla-text uppercase font-bold tracking-tighter">{content.text_32}</h2>
      </div>

      <div className="space-y-4">
        <div className="glass-light p-5 rounded-[2rem] flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm"><i data-lucide="clock" className="w-5 h-5 text-layla-brown"></i></div>
          <div><p className="text-xs font-bold text-layla-text uppercase">{content.text_33}</p><p className="text-[10px] text-layla-text/60 italic">{content.text_34}</p></div>
        </div>
        <div className="glass-light p-5 rounded-[2rem] flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm"><i data-lucide="shield-check" className="w-5 h-5 text-layla-brown"></i></div>
          <div><p className="text-xs font-bold text-layla-text uppercase">{content.text_35}</p><p className="text-[10px] text-layla-text/60 italic">{content.text_36}</p></div>
        </div>
        <div className="glass-light p-5 rounded-[2rem] flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm"><i data-lucide="credit-card" className="w-5 h-5 text-layla-brown"></i></div>
          <div><p className="text-xs font-bold text-layla-text uppercase">{content.text_37}</p><p className="text-[10px] text-layla-text/60 italic">{content.text_38}</p></div>
        </div>
      </div>
    </section>

    
    <section className="px-6 py-12 reveal">
      <div className="text-center mb-8">
        <h2 className="font-serif text-3xl text-layla-text uppercase font-bold tracking-tighter">{content.text_39}</h2>
        <p className="text-[10px] text-layla-text/60 mt-2 italic">{content.text_40}</p>
      </div>

      
      <div className="w-full h-64 rounded-[3rem] overflow-hidden border border-white/60 shadow-lg mb-8">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.7303038666016!2d-41.3323069!3d-21.7516801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc359f97e61a03%3A0xf964003f1d9b7568!2sEd.%20Palladium!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
      </div>

      <div className="glass-light p-6 rounded-[2.5rem] border-l-4 border-l-layla-brown">
          <h4 className="text-xs font-bold text-layla-text uppercase tracking-wider mb-2">{content.text_41}</h4>
          <p className="text-[11px] text-layla-text/80 leading-relaxed">{content.text_42}<br />{content.text_43}</p>
      </div>
    </section>

    
    <footer className="px-8 pt-16 pb-20 relative z-10 text-center bg-white/40 rounded-t-[4rem] border-t border-white/60">
      
      <div className="mb-12">
        <h2 className="text-[11px] font-bold text-layla-brown uppercase tracking-[0.4em] mb-4 italic">{content.text_44}</h2>
        <h3 className="font-serif text-3xl text-layla-text mb-10 leading-tight">{content.text_45}</h3>
        
        <div className="space-y-4">
          <button  className="w-full bg-layla-text text-white py-5 rounded-full font-bold text-[12px] uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3">
            <i data-lucide="message-circle" className="w-5 h-5"></i>{content.text_46}</button>

          
          <button  className="w-full bg-white border border-layla-text/10 text-layla-text py-5 rounded-full font-bold text-[12px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 24 24" fill="none" stroke="url(#ig-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <defs><lineargradient id="ig-grad" x1="2" y1="2" x2="22" y2="22"><stop offset="0%" stop-color="#f9ce34"></stop><stop offset="30%" stop-color="#ee2a7b"></stop><stop offset="70%" stop-color="#6228d7"></stop></lineargradient></defs>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>{content.text_47}</button>
        </div>
      </div>

      
      <div className="pt-8 border-t border-layla-text/5 opacity-40 text-center">
        <p className="text-[9px] font-bold tracking-widest uppercase text-layla-text mb-3 italic">{content.text_48}</p>
        <p className="text-[9px] uppercase tracking-[0.4em] flex items-center justify-center gap-1 font-semibold">{content.text_49}<strong className="text-layla-text tracking-[0.2em] font-black uppercase">{content.text_50}</strong>
        </p>
      </div>
    </footer>

  </div>

  

    </div>
  );
}
