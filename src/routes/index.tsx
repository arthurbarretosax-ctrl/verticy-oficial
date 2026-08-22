import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verticy · Seu site profissional em minutos" },
      {
        name: "description",
        content:
          "Templates premium prontos para publicar. Escolha, personalize e publique um microsite profissional em menos de 5 minutos.",
      },
      { property: "og:title", content: "Verticy · Seu site profissional em minutos" },
      {
        property: "og:description",
        content:
          "Templates premium prontos para publicar. Escolha, personalize e publique um microsite profissional em menos de 5 minutos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: "/assets/css/verticy.css" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  useEffect(() => {
    // Reveal on scroll
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="mesh-bg" />

      <nav className="nav">
        <div className="container nav-inner">
          <a href="/" className="brand">
            <span className="brand-mark" />
            <span>Verticy</span>
          </a>
          <div className="nav-links">
            <a href="#features">Recursos</a>
            <a href="#templates">Templates</a>
            <a href="#pricing">Planos</a>
          </div>
          <div className="nav-cta">
            <a href="/entrar.html" className="btn btn-ghost btn-sm">
              Entrar
            </a>
            <a href="/entrar.html" className="btn btn-primary btn-sm">
              Criar site
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="section" style={{ paddingTop: "80px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow reveal">
            <span className="dot" />
            Micro SaaS premium
          </span>
          <h1 className="h-display gradient-text reveal mt-4" style={{ margin: "24px auto", maxWidth: "980px" }}>
            Seu site profissional em <span className="brand-text">5 minutos.</span>
          </h1>
          <p className="lead reveal" style={{ margin: "0 auto 32px" }}>
            Templates premium prontos para publicar. Você escolhe, personaliza e publica. Sem começar do
            zero. Sem código. Sem complicação.
          </p>
          <div className="flex gap-3 reveal" style={{ justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/entrar.html" className="btn btn-primary btn-lg">
              Começar grátis →
            </a>
            <a href="#templates" className="btn btn-ghost btn-lg">
              Ver templates
            </a>
          </div>
          <p className="muted mt-4 reveal" style={{ fontSize: 13 }}>
            verticy.site/<span className="brand-text">seunome</span> · Sem cartão de crédito
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" id="features" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="text-center reveal" style={{ maxWidth: 680, margin: "0 auto 60px" }}>
            <span className="eyebrow">
              <span className="dot" />
              Feito para converter
            </span>
            <h2 className="h-1 mt-4">Cada template já nasce pronto.</h2>
            <p className="lead" style={{ margin: "16px auto 0" }}>
              Design premium, otimizado para performance e pensado para conversão desde o primeiro pixel.
            </p>
          </div>

          <div className="grid grid-3">
            {[
              {
                t: "Templates premium",
                d: "Criados pela nossa equipe de design. Bonitos, rápidos e prontos para publicar.",
              },
              {
                t: "Editor sem código",
                d: "Clique em qualquer bloco e edite. Você só troca conteúdo — o design permanece impecável.",
              },
              {
                t: "URL própria",
                d: "verticy.site/seunome. Direto no WhatsApp, na bio, no cartão. Simples e memorável.",
              },
              {
                t: "Otimizado para mobile",
                d: "Mobile-first de verdade. Carrega instantâneo em qualquer conexão.",
              },
              { t: "SEO nativo", d: "Metadados, OG, semântica correta. Você aparece bem no Google desde o dia 1." },
              {
                t: "Publicação em 1 clique",
                d: "Salvou? Publicou. Sem deploy, sem servidor, sem dor de cabeça.",
              },
            ].map((f) => (
              <div key={f.t} className="card card-glow reveal">
                <h3 className="h-3">{f.t}</h3>
                <p className="muted mt-2" style={{ fontSize: 14 }}>
                  {f.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="card reveal" style={{ padding: "44px" }}>
            <div className="grid grid-4">
              <div className="stat">
                <div className="stat-value brand-text">&lt; 5 min</div>
                <div className="stat-label">Tempo médio até publicar</div>
              </div>
              <div className="stat">
                <div className="stat-value">98</div>
                <div className="stat-label">PageSpeed médio</div>
              </div>
              <div className="stat">
                <div className="stat-value">0</div>
                <div className="stat-label">Linhas de código</div>
              </div>
              <div className="stat">
                <div className="stat-value">100%</div>
                <div className="stat-label">Mobile ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPLATES */}
      <section className="section" id="templates" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="text-center reveal" style={{ maxWidth: 680, margin: "0 auto 60px" }}>
            <span className="eyebrow">
              <span className="dot" />
              Templates
            </span>
            <h2 className="h-1 mt-4">Escolha. Personalize. Publique.</h2>
            <p className="lead" style={{ margin: "16px auto 0" }}>
              Todos os templates seguem a mesma estrutura lógica. Você troca só o conteúdo.
            </p>
          </div>
          <div className="grid grid-3">
            {[
{ name: "Denis", tag: "Novo", grad: "linear-gradient(135deg,#7c5cff,#22d3ee)", id: "denis" },
{ name: "Duo", tag: "Novo", grad: "linear-gradient(135deg,#111,#333)", id: "duo" },
{ name: "Manuel", tag: "Novo", grad: "linear-gradient(135deg,#f59e0b,#ef4444)", id: "manuel" },
{ name: "Wilian", tag: "Novo", grad: "linear-gradient(135deg,#f5f5fa,#a4a4b5)", id: "wilian" },
{ name: "Loyola", tag: "Novo", grad: "linear-gradient(135deg,#4b6bff,#a78bfa)", id: "loyola" },
{ name: "Amandex", tag: "Novo", grad: "linear-gradient(135deg,#0f766e,#22d3ee)", id: "amandex" },
{ name: "FrancianeFurohumanizado2", tag: "Novo", grad: "linear-gradient(135deg,#7c5cff,#22d3ee)", id: "francianefurohumanizado2" },
{ name: "Ilgner", tag: "Novo", grad: "linear-gradient(135deg,#111,#333)", id: "ilgner" },
{ name: "Ilgner2", tag: "Novo", grad: "linear-gradient(135deg,#f59e0b,#ef4444)", id: "ilgner2" },
{ name: "IgnosForadoar", tag: "Novo", grad: "linear-gradient(135deg,#f5f5fa,#a4a4b5)", id: "ignosforadoar" },
{ name: "LuanaForadoar", tag: "Novo", grad: "linear-gradient(135deg,#4b6bff,#a78bfa)", id: "luanaforadoar" },
{ name: "DraMirella", tag: "Novo", grad: "linear-gradient(135deg,#0f766e,#22d3ee)", id: "dramirella" },
{ name: "Yaveh2", tag: "Novo", grad: "linear-gradient(135deg,#7c5cff,#22d3ee)", id: "yaveh2" },
{ name: "Jt", tag: "Novo", grad: "linear-gradient(135deg,#111,#333)", id: "jt" },
{ name: "LaylaPsi", tag: "Novo", grad: "linear-gradient(135deg,#f59e0b,#ef4444)", id: "laylapsi" },
{ name: "Hortela2", tag: "Novo", grad: "linear-gradient(135deg,#f5f5fa,#a4a4b5)", id: "hortela2" },
{ name: "Zisa", tag: "Novo", grad: "linear-gradient(135deg,#4b6bff,#a78bfa)", id: "zisa" },
{ name: "CristianaPsi", tag: "Novo", grad: "linear-gradient(135deg,#0f766e,#22d3ee)", id: "cristianapsi" },
{ name: "Dudu", tag: "Novo", grad: "linear-gradient(135deg,#7c5cff,#22d3ee)", id: "dudu" },
{ name: "CristianaPsi2", tag: "Novo", grad: "linear-gradient(135deg,#111,#333)", id: "cristianapsi2" },
{ name: "DraRaisabastos", tag: "Novo", grad: "linear-gradient(135deg,#f59e0b,#ef4444)", id: "draraisabastos" },
{ name: "TaiStorymaker", tag: "Novo", grad: "linear-gradient(135deg,#f5f5fa,#a4a4b5)", id: "taistorymaker" },
{ name: "DayForadoar", tag: "Novo", grad: "linear-gradient(135deg,#4b6bff,#a78bfa)", id: "dayforadoar" },
{ name: "Tai", tag: "Novo", grad: "linear-gradient(135deg,#0f766e,#22d3ee)", id: "tai" },
{ name: "LaviniaPsi", tag: "Novo", grad: "linear-gradient(135deg,#7c5cff,#22d3ee)", id: "laviniapsi" },
{ name: "DraAndrezza", tag: "Novo", grad: "linear-gradient(135deg,#111,#333)", id: "draandrezza" },
{ name: "Hortela", tag: "Novo", grad: "linear-gradient(135deg,#f59e0b,#ef4444)", id: "hortela" },
{ name: "Gabi1", tag: "Novo", grad: "linear-gradient(135deg,#f5f5fa,#a4a4b5)", id: "gabi1" },
{ name: "Duo2", tag: "Novo", grad: "linear-gradient(135deg,#4b6bff,#a78bfa)", id: "duo2" },
{ name: "Yaveh", tag: "Novo", grad: "linear-gradient(135deg,#0f766e,#22d3ee)", id: "yaveh" },
{ name: "Star", tag: "Novo", grad: "linear-gradient(135deg,#7c5cff,#22d3ee)", id: "star" }
            ].map((t) => (
              <a href={`/preview/${t.id}`} target="_blank" key={t.name} className="card reveal" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ height: 200, background: t.grad }} />
                <div style={{ padding: 20 }}>
                  <div className="flex justify-between items-center">
                    <h3 className="h-3">{t.name}</h3>
                    <span className="tag">{t.tag}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="pricing" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="text-center reveal" style={{ maxWidth: 680, margin: "0 auto 60px" }}>
            <span className="eyebrow">
              <span className="dot" />
              Planos
            </span>
            <h2 className="h-1 mt-4">Comece grátis. Cresça quando quiser.</h2>
          </div>
          <div className="grid grid-4">
            {[
              { name: "Free", price: "R$ 0", items: ["Templates básicos", "Subdomínio Verticy", "Marca Verticy"] },
              { name: "Starter", price: "R$ 19,90", items: ["Editor completo", "Templates gratuitos", "Sem marca"] },
              { name: "Pro", price: "R$ 29,90", items: ["Templates Premium", "Analytics", "Pixel", "SEO avançado"], hot: true },
              { name: "Business", price: "R$ 49,90", items: ["Tudo do Pro", "Agendamento", "Domínio próprio", "IA + prioridade"] },
            ].map((p) => (
              <div
                key={p.name}
                className={"card reveal" + (p.hot ? " card-glow" : "")}
                style={p.hot ? { borderColor: "rgba(124,92,255,.45)" } : {}}
              >
                {p.hot && <span className="tag brand" style={{ marginBottom: 12 }}>Mais popular</span>}
                <h3 className="h-3">{p.name}</h3>
                <div className="mt-2" style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-.02em" }}>
                  {p.price}
                  <span className="muted" style={{ fontSize: 14, fontWeight: 400 }}>/mês</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "20px 0" }}>
                  {p.items.map((i) => (
                    <li key={i} className="muted" style={{ fontSize: 14, padding: "6px 0" }}>
                      · {i}
                    </li>
                  ))}
                </ul>
                <a
                  href="/entrar.html"
                  className={"btn btn-block " + (p.hot ? "btn-primary" : "btn-ghost")}
                >
                  Começar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div
            className="card reveal text-center"
            style={{ padding: "60px 30px", background: "var(--gradient-soft)" }}
          >
            <h2 className="h-1 gradient-text" style={{ maxWidth: 720, margin: "0 auto" }}>
              Sua próxima página começa agora.
            </h2>
            <p className="lead" style={{ margin: "20px auto 32px" }}>
              Coloque qualquer profissional na internet em menos de cinco minutos.
            </p>
            <a href="/entrar.html" className="btn btn-primary btn-lg">
              Criar meu site grátis →
            </a>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid var(--border)", padding: "40px 20px", textAlign: "center" }}>
        <div className="brand" style={{ justifyContent: "center", marginBottom: 12 }}>
          <span className="brand-mark" />
          <span>Verticy</span>
        </div>
        <p className="muted" style={{ fontSize: 13 }}>
          © {new Date().getFullYear()} Verticy · Feito para quem precisa estar online, hoje.
        </p>
      </footer>
    </>
  );
}
