import React from "react";

export default function Gabi1({ content }: { content: any }) {
  return (
    <div className="gabi1-wrapper">
      

  
  <div className="max-w-md mx-auto bg-[#FAF9F6] min-h-screen relative shadow-2xl overflow-hidden sm:border-x sm:border-gray-200">
    
    
    <header className="relative w-full h-[65vh] rounded-b-[2.5rem] overflow-hidden shadow-sm">
      
      
      <div className="absolute inset-0 w-full h-full">
        <img id="img-capa" src={content.img_1} alt="Gabriella Mourão" className="w-full h-full object-cover object-center animate-zoom" loading="eager" />
      </div>
      
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/20 to-transparent"></div>
      
      
      <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/50 shadow-sm flex items-center gap-1.5">
        <i data-lucide="heart" className="w-3 h-3 text-[#C6A87C] fill-[#C6A87C]"></i>
        <span className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]">{content.text_1}</span>
      </div>

      
      <div className="absolute bottom-8 left-0 w-full px-8 text-center reveal active">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C6A87C] mb-2">{content.text_2}</h2>
        <h1 className="text-5xl font-serif text-[#1A1A1A] leading-none mb-1 drop-shadow-sm">{content.text_3}</h1>
        <h1 className="text-5xl font-serif text-[#1A1A1A] leading-none italic drop-shadow-sm">{content.text_4}</h1>
      </div>

    </header>

    
    <section className="px-8 pt-8 pb-8 text-center reveal">
      <p className="text-[13px] font-medium text-[#1A1A1A]/70 leading-relaxed mb-6">{content.text_5}<strong className="text-[#1A1A1A]">{content.text_6}</strong>{content.text_7}<strong className="text-[#1A1A1A]">{content.text_8}</strong>{content.text_9}<strong className="text-[#1A1A1A]">{content.text_10}</strong> 🐾 <br /><br />{content.text_11}<strong className="text-[#1A1A1A]">{content.text_12}</strong>{content.text_13}</p>
      
      <div className="flex items-center justify-center gap-4 text-[#C6A87C]">
        <i data-lucide="baby" className="w-5 h-5"></i>
        <span className="w-1 h-1 rounded-full bg-[#C6A87C]/50"></span>
        <i data-lucide="sparkles" className="w-4 h-4"></i>
        <span className="w-1 h-1 rounded-full bg-[#C6A87C]/50"></span>
        <i data-lucide="coffee" className="w-5 h-5"></i>
      </div>
    </section>

    
    <section className="px-6 py-6 relative z-10 reveal">
      <div className="flex items-center gap-3 mb-6 pl-2">
        <div className="w-8 h-[1px] bg-[#C6A87C]"></div>
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">{content.text_14}</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        
        
        <div className="col-span-2 bg-gradient-to-br from-white to-pink-50/40 rounded-[2rem] p-6 shadow-sm border border-pink-100/60 flex flex-col justify-between relative overflow-hidden">
           
           <div className="absolute top-6 right-6 w-11 h-11 rounded-[14px] bg-white flex items-center justify-center shadow-md border border-gray-100">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="url(#ig-grad-reels)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
               <defs>
                 <lineargradient id="ig-grad-reels" x1="2" y1="2" x2="22" y2="22">
                   <stop offset="0%" stop-color="#f9ce34"></stop>
                   <stop offset="30%" stop-color="#ee2a7b"></stop>
                   <stop offset="70%" stop-color="#6228d7"></stop>
                 </lineargradient>
               </defs>
               <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
               <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
               <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
             </svg>
           </div>
           
           <div className="mb-5">
             <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/60 font-bold mb-1">{content.text_15}</p>
             <p className="text-5xl font-black text-[#1A1A1A] tracking-tighter">{content.text_16}<span className="text-[#ee2a7b]">+</span></p>
           </div>
           
           <div className="flex items-center justify-between pt-4 border-t border-gray-100/80">
             <div>
               <p className="text-lg font-black text-[#1A1A1A]">{content.text_17}</p>
               <p className="text-[8.5px] uppercase tracking-wider text-[#1A1A1A]/50 font-bold">{content.text_18}</p>
             </div>
             <div className="w-px h-8 bg-gray-200"></div>
             <div>
               <p className="text-lg font-black text-[#1A1A1A]">{content.text_19}</p>
               <p className="text-[8.5px] uppercase tracking-wider text-[#1A1A1A]/50 font-bold">{content.text_20}</p>
             </div>
             <div className="w-px h-8 bg-gray-200"></div>
             <div>
               <p className="text-lg font-black text-[#1A1A1A]">{content.text_21}</p>
               <p className="text-[8.5px] uppercase tracking-wider text-[#1A1A1A]/50 font-bold">{content.text_22}</p>
             </div>
           </div>
        </div>

        
        <div className="bg-[#111111] rounded-[2rem] p-5 shadow-xl border border-[#333] flex flex-col justify-between text-white h-40 relative overflow-hidden group">
           <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#00f2fe] rounded-full mix-blend-overlay filter blur-[30px] opacity-20"></div>
           <svg className="w-6 h-6 text-white relative z-10 mb-2" viewbox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.64-5.46-.22-2.39.81-4.78 2.71-6.15 1.5-1.07 3.33-1.49 5.12-1.24v4.06c-1.25-.26-2.61-.06-3.62.77-.92.74-1.42 1.9-1.28 3.08.13 1.13.88 2.13 1.9 2.58 1.34.61 2.95.43 4.09-.49.95-.77 1.45-1.92 1.48-3.11.05-4.22.03-8.45.03-12.67.01-1.43-.01-2.85-.01-4.28z"></path>
           </svg>
           <div className="relative z-10">
             <p className="text-3xl font-black text-white tracking-tighter">{content.text_23}<span className="text-[#fe004f]">+</span></p>
             <p className="text-[9px] uppercase tracking-widest text-white/60 font-bold mt-1">{content.text_24}</p>
           </div>
        </div>

        
        <div className="bg-white rounded-[2rem] p-5 shadow-sm border border-gray-100 flex flex-col justify-between h-40 relative overflow-hidden">
           <i data-lucide="heart" className="w-6 h-6 text-[#1A1A1A] mb-2 fill-[#1A1A1A]/5"></i>
           <div className="relative z-10">
             <p className="text-3xl font-black text-[#1A1A1A] tracking-tighter">{content.text_25}<span className="text-[#C6A87C]">+</span></p>
             <p className="text-[9px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold mt-1">{content.text_26}</p>
           </div>
        </div>

        
        <div className="col-span-2 bg-[#C6A87C] rounded-[2rem] p-6 shadow-lg relative overflow-hidden mt-1 text-[#1A1A1A]">
           
           <div className="absolute -right-10 -top-10 w-36 h-36 bg-white rounded-full mix-blend-overlay filter blur-[40px] opacity-40"></div>
           
           <div className="flex items-center gap-2 mb-3 relative z-10">
             <div className="bg-white p-1.5 rounded-lg shadow-sm">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewbox="0 0 24 24" fill="none" stroke="url(#ig-grad-viral)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                 <defs>
                   <lineargradient id="ig-grad-viral" x1="2" y1="2" x2="22" y2="22">
                     <stop offset="0%" stop-color="#f9ce34"></stop>
                     <stop offset="30%" stop-color="#ee2a7b"></stop>
                     <stop offset="70%" stop-color="#6228d7"></stop>
                   </lineargradient>
                 </defs>
                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                 <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
               </svg>
             </div>
             <p className="text-[10px] uppercase tracking-widest font-bold">{content.text_27}</p>
           </div>
           
           <div className="relative z-10 flex items-end justify-between">
             <div>
               <p className="text-4xl font-black tracking-tighter mb-1">{content.text_28}</p>
               <p className="text-[11px] font-medium opacity-80 leading-tight pr-6">{content.text_29}</p>
             </div>
             <i data-lucide="play-circle" className="w-12 h-12 opacity-20 shrink-0 mb-1"></i>
           </div>
        </div>

      </div>
    </section>

    
    <section className="px-6 py-6 relative z-10 reveal">
      
      <div className="flex items-center gap-3 mb-6 pl-2">
        <div className="w-8 h-[1px] bg-[#C6A87C]"></div>
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">{content.text_30}</h3>
      </div>

      
      <div  className="bg-[#1A1A1A] rounded-[2rem] p-6 cursor-pointer group shadow-2xl relative overflow-hidden transition-transform active:scale-95 border border-[#333]">
        
        
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#C6A87C] rounded-full mix-blend-overlay filter blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
        
        <div className="relative z-10 flex items-start justify-between">
          <div className="space-y-4">
            
            <div>
              <h4 className="text-2xl font-serif text-white tracking-wide">{content.text_31}</h4>
              <p className="text-[10px] text-[#C6A87C] uppercase tracking-[0.2em] font-semibold mt-1">{content.text_32}</p>
            </div>
            
            
            <div className="inline-block bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
              <p className="text-[10px] text-white/70 uppercase tracking-widest mb-0.5">{content.text_33}</p>
              <p className="text-sm font-black text-white tracking-widest">{content.text_34}</p>
            </div>
          </div>

          
          <div className="w-12 h-12 rounded-full bg-[#C6A87C] flex items-center justify-center text-white shadow-[0_0_20px_rgba(198,168,124,0.4)] group-hover:rotate-45 transition-transform">
            <i data-lucide="arrow-up-right" className="w-5 h-5"></i>
          </div>
        </div>

        <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <p className="text-xs text-white/80 font-medium">{content.text_35}<strong className="text-[#C6A87C]">{content.text_36}</strong>{content.text_37}</p>
        </div>
      </div>
    </section>

    
    <section className="py-10 reveal">
      <div className="px-8 mb-8 text-center">
        <h2 className="text-3xl font-serif text-[#1A1A1A]">{content.text_38}&{content.text_39}</h2>
        <p className="text-[11px] font-bold text-[#1A1A1A]/50 uppercase tracking-[0.2em] mt-2">{content.text_40}</p>
      </div>

      <div className="flex overflow-x-auto gap-4 px-6 hide-scrollbar snap-x pb-8">
        
        
        <div className="snap-center shrink-0 w-56 h-80 rounded-[2rem] overflow-hidden relative shadow-xl group border border-[#1A1A1A]/5">
          <img id="img-pilar-1" src={content.img_2} alt="Maternidade" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent flex flex-col justify-end p-6">
            <h3 className="font-serif text-2xl text-white mb-1">{content.text_41}</h3>
            <p className="text-[10px] text-white/80 uppercase tracking-widest font-semibold">{content.text_42}</p>
          </div>
        </div>

        
        <div className="snap-center shrink-0 w-56 h-80 rounded-[2rem] overflow-hidden relative shadow-xl group border border-[#1A1A1A]/5">
          <img id="img-pilar-2" src={content.img_3} alt="Autocuidado" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent flex flex-col justify-end p-6">
            <h3 className="font-serif text-2xl text-white mb-1">{content.text_43}</h3>
            <p className="text-[10px] text-[#C6A87C] uppercase tracking-widest font-semibold">{content.text_44}&{content.text_45}</p>
          </div>
        </div>

        
        <div className="snap-center shrink-0 w-56 h-80 rounded-[2rem] overflow-hidden relative shadow-xl group border border-[#1A1A1A]/5">
          <img id="img-pilar-3" src={content.img_4} alt="Família" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent flex flex-col justify-end p-6">
            <h3 className="font-serif text-2xl text-white mb-1">{content.text_46}</h3>
            <p className="text-[10px] text-white/80 uppercase tracking-widest font-semibold">{content.text_47}</p>
          </div>
        </div>

      </div>
    </section>

    
    <section className="px-8 pt-16 pb-24 relative z-10 bg-[#1A1A1A] text-white text-center rounded-t-[3rem] mt-4 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
      
      
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-white/20 rounded-full"></div>

      <div className="mb-10 mt-6">
        <h2 className="text-3xl font-serif text-white mb-3 tracking-wide">{content.text_48}</h2>
        <p className="text-[10px] uppercase tracking-widest text-[#C6A87C] font-bold">{content.text_49}</p>
      </div>

      <div className="space-y-4 mb-12">
        
        <button  className="w-full bg-[#C6A87C] hover:bg-[#b09369] text-[#1A1A1A] py-5 rounded-2xl font-bold text-[12px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-lg active:scale-95">
          <i data-lucide="mail" className="w-5 h-5"></i>{content.text_50}</button>

        
        <button  className="w-full bg-transparent border border-white/20 text-white/70 py-5 rounded-2xl font-bold text-[11px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 mt-4 hover:bg-white/5 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 24 24" fill="none" stroke="url(#ig-grad-gabi)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <defs>
              <lineargradient id="ig-grad-gabi" x1="2" y1="2" x2="22" y2="22">
                <stop offset="0%" stop-color="#f9ce34"></stop>
                <stop offset="30%" stop-color="#ee2a7b"></stop>
                <stop offset="70%" stop-color="#6228d7"></stop>
              </lineargradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>{content.text_51}</button>
      </div>

      
      <div className="pt-8 border-t border-white/10">
        <p className="text-[9px] font-bold tracking-widest uppercase text-white/30 mb-2">{content.text_52}</p>
        <p className="text-[8px] uppercase tracking-[0.3em] text-white/30 flex items-center justify-center gap-1">{content.text_53}<a href="https://verticy.site" target="_blank" className="text-white font-black text-[11px] tracking-widest hover:text-[#C6A87C] transition-colors relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-px after:bg-white/30 hover:after:bg-[#C6A87C]">{content.text_54}</a>
          <span className="text-[7px]">{content.text_55}</span>
        </p>
      </div>
    </section>

  </div>

  

    </div>
  );
}
