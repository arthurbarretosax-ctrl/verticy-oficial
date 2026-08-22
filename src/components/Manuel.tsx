import React from "react";
import "@/assets/css/manuel.css";

export default function Manuel({ content }: { content: any }) {
  return (
    <div className="manuel-wrapper template-manuel selection:bg-manuel-blue selection:text-white pb-20">
      

  
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap');
      `}</style>
<div className="bg-noise"></div>

  
  <div className="max-w-md mx-auto min-h-screen relative bg-manuel-bg shadow-2xl sm:border-x sm:border-white/5 overflow-hidden">
    
    
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-manuel-blue/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
    <div className="absolute bottom-[20%] left-0 w-[300px] h-[300px] bg-manuel-orange/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2"></div>

    
    <header className="relative pt-12 pb-6 px-6 text-center z-10 reveal active">
      
      
      <div className="inline-flex items-center gap-2 bg-manuel-card border border-manuel-orange/30 px-3 py-1.5 rounded-full mb-8 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
        <i data-lucide="zap" className="w-3.5 h-3.5 text-manuel-orange"></i>
        <span className="text-[10px] font-bold uppercase tracking-widest text-manuel-orange">{content.text_1}&{content.text_2}</span>
      </div>

      
      <div className="relative w-40 h-40 mx-auto mb-6">
        <div className="w-full h-full rounded-full border-[3px] border-manuel-blue/40 glow-pulse p-1 bg-manuel-bg">
          <div className="w-full h-full rounded-full overflow-hidden bg-manuel-card border-4 border-manuel-bg relative z-10">
            <img id="img-perfil" src={content.img_1} alt="Manuel Lema" className="w-full h-full object-cover" loading="eager" />
          </div>
        </div>
        
        <div className="absolute bottom-1 right-2 bg-manuel-blue p-1.5 rounded-full border-4 border-manuel-bg z-20 shadow-lg">
          <i data-lucide="check" className="w-4 h-4 text-white stroke-[3]"></i>
        </div>
      </div>

      <h1 className="font-display text-4xl font-bold text-white tracking-wide uppercase mb-1">{content.text_3}</h1>
      <h2 className="text-xs font-semibold text-manuel-muted uppercase tracking-[0.2em] mb-6">{content.text_4}</h2>

      <p className="text-sm text-gray-300 leading-relaxed max-w-[90%] mx-auto font-medium mb-10">{content.text_5}<strong className="text-white bg-white/10 px-1.5 py-0.5 rounded">{content.text_6}</strong>. <br />{content.text_7}</p>

      <div className="flex flex-col gap-4 px-2">
        
        <button  className="w-full bg-manuel-blue hover:bg-blue-600 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl btn-glow active:scale-95 transition-all">{content.text_8}</button>
        
        <button  className="w-full glass-card py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 active:bg-white/10 active:scale-95 transition-all border border-white/5">
          <i data-lucide="user" className="w-4 h-4 text-manuel-orange"></i>{content.text_9}</button>
      </div>
    </header>

    
    <section className="px-5 pb-10 relative z-10 reveal">
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-br from-manuel-card to-[#2a1205] border border-manuel-orange/20 rounded-2xl p-5 text-center shadow-lg">
          <div className="flex justify-center mb-1"><i data-lucide="flame" className="w-5 h-5 text-manuel-orange fill-manuel-orange/20"></i></div>
          <p className="font-display text-2xl font-bold text-white mb-1 leading-none">{content.text_10}</p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-manuel-muted">{content.text_11}</p>
        </div>
        <div className="bg-gradient-to-br from-manuel-card to-[#07132b] border border-manuel-blue/20 rounded-2xl p-5 text-center shadow-lg">
          <div className="flex justify-center mb-1"><i data-lucide="users" className="w-5 h-5 text-manuel-blue"></i></div>
          <p className="font-display text-2xl font-bold text-white mb-1 leading-none">{content.text_12}</p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-manuel-muted">{content.text_13}</p>
        </div>
      </div>
    </section>

    
    <div className="w-full overflow-hidden border-y border-white/5 py-4 mb-10 relative z-20 bg-manuel-card/40 backdrop-blur-md">
      <div className="animate-marquee flex gap-8 items-center text-white italic">
        <span className="text-[11px] font-black uppercase tracking-widest">{content.text_14}</span>
        <span className="text-[10px] text-manuel-orange">⚡</span>
        <span className="text-[11px] font-black uppercase tracking-widest">{content.text_15}</span>
        <span className="text-[10px] text-manuel-orange">⚡</span>
        <span className="text-[11px] font-black uppercase tracking-widest text-manuel-blue not-italic">{content.text_16}&{content.text_17}</span>
        <span className="text-[10px] text-manuel-orange">⚡</span>
        
        <span className="text-[11px] font-black uppercase tracking-widest">{content.text_18}</span>
        <span className="text-[10px] text-manuel-orange">⚡</span>
        <span className="text-[11px] font-black uppercase tracking-widest">{content.text_19}</span>
        <span className="text-[10px] text-manuel-orange">⚡</span>
        <span className="text-[11px] font-black uppercase tracking-widest text-manuel-blue not-italic">{content.text_20}&{content.text_21}</span>
      </div>
    </div>

    
    <section className="py-8 relative z-10 bg-manuel-card/20 reveal border-t border-white/5">
      <div className="px-6 mb-6 font-display text-xl font-bold uppercase tracking-wide text-manuel-muted">{content.text_22}</div>
      
      <div className="flex overflow-x-auto gap-4 px-6 hide-scrollbar snap-x pb-4">
        
        
        <div  className="snap-center shrink-0 w-48 h-72 rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl cursor-pointer group">
          <img src={content.img_2} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-xl group-hover:scale-110 transition-transform">
               <i data-lucide="play" className="w-6 h-6 text-white fill-white ml-0.5"></i>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
            <p className="text-[11px] font-bold text-white leading-tight uppercase tracking-wide">{content.text_23}</p>
          </div>
        </div>

        
        <div  className="snap-center shrink-0 w-48 h-72 rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl cursor-pointer group">
          <img src={content.img_3} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-xl group-hover:scale-110 transition-transform">
               <i data-lucide="play" className="w-6 h-6 text-white fill-white ml-0.5"></i>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
            <p className="text-[11px] font-bold text-white leading-tight uppercase tracking-wide">{content.text_24}</p>
          </div>
        </div>

        
        <div  className="snap-center shrink-0 w-48 h-72 rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl cursor-pointer group">
          <img src={content.img_4} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-xl group-hover:scale-110 transition-transform">
               <i data-lucide="play" className="w-6 h-6 text-white fill-white ml-0.5"></i>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
            <p className="text-[11px] font-bold text-white leading-tight uppercase tracking-wide">{content.text_25}&{content.text_26}</p>
          </div>
        </div>

      </div>
    </section>

    
    <section id="sobre" className="px-6 py-12 relative z-10 reveal border-t border-white/5 mt-4">
      <div className="glass-card rounded-[2.5rem] overflow-hidden shadow-2xl relative flex flex-col border border-white/10">
        
        
        <div className="w-full h-[32rem] relative">
           <img id="img-sobre" src={content.img_5} alt="Manuel Lema" className="w-full h-full object-cover object-top" loading="lazy" />
           
           <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-[#18181b]/60 to-transparent"></div>
        </div>

        <div className="px-8 pb-12 relative z-20 -mt-28">
          <h3 className="font-display text-4xl font-bold text-white mb-1 uppercase italic tracking-tighter drop-shadow-xl">{content.text_27}</h3>
          <p className="text-[10px] uppercase tracking-[0.25em] text-manuel-orange font-black mb-8 drop-shadow-md">{content.text_28}&{content.text_29}</p>
          
          <div className="w-12 h-1 bg-manuel-blue mb-8 shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>
          
          <div className="space-y-4 text-sm text-gray-300 leading-relaxed font-medium text-justify">
            <p>{content.text_30}</p>
            <p>{content.text_31}<strong className="text-white">{content.text_32}</strong>{content.text_33}</p>
          </div>
        </div>
      </div>
    </section>

    
    <section className="px-6 py-10 relative z-10 reveal">
      <div className="glass-card rounded-[2rem] p-8 text-center relative overflow-hidden border-t-2 border-t-manuel-blue">
        <i data-lucide="quote" className="absolute -top-2 -left-2 w-16 h-16 text-white/5 rotate-180"></i>
        <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide mb-4">{content.text_34}<span className="text-manuel-blue">{content.text_35}</span></h3>
        <p className="text-[13px] text-manuel-muted leading-relaxed font-medium">{content.text_36}</p>
      </div>
    </section>

    
    <footer className="px-6 pt-12 pb-24 relative z-10 text-center bg-[#030303] rounded-t-[3rem] border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      
      <div className="w-16 h-1.5 bg-white/10 rounded-full mx-auto mb-10"></div>

      <h2 className="font-display text-3xl font-bold text-white uppercase tracking-wider mb-10 leading-none">{content.text_37}<br />a <span className="text-manuel-orange italic">{content.text_38}</span>
      </h2>

      <div className="space-y-4 max-w-xs mx-auto mb-16">
        
        <button  className="w-full bg-manuel-blue hover:bg-blue-600 text-white py-5 rounded-2xl font-bold text-[12px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95">
          <i data-lucide="target" className="w-5 h-5"></i>{content.text_39}</button>

        
        <button  className="w-full border border-white/10 bg-white/5 text-white/70 py-4 rounded-2xl font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 hover:text-white transition-all">
          <i data-lucide="instagram" className="w-4 h-4"></i>{content.text_40}</button>
      </div>

      <div className="pt-10 border-t border-white/5 opacity-30 text-[8px] font-bold uppercase tracking-[0.5em] text-gray-500 text-center mx-auto">{content.text_41}<span className="text-white tracking-widest">{content.text_42}</span>
      </div>
    </footer>

  </div>

  

    </div>
  );
}
