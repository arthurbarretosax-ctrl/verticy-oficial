import json
import re

def create_editor(template_id, display_name, defaults_var, defaults_file, sections_js, renderers_js, attach_js):
    with open('public/editor-dentista01.html', 'r') as f:
        html = f.read()

    # 1. Title & Header
    html = html.replace('Editor Dentista Premium', f'Editor {display_name}')
    
    # 2. Imports
    html = re.sub(
        r'import \{ DENTISTA01_DEFAULTS \} from "/assets/js/dentista01-defaults\.js";',
        f'import {{ {defaults_var} }} from "{defaults_file}";',
        html
    )

    # 3. Validation
    html = html.replace('site.template_id !== "dentista01"', f'site.template_id !== "{template_id}"')
    
    # 4. Merge
    html = html.replace('DENTISTA01_DEFAULTS', defaults_var)

    # 5. Replace everything between SECTIONS and showTab
    start_marker = 'const SECTIONS = ['
    end_marker = 'showTab("theme");'
    
    # find start
    idx_start = html.find(start_marker)
    
    # find end
    idx_end = html.find(end_marker, idx_start)
    
    if idx_start == -1 or idx_end == -1:
        print("Could not find markers")
        return
        
    replacement = f"""const SECTIONS = {sections_js};

    const nav = document.getElementById("ed-nav");
    SECTIONS.forEach((s, i) => {{
      const b = document.createElement("button");
      b.textContent = s.label;
      b.dataset.tab = s.id;
      if (i === 0) b.classList.add("active");
      b.addEventListener("click", () => showTab(s.id));
      nav.appendChild(b);
    }});

    const body = document.getElementById("ed-body");
    function esc(s) {{ return String(s ?? "").replace(/"/g, "&quot;"); }}
    function txt(s) {{ return String(s ?? "").replace(/[&<>"\']/g, c => ({{ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }}[c])); }}

    function field(label, key, val, opts = {{}}) {{
      const t = opts.type || "text";
      if (t === "textarea") {{
        return `<div class="field"><label>${{label}}</label><textarea class="textarea ${{opts.small ? "textarea-sm" : ""}}" data-key="${{key}}">${{txt(val)}}</textarea></div>`;
      }}
      if (t === "checkbox") {{
        return `<div class="field"><label style="display:flex;align-items:center;gap:8px;cursor:pointer"><input type="checkbox" data-key="${{key}}" ${{val ? "checked" : ""}}/> ${{label}}</label></div>`;
      }}
      return `<div class="field"><label>${{label}}</label><input class="input" type="${{t}}" data-key="${{key}}" value="${{esc(val)}}" placeholder="${{esc(opts.ph||"")}}" /></div>`;
    }}

    function imgField(label, key, val, opts = {{}}) {{
      const suggested = opts.suggested || "";
      const preview = val ? `<img src="${{esc(val)}}" alt=""/>` : "🖼";
      const mobile = opts.mobileKey ? `
        <div class="variant">
          <div class="ed-img-head">
            <label>Versão mobile (opcional)</label>
            <span class="ed-img-hint">${{esc(opts.mobileSuggested || "Ex.: 900×1200 px (retrato)")}}</span>
          </div>
          <div class="ed-img-row">
            <div class="ed-img-thumb" data-thumb="${{opts.mobileKey}}">${{opts.mobileVal ? `<img src="${{esc(opts.mobileVal)}}" alt=""/>` : "📱"}}</div>
            <div class="ed-img-actions">
              <div class="row">
                <label class="btn btn-ghost btn-sm btn-file" data-upload-key="${{opts.mobileKey}}">
                  <input type="file" accept="image/*" />
                  Enviar do dispositivo
                </label>
                <button class="btn btn-ghost btn-sm" type="button" data-clear-key="${{opts.mobileKey}}">Remover</button>
              </div>
              <input class="input input-sm" type="url" data-key="${{opts.mobileKey}}" value="${{esc(opts.mobileVal)}}" placeholder="ou cole uma URL" />
            </div>
          </div>
        </div>` : "";
      return `
        <div class="ed-img">
          <div class="ed-img-head">
            <label>${{label}}</label>
            ${{suggested ? `<span class="ed-img-hint">Sugerido: ${{esc(suggested)}}</span>` : ""}}
          </div>
          <div class="ed-img-row">
            <div class="ed-img-thumb" data-thumb="${{key}}">${{preview}}</div>
            <div class="ed-img-actions">
              <div class="row">
                <label class="btn btn-primary btn-sm btn-file" data-upload-key="${{key}}">
                  <input type="file" accept="image/*" />
                  Escolher do dispositivo
                </label>
                <button class="btn btn-ghost btn-sm" type="button" data-clear-key="${{key}}">Remover</button>
              </div>
              <input class="input input-sm" type="url" data-key="${{key}}" value="${{esc(val)}}" placeholder="ou cole uma URL" />
            </div>
          </div>
          ${{mobile}}
        </div>
      `;
    }}

{renderers_js}

    function showTab(id) {{
      document.querySelectorAll("#ed-nav button").forEach(b => b.classList.toggle("active", b.dataset.tab === id));
      body.innerHTML = renderers[id]();
      attachHandlers(id);
    }}

    function setPath(path, val) {{
      const keys = path.split(".");
      let o = content;
      for (let i = 0; i < keys.length - 1; i++) {{
        const k = keys[i];
        const nextIsIndex = /^\d+$/.test(keys[i+1]);
        if (o[k] === undefined || o[k] === null) o[k] = nextIsIndex ? [] : {{}};
        o = o[k];
      }}
      o[keys[keys.length - 1]] = val;
    }}
    function getPath(path) {{
      const keys = path.split(".");
      let o = content;
      for (const k of keys) {{ if (o == null) return undefined; o = o[k]; }}
      return o;
    }}

    function updateThumb(key, url) {{
      const thumb = body.querySelector(`[data-thumb="${{CSS.escape(key)}}"]`);
      if (!thumb) return;
      thumb.innerHTML = url ? `<img src="${{esc(url)}}" alt=""/>` : (key.includes("mobile") ? "📱" : "🖼");
    }}

    function attachHandlers(id) {{
      body.querySelectorAll("[data-key]").forEach(inp => {{
        inp.addEventListener("input", () => {{
          const v = inp.type === "checkbox" ? inp.checked : inp.value;
          setPath(inp.dataset.key, v);
          if (inp.type === "url") updateThumb(inp.dataset.key, inp.value);
          markDirty();
        }});
      }});

      body.querySelectorAll("[data-upload-key]").forEach(labelEl => {{
        const input = labelEl.querySelector('input[type="file"]');
        if (!input) return;
        input.addEventListener("change", async (e) => {{
          const file = e.target.files?.[0];
          if (!file) return;
          if (file.size > 8 * 1024 * 1024) {{ toast("Imagem maior que 8 MB", "error"); input.value = ""; return; }}
          const key = labelEl.dataset.uploadKey;
          labelEl.classList.add("uploading");
          try {{
            const url = await uploadSiteImage(file, session.user.id);
            setPath(key, url);
            const urlInput = body.querySelector(`input[type="url"][data-key="${{CSS.escape(key)}}"]`);
            if (urlInput) urlInput.value = url;
            updateThumb(key, url);
            markDirty();
            toast("Imagem enviada", "success");
          }} catch (err) {{
            console.error(err);
            toast(err.message || "Falha no upload", "error");
          }} finally {{
            labelEl.classList.remove("uploading");
            input.value = "";
          }}
        }});
      }});

      body.querySelectorAll("[data-clear-key]").forEach(btn => {{
        btn.addEventListener("click", () => {{
          const key = btn.dataset.clearKey;
          setPath(key, "");
          const urlInput = body.querySelector(`input[type="url"][data-key="${{CSS.escape(key)}}"]`);
          if (urlInput) urlInput.value = "";
          updateThumb(key, "");
          markDirty();
        }});
      }});

      const addBtn = (sel, add) => {{ const b = body.querySelector(sel); if (b) b.addEventListener("click", () => {{ add(); markDirty(); showTab(id); }}); }};
      const remBtn = (attr, arrPath) => {{
        body.querySelectorAll(`[${{attr}}]`).forEach(b => b.addEventListener("click", () => {{
          const i = Number(b.getAttribute(attr));
          const parts = arrPath.split(".");
          let o = content; for (const p of parts) o = o[p];
          o.splice(i, 1);
          markDirty(); showTab(id);
        }}));
      }};

{attach_js}
    }}
    showTab("{sections_js.split('id: "')[1].split('"')[0]}");
    """
    
    new_html = html[:idx_start] + replacement + "\n    async function save() {" + html.split('async function save() {')[1]
    
    with open(f'public/editor-{template_id}.html', 'w') as f:
        f.write(new_html)

