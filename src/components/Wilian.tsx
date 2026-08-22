import React from "react";

export default function Wilian({ content }: { content: any }) {
  return (
    <div className="wilian-wrapper">
      

  
  <div className="max-w-md mx-auto bg-wilian-bg min-h-screen relative shadow-2xl overflow-hidden sm:border-x sm:border-gray-200">
    
    
    <div className="absolute top-0 right-0 w-72 h-72 bg-wilian-blue/10 rounded-full filter blur-[80px] pointer-events-none animate-float"></div>
    <div className="absolute top-[30%] left-0 w-80 h-80 bg-wilian-orange/10 rounded-full filter blur-[100px] pointer-events-none" style={{ animation: 'float 8s ease-in-out infinite reverse' }}></div>

    
    <header className="relative w-full h-[65vh] rounded-b-[3rem] overflow-hidden shadow-sm border-b border-gray-100 z-10">
      
      
      <img id="img-capa" src="" alt="Wilian Pita" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" fetchpriority="high" />
      
      
      <div className="absolute inset-0 bg-gradient-to-t from-wilian-dark/90 via-wilian-dark/20 to-transparent"></div>

      
      <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 flex items-center gap-2">
        <i data-lucide="smile" className="w-4 h-4 text-white"></i>
        <span className="text-[10px] font-bold uppercase tracking-widest text-white drop-shadow-md">{content.text_1}&{content.text_2}</span>
      </div>

      
      <div className="absolute bottom-10 left-0 w-full px-8 text-center reveal active">
        <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-wilian-orange mb-2 drop-shadow-md">{content.text_3}</h2>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-serif font-bold text-white leading-none tracking-tight drop-shadow-lg">{content.text_4}</h1>
          <h1 className="text-6xl font-serif font-bold text-wilian-orange leading-none italic tracking-tight drop-shadow-lg -mt-2">{content.text_5}</h1>
        </div>
      </div>
    </header>

    
    <section className="px-8 pt-10 pb-8 text-center reveal relative z-20">
      <p className="text-[14px] font-medium text-gray-600 leading-relaxed">{content.text_6}<strong className="text-wilian-dark font-bold">{content.text_7}</strong>. 
      </p>
      <div className="flex items-center justify-center gap-4 mt-6 text-wilian-blue/40">
        <i data-lucide="home" className="w-5 h-5"></i>
        <span className="w-1.5 h-1.5 rounded-full bg-wilian-orange/50"></span>
        <i data-lucide="dumbbell" className="w-5 h-5"></i>
        <span className="w-1.5 h-1.5 rounded-full bg-wilian-orange/50"></span>
        <i data-lucide="briefcase" className="w-5 h-5"></i>
      </div>
    </section>

    
    <section className="px-6 py-6 relative z-10 reveal">
      <div className="flex items-center gap-3 mb-6 pl-2">
        <div className="w-8 h-[2px] bg-wilian-orange rounded-full"></div>
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-wilian-dark">{content.text_8}&{content.text_9}</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        
        
        <div className="col-span-2 bg-wilian-blue text-white rounded-[2rem] p-6 shadow-lg shadow-blue-500/20 relative overflow-hidden group">
           
           <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 rounded-full filter blur-[30px] group-hover:scale-110 transition-transform duration-700"></div>
           
           <div className="flex items-center justify-between relative z-10 mb-4">
             <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
               <i data-lucide="flame" className="w-3.5 h-3.5 text-wilian-orange"></i>
               <span className="text-[9px] font-bold uppercase tracking-widest text-white">{content.text_10}</span>
             </div>
             <i data-lucide="trending-up" className="w-6 h-6 text-white/50"></i>
           </div>
           
           <div className="relative z-10">
             <p className="text-5xl font-black tracking-tighter drop-shadow-sm">{content.text_11}</p>
             <p className="text-xs font-medium text-white/80 mt-1">{content.text_12}</p>
           </div>
        </div>

        
        <div className="glass-card rounded-[2rem] p-6 flex flex-col justify-center items-center text-center">
           <i data-lucide="users" className="w-7 h-7 text-wilian-orange mb-3"></i>
           <p className="text-3xl font-black text-wilian-dark tracking-tighter">{content.text_13}</p>
           <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold mt-1">{content.text_14}</p>
        </div>

        
        <div className="glass-card rounded-[2rem] p-6 flex flex-col justify-center items-center text-center">
           <i data-lucide="play-square" className="w-7 h-7 text-wilian-blue mb-3"></i>
           <p className="text-3xl font-black text-wilian-dark tracking-tighter">{content.text_15}</p>
           <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold mt-1">{content.text_16}</p>
        </div>

      </div>
    </section>

    
    <section className="py-10 relative z-10 reveal border-t border-gray-200/60 mt-4">
      <div className="px-6 mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-serif font-bold text-wilian-dark leading-none">{content.text_17}<br /><span className="text-wilian-orange italic">{content.text_18}</span></h2>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-4 px-6 hide-scrollbar snap-x pb-8">
        
        
        <div  className="snap-center shrink-0 w-48 h-72 rounded-[2rem] overflow-hidden relative shadow-lg group cursor-pointer">
          <img id="img-viral-1" src="" alt="Viral 2.7M" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          
          <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-lg group-hover:scale-110 transition-transform">
              <i data-lucide="play" className="w-6 h-6 text-white fill-white ml-1"></i>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-10">
            <div className="flex items-center gap-1.5 mb-1 text-white">
              <i data-lucide="play" className="w-4 h-4 fill-white"></i>
              <span className="text-lg font-black">{content.text_19}</span>
            </div>
            <p className="text-[10px] text-white/80 font-medium leading-tight line-clamp-2">{content.text_20}</p>
          </div>
        </div>

        
        <div  className="snap-center shrink-0 w-48 h-72 rounded-[2rem] overflow-hidden relative shadow-lg group cursor-pointer">
          <img id="img-viral-2" src="" alt="Viral 2.4M" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          
          <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-lg group-hover:scale-110 transition-transform">
              <i data-lucide="play" className="w-6 h-6 text-white fill-white ml-1"></i>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-10">
            <div className="flex items-center gap-1.5 mb-1 text-white">
              <i data-lucide="play" className="w-4 h-4 fill-white"></i>
              <span className="text-lg font-black">{content.text_21}</span>
            </div>
            <p className="text-[10px] text-white/80 font-medium leading-tight line-clamp-2">{content.text_22}</p>
          </div>
        </div>

        
        <div  className="snap-center shrink-0 w-48 h-72 rounded-[2rem] overflow-hidden relative shadow-lg group cursor-pointer">
          <img id="img-viral-3" src="" alt="Viral 523k" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          
          <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-lg group-hover:scale-110 transition-transform">
              <i data-lucide="play" className="w-6 h-6 text-white fill-white ml-1"></i>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-10">
            <div className="flex items-center gap-1.5 mb-1 text-white">
              <i data-lucide="play" className="w-4 h-4 fill-white"></i>
              <span className="text-lg font-black">{content.text_23}</span>
            </div>
            <p className="text-[10px] text-white/80 font-medium leading-tight line-clamp-2">{content.text_24}</p>
          </div>
        </div>

      </div>
    </section>

    
    <section className="px-6 py-12 relative z-10 reveal bg-white rounded-[3rem] mx-2 shadow-sm border border-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-wilian-dark">{content.text_25}</h2>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-2">{content.text_26}</p>
      </div>

      <div className="relative h-[24rem] w-full mb-4">
        
        
        <div  className="polaroid absolute -top-8 left-0 w-40 transform -rotate-6 z-20 shadow-xl bg-white p-2 pb-8 hover:rotate-0 hover:z-40 hover:scale-105 outline-none cursor-pointer transition-all duration-300 border border-gray-200">
          <img id="img-vibe-1" src="" alt="Família" className="w-full h-36 object-cover pointer-events-none" loading="lazy" />
          <p className="text-center text-[10px] font-serif font-bold text-gray-800 mt-2 pointer-events-none">{content.text_27}</p>
        </div>
        
        
        <div  className="polaroid absolute top-8 right-0 w-40 transform rotate-6 z-10 shadow-xl bg-white p-2 pb-8 hover:rotate-0 hover:z-40 hover:scale-105 outline-none cursor-pointer transition-all duration-300 border border-gray-200">
          <img id="img-vibe-2" src="" alt="Treinos" className="w-full h-40 object-cover pointer-events-none" loading="lazy" />
          <p className="text-center text-[10px] font-serif font-bold text-gray-800 mt-2 pointer-events-none">{content.text_28}</p>
        </div>
        
        
        <div  className="polaroid absolute top-32 left-14 w-44 transform -rotate-2 z-30 shadow-2xl bg-white p-2 pb-8 hover:rotate-0 hover:z-40 hover:scale-105 outline-none cursor-pointer transition-all duration-300 border border-gray-200">
          <img id="img-vibe-3" src="" alt="Dia a Dia" className="w-full h-44 object-cover pointer-events-none" loading="lazy" />
          <p className="text-center text-[10px] font-serif font-bold text-wilian-orange mt-2 pointer-events-none">{content.text_29}</p>
        </div>

      </div>
    </section>

    
    <section className="py-12 bg-wilian-bg">
      <div className="flex overflow-hidden relative w-full opacity-50 mask-gradient py-2">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-12 min-w-full text-wilian-dark">
          <span className="text-xl font-black uppercase tracking-widest">{content.text_30}</span>
          <span className="text-xl font-serif italic text-wilian-orange">{content.text_31}</span>
          <span className="text-xl font-black uppercase tracking-widest">{content.text_32}</span>
          <span className="text-xl font-serif italic text-wilian-blue">{content.text_33}</span>
          
          <span className="text-xl font-black uppercase tracking-widest ml-12">{content.text_34}</span>
          <span className="text-xl font-serif italic text-wilian-orange">{content.text_35}</span>
          <span className="text-xl font-black uppercase tracking-widest">{content.text_36}</span>
          <span className="text-xl font-serif italic text-wilian-blue">{content.text_37}</span>
        </div>
      </div>
    </section>

    
    <section className="px-8 pt-16 pb-24 relative z-10 bg-[#111827] text-white text-center rounded-t-[3rem] mt-4 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
      
      
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-white/10 rounded-full"></div>

      <div className="mb-10 mt-6">
        <h2 className="text-[10px] uppercase tracking-widest text-wilian-orange font-bold mb-3">{content.text_38}</h2>
        <h3 className="text-4xl font-black text-white tracking-tighter uppercase">{content.text_39}&<br />{content.text_40}</h3>
      </div>

      <div className="space-y-4 mb-12">
        
        <button  className="w-full bg-wilian-blue hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-[13px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-600/30 active:scale-95">
          <i data-lucide="send" className="w-5 h-5"></i>{content.text_41}</button>

        
        <button  className="w-full bg-transparent border border-white/20 text-white/80 py-5 rounded-2xl font-bold text-[12px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 hover:bg-white/5 hover:text-white active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 24 24" fill="none" stroke="url(#ig-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <defs>
              <lineargradient id="ig-grad" x1="2" y1="2" x2="22" y2="22">
                <stop offset="0%" stop-color="#f9ce34"></stop>
                <stop offset="30%" stop-color="#ee2a7b"></stop>
                <stop offset="70%" stop-color="#6228d7"></stop>
              </lineargradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>{content.text_42}</button>

        
        <button  className="w-full bg-transparent text-white/50 py-3 rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 hover:text-white">
          <i data-lucide="facebook" className="w-4 h-4"></i>{content.text_43}</button>
      </div>

      
      <div className="pt-8 border-t border-white/10">
        <p className="text-[9px] font-bold tracking-widest uppercase text-white/30 mb-2">{content.text_44}</p>
        <p className="text-[8px] uppercase tracking-[0.3em] text-white/30 flex items-center justify-center gap-1">{content.text_45}<strong className="text-wilian-orange font-black tracking-widest">{content.text_46}</strong>{content.text_47}</p>
      </div>
    </section>

  </div>

  

    </div>
  );
}
