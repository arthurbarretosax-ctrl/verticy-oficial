import React from "react";

export default function DraMirella({ content }: { content: any }) {
  return (
    <div className="dra.mirella-wrapper">
      

    <div className="custom-cursor" id="custom-cursor"></div>
    <div className="cursor-dot" id="cursor-dot"></div>

    
    <div id="loader" className="fixed inset-0 bg-brand-pearl z-50 flex flex-col items-center justify-center transition-opacity duration-700">
        <i className="ph-fill ph-heart text-4xl text-brand-rose-dark animate-pulse"></i>
        <p className="mt-4 font-display font-bold text-brand-lavender-dark tracking-widest uppercase text-[10px]">{content.text_1}</p>
    </div>

    
    <nav className="fixed w-full z-40 top-0 glass-nav border-b border-brand-lavender/10" id="navbar">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer group" >
                
                <img src={content.img_1} alt="Logo Dra. Mirella Chagas" className="h-10 md:h-12 w-auto object-contain"  />
                <div id="logo-fallback" className="hidden items-center gap-2">
                    <div className="bg-brand-lavender text-brand-lavender-dark p-2 rounded-xl"><i className="ph-fill ph-sparkle text-xl"></i></div>
                    <h1 className="font-display font-bold text-lg text-slate-800 leading-tight">{content.text_2}</h1>
                </div>
            </div>
            <div className="hidden md:flex items-center gap-8 font-bold text-sm text-slate-500">
                <a href="#sobre" className="hover:text-brand-lavender-dark transition-colors">{content.text_3}</a>
                <a href="#especialidades" className="hover:text-brand-lavender-dark transition-colors">{content.text_4}</a>
                <a href="#momentos" className="hover:text-brand-lavender-dark transition-colors">{content.text_5}</a>
                <a href="https://bit.ly/dramirellachagas" target="_blank" className="bg-brand-lavender-dark text-white px-6 py-2 rounded-full hover:bg-brand-rose-dark transition-all shadow-md">{content.text_6}</a>
            </div>
        </div>
    </nav>

    
    <section className="relative pt-40 pb-24 px-6 min-h-[90vh] flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center reveal-on-scroll is-visible relative z-10">
            <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-brand-lavender-dark font-bold text-xs mb-8 shadow-sm border border-brand-lavender/30">
                    <i className="ph-fill ph-medal"></i>{content.text_7}</div>
                <h1 className="font-display font-extrabold text-5xl lg:text-7xl text-slate-800 leading-[1.1] tracking-tight">{content.text_8}<span className="text-brand-lavender-dark relative inline-block">{content.text_9}<svg className="absolute w-full h-3 -bottom-2 left-0 text-brand-rose opacity-60" viewbox="0 0 100 10" preserveaspectratio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="4" fill="none"></path></svg></span>{content.text_10}</h1>
                <p className="mt-8 text-lg text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">{content.text_11}<strong>{content.text_12}</strong>{content.text_13}</p>
                <div className="mt-10">
                    <a href="https://bit.ly/dramirellachagas" target="_blank" className="bg-[#25D366] text-white px-10 py-4 rounded-full font-bold text-lg shadow-float hover:-translate-y-1 transition-all inline-flex items-center gap-3">
                        <i className="ph-fill ph-whatsapp-logo text-2xl"></i>{content.text_14}</a>
                </div>
            </div>
            <div className="relative">
                <div className="bg-brand-blue rounded-[3rem] absolute inset-0 rotate-3 -z-10 opacity-30 blur-2xl animate-pulse-soft"></div>
                <div className="bg-white p-3 rounded-[3rem] shadow-premium overflow-hidden transform hover:-rotate-2 transition-transform duration-700">
                    
                    <img src={content.img_2} alt="Dra. Mirella Chagas" className="w-full aspect-square object-cover rounded-[2.5rem]"  />
                </div>
            </div>
        </div>
    </section>

    
    <section id="sobre" className="py-24 px-6 bg-brand-pearl-dark/50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center reveal-on-scroll">
            <div className="relative order-2 md:order-1">
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border-[10px] border-white shadow-premium relative group">
                    
                    <img src={content.img_3} alt="Perfil Mirella" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-brand-lavender w-20 h-20 rounded-3xl flex items-center justify-center shadow-float animate-bob">
                    <i className="ph-fill ph-heart text-white text-4xl"></i>
                </div>
            </div>
            <div className="order-1 md:order-2">
                <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 mb-8 italic">{content.text_15}</h2>
                <div className="space-y-6 text-lg text-slate-500 leading-relaxed">
                    <p>{content.text_16}</p>
                    <p>{content.text_17}</p>
                    <div className="p-6 bg-white rounded-3xl border-l-8 border-brand-lavender-dark shadow-sm">
                        <p className="text-slate-700 font-bold italic">{content.text_18}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section id="especialidades" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto text-center mb-16 reveal-on-scroll">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 mb-4">{content.text_19}</h2>
            <p className="text-lg text-slate-400">{content.text_20}</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-premium hover:-translate-y-2 transition-all border-b-4 border-brand-lavender reveal-on-scroll">
                <div className="w-14 h-14 bg-brand-lavender-light rounded-2xl flex items-center justify-center text-3xl mb-6 text-brand-lavender-dark">
                    <i className="ph ph-baby"></i>
                </div>
                <h3 className="font-display font-bold text-xl text-slate-800 mb-3">{content.text_21}</h3>
                <p className="text-sm">{content.text_22}</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-premium hover:-translate-y-2 transition-all border-b-4 border-brand-rose-dark reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
                <div className="w-14 h-14 bg-brand-rose-light rounded-2xl flex items-center justify-center text-3xl mb-6 text-brand-rose-dark">
                    <i className="ph ph-tooth"></i>
                </div>
                <h3 className="font-display font-bold text-xl text-slate-800 mb-3">{content.text_23}</h3>
                <p className="text-sm">{content.text_24}</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-premium hover:-translate-y-2 transition-all border-b-4 border-brand-blue-dark reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
                <div className="w-14 h-14 bg-brand-blue-light rounded-2xl flex items-center justify-center text-3xl mb-6 text-brand-blue-dark">
                    <i className="ph ph-lightning"></i>
                </div>
                <h3 className="font-display font-bold text-xl text-slate-800 mb-3">{content.text_25}</h3>
                <p className="text-sm">{content.text_26}</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-premium hover:-translate-y-2 transition-all border-b-4 border-brand-lavender-dark reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-6 text-slate-400">
                    <i className="ph ph-rainbow"></i>
                </div>
                <h3 className="font-display font-bold text-xl text-slate-800 mb-3">{content.text_27}</h3>
                <p className="text-sm">{content.text_28}</p>
            </div>
        </div>
    </section>

    
    <section id="momentos" className="py-24 px-6 bg-brand-lavender-light/30">
        <div className="max-w-6xl mx-auto text-center mb-16 reveal-on-scroll">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 mb-4">{content.text_29}</h2>
            <p className="text-lg text-slate-400">{content.text_30}</p>
        </div>
        <div className="flex overflow-x-auto gap-8 px-6 pb-12 snap-x no-scrollbar reveal-on-scroll">
            
            <div className="snap-center shrink-0 w-[280px] md:w-[320px] bg-white p-4 rounded-[2.5rem] shadow-premium transform -rotate-1">
                <img src={content.img_4} alt="Alegria" className="w-full aspect-[3/4] object-cover rounded-[2rem] mb-4"  />
                <p className="text-center font-bold text-brand-lavender-dark">{content.text_31}</p>
            </div>
            <div className="snap-center shrink-0 w-[280px] md:w-[320px] bg-white p-4 rounded-[2.5rem] shadow-premium transform rotate-2">
                <img src={content.img_5} alt="Diversão" className="w-full aspect-[3/4] object-cover rounded-[2rem] mb-4"  />
                <p className="text-center font-bold text-brand-rose-dark">{content.text_32}</p>
            </div>
            <div className="snap-center shrink-0 w-[280px] md:w-[320px] bg-white p-4 rounded-[2.5rem] shadow-premium transform -rotate-2">
                <img src={content.img_6} alt="Paciência" className="w-full aspect-[3/4] object-cover rounded-[2rem] mb-4"  />
                <p className="text-center font-bold text-brand-blue-dark">{content.text_33}</p>
            </div>
        </div>
    </section>

    
    <section id="contato" className="py-32 px-6">
        <div className="max-w-4xl mx-auto bg-slate-800 text-white rounded-[3rem] p-10 md:p-20 text-center shadow-float reveal-on-scroll relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lavender-dark opacity-10 blur-3xl"></div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-10 relative z-10">{content.text_34}</h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left mb-12 relative z-10">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                    <p className="font-bold mb-2 uppercase text-[10px] tracking-widest text-brand-lavender">{content.text_35}</p>
                    <p className="text-white font-bold">{content.text_36}</p>
                    <p className="text-xs text-white/60">{content.text_37}</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                    <p className="font-bold mb-2 uppercase text-[10px] tracking-widest text-brand-lavender">{content.text_38}</p>
                    <p className="text-white font-bold">{content.text_39}</p>
                    <p className="text-xs text-white/60">{content.text_40}</p>
                </div>
            </div>

            <a href="https://bit.ly/dramirellachagas" target="_blank" className="bg-white text-slate-800 px-12 py-5 rounded-full font-bold text-xl shadow-premium hover:scale-105 transition-all inline-flex items-center gap-4 group">
                <i className="ph-fill ph-whatsapp-logo text-3xl text-[#25D366] group-hover:rotate-12 transition-transform"></i>{content.text_41}</a>
        </div>
    </section>

    
    <footer className="py-12 text-center text-slate-400 text-sm bg-white border-t border-slate-50">
        <p className="font-bold text-slate-800 mb-2 uppercase text-[10px] tracking-widest">{content.text_42}</p>
        <p>{content.text_43}&{content.text_44}</p>
    </footer>

    
    

    </div>
  );
}