# --- CONFEITARIA ---
conf_sections = """[
  { id: "branding", label: "Marca" },
  { id: "catalog", label: "Catálogo" },
  { id: "gallery", label: "Galeria" },
  { id: "contact", label: "Contato" },
  { id: "marquee", label: "Faixa Rotativa" }
]"""
conf_renderers = """
    function renderBranding() {
      const b = content.branding;
      return `
        <div class="block-label">Marca</div>
        ${field("Nome", "branding.name", b.name)}
        ${imgField("Logo", "branding.logo_url", b.logo_url)}
        ${field("Localização", "branding.location", b.location)}
        ${field("Slogan", "branding.slogan", b.slogan)}
      `;
    }
    function renderCatalog() {
      const c = content.catalog;
      const items = (c.items || []).map((it, i) => `
        <div class="ed-repeat">
          <div class="ed-repeat-head"><strong>Item ${i+1}</strong><button class="btn btn-ghost btn-sm" data-remove-cat="${i}">Remover</button></div>
          ${field("Categoria", `catalog.items.${i}.category`, it.category)}
          ${field("Título", `catalog.items.${i}.title`, it.title)}
          ${field("Descrição", `catalog.items.${i}.description`, it.description, { type: "textarea" })}
          ${imgField("Imagem", `catalog.items.${i}.image_url`, it.image_url)}
        </div>`).join("");
      return `
        <div class="block-label">Catálogo</div>
        ${field("Título", "catalog.title", c.title)}
        ${field("Subtítulo", "catalog.subtitle", c.subtitle)}
        <div class="block-label" style="margin-top:16px">Itens</div>
        ${items}
        <button class="btn btn-ghost btn-sm btn-block" id="add-cat">+ Adicionar item</button>
      `;
    }
    function renderGallery() {
      const g = content.gallery;
      const imgs = (g.images || []).map((src, i) => `
        <div class="ed-repeat">
          <div class="ed-repeat-head"><strong>Foto ${i+1}</strong><button class="btn btn-ghost btn-sm" data-remove-gal="${i}">Remover</button></div>
          ${imgField("Imagem", `gallery.images.${i}`, src)}
        </div>`).join("");
      return `
        <div class="block-label">Galeria</div>
        ${field("Título", "gallery.title", g.title)}
        ${field("Subtítulo", "gallery.subtitle", g.subtitle)}
        ${imgs}
        <button class="btn btn-ghost btn-sm btn-block" id="add-gal">+ Adicionar foto</button>
      `;
    }
    function renderContact() {
      const c = content.contact;
      return `
        <div class="block-label">Contato</div>
        ${field("Título - Início", "contact.title_pre", c.title_pre)}
        ${field("Título - Destaque", "contact.title_highlight", c.title_highlight)}
        ${field("Subtítulo", "contact.subtitle", c.subtitle)}
        ${field("Botão CTA", "contact.cta_label", c.cta_label)}
        ${field("WhatsApp (só números)", "contact.wa_number", c.wa_number)}
        ${field("Mensagem", "contact.wa_message", c.wa_message, { type: "textarea" })}
      `;
    }
    function renderMarquee() {
      const m = content.marquee || [];
      const items = m.map((txt, i) => `
        <div class="ed-repeat">
          <div class="ed-repeat-head"><strong>Palavra ${i+1}</strong><button class="btn btn-ghost btn-sm" data-remove-mar="${i}">Remover</button></div>
          ${field("Texto", `marquee.${i}`, txt)}
        </div>`).join("");
      return `
        <div class="block-label">Faixa Rotativa</div>
        ${items}
        <button class="btn btn-ghost btn-sm btn-block" id="add-mar">+ Adicionar palavra</button>
      `;
    }
    const renderers = { branding: renderBranding, catalog: renderCatalog, gallery: renderGallery, contact: renderContact, marquee: renderMarquee };
"""
conf_attach = """
      if (id === "catalog") {
        addBtn("#add-cat", () => content.catalog.items.push({ category: "Novo", title: "Item", description: "", image_url: "" }));
        remBtn("data-remove-cat", "catalog.items");
      }
      if (id === "gallery") {
        addBtn("#add-gal", () => content.gallery.images.push(""));
        remBtn("data-remove-gal", "gallery.images");
      }
      if (id === "marquee") {
        addBtn("#add-mar", () => content.marquee.push("Nova palavra"));
        remBtn("data-remove-mar", "marquee");
      }
"""
create_editor('confeitaria01', 'Confeitaria Premium', 'CONFEITARIA01_DEFAULTS', '/assets/js/confeitaria01-defaults.js', conf_sections, conf_renderers, conf_attach)

