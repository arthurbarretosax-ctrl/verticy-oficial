import { ADVOGADO01_DEFAULTS } from "./advogado01-defaults.js";

let currentContent = JSON.parse(JSON.stringify(ADVOGADO01_DEFAULTS));

function initEditor() {
  const tabs = document.querySelectorAll('.ed-nav button');
  tabs.forEach(t => t.addEventListener('click', (e) => {
    tabs.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    document.querySelectorAll('.ed-section').forEach(s => s.classList.remove('active'));
    document.getElementById(e.target.dataset.tab).classList.add('active');
  }));

  // Bind values (Theme)
  ['bg', 'dark', 'greenLight', 'sand', 'gold', 'text'].forEach(k => {
    const el = document.getElementById('theme_' + k);
    if(el) {
      el.value = currentContent.theme.colors[k] || '#000000';
      el.addEventListener('input', (e) => {
        currentContent.theme.colors[k] = e.target.value;
        updatePreview();
      });
    }
  });

  // Bind values (Hero)
  ['tag', 'eyebrow', 'title_part1', 'title_part2', 'quote', 'image_url'].forEach(k => {
    const el = document.getElementById('hero_' + k);
    if(el) {
      el.value = currentContent.hero[k] || '';
      el.addEventListener('input', (e) => {
        currentContent.hero[k] = e.target.value;
        if(k === 'image_url') document.getElementById('hero_img_thumb').style.backgroundImage = `url(${e.target.value})`;
        updatePreview();
      });
    }
  });
  if(currentContent.hero.image_url) document.getElementById('hero_img_thumb').style.backgroundImage = `url(${currentContent.hero.image_url})`;

  // Bind values (Action)
  ['title_pre', 'title_highlight', 'desc', 'btn_label'].forEach(k => {
    const el = document.getElementById('action_' + k);
    if(el) {
      el.value = currentContent.action[k] || '';
      el.addEventListener('input', (e) => {
        currentContent.action[k] = e.target.value;
        updatePreview();
      });
    }
  });
  
  // Bind Contact
  const waEl = document.getElementById('contact_whatsapp');
  if(waEl) {
     waEl.value = currentContent.contact.whatsapp_number || '';
     waEl.addEventListener('input', e => { currentContent.contact.whatsapp_number = e.target.value; updatePreview(); });
  }
}

function updatePreview() {
  const htmlStr = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <script>
    tailwind.config = { theme: { extend: { colors: { ciro: ${JSON.stringify(currentContent.theme.colors)} } } } }
  </script>
  <style>
    body { font-family: 'Plus Jakarta Sans'; background: ${currentContent.theme.colors.bg}; color: ${currentContent.theme.colors.text}; overflow-x: hidden; }
    .font-serif { font-family: 'Playfair Display'; }
    .glass-dark { background: rgba(31,58,46,0.6); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.1); }
    .animate-zoom { animation: slowZoom 20s ease-in-out infinite alternate; }
    @keyframes slowZoom { 0% { transform: scale(1); } 100% { transform: scale(1.08); } }
  </style>
</head>
<body class="selection:bg-ciro-dark selection:text-white pb-0">
  <div class="max-w-md mx-auto min-h-screen relative bg-ciro-bg flex flex-col shadow-2xl">
    
    <!-- Hero -->
    <header class="relative w-full h-[85vh] rounded-b-[3rem] overflow-hidden bg-ciro-dark shadow-xl">
      <img src="${currentContent.hero.image_url}" class="absolute inset-0 w-full h-full object-cover object-top opacity-90 animate-zoom" />
      <div class="absolute inset-0 bg-gradient-to-t from-ciro-dark via-ciro-dark/40 to-transparent"></div>
      
      <div class="absolute top-8 left-6 glass-dark px-4 py-1.5 rounded-full flex items-center gap-2">
        <i data-lucide="scale" class="w-3.5 h-3.5 text-ciro-gold"></i>
        <span class="text-[9px] font-bold uppercase tracking-widest text-white">${currentContent.hero.tag}</span>
      </div>

      <div class="absolute bottom-12 left-0 w-full px-8 text-center text-white">
        <h2 class="text-[10px] text-ciro-gold uppercase tracking-[0.4em] mb-3">${currentContent.hero.eyebrow}</h2>
        <h1 class="text-[4rem] font-serif font-bold leading-[0.9]">${currentContent.hero.title_part1}</h1>
        <h1 class="text-[4rem] font-serif font-bold leading-[0.9] italic">${currentContent.hero.title_part2}</h1>
        <p class="text-[12px] text-white/80 mt-5 font-medium leading-relaxed max-w-[280px] mx-auto border-t border-white/20 pt-4">${currentContent.hero.quote}</p>
      </div>
    </header>

    <!-- Action -->
    <section class="px-6 py-6 relative z-20 -mt-6">
      <div class="bg-ciro-bg/80 backdrop-blur-md rounded-[2rem] p-8 shadow-2xl relative border-t-4 border-ciro-dark flex flex-col items-center text-center">
        <div class="w-14 h-14 rounded-full bg-ciro-dark/5 flex items-center justify-center mb-4">
          <i data-lucide="shield-check" class="w-7 h-7 text-ciro-dark"></i>
        </div>
        <h3 class="font-serif text-2xl text-ciro-dark mb-2 leading-tight">${currentContent.action.title_pre} <br><span class="italic">${currentContent.action.title_highlight}</span></h3>
        <p class="text-[11px] text-ciro-text/70 mb-6">${currentContent.action.desc}</p>
        <button class="w-full bg-ciro-dark text-white py-5 rounded-2xl font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-3">
          <i data-lucide="message-circle" class="w-5 h-5"></i> ${currentContent.action.btn_label}
        </button>
      </div>
    </section>

  </div>
  <script>lucide.createIcons();</script>
</body>
</html>`;
  document.getElementById('site-frame').srcdoc = htmlStr;
}

window.addEventListener('DOMContentLoaded', () => {
  window.Verticy.checkAuth().then(user => {
    if (!user) { window.location.href = '/'; return; }
    window.Verticy.loadSite('advogado01', currentContent).then(data => {
      if (data && data.content) currentContent = data.content;
      initEditor();
      updatePreview();
      document.getElementById('btn-save').addEventListener('click', () => {
        window.Verticy.saveSite('advogado01', currentContent);
      });
    });
  });
});
