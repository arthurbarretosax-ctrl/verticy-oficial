import React from "react";

export default function Amandex({ content }: { content: any }) {
  return (
    <div className="amandex-wrapper">
      

    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-nude-200/40 blur-[100px] mix-blend-multiply animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-nude-300/30 blur-[120px] mix-blend-multiply animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </div>

    <header className="fixed w-full top-0 z-50 px-6 py-4 transition-all duration-300" id="navbar">
        <div className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex justify-between items-center relative z-50">
            <div className="flex items-center cursor-pointer">
                <img src={content.img_1} alt="Logo Dra. Amanda" className="h-10 md:h-14 w-auto object-contain" />
            </div>
            
            <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-dark/80">
                <a href="#sobre" className="hover:text-nude-600 transition-colors">{content.text_1}</a>
                <a href="#diferenciais" className="hover:text-nude-600 transition-colors">{content.text_2}</a>
                <a href="#tratamentos" className="hover:text-nude-600 transition-colors">{content.text_3}</a>
                <a href="#consultorio" className="hover:text-nude-600 transition-colors">{content.text_4}</a>
                <a href="#resultados" className="hover:text-nude-600 transition-colors">{content.text_5}</a>
                <a href="#faq" className="hover:text-nude-600 transition-colors">{content.text_6}</a>
            </nav>

            <a href="#contato" className="hidden md:flex items-center gap-2 bg-dark text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-nude-700 transition-colors shadow-lg shadow-dark/20 hover-lift">{content.text_7}<i className="ph ph-calendar-plus"></i>
            </a>

            <button id="mobile-menu-btn" className="lg:hidden text-2xl text-dark p-1 focus:outline-none">
                <i className="ph ph-list" id="mobile-menu-icon"></i>
            </button>
        </div>

        <div id="mobile-menu" className="fixed inset-0 bg-nude-50/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center opacity-0 pointer-events-none transition-all duration-300 lg:hidden">
            <nav className="flex flex-col items-center gap-6 font-display text-2xl text-dark">
                <a href="#sobre" className="mobile-link hover:text-nude-600 transition-colors">{content.text_8}</a>
                <a href="#diferenciais" className="mobile-link hover:text-nude-600 transition-colors">{content.text_9}</a>
                <a href="#tratamentos" className="mobile-link hover:text-nude-600 transition-colors">{content.text_10}</a>
                <a href="#consultorio" className="mobile-link hover:text-nude-600 transition-colors">{content.text_11}</a>
                <a href="#resultados" className="mobile-link hover:text-nude-600 transition-colors">{content.text_12}</a>
                <a href="#faq" className="mobile-link hover:text-nude-600 transition-colors">{content.text_13}</a>
                <a href="#contato" className="mt-6 bg-dark text-white px-8 py-3 rounded-full font-medium text-lg flex items-center gap-2 shadow-xl shadow-dark/20 mobile-link">
                    <i className="ph-fill ph-calendar-plus text-2xl"></i>{content.text_14}</a>
            </nav>
        </div>
    </header>

    <section className="relative pt-36 pb-16 lg:min-h-[100svh] lg:flex lg:items-center px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10 space-y-6 md:space-y-8">
            
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-nude-300/50 reveal">
                <span className="w-2 h-2 rounded-full bg-nude-500 animate-pulse"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-nude-700">{content.text_15}</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-dark reveal reveal-delay-1">
                <span className="font-semibold italic text-transparent bg-clip-text bg-gradient-to-r from-nude-600 to-nude-400">{content.text_16}</span><br />{content.text_17}</h1>
            
            <div className="relative h-[480px] sm:h-[620px] lg:h-[720px] w-full flex justify-center items-center reveal reveal-delay-2 my-4 md:my-8">
                <div className="absolute inset-0 border border-nude-300/40 rounded-full animate-[spin_20s_linear_infinite] w-[360px] h-[360px] sm:w-[550px] sm:h-[550px] lg:w-[680px] lg:h-[680px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="blob-shape w-[320px] h-[440px] sm:w-[380px] sm:h-[580px] lg:w-[450px] lg:h-[680px] relative z-10">
                    <img src={content.img_2} alt="Dra. Amanda" className="w-full h-full object-cover object-top scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 right-0 md:right-[5%] lg:right-[10%] z-20 glass px-4 py-3 sm:px-6 sm:py-4 rounded-2xl animate-float backdrop-blur-xl text-left">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex justify-center items-center text-nude-600 shadow-md">
                            <i className="ph-fill ph-certificate text-xl sm:text-2xl"></i>
                        </div>
                        <div>
                            <p className="font-display font-bold text-base sm:text-lg text-dark">{content.text_18}</p>
                            <p className="text-[10px] sm:text-xs text-dark/60 font-medium">{content.text_19}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 reveal reveal-delay-3 w-full sm:w-auto">
                <a href="#contato" className="bg-dark text-white px-8 py-4 rounded-full font-medium text-center hover:bg-nude-700 transition-colors shadow-xl shadow-dark/30 hover-lift flex justify-center items-center gap-2">{content.text_20}<i className="ph-bold ph-arrow-down text-xl text-nude-300"></i>
                </a>
            </div>
        </div>
    </section>

    <section id="sobre" className="pt-24 pb-12 px-6 relative overflow-hidden bg-nude-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            
            <div className="w-full lg:w-1/2 relative reveal">
                <div className="absolute inset-0 bg-nude-200 rounded-[2.5rem] rotate-[-3deg] scale-105 transition-transform hover:rotate-0 duration-500"></div>
                <img src={content.img_3} alt="Dra. Amanda Perfil" className="relative z-10 w-full h-[600px] object-cover rounded-[2rem] shadow-2xl" />
            </div>

            <div className="w-full lg:w-1/2 space-y-8 reveal reveal-delay-1">
                <div>
                    <span className="text-nude-600 uppercase tracking-widest text-sm font-semibold mb-2 block">{content.text_21}</span>
                    <h2 className="font-display text-4xl md:text-5xl font-light text-dark mb-6">{content.text_22}<span className="font-semibold text-nude-600">{content.text_23}</span>
                    </h2>
                    <div className="space-y-4 text-dark/70 font-light text-lg leading-relaxed">
                        <p>{content.text_24}</p>
                        <p>{content.text_25}</p>
                        <p>{content.text_26}</p>
                        <p className="font-medium text-dark/90 italic mt-6">{content.text_27}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="diferenciais" className="py-20 px-6 bg-nude-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 reveal">
                <h2 className="font-display text-3xl md:text-4xl font-light text-dark">{content.text_28}<span className="font-semibold italic text-nude-600">{content.text_29}</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="glass p-8 rounded-3xl hover-lift reveal">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-nude-600 shadow-sm mb-6">
                        <i className="ph-fill ph-heart text-2xl"></i>
                    </div>
                    <h4 className="font-display text-xl font-medium text-dark mb-3">{content.text_30}</h4>
                    <p className="text-dark/70 font-light">{content.text_31}</p>
                </div>

                <div className="glass p-8 rounded-3xl hover-lift reveal reveal-delay-1">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-nude-600 shadow-sm mb-6">
                        <i className="ph-fill ph-graduation-cap text-2xl"></i>
                    </div>
                    <h4 className="font-display text-xl font-medium text-dark mb-3">{content.text_32}</h4>
                    <p className="text-dark/70 font-light">{content.text_33}</p>
                </div>

                <div className="glass p-8 rounded-3xl hover-lift reveal reveal-delay-2">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-nude-600 shadow-sm mb-6">
                        <i className="ph-fill ph-armchair text-2xl"></i>
                    </div>
                    <h4 className="font-display text-xl font-medium text-dark mb-3">{content.text_34}</h4>
                    <p className="text-dark/70 font-light">{content.text_35}</p>
                </div>

                <div className="glass p-8 rounded-3xl hover-lift reveal lg:col-start-2">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-nude-600 shadow-sm mb-6">
                        <i className="ph-fill ph-eye text-2xl"></i>
                    </div>
                    <h4 className="font-display text-xl font-medium text-dark mb-3">{content.text_36}</h4>
                    <p className="text-dark/70 font-light">{content.text_37}</p>
                </div>

                <div className="glass p-8 rounded-3xl hover-lift reveal reveal-delay-1">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-nude-600 shadow-sm mb-6">
                        <i className="ph-fill ph-leaf text-2xl"></i>
                    </div>
                    <h4 className="font-display text-xl font-medium text-dark mb-3">{content.text_38}</h4>
                    <p className="text-dark/70 font-light">{content.text_39}</p>
                </div>
            </div>
        </div>
    </section>

    <section id="tratamentos" className="py-24 px-6 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-nude-900/20 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 reveal">
                <span className="text-nude-400 uppercase tracking-widest text-sm font-semibold mb-2 block">{content.text_40}</span>
                <h2 className="font-display text-4xl md:text-5xl font-light">{content.text_41}<span className="font-semibold italic text-nude-300">{content.text_42}</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div className="group relative h-[380px] rounded-[2rem] overflow-hidden reveal hover-lift cursor-pointer">
                    <img src={content.img_4} alt="Limpeza e Prevenção" className="absolute inset-0 w-full h-full object-cover img-zoom" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/90 to-dark/20 group-hover:bg-dark/80 transition-colors duration-500"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                        <i className="ph-thin ph-first-aid text-4xl text-nude-300 mb-4 group-hover:-translate-y-1 transition-transform"></i>
                        <h3 className="font-display text-xl font-medium mb-3 group-hover:-translate-y-1 transition-transform">{content.text_43}</h3>
                        <p className="text-white/80 font-light text-sm leading-relaxed group-hover:-translate-y-1 transition-transform">{content.text_44}</p>
                    </div>
                </div>

                <div className="group relative h-[380px] rounded-[2rem] overflow-hidden reveal reveal-delay-1 hover-lift cursor-pointer">
                    <img src={content.img_5} alt="Restauração" className="absolute inset-0 w-full h-full object-cover img-zoom" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/90 to-dark/20 group-hover:bg-dark/80 transition-colors duration-500"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                        <i className="ph-thin ph-tooth text-4xl text-nude-300 mb-4 group-hover:-translate-y-1 transition-transform"></i>
                        <h3 className="font-display text-xl font-medium mb-3 group-hover:-translate-y-1 transition-transform">{content.text_45}</h3>
                        <p className="text-white/80 font-light text-sm leading-relaxed group-hover:-translate-y-1 transition-transform">{content.text_46}</p>
                    </div>
                </div>

                <div className="group relative h-[380px] rounded-[2rem] overflow-hidden reveal reveal-delay-2 hover-lift cursor-pointer">
                    <img src={content.img_6} alt="Pino e Bloco/Coroa" className="absolute inset-0 w-full h-full object-cover img-zoom" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/90 to-dark/20 group-hover:bg-dark/80 transition-colors duration-500"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                        <i className="ph-thin ph-cube text-4xl text-nude-300 mb-4 group-hover:-translate-y-1 transition-transform"></i>
                        <h3 className="font-display text-xl font-medium mb-3 group-hover:-translate-y-1 transition-transform">{content.text_47}</h3>
                        <p className="text-white/80 font-light text-sm leading-relaxed group-hover:-translate-y-1 transition-transform">{content.text_48}</p>
                    </div>
                </div>

                <div className="group relative h-[380px] rounded-[2rem] overflow-hidden reveal reveal-delay-3 hover-lift cursor-pointer">
                    <img src={content.img_7} alt="Facetas em Resina" className="absolute inset-0 w-full h-full object-cover img-zoom" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/90 to-dark/20 group-hover:bg-dark/80 transition-colors duration-500"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                        <i className="ph-thin ph-magic-wand text-4xl text-nude-300 mb-4 group-hover:-translate-y-1 transition-transform"></i>
                        <h3 className="font-display text-xl font-medium mb-3 group-hover:-translate-y-1 transition-transform">{content.text_49}</h3>
                        <p className="text-white/80 font-light text-sm leading-relaxed group-hover:-translate-y-1 transition-transform">{content.text_50}</p>
                    </div>
                </div>

                <div className="group relative h-[380px] rounded-[2rem] overflow-hidden reveal hover-lift cursor-pointer">
                    <img src={content.img_8} alt="Facetas em Porcelana" className="absolute inset-0 w-full h-full object-cover img-zoom" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/90 to-dark/20 group-hover:bg-dark/80 transition-colors duration-500"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                        <i className="ph-thin ph-diamonds-four text-4xl text-nude-300 mb-4 group-hover:-translate-y-1 transition-transform"></i>
                        <h3 className="font-display text-xl font-medium mb-3 group-hover:-translate-y-1 transition-transform">{content.text_51}</h3>
                        <p className="text-white/80 font-light text-sm leading-relaxed group-hover:-translate-y-1 transition-transform">{content.text_52}</p>
                    </div>
                </div>

                <div className="group relative h-[380px] rounded-[2rem] overflow-hidden reveal reveal-delay-1 hover-lift cursor-pointer">
                    <img src={content.img_9} alt="Próteses Dentárias" className="absolute inset-0 w-full h-full object-cover img-zoom" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/90 to-dark/20 group-hover:bg-dark/80 transition-colors duration-500"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                        <i className="ph-thin ph-smiley text-4xl text-nude-300 mb-4 group-hover:-translate-y-1 transition-transform"></i>
                        <h3 className="font-display text-xl font-medium mb-3 group-hover:-translate-y-1 transition-transform">{content.text_53}</h3>
                        <p className="text-white/80 font-light text-sm leading-relaxed group-hover:-translate-y-1 transition-transform">{content.text_54}</p>
                    </div>
                </div>

                <div className="group relative h-[380px] rounded-[2rem] overflow-hidden reveal reveal-delay-2 hover-lift cursor-pointer">
                    <img src={content.img_10} alt="Placa para Bruxismo" className="absolute inset-0 w-full h-full object-cover img-zoom" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/90 to-dark/20 group-hover:bg-dark/80 transition-colors duration-500"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                        <i className="ph-thin ph-shield-check text-4xl text-nude-300 mb-4 group-hover:-translate-y-1 transition-transform"></i>
                        <h3 className="font-display text-xl font-medium mb-3 group-hover:-translate-y-1 transition-transform">{content.text_55}</h3>
                        <p className="text-white/80 font-light text-sm leading-relaxed group-hover:-translate-y-1 transition-transform">{content.text_56}</p>
                    </div>
                </div>

                <div className="group relative h-[380px] rounded-[2rem] overflow-hidden reveal reveal-delay-3 hover-lift cursor-pointer">
                    <img src={content.img_11} alt="HOF" className="absolute inset-0 w-full h-full object-cover img-zoom" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/90 to-dark/20 group-hover:bg-dark/80 transition-colors duration-500"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                        <i className="ph-thin ph-drop text-4xl text-nude-300 mb-4 group-hover:-translate-y-1 transition-transform"></i>
                        <h3 className="font-display text-xl font-medium mb-3 group-hover:-translate-y-1 transition-transform">{content.text_57}</h3>
                        <p className="text-white/80 font-light text-xs leading-relaxed group-hover:-translate-y-1 transition-transform mb-2">
                            <strong className="text-white">{content.text_58}</strong>{content.text_59}</p>
                        <p className="text-white/80 font-light text-xs leading-relaxed group-hover:-translate-y-1 transition-transform">
                            <strong className="text-white">{content.text_60}</strong>{content.text_61}</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section className="py-24 px-6 bg-white relative">
        <div className="max-w-5xl mx-auto text-center glass p-10 md:p-14 rounded-[2.5rem] border border-nude-300/60 reveal hover-lift relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-nude-100/20 z-0"></div>
            
            <div className="relative z-10">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-nude-600">
                    <i className="ph-thin ph-users-three text-4xl"></i>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-light text-dark mb-6">{content.text_62}<span className="font-semibold italic text-nude-600">{content.text_63}</span>
                </h3>
                <p className="text-lg md:text-xl text-dark/70 font-light leading-relaxed max-w-3xl mx-auto mb-6">{content.text_64}</p>
                <div className="inline-flex flex-wrap justify-center gap-3">
                    <span className="bg-nude-100 text-nude-800 px-4 py-2 rounded-full text-sm font-medium">{content.text_65}</span>
                    <span className="bg-nude-100 text-nude-800 px-4 py-2 rounded-full text-sm font-medium">{content.text_66}</span>
                    <span className="bg-nude-100 text-nude-800 px-4 py-2 rounded-full text-sm font-medium">{content.text_67}</span>
                    <span className="bg-nude-100 text-nude-800 px-4 py-2 rounded-full text-sm font-medium">{content.text_68}</span>
                </div>
            </div>
        </div>
    </section>

    <section id="resultados" className="py-24 px-6 relative bg-nude-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 reveal">
                <span className="text-nude-600 uppercase tracking-widest text-sm font-semibold mb-2 block">{content.text_69}</span>
                <h2 className="font-display text-4xl md:text-5xl font-light text-dark">{content.text_70}<span className="font-semibold italic">{content.text_71}</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                
                <div className="ba-container relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl reveal glass">
                    <img src={content.img_12} alt="Antes" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute top-6 left-6 glass px-4 py-1.5 rounded-full z-10 text-xs font-bold uppercase tracking-wider text-dark bg-white/80 pointer-events-none">{content.text_72}</div>

                    <div className="ba-after absolute inset-0 w-full h-full" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}>
                        <img src={content.img_13} alt="Depois" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute top-6 right-6 bg-nude-600/90 text-white px-4 py-1.5 rounded-full z-10 text-xs font-bold uppercase tracking-wider backdrop-blur-md pointer-events-none">{content.text_73}</div>
                    </div>

                    <div className="ba-handle absolute top-0 bottom-0 w-1 bg-white left-1/2 -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl text-nude-600">
                            <i className="ph-bold ph-arrows-left-right text-xl"></i>
                        </div>
                    </div>

                    <input type="range" min="0" max="100" value="50" className="ba-slider-input absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30" />
                </div>

                <div className="ba-container relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl reveal reveal-delay-1 glass">
                    <img src={content.img_14} alt="Antes" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute top-6 left-6 glass px-4 py-1.5 rounded-full z-10 text-xs font-bold uppercase tracking-wider text-dark bg-white/80 pointer-events-none">{content.text_74}</div>

                    <div className="ba-after absolute inset-0 w-full h-full" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}>
                        <img src={content.img_15} alt="Depois" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute top-6 right-6 bg-nude-600/90 text-white px-4 py-1.5 rounded-full z-10 text-xs font-bold uppercase tracking-wider backdrop-blur-md pointer-events-none">{content.text_75}</div>
                    </div>

                    <div className="ba-handle absolute top-0 bottom-0 w-1 bg-white left-1/2 -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl text-nude-600">
                            <i className="ph-bold ph-arrows-left-right text-xl"></i>
                        </div>
                    </div>

                    <input type="range" min="0" max="100" value="50" className="ba-slider-input absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30" />
                </div>

                <div className="ba-container relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl reveal reveal-delay-2 glass">
                    <img src={content.img_16} alt="Antes" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute top-6 left-6 glass px-4 py-1.5 rounded-full z-10 text-xs font-bold uppercase tracking-wider text-dark bg-white/80 pointer-events-none">{content.text_76}</div>

                    <div className="ba-after absolute inset-0 w-full h-full" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}>
                        <img src={content.img_17} alt="Depois" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute top-6 right-6 bg-nude-600/90 text-white px-4 py-1.5 rounded-full z-10 text-xs font-bold uppercase tracking-wider backdrop-blur-md pointer-events-none">{content.text_77}</div>
                    </div>

                    <div className="ba-handle absolute top-0 bottom-0 w-1 bg-white left-1/2 -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl text-nude-600">
                            <i className="ph-bold ph-arrows-left-right text-xl"></i>
                        </div>
                    </div>

                    <input type="range" min="0" max="100" value="50" className="ba-slider-input absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30" />
                </div>

                <div className="ba-container relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl reveal reveal-delay-3 glass">
                    <img src={content.img_18} alt="Antes" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute top-6 left-6 glass px-4 py-1.5 rounded-full z-10 text-xs font-bold uppercase tracking-wider text-dark bg-white/80 pointer-events-none">{content.text_78}</div>

                    <div className="ba-after absolute inset-0 w-full h-full" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}>
                        <img src={content.img_19} alt="Depois" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute top-6 right-6 bg-nude-600/90 text-white px-4 py-1.5 rounded-full z-10 text-xs font-bold uppercase tracking-wider backdrop-blur-md pointer-events-none">{content.text_79}</div>
                    </div>

                    <div className="ba-handle absolute top-0 bottom-0 w-1 bg-white left-1/2 -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl text-nude-600">
                            <i className="ph-bold ph-arrows-left-right text-xl"></i>
                        </div>
                    </div>

                    <input type="range" min="0" max="100" value="50" className="ba-slider-input absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30" />
                </div>

                <div className="ba-container relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl reveal glass md:col-span-2 lg:col-span-1 lg:col-start-1 lg:translate-x-1/2">
                    <img src={content.img_20} alt="Antes" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute top-6 left-6 glass px-4 py-1.5 rounded-full z-10 text-xs font-bold uppercase tracking-wider text-dark bg-white/80 pointer-events-none">{content.text_80}</div>

                    <div className="ba-after absolute inset-0 w-full h-full" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}>
                        <img src={content.img_21} alt="Depois" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute top-6 right-6 bg-nude-600/90 text-white px-4 py-1.5 rounded-full z-10 text-xs font-bold uppercase tracking-wider backdrop-blur-md pointer-events-none">{content.text_81}</div>
                    </div>

                    <div className="ba-handle absolute top-0 bottom-0 w-1 bg-white left-1/2 -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl text-nude-600">
                            <i className="ph-bold ph-arrows-left-right text-xl"></i>
                        </div>
                    </div>

                    <input type="range" min="0" max="100" value="50" className="ba-slider-input absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30" />
                </div>

            </div>
            
            <p className="text-center text-dark/50 text-sm mt-10 flex items-center justify-center gap-2 reveal">
                <i className="ph ph-hand-swipe-left"></i>{content.text_82}</p>
        </div>
    </section>

    <section id="depoimentos" className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 reveal">
                <span className="text-nude-600 uppercase tracking-widest text-sm font-semibold mb-2 block">{content.text_83}</span>
                <h2 className="font-display text-4xl md:text-5xl font-light text-dark">{content.text_84}<span className="font-semibold italic text-nude-600">{content.text_85}</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <div className="glass p-8 rounded-3xl hover-lift reveal relative">
                    <i className="ph-fill ph-quotes text-5xl text-nude-200 absolute top-6 right-6 z-0"></i>
                    <div className="flex gap-1 text-nude-500 mb-4 relative z-10">
                        <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                    </div>
                    <p className="text-dark/80 font-light italic mb-6 relative z-10">{content.text_86}</p>
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="w-10 h-10 bg-nude-300 rounded-full flex items-center justify-center text-white font-bold shrink-0">J</div>
                        <div>
                            <h4 className="font-medium text-dark text-sm">{content.text_87}</h4>
                            <span className="text-xs text-dark/50">{content.text_88}</span>
                        </div>
                    </div>
                </div>

                <div className="glass p-8 rounded-3xl hover-lift reveal reveal-delay-1 relative">
                    <i className="ph-fill ph-quotes text-5xl text-nude-200 absolute top-6 right-6 z-0"></i>
                    <div className="flex gap-1 text-nude-500 mb-4 relative z-10">
                        <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                    </div>
                    <p className="text-dark/80 font-light italic mb-6 relative z-10">{content.text_89}</p>
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="w-10 h-10 bg-nude-400 rounded-full flex items-center justify-center text-white font-bold shrink-0">A</div>
                        <div>
                            <h4 className="font-medium text-dark text-sm">{content.text_90}</h4>
                            <span className="text-xs text-dark/50">{content.text_91}</span>
                        </div>
                    </div>
                </div>

                <div className="glass p-8 rounded-3xl hover-lift reveal relative">
                    <i className="ph-fill ph-quotes text-5xl text-nude-200 absolute top-6 right-6 z-0"></i>
                    <div className="flex gap-1 text-nude-500 mb-4 relative z-10">
                        <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                    </div>
                    <p className="text-dark/80 font-light italic mb-6 relative z-10">{content.text_92}</p>
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="w-10 h-10 bg-nude-500 rounded-full flex items-center justify-center text-white font-bold shrink-0">V</div>
                        <div>
                            <h4 className="font-medium text-dark text-sm">{content.text_93}</h4>
                            <span className="text-xs text-dark/50">{content.text_94}</span>
                        </div>
                    </div>
                </div>

                <div className="glass p-8 rounded-3xl hover-lift reveal reveal-delay-1 relative">
                    <i className="ph-fill ph-quotes text-5xl text-nude-200 absolute top-6 right-6 z-0"></i>
                    <div className="flex gap-1 text-nude-500 mb-4 relative z-10">
                        <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                    </div>
                    <p className="text-dark/80 font-light italic mb-6 relative z-10">{content.text_95}</p>
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="w-10 h-10 bg-nude-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">M</div>
                        <div>
                            <h4 className="font-medium text-dark text-sm">{content.text_96}</h4>
                            <span className="text-xs text-dark/50">{content.text_97}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="faq" className="py-24 px-6 bg-nude-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal">
                <span className="text-nude-600 uppercase tracking-widest text-sm font-semibold mb-2 block">{content.text_98}</span>
                <h2 className="font-display text-4xl md:text-5xl font-light text-dark">{content.text_99}<span className="font-semibold italic text-nude-600">{content.text_100}</span></h2>
            </div>

            <div className="space-y-4 reveal">
                <div className="glass rounded-2xl overflow-hidden">
                    <button className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none" >
                        <span className="font-display font-medium text-lg text-dark">{content.text_101}</span>
                        <i className="ph-bold ph-caret-down text-nude-600 transition-transform duration-300" id="faq-icon-1"></i>
                    </button>
                    <div className="faq-content" id="faq-content-1">
                        <div className="px-6 pb-5 text-dark/70 font-light">{content.text_102}</div>
                    </div>
                </div>

                <div className="glass rounded-2xl overflow-hidden">
                    <button className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none" >
                        <span className="font-display font-medium text-lg text-dark">{content.text_103}</span>
                        <i className="ph-bold ph-caret-down text-nude-600 transition-transform duration-300" id="faq-icon-2"></i>
                    </button>
                    <div className="faq-content" id="faq-content-2">
                        <div className="px-6 pb-5 text-dark/70 font-light">{content.text_104}</div>
                    </div>
                </div>

                <div className="glass rounded-2xl overflow-hidden">
                    <button className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none" >
                        <span className="font-display font-medium text-lg text-dark">{content.text_105}</span>
                        <i className="ph-bold ph-caret-down text-nude-600 transition-transform duration-300" id="faq-icon-3"></i>
                    </button>
                    <div className="faq-content" id="faq-content-3">
                        <div className="px-6 pb-5 text-dark/70 font-light">{content.text_106}</div>
                    </div>
                </div>

                <div className="glass rounded-2xl overflow-hidden">
                    <button className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none" >
                        <span className="font-display font-medium text-lg text-dark">{content.text_107}</span>
                        <i className="ph-bold ph-caret-down text-nude-600 transition-transform duration-300" id="faq-icon-4"></i>
                    </button>
                    <div className="faq-content" id="faq-content-4">
                        <div className="px-6 pb-5 text-dark/70 font-light">{content.text_108}</div>
                    </div>
                </div>

                <div className="glass rounded-2xl overflow-hidden">
                    <button className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none" >
                        <span className="font-display font-medium text-lg text-dark">{content.text_109}</span>
                        <i className="ph-bold ph-caret-down text-nude-600 transition-transform duration-300" id="faq-icon-5"></i>
                    </button>
                    <div className="faq-content" id="faq-content-5">
                        <div className="px-6 pb-5 text-dark/70 font-light">{content.text_110}</div>
                    </div>
                </div>

                <div className="glass rounded-2xl overflow-hidden">
                    <button className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none" >
                        <span className="font-display font-medium text-lg text-dark">{content.text_111}</span>
                        <i className="ph-bold ph-caret-down text-nude-600 transition-transform duration-300" id="faq-icon-6"></i>
                    </button>
                    <div className="faq-content" id="faq-content-6">
                        <div className="px-6 pb-5 text-dark/70 font-light">{content.text_112}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="consultorio" className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 reveal">
                <span className="text-nude-600 uppercase tracking-widest text-sm font-semibold mb-2 block">{content.text_113}</span>
                <h2 className="font-display text-4xl md:text-5xl font-light text-dark">{content.text_114}<span className="font-semibold italic text-nude-600">{content.text_115}</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                
                <div className="group relative md:col-span-2 overflow-hidden rounded-3xl reveal">
                    <img src={content.img_22} alt="Recepção da Clínica" className="w-full h-full object-cover img-zoom" />
                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors duration-500"></div>
                </div>

                <div className="group relative overflow-hidden rounded-3xl reveal reveal-delay-1">
                    <img src={content.img_23} alt="Detalhe do Consultório" className="w-full h-full object-cover img-zoom" />
                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors duration-500"></div>
                </div>

                <div className="group relative overflow-hidden rounded-3xl reveal reveal-delay-2">
                    <img src={content.img_24} alt="Cadeira Odontológica" className="w-full h-full object-cover img-zoom" />
                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors duration-500"></div>
                </div>

                <div className="group relative md:col-span-4 overflow-hidden rounded-3xl reveal reveal-delay-3">
                    <div className="absolute inset-0 bg-nude-50 flex flex-col justify-center items-center text-center p-8 border border-nude-200/50">
                        <i className="ph-thin ph-sparkle text-4xl text-nude-500 mb-4"></i>
                        <h3 className="font-display text-2xl md:text-3xl font-light text-dark">{content.text_116}<span className="font-semibold italic text-nude-600">{content.text_117}</span></h3>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section className="py-24 px-6 bg-nude-50 relative overflow-hidden border-t border-b border-nude-200/30">
        <div className="max-w-7xl mx-auto">
            
            <div className="max-w-3xl mx-auto text-center reveal mb-16">
                <a href="https://instagram.com/dra.amandaaraujo" target="_blank" className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-nude-400 to-nude-600 text-white shadow-xl shadow-nude-600/20 mb-6 hover-lift">
                    <i className="ph-fill ph-instagram-logo text-3xl"></i>
                </a>
                <h3 className="font-display text-3xl md:text-4xl font-light text-dark mb-4">{content.text_118}<span className="font-semibold italic text-nude-600">{content.text_119}</span>
                </h3>
                <p className="text-dark/70 font-light text-lg">{content.text_120}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
                
                <a href="https://instagram.com/dra.amandaaraujo" target="_blank" className="group relative aspect-[9/16] rounded-[2rem] overflow-hidden reveal hover-lift shadow-xl shadow-dark/5">
                    <img src={content.img_25} alt="Reel Instagram Dra. Amanda" className="w-full h-full object-cover img-zoom" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-nude-600 transition-colors shadow-lg">
                            <i className="ph-fill ph-play text-2xl ml-1"></i>
                        </div>
                    </div>
                    <i className="ph-fill ph-instagram-logo absolute top-5 right-5 text-white text-2xl drop-shadow-md"></i>
                </a>

                <a href="https://instagram.com/dra.amandaaraujo" target="_blank" className="group relative aspect-[9/16] rounded-[2rem] overflow-hidden reveal reveal-delay-1 hover-lift shadow-xl shadow-dark/5 md:translate-y-8">
                    <img src={content.img_26} alt="Reel Instagram Dra. Amanda" className="w-full h-full object-cover img-zoom" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-nude-600 transition-colors shadow-lg">
                            <i className="ph-fill ph-play text-2xl ml-1"></i>
                        </div>
                    </div>
                    <i className="ph-fill ph-instagram-logo absolute top-5 right-5 text-white text-2xl drop-shadow-md"></i>
                </a>

                <a href="https://instagram.com/dra.amandaaraujo" target="_blank" className="group relative aspect-[9/16] rounded-[2rem] overflow-hidden reveal reveal-delay-2 hover-lift shadow-xl shadow-dark/5">
                    <img src={content.img_27} alt="Reel Instagram Dra. Amanda" className="w-full h-full object-cover img-zoom" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-nude-600 transition-colors shadow-lg">
                            <i className="ph-fill ph-play text-2xl ml-1"></i>
                        </div>
                    </div>
                    <i className="ph-fill ph-instagram-logo absolute top-5 right-5 text-white text-2xl drop-shadow-md"></i>
                </a>

                <a href="https://instagram.com/dra.amandaaraujo" target="_blank" className="group relative aspect-[9/16] rounded-[2rem] overflow-hidden reveal reveal-delay-3 hover-lift shadow-xl shadow-dark/5 md:translate-y-8">
                    <img src={content.img_28} alt="Reel Instagram Dra. Amanda" className="w-full h-full object-cover img-zoom" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-nude-600 transition-colors shadow-lg">
                            <i className="ph-fill ph-play text-2xl ml-1"></i>
                        </div>
                    </div>
                    <i className="ph-fill ph-instagram-logo absolute top-5 right-5 text-white text-2xl drop-shadow-md"></i>
                </a>

            </div>

            <div className="text-center reveal">
                <a href="https://instagram.com/dra.amandaaraujo" target="_blank" className="inline-flex items-center gap-2 sm:gap-3 bg-nude-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-base sm:text-lg whitespace-nowrap hover:bg-nude-700 transition-colors shadow-lg shadow-nude-600/30 hover-lift">
                    <i className="ph-fill ph-instagram-logo text-lg sm:text-xl"></i>{content.text_121}</a>
            </div>

        </div>
    </section>

    <footer id="contato" className="bg-white pt-24 pb-12 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-nude-300 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            
            <div className="reveal">
                <div className="flex items-center mb-8">
                    <img src={content.img_29} alt="Logo Dra. Amanda" className="h-10 md:h-12 w-auto object-contain" />
                </div>
                <h3 className="font-display text-4xl font-light mb-6">{content.text_122}<br /><span className="font-semibold italic text-nude-600">{content.text_123}</span></h3>
                <p className="text-dark/70 font-light mb-8 max-w-md">{content.text_124}</p>
                <a href="https://wa.me/5522999258149?text=Ol%C3%A1%20Dra.%20Amanda!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o." target="_blank" className="inline-flex items-center gap-3 bg-dark text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-nude-700 transition-colors shadow-xl shadow-dark/20 hover-lift">
                    <i className="ph-fill ph-whatsapp text-2xl"></i>{content.text_125}</a>
            </div>

            <div className="flex flex-col gap-4 reveal reveal-delay-1">
                <div className="glass p-6 rounded-3xl flex gap-4 items-start border border-nude-300/40 bg-white/50">
                    <div className="bg-white p-3 rounded-full text-nude-600 shadow-sm shrink-0"><i className="ph ph-map-pin text-xl"></i></div>
                    <div className="w-full">
                        <h4 className="font-display font-medium text-dark mb-1">{content.text_126}</h4>
                        <p className="text-sm text-dark/70 font-light mb-4">{content.text_127}<br />{content.text_128}<br />{content.text_129}</p>
                        <iframe src="https://maps.google.com/maps?q=Ed.%20Alexander%20Fleming%20-%20R.%20Conselheiro%20Otaviano,%2084%20-%20Centro,%20Campos%20dos%20Goytacazes&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="160" style={{ border: '0' }} allowfullscreen="" loading="lazy" className="rounded-2xl shadow-sm border border-nude-300/30 filter grayscale-[30%] hover:grayscale-0 transition-all duration-500"></iframe>
                    </div>
                </div>
                <div className="glass p-6 rounded-3xl flex gap-4 items-start border border-nude-300/40 bg-white/50">
                    <div className="bg-white p-3 rounded-full text-nude-600 shadow-sm"><i className="ph ph-clock text-xl"></i></div>
                    <div>
                        <h4 className="font-display font-medium text-dark mb-1">{content.text_130}</h4>
                        <p className="text-sm text-dark/70 font-light">{content.text_131}<br />{content.text_132}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto text-center border-t border-nude-300/30 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-dark/60 font-light">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                <p>{content.text_133}</p>
                <span className="hidden md:inline text-nude-300">|</span>
                <p>{content.text_134}</p>
            </div>
            
            <div className="flex gap-4 text-xl">
                <a href="https://instagram.com/dra.amandaaraujo" target="_blank" className="hover:text-nude-600 transition-colors p-2 glass rounded-full"><i className="ph-fill ph-instagram-logo"></i></a>
                <a href="https://wa.me/5522999258149?text=Ol%C3%A1%20Dra.%20Amanda!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o." target="_blank" className="hover:text-nude-600 transition-colors p-2 glass rounded-full"><i className="ph-fill ph-whatsapp-logo"></i></a>
            </div>
        </div>

        <div className="pt-8 border-t border-dark/10 flex flex-col items-center text-center mt-10">
          <p className="text-[9px] font-bold tracking-widest uppercase text-dark/40 mb-2">{content.text_135}</p>
          <p className="text-[8px] uppercase tracking-[0.3em] text-dark/40 flex items-center justify-center gap-1 font-normal">{content.text_136}<a href="https://instagram.com/verticy.web" target="_blank" className="font-bold text-dark hover:text-nude-600 transition-colors relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-px after:bg-dark/30 hover:after:bg-nude-600">{content.text_137}</a>
            <span className="opacity-70">{content.text_138}</span>
          </p>
        </div>
    </footer>

    

    

    </div>
  );
}
