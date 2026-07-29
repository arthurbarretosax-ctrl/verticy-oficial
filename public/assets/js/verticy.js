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
