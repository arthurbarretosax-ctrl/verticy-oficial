import React from "react";
import "@/assets/css/draandrezza.css";

export default function DraAndrezza({ content }: { content: any }) {
  return (
    <div className="dra.andrezza-wrapper template-dra andrezza">
      

    
      <style>{`
@import url('https://fonts.googleapis.com');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Quicksand:wght@500;600;700&display=swap');
      `}</style>
<div className="custom-cursor" id="custom-cursor"></div>
    <div className="cursor-dot" id="cursor-dot"></div>

    
    <div id="loader" className="fixed inset-0 bg-brand-pink-light z-50 flex flex-col items-center justify-center">
        <div className="animate-tooth-bounce">
            <i className="ph-fill ph-tooth text-5xl text-brand-pink-dark drop-shadow-sm"></i>
        </div>
        <p className="mt-3 font-display font-bold text-brand-pink-dark text-sm tracking-wide animate-pulse text-center px-4">{content.text_1}</p>
    </div>

    
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute bg-brand-pink blur-[100px] rounded-full w-80 h-80 top-[-5%] left-[-5%] opacity-30 animate-float-slow"></div>
        <div className="absolute bg-brand-blue blur-[100px] rounded-full w-96 h-96 top-[20%] right-[-10%] opacity-30 animate-float-fast"></div>
        <div className="absolute bg-brand-yellow blur-[100px] rounded-full w-64 h-64 top-[60%] left-[-5%] opacity-20 animate-float-slow"></div>
    </div>

    
    <nav className="fixed w-full z-40 top-0 transition-all duration-300 glass-card" id="navbar">
        <div className="max-w-6xl mx-auto px-5 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2 group cursor-pointer" >
                <div className="bg-brand-pink text-white p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                    <i className="ph-fill ph-tooth text-xl"></i>
                </div>
                <div className="leading-none text-left">
                    <h1 className="font-display font-bold text-lg text-slate-800">{content.text_2}</h1>
                    <p className="text-[10px] font-bold text-brand-pink-dark tracking-tighter uppercase">{content.text_3}</p>
                </div>
            </div>
            <a href="#agendamento" className="text-sm bg-brand-pink text-white px-5 py-2 rounded-full font-bold hover:bg-brand-pink-dark transition-all shadow-sm transform active:scale-95">{content.text_4}</a>
        </div>
    </nav>

    
    <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-24 px-5 min-h-[85vh] flex items-center justify-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center reveal-on-scroll is-visible w-full">
            
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-brand-pink-light text-brand-pink-dark font-bold text-xs mb-6 animate-bob">
                <i className="ph-fill ph-sparkle"></i>{content.text_5}</div>

            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-800 leading-[1.1] mb-8">{content.text_6}<span className="text-brand-pink-dark relative inline-block">{content.text_7}<svg className="absolute w-full h-2 -bottom-1 left-0 text-brand-pink opacity-30" viewbox="0 0 100 10" preserveaspectratio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="3" fill="none"></path></svg></span> 💖
            </h1>

            
            <div className="relative z-10 w-full max-w-[280px] md:max-w-[320px] mx-auto mb-8">
                <div className="relative w-full aspect-square">
                    <div className="absolute inset-0 bg-brand-blue rounded-[2.5rem] filter blur-xl opacity-40 animate-pulse-soft -z-10 translate-y-3"></div>
                    <div className="absolute inset-0 bg-brand-pink rounded-[2.5rem] rotate-2 transform -z-10"></div>
                    <div className="relative w-full h-full bg-white rounded-[2.5rem] shadow-soft p-1.5 group overflow-hidden">
                         <div className="w-full h-full bg-brand-pink-light rounded-[2rem] flex items-center justify-center overflow-hidden relative">
                             <img src={content.img_1} alt="Dra. Andrezza Barreto" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                         </div>
                    </div>
                </div>
            </div>

            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">{content.text_8}</p>
            
            <a href="https://wa.me/5522998488121" target="_blank" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3 rounded-full font-bold text-base transition-all shadow-md transform hover:-translate-y-1 active:scale-95 group">
                <i className="ph-fill ph-whatsapp-logo text-xl"></i>{content.text_9}</a>
        </div>
    </section>

    
    <section className="py-16 px-5 relative z-10 bg-white/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start reveal-on-scroll">
            
            <div className="relative max-w-xs mx-auto md:mx-0">
                <div className="aspect-[4/5] rounded-[2rem] bg-brand-blue-light overflow-hidden shadow-soft flex items-center justify-center border-4 border-brand-pink-light relative group">
                    <img src={content.img_2} alt="Ambiente Dra. Andrezza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-float max-w-[160px] border border-brand-blue-light animate-bob">
                    <p className="text-xs font-bold text-slate-800 italic leading-tight">{content.text_10}</p>
                </div>
            </div>
            
            <div className="space-y-5">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-800 relative inline-block">{content.text_11}<div className="absolute -bottom-1 left-0 w-full h-1 bg-brand-pink-light rounded-full -z-10"></div>
                </h2>
                
                <p className="text-base text-slate-600 leading-relaxed">{content.text_12}<strong>{content.text_13}</strong>{content.text_14}</p>
                
                <p className="text-base text-slate-600 leading-relaxed">{content.text_15}<strong>{content.text_16}</strong>{content.text_17}</p>

                
                <div className="py-4 reveal-on-scroll">
                    <div className="bg-white p-2 rounded-[2rem] shadow-sm border border-brand-pink-light">
                        <div className="w-full aspect-video bg-brand-blue-light rounded-[1.5rem] overflow-hidden group">
                            <img src={content.img_3} alt="Dra. Andrezza em atendimento" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>

                <p className="p-4 bg-brand-blue-light/40 rounded-xl border border-brand-blue/20 text-brand-blue-dark font-medium italic text-base">{content.text_18}</p>

                <p className="text-base text-slate-600">{content.text_19}</p>
            </div>
        </div>
    </section>

    
    <section className="py-16 px-5 bg-brand-pink-light/20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 reveal-on-scroll">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-800 mb-3">{content.text_20}</h2>
                <p className="text-sm text-slate-500">{content.text_21}</p>
            </div>
            
            <div className="flex overflow-x-auto gap-5 pb-8 snap-x snap-mandatory no-scrollbar reveal-on-scroll">
                
                <div className="snap-center shrink-0 w-72 md:w-96 aspect-video bg-white rounded-3xl p-1.5 shadow-sm group">
                    <div className="w-full h-full rounded-2xl overflow-hidden relative">
                        <img src={content.img_4} alt="Galeria 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-xl text-[10px] font-bold text-brand-blue-dark shadow-sm">{content.text_22}</div>
                    </div>
                </div>

                
                <div className="snap-center shrink-0 w-72 md:w-96 aspect-video bg-white rounded-3xl p-1.5 shadow-sm group">
                    <div className="w-full h-full rounded-2xl overflow-hidden relative">
                        <img src={content.img_5} alt="Galeria 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-xl text-[10px] font-bold text-brand-pink-dark shadow-sm">{content.text_23}</div>
                    </div>
                </div>

                
                <div className="snap-center shrink-0 w-72 md:w-96 aspect-video bg-white rounded-3xl p-1.5 shadow-sm group">
                    <div className="w-full h-full rounded-2xl overflow-hidden relative">
                        <img src={content.img_6} alt="Galeria 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-xl text-[10px] font-bold text-brand-yellow-dark">{content.text_24}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section id="agendamento" className="py-16 px-5 relative">
        <div className="max-w-3xl mx-auto bg-brand-blue-light/80 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 text-center shadow-soft reveal-on-scroll border border-white">
            <h2 className="font-display font-extrabold text-2xl md:text-4xl text-slate-800 mb-4">{content.text_25}</h2>
            <p className="text-base text-slate-600 mb-8">{content.text_26}</p>
            
            <div className="flex justify-center">
                <a href="https://wa.me/5522998488121" target="_blank" className="flex items-center gap-4 bg-white hover:bg-brand-pink-light p-4 px-6 rounded-2xl shadow-sm hover:shadow-md transition-all group border border-brand-pink/20">
                    <div className="bg-[#25D366] p-2.5 rounded-full text-white">
                        <i className="ph-fill ph-whatsapp-logo text-xl"></i>
                    </div>
                    <div className="text-left">
                        <h3 className="font-display font-bold text-sm text-slate-800 leading-none mb-1">{content.text_27}</h3>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{content.text_28}</p>
                    </div>
                </a>
            </div>
        </div>
    </section>

    
    <footer className="bg-white py-12 px-5 border-t border-slate-100 text-center relative z-20">
        <div className="flex items-center justify-center gap-2 mb-4">
            <i className="ph-fill ph-tooth text-2xl text-brand-pink-dark"></i>
            <h3 className="font-display font-bold text-base text-slate-800">{content.text_29}</h3>
        </div>
        <div className="flex justify-center gap-6 mb-8 text-slate-400 text-xl">
            <a href="https://www.instagram.com/dra.andrezza.odontopediatria/" target="_blank" className="hover:text-brand-pink-dark transition-colors"><i className="ph ph-instagram-logo"></i></a>
            <a href="https://wa.me/5522998488121" target="_blank" className="hover:text-brand-pink-dark transition-colors"><i className="ph ph-whatsapp-logo"></i></a>
        </div>
        <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold tracking-tighter">{content.text_30}</p>
    </footer>

    

    </div>
  );
}
