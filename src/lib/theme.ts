// src/lib/theme.ts
export type Theme = "light" | "dark" | "system";
const STORAGE_KEY = "theme";

export function getStoredTheme(): Theme | null {
  const t = localStorage.getItem(STORAGE_KEY);
  return t === "light" || t === "dark" || t === "system" ? t : null;
}

export function storeTheme(t: Theme) {
  localStorage.setItem(STORAGE_KEY, t);
}

// Wendet das Theme auf <html> an (ohne React-Abhängigkeit)
export function applyTheme(t: Theme) {
  const root = document.documentElement; // <html>
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = t === "dark" || (t === "system" && prefersDark);

  root.classList.toggle("dark", useDark);
}

// Initial anwenden (z. B. im index.html inline möglich, hier aber exportiert)
export function initTheme() {
  const stored = getStoredTheme() ?? "system";
  applyTheme(stored);
}
