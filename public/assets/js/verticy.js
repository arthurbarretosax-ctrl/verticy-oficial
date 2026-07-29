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
  { id: "contabilidade01", cat: "negocios", name: "Contabilidade", desc: "Escritórios, finanças e consultoria", badge: "Premium", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800" },
  { id: "buffet01", cat: "eventos", name: "Buffet & Eventos", desc: "Buffets, festas e casamentos", badge: "Premium", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" },
  { id: "petshop01", cat: "saude", name: "Petshop & Clínica", desc: "Veterinários, banho e tosa", badge: "Premium", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800" },
  { id: "maquiadora01", cat: "beleza", name: "Estúdio de Beleza", desc: "Maquiadoras, salões e estética", badge: "Premium", img: "https://images.unsplash.com/photo-1512496015851-a1cfb38ba1c3?auto=format&fit=crop&q=80&w=800" },
  { id: "psicologo01", cat: "saude", name: "Psicologia & Terapia", desc: "Psicólogos, terapeutas e bem-estar", badge: "Premium", img: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800" },
  { id: "barbearia01", cat: "beleza", name: "Barbearia Clássica", desc: "Barbearias, salões e estética", badge: "Premium", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800" },
  { id: "restaurante01", cat: "alimentacao", name: "Osteria & Restaurante", desc: "Restaurantes, pizzarias e bistrôs", badge: "Premium", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800" },
  { id: "personal01", cat: "fitness", name: "Personal Trainer Elite", desc: "Consultoria fitness e treinos", badge: "Premium", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" },
  { id: "corretor01", cat: "imoveis", name: "Corretor Premium", desc: "Imóveis de alto padrão e luxo", badge: "Premium", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" },
  { id: "arquiteto01", cat: "imoveis", name: "Arquitetura Premium", desc: "Escritórios e design de interiores", badge: "Premium", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" },
  { id: "advogado01", cat: "advocacia", name: "Advocacia Humanizada", desc: "Direito de Família e Sucessões", badge: "Premium", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" },
  { id: "dentista01", cat: "saude", name: "Dentista Premium", desc: "Estética e clínicas", badge: "Premium", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" },
  { id: "medico01", cat: "saude", name: "Clínica Médica", desc: "Médicos e especialistas", badge: "Premium", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" },
  { id: "confeitaria01", cat: "alimentacao", name: "Confeitaria Doce", desc: "Doces e bolos", badge: "Premium", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800" },
  { id: "creator01", cat: "creators", name: "Creator Portfolio", desc: "Mídia kit e links", badge: "Premium", img: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800" },
  { id: "aurora", cat: "sugestoes", name: "Aurora", desc: "Minimalista e elegante", badge: "Essencial", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" }
];
