 <main className="max-w-md mx-auto relative overflow-hidden min-h-screen border-x border-[#C1B6A4]/30 bg-[#F6F5EC]"> <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-[#B29079] blur-[120px] opacity-5 rounded-full pointer-events-none bg-breath z-0"></div>

    <section className="relative min-h-screen flex flex-col justify-between px-6 pt-6 pb-10 overflow-hidden z-10">

      <div className="absolute top-5 left-5 border border-[#C1B6A4]/50 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] text-[#B29079] glass z-20 animate-hero-text" style={{animation-delay: 0.2s;}}>
        Sofia Inocêncio
      </div>

      <div className="absolute top-24 right-[-3rem] w-32 h-32 rounded-full border border-[#C1B6A4] floating pointer-events-none opacity-50"></div>

      <div className="relative mt-16 z-10 animate-hero-img">
        <div className="rounded-[2.5rem] hero-shadow border border-[#E1DACA]">
          <div className="rounded-[2.5rem] overflow-hidden">
            <img
              src="sofia-hero.png"
              onerror="this.src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop';"
              className="w-full h-[35rem] object-cover object-top hover:scale-105 transition-transform duration-[2s] ease-out"
              style={{filter: none; mix-blend-mode: normal; display: block;}}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center mt-8">
        <p className="uppercase tracking-[0.4em] text-[10px] text-[#B29079] mb-4 animate-hero-text" style={{animation-delay: 0.6s;}}>
          Creator • Lifestyle • UGC
        </p>

        <h1 className="text-5xl font-black leading-none tracking-tight animate-hero-text" style={{animation-delay: 0.8s;}}>
          SOFIA
        </h1>

        <h1 className="text-5xl font-black leading-none tracking-tight gradient-text animate-hero-text" style={{animation-delay: 1s;}}>
          INOCÊNCIO
        </h1>

        <p className="text-[#B29079]/80 text-[13px] leading-relaxed mt-6 max-w-xs mx-auto animate-hero-text" style={{animation-delay: 1.2s;}}>
          Conteúdo sofisticado, autêntico e visualmente estratégico para marcas que desejam se conectar de forma real.
        </p>

        <div className="animate-hero-text" style={{animation-delay: 1.4s;}}>
          <button
            onClick="handleWhatsAppClick()"
            className="mt-8 bg-[#B29079] text-[#F6F5EC] px-8 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-[#B29079]/20 hover:scale-105 hover:shadow-[#B29079]/40 active:scale-95 transition-all duration-300"
          >
            Trabalhar comigo
          </button>
        </div>
      </div>
    </section>

    <section className="px-6 py-20 fade-up">
      <div className="flex justify-between items-end mb-10">
        <div>
          <p className="uppercase tracking-[0.3em] text-[10px] text-[#C1B6A4] mb-3">
            Sobre
          </p>
          <h2 className="text-4xl font-black leading-none text-[#B29079]">
            estética &<br /> conexão
          </h2>
        </div>
        <i data-lucide="sparkles" className="w-7 h-7 text-[#B29079] floating" style={{animation-duration: 4s;}}></i>
      </div>

      <div className="relative h-[24rem] w-full mb-12 mt-4 group">
        <div className="absolute top-0 left-0 w-40 transform -rotate-6 z-10 shadow-xl bg-[#F6F5EC] p-2 pb-8 group-hover:rotate-[-2deg] group-hover:-translate-x-2 transition-all duration-500 border border-[#E1DACA]">
          <img src="sofia2.png" onerror="this.src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop';" className="w-full h-40 object-cover opacity-90 transition-opacity" />
        </div>
        
        <div className="absolute top-6 right-0 w-44 transform rotate-6 z-20 shadow-xl bg-[#F6F5EC] p-2 pb-8 group-hover:rotate-[2deg] group-hover:translate-x-2 transition-all duration-500 border border-[#E1DACA]">
          <img src="sofia3.png" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop';" className="w-full h-48 object-cover opacity-90 transition-opacity" />
        </div>
        
        <div className="absolute top-36 left-10 w-52 transform -rotate-2 z-30 shadow-2xl bg-[#F6F5EC] p-2 pb-10 group-hover:scale-105 group-hover:rotate-0 transition-all duration-500 border border-[#B29079]/30">
          <img src="sofia8.png" onerror="this.src='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop';" className="w-full h-56 object-cover" />
          <div className="absolute -bottom-4 right-4 bg-[#B29079] text-[#F6F5EC] border border-[#F6F5EC] px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 floating" style={{animation-duration: 3s;}}>
            <i data-lucide="star" className="w-3 h-3 fill-[#F6F5EC]"></i>
            <span className="text-[9px] font-black uppercase tracking-[0.2em]">Autenticidade</span>
          </div>
        </div>
      </div>

      <div className="space-y-5 text-[14px] leading-relaxed text-[#B29079]/90 mt-16 bg-[#E1DACA]/30 p-6 rounded-3xl border border-[#E1DACA] fade-up" style={{--delay: 1;}}>
        <p>
          Meu nome é Sofia, tenho 21 anos e sou criadora de conteúdo apaixonada por produzir fotos e vídeos que valorizam marcas de forma leve, elegante e natural.
        </p>
        <p>
          Busco criar conteúdos autênticos, alinhados à identidade visual de cada projeto, conectando produtos ao público de maneira moderna e estratégica.
        </p>
      </div>
    </section>

    <section className="px-6 py-20 bg-[#EFE7DA] rounded-t-[3rem] fade-up relative z-20"> 
      <div className="text-center mb-12 fade-up" style={{--delay: 0;}}>
        <p className="uppercase tracking-[0.3em] text-[10px] text-[#C1B6A4] mb-4">
          presença digital
        </p>
        <h2 className="text-4xl font-black leading-none text-[#B29079]">
          conteúdo que<br /> gera impacto
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="glass border border-[#C1B6A4]/30 rounded-[2rem] p-6 h-full fade-up hover:bg-[#E1DACA]/50 transition-colors duration-300" style={{--delay: 1;}}>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#B29079]/60 mb-2">
            seguidores
          </p>
          <h3 className="text-3xl font-black text-[#B29079] counter-num" data-target="5100">
            0
          </h3>
        </div>

        <div className="bg-[#B29079] rounded-[2rem] p-7 text-[#F6F5EC] shadow-xl shadow-[#B29079]/30 transform scale-105 z-10 border border-[#B29079] fade-up hover:scale-110 transition-transform duration-300" style={{--delay: 2;}}>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-80 mb-2">
            alcance
          </p>
          <h3 className="text-4xl font-black">
            <span className="counter-num" data-target="30">0</span>k
          </h3>
          <p className="text-[10px] mt-2 opacity-70">contas mensais</p>
        </div>

        <div className="glass border border-[#C1B6A4]/30 rounded-[2rem] p-6 h-full fade-up hover:bg-[#E1DACA]/50 transition-colors duration-300" style={{--delay: 3;}}>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#B29079]/60 mb-2">
            formato
          </p>
          <h3 className="text-3xl font-black text-[#B29079]">
            Reels
          </h3>
        </div>

        <div className="glass border border-[#C1B6A4]/30 rounded-[2rem] p-6 h-full fade-up hover:bg-[#E1DACA]/50 transition-colors duration-300" style={{--delay: 4;}}>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#B29079]/60 mb-2">
            público
          </p>
          <h3 className="text-3xl font-black text-[#B29079]">
            Feminino
          </h3>
        </div>
      </div>
    </section>

    <section className="py-24 fade-up">
      <div className="px-6 mb-10 text-center">
        <span className="bg-[#E1DACA] text-[#B29079] text-[9px] font-black px-4 py-1.5 uppercase tracking-[0.3em] rounded-full mb-4 inline-block shadow-sm">Projetos</span>
        <h2 className="text-4xl font-black leading-none text-[#B29079]">
          formatos de<br /> parceria
        </h2>
      </div>

      <div className="overflow-x-auto flex gap-5 px-6 pb-6 hide-scrollbar snap-x snap-mandatory">
        
        <div className="snap-center shrink-0 w-[17rem] bg-[#E1DACA] rounded-[2rem] overflow-hidden transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#B29079]/20 border border-[#E1DACA] fade-up" style={{--delay: 1;}}>
          <div className="overflow-hidden">
            <img src="sofia-ensaio.png" onerror="this.src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop';" className="w-full h-72 object-cover object-top opacity-90 hover:opacity-100 transition-all duration-700 hover:scale-110" />
          </div>
          <div className="p-6 relative -mt-4 bg-gradient-to-t from-[#E1DACA] via-[#E1DACA] to-transparent">
            <h3 className="text-xl font-black mb-3 text-[#B29079]">
              Ensaio de Estúdio
            </h3>
            <p className="text-[12px] text-[#B29079]/80 leading-relaxed mb-5">
              Produção fotográfica e audiovisual em ambiente de estúdio com iluminação profissional.
            </p>
            <button
              onClick="handleWhatsAppClick('Ensaio de Estúdio')"
              className="w-full bg-[#B29079] text-[#F6F5EC] py-4 rounded-xl uppercase text-[10px] tracking-[0.2em] font-bold shadow-md hover:bg-[#9a7b66] transition-colors"
            >
              Solicitar valor
            </button>
          </div>
        </div>

        <div className="snap-center shrink-0 w-[17rem] bg-[#E1DACA] rounded-[2rem] overflow-hidden transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#B29079]/20 border border-[#E1DACA] fade-up" style={{--delay: 2;}}>
          <div className="overflow-hidden">
            <img src="sofia4.png" onerror="this.src='https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1000&auto=format&fit=crop';" className="w-full h-72 object-cover object-top opacity-90 hover:opacity-100 transition-all duration-700 hover:scale-110" />
          </div>
          <div className="p-6 relative -mt-4 bg-gradient-to-t from-[#E1DACA] via-[#E1DACA] to-transparent">
            <h3 className="text-xl font-black mb-3 text-[#B29079]">
              Conteúdo UGC
            </h3>
            <p className="text-[12px] text-[#B29079]/80 leading-relaxed mb-5">
              Produção de vídeos autênticos e reviews focados na conversão em redes sociais.
            </p>
            <button
              onClick="handleWhatsAppClick('Conteúdo UGC')"
              className="w-full bg-[#B29079] text-[#F6F5EC] py-4 rounded-xl uppercase text-[10px] tracking-[0.2em] font-bold shadow-md hover:bg-[#9a7b66] transition-colors"
            >
              Solicitar valor
            </button>
          </div>
        </div>

        <div className="snap-center shrink-0 w-[17rem] bg-[#E1DACA] rounded-[2rem] overflow-hidden transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#B29079]/20 border border-[#E1DACA] fade-up" style={{--delay: 3;}}>
          <div className="overflow-hidden">
            <img src="sofia5.png" onerror="this.src='https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop';" className="w-full h-72 object-cover object-top opacity-90 hover:opacity-100 transition-all duration-700 hover:scale-110" />
          </div>
          <div className="p-6 relative -mt-4 bg-gradient-to-t from-[#E1DACA] via-[#E1DACA] to-transparent">
            <h3 className="text-xl font-black mb-3 text-[#B29079]">
              Lifestyle & Publi
            </h3>
            <p className="text-[12px] text-[#B29079]/80 leading-relaxed mb-5">
              Ensaios, postagens no feed e stories com estética premium para marcas.
            </p>
            <button
              onClick="handleWhatsAppClick('Lifestyle & Publi')"
              className="w-full bg-[#B29079] text-[#F6F5EC] py-4 rounded-xl uppercase text-[10px] tracking-[0.2em] font-bold shadow-md hover:bg-[#9a7b66] transition-colors"
            >
              Solicitar valor
            </button>
          </div>
        </div>
        
        <div className="snap-center shrink-0 w-[17rem] bg-[#E1DACA] rounded-[2rem] overflow-hidden transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#B29079]/20 border border-[#E1DACA] fade-up" style={{--delay: 4;}}>
          <div className="overflow-hidden">
             <img src="sofia-extra.png" onerror="this.src='https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop';" className="w-full h-72 object-cover object-top opacity-90 hover:opacity-100 transition-all duration-700 hover:scale-110" />
          </div>
          <div className="p-6 relative -mt-4 bg-gradient-to-t from-[#E1DACA] via-[#E1DACA] to-transparent">
            <h3 className="text-xl font-black mb-3 text-[#B29079]">
              Lookbook
            </h3>
            <p className="text-[12px] text-[#B29079]/80 leading-relaxed mb-5">
              Sessões de fotos e captação externa focada em coleções de moda e acessórios.
            </p>
            <button
              onClick="handleWhatsAppClick('Lookbook e Moda')"
              className="w-full bg-[#B29079] text-[#F6F5EC] py-4 rounded-xl uppercase text-[10px] tracking-[0.2em] font-bold shadow-md hover:bg-[#9a7b66] transition-colors"
            >
              Solicitar valor
            </button>
          </div>
        </div>

      </div>
    </section>

    <section className="px-6 py-20 bg-[#E1DACA] rounded-[3rem] mx-2 shadow-sm border border-[#C1B6A4]/30 fade-up relative z-20">
      <div className="flex justify-between items-center mb-10">
        <div>
          <p className="uppercase tracking-[0.3em] text-[10px] text-[#B29079] mb-2">
            informações
          </p>
          <h2 className="text-4xl font-black leading-none text-[#B29079]">
            medidas
          </h2>
        </div>
        <i data-lucide="ruler" className="w-8 h-8 text-[#B29079]"></i>
      </div>

      <div className="flex gap-4">
        <div className="w-1/2 space-y-4 text-[12px] pt-4">
          <div className="flex justify-between border-b border-[#C1B6A4]/40 pb-2 fade-up" style={{--delay: 1;}}>
            <span className="text-[#B29079]/70 uppercase tracking-widest">Altura</span>
            <span className="font-bold">1,60 m</span>
          </div>
          <div className="flex justify-between border-b border-[#C1B6A4]/40 pb-2 fade-up" style={{--delay: 2;}}>
            <span className="text-[#B29079]/70 uppercase tracking-widest">Cintura</span>
            <span className="font-bold">65 cm</span>
          </div>
          <div className="flex justify-between border-b border-[#C1B6A4]/40 pb-2 fade-up" style={{--delay: 3;}}>
            <span className="text-[#B29079]/70 uppercase tracking-widest">Quadril</span>
            <span className="font-bold">89 cm</span>
          </div>
          <div className="flex justify-between border-b border-[#C1B6A4]/40 pb-2 fade-up" style={{--delay: 4;}}>
            <span className="text-[#B29079]/70 uppercase tracking-widest">Busto</span>
            <span className="font-bold">77 cm</span>
          </div>
          <div className="flex justify-between border-b border-[#C1B6A4]/40 pb-2 fade-up" style={{--delay: 5;}}>
            <span className="text-[#B29079]/70 uppercase tracking-widest">Olhos</span>
            <span className="font-bold">Azul/Verde</span>
          </div>
        </div>
        <div className="w-1/2 relative fade-up" style={{--delay: 3;}}>
          <div className="overflow-hidden rounded-2xl border border-[#C1B6A4]/40 shadow-lg group">
            <img src="sofia6.png" onerror="this.src='https://images.unsplash.com/photo-1550614000-4b95d466270e?q=80&w=1000&auto=format&fit=crop';" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="absolute -top-3 -right-2 bg-[#F6F5EC] text-[#B29079] border border-[#B29079]/20 px-3 py-1 rounded-full text-[8px] uppercase tracking-widest shadow-md floating" style={{animation-duration: 3s;}}>
            Manequim 36
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 py-20">
      <div className="text-center mb-10 fade-up">
         <h2 className="text-2xl font-black text-[#B29079] tracking-widest mb-2 uppercase">Vibe & Estilo</h2>
         <p className="text-[10px] font-bold text-[#C1B6A4] tracking-[0.2em] uppercase">moda, lifestyle e autenticidade</p>
      </div>
      
      <div className="grid grid-cols-2 gap-3 px-2 pb-6">
        <div className="overflow-hidden rounded-2xl fade-up border border-[#E1DACA] shadow-sm group" style={{--delay: 1;}}>
          <img src="sofia9.png" onerror="this.src='https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1000&auto=format&fit=crop';" className="w-full aspect-[4/5] object-cover opacity-90 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100" />
        </div>
        
        <div className="overflow-hidden rounded-2xl fade-up border border-[#E1DACA] shadow-sm transform translate-y-6 group" style={{--delay: 2;}}>
          <img src="sofia10.png" onerror="this.src='https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop';" className="w-full aspect-[4/5] object-cover opacity-90 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100" />
        </div>
        
        <div className="overflow-hidden rounded-2xl fade-up border border-[#E1DACA] shadow-sm mt-2 group" style={{--delay: 3;}}>
          <img src="sofia11.png" onerror="this.src='https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=1000&auto=format&fit=crop';" className="w-full aspect-[4/5] object-cover opacity-90 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100" />
        </div>
        
        <div className="overflow-hidden rounded-2xl fade-up border border-[#E1DACA] shadow-sm transform translate-y-6 mt-2 group" style={{--delay: 4;}}>
          <img src="sofia12.png" onerror="this.src='https://images.unsplash.com/photo-1511130558090-00af810c2111?q=80&w=1000&auto=format&fit=crop';" className="w-full aspect-[4/5] object-cover opacity-90 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100" />
        </div>
      </div>
    </section>

    <section className="px-6 pt-20 pb-24 relative fade-up bg-[#EFE7DA] rounded-t-[3rem] border-t border-[#E1DACA] mt-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#B29079]/5 to-transparent rounded-t-[3rem] pointer-events-none"></div>

      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#B29079] w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-[#EFE7DA] z-20 floating-icon">
        <i data-lucide="message-circle" className="w-7 h-7 text-[#F6F5EC]"></i>
      </div>

      <div className="relative z-10 text-center mt-6">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C1B6A4] mb-3 fade-up" style={{--delay: 1;}}>trabalhe comigo!</h2>
        <h2 className="text-4xl font-black leading-none mb-8 text-[#B29079] fade-up" style={{--delay: 2;}}>
          vamos criar<br /> algo incrível
        </h2>

        <div className="space-y-4 fade-up" style={{--delay: 3;}}>
          <button
            onClick="handleWhatsAppClick()"
            className="w-full bg-[#B29079] text-[#F6F5EC] py-5 rounded-2xl uppercase tracking-[0.2em] text-[11px] font-black shadow-lg shadow-[#B29079]/20 flex justify-center items-center gap-2 hover:scale-105 hover:shadow-[#B29079]/40 hover:bg-[#9a7b66] active:scale-95 transition-all duration-300"
          >
            <i data-lucide="message-square" className="w-4 h-4"></i> WhatsApp
          </button>

          <button
            onClick="handleEmailClick()"
            className="w-full bg-[#E1DACA] text-[#B29079] border border-[#C1B6A4]/50 py-5 rounded-2xl uppercase tracking-[0.2em] text-[11px] font-black hover:bg-[#D4CBBF] flex justify-center items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <i data-lucide="mail" className="w-4 h-4 text-[#B29079]"></i> Enviar E-mail
          </button>

          <button
            onClick="window.open('https://www.instagram.com/sofiaiinocencio', '_blank')"
            className="w-full border border-[#B29079]/50 text-[#B29079] py-5 rounded-2xl uppercase tracking-[0.2em] text-[11px] font-black hover:bg-[#B29079] hover:text-[#F6F5EC] flex justify-center items-center gap-2 transition-all duration-300 hover:scale-105 mt-2"
          >
            <i data-lucide="instagram" className="w-4 h-4"></i> @sofiaiinocencio
          </button>
        </div>
      </div>
    </section>
  </main>
