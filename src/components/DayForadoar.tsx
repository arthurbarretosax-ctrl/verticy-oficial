import React from "react";
import "@/assets/css/dayforadoar.css";

export default function DayForadoar({ content }: { content: any }) {
  return (
    <div className="dayforadoar-wrapper template-day foradoar">
      <div className="relative overflow-x-hidden text-slate-700 antialiased relative">
      

    
    
      <style>{`
@import url('https://fonts.googleapis.com');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Quicksand:wght@500;600;700&display=swap');
      `}</style>
<div className="custom-cursor" id="custom-cursor"></div>
    <div className="cursor-dot" id="cursor-dot"></div>

    
    <div id="loader" className="fixed inset-0 bg-brand-pink-light z-50 flex flex-col items-center justify-center">
        <div className="animate-tooth-bounce relative">
            <i className="ph-fill ph-tooth text-6xl text-white drop-shadow-md"></i>
            <svg className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-6 h-6 text-brand-pink-dark" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <circle cx="9" cy="10" r="1.5" fill="currentColor" stroke="none"></circle>
                <circle cx="15" cy="10" r="1.5" fill="currentColor" stroke="none"></circle>
            </svg>
        </div>
        <p className="mt-4 font-display font-bold text-brand-pink-dark animate-pulse">{content.text_1}</p>
    </div>

    
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#FAFAFA]">
        <div className="absolute bg-brand-pink blur-3xl rounded-full w-96 h-96 top-[-10%] left-[-10%] animate-float-slow opacity-50"></div>
        <div className="absolute bg-brand-blue blur-3xl rounded-full w-[30rem] h-[30rem] top-[20%] right-[-15%] animate-float-fast opacity-40"></div>
        <div className="absolute bg-brand-yellow blur-3xl rounded-full w-80 h-80 top-[60%] left-[-5%] animate-float-slow opacity-40"></div>
        <div className="absolute bg-brand-green blur-3xl rounded-full w-96 h-96 top-[80%] right-[10%] animate-float-fast opacity-40"></div>
    </div>

    
    <nav className="fixed w-full z-40 top-0 transition-all duration-300 glass-card" id="navbar">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2 group cursor-pointer" >
                <div className="bg-brand-pink text-white p-2 rounded-xl group-hover:rotate-12 transition-transform">
                    <i className="ph-fill ph-tooth text-2xl"></i>
                </div>
                <div className="leading-tight">
                    <h1 className="font-display font-bold text-xl text-slate-800">{content.text_2}</h1>
                    <p className="text-xs font-semibold text-brand-pink-dark tracking-wide">{content.text_3}</p>
                </div>
            </div>
            <a href="#agendamento" className="hidden md:flex items-center gap-2 bg-white text-brand-pink-dark border-2 border-brand-pink hover:bg-brand-pink hover:text-white px-6 py-2 rounded-full font-bold transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1">{content.text_4}<i className="ph-bold ph-calendar-plus"></i>
            </a>
        </div>
    </nav>

    
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 min-h-[90vh] flex items-center">
        
        <i className="ph-fill ph-star text-brand-yellow-dark text-3xl absolute top-24 left-4 lg:top-40 lg:left-[10%] animate-float-fast opacity-60"></i>
        <i className="ph-fill ph-sparkle text-brand-blue-dark text-4xl absolute top-52 right-4 lg:top-60 lg:right-[15%] animate-float-slow opacity-60"></i>
        <i className="ph-fill ph-tooth text-brand-pink-dark text-2xl absolute bottom-20 left-[15%] animate-bob opacity-50"></i>
        
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 lg:gap-y-0 items-center reveal-on-scroll is-visible w-full">
            
            
            <div className="relative z-10 order-1 lg:col-start-1 lg:row-start-1 lg:self-end lg:pb-4">
                <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm border border-brand-pink-light text-brand-pink-dark font-bold text-sm mb-6 flex items-center gap-2 w-max animate-bob">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-pink-dark"></span>
                    </span>{content.text_5}</div>
                <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-slate-800 leading-tight">{content.text_6}<span className="text-brand-pink-dark relative inline-block">{content.text_7}<svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-pink opacity-50" viewbox="0 0 100 10" preserveaspectratio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="4" fill="none"></path></svg></span>{content.text_8}</h1>
            </div>

            
            <div className="relative z-10 w-full max-w-lg mx-auto order-2 lg:col-start-2 lg:row-span-2">
                <div className="relative w-full">
                    <div className="absolute inset-0 bg-brand-blue rounded-[3rem] mix-blend-multiply filter blur-2xl opacity-70 animate-pulse-soft -z-10 translate-y-4"></div>
                    <div className="absolute inset-0 bg-brand-pink rounded-[3rem] rotate-3 transform transition-transform hover:rotate-6 duration-500 -z-10"></div>
                    
                    <div className="relative w-full bg-white rounded-[3rem] shadow-soft p-2 group">
                        
                        <img src={content.img_1} alt="Criança sorrindo na cadeira" className="w-full h-auto rounded-[2.5rem] object-contain z-0 transition-transform duration-500 group-hover:scale-[1.02]" />
                        
                        <div className="absolute -bottom-6 left-4 md:-left-6 bg-white px-5 py-3 rounded-2xl shadow-float flex items-center gap-3 border border-brand-pink-light z-20 animate-bob">
                            <div className="bg-brand-pink-light p-2 rounded-full">
                                <i className="ph-fill ph-heart text-brand-pink-dark text-xl"></i>
                            </div>
                            <div className="text-left leading-tight">
                                <p className="text-sm font-bold text-slate-800">{content.text_9}</p>
                                <p className="text-xs text-slate-500">{content.text_10}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="relative z-10 order-3 lg:col-start-1 lg:row-start-2 lg:self-start lg:pt-4">
                <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">{content.text_11}</p>
                
                
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <a href="https://wa.me/5522999811131?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+em+Campos+dos+Goytacazes." target="_blank" className="flex items-center justify-center gap-2 md:gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 md:px-8 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg whitespace-nowrap transition-all shadow-float transform hover:-translate-y-2 group w-full sm:w-auto">
                        <i className="ph-fill ph-whatsapp-logo text-2xl group-hover:scale-110 transition-transform"></i>{content.text_12}</a>
                    <a href="https://wa.me/5531988307017?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+em+Ipatinga." target="_blank" className="flex items-center justify-center gap-2 md:gap-3 bg-white border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-5 md:px-8 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg whitespace-nowrap transition-all shadow-sm transform hover:-translate-y-2 group w-full sm:w-auto">
                        <i className="ph-bold ph-whatsapp-logo text-2xl"></i>{content.text_13}</a>
                </div>
            </div>

        </div>
    </section>

    
    <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center reveal-on-scroll">
            <div className="order-2 md:order-1 relative">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft flex items-center justify-center border-8 border-brand-pink-light relative group">
                    <img src={content.img_2} alt="Dra. Dayanne Jordão" className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-transform duration-500 group-hover:scale-105" />
                </div>
                
                <svg className="absolute -bottom-8 -right-8 w-24 h-24 text-brand-yellow-dark animate-spin-slow" viewbox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="8" stroke-dasharray="20 10"><circle cx="50" cy="50" r="40"></circle></svg>
            </div>
            
            <div className="order-1 md:order-2">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-800 mb-6 relative inline-block">{content.text_14}<div className="absolute -bottom-2 left-0 w-1/2 h-2 bg-brand-pink-light rounded-full -z-10"></div>
                </h2>
                
                <div className="space-y-6 text-lg text-slate-600">
                    <p>{content.text_15}<strong>{content.text_16}</strong>{content.text_17}</p>
                    <p className="p-4 bg-brand-pink-light rounded-2xl border border-brand-pink text-brand-pink-dark font-medium italic relative">{content.text_18}</p>
                    <p>{content.text_19}<strong>{content.text_20}</strong>{content.text_21}</p>
                    <p className="font-display font-bold text-slate-800 flex items-center gap-2">
                        <i className="ph-fill ph-magic-wand text-brand-yellow-dark text-2xl"></i>{content.text_22}</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal-on-scroll">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-800 mb-4">{content.text_23}</h2>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto">{content.text_24}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-float transform transition-all hover:-translate-y-2 border-b-4 border-brand-pink cursor-pointer reveal-on-scroll">
                    <div className="bg-brand-pink-light w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6">💖</div>
                    <h3 className="font-display font-bold text-xl text-slate-800 mb-3">{content.text_25}</h3>
                    <p className="text-slate-600">{content.text_26}</p>
                </div>
                
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-float transform transition-all hover:-translate-y-2 border-b-4 border-brand-blue cursor-pointer reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
                    <div className="bg-brand-blue-light w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6">🎨</div>
                    <h3 className="font-display font-bold text-xl text-slate-800 mb-3">{content.text_27}</h3>
                    <p className="text-slate-600">{content.text_28}</p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-float transform transition-all hover:-translate-y-2 border-b-4 border-brand-yellow cursor-pointer reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
                    <div className="bg-brand-yellow-light w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6">👶</div>
                    <h3 className="font-display font-bold text-xl text-slate-800 mb-3">{content.text_29}</h3>
                    <p className="text-slate-600">{content.text_30}</p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-float transform transition-all hover:-translate-y-2 border-b-4 border-brand-green lg:col-start-1 lg:ml-[16.66%] reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
                    <div className="bg-brand-green-light w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6">♿</div>
                    <h3 className="font-display font-bold text-xl text-slate-800 mb-3">{content.text_31}</h3>
                    <p className="text-slate-600">{content.text_32}</p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-float transform transition-all hover:-translate-y-2 border-b-4 border-brand-pink-dark lg:mr-[16.66%] reveal-on-scroll" style={{ transitionDelay: '0.4s' }}>
                    <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6">😄</div>
                    <h3 className="font-display font-bold text-xl text-slate-800 mb-3">{content.text_33}</h3>
                    <p className="text-slate-600">{content.text_34}</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="py-20 px-6 bg-brand-blue-light/80 relative overflow-hidden">
        
        <i className="ph-fill ph-cloud text-white text-8xl absolute top-10 left-10 opacity-60 animate-float-slow"></i>
        <i className="ph-fill ph-cloud text-white text-6xl absolute bottom-10 right-20 opacity-60 animate-float-fast"></i>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 reveal-on-scroll">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-800 mb-6">{content.text_35}</h2>
            <p className="text-xl text-slate-600 mb-12 font-medium">{content.text_36}</p>
            
            <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-white px-8 py-4 rounded-full shadow-sm font-display font-bold text-lg text-brand-blue-dark flex items-center gap-2 hover:scale-105 transition-transform animate-bob" style={{ animationDelay: '0s' }}>
                    <i className="ph-fill ph-baby text-2xl"></i>{content.text_37}</div>
                
                <div className="bg-white px-8 py-4 rounded-full shadow-sm font-display font-bold text-lg text-brand-pink-dark flex items-center gap-2 hover:scale-105 transition-transform animate-bob" style={{ animationDelay: '0.2s' }}>
                    <i className="ph-fill ph-smiley text-2xl"></i>{content.text_38}</div>
                <div className="bg-white px-8 py-4 rounded-full shadow-sm font-display font-bold text-lg text-brand-green-dark flex items-center gap-2 hover:scale-105 transition-transform animate-bob" style={{ animationDelay: '0.4s' }}>
                    <i className="ph-fill ph-wheelchair text-2xl"></i>{content.text_39}</div>
            </div>
        </div>
    </section>

    
    <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal-on-scroll">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-800 mb-4">{content.text_40}</h2>
                <p className="text-lg text-slate-500">{content.text_41}</p>
            </div>

            <div className="relative reveal-on-scroll">
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 border-t-2 border-dashed border-brand-pink-light -translate-y-1/2 z-0"></div>
                
                <div className="grid md:grid-cols-3 gap-12 relative z-10">
                    <div className="text-center group">
                        <div className="w-20 h-20 mx-auto bg-white border-4 border-brand-pink rounded-full flex items-center justify-center text-2xl font-display font-bold text-brand-pink-dark shadow-sm mb-6 group-hover:scale-110 group-hover:bg-brand-pink group-hover:text-white transition-all">1</div>
                        <h3 className="font-display font-bold text-xl text-slate-800 mb-2">{content.text_42}</h3>
                        <p className="text-slate-600">{content.text_43}</p>
                    </div>
                    
                    <div className="text-center group">
                        <div className="w-20 h-20 mx-auto bg-white border-4 border-brand-blue rounded-full flex items-center justify-center text-2xl font-display font-bold text-brand-blue-dark shadow-sm mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all">2</div>
                        <h3 className="font-display font-bold text-xl text-slate-800 mb-2">{content.text_44}</h3>
                        <p className="text-slate-600">{content.text_45}</p>
                    </div>

                    <div className="text-center group">
                        <div className="w-20 h-20 mx-auto bg-white border-4 border-brand-yellow rounded-full flex items-center justify-center text-2xl font-display font-bold text-brand-yellow-dark shadow-sm mb-6 group-hover:scale-110 group-hover:bg-brand-yellow group-hover:text-white transition-all">3</div>
                        <h3 className="font-display font-bold text-xl text-slate-800 mb-2">{content.text_46}</h3>
                        <p className="text-slate-600">{content.text_47}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="py-24 bg-white/50 relative overflow-hidden backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 mb-12 text-center reveal-on-scroll">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-800 mb-4">{content.text_48}</h2>
            <p className="text-lg text-slate-600">{content.text_49}</p>
        </div>

        <div className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory no-scrollbar reveal-on-scroll">
            
            <div className="snap-center shrink-0 w-80 md:w-96 aspect-video rounded-3xl overflow-hidden shadow-soft relative group">
                <img src={content.img_3} alt="Recepção Lúdica" className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-transform duration-500 group-hover:scale-105" />
            </div>

            <div className="snap-center shrink-0 w-80 md:w-96 aspect-video rounded-3xl overflow-hidden shadow-soft relative group">
                <img src={content.img_4} alt="Cadeira do Dentista" className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-transform duration-500 group-hover:scale-105" />
            </div>

            <div className="snap-center shrink-0 w-80 md:w-96 aspect-video rounded-3xl overflow-hidden shadow-soft relative group">
                <img src={content.img_5} alt="Interação com criança" className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-transform duration-500 group-hover:scale-105" />
            </div>
            
            <div className="snap-center shrink-0 w-80 md:w-96 aspect-video rounded-3xl overflow-hidden shadow-soft relative group">
                <img src={content.img_6} alt="Criança recebendo certificado" className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-transform duration-500 group-hover:scale-105" />
            </div>

            <div className="shrink-0 w-6"></div> 
        </div>
        
        <div className="text-center mt-2 flex justify-center gap-2 text-brand-pink-dark animate-pulse">
            <i className="ph-bold ph-arrows-left-right text-2xl"></i>
            <span className="text-sm font-bold uppercase tracking-wider">{content.text_50}</span>
        </div>
    </section>

    
    <section className="py-24 px-6 bg-brand-pink-light/80 relative backdrop-blur-md">
        
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1200 120" preserveaspectratio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="rgba(255, 255, 255, 0.5)"></path>
            </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 pt-10">
            <div className="text-center mb-16 reveal-on-scroll">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-800 mb-4">{content.text_51}</h2>
                <p className="text-lg text-slate-600">{content.text_52}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                
                <div className="bg-white p-8 rounded-3xl shadow-sm relative reveal-on-scroll">
                    <i className="ph-fill ph-quotes text-5xl text-brand-pink-light absolute top-6 right-6"></i>
                    <div className="flex gap-1 text-brand-yellow-dark mb-4 text-lg">
                        <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                    </div>
                    <p className="text-slate-700 italic mb-6">{content.text_53}</p>
                    <p className="font-display font-bold text-slate-800 text-sm">{content.text_54}</p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm relative reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
                    <i className="ph-fill ph-quotes text-5xl text-brand-blue-light absolute top-6 right-6"></i>
                    <div className="flex gap-1 text-brand-yellow-dark mb-4 text-lg">
                        <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                    </div>
                    <p className="text-slate-700 italic mb-6">{content.text_55}</p>
                    <p className="font-display font-bold text-slate-800 text-sm">{content.text_56}</p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm relative reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
                    <i className="ph-fill ph-quotes text-5xl text-brand-yellow-light absolute top-6 right-6"></i>
                    <div className="flex gap-1 text-brand-yellow-dark mb-4 text-lg">
                        <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                    </div>
                    <p className="text-slate-700 italic mb-6">{content.text_57}</p>
                    <p className="font-display font-bold text-slate-800 text-sm">{content.text_58}</p>
                </div>
            </div>
        </div>
    </section>

    
    <section id="agendamento" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto bg-brand-blue-light/90 backdrop-blur-lg rounded-[3rem] p-10 md:p-16 text-center shadow-soft relative overflow-hidden border border-white reveal-on-scroll">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink blur-3xl rounded-full opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-yellow blur-3xl rounded-full opacity-60"></div>
            
            <div className="relative z-10">
                <h2 className="font-display font-extrabold text-3xl md:text-5xl text-slate-800 mb-6">{content.text_59}</h2>
                <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">{content.text_60}<br />{content.text_61}</p>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    
                    <a href="https://wa.me/5522999811131?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+para+meu+filho%28a%29+em+Campos+dos+Goytacazes." target="_blank" className="bg-white hover:bg-brand-pink-light border-2 border-transparent hover:border-brand-pink p-6 rounded-3xl shadow-sm hover:shadow-float transition-all group flex-1 max-w-sm text-left">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-[#25D366]/10 p-3 rounded-full text-[#25D366]">
                                <i className="ph-fill ph-whatsapp-logo text-3xl group-hover:scale-110 transition-transform"></i>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-xl text-slate-800">{content.text_62}</h3>
                                <p className="text-slate-500 text-sm">{content.text_63}</p>
                            </div>
                        </div>
                        <p className="text-lg font-bold text-slate-700">{content.text_64}</p>
                        <div className="mt-4 flex items-center text-brand-pink-dark font-bold text-sm gap-2">{content.text_65}<i className="ph-bold ph-arrow-right group-hover:translate-x-2 transition-transform"></i>
                        </div>
                    </a>

                    
                    <a href="https://wa.me/5531988307017?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+para+meu+filho%28a%29+em+Ipatinga." target="_blank" className="bg-white hover:bg-brand-blue-light border-2 border-transparent hover:border-brand-blue p-6 rounded-3xl shadow-sm hover:shadow-float transition-all group flex-1 max-w-sm text-left">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-[#25D366]/10 p-3 rounded-full text-[#25D366]">
                                <i className="ph-fill ph-whatsapp-logo text-3xl group-hover:scale-110 transition-transform"></i>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-xl text-slate-800">{content.text_66}</h3>
                                <p className="text-slate-500 text-sm">{content.text_67}</p>
                            </div>
                        </div>
                        <p className="text-lg font-bold text-slate-700">{content.text_68}</p>
                        <div className="mt-4 flex items-center text-brand-blue-dark font-bold text-sm gap-2">{content.text_69}<i className="ph-bold ph-arrow-right group-hover:translate-x-2 transition-transform"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    
    <footer className="bg-white pt-16 pb-8 px-6 border-t border-slate-100 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
            <div className="bg-brand-pink text-white p-3 rounded-2xl mb-6">
                <i className="ph-fill ph-tooth text-3xl"></i>
            </div>
            <h3 className="font-display font-bold text-2xl text-slate-800 mb-2">{content.text_70}</h3>
            <p className="text-brand-pink-dark font-bold text-sm uppercase tracking-widest mb-6">{content.text_71}</p>
            
            <p className="text-slate-500 max-w-md mx-auto mb-10 italic">{content.text_72}</p>

            <div className="w-full h-px bg-slate-100 mb-8"></div>
            
            <p className="text-slate-400 text-sm">
                 {content.text_73}</p>
        </div>
    </footer>

    
    

    </div>
    </div>
  );
}
