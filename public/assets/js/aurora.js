import { supabase, requireProfile, toast } from "/assets/js/verticy.js";

const ctx = await requireProfile();
if (!ctx) throw new Error("no session");
const { session, profile } = ctx;
if (!profile?.onboarding_completed) { window.location.replace("/onboarding.html"); }

document.getElementById("preview-link").href = `${window.location.origin}/${profile.username}`;

const { data: site } = await supabase.from("sites").select("*").eq("user_id", session.user.id).maybeSingle();
if (!site) { toast("Site não encontrado", "error"); throw new Error("no site"); }
if (site.template_id && site.template_id !== "aurora") {
  // redirect if they somehow landed here but have another template
  if (site.template_id === "dentista01") window.location.replace("/editor-dentista01.html");
  else if (site.template_id === "confeitaria01") window.location.replace("/editor-confeitaria01.html");
  else if (site.template_id === "creator01") window.location.replace("/editor-creator01.html");
  else if (site.template_id === "advogado01") window.location.replace("/editor-advogado01.html");
}

let content = site.content || {};
content.hero ||= { title: "", subtitle: "", cta_label: "", cta_href: "#contact" };
content.about ||= { title: "Sobre", body: "" };
content.services ||= { title: "O que ofereço", items: [] };
content.contact ||= { whatsapp: "", instagram: "", email: "" };

const saveState = document.getElementById("save-state");
let dirty = false;
function markDirty() { dirty = true; saveState.textContent = "Alterações pendentes"; saveState.className = "tag"; }
function markClean() { dirty = false; saveState.textContent = "Tudo salvo"; saveState.className = "tag success"; }

function getPath(path) {
  return path.split(".").reduce((o, k) => (o ? o[k] : undefined), content);
}
function setPath(path, val) {
  const keys = path.split(".");
  let o = content;
  for (let i = 0; i < keys.length - 1; i++) { o[keys[i]] ||= {}; o = o[keys[i]]; }
  o[keys[keys.length - 1]] = val;
}
function escapeHtml(s) { return String(s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]); }

/* ---- Tabs ---- */
const tabs = document.querySelectorAll('.ed-nav button');
tabs.forEach(t => t.addEventListener('click', (e) => {
  tabs.forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');
  document.querySelectorAll('.ed-section').forEach(s => s.classList.remove('active'));
  document.getElementById(e.target.dataset.tab).classList.add('active');
}));

/* ---- Inputs ---- */
document.querySelectorAll("[data-field]").forEach(inp => {
  inp.value = getPath(inp.dataset.field) || "";
  inp.addEventListener("input", (e) => {
    setPath(inp.dataset.field, inp.value);
    markDirty();
    updatePreview();
  });
});

/* ---- Services Array ---- */
const svcHost = document.getElementById("services-editor");
function renderServicesEditor() {
  svcHost.innerHTML = "";
  (content.services.items || []).forEach((it, i) => {
    const row = document.createElement("div");
    row.className = "ed-repeat";
    row.innerHTML = `
      <div class="ed-repeat-head"><strong>Serviço ${i+1}</strong> <button class="btn btn-ghost btn-sm" data-remove="${i}">Remover</button></div>
      <div class="field"><label>Título</label><input class="input" value="${escapeHtml(it.title || "")}" data-svc="${i}" data-key="title" /></div>
      <div class="field"><label>Descrição</label><textarea class="textarea textarea-sm" data-svc="${i}" data-key="desc">${escapeHtml(it.desc || "")}</textarea></div>
    `;
    svcHost.appendChild(row);
  });
  svcHost.querySelectorAll("[data-svc]").forEach((inp) => inp.addEventListener("input", () => {
    const i = Number(inp.dataset.svc);
    content.services.items[i][inp.dataset.key] = inp.value;
    markDirty(); updatePreview();
  }));
  svcHost.querySelectorAll("[data-remove]").forEach((b) => b.addEventListener("click", () => {
    content.services.items.splice(Number(b.dataset.remove), 1);
    renderServicesEditor(); markDirty(); updatePreview();
  }));
}
const addServiceBtn = document.getElementById("add-service");
if (addServiceBtn) {
  addServiceBtn.addEventListener("click", () => {
    content.services.items ||= [];
    content.services.items.push({ title: "Novo serviço", desc: "Descrição" });
    renderServicesEditor(); markDirty(); updatePreview();
  });
}

renderServicesEditor();

