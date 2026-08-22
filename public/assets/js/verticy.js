// Verticy — Supabase client (browser, vanilla JS via CDN ESM)
// Uses the same publishable key exposed to the Vite bundle.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://nzxdhklpkqkczsqtyzsa.supabase.co";
const SUPABASE_KEY = "sb_publishable_GPqSpRSq7om8T4-0BYzW0g_WiHe6pjd";

// Opaque `sb_publishable_*` keys are NOT JWTs — the client's default
// `Authorization: Bearer <key>` header breaks PostgREST. We strip it.
const supabaseFetch = (input, init) => {
  const headers = new Headers(init?.headers || {});
  if (headers.get("Authorization") === `Bearer ${SUPABASE_KEY}`) {
    headers.delete("Authorization");
  }
  headers.set("apikey", SUPABASE_KEY);
  return fetch(input, { ...init, headers });
};

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, storage: window.localStorage },
  global: { fetch: supabaseFetch },
});

/* -------------------- helpers -------------------- */

export function toast(message, kind = "info") {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.remove("error", "success");
  if (kind === "error") el.classList.add("error");
  if (kind === "success") el.classList.add("success");
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), 2800);
}

export async function requireSession(redirectTo = "/entrar.html") {
  const { data } = await supabase.auth.getSession();
  if (!data.session) {
    window.location.replace(redirectTo);
    return null;
  }
  return data.session;
}

export async function requireProfile() {
  const session = await requireSession();
  if (!session) return null;
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", session.user.id)
    .maybeSingle();
  if (error) console.error(error);
  return { session, profile };
}

export function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map((s) => s[0]?.toUpperCase() || "").join("") || "V";
}

/* Upload image to site-assets bucket, returns a long-lived signed URL */
export async function uploadSiteImage(file, userId) {
  if (!file || !userId) throw new Error("Arquivo ou usuário inválido");
  const ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
  const id = (crypto?.randomUUID && crypto.randomUUID()) || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const path = `${userId}/${id}.${ext}`;
  const { error } = await supabase.storage.from("site-assets").upload(path, file, {
    cacheControl: "31536000",
    upsert: false,
    contentType: file.type || undefined,
  });
  if (error) throw error;
  // 10-year signed URL — usable publicly for site rendering
  const { data, error: signErr } = await supabase.storage
    .from("site-assets")
    .createSignedUrl(path, 60 * 60 * 24 * 365 * 10);
  if (signErr) throw signErr;
  return data.signedUrl;
}

/* Reveal on scroll (progressive enhancement) */
export function initReveal() {
  if (typeof IntersectionObserver === "undefined") return;
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
}

export const TEMPLATES = [
  { id: "contabilidade01", cat: "negocios", name: "Contabilidade", desc: "Escritórios, finanças e consultoria", badge: "Premium", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" },
  { id: "buffet01", cat: "eventos", name: "Buffet & Eventos", desc: "Buffets, festas e casamentos", badge: "Premium", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" },
  { id: "petshop01", cat: "saude", name: "Petshop & Clínica", desc: "Veterinários, banho e tosa", badge: "Premium", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800" },
  { id: "maquiadora01", cat: "beleza", name: "Estúdio de Beleza", desc: "Maquiadoras, salões e estética", badge: "Premium", img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800" },
  { id: "psicologo01", cat: "saude", name: "Psicologia & Terapia", desc: "Psicólogos, terapeutas e bem-estar", badge: "Premium", img: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800" },
  { id: "barbearia01", cat: "beleza", name: "Barbearia Clássica", desc: "Barbearias, salões e estética", badge: "Premium", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800" },
  { id: "restaurante01", cat: "alimentacao", name: "Restaurante & Lanchonete", desc: "Restaurantes, pizzarias e bistrôs", badge: "Premium", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800" },
  { id: "personal01", cat: "fitness", name: "Personal Trainer Elite", desc: "Consultoria fitness e treinos", badge: "Premium", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" },
  { id: "corretor01", cat: "imoveis", name: "Corretor Premium", desc: "Imóveis de alto padrão e luxo", badge: "Premium", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" },
  { id: "arquiteto01", cat: "imoveis", name: "Arquitetura Premium", desc: "Escritórios e design de interiores", badge: "Premium", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" },
  { id: "advogado01", cat: "advocacia", name: "Advocacia Humanizada", desc: "Direito de Família e Sucessões", badge: "Premium", img: "https://images.unsplash.com/photo-1714974528737-3e6c7e4d11af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3eWVyJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: "dentista01", cat: "saude", name: "Dentista Premium", desc: "Estética e clínicas", badge: "Premium", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" },
  { id: "medico01", cat: "saude", name: "Clínica Médica", desc: "Médicos e especialistas", badge: "Premium", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" },
  { id: "confeitaria01", cat: "alimentacao", name: "Confeitaria Doce", desc: "Doces e bolos", badge: "Premium", img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=800" },
  { id: "creator01", cat: "creators", name: "Creator Portfolio", desc: "Mídia kit e links", badge: "Premium", img: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80&w=800" },
  { id: "luanaforadoar", cat: "novos", name: "Luanaforadoar", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "draandrezza", cat: "novos", name: "Draandrezza", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "duo", cat: "novos", name: "Duo", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "zisa", cat: "novos", name: "Zisa", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "denis", cat: "novos", name: "Denis", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "jt", cat: "novos", name: "Jt", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "hortela", cat: "novos", name: "Hortela", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "hortela2", cat: "novos", name: "Hortela2", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "laviniapsi", cat: "novos", name: "Laviniapsi", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "dayforadoar", cat: "novos", name: "Dayforadoar", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "taistorymaker", cat: "novos", name: "Taistorymaker", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "francianefurohumanizado2", cat: "novos", name: "Francianefurohumanizado2", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "gabi1", cat: "novos", name: "Gabi1", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "dudu", cat: "novos", name: "Dudu", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "cristianapsi2", cat: "novos", name: "Cristianapsi2", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "wilian", cat: "novos", name: "Wilian", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "draraisabastos", cat: "novos", name: "Draraisabastos", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "yaveh2", cat: "novos", name: "Yaveh2", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "star", cat: "novos", name: "Star", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "manuel", cat: "novos", name: "Manuel", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "dramirella", cat: "novos", name: "Dramirella", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "ilgner", cat: "novos", name: "Ilgner", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "duo2", cat: "novos", name: "Duo2", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "ilgner2", cat: "novos", name: "Ilgner2", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "cristianapsi", cat: "novos", name: "Cristianapsi", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "loyola", cat: "novos", name: "Loyola", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "amandex", cat: "novos", name: "Amandex", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "yaveh", cat: "novos", name: "Yaveh", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "laylapsi", cat: "novos", name: "Laylapsi", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "tai", cat: "novos", name: "Tai", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
  { id: "ignosforadoar", cat: "novos", name: "Ignosforadoar", desc: "Novo template", badge: "Novo", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" }

];
export { DENTISTA01_DEFAULTS } from "./dentista01-defaults.js";
