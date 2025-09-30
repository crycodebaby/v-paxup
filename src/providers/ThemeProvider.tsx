// src/providers/ThemeProvider.tsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  applyTheme,
  getStoredTheme,
  storeTheme,
  type Theme,
} from "@/lib/theme";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
};
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(
    () => getStoredTheme() ?? "system"
  );

  useEffect(() => {
    // Beim ersten Render korrekt anwenden (und bei Wechseln)
    applyTheme(theme);
    storeTheme(theme);
  }, [theme]);

  // Reagiert live auf Systemwechsel, falls "system" gewählt ist
  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme("system");
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (t: Theme) => setThemeState(t),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
