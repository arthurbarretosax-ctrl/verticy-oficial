import React from "react";
import "@/assets/css/draraisabastos.css";

export default function DraRaisabastos({ content }: { content: any }) {
  return (
    <div className="dra.raisabastos-wrapper template-dra raisabastos">
      

    
      <style>{`
@import url('https://fonts.googleapis.com');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Quicksand:wght@500;600;700&display=swap');
      `}</style>
<div className="custom-cursor" id="custom-cursor"></div>
    <div className="cursor-dot" id="cursor-dot"></div>

    
    <div id="loader" className="fixed inset-0 bg-brand-pink-light z-50 flex flex-col items-center justify-center transition-opacity duration-700">
        <div className="animate-bounce"><i className="ph-fill ph-tooth text-6xl text-white drop-shadow-lg"></i></div>
        <p className="mt-4 font-display font-bold text-brand-pink-dark animate-pulse">{content.text_1}</p>
    </div>

    
    <nav className="fixed w-full z-40 top-0 glass-card" id="navbar">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer" >
                <div className="bg-brand-pink text-white p-2 rounded-xl"><i className="ph-fill ph-tooth text-2xl"></i></div>
                <div>
                    <h1 className="font-display font-bold text-xl text-slate-800">{content.text_2}</h1>
                    <p className="text-[10px] font-bold text-brand-pink-dark uppercase">{content.text_3}</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-8 font-bold text-slate-600">
                <a href="#sobre" className="hover:text-brand-pink-dark transition-colors">{content.text_4}</a>
                <a href="#momentos" className="hover:text-brand-pink-dark transition-colors">{content.text_5}</a>
                <a href="#especialidades" className="hover:text-brand-pink-dark transition-colors">{content.text_6}</a>
                <a href="#galeria" className="hover:text-brand-pink-dark transition-colors">{content.text_7}</a>
            </div>
            <a href="#agendamento" className="bg-brand-pink text-white px-5 py-2 rounded-full font-bold shadow-sm hover:scale-105 transition-all text-sm">{content.text_8}</a>
        </div>
    </nav>

    
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center reveal-on-scroll is-visible">
            <div>
                <div className="inline-block bg-white px-4 py-1 rounded-full shadow-sm text-brand-pink-dark font-bold text-xs mb-6">{content.text_9}</div>
                <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-slate-800 leading-tight">{content.text_10}<span className="text-brand-pink-dark italic">{content.text_11}</span>{content.text_12}</h1>
                <p className="mt-8 text-lg text-slate-600">{content.text_13}<strong>{content.text_14}</strong>{content.text_15}</p>
                <div className="mt-10">
                    <a href="#agendamento" className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg shadow-float inline-flex items-center gap-2 hover:-translate-y-1 transition-all">
                        <i className="ph-fill ph-whatsapp-logo"></i>{content.text_16}</a>
                </div>
            </div>
            <div className="relative group">
                <div className="bg-brand-blue rounded-[3rem] absolute inset-0 rotate-3 -z-10 opacity-50"></div>
                <div className="bg-white p-2 rounded-[3rem] shadow-soft overflow-hidden">
                    <img src={content.img_1} alt="Dra. Raísa Bastos" className="w-full aspect-square object-cover rounded-[2.5rem]"  />
                </div>
            </div>
        </div>
    </section>

    
    <section id="sobre" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center reveal-on-scroll">
            <div className="relative order-2 md:order-1">
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-brand-pink-light shadow-soft">
                    <img src={content.img_2} alt="Dra. Raísa Perfil" className="w-full h-full object-cover"  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-brand-yellow w-20 h-20 rounded-2xl flex items-center justify-center shadow-float animate-bob">
                    <i className="ph-fill ph-star text-white text-4xl"></i>
                </div>
            </div>
            <div className="order-1 md:order-2">
                <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 mb-6 italic">{content.text_17}</h2>
                <div className="space-y-6 text-lg text-slate-600">
                    <p>{content.text_18}<strong>{content.text_19}</strong>{content.text_20}</p>
                    <p>{content.text_21}<strong>{content.text_22}</strong>{content.text_23}</p>
                    <p className="p-5 bg-brand-pink-light/30 rounded-3xl border-l-8 border-brand-pink text-slate-700 font-medium leading-relaxed">{content.text_24}</p>
                </div>
            </div>
        </div>
    </section>

    
    <section id="momentos" className="py-24 px-6 bg-brand-blue-light/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-16 reveal-on-scroll">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 mb-4">{content.text_25}</h2>
            <p className="text-lg text-slate-500">{content.text_26}</p>
        </div>
        <div className="flex overflow-x-auto gap-8 px-4 pb-12 snap-x no-scrollbar reveal-on-scroll">
            <div className="snap-center shrink-0 w-[280px] md:w-[320px] bg-white p-4 rounded-[2.5rem] shadow-soft transform -rotate-2">
                <img src={content.img_3} alt="Alegria" className="w-full aspect-[3/4] object-cover rounded-[2rem] mb-4"  />
                <p className="text-center font-bold text-brand-pink-dark">{content.text_27}</p>
            </div>
            <div className="snap-center shrink-0 w-[280px] md:w-[320px] bg-white p-4 rounded-[2.5rem] shadow-soft transform rotate-2">
                <img src={content.img_4} alt="Diversão" className="w-full aspect-[3/4] object-cover rounded-[2rem] mb-4"  />
                <p className="text-center font-bold text-brand-blue-dark">{content.text_28}</p>
            </div>
            <div className="snap-center shrink-0 w-[280px] md:w-[320px] bg-white p-4 rounded-[2.5rem] shadow-soft transform -rotate-1">
                <img src={content.img_5} alt="Paciência" className="w-full aspect-[3/4] object-cover rounded-[2rem] mb-4"  />
                <p className="text-center font-bold text-brand-green-dark">{content.text_29}</p>
            </div>
            <div className="snap-center shrink-0 w-[280px] md:w-[320px] bg-white p-4 rounded-[2.5rem] shadow-soft transform rotate-3">
                <img src={content.img_6} alt="Coragem" className="w-full aspect-[3/4] object-cover rounded-[2rem] mb-4"  />
                <p className="text-center font-bold text-brand-yellow-dark">{content.text_30}</p>
            </div>
        </div>
        <div className="flex justify-center gap-2 text-slate-400 text-sm animate-pulse mt-4">
            <i className="ph ph-arrows-left-right text-xl"></i>
            <span>{content.text_31}</span>
        </div>
    </section>

    
    <section id="especialidades" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border-b-8 border-brand-pink reveal-on-scroll">
                <div className="text-4xl mb-6">⚡</div>
                <h3 className="font-display font-bold text-xl mb-3">{content.text_32}</h3>
                <p className="text-sm text-slate-600">{content.text_33}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border-b-8 border-brand-blue reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
                <div className="text-4xl mb-6">♿</div>
                <h3 className="font-display font-bold text-xl mb-3">{content.text_34}</h3>
                <p className="text-sm text-slate-600">{content.text_35}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border-b-8 border-brand-yellow reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
                <div className="text-4xl mb-6">🦷</div>
                <h3 className="font-display font-bold text-xl mb-3">{content.text_36}</h3>
                <p className="text-sm text-slate-600">{content.text_37}</p>
            </div>
        </div>
    </section>

    
    <section id="galeria" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal-on-scroll">
                <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 mb-4">{content.text_38}</h2>
                <p className="text-lg text-slate-500">{content.text_39}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 reveal-on-scroll">
                <img src={content.img_7} alt="Recepção" className="rounded-3xl shadow-soft aspect-video object-cover transition-transform hover:scale-105 duration-500"  />
                <img src={content.img_8} alt="Cadeira Lúdica" className="rounded-3xl shadow-soft aspect-video object-cover transition-transform hover:scale-105 duration-500"  />
                <img src={content.img_9} alt="Brinquedoteca" className="rounded-3xl shadow-soft aspect-video object-cover transition-transform hover:scale-105 duration-500"  />
            </div>
        </div>
    </section>

    
    <section id="agendamento" className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-brand-pink-light/50 rounded-[3rem] p-10 md:p-20 text-center shadow-soft border border-white reveal-on-scroll">
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-slate-800 mb-8">{content.text_40}</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-brand-pink/20">
                    <p className="font-bold text-brand-pink-dark mb-2 uppercase text-[10px] tracking-widest">{content.text_41}</p>
                    <p className="text-slate-700 font-bold">{content.text_42}</p>
                    <p className="text-sm text-slate-500 italic">{content.text_43}</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-brand-blue/20">
                    <p className="font-bold text-brand-blue-dark mb-2 uppercase text-[10px] tracking-widest">{content.text_44}</p>
                    <p className="text-slate-700 font-bold">{content.text_45}</p>
                    <p className="text-sm text-slate-500">{content.text_46}</p>
                </div>
            </div>
            <a href="https://api.whatsapp.com/send?phone=5522999369695&text=Olá Dra. Raísa! Gostaria de agendar uma consulta para meu filho." target="_blank" className="bg-[#25D366] text-white px-12 py-5 rounded-full font-bold text-xl shadow-float inline-flex items-center gap-3 hover:scale-105 transition-all">
                <i className="ph-fill ph-whatsapp-logo text-3xl"></i>{content.text_47}</a>
        </div>
    </section>

    
    <footer className="py-12 text-center text-slate-400 text-sm border-t border-slate-100 bg-white">
        <p className="mb-2">{content.text_48}</p>
        <p className="text-[10px]">{content.text_49}</p>
    </footer>

    

    </div>
  );
}