# --- CREATOR ---
creator_sections = """[
  { id: "hero", label: "Capa" },
  { id: "about", label: "Sobre" },
  { id: "stats", label: "Estatísticas" },
  { id: "projects", label: "Projetos" },
  { id: "measurements", label: "Medidas" },
  { id: "style", label: "Estilo" },
  { id: "contact", label: "Contato" }
]"""
creator_renderers = """
    function renderHero() {
      const h = content.hero;
      return `
        <div class="block-label">Capa</div>
        ${field("Badge", "hero.badge", h.badge)}
        ${imgField("Imagem Principal", "hero.image_url", h.image_url)}
        ${field("Subtítulo", "hero.subtitle", h.subtitle)}
        ${field("Título - Início", "hero.title_pre", h.title_pre)}
        ${field("Título - Destaque", "hero.title_highlight", h.title_highlight)}
        ${field("Descrição", "hero.description", h.description, { type: "textarea" })}
        ${field("Label do Botão", "hero.cta_label", h.cta_label)}
      `;
    }
    function renderAbout() {
      const a = content.about;
      const paras = (a.paragraphs || []).map((p, i) => `
        <div class="ed-repeat">
          <div class="ed-repeat-head"><strong>Parágrafo ${i+1}</strong><button class="btn btn-ghost btn-sm" data-remove-para="${i}">Remover</button></div>
          ${field("Texto", `about.paragraphs.${i}`, p, { type: "textarea" })}
        </div>`).join("");
      const imgs = (a.images || []).map((src, i) => `
        <div class="ed-repeat">
          <div class="ed-repeat-head"><strong>Foto ${i+1}</strong><button class="btn btn-ghost btn-sm" data-remove-img="${i}">Remover</button></div>
          ${imgField("Imagem", `about.images.${i}`, src)}
        </div>`).join("");
      return `
        <div class="block-label">Sobre</div>
        ${field("Eyebrow", "about.eyebrow", a.eyebrow)}
        ${field("Título - Início", "about.title_pre", a.title_pre)}
        ${field("Título - Destaque", "about.title_highlight", a.title_highlight)}
        <div class="block-label" style="margin-top:16px">Fotos</div>
        ${imgs}
        <div class="block-label" style="margin-top:16px">Parágrafos</div>
        ${paras}
        <button class="btn btn-ghost btn-sm btn-block" id="add-para">+ Adicionar parágrafo</button>
      `;
    }
    function renderStats() {
      const s = content.stats;
      return `
        <div class="block-label">Estatísticas</div>
        ${field("Eyebrow", "stats.eyebrow", s.eyebrow)}
        ${field("Título - Início", "stats.title_pre", s.title_pre)}
        ${field("Título - Destaque", "stats.title_highlight", s.title_highlight)}
        ${field("Seguidores", "stats.followers", s.followers)}
        ${field("Alcance (k)", "stats.reach", s.reach)}
        ${field("Formato", "stats.format", s.format)}
        ${field("Público", "stats.audience", s.audience)}
      `;
    }
    function renderProjects() {
      const p = content.projects;
      const items = (p.items || []).map((it, i) => `
        <div class="ed-repeat">
          <div class="ed-repeat-head"><strong>Item ${i+1}</strong><button class="btn btn-ghost btn-sm" data-remove-proj="${i}">Remover</button></div>
          ${field("Título", `projects.items.${i}.title`, it.title)}
          ${field("Descrição", `projects.items.${i}.description`, it.description, { type: "textarea" })}
          ${imgField("Imagem", `projects.items.${i}.image_url`, it.image_url)}
        </div>`).join("");
      return `
        <div class="block-label">Projetos</div>
        ${field("Badge", "projects.badge", p.badge)}
        ${field("Título - Início", "projects.title_pre", p.title_pre)}
        ${field("Título - Destaque", "projects.title_highlight", p.title_highlight)}
        <div class="block-label" style="margin-top:16px">Itens</div>
        ${items}
        <button class="btn btn-ghost btn-sm btn-block" id="add-proj">+ Adicionar projeto</button>
      `;
    }
    function renderMeasurements() {
      const m = content.measurements;
      const items = (m.items || []).map((it, i) => `
        <div class="ed-repeat">
          <div class="ed-repeat-head"><strong>Item ${i+1}</strong><button class="btn btn-ghost btn-sm" data-remove-meas="${i}">Remover</button></div>
          ${field("Rótulo", `measurements.items.${i}.label`, it.label)}
          ${field("Valor", `measurements.items.${i}.value`, it.value)}
        </div>`).join("");
      return `
        <div class="block-label">Medidas</div>
        ${field("Eyebrow", "measurements.eyebrow", m.eyebrow)}
        ${field("Título", "measurements.title", m.title)}
        ${field("Manequim (Badge)", "measurements.mannequin", m.mannequin)}
        ${imgField("Imagem", "measurements.image_url", m.image_url)}
        <div class="block-label" style="margin-top:16px">Itens</div>
        ${items}
        <button class="btn btn-ghost btn-sm btn-block" id="add-meas">+ Adicionar medida</button>
      `;
    }
    function renderStyle() {
      const s = content.style;
      const imgs = (s.images || []).map((src, i) => `
        <div class="ed-repeat">
          <div class="ed-repeat-head"><strong>Foto ${i+1}</strong><button class="btn btn-ghost btn-sm" data-remove-style="${i}">Remover</button></div>
          ${imgField("Imagem", `style.images.${i}`, src)}
        </div>`).join("");
      return `
        <div class="block-label">Estilo</div>
        ${field("Título", "style.title", s.title)}
        ${field("Subtítulo", "style.subtitle", s.subtitle)}
        ${imgs}
        <button class="btn btn-ghost btn-sm btn-block" id="add-style">+ Adicionar foto</button>
      `;
    }
    function renderContact() {
      const c = content.contact;
      return `
        <div class="block-label">Contato</div>
        ${field("Eyebrow", "contact.eyebrow", c.eyebrow)}
        ${field("Título - Início", "contact.title_pre", c.title_pre)}
        ${field("Título - Destaque", "contact.title_highlight", c.title_highlight)}
        ${field("WhatsApp (só números)", "contact.wa_number", c.wa_number)}
        ${field("Mensagem WhatsApp", "contact.wa_message", c.wa_message, { type: "textarea" })}
        ${field("Email", "contact.email", c.email)}
        ${field("Instagram Handle (sem @)", "contact.instagram", c.instagram)}
      `;
    }
    const renderers = { hero: renderHero, about: renderAbout, stats: renderStats, projects: renderProjects, measurements: renderMeasurements, style: renderStyle, contact: renderContact };
"""
creator_attach = """
      if (id === "about") {
        addBtn("#add-para", () => content.about.paragraphs.push(""));
        remBtn("data-remove-para", "about.paragraphs");
      }
      if (id === "projects") {
        addBtn("#add-proj", () => content.projects.items.push({ title: "Novo", description: "", image_url: "" }));
        remBtn("data-remove-proj", "projects.items");
      }
      if (id === "measurements") {
        addBtn("#add-meas", () => content.measurements.items.push({ label: "Nova", value: "" }));
        remBtn("data-remove-meas", "measurements.items");
      }
      if (id === "style") {
        addBtn("#add-style", () => content.style.images.push(""));
        remBtn("data-remove-style", "style.images");
      }
"""
create_editor('creator01', 'Creator Portfolio', 'CREATOR01_DEFAULTS', '/assets/js/creator01-defaults.js', creator_sections, creator_renderers, creator_attach)
