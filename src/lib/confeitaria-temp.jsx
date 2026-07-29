
    <div className="bg-noise"></div>
    <div className="glow-orb-1"></div>
    <div className="glow-orb-2"></div>
    <div className="max-w-md mx-auto min-h-screen relative z-10 flex flex-col sm:border-x sm:border-[#E8B4B8]/20 bg-[#FDFBF7]/80 overflow-hidden">
        <header className="relative w-full h-[70vh] overflow-hidden rounded-b-[3rem] shadow-md reveal active border-b border-[#E8B4B8]/40">
            <div className="absolute inset-0 hero-bg" id="div-hero-bg"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/80 to-[#FDFBF7]/20"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 pb-6 text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-white border-2 border-[#E8B4B8] p-1 shadow-[0_0_30px_rgba(232,180,184,0.4)] mb-3 overflow-hidden flex items-center justify-center">
                    <img id="img-logo" src="bruna1.png" alt="Bruna Bolos e Doces" className="w-full h-full object-cover rounded-full bg-white" onerror="this.style.display='none'" />
                </div>
                <div className="inline-flex items-center justify-center gap-1.5 bg-white/60 backdrop-blur-md border border-[#E8B4B8]/50 px-4 py-1.5 rounded-full mx-auto mb-4 shadow-sm">
                    <i data-lucide="map-pin" className="w-3 h-3 text-[#E8B4B8]"></i>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#4A3737]">Campos / RJ</span>
                </div>
                <h1 className="font-['Playfair_Display'] font-bold text-4xl leading-tight mb-2 text-[#4A3737]">Bruna Bolos e Doces</h1>
                <p className="text-[11px] text-[#4A3737]/70 font-medium mb-5 max-w-[280px] mx-auto leading-relaxed uppercase tracking-widest italic">✨ Feitos com carinho para momentos especiais</p>
                <button onClick="document.getElementById('catalogo').scrollIntoView({behavior:'smooth'})" className="btn-rose py-4 px-8 rounded-2xl font-black text-[11px] uppercase tracking-widest w-full max-w-[320px] mx-auto flex items-center justify-center gap-2">
                    <i data-lucide="book-open" className="w-4 h-4"></i> Ver Catálogo
                </button>
            </div>
        </header>

        <div className="w-full overflow-hidden border-b border-[#E8B4B8]/30 py-3 relative z-20 bg-white/80 backdrop-blur-md mt-4 shadow-sm">
            <div className="animate-marquee flex gap-8 items-center text-[#4A3737]">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D49A9E]">Artesanal</span>
                <span className="text-[10px] text-[#4A3737]/30">✦</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] italic text-[#4A3737]">Bolos de Festa</span>
                <span className="text-[10px] text-[#4A3737]/30">✦</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D49A9E]">Sobremesas</span>
                <span className="text-[10px] text-[#4A3737]/30">✦</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] italic text-[#4A3737]">Por Encomenda</span>
                <span className="text-[10px] text-[#4A3737]/30">✦</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D49A9E]">Artesanal</span>
                <span className="text-[10px] text-[#4A3737]/30">✦</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] italic text-[#4A3737]">Bolos de Festa</span>
                <span className="text-[10px] text-[#4A3737]/30">✦</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D49A9E]">Sobremesas</span>
                <span className="text-[10px] text-[#4A3737]/30">✦</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] italic text-[#4A3737]">Por Encomenda</span>
            </div>
        </div>

        <section id="catalogo" className="px-5 py-12 space-y-6 relative z-20 reveal">
            <div className="text-center mb-8">
                <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#4A3737] mb-2">O nosso Menu</h2>
                <p className="text-[10px] uppercase tracking-widest text-[#D49A9E] font-bold">Escolha e peça pelo WhatsApp</p>
            </div>
            
            <div className="glass-card rounded-[2rem] overflow-hidden flex flex-col relative reveal group">
                <div className="h-48 w-full relative overflow-hidden bg-gray-100">
                    <img id="img-cat-1" src="bruna3.png" alt="Bolos de Aniversário" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-[#E8B4B8] text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-md z-10">Festa</div>
                </div>
                <div className="p-5 pt-2 bg-white flex flex-col gap-4 relative z-10">
                    <div>
                        <h3 className="font-['Playfair_Display'] text-2xl text-[#4A3737] leading-tight mb-2">Bolos de Aniversário</h3>
                        <p className="text-xs text-[#4A3737]/70 font-medium leading-relaxed">Bolos decorados e personalizados para tornar a sua celebração inesquecível. Vários recheios disponíveis.</p>
                    </div>
                    <button className="w-full bg-[#E8B4B8]/10 hover:bg-[#E8B4B8] hover:text-white border border-[#E8B4B8]/30 text-[#4A3737] py-3.5 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm">
                        <i data-lucide="message-circle" className="w-4 h-4"></i> Encomendar
                    </button>
                </div>
            </div>

            <div className="glass-card rounded-[2rem] overflow-hidden flex flex-col relative reveal delay-100 group">
                <div className="h-48 w-full relative overflow-hidden bg-gray-100">
                    <img id="img-cat-2" src="bruna5.png" alt="Doces de Festa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-[#E8B4B8] text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-md z-10">Clássicos</div>
                </div>
                <div className="p-5 pt-2 bg-white flex flex-col gap-4 relative z-10">
                    <div>
                        <h3 className="font-['Playfair_Display'] text-2xl text-[#4A3737] leading-tight mb-2">Doces de Festa</h3>
                        <p className="text-xs text-[#4A3737]/70 font-medium leading-relaxed">Brigadeiros tradicionais e gourmet, beijinhos, cajuzinhos e muito mais. Feitos com ingredientes premium.</p>
                    </div>
                    <button className="w-full bg-[#E8B4B8]/10 hover:bg-[#E8B4B8] hover:text-white border border-[#E8B4B8]/30 text-[#4A3737] py-3.5 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm">
                        <i data-lucide="message-circle" className="w-4 h-4"></i> Encomendar
                    </button>
                </div>
            </div>
            
            <!-- other catalog items... -->
        </section>
        
        <!-- Galeria -->
        <section className="py-12 relative z-20 reveal border-t border-[#E8B4B8]/20 mt-4 bg-[#FFFFFF]/30">
            <div className="px-6 mb-8 flex justify-between items-end">
                <div>
                    <h2 className="font-['Playfair_Display'] text-3xl italic tracking-tight text-[#4A3737] mb-1">Nossas Delícias</h2>
                </div>
                <p className="text-[9px] text-[#D49A9E] uppercase tracking-widest font-bold mb-1">Deslize ➜</p>
            </div>
            <div className="flex overflow-x-auto gap-4 px-6 hide-scrollbar snap-x pb-8">
                <div className="snap-center shrink-0 w-56 h-72 rounded-[2rem] overflow-hidden relative shadow-lg border border-[#E8B4B8]/20 group">
                    <img id="img-galeria-1" src="bruna7.png" alt="Galeria 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
            </div>
        </section>

        <footer className="mt-auto px-6 pt-16 pb-24 text-center border-t border-[#E8B4B8]/20 relative z-10 bg-white rounded-t-[4rem] shadow-[0_-20px_50px_rgba(74,55,55,0.05)]">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#E8B4B8] rounded-full blur-[40px] opacity-30"></div>
            <div className="mb-10">
                <h2 className="font-['Playfair_Display'] text-3xl italic text-[#4A3737] mb-2 tracking-wide">Faça a sua<br><span className="text-[#D49A9E] not-italic font-bold">Encomenda</span></h2>
                <p className="text-[10px] text-[#4A3737]/50 uppercase tracking-[0.2em] font-bold mt-4">Vagas limitadas por semana</p>
            </div>
            <div className="space-y-4 mb-12">
                <button className="w-full btn-rose font-black py-5 rounded-2xl text-[11px] uppercase tracking-widest active:scale-95 transition-all flex items-center justify-center gap-3">
                    <i data-lucide="message-circle" className="w-5 h-5"></i> Chamar no WhatsApp
                </button>
            </div>
        </footer>
    </div>
