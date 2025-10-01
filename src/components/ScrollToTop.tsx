// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrollt bei jedem Routenwechsel ganz nach oben.
 * Hash-Links (#abschnitt) werden dennoch respektiert.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Auf Anker scrollen, sobald verfügbar
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      // Fallback: kurz warten und nochmal versuchen
      setTimeout(() => {
        const el2 = document.querySelector(hash);
        if (el2) el2.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
      return;
    }

    // Standard: Seite nach oben
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
