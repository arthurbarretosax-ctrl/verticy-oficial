import React from "react";
import "@/assets/css/ignosforadoar.css";

export default function IgnosForadoar({ content }: { content: any }) {
  return (
    <div className="ignos-foradoar-wrapper template-ignos-foradoar bg-ignoss-dark text-ignoss-light overflow-x-hidden selection:bg-ignoss-accent selection:text-ignoss-dark pb-24">
      

  
  
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Montserrat:ital,wght@0,700;0,800;0,900;1,800&display=swap');
      `}</style>
<div className="max-w-md mx-auto bg-ignoss-dark min-h-screen relative shadow-2xl overflow-hidden sm:border-x sm:border-ignoss-primary/20">
    
    
    <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-ignoss-primary/20 to-transparent pointer-events-none mix-blend-overlay"></div>
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-ignoss-accent rounded-full filter blur-[120px] opacity-30 pointer-events-none"></div>
    <div className="absolute top-[40%] -left-20 w-64 h-64 bg-ignoss-primary rounded-full filter blur-[100px] opacity-20 pointer-events-none"></div>

    
    <header className="relative w-full h-[80vh] overflow-hidden rounded-b-[3rem] border-b border-ignoss-accent/20">
      
      
      <div className="absolute top-10 left-0 w-full flex justify-center z-30 animate-float">
        <img id="img-logo" src={content.img_1} alt="Ignoss Cross Logo" className="h-24 object-contain drop-shadow-[0_0_25px_rgba(174,234,0,0.5)]"  />
      </div>

      
      <div className="absolute inset-0 w-full h-full">
        <img id="img-hero" src={content.img_2} alt="Capa Principal" className="w-full h-full object-cover grayscale-[20%]" loading="eager" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#051509] via-ignoss-dark/80 to-ignoss-primary/20 mix-blend-multiply"></div>
      </div>

      
      <div className="absolute inset-0 flex flex-col justify-end p-8 pb-12 z-20 reveal active text-center">
        
        <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white mb-2 drop-shadow-md">{content.text_1}</h2>
        
        <h1 className="font-display text-6xl font-black text-ignoss-accent leading-none mb-1 uppercase italic tracking-tighter drop-shadow-[0_0_15px_rgba(174,234,0,0.5)]">{content.text_2}</h1>
        <h1 className="font-display text-6xl font-black text-white leading-none mb-4 uppercase italic tracking-tighter drop-shadow-lg">{content.text_3}</h1>
        
        <h3 className="text-sm font-bold text-ignoss-primary uppercase tracking-widest mb-4 bg-black/40 inline-block mx-auto px-4 py-1.5 rounded-full border border-ignoss-primary/30 backdrop-blur-sm">{content.text_4}</h3>

        <p className="text-[13px] text-ignoss-light/90 mb-8 max-w-xs mx-auto font-medium leading-relaxed drop-shadow-md">{content.text_5}</p>

        
        <button  className="group relative w-full bg-ignoss-accent hover:bg-[#c0ff00] flex items-center justify-center py-4 px-6 rounded-xl font-black text-ignoss-dark uppercase tracking-widest transition-all active:scale-95 animate-pulse-green shadow-lg shadow-ignoss-accent/30">
            <i data-lucide="calendar-check-2" className="w-5 h-5 mr-3"></i>{content.text_6}</button>
      </div>
    </header>

    
    <div className="bg-[#1c1c1e] py-4 border-b border-ignoss-primary/20 flex justify-center items-center gap-6 shadow-inner relative z-20">
       <span className="text-[10px] font-bold uppercase tracking-widest text-ignoss-light/70">{content.text_7}</span>
       <div className="flex items-center gap-2">
         <div className="w-2 h-2 rounded-full bg-[#E52836]"></div>
         <span className="font-black text-white italic tracking-tight">{content.text_8}</span>
       </div>
       <div className="w-px h-4 bg-white/20"></div>
       <div className="flex items-center gap-2">
         <div className="w-2 h-2 rounded-full bg-[#00E5FF]"></div>
         <span className="font-black text-white italic tracking-tight">{content.text_9}</span>
       </div>
    </div>

    
    <section className="px-6 py-12 reveal relative z-20">
      <div className="flex items-center gap-3 mb-8">
        <i data-lucide="zap" className="w-6 h-6 text-ignoss-accent fill-ignoss-accent"></i>
        <h2 className="font-display text-2xl font-black uppercase tracking-wider text-white">{content.text_10}</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        
        <div className="bg-ignoss-card p-5 rounded-[2rem] border border-ignoss-primary/20 relative overflow-hidden group col-span-2 h-40 flex items-end shadow-lg">
          <img id="img-vibe-1" src={content.img_3} alt="Comunidade Alegre" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-ignoss-dark via-ignoss-dark/80 to-transparent"></div>
          <div className="relative z-10 flex items-end gap-4 w-full">
             <div className="w-12 h-12 rounded-full bg-ignoss-accent/20 flex items-center justify-center text-ignoss-accent shrink-0 border border-ignoss-accent/30 backdrop-blur-md">
                 <i data-lucide="smile" className="w-6 h-6"></i>
             </div>
             <div className="pb-1">
               <h3 className="font-display text-xl font-bold text-white uppercase mb-1 leading-none">{content.text_11}</h3>
               <p className="text-xs text-ignoss-light/80 leading-snug">{content.text_12}</p>
             </div>
          </div>
        </div>

        
        <div className="bg-ignoss-card p-5 rounded-[2rem] border border-ignoss-primary/20 relative overflow-hidden group shadow-md h-36 flex flex-col justify-end">
          <img id="img-vibe-2" src={content.img_4} alt="Coaches" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:scale-110 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-ignoss-dark to-transparent"></div>
          <div className="relative z-10">
            <i data-lucide="users" className="w-6 h-6 text-ignoss-primary mb-2"></i>
            <h3 className="font-display text-base font-bold text-white uppercase mb-1 leading-none">{content.text_13}</h3>
            <p className="text-[10px] text-ignoss-light/70 leading-tight">{content.text_14}</p>
          </div>
        </div>

        
        <div className="bg-ignoss-card p-5 rounded-[2rem] border border-ignoss-primary/20 relative overflow-hidden group shadow-md h-36 flex flex-col justify-end">
          <img id="img-vibe-3" src={content.img_5} alt="Estrutura" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:scale-110 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-ignoss-dark to-transparent"></div>
          <div className="relative z-10">
            <i data-lucide="box" className="w-6 h-6 text-ignoss-accent mb-2"></i>
            <h3 className="font-display text-base font-bold text-white uppercase mb-1 leading-none">{content.text_15}</h3>
            <p className="text-[10px] text-ignoss-light/70 leading-tight">{content.text_16}</p>
          </div>
        </div>
      </div>
    </section>

    
    <section className="px-6 pb-12 reveal relative z-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-black uppercase tracking-wider text-white">{content.text_17}</h2>
      </div>

      <div className="space-y-4">
        
        <div  className="relative w-full h-48 rounded-[2rem] overflow-hidden group cursor-pointer border border-ignoss-primary/30 shadow-lg">
           <img id="img-treino-1" src={content.img_6} alt="Treino CrossFit" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-110 transition-transform duration-700" loading="lazy" />
           <div className="absolute inset-0 bg-gradient-to-r from-ignoss-dark via-ignoss-dark/80 to-transparent"></div>
           <div className="absolute inset-0 p-6 flex flex-col justify-center">
             <h3 className="font-display text-4xl font-black text-white uppercase italic tracking-tighter drop-shadow-md">{content.text_18}</h3>
             <p className="text-[10px] text-ignoss-accent font-bold mt-1 tracking-widest uppercase">{content.text_19}</p>
             <p className="text-xs text-ignoss-light/70 mt-3 max-w-[85%] leading-tight">{content.text_20}</p>
           </div>
           <div className="absolute right-5 bottom-5 w-12 h-12 bg-ignoss-accent rounded-full flex items-center justify-center text-ignoss-dark group-hover:bg-white transition-colors shadow-[0_0_15px_rgba(174,234,0,0.4)]">
              <i data-lucide="arrow-right" className="w-6 h-6"></i>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
           
           <div className="bg-ignoss-card p-4 rounded-[1.5rem] border border-white/5 shadow-md">
              <i data-lucide="settings-2" className="w-6 h-6 text-ignoss-accent mb-2"></i>
              <h4 className="font-display font-bold text-white text-xs uppercase mb-1">{content.text_21}</h4>
              <p className="text-[10px] text-ignoss-light/60 leading-tight">{content.text_22}</p>
           </div>
           
           <div className="bg-ignoss-card p-4 rounded-[1.5rem] border border-white/5 shadow-md">
              <i data-lucide="timer" className="w-6 h-6 text-ignoss-primary mb-2"></i>
              <h4 className="font-display font-bold text-white text-xs uppercase mb-1">{content.text_23}</h4>
              <p className="text-[10px] text-ignoss-light/60 leading-tight">{content.text_24}</p>
           </div>
        </div>
      </div>
    </section>

    
    <div className="w-full h-64 relative reveal border-y border-ignoss-primary/20">
      <img id="img-divisoria" src={content.img_7} alt="Divisória" className="w-full h-full object-cover grayscale-[20%]" loading="lazy" />
      <div className="absolute inset-0 bg-ignoss-primary/20 mix-blend-multiply"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-display text-4xl font-black text-white italic tracking-tighter uppercase opacity-80 mix-blend-overlay">{content.text_25}</p>
      </div>
    </div>

    
    <section className="px-6 py-12 reveal relative z-20 bg-ignoss-dark">
       <div className="flex items-center gap-3 mb-6">
         <i data-lucide="clock" className="w-6 h-6 text-ignoss-accent"></i>
         <h2 className="font-display text-2xl font-black uppercase tracking-wider text-white">{content.text_26}</h2>
       </div>
       <p className="text-xs text-ignoss-light/70 mb-6">{content.text_27}</p>

       <div className="w-full overflow-x-auto hide-scrollbar rounded-[1.5rem] border border-ignoss-primary/30 shadow-2xl relative">
         
         
         <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
           <svg viewbox="0 0 500 300" preserveaspectratio="none" className="w-full h-full text-ignoss-accent">
             <path d="M-50,250 L150,150 L250,50 L350,150 L550,250" fill="none" stroke="currentColor" stroke-width="3" vector-effect="non-scaling-stroke"></path>
           </svg>
         </div>

         
         <table className="w-full min-w-[500px] text-center border-collapse bg-ignoss-card relative z-10">
           <thead>
             <tr className="bg-ignoss-dark text-white font-black uppercase tracking-widest text-[10px]">
               <th className="py-4 px-2 border-b border-ignoss-primary/20 whitespace-nowrap">{content.text_28}</th>
               <th className="py-4 px-2 border-b border-ignoss-primary/20 whitespace-nowrap">{content.text_29}</th>
               <th className="py-4 px-2 border-b border-ignoss-primary/20 whitespace-nowrap">{content.text_30}</th>
               <th className="py-4 px-2 border-b border-ignoss-primary/20 whitespace-nowrap">{content.text_31}</th>
               <th className="py-4 px-2 border-b border-ignoss-primary/20 whitespace-nowrap">{content.text_32}</th>
             </tr>
           </thead>
           <tbody className="text-ignoss-light font-bold text-sm tracking-widest">
             
             <tr className="bg-white/5 border-b border-white/5">
               <td className="py-3.5 px-2">{content.text_33}</td><td className="py-3.5 px-2">{content.text_34}</td><td className="py-3.5 px-2">{content.text_35}</td><td className="py-3.5 px-2">{content.text_36}</td><td className="py-3.5 px-2">{content.text_37}</td>
             </tr>
             
             <tr className="border-b border-white/5">
               <td className="py-3.5 px-2">{content.text_38}</td><td className="py-3.5 px-2">{content.text_39}</td><td className="py-3.5 px-2">{content.text_40}</td><td className="py-3.5 px-2">{content.text_41}</td><td className="py-3.5 px-2">{content.text_42}</td>
             </tr>
             
             <tr className="bg-white/5 border-b border-white/5">
               <td className="py-3.5 px-2">{content.text_43}</td><td className="py-3.5 px-2 text-white/20 font-normal">{content.text_44}</td><td className="py-3.5 px-2">{content.text_45}</td><td className="py-3.5 px-2 text-white/20 font-normal">{content.text_46}</td><td className="py-3.5 px-2">{content.text_47}</td>
             </tr>
             
             <tr className="border-b border-white/5">
               <td className="py-3.5 px-2">{content.text_48}</td><td className="py-3.5 px-2 text-[#fbbf24] font-black">{content.text_49}</td><td className="py-3.5 px-2">{content.text_50}</td><td className="py-3.5 px-2 text-[#fbbf24] font-black">{content.text_51}</td><td className="py-3.5 px-2">{content.text_52}</td>
             </tr>
             
             <tr className="bg-white/5 border-b border-white/5">
               <td className="py-3.5 px-2">{content.text_53}</td><td className="py-3.5 px-2">{content.text_54}</td><td className="py-3.5 px-2">{content.text_55}</td><td className="py-3.5 px-2">{content.text_56}</td><td className="py-3.5 px-2">{content.text_57}</td>
             </tr>
             
             <tr className="border-b border-white/5">
               <td className="py-3.5 px-2">{content.text_58}</td><td className="py-3.5 px-2">{content.text_59}</td><td className="py-3.5 px-2">{content.text_60}</td><td className="py-3.5 px-2">{content.text_61}</td><td className="py-3.5 px-2">{content.text_62}</td>
             </tr>
             
             <tr className="bg-white/5 border-b border-white/5">
               <td className="py-3.5 px-2">{content.text_63}</td><td className="py-3.5 px-2">{content.text_64}</td><td className="py-3.5 px-2">{content.text_65}</td><td className="py-3.5 px-2">{content.text_66}</td><td className="py-3.5 px-2">{content.text_67}</td>
             </tr>
             
             <tr>
               <td className="py-3.5 px-2">{content.text_68}</td><td className="py-3.5 px-2">{content.text_69}</td><td className="py-3.5 px-2">{content.text_70}</td><td className="py-3.5 px-2">{content.text_71}</td><td className="py-3.5 px-2">{content.text_72}</td>
             </tr>
           </tbody>
         </table>
       </div>
    </section>

    
    <section className="px-8 pt-16 pb-24 relative z-10 bg-ignoss-card text-white text-center reveal rounded-t-[3rem] border-t-2 border-ignoss-accent/20 shadow-[0_-20px_60px_rgba(16,185,129,0.1)]">
      
      <div className="w-12 h-1 bg-ignoss-accent mx-auto mb-8 rounded-full"></div>

      <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-ignoss-accent mb-4">{content.text_73}</h2>
      
      
      <div className="w-full h-56 rounded-[2rem] overflow-hidden border-2 border-ignoss-primary/20 mb-6 bg-ignoss-dark relative z-10 shadow-lg">
        <iframe src="https://maps.google.com/maps?q=Av.%20Zuza%20Mota,%2084%20-%20Parque%20Calabouco,%20Campos%20dos%20Goytacazes&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: '0', filter: 'invert(90%) hue-rotate(80deg) brightness(80%) contrast(120%)' }} allowfullscreen="" loading="lazy"></iframe>
      </div>

      <div className="mb-10 p-6 bg-ignoss-dark/50 border border-ignoss-primary/20 rounded-[2rem] relative overflow-hidden group">
        <div className="flex flex-col items-center gap-4 relative z-10">
            <div className="w-14 h-14 bg-ignoss-accent/10 rounded-full flex items-center justify-center">
                <i data-lucide="map-pin" className="w-7 h-7 text-ignoss-accent"></i>
            </div>
            <p className="text-sm leading-relaxed text-ignoss-light/90 font-medium">{content.text_74}<br />{content.text_75}</p>
        </div>
      </div>

      <div className="space-y-4 mb-12">
        
        <button  className="w-full bg-ignoss-primary hover:bg-[#0e9f6e] text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-lg shadow-ignoss-primary/20 active:scale-95">
          <i data-lucide="message-circle" className="w-7 h-7"></i>{content.text_76}</button>

        
        <button  className="w-full bg-transparent border-2 border-ignoss-light/10 text-ignoss-light/70 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 mt-4 hover:bg-ignoss-light/5 hover:text-white hover:border-ignoss-accent">
          <i data-lucide="instagram" className="w-5 h-5"></i>{content.text_77}</button>
      </div>

      
      <div className="pt-8 border-t border-ignoss-light/10">
        <p className="text-[9px] font-bold tracking-widest uppercase text-ignoss-light/30 mb-2">{content.text_78}</p>
        <p className="text-[9px] uppercase tracking-[0.3em] text-ignoss-light/30 flex items-center justify-center gap-1">{content.text_79}<strong className="text-ignoss-accent font-black tracking-widest">{content.text_80}</strong>{content.text_81}</p>
      </div>
    </section>

  </div>

  

    </div>
  );
}