/* ---- Live Preview ---- */
function initials(name) {
  if (!name) return "";
  const parts = name.split(" ");
  return parts.length > 1 ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase() : parts[0].substring(0, 2).toUpperCase();
}

function updatePreview() {
  const h = content.hero;
  const a = content.about;
  const s = content.services;
  const c = content.contact;
  
  let servicesHtml = "";
  if (s.items && s.items.length > 0) {
    servicesHtml = `
      <section class="site-container" id="services">
        <span class="eyebrow"><span class="dot"></span>Serviços</span>
        <h2 class="h-1 mt-4">${escapeHtml(s.title || "O que ofereço")}</h2>
        <div class="site-services">
          ${s.items.map(it => `
            <div class="card">
              <h3 class="h-3">${escapeHtml(it.title)}</h3>
              <p class="muted mt-2" style="font-size:14px">${escapeHtml(it.desc)}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  let contactHtml = "";
  if (c.whatsapp || c.instagram || c.email) {
    contactHtml = `
      <section class="site-container" id="contact">
        <span class="eyebrow"><span class="dot"></span>Contato</span>
        <h2 class="h-1 mt-4">Vamos falar</h2>
        <div class="flex gap-3 mt-6" style="flex-wrap:wrap">
          ${c.whatsapp ? `<a href="https://wa.me/${escapeHtml(c.whatsapp.replace(/\\D/g,''))}" target="_blank" class="btn btn-primary">WhatsApp</a>` : ""}
          ${c.instagram ? `<a href="https://instagram.com/${escapeHtml(c.instagram.replace('@',''))}" target="_blank" class="btn btn-ghost">Instagram</a>` : ""}
          ${c.email ? `<a href="mailto:${escapeHtml(c.email)}" class="btn btn-ghost">E-mail</a>` : ""}
        </div>
      </section>
    `;
  }

  const htmlStr = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/assets/css/verticy.css" />
  <style>
    body { background: #0c0b10; color: #fff; }
    .site-container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .site-avatar { width:64px; height:64px; border-radius:32px; background:#fff; color:#0c0b10; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:20px; margin-bottom:24px; }
    .gradient-text { background: linear-gradient(135deg, #fff, #8892a6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .site-title { font-size: 40px; font-weight: 700; letter-spacing: -0.04em; line-height: 1.1; }
    .site-sub { font-size: 18px; color: #8892a6; margin-top: 16px; line-height: 1.5; }
    .site-services { display: flex; flex-direction: column; gap: 16px; margin-top: 24px; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 4px; }
  </style>
</head>
<body>
  <div class="mesh-bg"></div>
  <header class="site-hero">
    <div class="site-container">
      <div class="site-avatar">${escapeHtml(initials(profile?.full_name))}</div>
      <h1 class="site-title gradient-text">${escapeHtml(h.title || profile?.full_name)}</h1>
      ${h.subtitle ? `<p class="site-sub">${escapeHtml(h.subtitle)}</p>` : ""}
      ${h.cta_label ? `<div class="mt-6"><a class="btn btn-primary btn-lg" href="${escapeHtml(h.cta_href || '#contact')}">${escapeHtml(h.cta_label)}</a></div>` : ""}
    </div>
  </header>

  ${(a.title || a.body) ? `
    <section class="site-container" id="about">
      <span class="eyebrow"><span class="dot"></span>Sobre</span>
      <h2 class="h-1 mt-4">${escapeHtml(a.title)}</h2>
      ${a.body ? `<p class="lead mt-4" style="white-space:pre-wrap">${escapeHtml(a.body)}</p>` : ""}
    </section>
  ` : ""}

  ${servicesHtml}
  ${contactHtml}

</body>
</html>
  `;
  document.getElementById('site-frame').srcdoc = htmlStr;
}

/* save */
async function save() {
  const btn = document.getElementById("save-btn");
  btn.disabled = true; btn.innerHTML = '<span class="spinner"></span>';
  const { error } = await supabase.from("sites").update({ content, published: true }).eq("user_id", session.user.id);
  btn.disabled = false; btn.textContent = "Salvar";
  if (error) { toast(error.message, "error"); return; }
  markClean(); toast("Salvo", "success");
}
document.getElementById("save-btn").addEventListener("click", save);
document.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === "s") { e.preventDefault(); save(); }
});
window.addEventListener("beforeunload", (e) => { if (dirty) { e.preventDefault(); e.returnValue = ""; } });

updatePreview();
markClean();
